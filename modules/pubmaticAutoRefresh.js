// This module will work with GPT only.
// The module will refresh the GPT ad-slots as per the given config.

import { config } from '../src/config.js';
import * as events from '../src/events.js';
import { EVENTS } from '../src/constants.json';
import { mergeDeep, logMessage, logWarn, pick, timestamp, isFn, isArray } from '../src/utils.js';
import { getGlobal } from '../src/prebidGlobal.js';
import find from 'core-js-pure/features/array/find.js';

const MODULE_NAME = 'pubmaticAutoRefresh';

let pbjsAuctionTimeoutFromLastAuction;
let beforeRequestBidsHandlerAdded = false;

// Todo

// move strings (key names) to local consts
// review the all logs, remove unnecessary ones
// logMessage vs logInfo vs logWarn

// few new fields in DS
  // hasCounterStarted true / false 
    // do not restart counter if already started;
    // reset the flag after display creative
  // add counterStartedAt timestamp() for comparison than using lastRenderedAt

// case: Refresh all GPT ad-slots after it is viewed by user, refresh after 30 seconds irrespective of current viewability  
  // startCountdownWithMinimumViewabilityPercentage: 50
  // refreshAdSlotWithMinimumViewabilityPercentage: 0

// case: Refresh all GPT ad-slots after it is viewed by user, refresh after 30 seconds but when GPT ad-slot is in view
  // startCountdownWithMinimumViewabilityPercentage: 50
  // refreshAdSlotWithMinimumViewabilityPercentage: 50

let DEFAULT_CONFIG = {

  enabled: false,

  // how many times we should refresh the ad-gptSlot after it is rendered
  maximumRefreshCount: 999,

  // delay in ms after which the gptSlot to refresh
  countdownDuration: 10000,

  // countdown to refresh will start when rendered creative has visbibility more(or equal) than this
  startCountdownWithMinimumViewabilityPercentage: 50,

  // set it to 0 to refresh all gptSlots w/o visibility percentage check
  refreshAdSlotWithMinimumViewabilityPercentage: 50,

  // this key will be added on gptSlot with kvValueForRefresh value; set it to null to not set it
  kvKeyForRefresh: 'autorefresh',

  // this value will be added for the key kvKeyForRefresh on the gptSlot
  kvValueForRefresh: '1',

  // this key will be added on the gptSlot and its value will be the refresh count; set it to null to not set it
  kvKeyForRefreshCount: 'autorefreshcount',

  // a function; the default callback function
  callbackFunction: function(gptSlotName, gptSlot, pbjsAdUnit, KeyValuePairs) {

    //todo: pick only required fields from the pbjsAdUnit

    logMessage(MODULE_NAME, 'time to refresh', gptSlotName, gptSlot, pbjsAdUnit);

    // set the key-value pairs for auto-refresh functionality
    Object.keys(KeyValuePairs).forEach(key => gptSlot.setTargeting(key, KeyValuePairs[key]));

    let adServerInitiated = false;

    let initAdServer = function() {
      if (adServerInitiated === true) {
        logMessage(MODULE_NAME, 'initAdServer already called for', gptSlotName);
        return;
      }
      adServerInitiated = true;
      logMessage(MODULE_NAME, 'refreshing GPT slot', gptSlotName);
      window.googletag.pubads().refresh([gptSlot]);
    }

    getGlobal().requestBids({
      timeout: pbjsAuctionTimeoutFromLastAuction,
      adUnits: [pbjsAdUnit],
      bidsBackHandler: function() {
        logMessage(MODULE_NAME, 'In bidsBackHandler for', gptSlotName);
        initAdServer();
      }
    });

    // to make sure we call initAdServer even when PrebidJS fails to execute bidsBackHandler
    setTimeout(initAdServer, pbjsAuctionTimeoutFromLastAuction + 100)
  },

  // a function; if you are using customConfig for some gptSlots then we need a way to find name of the gptSlot in customConfig
  slotIdFunctionForCustomConfig: function(gptSlot) {
    return gptSlot.getSlotElementId();
  },

  // a function; this function will help find the GPT gptSlots matching PBJS AdUnit
  gptSlotToPbjsAdUnitMapFunction: function(gptSlotName, gptSlot, pbjsAU) {
    return (gptSlot.getAdUnitPath() === pbjsAU.code || gptSlot.getSlotElementId() === pbjsAU.code)
  },

  // a function; if the following function returns true then we will ignore the gptSlot and not try to refresh it
  excludeCallbackFunction: function(gptSlotName, gptSlot) { // todo: chnage name?
    // first check if gptSlotName is present in CONFIG.excludeSlotIds array
    if (isArray(CONFIG.excludeSlotIds) && CONFIG.excludeSlotIds.indexOf(gptSlotName) !== -1) {
      logMessage(MODULE_NAME, 'Excluding ', gptSlotName, 'as per CONFIG.excludeSlotIds,', CONFIG.excludeSlotIds);
      return true;
    }

    if (isArray(CONFIG.excludeSizes)) {
      const gptSlotSizes = gptSlot.getSizes(window.innerWidth, window.innerHeight).map(e => e.width + 'x' + e.height);
      const found = gptSlotSizes.some(size => CONFIG.excludeSizes.indexOf(size) !== -1);
      if (found === true) {
        logMessage(MODULE_NAME, 'Excluding ', gptSlotName, 'with sizes,', gptSlotSizes, 'as per CONFIG.excludeSizes,', CONFIG.excludeSizes);
        return true;
      }
    }

    return false;
  },

  // an array; in excludeCallbackFunction we will look into this array for gptSlotId if found then the gptSlot will be ignored
  excludeSlotIds: undefined,

  // an array; in excludeCallbackFunction we will look into this array for gptSlot size WxH (300x250) if found then the gptSlot will be ignored
  excludeSizes: undefined,

  // an object of objects;
  customConfig: undefined // will be an object for custom logic per gptSlot
};

let DEFAULT_SLOT_CONFIG = {}; // this will be set from the CONFIG

// this object will hold the run-time config to be used after merging input-config and default-config
let CONFIG = {};

let DataStore = {};

function getSlotLevelConfig(gptSlotName) {
  if (CONFIG.customConfig === undefined) {
    return DEFAULT_SLOT_CONFIG;
  }

  if (isFn(CONFIG.customConfig.hasOwnProperty) === false) {
    return DEFAULT_SLOT_CONFIG;
  }

  if (CONFIG.customConfig.hasOwnProperty(gptSlotName) === false) {
    return DEFAULT_SLOT_CONFIG;
  }

  return mergeDeep({}, DEFAULT_SLOT_CONFIG, CONFIG.customConfig[gptSlotName])
}

function createDefaultDbEntry() {
  return {
    lastRenderedAt: timestamp(),
    lastVisibilityChangedAt: -1,
    renderedCount: 0,
    inViewPercentage: 0,
    refreshRequested: false
  };
}

function getDataStoreEntry(gptSlotName) {
  let dsEntry = DataStore[gptSlotName] || null;
  if (dsEntry === null) {
    logMessage(MODULE_NAME, 'DataStore entry not found for', gptSlotName);
  }
  return dsEntry
}

function refreshSlotIfNeeded(gptSlotName, gptSlot, dsEntry, slotConf) {
  if (dsEntry === null) {
    logMessage(MODULE_NAME, gptSlotName, ': not refreshing since the gptSlot details are not found in local db');
    return
  }

  if (dsEntry['inViewPercentage'] < slotConf.refreshAdSlotWithMinimumViewabilityPercentage) {
    logMessage(MODULE_NAME, gptSlotName, ': not refreshing since the inViewPercentage is less than default minimum view percentage');
    return
  }

  if (timestamp() - dsEntry['counterStartedAt'] < (slotConf.countdownDuration)) {
    logMessage(MODULE_NAME, gptSlotName, ': not refreshing since the countdownDuration is not reached.');
    return
  }

  if (dsEntry['refreshRequested'] === true) {
    logMessage(MODULE_NAME, gptSlotName, ': not refreshing since the gptSlot refresh request is in progress');
    return
  }

  // find the pbjsAdUnit and pass it
  let pbjsAdUnit = find(getGlobal().adUnits,
    pbjsAU => slotConf.gptSlotToPbjsAdUnitMapFunction(gptSlotName, gptSlot, pbjsAU)
  ) || null;

  if (pbjsAdUnit === null) {
    logMessage(MODULE_NAME, gptSlotName, ': not refreshing since the matching pbjsAdUnit was not found');
    return;
  }

  // generate KVs to be added for auto-refresh functionality
  let KeyValuePairs = {};
  KeyValuePairs[slotConf['kvKeyForRefresh']] = slotConf['kvValueForRefresh'];
  KeyValuePairs[slotConf['kvKeyForRefreshCount']] = dsEntry['renderedCount']; // this is the Nth refresh

  dsEntry['refreshRequested'] = true;

  slotConf.callbackFunction(gptSlotName, gptSlot, pbjsAdUnit, KeyValuePairs);
}

function isGptSlotMaxRefreshCountReached(gptSlotName, currentRenderedCount, confMaxRefreshCount) {
  if (currentRenderedCount >= (confMaxRefreshCount + 1)) {
    return true;
  }
  return false;
}

function gptSlotRenderEndedHandler(event) {
  // todo: do we need a special handeling for an empty creative?

  let gptSlot = event.slot;
  const gptSlotName = CONFIG.slotIdFunctionForCustomConfig(gptSlot);

  if (isFn(CONFIG.excludeCallbackFunction) && CONFIG.excludeCallbackFunction(gptSlotName, gptSlot) === true) {
    logMessage(MODULE_NAME, 'Excluding the gptSlotName', gptSlotName, 'from auto-refreshing as per config.excludeCallbackFunction. gptSlot:', gptSlot);
    return;
  }

  DataStore[gptSlotName] = DataStore[gptSlotName] || createDefaultDbEntry();
  DataStore[gptSlotName]['lastRenderedAt'] = timestamp();
  DataStore[gptSlotName]['renderedCount']++;
  DataStore[gptSlotName]['inViewPercentage'] = 0;
  DataStore[gptSlotName]['refreshRequested'] = false;
  DataStore[gptSlotName]['hasCounterStarted'] = false;
  DataStore[gptSlotName]['counterStartedAt'] = -1;

  const slotConf = getSlotLevelConfig(gptSlotName);

  if (isGptSlotMaxRefreshCountReached(gptSlotName, DataStore[gptSlotName]['renderedCount'], slotConf.maximumRefreshCount) === true) {
    return;
  }

  if(slotConf.startCountdownWithMinimumViewabilityPercentage === 0){
    DataStore[gptSlotName]['hasCounterStarted'] = true;
    DataStore[gptSlotName]['counterStartedAt'] = timestamp();
    logMessage(MODULE_NAME, 'started the countdown to refresh slot', gptSlotName);
    setTimeout(function() {
      refreshSlotIfNeeded(gptSlotName, gptSlot, DataStore[gptSlotName], slotConf);
    }, slotConf.countdownDuration);
  }
}

function gptSlotVisibilityChangedHandler(event) {
  var gptSlot = event.slot;
  const gptSlotName = CONFIG.slotIdFunctionForCustomConfig(gptSlot);

  if (isFn(CONFIG.excludeCallbackFunction) && CONFIG.excludeCallbackFunction(gptSlotName, gptSlot) === true) {
    logMessage(MODULE_NAME, 'Excluding the gptSlotName', gptSlotName, ' from logging viewability change as per config.excludeCallbackFunction. gptSlot:', gptSlot);
    return;
  }

  let dsEntry = getDataStoreEntry(gptSlotName);
  if (dsEntry === null) {
    return
  }

  dsEntry['inViewPercentage'] = event.inViewPercentage;
  dsEntry['lastVisibilityChangedAt'] = timestamp();

  const slotConf = getSlotLevelConfig(gptSlotName);

  if (isGptSlotMaxRefreshCountReached(gptSlotName, dsEntry['renderedCount'], slotConf.maximumRefreshCount) === true) {
    return;
  }

  if(dsEntry['hasCounterStarted'] === false){
    if(slotConf.startCountdownWithMinimumViewabilityPercentage <= dsEntry['inViewPercentage']){
      DataStore[gptSlotName]['hasCounterStarted'] = true;
      DataStore[gptSlotName]['counterStartedAt'] = timestamp();
      logMessage(MODULE_NAME, 'started the countdown to refresh slot', gptSlotName);
      setTimeout(function() {
        refreshSlotIfNeeded(gptSlotName, gptSlot, DataStore[gptSlotName], slotConf);
      }, slotConf.countdownDuration);
    }
  } else {
    refreshSlotIfNeeded(gptSlotName, gptSlot, dsEntry, slotConf);
  }  
}

function applyModuleConfig(){
  // CONFIG = DEFAULT_CONFIG + Provided module config (higher priority)
  mergeDeep(CONFIG, DEFAULT_CONFIG, config.getConfig(MODULE_NAME) || {});
}

function setDefaultSlotConfig(){
  // Generate default slot config that will be applied if customConfig for a GPT slot is not found
  DEFAULT_SLOT_CONFIG = pick(CONFIG, [
    'countdownDuration',
    'startCountdownWithMinimumViewabilityPercentage',
    'refreshAdSlotWithMinimumViewabilityPercentage',
    'maximumRefreshCount',
    'kvKeyForRefresh',
    'kvValueForRefresh',
    'kvKeyForRefreshCount',
    'callbackFunction',
    'gptSlotToPbjsAdUnitMapFunction'
  ]);
}

function init() {
  if (beforeRequestBidsHandlerAdded === true) {
    // BEFORE_REQUEST_BIDS event listener already added, no need to add again
    return;
  }
  beforeRequestBidsHandlerAdded = true;

  applyModuleConfig();

  if (CONFIG.enabled === true) {
    setDefaultSlotConfig();
    logMessage(MODULE_NAME, ' applicable Config is :', CONFIG);
    logMessage(MODULE_NAME, ' applicable DEFAULT_SLOT_CONFIG is :', DEFAULT_SLOT_CONFIG);

    // Add GPT event listeners
    window.googletag = window.googletag || {cmd: []};
    window.googletag.cmd.push(function() {
      window.googletag.pubads().addEventListener('slotRenderEnded', gptSlotRenderEndedHandler);
      window.googletag.pubads().addEventListener('slotVisibilityChanged', gptSlotVisibilityChangedHandler);
    });
  } else {
    logWarn(MODULE_NAME, 'is included but not enbaled.');
  }
}

events.on(EVENTS.BEFORE_REQUEST_BIDS, init);
events.on(EVENTS.AUCTION_INIT, () => { pbjsAuctionTimeoutFromLastAuction = arguments[0].timeout });

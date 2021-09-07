// This module will work with GPT only. It will refresh the ad-slots as per the given config.

import { config } from '../src/config.js';
import * as events from '../src/events.js';
import { EVENTS } from '../src/constants.json';
import { mergeDeep, logMessage, logWarn, pick, timestamp, isFn } from '../src/utils.js';
import { getGlobal } from '../src/prebidGlobal.js';
import find from 'core-js-pure/features/array/find.js';
const MODULE_NAME = 'pubmaticAutoRefresh';
let pbjsAuctionTimeoutFromLastAuction;
let BEFORE_REQUEST_BIDS_HANDLER_ADDED = false;
// Todo

/*
	{
		refreshDelay: 30,
		minimumViewPercentage: 70,
		maximumRefreshCount: 3,
		callbackFunction: function() // default: init pbjs auction and init GPT auction

		slotIdFunction: function(slot) {} // default value is return slot.getSlotElementId();

		excludeCallbackFunction: function() if function returns true that means we exclude this slot from refresh functionality
		excludeSlotIds: ['haa-haa-haaa', 'bla-bla'],
		excludeSizes: ['300x250', '720x90'],			
		
		customConfig: {
			'slot-id-1': {
				refreshDelay: 10,
				minimumViewPercentage
				maximumRefreshCount: 5,	
				kvKeyForRefresh: 'autorefresh_ed',
				kvValueForRefresh: '100',
				kvKeyForRefreshCount: 'auto_refresh_count',
				callbackFunction: customFunction()
			}
		}
	}
*/

// TEST slot-level-config related changes

// TEST excludeCallbackFunction check

// implement proper callback with pbjs and gpt with fail-safe

// move strings (key names) to local consts

// on viewability chnage if slot is already refreshed N times then do not add log saying "already rendered N times"

// review the all logs

// logMessage vs logInfo vs logWarn, add prefix of modulename from a coomon function :p

// Remove excludeSlotIds and excludeSizes? Yes better to implement the function with own priorities;  mention in confluence doc!


let DEFAULT_CONFIG = {

	enabled: false,
	
	// delay in ms after which the gptSlot to refresh
	refreshDelay: 30000,

	// how many times we should refresh the ad-gptSlot after it is rendered
	maximumRefreshCount: 3,
	
	// set it to 0 to refresh all gptSlots w/o visibility percentage check
	minimumViewPercentage: 70,

	// this key will be added on gptSlot with kvValueForRefresh value; set it to null to not set it
	kvKeyForRefresh: 'autorefresh',

	// this value will be added for the key kvKeyForRefresh on the gptSlot
	kvValueForRefresh: '1',

	// this key will be added on the gptSlot and its value will be the refresh count; set it to null to not set it
	kvKeyForRefreshCount: 'autorefreshcount',

	// a function; the default callback function
	callbackFunction: function(gptSlotName, gptSlot, pbjsAdUnit, KeyValuePairs){
		logMessage('time to refresh', gptSlotName, gptSlot, pbjsAdUnit);
		// set the key-value pairs for auto-refresh functionality
		Object.keys(KeyValuePairs).forEach(key => gptSlot.setTargeting(key, KeyValuePairs[key]));


		getGlobal().requestBids({
			timeout: pbjsAuctionTimeoutFromLastAuction,
			adUnits: [pbjsAdUnit],
			bidsBackHandler: function(){
				// refreshing the GPT slot
				logMessage(MODULE_NAME, 'in bidsBackHandler... refreshing GPT slot', gptSlotName);
				window.googletag.pubads().refresh([gptSlot]);
			}
		});

		//todo: need to implent a failsafe approach to handle failure of pbjs
	},

	// a function; if you are using customConfig for some gptSlots then we need a way to find name of the gptSlot in customConfig
	slotIdFunctionForCustomConfig: function(gptSlot){
		return gptSlot.getSlotElementId();
	},

	// a function; this function will help find the GPT gptSlots matching PBJS AdUnit
	gptSlotToPbjsAdUnitMapFunction: function(gptSlotName, gptSlot, pbjsAU){
		return(gptSlot.getAdUnitPath() === pbjsAU.code || gptSlot.getSlotElementId() === pbjsAU.code)
	},

	// a function; if the following function returns true then we will ignore the gptSlot and not try to refresh it
	excludeCallbackFunction: function(gptSlot){ //todo: chnage name?
		return false;
	},

	// an array; if excludeCallbackFunction is not set then we will look into this array for gptSlotId if found then the gptSlot will be ignored
	excludeSlotIds: undefined,

	// an array; if excludeCallbackFunction is not set then we will look into this array for gptSlot size WxH (300x250) if found then the gptSlot will be ignored
	excludeSizes: undefined,

	// an object of objects; 
	customConfig: undefined // will be an object for custom logic per gptSlot
};

let DEFAULT_SLOT_CONFIG = {}; // this will be set from the CONFIG

// this object will hold the run-time config to be used after merging input-config and default-config
let CONFIG = {};

let DataStore = {};

function getSlotLevelConfig(gptSlotName){

	if(CONFIG.customConfig === undefined){
		return DEFAULT_SLOT_CONFIG;
	}

	if(isFn(CONFIG.customConfig.hasOwnProperty) === false){
		return DEFAULT_SLOT_CONFIG;
	}

	if(CONFIG.customConfig.hasOwnProperty(gptSlotName) === false){
		return DEFAULT_SLOT_CONFIG;
	}

	return mergeDeep({}, DEFAULT_SLOT_CONFIG, CONFIG.customConfig[gptSlotName])
}

function createDefaultDbEntry(){
	return {
		lastRenderedAt: timestamp(),
		renderedCount: 0,
		inViewPercentage: 0,
		refreshRequested: false
	};
}

function getDataStoreEntry(gptSlotName) {
	let dsEntry = DataStore[gptSlotName] || null;
	if(dsEntry === null){
		logMessage('DataStore entry not found for', gptSlotName);			
	}
	return dsEntry
}

function refreshSlotIfNeeded(gptSlotName, gptSlot){
	const slotConf = getSlotLevelConfig(gptSlotName);
	let dsEntry = getDataStoreEntry(gptSlotName);
	if(dsEntry === null){
		logMessage(gptSlotName, ': not refreshing since the gptSlot details are not found in local db');
		return
	}

	if( dsEntry['renderedCount'] >= (slotConf.maximumRefreshCount+1) ){
		logMessage(gptSlotName, ': not refreshing since the gptSlot is already renderd', dsEntry['renderedCount'], 'times');
		return
	}

	if(dsEntry['inViewPercentage'] < slotConf.minimumViewPercentage ){
		logMessage(gptSlotName, ': not refreshing since the inViewPercentage is less than default minimum view percentage');
		return
	}

	if( timestamp() - dsEntry['lastRenderedAt'] < (slotConf.refreshDelay) ){
		logMessage(gptSlotName, ': not refreshing since the gptSlot was rendered recently');
		return
	}

	if( dsEntry['refreshRequested'] === true ){
		logMessage(gptSlotName, ': not refreshing since the gptSlot refresh request is in progress');
		return
	}

	// find the pbjsAdUnit and pass it
	let pbjsAdUnit = find(getGlobal().adUnits,
	    pbjsAU => slotConf.gptSlotToPbjsAdUnitMapFunction(gptSlotName, gptSlot, pbjsAU)
	) || null;
	
	if(pbjsAdUnit === null){
		logMessage(gptSlotName, ': not refreshing since the matching pbjsAdUnit was not found');
		return;
	}

	// generate KVs to be added for auto-refresh functionality
	let KeyValuePairs = {};
	KeyValuePairs[slotConf['kvKeyForRefresh']] = slotConf['kvValueForRefresh'];
	KeyValuePairs[slotConf['kvKeyForRefreshCount']] = dsEntry['renderedCount']; // this is the Nth refresh
	
	dsEntry['refreshRequested'] = true;

	slotConf.callbackFunction(gptSlotName, gptSlot, pbjsAdUnit, KeyValuePairs);
}

function gptSlotRenderEndedHandler(event) {
	// todo: do we need a special handeling for an empty creative?
	let gptSlot = event.slot;
	const gptSlotName = CONFIG.slotIdFunctionForCustomConfig(gptSlot);

	if(isFn(CONFIG.excludeCallbackFunction) && CONFIG.excludeCallbackFunction(gptSlotName, gptSlot) === true){
		logMessage('Excluding the gptSlotName', gptSlotName, ' from auto-refreshing as per config.excludeCallbackFunction. gptSlot:', gptSlot);
		return;
	}

	const slotConf = getSlotLevelConfig(gptSlotName);

	DataStore[gptSlotName] = DataStore[gptSlotName] || createDefaultDbEntry();
	DataStore[gptSlotName]['lastRenderedAt'] = timestamp();
	DataStore[gptSlotName]['renderedCount']++;
	DataStore[gptSlotName]['inViewPercentage'] = 0;
	DataStore[gptSlotName]['refreshRequested'] = false;

	logMessage('Slot', gptSlotName, 'finished rendering.');

	setTimeout(function(gptSlotName, gptSlot){
		logMessage('after setTimeout', gptSlotName);
		refreshSlotIfNeeded(gptSlotName, gptSlot);
	}, slotConf.refreshDelay, gptSlotName, gptSlot);
}

function gptSlotVisibilityChangedHandler(event) {
	var gptSlot = event.slot;
	const gptSlotName = CONFIG.slotIdFunctionForCustomConfig(gptSlot);

	if(isFn(CONFIG.excludeCallbackFunction) && CONFIG.excludeCallbackFunction(gptSlotName, gptSlot) === true){
		logMessage('Excluding the gptSlotName', gptSlotName, ' from logging viewability change as per config.excludeCallbackFunction. gptSlot:', gptSlot);
		return;
	}

	let dsEntry = getDataStoreEntry(gptSlotName);
	if(dsEntry === null){
		return
	}
	dsEntry['inViewPercentage'] = event.inViewPercentage;
	logMessage('Visibility of gptSlot', gptSlotName, 'changed.', 'Visible area:', event.inViewPercentage + '%');
	refreshSlotIfNeeded(gptSlotName, gptSlot);
}

function init(){

	if(BEFORE_REQUEST_BIDS_HANDLER_ADDED === true){
		logMessage(MODULE_NAME, 'BEFORE_REQUEST_BIDS event listener already added, no need to add again');
		return;
	}

	BEFORE_REQUEST_BIDS_HANDLER_ADDED = true;

	logMessage(MODULE_NAME, 'BEFORE_REQUEST_BIDS', arguments);
	mergeDeep(CONFIG, DEFAULT_CONFIG, config.getConfig(MODULE_NAME) || {});
	if(CONFIG.enabled === true){
		DEFAULT_SLOT_CONFIG = pick(CONFIG, [
			'refreshDelay',
			'minimumViewPercentage',
			'maximumRefreshCount',	
			'kvKeyForRefresh',
			'kvValueForRefresh',
			'kvKeyForRefreshCount',
			'callbackFunction',
			'gptSlotToPbjsAdUnitMapFunction'
		]);
		logMessage(MODULE_NAME, ' applicable Config is :', CONFIG);
		logMessage(MODULE_NAME, ' applicable DEFAULT_SLOT_CONFIG is :', DEFAULT_SLOT_CONFIG);
		window.googletag = window.googletag || {cmd: []};
		googletag.cmd.push(function() {
			googletag.pubads().addEventListener('slotRenderEnded', gptSlotRenderEndedHandler);
			googletag.pubads().addEventListener('slotVisibilityChanged', gptSlotVisibilityChangedHandler);
		});
	}else{
		logWarn(MODULE_NAME, 'is included but not enbaled.');
	}
}

events.on(EVENTS.BEFORE_REQUEST_BIDS, init);
events.on(EVENTS.AUCTION_INIT, function(){
	logMessage(MODULE_NAME, 'AUCTION_INIT', arguments);
	pbjsAuctionTimeoutFromLastAuction = arguments[0].timeout;
});

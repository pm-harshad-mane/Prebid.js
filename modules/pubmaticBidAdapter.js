import * as utils from '../src/utils';
import { registerBidder } from '../src/adapters/bidderFactory';
import { BANNER, VIDEO, NATIVE } from '../src/mediaTypes';
import {config} from '../src/config';

const BIDDER_CODE = 'pubmatic';
const LOG_WARN_PREFIX = 'PubMatic: ';
const ENDPOINT = '//hbopenbid.pubmatic.com/translator?source=prebid-client';
const USYNCURL = '//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=';
const DEFAULT_CURRENCY = 'USD';
const AUCTION_TYPE = 1;
const PUBMATIC_DIGITRUST_KEY = 'nFIn8aLzbd';
const UNDEFINED = undefined;
const DEFAULT_WIDTH = 0;
const DEFAULT_HEIGHT = 0;
const PREBID_NATIVE_HELP_LINK = 'http://prebid.org/dev-docs/show-native-ads.html';
const CUSTOM_PARAMS = {
  'kadpageurl': '', // Custom page url
  'gender': '', // User gender
  'yob': '', // User year of birth
  'lat': '', // User location - Latitude
  'lon': '', // User Location - Longitude
  'wiid': '', // OpenWrap Wrapper Impression ID
  'profId': '', // OpenWrap Legacy: Profile ID
  'verId': '' // OpenWrap Legacy: version ID
};
const DATA_TYPES = {
  'NUMBER': 'number',
  'STRING': 'string',
  'BOOLEAN': 'boolean',
  'ARRAY': 'array',
  'OBJECT': 'object'
};
const VIDEO_CUSTOM_PARAMS = {
  'mimes': DATA_TYPES.ARRAY,
  'minduration': DATA_TYPES.NUMBER,
  'maxduration': DATA_TYPES.NUMBER,
  'startdelay': DATA_TYPES.NUMBER,
  'playbackmethod': DATA_TYPES.ARRAY,
  'api': DATA_TYPES.ARRAY,
  'protocols': DATA_TYPES.ARRAY,
  'w': DATA_TYPES.NUMBER,
  'h': DATA_TYPES.NUMBER,
  'battr': DATA_TYPES.ARRAY,
  'linearity': DATA_TYPES.NUMBER,
  'placement': DATA_TYPES.NUMBER,
  'minbitrate': DATA_TYPES.NUMBER,
  'maxbitrate': DATA_TYPES.NUMBER
}

const NATIVE_ASSETS = {
  'TITLE': {
    ID: 1,
    KEY: 'title',
    TYPE: 0
  },

  'IMAGE': {
    ID: 2,
    KEY: 'image',
    TYPE: 0
  },

  'ICON': {
    ID: 3,
    KEY: 'icon',
    TYPE: 0
  },

  'SPONSOREDBY': {
    ID: 4,
    KEY: 'sponsoredBy',
    TYPE: 1 // please note that type of SPONSORED is also 1
  },

  'BODY': {
    ID: 5,
    KEY: 'body',
    TYPE: 2 // please note that type of DESC is also set to 2
  },

  'CLICKURL': {
    ID: 6,
    KEY: 'clickUrl',
    TYPE: 0
  },

  'VIDEO': {
    ID: 7,
    KEY: 'video',
    TYPE: 0
  },

  'EXT': {
    ID: 8,
    KEY: 'ext',
    TYPE: 0
  },

  'DATA': {
    ID: 9,
    KEY: 'data',
    TYPE: 0
  },

  'LOGO': {
    ID: 10,
    KEY: 'logo',
    TYPE: 0
  },

  'SPONSORED': {
    ID: 11,
    KEY: 'sponsored',
    TYPE: 1 // please note that type of SPONSOREDBY is also set to 1
  },

  'DESC': {
    ID: 12,
    KEY: 'data',
    TYPE: 2 // please note that type of BODY is also set to 2
  },

  'RATING': {
    ID: 13,
    KEY: 'rating',
    TYPE: 3
  },

  'LIKES': {
    ID: 14,
    KEY: 'likes',
    TYPE: 4
  },

  'DOWNLOADS': {
    ID: 15,
    KEY: 'downloads',
    TYPE: 5
  },

  'PRICE': {
    ID: 16,
    KEY: 'price',
    TYPE: 6
  },

  'SALEPRICE': {
    ID: 17,
    KEY: 'saleprice',
    TYPE: 7
  },

  'PHONE': {
    ID: 18,
    KEY: 'phone',
    TYPE: 8
  },

  'ADDRESS': {
    ID: 19,
    KEY: 'address',
    TYPE: 9
  },

  'DESC2': {
    ID: 20,
    KEY: 'desc2',
    TYPE: 10
  },

  'DISPLAYURL': {
    ID: 21,
    KEY: 'displayurl',
    TYPE: 11
  },

  'CTA': {
    ID: 22,
    KEY: 'cta',
    TYPE: 12
  }
};

const NATIVE_ASSET_REVERSE_ID = {
  4: 'sponsoredBy',
  5: 'body',
  6: 'clickUrl',
  7: 'video',
  8: 'ext',
  9: 'data',
  10: 'logo',
  11: 'sponsored',
  12: 'desc',
  13: 'rating',
  14: 'likes',
  15: 'downloads',
  16: 'price',
  17: 'saleprice',
  18: 'phone',
  19: 'address',
  20: 'desc2',
  21: 'displayurl',
  22: 'cta'
}

const NATIVE_ASSET_IMAGE_TYPE = {
  'ICON': 1,
  'LOGO': 2,
  'IMAGE': 3
}

// check if title, image can be added with mandatory field default values
const NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS = [
  {
    id: NATIVE_ASSETS.SPONSOREDBY.ID,
    required: true,
    data: {
      type: 1
    }
  },
  {
    id: NATIVE_ASSETS.TITLE.ID,
    required: true,
  },
  {
    id: NATIVE_ASSETS.IMAGE.ID,
    required: true,
  }
]

const NET_REVENUE = false;
const dealChannelValues = {
  1: 'PMP',
  5: 'PREF',
  6: 'PMPG'
};

let publisherId = 0;
let isInvalidNativeRequest = false;

function _getDomainFromURL(url) {
  let anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _parseSlotParam(paramName, paramValue) {
  if (!utils.isStr(paramValue)) {
    paramValue && utils.logWarn(LOG_WARN_PREFIX + 'Ignoring param key: ' + paramName + ', expects string-value, found ' + typeof paramValue);
    return UNDEFINED;
  }

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map(id => id.trim()).join();
    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;
    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;
    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;
    case 'yob':
      return parseInt(paramValue) || UNDEFINED;
    default:
      return paramValue;
  }
}

function _cleanSlot(slotName) {
  if (utils.isStr(slotName)) {
    return slotName.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }
  return '';
}

function _parseAdSlot(bid) {
  bid.params.adUnit = '';
  bid.params.adUnitIndex = '0';
  bid.params.width = 0;
  bid.params.height = 0;
  var sizesArrayExists = (bid.hasOwnProperty('sizes') && utils.isArray(bid.sizes) && bid.sizes.length >= 1);
  bid.params.adSlot = _cleanSlot(bid.params.adSlot);

  var slot = bid.params.adSlot;
  var splits = slot.split(':');

  slot = splits[0];
  if (splits.length == 2) {
    bid.params.adUnitIndex = splits[1];
  }
  // check if size is mentioned in sizes array. in that case do not check for @ in adslot
  splits = slot.split('@');
  if (splits.length != 2) {
    if (!(sizesArrayExists)) {
      utils.logWarn(LOG_WARN_PREFIX + 'AdSlot Error: adSlot not in required format');
      return;
    }
  }
  bid.params.adUnit = splits[0];
  if (splits.length > 1) { // i.e size is specified in adslot, so consider that and ignore sizes array
    splits = splits[1].split('x');
    if (splits.length != 2) {
      utils.logWarn(LOG_WARN_PREFIX + 'AdSlot Error: adSlot not in required format');
      return;
    }
    bid.params.width = parseInt(splits[0]);
    bid.params.height = parseInt(splits[1]);
    delete bid.sizes;
  } else if (sizesArrayExists) {
    bid.params.width = parseInt(bid.sizes[0][0]);
    bid.params.height = parseInt(bid.sizes[0][1]);
  }
}

function _initConf(refererInfo) {
  var conf = {};
  conf.pageURL = utils.getTopWindowUrl();
  if (refererInfo && refererInfo.referer) {
    conf.refURL = refererInfo.referer;
  } else {
    conf.refURL = '';
  }
  return conf;
}

function _handleCustomParams(params, conf) {
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;
  for (key in CUSTOM_PARAMS) {
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key];
      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (typeof entry === 'object') {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (utils.isStr(value)) {
          conf[key] = value;
        } else {
          utils.logWarn(LOG_WARN_PREFIX + 'Ignoring param : ' + key + ' with value : ' + CUSTOM_PARAMS[key] + ', expects string-value, found ' + typeof value);
        }
      }
    }
  }
  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [DEFAULT_CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: (navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1') ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
}

// similar functionality as parseSlotParam. Check if the 2 functions can be clubbed.
function _checkParamDataType(key, value, datatype) {
  var errMsg = 'PubMatic: Ignoring param key: ' + key + ', expects ' + datatype + ', found ' + typeof value;
  switch (datatype) {
    case DATA_TYPES.BOOLEAN:
      if (!utils.isBoolean(value)) {
        utils.logWarn(LOG_WARN_PREFIX + errMsg);
        return UNDEFINED;
      }
      return value;
    case DATA_TYPES.NUMBER:
      if (!utils.isNumber(value)) {
        utils.logWarn(LOG_WARN_PREFIX + errMsg);
        return UNDEFINED;
      }
      return value;
    case DATA_TYPES.STRING:
      if (!utils.isStr(value)) {
        utils.logWarn(LOG_WARN_PREFIX + errMsg);
        return UNDEFINED;
      }
      return value;
    case DATA_TYPES.ARRAY:
      if (!utils.isArray(value)) {
        utils.logWarn(LOG_WARN_PREFIX + errMsg);
        return UNDEFINED;
      }
      return value;
  }
}

function _commonNativeRequestObject(nativeAsset, params) {
  var key = nativeAsset.KEY;
  return {
    id: nativeAsset.ID,
    required: params[key].required ? 1 : 0,
    data: {
      type: nativeAsset.TYPE,
      len: params[key].len,
      ext: params[key].ext
    }
  };
}

function _createNativeRequest(params) {
  var nativeRequestObject = {
    assets: []
  };
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var assetObj = {};
      if (!(nativeRequestObject.assets && nativeRequestObject.assets.length > 0 && nativeRequestObject.assets.hasOwnProperty(key))) {
        switch (key) {
          case NATIVE_ASSETS.TITLE.KEY:
            if (params[key].len || params[key].length) {
              assetObj = {
                id: NATIVE_ASSETS.TITLE.ID,
                required: params[key].required ? 1 : 0,
                title: {
                  len: params[key].len || params[key].length,
                  ext: params[key].ext
                }
              };
            } else {
              utils.logWarn(LOG_WARN_PREFIX + 'Error: Title Length is required for native ad: ' + JSON.stringify(params));
            }
            break;
          case NATIVE_ASSETS.IMAGE.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.IMAGE.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.IMAGE,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined),
                  wmin: params[key].wmin || params[key].minimumWidth || (params[key].minsizes ? params[key].minsizes[0] : undefined),
                  hmin: params[key].hmin || params[key].minimumHeight || (params[key].minsizes ? params[key].minsizes[1] : undefined),
                  mimes: params[key].mimes,
                  ext: params[key].ext,
                }
              };
            } else {
              // Log Warn
              utils.logWarn(LOG_WARN_PREFIX + 'Error: Image sizes is required for native ad: ' + JSON.stringify(params));
            }
            break;
          case NATIVE_ASSETS.ICON.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.ICON.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.ICON,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined),
                }
              };
            } else {
              // Log Warn
              utils.logWarn(LOG_WARN_PREFIX + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(params));
            };
            break;
          case NATIVE_ASSETS.SPONSOREDBY.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.SPONSOREDBY, params);
            break;
          case NATIVE_ASSETS.BODY.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.BODY, params); ;
            break;
          case NATIVE_ASSETS.VIDEO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.VIDEO.ID,
              required: params[key].required ? 1 : 0,
              video: {
                minduration: params[key].minduration,
                maxduration: params[key].maxduration,
                protocols: params[key].protocols,
                mimes: params[key].mimes,
                ext: params[key].ext
              }
            };
            break;
          case NATIVE_ASSETS.EXT.KEY:
            assetObj = {
              id: NATIVE_ASSETS.EXT.ID,
              required: params[key].required ? 1 : 0,
            };
            break;
          case NATIVE_ASSETS.LOGO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.LOGO.ID,
              required: params[key].required ? 1 : 0,
              img: {
                type: NATIVE_ASSET_IMAGE_TYPE.LOGO,
                w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : undefined),
                h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : undefined)
              }
            };
            break;
          case NATIVE_ASSETS.RATING.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.RATING, params); ;
            break;
          case NATIVE_ASSETS.LIKES.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.LIKES, params); ;
            break;
          case NATIVE_ASSETS.DOWNLOADS.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.DOWNLOADS, params); ;
            break;
          case NATIVE_ASSETS.PRICE.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.PRICE, params); ;
            break;
          case NATIVE_ASSETS.SALEPRICE.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.SALEPRICE, params); ;
            break;
          case NATIVE_ASSETS.PHONE.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.PHONE, params); ;
            break;
          case NATIVE_ASSETS.ADDRESS.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.ADDRESS, params); ;
            break;
          case NATIVE_ASSETS.DESC2.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.DESC2, params); ;
            break;
          case NATIVE_ASSETS.DISPLAYURL.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.DISPLAYURL, params); ;
            break;
          case NATIVE_ASSETS.CTA.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSETS.CTA, params); ;
            break;
        }
      }
    }
    if (assetObj && assetObj.id) {
      nativeRequestObject.assets[nativeRequestObject.assets.length] = assetObj;
    }
  };

  // for native image adtype prebid has to have few required assests i.e. title,sponsoredBy, image
  // if any of these are missing from the request then request will not be sent
  var requiredAssetCount = NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.length;
  var presentrequiredAssetCount = 0;
  NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.forEach(ele => {
    var lengthOfExistingAssets = nativeRequestObject.assets.length;
    for (var i = 0; i < lengthOfExistingAssets; i++) {
      if (ele.id == nativeRequestObject.assets[i].id) {
        presentrequiredAssetCount++;
        break;
      }
    }
  });
  if (requiredAssetCount == presentrequiredAssetCount) {
    isInvalidNativeRequest = false;
  } else {
    isInvalidNativeRequest = true;
  }
  return nativeRequestObject;
}

function _createImpressionObject(bid, conf) {
  var impObj = {};
  var bannerObj = {};
  var videoObj = {};
  var sizes = bid.hasOwnProperty('sizes') ? bid.sizes : [];

  impObj = {
    id: bid.bidId,
    tagid: bid.params.adUnit,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: window.location.protocol === 'https:' ? 1 : 0,
    ext: {
      pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
    },
    bidfloorcur: bid.params.currency ? _parseSlotParam('currency', bid.params.currency) : DEFAULT_CURRENCY
  };

  if (bid.params.hasOwnProperty('video')) {
    var videoData = bid.params.video;

    for (var key in VIDEO_CUSTOM_PARAMS) {
      if (videoData.hasOwnProperty(key)) {
        videoObj[key] = _checkParamDataType(key, videoData[key], VIDEO_CUSTOM_PARAMS[key])
      }
    }
    // read playersize and assign to h and w.
    if (utils.isArray(bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0][0];
      videoObj.h = bid.mediaTypes.video.playerSize[0][1];
    } else if (utils.isNumber(bid.mediaTypes.video.playerSize[0])) {
      videoObj.w = bid.mediaTypes.video.playerSize[0];
      videoObj.h = bid.mediaTypes.video.playerSize[1];
    }
    if (bid.params.video.hasOwnProperty('skippable')) {
      videoObj.ext = {
        'video_skippable': bid.params.video.skippable ? 1 : 0
      }
    }

    impObj.video = videoObj;
  } else if (bid.nativeParams) {
    impObj.native = {};
    impObj.native['request'] = JSON.stringify(_createNativeRequest(bid.nativeParams));
  } else {
    bannerObj = {
      pos: 0,
      w: bid.params.width,
      h: bid.params.height,
      topframe: utils.inIframe() ? 0 : 1,
    }
    if (utils.isArray(sizes) && sizes.length > 1) {
      sizes = sizes.splice(1, sizes.length - 1);
      var format = [];
      sizes.forEach(size => {
        format.push({
          w: size[0],
          h: size[1]
        });
      });
      bannerObj.format = format;
    }
    impObj.banner = bannerObj;
  }
  if (isInvalidNativeRequest && impObj.hasOwnProperty('native')) {
    utils.logWarn(LOG_WARN_PREFIX + 'Call to OpenBid will not be sent for  native ad unit as it does not contain required valid native params.' + JSON.stringify(bid) + ' Refer:' + PREBID_NATIVE_HELP_LINK);
    return;
  }
  return impObj;
}

function _getDigiTrustObject(key) {
  function getDigiTrustId() {
    let digiTrustUser = window.DigiTrust && (config.getConfig('digiTrustId') || window.DigiTrust.getUser({member: key}));
    return (digiTrustUser && digiTrustUser.success && digiTrustUser.identity) || null;
  }
  let digiTrustId = getDigiTrustId();
  // Verify there is an ID and this user has not opted out
  if (!digiTrustId || (digiTrustId.privacy && digiTrustId.privacy.optout)) {
    return null;
  }
  return digiTrustId;
}

function _handleDigitrustId(eids) {
  let digiTrustId = _getDigiTrustObject(PUBMATIC_DIGITRUST_KEY);
  if (digiTrustId !== null) {
    eids.push({
      'source': 'digitru.st',
      'uids': [{
        'id': digiTrustId.id || '',
        'atype': 1,
        'ext': {
          'keyv': parseInt(digiTrustId.keyv) || 0
        }
      }]
    });
  }
}

function _handleTTDId(eids) {
  let adsrvrOrgId = config.getConfig('adsrvrOrgId');
  if (adsrvrOrgId && utils.isStr(adsrvrOrgId.TDID)) {
    eids.push({
      'source': 'adserver.org',
      'uids': [{
        'id': adsrvrOrgId.TDID,
        'atype': 1,
        'ext': {
          'rtiPartner': 'TDID'
        }
      }]
    });
  }
}

function _handleEids(payload) {
  let eids = [];
  _handleDigitrustId(eids);
  _handleTTDId(eids);
  if (eids.length > 0) {
    payload.user.eids = eids;
  }
}

function _parseNativeResponse(bid, newBid) {
  newBid.native = {};
  if (bid.hasOwnProperty('adm')) {
    var adm = '';
    try {
      adm = JSON.parse(bid.adm.replace(/\\/g, ''));
    } catch (ex) {
      utils.logWarn(LOG_WARN_PREFIX + 'Error: Cannot parse native reponse for ad response: ' + newBid.adm);
      return;
    }
    if (adm && adm.native && adm.native.assets && adm.native.assets.length > 0) {
      newBid.mediaType = 'native';
      for (let i = 0, len = adm.native.assets.length; i < len; i++) {
        switch (adm.native.assets[i].id) {
          case NATIVE_ASSETS.TITLE.ID:
            newBid.native.title = adm.native.assets[i].title && adm.native.assets[i].title.text;
            break;
          case NATIVE_ASSETS.IMAGE.ID:
            newBid.native.image = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w,
            };
            break;
          case NATIVE_ASSETS.ICON.ID:
            newBid.native.icon = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w,
            };
            break;
          case NATIVE_ASSETS.SPONSOREDBY.ID:
          case NATIVE_ASSETS.BODY.ID:
          case NATIVE_ASSETS.LIKES.ID:
          case NATIVE_ASSETS.DOWNLOADS.ID:
          case NATIVE_ASSETS.PRICE:
          case NATIVE_ASSETS.SALEPRICE.ID:
          case NATIVE_ASSETS.PHONE.ID:
          case NATIVE_ASSETS.ADDRESS.ID:
          case NATIVE_ASSETS.DESC2.ID:
          case NATIVE_ASSETS.CTA.ID:
          case NATIVE_ASSETS.RATING.ID:
          case NATIVE_ASSETS.DISPLAYURL.ID:
            //  Remove Redundant code
            newBid.native[NATIVE_ASSET_REVERSE_ID[adm.native.assets[i].id]] = adm.native.assets[i].data && adm.native.assets[i].data.value;
            break;
        }
      }
      newBid.native.clickUrl = adm.native.link && adm.native.link.url;
      newBid.native.clickTrackers = (adm.native.link && adm.native.link.clicktrackers) || [];
      newBid.native.impressionTrackers = adm.native.imptrackers || [];
      newBid.native.jstracker = adm.native.jstracker || [];
      if (!newBid.width) {
        newBid.width = DEFAULT_WIDTH;
      }
      if (!newBid.height) {
        newBid.height = DEFAULT_HEIGHT;
      }
    }
  }
}

export const spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: [BANNER, VIDEO, NATIVE],
  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: bid => {
    if (bid && bid.params) {
      if (!utils.isStr(bid.params.publisherId)) {
        utils.logWarn(LOG_WARN_PREFIX + 'Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      }
      if (!utils.isStr(bid.params.adSlot)) {
        utils.logWarn(LOG_WARN_PREFIX + 'Error: adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      }
      // video ad validation
      if (bid.params.hasOwnProperty('video')) {
        if (!bid.params.video.hasOwnProperty('mimes') || !utils.isArray(bid.params.video.mimes) || bid.params.video.mimes.length === 0) {
          utils.logWarn(LOG_WARN_PREFIX + 'Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(bid));
          return false;
        }
      }
      return true;
    }
    return false;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: (validBidRequests, bidderRequest) => {
    var refererInfo;
    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }
    var conf = _initConf(refererInfo);
    var payload = _createOrtbTemplate(conf);
    var bidCurrency = '';
    var dctr = '';
    var dctrLen;
    var dctrArr = [];
    var bid;
    validBidRequests.forEach(originalBid => {
      bid = utils.deepClone(originalBid);
      _parseAdSlot(bid);
      if (bid.params.hasOwnProperty('video')) {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex)) {
          utils.logWarn(LOG_WARN_PREFIX + 'Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      } else {
        if (!(bid.params.adSlot && bid.params.adUnit && bid.params.adUnitIndex && bid.params.width && bid.params.height)) {
          utils.logWarn(LOG_WARN_PREFIX + 'Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      }
      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;
      if (bidCurrency === '') {
        bidCurrency = bid.params.currency || undefined;
      } else if (bid.params.hasOwnProperty('currency') && bidCurrency !== bid.params.currency) {
        utils.logWarn(LOG_WARN_PREFIX + 'Currency specifier ignored. Only one currency permitted.');
      }
      bid.params.currency = bidCurrency;
      // check if dctr is added to more than 1 adunit
      if (bid.params.hasOwnProperty('dctr') && utils.isStr(bid.params.dctr)) {
        dctrArr.push(bid.params.dctr);
      }
      var impObj = _createImpressionObject(bid, conf);
      if (impObj) {
        payload.imp.push(impObj);
      }
    });

    if (payload.imp.length == 0) {
      return;
    }

    payload.site.publisher.id = conf.pubId.trim();
    publisherId = conf.pubId.trim();
    payload.ext.wrapper = {};
    payload.ext.wrapper.profile = parseInt(conf.profId) || UNDEFINED;
    payload.ext.wrapper.version = parseInt(conf.verId) || UNDEFINED;
    payload.ext.wrapper.wiid = conf.wiid || UNDEFINED;
    payload.ext.wrapper.wv = $$REPO_AND_VERSION$$;
    payload.ext.wrapper.transactionId = conf.transactionId;
    payload.ext.wrapper.wp = 'pbjs';
    payload.user.gender = (conf.gender ? conf.gender.trim() : UNDEFINED);
    payload.user.geo = {};

    // Attaching GDPR Consent Params
    if (bidderRequest && bidderRequest.gdprConsent) {
      payload.user.ext = {
        consent: bidderRequest.gdprConsent.consentString
      };

      payload.regs = {
        ext: {
          gdpr: (bidderRequest.gdprConsent.gdprApplies ? 1 : 0)
        }
      };
    }

    payload.user.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.user.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.user.yob = _parseSlotParam('yob', conf.yob);
    payload.device.geo = {};
    payload.device.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.device.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.site.page = conf.kadpageurl.trim() || payload.site.page.trim();
    payload.site.domain = _getDomainFromURL(payload.site.page);

    // set dctr value in site.ext, if present in validBidRequests[0], else ignore
    if (dctrArr.length > 0) {
      if (validBidRequests[0].params.hasOwnProperty('dctr')) {
        dctr = validBidRequests[0].params.dctr;
        if (utils.isStr(dctr) && dctr.length > 0) {
          var arr = dctr.split('|');
          dctr = '';
          arr.forEach(val => {
            dctr += (val.length > 0) ? (val.trim() + '|') : '';
          });
          dctrLen = dctr.length;
          if (dctr.substring(dctrLen, dctrLen - 1) === '|') {
            dctr = dctr.substring(0, dctrLen - 1);
          }
          payload.site.ext = {
            key_val: dctr.trim()
          }
        } else {
          utils.logWarn(LOG_WARN_PREFIX + 'Ignoring param : dctr with value : ' + dctr + ', expects string-value, found empty or non-string value');
        }
        if (dctrArr.length > 1) {
          utils.logWarn(LOG_WARN_PREFIX + 'dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits');
        }
      } else {
        utils.logWarn(LOG_WARN_PREFIX + 'dctr value not found in 1st adunit, ignoring values from subsequent adunits');
      }
    }

    _handleEids(payload);
    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload)
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} response A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: (response, request) => {
    const bidResponses = [];
    var respCur = DEFAULT_CURRENCY;
    try {
      if (response.body && response.body.seatbid && utils.isArray(response.body.seatbid)) {
        // Supporting multiple bid responses for same adSize
        respCur = response.body.cur || respCur;
        response.body.seatbid.forEach(seatbidder => {
          seatbidder.bid &&
            utils.isArray(seatbidder.bid) &&
            seatbidder.bid.forEach(bid => {
              let parsedRequest = JSON.parse(request.data);
              let newBid = {
                requestId: bid.impid,
                cpm: (parseFloat(bid.price) || 0).toFixed(2),
                width: bid.w,
                height: bid.h,
                creativeId: bid.crid || bid.id,
                dealId: bid.dealid,
                currency: respCur,
                netRevenue: NET_REVENUE,
                ttl: 300,
                referrer: parsedRequest.site && parsedRequest.site.ref ? parsedRequest.site.ref : '',
                ad: bid.adm
              };
              if (parsedRequest.imp && parsedRequest.imp.length > 0) {
                parsedRequest.imp.forEach(req => {
                  if (bid.impid === req.id && req.hasOwnProperty('video')) {
                    newBid.mediaType = 'video';
                    newBid.width = bid.hasOwnProperty('w') ? bid.w : req.video.w;
                    newBid.height = bid.hasOwnProperty('h') ? bid.h : req.video.h;
                    newBid.vastXml = bid.adm;
                  }
                  if (bid.impid === req.id && req.hasOwnProperty('native')) {
                    _parseNativeResponse(bid, newBid);
                  }
                });
              }
              if (bid.ext && bid.ext.deal_channel) {
                newBid['dealChannel'] = dealChannelValues[bid.ext.deal_channel] || null;
              }

              bidResponses.push(newBid);
            });
        });
      }
    } catch (error) {
      utils.logError(error);
    }
    return bidResponses;
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: (syncOptions, responses, gdprConsent) => {
    let syncurl = USYNCURL + publisherId;

    // Attaching GDPR Consent Params in UserSync url
    if (gdprConsent) {
      syncurl += '&gdpr=' + (gdprConsent.gdprApplies ? 1 : 0);
      syncurl += '&gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || '');
    }

    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: syncurl
      }];
    } else {
      utils.logWarn(LOG_WARN_PREFIX + 'Please enable iframe based user sync.');
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function (params, isOpenRtb) {
    return utils.convertTypes({
      'publisherId': 'string',
      'adSlot': 'string'
    }, params);
  }
};

registerBidder(spec);

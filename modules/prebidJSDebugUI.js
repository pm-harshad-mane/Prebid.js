import { config } from '../src/config.js';
import events from '../src/events.js';
import { EVENTS } from '../src/constants.json';
import {isPlainObject, isArray} from '../src/utils.js';

const MODULE_NAME = 'Prebid JS Debug UI';
const UI_LIBRARY_END_POINT = '';
const UI_LIBRARY_LOAD_DELAY = 3000;
const PBJS_NAMESPACE = '$$PREBID_GLOBAL$$';
const DEBUG_OBJECT_KEY_NAME = 'pbjsDebugUI';
const AUCTIONS_KEY = 'auction_data';
const AUCTION_END_KEY = 'end';
const AUCTION_DEBUG_KEY = 'auction_debug';

// Do not load the lib if already loaded
let uiLibraryLoaded = false;

function loadUILibIfNotAlreadyLoaded(){
	if(uiLibraryLoaded === false){
		uiLibraryLoaded = true;
	}
}

function loadUILibrary(){
	// the js library needs this variable to be defined to know which is the primary prebid-js code on page in case tehre are multiple instances of prebid-js on page
	window.PBJS_NAMESPACE = '$$PREBID_GLOBAL$$';
	// Load the UI library after page-load / some delay
	// Load lib on DOMContentLoaded
	window.document.addEventListener("DOMContentLoaded", function(){
		loadUILibIfNotAlreadyLoaded();
	});
	// Load lib after some timeout
	setTimeout(function(){
		loadUILibIfNotAlreadyLoaded()
	}, UI_LIBRARY_LOAD_DELAY)
}

function createDebugObjectIfNotPresent(){
	if( isPlainObject( $$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME]) === false ) {
		$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME] = {};
	}
}

function createDebugObjectAuctionIfNotPresent(){
	if( isPlainObject( $$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTIONS_KEY]) === false ) {
		$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTIONS_KEY] = {};
	}
}

function createAuctionIdEntryIfNotPresent(auctionId){
	if( isPlainObject( $$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTIONS_KEY][auctionId]) === false ) {
		$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTIONS_KEY][auctionId] = {};
	}
}

function saveAuctionEndData(auctionId, auctionEndData){
	$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTIONS_KEY][auctionId][AUCTION_END_KEY] = auctionEndData;
}

function auctionEndHandler(auctionEndData){
	createDebugObjectIfNotPresent();
	createDebugObjectAuctionIfNotPresent();
	createAuctionIdEntryIfNotPresent(auctionEndData.auctionId);
	// auctionEndData.timestamp is auctionStart
	auctionEndData.auctionStart = auctionEndData.timestamp;
	saveAuctionEndData(auctionEndData.auctionId, auctionEndData);
}

function createDebugObjectAuctionDebugIfNotPresent(){
	if( isArray( $$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTION_DEBUG_KEY]) === false ) {
		$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTION_DEBUG_KEY] = [];
	}
}

function saveAuctionDebugData(auctionDebugData){
	$$PREBID_GLOBAL$$[DEBUG_OBJECT_KEY_NAME][AUCTION_DEBUG_KEY].push(auctionDebugData);
}

function auctionDebugHandler(auctionDebugData){
	createDebugObjectIfNotPresent();
	createDebugObjectAuctionDebugIfNotPresent();
	saveAuctionDebugData(auctionDebugData);
}

function init(){
	// this module should work only if pbjs_debug is set to true in page-URL or debug mode is on thru config 
	if(config.getConfig('debug') !==  true) {
		return;
	}
	events.on(EVENTS.AUCTION_END, auctionEndHandler);
	events.on(EVENTS.AUCTION_DEBUG, auctionDebugHandler);
	loadUILibrary();
}

init();

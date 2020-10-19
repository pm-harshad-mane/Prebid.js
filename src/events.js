/**
 * events.js
 */
// var utils = require('./utils.js');
import { _map, logMessage, contains, _each, logError, isEmpty } from './utils.js';
var CONSTANTS = require('./constants.json');
var slice = Array.prototype.slice;
var push = Array.prototype.push;

// define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];
var allEvents = _map(CONSTANTS.EVENTS, function (v) {
  return v;
});

var idPaths = CONSTANTS.EVENT_ID_PATHS;

// keep a record of all events fired
var eventsFired = [];

// module.exports = (function () {
var _handlers = {};
// var publicVar = {};

/**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */
function _dispatch(eventString, args) {
  logMessage('Emitting event for: ' + eventString);

  var eventPayload = args[0] || {};
  var idPath = idPaths[eventString];
  var key = eventPayload[idPath];
  var event = _handlers[eventString] || { que: [] };
  var eventKeys = _map(event, function (v, k) {
    return k;
  });

  var callbacks = [];

  // record the event:
  eventsFired.push({
    eventType: eventString,
    args: eventPayload,
    id: key
  });

  /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */
  if (key && contains(eventKeys, key)) {
    push.apply(callbacks, event[key].que);
  }

  /** Push each general callback to the `callbacks` array. */
  push.apply(callbacks, event.que);

  /** call each of the callbacks */
  _each(callbacks, function (fn) {
    if (!fn) return;
    try {
      fn.apply(null, args);
    } catch (e) {
      logError('Error executing handler:', 'events.js', e);
    }
  });
}

export function _checkAvailableEvent(event) {
  return contains(allEvents, event);
}

// publicVar.on = function (eventString, handler, id) {
export function on(eventString, handler, id) {
  // check whether available event or not
  if (_checkAvailableEvent(eventString)) {
    var event = _handlers[eventString] || { que: [] };

    if (id) {
      event[id] = event[id] || { que: [] };
      event[id].que.push(handler);
    } else {
      event.que.push(handler);
    }

    _handlers[eventString] = event;
  } else {
    logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
  }
};

// publicVar.emit = function (event) {
export function emit(event) {
  var args = slice.call(arguments, 1);
  _dispatch(event, args);
};

// publicVar.off = function (eventString, handler, id) {
export function off(eventString, handler, id) {
  var event = _handlers[eventString];

  if (isEmpty(event) || (isEmpty(event.que) && isEmpty(event[id]))) {
    return;
  }

  if (id && (isEmpty(event[id]) || isEmpty(event[id].que))) {
    return;
  }

  if (id) {
    _each(event[id].que, function (_handler) {
      var que = event[id].que;
      if (_handler === handler) {
        que.splice(que.indexOf(_handler), 1);
      }
    });
  } else {
    _each(event.que, function (_handler) {
      var que = event.que;
      if (_handler === handler) {
        que.splice(que.indexOf(_handler), 1);
      }
    });
  }

  _handlers[eventString] = event;
};

// publicVar.get = function () {
export function get() {
  return _handlers;
};

/**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */
// publicVar.getEvents = function () {
export function getEvents() {
  var arrayCopy = [];
  _each(eventsFired, function (value) {
    var newProp = Object.assign({}, value);
    arrayCopy.push(newProp);
  });

  return arrayCopy;
};

// return publicVar;
// }());

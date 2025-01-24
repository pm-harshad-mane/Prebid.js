/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
import * as $protobuf from 'protobufjs/minimal';

// Common aliases
const $Reader = $protobuf.Reader; const $Writer = $protobuf.Writer; const $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

export const ORTBRequest2 = $root.ORTBRequest2 = (() => {
  /**
   * Properties of a ORTBRequest2.
   * @exports IORTBRequest2
   * @interface IORTBRequest2
   * @property {string|null} [id] ORTBRequest2 id
   * @property {number|null} [at] ORTBRequest2 at
   * @property {Array.<string>|null} [cur] ORTBRequest2 cur
   * @property {Array.<ORTBRequest2.IImp>|null} [imp] ORTBRequest2 imp
   * @property {ORTBRequest2.ISite|null} [site] ORTBRequest2 site
   * @property {ORTBRequest2.IDevice|null} [device] ORTBRequest2 device
   * @property {ORTBRequest2.IUser|null} [user] ORTBRequest2 user
   * @property {ORTBRequest2.IExt3|null} [ext] ORTBRequest2 ext
   * @property {number|null} [tmax] ORTBRequest2 tmax
   * @property {ORTBRequest2.IRegs|null} [regs] ORTBRequest2 regs
   */

  /**
   * Constructs a new ORTBRequest2.
   * @exports ORTBRequest2
   * @classdesc Represents a ORTBRequest2.
   * @implements IORTBRequest2
   * @constructor
   * @param {IORTBRequest2=} [properties] Properties to set
   */
  function ORTBRequest2(properties) {
    this.cur = [];
    this.imp = [];
    if (properties) {
      for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
        if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
      }
    }
  }

  /**
   * ORTBRequest2 id.
   * @member {string} id
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.id = '';

  /**
   * ORTBRequest2 at.
   * @member {number} at
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.at = 0;

  /**
   * ORTBRequest2 cur.
   * @member {Array.<string>} cur
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.cur = $util.emptyArray;

  /**
   * ORTBRequest2 imp.
   * @member {Array.<ORTBRequest2.IImp>} imp
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.imp = $util.emptyArray;

  /**
   * ORTBRequest2 site.
   * @member {ORTBRequest2.ISite|null|undefined} site
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.site = null;

  /**
   * ORTBRequest2 device.
   * @member {ORTBRequest2.IDevice|null|undefined} device
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.device = null;

  /**
   * ORTBRequest2 user.
   * @member {ORTBRequest2.IUser|null|undefined} user
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.user = null;

  /**
   * ORTBRequest2 ext.
   * @member {ORTBRequest2.IExt3|null|undefined} ext
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.ext = null;

  /**
   * ORTBRequest2 tmax.
   * @member {number} tmax
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.tmax = 0;

  /**
   * ORTBRequest2 regs.
   * @member {ORTBRequest2.IRegs|null|undefined} regs
   * @memberof ORTBRequest2
   * @instance
   */
  ORTBRequest2.prototype.regs = null;

  /**
   * Creates a new ORTBRequest2 instance using the specified properties.
   * @function create
   * @memberof ORTBRequest2
   * @static
   * @param {IORTBRequest2=} [properties] Properties to set
   * @returns {ORTBRequest2} ORTBRequest2 instance
   */
  ORTBRequest2.create = function create(properties) {
    return new ORTBRequest2(properties);
  };

  /**
   * Encodes the specified ORTBRequest2 message. Does not implicitly {@link ORTBRequest2.verify|verify} messages.
   * @function encode
   * @memberof ORTBRequest2
   * @static
   * @param {IORTBRequest2} message ORTBRequest2 message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ORTBRequest2.encode = function encode(message, writer) {
    if (!writer) { writer = $Writer.create(); }
    if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id); }
    if (message.at != null && Object.hasOwnProperty.call(message, 'at')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.at); }
    if (message.cur != null && message.cur.length) {
      for (let i = 0; i < message.cur.length; ++i) { writer.uint32(/* id 3, wireType 2 = */26).string(message.cur[i]); }
    }
    if (message.imp != null && message.imp.length) {
      for (let i = 0; i < message.imp.length; ++i) { $root.ORTBRequest2.Imp.encode(message.imp[i], writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim(); }
    }
    if (message.site != null && Object.hasOwnProperty.call(message, 'site')) { $root.ORTBRequest2.Site.encode(message.site, writer.uint32(/* id 5, wireType 2 = */42).fork()).ldelim(); }
    if (message.device != null && Object.hasOwnProperty.call(message, 'device')) { $root.ORTBRequest2.Device.encode(message.device, writer.uint32(/* id 6, wireType 2 = */50).fork()).ldelim(); }
    if (message.user != null && Object.hasOwnProperty.call(message, 'user')) { $root.ORTBRequest2.User.encode(message.user, writer.uint32(/* id 7, wireType 2 = */58).fork()).ldelim(); }
    if (message.ext != null && Object.hasOwnProperty.call(message, 'ext')) { $root.ORTBRequest2.Ext3.encode(message.ext, writer.uint32(/* id 8, wireType 2 = */66).fork()).ldelim(); }
    if (message.tmax != null && Object.hasOwnProperty.call(message, 'tmax')) { writer.uint32(/* id 9, wireType 0 = */72).uint32(message.tmax); }
    if (message.regs != null && Object.hasOwnProperty.call(message, 'regs')) { $root.ORTBRequest2.Regs.encode(message.regs, writer.uint32(/* id 10, wireType 2 = */82).fork()).ldelim(); }
    return writer;
  };

  /**
   * Encodes the specified ORTBRequest2 message, length delimited. Does not implicitly {@link ORTBRequest2.verify|verify} messages.
   * @function encodeDelimited
   * @memberof ORTBRequest2
   * @static
   * @param {IORTBRequest2} message ORTBRequest2 message or plain object to encode
   * @param {$protobuf.Writer} [writer] Writer to encode to
   * @returns {$protobuf.Writer} Writer
   */
  ORTBRequest2.encodeDelimited = function encodeDelimited(message, writer) {
    return this.encode(message, writer).ldelim();
  };

  /**
   * Decodes a ORTBRequest2 message from the specified reader or buffer.
   * @function decode
   * @memberof ORTBRequest2
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @param {number} [length] Message length if known beforehand
   * @returns {ORTBRequest2} ORTBRequest2
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ORTBRequest2.decode = function decode(reader, length) {
    if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
    let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2();
    while (reader.pos < end) {
      let tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          message.id = reader.string();
          break;
        }
        case 2: {
          message.at = reader.uint32();
          break;
        }
        case 3: {
          if (!(message.cur && message.cur.length)) { message.cur = []; }
          message.cur.push(reader.string());
          break;
        }
        case 4: {
          if (!(message.imp && message.imp.length)) { message.imp = []; }
          message.imp.push($root.ORTBRequest2.Imp.decode(reader, reader.uint32()));
          break;
        }
        case 5: {
          message.site = $root.ORTBRequest2.Site.decode(reader, reader.uint32());
          break;
        }
        case 6: {
          message.device = $root.ORTBRequest2.Device.decode(reader, reader.uint32());
          break;
        }
        case 7: {
          message.user = $root.ORTBRequest2.User.decode(reader, reader.uint32());
          break;
        }
        case 8: {
          message.ext = $root.ORTBRequest2.Ext3.decode(reader, reader.uint32());
          break;
        }
        case 9: {
          message.tmax = reader.uint32();
          break;
        }
        case 10: {
          message.regs = $root.ORTBRequest2.Regs.decode(reader, reader.uint32());
          break;
        }
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  };

  /**
   * Decodes a ORTBRequest2 message from the specified reader or buffer, length delimited.
   * @function decodeDelimited
   * @memberof ORTBRequest2
   * @static
   * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
   * @returns {ORTBRequest2} ORTBRequest2
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  ORTBRequest2.decodeDelimited = function decodeDelimited(reader) {
    if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
    return this.decode(reader, reader.uint32());
  };

  /**
   * Verifies a ORTBRequest2 message.
   * @function verify
   * @memberof ORTBRequest2
   * @static
   * @param {Object.<string,*>} message Plain object to verify
   * @returns {string|null} `null` if valid, otherwise the reason why it is not
   */
  ORTBRequest2.verify = function verify(message) {
    if (typeof message !== 'object' || message === null) { return 'object expected'; }
    if (message.id != null && message.hasOwnProperty('id')) {
      if (!$util.isString(message.id)) { return 'id: string expected'; }
    }
    if (message.at != null && message.hasOwnProperty('at')) {
      if (!$util.isInteger(message.at)) { return 'at: integer expected'; }
    }
    if (message.cur != null && message.hasOwnProperty('cur')) {
      if (!Array.isArray(message.cur)) { return 'cur: array expected'; }
      for (let i = 0; i < message.cur.length; ++i) {
        if (!$util.isString(message.cur[i])) { return 'cur: string[] expected'; }
      }
    }
    if (message.imp != null && message.hasOwnProperty('imp')) {
      if (!Array.isArray(message.imp)) { return 'imp: array expected'; }
      for (let i = 0; i < message.imp.length; ++i) {
        let error = $root.ORTBRequest2.Imp.verify(message.imp[i]);
        if (error) { return 'imp.' + error; }
      }
    }
    if (message.site != null && message.hasOwnProperty('site')) {
      let error = $root.ORTBRequest2.Site.verify(message.site);
      if (error) { return 'site.' + error; }
    }
    if (message.device != null && message.hasOwnProperty('device')) {
      let error = $root.ORTBRequest2.Device.verify(message.device);
      if (error) { return 'device.' + error; }
    }
    if (message.user != null && message.hasOwnProperty('user')) {
      let error = $root.ORTBRequest2.User.verify(message.user);
      if (error) { return 'user.' + error; }
    }
    if (message.ext != null && message.hasOwnProperty('ext')) {
      let error = $root.ORTBRequest2.Ext3.verify(message.ext);
      if (error) { return 'ext.' + error; }
    }
    if (message.tmax != null && message.hasOwnProperty('tmax')) {
      if (!$util.isInteger(message.tmax)) { return 'tmax: integer expected'; }
    }
    if (message.regs != null && message.hasOwnProperty('regs')) {
      let error = $root.ORTBRequest2.Regs.verify(message.regs);
      if (error) { return 'regs.' + error; }
    }
    return null;
  };

  /**
   * Creates a ORTBRequest2 message from a plain object. Also converts values to their respective internal types.
   * @function fromObject
   * @memberof ORTBRequest2
   * @static
   * @param {Object.<string,*>} object Plain object
   * @returns {ORTBRequest2} ORTBRequest2
   */
  ORTBRequest2.fromObject = function fromObject(object) {
    if (object instanceof $root.ORTBRequest2) { return object; }
    let message = new $root.ORTBRequest2();
    if (object.id != null) { message.id = String(object.id); }
    if (object.at != null) { message.at = object.at >>> 0; }
    if (object.cur) {
      if (!Array.isArray(object.cur)) { throw TypeError('.ORTBRequest2.cur: array expected'); }
      message.cur = [];
      for (let i = 0; i < object.cur.length; ++i) { message.cur[i] = String(object.cur[i]); }
    }
    if (object.imp) {
      if (!Array.isArray(object.imp)) { throw TypeError('.ORTBRequest2.imp: array expected'); }
      message.imp = [];
      for (let i = 0; i < object.imp.length; ++i) {
        if (typeof object.imp[i] !== 'object') { throw TypeError('.ORTBRequest2.imp: object expected'); }
        message.imp[i] = $root.ORTBRequest2.Imp.fromObject(object.imp[i]);
      }
    }
    if (object.site != null) {
      if (typeof object.site !== 'object') { throw TypeError('.ORTBRequest2.site: object expected'); }
      message.site = $root.ORTBRequest2.Site.fromObject(object.site);
    }
    if (object.device != null) {
      if (typeof object.device !== 'object') { throw TypeError('.ORTBRequest2.device: object expected'); }
      message.device = $root.ORTBRequest2.Device.fromObject(object.device);
    }
    if (object.user != null) {
      if (typeof object.user !== 'object') { throw TypeError('.ORTBRequest2.user: object expected'); }
      message.user = $root.ORTBRequest2.User.fromObject(object.user);
    }
    if (object.ext != null) {
      if (typeof object.ext !== 'object') { throw TypeError('.ORTBRequest2.ext: object expected'); }
      message.ext = $root.ORTBRequest2.Ext3.fromObject(object.ext);
    }
    if (object.tmax != null) { message.tmax = object.tmax >>> 0; }
    if (object.regs != null) {
      if (typeof object.regs !== 'object') { throw TypeError('.ORTBRequest2.regs: object expected'); }
      message.regs = $root.ORTBRequest2.Regs.fromObject(object.regs);
    }
    return message;
  };

  /**
   * Creates a plain object from a ORTBRequest2 message. Also converts values to other types if specified.
   * @function toObject
   * @memberof ORTBRequest2
   * @static
   * @param {ORTBRequest2} message ORTBRequest2
   * @param {$protobuf.IConversionOptions} [options] Conversion options
   * @returns {Object.<string,*>} Plain object
   */
  ORTBRequest2.toObject = function toObject(message, options) {
    if (!options) { options = {}; }
    let object = {};
    if (options.arrays || options.defaults) {
      object.cur = [];
      object.imp = [];
    }
    if (options.defaults) {
      object.id = '';
      object.at = 0;
      object.site = null;
      object.device = null;
      object.user = null;
      object.ext = null;
      object.tmax = 0;
      object.regs = null;
    }
    if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id; }
    if (message.at != null && message.hasOwnProperty('at')) { object.at = message.at; }
    if (message.cur && message.cur.length) {
      object.cur = [];
      for (let j = 0; j < message.cur.length; ++j) { object.cur[j] = message.cur[j]; }
    }
    if (message.imp && message.imp.length) {
      object.imp = [];
      for (let j = 0; j < message.imp.length; ++j) { object.imp[j] = $root.ORTBRequest2.Imp.toObject(message.imp[j], options); }
    }
    if (message.site != null && message.hasOwnProperty('site')) { object.site = $root.ORTBRequest2.Site.toObject(message.site, options); }
    if (message.device != null && message.hasOwnProperty('device')) { object.device = $root.ORTBRequest2.Device.toObject(message.device, options); }
    if (message.user != null && message.hasOwnProperty('user')) { object.user = $root.ORTBRequest2.User.toObject(message.user, options); }
    if (message.ext != null && message.hasOwnProperty('ext')) { object.ext = $root.ORTBRequest2.Ext3.toObject(message.ext, options); }
    if (message.tmax != null && message.hasOwnProperty('tmax')) { object.tmax = message.tmax; }
    if (message.regs != null && message.hasOwnProperty('regs')) { object.regs = $root.ORTBRequest2.Regs.toObject(message.regs, options); }
    return object;
  };

  /**
   * Converts this ORTBRequest2 to JSON.
   * @function toJSON
   * @memberof ORTBRequest2
   * @instance
   * @returns {Object.<string,*>} JSON object
   */
  ORTBRequest2.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
  };

  /**
   * Gets the default type url for ORTBRequest2
   * @function getTypeUrl
   * @memberof ORTBRequest2
   * @static
   * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns {string} The default type url
   */
  ORTBRequest2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
    if (typeUrlPrefix === undefined) {
      typeUrlPrefix = 'type.googleapis.com';
    }
    return typeUrlPrefix + '/ORTBRequest2';
  };

  ORTBRequest2.Ext = (function() {
    /**
     * Properties of an Ext.
     * @memberof ORTBRequest2
     * @interface IExt
     */

    /**
     * Constructs a new Ext.
     * @memberof ORTBRequest2
     * @classdesc Represents an Ext.
     * @implements IExt
     * @constructor
     * @param {ORTBRequest2.IExt=} [properties] Properties to set
     */
    function Ext(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Creates a new Ext instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {ORTBRequest2.IExt=} [properties] Properties to set
     * @returns {ORTBRequest2.Ext} Ext instance
     */
    Ext.create = function create(properties) {
      return new Ext(properties);
    };

    /**
     * Encodes the specified Ext message. Does not implicitly {@link ORTBRequest2.Ext.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {ORTBRequest2.IExt} message Ext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      return writer;
    };

    /**
     * Encodes the specified Ext message, length delimited. Does not implicitly {@link ORTBRequest2.Ext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {ORTBRequest2.IExt} message Ext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ext message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Ext} Ext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Ext();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Ext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Ext} Ext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ext message.
     * @function verify
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ext.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      return null;
    };

    /**
     * Creates an Ext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Ext} Ext
     */
    Ext.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Ext) { return object; }
      return new $root.ORTBRequest2.Ext();
    };

    /**
     * Creates a plain object from an Ext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {ORTBRequest2.Ext} message Ext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ext.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this Ext to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Ext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ext.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ext
     * @function getTypeUrl
     * @memberof ORTBRequest2.Ext
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Ext';
    };

    return Ext;
  })();

  ORTBRequest2.Format = (function() {
    /**
     * Properties of a Format.
     * @memberof ORTBRequest2
     * @interface IFormat
     * @property {number|null} [w] Format w
     * @property {number|null} [h] Format h
     */

    /**
     * Constructs a new Format.
     * @memberof ORTBRequest2
     * @classdesc Represents a Format.
     * @implements IFormat
     * @constructor
     * @param {ORTBRequest2.IFormat=} [properties] Properties to set
     */
    function Format(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Format w.
     * @member {number} w
     * @memberof ORTBRequest2.Format
     * @instance
     */
    Format.prototype.w = 0;

    /**
     * Format h.
     * @member {number} h
     * @memberof ORTBRequest2.Format
     * @instance
     */
    Format.prototype.h = 0;

    /**
     * Creates a new Format instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Format
     * @static
     * @param {ORTBRequest2.IFormat=} [properties] Properties to set
     * @returns {ORTBRequest2.Format} Format instance
     */
    Format.create = function create(properties) {
      return new Format(properties);
    };

    /**
     * Encodes the specified Format message. Does not implicitly {@link ORTBRequest2.Format.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Format
     * @static
     * @param {ORTBRequest2.IFormat} message Format message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Format.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.w != null && Object.hasOwnProperty.call(message, 'w')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.w); }
      if (message.h != null && Object.hasOwnProperty.call(message, 'h')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.h); }
      return writer;
    };

    /**
     * Encodes the specified Format message, length delimited. Does not implicitly {@link ORTBRequest2.Format.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Format
     * @static
     * @param {ORTBRequest2.IFormat} message Format message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Format.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Format message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Format
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Format} Format
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Format.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Format();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.w = reader.uint32();
            break;
          }
          case 2: {
            message.h = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Format message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Format
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Format} Format
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Format.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Format message.
     * @function verify
     * @memberof ORTBRequest2.Format
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Format.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.w != null && message.hasOwnProperty('w')) {
        if (!$util.isInteger(message.w)) { return 'w: integer expected'; }
      }
      if (message.h != null && message.hasOwnProperty('h')) {
        if (!$util.isInteger(message.h)) { return 'h: integer expected'; }
      }
      return null;
    };

    /**
     * Creates a Format message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Format
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Format} Format
     */
    Format.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Format) { return object; }
      let message = new $root.ORTBRequest2.Format();
      if (object.w != null) { message.w = object.w >>> 0; }
      if (object.h != null) { message.h = object.h >>> 0; }
      return message;
    };

    /**
     * Creates a plain object from a Format message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Format
     * @static
     * @param {ORTBRequest2.Format} message Format
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Format.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.w = 0;
        object.h = 0;
      }
      if (message.w != null && message.hasOwnProperty('w')) { object.w = message.w; }
      if (message.h != null && message.hasOwnProperty('h')) { object.h = message.h; }
      return object;
    };

    /**
     * Converts this Format to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Format
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Format.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Format
     * @function getTypeUrl
     * @memberof ORTBRequest2.Format
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Format.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Format';
    };

    return Format;
  })();

  ORTBRequest2.Banner = (function() {
    /**
     * Properties of a Banner.
     * @memberof ORTBRequest2
     * @interface IBanner
     * @property {number|null} [w] Banner w
     * @property {number|null} [h] Banner h
     * @property {number|null} [pos] Banner pos
     * @property {Array.<ORTBRequest2.IFormat>|null} [format] Banner format
     * @property {number|null} [topframe] Banner topframe
     */

    /**
     * Constructs a new Banner.
     * @memberof ORTBRequest2
     * @classdesc Represents a Banner.
     * @implements IBanner
     * @constructor
     * @param {ORTBRequest2.IBanner=} [properties] Properties to set
     */
    function Banner(properties) {
      this.format = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Banner w.
     * @member {number} w
     * @memberof ORTBRequest2.Banner
     * @instance
     */
    Banner.prototype.w = 0;

    /**
     * Banner h.
     * @member {number} h
     * @memberof ORTBRequest2.Banner
     * @instance
     */
    Banner.prototype.h = 0;

    /**
     * Banner pos.
     * @member {number} pos
     * @memberof ORTBRequest2.Banner
     * @instance
     */
    Banner.prototype.pos = 0;

    /**
     * Banner format.
     * @member {Array.<ORTBRequest2.IFormat>} format
     * @memberof ORTBRequest2.Banner
     * @instance
     */
    Banner.prototype.format = $util.emptyArray;

    /**
     * Banner topframe.
     * @member {number} topframe
     * @memberof ORTBRequest2.Banner
     * @instance
     */
    Banner.prototype.topframe = 0;

    /**
     * Creates a new Banner instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {ORTBRequest2.IBanner=} [properties] Properties to set
     * @returns {ORTBRequest2.Banner} Banner instance
     */
    Banner.create = function create(properties) {
      return new Banner(properties);
    };

    /**
     * Encodes the specified Banner message. Does not implicitly {@link ORTBRequest2.Banner.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {ORTBRequest2.IBanner} message Banner message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Banner.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.w != null && Object.hasOwnProperty.call(message, 'w')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.w); }
      if (message.h != null && Object.hasOwnProperty.call(message, 'h')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.h); }
      if (message.pos != null && Object.hasOwnProperty.call(message, 'pos')) { writer.uint32(/* id 3, wireType 0 = */24).uint32(message.pos); }
      if (message.format != null && message.format.length) {
        for (let i = 0; i < message.format.length; ++i) { $root.ORTBRequest2.Format.encode(message.format[i], writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim(); }
      }
      if (message.topframe != null && Object.hasOwnProperty.call(message, 'topframe')) { writer.uint32(/* id 5, wireType 0 = */40).uint32(message.topframe); }
      return writer;
    };

    /**
     * Encodes the specified Banner message, length delimited. Does not implicitly {@link ORTBRequest2.Banner.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {ORTBRequest2.IBanner} message Banner message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Banner.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Banner message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Banner} Banner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Banner.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Banner();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.w = reader.uint32();
            break;
          }
          case 2: {
            message.h = reader.uint32();
            break;
          }
          case 3: {
            message.pos = reader.uint32();
            break;
          }
          case 4: {
            if (!(message.format && message.format.length)) { message.format = []; }
            message.format.push($root.ORTBRequest2.Format.decode(reader, reader.uint32()));
            break;
          }
          case 5: {
            message.topframe = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Banner message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Banner} Banner
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Banner.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Banner message.
     * @function verify
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Banner.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.w != null && message.hasOwnProperty('w')) {
        if (!$util.isInteger(message.w)) { return 'w: integer expected'; }
      }
      if (message.h != null && message.hasOwnProperty('h')) {
        if (!$util.isInteger(message.h)) { return 'h: integer expected'; }
      }
      if (message.pos != null && message.hasOwnProperty('pos')) {
        if (!$util.isInteger(message.pos)) { return 'pos: integer expected'; }
      }
      if (message.format != null && message.hasOwnProperty('format')) {
        if (!Array.isArray(message.format)) { return 'format: array expected'; }
        for (let i = 0; i < message.format.length; ++i) {
          let error = $root.ORTBRequest2.Format.verify(message.format[i]);
          if (error) { return 'format.' + error; }
        }
      }
      if (message.topframe != null && message.hasOwnProperty('topframe')) {
        if (!$util.isInteger(message.topframe)) { return 'topframe: integer expected'; }
      }
      return null;
    };

    /**
     * Creates a Banner message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Banner} Banner
     */
    Banner.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Banner) { return object; }
      let message = new $root.ORTBRequest2.Banner();
      if (object.w != null) { message.w = object.w >>> 0; }
      if (object.h != null) { message.h = object.h >>> 0; }
      if (object.pos != null) { message.pos = object.pos >>> 0; }
      if (object.format) {
        if (!Array.isArray(object.format)) { throw TypeError('.ORTBRequest2.Banner.format: array expected'); }
        message.format = [];
        for (let i = 0; i < object.format.length; ++i) {
          if (typeof object.format[i] !== 'object') { throw TypeError('.ORTBRequest2.Banner.format: object expected'); }
          message.format[i] = $root.ORTBRequest2.Format.fromObject(object.format[i]);
        }
      }
      if (object.topframe != null) { message.topframe = object.topframe >>> 0; }
      return message;
    };

    /**
     * Creates a plain object from a Banner message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {ORTBRequest2.Banner} message Banner
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Banner.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.arrays || options.defaults) { object.format = []; }
      if (options.defaults) {
        object.w = 0;
        object.h = 0;
        object.pos = 0;
        object.topframe = 0;
      }
      if (message.w != null && message.hasOwnProperty('w')) { object.w = message.w; }
      if (message.h != null && message.hasOwnProperty('h')) { object.h = message.h; }
      if (message.pos != null && message.hasOwnProperty('pos')) { object.pos = message.pos; }
      if (message.format && message.format.length) {
        object.format = [];
        for (let j = 0; j < message.format.length; ++j) { object.format[j] = $root.ORTBRequest2.Format.toObject(message.format[j], options); }
      }
      if (message.topframe != null && message.hasOwnProperty('topframe')) { object.topframe = message.topframe; }
      return object;
    };

    /**
     * Converts this Banner to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Banner
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Banner.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Banner
     * @function getTypeUrl
     * @memberof ORTBRequest2.Banner
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Banner.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Banner';
    };

    return Banner;
  })();

  ORTBRequest2.Imp = (function() {
    /**
     * Properties of an Imp.
     * @memberof ORTBRequest2
     * @interface IImp
     * @property {string|null} [id] Imp id
     * @property {string|null} [tagid] Imp tagid
     * @property {number|null} [bidfloor] Imp bidfloor
     * @property {string|null} [bidfloorcur] Imp bidfloorcur
     * @property {number|null} [secure] Imp secure
     * @property {ORTBRequest2.IExt|null} [ext] Imp ext
     * @property {ORTBRequest2.IBanner|null} [banner] Imp banner
     */

    /**
     * Constructs a new Imp.
     * @memberof ORTBRequest2
     * @classdesc Represents an Imp.
     * @implements IImp
     * @constructor
     * @param {ORTBRequest2.IImp=} [properties] Properties to set
     */
    function Imp(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Imp id.
     * @member {string} id
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.id = '';

    /**
     * Imp tagid.
     * @member {string} tagid
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.tagid = '';

    /**
     * Imp bidfloor.
     * @member {number} bidfloor
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.bidfloor = 0;

    /**
     * Imp bidfloorcur.
     * @member {string} bidfloorcur
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.bidfloorcur = '';

    /**
     * Imp secure.
     * @member {number} secure
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.secure = 0;

    /**
     * Imp ext.
     * @member {ORTBRequest2.IExt|null|undefined} ext
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.ext = null;

    /**
     * Imp banner.
     * @member {ORTBRequest2.IBanner|null|undefined} banner
     * @memberof ORTBRequest2.Imp
     * @instance
     */
    Imp.prototype.banner = null;

    /**
     * Creates a new Imp instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {ORTBRequest2.IImp=} [properties] Properties to set
     * @returns {ORTBRequest2.Imp} Imp instance
     */
    Imp.create = function create(properties) {
      return new Imp(properties);
    };

    /**
     * Encodes the specified Imp message. Does not implicitly {@link ORTBRequest2.Imp.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {ORTBRequest2.IImp} message Imp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Imp.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id); }
      if (message.tagid != null && Object.hasOwnProperty.call(message, 'tagid')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.tagid); }
      if (message.bidfloor != null && Object.hasOwnProperty.call(message, 'bidfloor')) { writer.uint32(/* id 3, wireType 1 = */25).double(message.bidfloor); }
      if (message.bidfloorcur != null && Object.hasOwnProperty.call(message, 'bidfloorcur')) { writer.uint32(/* id 4, wireType 2 = */34).string(message.bidfloorcur); }
      if (message.secure != null && Object.hasOwnProperty.call(message, 'secure')) { writer.uint32(/* id 5, wireType 0 = */40).uint32(message.secure); }
      if (message.ext != null && Object.hasOwnProperty.call(message, 'ext')) { $root.ORTBRequest2.Ext.encode(message.ext, writer.uint32(/* id 6, wireType 2 = */50).fork()).ldelim(); }
      if (message.banner != null && Object.hasOwnProperty.call(message, 'banner')) { $root.ORTBRequest2.Banner.encode(message.banner, writer.uint32(/* id 7, wireType 2 = */58).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Imp message, length delimited. Does not implicitly {@link ORTBRequest2.Imp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {ORTBRequest2.IImp} message Imp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Imp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Imp message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Imp} Imp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Imp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Imp();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.string();
            break;
          }
          case 2: {
            message.tagid = reader.string();
            break;
          }
          case 3: {
            message.bidfloor = reader.double();
            break;
          }
          case 4: {
            message.bidfloorcur = reader.string();
            break;
          }
          case 5: {
            message.secure = reader.uint32();
            break;
          }
          case 6: {
            message.ext = $root.ORTBRequest2.Ext.decode(reader, reader.uint32());
            break;
          }
          case 7: {
            message.banner = $root.ORTBRequest2.Banner.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Imp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Imp} Imp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Imp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Imp message.
     * @function verify
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Imp.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isString(message.id)) { return 'id: string expected'; }
      }
      if (message.tagid != null && message.hasOwnProperty('tagid')) {
        if (!$util.isString(message.tagid)) { return 'tagid: string expected'; }
      }
      if (message.bidfloor != null && message.hasOwnProperty('bidfloor')) {
        if (typeof message.bidfloor !== 'number') { return 'bidfloor: number expected'; }
      }
      if (message.bidfloorcur != null && message.hasOwnProperty('bidfloorcur')) {
        if (!$util.isString(message.bidfloorcur)) { return 'bidfloorcur: string expected'; }
      }
      if (message.secure != null && message.hasOwnProperty('secure')) {
        if (!$util.isInteger(message.secure)) { return 'secure: integer expected'; }
      }
      if (message.ext != null && message.hasOwnProperty('ext')) {
        let error = $root.ORTBRequest2.Ext.verify(message.ext);
        if (error) { return 'ext.' + error; }
      }
      if (message.banner != null && message.hasOwnProperty('banner')) {
        let error = $root.ORTBRequest2.Banner.verify(message.banner);
        if (error) { return 'banner.' + error; }
      }
      return null;
    };

    /**
     * Creates an Imp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Imp} Imp
     */
    Imp.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Imp) { return object; }
      let message = new $root.ORTBRequest2.Imp();
      if (object.id != null) { message.id = String(object.id); }
      if (object.tagid != null) { message.tagid = String(object.tagid); }
      if (object.bidfloor != null) { message.bidfloor = Number(object.bidfloor); }
      if (object.bidfloorcur != null) { message.bidfloorcur = String(object.bidfloorcur); }
      if (object.secure != null) { message.secure = object.secure >>> 0; }
      if (object.ext != null) {
        if (typeof object.ext !== 'object') { throw TypeError('.ORTBRequest2.Imp.ext: object expected'); }
        message.ext = $root.ORTBRequest2.Ext.fromObject(object.ext);
      }
      if (object.banner != null) {
        if (typeof object.banner !== 'object') { throw TypeError('.ORTBRequest2.Imp.banner: object expected'); }
        message.banner = $root.ORTBRequest2.Banner.fromObject(object.banner);
      }
      return message;
    };

    /**
     * Creates a plain object from an Imp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {ORTBRequest2.Imp} message Imp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Imp.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.id = '';
        object.tagid = '';
        object.bidfloor = 0;
        object.bidfloorcur = '';
        object.secure = 0;
        object.ext = null;
        object.banner = null;
      }
      if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id; }
      if (message.tagid != null && message.hasOwnProperty('tagid')) { object.tagid = message.tagid; }
      if (message.bidfloor != null && message.hasOwnProperty('bidfloor')) { object.bidfloor = options.json && !isFinite(message.bidfloor) ? String(message.bidfloor) : message.bidfloor; }
      if (message.bidfloorcur != null && message.hasOwnProperty('bidfloorcur')) { object.bidfloorcur = message.bidfloorcur; }
      if (message.secure != null && message.hasOwnProperty('secure')) { object.secure = message.secure; }
      if (message.ext != null && message.hasOwnProperty('ext')) { object.ext = $root.ORTBRequest2.Ext.toObject(message.ext, options); }
      if (message.banner != null && message.hasOwnProperty('banner')) { object.banner = $root.ORTBRequest2.Banner.toObject(message.banner, options); }
      return object;
    };

    /**
     * Converts this Imp to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Imp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Imp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Imp
     * @function getTypeUrl
     * @memberof ORTBRequest2.Imp
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Imp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Imp';
    };

    return Imp;
  })();

  ORTBRequest2.Publisher = (function() {
    /**
     * Properties of a Publisher.
     * @memberof ORTBRequest2
     * @interface IPublisher
     * @property {string|null} [id] Publisher id
     */

    /**
     * Constructs a new Publisher.
     * @memberof ORTBRequest2
     * @classdesc Represents a Publisher.
     * @implements IPublisher
     * @constructor
     * @param {ORTBRequest2.IPublisher=} [properties] Properties to set
     */
    function Publisher(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Publisher id.
     * @member {string} id
     * @memberof ORTBRequest2.Publisher
     * @instance
     */
    Publisher.prototype.id = '';

    /**
     * Creates a new Publisher instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {ORTBRequest2.IPublisher=} [properties] Properties to set
     * @returns {ORTBRequest2.Publisher} Publisher instance
     */
    Publisher.create = function create(properties) {
      return new Publisher(properties);
    };

    /**
     * Encodes the specified Publisher message. Does not implicitly {@link ORTBRequest2.Publisher.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {ORTBRequest2.IPublisher} message Publisher message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Publisher.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id); }
      return writer;
    };

    /**
     * Encodes the specified Publisher message, length delimited. Does not implicitly {@link ORTBRequest2.Publisher.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {ORTBRequest2.IPublisher} message Publisher message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Publisher.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Publisher message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Publisher} Publisher
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Publisher.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Publisher();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Publisher message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Publisher} Publisher
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Publisher.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Publisher message.
     * @function verify
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Publisher.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isString(message.id)) { return 'id: string expected'; }
      }
      return null;
    };

    /**
     * Creates a Publisher message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Publisher} Publisher
     */
    Publisher.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Publisher) { return object; }
      let message = new $root.ORTBRequest2.Publisher();
      if (object.id != null) { message.id = String(object.id); }
      return message;
    };

    /**
     * Creates a plain object from a Publisher message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {ORTBRequest2.Publisher} message Publisher
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Publisher.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) { object.id = ''; }
      if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id; }
      return object;
    };

    /**
     * Converts this Publisher to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Publisher
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Publisher.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Publisher
     * @function getTypeUrl
     * @memberof ORTBRequest2.Publisher
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Publisher.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Publisher';
    };

    return Publisher;
  })();

  ORTBRequest2.Site = (function() {
    /**
     * Properties of a Site.
     * @memberof ORTBRequest2
     * @interface ISite
     * @property {string|null} [page] Site page
     * @property {string|null} [domain] Site domain
     * @property {string|null} [ref] Site ref
     * @property {ORTBRequest2.IPublisher|null} [publisher] Site publisher
     */

    /**
     * Constructs a new Site.
     * @memberof ORTBRequest2
     * @classdesc Represents a Site.
     * @implements ISite
     * @constructor
     * @param {ORTBRequest2.ISite=} [properties] Properties to set
     */
    function Site(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Site page.
     * @member {string} page
     * @memberof ORTBRequest2.Site
     * @instance
     */
    Site.prototype.page = '';

    /**
     * Site domain.
     * @member {string} domain
     * @memberof ORTBRequest2.Site
     * @instance
     */
    Site.prototype.domain = '';

    /**
     * Site ref.
     * @member {string} ref
     * @memberof ORTBRequest2.Site
     * @instance
     */
    Site.prototype.ref = '';

    /**
     * Site publisher.
     * @member {ORTBRequest2.IPublisher|null|undefined} publisher
     * @memberof ORTBRequest2.Site
     * @instance
     */
    Site.prototype.publisher = null;

    /**
     * Creates a new Site instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Site
     * @static
     * @param {ORTBRequest2.ISite=} [properties] Properties to set
     * @returns {ORTBRequest2.Site} Site instance
     */
    Site.create = function create(properties) {
      return new Site(properties);
    };

    /**
     * Encodes the specified Site message. Does not implicitly {@link ORTBRequest2.Site.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Site
     * @static
     * @param {ORTBRequest2.ISite} message Site message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Site.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.page != null && Object.hasOwnProperty.call(message, 'page')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.page); }
      if (message.domain != null && Object.hasOwnProperty.call(message, 'domain')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.domain); }
      if (message.ref != null && Object.hasOwnProperty.call(message, 'ref')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.ref); }
      if (message.publisher != null && Object.hasOwnProperty.call(message, 'publisher')) { $root.ORTBRequest2.Publisher.encode(message.publisher, writer.uint32(/* id 4, wireType 2 = */34).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Site message, length delimited. Does not implicitly {@link ORTBRequest2.Site.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Site
     * @static
     * @param {ORTBRequest2.ISite} message Site message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Site.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Site message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Site
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Site} Site
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Site.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Site();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.page = reader.string();
            break;
          }
          case 2: {
            message.domain = reader.string();
            break;
          }
          case 3: {
            message.ref = reader.string();
            break;
          }
          case 4: {
            message.publisher = $root.ORTBRequest2.Publisher.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Site message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Site
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Site} Site
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Site.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Site message.
     * @function verify
     * @memberof ORTBRequest2.Site
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Site.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.page != null && message.hasOwnProperty('page')) {
        if (!$util.isString(message.page)) { return 'page: string expected'; }
      }
      if (message.domain != null && message.hasOwnProperty('domain')) {
        if (!$util.isString(message.domain)) { return 'domain: string expected'; }
      }
      if (message.ref != null && message.hasOwnProperty('ref')) {
        if (!$util.isString(message.ref)) { return 'ref: string expected'; }
      }
      if (message.publisher != null && message.hasOwnProperty('publisher')) {
        let error = $root.ORTBRequest2.Publisher.verify(message.publisher);
        if (error) { return 'publisher.' + error; }
      }
      return null;
    };

    /**
     * Creates a Site message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Site
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Site} Site
     */
    Site.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Site) { return object; }
      let message = new $root.ORTBRequest2.Site();
      if (object.page != null) { message.page = String(object.page); }
      if (object.domain != null) { message.domain = String(object.domain); }
      if (object.ref != null) { message.ref = String(object.ref); }
      if (object.publisher != null) {
        if (typeof object.publisher !== 'object') { throw TypeError('.ORTBRequest2.Site.publisher: object expected'); }
        message.publisher = $root.ORTBRequest2.Publisher.fromObject(object.publisher);
      }
      return message;
    };

    /**
     * Creates a plain object from a Site message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Site
     * @static
     * @param {ORTBRequest2.Site} message Site
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Site.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.page = '';
        object.domain = '';
        object.ref = '';
        object.publisher = null;
      }
      if (message.page != null && message.hasOwnProperty('page')) { object.page = message.page; }
      if (message.domain != null && message.hasOwnProperty('domain')) { object.domain = message.domain; }
      if (message.ref != null && message.hasOwnProperty('ref')) { object.ref = message.ref; }
      if (message.publisher != null && message.hasOwnProperty('publisher')) { object.publisher = $root.ORTBRequest2.Publisher.toObject(message.publisher, options); }
      return object;
    };

    /**
     * Converts this Site to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Site
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Site.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Site
     * @function getTypeUrl
     * @memberof ORTBRequest2.Site
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Site.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Site';
    };

    return Site;
  })();

  ORTBRequest2.Geo = (function() {
    /**
     * Properties of a Geo.
     * @memberof ORTBRequest2
     * @interface IGeo
     */

    /**
     * Constructs a new Geo.
     * @memberof ORTBRequest2
     * @classdesc Represents a Geo.
     * @implements IGeo
     * @constructor
     * @param {ORTBRequest2.IGeo=} [properties] Properties to set
     */
    function Geo(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Creates a new Geo instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {ORTBRequest2.IGeo=} [properties] Properties to set
     * @returns {ORTBRequest2.Geo} Geo instance
     */
    Geo.create = function create(properties) {
      return new Geo(properties);
    };

    /**
     * Encodes the specified Geo message. Does not implicitly {@link ORTBRequest2.Geo.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {ORTBRequest2.IGeo} message Geo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Geo.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      return writer;
    };

    /**
     * Encodes the specified Geo message, length delimited. Does not implicitly {@link ORTBRequest2.Geo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {ORTBRequest2.IGeo} message Geo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Geo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Geo message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Geo} Geo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Geo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Geo();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Geo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Geo} Geo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Geo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Geo message.
     * @function verify
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Geo.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      return null;
    };

    /**
     * Creates a Geo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Geo} Geo
     */
    Geo.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Geo) { return object; }
      return new $root.ORTBRequest2.Geo();
    };

    /**
     * Creates a plain object from a Geo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {ORTBRequest2.Geo} message Geo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Geo.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this Geo to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Geo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Geo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Geo
     * @function getTypeUrl
     * @memberof ORTBRequest2.Geo
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Geo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Geo';
    };

    return Geo;
  })();

  ORTBRequest2.Device = (function() {
    /**
     * Properties of a Device.
     * @memberof ORTBRequest2
     * @interface IDevice
     * @property {string|null} [ua] Device ua
     * @property {number|null} [js] Device js
     * @property {number|null} [h] Device h
     * @property {number|null} [w] Device w
     * @property {number|null} [dnt] Device dnt
     * @property {string|null} [language] Device language
     * @property {ORTBRequest2.IGeo|null} [geo] Device geo
     */

    /**
     * Constructs a new Device.
     * @memberof ORTBRequest2
     * @classdesc Represents a Device.
     * @implements IDevice
     * @constructor
     * @param {ORTBRequest2.IDevice=} [properties] Properties to set
     */
    function Device(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Device ua.
     * @member {string} ua
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.ua = '';

    /**
     * Device js.
     * @member {number} js
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.js = 0;

    /**
     * Device h.
     * @member {number} h
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.h = 0;

    /**
     * Device w.
     * @member {number} w
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.w = 0;

    /**
     * Device dnt.
     * @member {number} dnt
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.dnt = 0;

    /**
     * Device language.
     * @member {string} language
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.language = '';

    /**
     * Device geo.
     * @member {ORTBRequest2.IGeo|null|undefined} geo
     * @memberof ORTBRequest2.Device
     * @instance
     */
    Device.prototype.geo = null;

    /**
     * Creates a new Device instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Device
     * @static
     * @param {ORTBRequest2.IDevice=} [properties] Properties to set
     * @returns {ORTBRequest2.Device} Device instance
     */
    Device.create = function create(properties) {
      return new Device(properties);
    };

    /**
     * Encodes the specified Device message. Does not implicitly {@link ORTBRequest2.Device.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Device
     * @static
     * @param {ORTBRequest2.IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.ua != null && Object.hasOwnProperty.call(message, 'ua')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.ua); }
      if (message.js != null && Object.hasOwnProperty.call(message, 'js')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.js); }
      if (message.h != null && Object.hasOwnProperty.call(message, 'h')) { writer.uint32(/* id 3, wireType 0 = */24).uint32(message.h); }
      if (message.w != null && Object.hasOwnProperty.call(message, 'w')) { writer.uint32(/* id 4, wireType 0 = */32).uint32(message.w); }
      if (message.dnt != null && Object.hasOwnProperty.call(message, 'dnt')) { writer.uint32(/* id 5, wireType 0 = */40).uint32(message.dnt); }
      if (message.language != null && Object.hasOwnProperty.call(message, 'language')) { writer.uint32(/* id 6, wireType 2 = */50).string(message.language); }
      if (message.geo != null && Object.hasOwnProperty.call(message, 'geo')) { $root.ORTBRequest2.Geo.encode(message.geo, writer.uint32(/* id 7, wireType 2 = */58).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Device message, length delimited. Does not implicitly {@link ORTBRequest2.Device.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Device
     * @static
     * @param {ORTBRequest2.IDevice} message Device message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Device.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Device message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Device();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.ua = reader.string();
            break;
          }
          case 2: {
            message.js = reader.uint32();
            break;
          }
          case 3: {
            message.h = reader.uint32();
            break;
          }
          case 4: {
            message.w = reader.uint32();
            break;
          }
          case 5: {
            message.dnt = reader.uint32();
            break;
          }
          case 6: {
            message.language = reader.string();
            break;
          }
          case 7: {
            message.geo = $root.ORTBRequest2.Geo.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Device message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Device
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Device} Device
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Device.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Device message.
     * @function verify
     * @memberof ORTBRequest2.Device
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Device.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.ua != null && message.hasOwnProperty('ua')) {
        if (!$util.isString(message.ua)) { return 'ua: string expected'; }
      }
      if (message.js != null && message.hasOwnProperty('js')) {
        if (!$util.isInteger(message.js)) { return 'js: integer expected'; }
      }
      if (message.h != null && message.hasOwnProperty('h')) {
        if (!$util.isInteger(message.h)) { return 'h: integer expected'; }
      }
      if (message.w != null && message.hasOwnProperty('w')) {
        if (!$util.isInteger(message.w)) { return 'w: integer expected'; }
      }
      if (message.dnt != null && message.hasOwnProperty('dnt')) {
        if (!$util.isInteger(message.dnt)) { return 'dnt: integer expected'; }
      }
      if (message.language != null && message.hasOwnProperty('language')) {
        if (!$util.isString(message.language)) { return 'language: string expected'; }
      }
      if (message.geo != null && message.hasOwnProperty('geo')) {
        let error = $root.ORTBRequest2.Geo.verify(message.geo);
        if (error) { return 'geo.' + error; }
      }
      return null;
    };

    /**
     * Creates a Device message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Device
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Device} Device
     */
    Device.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Device) { return object; }
      let message = new $root.ORTBRequest2.Device();
      if (object.ua != null) { message.ua = String(object.ua); }
      if (object.js != null) { message.js = object.js >>> 0; }
      if (object.h != null) { message.h = object.h >>> 0; }
      if (object.w != null) { message.w = object.w >>> 0; }
      if (object.dnt != null) { message.dnt = object.dnt >>> 0; }
      if (object.language != null) { message.language = String(object.language); }
      if (object.geo != null) {
        if (typeof object.geo !== 'object') { throw TypeError('.ORTBRequest2.Device.geo: object expected'); }
        message.geo = $root.ORTBRequest2.Geo.fromObject(object.geo);
      }
      return message;
    };

    /**
     * Creates a plain object from a Device message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Device
     * @static
     * @param {ORTBRequest2.Device} message Device
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Device.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.ua = '';
        object.js = 0;
        object.h = 0;
        object.w = 0;
        object.dnt = 0;
        object.language = '';
        object.geo = null;
      }
      if (message.ua != null && message.hasOwnProperty('ua')) { object.ua = message.ua; }
      if (message.js != null && message.hasOwnProperty('js')) { object.js = message.js; }
      if (message.h != null && message.hasOwnProperty('h')) { object.h = message.h; }
      if (message.w != null && message.hasOwnProperty('w')) { object.w = message.w; }
      if (message.dnt != null && message.hasOwnProperty('dnt')) { object.dnt = message.dnt; }
      if (message.language != null && message.hasOwnProperty('language')) { object.language = message.language; }
      if (message.geo != null && message.hasOwnProperty('geo')) { object.geo = $root.ORTBRequest2.Geo.toObject(message.geo, options); }
      return object;
    };

    /**
     * Converts this Device to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Device
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Device.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Device
     * @function getTypeUrl
     * @memberof ORTBRequest2.Device
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Device.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Device';
    };

    return Device;
  })();

  ORTBRequest2.Geo1 = (function() {
    /**
     * Properties of a Geo1.
     * @memberof ORTBRequest2
     * @interface IGeo1
     */

    /**
     * Constructs a new Geo1.
     * @memberof ORTBRequest2
     * @classdesc Represents a Geo1.
     * @implements IGeo1
     * @constructor
     * @param {ORTBRequest2.IGeo1=} [properties] Properties to set
     */
    function Geo1(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Creates a new Geo1 instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {ORTBRequest2.IGeo1=} [properties] Properties to set
     * @returns {ORTBRequest2.Geo1} Geo1 instance
     */
    Geo1.create = function create(properties) {
      return new Geo1(properties);
    };

    /**
     * Encodes the specified Geo1 message. Does not implicitly {@link ORTBRequest2.Geo1.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {ORTBRequest2.IGeo1} message Geo1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Geo1.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      return writer;
    };

    /**
     * Encodes the specified Geo1 message, length delimited. Does not implicitly {@link ORTBRequest2.Geo1.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {ORTBRequest2.IGeo1} message Geo1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Geo1.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Geo1 message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Geo1} Geo1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Geo1.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Geo1();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Geo1 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Geo1} Geo1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Geo1.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Geo1 message.
     * @function verify
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Geo1.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      return null;
    };

    /**
     * Creates a Geo1 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Geo1} Geo1
     */
    Geo1.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Geo1) { return object; }
      return new $root.ORTBRequest2.Geo1();
    };

    /**
     * Creates a plain object from a Geo1 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {ORTBRequest2.Geo1} message Geo1
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Geo1.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this Geo1 to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Geo1
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Geo1.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Geo1
     * @function getTypeUrl
     * @memberof ORTBRequest2.Geo1
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Geo1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Geo1';
    };

    return Geo1;
  })();

  ORTBRequest2.Ext1 = (function() {
    /**
     * Properties of an Ext1.
     * @memberof ORTBRequest2
     * @interface IExt1
     * @property {number|null} [linkType] Ext1 linkType
     * @property {string|null} [pba] Ext1 pba
     */

    /**
     * Constructs a new Ext1.
     * @memberof ORTBRequest2
     * @classdesc Represents an Ext1.
     * @implements IExt1
     * @constructor
     * @param {ORTBRequest2.IExt1=} [properties] Properties to set
     */
    function Ext1(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Ext1 linkType.
     * @member {number} linkType
     * @memberof ORTBRequest2.Ext1
     * @instance
     */
    Ext1.prototype.linkType = 0;

    /**
     * Ext1 pba.
     * @member {string} pba
     * @memberof ORTBRequest2.Ext1
     * @instance
     */
    Ext1.prototype.pba = '';

    /**
     * Creates a new Ext1 instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {ORTBRequest2.IExt1=} [properties] Properties to set
     * @returns {ORTBRequest2.Ext1} Ext1 instance
     */
    Ext1.create = function create(properties) {
      return new Ext1(properties);
    };

    /**
     * Encodes the specified Ext1 message. Does not implicitly {@link ORTBRequest2.Ext1.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {ORTBRequest2.IExt1} message Ext1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext1.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.linkType != null && Object.hasOwnProperty.call(message, 'linkType')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.linkType); }
      if (message.pba != null && Object.hasOwnProperty.call(message, 'pba')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.pba); }
      return writer;
    };

    /**
     * Encodes the specified Ext1 message, length delimited. Does not implicitly {@link ORTBRequest2.Ext1.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {ORTBRequest2.IExt1} message Ext1 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext1.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ext1 message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Ext1} Ext1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext1.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Ext1();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.linkType = reader.uint32();
            break;
          }
          case 2: {
            message.pba = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Ext1 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Ext1} Ext1
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext1.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ext1 message.
     * @function verify
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ext1.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.linkType != null && message.hasOwnProperty('linkType')) {
        if (!$util.isInteger(message.linkType)) { return 'linkType: integer expected'; }
      }
      if (message.pba != null && message.hasOwnProperty('pba')) {
        if (!$util.isString(message.pba)) { return 'pba: string expected'; }
      }
      return null;
    };

    /**
     * Creates an Ext1 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Ext1} Ext1
     */
    Ext1.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Ext1) { return object; }
      let message = new $root.ORTBRequest2.Ext1();
      if (object.linkType != null) { message.linkType = object.linkType >>> 0; }
      if (object.pba != null) { message.pba = String(object.pba); }
      return message;
    };

    /**
     * Creates a plain object from an Ext1 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {ORTBRequest2.Ext1} message Ext1
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ext1.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.linkType = 0;
        object.pba = '';
      }
      if (message.linkType != null && message.hasOwnProperty('linkType')) { object.linkType = message.linkType; }
      if (message.pba != null && message.hasOwnProperty('pba')) { object.pba = message.pba; }
      return object;
    };

    /**
     * Converts this Ext1 to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Ext1
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ext1.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ext1
     * @function getTypeUrl
     * @memberof ORTBRequest2.Ext1
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ext1.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Ext1';
    };

    return Ext1;
  })();

  ORTBRequest2.Uids = (function() {
    /**
     * Properties of an Uids.
     * @memberof ORTBRequest2
     * @interface IUids
     * @property {string|null} [id] Uids id
     * @property {number|null} [atype] Uids atype
     * @property {ORTBRequest2.IExt1|null} [ext] Uids ext
     */

    /**
     * Constructs a new Uids.
     * @memberof ORTBRequest2
     * @classdesc Represents an Uids.
     * @implements IUids
     * @constructor
     * @param {ORTBRequest2.IUids=} [properties] Properties to set
     */
    function Uids(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Uids id.
     * @member {string} id
     * @memberof ORTBRequest2.Uids
     * @instance
     */
    Uids.prototype.id = '';

    /**
     * Uids atype.
     * @member {number} atype
     * @memberof ORTBRequest2.Uids
     * @instance
     */
    Uids.prototype.atype = 0;

    /**
     * Uids ext.
     * @member {ORTBRequest2.IExt1|null|undefined} ext
     * @memberof ORTBRequest2.Uids
     * @instance
     */
    Uids.prototype.ext = null;

    /**
     * Creates a new Uids instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {ORTBRequest2.IUids=} [properties] Properties to set
     * @returns {ORTBRequest2.Uids} Uids instance
     */
    Uids.create = function create(properties) {
      return new Uids(properties);
    };

    /**
     * Encodes the specified Uids message. Does not implicitly {@link ORTBRequest2.Uids.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {ORTBRequest2.IUids} message Uids message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Uids.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.id); }
      if (message.atype != null && Object.hasOwnProperty.call(message, 'atype')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.atype); }
      if (message.ext != null && Object.hasOwnProperty.call(message, 'ext')) { $root.ORTBRequest2.Ext1.encode(message.ext, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Uids message, length delimited. Does not implicitly {@link ORTBRequest2.Uids.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {ORTBRequest2.IUids} message Uids message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Uids.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Uids message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Uids} Uids
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Uids.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Uids();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.string();
            break;
          }
          case 2: {
            message.atype = reader.uint32();
            break;
          }
          case 3: {
            message.ext = $root.ORTBRequest2.Ext1.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Uids message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Uids} Uids
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Uids.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Uids message.
     * @function verify
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Uids.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isString(message.id)) { return 'id: string expected'; }
      }
      if (message.atype != null && message.hasOwnProperty('atype')) {
        if (!$util.isInteger(message.atype)) { return 'atype: integer expected'; }
      }
      if (message.ext != null && message.hasOwnProperty('ext')) {
        let error = $root.ORTBRequest2.Ext1.verify(message.ext);
        if (error) { return 'ext.' + error; }
      }
      return null;
    };

    /**
     * Creates an Uids message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Uids} Uids
     */
    Uids.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Uids) { return object; }
      let message = new $root.ORTBRequest2.Uids();
      if (object.id != null) { message.id = String(object.id); }
      if (object.atype != null) { message.atype = object.atype >>> 0; }
      if (object.ext != null) {
        if (typeof object.ext !== 'object') { throw TypeError('.ORTBRequest2.Uids.ext: object expected'); }
        message.ext = $root.ORTBRequest2.Ext1.fromObject(object.ext);
      }
      return message;
    };

    /**
     * Creates a plain object from an Uids message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {ORTBRequest2.Uids} message Uids
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Uids.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.id = '';
        object.atype = 0;
        object.ext = null;
      }
      if (message.id != null && message.hasOwnProperty('id')) { object.id = message.id; }
      if (message.atype != null && message.hasOwnProperty('atype')) { object.atype = message.atype; }
      if (message.ext != null && message.hasOwnProperty('ext')) { object.ext = $root.ORTBRequest2.Ext1.toObject(message.ext, options); }
      return object;
    };

    /**
     * Converts this Uids to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Uids
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Uids.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Uids
     * @function getTypeUrl
     * @memberof ORTBRequest2.Uids
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Uids.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Uids';
    };

    return Uids;
  })();

  ORTBRequest2.Eids = (function() {
    /**
     * Properties of an Eids.
     * @memberof ORTBRequest2
     * @interface IEids
     * @property {string|null} [source] Eids source
     * @property {Array.<ORTBRequest2.IUids>|null} [uids] Eids uids
     */

    /**
     * Constructs a new Eids.
     * @memberof ORTBRequest2
     * @classdesc Represents an Eids.
     * @implements IEids
     * @constructor
     * @param {ORTBRequest2.IEids=} [properties] Properties to set
     */
    function Eids(properties) {
      this.uids = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Eids source.
     * @member {string} source
     * @memberof ORTBRequest2.Eids
     * @instance
     */
    Eids.prototype.source = '';

    /**
     * Eids uids.
     * @member {Array.<ORTBRequest2.IUids>} uids
     * @memberof ORTBRequest2.Eids
     * @instance
     */
    Eids.prototype.uids = $util.emptyArray;

    /**
     * Creates a new Eids instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {ORTBRequest2.IEids=} [properties] Properties to set
     * @returns {ORTBRequest2.Eids} Eids instance
     */
    Eids.create = function create(properties) {
      return new Eids(properties);
    };

    /**
     * Encodes the specified Eids message. Does not implicitly {@link ORTBRequest2.Eids.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {ORTBRequest2.IEids} message Eids message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Eids.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.source != null && Object.hasOwnProperty.call(message, 'source')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.source); }
      if (message.uids != null && message.uids.length) {
        for (let i = 0; i < message.uids.length; ++i) { $root.ORTBRequest2.Uids.encode(message.uids[i], writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim(); }
      }
      return writer;
    };

    /**
     * Encodes the specified Eids message, length delimited. Does not implicitly {@link ORTBRequest2.Eids.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {ORTBRequest2.IEids} message Eids message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Eids.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Eids message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Eids} Eids
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Eids.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Eids();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.source = reader.string();
            break;
          }
          case 2: {
            if (!(message.uids && message.uids.length)) { message.uids = []; }
            message.uids.push($root.ORTBRequest2.Uids.decode(reader, reader.uint32()));
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Eids message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Eids} Eids
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Eids.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Eids message.
     * @function verify
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Eids.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.source != null && message.hasOwnProperty('source')) {
        if (!$util.isString(message.source)) { return 'source: string expected'; }
      }
      if (message.uids != null && message.hasOwnProperty('uids')) {
        if (!Array.isArray(message.uids)) { return 'uids: array expected'; }
        for (let i = 0; i < message.uids.length; ++i) {
          let error = $root.ORTBRequest2.Uids.verify(message.uids[i]);
          if (error) { return 'uids.' + error; }
        }
      }
      return null;
    };

    /**
     * Creates an Eids message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Eids} Eids
     */
    Eids.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Eids) { return object; }
      let message = new $root.ORTBRequest2.Eids();
      if (object.source != null) { message.source = String(object.source); }
      if (object.uids) {
        if (!Array.isArray(object.uids)) { throw TypeError('.ORTBRequest2.Eids.uids: array expected'); }
        message.uids = [];
        for (let i = 0; i < object.uids.length; ++i) {
          if (typeof object.uids[i] !== 'object') { throw TypeError('.ORTBRequest2.Eids.uids: object expected'); }
          message.uids[i] = $root.ORTBRequest2.Uids.fromObject(object.uids[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an Eids message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {ORTBRequest2.Eids} message Eids
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Eids.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.arrays || options.defaults) { object.uids = []; }
      if (options.defaults) { object.source = ''; }
      if (message.source != null && message.hasOwnProperty('source')) { object.source = message.source; }
      if (message.uids && message.uids.length) {
        object.uids = [];
        for (let j = 0; j < message.uids.length; ++j) { object.uids[j] = $root.ORTBRequest2.Uids.toObject(message.uids[j], options); }
      }
      return object;
    };

    /**
     * Converts this Eids to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Eids
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Eids.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Eids
     * @function getTypeUrl
     * @memberof ORTBRequest2.Eids
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Eids.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Eids';
    };

    return Eids;
  })();

  ORTBRequest2.Ext2 = (function() {
    /**
     * Properties of an Ext2.
     * @memberof ORTBRequest2
     * @interface IExt2
     * @property {string|null} [consent] Ext2 consent
     */

    /**
     * Constructs a new Ext2.
     * @memberof ORTBRequest2
     * @classdesc Represents an Ext2.
     * @implements IExt2
     * @constructor
     * @param {ORTBRequest2.IExt2=} [properties] Properties to set
     */
    function Ext2(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Ext2 consent.
     * @member {string} consent
     * @memberof ORTBRequest2.Ext2
     * @instance
     */
    Ext2.prototype.consent = '';

    /**
     * Creates a new Ext2 instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {ORTBRequest2.IExt2=} [properties] Properties to set
     * @returns {ORTBRequest2.Ext2} Ext2 instance
     */
    Ext2.create = function create(properties) {
      return new Ext2(properties);
    };

    /**
     * Encodes the specified Ext2 message. Does not implicitly {@link ORTBRequest2.Ext2.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {ORTBRequest2.IExt2} message Ext2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext2.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.consent != null && Object.hasOwnProperty.call(message, 'consent')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.consent); }
      return writer;
    };

    /**
     * Encodes the specified Ext2 message, length delimited. Does not implicitly {@link ORTBRequest2.Ext2.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {ORTBRequest2.IExt2} message Ext2 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext2.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ext2 message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Ext2} Ext2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext2.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Ext2();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.consent = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Ext2 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Ext2} Ext2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext2.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ext2 message.
     * @function verify
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ext2.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.consent != null && message.hasOwnProperty('consent')) {
        if (!$util.isString(message.consent)) { return 'consent: string expected'; }
      }
      return null;
    };

    /**
     * Creates an Ext2 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Ext2} Ext2
     */
    Ext2.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Ext2) { return object; }
      let message = new $root.ORTBRequest2.Ext2();
      if (object.consent != null) { message.consent = String(object.consent); }
      return message;
    };

    /**
     * Creates a plain object from an Ext2 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {ORTBRequest2.Ext2} message Ext2
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ext2.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) { object.consent = ''; }
      if (message.consent != null && message.hasOwnProperty('consent')) { object.consent = message.consent; }
      return object;
    };

    /**
     * Converts this Ext2 to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Ext2
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ext2.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ext2
     * @function getTypeUrl
     * @memberof ORTBRequest2.Ext2
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ext2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Ext2';
    };

    return Ext2;
  })();

  ORTBRequest2.User = (function() {
    /**
     * Properties of a User.
     * @memberof ORTBRequest2
     * @interface IUser
     * @property {ORTBRequest2.IGeo1|null} [geo] User geo
     * @property {Array.<ORTBRequest2.IEids>|null} [eids] User eids
     * @property {ORTBRequest2.IExt2|null} [ext] User ext
     */

    /**
     * Constructs a new User.
     * @memberof ORTBRequest2
     * @classdesc Represents a User.
     * @implements IUser
     * @constructor
     * @param {ORTBRequest2.IUser=} [properties] Properties to set
     */
    function User(properties) {
      this.eids = [];
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * User geo.
     * @member {ORTBRequest2.IGeo1|null|undefined} geo
     * @memberof ORTBRequest2.User
     * @instance
     */
    User.prototype.geo = null;

    /**
     * User eids.
     * @member {Array.<ORTBRequest2.IEids>} eids
     * @memberof ORTBRequest2.User
     * @instance
     */
    User.prototype.eids = $util.emptyArray;

    /**
     * User ext.
     * @member {ORTBRequest2.IExt2|null|undefined} ext
     * @memberof ORTBRequest2.User
     * @instance
     */
    User.prototype.ext = null;

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.User
     * @static
     * @param {ORTBRequest2.IUser=} [properties] Properties to set
     * @returns {ORTBRequest2.User} User instance
     */
    User.create = function create(properties) {
      return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link ORTBRequest2.User.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.User
     * @static
     * @param {ORTBRequest2.IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.geo != null && Object.hasOwnProperty.call(message, 'geo')) { $root.ORTBRequest2.Geo1.encode(message.geo, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim(); }
      if (message.eids != null && message.eids.length) {
        for (let i = 0; i < message.eids.length; ++i) { $root.ORTBRequest2.Eids.encode(message.eids[i], writer.uint32(/* id 2, wireType 2 = */18).fork()).ldelim(); }
      }
      if (message.ext != null && Object.hasOwnProperty.call(message, 'ext')) { $root.ORTBRequest2.Ext2.encode(message.ext, writer.uint32(/* id 3, wireType 2 = */26).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link ORTBRequest2.User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.User
     * @static
     * @param {ORTBRequest2.IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.User();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.geo = $root.ORTBRequest2.Geo1.decode(reader, reader.uint32());
            break;
          }
          case 2: {
            if (!(message.eids && message.eids.length)) { message.eids = []; }
            message.eids.push($root.ORTBRequest2.Eids.decode(reader, reader.uint32()));
            break;
          }
          case 3: {
            message.ext = $root.ORTBRequest2.Ext2.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof ORTBRequest2.User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.geo != null && message.hasOwnProperty('geo')) {
        let error = $root.ORTBRequest2.Geo1.verify(message.geo);
        if (error) { return 'geo.' + error; }
      }
      if (message.eids != null && message.hasOwnProperty('eids')) {
        if (!Array.isArray(message.eids)) { return 'eids: array expected'; }
        for (let i = 0; i < message.eids.length; ++i) {
          let error = $root.ORTBRequest2.Eids.verify(message.eids[i]);
          if (error) { return 'eids.' + error; }
        }
      }
      if (message.ext != null && message.hasOwnProperty('ext')) {
        let error = $root.ORTBRequest2.Ext2.verify(message.ext);
        if (error) { return 'ext.' + error; }
      }
      return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.User} User
     */
    User.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.User) { return object; }
      let message = new $root.ORTBRequest2.User();
      if (object.geo != null) {
        if (typeof object.geo !== 'object') { throw TypeError('.ORTBRequest2.User.geo: object expected'); }
        message.geo = $root.ORTBRequest2.Geo1.fromObject(object.geo);
      }
      if (object.eids) {
        if (!Array.isArray(object.eids)) { throw TypeError('.ORTBRequest2.User.eids: array expected'); }
        message.eids = [];
        for (let i = 0; i < object.eids.length; ++i) {
          if (typeof object.eids[i] !== 'object') { throw TypeError('.ORTBRequest2.User.eids: object expected'); }
          message.eids[i] = $root.ORTBRequest2.Eids.fromObject(object.eids[i]);
        }
      }
      if (object.ext != null) {
        if (typeof object.ext !== 'object') { throw TypeError('.ORTBRequest2.User.ext: object expected'); }
        message.ext = $root.ORTBRequest2.Ext2.fromObject(object.ext);
      }
      return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.User
     * @static
     * @param {ORTBRequest2.User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.arrays || options.defaults) { object.eids = []; }
      if (options.defaults) {
        object.geo = null;
        object.ext = null;
      }
      if (message.geo != null && message.hasOwnProperty('geo')) { object.geo = $root.ORTBRequest2.Geo1.toObject(message.geo, options); }
      if (message.eids && message.eids.length) {
        object.eids = [];
        for (let j = 0; j < message.eids.length; ++j) { object.eids[j] = $root.ORTBRequest2.Eids.toObject(message.eids[j], options); }
      }
      if (message.ext != null && message.hasOwnProperty('ext')) { object.ext = $root.ORTBRequest2.Ext2.toObject(message.ext, options); }
      return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for User
     * @function getTypeUrl
     * @memberof ORTBRequest2.User
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.User';
    };

    return User;
  })();

  ORTBRequest2.Wrapper = (function() {
    /**
     * Properties of a Wrapper.
     * @memberof ORTBRequest2
     * @interface IWrapper
     * @property {string|null} [wp] Wrapper wp
     * @property {string|null} [wv] Wrapper wv
     * @property {string|null} [transactionId] Wrapper transactionId
     */

    /**
     * Constructs a new Wrapper.
     * @memberof ORTBRequest2
     * @classdesc Represents a Wrapper.
     * @implements IWrapper
     * @constructor
     * @param {ORTBRequest2.IWrapper=} [properties] Properties to set
     */
    function Wrapper(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Wrapper wp.
     * @member {string} wp
     * @memberof ORTBRequest2.Wrapper
     * @instance
     */
    Wrapper.prototype.wp = '';

    /**
     * Wrapper wv.
     * @member {string} wv
     * @memberof ORTBRequest2.Wrapper
     * @instance
     */
    Wrapper.prototype.wv = '';

    /**
     * Wrapper transactionId.
     * @member {string} transactionId
     * @memberof ORTBRequest2.Wrapper
     * @instance
     */
    Wrapper.prototype.transactionId = '';

    /**
     * Creates a new Wrapper instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {ORTBRequest2.IWrapper=} [properties] Properties to set
     * @returns {ORTBRequest2.Wrapper} Wrapper instance
     */
    Wrapper.create = function create(properties) {
      return new Wrapper(properties);
    };

    /**
     * Encodes the specified Wrapper message. Does not implicitly {@link ORTBRequest2.Wrapper.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {ORTBRequest2.IWrapper} message Wrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wrapper.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.wp != null && Object.hasOwnProperty.call(message, 'wp')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.wp); }
      if (message.wv != null && Object.hasOwnProperty.call(message, 'wv')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.wv); }
      if (message.transactionId != null && Object.hasOwnProperty.call(message, 'transactionId')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.transactionId); }
      return writer;
    };

    /**
     * Encodes the specified Wrapper message, length delimited. Does not implicitly {@link ORTBRequest2.Wrapper.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {ORTBRequest2.IWrapper} message Wrapper message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Wrapper.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Wrapper message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Wrapper} Wrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wrapper.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Wrapper();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.wp = reader.string();
            break;
          }
          case 2: {
            message.wv = reader.string();
            break;
          }
          case 3: {
            message.transactionId = reader.string();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Wrapper message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Wrapper} Wrapper
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Wrapper.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Wrapper message.
     * @function verify
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Wrapper.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.wp != null && message.hasOwnProperty('wp')) {
        if (!$util.isString(message.wp)) { return 'wp: string expected'; }
      }
      if (message.wv != null && message.hasOwnProperty('wv')) {
        if (!$util.isString(message.wv)) { return 'wv: string expected'; }
      }
      if (message.transactionId != null && message.hasOwnProperty('transactionId')) {
        if (!$util.isString(message.transactionId)) { return 'transactionId: string expected'; }
      }
      return null;
    };

    /**
     * Creates a Wrapper message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Wrapper} Wrapper
     */
    Wrapper.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Wrapper) { return object; }
      let message = new $root.ORTBRequest2.Wrapper();
      if (object.wp != null) { message.wp = String(object.wp); }
      if (object.wv != null) { message.wv = String(object.wv); }
      if (object.transactionId != null) { message.transactionId = String(object.transactionId); }
      return message;
    };

    /**
     * Creates a plain object from a Wrapper message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {ORTBRequest2.Wrapper} message Wrapper
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Wrapper.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) {
        object.wp = '';
        object.wv = '';
        object.transactionId = '';
      }
      if (message.wp != null && message.hasOwnProperty('wp')) { object.wp = message.wp; }
      if (message.wv != null && message.hasOwnProperty('wv')) { object.wv = message.wv; }
      if (message.transactionId != null && message.hasOwnProperty('transactionId')) { object.transactionId = message.transactionId; }
      return object;
    };

    /**
     * Converts this Wrapper to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Wrapper
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Wrapper.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Wrapper
     * @function getTypeUrl
     * @memberof ORTBRequest2.Wrapper
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Wrapper.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Wrapper';
    };

    return Wrapper;
  })();

  ORTBRequest2.Ext3 = (function() {
    /**
     * Properties of an Ext3.
     * @memberof ORTBRequest2
     * @interface IExt3
     * @property {ORTBRequest2.IWrapper|null} [wrapper] Ext3 wrapper
     */

    /**
     * Constructs a new Ext3.
     * @memberof ORTBRequest2
     * @classdesc Represents an Ext3.
     * @implements IExt3
     * @constructor
     * @param {ORTBRequest2.IExt3=} [properties] Properties to set
     */
    function Ext3(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Ext3 wrapper.
     * @member {ORTBRequest2.IWrapper|null|undefined} wrapper
     * @memberof ORTBRequest2.Ext3
     * @instance
     */
    Ext3.prototype.wrapper = null;

    /**
     * Creates a new Ext3 instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {ORTBRequest2.IExt3=} [properties] Properties to set
     * @returns {ORTBRequest2.Ext3} Ext3 instance
     */
    Ext3.create = function create(properties) {
      return new Ext3(properties);
    };

    /**
     * Encodes the specified Ext3 message. Does not implicitly {@link ORTBRequest2.Ext3.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {ORTBRequest2.IExt3} message Ext3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext3.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.wrapper != null && Object.hasOwnProperty.call(message, 'wrapper')) { $root.ORTBRequest2.Wrapper.encode(message.wrapper, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Ext3 message, length delimited. Does not implicitly {@link ORTBRequest2.Ext3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {ORTBRequest2.IExt3} message Ext3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext3.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ext3 message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Ext3} Ext3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext3.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Ext3();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.wrapper = $root.ORTBRequest2.Wrapper.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Ext3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Ext3} Ext3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext3.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ext3 message.
     * @function verify
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ext3.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.wrapper != null && message.hasOwnProperty('wrapper')) {
        let error = $root.ORTBRequest2.Wrapper.verify(message.wrapper);
        if (error) { return 'wrapper.' + error; }
      }
      return null;
    };

    /**
     * Creates an Ext3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Ext3} Ext3
     */
    Ext3.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Ext3) { return object; }
      let message = new $root.ORTBRequest2.Ext3();
      if (object.wrapper != null) {
        if (typeof object.wrapper !== 'object') { throw TypeError('.ORTBRequest2.Ext3.wrapper: object expected'); }
        message.wrapper = $root.ORTBRequest2.Wrapper.fromObject(object.wrapper);
      }
      return message;
    };

    /**
     * Creates a plain object from an Ext3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {ORTBRequest2.Ext3} message Ext3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ext3.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) { object.wrapper = null; }
      if (message.wrapper != null && message.hasOwnProperty('wrapper')) { object.wrapper = $root.ORTBRequest2.Wrapper.toObject(message.wrapper, options); }
      return object;
    };

    /**
     * Converts this Ext3 to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Ext3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ext3.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ext3
     * @function getTypeUrl
     * @memberof ORTBRequest2.Ext3
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ext3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Ext3';
    };

    return Ext3;
  })();

  ORTBRequest2.Ext4 = (function() {
    /**
     * Properties of an Ext4.
     * @memberof ORTBRequest2
     * @interface IExt4
     * @property {number|null} [gdpr] Ext4 gdpr
     */

    /**
     * Constructs a new Ext4.
     * @memberof ORTBRequest2
     * @classdesc Represents an Ext4.
     * @implements IExt4
     * @constructor
     * @param {ORTBRequest2.IExt4=} [properties] Properties to set
     */
    function Ext4(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Ext4 gdpr.
     * @member {number} gdpr
     * @memberof ORTBRequest2.Ext4
     * @instance
     */
    Ext4.prototype.gdpr = 0;

    /**
     * Creates a new Ext4 instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {ORTBRequest2.IExt4=} [properties] Properties to set
     * @returns {ORTBRequest2.Ext4} Ext4 instance
     */
    Ext4.create = function create(properties) {
      return new Ext4(properties);
    };

    /**
     * Encodes the specified Ext4 message. Does not implicitly {@link ORTBRequest2.Ext4.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {ORTBRequest2.IExt4} message Ext4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext4.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.gdpr != null && Object.hasOwnProperty.call(message, 'gdpr')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.gdpr); }
      return writer;
    };

    /**
     * Encodes the specified Ext4 message, length delimited. Does not implicitly {@link ORTBRequest2.Ext4.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {ORTBRequest2.IExt4} message Ext4 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Ext4.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Ext4 message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Ext4} Ext4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext4.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Ext4();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.gdpr = reader.uint32();
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Ext4 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Ext4} Ext4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Ext4.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Ext4 message.
     * @function verify
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Ext4.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.gdpr != null && message.hasOwnProperty('gdpr')) {
        if (!$util.isInteger(message.gdpr)) { return 'gdpr: integer expected'; }
      }
      return null;
    };

    /**
     * Creates an Ext4 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Ext4} Ext4
     */
    Ext4.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Ext4) { return object; }
      let message = new $root.ORTBRequest2.Ext4();
      if (object.gdpr != null) { message.gdpr = object.gdpr >>> 0; }
      return message;
    };

    /**
     * Creates a plain object from an Ext4 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {ORTBRequest2.Ext4} message Ext4
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Ext4.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) { object.gdpr = 0; }
      if (message.gdpr != null && message.hasOwnProperty('gdpr')) { object.gdpr = message.gdpr; }
      return object;
    };

    /**
     * Converts this Ext4 to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Ext4
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Ext4.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Ext4
     * @function getTypeUrl
     * @memberof ORTBRequest2.Ext4
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Ext4.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Ext4';
    };

    return Ext4;
  })();

  ORTBRequest2.Regs = (function() {
    /**
     * Properties of a Regs.
     * @memberof ORTBRequest2
     * @interface IRegs
     * @property {ORTBRequest2.IExt4|null} [ext] Regs ext
     */

    /**
     * Constructs a new Regs.
     * @memberof ORTBRequest2
     * @classdesc Represents a Regs.
     * @implements IRegs
     * @constructor
     * @param {ORTBRequest2.IRegs=} [properties] Properties to set
     */
    function Regs(properties) {
      if (properties) {
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]]; }
        }
      }
    }

    /**
     * Regs ext.
     * @member {ORTBRequest2.IExt4|null|undefined} ext
     * @memberof ORTBRequest2.Regs
     * @instance
     */
    Regs.prototype.ext = null;

    /**
     * Creates a new Regs instance using the specified properties.
     * @function create
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {ORTBRequest2.IRegs=} [properties] Properties to set
     * @returns {ORTBRequest2.Regs} Regs instance
     */
    Regs.create = function create(properties) {
      return new Regs(properties);
    };

    /**
     * Encodes the specified Regs message. Does not implicitly {@link ORTBRequest2.Regs.verify|verify} messages.
     * @function encode
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {ORTBRequest2.IRegs} message Regs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Regs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create(); }
      if (message.ext != null && Object.hasOwnProperty.call(message, 'ext')) { $root.ORTBRequest2.Ext4.encode(message.ext, writer.uint32(/* id 1, wireType 2 = */10).fork()).ldelim(); }
      return writer;
    };

    /**
     * Encodes the specified Regs message, length delimited. Does not implicitly {@link ORTBRequest2.Regs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {ORTBRequest2.IRegs} message Regs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Regs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Regs message from the specified reader or buffer.
     * @function decode
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ORTBRequest2.Regs} Regs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Regs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader); }
      let end = length === undefined ? reader.len : reader.pos + length; let message = new $root.ORTBRequest2.Regs();
      while (reader.pos < end) {
        let tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            message.ext = $root.ORTBRequest2.Ext4.decode(reader, reader.uint32());
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Regs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ORTBRequest2.Regs} Regs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Regs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader); }
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Regs message.
     * @function verify
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Regs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected'; }
      if (message.ext != null && message.hasOwnProperty('ext')) {
        let error = $root.ORTBRequest2.Ext4.verify(message.ext);
        if (error) { return 'ext.' + error; }
      }
      return null;
    };

    /**
     * Creates a Regs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ORTBRequest2.Regs} Regs
     */
    Regs.fromObject = function fromObject(object) {
      if (object instanceof $root.ORTBRequest2.Regs) { return object; }
      let message = new $root.ORTBRequest2.Regs();
      if (object.ext != null) {
        if (typeof object.ext !== 'object') { throw TypeError('.ORTBRequest2.Regs.ext: object expected'); }
        message.ext = $root.ORTBRequest2.Ext4.fromObject(object.ext);
      }
      return message;
    };

    /**
     * Creates a plain object from a Regs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {ORTBRequest2.Regs} message Regs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Regs.toObject = function toObject(message, options) {
      if (!options) { options = {}; }
      let object = {};
      if (options.defaults) { object.ext = null; }
      if (message.ext != null && message.hasOwnProperty('ext')) { object.ext = $root.ORTBRequest2.Ext4.toObject(message.ext, options); }
      return object;
    };

    /**
     * Converts this Regs to JSON.
     * @function toJSON
     * @memberof ORTBRequest2.Regs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Regs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Regs
     * @function getTypeUrl
     * @memberof ORTBRequest2.Regs
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Regs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/ORTBRequest2.Regs';
    };

    return Regs;
  })();

  return ORTBRequest2;
})();

export { $root as default };

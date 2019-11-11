
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global = global || self, factory(global.React, global.ReactDOM));
}(this, (function (React, ReactDOM) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;
	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	var isArray_1 = isArray;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */

	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	var root = _freeGlobal || freeSelf || Function('return this')();
	var _root = root;

	/** Built-in value references. */

	var Symbol$1 = _root.Symbol;
	var _Symbol = Symbol$1;

	/** Used for built-in method references. */

	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */

	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */

	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);

	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }

	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString$1 = objectProto$1.toString;
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */

	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */

	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	/** Built-in value references. */

	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }

	  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */

	var symbolTag = '[object Symbol]';
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */

	function isSymbol(value) {
	  return typeof value == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
	}

	var isSymbol_1 = isSymbol;

	/** Used to match property names within property paths. */

	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */

	function isKey(value, object) {
	  if (isArray_1(value)) {
	    return false;
	  }

	  var type = typeof value;

	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
	    return true;
	  }

	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	var _isKey = isKey;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */

	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */

	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  } // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.


	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */

	var coreJsData = _root['__core-js_shared__'];
	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */

	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */


	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	/** Used to resolve the decompiled source of functions. */

	var funcToString = funcProto.toString;
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */

	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}

	    try {
	      return func + '';
	    } catch (e) {}
	  }

	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */

	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */

	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */

	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;
	/** Used to resolve the decompiled source of functions. */

	var funcToString$1 = funcProto$1.toString;
	/** Used to check objects for own properties. */

	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
	/** Used to detect if a method is native. */

	var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */

	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }

	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */

	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */

	var nativeCreate = _getNative(Object, 'create');
	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */

	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	/** Used for built-in method references. */

	var objectProto$3 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function hashGet(key) {
	  var data = this.__data__;

	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }

	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */

	var objectProto$4 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */

	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */

	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */

	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `Hash`.


	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;
	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function assocIndexOf(array, key) {
	  var length = array.length;

	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }

	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */

	var arrayProto = Array.prototype;
	/** Built-in value references. */

	var splice = arrayProto.splice;
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }

	  var lastIndex = data.length - 1;

	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }

	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);
	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */

	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }

	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */

	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `ListCache`.


	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;
	var _ListCache = ListCache;

	/* Built-in method references that are verified to be native. */

	var Map$1 = _getNative(_root, 'Map');
	var _Map = Map$1;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */

	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash(),
	    'map': new (_Map || _ListCache)(),
	    'string': new _Hash()
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */

	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */

	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */

	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */

	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */

	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */

	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	  this.clear();

	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	} // Add methods to `MapCache`.


	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;
	var _MapCache = MapCache;

	/** Error message constants. */

	var FUNC_ERROR_TEXT = 'Expected a function';
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */

	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }

	  var memoized = function () {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }

	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };

	  memoized.cache = new (memoize.Cache || _MapCache)();
	  return memoized;
	} // Expose `MapCache`.


	memoize.Cache = _MapCache;
	var memoize_1 = memoize;

	/** Used as the maximum memoize cache size. */

	var MAX_MEMOIZE_SIZE = 500;
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */

	function memoizeCapped(func) {
	  var result = memoize_1(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }

	    return key;
	  });
	  var cache = result.cache;
	  return result;
	}

	var _memoizeCapped = memoizeCapped;

	/** Used to match property names within property paths. */

	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */

	var reEscapeChar = /\\(\\)?/g;
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */

	var stringToPath = _memoizeCapped(function (string) {
	  var result = [];

	  if (string.charCodeAt(0) === 46
	  /* . */
	  ) {
	      result.push('');
	    }

	  string.replace(rePropName, function (match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});
	var _stringToPath = stringToPath;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }

	  return result;
	}

	var _arrayMap = arrayMap;

	/** Used as references for various `Number` constants. */

	var INFINITY = 1 / 0;
	/** Used to convert symbols to primitives and strings. */

	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */

	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }

	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }

	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }

	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */

	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */

	function castPath(value, object) {
	  if (isArray_1(value)) {
	    return value;
	  }

	  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
	}

	var _castPath = castPath;

	/** Used as references for various `Number` constants. */

	var INFINITY$1 = 1 / 0;
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */

	function toKey(value) {
	  if (typeof value == 'string' || isSymbol_1(value)) {
	    return value;
	  }

	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
	}

	var _toKey = toKey;

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */

	function baseGet(object, path) {
	  path = _castPath(path, object);
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[_toKey(path[index++])];
	  }

	  return index && index == length ? object : undefined;
	}

	var _baseGet = baseGet;

	var defineProperty = function () {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */

	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/** Used for built-in method references. */

	var objectProto$5 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */

	function assignValue(object, key, value) {
	  var objValue = object[key];

	  if (!(hasOwnProperty$4.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */

	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */

	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	var _isIndex = isIndex;

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */

	function baseSet(object, path, value, customizer) {
	  if (!isObject_1(object)) {
	    return object;
	  }

	  path = _castPath(path, object);
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = _toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;

	      if (newValue === undefined) {
	        newValue = isObject_1(objValue) ? objValue : _isIndex(path[index + 1]) ? [] : {};
	      }
	    }

	    _assignValue(nested, key, newValue);
	    nested = nested[key];
	  }

	  return object;
	}

	var _baseSet = baseSet;

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */

	function basePickBy(object, paths, predicate) {
	  var index = -1,
	      length = paths.length,
	      result = {};

	  while (++index < length) {
	    var path = paths[index],
	        value = _baseGet(object, path);

	    if (predicate(value, path)) {
	      _baseSet(result, _castPath(path, object), value);
	    }
	  }

	  return result;
	}

	var _basePickBy = basePickBy;

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	var _baseHasIn = baseHasIn;

	/** `Object#toString` result references. */

	var argsTag = '[object Arguments]';
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */

	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */

	var objectProto$6 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
	/** Built-in value references. */

	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */

	var isArguments = _baseIsArguments(function () {
	  return arguments;
	}()) ? _baseIsArguments : function (value) {
	  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};
	var isArguments_1 = isArguments;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */

	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}

	var isLength_1 = isLength;

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */

	function hasPath(object, path, hasFunc) {
	  path = _castPath(path, object);
	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = _toKey(path[index]);

	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }

	    object = object[key];
	  }

	  if (result || ++index != length) {
	    return result;
	  }

	  length = object == null ? 0 : object.length;
	  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
	}

	var _hasPath = hasPath;

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */

	function hasIn(object, path) {
	  return object != null && _hasPath(object, path, _baseHasIn);
	}

	var hasIn_1 = hasIn;

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @returns {Object} Returns the new object.
	 */

	function basePick(object, paths) {
	  return _basePickBy(object, paths, function (value, path) {
	    return hasIn_1(object, path);
	  });
	}

	var _basePick = basePick;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }

	  return array;
	}

	var _arrayPush = arrayPush;

	/** Built-in value references. */

	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */

	function isFlattenable(value) {
	  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	var _isFlattenable = isFlattenable;

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */

	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	  predicate || (predicate = _isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];

	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        _arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }

	  return result;
	}

	var _baseFlatten = baseFlatten;

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */

	function flatten(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? _baseFlatten(array, 1) : [];
	}

	var flatten_1 = flatten;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);

	    case 1:
	      return func.call(thisArg, args[0]);

	    case 2:
	      return func.call(thisArg, args[0], args[1]);

	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }

	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeMax = Math.max;
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */

	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }

	    index = -1;
	    var otherArgs = Array(start + 1);

	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }

	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */

	var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
	  return _defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};
	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeNow = Date.now;
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */

	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	    lastCalled = stamp;

	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }

	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */

	var setToString = _shortOut(_baseSetToString);
	var _setToString = setToString;

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */

	function flatRest(func) {
	  return _setToString(_overRest(func, undefined, flatten_1), func + '');
	}

	var _flatRest = flatRest;

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [paths] The property paths to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */

	var pick = _flatRest(function (object, paths) {
	  return object == null ? {} : _basePick(object, paths);
	});
	var pick_1 = pick;

	var g6=createCommonjsModule(function(module,exports){!function(t,e){module.exports=e();}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e];}.bind(null,i));return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=476);}([function(t,e,n){var r=n(108),i={};r.merge(i,r,{mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};i.each(e,function(e){i.augment(t,e);var a=e[n];a&&i.merge(r,a);}),t[n]=i.merge(r,t[n]);}}}),t.exports=i;},function(t,e,n){var r={},i=n(171),a=n(433),o=n(70),s=n(432),u=n(431),c=n(430);o.deepMix(r,o,s,a,i,u,c),t.exports=r;},function(t,e,n){var r=n(15),i=n(3),a=5;function o(t,e,n,s){for(var u in n=n||0,s=s||a,e)if(e.hasOwnProperty(u)){var c=e[u];null!==c&&r(c)?(r(t[u])||(t[u]={}),n<s?o(t[u],c,n+1,s):t[u]=e[u]):i(c)?(t[u]=[],t[u]=t[u].concat(c)):void 0!==c&&(t[u]=c);}}t.exports=function(){for(var t=new Array(arguments.length),e=t.length,n=0;n<e;n++)t[n]=arguments[n];for(var r=t[0],i=1;i<e;i++)o(r,t[i]);return r;};},function(t,e,n){var r=n(4),i=Array.isArray?Array.isArray:function(t){return r(t,"Array");};t.exports=i;},function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]";};},function(t,e,n){var r;try{r={cloneDeep:n(289),constant:n(87),defaults:n(288),each:n(149),filter:n(146),find:n(287),flatten:n(119),forEach:n(148),forIn:n(282),has:n(135),isUndefined:n(134),last:n(281),map:n(133),mapValues:n(280),max:n(279),merge:n(277),min:n(271),minBy:n(270),now:n(269),pick:n(268),range:n(263),reduce:n(131),sortBy:n(260),uniqueId:n(255),values:n(126),zipObject:n(254)};}catch(t){}r||(r=window._),t.exports=r;},function(t,e){var n=Array.isArray;t.exports=n;},function(t,e,n){var r=n(12),i=n(3);t.exports=function(t,e){if(t)if(i(t))for(var n=0,a=t.length;n<a&&!1!==e(t[n],n);n++);else if(r(t))for(var o in t)if(t.hasOwnProperty(o)&&!1===e(t[o],o))break;};},,function(t,e){t.exports=function(t,e){if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t;};},function(t,e){t.exports={version:"3.1.6",rootContainerClassName:"root-container",nodeContainerClassName:"node-container",edgeContainerClassName:"edge-container",customGroupContainerClassName:"custom-group-container",delegateContainerClassName:"delegate-container",defaultShapeFillColor:"#91d5ff",defaultShapeStrokeColor:"#91d5ff",defaultNode:{shape:"circle",style:{fill:"#fff"},size:40,color:"#333"},defaultEdge:{shape:"line",style:{},size:1,color:"#333"},nodeLabel:{style:{fill:"#595959",textAlign:"center",textBaseline:"middle"},offset:5},edgeLabel:{style:{fill:"#595959",textAlign:"center",textBaseline:"middle"}},nodeStateStyle:{active:{fillOpacity:.8},selected:{lineWidth:2}},edgeStateStyle:{active:{strokeOpacity:.8},selected:{lineWidth:2}},loopPosition:"top",delegateStyle:{fill:"#F3F9FF",fillOpacity:.5,stroke:"#1890FF",strokeOpacity:.9,lineDash:[5,5]}};},function(t,e,n){var r=n(0),i=n(453),a=n(188),o=n(103),s=["zIndex","capture","visible"],u=function t(e){t.superclass.constructor.call(this,e);};u.ATTRS={},r.extend(u,a);var c={matrix:"matrix",path:"path",points:"points",lineDash:"lineDash"};r.augment(u,i,{isShape:!0,drawInner:function(t){var e=this._attrs;this.createPath(t);var n=t.globalAlpha;if(this.hasFill()){var i=e.fillOpacity;r.isNil(i)||1===i?t.fill():(t.globalAlpha=i,t.fill(),t.globalAlpha=n);}if(this.hasStroke()&&this._attrs.lineWidth>0){var a=e.strokeOpacity;r.isNil(a)||1===a||(t.globalAlpha=a),t.stroke();}this.afterPath(t);},afterPath:function(){},isHitBox:function(){return !0;},isHit:function(t,e){var n=[t,e,1];if(this.invert(n),this.isHitBox()){var r=this.getBBox();if(r&&!o.box(r.minX,r.maxX,r.minY,r.maxY,n[0],n[1]))return !1;}var i=this._attrs.clip;return i?(i.invert(n,this.get("canvas")),!!i.isPointInPath(n[0],n[1])&&this.isPointInPath(n[0],n[1])):this.isPointInPath(n[0],n[1]);},calculateBox:function(){return null;},getHitLineWidth:function(){var t=this._attrs,e=t.lineAppendWidth||0;return (t.lineWidth||0)+e;},clearTotalMatrix:function(){this._cfg.totalMatrix=null,this._cfg.region=null;},clearBBox:function(){this._cfg.box=null,this._cfg.region=null;},getBBox:function(){var t=this._cfg.box;return t||((t=this.calculateBox())&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this._cfg.box=t),t;},clone:function(){var t=this,e=null,n=t._attrs,i={};return r.each(n,function(t,e){c[e]&&r.isArray(n[e])?i[e]=function(t){for(var e=[],n=0;n<t.length;n++)r.isArray(t[n])?e.push([].concat(t[n])):e.push(t[n]);return e;}(n[e]):i[e]=n[e];}),e=new t.constructor({attrs:i}),r.each(s,function(n){e._cfg[n]=t._cfg[n];}),e;}}),t.exports=u;},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!==t&&"object"===e||"function"===e;};},function(t,e,n){var r=n(5),i=n(23).Graph;function a(t,e,n,i){var a;do{a=r.uniqueId(i);}while(t.hasNode(a));return n.dummy=e,t.setNode(a,n),a;}function o(t){return r.max(r.map(t.nodes(),function(e){var n=t.node(e).rank;if(!r.isUndefined(n))return n;}));}t.exports={addDummyNode:a,simplify:function(t){var e=new i().setGraph(t.graph());return r.forEach(t.nodes(),function(n){e.setNode(n,t.node(n));}),r.forEach(t.edges(),function(n){var r=e.edge(n.v,n.w)||{weight:0,minlen:1},i=t.edge(n);e.setEdge(n.v,n.w,{weight:r.weight+i.weight,minlen:Math.max(r.minlen,i.minlen)});}),e;},asNonCompoundGraph:function(t){var e=new i({multigraph:t.isMultigraph()}).setGraph(t.graph());return r.forEach(t.nodes(),function(n){t.children(n).length||e.setNode(n,t.node(n));}),r.forEach(t.edges(),function(n){e.setEdge(n,t.edge(n));}),e;},successorWeights:function(t){var e=r.map(t.nodes(),function(e){var n={};return r.forEach(t.outEdges(e),function(e){n[e.w]=(n[e.w]||0)+t.edge(e).weight;}),n;});return r.zipObject(t.nodes(),e);},predecessorWeights:function(t){var e=r.map(t.nodes(),function(e){var n={};return r.forEach(t.inEdges(e),function(e){n[e.v]=(n[e.v]||0)+t.edge(e).weight;}),n;});return r.zipObject(t.nodes(),e);},intersectRect:function(t,e){var n,r,i=t.x,a=t.y,o=e.x-i,s=e.y-a,u=t.width/2,c=t.height/2;if(!o&&!s)throw new Error("Not possible to find intersection inside of the rectangle");Math.abs(s)*u>Math.abs(o)*c?(s<0&&(c=-c),n=c*o/s,r=c):(o<0&&(u=-u),n=u,r=u*s/o);return {x:i+n,y:a+r};},buildLayerMatrix:function(t){var e=r.map(r.range(o(t)+1),function(){return [];});return r.forEach(t.nodes(),function(n){var i=t.node(n),a=i.rank;r.isUndefined(a)||(e[a][i.order]=n);}),e;},normalizeRanks:function(t){var e=r.min(r.map(t.nodes(),function(e){return t.node(e).rank;}));r.forEach(t.nodes(),function(n){var i=t.node(n);r.has(i,"rank")&&(i.rank-=e);});},removeEmptyRanks:function(t){var e=r.min(r.map(t.nodes(),function(e){return t.node(e).rank;})),n=[];r.forEach(t.nodes(),function(r){var i=t.node(r).rank-e;n[i]||(n[i]=[]),n[i].push(r);});var i=0,a=t.graph().nodeRankFactor;r.forEach(n,function(e,n){r.isUndefined(e)&&n%a!=0?--i:i&&r.forEach(e,function(e){t.node(e).rank+=i;});});},addBorderNode:function(t,e,n,r){var i={width:0,height:0};arguments.length>=4&&(i.rank=n,i.order=r);return a(t,"border",i,e);},maxRank:o,partition:function(t,e){var n={lhs:[],rhs:[]};return r.forEach(t,function(t){e(t)?n.lhs.push(t):n.rhs.push(t);}),n;},time:function(t,e){var n=r.now();try{return e();}finally{console.log(t+" time: "+(r.now()-n)+"ms");}},notime:function(t,e){return e();}};},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};t.exports=function(t){return "object"===(void 0===t?"undefined":n(t))&&null!==t;};},function(t,e,n){var r=n(14),i=n(4);t.exports=function(t){if(!r(t)||!i(t,"Object"))return !1;if(null===Object.getPrototypeOf(t))return !0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e;};},function(t,e){t.exports=function(t,e){if(t["_wrap_"+e])return t["_wrap_"+e];var n=function(n){t[e](n);};return t["_wrap_"+e]=n,n;};},function(t,e,n){var r=n(4);t.exports=function(t){return r(t,"String");};},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e);};},function(t,e,n){var r;try{r={clone:n(401),constant:n(87),each:n(149),filter:n(146),has:n(135),isArray:n(6),isEmpty:n(325),isFunction:n(48),isUndefined:n(134),keys:n(29),map:n(133),reduce:n(131),size:n(322),transform:n(316),union:n(315),values:n(126)};}catch(t){}r||(r=window._),t.exports=r;},function(t,e,n){var r=n(1);n(429);var i={},a={};function o(t){return a[t]||r.upperFirst(t);}var s={defaultShapeType:null,getShape:function(t){return this[t]||this[this.defaultShapeType];},draw:function(t,e,n){var r=this.getShape(t),i=r.draw(e,n);return r.afterDraw(e,n,i),i;},update:function(t,e,n){var r=this.getShape(t);r.update&&(r.update(e,n),r.afterUpdate(e,n));},setState:function(t,e,n,r){this.getShape(t).setState(e,n,r);},shouldUpdate:function(t){return !!this.getShape(t).update;},getControlPoints:function(t,e){return this.getShape(t).getControlPoints(e);},getAnchorPoints:function(t,e){return this.getShape(t).getAnchorPoints(e);}},u={options:{},getCustomConfig:function(){},draw:function(){},afterDraw:function(){},afterUpdate:function(){},setState:function(){},getControlPoints:function(t){return t.controlPoints;},getAnchorPoints:function(t){var e=this.getCustomConfig(t)||{},n=this.options.anchorPoints,r=e.anchorPoints;return t.anchorPoints||r||n;}};i.registerFactory=function(t,e){var n=o(t),a=r.mix({},s,e);return i[n]=a,a.className=n,function(t){var e="register"+t.className;i[e]=function(e,n,i){var a=i?t.getShape(i):u,o=r.mix({},a,n);return o.type=e,t[e]=o,o;};}(a),a;},i.getFactory=function(t){return this[t=o(t)];},t.exports=i;},function(t,e){var n=document.createElement("table"),r=document.createElement("tr"),i=/^\s*<(\w+|!)[^>]*>/,a={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:r,th:r,"*":document.createElement("div")};t.exports=function(t){var e=i.test(t)&&RegExp.$1;e in a||(e="*");var n=a[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var r=n.childNodes[0];return n.removeChild(r),r;};},function(t,e,n){var r=n(166),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a;},function(t,e,n){var r;try{r=n(403);}catch(t){}r||(r=window.graphlib),t.exports=r;},function(t,e,n){var r=n(1),i={registerLayout:function(t,e){if(!e)throw new Error("please specify handler for this layout:"+t);var n=function(t){r.mix(this,this.getDefaultCfg(),t);};r.augment(n,{init:function(t){this.nodes=t.nodes,this.edges=t.edges;},execute:function(){},layout:function(t){this.init(t),this.execute();},updateCfg:function(t){r.mix(this,t);},destroy:function(){this.positions=null,this.nodes=null,this.edges=null,this.destroyed=!0;},getDefaultCfg:function(){}},e),i[t]=n;}};t.exports=i;},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t;};},function(t,e){t.exports=function(t){return null===t||void 0===t;};},function(t,e,n){var r=n(345),i=n(335),a=n(30),o=n(6),s=n(328);t.exports=function(t){return "function"==typeof t?t:null==t?a:"object"==typeof t?o(t)?i(t[0],t[1]):r(t):s(t);};},function(t,e,n){var r=n(48),i=n(93);t.exports=function(t){return null!=t&&i(t.length)&&!r(t);};},function(t,e,n){var r=n(163),i=n(91),a=n(28);t.exports=function(t){return a(t)?r(t):i(t);};},function(t,e){t.exports=function(t){return t;};},function(t,e,n){var r=n(37),i=n(389),a=n(388),o="[object Null]",s="[object Undefined]",u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:o:u&&u in Object(t)?i(t):a(t);};},function(t,e,n){var r=n(390),i=n(385);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0;};},function(t,e,n){var r=n(31),i=n(25),a="[object Symbol]";t.exports=function(t){return "symbol"==typeof t||i(t)&&r(t)==a;};},function(t,e,n){var r=n(360),i=n(96),a=n(359),o=n(154),s=n(358),u=n(31),c=n(165),f=c(r),h=c(i),l=c(a),d=c(o),p=c(s),g=u;(r&&"[object DataView]"!=g(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=g(new i())||a&&"[object Promise]"!=g(a.resolve())||o&&"[object Set]"!=g(new o())||s&&"[object WeakMap]"!=g(new s()))&&(g=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case f:return "[object DataView]";case h:return "[object Map]";case l:return "[object Promise]";case d:return "[object Set]";case p:return "[object WeakMap]";}return e;}),t.exports=g;},function(t,e,n){var r=n(163),i=n(365),a=n(28);t.exports=function(t){return a(t)?r(t,!0):i(t);};},function(t,e,n){(function(t){var r=n(22),i=n(369),a="object"==typeof e&&e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||i;t.exports=u;}).call(this,n(69)(t));},function(t,e,n){var r=n(22).Symbol;t.exports=r;},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e;};},,,,,,function(t,e,n){var r=n(33),i=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return "0"==e&&1/t==-i?"-0":e;};},function(t,e,n){var r=n(368),i=n(60),a=n(92),o=a&&a.isTypedArray,s=o?i(o):r;t.exports=s;},function(t,e,n){var r=n(370),i=n(25),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments;}())?r:function(t){return i(t)&&o.call(t,"callee")&&!s.call(t,"callee");};t.exports=u;},function(t,e,n){var r=n(63),i=n(62);t.exports=function(t,e,n,a){var o=!n;n||(n={});for(var s=-1,u=e.length;++s<u;){var c=e[s],f=a?a(n[c],t[c],c,n,t):void 0;void 0===f&&(f=t[c]),o?i(n,c,f):r(n,c,f);}return n;};},function(t,e,n){var r=n(31),i=n(18),a="[object AsyncFunction]",o="[object Function]",s="[object GeneratorFunction]",u="[object Proxy]";t.exports=function(t){if(!i(t))return !1;var e=r(t);return e==o||e==s||e==a||e==u;};},,function(t,e,n){var r=n(0),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi;t.exports={parseRadius:function(t){var e=0,n=0,i=0,a=0;return r.isArray(t)?1===t.length?e=n=i=a=t[0]:2===t.length?(e=i=t[0],n=a=t[1]):3===t.length?(e=t[0],n=a=t[1],i=t[2]):(e=t[0],n=t[1],i=t[2],a=t[3]):e=n=i=a=t,{r1:e,r2:n,r3:i,r4:a};},parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i;}r.each(e,function(t,n){isNaN(t)||(e[n]=+t);}),t[n]=e;}),t):void 0;}};},function(t,e){t.exports=function(t){return null!==t&&"function"!=typeof t&&isFinite(t.length);};},function(t,e,n){var r=n(5);t.exports={longestPath:function(t){var e={};r.forEach(t.sources(),function n(i){var a=t.node(i);if(r.has(e,i))return a.rank;e[i]=!0;var o=r.min(r.map(t.outEdges(i),function(e){return n(e.w)-t.edge(e).minlen;}));o!==Number.POSITIVE_INFINITY&&void 0!==o&&null!==o||(o=0);return a.rank=o;});},slack:function(t,e){return t.node(e.w).rank-t.node(e.v).rank-t.edge(e).minlen;}};},function(t,e,n){var r=n(38),i=n(28),a=n(61),o=n(18);t.exports=function(t,e,n){if(!o(n))return !1;var s=typeof e;return !!("number"==s?i(n)&&a(e,n.length):"string"==s&&e in n)&&r(n[e],t);};},function(t,e,n){var r=n(30),i=n(130),a=n(129);t.exports=function(t,e){return a(i(t,e,r),t+"");};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i;};},function(t,e,n){var r=n(6),i=n(82),a=n(333),o=n(139);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:a(o(t));};},function(t,e,n){var r=n(86),i=n(347)(r);t.exports=i;},function(t,e,n){var r=n(162)(Object.getPrototypeOf,Object);t.exports=r;},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n);};},function(t,e){t.exports=function(t){return function(e){return t(e);};};},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var i=typeof t;return !!(e=null==e?n:e)&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<e;};},function(t,e,n){var r=n(164);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};},function(t,e,n){var r=n(62),i=n(38),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];a.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n);};},function(t,e,n){var r=n(376);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map;};},function(t,e,n){var r=n(32)(Object,"create");t.exports=r;},function(t,e,n){var r=n(38);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return -1;};},function(t,e,n){var r=n(400),i=n(399),a=n(398),o=n(397),s=n(396);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=a,u.prototype.has=o,u.prototype.set=s,t.exports=u;},function(t,e,n){var r=n(67),i=n(395),a=n(394),o=n(393),s=n(392),u=n(391);function c(t){var e=this.__data__=new r(t);this.size=e.size;}c.prototype.clear=i,c.prototype.delete=a,c.prototype.get=o,c.prototype.has=s,c.prototype.set=u,t.exports=c;},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l;}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i;}}),t.webpackPolyfill=1),t;};},function(t,e,n){var r=n(75),i={deepMix:n(2),mix:n(76),debounce:n(438),each:n(7),throttle:n(437),mat3:n(105),vec2:n(192),vec3:n(191),transform:n(190),clone:n(106),upperFirst:n(197),isNil:n(26),isArray:n(3),createDom:n(21),modifyCSS:n(9),isObject:n(12),isPlainObject:n(15),isNumber:n(77),isString:n(17),uniqueId:n(198),addEventListener:n(436),wrapBehavior:n(16),extend:n(195),augment:n(194),remove:n(435),formatPadding:function(t){var e=0,n=0,r=0,a=0;return i.isNumber(t)||i.isString(t)?e=n=r=a=t:i.isArray(t)&&(e=t[0],r=i.isNil(t[1])?t[0]:t[1],a=i.isNil(t[2])?t[0]:t[2],n=i.isNil(t[3])?r:t[3]),[e,r,a,n];},cloneEvent:function(t){var e=new r(t.type,t,!0,!0);return e.clientX=t.clientX,e.clientY=t.clientY,e.x=t.x,e.y=t.y,e.target=t.target,e.currentTarget=t.currentTarget,e.item=t.item,e;}};t.exports=i;},function(t,e,n){var r=n(0),i=n(103),a=n(102),o=n(186),s=n(185),u=r.vec3,c=r.mat3,f=["m","l","c","a","q","h","v","t","s","z"];function h(t,e,n){return {x:n.x+t,y:n.y+e};}function l(t,e){return {x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)};}function d(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]);}function p(t,e){return (t[0]*e[0]+t[1]*e[1])/(d(t)*d(e));}function g(t,e){return (t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(p(t,e));}var v=function(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e);};r.augment(v,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var i,a,o,s,u=f.indexOf(n)>=0,c=u?n.toUpperCase():n,d=t,v=e.endPoint,m=d[1],y=d[2];switch(c){default:break;case"M":s=u?h(m,y,v):{x:m,y:y},this.command="M",this.params=[v,s],this.subStart=s,this.endPoint=s;break;case"L":s=u?h(m,y,v):{x:m,y:y},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"H":s=u?h(m,0,v):{x:m,y:v.y},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"V":s=u?h(0,m,v):{x:v.x,y:m},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"Q":u?(i=h(m,y,v),a=h(d[3],d[4],v)):(i={x:m,y:y},a={x:d[3],y:d[4]}),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-i.x,a.y-i.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];};break;case"T":a=u?h(m,y,v):{x:m,y:y},"Q"===e.command?(i=l(e.params[1],v),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-i.x,a.y-i.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];}):(this.command="TL",this.params=[v,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-v.x,a.y-v.y];},this.startTangent=function(){return [v.x-a.x,v.y-a.y];});break;case"C":u?(i=h(m,y,v),a=h(d[3],d[4],v),o=h(d[5],d[6],v)):(i={x:m,y:y},a={x:d[3],y:d[4]},o={x:d[5],y:d[6]}),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];};break;case"S":u?(a=h(m,y,v),o=h(d[3],d[4],v)):(a={x:m,y:y},o={x:d[3],y:d[4]}),"C"===e.command?(i=l(e.params[2],v),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];}):(this.command="SQ",this.params=[v,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-a.x,v.y-a.y];});break;case"A":var x=m,b=y,w=d[3],_=d[4],M=d[5];s=u?h(d[6],d[7],v):{x:d[6],y:d[7]},this.command="A";var S=function(t,e,n,i,a,o,s){var u=r.mod(r.toRadian(s),2*Math.PI),c=t.x,f=t.y,h=e.x,l=e.y,d=Math.cos(u)*(c-h)/2+Math.sin(u)*(f-l)/2,v=-1*Math.sin(u)*(c-h)/2+Math.cos(u)*(f-l)/2,m=d*d/(a*a)+v*v/(o*o);m>1&&(a*=Math.sqrt(m),o*=Math.sqrt(m));var y=a*a*(v*v)+o*o*(d*d),x=Math.sqrt((a*a*(o*o)-y)/y);n===i&&(x*=-1),isNaN(x)&&(x=0);var b=x*a*v/o,w=x*-o*d/a,_=(c+h)/2+Math.cos(u)*b-Math.sin(u)*w,M=(f+l)/2+Math.sin(u)*b+Math.cos(u)*w,S=g([1,0],[(d-b)/a,(v-w)/o]),P=[(d-b)/a,(v-w)/o],A=[(-1*d-b)/a,(-1*v-w)/o],k=g(P,A);return p(P,A)<=-1&&(k=Math.PI),p(P,A)>=1&&(k=0),0===i&&k>0&&(k-=2*Math.PI),1===i&&k<0&&(k+=2*Math.PI),[t,_,M,a,o,S,k,u,i];}(v,s,_,M,x,b,w);this.params=S;var P=e.subStart;this.subStart=P,this.endPoint=s;var A=S[5]%(2*Math.PI);r.isNumberEqual(A,2*Math.PI)&&(A=0);var k=S[6]%(2*Math.PI);r.isNumberEqual(k,2*Math.PI)&&(k=0);var C=.001;this.startTangent=function(){0===M&&(C*=-1);var t=S[3]*Math.cos(A-C)+S[1],e=S[4]*Math.sin(A-C)+S[2];return [t-P.x,e-P.y];},this.endTangent=function(){var t=S[6];t-2*Math.PI<1e-4&&(t=0);var e=S[3]*Math.cos(A+t+C)+S[1],n=S[4]*Math.sin(A+t-C)+S[2];return [v.x-e,v.y-n];};break;case"Z":this.command="Z",this.params=[v,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart;}},isInside:function(t,e,n){var r=this.command,a=this.params,o=this.box;if(o&&!i.box(o.minX,o.maxX,o.minY,o.maxY,t,e))return !1;switch(r){default:break;case"M":return !1;case"TL":case"L":case"Z":return i.line(a[0].x,a[0].y,a[1].x,a[1].y,n,t,e);case"SQ":case"Q":return i.quadraticline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,n,t,e);case"C":return i.cubicline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y,n,t,e);case"A":var s=a,f=s[1],h=s[2],l=s[3],d=s[4],p=s[5],g=s[6],v=s[7],m=s[8],y=l>d?l:d,x=l>d?1:l/d,b=l>d?d/l:1;s=[t,e,1];var w=[1,0,0,0,1,0,0,0,1];return c.translate(w,w,[-f,-h]),c.rotate(w,w,-v),c.scale(w,w,[1/x,1/b]),u.transformMat3(s,s,w),i.arcline(0,0,y,p,p+g,1-m,n,s[0],s[1]);}return !1;},draw:function(t){var e,n,r,i=this.command,a=this.params;switch(i){default:break;case"M":t.moveTo(a[1].x,a[1].y);break;case"TL":case"L":t.lineTo(a[1].x,a[1].y);break;case"SQ":case"Q":e=a[1],n=a[2],t.quadraticCurveTo(e.x,e.y,n.x,n.y);break;case"C":e=a[1],n=a[2],r=a[3],t.bezierCurveTo(e.x,e.y,n.x,n.y,r.x,r.y);break;case"A":var o=a,s=o[1],u=o[2],c=o[3],f=o[4],h=o[5],l=o[6],d=o[7],p=o[8],g=c>f?c:f,v=c>f?1:c/f,m=c>f?f/c:1;t.translate(s,u),t.rotate(d),t.scale(v,m),t.arc(0,0,g,h,h+l,1-p),t.scale(1/v,1/m),t.rotate(-d),t.translate(-s,-u);break;case"Z":t.closePath();}},shortenDraw:function(t,e,n){var r,i,a,o=this.command,s=this.params;switch(o){default:break;case"M":t.moveTo(s[1].x-e,s[1].y-n);break;case"TL":case"L":t.lineTo(s[1].x-e,s[1].y-n);break;case"SQ":case"Q":r=s[1],i=s[2],t.quadraticCurveTo(r.x,r.y,i.x-e,i.y-n);break;case"C":r=s[1],i=s[2],a=s[3],t.bezierCurveTo(r.x,r.y,i.x,i.y,a.x-e,a.y-n);break;case"A":var u=s,c=u[1],f=u[2],h=u[3],l=u[4],d=u[5],p=u[6],g=u[7],v=u[8],m=h>l?h:l,y=h>l?1:h/l,x=h>l?l/h:1;t.translate(c,f),t.rotate(g),t.scale(y,x),t.arc(0,0,m,d,d+p,1-v),t.scale(1/y,1/x),t.rotate(-g),t.translate(-c,-f);break;case"Z":t.closePath();}},getBBox:function(t){var e,n,r,i,u=t/2,c=this.params;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(c[0].x,c[1].x)-u,maxX:Math.max(c[0].x,c[1].x)+u,minY:Math.min(c[0].y,c[1].y)-u,maxY:Math.max(c[0].y,c[1].y)+u};break;case"SQ":case"Q":for(r=0,i=(n=o.extrema(c[0].x,c[1].x,c[2].x)).length;r<i;r++)n[r]=o.at(c[0].x,c[1].x,c[2].x,n[r]);for(n.push(c[0].x,c[2].x),r=0,i=(e=o.extrema(c[0].y,c[1].y,c[2].y)).length;r<i;r++)e[r]=o.at(c[0].y,c[1].y,c[2].y,e);e.push(c[0].y,c[2].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"C":for(r=0,i=(n=a.extrema(c[0].x,c[1].x,c[2].x,c[3].x)).length;r<i;r++)n[r]=a.at(c[0].x,c[1].x,c[2].x,c[3].x,n[r]);for(r=0,i=(e=a.extrema(c[0].y,c[1].y,c[2].y,c[3].y)).length;r<i;r++)e[r]=a.at(c[0].y,c[1].y,c[2].y,c[3].y,e[r]);n.push(c[0].x,c[3].x),e.push(c[0].y,c[3].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"A":var f=c,h=f[1],l=f[2],d=f[3],p=f[4],g=f[5],v=f[6],m=f[7],y=f[8],x=g,b=g+v,w=s.xExtrema(m,d,p),_=1/0,M=-1/0,S=[x,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var P=w+r;1===y?x<P&&P<b&&S.push(P):b<P&&P<x&&S.push(P);}for(r=0,i=S.length;r<i;r++){var A=s.xAt(m,d,p,h,S[r]);A<_&&(_=A),A>M&&(M=A);}var k=s.yExtrema(m,d,p),C=1/0,E=-1/0,I=[x,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var N=k+r;1===y?x<N&&N<b&&I.push(N):b<N&&N<x&&I.push(N);}for(r=0,i=I.length;r<i;r++){var T=s.yAt(m,d,p,l,I[r]);T<C&&(C=T),T>E&&(E=T);}this.box={minX:_-u,maxX:M+u,minY:C-u,maxY:E+u};}}}),t.exports=v;},function(t,e,n){var r=n(50),i=n(71),a=Math.PI,o=Math.sin,s=Math.cos,u=Math.atan2,c=10,f=a/3;function h(t,e,n,r,i,h,l){var d,p,g,v,m,y,x;if(!e.fill){var b=e.arrowLength||c,w=e.arrowAngle?e.arrowAngle*a/180:f;x=u(r-h,n-i),m=Math.abs(e.lineWidth*s(x))/2,y=Math.abs(e.lineWidth*o(x))/2,l&&(m=-m,y=-y),d=i+b*s(x+w/2),p=h+b*o(x+w/2),g=i+b*s(x-w/2),v=h+b*o(x-w/2),t.beginPath(),t.moveTo(d-m,p-y),t.lineTo(i-m,h-y),t.lineTo(g-m,v-y),t.moveTo(i-m,h-y),t.lineTo(i+m,h+y),t.moveTo(i,h),t.stroke();}}function l(t,e,n,a,u,c,f){var h=f?e.startArrow:e.endArrow,l=h.d,d=u-n,p=c-a,g=Math.atan2(p,d),v=function(t){var e,n=[],a=r.parsePath(t.path);if(!Array.isArray(a)||0===a.length||"M"!==a[0][0]&&"m"!==a[0][0])return !1;for(var o=a.length,s=0;s<a.length;s++){var u=a[s];e=new i(u,e,s===o-1),n.push(e);}return n;}(h);if(v){l&&(u-=s(g)*l,c-=o(g)*l),t.save(),t.beginPath(),t.translate(u,c),t.rotate(g);for(var m=0;m<v.length;m++)v[m].draw(t);t.setTransform(1,0,0,1,0,0),t.fillStyle=t.strokeStyle,t.fill(),t.restore();}}t.exports={addStartArrow:function(t,e,n,r,i,a){"object"==typeof e.startArrow?l(t,e,n,r,i,a,!0):e.startArrow&&h(t,e,n,r,i,a,!0);},addEndArrow:function(t,e,n,r,i,a){"object"==typeof e.endArrow?l(t,e,n,r,i,a,!1):e.endArrow&&h(t,e,n,r,i,a,!1);},getShortenOffset:function(t,e,n,r,i){var a=Math.atan2(r-e,n-t);return {dx:s(a)*i,dy:o(a)*i};}};},function(t,e,n){var r=n(0);function i(t,e,n,r){return {x:Math.cos(r)*n+t,y:Math.sin(r)*n+e};}function a(t,e,n,r){var i,a;return r?t<e?(i=e-t,a=2*Math.PI-n+t):t>n&&(i=2*Math.PI-t+e,a=t-n):(i=t-e,a=n-t),i>a?n:e;}function o(t,e,n,i){var o=0;return n-e>=2*Math.PI&&(o=2*Math.PI),e=r.mod(e,2*Math.PI),n=r.mod(n,2*Math.PI)+o,t=r.mod(t,2*Math.PI),i?e>=n?t>n&&t<e?t:a(t,n,e,!0):t<e||t>n?t:a(t,e,n):e<=n?e<t&&t<n?t:a(t,e,n,!0):t>e||t<n?t:a(t,n,e);}function s(t,e,n,i,a,s,u,c,f){var h=[u,c],l=[t,e],d=r.vec2.subtract([],h,l),p=r.vec2.angleTo([1,0],d);p=o(p,i,a,s);var g=[n*Math.cos(p)+t,n*Math.sin(p)+e];return f&&(f.x=g[0],f.y=g[1]),r.vec2.distance(g,h);}t.exports={nearAngle:o,projectPoint:function(t,e,n,r,i,a,o,u){var c={};return s(t,e,n,r,i,a,o,u,c),c;},pointDistance:s,box:function(t,e,n,a,s,u){var c=Math.PI/2,f=Math.PI,h=3*Math.PI/2,l=[],d=o(0,a,s,u);0===d&&l.push(i(t,e,n,0)),(d=o(c,a,s,u))===c&&l.push(i(t,e,n,c)),(d=o(f,a,s,u))===f&&l.push(i(t,e,n,f)),(d=o(h,a,s,u))===h&&l.push(i(t,e,n,h)),l.push(i(t,e,n,a)),l.push(i(t,e,n,s));var p=1/0,g=-1/0,v=1/0,m=-1/0;return r.each(l,function(t){p>t.x&&(p=t.x),g<t.x&&(g=t.x),v>t.y&&(v=t.y),m<t.y&&(m=t.y);}),{minX:p,minY:v,maxX:g,maxY:m};}};},function(t,e,n){var r=n(0).vec2;t.exports={at:function(t,e,n){return (e-t)*n+t;},pointDistance:function(t,e,n,i,a,o){var s=[n-t,i-e];if(r.exactEquals(s,[0,0]))return NaN;var u=[-s[1],s[0]];r.normalize(u,u);var c=[a-t,o-e];return Math.abs(r.dot(c,u));},box:function(t,e,n,r,i){var a=i/2,o=Math.min(t,n),s=Math.max(t,n);return {minX:o-a,minY:Math.min(e,r)-a,maxX:s+a,maxY:Math.max(e,r)+a};},len:function(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));}};},function(t,e,n){var r=n(0),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=new Date().getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e;};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0;},stopPropagation:function(){this.propagationStopped=!0;},remove:function(){this.remove=!0;},clone:function(){return r.clone(this);},toString:function(){return "[Event (type="+this.type+")]";}}),t.exports=i;},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n]);}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t;};},function(t,e,n){var r=n(4);t.exports=function(t){return r(t,"Number");};},function(t,e,n){t.exports={Canvas:n(475),Group:n(189),Shape:n(11),Arc:n(184),Circle:n(183),Dom:n(182),Ellipse:n(181),Fan:n(180),Image:n(179),Line:n(178),Marker:n(101),Path:n(177),Polygon:n(176),Polyline:n(175),Rect:n(174),Text:n(173),PathSegment:n(71),PathUtil:n(100),Event:n(75),EventEmitter:n(187),version:"3.4.5"};},,function(t,e,n){var r=n(33);t.exports=function(t,e,n){for(var i=-1,a=t.length;++i<a;){var o=t[i],s=e(o);if(null!=s&&(void 0===u?s==s&&!r(s):n(s,u)))var u=s,c=o;}return c;};},function(t,e,n){var r=n(89),i=n(314);t.exports=function t(e,n,a,o,s){var u=-1,c=e.length;for(a||(a=i),s||(s=[]);++u<c;){var f=e[u];n>0&&a(f)?n>1?t(f,n-1,a,o,s):r(s,f):o||(s[s.length]=f);}return s;};},function(t,e,n){var r=n(6),i=n(33),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(r(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||o.test(t)||!a.test(t)||null!=e&&t in Object(e);};},function(t,e,n){var r=n(56),i=n(44);t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[i(e[n++])];return n&&n==a?t:void 0;};},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t;}),n;};},function(t,e,n){var r=n(348)();t.exports=r;},function(t,e,n){var r=n(85),i=n(29);t.exports=function(t,e){return t&&r(t,e,i);};},function(t,e){t.exports=function(t){return function(){return t;};};},function(t,e,n){var r=n(153);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t;};},function(t,e,n){var r=n(159),i=n(158),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols,s=o?function(t){return null==t?[]:(t=Object(t),r(o(t),function(e){return a.call(t,e);}));}:i;t.exports=s;},function(t,e,n){var r=n(59),i=n(367),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e;};},function(t,e,n){(function(t){var r=n(166),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i&&r.process,s=function(){try{var t=a&&a.require&&a.require("util").types;return t||o&&o.binding&&o.binding("util");}catch(t){}}();t.exports=s;}).call(this,n(69)(t));},function(t,e){var n=9007199254740991;t.exports=function(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=n;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t;};},function(t,e,n){var r=n(384),i=n(377),a=n(375),o=n(374),s=n(373);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=a,u.prototype.has=o,u.prototype.set=s,t.exports=u;},function(t,e,n){var r=n(32)(n(22),"Map");t.exports=r;},function(t,e,n){var r=n(19);t.exports=s;var i="\0",a="\0",o="";function s(t){this._isDirected=!r.has(t,"directed")||t.directed,this._isMultigraph=!!r.has(t,"multigraph")&&t.multigraph,this._isCompound=!!r.has(t,"compound")&&t.compound,this._label=void 0,this._defaultNodeLabelFn=r.constant(void 0),this._defaultEdgeLabelFn=r.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[a]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={};}function u(t,e){t[e]?t[e]++:t[e]=1;}function c(t,e){--t[e]||delete t[e];}function f(t,e,n,a){var s=""+e,u=""+n;if(!t&&s>u){var c=s;s=u,u=c;}return s+o+u+o+(r.isUndefined(a)?i:a);}function h(t,e){return f(t,e.v,e.w,e.name);}s.prototype._nodeCount=0,s.prototype._edgeCount=0,s.prototype.isDirected=function(){return this._isDirected;},s.prototype.isMultigraph=function(){return this._isMultigraph;},s.prototype.isCompound=function(){return this._isCompound;},s.prototype.setGraph=function(t){return this._label=t,this;},s.prototype.graph=function(){return this._label;},s.prototype.setDefaultNodeLabel=function(t){return r.isFunction(t)||(t=r.constant(t)),this._defaultNodeLabelFn=t,this;},s.prototype.nodeCount=function(){return this._nodeCount;},s.prototype.nodes=function(){return r.keys(this._nodes);},s.prototype.sources=function(){var t=this;return r.filter(this.nodes(),function(e){return r.isEmpty(t._in[e]);});},s.prototype.sinks=function(){var t=this;return r.filter(this.nodes(),function(e){return r.isEmpty(t._out[e]);});},s.prototype.setNodes=function(t,e){var n=arguments,i=this;return r.each(t,function(t){n.length>1?i.setNode(t,e):i.setNode(t);}),this;},s.prototype.setNode=function(t,e){return r.has(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=e),this):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]=a,this._children[t]={},this._children[a][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount,this);},s.prototype.node=function(t){return this._nodes[t];},s.prototype.hasNode=function(t){return r.has(this._nodes,t);},s.prototype.removeNode=function(t){var e=this;if(r.has(this._nodes,t)){var n=function(t){e.removeEdge(e._edgeObjs[t]);};delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],r.each(this.children(t),function(t){e.setParent(t);}),delete this._children[t]),r.each(r.keys(this._in[t]),n),delete this._in[t],delete this._preds[t],r.each(r.keys(this._out[t]),n),delete this._out[t],delete this._sucs[t],--this._nodeCount;}return this;},s.prototype.setParent=function(t,e){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(r.isUndefined(e))e=a;else{for(var n=e+="";!r.isUndefined(n);n=this.parent(n))if(n===t)throw new Error("Setting "+e+" as parent of "+t+" would create a cycle");this.setNode(e);}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,this._children[e][t]=!0,this;},s.prototype._removeFromParentsChildList=function(t){delete this._children[this._parent[t]][t];},s.prototype.parent=function(t){if(this._isCompound){var e=this._parent[t];if(e!==a)return e;}},s.prototype.children=function(t){if(r.isUndefined(t)&&(t=a),this._isCompound){var e=this._children[t];if(e)return r.keys(e);}else{if(t===a)return this.nodes();if(this.hasNode(t))return [];}},s.prototype.predecessors=function(t){var e=this._preds[t];if(e)return r.keys(e);},s.prototype.successors=function(t){var e=this._sucs[t];if(e)return r.keys(e);},s.prototype.neighbors=function(t){var e=this.predecessors(t);if(e)return r.union(e,this.successors(t));},s.prototype.isLeaf=function(t){return 0===(this.isDirected()?this.successors(t):this.neighbors(t)).length;},s.prototype.filterNodes=function(t){var e=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});e.setGraph(this.graph());var n=this;r.each(this._nodes,function(n,r){t(r)&&e.setNode(r,n);}),r.each(this._edgeObjs,function(t){e.hasNode(t.v)&&e.hasNode(t.w)&&e.setEdge(t,n.edge(t));});var i={};return this._isCompound&&r.each(e.nodes(),function(t){e.setParent(t,function t(r){var a=n.parent(r);return void 0===a||e.hasNode(a)?(i[r]=a,a):a in i?i[a]:t(a);}(t));}),e;},s.prototype.setDefaultEdgeLabel=function(t){return r.isFunction(t)||(t=r.constant(t)),this._defaultEdgeLabelFn=t,this;},s.prototype.edgeCount=function(){return this._edgeCount;},s.prototype.edges=function(){return r.values(this._edgeObjs);},s.prototype.setPath=function(t,e){var n=this,i=arguments;return r.reduce(t,function(t,r){return i.length>1?n.setEdge(t,r,e):n.setEdge(t,r),r;}),this;},s.prototype.setEdge=function(){var t,e,n,i,a=!1,o=arguments[0];"object"==typeof o&&null!==o&&"v"in o?(t=o.v,e=o.w,n=o.name,2===arguments.length&&(i=arguments[1],a=!0)):(t=o,e=arguments[1],n=arguments[3],arguments.length>2&&(i=arguments[2],a=!0)),t=""+t,e=""+e,r.isUndefined(n)||(n=""+n);var s=f(this._isDirected,t,e,n);if(r.has(this._edgeLabels,s))return a&&(this._edgeLabels[s]=i),this;if(!r.isUndefined(n)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(e),this._edgeLabels[s]=a?i:this._defaultEdgeLabelFn(t,e,n);var c=function(t,e,n,r){var i=""+e,a=""+n;if(!t&&i>a){var o=i;i=a,a=o;}var s={v:i,w:a};r&&(s.name=r);return s;}(this._isDirected,t,e,n);return t=c.v,e=c.w,Object.freeze(c),this._edgeObjs[s]=c,u(this._preds[e],t),u(this._sucs[t],e),this._in[e][s]=c,this._out[t][s]=c,this._edgeCount++,this;},s.prototype.edge=function(t,e,n){var r=1===arguments.length?h(this._isDirected,arguments[0]):f(this._isDirected,t,e,n);return this._edgeLabels[r];},s.prototype.hasEdge=function(t,e,n){var i=1===arguments.length?h(this._isDirected,arguments[0]):f(this._isDirected,t,e,n);return r.has(this._edgeLabels,i);},s.prototype.removeEdge=function(t,e,n){var r=1===arguments.length?h(this._isDirected,arguments[0]):f(this._isDirected,t,e,n),i=this._edgeObjs[r];return i&&(t=i.v,e=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],c(this._preds[e],t),c(this._sucs[t],e),delete this._in[e][r],delete this._out[t][r],this._edgeCount--),this;},s.prototype.inEdges=function(t,e){var n=this._in[t];if(n){var i=r.values(n);return e?r.filter(i,function(t){return t.v===e;}):i;}},s.prototype.outEdges=function(t,e){var n=this._out[t];if(n){var i=r.values(n);return e?r.filter(i,function(t){return t.w===e;}):i;}},s.prototype.nodeEdges=function(t,e){var n=this.inEdges(t,e);if(n)return n.concat(this.outEdges(t,e));};},function(t,e){var n;n=function(){return this;}();try{n=n||Function("return this")()||(0,eval)("this");}catch(t){"object"==typeof window&&(n=window);}t.exports=n;},function(t,e,n){(function(t,r){var i;/**
	 * @license
	 * Lodash <https://lodash.com/>
	 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */(function(){var a,o=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",l=1,d=2,p=4,g=1,v=2,m=1,y=2,x=4,b=8,w=16,_=32,M=64,S=128,P=256,A=512,k=30,C="...",E=800,I=16,N=1,T=2,O=1/0,j=9007199254740991,B=1.7976931348623157e308,L=NaN,D=4294967295,R=D-1,F=D>>>1,Y=[["ary",S],["bind",m],["bindKey",y],["curry",b],["curryRight",w],["flip",A],["partial",_],["partialRight",M],["rearg",P]],z="[object Arguments]",q="[object Array]",X="[object AsyncFunction]",G="[object Boolean]",W="[object Date]",U="[object DOMException]",H="[object Error]",V="[object Function]",Z="[object GeneratorFunction]",Q="[object Map]",$="[object Number]",K="[object Null]",J="[object Object]",tt="[object Proxy]",et="[object RegExp]",nt="[object Set]",rt="[object String]",it="[object Symbol]",at="[object Undefined]",ot="[object WeakMap]",st="[object WeakSet]",ut="[object ArrayBuffer]",ct="[object DataView]",ft="[object Float32Array]",ht="[object Float64Array]",lt="[object Int8Array]",dt="[object Int16Array]",pt="[object Int32Array]",gt="[object Uint8Array]",vt="[object Uint8ClampedArray]",mt="[object Uint16Array]",yt="[object Uint32Array]",xt=/\b__p \+= '';/g,bt=/\b(__p \+=) '' \+/g,wt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_t=/&(?:amp|lt|gt|quot|#39);/g,Mt=/[&<>"']/g,St=RegExp(_t.source),Pt=RegExp(Mt.source),At=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ct=/<%=([\s\S]+?)%>/g,Et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,It=/^\w*$/,Nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tt=/[\\^$.*+?()[\]{}|]/g,Ot=RegExp(Tt.source),jt=/^\s+|\s+$/g,Bt=/^\s+/,Lt=/\s+$/,Dt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Rt=/\{\n\/\* \[wrapped with (.+)\] \*/,Ft=/,? & /,Yt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,zt=/\\(\\)?/g,qt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Xt=/\w*$/,Gt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Ut=/^\[object .+?Constructor\]$/,Ht=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Zt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qt=/($^)/,$t=/['\n\r\u2028\u2029\\]/g,Kt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Jt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",te="[\\ud800-\\udfff]",ee="["+Jt+"]",ne="["+Kt+"]",re="\\d+",ie="[\\u2700-\\u27bf]",ae="[a-z\\xdf-\\xf6\\xf8-\\xff]",oe="[^\\ud800-\\udfff"+Jt+re+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",se="\\ud83c[\\udffb-\\udfff]",ue="[^\\ud800-\\udfff]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",fe="[\\ud800-\\udbff][\\udc00-\\udfff]",he="[A-Z\\xc0-\\xd6\\xd8-\\xde]",le="(?:"+ae+"|"+oe+")",de="(?:"+he+"|"+oe+")",pe="(?:"+ne+"|"+se+")"+"?",ge="[\\ufe0e\\ufe0f]?"+pe+("(?:\\u200d(?:"+[ue,ce,fe].join("|")+")[\\ufe0e\\ufe0f]?"+pe+")*"),ve="(?:"+[ie,ce,fe].join("|")+")"+ge,me="(?:"+[ue+ne+"?",ne,ce,fe,te].join("|")+")",ye=RegExp("['’]","g"),xe=RegExp(ne,"g"),be=RegExp(se+"(?="+se+")|"+me+ge,"g"),we=RegExp([he+"?"+ae+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[ee,he,"$"].join("|")+")",de+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[ee,he+le,"$"].join("|")+")",he+"?"+le+"+(?:['’](?:d|ll|m|re|s|t|ve))?",he+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",re,ve].join("|"),"g"),_e=RegExp("[\\u200d\\ud800-\\udfff"+Kt+"\\ufe0e\\ufe0f]"),Me=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Se=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Pe=-1,Ae={};Ae[ft]=Ae[ht]=Ae[lt]=Ae[dt]=Ae[pt]=Ae[gt]=Ae[vt]=Ae[mt]=Ae[yt]=!0,Ae[z]=Ae[q]=Ae[ut]=Ae[G]=Ae[ct]=Ae[W]=Ae[H]=Ae[V]=Ae[Q]=Ae[$]=Ae[J]=Ae[et]=Ae[nt]=Ae[rt]=Ae[ot]=!1;var ke={};ke[z]=ke[q]=ke[ut]=ke[ct]=ke[G]=ke[W]=ke[ft]=ke[ht]=ke[lt]=ke[dt]=ke[pt]=ke[Q]=ke[$]=ke[J]=ke[et]=ke[nt]=ke[rt]=ke[it]=ke[gt]=ke[vt]=ke[mt]=ke[yt]=!0,ke[H]=ke[V]=ke[ot]=!1;var Ce={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ee=parseFloat,Ie=parseInt,Ne="object"==typeof t&&t&&t.Object===Object&&t,Te="object"==typeof self&&self&&self.Object===Object&&self,Oe=Ne||Te||Function("return this")(),je="object"==typeof e&&e&&!e.nodeType&&e,Be=je&&"object"==typeof r&&r&&!r.nodeType&&r,Le=Be&&Be.exports===je,De=Le&&Ne.process,Re=function(){try{var t=Be&&Be.require&&Be.require("util").types;return t||De&&De.binding&&De.binding("util");}catch(t){}}(),Fe=Re&&Re.isArrayBuffer,Ye=Re&&Re.isDate,ze=Re&&Re.isMap,qe=Re&&Re.isRegExp,Xe=Re&&Re.isSet,Ge=Re&&Re.isTypedArray;function We(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2]);}return t.apply(e,n);}function Ue(t,e,n,r){for(var i=-1,a=null==t?0:t.length;++i<a;){var o=t[i];e(r,o,n(o),t);}return r;}function He(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t;}function Ve(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t;}function Ze(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return !1;return !0;}function Qe(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o);}return a;}function $e(t,e){return !!(null==t?0:t.length)&&un(t,e,0)>-1;}function Ke(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return !0;return !1;}function Je(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i;}function tn(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t;}function en(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n;}function nn(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n;}function rn(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1;}var an=ln("length");function on(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1;}),r;}function sn(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return -1;}function un(t,e,n){return e==e?function(t,e,n){var r=n-1,i=t.length;for(;++r<i;)if(t[r]===e)return r;return -1;}(t,e,n):sn(t,fn,n);}function cn(t,e,n,r){for(var i=n-1,a=t.length;++i<a;)if(r(t[i],e))return i;return -1;}function fn(t){return t!=t;}function hn(t,e){var n=null==t?0:t.length;return n?gn(t,e)/n:L;}function ln(t){return function(e){return null==e?a:e[t];};}function dn(t){return function(e){return null==t?a:t[e];};}function pn(t,e,n,r,i){return i(t,function(t,i,a){n=r?(r=!1,t):e(n,t,i,a);}),n;}function gn(t,e){for(var n,r=-1,i=t.length;++r<i;){var o=e(t[r]);o!==a&&(n=n===a?o:n+o);}return n;}function vn(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r;}function mn(t){return function(e){return t(e);};}function yn(t,e){return Je(e,function(e){return t[e];});}function xn(t,e){return t.has(e);}function bn(t,e){for(var n=-1,r=t.length;++n<r&&un(e,t[n],0)>-1;);return n;}function wn(t,e){for(var n=t.length;n--&&un(e,t[n],0)>-1;);return n;}var _n=dn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Mn=dn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Sn(t){return "\\"+Ce[t];}function Pn(t){return _e.test(t);}function An(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t];}),n;}function kn(t,e){return function(n){return t(e(n));};}function Cn(t,e){for(var n=-1,r=t.length,i=0,a=[];++n<r;){var o=t[n];o!==e&&o!==h||(t[n]=h,a[i++]=n);}return a;}function En(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t;}),n;}function In(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t];}),n;}function Nn(t){return Pn(t)?function(t){var e=be.lastIndex=0;for(;be.test(t);)++e;return e;}(t):an(t);}function Tn(t){return Pn(t)?function(t){return t.match(be)||[];}(t):function(t){return t.split("");}(t);}var On=dn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var jn=function t(e){var n=(e=null==e?Oe:jn.defaults(Oe.Object(),e,jn.pick(Oe,Se))).Array,r=e.Date,i=e.Error,Kt=e.Function,Jt=e.Math,te=e.Object,ee=e.RegExp,ne=e.String,re=e.TypeError,ie=n.prototype,ae=Kt.prototype,oe=te.prototype,se=e["__core-js_shared__"],ue=ae.toString,ce=oe.hasOwnProperty,fe=0,he=function(){var t=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:"";}(),le=oe.toString,de=ue.call(te),pe=Oe._,ge=ee("^"+ue.call(ce).replace(Tt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ve=Le?e.Buffer:a,me=e.Symbol,be=e.Uint8Array,_e=ve?ve.allocUnsafe:a,Ce=kn(te.getPrototypeOf,te),Ne=te.create,Te=oe.propertyIsEnumerable,je=ie.splice,Be=me?me.isConcatSpreadable:a,De=me?me.iterator:a,Re=me?me.toStringTag:a,an=function(){try{var t=Da(te,"defineProperty");return t({},"",{}),t;}catch(t){}}(),dn=e.clearTimeout!==Oe.clearTimeout&&e.clearTimeout,Bn=r&&r.now!==Oe.Date.now&&r.now,Ln=e.setTimeout!==Oe.setTimeout&&e.setTimeout,Dn=Jt.ceil,Rn=Jt.floor,Fn=te.getOwnPropertySymbols,Yn=ve?ve.isBuffer:a,zn=e.isFinite,qn=ie.join,Xn=kn(te.keys,te),Gn=Jt.max,Wn=Jt.min,Un=r.now,Hn=e.parseInt,Vn=Jt.random,Zn=ie.reverse,Qn=Da(e,"DataView"),$n=Da(e,"Map"),Kn=Da(e,"Promise"),Jn=Da(e,"Set"),tr=Da(e,"WeakMap"),er=Da(te,"create"),nr=tr&&new tr(),rr={},ir=co(Qn),ar=co($n),or=co(Kn),sr=co(Jn),ur=co(tr),cr=me?me.prototype:a,fr=cr?cr.valueOf:a,hr=cr?cr.toString:a;function lr(t){if(ks(t)&&!vs(t)&&!(t instanceof vr)){if(t instanceof gr)return t;if(ce.call(t,"__wrapped__"))return fo(t);}return new gr(t);}var dr=function(){function t(){}return function(e){if(!As(e))return {};if(Ne)return Ne(e);t.prototype=e;var n=new t();return t.prototype=a,n;};}();function pr(){}function gr(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=a;}function vr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=D,this.__views__=[];}function mr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function yr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function xr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}function br(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new xr();++e<n;)this.add(t[e]);}function wr(t){var e=this.__data__=new yr(t);this.size=e.size;}function _r(t,e){var n=vs(t),r=!n&&gs(t),i=!n&&!r&&bs(t),a=!n&&!r&&!i&&Bs(t),o=n||r||i||a,s=o?vn(t.length,ne):[],u=s.length;for(var c in t)!e&&!ce.call(t,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ga(c,u))||s.push(c);return s;}function Mr(t){var e=t.length;return e?t[bi(0,e-1)]:a;}function Sr(t,e){return oo(ea(t),Or(e,0,t.length));}function Pr(t){return oo(ea(t));}function Ar(t,e,n){(n===a||ls(t[e],n))&&(n!==a||e in t)||Nr(t,e,n);}function kr(t,e,n){var r=t[e];ce.call(t,e)&&ls(r,n)&&(n!==a||e in t)||Nr(t,e,n);}function Cr(t,e){for(var n=t.length;n--;)if(ls(t[n][0],e))return n;return -1;}function Er(t,e,n,r){return Rr(t,function(t,i,a){e(r,t,n(t),a);}),r;}function Ir(t,e){return t&&na(e,ru(e),t);}function Nr(t,e,n){"__proto__"==e&&an?an(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;}function Tr(t,e){for(var r=-1,i=e.length,o=n(i),s=null==t;++r<i;)o[r]=s?a:Ks(t,e[r]);return o;}function Or(t,e,n){return t==t&&(n!==a&&(t=t<=n?t:n),e!==a&&(t=t>=e?t:e)),t;}function jr(t,e,n,r,i,o){var s,u=e&l,c=e&d,f=e&p;if(n&&(s=i?n(t,r,i,o):n(t)),s!==a)return s;if(!As(t))return t;var h=vs(t);if(h){if(s=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&ce.call(t,"index")&&(n.index=t.index,n.input=t.input),n;}(t),!u)return ea(t,s);}else{var g=Ya(t),v=g==V||g==Z;if(bs(t))return Zi(t,u);if(g==J||g==z||v&&!i){if(s=c||v?{}:qa(t),!u)return c?function(t,e){return na(t,Fa(t),e);}(t,function(t,e){return t&&na(e,iu(e),t);}(s,t)):function(t,e){return na(t,Ra(t),e);}(t,Ir(s,t));}else{if(!ke[g])return i?t:{};s=function(t,e,n){var r=t.constructor;switch(e){case ut:return Qi(t);case G:case W:return new r(+t);case ct:return function(t,e){var n=e?Qi(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength);}(t,n);case ft:case ht:case lt:case dt:case pt:case gt:case vt:case mt:case yt:return $i(t,n);case Q:return new r();case $:case rt:return new r(t);case et:return function(t){var e=new t.constructor(t.source,Xt.exec(t));return e.lastIndex=t.lastIndex,e;}(t);case nt:return new r();case it:return function(t){return fr?te(fr.call(t)):{};}(t);}}(t,g,u);}}o||(o=new wr());var m=o.get(t);if(m)return m;o.set(t,s),Ts(t)?t.forEach(function(r){s.add(jr(r,e,n,r,t,o));}):Cs(t)&&t.forEach(function(r,i){s.set(i,jr(r,e,n,i,t,o));});var y=h?a:(f?c?Ia:Ea:c?iu:ru)(t);return He(y||t,function(r,i){y&&(r=t[i=r]),kr(s,i,jr(r,e,n,i,t,o));}),s;}function Br(t,e,n){var r=n.length;if(null==t)return !r;for(t=te(t);r--;){var i=n[r],o=e[i],s=t[i];if(s===a&&!(i in t)||!o(s))return !1;}return !0;}function Lr(t,e,n){if("function"!=typeof t)throw new re(u);return no(function(){t.apply(a,n);},e);}function Dr(t,e,n,r){var i=-1,a=$e,s=!0,u=t.length,c=[],f=e.length;if(!u)return c;n&&(e=Je(e,mn(n))),r?(a=Ke,s=!1):e.length>=o&&(a=xn,s=!1,e=new br(e));t:for(;++i<u;){var h=t[i],l=null==n?h:n(h);if(h=r||0!==h?h:0,s&&l==l){for(var d=f;d--;)if(e[d]===l)continue t;c.push(h);}else a(e,l,r)||c.push(h);}return c;}lr.templateSettings={escape:At,evaluate:kt,interpolate:Ct,variable:"",imports:{_:lr}},lr.prototype=pr.prototype,lr.prototype.constructor=lr,gr.prototype=dr(pr.prototype),gr.prototype.constructor=gr,vr.prototype=dr(pr.prototype),vr.prototype.constructor=vr,mr.prototype.clear=function(){this.__data__=er?er(null):{},this.size=0;},mr.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e;},mr.prototype.get=function(t){var e=this.__data__;if(er){var n=e[t];return n===c?a:n;}return ce.call(e,t)?e[t]:a;},mr.prototype.has=function(t){var e=this.__data__;return er?e[t]!==a:ce.call(e,t);},mr.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=er&&e===a?c:e,this;},yr.prototype.clear=function(){this.__data__=[],this.size=0;},yr.prototype.delete=function(t){var e=this.__data__,n=Cr(e,t);return !(n<0||(n==e.length-1?e.pop():je.call(e,n,1),--this.size,0));},yr.prototype.get=function(t){var e=this.__data__,n=Cr(e,t);return n<0?a:e[n][1];},yr.prototype.has=function(t){return Cr(this.__data__,t)>-1;},yr.prototype.set=function(t,e){var n=this.__data__,r=Cr(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this;},xr.prototype.clear=function(){this.size=0,this.__data__={hash:new mr(),map:new($n||yr)(),string:new mr()};},xr.prototype.delete=function(t){var e=Ba(this,t).delete(t);return this.size-=e?1:0,e;},xr.prototype.get=function(t){return Ba(this,t).get(t);},xr.prototype.has=function(t){return Ba(this,t).has(t);},xr.prototype.set=function(t,e){var n=Ba(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this;},br.prototype.add=br.prototype.push=function(t){return this.__data__.set(t,c),this;},br.prototype.has=function(t){return this.__data__.has(t);},wr.prototype.clear=function(){this.__data__=new yr(),this.size=0;},wr.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n;},wr.prototype.get=function(t){return this.__data__.get(t);},wr.prototype.has=function(t){return this.__data__.has(t);},wr.prototype.set=function(t,e){var n=this.__data__;if(n instanceof yr){var r=n.__data__;if(!$n||r.length<o-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new xr(r);}return n.set(t,e),this.size=n.size,this;};var Rr=aa(Ur),Fr=aa(Hr,!0);function Yr(t,e){var n=!0;return Rr(t,function(t,r,i){return n=!!e(t,r,i);}),n;}function zr(t,e,n){for(var r=-1,i=t.length;++r<i;){var o=t[r],s=e(o);if(null!=s&&(u===a?s==s&&!js(s):n(s,u)))var u=s,c=o;}return c;}function qr(t,e){var n=[];return Rr(t,function(t,r,i){e(t,r,i)&&n.push(t);}),n;}function Xr(t,e,n,r,i){var a=-1,o=t.length;for(n||(n=Xa),i||(i=[]);++a<o;){var s=t[a];e>0&&n(s)?e>1?Xr(s,e-1,n,r,i):tn(i,s):r||(i[i.length]=s);}return i;}var Gr=oa(),Wr=oa(!0);function Ur(t,e){return t&&Gr(t,e,ru);}function Hr(t,e){return t&&Wr(t,e,ru);}function Vr(t,e){return Qe(e,function(e){return Ms(t[e]);});}function Zr(t,e){for(var n=0,r=(e=Wi(e,t)).length;null!=t&&n<r;)t=t[uo(e[n++])];return n&&n==r?t:a;}function Qr(t,e,n){var r=e(t);return vs(t)?r:tn(r,n(t));}function $r(t){return null==t?t===a?at:K:Re&&Re in te(t)?function(t){var e=ce.call(t,Re),n=t[Re];try{t[Re]=a;var r=!0;}catch(t){}var i=le.call(t);return r&&(e?t[Re]=n:delete t[Re]),i;}(t):function(t){return le.call(t);}(t);}function Kr(t,e){return t>e;}function Jr(t,e){return null!=t&&ce.call(t,e);}function ti(t,e){return null!=t&&e in te(t);}function ei(t,e,r){for(var i=r?Ke:$e,o=t[0].length,s=t.length,u=s,c=n(s),f=1/0,h=[];u--;){var l=t[u];u&&e&&(l=Je(l,mn(e))),f=Wn(l.length,f),c[u]=!r&&(e||o>=120&&l.length>=120)?new br(u&&l):a;}l=t[0];var d=-1,p=c[0];t:for(;++d<o&&h.length<f;){var g=l[d],v=e?e(g):g;if(g=r||0!==g?g:0,!(p?xn(p,v):i(h,v,r))){for(u=s;--u;){var m=c[u];if(!(m?xn(m,v):i(t[u],v,r)))continue t;}p&&p.push(v),h.push(g);}}return h;}function ni(t,e,n){var r=null==(t=Ja(t,e=Wi(e,t)))?t:t[uo(_o(e))];return null==r?a:We(r,t,n);}function ri(t){return ks(t)&&$r(t)==z;}function ii(t,e,n,r,i){return t===e||(null==t||null==e||!ks(t)&&!ks(e)?t!=t&&e!=e:function(t,e,n,r,i,o){var s=vs(t),u=vs(e),c=s?q:Ya(t),f=u?q:Ya(e),h=(c=c==z?J:c)==J,l=(f=f==z?J:f)==J,d=c==f;if(d&&bs(t)){if(!bs(e))return !1;s=!0,h=!1;}if(d&&!h)return o||(o=new wr()),s||Bs(t)?ka(t,e,n,r,i,o):function(t,e,n,r,i,a,o){switch(n){case ct:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case ut:return !(t.byteLength!=e.byteLength||!a(new be(t),new be(e)));case G:case W:case $:return ls(+t,+e);case H:return t.name==e.name&&t.message==e.message;case et:case rt:return t==e+"";case Q:var s=An;case nt:var u=r&g;if(s||(s=En),t.size!=e.size&&!u)return !1;var c=o.get(t);if(c)return c==e;r|=v,o.set(t,e);var f=ka(s(t),s(e),r,i,a,o);return o.delete(t),f;case it:if(fr)return fr.call(t)==fr.call(e);}return !1;}(t,e,c,n,r,i,o);if(!(n&g)){var p=h&&ce.call(t,"__wrapped__"),m=l&&ce.call(e,"__wrapped__");if(p||m){var y=p?t.value():t,x=m?e.value():e;return o||(o=new wr()),i(y,x,n,r,o);}}return !!d&&(o||(o=new wr()),function(t,e,n,r,i,o){var s=n&g,u=Ea(t),c=u.length,f=Ea(e).length;if(c!=f&&!s)return !1;for(var h=c;h--;){var l=u[h];if(!(s?l in e:ce.call(e,l)))return !1;}var d=o.get(t);if(d&&o.get(e))return d==e;var p=!0;o.set(t,e),o.set(e,t);for(var v=s;++h<c;){l=u[h];var m=t[l],y=e[l];if(r)var x=s?r(y,m,l,e,t,o):r(m,y,l,t,e,o);if(!(x===a?m===y||i(m,y,n,r,o):x)){p=!1;break;}v||(v="constructor"==l);}if(p&&!v){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(p=!1);}return o.delete(t),o.delete(e),p;}(t,e,n,r,i,o));}(t,e,n,r,ii,i));}function ai(t,e,n,r){var i=n.length,o=i,s=!r;if(null==t)return !o;for(t=te(t);i--;){var u=n[i];if(s&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return !1;}for(;++i<o;){var c=(u=n[i])[0],f=t[c],h=u[1];if(s&&u[2]){if(f===a&&!(c in t))return !1;}else{var l=new wr();if(r)var d=r(f,h,c,t,e,l);if(!(d===a?ii(h,f,g|v,r,l):d))return !1;}}return !0;}function oi(t){return !(!As(t)||function(t){return !!he&&he in t;}(t))&&(Ms(t)?ge:Ut).test(co(t));}function si(t){return "function"==typeof t?t:null==t?Eu:"object"==typeof t?vs(t)?di(t[0],t[1]):li(t):Ru(t);}function ui(t){if(!Za(t))return Xn(t);var e=[];for(var n in te(t))ce.call(t,n)&&"constructor"!=n&&e.push(n);return e;}function ci(t){if(!As(t))return function(t){var e=[];if(null!=t)for(var n in te(t))e.push(n);return e;}(t);var e=Za(t),n=[];for(var r in t)("constructor"!=r||!e&&ce.call(t,r))&&n.push(r);return n;}function fi(t,e){return t<e;}function hi(t,e){var r=-1,i=ys(t)?n(t.length):[];return Rr(t,function(t,n,a){i[++r]=e(t,n,a);}),i;}function li(t){var e=La(t);return 1==e.length&&e[0][2]?$a(e[0][0],e[0][1]):function(n){return n===t||ai(n,t,e);};}function di(t,e){return Ua(t)&&Qa(e)?$a(uo(t),e):function(n){var r=Ks(n,t);return r===a&&r===e?Js(n,t):ii(e,r,g|v);};}function pi(t,e,n,r,i){t!==e&&Gr(e,function(o,s){if(i||(i=new wr()),As(o))!function(t,e,n,r,i,o,s){var u=to(t,n),c=to(e,n),f=s.get(c);if(f)Ar(t,n,f);else{var h=o?o(u,c,n+"",t,e,s):a,l=h===a;if(l){var d=vs(c),p=!d&&bs(c),g=!d&&!p&&Bs(c);h=c,d||p||g?vs(u)?h=u:xs(u)?h=ea(u):p?(l=!1,h=Zi(c,!0)):g?(l=!1,h=$i(c,!0)):h=[]:Is(c)||gs(c)?(h=u,gs(u)?h=Xs(u):As(u)&&!Ms(u)||(h=qa(c))):l=!1;}l&&(s.set(c,h),i(h,c,r,o,s),s.delete(c)),Ar(t,n,h);}}(t,e,s,n,pi,r,i);else{var u=r?r(to(t,s),o,s+"",t,e,i):a;u===a&&(u=o),Ar(t,s,u);}},iu);}function gi(t,e){var n=t.length;if(n)return Ga(e+=e<0?n:0,n)?t[e]:a;}function vi(t,e,n){var r=-1;return e=Je(e.length?e:[Eu],mn(ja())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t;}(hi(t,function(t,n,i){return {criteria:Je(e,function(e){return e(t);}),index:++r,value:t};}),function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,a=e.criteria,o=i.length,s=n.length;++r<o;){var u=Ki(i[r],a[r]);if(u){if(r>=s)return u;var c=n[r];return u*("desc"==c?-1:1);}}return t.index-e.index;}(t,e,n);});}function mi(t,e,n){for(var r=-1,i=e.length,a={};++r<i;){var o=e[r],s=Zr(t,o);n(s,o)&&Pi(a,Wi(o,t),s);}return a;}function yi(t,e,n,r){var i=r?cn:un,a=-1,o=e.length,s=t;for(t===e&&(e=ea(e)),n&&(s=Je(t,mn(n)));++a<o;)for(var u=0,c=e[a],f=n?n(c):c;(u=i(s,f,u,r))>-1;)s!==t&&je.call(s,u,1),je.call(t,u,1);return t;}function xi(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==a){var a=i;Ga(i)?je.call(t,i,1):Di(t,i);}}return t;}function bi(t,e){return t+Rn(Vn()*(e-t+1));}function wi(t,e){var n="";if(!t||e<1||e>j)return n;do{e%2&&(n+=t),(e=Rn(e/2))&&(t+=t);}while(e);return n;}function _i(t,e){return ro(Ka(t,e,Eu),t+"");}function Mi(t){return Mr(lu(t));}function Si(t,e){var n=lu(t);return oo(n,Or(e,0,n.length));}function Pi(t,e,n,r){if(!As(t))return t;for(var i=-1,o=(e=Wi(e,t)).length,s=o-1,u=t;null!=u&&++i<o;){var c=uo(e[i]),f=n;if(i!=s){var h=u[c];(f=r?r(h,c,u):a)===a&&(f=As(h)?h:Ga(e[i+1])?[]:{});}kr(u,c,f),u=u[c];}return t;}var Ai=nr?function(t,e){return nr.set(t,e),t;}:Eu,ki=an?function(t,e){return an(t,"toString",{configurable:!0,enumerable:!1,value:Au(e),writable:!0});}:Eu;function Ci(t){return oo(lu(t));}function Ei(t,e,r){var i=-1,a=t.length;e<0&&(e=-e>a?0:a+e),(r=r>a?a:r)<0&&(r+=a),a=e>r?0:r-e>>>0,e>>>=0;for(var o=n(a);++i<a;)o[i]=t[i+e];return o;}function Ii(t,e){var n;return Rr(t,function(t,r,i){return !(n=e(t,r,i));}),!!n;}function Ni(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e==e&&i<=F){for(;r<i;){var a=r+i>>>1,o=t[a];null!==o&&!js(o)&&(n?o<=e:o<e)?r=a+1:i=a;}return i;}return Ti(t,e,Eu,n);}function Ti(t,e,n,r){e=n(e);for(var i=0,o=null==t?0:t.length,s=e!=e,u=null===e,c=js(e),f=e===a;i<o;){var h=Rn((i+o)/2),l=n(t[h]),d=l!==a,p=null===l,g=l==l,v=js(l);if(s)var m=r||g;else m=f?g&&(r||d):u?g&&d&&(r||!p):c?g&&d&&!p&&(r||!v):!p&&!v&&(r?l<=e:l<e);m?i=h+1:o=h;}return Wn(o,R);}function Oi(t,e){for(var n=-1,r=t.length,i=0,a=[];++n<r;){var o=t[n],s=e?e(o):o;if(!n||!ls(s,u)){var u=s;a[i++]=0===o?0:o;}}return a;}function ji(t){return "number"==typeof t?t:js(t)?L:+t;}function Bi(t){if("string"==typeof t)return t;if(vs(t))return Je(t,Bi)+"";if(js(t))return hr?hr.call(t):"";var e=t+"";return "0"==e&&1/t==-O?"-0":e;}function Li(t,e,n){var r=-1,i=$e,a=t.length,s=!0,u=[],c=u;if(n)s=!1,i=Ke;else if(a>=o){var f=e?null:wa(t);if(f)return En(f);s=!1,i=xn,c=new br();}else c=e?[]:u;t:for(;++r<a;){var h=t[r],l=e?e(h):h;if(h=n||0!==h?h:0,s&&l==l){for(var d=c.length;d--;)if(c[d]===l)continue t;e&&c.push(l),u.push(h);}else i(c,l,n)||(c!==u&&c.push(l),u.push(h));}return u;}function Di(t,e){return null==(t=Ja(t,e=Wi(e,t)))||delete t[uo(_o(e))];}function Ri(t,e,n,r){return Pi(t,e,n(Zr(t,e)),r);}function Fi(t,e,n,r){for(var i=t.length,a=r?i:-1;(r?a--:++a<i)&&e(t[a],a,t););return n?Ei(t,r?0:a,r?a+1:i):Ei(t,r?a+1:0,r?i:a);}function Yi(t,e){var n=t;return n instanceof vr&&(n=n.value()),en(e,function(t,e){return e.func.apply(e.thisArg,tn([t],e.args));},n);}function zi(t,e,r){var i=t.length;if(i<2)return i?Li(t[0]):[];for(var a=-1,o=n(i);++a<i;)for(var s=t[a],u=-1;++u<i;)u!=a&&(o[a]=Dr(o[a]||s,t[u],e,r));return Li(Xr(o,1),e,r);}function qi(t,e,n){for(var r=-1,i=t.length,o=e.length,s={};++r<i;){var u=r<o?e[r]:a;n(s,t[r],u);}return s;}function Xi(t){return xs(t)?t:[];}function Gi(t){return "function"==typeof t?t:Eu;}function Wi(t,e){return vs(t)?t:Ua(t,e)?[t]:so(Gs(t));}var Ui=_i;function Hi(t,e,n){var r=t.length;return n=n===a?r:n,!e&&n>=r?t:Ei(t,e,n);}var Vi=dn||function(t){return Oe.clearTimeout(t);};function Zi(t,e){if(e)return t.slice();var n=t.length,r=_e?_e(n):new t.constructor(n);return t.copy(r),r;}function Qi(t){var e=new t.constructor(t.byteLength);return new be(e).set(new be(t)),e;}function $i(t,e){var n=e?Qi(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length);}function Ki(t,e){if(t!==e){var n=t!==a,r=null===t,i=t==t,o=js(t),s=e!==a,u=null===e,c=e==e,f=js(e);if(!u&&!f&&!o&&t>e||o&&s&&c&&!u&&!f||r&&s&&c||!n&&c||!i)return 1;if(!r&&!o&&!f&&t<e||f&&n&&i&&!r&&!o||u&&n&&i||!s&&i||!c)return -1;}return 0;}function Ji(t,e,r,i){for(var a=-1,o=t.length,s=r.length,u=-1,c=e.length,f=Gn(o-s,0),h=n(c+f),l=!i;++u<c;)h[u]=e[u];for(;++a<s;)(l||a<o)&&(h[r[a]]=t[a]);for(;f--;)h[u++]=t[a++];return h;}function ta(t,e,r,i){for(var a=-1,o=t.length,s=-1,u=r.length,c=-1,f=e.length,h=Gn(o-u,0),l=n(h+f),d=!i;++a<h;)l[a]=t[a];for(var p=a;++c<f;)l[p+c]=e[c];for(;++s<u;)(d||a<o)&&(l[p+r[s]]=t[a++]);return l;}function ea(t,e){var r=-1,i=t.length;for(e||(e=n(i));++r<i;)e[r]=t[r];return e;}function na(t,e,n,r){var i=!n;n||(n={});for(var o=-1,s=e.length;++o<s;){var u=e[o],c=r?r(n[u],t[u],u,n,t):a;c===a&&(c=t[u]),i?Nr(n,u,c):kr(n,u,c);}return n;}function ra(t,e){return function(n,r){var i=vs(n)?Ue:Er,a=e?e():{};return i(n,t,ja(r,2),a);};}function ia(t){return _i(function(e,n){var r=-1,i=n.length,o=i>1?n[i-1]:a,s=i>2?n[2]:a;for(o=t.length>3&&"function"==typeof o?(i--,o):a,s&&Wa(n[0],n[1],s)&&(o=i<3?a:o,i=1),e=te(e);++r<i;){var u=n[r];u&&t(e,u,r,o);}return e;});}function aa(t,e){return function(n,r){if(null==n)return n;if(!ys(n))return t(n,r);for(var i=n.length,a=e?i:-1,o=te(n);(e?a--:++a<i)&&!1!==r(o[a],a,o););return n;};}function oa(t){return function(e,n,r){for(var i=-1,a=te(e),o=r(e),s=o.length;s--;){var u=o[t?s:++i];if(!1===n(a[u],u,a))break;}return e;};}function sa(t){return function(e){var n=Pn(e=Gs(e))?Tn(e):a,r=n?n[0]:e.charAt(0),i=n?Hi(n,1).join(""):e.slice(1);return r[t]()+i;};}function ua(t){return function(e){return en(Mu(gu(e).replace(ye,"")),t,"");};}function ca(t){return function(){var e=arguments;switch(e.length){case 0:return new t();case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6]);}var n=dr(t.prototype),r=t.apply(n,e);return As(r)?r:n;};}function fa(t){return function(e,n,r){var i=te(e);if(!ys(e)){var o=ja(n,3);e=ru(e),n=function(t){return o(i[t],t,i);};}var s=t(e,n,r);return s>-1?i[o?e[s]:s]:a;};}function ha(t){return Ca(function(e){var n=e.length,r=n,i=gr.prototype.thru;for(t&&e.reverse();r--;){var o=e[r];if("function"!=typeof o)throw new re(u);if(i&&!s&&"wrapper"==Ta(o))var s=new gr([],!0);}for(r=s?r:n;++r<n;){var c=Ta(o=e[r]),f="wrapper"==c?Na(o):a;s=f&&Ha(f[0])&&f[1]==(S|b|_|P)&&!f[4].length&&1==f[9]?s[Ta(f[0])].apply(s,f[3]):1==o.length&&Ha(o)?s[c]():s.thru(o);}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&vs(r))return s.plant(r).value();for(var i=0,a=n?e[i].apply(this,t):r;++i<n;)a=e[i].call(this,a);return a;};});}function la(t,e,r,i,o,s,u,c,f,h){var l=e&S,d=e&m,p=e&y,g=e&(b|w),v=e&A,x=p?a:ca(t);return function m(){for(var y=arguments.length,b=n(y),w=y;w--;)b[w]=arguments[w];if(g)var _=Oa(m),M=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r;}(b,_);if(i&&(b=Ji(b,i,o,g)),s&&(b=ta(b,s,u,g)),y-=M,g&&y<h){var S=Cn(b,_);return xa(t,e,la,m.placeholder,r,b,S,c,f,h-y);}var P=d?r:this,A=p?P[t]:t;return y=b.length,c?b=function(t,e){for(var n=t.length,r=Wn(e.length,n),i=ea(t);r--;){var o=e[r];t[r]=Ga(o,n)?i[o]:a;}return t;}(b,c):v&&y>1&&b.reverse(),l&&f<y&&(b.length=f),this&&this!==Oe&&this instanceof m&&(A=x||ca(A)),A.apply(P,b);};}function da(t,e){return function(n,r){return function(t,e,n,r){return Ur(t,function(t,i,a){e(r,n(t),i,a);}),r;}(n,t,e(r),{});};}function pa(t,e){return function(n,r){var i;if(n===a&&r===a)return e;if(n!==a&&(i=n),r!==a){if(i===a)return r;"string"==typeof n||"string"==typeof r?(n=Bi(n),r=Bi(r)):(n=ji(n),r=ji(r)),i=t(n,r);}return i;};}function ga(t){return Ca(function(e){return e=Je(e,mn(ja())),_i(function(n){var r=this;return t(e,function(t){return We(t,r,n);});});});}function va(t,e){var n=(e=e===a?" ":Bi(e)).length;if(n<2)return n?wi(e,t):e;var r=wi(e,Dn(t/Nn(e)));return Pn(e)?Hi(Tn(r),0,t).join(""):r.slice(0,t);}function ma(t){return function(e,r,i){return i&&"number"!=typeof i&&Wa(e,r,i)&&(r=i=a),e=Fs(e),r===a?(r=e,e=0):r=Fs(r),function(t,e,r,i){for(var a=-1,o=Gn(Dn((e-t)/(r||1)),0),s=n(o);o--;)s[i?o:++a]=t,t+=r;return s;}(e,r,i=i===a?e<r?1:-1:Fs(i),t);};}function ya(t){return function(e,n){return "string"==typeof e&&"string"==typeof n||(e=qs(e),n=qs(n)),t(e,n);};}function xa(t,e,n,r,i,o,s,u,c,f){var h=e&b;e|=h?_:M,(e&=~(h?M:_))&x||(e&=~(m|y));var l=[t,e,i,h?o:a,h?s:a,h?a:o,h?a:s,u,c,f],d=n.apply(a,l);return Ha(t)&&eo(d,l),d.placeholder=r,io(d,t,e);}function ba(t){var e=Jt[t];return function(t,n){if(t=qs(t),(n=null==n?0:Wn(Ys(n),292))&&zn(t)){var r=(Gs(t)+"e").split("e");return +((r=(Gs(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n));}return e(t);};}var wa=Jn&&1/En(new Jn([,-0]))[1]==O?function(t){return new Jn(t);}:ju;function _a(t){return function(e){var n=Ya(e);return n==Q?An(e):n==nt?In(e):function(t,e){return Je(e,function(e){return [e,t[e]];});}(e,t(e));};}function Ma(t,e,r,i,o,s,c,f){var l=e&y;if(!l&&"function"!=typeof t)throw new re(u);var d=i?i.length:0;if(d||(e&=~(_|M),i=o=a),c=c===a?c:Gn(Ys(c),0),f=f===a?f:Ys(f),d-=o?o.length:0,e&M){var p=i,g=o;i=o=a;}var v=l?a:Na(t),A=[t,e,r,i,o,p,g,s,c,f];if(v&&function(t,e){var n=t[1],r=e[1],i=n|r,a=i<(m|y|S),o=r==S&&n==b||r==S&&n==P&&t[7].length<=e[8]||r==(S|P)&&e[7].length<=e[8]&&n==b;if(!a&&!o)return t;r&m&&(t[2]=e[2],i|=n&m?0:x);var s=e[3];if(s){var u=t[3];t[3]=u?Ji(u,s,e[4]):s,t[4]=u?Cn(t[3],h):e[4];}(s=e[5])&&(u=t[5],t[5]=u?ta(u,s,e[6]):s,t[6]=u?Cn(t[5],h):e[6]),(s=e[7])&&(t[7]=s),r&S&&(t[8]=null==t[8]?e[8]:Wn(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i;}(A,v),t=A[0],e=A[1],r=A[2],i=A[3],o=A[4],!(f=A[9]=A[9]===a?l?0:t.length:Gn(A[9]-d,0))&&e&(b|w)&&(e&=~(b|w)),e&&e!=m)k=e==b||e==w?function(t,e,r){var i=ca(t);return function o(){for(var s=arguments.length,u=n(s),c=s,f=Oa(o);c--;)u[c]=arguments[c];var h=s<3&&u[0]!==f&&u[s-1]!==f?[]:Cn(u,f);return (s-=h.length)<r?xa(t,e,la,o.placeholder,a,u,h,a,a,r-s):We(this&&this!==Oe&&this instanceof o?i:t,this,u);};}(t,e,f):e!=_&&e!=(m|_)||o.length?la.apply(a,A):function(t,e,r,i){var a=e&m,o=ca(t);return function e(){for(var s=-1,u=arguments.length,c=-1,f=i.length,h=n(f+u),l=this&&this!==Oe&&this instanceof e?o:t;++c<f;)h[c]=i[c];for(;u--;)h[c++]=arguments[++s];return We(l,a?r:this,h);};}(t,e,r,i);else var k=function(t,e,n){var r=e&m,i=ca(t);return function e(){return (this&&this!==Oe&&this instanceof e?i:t).apply(r?n:this,arguments);};}(t,e,r);return io((v?Ai:eo)(k,A),t,e);}function Sa(t,e,n,r){return t===a||ls(t,oe[n])&&!ce.call(r,n)?e:t;}function Pa(t,e,n,r,i,o){return As(t)&&As(e)&&(o.set(e,t),pi(t,e,a,Pa,o),o.delete(e)),t;}function Aa(t){return Is(t)?a:t;}function ka(t,e,n,r,i,o){var s=n&g,u=t.length,c=e.length;if(u!=c&&!(s&&c>u))return !1;var f=o.get(t);if(f&&o.get(e))return f==e;var h=-1,l=!0,d=n&v?new br():a;for(o.set(t,e),o.set(e,t);++h<u;){var p=t[h],m=e[h];if(r)var y=s?r(m,p,h,e,t,o):r(p,m,h,t,e,o);if(y!==a){if(y)continue;l=!1;break;}if(d){if(!rn(e,function(t,e){if(!xn(d,e)&&(p===t||i(p,t,n,r,o)))return d.push(e);})){l=!1;break;}}else if(p!==m&&!i(p,m,n,r,o)){l=!1;break;}}return o.delete(t),o.delete(e),l;}function Ca(t){return ro(Ka(t,a,mo),t+"");}function Ea(t){return Qr(t,ru,Ra);}function Ia(t){return Qr(t,iu,Fa);}var Na=nr?function(t){return nr.get(t);}:ju;function Ta(t){for(var e=t.name+"",n=rr[e],r=ce.call(rr,e)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==t)return i.name;}return e;}function Oa(t){return (ce.call(lr,"placeholder")?lr:t).placeholder;}function ja(){var t=lr.iteratee||Iu;return t=t===Iu?si:t,arguments.length?t(arguments[0],arguments[1]):t;}function Ba(t,e){var n=t.__data__;return function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t;}(e)?n["string"==typeof e?"string":"hash"]:n.map;}function La(t){for(var e=ru(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Qa(i)];}return e;}function Da(t,e){var n=function(t,e){return null==t?a:t[e];}(t,e);return oi(n)?n:a;}var Ra=Fn?function(t){return null==t?[]:(t=te(t),Qe(Fn(t),function(e){return Te.call(t,e);}));}:zu,Fa=Fn?function(t){for(var e=[];t;)tn(e,Ra(t)),t=Ce(t);return e;}:zu,Ya=$r;function za(t,e,n){for(var r=-1,i=(e=Wi(e,t)).length,a=!1;++r<i;){var o=uo(e[r]);if(!(a=null!=t&&n(t,o)))break;t=t[o];}return a||++r!=i?a:!!(i=null==t?0:t.length)&&Ps(i)&&Ga(o,i)&&(vs(t)||gs(t));}function qa(t){return "function"!=typeof t.constructor||Za(t)?{}:dr(Ce(t));}function Xa(t){return vs(t)||gs(t)||!!(Be&&t&&t[Be]);}function Ga(t,e){var n=typeof t;return !!(e=null==e?j:e)&&("number"==n||"symbol"!=n&&Vt.test(t))&&t>-1&&t%1==0&&t<e;}function Wa(t,e,n){if(!As(n))return !1;var r=typeof e;return !!("number"==r?ys(n)&&Ga(e,n.length):"string"==r&&e in n)&&ls(n[e],t);}function Ua(t,e){if(vs(t))return !1;var n=typeof t;return !("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!js(t))||It.test(t)||!Et.test(t)||null!=e&&t in te(e);}function Ha(t){var e=Ta(t),n=lr[e];if("function"!=typeof n||!(e in vr.prototype))return !1;if(t===n)return !0;var r=Na(n);return !!r&&t===r[0];}(Qn&&Ya(new Qn(new ArrayBuffer(1)))!=ct||$n&&Ya(new $n())!=Q||Kn&&"[object Promise]"!=Ya(Kn.resolve())||Jn&&Ya(new Jn())!=nt||tr&&Ya(new tr())!=ot)&&(Ya=function(t){var e=$r(t),n=e==J?t.constructor:a,r=n?co(n):"";if(r)switch(r){case ir:return ct;case ar:return Q;case or:return "[object Promise]";case sr:return nt;case ur:return ot;}return e;});var Va=se?Ms:qu;function Za(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||oe);}function Qa(t){return t==t&&!As(t);}function $a(t,e){return function(n){return null!=n&&n[t]===e&&(e!==a||t in te(n));};}function Ka(t,e,r){return e=Gn(e===a?t.length-1:e,0),function(){for(var i=arguments,a=-1,o=Gn(i.length-e,0),s=n(o);++a<o;)s[a]=i[e+a];a=-1;for(var u=n(e+1);++a<e;)u[a]=i[a];return u[e]=r(s),We(t,this,u);};}function Ja(t,e){return e.length<2?t:Zr(t,Ei(e,0,-1));}function to(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e];}var eo=ao(Ai),no=Ln||function(t,e){return Oe.setTimeout(t,e);},ro=ao(ki);function io(t,e,n){var r=e+"";return ro(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Dt,"{\n/* [wrapped with "+e+"] */\n");}(r,function(t,e){return He(Y,function(n){var r="_."+n[0];e&n[1]&&!$e(t,r)&&t.push(r);}),t.sort();}(function(t){var e=t.match(Rt);return e?e[1].split(Ft):[];}(r),n)));}function ao(t){var e=0,n=0;return function(){var r=Un(),i=I-(r-n);if(n=r,i>0){if(++e>=E)return arguments[0];}else e=0;return t.apply(a,arguments);};}function oo(t,e){var n=-1,r=t.length,i=r-1;for(e=e===a?r:e;++n<e;){var o=bi(n,i),s=t[o];t[o]=t[n],t[n]=s;}return t.length=e,t;}var so=function(t){var e=os(t,function(t){return n.size===f&&n.clear(),t;}),n=e.cache;return e;}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Nt,function(t,n,r,i){e.push(r?i.replace(zt,"$1"):n||t);}),e;});function uo(t){if("string"==typeof t||js(t))return t;var e=t+"";return "0"==e&&1/t==-O?"-0":e;}function co(t){if(null!=t){try{return ue.call(t);}catch(t){}try{return t+"";}catch(t){}}return "";}function fo(t){if(t instanceof vr)return t.clone();var e=new gr(t.__wrapped__,t.__chain__);return e.__actions__=ea(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e;}var ho=_i(function(t,e){return xs(t)?Dr(t,Xr(e,1,xs,!0)):[];}),lo=_i(function(t,e){var n=_o(e);return xs(n)&&(n=a),xs(t)?Dr(t,Xr(e,1,xs,!0),ja(n,2)):[];}),po=_i(function(t,e){var n=_o(e);return xs(n)&&(n=a),xs(t)?Dr(t,Xr(e,1,xs,!0),a,n):[];});function go(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=null==n?0:Ys(n);return i<0&&(i=Gn(r+i,0)),sn(t,ja(e,3),i);}function vo(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=r-1;return n!==a&&(i=Ys(n),i=n<0?Gn(r+i,0):Wn(i,r-1)),sn(t,ja(e,3),i,!0);}function mo(t){return null!=t&&t.length?Xr(t,1):[];}function yo(t){return t&&t.length?t[0]:a;}var xo=_i(function(t){var e=Je(t,Xi);return e.length&&e[0]===t[0]?ei(e):[];}),bo=_i(function(t){var e=_o(t),n=Je(t,Xi);return e===_o(n)?e=a:n.pop(),n.length&&n[0]===t[0]?ei(n,ja(e,2)):[];}),wo=_i(function(t){var e=_o(t),n=Je(t,Xi);return (e="function"==typeof e?e:a)&&n.pop(),n.length&&n[0]===t[0]?ei(n,a,e):[];});function _o(t){var e=null==t?0:t.length;return e?t[e-1]:a;}var Mo=_i(So);function So(t,e){return t&&t.length&&e&&e.length?yi(t,e):t;}var Po=Ca(function(t,e){var n=null==t?0:t.length,r=Tr(t,e);return xi(t,Je(e,function(t){return Ga(t,n)?+t:t;}).sort(Ki)),r;});function Ao(t){return null==t?t:Zn.call(t);}var ko=_i(function(t){return Li(Xr(t,1,xs,!0));}),Co=_i(function(t){var e=_o(t);return xs(e)&&(e=a),Li(Xr(t,1,xs,!0),ja(e,2));}),Eo=_i(function(t){var e=_o(t);return e="function"==typeof e?e:a,Li(Xr(t,1,xs,!0),a,e);});function Io(t){if(!t||!t.length)return [];var e=0;return t=Qe(t,function(t){if(xs(t))return e=Gn(t.length,e),!0;}),vn(e,function(e){return Je(t,ln(e));});}function No(t,e){if(!t||!t.length)return [];var n=Io(t);return null==e?n:Je(n,function(t){return We(e,a,t);});}var To=_i(function(t,e){return xs(t)?Dr(t,e):[];}),Oo=_i(function(t){return zi(Qe(t,xs));}),jo=_i(function(t){var e=_o(t);return xs(e)&&(e=a),zi(Qe(t,xs),ja(e,2));}),Bo=_i(function(t){var e=_o(t);return e="function"==typeof e?e:a,zi(Qe(t,xs),a,e);}),Lo=_i(Io);var Do=_i(function(t){var e=t.length,n=e>1?t[e-1]:a;return No(t,n="function"==typeof n?(t.pop(),n):a);});function Ro(t){var e=lr(t);return e.__chain__=!0,e;}function Fo(t,e){return e(t);}var Yo=Ca(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return Tr(e,t);};return !(e>1||this.__actions__.length)&&r instanceof vr&&Ga(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:Fo,args:[i],thisArg:a}),new gr(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(a),t;})):this.thru(i);});var zo=ra(function(t,e,n){ce.call(t,n)?++t[n]:Nr(t,n,1);});var qo=fa(go),Xo=fa(vo);function Go(t,e){return (vs(t)?He:Rr)(t,ja(e,3));}function Wo(t,e){return (vs(t)?Ve:Fr)(t,ja(e,3));}var Uo=ra(function(t,e,n){ce.call(t,n)?t[n].push(e):Nr(t,n,[e]);});var Ho=_i(function(t,e,r){var i=-1,a="function"==typeof e,o=ys(t)?n(t.length):[];return Rr(t,function(t){o[++i]=a?We(e,t,r):ni(t,e,r);}),o;}),Vo=ra(function(t,e,n){Nr(t,n,e);});function Zo(t,e){return (vs(t)?Je:hi)(t,ja(e,3));}var Qo=ra(function(t,e,n){t[n?0:1].push(e);},function(){return [[],[]];});var $o=_i(function(t,e){if(null==t)return [];var n=e.length;return n>1&&Wa(t,e[0],e[1])?e=[]:n>2&&Wa(e[0],e[1],e[2])&&(e=[e[0]]),vi(t,Xr(e,1),[]);}),Ko=Bn||function(){return Oe.Date.now();};function Jo(t,e,n){return e=n?a:e,e=t&&null==e?t.length:e,Ma(t,S,a,a,a,a,e);}function ts(t,e){var n;if("function"!=typeof e)throw new re(u);return t=Ys(t),function(){return --t>0&&(n=e.apply(this,arguments)),t<=1&&(e=a),n;};}var es=_i(function(t,e,n){var r=m;if(n.length){var i=Cn(n,Oa(es));r|=_;}return Ma(t,r,e,n,i);}),ns=_i(function(t,e,n){var r=m|y;if(n.length){var i=Cn(n,Oa(ns));r|=_;}return Ma(e,r,t,n,i);});function rs(t,e,n){var r,i,o,s,c,f,h=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new re(u);function g(e){var n=r,o=i;return r=i=a,h=e,s=t.apply(o,n);}function v(t){var n=t-f;return f===a||n>=e||n<0||d&&t-h>=o;}function m(){var t=Ko();if(v(t))return y(t);c=no(m,function(t){var n=e-(t-f);return d?Wn(n,o-(t-h)):n;}(t));}function y(t){return c=a,p&&r?g(t):(r=i=a,s);}function x(){var t=Ko(),n=v(t);if(r=arguments,i=this,f=t,n){if(c===a)return function(t){return h=t,c=no(m,e),l?g(t):s;}(f);if(d)return Vi(c),c=no(m,e),g(f);}return c===a&&(c=no(m,e)),s;}return e=qs(e)||0,As(n)&&(l=!!n.leading,o=(d="maxWait"in n)?Gn(qs(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),x.cancel=function(){c!==a&&Vi(c),h=0,r=f=i=c=a;},x.flush=function(){return c===a?s:y(Ko());},x;}var is=_i(function(t,e){return Lr(t,1,e);}),as=_i(function(t,e,n){return Lr(t,qs(e)||0,n);});function os(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new re(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o;};return n.cache=new(os.Cache||xr)(),n;}function ss(t){if("function"!=typeof t)throw new re(u);return function(){var e=arguments;switch(e.length){case 0:return !t.call(this);case 1:return !t.call(this,e[0]);case 2:return !t.call(this,e[0],e[1]);case 3:return !t.call(this,e[0],e[1],e[2]);}return !t.apply(this,e);};}os.Cache=xr;var us=Ui(function(t,e){var n=(e=1==e.length&&vs(e[0])?Je(e[0],mn(ja())):Je(Xr(e,1),mn(ja()))).length;return _i(function(r){for(var i=-1,a=Wn(r.length,n);++i<a;)r[i]=e[i].call(this,r[i]);return We(t,this,r);});}),cs=_i(function(t,e){var n=Cn(e,Oa(cs));return Ma(t,_,a,e,n);}),fs=_i(function(t,e){var n=Cn(e,Oa(fs));return Ma(t,M,a,e,n);}),hs=Ca(function(t,e){return Ma(t,P,a,a,a,e);});function ls(t,e){return t===e||t!=t&&e!=e;}var ds=ya(Kr),ps=ya(function(t,e){return t>=e;}),gs=ri(function(){return arguments;}())?ri:function(t){return ks(t)&&ce.call(t,"callee")&&!Te.call(t,"callee");},vs=n.isArray,ms=Fe?mn(Fe):function(t){return ks(t)&&$r(t)==ut;};function ys(t){return null!=t&&Ps(t.length)&&!Ms(t);}function xs(t){return ks(t)&&ys(t);}var bs=Yn||qu,ws=Ye?mn(Ye):function(t){return ks(t)&&$r(t)==W;};function _s(t){if(!ks(t))return !1;var e=$r(t);return e==H||e==U||"string"==typeof t.message&&"string"==typeof t.name&&!Is(t);}function Ms(t){if(!As(t))return !1;var e=$r(t);return e==V||e==Z||e==X||e==tt;}function Ss(t){return "number"==typeof t&&t==Ys(t);}function Ps(t){return "number"==typeof t&&t>-1&&t%1==0&&t<=j;}function As(t){var e=typeof t;return null!=t&&("object"==e||"function"==e);}function ks(t){return null!=t&&"object"==typeof t;}var Cs=ze?mn(ze):function(t){return ks(t)&&Ya(t)==Q;};function Es(t){return "number"==typeof t||ks(t)&&$r(t)==$;}function Is(t){if(!ks(t)||$r(t)!=J)return !1;var e=Ce(t);if(null===e)return !0;var n=ce.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&ue.call(n)==de;}var Ns=qe?mn(qe):function(t){return ks(t)&&$r(t)==et;};var Ts=Xe?mn(Xe):function(t){return ks(t)&&Ya(t)==nt;};function Os(t){return "string"==typeof t||!vs(t)&&ks(t)&&$r(t)==rt;}function js(t){return "symbol"==typeof t||ks(t)&&$r(t)==it;}var Bs=Ge?mn(Ge):function(t){return ks(t)&&Ps(t.length)&&!!Ae[$r(t)];};var Ls=ya(fi),Ds=ya(function(t,e){return t<=e;});function Rs(t){if(!t)return [];if(ys(t))return Os(t)?Tn(t):ea(t);if(De&&t[De])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n;}(t[De]());var e=Ya(t);return (e==Q?An:e==nt?En:lu)(t);}function Fs(t){return t?(t=qs(t))===O||t===-O?(t<0?-1:1)*B:t==t?t:0:0===t?t:0;}function Ys(t){var e=Fs(t),n=e%1;return e==e?n?e-n:e:0;}function zs(t){return t?Or(Ys(t),0,D):0;}function qs(t){if("number"==typeof t)return t;if(js(t))return L;if(As(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=As(e)?e+"":e;}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(jt,"");var n=Wt.test(t);return n||Ht.test(t)?Ie(t.slice(2),n?2:8):Gt.test(t)?L:+t;}function Xs(t){return na(t,iu(t));}function Gs(t){return null==t?"":Bi(t);}var Ws=ia(function(t,e){if(Za(e)||ys(e))na(e,ru(e),t);else for(var n in e)ce.call(e,n)&&kr(t,n,e[n]);}),Us=ia(function(t,e){na(e,iu(e),t);}),Hs=ia(function(t,e,n,r){na(e,iu(e),t,r);}),Vs=ia(function(t,e,n,r){na(e,ru(e),t,r);}),Zs=Ca(Tr);var Qs=_i(function(t,e){t=te(t);var n=-1,r=e.length,i=r>2?e[2]:a;for(i&&Wa(e[0],e[1],i)&&(r=1);++n<r;)for(var o=e[n],s=iu(o),u=-1,c=s.length;++u<c;){var f=s[u],h=t[f];(h===a||ls(h,oe[f])&&!ce.call(t,f))&&(t[f]=o[f]);}return t;}),$s=_i(function(t){return t.push(a,Pa),We(ou,a,t);});function Ks(t,e,n){var r=null==t?a:Zr(t,e);return r===a?n:r;}function Js(t,e){return null!=t&&za(t,e,ti);}var tu=da(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=le.call(e)),t[e]=n;},Au(Eu)),eu=da(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=le.call(e)),ce.call(t,e)?t[e].push(n):t[e]=[n];},ja),nu=_i(ni);function ru(t){return ys(t)?_r(t):ui(t);}function iu(t){return ys(t)?_r(t,!0):ci(t);}var au=ia(function(t,e,n){pi(t,e,n);}),ou=ia(function(t,e,n,r){pi(t,e,n,r);}),su=Ca(function(t,e){var n={};if(null==t)return n;var r=!1;e=Je(e,function(e){return e=Wi(e,t),r||(r=e.length>1),e;}),na(t,Ia(t),n),r&&(n=jr(n,l|d|p,Aa));for(var i=e.length;i--;)Di(n,e[i]);return n;});var uu=Ca(function(t,e){return null==t?{}:function(t,e){return mi(t,e,function(e,n){return Js(t,n);});}(t,e);});function cu(t,e){if(null==t)return {};var n=Je(Ia(t),function(t){return [t];});return e=ja(e),mi(t,n,function(t,n){return e(t,n[0]);});}var fu=_a(ru),hu=_a(iu);function lu(t){return null==t?[]:yn(t,ru(t));}var du=ua(function(t,e,n){return e=e.toLowerCase(),t+(n?pu(e):e);});function pu(t){return _u(Gs(t).toLowerCase());}function gu(t){return (t=Gs(t))&&t.replace(Zt,_n).replace(xe,"");}var vu=ua(function(t,e,n){return t+(n?"-":"")+e.toLowerCase();}),mu=ua(function(t,e,n){return t+(n?" ":"")+e.toLowerCase();}),yu=sa("toLowerCase");var xu=ua(function(t,e,n){return t+(n?"_":"")+e.toLowerCase();});var bu=ua(function(t,e,n){return t+(n?" ":"")+_u(e);});var wu=ua(function(t,e,n){return t+(n?" ":"")+e.toUpperCase();}),_u=sa("toUpperCase");function Mu(t,e,n){return t=Gs(t),(e=n?a:e)===a?function(t){return Me.test(t);}(t)?function(t){return t.match(we)||[];}(t):function(t){return t.match(Yt)||[];}(t):t.match(e)||[];}var Su=_i(function(t,e){try{return We(t,a,e);}catch(t){return _s(t)?t:new i(t);}}),Pu=Ca(function(t,e){return He(e,function(e){e=uo(e),Nr(t,e,es(t[e],t));}),t;});function Au(t){return function(){return t;};}var ku=ha(),Cu=ha(!0);function Eu(t){return t;}function Iu(t){return si("function"==typeof t?t:jr(t,l));}var Nu=_i(function(t,e){return function(n){return ni(n,t,e);};}),Tu=_i(function(t,e){return function(n){return ni(t,n,e);};});function Ou(t,e,n){var r=ru(e),i=Vr(e,r);null!=n||As(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Vr(e,ru(e)));var a=!(As(n)&&"chain"in n&&!n.chain),o=Ms(t);return He(i,function(n){var r=e[n];t[n]=r,o&&(t.prototype[n]=function(){var e=this.__chain__;if(a||e){var n=t(this.__wrapped__);return (n.__actions__=ea(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n;}return r.apply(t,tn([this.value()],arguments));});}),t;}function ju(){}var Bu=ga(Je),Lu=ga(Ze),Du=ga(rn);function Ru(t){return Ua(t)?ln(uo(t)):function(t){return function(e){return Zr(e,t);};}(t);}var Fu=ma(),Yu=ma(!0);function zu(){return [];}function qu(){return !1;}var Xu=pa(function(t,e){return t+e;},0),Gu=ba("ceil"),Wu=pa(function(t,e){return t/e;},1),Uu=ba("floor");var Hu=pa(function(t,e){return t*e;},1),Vu=ba("round"),Zu=pa(function(t,e){return t-e;},0);return lr.after=function(t,e){if("function"!=typeof e)throw new re(u);return t=Ys(t),function(){if(--t<1)return e.apply(this,arguments);};},lr.ary=Jo,lr.assign=Ws,lr.assignIn=Us,lr.assignInWith=Hs,lr.assignWith=Vs,lr.at=Zs,lr.before=ts,lr.bind=es,lr.bindAll=Pu,lr.bindKey=ns,lr.castArray=function(){if(!arguments.length)return [];var t=arguments[0];return vs(t)?t:[t];},lr.chain=Ro,lr.chunk=function(t,e,r){e=(r?Wa(t,e,r):e===a)?1:Gn(Ys(e),0);var i=null==t?0:t.length;if(!i||e<1)return [];for(var o=0,s=0,u=n(Dn(i/e));o<i;)u[s++]=Ei(t,o,o+=e);return u;},lr.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var a=t[e];a&&(i[r++]=a);}return i;},lr.concat=function(){var t=arguments.length;if(!t)return [];for(var e=n(t-1),r=arguments[0],i=t;i--;)e[i-1]=arguments[i];return tn(vs(r)?ea(r):[r],Xr(e,1));},lr.cond=function(t){var e=null==t?0:t.length,n=ja();return t=e?Je(t,function(t){if("function"!=typeof t[1])throw new re(u);return [n(t[0]),t[1]];}):[],_i(function(n){for(var r=-1;++r<e;){var i=t[r];if(We(i[0],this,n))return We(i[1],this,n);}});},lr.conforms=function(t){return function(t){var e=ru(t);return function(n){return Br(n,t,e);};}(jr(t,l));},lr.constant=Au,lr.countBy=zo,lr.create=function(t,e){var n=dr(t);return null==e?n:Ir(n,e);},lr.curry=function t(e,n,r){var i=Ma(e,b,a,a,a,a,a,n=r?a:n);return i.placeholder=t.placeholder,i;},lr.curryRight=function t(e,n,r){var i=Ma(e,w,a,a,a,a,a,n=r?a:n);return i.placeholder=t.placeholder,i;},lr.debounce=rs,lr.defaults=Qs,lr.defaultsDeep=$s,lr.defer=is,lr.delay=as,lr.difference=ho,lr.differenceBy=lo,lr.differenceWith=po,lr.drop=function(t,e,n){var r=null==t?0:t.length;return r?Ei(t,(e=n||e===a?1:Ys(e))<0?0:e,r):[];},lr.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?Ei(t,0,(e=r-(e=n||e===a?1:Ys(e)))<0?0:e):[];},lr.dropRightWhile=function(t,e){return t&&t.length?Fi(t,ja(e,3),!0,!0):[];},lr.dropWhile=function(t,e){return t&&t.length?Fi(t,ja(e,3),!0):[];},lr.fill=function(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&Wa(t,e,n)&&(n=0,r=i),function(t,e,n,r){var i=t.length;for((n=Ys(n))<0&&(n=-n>i?0:i+n),(r=r===a||r>i?i:Ys(r))<0&&(r+=i),r=n>r?0:zs(r);n<r;)t[n++]=e;return t;}(t,e,n,r)):[];},lr.filter=function(t,e){return (vs(t)?Qe:qr)(t,ja(e,3));},lr.flatMap=function(t,e){return Xr(Zo(t,e),1);},lr.flatMapDeep=function(t,e){return Xr(Zo(t,e),O);},lr.flatMapDepth=function(t,e,n){return n=n===a?1:Ys(n),Xr(Zo(t,e),n);},lr.flatten=mo,lr.flattenDeep=function(t){return null!=t&&t.length?Xr(t,O):[];},lr.flattenDepth=function(t,e){return null!=t&&t.length?Xr(t,e=e===a?1:Ys(e)):[];},lr.flip=function(t){return Ma(t,A);},lr.flow=ku,lr.flowRight=Cu,lr.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1];}return r;},lr.functions=function(t){return null==t?[]:Vr(t,ru(t));},lr.functionsIn=function(t){return null==t?[]:Vr(t,iu(t));},lr.groupBy=Uo,lr.initial=function(t){return null!=t&&t.length?Ei(t,0,-1):[];},lr.intersection=xo,lr.intersectionBy=bo,lr.intersectionWith=wo,lr.invert=tu,lr.invertBy=eu,lr.invokeMap=Ho,lr.iteratee=Iu,lr.keyBy=Vo,lr.keys=ru,lr.keysIn=iu,lr.map=Zo,lr.mapKeys=function(t,e){var n={};return e=ja(e,3),Ur(t,function(t,r,i){Nr(n,e(t,r,i),t);}),n;},lr.mapValues=function(t,e){var n={};return e=ja(e,3),Ur(t,function(t,r,i){Nr(n,r,e(t,r,i));}),n;},lr.matches=function(t){return li(jr(t,l));},lr.matchesProperty=function(t,e){return di(t,jr(e,l));},lr.memoize=os,lr.merge=au,lr.mergeWith=ou,lr.method=Nu,lr.methodOf=Tu,lr.mixin=Ou,lr.negate=ss,lr.nthArg=function(t){return t=Ys(t),_i(function(e){return gi(e,t);});},lr.omit=su,lr.omitBy=function(t,e){return cu(t,ss(ja(e)));},lr.once=function(t){return ts(2,t);},lr.orderBy=function(t,e,n,r){return null==t?[]:(vs(e)||(e=null==e?[]:[e]),vs(n=r?a:n)||(n=null==n?[]:[n]),vi(t,e,n));},lr.over=Bu,lr.overArgs=us,lr.overEvery=Lu,lr.overSome=Du,lr.partial=cs,lr.partialRight=fs,lr.partition=Qo,lr.pick=uu,lr.pickBy=cu,lr.property=Ru,lr.propertyOf=function(t){return function(e){return null==t?a:Zr(t,e);};},lr.pull=Mo,lr.pullAll=So,lr.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?yi(t,e,ja(n,2)):t;},lr.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?yi(t,e,a,n):t;},lr.pullAt=Po,lr.range=Fu,lr.rangeRight=Yu,lr.rearg=hs,lr.reject=function(t,e){return (vs(t)?Qe:qr)(t,ss(ja(e,3)));},lr.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],a=t.length;for(e=ja(e,3);++r<a;){var o=t[r];e(o,r,t)&&(n.push(o),i.push(r));}return xi(t,i),n;},lr.rest=function(t,e){if("function"!=typeof t)throw new re(u);return _i(t,e=e===a?e:Ys(e));},lr.reverse=Ao,lr.sampleSize=function(t,e,n){return e=(n?Wa(t,e,n):e===a)?1:Ys(e),(vs(t)?Sr:Si)(t,e);},lr.set=function(t,e,n){return null==t?t:Pi(t,e,n);},lr.setWith=function(t,e,n,r){return r="function"==typeof r?r:a,null==t?t:Pi(t,e,n,r);},lr.shuffle=function(t){return (vs(t)?Pr:Ci)(t);},lr.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Wa(t,e,n)?(e=0,n=r):(e=null==e?0:Ys(e),n=n===a?r:Ys(n)),Ei(t,e,n)):[];},lr.sortBy=$o,lr.sortedUniq=function(t){return t&&t.length?Oi(t):[];},lr.sortedUniqBy=function(t,e){return t&&t.length?Oi(t,ja(e,2)):[];},lr.split=function(t,e,n){return n&&"number"!=typeof n&&Wa(t,e,n)&&(e=n=a),(n=n===a?D:n>>>0)?(t=Gs(t))&&("string"==typeof e||null!=e&&!Ns(e))&&!(e=Bi(e))&&Pn(t)?Hi(Tn(t),0,n):t.split(e,n):[];},lr.spread=function(t,e){if("function"!=typeof t)throw new re(u);return e=null==e?0:Gn(Ys(e),0),_i(function(n){var r=n[e],i=Hi(n,0,e);return r&&tn(i,r),We(t,this,i);});},lr.tail=function(t){var e=null==t?0:t.length;return e?Ei(t,1,e):[];},lr.take=function(t,e,n){return t&&t.length?Ei(t,0,(e=n||e===a?1:Ys(e))<0?0:e):[];},lr.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?Ei(t,(e=r-(e=n||e===a?1:Ys(e)))<0?0:e,r):[];},lr.takeRightWhile=function(t,e){return t&&t.length?Fi(t,ja(e,3),!1,!0):[];},lr.takeWhile=function(t,e){return t&&t.length?Fi(t,ja(e,3)):[];},lr.tap=function(t,e){return e(t),t;},lr.throttle=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new re(u);return As(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),rs(t,e,{leading:r,maxWait:e,trailing:i});},lr.thru=Fo,lr.toArray=Rs,lr.toPairs=fu,lr.toPairsIn=hu,lr.toPath=function(t){return vs(t)?Je(t,uo):js(t)?[t]:ea(so(Gs(t)));},lr.toPlainObject=Xs,lr.transform=function(t,e,n){var r=vs(t),i=r||bs(t)||Bs(t);if(e=ja(e,4),null==n){var a=t&&t.constructor;n=i?r?new a():[]:As(t)&&Ms(a)?dr(Ce(t)):{};}return (i?He:Ur)(t,function(t,r,i){return e(n,t,r,i);}),n;},lr.unary=function(t){return Jo(t,1);},lr.union=ko,lr.unionBy=Co,lr.unionWith=Eo,lr.uniq=function(t){return t&&t.length?Li(t):[];},lr.uniqBy=function(t,e){return t&&t.length?Li(t,ja(e,2)):[];},lr.uniqWith=function(t,e){return e="function"==typeof e?e:a,t&&t.length?Li(t,a,e):[];},lr.unset=function(t,e){return null==t||Di(t,e);},lr.unzip=Io,lr.unzipWith=No,lr.update=function(t,e,n){return null==t?t:Ri(t,e,Gi(n));},lr.updateWith=function(t,e,n,r){return r="function"==typeof r?r:a,null==t?t:Ri(t,e,Gi(n),r);},lr.values=lu,lr.valuesIn=function(t){return null==t?[]:yn(t,iu(t));},lr.without=To,lr.words=Mu,lr.wrap=function(t,e){return cs(Gi(e),t);},lr.xor=Oo,lr.xorBy=jo,lr.xorWith=Bo,lr.zip=Lo,lr.zipObject=function(t,e){return qi(t||[],e||[],kr);},lr.zipObjectDeep=function(t,e){return qi(t||[],e||[],Pi);},lr.zipWith=Do,lr.entries=fu,lr.entriesIn=hu,lr.extend=Us,lr.extendWith=Hs,Ou(lr,lr),lr.add=Xu,lr.attempt=Su,lr.camelCase=du,lr.capitalize=pu,lr.ceil=Gu,lr.clamp=function(t,e,n){return n===a&&(n=e,e=a),n!==a&&(n=(n=qs(n))==n?n:0),e!==a&&(e=(e=qs(e))==e?e:0),Or(qs(t),e,n);},lr.clone=function(t){return jr(t,p);},lr.cloneDeep=function(t){return jr(t,l|p);},lr.cloneDeepWith=function(t,e){return jr(t,l|p,e="function"==typeof e?e:a);},lr.cloneWith=function(t,e){return jr(t,p,e="function"==typeof e?e:a);},lr.conformsTo=function(t,e){return null==e||Br(t,e,ru(e));},lr.deburr=gu,lr.defaultTo=function(t,e){return null==t||t!=t?e:t;},lr.divide=Wu,lr.endsWith=function(t,e,n){t=Gs(t),e=Bi(e);var r=t.length,i=n=n===a?r:Or(Ys(n),0,r);return (n-=e.length)>=0&&t.slice(n,i)==e;},lr.eq=ls,lr.escape=function(t){return (t=Gs(t))&&Pt.test(t)?t.replace(Mt,Mn):t;},lr.escapeRegExp=function(t){return (t=Gs(t))&&Ot.test(t)?t.replace(Tt,"\\$&"):t;},lr.every=function(t,e,n){var r=vs(t)?Ze:Yr;return n&&Wa(t,e,n)&&(e=a),r(t,ja(e,3));},lr.find=qo,lr.findIndex=go,lr.findKey=function(t,e){return on(t,ja(e,3),Ur);},lr.findLast=Xo,lr.findLastIndex=vo,lr.findLastKey=function(t,e){return on(t,ja(e,3),Hr);},lr.floor=Uu,lr.forEach=Go,lr.forEachRight=Wo,lr.forIn=function(t,e){return null==t?t:Gr(t,ja(e,3),iu);},lr.forInRight=function(t,e){return null==t?t:Wr(t,ja(e,3),iu);},lr.forOwn=function(t,e){return t&&Ur(t,ja(e,3));},lr.forOwnRight=function(t,e){return t&&Hr(t,ja(e,3));},lr.get=Ks,lr.gt=ds,lr.gte=ps,lr.has=function(t,e){return null!=t&&za(t,e,Jr);},lr.hasIn=Js,lr.head=yo,lr.identity=Eu,lr.includes=function(t,e,n,r){t=ys(t)?t:lu(t),n=n&&!r?Ys(n):0;var i=t.length;return n<0&&(n=Gn(i+n,0)),Os(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&un(t,e,n)>-1;},lr.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=null==n?0:Ys(n);return i<0&&(i=Gn(r+i,0)),un(t,e,i);},lr.inRange=function(t,e,n){return e=Fs(e),n===a?(n=e,e=0):n=Fs(n),function(t,e,n){return t>=Wn(e,n)&&t<Gn(e,n);}(t=qs(t),e,n);},lr.invoke=nu,lr.isArguments=gs,lr.isArray=vs,lr.isArrayBuffer=ms,lr.isArrayLike=ys,lr.isArrayLikeObject=xs,lr.isBoolean=function(t){return !0===t||!1===t||ks(t)&&$r(t)==G;},lr.isBuffer=bs,lr.isDate=ws,lr.isElement=function(t){return ks(t)&&1===t.nodeType&&!Is(t);},lr.isEmpty=function(t){if(null==t)return !0;if(ys(t)&&(vs(t)||"string"==typeof t||"function"==typeof t.splice||bs(t)||Bs(t)||gs(t)))return !t.length;var e=Ya(t);if(e==Q||e==nt)return !t.size;if(Za(t))return !ui(t).length;for(var n in t)if(ce.call(t,n))return !1;return !0;},lr.isEqual=function(t,e){return ii(t,e);},lr.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:a)?n(t,e):a;return r===a?ii(t,e,a,n):!!r;},lr.isError=_s,lr.isFinite=function(t){return "number"==typeof t&&zn(t);},lr.isFunction=Ms,lr.isInteger=Ss,lr.isLength=Ps,lr.isMap=Cs,lr.isMatch=function(t,e){return t===e||ai(t,e,La(e));},lr.isMatchWith=function(t,e,n){return n="function"==typeof n?n:a,ai(t,e,La(e),n);},lr.isNaN=function(t){return Es(t)&&t!=+t;},lr.isNative=function(t){if(Va(t))throw new i(s);return oi(t);},lr.isNil=function(t){return null==t;},lr.isNull=function(t){return null===t;},lr.isNumber=Es,lr.isObject=As,lr.isObjectLike=ks,lr.isPlainObject=Is,lr.isRegExp=Ns,lr.isSafeInteger=function(t){return Ss(t)&&t>=-j&&t<=j;},lr.isSet=Ts,lr.isString=Os,lr.isSymbol=js,lr.isTypedArray=Bs,lr.isUndefined=function(t){return t===a;},lr.isWeakMap=function(t){return ks(t)&&Ya(t)==ot;},lr.isWeakSet=function(t){return ks(t)&&$r(t)==st;},lr.join=function(t,e){return null==t?"":qn.call(t,e);},lr.kebabCase=vu,lr.last=_o,lr.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=r;return n!==a&&(i=(i=Ys(n))<0?Gn(r+i,0):Wn(i,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r;}(t,e,i):sn(t,fn,i,!0);},lr.lowerCase=mu,lr.lowerFirst=yu,lr.lt=Ls,lr.lte=Ds,lr.max=function(t){return t&&t.length?zr(t,Eu,Kr):a;},lr.maxBy=function(t,e){return t&&t.length?zr(t,ja(e,2),Kr):a;},lr.mean=function(t){return hn(t,Eu);},lr.meanBy=function(t,e){return hn(t,ja(e,2));},lr.min=function(t){return t&&t.length?zr(t,Eu,fi):a;},lr.minBy=function(t,e){return t&&t.length?zr(t,ja(e,2),fi):a;},lr.stubArray=zu,lr.stubFalse=qu,lr.stubObject=function(){return {};},lr.stubString=function(){return "";},lr.stubTrue=function(){return !0;},lr.multiply=Hu,lr.nth=function(t,e){return t&&t.length?gi(t,Ys(e)):a;},lr.noConflict=function(){return Oe._===this&&(Oe._=pe),this;},lr.noop=ju,lr.now=Ko,lr.pad=function(t,e,n){t=Gs(t);var r=(e=Ys(e))?Nn(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return va(Rn(i),n)+t+va(Dn(i),n);},lr.padEnd=function(t,e,n){t=Gs(t);var r=(e=Ys(e))?Nn(t):0;return e&&r<e?t+va(e-r,n):t;},lr.padStart=function(t,e,n){t=Gs(t);var r=(e=Ys(e))?Nn(t):0;return e&&r<e?va(e-r,n)+t:t;},lr.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Hn(Gs(t).replace(Bt,""),e||0);},lr.random=function(t,e,n){if(n&&"boolean"!=typeof n&&Wa(t,e,n)&&(e=n=a),n===a&&("boolean"==typeof e?(n=e,e=a):"boolean"==typeof t&&(n=t,t=a)),t===a&&e===a?(t=0,e=1):(t=Fs(t),e===a?(e=t,t=0):e=Fs(e)),t>e){var r=t;t=e,e=r;}if(n||t%1||e%1){var i=Vn();return Wn(t+i*(e-t+Ee("1e-"+((i+"").length-1))),e);}return bi(t,e);},lr.reduce=function(t,e,n){var r=vs(t)?en:pn,i=arguments.length<3;return r(t,ja(e,4),n,i,Rr);},lr.reduceRight=function(t,e,n){var r=vs(t)?nn:pn,i=arguments.length<3;return r(t,ja(e,4),n,i,Fr);},lr.repeat=function(t,e,n){return e=(n?Wa(t,e,n):e===a)?1:Ys(e),wi(Gs(t),e);},lr.replace=function(){var t=arguments,e=Gs(t[0]);return t.length<3?e:e.replace(t[1],t[2]);},lr.result=function(t,e,n){var r=-1,i=(e=Wi(e,t)).length;for(i||(i=1,t=a);++r<i;){var o=null==t?a:t[uo(e[r])];o===a&&(r=i,o=n),t=Ms(o)?o.call(t):o;}return t;},lr.round=Vu,lr.runInContext=t,lr.sample=function(t){return (vs(t)?Mr:Mi)(t);},lr.size=function(t){if(null==t)return 0;if(ys(t))return Os(t)?Nn(t):t.length;var e=Ya(t);return e==Q||e==nt?t.size:ui(t).length;},lr.snakeCase=xu,lr.some=function(t,e,n){var r=vs(t)?rn:Ii;return n&&Wa(t,e,n)&&(e=a),r(t,ja(e,3));},lr.sortedIndex=function(t,e){return Ni(t,e);},lr.sortedIndexBy=function(t,e,n){return Ti(t,e,ja(n,2));},lr.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=Ni(t,e);if(r<n&&ls(t[r],e))return r;}return -1;},lr.sortedLastIndex=function(t,e){return Ni(t,e,!0);},lr.sortedLastIndexBy=function(t,e,n){return Ti(t,e,ja(n,2),!0);},lr.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=Ni(t,e,!0)-1;if(ls(t[n],e))return n;}return -1;},lr.startCase=bu,lr.startsWith=function(t,e,n){return t=Gs(t),n=null==n?0:Or(Ys(n),0,t.length),e=Bi(e),t.slice(n,n+e.length)==e;},lr.subtract=Zu,lr.sum=function(t){return t&&t.length?gn(t,Eu):0;},lr.sumBy=function(t,e){return t&&t.length?gn(t,ja(e,2)):0;},lr.template=function(t,e,n){var r=lr.templateSettings;n&&Wa(t,e,n)&&(e=a),t=Gs(t),e=Hs({},e,r,Sa);var i,o,s=Hs({},e.imports,r.imports,Sa),u=ru(s),c=yn(s,u),f=0,h=e.interpolate||Qt,l="__p += '",d=ee((e.escape||Qt).source+"|"+h.source+"|"+(h===Ct?qt:Qt).source+"|"+(e.evaluate||Qt).source+"|$","g"),p="//# sourceURL="+(ce.call(e,"sourceURL")?(e.sourceURL+"").replace(/[\r\n]/g," "):"lodash.templateSources["+ ++Pe+"]")+"\n";t.replace(d,function(e,n,r,a,s,u){return r||(r=a),l+=t.slice(f,u).replace($t,Sn),n&&(i=!0,l+="' +\n__e("+n+") +\n'"),s&&(o=!0,l+="';\n"+s+";\n__p += '"),r&&(l+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=u+e.length,e;}),l+="';\n";var g=ce.call(e,"variable")&&e.variable;g||(l="with (obj) {\n"+l+"\n}\n"),l=(o?l.replace(xt,""):l).replace(bt,"$1").replace(wt,"$1;"),l="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}";var v=Su(function(){return Kt(u,p+"return "+l).apply(a,c);});if(v.source=l,_s(v))throw v;return v;},lr.times=function(t,e){if((t=Ys(t))<1||t>j)return [];var n=D,r=Wn(t,D);e=ja(e),t-=D;for(var i=vn(r,e);++n<t;)e(n);return i;},lr.toFinite=Fs,lr.toInteger=Ys,lr.toLength=zs,lr.toLower=function(t){return Gs(t).toLowerCase();},lr.toNumber=qs,lr.toSafeInteger=function(t){return t?Or(Ys(t),-j,j):0===t?t:0;},lr.toString=Gs,lr.toUpper=function(t){return Gs(t).toUpperCase();},lr.trim=function(t,e,n){if((t=Gs(t))&&(n||e===a))return t.replace(jt,"");if(!t||!(e=Bi(e)))return t;var r=Tn(t),i=Tn(e);return Hi(r,bn(r,i),wn(r,i)+1).join("");},lr.trimEnd=function(t,e,n){if((t=Gs(t))&&(n||e===a))return t.replace(Lt,"");if(!t||!(e=Bi(e)))return t;var r=Tn(t);return Hi(r,0,wn(r,Tn(e))+1).join("");},lr.trimStart=function(t,e,n){if((t=Gs(t))&&(n||e===a))return t.replace(Bt,"");if(!t||!(e=Bi(e)))return t;var r=Tn(t);return Hi(r,bn(r,Tn(e))).join("");},lr.truncate=function(t,e){var n=k,r=C;if(As(e)){var i="separator"in e?e.separator:i;n="length"in e?Ys(e.length):n,r="omission"in e?Bi(e.omission):r;}var o=(t=Gs(t)).length;if(Pn(t)){var s=Tn(t);o=s.length;}if(n>=o)return t;var u=n-Nn(r);if(u<1)return r;var c=s?Hi(s,0,u).join(""):t.slice(0,u);if(i===a)return c+r;if(s&&(u+=c.length-u),Ns(i)){if(t.slice(u).search(i)){var f,h=c;for(i.global||(i=ee(i.source,Gs(Xt.exec(i))+"g")),i.lastIndex=0;f=i.exec(h);)var l=f.index;c=c.slice(0,l===a?u:l);}}else if(t.indexOf(Bi(i),u)!=u){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d));}return c+r;},lr.unescape=function(t){return (t=Gs(t))&&St.test(t)?t.replace(_t,On):t;},lr.uniqueId=function(t){var e=++fe;return Gs(t)+e;},lr.upperCase=wu,lr.upperFirst=_u,lr.each=Go,lr.eachRight=Wo,lr.first=yo,Ou(lr,function(){var t={};return Ur(lr,function(e,n){ce.call(lr.prototype,n)||(t[n]=e);}),t;}(),{chain:!1}),lr.VERSION="4.17.15",He(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){lr[t].placeholder=lr;}),He(["drop","take"],function(t,e){vr.prototype[t]=function(n){n=n===a?1:Gn(Ys(n),0);var r=this.__filtered__&&!e?new vr(this):this.clone();return r.__filtered__?r.__takeCount__=Wn(n,r.__takeCount__):r.__views__.push({size:Wn(n,D),type:t+(r.__dir__<0?"Right":"")}),r;},vr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse();};}),He(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==N||3==n;vr.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ja(t,3),type:n}),e.__filtered__=e.__filtered__||r,e;};}),He(["head","last"],function(t,e){var n="take"+(e?"Right":"");vr.prototype[t]=function(){return this[n](1).value()[0];};}),He(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");vr.prototype[t]=function(){return this.__filtered__?new vr(this):this[n](1);};}),vr.prototype.compact=function(){return this.filter(Eu);},vr.prototype.find=function(t){return this.filter(t).head();},vr.prototype.findLast=function(t){return this.reverse().find(t);},vr.prototype.invokeMap=_i(function(t,e){return "function"==typeof t?new vr(this):this.map(function(n){return ni(n,t,e);});}),vr.prototype.reject=function(t){return this.filter(ss(ja(t)));},vr.prototype.slice=function(t,e){t=Ys(t);var n=this;return n.__filtered__&&(t>0||e<0)?new vr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==a&&(n=(e=Ys(e))<0?n.dropRight(-e):n.take(e-t)),n);},vr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse();},vr.prototype.toArray=function(){return this.take(D);},Ur(vr.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=lr[r?"take"+("last"==e?"Right":""):e],o=r||/^find/.test(e);i&&(lr.prototype[e]=function(){var e=this.__wrapped__,s=r?[1]:arguments,u=e instanceof vr,c=s[0],f=u||vs(e),h=function(t){var e=i.apply(lr,tn([t],s));return r&&l?e[0]:e;};f&&n&&"function"==typeof c&&1!=c.length&&(u=f=!1);var l=this.__chain__,d=!!this.__actions__.length,p=o&&!l,g=u&&!d;if(!o&&f){e=g?e:new vr(this);var v=t.apply(e,s);return v.__actions__.push({func:Fo,args:[h],thisArg:a}),new gr(v,l);}return p&&g?t.apply(this,s):(v=this.thru(h),p?r?v.value()[0]:v.value():v);});}),He(["pop","push","shift","sort","splice","unshift"],function(t){var e=ie[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);lr.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(vs(i)?i:[],t);}return this[n](function(n){return e.apply(vs(n)?n:[],t);});};}),Ur(vr.prototype,function(t,e){var n=lr[e];if(n){var r=n.name+"";ce.call(rr,r)||(rr[r]=[]),rr[r].push({name:e,func:n});}}),rr[la(a,y).name]=[{name:"wrapper",func:a}],vr.prototype.clone=function(){var t=new vr(this.__wrapped__);return t.__actions__=ea(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ea(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ea(this.__views__),t;},vr.prototype.reverse=function(){if(this.__filtered__){var t=new vr(this);t.__dir__=-1,t.__filtered__=!0;}else(t=this.clone()).__dir__*=-1;return t;},vr.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=vs(t),r=e<0,i=n?t.length:0,a=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":t+=o;break;case"dropRight":e-=o;break;case"take":e=Wn(e,t+o);break;case"takeRight":t=Gn(t,e-o);}}return {start:t,end:e};}(0,i,this.__views__),o=a.start,s=a.end,u=s-o,c=r?s:o-1,f=this.__iteratees__,h=f.length,l=0,d=Wn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Yi(t,this.__actions__);var p=[];t:for(;u--&&l<d;){for(var g=-1,v=t[c+=e];++g<h;){var m=f[g],y=m.iteratee,x=m.type,b=y(v);if(x==T)v=b;else if(!b){if(x==N)continue t;break t;}}p[l++]=v;}return p;},lr.prototype.at=Yo,lr.prototype.chain=function(){return Ro(this);},lr.prototype.commit=function(){return new gr(this.value(),this.__chain__);},lr.prototype.next=function(){this.__values__===a&&(this.__values__=Rs(this.value()));var t=this.__index__>=this.__values__.length;return {done:t,value:t?a:this.__values__[this.__index__++]};},lr.prototype.plant=function(t){for(var e,n=this;n instanceof pr;){var r=fo(n);r.__index__=0,r.__values__=a,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__;}return i.__wrapped__=t,e;},lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof vr){var e=t;return this.__actions__.length&&(e=new vr(this)),(e=e.reverse()).__actions__.push({func:Fo,args:[Ao],thisArg:a}),new gr(e,this.__chain__);}return this.thru(Ao);},lr.prototype.toJSON=lr.prototype.valueOf=lr.prototype.value=function(){return Yi(this.__wrapped__,this.__actions__);},lr.prototype.first=lr.prototype.head,De&&(lr.prototype[De]=function(){return this;}),lr;}();Oe._=jn,(i=function(){return jn;}.call(e,n,e,r))===a||(r.exports=i);}).call(this);}).call(this,n(98),n(69)(t));},function(t,e,n){var r=n(108),i="\t\n\v\f\r   ᠎             　\u2028\u2029",a=new RegExp("([a-z])["+i+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+i+"]*,?["+i+"]*)+)","ig"),o=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+i+"]*,?["+i+"]*","ig"),s=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(a,function(t,r,i){var a=[],s=r.toLowerCase();if(i.replace(o,function(t,e){e&&a.push(+e);}),"m"===s&&a.length>2&&(n.push([r].concat(a.splice(0,2))),s="l",r="m"===r?"l":"L"),"o"===s&&1===a.length&&n.push([r,a[0]]),"r"===s)n.push([r].concat(a));else for(;a.length>=e[s]&&(n.push([r].concat(a.splice(0,e[s]))),e[s]););}),n;},u=function(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?a[3]={x:+t[0],y:+t[1]}:i-2===r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y]);}return n;},c=function(t,e,n,r,i){var a=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var o=Math.PI/180,s=t+n*Math.cos(-r*o),u=t+n*Math.cos(-i*o);a=[["M",s,e+n*Math.sin(-r*o)],["A",n,n,0,+(i-r>180),0,u,e+n*Math.sin(-i*o)]];}else a=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return a;},f=function(t){if(!(t=s(t))||!t.length)return [["M",0,0]];var e,n,r=[],i=0,a=0,o=0,f=0,h=0;"M"===t[0][0]&&(o=i=+t[0][1],f=a=+t[0][2],h++,r[0]=["M",i,a]);for(var l,d,p=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=h,v=t.length;g<v;g++){if(r.push(l=[]),(e=(d=t[g])[0])!==e.toUpperCase())switch(l[0]=e.toUpperCase(),l[0]){case"A":l[1]=d[1],l[2]=d[2],l[3]=d[3],l[4]=d[4],l[5]=d[5],l[6]=+d[6]+i,l[7]=+d[7]+a;break;case"V":l[1]=+d[1]+a;break;case"H":l[1]=+d[1]+i;break;case"R":for(var m=2,y=(n=[i,a].concat(d.slice(1))).length;m<y;m++)n[m]=+n[m]+i,n[++m]=+n[m]+a;r.pop(),r=r.concat(u(n,p));break;case"O":r.pop(),(n=c(i,a,d[1],d[2])).push(n[0]),r=r.concat(n);break;case"U":r.pop(),r=r.concat(c(i,a,d[1],d[2],d[3])),l=["U"].concat(r[r.length-1].slice(-2));break;case"M":o=+d[1]+i,f=+d[2]+a;break;default:for(var x=1,b=d.length;x<b;x++)l[x]=+d[x]+(x%2?i:a);}else if("R"===e)n=[i,a].concat(d.slice(1)),r.pop(),r=r.concat(u(n,p)),l=["R"].concat(d.slice(-2));else if("O"===e)r.pop(),(n=c(i,a,d[1],d[2])).push(n[0]),r=r.concat(n);else if("U"===e)r.pop(),r=r.concat(c(i,a,d[1],d[2],d[3])),l=["U"].concat(r[r.length-1].slice(-2));else for(var w=0,_=d.length;w<_;w++)l[w]=d[w];if("O"!==(e=e.toUpperCase()))switch(l[0]){case"Z":i=+o,a=+f;break;case"H":i=l[1];break;case"V":a=l[1];break;case"M":o=l[l.length-2],f=l[l.length-1];break;default:i=l[l.length-2],a=l[l.length-1];}}return r;},h=function(t,e,n,r){return [t,e,n,r,n,r];},l=function(t,e,n,r,i,a){return [1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*a+2/3*r,i,a];},d=function(t,e){var n,r=f(t),i=e&&f(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s=[],u=[],c="",d="",p=function(t,e,n){var r,i;if(!t)return ["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,a,o,s,u,c,f){r===i&&(r+=1);var h,l,d,p,g,v=120*Math.PI/180,m=Math.PI/180*(+a||0),y=[],x=function(t,e,n){return {x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)};};if(f)l=f[0],d=f[1],p=f[2],g=f[3];else{e=(h=x(e,n,-m)).x,n=h.y,u=(h=x(u,c,-m)).x,c=h.y,e===u&&n===c&&(u+=1,c+=1);var b=(e-u)/2,w=(n-c)/2,_=b*b/(r*r)+w*w/(i*i);_>1&&(r*=_=Math.sqrt(_),i*=_);var M=r*r,S=i*i,P=(o===s?-1:1)*Math.sqrt(Math.abs((M*S-M*w*w-S*b*b)/(M*w*w+S*b*b)));p=P*r*w/i+(e+u)/2,g=P*-i*b/r+(n+c)/2,l=Math.asin(((n-g)/i).toFixed(9)),d=Math.asin(((c-g)/i).toFixed(9)),l=e<p?Math.PI-l:l,d=u<p?Math.PI-d:d,l<0&&(l=2*Math.PI+l),d<0&&(d=2*Math.PI+d),s&&l>d&&(l-=2*Math.PI),!s&&d>l&&(d-=2*Math.PI);}var A=d-l;if(Math.abs(A)>v){var k=d,C=u,E=c;d=l+v*(s&&d>l?1:-1),y=t(u=p+r*Math.cos(d),c=g+i*Math.sin(d),r,i,a,0,s,C,E,[d,k,p,g]);}A=d-l;var I=Math.cos(l),N=Math.sin(l),T=Math.cos(d),O=Math.sin(d),j=Math.tan(A/4),B=4/3*r*j,L=4/3*i*j,D=[e,n],R=[e+B*N,n-L*I],F=[u+B*O,c-L*T],Y=[u,c];if(R[0]=2*D[0]-R[0],R[1]=2*D[1]-R[1],f)return [R,F,Y].concat(y);for(var z=[],q=0,X=(y=[R,F,Y].concat(y).join().split(",")).length;q<X;q++)z[q]=q%2?x(y[q-1],y[q],m).y:x(y[q],y[q+1],m).x;return z;}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(l(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(l(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(h(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(h(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(h(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(h(e.x,e.y,e.X,e.Y));}return t;},g=function(t,e){if(t[e].length>7){t[e].shift();for(var a=t[e];a.length;)s[e]="A",i&&(u[e]="A"),t.splice(e++,0,["C"].concat(a.splice(0,6)));t.splice(e,1),n=Math.max(r.length,i&&i.length||0);}},v=function(t,e,a,o,s){t&&e&&"M"===t[s][0]&&"M"!==e[s][0]&&(e.splice(s,0,["M",o.x,o.y]),a.bx=0,a.by=0,a.x=t[s][1],a.y=t[s][2],n=Math.max(r.length,i&&i.length||0));};n=Math.max(r.length,i&&i.length||0);for(var m=0;m<n;m++){r[m]&&(c=r[m][0]),"C"!==c&&(s[m]=c,m&&(d=s[m-1])),r[m]=p(r[m],a,d),"A"!==s[m]&&"C"===c&&(s[m]="C"),g(r,m),i&&(i[m]&&(c=i[m][0]),"C"!==c&&(u[m]=c,m&&(d=u[m-1])),i[m]=p(i[m],o,d),"A"!==u[m]&&"C"===c&&(u[m]="C"),g(i,m)),v(r,i,a,o,m),v(i,r,o,a,m);var y=r[m],x=i&&i[m],b=y.length,w=i&&x.length;a.x=y[b-2],a.y=y[b-1],a.bx=parseFloat(y[b-4])||a.x,a.by=parseFloat(y[b-3])||a.y,o.bx=i&&(parseFloat(x[w-4])||o.x),o.by=i&&(parseFloat(x[w-3])||o.y),o.x=i&&x[w-2],o.y=i&&x[w-1];}return i?[r,i]:r;},p=/,?([a-z]),?/gi,g=function(t){return t.join(",").replace(p,"$1");},v=function(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;},m=function(t,e,n,r,i,a,o,s,u){null===u&&(u=1);for(var c=(u=u>1?1:u<0?0:u)/2,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],h=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],l=0,d=0;d<12;d++){var p=c*f[d]+c,g=v(p,t,n,i,o),m=v(p,e,r,a,s),y=g*g+m*m;l+=h[d]*Math.sqrt(y);}return c*l;},y=function(t,e,n,r,i,a,o,s){if(!(Math.max(t,n)<Math.min(i,o)||Math.min(t,n)>Math.max(i,o)||Math.max(e,r)<Math.min(a,s)||Math.min(e,r)>Math.max(a,s))){var u=(t-n)*(a-s)-(e-r)*(i-o);if(u){var c=((t*r-e*n)*(i-o)-(t-n)*(i*s-a*o))/u,f=((t*r-e*n)*(a-s)-(e-r)*(i*s-a*o))/u,h=+c.toFixed(2),l=+f.toFixed(2);if(!(h<+Math.min(t,n).toFixed(2)||h>+Math.max(t,n).toFixed(2)||h<+Math.min(i,o).toFixed(2)||h>+Math.max(i,o).toFixed(2)||l<+Math.min(e,r).toFixed(2)||l>+Math.max(e,r).toFixed(2)||l<+Math.min(a,s).toFixed(2)||l>+Math.max(a,s).toFixed(2)))return {x:c,y:f};}}},x=function(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height;},b=function(t,e,n,r,i){if(i)return [["M",+t+ +i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]];var a=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return a.parsePathArray=g,a;},w=function(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:b(t,e,n,r),vb:[t,e,n,r].join(" ")};},_=function(t,e,n,i,a,o,s,u){r.isArray(t)||(t=[t,e,n,i,a,o,s,u]);var c=function(t,e,n,r,i,a,o,s){for(var u,c,f,h,l=[],d=[[],[]],p=0;p<2;++p)if(0===p?(c=6*t-12*n+6*i,u=-3*t+9*n-9*i+3*o,f=3*n-3*t):(c=6*e-12*r+6*a,u=-3*e+9*r-9*a+3*s,f=3*r-3*e),Math.abs(u)<1e-12){if(Math.abs(c)<1e-12)continue;(h=-f/c)>0&&h<1&&l.push(h);}else{var g=c*c-4*f*u,v=Math.sqrt(g);if(!(g<0)){var m=(-c+v)/(2*u);m>0&&m<1&&l.push(m);var y=(-c-v)/(2*u);y>0&&y<1&&l.push(y);}}for(var x,b=l.length,w=b;b--;)x=1-(h=l[b]),d[0][b]=x*x*x*t+3*x*x*h*n+3*x*h*h*i+h*h*h*o,d[1][b]=x*x*x*e+3*x*x*h*r+3*x*h*h*a+h*h*h*s;return d[0][w]=t,d[1][w]=e,d[0][w+1]=o,d[1][w+1]=s,d[0].length=d[1].length=w+2,{min:{x:Math.min.apply(0,d[0]),y:Math.min.apply(0,d[1])},max:{x:Math.max.apply(0,d[0]),y:Math.max.apply(0,d[1])}};}.apply(null,t);return w(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y);},M=function(t,e,n,r,i,a,o,s,u){var c=1-u,f=Math.pow(c,3),h=Math.pow(c,2),l=u*u,d=l*u,p=t+2*u*(n-t)+l*(i-2*n+t),g=e+2*u*(r-e)+l*(a-2*r+e),v=n+2*u*(i-n)+l*(o-2*i+n),m=r+2*u*(a-r)+l*(s-2*a+r);return {x:f*t+3*h*u*n+3*c*u*u*i+d*o,y:f*e+3*h*u*r+3*c*u*u*a+d*s,m:{x:p,y:g},n:{x:v,y:m},start:{x:c*t+u*n,y:c*e+u*r},end:{x:c*i+u*o,y:c*a+u*s},alpha:90-180*Math.atan2(p-v,g-m)/Math.PI};},S=function(t,e,n){if(!function(t,e){return t=w(t),e=w(e),x(e,t.x,t.y)||x(e,t.x2,t.y)||x(e,t.x,t.y2)||x(e,t.x2,t.y2)||x(t,e.x,e.y)||x(t,e.x2,e.y)||x(t,e.x,e.y2)||x(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y);}(_(t),_(e)))return n?0:[];for(var r=~~(m.apply(0,t)/8),i=~~(m.apply(0,e)/8),a=[],o=[],s={},u=n?0:[],c=0;c<r+1;c++){var f=M.apply(0,t.concat(c/r));a.push({x:f.x,y:f.y,t:c/r});}for(var h=0;h<i+1;h++){var l=M.apply(0,e.concat(h/i));o.push({x:l.x,y:l.y,t:h/i});}for(var d=0;d<r;d++)for(var p=0;p<i;p++){var g=a[d],v=a[d+1],b=o[p],S=o[p+1],P=Math.abs(v.x-g.x)<.001?"y":"x",A=Math.abs(S.x-b.x)<.001?"y":"x",k=y(g.x,g.y,v.x,v.y,b.x,b.y,S.x,S.y);if(k){if(s[k.x.toFixed(4)]===k.y.toFixed(4))continue;s[k.x.toFixed(4)]=k.y.toFixed(4);var C=g.t+Math.abs((k[P]-g[P])/(v[P]-g[P]))*(v.t-g.t),E=b.t+Math.abs((k[A]-b[A])/(S[A]-b[A]))*(S.t-b.t);C>=0&&C<=1&&E>=0&&E<=1&&(n?u++:u.push({x:k.x,y:k.y,t1:C,t2:E}));}}return u;};function P(t,e){var n=[],r=[];return t.length&&function t(e,i){if(1===e.length)n.push(e[0]),r.push(e[0]);else{for(var a=[],o=0;o<e.length-1;o++)0===o&&n.push(e[0]),o===e.length-2&&r.push(e[o+1]),a[o]=[(1-i)*e[o][0]+i*e[o+1][0],(1-i)*e[o][1]+i*e[o+1][1]];t(a,i);}}(t,e),{left:n,right:r.reverse()};}var A=function(t,e,n){if(1===n)return [[].concat(t)];var r=[];if("L"===e[0]||"C"===e[0]||"Q"===e[0])r=r.concat(function(t,e,n){var r=[[t[1],t[2]]];n=n||2;var i=[];"A"===e[0]?(r.push(e[6]),r.push(e[7])):"C"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]]),r.push([e[5],e[6]])):"S"===e[0]||"Q"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]])):r.push([e[1],e[2]]);for(var a=r,o=1/n,s=0;s<n-1;s++){var u=P(a,o/(1-o*s));i.push(u.left),a=u.right;}return i.push(a),i.map(function(t){var e=[];return 4===t.length&&(e.push("C"),e=e.concat(t[2])),t.length>=3&&(3===t.length&&e.push("Q"),e=e.concat(t[1])),2===t.length&&e.push("L"),e=e.concat(t[t.length-1]);});}(t,e,n));else{var i=[].concat(t);"M"===i[0]&&(i[0]="L");for(var a=0;a<=n-1;a++)r.push(i);}return r;},k=function(t,e){if(t.length!==e.length)return !1;var n=!0;return r.each(t,function(t,r){if(t!==e[r])return n=!1,!1;}),n;};function C(t,e,n){var r=null,i=n;return e<i&&(i=e,r="add"),t<i&&(i=t,r="del"),{type:r,min:i};}function E(t,e,n){for(var r,i=[].concat(t),a=1/(n+1),o=I(e)[0],s=1;s<=n;s++)a*=s,0===(r=Math.floor(t.length*a))?i.unshift([o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]):i.splice(r,0,[o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]);return i;}function I(t){var e=[];switch(t[0]){case"M":case"L":e.push([t[1],t[2]]);break;case"A":e.push([t[6],t[7]]);break;case"Q":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"T":e.push([t[1],t[2]]);break;case"C":e.push([t[5],t[6]]),e.push([t[1],t[2]]),e.push([t[3],t[4]]);break;case"S":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"H":case"V":e.push([t[1],t[1]]);}return e;}t.exports={parsePathString:s,parsePathArray:g,pathTocurve:d,pathToAbsolute:f,catmullRomToBezier:u,rectPath:b,fillPath:function(t,e){if(1===t.length)return t;var n=t.length-1,r=e.length-1,i=n/r,a=[];if(1===t.length&&"M"===t[0][0]){for(var o=0;o<r-n;o++)t.push(t[0]);return t;}for(var s=0;s<r;s++){var u=Math.floor(i*s);a[u]=(a[u]||0)+1;}var c=a.reduce(function(e,r,i){return i===n?e.concat(t[n]):e.concat(A(t[i],t[i+1],r));},[]);return c.unshift(t[0]),"Z"!==e[r]&&"z"!==e[r]||c.push("Z"),c;},fillPathByDiff:function(t,e){var n=function(t,e){var n,r,i=t.length,a=e.length,o=0;if(0===i||0===a)return null;for(var s=[],u=0;u<=i;u++)s[u]=[],s[u][0]={min:u};for(var c=0;c<=a;c++)s[0][c]={min:c};for(var f=1;f<=i;f++){n=t[f-1];for(var h=1;h<=a;h++){r=e[h-1],o=k(n,r)?0:1;var l=s[f-1][h].min+1,d=s[f][h-1].min+1,p=s[f-1][h-1].min+o;s[f][h]=C(l,d,p);}}return s;}(t,e),r=t.length,i=e.length,a=[],o=1,s=1;if(n[r][i]!==r){for(var u=1;u<=r;u++){var c=n[u][u].min;s=u;for(var f=o;f<=i;f++)n[u][f].min<c&&(c=n[u][f].min,s=f);o=s,n[u][o].type&&a.push({index:u-1,type:n[u][o].type});}for(var h=a.length-1;h>=0;h--)o=a[h].index,"add"===a[h].type?t.splice(o,0,[].concat(t[o])):t.splice(o,1);}var l=i-(r=t.length);if(r<i)for(var d=0;d<l;d++)"z"===t[r-1][0]||"Z"===t[r-1][0]?t.splice(r-2,0,t[r-2]):t.push(t[r-1]),r+=1;return t;},formatPath:function(t,e){if(t.length<=1)return t;for(var n,r=0;r<e.length;r++)if(t[r][0]!==e[r][0])switch(n=I(t[r]),e[r][0]){case"M":t[r]=["M"].concat(n[0]);break;case"L":t[r]=["L"].concat(n[0]);break;case"A":t[r]=[].concat(e[r]),t[r][6]=n[0][0],t[r][7]=n[0][1];break;case"Q":if(n.length<2){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],1);}t[r]=["Q"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;case"T":t[r]=["T"].concat(n[0]);break;case"C":if(n.length<3){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],2);}t[r]=["C"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;case"S":if(n.length<2){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],1);}t[r]=["S"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;default:t[r]=e[r];}return t;},intersection:function(t,e){return function(t,e,n){var r,i,a,o,s,u,c,f,h,l;t=d(t),e=d(e);for(var p=n?0:[],g=0,v=t.length;g<v;g++){var m=t[g];if("M"===m[0])r=s=m[1],i=u=m[2];else{"C"===m[0]?(r=(h=[r,i].concat(m.slice(1)))[6],i=h[7]):(h=[r,i,r,i,s,u,s,u],r=s,i=u);for(var y=0,x=e.length;y<x;y++){var b=e[y];if("M"===b[0])a=c=b[1],o=f=b[2];else{"C"===b[0]?(a=(l=[a,o].concat(b.slice(1)))[6],o=l[7]):(l=[a,o,a,o,c,f,c,f],a=c,o=f);var w=S(h,l,n);if(n)p+=w;else{for(var _=0,M=w.length;_<M;_++)w[_].segment1=g,w[_].segment2=y,w[_].bez1=h,w[_].bez2=l;p=p.concat(w);}}}}}return p;}(t,e);}};},function(t,e,n){var r=n(0),i=n(11),a=n(50),o=n(71),s=function t(e){t.superclass.constructor.call(this,e);};s.Symbols={circle:function(t,e,n){return [["M",t,e],["m",-n,0],["a",n,n,0,1,0,2*n,0],["a",n,n,0,1,0,2*-n,0]];},square:function(t,e,n){return [["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["Z"]];},diamond:function(t,e,n){return [["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["Z"]];},triangle:function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return [["M",t-n,e+r],["L",t,e-r],["L",t+n,e+r],["z"]];},"triangle-down":function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return [["M",t-n,e-r],["L",t+n,e-r],["L",t,e+r],["Z"]];}},s.ATTRS={path:null,lineWidth:1},r.extend(s,i),r.augment(s,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function(){return {x:0,y:0,lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.radius,i=this.getHitLineWidth()/2+r;return {minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},_getPath:function(){var t,e=this._attrs,n=e.x,i=e.y,a=e.radius||e.r,o=e.symbol||"circle";return (t=r.isFunction(o)?o:s.Symbols[o])?t(n,i,a):(console.warn(o+" marker is not supported."),null);},createPath:function(t){var e=this._cfg.segments;if(!e||this._cfg.hasUpdate){var n,r=a.parsePath(this._getPath());t.beginPath(),e=[];for(var i=0;i<r.length;i++){var s=r[i];n=new o(s,n,i===r.length-1),e.push(n),n.draw(t);}this._cfg.segments=e,this._cfg.hasUpdate=!1;}else{t.beginPath();for(var u=0;u<e.length;u++)e[u].draw(t);}}}),t.exports=s;},function(t,e,n){var r=n(0),i=r.vec2;function a(t,e,n,r,i){var a=1-i;return a*a*(a*r+3*i*n)+i*i*(i*t+3*a*e);}function o(t,e,n,r,o,s,u,c,f,h,l){var d,p,g,v,m,y,x,b,w=.005,_=1/0,M=[f,h];for(p=0;p<1;p+=.05)g=[a(t,n,o,u,p),a(e,r,s,c,p)],(v=i.squaredDistance(M,g))<_&&(d=p,_=v);_=1/0;for(var S=0;S<32&&!(w<1e-4);S++)b=d+w,g=[a(t,n,o,u,x=d-w),a(e,r,s,c,x)],v=i.squaredDistance(M,g),x>=0&&v<_?(d=x,_=v):(y=[a(t,n,o,u,b),a(e,r,s,c,b)],m=i.squaredDistance(M,y),b<=1&&m<_?(d=b,_=m):w*=.5);return l&&(l.x=a(t,n,o,u,d),l.y=a(e,r,s,c,d)),Math.sqrt(_);}function s(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;}t.exports={at:a,derivativeAt:function(t,e,n,r,i){var a=1-i;return 3*(((e-t)*a+2*(n-e)*i)*a+(r-n)*i*i);},projectPoint:function(t,e,n,r,i,a,s,u,c,f){var h={};return o(t,e,n,r,i,a,s,u,c,f,h),h;},pointDistance:o,extrema:function(t,e,n,i){var a,o,s,u=3*t-9*e+9*n-3*i,c=6*e-12*n+6*i,f=3*n-3*i,h=[];if(r.isNumberEqual(u,0))r.isNumberEqual(c,0)||(a=-f/c)>=0&&a<=1&&h.push(a);else{var l=c*c-4*u*f;r.isNumberEqual(l,0)?h.push(-c/(2*u)):l>0&&(o=(-c-(s=Math.sqrt(l)))/(2*u),(a=(-c+s)/(2*u))>=0&&a<=1&&h.push(a),o>=0&&o<=1&&h.push(o));}return h;},len:function(t,e,n,i,a,o,u,c,f){r.isNil(f)&&(f=1);for(var h=(f=f>1?1:f<0?0:f)/2,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,g=0;g<12;g++){var v=h*l[g]+h,m=s(v,t,n,a,u),y=s(v,e,i,o,c),x=m*m+y*y;p+=d[g]*Math.sqrt(x);}return h*p;}};},function(t,e,n){var r=n(74),i=n(186),a=n(102),o=n(73);t.exports={line:function(t,e,n,i,a,o,s){var u=r.box(t,e,n,i,a);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,o,s))return !1;var c=r.pointDistance(t,e,n,i,o,s);return !isNaN(c)&&c<=a/2;},polyline:function(t,e,n,r){var i=t.length-1;if(i<1)return !1;for(var a=0;a<i;a++){var o=t[a][0],s=t[a][1],u=t[a+1][0],c=t[a+1][1];if(this.line(o,s,u,c,e,n,r))return !0;}return !1;},cubicline:function(t,e,n,r,i,o,s,u,c,f,h){return a.pointDistance(t,e,n,r,i,o,s,u,f,h)<=c/2;},quadraticline:function(t,e,n,r,a,o,s,u,c){return i.pointDistance(t,e,n,r,a,o,u,c)<=s/2;},arcline:function(t,e,n,r,i,a,s,u,c){return o.pointDistance(t,e,n,r,i,a,u,c)<=s/2;},rect:function(t,e,n,r,i,a){return t<=i&&i<=t+n&&e<=a&&a<=e+r;},circle:function(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2);},box:function(t,e,n,r,i,a){return t<=i&&i<=e&&n<=a&&a<=r;}};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=function(t){e.ARRAY_TYPE=t;},e.toRadian=function(t){return t*i;},e.equals=function(t,e){return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e));};var r=e.EPSILON=1e-6;e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,e.RANDOM=Math.random;var i=Math.PI/180;},function(t,e,n){var r=n(462);r.translate=function(t,e,n){var i=new Array(9);return r.fromTranslation(i,n),r.multiply(t,i,e);},r.rotate=function(t,e,n){var i=new Array(9);return r.fromRotation(i,n),r.multiply(t,i,e);},r.scale=function(t,e,n){var i=new Array(9);return r.fromScaling(i,n),r.multiply(t,i,e);},t.exports=r;},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;},i=n(3);t.exports=function t(e){if("object"!==(void 0===e?"undefined":r(e))||null===e)return e;var n=void 0;if(i(e)){n=[];for(var a=0,o=e.length;a<o;a++)"object"===r(e[a])&&null!=e[a]?n[a]=t(e[a]):n[a]=e[a];}else for(var s in n={},e)"object"===r(e[s])&&null!=e[s]?n[s]=t(e[s]):n[s]=e[s];return n;};},function(t,e,n){var r=n(4);t.exports=function(t){return r(t,"Function");};},function(t,e,n){t.exports={isFunction:n(107),isObject:n(12),isBoolean:n(474),isNil:n(26),isString:n(17),isArray:n(3),isNumber:n(77),isEmpty:n(473),uniqueId:n(198),clone:n(106),deepMix:n(2),assign:n(76),merge:n(2),upperFirst:n(197),each:n(7),isEqual:n(469),toArray:n(196),extend:n(195),augment:n(194),remove:n(468),isNumberEqual:n(467),toRadian:n(466),toDegree:n(465),mod:n(464),clamp:n(193),createDom:n(21),modifyCSS:n(9),requestAnimationFrame:n(463),getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2;},mat3:n(105),vec2:n(192),vec3:n(191),transform:n(190)};},function(t,e,n){n.r(e);var r,i,a=0,o=0,s=0,u=1e3,c=0,f=0,h=0,l="object"==typeof performance&&performance.now?performance:Date,d="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17);};function p(){return f||(d(g),f=l.now()+h);}function g(){f=0;}function v(){this._call=this._time=this._next=null;}function m(t,e,n){var r=new v();return r.restart(t,e,n),r;}function y(){p(),++a;for(var t,e=r;e;)(t=f-e._time)>=0&&e._call.call(null,t),e=e._next;--a;}function x(){f=(c=l.now())+h,a=o=0;try{y();}finally{a=0,function(){var t,e,n=r,a=1/0;for(;n;)n._call?(a>n._time&&(a=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:r=e);i=t,w(a);}(),f=0;}}function b(){var t=l.now(),e=t-c;e>u&&(h-=e,c=t);}function w(t){a||(o&&(o=clearTimeout(o)),t-f>24?(t<1/0&&(o=setTimeout(x,t-l.now()-h)),s&&(s=clearInterval(s))):(s||(c=l.now(),s=setInterval(b,u)),a=1,d(x)));}v.prototype=m.prototype={constructor:v,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?p():+n)+(null==e?0:+e),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=n,w();},stop:function(){this._call&&(this._call=null,this._time=1/0,w());}};var _=function(t,e,n){var r=new v();return e=null==e?0:+e,r.restart(function(n){r.stop(),t(n+e);},e,n),r;},M=function(t,e,n){var r=new v(),i=e;return null==e?(r.restart(t,e,n),r):(e=+e,n=null==n?p():+n,r.restart(function a(o){o+=i,r.restart(a,i+=e,n),t(o);},e,n),r);};n.d(e,"now",function(){return p;}),n.d(e,"timer",function(){return m;}),n.d(e,"timerFlush",function(){return y;}),n.d(e,"timeout",function(){return _;}),n.d(e,"interval",function(){return M;});},function(t,e,n){n.r(e);var r=function(t,e){var n;function r(){var r,i,a=n.length,o=0,s=0;for(r=0;r<a;++r)o+=(i=n[r]).x,s+=i.y;for(o=o/a-t,s=s/a-e,r=0;r<a;++r)(i=n[r]).x-=o,i.y-=s;}return null==t&&(t=0),null==e&&(e=0),r.initialize=function(t){n=t;},r.x=function(e){return arguments.length?(t=+e,r):t;},r.y=function(t){return arguments.length?(e=+t,r):e;},r;};function i(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,a,o,s,u,c,f,h,l,d=t._root,p={data:r},g=t._x0,v=t._y0,m=t._x1,y=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((c=e>=(a=(g+m)/2))?g=a:m=a,(f=n>=(o=(v+y)/2))?v=o:y=o,i=d,!(d=d[h=f<<1|c]))return i[h]=p,t;if(s=+t._x.call(null,d.data),u=+t._y.call(null,d.data),e===s&&n===u)return p.next=d,i?i[h]=p:t._root=p,t;do{i=i?i[h]=new Array(4):t._root=new Array(4),(c=e>=(a=(g+m)/2))?g=a:m=a,(f=n>=(o=(v+y)/2))?v=o:y=o;}while((h=f<<1|c)==(l=(u>=o)<<1|s>=a));return i[l]=d,i[h]=p,t;}var a=function(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i;};function o(t){return t[0];}function s(t){return t[1];}function u(t,e,n){var r=new c(null==e?o:e,null==n?s:n,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t);}function c(t,e,n,r,i,a){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0;}function f(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e;}var h=u.prototype=c.prototype;h.copy=function(){var t,e,n=new c(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return n;if(!r.length)return n._root=f(r),n;for(t=[{source:r,target:n._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(e=r.source[i])&&(e.length?t.push({source:e,target:r.target[i]=new Array(4)}):r.target[i]=f(e));return n;},h.add=function(t){var e=+this._x.call(null,t),n=+this._y.call(null,t);return i(this.cover(e,n),e,n,t);},h.addAll=function(t){var e,n,r,a,o=t.length,s=new Array(o),u=new Array(o),c=1/0,f=1/0,h=-1/0,l=-1/0;for(n=0;n<o;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(a=+this._y.call(null,e))||(s[n]=r,u[n]=a,r<c&&(c=r),r>h&&(h=r),a<f&&(f=a),a>l&&(l=a));if(c>h||f>l)return this;for(this.cover(c,f).cover(h,l),n=0;n<o;++n)i(this,s[n],u[n],t[n]);return this;},h.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,a=(r=Math.floor(e))+1;else{for(var o,s,u=i-n,c=this._root;n>t||t>=i||r>e||e>=a;)switch(s=(e<r)<<1|t<n,(o=new Array(4))[s]=c,c=o,u*=2,s){case 0:i=n+u,a=r+u;break;case 1:n=i-u,a=r+u;break;case 2:i=n+u,r=a-u;break;case 3:n=i-u,r=a-u;}this._root&&this._root.length&&(this._root=c);}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this;},h.data=function(){var t=[];return this.visit(function(e){if(!e.length)do{t.push(e.data);}while(e=e.next);}),t;},h.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]];},h.find=function(t,e,n){var r,i,o,s,u,c,f,h=this._x0,l=this._y0,d=this._x1,p=this._y1,g=[],v=this._root;for(v&&g.push(new a(v,h,l,d,p)),null==n?n=1/0:(h=t-n,l=e-n,d=t+n,p=e+n,n*=n);c=g.pop();)if(!(!(v=c.node)||(i=c.x0)>d||(o=c.y0)>p||(s=c.x1)<h||(u=c.y1)<l))if(v.length){var m=(i+s)/2,y=(o+u)/2;g.push(new a(v[3],m,y,s,u),new a(v[2],i,y,m,u),new a(v[1],m,o,s,y),new a(v[0],i,o,m,y)),(f=(e>=y)<<1|t>=m)&&(c=g[g.length-1],g[g.length-1]=g[g.length-1-f],g[g.length-1-f]=c);}else{var x=t-+this._x.call(null,v.data),b=e-+this._y.call(null,v.data),w=x*x+b*b;if(w<n){var _=Math.sqrt(n=w);h=t-_,l=e-_,d=t+_,p=e+_,r=v.data;}}return r;},h.remove=function(t){if(isNaN(a=+this._x.call(null,t))||isNaN(o=+this._y.call(null,t)))return this;var e,n,r,i,a,o,s,u,c,f,h,l,d=this._root,p=this._x0,g=this._y0,v=this._x1,m=this._y1;if(!d)return this;if(d.length)for(;;){if((c=a>=(s=(p+v)/2))?p=s:v=s,(f=o>=(u=(g+m)/2))?g=u:m=u,e=d,!(d=d[h=f<<1|c]))return this;if(!d.length)break;(e[h+1&3]||e[h+2&3]||e[h+3&3])&&(n=e,l=h);}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return (i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):e?(i?e[h]=i:delete e[h],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[l]=d:this._root=d),this):(this._root=i,this);},h.removeAll=function(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this;},h.root=function(){return this._root;},h.size=function(){var t=0;return this.visit(function(e){if(!e.length)do{++t;}while(e=e.next);}),t;},h.visit=function(t){var e,n,r,i,o,s,u=[],c=this._root;for(c&&u.push(new a(c,this._x0,this._y0,this._x1,this._y1));e=u.pop();)if(!t(c=e.node,r=e.x0,i=e.y0,o=e.x1,s=e.y1)&&c.length){var f=(r+o)/2,h=(i+s)/2;(n=c[3])&&u.push(new a(n,f,h,o,s)),(n=c[2])&&u.push(new a(n,r,h,f,s)),(n=c[1])&&u.push(new a(n,f,i,o,h)),(n=c[0])&&u.push(new a(n,r,i,f,h));}return this;},h.visitAfter=function(t){var e,n=[],r=[];for(this._root&&n.push(new a(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var i=e.node;if(i.length){var o,s=e.x0,u=e.y0,c=e.x1,f=e.y1,h=(s+c)/2,l=(u+f)/2;(o=i[0])&&n.push(new a(o,s,u,h,l)),(o=i[1])&&n.push(new a(o,h,u,c,l)),(o=i[2])&&n.push(new a(o,s,l,h,f)),(o=i[3])&&n.push(new a(o,h,l,c,f));}r.push(e);}for(;e=r.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this;},h.x=function(t){return arguments.length?(this._x=t,this):this._x;},h.y=function(t){return arguments.length?(this._y=t,this):this._y;};var l=function(t){return function(){return t;};},d=function(){return 1e-6*(Math.random()-.5);};function p(t){return t.x+t.vx;}function g(t){return t.y+t.vy;}var v=function(t){var e,n,r=1,i=1;function a(){for(var t,a,s,c,f,h,l,v=e.length,m=0;m<i;++m)for(a=u(e,p,g).visitAfter(o),t=0;t<v;++t)s=e[t],h=n[s.index],l=h*h,c=s.x+s.vx,f=s.y+s.vy,a.visit(y);function y(t,e,n,i,a){var o=t.data,u=t.r,p=h+u;if(!o)return e>c+p||i<c-p||n>f+p||a<f-p;if(o.index>s.index){var g=c-o.x-o.vx,v=f-o.y-o.vy,m=g*g+v*v;m<p*p&&(0===g&&(m+=(g=d())*g),0===v&&(m+=(v=d())*v),m=(p-(m=Math.sqrt(m)))/m*r,s.vx+=(g*=m)*(p=(u*=u)/(l+u)),s.vy+=(v*=m)*p,o.vx-=g*(p=1-p),o.vy-=v*p);}}}function o(t){if(t.data)return t.r=n[t.data.index];for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r);}function s(){if(e){var r,i,a=e.length;for(n=new Array(a),r=0;r<a;++r)i=e[r],n[i.index]=+t(i,r,e);}}return "function"!=typeof t&&(t=l(null==t?1:+t)),a.initialize=function(t){e=t,s();},a.iterations=function(t){return arguments.length?(i=+t,a):i;},a.strength=function(t){return arguments.length?(r=+t,a):r;},a.radius=function(e){return arguments.length?(t="function"==typeof e?e:l(+e),s(),a):t;},a;};function m(t){return t.index;}function y(t,e){var n=t.get(e);if(!n)throw new Error("missing: "+e);return n;}var x=function(t){var e,n,r,i,a,o=m,s=function(t){return 1/Math.min(i[t.source.index],i[t.target.index]);},u=l(30),c=1;function f(r){for(var i=0,o=t.length;i<c;++i)for(var s,u,f,h,l,p,g,v=0;v<o;++v)u=(s=t[v]).source,h=(f=s.target).x+f.vx-u.x-u.vx||d(),l=f.y+f.vy-u.y-u.vy||d(),h*=p=((p=Math.sqrt(h*h+l*l))-n[v])/p*r*e[v],l*=p,f.vx-=h*(g=a[v]),f.vy-=l*g,u.vx+=h*(g=1-g),u.vy+=l*g;}function h(){if(r){var s,u,c=r.length,f=t.length,h=new Map(r.map((t,e)=>[o(t,e,r),t]));for(s=0,i=new Array(c);s<f;++s)(u=t[s]).index=s,"object"!=typeof u.source&&(u.source=y(h,u.source)),"object"!=typeof u.target&&(u.target=y(h,u.target)),i[u.source.index]=(i[u.source.index]||0)+1,i[u.target.index]=(i[u.target.index]||0)+1;for(s=0,a=new Array(f);s<f;++s)u=t[s],a[s]=i[u.source.index]/(i[u.source.index]+i[u.target.index]);e=new Array(f),p(),n=new Array(f),g();}}function p(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t);}function g(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t);}return null==t&&(t=[]),f.initialize=function(t){r=t,h();},f.links=function(e){return arguments.length?(t=e,h(),f):t;},f.id=function(t){return arguments.length?(o=t,f):o;},f.iterations=function(t){return arguments.length?(c=+t,f):c;},f.strength=function(t){return arguments.length?(s="function"==typeof t?t:l(+t),p(),f):s;},f.distance=function(t){return arguments.length?(u="function"==typeof t?t:l(+t),g(),f):u;},f;},b={value:function(){}};function w(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[];}return new _(r);}function _(t){this._=t;}function M(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value;}function S(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=b,t=t.slice(0,r).concat(t.slice(r+1));break;}return null!=n&&t.push({name:e,value:n}),t;}_.prototype=w.prototype={constructor:_,on:function(t,e){var n,r=this._,i=function(t,e){return t.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return {type:t,name:n};});}(t+"",r),a=-1,o=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<o;)if(n=(t=i[a]).type)r[n]=S(r[n],t.name,e);else if(null==e)for(n in r)r[n]=S(r[n],t.name,null);return this;}for(;++a<o;)if((n=(t=i[a]).type)&&(n=M(r[n],t.name)))return n;},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new _(t);},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),a=0;a<n;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,n=(r=this._[t]).length;a<n;++a)r[a].value.apply(e,i);},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n);}};var P=w,A=n(109);function k(t){return t.x;}function C(t){return t.y;}var E=10,I=Math.PI*(3-Math.sqrt(5)),N=function(t){var e,n=1,r=.001,i=1-Math.pow(r,1/300),a=0,o=.6,s=new Map(),u=Object(A.timer)(f),c=P("tick","end");function f(){h(),c.call("tick",e),n<r&&(u.stop(),c.call("end",e));}function h(r){var u,c,f=t.length;void 0===r&&(r=1);for(var h=0;h<r;++h)for(n+=(a-n)*i,s.forEach(function(t){t(n);}),u=0;u<f;++u)null==(c=t[u]).fx?c.x+=c.vx*=o:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=o:(c.y=c.fy,c.vy=0);return e;}function l(){for(var e,n=0,r=t.length;n<r;++n){if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),isNaN(e.x)||isNaN(e.y)){var i=E*Math.sqrt(n),a=n*I;e.x=i*Math.cos(a),e.y=i*Math.sin(a);}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0);}}function d(e){return e.initialize&&e.initialize(t),e;}return null==t&&(t=[]),l(),e={tick:h,restart:function(){return u.restart(f),e;},stop:function(){return u.stop(),e;},nodes:function(n){return arguments.length?(t=n,l(),s.forEach(d),e):t;},alpha:function(t){return arguments.length?(n=+t,e):n;},alphaMin:function(t){return arguments.length?(r=+t,e):r;},alphaDecay:function(t){return arguments.length?(i=+t,e):+i;},alphaTarget:function(t){return arguments.length?(a=+t,e):a;},velocityDecay:function(t){return arguments.length?(o=1-t,e):1-o;},force:function(t,n){return arguments.length>1?(null==n?s.delete(t):s.set(t,d(n)),e):s.get(t);},find:function(e,n,r){var i,a,o,s,u,c=0,f=t.length;for(null==r?r=1/0:r*=r,c=0;c<f;++c)(o=(i=e-(s=t[c]).x)*i+(a=n-s.y)*a)<r&&(u=s,r=o);return u;},on:function(t,n){return arguments.length>1?(c.on(t,n),e):c.on(t);}};},T=function(){var t,e,n,r,i=l(-30),a=1,o=1/0,s=.81;function c(r){var i,a=t.length,o=u(t,k,C).visitAfter(h);for(n=r,i=0;i<a;++i)e=t[i],o.visit(p);}function f(){if(t){var e,n,a=t.length;for(r=new Array(a),e=0;e<a;++e)n=t[e],r[n.index]=+i(n,e,t);}}function h(t){var e,n,i,a,o,s=0,u=0;if(t.length){for(i=a=o=0;o<4;++o)(e=t[o])&&(n=Math.abs(e.value))&&(s+=e.value,u+=n,i+=n*e.x,a+=n*e.y);t.x=i/u,t.y=a/u;}else{(e=t).x=e.data.x,e.y=e.data.y;do{s+=r[e.data.index];}while(e=e.next);}t.value=s;}function p(t,i,u,c){if(!t.value)return !0;var f=t.x-e.x,h=t.y-e.y,l=c-i,p=f*f+h*h;if(l*l/s<p)return p<o&&(0===f&&(p+=(f=d())*f),0===h&&(p+=(h=d())*h),p<a&&(p=Math.sqrt(a*p)),e.vx+=f*t.value*n/p,e.vy+=h*t.value*n/p),!0;if(!(t.length||p>=o)){(t.data!==e||t.next)&&(0===f&&(p+=(f=d())*f),0===h&&(p+=(h=d())*h),p<a&&(p=Math.sqrt(a*p)));do{t.data!==e&&(l=r[t.data.index]*n/p,e.vx+=f*l,e.vy+=h*l);}while(t=t.next);}}return c.initialize=function(e){t=e,f();},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),f(),c):i;},c.distanceMin=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a);},c.distanceMax=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o);},c.theta=function(t){return arguments.length?(s=t*t,c):Math.sqrt(s);},c;},O=function(t,e,n){var r,i,a,o=l(.1);function s(t){for(var o=0,s=r.length;o<s;++o){var u=r[o],c=u.x-e||1e-6,f=u.y-n||1e-6,h=Math.sqrt(c*c+f*f),l=(a[o]-h)*i[o]*t/h;u.vx+=c*l,u.vy+=f*l;}}function u(){if(r){var e,n=r.length;for(i=new Array(n),a=new Array(n),e=0;e<n;++e)a[e]=+t(r[e],e,r),i[e]=isNaN(a[e])?0:+o(r[e],e,r);}}return "function"!=typeof t&&(t=l(+t)),null==e&&(e=0),null==n&&(n=0),s.initialize=function(t){r=t,u();},s.strength=function(t){return arguments.length?(o="function"==typeof t?t:l(+t),u(),s):o;},s.radius=function(e){return arguments.length?(t="function"==typeof e?e:l(+e),u(),s):t;},s.x=function(t){return arguments.length?(e=+t,s):e;},s.y=function(t){return arguments.length?(n=+t,s):n;},s;},j=function(t){var e,n,r,i=l(.1);function a(t){for(var i,a=0,o=e.length;a<o;++a)(i=e[a]).vx+=(r[a]-i.x)*n[a]*t;}function o(){if(e){var a,o=e.length;for(n=new Array(o),r=new Array(o),a=0;a<o;++a)n[a]=isNaN(r[a]=+t(e[a],a,e))?0:+i(e[a],a,e);}}return "function"!=typeof t&&(t=l(null==t?0:+t)),a.initialize=function(t){e=t,o();},a.strength=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),o(),a):i;},a.x=function(e){return arguments.length?(t="function"==typeof e?e:l(+e),o(),a):t;},a;},B=function(t){var e,n,r,i=l(.1);function a(t){for(var i,a=0,o=e.length;a<o;++a)(i=e[a]).vy+=(r[a]-i.y)*n[a]*t;}function o(){if(e){var a,o=e.length;for(n=new Array(o),r=new Array(o),a=0;a<o;++a)n[a]=isNaN(r[a]=+t(e[a],a,e))?0:+i(e[a],a,e);}}return "function"!=typeof t&&(t=l(null==t?0:+t)),a.initialize=function(t){e=t,o();},a.strength=function(t){return arguments.length?(i="function"==typeof t?t:l(+t),o(),a):i;},a.y=function(e){return arguments.length?(t="function"==typeof e?e:l(+e),o(),a):t;},a;};n.d(e,"forceCenter",function(){return r;}),n.d(e,"forceCollide",function(){return v;}),n.d(e,"forceLink",function(){return x;}),n.d(e,"forceManyBody",function(){return T;}),n.d(e,"forceRadial",function(){return O;}),n.d(e,"forceSimulation",function(){return N;}),n.d(e,"forceX",function(){return j;}),n.d(e,"forceY",function(){return B;});},function(t,e,n){var r=n(1),i=n(172),a=n(10),o=["fillStyle","strokeStyle","path","points","img","symbol"],s=function(){function t(t){this._cfg=r.mix({id:null,type:"item",model:{},group:null,animate:!1,visible:!0,locked:!1,event:!0,keyShape:null,states:[]},this.getDefaultCfg(),t);var e=t.group;e.set("item",this);var n=this.get("model").id;n&&""!==n||(n=r.uniqueId(this.get("type"))),this.set("id",n),e.set("id",n),this.init(),this.draw();}var e=t.prototype;return e.isItem=function(){return !0;},e.get=function(t){return this._cfg[t];},e.set=function(t,e){r.isPlainObject(t)?this._cfg=r.mix({},this._cfg,t):this._cfg[t]=e;},e.getDefaultCfg=function(){return {};},e.init=function(){var t=i.getFactory(this.get("type"));this.set("shapeFactory",t);},e._calculateBBox=function(){var t=this.get("keyShape"),e=this.get("group"),n=r.getBBox(t,e);return n.x=n.minX,n.y=n.minY,n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.centerX=(n.minX+n.maxX)/2,n.centerY=(n.minY+n.maxY)/2,n;},e._drawInner=function(){var t=this.get("shapeFactory"),e=this.get("group"),n=this.get("model");if(e.clear(),t){this.updatePosition(n);var r=this.getShapeCfg(n),i=r.shape,a=t.draw(i,r,e);a&&(a.isKeyShape=!0,this.set("keyShape",a),this.set("originStyle",this.getKeyShapeStyle())),this.set("currentShape",i),this._resetStates(t,i);}},e.getKeyShapeStyle=function(){var t=this.getKeyShape();if(t){var e={};return r.each(t.attr(),function(t,n){o.indexOf(n)<0&&(e[n]=t);}),e;}},e._resetStates=function(t,e){var n=this,i=n.get("states");r.each(i,function(r){t.setState(e,r,!0,n);});},e.getStates=function(){return this.get("states");},e.hasState=function(t){return this.get("states").indexOf(t)>=0;},e.getStateStyle=function(t){var e=a[this.getType()+"StateStyle"][t],n=this.get("styles"),i=n&&n[t],o=t+"Style";return r.mix({},e,i,this.get(o));},e.getOriginStyle=function(){return this.get("originStyle");},e.getCurrentStatesStyle=function(){var t=this,e=r.mix({},t.getOriginStyle());return r.each(t.getStates(),function(n){r.mix(e,t.getStateStyle(n));}),e;},e.setState=function(t,e){var n=this.get("states"),r=this.get("shapeFactory"),i=n.indexOf(t);if(e){if(i>-1)return;n.push(t);}else i>-1&&n.splice(i,1);if(r){var a=this.get("model");r.setState(a.shape,t,e,this);}},e.clearStates=function(t){var e=this,n=e.getStates(),i=e.get("shapeFactory"),a=e.get("model").shape;if(!t)return e.set("states",[]),void i.setState(a,n[0],!1,e);r.isString(t)&&(t=[t]);var o=n.filter(function(n){return i.setState(a,n,!1,e),!(t.indexOf(n)>=0);});e.set("states",o);},e.getContainer=function(){return this.get("group");},e.getKeyShape=function(){return this.get("keyShape");},e.getModel=function(){return this.get("model");},e.getType=function(){return this.get("type");},e.beforeDraw=function(){},e.afterDraw=function(){},e.getShapeCfg=function(t){var e=this.get("styles");if(e&&e.default){var n=r.mix({},t);return n.style=r.mix({},e.default,t.style),n;}return t;},e.refresh=function(){var t=this.get("model");this.updatePosition(t),this.updateShape(),this.afterUpdate(),this.clearCache();},e.update=function(t){var e=this.get("model"),n=e.x,i=e.y;r.mix(e,t),this._isOnlyMove(t)?this.updatePosition(e):(n===e.x&&i===e.y||this.updatePosition(e),this.updateShape()),this.afterUpdate(),this.clearCache();},e.updateShape=function(){var t=this.get("shapeFactory"),e=this.get("model"),n=e.shape;if(t.shouldUpdate(n)&&n===this.get("currentShape")){var r=this.getShapeCfg(e);t.update(n,r,this);}else this.draw();this.set("originStyle",this.getKeyShapeStyle()),this._resetStates(t,n);},e.updatePosition=function(t){var e=this.get("model"),n=r.isNil(t.x)?e.x:t.x,i=r.isNil(t.y)?e.y:t.y,a=this.get("group");r.isNil(n)||r.isNil(i)||(a.resetMatrix(),a.translate(n,i),e.x=n,e.y=i,this.clearCache());},e.afterUpdate=function(){},e.clearCache=function(){this.set("bboxCache",null);},e.draw=function(){this.beforeDraw(),this._drawInner(),this.afterDraw();},e.getBBox=function(){var t=this.get("bboxCache");return t||(t=this._calculateBBox(),this.set("bboxCache",t)),t;},e.toFront=function(){this.get("group").toFront();},e.toBack=function(){this.get("group").toBack();},e.show=function(){this.changeVisibility(!0);},e.hide=function(){this.changeVisibility(!1);},e.changeVisibility=function(t){var e=this.get("group");t?e.show():e.hide(),this.set("visible",t);},e.enableCapture=function(t){var e=this.get("group");e&&e.attr("capture",t);},e.isVisible=function(){return this.get("visible");},e.destroy=function(){if(!this.destroyed){var t=this.get("animate"),e=this.get("group");t&&e.stopAnimate(),e.remove(),this._cfg=null,this.destroyed=!0;}},t;}();t.exports=s;},function(t,e,n){var r=n(99),i=r.groupBy,a=r.isString,o=n(78),s=o.EventEmitter,u=n(1),c=n(10),f=n(213),h=function(t){!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(n,t);var e=n.prototype;function n(e){var n;return (n=t.call(this)||this)._cfg=u.deepMix(n.getDefaultCfg(),e),n._init(),n;}return e.getDefaultCfg=function(){return {container:void 0,width:void 0,height:void 0,renderer:"canvas",mode:[],plugins:[],data:null,fitViewPadding:10,minZoom:.2,maxZoom:10,event:!0,groupByTypes:!0,directed:!1,autoPaint:!0,nodes:[],edges:[],itemMap:{},linkCenter:!1,defaultNode:{},defaultEdge:{},nodeStateStyles:{},edgeStateStyles:{},states:{},animate:!1,animateCfg:{onFrame:null,duration:500,easing:"easeLinear"},callback:null,groupType:"circle",groupBBoxs:{},groupNodes:{},groups:[],groupStyle:{}};},e._init=function(){this._initCanvas();var t=new f.Event(this),e=new f.View(this),n=new f.Mode(this),r=new f.Item(this),i=new f.State(this),a=new f.Layout(this),o=new f.CustomGroup(this);this.set({eventController:t,viewController:e,modeController:n,itemController:r,stateController:i,customGroupControll:o,layoutController:a}),this._initPlugins();},e._initCanvas=function(){var t=this.get("container");if(u.isString(t)&&(t=document.getElementById(t),this.set("container",t)),!t)throw Error("invalid container");var e=new o.Canvas({containerDOM:t,width:this.get("width"),height:this.get("height"),renderer:this.get("renderer"),pixelRatio:this.get("pixelRatio")});this.set("canvas",e),this._initGroups();},e._initGroups=function(){var t=this.get("canvas"),e=this.get("canvas").get("el").id,n=t.addGroup({id:e+"-root",className:c.rootContainerClassName});if(this.get("groupByTypes")){var r=n.addGroup({id:e+"-edge",className:c.edgeContainerClassName}),i=n.addGroup({id:e+"-node",className:c.nodeContainerClassName}),a=n.addGroup({id:e+"-delagate",className:c.delegateContainerClassName}),o=n.addGroup({id:e+"-group",className:c.customGroupContainerClassName});o.toBack(),this.set({nodeGroup:i,edgeGroup:r,customGroup:o,delegateGroup:a});}this.set("group",n);},e._initPlugins=function(){var t=this;u.each(t.get("plugins"),function(e){!e.destroyed&&e.initPlugin&&e.initPlugin(t);});},e.get=function(t){return this._cfg[t];},e.set=function(t,e){return u.isPlainObject(t)?this._cfg=u.mix({},this._cfg,t):this._cfg[t]=e,this;},e.update=function(t,e){this.updateItem(t,e);},e.updateItem=function(t,e){this.get("itemController").updateItem(t,e);},e.setItemState=function(t,e,n){u.isString(t)&&(t=this.findById(t)),this.get("itemController").setItemState(t,e,n),this.get("stateController").updateState(t,e,n);},e.clearItemStates=function(t,e){u.isString(t)&&(t=this.findById(t)),this.get("itemController").clearItemStates(t,e),e||(e=t.get("states")),this.get("stateController").updateStates(t,e,!1);},e.add=function(t,e){return this.addItem(t,e);},e.addItem=function(t,e){if("group"===t){var n=e.groupId,r=e.nodes,i=e.type,o=e.zIndex,s=e.title,u=s;return a(s)&&(u={text:s}),this.get("customGroupControll").create(n,r,i,o,!0,u);}return this.get("itemController").addItem(t,e);},e.remove=function(t){this.removeItem(t);},e.removeItem=function(t){var e=null;u.isString(t)&&(e=this.findById(t)),!e&&u.isString(t)?this.get("customGroupControll").remove(t):this.get("itemController").removeItem(t);},e.data=function(t){this.set("data",t);},e.node=function(t){"function"==typeof t&&this.set("nodeMapper",t);},e.edge=function(t){"function"==typeof t&&this.set("edgeMapper",t);},e.refreshItem=function(t){this.get("itemController").refreshItem(t);},e.refresh=function(){var t=this.get("autoPaint");if(this.setAutoPaint(!1),this.emit("beforegraphrefresh"),this.get("animate"))this.positionsAnimate();else{var e=this.get("nodes"),n=this.get("edges");u.each(e,function(t){t.refresh();}),u.each(n,function(t){t.refresh();});}this.setAutoPaint(t),this.emit("aftergraphrefresh"),this.autoPaint();},e.refreshPositions=function(){this.emit("beforegraphrefreshposition");var t,e=this.get("nodes"),n=this.get("edges");u.each(e,function(e){t=e.getModel(),e.updatePosition(t);}),u.each(n,function(t){t.refresh();}),this.emit("aftergraphrefreshposition"),this.autoPaint();},e.render=function(){var t=this,e=this.get("data");if(!e)throw new Error("data must be defined first");this.clear(),this.emit("beforerender");var n=this.get("autoPaint");if((this.setAutoPaint(!1),u.each(e.nodes,function(e){t.add("node",e);}),u.each(e.edges,function(e){t.add("edge",e);}),e.nodes)&&e.nodes.filter(function(t){return t.groupId;}).length>0){var r=t.get("groupType");this.renderCustomGroup(e,r);}this.get("groupByTypes")||(e.nodes.length<e.edges.length?this.getNodes().forEach(function(t){t.toFront();}):this.getEdges().forEach(function(t){t.toBack();}));t.get("layoutController").layout(),t.refreshPositions(),t.get("fitView")&&t.get("viewController")._fitView(),t.paint(),t.setAutoPaint(n),t.emit("afterrender");},e.renderCustomGroup=function(t,e){var n=this,r=t.groups,a=t.nodes,o=10;if(r){this.set({groups:r});var s=u.getAllNodeInGroups(t);for(var c in s){var f=s[c];this.get("customGroupControll").create(c,f,e,o),o--;}this.get("customGroup").sort();}else{var h=a.filter(function(t){return t.groupId;}),l=[],d=i(h,"groupId"),p=function(t){var r=d[t].map(function(t){return t.id;});n.get("customGroupControll").create(t,r,e,o),o--,l.find(function(e){return e.id===t;})||l.push({id:t});};for(var g in d)p(g);this.set({groups:l});}},e.read=function(t){this.data(t),this.render();},e.changeData=function(t){var e=this;if(!t)return this;e.get("data")||(e.data(t),e.render());var n=this.get("autoPaint"),r=this.get("itemMap"),i={nodes:[],edges:[]};return this.setAutoPaint(!1),this._diffItems("node",i,t.nodes),this._diffItems("edge",i,t.edges),u.each(r,function(t,n){i.nodes.indexOf(t)<0&&i.edges.indexOf(t)<0&&(delete r[n],e.remove(t));}),this.set({nodes:i.nodes,edges:i.edges}),this.get("layoutController").changeData(),e.get("animate")?e.positionsAnimate():this.paint(),this.setAutoPaint(n),this;},e._diffItems=function(t,e,n){var r,i=this,a=this.get("itemMap");u.each(n,function(n){if(r=a[n.id]){if(i.get("animate")&&"node"===t){var o=r.getContainer().getMatrix();r.set("originAttrs",{x:o[6],y:o[7]});}i.updateItem(r,n);}else r=i.addItem(t,n);e[t+"s"].push(r);});},e.paint=function(){this.emit("beforepaint"),this.get("canvas").draw(),this.emit("afterpaint");},e.autoPaint=function(){this.get("autoPaint")&&this.paint();},e.save=function(){var t=[],e=[];return u.each(this.get("nodes"),function(e){t.push(e.getModel());}),u.each(this.get("edges"),function(t){e.push(t.getModel());}),{nodes:t,edges:e,groups:this.get("groups")};},e.changeSize=function(t,e){return this.get("viewController").changeSize(t,e),this.autoPaint(),this;},e.translate=function(t,e){var n=this.get("group");n.translate(t,e),this.emit("viewportchange",{action:"translate",matrix:n.getMatrix()}),this.autoPaint();},e.moveTo=function(t,e){var n=this.get("group");n.move(t,e),this.emit("viewportchange",{action:"move",matrix:n.getMatrix()}),this.autoPaint();},e.fitView=function(t){t&&this.set("fitViewPadding",t),this.get("viewController")._fitView(),this.paint();},e.addBehaviors=function(t,e){return this.get("modeController").manipulateBehaviors(t,e,!0),this;},e.removeBehaviors=function(t,e){return this.get("modeController").manipulateBehaviors(t,e,!1),this;},e.setMode=function(t){return this.set("mode",t),this.get("modeController").setMode(t),this;},e.getCurrentMode=function(){return this.get("mode");},e.getZoom=function(){return this.get("group").getMatrix()[0];},e.getNodes=function(){return this.get("nodes");},e.getEdges=function(){return this.get("edges");},e.zoom=function(t,e){var n=u.clone(this.get("group").getMatrix()),r=this.get("minZoom"),i=this.get("maxZoom");e?(u.mat3.translate(n,n,[-e.x,-e.y]),u.mat3.scale(n,n,[t,t]),u.mat3.translate(n,n,[e.x,e.y])):u.mat3.scale(n,n,[t,t]),r&&n[0]<r||i&&n[0]>i||(this.get("group").setMatrix(n),this.emit("viewportchange",{action:"zoom",matrix:n}),this.autoPaint());},e.zoomTo=function(t,e){var n=t/this.getZoom();this.zoom(n,e);},e.positionsAnimate=function(){var t=this;t.emit("beforeanimate");var e=t.get("animateCfg"),n=e.onFrame,r=t.getNodes(),i=r.map(function(t){var e=t.getModel();return {id:e.id,x:e.x,y:e.y};});t.isAnimating()&&t.stopAnimate(),t.get("canvas").animate({onFrame:function(e){u.each(i,function(r){var i=t.findById(r.id);if(i&&!i.destroyed){var a=i.get("originAttrs"),o=i.get("model");if(!a){var s=i.getContainer().getMatrix();a={x:s[6],y:s[7]},i.set("originAttrs",a);}if(n){var c=n(i,e,r,a);i.set("model",u.mix(o,c));}else o.x=a.x+(r.x-a.x)*e,o.y=a.y+(r.y-a.y)*e;}}),t.refreshPositions();}},e.duration,e.easing,function(){u.each(r,function(t){t.set("originAttrs",null);}),e.callback&&e.callback(),t.emit("afteranimate"),t.animating=!1;});},e.stopAnimate=function(){this.get("canvas").stopAnimate();},e.isAnimating=function(){return this.animating;},e.focusItem=function(t){this.get("viewController").focus(t),this.autoPaint();},e.getPointByClient=function(t,e){return this.get("viewController").getPointByClient(t,e);},e.getClientByPoint=function(t,e){return this.get("viewController").getClientByPoint(t,e);},e.getPointByCanvas=function(t,e){return this.get("viewController").getPointByCanvas(t,e);},e.getCanvasByPoint=function(t,e){return this.get("viewController").getCanvasByPoint(t,e);},e.showItem=function(t){this.get("itemController").changeItemVisibility(t,!0);},e.hideItem=function(t){this.get("itemController").changeItemVisibility(t,!1);},e.findById=function(t){return this.get("itemMap")[t];},e.find=function(t,e){var n,r=this.get(t+"s");return u.each(r,function(t,r){if(e(t,r))return n=t,!1;}),n;},e.findAll=function(t,e){var n=[];return u.each(this.get(t+"s"),function(t,r){e(t,r)&&n.push(t);}),n;},e.findAllByState=function(t,e){return this.findAll(t,function(t){return t.hasState(e);});},e.setAutoPaint=function(t){this.set("autoPaint",t);},e.toDataURL=function(){var t=this.get("canvas"),e=t.getRenderer(),n=t.get("el"),r="";if("svg"===e){var i=n.cloneNode(!0),a=document.implementation.createDocumentType("svg","-//W3C//DTD SVG 1.1//EN","http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"),o=document.implementation.createDocument("http://www.w3.org/2000/svg","svg",a);o.replaceChild(i,o.documentElement);var s=new XMLSerializer().serializeToString(o);r="data:image/svg+xml;charset=utf8,"+encodeURIComponent(s);}else"canvas"===e&&(r=n.toDataURL("image/png"));return r;},e.downloadImage=function(t){var e=this;e.isAnimating()&&e.stopAnimate();var n=e.get("canvas").getRenderer(),r=(t||"graph")+("svg"===n?".svg":".png"),i=document.createElement("a");setTimeout(function(){var t=e.toDataURL();if(window.Blob&&window.URL&&"svg"!==n){for(var a=t.split(","),o=a[0].match(/:(.*?);/)[1],s=atob(a[1]),u=s.length,c=new Uint8Array(u);u--;)c[u]=s.charCodeAt(u);var f=new Blob([c],{type:o});window.navigator.msSaveBlob?window.navigator.msSaveBlob(f,r):i.addEventListener("click",function(){i.download=r,i.href=window.URL.createObjectURL(f);});}else i.addEventListener("click",function(){i.download=r,i.href=t;});var h=document.createEvent("MouseEvents");h.initEvent("click",!1,!1),i.dispatchEvent(h);},16);},e.addPlugin=function(t){t.destroyed||(this.get("plugins").push(t),t.initPlugin(this));},e.removePlugin=function(t){var e=this.get("plugins"),n=e.indexOf(t);n>=0&&(t.destroyPlugin(),e.splice(n,1));},e.updateLayout=function(t){var e,n=this.get("layoutController");u.isString(t)?t={type:e=t}:e=t.type;var r=this.get("layout"),i=r?r.type:void 0;if(e&&i!==e)this.set("layout",t),n.changeLayout(e);else{var a={};u.mix(a,t),a.type=i||"random",n.updateLayoutCfg(a);}},e.layout=function(){var t=this.get("layoutController");t.layoutMethod?t.relayout():t.layout();},e.clear=function(){return this.get("canvas").clear(),this._initGroups(),this.set({itemMap:{},nodes:[],edges:[],groups:[]}),this;},e.destroy=function(){this.clear(),u.each(this.get("plugins"),function(t){t.destroyPlugin();}),this.get("eventController").destroy(),this.get("itemController").destroy(),this.get("modeController").destroy(),this.get("viewController").destroy(),this.get("stateController").destroy(),this.get("layoutController").destroy(),this.get("customGroupControll").destroy(),this.get("canvas").destroy(),this._cfg=null,this.destroyed=!0;},e.collapseGroup=function(t){this.get("customGroupControll").collapseGroup(t);},e.expandGroup=function(t){this.get("customGroupControll").expandGroup(t);},n;}(s);t.exports=h;},function(t,e,n){var r=n(1);t.exports={onMouseEnter:function(t){if(this.shouldBegin(t)){var e=t.item;this.currentTarget=e,this.showTooltip(t),this.graph.emit("tooltipchange",{item:t.item,action:"show"});}},onMouseMove:function(t){this.shouldUpdate(t)?this.currentTarget&&t.item===this.currentTarget&&this.updatePosition(t):this.hideTooltip();},onMouseLeave:function(t){this.shouldEnd(t)&&(this.hideTooltip(),this.graph.emit("tooltipchange",{item:this.currentTarget,action:"hide"}),this.currentTarget=null);},showTooltip:function(t){if(t.item){var e=this.container;e||(e=this._createTooltip(this.graph.get("canvas")),this.container=e);var n=this.formatText(t.item.get("model"),t);e.innerHTML=n,this.updatePosition(t),r.modifyCSS(this.container,{visibility:"visible"});}},hideTooltip:function(){r.modifyCSS(this.container,{visibility:"hidden"});},updatePosition:function(t){var e=this.width,n=this.height,i=this.container,a=t.canvasX,o=t.canvasY,s=i.getBoundingClientRect();a>e/2?a-=s.width:a+=12,o>n/2?o-=s.height:o+=12;var u=a+"px",c=o+"px";r.modifyCSS(this.container,{left:u,top:c,visibility:"visible"});},_createTooltip:function(t){var e=t.get("el");e.style.position="relative";var n=r.createDom('<div class="g6-tooltip g6-'+this.item+'-tooltip"></div>');return e.parentNode.appendChild(n),r.modifyCSS(n,{position:"absolute",visibility:"visible"}),this.width=t.get("width"),this.height=t.get("height"),this.container=n,n;}};},function(t,e,n){var r=n(1),i=n(226),a={"drag-canvas":n(225),"zoom-canvas":n(224),"drag-node":n(223),"click-select":n(222),tooltip:n(221),"edge-tooltip":n(220),"collapse-expand":n(219),"activate-relations":n(218),"brush-select":n(217),"drag-group":n(216),"drag-node-with-group":n(215),"collapse-expand-group":n(214)};r.each(a,function(t,e){i.registerBehavior(e,t);}),t.exports=i;},function(t,e,n){var r=n(5),i=n(23).Graph,a=n(52).slack;function o(t,e){return r.forEach(t.nodes(),function n(i){r.forEach(e.nodeEdges(i),function(r){var o=r.v,s=i===o?r.w:o;t.hasNode(s)||a(e,r)||(t.setNode(s,{}),t.setEdge(i,s,{}),n(s));});}),t.nodeCount();}function s(t,e){return r.minBy(e.edges(),function(n){if(t.hasNode(n.v)!==t.hasNode(n.w))return a(e,n);});}function u(t,e,n){r.forEach(t.nodes(),function(t){e.node(t).rank+=n;});}t.exports=function(t){var e,n,r=new i({directed:!1}),c=t.nodes()[0],f=t.nodeCount();r.setNode(c,{});for(;o(r,t)<f;)e=s(r,t),n=r.hasNode(e.v)?a(t,e):-a(t,e),u(r,t,n);return r;};},function(t,e){t.exports=function(t,e){return t<e;};},function(t,e){t.exports=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e];};},function(t,e,n){var r=n(62),i=n(38);t.exports=function(t,e,n){(void 0===n||i(t[e],n))&&(void 0!==n||e in t)||r(t,e,n);};},function(t,e,n){var r=n(81);t.exports=function(t){return null!=t&&t.length?r(t,1):[];};},function(t,e,n){var r=n(283),i=1/0,a=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*a:t==t?t:0:0===t?t:0;};},function(t,e,n){var r=n(19);t.exports=function(t,e,n){r.isArray(e)||(e=[e]);var i=(t.isDirected()?t.successors:t.neighbors).bind(t),a=[],o={};return r.each(e,function(e){if(!t.hasNode(e))throw new Error("Graph does not have node: "+e);!function t(e,n,i,a,o,s){r.has(a,n)||(a[n]=!0,i||s.push(n),r.each(o(n),function(n){t(e,n,i,a,o,s);}),i&&s.push(n));}(t,e,"post"===n,o,i,a);}),a;};},function(t,e,n){var r=n(19);function i(t){var e={},n={},i=[];if(r.each(t.sinks(),function o(s){if(r.has(n,s))throw new a();r.has(e,s)||(n[s]=!0,e[s]=!0,r.each(t.predecessors(s),o),delete n[s],i.push(s));}),r.size(e)!==t.nodeCount())throw new a();return i;}function a(){}t.exports=i,i.CycleException=a,a.prototype=new Error();},function(t,e,n){var r=n(19);t.exports=function(t){var e=0,n=[],i={},a=[];return t.nodes().forEach(function(o){r.has(i,o)||function o(s){var u=i[s]={onStack:!0,lowlink:e,index:e++};if(n.push(s),t.successors(s).forEach(function(t){r.has(i,t)?i[t].onStack&&(u.lowlink=Math.min(u.lowlink,i[t].index)):(o(t),u.lowlink=Math.min(u.lowlink,i[t].lowlink));}),u.lowlink===u.index){var c,f=[];do{c=n.pop(),i[c].onStack=!1,f.push(c);}while(s!==c);a.push(f);}}(o);}),a;};},function(t,e,n){var r=n(19);function i(){this._arr=[],this._keyIndices={};}t.exports=i,i.prototype.size=function(){return this._arr.length;},i.prototype.keys=function(){return this._arr.map(function(t){return t.key;});},i.prototype.has=function(t){return r.has(this._keyIndices,t);},i.prototype.priority=function(t){var e=this._keyIndices[t];if(void 0!==e)return this._arr[e].priority;},i.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key;},i.prototype.add=function(t,e){var n=this._keyIndices;if(t=String(t),!r.has(n,t)){var i=this._arr,a=i.length;return n[t]=a,i.push({key:t,priority:e}),this._decrease(a),!0;}return !1;},i.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var t=this._arr.pop();return delete this._keyIndices[t.key],this._heapify(0),t.key;},i.prototype.decrease=function(t,e){var n=this._keyIndices[t];if(e>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+t+" Old: "+this._arr[n].priority+" New: "+e);this._arr[n].priority=e,this._decrease(n);},i.prototype._heapify=function(t){var e=this._arr,n=2*t,r=n+1,i=t;n<e.length&&(i=e[n].priority<e[i].priority?n:i,r<e.length&&(i=e[r].priority<e[i].priority?r:i),i!==t&&(this._swap(t,i),this._heapify(i)));},i.prototype._decrease=function(t){for(var e,n=this._arr,r=n[t].priority;0!==t&&!(n[e=t>>1].priority<r);)this._swap(t,e),t=e;},i.prototype._swap=function(t,e){var n=this._arr,r=this._keyIndices,i=n[t],a=n[e];n[t]=a,n[e]=i,r[a.key]=t,r[i.key]=e;};},function(t,e,n){var r=n(19),i=n(124);t.exports=function(t,e,n,r){return function(t,e,n,r){var a,o,s={},u=new i(),c=function(t){var e=t.v!==a?t.v:t.w,r=s[e],i=n(t),c=o.distance+i;if(i<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+t+" Weight: "+i);c<r.distance&&(r.distance=c,r.predecessor=a,u.decrease(e,c));};t.nodes().forEach(function(t){var n=t===e?0:Number.POSITIVE_INFINITY;s[t]={distance:n},u.add(t,n);});for(;u.size()>0&&(a=u.removeMin(),(o=s[a]).distance!==Number.POSITIVE_INFINITY);)r(a).forEach(c);return s;}(t,String(e),n||a,r||function(e){return t.outEdges(e);});};var a=r.constant(1);},function(t,e,n){var r=n(302),i=n(29);t.exports=function(t){return null==t?[]:r(t,i(t));};},function(t,e,n){var r=n(28),i=n(25);t.exports=function(t){return i(t)&&r(t);};},function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return -1;};},function(t,e,n){var r=n(312),i=n(311)(r);t.exports=i;},function(t,e,n){var r=n(313),i=Math.max;t.exports=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var a=arguments,o=-1,s=i(a.length-e,0),u=Array(s);++o<s;)u[o]=a[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=a[o];return c[e]=n(u),r(t,this,c);};};},function(t,e,n){var r=n(324),i=n(57),a=n(27),o=n(323),s=n(6);t.exports=function(t,e,n){var u=s(t)?r:o,c=arguments.length<3;return u(t,a(e,4),n,c,i);};},function(t,e,n){var r=n(57),i=n(28);t.exports=function(t,e){var n=-1,a=i(t)?Array(t.length):[];return r(t,function(t,r,i){a[++n]=e(t,r,i);}),a;};},function(t,e,n){var r=n(55),i=n(27),a=n(132),o=n(6);t.exports=function(t,e){return (o(t)?r:a)(t,i(e,3));};},function(t,e){t.exports=function(t){return void 0===t;};},function(t,e,n){var r=n(326),i=n(137);t.exports=function(t,e){return null!=t&&i(t,e,r);};},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t];};};},function(t,e,n){var r=n(56),i=n(46),a=n(6),o=n(61),s=n(93),u=n(44);t.exports=function(t,e,n){for(var c=-1,f=(e=r(e,t)).length,h=!1;++c<f;){var l=u(e[c]);if(!(h=null!=t&&n(t,l)))break;t=t[l];}return h||++c!=f?h:!!(f=null==t?0:t.length)&&s(f)&&o(l,f)&&(a(t)||i(t));};},function(t,e,n){var r=n(329),i=n(137);t.exports=function(t,e){return null!=t&&i(t,e,r);};},function(t,e,n){var r=n(330);t.exports=function(t){return null==t?"":r(t);};},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n));};};},function(t,e,n){var r=n(18);t.exports=function(t){return t==t&&!r(t);};},function(t,e){t.exports=function(t,e){return t.has(e);};},function(t,e,n){var r=n(95),i=n(342),a=n(341);function o(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r();++e<n;)this.add(t[e]);}o.prototype.add=o.prototype.push=i,o.prototype.has=a,t.exports=o;},function(t,e,n){var r=n(143),i=n(340),a=n(142),o=1,s=2;t.exports=function(t,e,n,u,c,f){var h=n&o,l=t.length,d=e.length;if(l!=d&&!(h&&d>l))return !1;var p=f.get(t);if(p&&f.get(e))return p==e;var g=-1,v=!0,m=n&s?new r():void 0;for(f.set(t,e),f.set(e,t);++g<l;){var y=t[g],x=e[g];if(u)var b=h?u(x,y,g,e,t,f):u(y,x,g,t,e,f);if(void 0!==b){if(b)continue;v=!1;break;}if(m){if(!i(e,function(t,e){if(!a(m,e)&&(y===t||c(y,t,n,u,f)))return m.push(e);})){v=!1;break;}}else if(y!==x&&!c(y,x,n,u,f)){v=!1;break;}}return f.delete(t),f.delete(e),v;};},function(t,e,n){var r=n(343),i=n(25);t.exports=function t(e,n,a,o,s){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,a,o,t,s));};},function(t,e,n){var r=n(159),i=n(346),a=n(27),o=n(6);t.exports=function(t,e){return (o(t)?r:i)(t,a(e,3));};},function(t,e,n){var r=n(30);t.exports=function(t){return "function"==typeof t?t:r;};},function(t,e,n){var r=n(94),i=n(57),a=n(147),o=n(6);t.exports=function(t,e){return (o(t)?r:i)(t,a(e));};},function(t,e,n){t.exports=n(148);},function(t,e,n){var r=n(18),i=Object.create,a=function(){function t(){}return function(e){if(!r(e))return {};if(i)return i(e);t.prototype=e;var n=new t();return t.prototype=void 0,n;};}();t.exports=a;},function(t,e,n){var r=n(150),i=n(58),a=n(59);t.exports=function(t){return "function"!=typeof t.constructor||a(t)?{}:r(i(t));};},function(t,e,n){var r=n(88);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length);};},function(t,e,n){var r=n(22).Uint8Array;t.exports=r;},function(t,e,n){var r=n(32)(n(22),"Set");t.exports=r;},function(t,e,n){var r=n(89),i=n(6);t.exports=function(t,e,n){var a=e(t);return i(t)?a:r(a,n(t));};},function(t,e,n){var r=n(155),i=n(90),a=n(29);t.exports=function(t){return r(t,a,i);};},function(t,e,n){var r=n(89),i=n(58),a=n(90),o=n(158),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,a(t)),t=i(t);return e;}:o;t.exports=s;},function(t,e){t.exports=function(){return [];};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o);}return a;};},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e;};},function(t,e,n){(function(t){var r=n(22),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i?r.Buffer:void 0,s=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=s?s(n):new t.constructor(n);return t.copy(r),r;};}).call(this,n(69)(t));},function(t,e){t.exports=function(t,e){return function(n){return t(e(n));};};},function(t,e,n){var r=n(371),i=n(46),a=n(6),o=n(36),s=n(61),u=n(45),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),f=!n&&i(t),h=!n&&!f&&o(t),l=!n&&!f&&!h&&u(t),d=n||f||h||l,p=d?r(t.length,String):[],g=p.length;for(var v in t)!e&&!c.call(t,v)||d&&("length"==v||h&&("offset"==v||"parent"==v)||l&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,g))||p.push(v);return p;};},function(t,e,n){var r=n(32),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t;}catch(t){}}();t.exports=i;},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t);}catch(t){}try{return t+"";}catch(t){}}return "";};},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n;}).call(this,n(98));},function(t,e,n){var r=n(68),i=n(94),a=n(63),o=n(372),s=n(366),u=n(161),c=n(160),f=n(363),h=n(362),l=n(156),d=n(361),p=n(34),g=n(357),v=n(356),m=n(151),y=n(6),x=n(36),b=n(352),w=n(18),_=n(350),M=n(29),S=1,P=2,A=4,k="[object Arguments]",C="[object Function]",E="[object GeneratorFunction]",I="[object Object]",N={};N[k]=N["[object Array]"]=N["[object ArrayBuffer]"]=N["[object DataView]"]=N["[object Boolean]"]=N["[object Date]"]=N["[object Float32Array]"]=N["[object Float64Array]"]=N["[object Int8Array]"]=N["[object Int16Array]"]=N["[object Int32Array]"]=N["[object Map]"]=N["[object Number]"]=N[I]=N["[object RegExp]"]=N["[object Set]"]=N["[object String]"]=N["[object Symbol]"]=N["[object Uint8Array]"]=N["[object Uint8ClampedArray]"]=N["[object Uint16Array]"]=N["[object Uint32Array]"]=!0,N["[object Error]"]=N[C]=N["[object WeakMap]"]=!1,t.exports=function t(e,n,T,O,j,B){var L,D=n&S,R=n&P,F=n&A;if(T&&(L=j?T(e,O,j,B):T(e)),void 0!==L)return L;if(!w(e))return e;var Y=y(e);if(Y){if(L=g(e),!D)return c(e,L);}else{var z=p(e),q=z==C||z==E;if(x(e))return u(e,D);if(z==I||z==k||q&&!j){if(L=R||q?{}:m(e),!D)return R?h(e,s(L,e)):f(e,o(L,e));}else{if(!N[z])return j?e:{};L=v(e,z,D);}}B||(B=new r());var X=B.get(e);if(X)return X;B.set(e,L),_(e)?e.forEach(function(r){L.add(t(r,n,T,r,e,B));}):b(e)&&e.forEach(function(r,i){L.set(i,t(r,n,T,i,e,B));});var G=F?R?d:l:R?keysIn:M,W=Y?void 0:G(e);return i(W||e,function(r,i){W&&(r=e[i=r]),a(L,i,t(r,n,T,i,e,B));}),L;};},function(module,exports,__webpack_require__){(function(global){var numeric=exports;void 0!==global&&(global.numeric=numeric),numeric.version="1.2.6",numeric.bench=function(t,e){var n,r,i;for(void 0===e&&(e=15),r=.5,n=new Date();;){for(i=r*=2;i>3;i-=4)t(),t(),t(),t();for(;i>0;)t(),i--;if(new Date()-n>e)break;}for(i=r;i>3;i-=4)t(),t(),t(),t();for(;i>0;)t(),i--;return 1e3*(3*r-1)/(new Date()-n);},numeric._myIndexOf=function(t){var e,n=this.length;for(e=0;e<n;++e)if(this[e]===t)return e;return -1;},numeric.myIndexOf=Array.prototype.indexOf?Array.prototype.indexOf:numeric._myIndexOf,numeric.Function=Function,numeric.precision=4,numeric.largeArray=50,numeric.prettyPrint=function(t){var e=[];return function t(n){var r;if(void 0===n)return e.push(Array(numeric.precision+8).join(" ")),!1;if("string"==typeof n)return e.push('"'+n+'"'),!1;if("boolean"==typeof n)return e.push(n.toString()),!1;if("number"==typeof n){var i=function t(e){if(0===e)return "0";if(isNaN(e))return "NaN";if(e<0)return "-"+t(-e);if(isFinite(e)){var n=Math.floor(Math.log(e)/Math.log(10)),r=e/Math.pow(10,n),i=r.toPrecision(numeric.precision);return 10===parseFloat(i)&&(n++,i=(r=1).toPrecision(numeric.precision)),parseFloat(i).toString()+"e"+n.toString();}return "Infinity";}(n),a=n.toPrecision(numeric.precision),o=parseFloat(n.toString()).toString(),s=[i,a,o,parseFloat(a).toString(),parseFloat(o).toString()];for(r=1;r<s.length;r++)s[r].length<i.length&&(i=s[r]);return e.push(Array(numeric.precision+8-i.length).join(" ")+i),!1;}if(null===n)return e.push("null"),!1;if("function"==typeof n){e.push(n.toString());var u=!1;for(r in n)n.hasOwnProperty(r)&&(u?e.push(",\n"):e.push("\n{"),u=!0,e.push(r),e.push(": \n"),t(n[r]));return u&&e.push("}\n"),!0;}if(n instanceof Array){if(n.length>numeric.largeArray)return e.push("...Large Array..."),!0;for(u=!1,e.push("["),r=0;r<n.length;r++)r>0&&(e.push(","),u&&e.push("\n ")),u=t(n[r]);return e.push("]"),!0;}e.push("{");u=!1;for(r in n)n.hasOwnProperty(r)&&(u&&e.push(",\n"),u=!0,e.push(r),e.push(": \n"),t(n[r]));return e.push("}"),!0;}(t),e.join("");},numeric.parseDate=function(t){return function t(e){if("string"==typeof e)return Date.parse(e.replace(/-/g,"/"));if(!(e instanceof Array))throw new Error("parseDate: parameter must be arrays of strings");var n,r=[];for(n=0;n<e.length;n++)r[n]=t(e[n]);return r;}(t);},numeric.parseFloat=function(t){return function t(e){if("string"==typeof e)return parseFloat(e);if(!(e instanceof Array))throw new Error("parseFloat: parameter must be arrays of strings");var n,r=[];for(n=0;n<e.length;n++)r[n]=t(e[n]);return r;}(t);},numeric.parseCSV=function(t){var e,n,r=t.split("\n"),i=[],a=/(([^'",]*)|('[^']*')|("[^"]*")),/g,o=/^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,s=function(t){return t.substr(0,t.length-1);},u=0;for(n=0;n<r.length;n++){var c,f=(r[n]+",").match(a);if(f.length>0){for(i[u]=[],e=0;e<f.length;e++)c=s(f[e]),o.test(c)?i[u][e]=parseFloat(c):i[u][e]=c;u++;}}return i;},numeric.toCSV=function(t){var e,n,r,i,a,o=numeric.dim(t);for(r=o[0],o[1],a=[],e=0;e<r;e++){for(i=[],n=0;n<r;n++)i[n]=t[e][n].toString();a[e]=i.join(", ");}return a.join("\n")+"\n";},numeric.getURL=function(t){var e=new XMLHttpRequest();return e.open("GET",t,!1),e.send(),e;},numeric.imageURL=function(t){function e(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.length);var r,i=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],a=-1;t.length;for(r=e;r<n;r++)a=a>>>8^i[255&(a^t[r])];return -1^a;}var n,r,i,a,o,s,u,c,f,h,l=t[0].length,d=t[0][0].length,p=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,d>>24&255,d>>16&255,d>>8&255,255&d,l>>24&255,l>>16&255,l>>8&255,255&l,8,2,0,0,0,-1,-2,-3,-4,-5,-6,-7,-8,73,68,65,84,8,29];for(h=e(p,12,29),p[29]=h>>24&255,p[30]=h>>16&255,p[31]=h>>8&255,p[32]=255&h,n=1,r=0,u=0;u<l;u++){for(u<l-1?p.push(0):p.push(1),o=3*d+1+(0===u)&255,s=3*d+1+(0===u)>>8&255,p.push(o),p.push(s),p.push(255&~o),p.push(255&~s),0===u&&p.push(0),c=0;c<d;c++)for(i=0;i<3;i++)r=(r+(n=(n+(o=(o=t[i][u][c])>255?255:o<0?0:Math.round(o)))%65521))%65521,p.push(o);p.push(0);}return f=(r<<16)+n,p.push(f>>24&255),p.push(f>>16&255),p.push(f>>8&255),p.push(255&f),a=p.length-41,p[33]=a>>24&255,p[34]=a>>16&255,p[35]=a>>8&255,p[36]=255&a,h=e(p,37),p.push(h>>24&255),p.push(h>>16&255),p.push(h>>8&255),p.push(255&h),p.push(0),p.push(0),p.push(0),p.push(0),p.push(73),p.push(69),p.push(78),p.push(68),p.push(174),p.push(66),p.push(96),p.push(130),"data:image/png;base64,"+function(t){var e,n,r,i,a,o,s,u=t.length,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";for(e=0;e<u;e+=3)a=((3&(n=t[e]))<<4)+((r=t[e+1])>>4),o=((15&r)<<2)+((i=t[e+2])>>6),s=63&i,e+1>=u?o=s=64:e+2>=u&&(s=64),f+=c.charAt(n>>2)+c.charAt(a)+c.charAt(o)+c.charAt(s);return f;}(p);},numeric._dim=function(t){for(var e=[];"object"==typeof t;)e.push(t.length),t=t[0];return e;},numeric.dim=function(t){var e;return "object"==typeof t?"object"==typeof(e=t[0])?"object"==typeof e[0]?numeric._dim(t):[t.length,e.length]:[t.length]:[];},numeric.mapreduce=function(t,e){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+e+';\nif(typeof x === "number") { var xi = x; '+t+'; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    '+t+";\n    xi = x[i-1];\n    "+t+";\n}\nif(i === 0) {\n    xi = x[i];\n    "+t+"\n}\nreturn accum;");},numeric.mapreduce2=function(t,e){return Function("x","var n = x.length;\nvar i,xi;\n"+e+";\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    "+t+";\n}\nreturn accum;");},numeric.same=function t(e,n){var r,i;if(!(e instanceof Array&&n instanceof Array))return !1;if((i=e.length)!==n.length)return !1;for(r=0;r<i;r++)if(e[r]!==n[r]){if("object"!=typeof e[r])return !1;if(!t(e[r],n[r]))return !1;}return !0;},numeric.rep=function(t,e,n){void 0===n&&(n=0);var r,i=t[n],a=Array(i);if(n===t.length-1){for(r=i-2;r>=0;r-=2)a[r+1]=e,a[r]=e;return -1===r&&(a[0]=e),a;}for(r=i-1;r>=0;r--)a[r]=numeric.rep(t,e,n+1);return a;},numeric.dotMMsmall=function(t,e){var n,r,i,a,o,s,u,c,f,h,l;for(a=t.length,o=e.length,s=e[0].length,u=Array(a),n=a-1;n>=0;n--){for(c=Array(s),f=t[n],i=s-1;i>=0;i--){for(h=f[o-1]*e[o-1][i],r=o-2;r>=1;r-=2)l=r-1,h+=f[r]*e[r][i]+f[l]*e[l][i];0===r&&(h+=f[0]*e[0][i]),c[i]=h;}u[n]=c;}return u;},numeric._getCol=function(t,e,n){var r;for(r=t.length-1;r>0;--r)n[r]=t[r][e],n[--r]=t[r][e];0===r&&(n[0]=t[0][e]);},numeric.dotMMbig=function(t,e){var n,r,i,a=numeric._getCol,o=e.length,s=Array(o),u=t.length,c=e[0].length,f=new Array(u),h=numeric.dotVV;for(--o,r=--u;-1!==r;--r)f[r]=Array(c);for(r=--c;-1!==r;--r)for(a(e,r,s),i=u;-1!==i;--i)n=t[i],f[i][r]=h(n,s);return f;},numeric.dotMV=function(t,e){var n,r=t.length,i=(e.length,Array(r)),a=numeric.dotVV;for(n=r-1;n>=0;n--)i[n]=a(t[n],e);return i;},numeric.dotVM=function(t,e){var n,r,i,a,o,s,u;for(i=t.length,a=e[0].length,o=Array(a),r=a-1;r>=0;r--){for(s=t[i-1]*e[i-1][r],n=i-2;n>=1;n-=2)u=n-1,s+=t[n]*e[n][r]+t[u]*e[u][r];0===n&&(s+=t[0]*e[0][r]),o[r]=s;}return o;},numeric.dotVV=function(t,e){var n,r,i=t.length,a=t[i-1]*e[i-1];for(n=i-2;n>=1;n-=2)r=n-1,a+=t[n]*e[n]+t[r]*e[r];return 0===n&&(a+=t[0]*e[0]),a;},numeric.dot=function(t,e){var n=numeric.dim;switch(1e3*n(t).length+n(e).length){case 2002:return e.length<10?numeric.dotMMsmall(t,e):numeric.dotMMbig(t,e);case 2001:return numeric.dotMV(t,e);case 1002:return numeric.dotVM(t,e);case 1001:return numeric.dotVV(t,e);case 1e3:return numeric.mulVS(t,e);case 1:return numeric.mulSV(t,e);case 0:return t*e;default:throw new Error("numeric.dot only works on vectors and matrices");}},numeric.diag=function(t){var e,n,r,i,a=t.length,o=Array(a);for(e=a-1;e>=0;e--){for(i=Array(a),n=e+2,r=a-1;r>=n;r-=2)i[r]=0,i[r-1]=0;for(r>e&&(i[r]=0),i[e]=t[e],r=e-1;r>=1;r-=2)i[r]=0,i[r-1]=0;0===r&&(i[0]=0),o[e]=i;}return o;},numeric.getDiag=function(t){var e,n=Math.min(t.length,t[0].length),r=Array(n);for(e=n-1;e>=1;--e)r[e]=t[e][e],r[--e]=t[e][e];return 0===e&&(r[0]=t[0][0]),r;},numeric.identity=function(t){return numeric.diag(numeric.rep([t],1));},numeric.pointwise=function(t,e,n){void 0===n&&(n="");var r,i,a=[],o=/\[i\]$/,s="",u=!1;for(r=0;r<t.length;r++)o.test(t[r])?s=i=t[r].substring(0,t[r].length-3):i=t[r],"ret"===i&&(u=!0),a.push(i);return a[t.length]="_s",a[t.length+1]="_k",a[t.length+2]='if(typeof _s === "undefined") _s = numeric.dim('+s+');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i'+(u?"":", ret = Array(_n)")+";\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee("+t.join(",")+",_s,_k+1);\n    return ret;\n}\n"+n+"\nfor(i=_n-1;i!==-1;--i) {\n    "+e+"\n}\nreturn ret;",Function.apply(null,a);},numeric.pointwise2=function(t,e,n){void 0===n&&(n="");var r,i,a=[],o=/\[i\]$/,s="",u=!1;for(r=0;r<t.length;r++)o.test(t[r])?s=i=t[r].substring(0,t[r].length-3):i=t[r],"ret"===i&&(u=!0),a.push(i);return a[t.length]="var _n = "+s+".length;\nvar i"+(u?"":", ret = Array(_n)")+";\n"+n+"\nfor(i=_n-1;i!==-1;--i) {\n"+e+"\n}\nreturn ret;",Function.apply(null,a);},numeric._biforeach=function t(e,n,r,i,a){var o;if(i!==r.length-1)for(o=r[i]-1;o>=0;o--)t("object"==typeof e?e[o]:e,"object"==typeof n?n[o]:n,r,i+1,a);else a(e,n);},numeric._biforeach2=function t(e,n,r,i,a){if(i===r.length-1)return a(e,n);var o,s=r[i],u=Array(s);for(o=s-1;o>=0;--o)u[o]=t("object"==typeof e?e[o]:e,"object"==typeof n?n[o]:n,r,i+1,a);return u;},numeric._foreach=function t(e,n,r,i){var a;if(r!==n.length-1)for(a=n[r]-1;a>=0;a--)t(e[a],n,r+1,i);else i(e);},numeric._foreach2=function t(e,n,r,i){if(r===n.length-1)return i(e);var a,o=n[r],s=Array(o);for(a=o-1;a>=0;a--)s[a]=t(e[a],n,r+1,i);return s;},numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"},numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="},numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"],numeric.mathfuns2=["atan2","pow","max","min"],numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""},numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]},function(){var t,e;for(t=0;t<numeric.mathfuns2.length;++t)e=numeric.mathfuns2[t],numeric.ops2[e]=e;for(t in numeric.ops2)if(numeric.ops2.hasOwnProperty(t)){e=numeric.ops2[t];var n,r,i="";-1!==numeric.myIndexOf.call(numeric.mathfuns2,t)?(i="var "+e+" = Math."+e+";\n",n=function(t,n,r){return t+" = "+e+"("+n+","+r+")";},r=function(t,n){return t+" = "+e+"("+t+","+n+")";}):(n=function(t,n,r){return t+" = "+n+" "+e+" "+r;},r=numeric.opseq.hasOwnProperty(t+"eq")?function(t,n){return t+" "+e+"= "+n;}:function(t,n){return t+" = "+t+" "+e+" "+n;}),numeric[t+"VV"]=numeric.pointwise2(["x[i]","y[i]"],n("ret[i]","x[i]","y[i]"),i),numeric[t+"SV"]=numeric.pointwise2(["x","y[i]"],n("ret[i]","x","y[i]"),i),numeric[t+"VS"]=numeric.pointwise2(["x[i]","y"],n("ret[i]","x[i]","y"),i),numeric[t]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric."+t+"VV, VS = numeric."+t+"VS, SV = numeric."+t+'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else '+r("x","y")+"\n}\nreturn x;\n"),numeric[e]=numeric[t],numeric[t+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],r("ret[i]","x[i]"),i),numeric[t+"eqS"]=numeric.pointwise2(["ret[i]","x"],r("ret[i]","x"),i),numeric[t+"eq"]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric."+t+"eqV, S = numeric."+t+'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n');}for(t=0;t<numeric.mathfuns2.length;++t)e=numeric.mathfuns2[t],delete numeric.ops2[e];for(t=0;t<numeric.mathfuns.length;++t)e=numeric.mathfuns[t],numeric.ops1[e]=e;for(t in numeric.ops1)numeric.ops1.hasOwnProperty(t)&&(i="",e=numeric.ops1[t],-1!==numeric.myIndexOf.call(numeric.mathfuns,t)&&Math.hasOwnProperty(e)&&(i="var "+e+" = Math."+e+";\n"),numeric[t+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+e+"(ret[i]);",i),numeric[t+"eq"]=Function("x",'if(typeof x !== "object") return '+e+"x\nvar i;\nvar V = numeric."+t+"eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n"),numeric[t+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+e+"(x[i]);",i),numeric[t]=Function("x",'if(typeof x !== "object") return '+e+"(x)\nvar i;\nvar V = numeric."+t+"V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n"));for(t=0;t<numeric.mathfuns.length;++t)e=numeric.mathfuns[t],delete numeric.ops1[e];for(t in numeric.mapreducers)numeric.mapreducers.hasOwnProperty(t)&&(e=numeric.mapreducers[t],numeric[t+"V"]=numeric.mapreduce2(e[0],e[1]),numeric[t]=Function("x","s","k",e[1]+'if(typeof x !== "object") {    xi = x;\n'+e[0]+';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.'+t+"V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n"+e[0]+";\n}\nreturn accum;\n"));}(),numeric.truncVV=numeric.pointwise(["x[i]","y[i]"],"ret[i] = round(x[i]/y[i])*y[i];","var round = Math.round;"),numeric.truncVS=numeric.pointwise(["x[i]","y"],"ret[i] = round(x[i]/y)*y;","var round = Math.round;"),numeric.truncSV=numeric.pointwise(["x","y[i]"],"ret[i] = round(x/y[i])*y[i];","var round = Math.round;"),numeric.trunc=function(t,e){return "object"==typeof t?"object"==typeof e?numeric.truncVV(t,e):numeric.truncVS(t,e):"object"==typeof e?numeric.truncSV(t,e):Math.round(t/e)*e;},numeric.inv=function(t){var e,n,r,i,a,o,s,u=numeric.dim(t),c=Math.abs,f=u[0],h=u[1],l=numeric.clone(t),d=numeric.identity(f);for(o=0;o<h;++o){var p=-1,g=-1;for(a=o;a!==f;++a)(s=c(l[a][o]))>g&&(p=a,g=s);for(n=l[p],l[p]=l[o],l[o]=n,i=d[p],d[p]=d[o],d[o]=i,t=n[o],s=o;s!==h;++s)n[s]/=t;for(s=h-1;-1!==s;--s)i[s]/=t;for(a=f-1;-1!==a;--a)if(a!==o){for(e=l[a],r=d[a],t=e[o],s=o+1;s!==h;++s)e[s]-=n[s]*t;for(s=h-1;s>0;--s)r[s]-=i[s]*t,r[--s]-=i[s]*t;0===s&&(r[0]-=i[0]*t);}}return d;},numeric.det=function(t){var e=numeric.dim(t);if(2!==e.length||e[0]!==e[1])throw new Error("numeric: det() only works on square matrices");var n,r,i,a,o,s,u,c,f=e[0],h=1,l=numeric.clone(t);for(r=0;r<f-1;r++){for(i=r,n=r+1;n<f;n++)Math.abs(l[n][r])>Math.abs(l[i][r])&&(i=n);for(i!==r&&(u=l[i],l[i]=l[r],l[r]=u,h*=-1),a=l[r],n=r+1;n<f;n++){for(s=(o=l[n])[r]/a[r],i=r+1;i<f-1;i+=2)c=i+1,o[i]-=a[i]*s,o[c]-=a[c]*s;i!==f&&(o[i]-=a[i]*s);}if(0===a[r])return 0;h*=a[r];}return h*l[r][r];},numeric.transpose=function(t){var e,n,r,i,a,o=t.length,s=t[0].length,u=Array(s);for(n=0;n<s;n++)u[n]=Array(o);for(e=o-1;e>=1;e-=2){for(i=t[e],r=t[e-1],n=s-1;n>=1;--n)(a=u[n])[e]=i[n],a[e-1]=r[n],(a=u[--n])[e]=i[n],a[e-1]=r[n];0===n&&((a=u[0])[e]=i[0],a[e-1]=r[0]);}if(0===e){for(r=t[0],n=s-1;n>=1;--n)u[n][0]=r[n],u[--n][0]=r[n];0===n&&(u[0][0]=r[0]);}return u;},numeric.negtranspose=function(t){var e,n,r,i,a,o=t.length,s=t[0].length,u=Array(s);for(n=0;n<s;n++)u[n]=Array(o);for(e=o-1;e>=1;e-=2){for(i=t[e],r=t[e-1],n=s-1;n>=1;--n)(a=u[n])[e]=-i[n],a[e-1]=-r[n],(a=u[--n])[e]=-i[n],a[e-1]=-r[n];0===n&&((a=u[0])[e]=-i[0],a[e-1]=-r[0]);}if(0===e){for(r=t[0],n=s-1;n>=1;--n)u[n][0]=-r[n],u[--n][0]=-r[n];0===n&&(u[0][0]=-r[0]);}return u;},numeric._random=function t(e,n){var r,i,a=e[n],o=Array(a);if(n===e.length-1){for(i=Math.random,r=a-1;r>=1;r-=2)o[r]=i(),o[r-1]=i();return 0===r&&(o[0]=i()),o;}for(r=a-1;r>=0;r--)o[r]=t(e,n+1);return o;},numeric.random=function(t){return numeric._random(t,0);},numeric.norm2=function(t){return Math.sqrt(numeric.norm2Squared(t));},numeric.linspace=function(t,e,n){if(void 0===n&&(n=Math.max(Math.round(e-t)+1,1)),n<2)return 1===n?[t]:[];var r,i=Array(n);for(r=--n;r>=0;r--)i[r]=(r*e+(n-r)*t)/n;return i;},numeric.getBlock=function(t,e,n){var r=numeric.dim(t);return function t(i,a){var o,s=e[a],u=n[a]-s,c=Array(u);if(a===r.length-1){for(o=u;o>=0;o--)c[o]=i[o+s];return c;}for(o=u;o>=0;o--)c[o]=t(i[o+s],a+1);return c;}(t,0);},numeric.setBlock=function(t,e,n,r){var i=numeric.dim(t);return function t(r,a,o){var s,u=e[o],c=n[o]-u;if(o===i.length-1)for(s=c;s>=0;s--)r[s+u]=a[s];for(s=c;s>=0;s--)t(r[s+u],a[s],o+1);}(t,r,0),t;},numeric.getRange=function(t,e,n){var r,i,a,o,s=e.length,u=n.length,c=Array(s);for(r=s-1;-1!==r;--r)for(c[r]=Array(u),a=c[r],o=t[e[r]],i=u-1;-1!==i;--i)a[i]=o[n[i]];return c;},numeric.blockMatrix=function(t){var e=numeric.dim(t);if(e.length<4)return numeric.blockMatrix([t]);var n,r,i,a,o,s=e[0],u=e[1];for(n=0,r=0,i=0;i<s;++i)n+=t[i][0].length;for(a=0;a<u;++a)r+=t[0][a][0].length;var c=Array(n);for(i=0;i<n;++i)c[i]=Array(r);var f,h,l,d,p,g=0;for(i=0;i<s;++i){for(f=r,a=u-1;-1!==a;--a)for(f-=(o=t[i][a])[0].length,l=o.length-1;-1!==l;--l)for(p=o[l],h=c[g+l],d=p.length-1;-1!==d;--d)h[f+d]=p[d];g+=t[i][0].length;}return c;},numeric.tensor=function(t,e){if("number"==typeof t||"number"==typeof e)return numeric.mul(t,e);var n=numeric.dim(t),r=numeric.dim(e);if(1!==n.length||1!==r.length)throw new Error("numeric: tensor product is only defined for vectors");var i,a,o,s,u=n[0],c=r[0],f=Array(u);for(a=u-1;a>=0;a--){for(i=Array(c),s=t[a],o=c-1;o>=3;--o)i[o]=s*e[o],i[--o]=s*e[o],i[--o]=s*e[o],i[--o]=s*e[o];for(;o>=0;)i[o]=s*e[o],--o;f[a]=i;}return f;},numeric.T=function(t,e){this.x=t,this.y=e;},numeric.t=function(t,e){return new numeric.T(t,e);},numeric.Tbinop=function(t,e,n,r,i){var a;numeric.indexOf;if("string"!=typeof i)for(a in i="",numeric)numeric.hasOwnProperty(a)&&(t.indexOf(a)>=0||e.indexOf(a)>=0||n.indexOf(a)>=0||r.indexOf(a)>=0)&&a.length>1&&(i+="var "+a+" = numeric."+a+";\n");return Function(["y"],"var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n"+i+"\nif(x.y) {  if(y.y) {    return new numeric.T("+r+");\n  }\n  return new numeric.T("+n+");\n}\nif(y.y) {\n  return new numeric.T("+e+");\n}\nreturn new numeric.T("+t+");\n");},numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)"),numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)"),numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),numeric.T.prototype.reciprocal=function(){var t=numeric.mul,e=numeric.div;if(this.y){var n=numeric.add(t(this.x,this.x),t(this.y,this.y));return new numeric.T(e(this.x,n),e(numeric.neg(this.y),n));}return new T(e(1,this.x));},numeric.T.prototype.div=function(t){if(t instanceof numeric.T||(t=new numeric.T(t)),t.y)return this.mul(t.reciprocal());var e=numeric.div;return this.y?new numeric.T(e(this.x,t.x),e(this.y,t.x)):new numeric.T(e(this.x,t.x));},numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),numeric.T.prototype.transpose=function(){var t=numeric.transpose,e=this.x,n=this.y;return n?new numeric.T(t(e),t(n)):new numeric.T(t(e));},numeric.T.prototype.transjugate=function(){var t=numeric.transpose,e=this.x,n=this.y;return n?new numeric.T(t(e),numeric.negtranspose(n)):new numeric.T(t(e));},numeric.Tunop=function(t,e,n){return "string"!=typeof n&&(n=""),Function("var x = this;\n"+n+"\nif(x.y) {  "+e+";\n}\n"+t+";\n");},numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));"),numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;"),numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);"),numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;"),numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));","var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"),numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);","var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"),numeric.T.prototype.inv=function(){var t=this;if(void 0===t.y)return new numeric.T(numeric.inv(t.x));var e,n,r,i,a,o,s,u,c,f,h,l,d,p,g,v,m,y,x=t.x.length,b=numeric.identity(x),w=numeric.rep([x,x],0),_=numeric.clone(t.x),M=numeric.clone(t.y);for(c=0;c<x;c++){for(l=(p=_[c][c])*p+(g=M[c][c])*g,h=c,f=c+1;f<x;f++)(d=(p=_[f][c])*p+(g=M[f][c])*g)>l&&(h=f,l=d);for(h!==c&&(y=_[c],_[c]=_[h],_[h]=y,y=M[c],M[c]=M[h],M[h]=y,y=b[c],b[c]=b[h],b[h]=y,y=w[c],w[c]=w[h],w[h]=y),e=_[c],n=M[c],a=b[c],o=w[c],p=e[c],g=n[c],f=c+1;f<x;f++)v=e[f],m=n[f],e[f]=(v*p+m*g)/l,n[f]=(m*p-v*g)/l;for(f=0;f<x;f++)v=a[f],m=o[f],a[f]=(v*p+m*g)/l,o[f]=(m*p-v*g)/l;for(f=c+1;f<x;f++){for(r=_[f],i=M[f],s=b[f],u=w[f],p=r[c],g=i[c],h=c+1;h<x;h++)v=e[h],m=n[h],r[h]-=v*p-m*g,i[h]-=m*p+v*g;for(h=0;h<x;h++)v=a[h],m=o[h],s[h]-=v*p-m*g,u[h]-=m*p+v*g;}}for(c=x-1;c>0;c--)for(a=b[c],o=w[c],f=c-1;f>=0;f--)for(s=b[f],u=w[f],p=_[f][c],g=M[f][c],h=x-1;h>=0;h--)v=a[h],m=o[h],s[h]-=p*v-g*m,u[h]-=p*m+g*v;return new numeric.T(b,w);},numeric.T.prototype.get=function(t){var e,n=this.x,r=this.y,i=0,a=t.length;if(r){for(;i<a;)n=n[e=t[i]],r=r[e],i++;return new numeric.T(n,r);}for(;i<a;)n=n[e=t[i]],i++;return new numeric.T(n);},numeric.T.prototype.set=function(t,e){var n,r=this.x,i=this.y,a=0,o=t.length,s=e.x,u=e.y;if(0===o)return u?this.y=u:i&&(this.y=void 0),this.x=r,this;if(u){for(i||(i=numeric.rep(numeric.dim(r),0),this.y=i);a<o-1;)r=r[n=t[a]],i=i[n],a++;return r[n=t[a]]=s,i[n]=u,this;}if(i){for(;a<o-1;)r=r[n=t[a]],i=i[n],a++;return r[n=t[a]]=s,s instanceof Array?i[n]=numeric.rep(numeric.dim(s),0):i[n]=0,this;}for(;a<o-1;)r=r[n=t[a]],a++;return r[n=t[a]]=s,this;},numeric.T.prototype.getRows=function(t,e){var n,r,i=e-t+1,a=Array(i),o=this.x,s=this.y;for(n=t;n<=e;n++)a[n-t]=o[n];if(s){for(r=Array(i),n=t;n<=e;n++)r[n-t]=s[n];return new numeric.T(a,r);}return new numeric.T(a);},numeric.T.prototype.setRows=function(t,e,n){var r,i=this.x,a=this.y,o=n.x,s=n.y;for(r=t;r<=e;r++)i[r]=o[r-t];if(s)for(a||(a=numeric.rep(numeric.dim(i),0),this.y=a),r=t;r<=e;r++)a[r]=s[r-t];else if(a)for(r=t;r<=e;r++)a[r]=numeric.rep([o[r-t].length],0);return this;},numeric.T.prototype.getRow=function(t){var e=this.x,n=this.y;return n?new numeric.T(e[t],n[t]):new numeric.T(e[t]);},numeric.T.prototype.setRow=function(t,e){var n=this.x,r=this.y,i=e.x,a=e.y;return n[t]=i,a?(r||(r=numeric.rep(numeric.dim(n),0),this.y=r),r[t]=a):r&&(r=numeric.rep([i.length],0)),this;},numeric.T.prototype.getBlock=function(t,e){var n=this.x,r=this.y,i=numeric.getBlock;return r?new numeric.T(i(n,t,e),i(r,t,e)):new numeric.T(i(n,t,e));},numeric.T.prototype.setBlock=function(t,e,n){n instanceof numeric.T||(n=new numeric.T(n));var r=this.x,i=this.y,a=numeric.setBlock,o=n.x,s=n.y;if(s)return i||(this.y=numeric.rep(numeric.dim(this),0),i=this.y),a(r,t,e,o),a(i,t,e,s),this;a(r,t,e,o),i&&a(i,t,e,numeric.rep(numeric.dim(o),0));},numeric.T.rep=function(t,e){var n=numeric.T;e instanceof n||(e=new n(e));var r=e.x,i=e.y,a=numeric.rep;return i?new n(a(t,r),a(t,i)):new n(a(t,r));},numeric.T.diag=function(t){t instanceof numeric.T||(t=new numeric.T(t));var e=t.x,n=t.y,r=numeric.diag;return n?new numeric.T(r(e),r(n)):new numeric.T(r(e));},numeric.T.eig=function(){if(this.y)throw new Error("eig: not implemented for complex matrices.");return numeric.eig(this.x);},numeric.T.identity=function(t){return new numeric.T(numeric.identity(t));},numeric.T.prototype.getDiag=function(){var t=numeric,e=this.x,n=this.y;return n?new t.T(t.getDiag(e),t.getDiag(n)):new t.T(t.getDiag(e));},numeric.house=function(t){var e=numeric.clone(t),n=(t[0]>=0?1:-1)*numeric.norm2(t);e[0]+=n;var r=numeric.norm2(e);if(0===r)throw new Error("eig: internal error");return numeric.div(e,r);},numeric.toUpperHessenberg=function(t){var e=numeric.dim(t);if(2!==e.length||e[0]!==e[1])throw new Error("numeric: toUpperHessenberg() only works on square matrices");var n,r,i,a,o,s,u,c,f,h,l=e[0],d=numeric.clone(t),p=numeric.identity(l);for(r=0;r<l-2;r++){for(a=Array(l-r-1),n=r+1;n<l;n++)a[n-r-1]=d[n][r];if(numeric.norm2(a)>0){for(o=numeric.house(a),s=numeric.getBlock(d,[r+1,r],[l-1,l-1]),u=numeric.tensor(o,numeric.dot(o,s)),n=r+1;n<l;n++)for(c=d[n],f=u[n-r-1],i=r;i<l;i++)c[i]-=2*f[i-r];for(s=numeric.getBlock(d,[0,r+1],[l-1,l-1]),u=numeric.tensor(numeric.dot(s,o),o),n=0;n<l;n++)for(c=d[n],f=u[n],i=r+1;i<l;i++)c[i]-=2*f[i-r-1];for(s=Array(l-r-1),n=r+1;n<l;n++)s[n-r-1]=p[n];for(u=numeric.tensor(o,numeric.dot(o,s)),n=r+1;n<l;n++)for(h=p[n],f=u[n-r-1],i=0;i<l;i++)h[i]-=2*f[i];}}return {H:d,Q:p};},numeric.epsilon=2.220446049250313e-16,numeric.QRFrancis=function(t,e){void 0===e&&(e=1e4),t=numeric.clone(t);numeric.clone(t);var n,r,i,a,o,s,u,c,f,h,l,d,p,g,v,m,y,x,b=numeric.dim(t)[0],w=numeric.identity(b);if(b<3)return {Q:w,B:[[0,b-1]]};var _=numeric.epsilon;for(x=0;x<e;x++){for(m=0;m<b-1;m++)if(Math.abs(t[m+1][m])<_*(Math.abs(t[m][m])+Math.abs(t[m+1][m+1]))){var M=numeric.QRFrancis(numeric.getBlock(t,[0,0],[m,m]),e),S=numeric.QRFrancis(numeric.getBlock(t,[m+1,m+1],[b-1,b-1]),e);for(d=Array(m+1),v=0;v<=m;v++)d[v]=w[v];for(p=numeric.dot(M.Q,d),v=0;v<=m;v++)w[v]=p[v];for(d=Array(b-m-1),v=m+1;v<b;v++)d[v-m-1]=w[v];for(p=numeric.dot(S.Q,d),v=m+1;v<b;v++)w[v]=p[v-m-1];return {Q:w,B:M.B.concat(numeric.add(S.B,m+1))};}var P,A,k;if(i=t[b-2][b-2],a=t[b-2][b-1],o=t[b-1][b-2],c=i+(s=t[b-1][b-1]),u=i*s-a*o,f=numeric.getBlock(t,[0,0],[2,2]),c*c>=4*u)P=.5*(c+Math.sqrt(c*c-4*u)),A=.5*(c-Math.sqrt(c*c-4*u)),f=numeric.add(numeric.sub(numeric.dot(f,f),numeric.mul(f,P+A)),numeric.diag(numeric.rep([3],P*A)));else f=numeric.add(numeric.sub(numeric.dot(f,f),numeric.mul(f,c)),numeric.diag(numeric.rep([3],u)));for(n=[f[0][0],f[1][0],f[2][0]],r=numeric.house(n),d=[t[0],t[1],t[2]],p=numeric.tensor(r,numeric.dot(r,d)),v=0;v<3;v++)for(l=t[v],g=p[v],y=0;y<b;y++)l[y]-=2*g[y];for(d=numeric.getBlock(t,[0,0],[b-1,2]),p=numeric.tensor(numeric.dot(d,r),r),v=0;v<b;v++)for(l=t[v],g=p[v],y=0;y<3;y++)l[y]-=2*g[y];for(d=[w[0],w[1],w[2]],p=numeric.tensor(r,numeric.dot(r,d)),v=0;v<3;v++)for(h=w[v],g=p[v],y=0;y<b;y++)h[y]-=2*g[y];for(m=0;m<b-2;m++){for(y=m;y<=m+1;y++)if(Math.abs(t[y+1][y])<_*(Math.abs(t[y][y])+Math.abs(t[y+1][y+1]))){M=numeric.QRFrancis(numeric.getBlock(t,[0,0],[y,y]),e),S=numeric.QRFrancis(numeric.getBlock(t,[y+1,y+1],[b-1,b-1]),e);for(d=Array(y+1),v=0;v<=y;v++)d[v]=w[v];for(p=numeric.dot(M.Q,d),v=0;v<=y;v++)w[v]=p[v];for(d=Array(b-y-1),v=y+1;v<b;v++)d[v-y-1]=w[v];for(p=numeric.dot(S.Q,d),v=y+1;v<b;v++)w[v]=p[v-y-1];return {Q:w,B:M.B.concat(numeric.add(S.B,y+1))};}for(k=Math.min(b-1,m+3),n=Array(k-m),v=m+1;v<=k;v++)n[v-m-1]=t[v][m];for(r=numeric.house(n),d=numeric.getBlock(t,[m+1,m],[k,b-1]),p=numeric.tensor(r,numeric.dot(r,d)),v=m+1;v<=k;v++)for(l=t[v],g=p[v-m-1],y=m;y<b;y++)l[y]-=2*g[y-m];for(d=numeric.getBlock(t,[0,m+1],[b-1,k]),p=numeric.tensor(numeric.dot(d,r),r),v=0;v<b;v++)for(l=t[v],g=p[v],y=m+1;y<=k;y++)l[y]-=2*g[y-m-1];for(d=Array(k-m),v=m+1;v<=k;v++)d[v-m-1]=w[v];for(p=numeric.tensor(r,numeric.dot(r,d)),v=m+1;v<=k;v++)for(h=w[v],g=p[v-m-1],y=0;y<b;y++)h[y]-=2*g[y];}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?");},numeric.eig=function(t,e){var n,r,i,a,o,s,u,c,f,h,l,d,p,g,v,m,y=numeric.toUpperHessenberg(t),x=numeric.QRFrancis(y.H,e),b=numeric.T,w=t.length,_=x.B,M=numeric.dot(x.Q,numeric.dot(y.H,numeric.transpose(x.Q))),S=new b(numeric.dot(x.Q,y.Q)),P=_.length,A=Math.sqrt;for(r=0;r<P;r++)if((n=_[r][0])===_[r][1]);else{if(a=n+1,o=M[n][n],s=M[n][a],u=M[a][n],c=M[a][a],0===s&&0===u)continue;(h=(f=-o-c)*f-4*(o*c-s*u))>=0?((v=(o-(l=f<0?-.5*(f-A(h)):-.5*(f+A(h))))*(o-l)+s*s)>(m=u*u+(c-l)*(c-l))?(p=(o-l)/(v=A(v)),g=s/v):(p=u/(m=A(m)),g=(c-l)/m),i=new b([[g,-p],[p,g]]),S.setRows(n,a,i.dot(S.getRows(n,a)))):(l=-.5*f,d=.5*A(-h),(v=(o-l)*(o-l)+s*s)>(m=u*u+(c-l)*(c-l))?(p=(o-l)/(v=A(v+d*d)),g=s/v,l=0,d/=v):(p=u/(m=A(m+d*d)),g=(c-l)/m,l=d/m,d=0),i=new b([[g,-p],[p,g]],[[l,d],[d,-l]]),S.setRows(n,a,i.dot(S.getRows(n,a))));}var k=S.dot(t).dot(S.transjugate()),C=(w=t.length,numeric.T.identity(w));for(a=0;a<w;a++)if(a>0)for(r=a-1;r>=0;r--){var E=k.get([r,r]),I=k.get([a,a]);numeric.neq(E.x,I.x)||numeric.neq(E.y,I.y)?(l=k.getRow(r).getBlock([r],[a-1]),d=C.getRow(a).getBlock([r],[a-1]),C.set([a,r],k.get([r,a]).neg().sub(l.dot(d)).div(E.sub(I)))):C.setRow(a,C.getRow(r));}for(a=0;a<w;a++)l=C.getRow(a),C.setRow(a,l.div(l.norm2()));return C=C.transpose(),C=S.transjugate().dot(C),{lambda:k.getDiag(),E:C};},numeric.ccsSparse=function(t){var e,n,r,i=t.length,a=[];for(n=i-1;-1!==n;--n)for(r in e=t[n]){for(r=parseInt(r);r>=a.length;)a[a.length]=0;0!==e[r]&&a[r]++;}var o=a.length,s=Array(o+1);for(s[0]=0,n=0;n<o;++n)s[n+1]=s[n]+a[n];var u=Array(s[o]),c=Array(s[o]);for(n=i-1;-1!==n;--n)for(r in e=t[n])0!==e[r]&&(a[r]--,u[s[r]+a[r]]=n,c[s[r]+a[r]]=e[r]);return [s,u,c];},numeric.ccsFull=function(t){var e,n,r,i,a=t[0],o=t[1],s=t[2],u=numeric.ccsDim(t),c=u[0],f=u[1],h=numeric.rep([c,f],0);for(e=0;e<f;e++)for(r=a[e],i=a[e+1],n=r;n<i;++n)h[o[n]][e]=s[n];return h;},numeric.ccsTSolve=function(t,e,n,r,i){var a,o,s,u,c,f,h,l=t[0],d=t[1],p=t[2],g=l.length-1,v=Math.max,m=0;function y(t){var e;if(0===n[t]){for(n[t]=1,e=l[t];e<l[t+1];++e)y(d[e]);i[m]=t,++m;}}for(void 0===r&&(n=numeric.rep([g],0)),void 0===r&&(r=numeric.linspace(0,n.length-1)),void 0===i&&(i=[]),a=r.length-1;-1!==a;--a)y(r[a]);for(i.length=m,a=i.length-1;-1!==a;--a)n[i[a]]=0;for(a=r.length-1;-1!==a;--a)o=r[a],n[o]=e[o];for(a=i.length-1;-1!==a;--a){for(o=i[a],s=l[o],u=v(l[o+1],s),c=s;c!==u;++c)if(d[c]===o){n[o]/=p[c];break;}for(h=n[o],c=s;c!==u;++c)(f=d[c])!==o&&(n[f]-=h*p[c]);}return n;},numeric.ccsDFS=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t);},numeric.ccsDFS.prototype.dfs=function(t,e,n,r,i,a){var o,s,u,c=0,f=i.length,h=this.k,l=this.k1,d=this.j;if(0===r[t])for(r[t]=1,d[0]=t,h[0]=s=e[t],l[0]=u=e[t+1];;)if(s>=u){if(i[f]=d[c],0===c)return;++f,s=h[--c],u=l[c];}else 0===r[o=a[n[s]]]?(r[o]=1,h[c]=s,d[++c]=o,s=e[o],l[c]=u=e[o+1]):++s;},numeric.ccsLPSolve=function(t,e,n,r,i,a,o){var s,u,c,f,h,l,d,p,g,v=t[0],m=t[1],y=t[2],x=(v.length,e[0]),b=e[1],w=e[2];for(u=x[i],c=x[i+1],r.length=0,s=u;s<c;++s)o.dfs(a[b[s]],v,m,n,r,a);for(s=r.length-1;-1!==s;--s)n[r[s]]=0;for(s=u;s!==c;++s)n[f=a[b[s]]]=w[s];for(s=r.length-1;-1!==s;--s){for(h=v[f=r[s]],l=v[f+1],d=h;d<l;++d)if(a[m[d]]===f){n[f]/=y[d];break;}for(g=n[f],d=h;d<l;++d)(p=a[m[d]])!==f&&(n[p]-=g*y[d]);}return n;},numeric.ccsLUP1=function(t,e){var n,r,i,a,o,s,u,c=t[0].length-1,f=[numeric.rep([c+1],0),[],[]],h=[numeric.rep([c+1],0),[],[]],l=f[0],d=f[1],p=f[2],g=h[0],v=h[1],m=h[2],y=numeric.rep([c],0),x=numeric.rep([c],0),b=numeric.ccsLPSolve,w=(Math.abs),_=numeric.linspace(0,c-1),M=numeric.linspace(0,c-1),S=new numeric.ccsDFS(c);for(void 0===e&&(e=1),n=0;n<c;++n){for(b(f,t,y,x,n,M,S),a=-1,o=-1,r=x.length-1;-1!==r;--r)(i=x[r])<=n||(s=w(y[i]))>a&&(o=i,a=s);for(w(y[n])<e*a&&(r=_[n],a=_[o],_[n]=a,M[a]=n,_[o]=r,M[r]=o,a=y[n],y[n]=y[o],y[o]=a),a=l[n],o=g[n],u=y[n],d[a]=_[n],p[a]=1,++a,r=x.length-1;-1!==r;--r)s=y[i=x[r]],x[r]=0,y[i]=0,i<=n?(v[o]=i,m[o]=s,++o):(d[a]=_[i],p[a]=s/u,++a);l[n+1]=a,g[n+1]=o;}for(r=d.length-1;-1!==r;--r)d[r]=M[d[r]];return {L:f,U:h,P:_,Pinv:M};},numeric.ccsDFS0=function(t){this.k=Array(t),this.k1=Array(t),this.j=Array(t);},numeric.ccsDFS0.prototype.dfs=function(t,e,n,r,i,a,o){var s,u,c,f=0,h=i.length,l=this.k,d=this.k1,p=this.j;if(0===r[t])for(r[t]=1,p[0]=t,l[0]=u=e[a[t]],d[0]=c=e[a[t]+1];;){if(isNaN(u))throw new Error("Ow!");if(u>=c){if(i[h]=a[p[f]],0===f)return;++h,u=l[--f],c=d[f];}else 0===r[s=n[u]]?(r[s]=1,l[f]=u,p[++f]=s,u=e[s=a[s]],d[f]=c=e[s+1]):++u;}},numeric.ccsLPSolve0=function(t,e,n,r,i,a,o,s){var u,c,f,h,l,d,p,g,v,m=t[0],y=t[1],x=t[2],b=(m.length,e[0]),w=e[1],_=e[2];for(c=b[i],f=b[i+1],r.length=0,u=c;u<f;++u)s.dfs(w[u],m,y,n,r,a,o);for(u=r.length-1;-1!==u;--u)n[o[h=r[u]]]=0;for(u=c;u!==f;++u)n[h=w[u]]=_[u];for(u=r.length-1;-1!==u;--u){for(g=o[h=r[u]],l=m[h],d=m[h+1],p=l;p<d;++p)if(y[p]===g){n[g]/=x[p];break;}for(v=n[g],p=l;p<d;++p)n[y[p]]-=v*x[p];n[g]=v;}},numeric.ccsLUP0=function(t,e){var n,r,i,a,o,s,u,c=t[0].length-1,f=[numeric.rep([c+1],0),[],[]],h=[numeric.rep([c+1],0),[],[]],l=f[0],d=f[1],p=f[2],g=h[0],v=h[1],m=h[2],y=numeric.rep([c],0),x=numeric.rep([c],0),b=numeric.ccsLPSolve0,w=(Math.abs),_=numeric.linspace(0,c-1),M=numeric.linspace(0,c-1),S=new numeric.ccsDFS0(c);for(void 0===e&&(e=1),n=0;n<c;++n){for(b(f,t,y,x,n,M,_,S),a=-1,o=-1,r=x.length-1;-1!==r;--r)(i=x[r])<=n||(s=w(y[_[i]]))>a&&(o=i,a=s);for(w(y[_[n]])<e*a&&(r=_[n],a=_[o],_[n]=a,M[a]=n,_[o]=r,M[r]=o),a=l[n],o=g[n],u=y[_[n]],d[a]=_[n],p[a]=1,++a,r=x.length-1;-1!==r;--r)s=y[_[i=x[r]]],x[r]=0,y[_[i]]=0,i<=n?(v[o]=i,m[o]=s,++o):(d[a]=_[i],p[a]=s/u,++a);l[n+1]=a,g[n+1]=o;}for(r=d.length-1;-1!==r;--r)d[r]=M[d[r]];return {L:f,U:h,P:_,Pinv:M};},numeric.ccsLUP=numeric.ccsLUP0,numeric.ccsDim=function(t){return [numeric.sup(t[1])+1,t[0].length-1];},numeric.ccsGetBlock=function(t,e,n){var r=numeric.ccsDim(t),i=r[0],a=r[1];void 0===e?e=numeric.linspace(0,i-1):"number"==typeof e&&(e=[e]),void 0===n?n=numeric.linspace(0,a-1):"number"==typeof n&&(n=[n]);var o,s,u,c,f=e.length,h=n.length,l=numeric.rep([a],0),d=[],p=[],g=[l,d,p],v=t[0],m=t[1],y=t[2],x=numeric.rep([i],0),b=0,w=numeric.rep([i],0);for(s=0;s<h;++s){var _=v[c=n[s]],M=v[c+1];for(o=_;o<M;++o)w[u=m[o]]=1,x[u]=y[o];for(o=0;o<f;++o)w[e[o]]&&(d[b]=o,p[b]=x[e[o]],++b);for(o=_;o<M;++o)w[u=m[o]]=0;l[s+1]=b;}return g;},numeric.ccsDot=function(t,e){var n,r,i,a,o,s,u,c,f,h,l,d=t[0],p=t[1],g=t[2],v=e[0],m=e[1],y=e[2],x=numeric.ccsDim(t),b=numeric.ccsDim(e),w=x[0],_=(x[1],b[1]),M=numeric.rep([w],0),S=numeric.rep([w],0),P=Array(w),A=numeric.rep([_],0),k=[],C=[],E=[A,k,C];for(i=0;i!==_;++i){for(a=v[i],o=v[i+1],f=0,r=a;r<o;++r)for(h=m[r],l=y[r],s=d[h],u=d[h+1],n=s;n<u;++n)0===S[c=p[n]]&&(P[f]=c,S[c]=1,f+=1),M[c]=M[c]+g[n]*l;for(o=(a=A[i])+f,A[i+1]=o,r=f-1;-1!==r;--r)l=a+r,n=P[r],k[l]=n,C[l]=M[n],S[n]=0,M[n]=0;A[i+1]=A[i]+f;}return E;},numeric.ccsLUPSolve=function(t,e){var n=t.L,r=t.U,i=(t.P,e[0]),a=!1;"object"!=typeof i&&(i=(e=[[0,e.length],numeric.linspace(0,e.length-1),e])[0],a=!0);var o,s,u,c,f,h,l=e[1],d=e[2],p=n[0].length-1,g=i.length-1,v=numeric.rep([p],0),m=Array(p),y=numeric.rep([p],0),x=Array(p),b=numeric.rep([g+1],0),w=[],_=[],M=numeric.ccsTSolve,S=0;for(o=0;o<g;++o){for(f=0,u=i[o],c=i[o+1],s=u;s<c;++s)h=t.Pinv[l[s]],x[f]=h,y[h]=d[s],++f;for(x.length=f,M(n,y,v,x,m),s=x.length-1;-1!==s;--s)y[x[s]]=0;if(M(r,v,y,m,x),a)return y;for(s=m.length-1;-1!==s;--s)v[m[s]]=0;for(s=x.length-1;-1!==s;--s)h=x[s],w[S]=h,_[S]=y[h],y[h]=0,++S;b[o+1]=S;}return [b,w,_];},numeric.ccsbinop=function(t,e){return void 0===e&&(e=""),Function("X","Y","var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n"+e+"for(i=0;i<n;++i) {\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Xj[j];\n    x[k] = 1;\n    Zj[p] = k;\n    ++p;\n  }\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Yj[j];\n    y[k] = Yv[j];\n    if(x[k] === 0) {\n      Zj[p] = k;\n      ++p;\n    }\n  }\n  Zi[i+1] = p;\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n  j0 = Zi[i]; j1 = Zi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Zj[j];\n    xk = x[k];\n    yk = y[k];\n"+t+"\n    Zv[j] = zk;\n  }\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n}\nreturn [Zi,Zj,Zv];");},function(){var k,A,B,C;for(k in numeric.ops2)A=isFinite(eval("1"+numeric.ops2[k]+"0"))?"[Y[0],Y[1],numeric."+k+"(X,Y[2])]":"NaN",B=isFinite(eval("0"+numeric.ops2[k]+"1"))?"[X[0],X[1],numeric."+k+"(X[2],Y)]":"NaN",C=isFinite(eval("1"+numeric.ops2[k]+"0"))&&isFinite(eval("0"+numeric.ops2[k]+"1"))?"numeric.ccs"+k+"MM(X,Y)":"NaN",numeric["ccs"+k+"MM"]=numeric.ccsbinop("zk = xk "+numeric.ops2[k]+"yk;"),numeric["ccs"+k]=Function("X","Y",'if(typeof X === "number") return '+A+';\nif(typeof Y === "number") return '+B+";\nreturn "+C+";\n");}(),numeric.ccsScatter=function(t){var e,n=t[0],r=t[1],i=t[2],a=numeric.sup(r)+1,o=n.length,s=numeric.rep([a],0),u=Array(o),c=Array(o),f=numeric.rep([a],0);for(e=0;e<o;++e)f[r[e]]++;for(e=0;e<a;++e)s[e+1]=s[e]+f[e];var h,l,d=s.slice(0);for(e=0;e<o;++e)u[h=d[l=r[e]]]=n[e],c[h]=i[e],d[l]=d[l]+1;return [s,u,c];},numeric.ccsGather=function(t){var e,n,r,i,a,o=t[0],s=t[1],u=t[2],c=o.length-1,f=s.length,h=Array(f),l=Array(f),d=Array(f);for(a=0,e=0;e<c;++e)for(r=o[e],i=o[e+1],n=r;n!==i;++n)l[a]=e,h[a]=s[n],d[a]=u[n],++a;return [h,l,d];},numeric.sdim=function t(e,n,r){if(void 0===n&&(n=[]),"object"!=typeof e)return n;var i;for(i in void 0===r&&(r=0),r in n||(n[r]=0),e.length>n[r]&&(n[r]=e.length),e)e.hasOwnProperty(i)&&t(e[i],n,r+1);return n;},numeric.sclone=function t(e,n,r){void 0===n&&(n=0),void 0===r&&(r=numeric.sdim(e).length);var i,a=Array(e.length);if(n===r-1){for(i in e)e.hasOwnProperty(i)&&(a[i]=e[i]);return a;}for(i in e)e.hasOwnProperty(i)&&(a[i]=t(e[i],n+1,r));return a;},numeric.sdiag=function(t){var e,n,r=t.length,i=Array(r);for(e=r-1;e>=1;e-=2)n=e-1,i[e]=[],i[e][e]=t[e],i[n]=[],i[n][n]=t[n];return 0===e&&(i[0]=[],i[0][0]=t[e]),i;},numeric.sidentity=function(t){return numeric.sdiag(numeric.rep([t],1));},numeric.stranspose=function(t){var e,n,r,i=[];t.length;for(e in t)if(t.hasOwnProperty(e))for(n in r=t[e])r.hasOwnProperty(n)&&("object"!=typeof i[n]&&(i[n]=[]),i[n][e]=r[n]);return i;},numeric.sLUP=function(t,e){throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.");},numeric.sdotMM=function(t,e){var n,r,i,a,o,s,u,c=t.length,f=(e.length,numeric.stranspose(e)),h=f.length,l=Array(c);for(i=c-1;i>=0;i--){for(u=[],n=t[i],o=h-1;o>=0;o--){for(a in s=0,r=f[o],n)n.hasOwnProperty(a)&&a in r&&(s+=n[a]*r[a]);s&&(u[o]=s);}l[i]=u;}return l;},numeric.sdotMV=function(t,e){var n,r,i,a,o=t.length,s=Array(o);for(r=o-1;r>=0;r--){for(i in a=0,n=t[r])n.hasOwnProperty(i)&&e[i]&&(a+=n[i]*e[i]);a&&(s[r]=a);}return s;},numeric.sdotVM=function(t,e){var n,r,i,a,o=[];for(n in t)if(t.hasOwnProperty(n))for(r in i=e[n],a=t[n],i)i.hasOwnProperty(r)&&(o[r]||(o[r]=0),o[r]+=a*i[r]);return o;},numeric.sdotVV=function(t,e){var n,r=0;for(n in t)t[n]&&e[n]&&(r+=t[n]*e[n]);return r;},numeric.sdot=function(t,e){var n=numeric.sdim(t).length,r=numeric.sdim(e).length;switch(1e3*n+r){case 0:return t*e;case 1001:return numeric.sdotVV(t,e);case 2001:return numeric.sdotMV(t,e);case 1002:return numeric.sdotVM(t,e);case 2002:return numeric.sdotMM(t,e);default:throw new Error("numeric.sdot not implemented for tensors of order "+n+" and "+r);}},numeric.sscatter=function(t){var e,n,r,i,a=t[0].length,o=t.length,s=[];for(n=a-1;n>=0;--n)if(t[o-1][n]){for(i=s,r=0;r<o-2;r++)i[e=t[r][n]]||(i[e]=[]),i=i[e];i[t[r][n]]=t[r+1][n];}return s;},numeric.sgather=function t(e,n,r){var i,a,o;for(a in void 0===n&&(n=[]),void 0===r&&(r=[]),i=r.length,e)if(e.hasOwnProperty(a))if(r[i]=parseInt(a),"number"==typeof(o=e[a])){if(o){if(0===n.length)for(a=i+1;a>=0;--a)n[a]=[];for(a=i;a>=0;--a)n[a].push(r[a]);n[i+1].push(o);}}else t(o,n,r);return r.length>i&&r.pop(),n;},numeric.cLU=function(t){var e,n,r,i,a,o,s=t[0],u=t[1],c=t[2],f=s.length,h=0;for(e=0;e<f;e++)s[e]>h&&(h=s[e]);h++;var l,d=Array(h),p=Array(h),g=numeric.rep([h],1/0),v=numeric.rep([h],-1/0);for(r=0;r<f;r++)e=s[r],(n=u[r])<g[e]&&(g[e]=n),n>v[e]&&(v[e]=n);for(e=0;e<h-1;e++)v[e]>v[e+1]&&(v[e+1]=v[e]);for(e=h-1;e>=1;e--)g[e]<g[e-1]&&(g[e-1]=g[e]);for(e=0;e<h;e++)p[e]=numeric.rep([v[e]-g[e]+1],0),d[e]=numeric.rep([e-g[e]],0),e-g[e]+1,v[e]-e+1;for(r=0;r<f;r++)p[e=s[r]][u[r]-g[e]]=c[r];for(e=0;e<h-1;e++)for(i=e-g[e],x=p[e],n=e+1;g[n]<=e&&n<h;n++)if(a=e-g[n],o=v[e]-e,l=(b=p[n])[a]/x[i]){for(r=1;r<=o;r++)b[r+a]-=l*x[r+i];d[n][e-g[n]]=l;}var m,y,x=[],b=[],w=[],_=[],M=[],S=[];for(f=0,m=0,e=0;e<h;e++){for(i=g[e],a=v[e],y=p[e],n=e;n<=a;n++)y[n-i]&&(x[f]=e,b[f]=n,w[f]=y[n-i],f++);for(y=d[e],n=i;n<e;n++)y[n-i]&&(_[m]=e,M[m]=n,S[m]=y[n-i],m++);_[m]=e,M[m]=e,S[m]=1,m++;}return {U:[x,b,w],L:[_,M,S]};},numeric.cLUsolve=function(t,e){var n,r,i=t.L,a=t.U,o=numeric.clone(e),s=i[0],u=i[1],c=i[2],f=a[0],h=a[1],l=a[2],d=f.length,p=(s.length,o.length);for(r=0,n=0;n<p;n++){for(;u[r]<n;)o[n]-=c[r]*o[u[r]],r++;r++;}for(r=d-1,n=p-1;n>=0;n--){for(;h[r]>n;)o[n]-=l[r]*o[h[r]],r--;o[n]/=l[r],r--;}return o;},numeric.cgrid=function(t,e){"number"==typeof t&&(t=[t,t]);var n,r,i,a=numeric.rep(t,-1);if("function"!=typeof e)switch(e){case"L":e=function(e,n){return e>=t[0]/2||n<t[1]/2;};break;default:e=function(t,e){return !0;};}for(i=0,n=1;n<t[0]-1;n++)for(r=1;r<t[1]-1;r++)e(n,r)&&(a[n][r]=i,i++);return a;},numeric.cdelsq=function(t){var e,n,r,i,a,o=[[-1,0],[0,-1],[0,1],[1,0]],s=numeric.dim(t),u=s[0],c=s[1],f=[],h=[],l=[];for(e=1;e<u-1;e++)for(n=1;n<c-1;n++)if(!(t[e][n]<0)){for(r=0;r<4;r++)i=e+o[r][0],a=n+o[r][1],t[i][a]<0||(f.push(t[e][n]),h.push(t[i][a]),l.push(-1));f.push(t[e][n]),h.push(t[e][n]),l.push(4);}return [f,h,l];},numeric.cdotMV=function(t,e){var n,r,i,a=t[0],o=t[1],s=t[2],u=a.length;for(i=0,r=0;r<u;r++)a[r]>i&&(i=a[r]);for(i++,n=numeric.rep([i],0),r=0;r<u;r++)n[a[r]]+=s[r]*e[o[r]];return n;},numeric.Spline=function(t,e,n,r,i){this.x=t,this.yl=e,this.yr=n,this.kl=r,this.kr=i;},numeric.Spline.prototype._at=function(t,e){var n,r,i,a=this.x,o=this.yl,s=this.yr,u=this.kl,c=this.kr,f=numeric.add,h=numeric.sub,l=numeric.mul;n=h(l(u[e],a[e+1]-a[e]),h(s[e+1],o[e])),r=f(l(c[e+1],a[e]-a[e+1]),h(s[e+1],o[e]));var d=(i=(t-a[e])/(a[e+1]-a[e]))*(1-i);return f(f(f(l(1-i,o[e]),l(i,s[e+1])),l(n,d*(1-i))),l(r,d*i));},numeric.Spline.prototype.at=function(t){if("number"==typeof t){var e,n,r,i=this.x,a=i.length,o=Math.floor;for(e=0,n=a-1;n-e>1;)i[r=o((e+n)/2)]<=t?e=r:n=r;return this._at(t,e);}a=t.length;var s,u=Array(a);for(s=a-1;-1!==s;--s)u[s]=this.at(t[s]);return u;},numeric.Spline.prototype.diff=function(){var t,e,n,r=this.x,i=this.yl,a=this.yr,o=this.kl,s=this.kr,u=i.length,c=o,f=s,h=Array(u),l=Array(u),d=numeric.add,p=numeric.mul,g=numeric.div,v=numeric.sub;for(t=u-1;-1!==t;--t)e=r[t+1]-r[t],n=v(a[t+1],i[t]),h[t]=g(d(p(n,6),p(o[t],-4*e),p(s[t+1],-2*e)),e*e),l[t+1]=g(d(p(n,-6),p(o[t],2*e),p(s[t+1],4*e)),e*e);return new numeric.Spline(r,c,f,h,l);},numeric.Spline.prototype.roots=function(){function t(t){return t*t;}var e=[],n=this.x,r=this.yl,i=this.yr,a=this.kl,o=this.kr;"number"==typeof r[0]&&(r=[r],i=[i],a=[a],o=[o]);var s,u,c,f,h,l,d,p,g,v,m,y,x,b,w,_,M,S,P,A,k,C,E,I=r.length,N=n.length-1,T=(e=Array(I),Math.sqrt);for(s=0;s!==I;++s){for(f=r[s],h=i[s],l=a[s],d=o[s],p=[],u=0;u!==N;u++){for(u>0&&h[u]*f[u]<0&&p.push(n[u]),_=n[u+1]-n[u],n[u],m=f[u],y=h[u+1],g=l[u]/_,x=(v=d[u+1]/_)+3*m+2*g-3*y,b=3*(v+g+2*(m-y)),(w=t(g-v+3*(m-y))+12*v*m)<=0?M=(S=x/b)>n[u]&&S<n[u+1]?[n[u],S,n[u+1]]:[n[u],n[u+1]]:(S=(x-T(w))/b,P=(x+T(w))/b,M=[n[u]],S>n[u]&&S<n[u+1]&&M.push(S),P>n[u]&&P<n[u+1]&&M.push(P),M.push(n[u+1])),k=M[0],S=this._at(k,u),c=0;c<M.length-1;c++)if(C=M[c+1],P=this._at(C,u),0!==S){if(0===P||S*P>0)k=C,S=P;else{for(var O=0;!((E=(S*C-P*k)/(S-P))<=k||E>=C);)if((A=this._at(E,u))*P>0)C=E,P=A,-1===O&&(S*=.5),O=-1;else{if(!(A*S>0))break;k=E,S=A,1===O&&(P*=.5),O=1;}p.push(E),k=M[c+1],S=this._at(k,u);}}else p.push(k),k=C,S=P;0===P&&p.push(C);}e[s]=p;}return "number"==typeof this.yl[0]?e[0]:e;},numeric.spline=function(t,e,n,r){var i,a=t.length,o=[],s=[],u=[],c=numeric.sub,f=numeric.mul,h=numeric.add;for(i=a-2;i>=0;i--)s[i]=t[i+1]-t[i],u[i]=c(e[i+1],e[i]);"string"!=typeof n&&"string"!=typeof r||(n=r="periodic");var l=[[],[],[]];switch(typeof n){case"undefined":o[0]=f(3/(s[0]*s[0]),u[0]),l[0].push(0,0),l[1].push(0,1),l[2].push(2/s[0],1/s[0]);break;case"string":o[0]=h(f(3/(s[a-2]*s[a-2]),u[a-2]),f(3/(s[0]*s[0]),u[0])),l[0].push(0,0,0),l[1].push(a-2,0,1),l[2].push(1/s[a-2],2/s[a-2]+2/s[0],1/s[0]);break;default:o[0]=n,l[0].push(0),l[1].push(0),l[2].push(1);}for(i=1;i<a-1;i++)o[i]=h(f(3/(s[i-1]*s[i-1]),u[i-1]),f(3/(s[i]*s[i]),u[i])),l[0].push(i,i,i),l[1].push(i-1,i,i+1),l[2].push(1/s[i-1],2/s[i-1]+2/s[i],1/s[i]);switch(typeof r){case"undefined":o[a-1]=f(3/(s[a-2]*s[a-2]),u[a-2]),l[0].push(a-1,a-1),l[1].push(a-2,a-1),l[2].push(1/s[a-2],2/s[a-2]);break;case"string":l[1][l[1].length-1]=0;break;default:o[a-1]=r,l[0].push(a-1),l[1].push(a-1),l[2].push(1);}o="number"!=typeof o[0]?numeric.transpose(o):[o];var d=Array(o.length);if("string"==typeof n)for(i=d.length-1;-1!==i;--i)d[i]=numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(l)),o[i]),d[i][a-1]=d[i][0];else for(i=d.length-1;-1!==i;--i)d[i]=numeric.cLUsolve(numeric.cLU(l),o[i]);return d="number"==typeof e[0]?d[0]:numeric.transpose(d),new numeric.Spline(t,e,e,d,d);},numeric.fftpow2=function t(e,n){var r=e.length;if(1!==r){var i,a,o=Math.cos,s=Math.sin,u=Array(r/2),c=Array(r/2),f=Array(r/2),h=Array(r/2);for(a=r/2,i=r-1;-1!==i;--i)f[--a]=e[i],h[a]=n[i],--i,u[a]=e[i],c[a]=n[i];t(u,c),t(f,h),a=r/2;var l,d,p,g=-6.283185307179586/r;for(i=r-1;-1!==i;--i)-1===--a&&(a=r/2-1),d=o(l=g*i),p=s(l),e[i]=u[a]+d*f[a]-p*h[a],n[i]=c[a]+d*h[a]+p*f[a];}},numeric._ifftpow2=function t(e,n){var r=e.length;if(1!==r){var i,a,o=Math.cos,s=Math.sin,u=Array(r/2),c=Array(r/2),f=Array(r/2),h=Array(r/2);for(a=r/2,i=r-1;-1!==i;--i)f[--a]=e[i],h[a]=n[i],--i,u[a]=e[i],c[a]=n[i];t(u,c),t(f,h),a=r/2;var l,d,p,g=6.283185307179586/r;for(i=r-1;-1!==i;--i)-1===--a&&(a=r/2-1),d=o(l=g*i),p=s(l),e[i]=u[a]+d*f[a]-p*h[a],n[i]=c[a]+d*h[a]+p*f[a];}},numeric.ifftpow2=function(t,e){numeric._ifftpow2(t,e),numeric.diveq(t,t.length),numeric.diveq(e,e.length);},numeric.convpow2=function(t,e,n,r){var i,a,o,s,u;for(numeric.fftpow2(t,e),numeric.fftpow2(n,r),i=t.length-1;-1!==i;--i)a=t[i],s=e[i],o=n[i],u=r[i],t[i]=a*o-s*u,e[i]=a*u+s*o;numeric.ifftpow2(t,e);},numeric.T.prototype.fft=function(){var t,e,n=this.x,r=this.y,i=n.length,a=Math.log,o=a(2),s=Math.ceil(a(2*i-1)/o),u=Math.pow(2,s),c=numeric.rep([u],0),f=numeric.rep([u],0),h=Math.cos,l=Math.sin,d=-3.141592653589793/i,p=numeric.rep([u],0),g=numeric.rep([u],0);for(t=0;t<i;t++)p[t]=n[t];if(void 0!==r)for(t=0;t<i;t++)g[t]=r[t];for(c[0]=1,t=1;t<=u/2;t++)e=d*t*t,c[t]=h(e),f[t]=l(e),c[u-t]=h(e),f[u-t]=l(e);var v=new numeric.T(p,g),m=new numeric.T(c,f);return v=v.mul(m),numeric.convpow2(v.x,v.y,numeric.clone(m.x),numeric.neg(m.y)),(v=v.mul(m)).x.length=i,v.y.length=i,v;},numeric.T.prototype.ifft=function(){var t,e,n=this.x,r=this.y,i=n.length,a=Math.log,o=a(2),s=Math.ceil(a(2*i-1)/o),u=Math.pow(2,s),c=numeric.rep([u],0),f=numeric.rep([u],0),h=Math.cos,l=Math.sin,d=3.141592653589793/i,p=numeric.rep([u],0),g=numeric.rep([u],0);for(t=0;t<i;t++)p[t]=n[t];if(void 0!==r)for(t=0;t<i;t++)g[t]=r[t];for(c[0]=1,t=1;t<=u/2;t++)e=d*t*t,c[t]=h(e),f[t]=l(e),c[u-t]=h(e),f[u-t]=l(e);var v=new numeric.T(p,g),m=new numeric.T(c,f);return v=v.mul(m),numeric.convpow2(v.x,v.y,numeric.clone(m.x),numeric.neg(m.y)),(v=v.mul(m)).x.length=i,v.y.length=i,v.div(i);},numeric.gradient=function(t,e){var n=e.length,r=t(e);if(isNaN(r))throw new Error("gradient: f(x) is a NaN!");var i,a,o,s,u,c,f,h,l,d=Math.max,p=numeric.clone(e),g=Array(n),v=(numeric.div,numeric.sub,d=Math.max,Math.abs),m=Math.min,y=0;for(i=0;i<n;i++)for(var x=d(1e-6*r,1e-8);;){if(++y>20)throw new Error("Numerical gradient fails");if(p[i]=e[i]+x,a=t(p),p[i]=e[i]-x,o=t(p),p[i]=e[i],isNaN(a)||isNaN(o))x/=16;else{if(g[i]=(a-o)/(2*x),s=e[i]-x,u=e[i],c=e[i]+x,f=(a-r)/x,h=(r-o)/x,l=d(v(g[i]),v(r),v(a),v(o),v(s),v(u),v(c),1e-8),!(m(d(v(f-g[i]),v(h-g[i]),v(f-h))/l,x/l)>.001))break;x/=16;}}return g;},numeric.uncmin=function(t,e,n,r,i,a,o){var s=numeric.gradient;void 0===o&&(o={}),void 0===n&&(n=1e-8),void 0===r&&(r=function(e){return s(t,e);}),void 0===i&&(i=1e3);var u,c,f=(e=numeric.clone(e)).length,h=t(e);if(isNaN(h))throw new Error("uncmin: f(x0) is a NaN!");var l=Math.max,d=numeric.norm2;n=l(n,numeric.epsilon);var p,g,v,m,y,x,b,w,_,M,S=o.Hinv||numeric.identity(f),P=numeric.dot,A=(numeric.inv,numeric.sub),k=numeric.add,C=numeric.tensor,E=numeric.div,I=numeric.mul,N=numeric.all,T=numeric.isFinite,O=numeric.neg,j=0,B="";for(g=r(e);j<i;){if("function"==typeof a&&a(j,e,h,g,S)){B="Callback returned true";break;}if(!N(T(g))){B="Gradient has Infinity or NaN";break;}if(!N(T(p=O(P(S,g))))){B="Search direction has Infinity or NaN";break;}if((M=d(p))<n){B="Newton step smaller than tol";break;}for(_=1,c=P(g,p),y=e;j<i&&!(_*M<n)&&(y=k(e,m=I(p,_)),(u=t(y))-h>=.1*_*c||isNaN(u));)_*=.5,++j;if(_*M<n){B="Line search step size smaller than tol";break;}if(j===i){B="maxit reached during line search";break;}S=A(k(S,I(((w=P(x=A(v=r(y),g),m))+P(x,b=P(S,x)))/(w*w),C(m,m))),E(k(C(b,m),C(m,b)),w)),e=y,h=u,g=v,++j;}return {solution:e,f:h,gradient:g,invHessian:S,iterations:j,message:B};},numeric.Dopri=function(t,e,n,r,i,a,o){this.x=t,this.y=e,this.f=n,this.ymid=r,this.iterations=i,this.events=o,this.message=a;},numeric.Dopri.prototype._at=function(t,e){function n(t){return t*t;}var r,i,a,o,s,u,c,f,h,l=this.x,d=this.y,p=this.f,g=this.ymid,v=(l.length,numeric.add),m=numeric.mul,y=numeric.sub;return r=l[e],i=l[e+1],o=d[e],s=d[e+1],a=r+.5*(i-r),u=g[e],c=y(p[e],m(o,1/(r-a)+2/(r-i))),f=y(p[e+1],m(s,1/(i-a)+2/(i-r))),v(v(v(v(m(o,(h=[n(t-i)*(t-a)/n(r-i)/(r-a),n(t-r)*n(t-i)/n(r-a)/n(i-a),n(t-r)*(t-a)/n(i-r)/(i-a),(t-r)*n(t-i)*(t-a)/n(r-i)/(r-a),(t-i)*n(t-r)*(t-a)/n(r-i)/(i-a)])[0]),m(u,h[1])),m(s,h[2])),m(c,h[3])),m(f,h[4]));},numeric.Dopri.prototype.at=function(t){var e,n,r,i=Math.floor;if("number"!=typeof t){var a=t.length,o=Array(a);for(e=a-1;-1!==e;--e)o[e]=this.at(t[e]);return o;}var s=this.x;for(e=0,n=s.length-1;n-e>1;)s[r=i(.5*(e+n))]<=t?e=r:n=r;return this._at(t,e);},numeric.dopri=function(t,e,n,r,i,a,o){void 0===i&&(i=1e-6),void 0===a&&(a=1e3);var s,u,c,f,h,l,d,p,g,v,m,y,x,b=[t],w=[n],_=[r(t,n)],M=[],S=[.075,.225],P=[44/45,-56/15,32/9],A=[19372/6561,-25360/2187,64448/6561,-212/729],k=[9017/3168,-355/33,46732/5247,49/176,-5103/18656],C=[35/384,0,500/1113,125/192,-2187/6784,11/84],E=[.10013431883002395,0,.3918321794184259,-.02982460176594817,.05893268337240795,-.04497888809104361,.023904308236133973],I=[.2,.3,.8,8/9,1,1],N=[-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,.025],T=0,O=(e-t)/10,j=0,B=numeric.add,L=numeric.mul,D=(Math.min),R=Math.abs,F=numeric.norminf,Y=Math.pow,z=numeric.any,q=numeric.lt,X=numeric.and,G=(numeric.sub,new numeric.Dopri(b,w,_,M,-1,""));for("function"==typeof o&&(m=o(t,n));t<e&&j<a;)if(++j,t+O>e&&(O=e-t),s=r(t+I[0]*O,B(n,L(.2*O,_[T]))),u=r(t+I[1]*O,B(B(n,L(S[0]*O,_[T])),L(S[1]*O,s))),c=r(t+I[2]*O,B(B(B(n,L(P[0]*O,_[T])),L(P[1]*O,s)),L(P[2]*O,u))),f=r(t+I[3]*O,B(B(B(B(n,L(A[0]*O,_[T])),L(A[1]*O,s)),L(A[2]*O,u)),L(A[3]*O,c))),h=r(t+I[4]*O,B(B(B(B(B(n,L(k[0]*O,_[T])),L(k[1]*O,s)),L(k[2]*O,u)),L(k[3]*O,c)),L(k[4]*O,f))),l=r(t+O,g=B(B(B(B(B(n,L(_[T],O*C[0])),L(u,O*C[2])),L(c,O*C[3])),L(f,O*C[4])),L(h,O*C[5]))),(v="number"==typeof(d=B(B(B(B(B(L(_[T],O*N[0]),L(u,O*N[2])),L(c,O*N[3])),L(f,O*N[4])),L(h,O*N[5])),L(l,O*N[6])))?R(d):F(d))>i){if(t+(O=.2*O*Y(i/v,.25))===t){G.msg="Step size became too small";break;}}else{if(M[T]=B(B(B(B(B(B(n,L(_[T],O*E[0])),L(u,O*E[2])),L(c,O*E[3])),L(f,O*E[4])),L(h,O*E[5])),L(l,O*E[6])),b[++T]=t+O,w[T]=g,_[T]=l,"function"==typeof o){var W,U,H=t,V=t+.5*O;if(y=o(V,M[T-1]),z(x=X(q(m,0),q(0,y)))||(H=V,m=y,y=o(V=t+O,g),x=X(q(m,0),q(0,y))),z(x)){for(var Z,Q,$=0,K=1,J=1;;){if("number"==typeof m)U=(J*y*H-K*m*V)/(J*y-K*m);else for(U=V,p=m.length-1;-1!==p;--p)m[p]<0&&y[p]>0&&(U=D(U,(J*y[p]*H-K*m[p]*V)/(J*y[p]-K*m[p])));if(U<=H||U>=V)break;Q=o(U,W=G._at(U,T-1)),z(Z=X(q(m,0),q(0,Q)))?(V=U,y=Q,x=Z,J=1,-1===$?K*=.5:K=1,$=-1):(H=U,m=Q,K=1,1===$?J*=.5:J=1,$=1);}return g=G._at(.5*(t+U),T-1),G.f[T]=r(U,W),G.x[T]=U,G.y[T]=W,G.ymid[T-1]=g,G.events=x,G.iterations=j,G;}}t+=O,n=g,m=y,O=D(.8*O*Y(i/v,.25),4*O);}return G.iterations=j,G;},numeric.LU=function(t,e){e=e||!1;var n,r,i,a,o,s,u,c,f,h=Math.abs,l=t.length,d=l-1,p=new Array(l);for(e||(t=numeric.clone(t)),i=0;i<l;++i){for(u=i,f=h((s=t[i])[i]),r=i+1;r<l;++r)f<(a=h(t[r][i]))&&(f=a,u=r);for(p[i]=u,u!=i&&(t[i]=t[u],t[u]=s,s=t[i]),o=s[i],n=i+1;n<l;++n)t[n][i]/=o;for(n=i+1;n<l;++n){for(c=t[n],r=i+1;r<d;++r)c[r]-=c[i]*s[r],c[++r]-=c[i]*s[r];r===d&&(c[r]-=c[i]*s[r]);}}return {LU:t,P:p};},numeric.LUsolve=function(t,e){var n,r,i,a,o,s=t.LU,u=s.length,c=numeric.clone(e),f=t.P;for(n=u-1;-1!==n;--n)c[n]=e[n];for(n=0;n<u;++n)for(i=f[n],f[n]!==n&&(o=c[n],c[n]=c[i],c[i]=o),a=s[n],r=0;r<n;++r)c[n]-=c[r]*a[r];for(n=u-1;n>=0;--n){for(a=s[n],r=n+1;r<u;++r)c[n]-=c[r]*a[r];c[n]/=a[n];}return c;},numeric.solve=function(t,e,n){return numeric.LUsolve(numeric.LU(t,n),e);},numeric.echelonize=function(t){var e,n,r,i,a,o,s,u,c=numeric.dim(t),f=c[0],h=c[1],l=numeric.identity(f),d=Array(f),p=Math.abs,g=numeric.diveq;for(t=numeric.clone(t),e=0;e<f;++e){for(r=0,a=t[e],o=l[e],n=1;n<h;++n)p(a[r])<p(a[n])&&(r=n);for(d[e]=r,g(o,a[r]),g(a,a[r]),n=0;n<f;++n)if(n!==e){for(u=(s=t[n])[r],i=h-1;-1!==i;--i)s[i]-=a[i]*u;for(s=l[n],i=f-1;-1!==i;--i)s[i]-=o[i]*u;}}return {I:l,A:t,P:d};},numeric.__solveLP=function(t,e,n,r,i,a,o){var s,u,c,f,h=numeric.sum,l=(numeric.log,numeric.mul),d=numeric.sub,p=numeric.dot,g=numeric.div,v=numeric.add,m=t.length,y=n.length,x=!1,b=1,w=(numeric.transpose(e),numeric.svd,numeric.transpose),_=(numeric.leq,Math.sqrt),M=Math.abs,S=(numeric.muleq,numeric.norminf,numeric.any,Math.min),P=numeric.all,A=numeric.gt,k=Array(m),C=Array(y),E=(numeric.rep([y],1),numeric.solve),I=d(n,p(e,a)),N=p(t,t);for(c=0;c<i;++c){var T,O;for(T=y-1;-1!==T;--T)C[T]=g(e[T],I[T]);var j=w(C);for(T=m-1;-1!==T;--T)k[T]=h(j[T]);b=.25*M(N/p(t,k));var B=100*_(N/p(k,k));for((!isFinite(b)||b>B)&&(b=B),f=v(t,l(b,k)),u=p(j,C),T=m-1;-1!==T;--T)u[T][T]+=1;var L=g(I,p(e,O=E(u,g(f,b),!0))),D=1;for(T=y-1;-1!==T;--T)L[T]<0&&(D=S(D,-.999*L[T]));if(!P(A(I=d(n,p(e,s=d(a,l(O,D)))),0)))return {solution:a,message:"",iterations:c};if(a=s,b<r)return {solution:s,message:"",iterations:c};if(o){var R=p(t,f),F=p(e,f);for(x=!0,T=y-1;-1!==T;--T)if(R*F[T]<0){x=!1;break;}}else x=!(a[m-1]>=0);if(x)return {solution:s,message:"Unbounded",iterations:c};}return {solution:a,message:"maximum iteration count exceeded",iterations:c};},numeric._solveLP=function(t,e,n,r,i){var a=t.length,o=n.length,s=(numeric.sum,numeric.log,numeric.mul,numeric.sub),u=numeric.dot,c=(numeric.div,numeric.add,numeric.rep([a],0).concat([1])),f=numeric.rep([o,1],-1),h=numeric.blockMatrix([[e,f]]),l=n,d=numeric.rep([a],0).concat(Math.max(0,numeric.sup(numeric.neg(n)))+1),p=numeric.__solveLP(c,h,l,r,i,d,!1),g=numeric.clone(p.solution);if(g.length=a,numeric.inf(s(n,u(e,g)))<0)return {solution:NaN,message:"Infeasible",iterations:p.iterations};var v=numeric.__solveLP(t,e,n,r,i-p.iterations,g,!0);return v.iterations+=p.iterations,v;},numeric.solveLP=function(t,e,n,r,i,a,o){if(void 0===o&&(o=1e3),void 0===a&&(a=numeric.epsilon),void 0===r)return numeric._solveLP(t,e,n,a,o);var s,u=r.length,c=r[0].length,f=e.length,h=numeric.echelonize(r),l=numeric.rep([c],0),d=h.P,p=[];for(s=d.length-1;-1!==s;--s)l[d[s]]=1;for(s=c-1;-1!==s;--s)0===l[s]&&p.push(s);var g=numeric.getRange,v=numeric.linspace(0,u-1),m=numeric.linspace(0,f-1),y=g(r,v,p),x=g(e,m,d),b=g(e,m,p),w=numeric.dot,_=numeric.sub,M=w(x,h.I),S=_(b,w(M,y)),P=_(n,w(M,i)),A=Array(d.length),k=Array(p.length);for(s=d.length-1;-1!==s;--s)A[s]=t[d[s]];for(s=p.length-1;-1!==s;--s)k[s]=t[p[s]];var C=_(k,w(A,w(h.I,y))),E=numeric._solveLP(C,S,P,a,o),I=E.solution;if(I!=I)return E;var N=w(h.I,_(i,w(y,I))),T=Array(t.length);for(s=d.length-1;-1!==s;--s)T[d[s]]=N[s];for(s=p.length-1;-1!==s;--s)T[p[s]]=I[s];return {solution:T,message:E.message,iterations:E.iterations};},numeric.MPStoLP=function(t){t instanceof String&&t.split("\n");var e,n,r,i,a=0,o=["Initial state","NAME","ROWS","COLUMNS","RHS","BOUNDS","ENDATA"],s=t.length,u=0,c={},f=[],h=0,l={},d=0,p=[],g=[],v=[];function m(n){throw new Error("MPStoLP: "+n+"\nLine "+e+": "+t[e]+"\nCurrent state: "+o[a]+"\n");}for(e=0;e<s;++e){var y=(r=t[e]).match(/\S*/g),x=[];for(n=0;n<y.length;++n)""!==y[n]&&x.push(y[n]);if(0!==x.length){for(n=0;n<o.length&&r.substr(0,o[n].length)!==o[n];++n);if(n<o.length){if(a=n,1===n&&(i=x[1]),6===n)return {name:i,c:p,A:numeric.transpose(g),b:v,rows:c,vars:l};}else switch(a){case 0:case 1:m("Unexpected line");case 2:switch(x[0]){case"N":0===u?u=x[1]:m("Two or more N rows");break;case"L":c[x[1]]=h,f[h]=1,v[h]=0,++h;break;case"G":c[x[1]]=h,f[h]=-1,v[h]=0,++h;break;case"E":c[x[1]]=h,f[h]=0,v[h]=0,++h;break;default:m("Parse error "+numeric.prettyPrint(x));}break;case 3:l.hasOwnProperty(x[0])||(l[x[0]]=d,p[d]=0,g[d]=numeric.rep([h],0),++d);var b=l[x[0]];for(n=1;n<x.length;n+=2)if(x[n]!==u){var w=c[x[n]];g[b][w]=(f[w]<0?-1:1)*parseFloat(x[n+1]);}else p[b]=parseFloat(x[n+1]);break;case 4:for(n=1;n<x.length;n+=2)v[c[x[n]]]=(f[c[x[n]]]<0?-1:1)*parseFloat(x[n+1]);break;case 5:break;case 6:m("Internal error");}}}m("Reached end of file without ENDATA");},numeric.seedrandom={pow:Math.pow,random:Math.random},function(t,e,n,r,i,a,o){function s(t,e,n,r){for(t+="",n=0,r=0;r<t.length;r++)e[u(r)]=u((n^=19*e[u(r)])+t.charCodeAt(r));for(r in t="",e)t+=String.fromCharCode(e[r]);return t;}function u(t){return t&n-1;}e.seedrandom=function(r,c){var f,h=[];return r=s(function t(e,n,r,i,a){r=[];a=typeof e;if(n&&"object"==a)for(i in e)if(i.indexOf("S")<5)try{r.push(t(e[i],n-1));}catch(t){}return r.length?r:e+("string"!=a?"\0":"");}(c?[r,t]:arguments.length?r:[new Date().getTime(),t,window],3),h),s((f=new function(t){var e,r,i=this,a=t.length,o=0,s=i.i=i.j=i.m=0;i.S=[],i.c=[],a||(t=[a++]);for(;o<n;)i.S[o]=o++;for(o=0;o<n;o++)e=i.S[o],s=u(s+e+t[o%a]),r=i.S[s],i.S[o]=r,i.S[s]=e;i.g=function(t){var e=i.S,r=u(i.i+1),a=e[r],o=u(i.j+a),s=e[o];e[r]=s,e[o]=a;for(var c=e[u(a+s)];--t;)r=u(r+1),a=e[r],o=u(o+a),s=e[o],e[r]=s,e[o]=a,c=c*n+e[u(a+s)];return i.i=r,i.j=o,c;},i.g(n);}(h)).S,t),e.random=function(){for(var t=f.g(6),e=o,r=0;t<i;)t=(t+r)*n,e*=n,r=f.g(1);for(;t>=a;)t/=2,e/=2,r>>>=1;return (t+r)/e;},r;},o=e.pow(n,6),i=e.pow(2,i),a=2*i,s(e.random(),t);}([],numeric.seedrandom,256,0,52),function(t){function e(t){if("object"!=typeof t)return t;var n,r=[],i=t.length;for(n=0;n<i;n++)r[n+1]=e(t[n]);return r;}function n(t){if("object"!=typeof t)return t;var e,r=[],i=t.length;for(e=1;e<i;e++)r[e-1]=n(t[e]);return r;}function r(t,e,n,r,i,a,o,s,u,c,f,h,l,d,p,g){var v,m,y,x,b,w,_,M,S,P,A,k,C,E,I,N,T,O,j,B,L,D,R,F,Y,z,q;C=Math.min(r,c),y=2*r+C*(C+5)/2+2*c+1,F=1e-60;do{Y=1+.1*(F+=F),z=1+.2*F;}while(Y<=1||z<=1);for(v=1;v<=r;v+=1)p[v]=e[v];for(v=r+1;v<=y;v+=1)p[v]=0;for(v=1;v<=c;v+=1)h[v]=0;if(b=[],0===g[1]){if(function(t,e,n,r){var i,a,o,s,u,c;for(a=1;a<=n;a+=1){if(r[1]=a,c=0,(o=a-1)<1){if((c=t[a][a]-c)<=0)break;t[a][a]=Math.sqrt(c);}else{for(s=1;s<=o;s+=1){for(u=t[s][a],i=1;i<s;i+=1)u-=t[i][a]*t[i][s];u/=t[s][s],t[s][a]=u,c+=u*u;}if((c=t[a][a]-c)<=0)break;t[a][a]=Math.sqrt(c);}r[1]=0;}}(t,0,r,b),0!==b[1])return void(g[1]=2);!function(t,e,n,r){var i,a,o,s;for(a=1;a<=n;a+=1){for(s=0,i=1;i<a;i+=1)s+=t[i][a]*r[i];r[a]=(r[a]-s)/t[a][a];}for(o=1;o<=n;o+=1)for(r[a=n+1-o]=r[a]/t[a][a],s=-r[a],i=1;i<a;i+=1)r[i]=r[i]+s*t[i][a];}(t,0,r,e),function(t,e,n){var r,i,a,o,s;for(a=1;a<=n;a+=1){for(t[a][a]=1/t[a][a],s=-t[a][a],r=1;r<a;r+=1)t[r][a]=s*t[r][a];if(n<(o=a+1))break;for(i=o;i<=n;i+=1)for(s=t[a][i],t[a][i]=0,r=1;r<=a;r+=1)t[r][i]=t[r][i]+s*t[r][a];}}(t,0,r);}else{for(m=1;m<=r;m+=1)for(i[m]=0,v=1;v<=m;v+=1)i[m]=i[m]+t[v][m]*e[v];for(m=1;m<=r;m+=1)for(e[m]=0,v=m;v<=r;v+=1)e[m]=e[m]+t[m][v]*i[v];}for(a[1]=0,m=1;m<=r;m+=1)for(i[m]=e[m],a[1]=a[1]+p[m]*i[m],p[m]=0,v=m+1;v<=r;v+=1)t[v][m]=0;for(a[1]=-a[1]/2,g[1]=0,E=(P=(S=(A=(M=(_=r)+r)+C)+C+1)+C*(C+1)/2)+c,v=1;v<=c;v+=1){for(N=0,m=1;m<=r;m+=1)N+=o[m][v]*o[m][v];p[E+v]=Math.sqrt(N);}function X(){for(d[1]=d[1]+1,y=P,v=1;v<=c;v+=1){for(y+=1,N=-s[v],m=1;m<=r;m+=1)N+=o[m][v]*i[m];if(Math.abs(N)<F&&(N=0),v>f)p[y]=N;else if(p[y]=-Math.abs(N),N>0){for(m=1;m<=r;m+=1)o[m][v]=-o[m][v];s[v]=-s[v];}}for(v=1;v<=l;v+=1)p[P+h[v]]=0;for(k=0,I=0,v=1;v<=c;v+=1)p[P+v]<I*p[E+v]&&(k=v,I=p[P+v]/p[E+v]);return 0===k?999:0;}function G(){for(v=1;v<=r;v+=1){for(N=0,m=1;m<=r;m+=1)N+=t[m][v]*o[m][k];p[v]=N;}for(x=_,v=1;v<=r;v+=1)p[x+v]=0;for(m=l+1;m<=r;m+=1)for(v=1;v<=r;v+=1)p[x+v]=p[x+v]+t[v][m]*p[m];for(D=!0,v=l;v>=1;v-=1){for(N=p[v],x=(y=S+v*(v+3)/2)-v,m=v+1;m<=l;m+=1)N-=p[y]*p[M+m],y+=m;if(N/=p[x],p[M+v]=N,h[v]<f)break;if(N<0)break;D=!1,w=v;}if(!D)for(T=p[A+w]/p[M+w],v=1;v<=l&&!(h[v]<f)&&!(p[M+v]<0);v+=1)(I=p[A+v]/p[M+v])<T&&(T=I,w=v);for(N=0,v=_+1;v<=_+r;v+=1)N+=p[v]*p[v];if(Math.abs(N)<=F){if(D)return g[1]=1,999;for(v=1;v<=l;v+=1)p[A+v]=p[A+v]-T*p[M+v];return p[A+l+1]=p[A+l+1]+T,700;}for(N=0,v=1;v<=r;v+=1)N+=p[_+v]*o[v][k];for(O=-p[P+k]/N,R=!0,D||T<O&&(O=T,R=!1),v=1;v<=r;v+=1)i[v]=i[v]+O*p[_+v],Math.abs(i[v])<F&&(i[v]=0);for(a[1]=a[1]+O*N*(O/2+p[A+l+1]),v=1;v<=l;v+=1)p[A+v]=p[A+v]-O*p[M+v];if(p[A+l+1]=p[A+l+1]+O,!R){for(N=-s[k],m=1;m<=r;m+=1)N+=i[m]*o[m][k];if(k>f)p[P+k]=N;else if(p[P+k]=-Math.abs(N),N>0){for(m=1;m<=r;m+=1)o[m][k]=-o[m][k];s[k]=-s[k];}return 700;}for(h[l+=1]=k,y=S+(l-1)*l/2+1,v=1;v<=l-1;v+=1)p[y]=p[v],y+=1;if(l===r)p[y]=p[r];else{for(v=r;v>=l+1&&0!==p[v]&&(j=Math.max(Math.abs(p[v-1]),Math.abs(p[v])),B=Math.min(Math.abs(p[v-1]),Math.abs(p[v])),I=p[v-1]>=0?Math.abs(j*Math.sqrt(1+B*B/(j*j))):-Math.abs(j*Math.sqrt(1+B*B/(j*j))),j=p[v-1]/I,B=p[v]/I,1!==j);v-=1)if(0===j)for(p[v-1]=B*I,m=1;m<=r;m+=1)I=t[m][v-1],t[m][v-1]=t[m][v],t[m][v]=I;else for(p[v-1]=I,L=B/(1+j),m=1;m<=r;m+=1)I=j*t[m][v-1]+B*t[m][v],t[m][v]=L*(t[m][v-1]+I)-t[m][v],t[m][v-1]=I;p[y]=p[l];}return 0;}function W(){if(0===p[x=(y=S+w*(w+1)/2+1)+w])return 798;if(j=Math.max(Math.abs(p[x-1]),Math.abs(p[x])),B=Math.min(Math.abs(p[x-1]),Math.abs(p[x])),I=p[x-1]>=0?Math.abs(j*Math.sqrt(1+B*B/(j*j))):-Math.abs(j*Math.sqrt(1+B*B/(j*j))),j=p[x-1]/I,B=p[x]/I,1===j)return 798;if(0===j){for(v=w+1;v<=l;v+=1)I=p[x-1],p[x-1]=p[x],p[x]=I,x+=v;for(v=1;v<=r;v+=1)I=t[v][w],t[v][w]=t[v][w+1],t[v][w+1]=I;}else{for(L=B/(1+j),v=w+1;v<=l;v+=1)I=j*p[x-1]+B*p[x],p[x]=L*(p[x-1]+I)-p[x],p[x-1]=I,x+=v;for(v=1;v<=r;v+=1)I=j*t[v][w]+B*t[v][w+1],t[v][w+1]=L*(t[v][w]+I)-t[v][w+1],t[v][w]=I;}return 0;}function U(){for(x=y-w,v=1;v<=w;v+=1)p[x]=p[y],y+=1,x+=1;return p[A+w]=p[A+w+1],h[w]=h[w+1],(w+=1)<l?797:0;}function H(){return p[A+l]=p[A+l+1],p[A+l+1]=0,h[l]=0,l-=1,d[2]=d[2]+1,0;}for(l=0,d[1]=0,d[2]=0,q=0;;){if(999===(q=X()))return;for(;0!==(q=G());){if(999===q)return;if(700===q)if(w===l)H();else{for(;W(),797===(q=U()););H();}}}}numeric.solveQP=function(t,i,a,o,s,u){t=e(t),i=e(i),a=e(a);var c,f,h,l,d,p=[],g=[],v=[],m=[],y=[];if(s=s||0,u=u?e(u):[void 0,0],o=o?e(o):[],f=t.length-1,h=a[1].length-1,!o)for(c=1;c<=h;c+=1)o[c]=0;for(c=1;c<=h;c+=1)g[c]=0;for(l=Math.min(f,h),c=1;c<=f;c+=1)v[c]=0;for(p[1]=0,c=1;c<=2*f+l*(l+5)/2+2*h+1;c+=1)m[c]=0;for(c=1;c<=2;c+=1)y[c]=0;return r(t,i,0,f,v,p,a,o,0,h,s,g,0,y,m,u),d="",1===u[1]&&(d="constraints are inconsistent, no solution!"),2===u[1]&&(d="matrix D in quadratic function is not positive definite!"),{solution:n(v),value:n(p),unconstrained_solution:n(i),iterations:n(y),iact:n(g),message:d};};}(),numeric.svd=function(t){var e,n=numeric.epsilon,r=1e-64/n,i=0,a=0,o=0,s=0,u=0,c=numeric.clone(t),f=c.length,h=c[0].length;if(f<h)throw "Need more rows than columns";var l=new Array(h),d=new Array(h);for(a=0;a<h;a++)l[a]=d[a]=0;var p=numeric.rep([h,h],0);function g(t,e){return (t=Math.abs(t))>(e=Math.abs(e))?t*Math.sqrt(1+e*e/t/t):0==e?t:e*Math.sqrt(1+t*t/e/e);}var v=0,m=0,y=0,x=0,b=0,w=0,_=0;for(a=0;a<h;a++){for(l[a]=m,_=0,u=a+1,o=a;o<f;o++)_+=c[o][a]*c[o][a];if(_<=r)m=0;else for(v=c[a][a],m=Math.sqrt(_),v>=0&&(m=-m),y=v*m-_,c[a][a]=v-m,o=u;o<h;o++){for(_=0,s=a;s<f;s++)_+=c[s][a]*c[s][o];for(v=_/y,s=a;s<f;s++)c[s][o]+=v*c[s][a];}for(d[a]=m,_=0,o=u;o<h;o++)_+=c[a][o]*c[a][o];if(_<=r)m=0;else{for(v=c[a][a+1],m=Math.sqrt(_),v>=0&&(m=-m),y=v*m-_,c[a][a+1]=v-m,o=u;o<h;o++)l[o]=c[a][o]/y;for(o=u;o<f;o++){for(_=0,s=u;s<h;s++)_+=c[o][s]*c[a][s];for(s=u;s<h;s++)c[o][s]+=_*l[s];}}(b=Math.abs(d[a])+Math.abs(l[a]))>x&&(x=b);}for(a=h-1;-1!=a;a+=-1){if(0!=m){for(y=m*c[a][a+1],o=u;o<h;o++)p[o][a]=c[a][o]/y;for(o=u;o<h;o++){for(_=0,s=u;s<h;s++)_+=c[a][s]*p[s][o];for(s=u;s<h;s++)p[s][o]+=_*p[s][a];}}for(o=u;o<h;o++)p[a][o]=0,p[o][a]=0;p[a][a]=1,m=l[a],u=a;}for(a=h-1;-1!=a;a+=-1){for(u=a+1,m=d[a],o=u;o<h;o++)c[a][o]=0;if(0!=m){for(y=c[a][a]*m,o=u;o<h;o++){for(_=0,s=u;s<f;s++)_+=c[s][a]*c[s][o];for(v=_/y,s=a;s<f;s++)c[s][o]+=v*c[s][a];}for(o=a;o<f;o++)c[o][a]=c[o][a]/m;}else for(o=a;o<f;o++)c[o][a]=0;c[a][a]+=1;}for(n*=x,s=h-1;-1!=s;s+=-1)for(var M=0;M<50;M++){var S=!1;for(u=s;-1!=u;u+=-1){if(Math.abs(l[u])<=n){S=!0;break;}if(Math.abs(d[u-1])<=n)break;}if(!S){i=0,_=1;var P=u-1;for(a=u;a<s+1&&(v=_*l[a],l[a]=i*l[a],!(Math.abs(v)<=n));a++)for(y=g(v,m=d[a]),d[a]=y,i=m/y,_=-v/y,o=0;o<f;o++)b=c[o][P],w=c[o][a],c[o][P]=b*i+w*_,c[o][a]=-b*_+w*i;}if(w=d[s],u==s){if(w<0)for(d[s]=-w,o=0;o<h;o++)p[o][s]=-p[o][s];break;}if(M>=49)throw "Error: no convergence.";for(x=d[u],m=g(v=(((b=d[s-1])-w)*(b+w)+((m=l[s-1])-(y=l[s]))*(m+y))/(2*y*b),1),v=v<0?((x-w)*(x+w)+y*(b/(v-m)-y))/x:((x-w)*(x+w)+y*(b/(v+m)-y))/x,i=1,_=1,a=u+1;a<s+1;a++){for(m=l[a],b=d[a],y=_*m,m*=i,w=g(v,y),l[a-1]=w,v=x*(i=v/w)+m*(_=y/w),m=-x*_+m*i,y=b*_,b*=i,o=0;o<h;o++)x=p[o][a-1],w=p[o][a],p[o][a-1]=x*i+w*_,p[o][a]=-x*_+w*i;for(w=g(v,y),d[a-1]=w,v=(i=v/w)*m+(_=y/w)*b,x=-_*m+i*b,o=0;o<f;o++)b=c[o][a-1],w=c[o][a],c[o][a-1]=b*i+w*_,c[o][a]=-b*_+w*i;}l[u]=0,l[s]=v,d[s]=x;}for(a=0;a<d.length;a++)d[a]<n&&(d[a]=0);for(a=0;a<h;a++)for(o=a-1;o>=0;o--)if(d[o]<d[a]){for(i=d[o],d[o]=d[a],d[a]=i,s=0;s<c.length;s++)e=c[s][a],c[s][a]=c[s][o],c[s][o]=e;for(s=0;s<p.length;s++)e=p[s][a],p[s][a]=p[s][o],p[s][o]=e;a=o;}return {U:c,S:d,V:p};};}).call(this,__webpack_require__(98));},function(t,e,n){var r=n(24);t.exports={Random:n(413),Mds:n(412),Circular:n(411),Fruchterman:n(410),Radial:n(409),Force:n(406),Dagre:n(405),Concentric:n(229),Grid:n(228),FruchtermanGroup:n(227)},t.exports=r;},function(t,e,n){var r=n(10),i=n(1),a=n(99),o=a.get,s=a.cloneDeep,u=a.merge,c={options:{},getCustomConfig:function(){},itemType:"",draw:function(t,e){var n=this.drawShape(t,e);(n.set("className",this.itemType+"-shape"),t.label)&&this.drawLabel(t,e).set("className",this.itemType+"-label");return n;},drawShape:function(){},drawLabel:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.labelCfg,i=n.labelCfg,a=u({},r,i,t.labelCfg),o=this.getLabelStyle(t,a,e);return e.addShape("text",{attrs:o});},getLabelStyleByPosition:function(){},getLabelStyle:function(t,e,n){var a=this.getLabelStyleByPosition(t,e,n);a.text=t.label;var o=this.itemType+"Label",s=r[o]?r[o].style:null;return i.mix({},s,a,e.style);},getShapeStyle:function(t){return t.style;},update:function(t,e){var n=e.getContainer(),r=this.itemType+"-shape",i=n.findByClassName(r),a=this.getShapeStyle(t);i&&i.attr(a);var o=this.itemType+"-label",s=n.findByClassName(o);if(t.label){if(s){var u=t.labelCfg||{},c=this.getLabelStyle(t,u,n);s.resetMatrix(),s.attr(c);}else{this.drawLabel(t,n).set("className",o);}}else s&&s.remove();},setState:function(t,e,n){var r=n.get("keyShape");if(r){var a=n.getStateStyle(t),o=this.getStateStyle(t,e,n),s=u({},o,a);if(e)r.attr(s);else{var c=n.getCurrentStatesStyle();i.each(s,function(t,e){c[e]||(c[e]=null);}),r.attr(c);}}},getStateStyle:function(t,e,n){var r=n.getModel(),i=this.getCustomConfig(r)||{},a=this.options,c=a.style,f=a.stateStyles,h=i.style,l=i.stateStyles,d=u({},f,l),p=c;if(d[t]&&(p=d[t]),e)return u({},p,r.style);var g=n.getStates(),v=u({},c,h),m=s(v);return g.forEach(function(t){u(m,o(c,t,{}),o(h,t,{}),r.style);}),m;}};t.exports=c;},function(t,e,n){var r=n(70),i={isBetween:function(t,e,n){return t>=e&&t<=n;},getLineIntersect:function(t,e,n,r){var a=n.x-t.x,o=n.y-t.y,s=e.x-t.x,u=e.y-t.y,c=r.x-n.x,f=r.y-n.y,h=s*f-u*c,l=null;if(h*h>.001*(s*s+u*u)*(c*c+f*f)){var d=(a*f-o*c)/h,p=(a*u-o*s)/h;i.isBetween(d,0,1)&&i.isBetween(p,0,1)&&(l={x:t.x+d*s,y:t.y+d*u});}return l;},getRectIntersectByPoint:function(t,e){var n=t.x,r=t.y,a=t.width,o=t.height,s=[],u={x:n+a/2,y:r+o/2};s.push({x:n,y:r}),s.push({x:n+a,y:r}),s.push({x:n+a,y:r+o}),s.push({x:n,y:r+o}),s.push({x:n,y:r});for(var c=null,f=1;f<s.length&&!(c=i.getLineIntersect(s[f-1],s[f],u,e));f++);return c;},getCircleIntersectByPoint:function(t,e){var n=t.x,r=t.y,i=t.r,a=e.x,o=e.y;if(Math.sqrt(Math.pow(a-n,2)+Math.pow(o-r,2))<i)return null;var s=a-n,u=o-r,c=Math.sign(s),f=Math.sign(u),h=Math.atan(u/s);return {x:n+Math.abs(i*Math.cos(h))*c,y:r+Math.abs(i*Math.sin(h))*f};},getEllispeIntersectByPoint:function(t,e){var n=t.rx,r=t.ry,i=t.x,a=t.y,o=e.x-i,s=e.y-a,u=Math.atan2(s/r,o/n);return u<0&&(u+=2*Math.PI),{x:i+n*Math.cos(u),y:a+r*Math.sin(u)};},applyMatrix:function(t,e,n){void 0===n&&(n=1);var i=[t.x,t.y,n];return r.vec3.transformMat3(i,i,e),{x:i[0],y:i[1]};},invertMatrix:function(t,e,n){void 0===n&&(n=1);var i=r.mat3.invert([],e),a=[t.x,t.y,n];return r.vec3.transformMat3(a,a,i),{x:a[0],y:a[1]};},floydWarshall:function(t){for(var e=[],n=t.length,r=0;r<n;r+=1){e[r]=[];for(var i=0;i<n;i+=1)r===i?e[r][i]=0:0!==t[r][i]&&t[r][i]?e[r][i]=t[r][i]:e[r][i]=1/0;}for(var a=0;a<n;a+=1)for(var o=0;o<n;o+=1)for(var s=0;s<n;s+=1)e[o][s]>e[o][a]+e[a][s]&&(e[o][s]=e[o][a]+e[a][s]);return e;},getAdjMatrix:function(t,e){var n=t.nodes,r=t.edges,i=[],a=new Map();return n.forEach(function(t,e){a.set(t.id,e);i.push([]);}),r.forEach(function(t){var n=t.source,r=t.target,o=a.get(n),s=a.get(r);i[o][s]=1,e||(i[s][o]=1);}),i;},isConnected:function(t){if(t.length>0)for(var e=0;e<t[0].length;e++)if(t[0][e]===1/0)return !1;return !0;},getEDistance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]));},scaleMatrix:function(t,e){var n=[];return t.forEach(function(t){var r=[];t.forEach(function(t){r.push(t*e);}),n.push(r);}),n;},randomInitPos:function(t,e,n){void 0===e&&(e=[0,1]),void 0===n&&(n=[0,1]);for(var r=[],i=0;i<t;i++){var a=Math.random()*(e[1]-e[0])+e[0],o=Math.random()*(n[1]-n[0])+n[0];r.push([a,o]);}return r;},getCircleCenterByPoints:function(t,e,n){var r=t.x-e.x,i=t.y-e.y,a=t.x-n.x,o=t.y-n.y,s=(t.x*t.x-e.x*e.x-e.y*e.y+t.y*t.y)/2,u=(t.x*t.x-n.x*n.x-n.y*n.y+t.y*t.y)/2,c=i*a-r*o;return {x:-(o*s-i*u)/c,y:-(r*u-a*s)/c};},distance:function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r);}};t.exports=r.mix({},r,i);},function(t,e,n){var r=n(20);n(428),n(427),n(426),n(416),t.exports=r;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return {lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"};},initTransform:function(){var t=this._attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this._attrs.x,-1*this._attrs.y],["s",+t/12,+t/12],["t",this._attrs.x,this._attrs.y]]);},_assembleFont:function(){var t=this._attrs,e=t.fontSize,n=t.fontFamily,r=t.fontWeight,i=t.fontStyle,a=t.fontVariant;t.font=[i,a,r,e+"px",n].join(" ");},_setAttrText:function(){var t=this._attrs,e=t.text,n=null;if(r.isString(e)&&-1!==e.indexOf("\n")){var i=(n=e.split("\n")).length;t.lineCount=i;}t.textArr=n;},_getTextHeight:function(){var t=this._attrs,e=t.lineCount,n=1*t.fontSize;return e>1?n*e+this._getSpaceingY()*(e-1):n;},isHitBox:function(){return !1;},calculateBox:function(){var t=this._attrs,e=this._cfg;e.attrs&&!e.hasUpdate||(this._assembleFont(),this._setAttrText()),t.textArr||this._setAttrText();var n=t.x,r=t.y,i=this.measureText();if(!i)return {minX:n,minY:r,maxX:n,maxY:r};var a=this._getTextHeight(),o=t.textAlign,s=t.textBaseline,u=this.getHitLineWidth(),c={x:n,y:r-a};o&&("end"===o||"right"===o?c.x-=i:"center"===o&&(c.x-=i/2)),s&&("top"===s?c.y+=a:"middle"===s&&(c.y+=a/2)),this.set("startPoint",c);var f=u/2;return {minX:c.x-f,minY:c.y-f,maxX:c.x+i+f,maxY:c.y+a+f};},_getSpaceingY:function(){var t=this._attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n;},drawInner:function(t){var e=this._attrs,n=this._cfg;n.attrs&&!n.hasUpdate||(this._assembleFont(),this._setAttrText()),t.font=e.font;var i=e.text;if(i){var a=e.textArr,o=e.x,s=e.y;if(t.beginPath(),this.hasStroke()){var u=e.strokeOpacity;r.isNil(u)||1===u||(t.globalAlpha=u),a?this._drawTextArr(t,!1):t.strokeText(i,o,s),t.globalAlpha=1;}if(this.hasFill()){var c=e.fillOpacity;r.isNil(c)||1===c||(t.globalAlpha=c),a?this._drawTextArr(t,!0):t.fillText(i,o,s);}n.hasUpdate=!1;}},_drawTextArr:function(t,e){var n,i=this._attrs.textArr,a=this._attrs.textBaseline,o=1*this._attrs.fontSize,s=this._getSpaceingY(),u=this._attrs.x,c=this._attrs.y,f=this.getBBox(),h=f.maxY-f.minY;r.each(i,function(r,i){n=c+i*(s+o)-h+o,"middle"===a&&(n+=h-o-(h-o)/2),"top"===a&&(n+=h-o),e?t.fillText(r,u,n):t.strokeText(r,u,n);});},measureText:function(){var t,e=this._attrs,n=e.text,i=e.font,a=e.textArr,o=0;if(!r.isNil(n)){var s=document.createElement("canvas").getContext("2d");return s.save(),s.font=i,a?r.each(a,function(e){t=s.measureText(e).width,o<t&&(o=t),s.restore();}):(o=s.measureText(n).width,s.restore()),o;}}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(50).parseRadius,a=n(11),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(o,a),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return {lineWidth:1,radius:0};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return {minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,a=e.width,o=e.height,s=e.radius;if((t=t||this.get("context")).beginPath(),0===s)t.rect(n,r,a,o);else{var u=i(s);t.moveTo(n+u.r1,r),t.lineTo(n+a-u.r2,r),0!==u.r2&&t.arc(n+a-u.r2,r+u.r2,u.r2,-Math.PI/2,0),t.lineTo(n+a,r+o-u.r3),0!==u.r3&&t.arc(n+a-u.r3,r+o-u.r3,u.r3,0,Math.PI/2),t.lineTo(n+u.r4,r+o),0!==u.r4&&t.arc(n+u.r4,r+o-u.r4,u.r4,Math.PI/2,Math.PI),t.lineTo(n,r+u.r1),0!==u.r1&&t.arc(n+u.r1,r+u.r1,u.r1,Math.PI,1.5*Math.PI),t.closePath();}}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(11),a=n(72),o=n(74),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={points:null,lineWidth:1,startArrow:!1,endArrow:!1,tCache:null},r.extend(s,i),r.augment(s,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=this.getHitLineWidth(),n=t.points;if(!n||0===n.length)return null;var i=1/0,a=1/0,o=-1/0,s=-1/0;r.each(n,function(t){var e=t[0],n=t[1];e<i&&(i=e),e>o&&(o=e),n<a&&(a=n),n>s&&(s=n);});var u=e/2;return {minX:i-u,minY:a-u,maxX:o+u,maxY:s+u};},_setTcache:function(){var t,e,n=this._attrs.points,i=0,a=0,s=[];n&&0!==n.length&&(r.each(n,function(t,e){n[e+1]&&(i+=o.len(t[0],t[1],n[e+1][0],n[e+1][1]));}),i<=0||(r.each(n,function(r,u){n[u+1]&&((t=[])[0]=a/i,e=o.len(r[0],r[1],n[u+1][0],n[u+1][1]),a+=e,t[1]=a/i,s.push(t));}),this.tCache=s));},createPath:function(t){var e,n=this._attrs,r=n.points;if(!(r.length<2)){var i=r.length-1,o=r[0][0],s=r[0][1],u=r[i][0],c=r[i][1];if(n.startArrow&&n.startArrow.d){var f=a.getShortenOffset(r[0][0],r[0][1],r[1][0],r[1][1],n.startArrow.d);o+=f.dx,s+=f.dy;}if(n.endArrow&&n.endArrow.d){var h=a.getShortenOffset(r[i-1][0],r[i-1][1],r[i][0],r[i][1],n.endArrow.d);u-=h.dx,c-=h.dy;}for((t=t||this.get("context")).beginPath(),t.moveTo(o,s),e=1;e<i;e++)t.lineTo(r[e][0],r[e][1]);t.lineTo(u,c);}},getStartTangent:function(){var t=this.__attrs.points,e=[];return e.push([t[1][0],t[1][1]]),e.push([t[0][0],t[0][1]]),e;},getEndTangent:function(){var t=this.__attrs.points,e=t.length-1,n=[];return n.push([t[e-1][0],t[e-1][1]]),n.push([t[e][0],t[e][1]]),n;},afterPath:function(t){var e=this._attrs,n=e.points,r=n.length-1;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,n[1][0],n[1][1],n[0][0],n[0][1]),e.endArrow&&a.addEndArrow(t,e,n[r-1][0],n[r-1][1],n[r][0],n[r][1]);},getPoint:function(t){var e,n,i=this._attrs.points,a=this.tCache;return a||(this._setTcache(),a=this.tCache),r.each(a,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i);}),{x:o.at(i[n][0],i[n+1][0],e),y:o.at(i[n][1],i[n+1][1],e)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={points:null,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs.points,e=this.getHitLineWidth();if(!t||0===t.length)return null;var n=1/0,i=1/0,a=-1/0,o=-1/0;r.each(t,function(t){var e=t[0],r=t[1];e<n&&(n=e),e>a&&(a=e),r<i&&(i=r),r>o&&(o=r);});var s=e/2;return {minX:n-s,minY:i-s,maxX:a+s,maxY:o+s};},createPath:function(t){var e=this._attrs.points;e.length<2||((t=t||this.get("context")).beginPath(),r.each(e,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1]);}),t.closePath());}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(11),a=n(71),o=n(50),s=n(72),u=n(100),c=n(102),f=function t(e){t.superclass.constructor.call(this,e);};f.ATTRS={path:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(f,i),r.augment(f,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},_afterSetAttrPath:function(t){if(r.isNil(t))return this.setSilent("segments",null),void this.setSilent("box",void 0);var e,n=o.parsePath(t),i=[];if(r.isArray(n)&&0!==n.length&&("M"===n[0][0]||"m"===n[0][0])){for(var s=n.length,u=0;u<n.length;u++){var c=n[u];e=new a(c,e,u===s-1),i.push(e);}this.setSilent("segments",i),this.setSilent("tCache",null),this.setSilent("totalLength",null),this.setSilent("box",null);}},calculateBox:function(){var t=this.get("segments");if(!t)return null;var e=this.getHitLineWidth(),n=1/0,i=-1/0,a=1/0,o=-1/0;return r.each(t,function(t){t.getBBox(e);var r=t.box;r&&(r.minX<n&&(n=r.minX),r.maxX>i&&(i=r.maxX),r.minY<a&&(a=r.minY),r.maxY>o&&(o=r.maxY));}),n===1/0||a===1/0?{minX:0,minY:0,maxX:0,maxY:0}:{minX:n,minY:a,maxX:i,maxY:o};},_setTcache:function(){var t,e,n,i,a=0,o=0,s=[],u=this._cfg.curve;u&&(r.each(u,function(t,e){n=u[e+1],i=t.length,n&&(a+=c.len(t[i-2],t[i-1],n[1],n[2],n[3],n[4],n[5],n[6]));}),this._cfg.totalLength=a,0!==a?(r.each(u,function(r,f){n=u[f+1],i=r.length,n&&((t=[])[0]=o/a,e=c.len(r[i-2],r[i-1],n[1],n[2],n[3],n[4],n[5],n[6]),o+=e,t[1]=o/a,s.push(t));}),this._cfg.tCache=s):this._cfg.tCache=[]);},getTotalLength:function(){var t=this.get("totalLength");return r.isNil(t)?(this._calculateCurve(),this._setTcache(),this.get("totalLength")):t;},_calculateCurve:function(){var t=this._attrs.path;this._cfg.curve=u.pathTocurve(t);},getStartTangent:function(){var t,e,n,i,a=this.get("segments");if(a.length>1)if(t=a[0].endPoint,e=a[1].endPoint,n=a[1].startTangent,i=[],r.isFunction(n)){var o=n();i.push([t.x-o[0],t.y-o[1]]),i.push([t.x,t.y]);}else i.push([e.x,e.y]),i.push([t.x,t.y]);return i;},getEndTangent:function(){var t,e,n,i,a=this.get("segments"),o=a.length;if(o>1)if(t=a[o-2].endPoint,e=a[o-1].endPoint,n=a[o-1].endTangent,i=[],r.isFunction(n)){var s=n();i.push([e.x-s[0],e.y-s[1]]),i.push([e.x,e.y]);}else i.push([t.x,t.y]),i.push([e.x,e.y]);return i;},getPoint:function(t){var e,n,i=this._cfg.tCache;i||(this._calculateCurve(),this._setTcache(),i=this._cfg.tCache);var a=this._cfg.curve;if(!i||0===i.length)return a?{x:a[0][1],y:a[0][2]}:null;r.each(i,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i);});var o=a[n];if(r.isNil(o)||r.isNil(n))return null;var s=o.length,u=a[n+1];return {x:c.at(o[s-2],u[1],u[3],u[5],1-e),y:c.at(o[s-1],u[2],u[4],u[6],1-e)};},createPath:function(t){var e=this._attrs,n=this.get("segments");if(r.isArray(n)){var i=n.length;if((t=t||this.get("context")).beginPath(),e.startArrow&&e.startArrow.d){var a=this.getStartTangent(),o=s.getShortenOffset(a[0][0],a[0][1],a[1][0],a[1][1],e.startArrow.d);n[0].shortenDraw(t,o.dx,o.dy);}else n[0].draw(t);for(var u=1;u<i-2;u++)n[u].draw(t);if(e.endArrow&&e.endArrow.d){var c=this.getEndTangent(),f=s.getShortenOffset(c[0][0],c[0][1],c[1][0],c[1][1],e.endArrow.d),h=n[i-1];"Z"===h.command.toUpperCase()?(n[i-2].shortenDraw(t,f.dx,f.dy),h.draw(t)):(i>2&&n[i-2].draw(t),h.shortenDraw(t,f.dx,f.dy));}else n[i-2].draw(t),n[i-1].draw(t);}},afterPath:function(t){var e=this._attrs,n=this.get("segments"),i=e.path;if(t=t||this.get("context"),r.isArray(n)&&1!==n.length&&(e.startArrow||e.endArrow)&&"z"!==i[i.length-1]&&"Z"!==i[i.length-1]&&!e.fill){var a=this.getStartTangent();s.addStartArrow(t,e,a[0][0],a[0][1],a[1][0],a[1][1]);var o=this.getEndTangent();s.addEndArrow(t,e,o[0][0],o[0][1],o[1][0],o[1][1]);}}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(11),a=n(72),o=n(74),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"line",getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=t.x1,n=t.y1,r=t.x2,i=t.y2,a=this.getHitLineWidth();return o.box(e,n,r,i,a);},createPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;if(e.startArrow&&e.startArrow.d){var s=a.getShortenOffset(n,r,i,o,e.startArrow.d);n+=s.dx,r+=s.dy;}if(e.endArrow&&e.endArrow.d){var u=a.getShortenOffset(n,r,i,o,e.endArrow.d);i-=u.dx,o-=u.dy;}(t=t||this.get("context")).beginPath(),t.moveTo(n,r),t.lineTo(i,o);},afterPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,i,o,n,r),e.endArrow&&a.addEndArrow(t,e,n,r,i,o);},getPoint:function(t){var e=this._attrs;return {x:o.at(e.x1,e.x2,t),y:o.at(e.y1,e.y2,t)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(a,i),r.augment(a,{type:"image",isHitBox:function(){return !1;},calculateBox:function(){var t=this._attrs;this._cfg.attrs&&this._cfg.attrs.img===t.img||this._setAttrImg();var e=t.x,n=t.y;return {minX:e,minY:n,maxX:e+t.width,maxY:n+t.height};},_beforeSetLoading:function(t){var e=this.get("canvas");return !1===t&&!0===this.get("toDraw")&&(this._cfg.loading=!1,e.draw()),t;},_setAttrImg:function(){var t=this,e=t._attrs,n=e.img;if(!r.isString(n))return n instanceof Image?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):n instanceof HTMLElement&&r.isString(n.nodeName)&&"CANVAS"===n.nodeName.toUpperCase()?(e.width||t.attr("width",Number(n.getAttribute("width"))),e.height||t.attr("height",Number(n.getAttribute("height"))),n):n instanceof ImageData?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):null;var i=new Image();i.onload=function(){if(t.get("destroyed"))return !1;t.attr("imgSrc",n),t.attr("img",i);var e=t.get("callback");e&&e.call(t),t.set("loading",!1);},i.src=n,i.crossOrigin="Anonymous",t.set("loading",!0);},drawInner:function(t){this._cfg.hasUpdate&&this._setAttrImg(),this.get("loading")?this.set("toDraw",!0):(this._drawImage(t),this._cfg.hasUpdate=!1);},_drawImage:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.img,o=e.width,s=e.height,u=e.sx,c=e.sy,f=e.swidth,h=e.sheight;this.set("toDraw",!1);var l=a;if(l instanceof ImageData&&((l=new Image()).src=a),l instanceof Image||l instanceof HTMLElement&&r.isString(l.nodeName)&&"CANVAS"===l.nodeName.toUpperCase()){if(r.isNil(u)||r.isNil(c)||r.isNil(f)||r.isNil(h))return void t.drawImage(l,n,i,o,s);if(!(r.isNil(u)||r.isNil(c)||r.isNil(f)||r.isNil(h)))return void t.drawImage(l,u,c,f,h,n,i,o,s);}}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(11),a=n(73),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return {clockwise:!1,lineWidth:1,rs:0,re:0};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rs,i=t.re,o=t.startAngle,s=t.endAngle,u=t.clockwise,c=this.getHitLineWidth(),f=a.box(e,n,r,o,s,u),h=a.box(e,n,i,o,s,u),l=c/2;return {minX:Math.min(f.minX,h.minX)-l,minY:Math.min(f.minY,h.minY)-l,maxX:Math.max(f.maxX,h.maxX)+l,maxY:Math.max(f.maxY,h.maxY)+l};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.rs,a=e.re,o=e.startAngle,s=e.endAngle,u=e.clockwise,c={x:Math.cos(o)*i+n,y:Math.sin(o)*i+r},f={x:Math.cos(o)*a+n,y:Math.sin(o)*a+r},h={x:Math.cos(s)*i+n,y:Math.sin(s)*i+r};(t=t||self.get("context")).beginPath(),t.moveTo(c.x,c.y),t.lineTo(f.x,f.y),t.arc(n,r,a,o,s,u),t.lineTo(h.x,h.y),t.arc(n,r,i,s,o,!u),t.closePath();}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rx,i=t.ry,a=this.getHitLineWidth(),o=r+a/2,s=i+a/2;return {minX:e-o,minY:n-s,maxX:e+o,maxY:n+s};},createPath:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.rx,o=e.ry;t=t||self.get("context");var s=a>o?a:o,u=a>o?1:a/o,c=a>o?o/a:1,f=[1,0,0,0,1,0,0,0,1];r.mat3.scale(f,f,[u,c]),r.mat3.translate(f,f,[n,i]),t.beginPath(),t.save(),t.transform(f[0],f[1],f[3],f[4],f[6],f[7]),t.arc(0,0,s,0,2*Math.PI),t.restore(),t.closePath();}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"dom",calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return {minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a};}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(11),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=this.getHitLineWidth()/2+r;return {minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r;t.beginPath(),t.arc(n,r,i,0,2*Math.PI,!1),t.closePath();}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(11),a=n(73),o=n(72);function s(t,e,n){return t+e*Math.cos(n);}function u(t,e,n){return t+e*Math.sin(n);}var c=function t(e){t.superclass.constructor.call(this,e);};c.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(c,i),r.augment(c,{canStroke:!0,type:"arc",getDefaultAttrs:function(){return {x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=t.startAngle,o=t.endAngle,s=t.clockwise,u=this.getHitLineWidth()/2,c=a.box(e,n,r,i,o,s);return c.minX-=u,c.minY-=u,c.maxX+=u,c.maxY+=u,c;},getStartTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.startAngle,i=t.r,a=t.clockwise,o=Math.PI/180;a&&(o*=-1);var c=[],f=s(e,i,r+o),h=u(n,i,r+o),l=s(e,i,r),d=u(n,i,r);return c.push([f,h]),c.push([l,d]),c;},getEndTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.endAngle,i=t.r,a=t.clockwise,o=Math.PI/180,c=[];a&&(o*=-1);var f=s(e,i,r+o),h=u(n,i,r+o),l=s(e,i,r),d=u(n,i,r);return c.push([l,d]),c.push([f,h]),c;},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r,a=e.startAngle,o=e.endAngle,s=e.clockwise;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,a,o,s);},afterPath:function(t){var e=this._attrs;if(t=t||this.get("context"),e.startArrow){var n=this.getStartTangent();o.addStartArrow(t,e,n[0][0],n[0][1],n[1][0],n[1][1]);}if(e.endArrow){var r=this.getEndTangent();o.addEndArrow(t,e,r[0][0],r[0][1],r[1][0],r[1][1]);}}}),t.exports=c;},function(t,e){t.exports={xAt:function(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r;},yAt:function(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r;},xExtrema:function(t,e,n){return Math.atan(-n/e*Math.tan(t));},yExtrema:function(t,e,n){return Math.atan(n/(e*Math.tan(t)));}};},function(t,e,n){var r=n(0),i=r.vec2;function a(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n;}function o(t,e,n,r,o,s,u,c,f){var h,l,d,p,g,v,m,y=.005,x=1/0,b=[u,c];for(g=0;g<1;g+=.05)d=[a(t,n,o,g),a(e,r,s,g)],(l=i.squaredDistance(b,d))<x&&(h=g,x=l);for(x=1/0,m=0;m<32&&!(y<1e-4);m++){var w=h-y,_=h+y;d=[a(t,n,o,w),a(e,r,s,w)],l=i.squaredDistance(b,d),w>=0&&l<x?(h=w,x=l):(p=[a(t,n,o,_),a(e,r,s,_)],v=i.squaredDistance(b,p),_<=1&&v<x?(h=_,x=v):y*=.5);}return f&&(f.x=a(t,n,o,h),f.y=a(e,r,s,h)),Math.sqrt(x);}t.exports={at:a,projectPoint:function(t,e,n,r,i,a,s,u){var c={};return o(t,e,n,r,i,a,s,u,c),c;},pointDistance:o,extrema:function(t,e,n){var i=t+n-2*e;if(r.isNumberEqual(i,0))return [.5];var a=(t-e)/i;return a<=1&&a>=0?[a]:[];}};},function(t,e,n){var r=n(108),i=Array.prototype.slice;var a=function(){};r.augment(a,{on:function(t,e,n){if(!r.isFunction(e))throw new TypeError("listener should be a function");return this._cfg._events||(this._cfg._events={}),this._cfg._events[t]||(this._cfg._events[t]=[]),this._cfg._events[t].push({callback:e,one:n}),this;},one:function(t,e){return this.on(t,e,!0),this;},emit:function(t){if(!this.get("destroyed")&&this._cfg._events&&!r.isEmpty(this._cfg._events)){var e=this._cfg._events[t];if(!r.isEmpty(e))for(var n=arguments,a=i.call(n,1),o=e.length,s=0;s<o;)e[s]&&(e[s].callback.apply(this,a),e[s]&&e[s].one?(e.splice(s,1),o--):s++);}},trigger:function(){this.emit.apply(this,arguments);},off:function(t,e){var n=this._cfg._events;if(n&&!r.isEmpty(n)){if(0===arguments.length)return this._cfg._events={},this;if(n[t]){var i=function(t,e){for(var n=t.length;n--;)if(t[n].callback===e)return n;return -1;}(n[t],e);i>=0&&n[t].splice(i,1),0===n[t].length&&delete n[t];}}},removeEvent:function(t){return void 0===t?this._cfg._events={}:delete this._cfg._events[t],this;},_getEvents:function(){return this._cfg._events||{};}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(458),a=n(457),o=n(456),s=n(455),u=function(t){this._cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this._cfg,this.getDefaultCfg(),t),this.initAttrs(this._cfg.attrs),this._cfg.attrs={},this.initTransform(),this.init();};u.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(u,i,a,s,o,{init:function(){this.setSilent("animable",!0),this.setSilent("animating",!1);},getParent:function(){return this._cfg.parent;},getDefaultCfg:function(){return {};},set:function(t,e){return "zIndex"===t&&this._beforeSetZIndex&&this._beforeSetZIndex(e),"loading"===t&&this._beforeSetLoading&&this._beforeSetLoading(e),this._cfg[t]=e,this;},setSilent:function(t,e){this._cfg[t]=e;},get:function(t){return this._cfg[t];},show:function(){return this._cfg.visible=!0,this;},hide:function(){return this._cfg.visible=!1,this;},remove:function(t,e){var n=this._cfg,i=n.parent,a=n.el;return i&&r.remove(i.get("children"),this),a&&(e?i&&i._cfg.tobeRemoved.push(a):a.parentNode.removeChild(a)),(t||void 0===t)&&this.destroy(),this;},destroy:function(){this.get("destroyed")||(this._attrs=null,this.removeEvent(),this._cfg={destroyed:!0});},toFront:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);n.splice(i,1),n.push(this),r&&(r.parentNode.removeChild(r),t.el=null);}},toBack:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);if(n.splice(i,1),n.unshift(this),r){var a=r.parentNode;a.removeChild(r),a.insertBefore(r,a.firstChild);}}},_beforeSetZIndex:function(t){var e=this._cfg.parent;this._cfg.zIndex=t,r.isNil(e)||e.sort();var n=this._cfg.el;if(n){var i=e._cfg.children,a=i.indexOf(this),o=n.parentNode;o.removeChild(n),a===i.length-1?o.appendChild(n):o.insertBefore(n,o.childNodes[a]);}return t;},_setAttrs:function(t){return this.attr(t),t;},setZIndex:function(t){return this._cfg.zIndex=t,this._beforeSetZIndex(t);},clone:function(){return r.clone(this);},getBBox:function(){}}),t.exports=u;},function(t,e,n){var r=n(0),i=n(188),a=n(454),o={},s="_INDEX",u=["zIndex","capture","visible"];function c(t,e,n){for(var r,i=t.length-1;i>=0;i--){var a=t[i];if(a._cfg.visible&&a._cfg.capture&&(a.isGroup?r=a.getShape(e,n):a.isHit(e,n)&&(r=a)),r)break;}return r;}var f=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this.set("tobeRemoved",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI();};r.extend(f,i),r.augment(f,{isGroup:!0,type:"group",canFill:!0,canStroke:!0,getDefaultCfg:function(){return function t(e){if(!e._cfg&&e!==f){var n=e.superclass.constructor;n&&!n._cfg&&t(n),e._cfg={},r.merge(e._cfg,n._cfg),r.merge(e._cfg,e.CFG);}}(this.constructor),r.merge({},this.constructor._cfg);},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n=this.get("canvas");e=e||{};var i=o[t];if(i||(i=r.upperFirst(t),o[t]=i),e.attrs&&n){var s=e.attrs;if("text"===t){var u=n.get("fontFamily");u&&(s.fontFamily=s.fontFamily?s.fontFamily:u);}}e.canvas=n,e.type=t;var c=new a[i](e);return this.add(c),c;},addGroup:function(t,e){var n,i=this.get("canvas");if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=i,e.parent=this,n=new t(e)):n=new t({canvas:i,parent:this}),this.add(n);else if(r.isObject(t))t.canvas=i,n=new f(t),this.add(n);else{if(void 0!==t)return !1;n=new f(),this.add(n);}return n;},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n;},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t;}0===arguments.length&&(e=!0),f.superclass.remove.call(this,e);}return this;},add:function(t){var e=this,n=e.get("children");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e._setCfgProperty(t);}),e._cfg.children=n.concat(t);else{var i=t,a=i.get("parent");a&&a.removeChild(i,!1),e._setCfgProperty(i),n.push(i);}return e;},_setCfgProperty:function(t){var e=this._cfg;t.set("parent",this),t.set("canvas",e.canvas),e.timeline&&t.set("timeline",e.timeline);},contain:function(t){return this.get("children").indexOf(t)>-1;},getChildByIndex:function(t){return this.get("children")[t];},getFirst:function(){return this.getChildByIndex(0);},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t);},getBBox:function(){var t=1/0,e=-1/0,n=1/0,i=-1/0,a=this.get("children");a.length>0?r.each(a,function(r){if(r.get("visible")){if(r.isGroup&&0===r.get("children").length)return;var a=r.getBBox();if(!a)return !0;var o=[a.minX,a.minY,1],s=[a.minX,a.maxY,1],u=[a.maxX,a.minY,1],c=[a.maxX,a.maxY,1];r.apply(o),r.apply(s),r.apply(u),r.apply(c);var f=Math.min(o[0],s[0],u[0],c[0]),h=Math.max(o[0],s[0],u[0],c[0]),l=Math.min(o[1],s[1],u[1],c[1]),d=Math.max(o[1],s[1],u[1],c[1]);f<t&&(t=f),h>e&&(e=h),l<n&&(n=l),d>i&&(i=d);}}):(t=0,e=0,n=0,i=0);var o={minX:t,minY:n,maxX:e,maxY:i};return o.x=o.minX,o.y=o.minY,o.width=o.maxX-o.minX,o.height=o.maxY-o.minY,o;},getCount:function(){return this.get("children").length;},sort:function(){var t=this.get("children");return r.each(t,function(t,e){return t[s]=e,t;}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r;};}(function(t,e){return t.get("zIndex")-e.get("zIndex");})),this;},findById:function(t){return this.find(function(e){return e.get("id")===t;});},find:function(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return !1;}),n;},findAll:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},findBy:function(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return !1;}),n;},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},getShape:function(t,e){var n,r=this._attrs.clip,i=this._cfg.children;if(r){var a=[t,e,1];r.invert(a,this.get("canvas")),r.isPointInPath(a[0],a[1])&&(n=c(i,t,e));}else n=c(i,t,e);return n;},clearTotalMatrix:function(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this._cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix();}}},clear:function(t){if(!this.get("destroyed")){for(var e=this._cfg.children,n=e.length-1;n>=0;n--)e[n].remove(!0,t);return this._cfg.children=[],this;}},destroy:function(){this.get("destroyed")||(this.clear(),f.superclass.destroy.call(this));},clone:function(){var t=this,e=t._cfg.children,n=t._attrs,i={};r.each(n,function(t,e){i[e]="matrix"===e?function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e;}(n[e]):n[e];});var a=new f({attrs:i,canvas:t.get("canvas")});return r.each(e,function(t){a.add(t.clone());}),r.each(u,function(e){a._cfg[e]=t._cfg[e];}),a;}}),t.exports=f;},function(t,e,n){var r=n(106),i=n(7),a=n(105);t.exports=function(t,e){return t=r(t),i(e,function(e){switch(e[0]){case"t":a.translate(t,t,[e[1],e[2]]);break;case"s":a.scale(t,t,[e[1],e[2]]);break;case"r":a.rotate(t,t,e[1]);break;case"m":a.multiply(t,t,e[1]);break;default:return !1;}}),t;};},function(t,e,n){var r=n(460);t.exports=r;},function(t,e,n){var r=n(461),i=n(193);r.angle=function(t,e){var n=r.dot(t,e)/(r.length(t)*r.length(e));return Math.acos(i(n,-1,1));},r.direction=function(t,e){return t[0]*e[1]-e[0]*t[1];},r.angleTo=function(t,e,n){var i=r.angle(t,e),a=r.direction(t,e)>=0;return n?a?2*Math.PI-i:i:a?i:2*Math.PI-i;},r.vertical=function(t,e,n){return n?(t[0]=e[1],t[1]=-1*e[0]):(t[0]=-1*e[1],t[1]=e[0]),t;},t.exports=r;},function(t,e){t.exports=function(t,e,n){return t<e?e:t>n?n:t;};},function(t,e,n){var r=n(107),i=n(196),a=n(76);t.exports=function(t){for(var e=i(arguments),n=1;n<e.length;n++){var o=e[n];r(o)&&(o=o.prototype),a(t.prototype,o);}};},function(t,e,n){var r=n(107),i=n(76);t.exports=function(t,e,n,a){r(e)||(n=e,e=t,t=function(){});var o=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}});}:function(t,e){function n(){}n.prototype=t;var r=new n();return r.constructor=e,r;},s=o(e.prototype,t);return t.prototype=i(s,t.prototype),t.superclass=o(e.prototype,e),i(s,n),i(t,a),t;};},function(t,e,n){var r=n(51);t.exports=function(t){return r(t)?Array.prototype.slice.call(t):[];};},function(t,e,n){var r=n(470);t.exports=function(t){var e=r(t);return e.charAt(0).toUpperCase()+e.substring(1);};},function(t,e){var n=function(){var t={};return function(e){return t[e=e||"g"]?t[e]+=1:t[e]=1,e+t[e];};}();t.exports=n;},function(t,e,n){function r(t){return +t;}function i(t){return t*t;}function a(t){return t*(2-t);}function o(t){return ((t*=2)<=1?t*t:--t*(2-t)+1)/2;}function s(t){return t*t*t;}function u(t){return --t*t*t+1;}function c(t){return ((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;}n.r(e);var f=function t(e){function n(t){return Math.pow(t,e);}return e=+e,n.exponent=t,n;}(3),h=function t(e){function n(t){return 1-Math.pow(1-t,e);}return e=+e,n.exponent=t,n;}(3),l=function t(e){function n(t){return ((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2;}return e=+e,n.exponent=t,n;}(3),d=Math.PI,p=d/2;function g(t){return 1-Math.cos(t*p);}function v(t){return Math.sin(t*p);}function m(t){return (1-Math.cos(d*t))/2;}function y(t){return Math.pow(2,10*t-10);}function x(t){return 1-Math.pow(2,-10*t);}function b(t){return ((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2;}function w(t){return 1-Math.sqrt(1-t*t);}function _(t){return Math.sqrt(1- --t*t);}function M(t){return ((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2;}var S=4/11,P=6/11,A=8/11,k=.75,C=9/11,E=10/11,I=.9375,N=21/22,T=63/64,O=1/S/S;function j(t){return 1-B(1-t);}function B(t){return (t=+t)<S?O*t*t:t<A?O*(t-=P)*t+k:t<E?O*(t-=C)*t+I:O*(t-=N)*t+T;}function L(t){return ((t*=2)<=1?1-B(1-t):B(t-1)+1)/2;}var D=function t(e){function n(t){return t*t*((e+1)*t-e);}return e=+e,n.overshoot=t,n;}(1.70158),R=function t(e){function n(t){return --t*t*((e+1)*t+e)+1;}return e=+e,n.overshoot=t,n;}(1.70158),F=function t(e){function n(t){return ((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2;}return e=+e,n.overshoot=t,n;}(1.70158),Y=2*Math.PI,z=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return e*Math.pow(2,10*--t)*Math.sin((r-t)/n);}return i.amplitude=function(e){return t(e,n*Y);},i.period=function(n){return t(e,n);},i;}(1,.3),q=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/n);}return i.amplitude=function(e){return t(e,n*Y);},i.period=function(n){return t(e,n);},i;}(1,.3),X=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=Y);function i(t){return ((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((r-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((r+t)/n))/2;}return i.amplitude=function(e){return t(e,n*Y);},i.period=function(n){return t(e,n);},i;}(1,.3);n.d(e,"easeLinear",function(){return r;}),n.d(e,"easeQuad",function(){return o;}),n.d(e,"easeQuadIn",function(){return i;}),n.d(e,"easeQuadOut",function(){return a;}),n.d(e,"easeQuadInOut",function(){return o;}),n.d(e,"easeCubic",function(){return c;}),n.d(e,"easeCubicIn",function(){return s;}),n.d(e,"easeCubicOut",function(){return u;}),n.d(e,"easeCubicInOut",function(){return c;}),n.d(e,"easePoly",function(){return l;}),n.d(e,"easePolyIn",function(){return f;}),n.d(e,"easePolyOut",function(){return h;}),n.d(e,"easePolyInOut",function(){return l;}),n.d(e,"easeSin",function(){return m;}),n.d(e,"easeSinIn",function(){return g;}),n.d(e,"easeSinOut",function(){return v;}),n.d(e,"easeSinInOut",function(){return m;}),n.d(e,"easeExp",function(){return b;}),n.d(e,"easeExpIn",function(){return y;}),n.d(e,"easeExpOut",function(){return x;}),n.d(e,"easeExpInOut",function(){return b;}),n.d(e,"easeCircle",function(){return M;}),n.d(e,"easeCircleIn",function(){return w;}),n.d(e,"easeCircleOut",function(){return _;}),n.d(e,"easeCircleInOut",function(){return M;}),n.d(e,"easeBounce",function(){return B;}),n.d(e,"easeBounceIn",function(){return j;}),n.d(e,"easeBounceOut",function(){return B;}),n.d(e,"easeBounceInOut",function(){return L;}),n.d(e,"easeBack",function(){return F;}),n.d(e,"easeBackIn",function(){return D;}),n.d(e,"easeBackOut",function(){return R;}),n.d(e,"easeBackInOut",function(){return F;}),n.d(e,"easeElastic",function(){return q;}),n.d(e,"easeElasticIn",function(){return z;}),n.d(e,"easeElasticOut",function(){return q;}),n.d(e,"easeElasticInOut",function(){return X;});},function(t,e,n){n.r(e);var r=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t;};function i(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n;}function a(){}var o="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",c=/^#([0-9a-f]{3,8})$/,f=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),h=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),l=new RegExp("^rgba\\("+[o,o,o,s]+"\\)$"),d=new RegExp("^rgba\\("+[u,u,u,s]+"\\)$"),p=new RegExp("^hsl\\("+[s,u,u]+"\\)$"),g=new RegExp("^hsla\\("+[s,u,u,s]+"\\)$"),v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function m(){return this.rgb().formatHex();}function y(){return this.rgb().formatRgb();}function x(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=c.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?b(e):3===n?new S(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?new S(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?new S(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=f.exec(t))?new S(e[1],e[2],e[3],1):(e=h.exec(t))?new S(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=l.exec(t))?w(e[1],e[2],e[3],e[4]):(e=d.exec(t))?w(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=p.exec(t))?C(e[1],e[2]/100,e[3]/100,1):(e=g.exec(t))?C(e[1],e[2]/100,e[3]/100,e[4]):v.hasOwnProperty(t)?b(v[t]):"transparent"===t?new S(NaN,NaN,NaN,0):null;}function b(t){return new S(t>>16&255,t>>8&255,255&t,1);}function w(t,e,n,r){return r<=0&&(t=e=n=NaN),new S(t,e,n,r);}function _(t){return t instanceof a||(t=x(t)),t?new S((t=t.rgb()).r,t.g,t.b,t.opacity):new S();}function M(t,e,n,r){return 1===arguments.length?_(t):new S(t,e,n,null==r?1:r);}function S(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r;}function P(){return "#"+k(this.r)+k(this.g)+k(this.b);}function A(){var t=this.opacity;return (1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")");}function k(t){return ((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16);}function C(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new N(t,e,n,r);}function E(t){if(t instanceof N)return new N(t.h,t.s,t.l,t.opacity);if(t instanceof a||(t=x(t)),!t)return new N();if(t instanceof N)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),o=Math.max(e,n,r),s=NaN,u=o-i,c=(o+i)/2;return u?(s=e===o?(n-r)/u+6*(n<r):n===o?(r-e)/u+2:(e-n)/u+4,u/=c<.5?o+i:2-o-i,s*=60):u=c>0&&c<1?0:s,new N(s,u,c,t.opacity);}function I(t,e,n,r){return 1===arguments.length?E(t):new N(t,e,n,null==r?1:r);}function N(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}function T(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e);}function O(t,e,n,r,i){var a=t*t,o=a*t;return ((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6;}r(a,x,{copy:function(t){return Object.assign(new this.constructor(),this,t);},displayable:function(){return this.rgb().displayable();},hex:m,formatHex:m,formatHsl:function(){return E(this).formatHsl();},formatRgb:y,toString:y}),r(S,M,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new S(this.r*t,this.g*t,this.b*t,this.opacity);},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new S(this.r*t,this.g*t,this.b*t,this.opacity);},rgb:function(){return this;},displayable:function(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1;},hex:P,formatHex:P,formatRgb:A,toString:A})),r(N,I,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new N(this.h,this.s,this.l*t,this.opacity);},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new N(this.h,this.s,this.l*t,this.opacity);},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new S(T(t>=240?t-240:t+120,i,r),T(t,i,r),T(t<120?t+240:t-120,i,r),this.opacity);},displayable:function(){return (0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1;},formatHsl:function(){var t=this.opacity;return (1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")");}}));var j=function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),i=t[r],a=t[r+1],o=r>0?t[r-1]:2*i-a,s=r<e-1?t[r+2]:2*a-i;return O((n-r/e)*e,o,i,a,s);};},B=function(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),i=t[(r+e-1)%e],a=t[r%e],o=t[(r+1)%e],s=t[(r+2)%e];return O((n-r/e)*e,i,a,o,s);};},L=function(t){return function(){return t;};};function D(t,e){return function(n){return t+n*e;};}function R(t,e){var n=e-t;return n?D(t,n>180||n<-180?n-360*Math.round(n/360):n):L(isNaN(t)?e:t);}function F(t){return 1==(t=+t)?Y:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n);};}(e,n,t):L(isNaN(e)?n:e);};}function Y(t,e){var n=e-t;return n?D(t,n):L(isNaN(t)?e:t);}var z=function t(e){var n=F(e);function r(t,e){var r=n((t=M(t)).r,(e=M(e)).r),i=n(t.g,e.g),a=n(t.b,e.b),o=Y(t.opacity,e.opacity);return function(e){return t.r=r(e),t.g=i(e),t.b=a(e),t.opacity=o(e),t+"";};}return r.gamma=t,r;}(1);function q(t){return function(e){var n,r,i=e.length,a=new Array(i),o=new Array(i),s=new Array(i);for(n=0;n<i;++n)r=M(e[n]),a[n]=r.r||0,o[n]=r.g||0,s[n]=r.b||0;return a=t(a),o=t(o),s=t(s),r.opacity=1,function(t){return r.r=a(t),r.g=o(t),r.b=s(t),r+"";};};}var X=q(j),G=q(B),W=function(t,e){var n,r=e?e.length:0,i=t?Math.min(r,t.length):0,a=new Array(i),o=new Array(r);for(n=0;n<i;++n)a[n]=nt(t[n],e[n]);for(;n<r;++n)o[n]=e[n];return function(t){for(n=0;n<i;++n)o[n]=a[n](t);return o;};},U=function(t,e){var n=new Date();return e-=t=+t,function(r){return n.setTime(t+e*r),n;};},H=function(t,e){return e-=t=+t,function(n){return t+e*n;};},V=function(t,e){var n,r={},i={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?r[n]=nt(t[n],e[n]):i[n]=e[n];return function(t){for(n in r)i[n]=r[n](t);return i;};},Z=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Q=new RegExp(Z.source,"g");var $,K,J,tt,et=function(t,e){var n,r,i,a=Z.lastIndex=Q.lastIndex=0,o=-1,s=[],u=[];for(t+="",e+="";(n=Z.exec(t))&&(r=Q.exec(e));)(i=r.index)>a&&(i=e.slice(a,i),s[o]?s[o]+=i:s[++o]=i),(n=n[0])===(r=r[0])?s[o]?s[o]+=r:s[++o]=r:(s[++o]=null,u.push({i:o,x:H(n,r)})),a=Q.lastIndex;return a<e.length&&(i=e.slice(a),s[o]?s[o]+=i:s[++o]=i),s.length<2?u[0]?function(t){return function(e){return t(e)+"";};}(u[0].x):function(t){return function(){return t;};}(e):(e=u.length,function(t){for(var n,r=0;r<e;++r)s[(n=u[r]).i]=n.x(t);return s.join("");});},nt=function(t,e){var n,r=typeof e;return null==e||"boolean"===r?L(e):("number"===r?H:"string"===r?(n=x(e))?(e=n,z):et:e instanceof x?z:e instanceof Date?U:Array.isArray(e)?W:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?V:H)(t,e);},rt=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n);};},it=180/Math.PI,at={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},ot=function(t,e,n,r,i,a){var o,s,u;return (o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(u=t*n+e*r)&&(n-=t*u,r-=e*u),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,u/=s),t*r<e*n&&(t=-t,e=-e,u=-u,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*it,skewX:Math.atan(u)*it,scaleX:o,scaleY:s};};function st(t,e,n,r){function i(t){return t.length?t.pop()+" ":"";}return function(a,o){var s=[],u=[];return a=t(a),o=t(o),function(t,r,i,a,o,s){if(t!==i||r!==a){var u=o.push("translate(",null,e,null,n);s.push({i:u-4,x:H(t,i)},{i:u-2,x:H(r,a)});}else(i||a)&&o.push("translate("+i+e+a+n);}(a.translateX,a.translateY,o.translateX,o.translateY,s,u),function(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(i(n)+"rotate(",null,r)-2,x:H(t,e)})):e&&n.push(i(n)+"rotate("+e+r);}(a.rotate,o.rotate,s,u),function(t,e,n,a){t!==e?a.push({i:n.push(i(n)+"skewX(",null,r)-2,x:H(t,e)}):e&&n.push(i(n)+"skewX("+e+r);}(a.skewX,o.skewX,s,u),function(t,e,n,r,a,o){if(t!==n||e!==r){var s=a.push(i(a)+"scale(",null,",",null,")");o.push({i:s-4,x:H(t,n)},{i:s-2,x:H(e,r)});}else 1===n&&1===r||a.push(i(a)+"scale("+n+","+r+")");}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,s,u),a=o=null,function(t){for(var e,n=-1,r=u.length;++n<r;)s[(e=u[n]).i]=e.x(t);return s.join("");};};}var ut=st(function(t){return "none"===t?at:($||($=document.createElement("DIV"),K=document.documentElement,J=document.defaultView),$.style.transform=t,t=J.getComputedStyle(K.appendChild($),null).getPropertyValue("transform"),K.removeChild($),t=t.slice(7,-1).split(","),ot(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]));},"px, ","px)","deg)"),ct=st(function(t){return null==t?at:(tt||(tt=document.createElementNS("http://www.w3.org/2000/svg","g")),tt.setAttribute("transform",t),(t=tt.transform.baseVal.consolidate())?(t=t.matrix,ot(t.a,t.b,t.c,t.d,t.e,t.f)):at);},", ",")",")"),ft=Math.SQRT2;function ht(t){return ((t=Math.exp(t))+1/t)/2;}var lt=function(t,e){var n,r,i=t[0],a=t[1],o=t[2],s=e[0],u=e[1],c=e[2],f=s-i,h=u-a,l=f*f+h*h;if(l<1e-12)r=Math.log(c/o)/ft,n=function(t){return [i+t*f,a+t*h,o*Math.exp(ft*t*r)];};else{var d=Math.sqrt(l),p=(c*c-o*o+4*l)/(2*o*2*d),g=(c*c-o*o-4*l)/(2*c*2*d),v=Math.log(Math.sqrt(p*p+1)-p),m=Math.log(Math.sqrt(g*g+1)-g);r=(m-v)/ft,n=function(t){var e=t*r,n=ht(v),s=o/(2*d)*(n*function(t){return ((t=Math.exp(2*t))-1)/(t+1);}(ft*e+v)-function(t){return ((t=Math.exp(t))-1/t)/2;}(v));return [i+s*f,a+s*h,o*n/ht(ft*e+v)];};}return n.duration=1e3*r,n;};function dt(t){return function(e,n){var r=t((e=I(e)).h,(n=I(n)).h),i=Y(e.s,n.s),a=Y(e.l,n.l),o=Y(e.opacity,n.opacity);return function(t){return e.h=r(t),e.s=i(t),e.l=a(t),e.opacity=o(t),e+"";};};}var pt=dt(R),gt=dt(Y),vt=Math.PI/180,mt=180/Math.PI,yt=.96422,xt=1,bt=.82521,wt=4/29,_t=6/29,Mt=3*_t*_t,St=_t*_t*_t;function Pt(t){if(t instanceof kt)return new kt(t.l,t.a,t.b,t.opacity);if(t instanceof jt)return Bt(t);t instanceof S||(t=_(t));var e,n,r=Nt(t.r),i=Nt(t.g),a=Nt(t.b),o=Ct((.2225045*r+.7168786*i+.0606169*a)/xt);return r===i&&i===a?e=n=o:(e=Ct((.4360747*r+.3850649*i+.1430804*a)/yt),n=Ct((.0139322*r+.0971045*i+.7141733*a)/bt)),new kt(116*o-16,500*(e-o),200*(o-n),t.opacity);}function At(t,e,n,r){return 1===arguments.length?Pt(t):new kt(t,e,n,null==r?1:r);}function kt(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r;}function Ct(t){return t>St?Math.pow(t,1/3):t/Mt+wt;}function Et(t){return t>_t?t*t*t:Mt*(t-wt);}function It(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055);}function Nt(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);}function Tt(t){if(t instanceof jt)return new jt(t.h,t.c,t.l,t.opacity);if(t instanceof kt||(t=Pt(t)),0===t.a&&0===t.b)return new jt(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*mt;return new jt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity);}function Ot(t,e,n,r){return 1===arguments.length?Tt(t):new jt(t,e,n,null==r?1:r);}function jt(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r;}function Bt(t){if(isNaN(t.h))return new kt(t.l,0,0,t.opacity);var e=t.h*vt;return new kt(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity);}function Lt(t,e){var n=Y((t=At(t)).l,(e=At(e)).l),r=Y(t.a,e.a),i=Y(t.b,e.b),a=Y(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=r(e),t.b=i(e),t.opacity=a(e),t+"";};}function Dt(t){return function(e,n){var r=t((e=Ot(e)).h,(n=Ot(n)).h),i=Y(e.c,n.c),a=Y(e.l,n.l),o=Y(e.opacity,n.opacity);return function(t){return e.h=r(t),e.c=i(t),e.l=a(t),e.opacity=o(t),e+"";};};}r(kt,At,i(a,{brighter:function(t){return new kt(this.l+18*(null==t?1:t),this.a,this.b,this.opacity);},darker:function(t){return new kt(this.l-18*(null==t?1:t),this.a,this.b,this.opacity);},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new S(It(3.1338561*(e=yt*Et(e))-1.6168667*(t=xt*Et(t))-.4906146*(n=bt*Et(n))),It(-.9787684*e+1.9161415*t+.033454*n),It(.0719453*e-.2289914*t+1.4052427*n),this.opacity);}})),r(jt,Ot,i(a,{brighter:function(t){return new jt(this.h,this.c,this.l+18*(null==t?1:t),this.opacity);},darker:function(t){return new jt(this.h,this.c,this.l-18*(null==t?1:t),this.opacity);},rgb:function(){return Bt(this).rgb();}}));var Rt=Dt(R),Ft=Dt(Y),Yt=-.14861,zt=1.78277,qt=-.29227,Xt=-.90649,Gt=1.97294,Wt=Gt*Xt,Ut=Gt*zt,Ht=zt*qt-Xt*Yt;function Vt(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof Zt)return new Zt(t.h,t.s,t.l,t.opacity);t instanceof S||(t=_(t));var e=t.r/255,n=t.g/255,r=t.b/255,i=(Ht*r+Wt*e-Ut*n)/(Ht+Wt-Ut),a=r-i,o=(Gt*(n-i)-qt*a)/Xt,s=Math.sqrt(o*o+a*a)/(Gt*i*(1-i)),u=s?Math.atan2(o,a)*mt-120:NaN;return new Zt(u<0?u+360:u,s,i,t.opacity);}(t):new Zt(t,e,n,null==r?1:r);}function Zt(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}function Qt(t){return function e(n){function r(e,r){var i=t((e=Vt(e)).h,(r=Vt(r)).h),a=Y(e.s,r.s),o=Y(e.l,r.l),s=Y(e.opacity,r.opacity);return function(t){return e.h=i(t),e.s=a(t),e.l=o(Math.pow(t,n)),e.opacity=s(t),e+"";};}return n=+n,r.gamma=e,r;}(1);}r(Zt,Vt,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Zt(this.h,this.s,this.l*t,this.opacity);},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Zt(this.h,this.s,this.l*t,this.opacity);},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*vt,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return new S(255*(e+n*(Yt*r+zt*i)),255*(e+n*(qt*r+Xt*i)),255*(e+n*(Gt*r)),this.opacity);}}));var $t=Qt(R),Kt=Qt(Y),Jt=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n;};n.d(e,"interpolate",function(){return nt;}),n.d(e,"interpolateArray",function(){return W;}),n.d(e,"interpolateBasis",function(){return j;}),n.d(e,"interpolateBasisClosed",function(){return B;}),n.d(e,"interpolateDate",function(){return U;}),n.d(e,"interpolateNumber",function(){return H;}),n.d(e,"interpolateObject",function(){return V;}),n.d(e,"interpolateRound",function(){return rt;}),n.d(e,"interpolateString",function(){return et;}),n.d(e,"interpolateTransformCss",function(){return ut;}),n.d(e,"interpolateTransformSvg",function(){return ct;}),n.d(e,"interpolateZoom",function(){return lt;}),n.d(e,"interpolateRgb",function(){return z;}),n.d(e,"interpolateRgbBasis",function(){return X;}),n.d(e,"interpolateRgbBasisClosed",function(){return G;}),n.d(e,"interpolateHsl",function(){return pt;}),n.d(e,"interpolateHslLong",function(){return gt;}),n.d(e,"interpolateLab",function(){return Lt;}),n.d(e,"interpolateHcl",function(){return Rt;}),n.d(e,"interpolateHclLong",function(){return Ft;}),n.d(e,"interpolateCubehelix",function(){return $t;}),n.d(e,"interpolateCubehelixLong",function(){return Kt;}),n.d(e,"quantize",function(){return Jt;});},function(t,e,n){!function(e,n){t.exports=n();}("undefined"!=typeof self&&self,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r});},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=5);}([function(t,e,n){var r=n(7);t.exports={assign:r};},function(t,e,n){var r=n(3),i=function(){function t(t,e){void 0===e&&(e={});this.options=e,this.rootNode=r(t,e);}return t.prototype.execute=function(){throw new Error("please override this method");},t;}();t.exports=i;},function(t,e,n){var r=n(4),i=["LR","RL","TB","BT","H","V"],a=["LR","RL","H"],o=i[0];t.exports=function(t,e,n){var s=e.direction||o;if(e.isHorizontal=function(t){return a.indexOf(t)>-1;}(s),s&&-1===i.indexOf(s))throw new TypeError("Invalid direction: "+s);if(s===i[0])n(t,e);else if(s===i[1])n(t,e),t.right2left();else if(s===i[2])n(t,e);else if(s===i[3])n(t,e),t.bottom2top();else if(s===i[4]||s===i[5]){var u=r(t,e),c=u.left,f=u.right;n(c,e),n(f,e),e.isHorizontal?c.right2left():c.bottom2top(),f.translate(c.x-f.x,c.y-f.y),t.x=c.x,t.y=f.y;var h=t.getBoundingBox();e.isHorizontal?h.top<0&&t.translate(0,-h.top):h.left<0&&t.translate(-h.left,0);}return e.fixedRoot||t.translate(-(t.x+t.width/2+t.hgap),-(t.y+t.height/2+t.vgap)),t;};},function(t,e,n){var r=n(0),i={getId:function(t){return t.id||t.name;},getHGap:function(t){return t.hgap||18;},getVGap:function(t){return t.vgap||18;},getChildren:function(t){return t.children;},getHeight:function(t){return t.height||36;},getWidth:function(t){var e=t.name||" ";return t.width||18*e.split("").length;}};function a(t,e){var n=this;if(n.vgap=n.hgap=0,t instanceof a)return t;n.data=t;var r=e.getHGap(t),i=e.getVGap(t);return n.width=e.getWidth(t),n.height=e.getHeight(t),n.id=e.getId(t),n.x=n.y=0,n.depth=0,n.children||(n.children=[]),n.addGap(r,i),n;}r.assign(a.prototype,{isRoot:function(){return 0===this.depth;},isLeaf:function(){return 0===this.children.length;},addGap:function(t,e){this.hgap+=t,this.vgap+=e,this.width+=2*t,this.height+=2*e;},eachNode:function(t){for(var e,n=[this];e=n.pop();)t(e),n=n.concat(e.children);},DFTraverse:function(t){this.eachNode(t);},BFTraverse:function(t){for(var e,n=[this];e=n.shift();)t(e),n=n.concat(e.children);},getBoundingBox:function(){var t={left:Number.MAX_VALUE,top:Number.MAX_VALUE,width:0,height:0};return this.eachNode(function(e){t.left=Math.min(t.left,e.x),t.top=Math.min(t.top,e.y),t.width=Math.max(t.width,e.x+e.width),t.height=Math.max(t.height,e.y+e.height);}),t;},translate:function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.eachNode(function(n){n.x+=t,n.y+=e;});},right2left:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.x=e.x-2*(e.x-t.left)-e.width;}),this.translate(t.width,0);},bottom2top:function(){var t=this.getBoundingBox();this.eachNode(function(e){e.y=e.y-2*(e.y-t.top)-e.height;}),this.translate(0,t.height);}}),t.exports=function(t,e,n){void 0===e&&(e={});var o,s=new a(t,e=r.assign({},i,e)),u=[s];if(!n&&!t.collapsed)for(;o=u.pop();)if(!o.data.collapsed){var c=e.getChildren(o.data),f=c?c.length:0;if(o.children=new Array(f),c&&f)for(var h=0;h<f;h++){var l=new a(c[h],e);o.children[h]=l,u.push(l),l.parent=o,l.depth=o.depth+1;}}return s;};},function(t,e,n){var r=n(3);t.exports=function(t,e){for(var n=r(t.data,e,!0),i=r(t.data,e,!0),a=t.children.length,o=Math.round(a/2),s=e.getSide||function(t,e){return e<o?"right":"left";},u=0;u<a;u++){var c=t.children[u];"right"===s(c,u)?i.children.push(c):n.children.push(c);}return n.eachNode(function(t){t.isRoot()||(t.side="left");}),i.eachNode(function(t){t.isRoot()||(t.side="right");}),{left:n,right:i};};},function(t,e,n){var r={compactBox:n(6),dendrogram:n(9),indented:n(11),mindmap:n(13)};t.exports=r;},function(t,e,n){var r=n(1),i=n(8),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this;}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i);},e;}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute();};},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n]);}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t;};},function(t,e){function n(t,e,n,r){void 0===r&&(r=[]);var i=this;i.w=t||0,i.h=e||0,i.y=n||0,i.x=0,i.c=r||[],i.cs=r.length,i.prelim=0,i.mod=0,i.shift=0,i.change=0,i.tl=null,i.tr=null,i.el=null,i.er=null,i.msel=0,i.mser=0;}function r(t,e){!function t(e,n,r){r?e.y+=n:e.x+=n,e.children.forEach(function(e){t(e,n,r);});}(t,-function t(e,n){var r=n?e.y:e.x;return e.children.forEach(function(e){r=Math.min(t(e,n),r);}),r;}(t,e),e);}n.fromNode=function(t,e){if(!t)return null;var r=[];return t.children.forEach(function(t){r.push(n.fromNode(t,e));}),e?new n(t.height,t.width,t.x,r):new n(t.width,t.height,t.y,r);},t.exports=function(t,e){void 0===e&&(e={});var i=e.isHorizontal;function a(t){0===t.cs?(t.el=t,t.er=t,t.msel=t.mser=0):(t.el=t.c[0].el,t.msel=t.c[0].msel,t.er=t.c[t.cs-1].er,t.mser=t.c[t.cs-1].mser);}function o(t,e,n){for(var r=t.c[e-1],i=r.mod,a=t.c[e],o=a.mod;null!==r&&null!==a;){f(r)>n.low&&(n=n.nxt);var h=i+r.prelim+r.w-(o+a.prelim);h>0&&(o+=h,s(t,e,n.index,h));var l=f(r),d=f(a);l<=d&&null!==(r=c(r))&&(i+=r.mod),l>=d&&null!==(a=u(a))&&(o+=a.mod);}!r&&a?function(t,e,n,r){var i=t.c[0].el;i.tl=n;var a=r-n.mod-t.c[0].msel;i.mod+=a,i.prelim-=a,t.c[0].el=t.c[e].el,t.c[0].msel=t.c[e].msel;}(t,e,a,o):r&&!a&&function(t,e,n,r){var i=t.c[e].er;i.tr=n;var a=r-n.mod-t.c[e].mser;i.mod+=a,i.prelim-=a,t.c[e].er=t.c[e-1].er,t.c[e].mser=t.c[e-1].mser;}(t,e,r,i);}function s(t,e,n,r){t.c[e].mod+=r,t.c[e].msel+=r,t.c[e].mser+=r,function(t,e,n,r){if(n!==e-1){var i=e-n;t.c[n+1].shift+=r/i,t.c[e].shift-=r/i,t.c[e].change-=r-r/i;}}(t,e,n,r);}function u(t){return 0===t.cs?t.tl:t.c[0];}function c(t){return 0===t.cs?t.tr:t.c[t.cs-1];}function f(t){return t.y+t.h;}function h(t,e,n){for(;null!==n&&t>=n.low;)n=n.nxt;return {low:t,index:e,nxt:n};}!function t(e,n,r){void 0===r&&(r=0),n?(e.x=r,r+=e.width):(e.y=r,r+=e.height),e.children.forEach(function(e){t(e,n,r);});}(t,i);var l=n.fromNode(t,i);return function t(e){if(0!==e.cs){t(e.c[0]);for(var n=h(f(e.c[0].el),0,null),r=1;r<e.cs;++r){t(e.c[r]);var i=f(e.c[r].er);o(e,r,n),n=h(i,r,n);}!function(t){t.prelim=(t.c[0].prelim+t.c[0].mod+t.c[t.cs-1].mod+t.c[t.cs-1].prelim+t.c[t.cs-1].w)/2-t.w/2;}(e),a(e);}else a(e);}(l),function t(e,n){n+=e.mod,e.x=e.prelim+n,function(t){for(var e=0,n=0,r=0;r<t.cs;r++)e+=t.c[r].shift,n+=e+t.c[r].change,t.c[r].mod+=n;}(e);for(var r=0;r<e.cs;r++)t(e.c[r],n);}(l,0),function t(e,n,r){r?n.y=e.x:n.x=e.x,e.c.forEach(function(e,i){t(e,n.children[i],r);});}(l,t,i),r(t,i),t;};},function(t,e,n){var r=n(1),i=n(10),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this;}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t),e.prototype.execute=function(){return this.rootNode.width=0,a(this.rootNode,this.options,i);},e;}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute();};},function(t,e,n){var r=n(0);var i={isHorizontal:!0,nodeSep:20,nodeSize:20,rankSep:200,subTreeSep:10};t.exports=function(t,e){void 0===e&&(e={}),e=r.assign({},i,e);var n,a=0;var o=function t(e){if(!e)return null;e.width=0,e.depth&&e.depth>a&&(a=e.depth);var n=e.children,r=n.length,i=new function(t,e){void 0===e&&(e=[]);var n=this;n.x=n.y=0,n.leftChild=n.rightChild=null,n.height=0,n.children=e;}(e.height,[]);return n.forEach(function(e,n){var a=t(e);i.children.push(a),0===n&&(i.leftChild=a),n===r-1&&(i.rightChild=a);}),i.originNode=e,i.isLeaf=e.isLeaf(),i;}(t);return function t(e){if(e.isLeaf||0===e.children.length)e.drawingDepth=a;else{var n=e.children.map(function(e){return t(e);}),r=Math.min.apply(null,n);e.drawingDepth=r-1;}return e.drawingDepth;}(o),function t(r){r.x=r.drawingDepth*e.rankSep,r.isLeaf?(r.y=0,n&&(r.y=n.y+n.height+e.nodeSep,r.originNode.parent!==n.originNode.parent&&(r.y+=e.subTreeSep)),n=r):(r.children.forEach(function(e){t(e);}),r.y=(r.leftChild.y+r.rightChild.y)/2);}(o),function t(e,n,r){r?(n.x=e.x,n.y=e.y):(n.x=e.y,n.y=e.x),e.children.forEach(function(e,i){t(e,n.children[i],r);});}(o,t,e.isHorizontal),t;};},function(t,e,n){var r=n(1),i=n(12),a=n(4),o=n(0),s=["LR","RL","H"],u=s[0],c=function(t){function e(){return t.apply(this,arguments)||this;}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t),e.prototype.execute=function(){var t=this.options,e=this.rootNode;t.isHorizontal=!0;var n=t.indent,r=t.direction||u;if(r&&-1===s.indexOf(r))throw new TypeError("Invalid direction: "+r);if(r===s[0])i(e,n);else if(r===s[1])i(e,n),e.right2left();else if(r===s[2]){var o=a(e,t),c=o.left,f=o.right;i(c,n),c.right2left(),i(f,n);var h=c.getBoundingBox();f.translate(h.width,0),e.x=f.x-e.width/2;}return e;},e;}(r),f={};t.exports=function(t,e){return e=o.assign({},f,e),new c(t,e).execute();};},function(t,e){t.exports=function(t,e){void 0===e&&(e=20);var n=null;t.eachNode(function(t){!function(t,e,n){t.x+=n*t.depth,t.y=e?e.y+e.height:0;}(t,n,e),n=t;});};},function(t,e,n){var r=n(1),i=n(14),a=n(2),o=n(0),s=function(t){function e(){return t.apply(this,arguments)||this;}return function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t),e.prototype.execute=function(){return a(this.rootNode,this.options,i);},e;}(r),u={};t.exports=function(t,e){return e=o.assign({},u,e),new s(t,e).execute();};},function(t,e,n){var r=n(0);var i={getSubTreeSep:function(){return 0;}};t.exports=function(t,e){void 0===e&&(e={}),e=r.assign({},i,e),t.parent={x:0,width:0,height:0,y:0},t.BFTraverse(function(t){t.x=t.parent.x+t.parent.width;}),t.parent=null,function t(e,n){var r=0;return e.children.length?e.children.forEach(function(e){r+=t(e,n);}):r=e.height,e._subTreeSep=n.getSubTreeSep(e.data),e.totalHeight=Math.max(e.height,r)+2*e._subTreeSep,e.totalHeight;}(t,e),t.startY=0,t.y=t.totalHeight/2-t.height/2,t.eachNode(function(t){var e=t.children,n=e.length;if(n){var r=e[0];if(r.startY=t.startY+t._subTreeSep,1===n)r.y=t.y+t.height/2-r.height/2;else{r.y=r.startY+r.totalHeight/2-r.height/2;for(var i=1;i<n;i++){var a=e[i];a.startY=e[i-1].startY+e[i-1].totalHeight,a.y=a.startY+a.totalHeight/2-a.height/2;}}}}),function t(e){var n=e.children,r=n.length;if(r){n.forEach(function(e){t(e);});var i=n[0],a=n[r-1],o=a.y-i.y+a.height,s=0;if(n.forEach(function(t){s+=t.totalHeight;}),o>e.height)e.y=i.y+o/2-e.height/2;else if(1!==n.length||e.height>s){var u=e.y+(e.height-o)/2-i.y;n.forEach(function(t){t.translate(0,u);});}else e.y=(i.y+i.height/2+a.y+a.height/2)/2-e.height/2;}}(t);};}]);});},function(t,e,n){var r=n(201),i=n(1);function a(t,e){var n=-1;return i.each(t,function(t,r){if(e.id===t.id)return n=r,!1;}),n;}var o=function(t){function e(e){var n;return (n=t.call(this,e)||this).set("removeList",[]),n.set("layoutMethod",n._getLayout()),n;}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t);var n=e.prototype;return n.getDefaultCfg=function(){var e=t.prototype.getDefaultCfg.call(this);return e.animate=!0,e;},n.render=function(){if(!this.get("data"))throw new Error("data must be defined first");this.clear(),this.emit("beforerender"),this.refreshLayout(this.get("fitView")),this.emit("afterrender");},n.addChild=function(t,e){i.isString(e)||(e=e.get("id"));var n=this.findDataById(e);n.children||(n.children=[]),n.children.push(t),this.changeData();},n._addChild=function(t,e,n){var r=this,a=t.data;a.x=t.x,a.y=t.y,a.depth=t.depth;var o=r.addItem("node",a);if(e){if(o.set("parent",e),n){var s=e.get("origin");if(s)o.set("origin",s);else{var u=e.getModel();o.set("origin",{x:u.x,y:u.y});}}var c=e.get("children");c?c.push(o):e.set("children",[o]),r.addItem("edge",{source:e,target:o,id:e.get("id")+":"+o.get("id")});}return i.each(t.children,function(t){r._addChild(t,o,n);}),o;},n.changeData=function(t){t?(this.data(t),this.render()):this.refreshLayout(this.get("fitView"));},n.updateChild=function(t,e){if(e&&this.findById(e)){var n=this.findById(e).getModel(),r=this.findById(t.id);if(r){var i=a(n.children,t);n.children[i]=t;}else n.children?n.children.push(t):n.children=[r];this.changeData();}else this.changeData(t);},n._updateChild=function(t,e,n){var r=this,o=r.findById(t.id);if(o){i.each(t.children,function(t){r._updateChild(t,o,n);});var s=o.get("children");if(s)if(s.length>0)for(var u,c=s.length-1;c>=0;c--)u=s[c].getModel(),-1===a(t.children,u)&&(r._removeChild(u.id,{x:t.x,y:t.y},n),s.splice(c,1));var f=o.getModel();n&&o.set("origin",{x:f.x,y:f.y}),o.set("model",t.data),o.updatePosition({x:t.x,y:t.y});}else r._addChild(t,e,n);},n.removeChild=function(t){var e=this.findById(t);if(e){var n=e.get("parent");if(n&&!n.destroyed){var r=this.findDataById(n.get("id")).children,i=a(r,e.getModel());r.splice(i,1);}this.changeData();}},n._removeChild=function(t,e,n){var r=this,a=r.findById(t);if(a)if(i.each(a.get("children"),function(t){r._removeChild(t.getModel().id,e,n);}),n){var o=a.getModel();a.set("to",e),a.set("origin",{x:o.x,y:o.y}),r.get("removeList").push(a);}else r.removeItem(a);},n.save=function(){return this.get("data");},n.findDataById=function(t,e){var n=this;if(e||(e=n.get("data")),t===e.id)return e;var r=null;return i.each(e.children,function(e){return e.id===t?(r=e,!1):!(r=n.findDataById(t,e))&&void 0;}),r;},n.changeLayout=function(t){t?(this.set("layout",t),this.set("layoutMethod",this._getLayout()),this.refreshLayout()):console.warn("layout cannot be null");},n.refreshLayout=function(t){var e=this.get("data"),n=this.get("layoutMethod")(e,this.get("layout")),r=this.get("animate"),i=this.get("autoPaint");this.emit("beforerefreshlayout",{data:e,layoutData:n}),this.setAutoPaint(!1),this._updateChild(n,null,r),t&&this.get("viewController")._fitView(),r?this.layoutAnimate(n,null):(this.refresh(),this.paint()),this.setAutoPaint(i),this.emit("afterrefreshlayout",{data:e,layoutData:n});},n.layoutAnimate=function(t,e){var n=this,r=this;this.setAutoPaint(!1);var a=this.get("animateCfg");r.emit("beforeanimate",{data:t}),r.getEdges().forEach(function(t){var e=t.get("model");e.sourceAnchor||(e.sourceAnchor=t.get("sourceAnchorIndex"));}),this.get("canvas").animate({onFrame:function(n){i.traverseTree(t,function(a){var o=r.findById(a.id);if(o){var s=o.get("origin"),u=o.get("model");if(s||(s={x:u.x,y:u.y},o.set("origin",s)),e){var c=e(o,n,s,t);o.set("model",i.mix(u,c));}else u.x=s.x+(a.x-s.x)*n,u.y=s.y+(a.y-s.y)*n;}}),i.each(r.get("removeList"),function(t){var e=t.getModel(),r=t.get("origin"),i=t.get("to");e.x=r.x+(i.x-r.x)*n,e.y=r.y+(i.y-r.y)*n;}),r.refreshPositions();}},a.duration,a.ease,function(){i.each(r.getNodes(),function(t){t.set("origin",null);}),i.each(r.get("removeList"),function(t){r.removeItem(t);}),r.set("removeList",[]),a.callback&&a.callback(),r.paint(),n.setAutoPaint(!0),r.emit("afteranimate",{data:t});},a.delay);},n.stopLayoutAnimate=function(){this.get("canvas").stopAnimate(),this.emit("layoutanimateend",{data:this.get("data")}),this.layoutAnimating=!1;},n.isLayoutAnimating=function(){return this.layoutAnimating;},n._getLayout=function(){var t=this.get("layout");return t?"function"==typeof t?t:(t.type||(t.type="dendrogram"),t.direction||(t.direction="TB"),t.radial?function(e){var n=r[t.type](e,t);return i.radialLayout(n),n;}:function(e){return r[t.type](e,t);}):null;},e;}(n(112));t.exports=o;},function(t,e,n){function r(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}function i(){return (i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var a=n(17),o=n(2),s=function(){var t=e.prototype;function e(t){this.graph=t,window.graph=t;var e=t.get("groupStyle");this.styles=o({},this.getDefaultCfg(),e),this.customGroup={},this.delegateInGroup={},this.nodePoint=[];}return t.getDefaultCfg=function(){return {default:{lineWidth:1,stroke:"#A3B1BF",strokeOpacity:.9,fill:"#F3F9FF",fillOpacity:.8,opacity:.8,disCoefficient:.6,minDis:40,maxDis:100},hover:{stroke:"#faad14",fill:"#ffe58f",fillOpacity:.3,opacity:.3,lineWidth:3},collapse:{r:30,width:80,height:40,stroke:"#A3B1BF",lineWidth:3,fill:"#F3F9FF",offsetX:-15,offsetY:5},icon:"https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg",operatorBtn:{collapse:{img:"https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg",width:16,height:16},expand:{width:16,height:16,img:"https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg"}},visible:!1};},t.create=function(t,e,n,a,o,s){void 0===n&&(n="circle"),void 0===a&&(a=0),void 0===o&&(o=!1),void 0===s&&(s={});var u=this.graph,c=u.get("customGroup");if(c.get("children").map(function(t){return t.get("id");}).indexOf(t)>-1)return console.warn("已经存在ID为 "+t+" 的分组，请重新设置分组ID！");var f=c.addGroup({id:t,zIndex:a}),h=u.get("autoPaint");u.setAutoPaint(!1);var l=this.styles.default,d=this.calculationGroupPosition(e),p=d.x,g=d.y,v=d.width,m=d.height,y=d.maxX,x=this.getGroupPadding(t);u.get("groupBBoxs")[t]={x:p,y:g,width:v,height:m,maxX:y};var b=null;if(o){var w=u.get("groups");e.forEach(function(e){var n=u.findById(e).getModel();n.groupId||(n.groupId=t);}),w.find(function(e){return e.id===t;})||(w.push({id:t,title:s}),u.set({groups:w}));}var _=u.get("groups").filter(function(e){return e.id===t;});_&&_.length>0&&(b=_[0].title);var M=0,S=0,P=null;if("circle"===n){var A=(v+2*p)/2,k=(m+2*g)/2,C=(v>m?v/2:m/2)+x;P=f.addShape("circle",{attrs:i({},l,{x:A,y:k,r:C}),capture:!0,zIndex:a,groupId:t}),M=A,S=k-C,this.setDeletageGroupByStyle(t,f,{width:v,height:m,x:A,y:k,r:C});}else{var E=x*l.disCoefficient;P=f.addShape("rect",{attrs:i({},l,{x:p-E,y:g-E,width:v+2*E,height:m+2*E}),capture:!0,zIndex:a,groupId:t}),M=p-E+15,S=g-E+15,this.setDeletageGroupByStyle(t,f,{x:p-E,y:g-E,width:v+E,height:m+E,btnOffset:y-3});}if(b){var I=b,N=I.offsetX,T=void 0===N?0:N,O=I.offsetY,j=void 0===O?0:O,B=I.text,L=void 0===B?b:B,D=r(I,["offsetX","offsetY","text"]);f.addShape("text",{attrs:i({text:L,stroke:"#444",x:M+T,y:S+j},D),className:"group-title"}).set("capture",!1);}f.set("keyShape",P),u.get("groupNodes")[t]=e,u.setAutoPaint(h),u.paint();},t.setGroupStyle=function(t,e){if(t&&!t.get("destroyed")){var n={},r=this.styles,i=r.hover,s=r.default;for(var u in a(e)?"default"===e?n=o({},s):"hover"===e&&(n=o({},i)):n=o({},s,e),n)t.attr(u,n[u]);}},t.calculationGroupPosition=function(t){var e=this.graph,n=1/0,r=-1/0,i=1/0,o=-1/0,s=t,u=Array.isArray(s),c=0;for(s=u?s:s[Symbol.iterator]();;){var f;if(u){if(c>=s.length)break;f=s[c++];}else{if((c=s.next()).done)break;f=c.value;}var h=f,l=(a(h)?e.findById(h):h).getBBox(),d=l.minX,p=l.minY,g=l.maxX,v=l.maxY;d<n&&(n=d),p<i&&(i=p),g>r&&(r=g),v>o&&(o=v);}var m=Math.floor(n),y=Math.floor(i);return {x:m,y:y,width:Math.ceil(r)-m,height:Math.ceil(o)-y,maxX:Math.ceil(r)};},t.getGroupPadding=function(t){var e=this.graph,n=this.styles.default;return !!e.get("groups").filter(function(e){return e.parentId===t;}).length>0?n.maxDis:n.minDis;},t.setDeletageGroupByStyle=function(t,e,n){var r=n.width,i=n.height,a=n.x,s=n.y,u=n.r,c=n.btnOffset,f=this.customGroup[t];if(f){var h=f.groupStyle,l=o({},h,n);this.customGroup[t]={nodeGroup:e,groupStyle:l};}else this.customGroup[t]={nodeGroup:e,groupStyle:{width:r,height:i,x:a,y:s,r:u,btnOffset:c}};},t.getDeletageGroupById=function(t){return this.customGroup[t];},t.collapseExpandGroup=function(t){var e=this.getDeletageGroupById(t).nodeGroup;e.get("hasHidden")?(e.set("hasHidden",!1),this.expandGroup(t)):(e.set("hasHidden",!0),this.collapseGroup(t));},t.setGroupTmpNode=function(t,e){var n=this.graph,r=n.get("groupNodes"),i=n.get("groups");r[t].indexOf(e)<0&&r[t].push(e);var a=i.filter(function(e){return e.id===t;}),o=null;a.length>0&&(o=a[0].parentId),o&&this.setGroupTmpNode(o,e);},t.collapseGroup=function(t){var e=this,n=this.getDeletageGroupById(t).nodeGroup,i=this.styles.collapse,a=this.graph,o=a.get("groupType"),s=a.get("autoPaint");a.setAutoPaint(!1);var u=a.get("groupNodes")[t],c=this.calculationGroupPosition(u),f=c.width,h=c.height,l=n.get("keyShape"),d=i.r,p=i.width,g=i.height,v=i.offsetX,m=i.offsetY,y=r(i,["r","width","height","offsetX","offsetY"]);for(var x in y)l.attr(x,y[x]);var b={groupId:t,id:t+"-custom-node",x:l.attr("x"),y:l.attr("y"),style:{r:d},shape:"circle"},w=n.findByClassName("group-title");if("circle"===o){var _=l.attr("r");l.animate({onFrame:function(t){return {r:_-t*(_-d)};}},500,"easeCubic"),w&&w.attr({x:l.attr("x")+v,y:l.attr("y")+m});}else"rect"===o&&(l.animate({onFrame:function(t){return {width:f-t*(f-p),height:h-t*(h-g)};}},500,"easeCubic"),w&&w.attr({x:l.attr("x")+10,y:l.attr("y")+g/2+5}),b={groupId:t,id:t+"-custom-node",x:l.attr("x")+p/2,y:l.attr("y")+g/2,size:[p,g],shape:"rect"});var M=a.getEdges(),S=M.filter(function(t){var e=t.getModel();return !u.includes(e.source)&&u.includes(e.target);}),P=M.filter(function(t){var e=t.getModel();return u.includes(e.source)&&!u.includes(e.target);}),A=M.filter(function(t){var e=t.getModel();return u.includes(e.source)&&u.includes(e.target);});if(u.forEach(function(n){var r=a.findById(n),i=r.getModel().groupId;i&&i!==t&&e.getDeletageGroupById(i).nodeGroup.hide();r.hide();}),A.forEach(function(t){var e=t.getSource(),n=t.getTarget();e.isVisible()&&n.isVisible()?t.show():t.hide();}),S.length>0||P.length>0){var k=a.add("node",b);k.set("capture",!1),k.hide(),this.delegateInGroup[t]={delegateNode:k},this.setGroupTmpNode(t,t+"-custom-node"),this.updateEdgeInGroupLinks(t,S,P);}a.paint(),a.setAutoPaint(s);},t.updateEdgeInGroupLinks=function(t,e,n){var r=this.graph,i={};e.map(function(e){var n=e.getModel(),a=e.get("id"),o=n.target;return i[a]=o,r.updateItem(e,{target:t+"-custom-node"}),!0;});var a={};n.map(function(e){var n=e.getModel(),i=e.get("id"),o=n.source;return a[i]=o,r.updateItem(e,{source:t+"-custom-node"}),!0;}),this.delegateInGroup[t]=o({sourceOutTargetInEdges:e,sourceInTargetOutEdges:n,edgesOuts:i,edgesIn:a},this.delegateInGroup[t]);},t.expandGroup=function(t){var e=this,n=this.graph,r=n.get("groupType"),i=n.get("autoPaint");n.setAutoPaint(!1);var a=n.get("groupNodes")[t],o=a.filter(function(t){return -1===t.indexOf("custom-node");}),s=this.calculationGroupPosition(o),u=s.width,c=s.height,f=this.getDeletageGroupById(t).nodeGroup,h=f.get("keyShape"),l=this.styles,d=l.default,p=l.collapse;for(var g in d)h.attr(g,d[g]);var v=f.findByClassName("group-title"),m=this.getGroupPadding(t);if("circle"===r){var y=u>c?u/2:c/2;h.animate({onFrame:function(t){return {r:p.r+t*(y-p.r+m)};}},500,"easeCubic");}else if("rect"===r){var x=p.width,b=p.height;h.animate({onFrame:function(t){return {width:x+t*(u-x+m*d.disCoefficient*2),height:b+t*(c-b+m*d.disCoefficient*2)};}},500,"easeCubic");}if(v){var w=null,_=n.get("groups").filter(function(e){return e.id===t;});_&&_.length>0&&(w=_[0].title);var M=w,S=M.offsetX,P=void 0===S?0:S,A=M.offsetY,k=void 0===A?0:A;"circle"===r?v.animate({onFrame:function(t){return {x:h.attr("x")+P,y:h.attr("y")-t*h.attr("r")+k};}},600,"easeCubic"):"rect"===r&&v.animate({onFrame:function(t){return {x:h.attr("x")+t*(15+P),y:h.attr("y")+t*(15+k)};}},600,"easeCubic");}setTimeout(function(){a.forEach(function(r){var i=n.findById(r),a=i.getModel().groupId;if(a&&a!==t){var o=e.getDeletageGroupById(a).nodeGroup;o.show(),o.get("hasHidden")||i.show();}else i.show();}),n.getEdges().filter(function(t){var e=t.getModel();return a.includes(e.source)||a.includes(e.target);}).forEach(function(t){var e=t.getSource(),n=t.getTarget();e.isVisible()&&n.isVisible()&&t.show();});},300);var C=this.delegateInGroup[t];if(C){var E=C.sourceOutTargetInEdges,I=C.sourceInTargetOutEdges,N=C.edgesOuts,T=C.edgesIn,O=C.delegateNode;E.map(function(t){var e=t.get("id"),r=N[e];return n.updateItem(t,{target:r}),!0;}),I.map(function(t){var e=t.get("id"),r=T[e];return n.updateItem(t,{source:r}),!0;});var j=O.getModel();this.deleteTmpNode(t,j.id),n.remove(O),delete this.delegateInGroup[t];}n.setAutoPaint(i),n.paint();},t.deleteTmpNode=function(t,e){var n=this.graph,r=n.get("groups"),i=n.get("groupNodes")[t],a=i.indexOf(e);i.splice(a,1);var o=r.filter(function(e){return e.id===t;}),s=null;o.length>0&&(s=o[0].parentId),s&&this.deleteTmpNode(s,e);},t.remove=function(t){var e=this.graph,n=this.getDeletageGroupById(t);if(n){var r=n.nodeGroup,i=e.get("autoPaint");e.setAutoPaint(!1);var a=e.get("groupNodes"),o=a[t];o.forEach(function(n){var r=e.findById(n),i=r.getModel(),a=i.groupId;a&&t===a&&(delete i.groupId,e.updateItem(r,i));}),r.destroy(),delete this.customGroup[t];var s=e.get("groups");if(s.length>0){var u=s.filter(function(e){return e.id!==t;});e.set("groups",u);}var c=null,f=null,h=s,l=Array.isArray(h),d=0;for(h=l?h:h[Symbol.iterator]();;){var p;if(l){if(d>=h.length)break;p=h[d++];}else{if((d=h.next()).done)break;p=d.value;}var g=p;if(t===g.id){c=g.parentId,f=g;break;}}f&&delete f.parentId,delete a[t],c&&(a[c]=a[c].filter(function(t){return !o.includes(t);})),e.setAutoPaint(i),e.paint();}else console.warn("请确认输入的groupId "+t+" 是否有误！");},t.updateGroup=function(t,e){var n=this.graph,r=n.get("groupType");this.updateItemInGroup(t,e);var i=null,a=null,o=n.save().groups,s=Array.isArray(o),u=0;for(o=s?o:o[Symbol.iterator]();;){var c;if(s){if(u>=o.length)break;c=o[u++];}else{if((u=o.next()).done)break;c=u.value;}var f=c;if(t===f.id){i=f.parentId,a=f;break;}}if(i){var h=this.getDeletageGroupById(i).nodeGroup,l=h.get("keyShape");this.setGroupStyle(l,"default");var d=l.getBBox(),p=d.minX,g=d.minY,v=d.maxX,m=d.maxY,y=this.getDeletageGroupById(t).nodeGroup.get("keyShape").getBBox(),x=y.x,b=y.y;if(!(x<v&&x>p&&b<m&&b>g)){delete a.parentId;var w=n.get("groupNodes"),_=w[t],M=w[i];w[i]=M.filter(function(t){return -1===_.indexOf(t);});var S=this.calculationGroupPosition(w[i]),P=S.x,A=S.y,k=S.width,C=S.height,E=this.getGroupPadding(i),I=h.findByClassName("group-title"),N=0,T=0;if("circle"===r){var O=k>C?k/2:C/2,j=(k+2*P)/2,B=(C+2*A)/2;l.attr({r:O+E,x:j,y:B}),N=j,T=B-l.attr("r");}else if("rect"===r){var L=E*this.styles.default.disCoefficient;l.attr({x:P-L,y:A-L}),N=P-L+15,T=A-L+15;}if(I){var D=a.title,R=0,F=0;D&&(R=D.offsetX,F=D.offsetY),I.attr({x:N+R,y:T+F});}}}},t.updateItemInGroup=function(t,e){var n=this,r=this.graph,i=r.get("groupType"),a=r.get("groupNodes"),o=a[t],s=this.getDeletageGroupById(t).nodeGroup.getBBox(),u=[];o.forEach(function(t,i){var a=r.findById(t),o=a.getModel(),c=o.groupId;c&&!u.includes(c)&&u.push(c),n.nodePoint[i]||(n.nodePoint[i]={x:o.x,y:o.y});var f=e.x-s.x+n.nodePoint[i].x,h=e.y-s.y+n.nodePoint[i].y;n.nodePoint[i]={x:f,y:h},r.updateItem(a,{x:f,y:h});}),u.includes(t)||u.push(t),u.forEach(function(t){var e=n.getDeletageGroupById(t).nodeGroup,r=e.get("keyShape"),o=a[t].filter(function(t){return -1===t.indexOf("custom-node");}),s=n.calculationGroupPosition(o),u=s.x,c=s.y,f=s.width,h=s.height,l=0,d=0;if("circle"===i){var p=(f+2*u)/2,g=(h+2*c)/2;r.attr({x:p,y:g}),l=p,d=g-r.attr("r");}else if("rect"===i){var v=e.get("hasHidden"),m={},y=n.getGroupPadding(t)*n.styles.default.disCoefficient;l=u-y+15,d=c-y+15,v?(m={x:u-y,y:c-y},d+=10):m={x:u-y,y:c-y,width:f+2*y,height:h+2*y},r.attr(m);}n.updateGroupTitle(e,t,l,d);});},t.updateGroupTitle=function(t,e,n,r){var i=this.graph,a=t.findByClassName("group-title");if(a){var o=null,s=i.get("groups").filter(function(t){return t.id===e;});s&&s.length>0&&(o=s[0].title);var u=0,c=0;o&&(u=o.offsetX||0,c=o.offsetY||0),a.attr({x:n+u,y:r+c});}},t.dynamicChangeGroupSize=function(t,e,n){var r=t.item.getModel().groupId,i=this.graph,a=i.get("groupType"),o=i.get("groupNodes"),s=o[r];if(0===s.length){delete o[r];var u=i.get("groups");i.set("groups",u.filter(function(t){return t.id!==r;})),e.remove();}else{var c=this.calculationGroupPosition(s),f=c.x,h=c.y,l=c.width,d=c.height,p=this.getGroupPadding(r),g=0,v=0;if("circle"===a){var m=l>d?l/2:d/2,y=(l+2*f)/2,x=(d+2*h)/2;n.attr({r:m+p,x:y,y:x}),g=y,v=x-n.attr("r");}else if("rect"===a){var b=p*this.styles.default.disCoefficient;n.attr({x:f-b,y:h-b,width:l+2*b,height:d+2*b}),g=f-b+15,v=h-b+15;}this.updateGroupTitle(e,r,g,v);}this.setGroupStyle(n,"default");},t.resetNodePoint=function(){this.nodePoint.length=0;},t.destroy=function(){this.graph=null,this.styles={},this.customGroup={},this.delegateInGroup={},this.resetNodePoint();},e;}();t.exports=s;},function(t,e,n){var r=n(169),i=n(1),a=function(){function t(t){this.graph=t,this.layoutCfg=t.get("layout"),this.layoutType=this.layoutCfg?this.layoutCfg.type:void 0,this._initLayout();}var e=t.prototype;return e._initLayout=function(){},e.layout=function(){var t=this.layoutType,e=this.graph;this.data=this.setDataFromGraph();var n=this.data.nodes;if(n){var a=e.get("width"),o=e.get("height"),s={};if(i.mix(s,{width:a,height:o,center:[a/2,o/2]},this.layoutCfg),void 0===t){if(!n[0]||void 0!==n[0].x)return;t="random";}else n[0]&&void 0===n[0].x&&this.initPositions(s.center,n);var u=this.layoutMethod;if(u&&u.destroy(),"force"===t){var c=s.onTick;s.tick=function(){c&&c(),e.refreshPositions();};var f=s.onLayoutEnd;s.onLayoutEnd=function(){f&&f(),e.emit("afterlayout");};}this.layoutCfg=s;try{u=new r[t](s);}catch(t){return void console.warn("The layout method: "+s+" does not exist! Please specify it first.");}u.init(this.data),e.emit("beforelayout"),u.execute(),"force"!==t&&e.emit("afterlayout"),this.layoutMethod=u;}},e.refreshLayout=function(){var t=this.graph;t.get("animate")?t.positionsAnimate():t.refreshPositions();},e.updateLayoutCfg=function(t){var e=this.graph;this.layoutType=t.type;var n=this.layoutMethod;this.data=this.setDataFromGraph(),n.init(this.data),n.updateCfg(t),e.emit("beforelayout"),n.execute(),"force"!==this.layoutType&&e.emit("afterlayout"),this.refreshLayout();},e.changeLayout=function(t){this.layoutType=t,this.layoutCfg=this.graph.get("layout")||{},this.layoutCfg.type=t;var e=this.layoutMethod;e&&e.destroy(),this.layout(),this.refreshLayout();},e.changeData=function(){var t=this.layoutMethod;t&&t.destroy(),this.layout();},e.setDataFromGraph=function(){var t=[],e=[],n=this.graph.getNodes(),r=this.graph.getEdges();n.forEach(function(e){var n=e.getModel();t.push(n);}),r.forEach(function(t){var n=t.getModel();e.push(n);});var i={nodes:t,edges:e};return "fruchtermanGroup"===this.layoutType&&(i.graph=this.graph),i;},e.relayout=function(){var t=this.graph,e=this.layoutMethod;"force"===this.layoutType&&(e.ticking=!1,e.forceSimulation.stop()),t.emit("beforelayout"),e.execute(),"force"!==this.layoutType&&t.emit("afterlayout"),this.refreshLayout();},e.layoutAnimate=function(){},e._getLayout=function(){},e.moveToZero=function(){var t=this.graph.get("data").nodes;if(void 0!==t[0].x&&null!==t[0].x&&!isNaN(t[0].x)){var e=[0,0];t.forEach(function(t){e[0]+=t.x,e[1]+=t.y;}),e[0]/=t.length,e[1]/=t.length,t.forEach(function(t){t.x-=e[0],t.y-=e[1];});}},e.initPositions=function(t,e){e&&e.forEach(function(e){e.x=t[0]+Math.random(),e.y=t[1]+Math.random();});},e.destroy=function(){this.graph=null;var t=this.layoutMethod;t&&t.destroy(),this.destroyed=!0;},t;}();t.exports=a;},function(t,e,n){var r=n(1),i=null,a=function(){function t(t){this.graph=t,this.cachedStates={enabled:{},disabled:{}};}var e=t.prototype;return e.updateState=function(t,e,n){if(!t.destroyed){var r=this,a=r.cachedStates,o=a.enabled,s=a.disabled;n?(r._checkCache(t,e,s),r._cacheState(t,e,o)):(r._checkCache(t,e,o),r._cacheState(t,e,s)),i&&clearTimeout(i),i=setTimeout(function(){i=null,r.updateGraphStates();},16);}},e.updateStates=function(t,e,n){var i=this;r.isString(e)?i.updateState(t,e,n):e.forEach(function(e){i.updateState(t,e,n);});},e._checkCache=function(t,e,n){if(n[e]){var r=n[e].indexOf(t);r>=0&&n[e].splice(r,1);}},e._cacheState=function(t,e,n){n[e]||(n[e]=[]),n[e].push(t);},e.updateGraphStates=function(){var t=this.graph.get("states"),e=this.cachedStates;r.each(e.disabled,function(e,n){t[n]&&(t[n]=t[n].filter(function(t){return e.indexOf(t)<0&&!e.destroyed;}));}),r.each(e.enabled,function(e,n){if(t[n]){var r={};t[n].forEach(function(t){t.destroyed||(r[t.get("id")]=!0);}),e.forEach(function(e){var i=e.get("id");r[i]||e.destroyed||(r[i]=!0,t[n].push(e));});}else t[n]=e;}),this.graph.emit("graphstatechange",{states:t}),this.cachedStates={enabled:{},disabled:{}};},e.destroy=function(){this.graph=null,this.cachedStates=null,i&&clearTimeout(i),i=null,this.destroyed=!0;},t;}();t.exports=a;},function(t,e,n){var r=n(1),i={source:"start",target:"end"},a=function(t){function e(){return t.apply(this,arguments)||this;}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t);var n=e.prototype;return n.getDefaultCfg=function(){return {type:"edge",sourceNode:null,targetNode:null,startPoint:null,endPoint:null,linkCenter:!1};},n.init=function(){t.prototype.init.call(this),this.setSource(this.get("source")),this.setTarget(this.get("target"));},n.setSource=function(t){this._setEnd("source",t),this.set("source",t);},n.setTarget=function(t){this._setEnd("target",t),this.set("target",t);},n.getSource=function(){return this.get("source");},n.getTarget=function(){return this.get("target");},n.update=function(t){var e=this.get("model");r.mix(e,t),this.updateShape(),this.afterUpdate(),this.clearCache();},n.updatePosition=function(){},n._setEnd=function(t,e){var n=i[t]+"Point",a=t+"Node",o=this.get(a);o&&o.removeEdge(this),r.isPlainObject(e)?(this.set(n,e),this.set(a,null)):(e.addEdge(this),this.set(a,e),this.set(n,null));},n._getLinkPoint=function(t,e,n){var a=i[t]+"Point",o=t+"Node",s=this.get(a);if(!s){var u=this.get(o),c=t+"Anchor",f=this._getPrePoint(t,n),h=e[c];r.isNil(h)||(s=u.getLinkPointByAnchor(h)),s=s||u.getLinkPoint(f),r.isNil(s.index)||this.set(t+"AnchorIndex",s.index);}return s;},n._getPrePoint=function(t,e){if(e&&e.length)return e["source"===t?0:e.length-1];var n="source"===t?"target":"source";return this._getEndPoint(n);},n._getControlPointsByCenter=function(t){var e=this._getEndPoint("source"),n=this._getEndPoint("target");return this.get("shapeFactory").getControlPoints(t.shape,{startPoint:e,endPoint:n});},n._getEndPoint=function(t){var e=t+"Node",n=i[t]+"Point",r=this.get(e);return r?r.get("model"):this.get(n);},n._getEndCenter=function(t){var e=t+"Node",n=i[t]+"Point",r=this.get(e);if(r){var a=r.getBBox();return {x:a.centerX,y:a.centerY};}return this.get(n);},n.getShapeCfg=function(e){var n=this.get("linkCenter"),r=t.prototype.getShapeCfg.call(this,e);if(n)r.startPoint=this._getEndCenter("source"),r.endPoint=this._getEndCenter("target");else{var i=r.controlPoints||this._getControlPointsByCenter(r);r.startPoint=this._getLinkPoint("source",e,i),r.endPoint=this._getLinkPoint("target",e,i);}return r.sourceNode=this.get("sourceNode"),r.targetNode=this.get("targetNode"),r;},n.getModel=function(){var t=this.get("model"),e=r.mix({},t),n=this.get("sourceNode"),i=this.get("targetNode");return n?(e.source=n.get("id"),delete e.sourceNode):e.source=this.get("startPoint"),i?(e.target=i.get("id"),delete e.targetNode):e.target=this.get("endPoint"),e;},n.destroy=function(){var e=this.get("sourceNode"),n=this.get("targetNode");e&&!e.destroyed&&e.removeEdge(this),n&&!n.destroyed&&n.removeEdge(this),t.prototype.destroy.call(this);},e;}(n(111));t.exports=a;},function(t,e,n){var r=n(1);function i(t,e){return (e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y);}var a=function(t){function e(){return t.apply(this,arguments)||this;}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;}(e,t);var n=e.prototype;return n.getDefaultCfg=function(){return {type:"node",anchors:[],edges:[],status:[]};},n.getEdges=function(){return this.get("edges");},n.getInEdges=function(){var t=this;return this.get("edges").filter(function(e){return e.get("target")===t;});},n.getOutEdges=function(){var t=this;return this.get("edges").filter(function(e){return e.get("source")===t;});},n.getLinkPointByAnchor=function(t){return this.getAnchorPoints()[t];},n.getLinkPoint=function(t){var e,n=this.get("keyShape").get("type"),a=this.getBBox(),o=a.centerX,s=a.centerY,u=this.getAnchorPoints();switch(n){case"circle":e=r.getCircleIntersectByPoint({x:o,y:s,r:a.width/2},t);break;case"ellipse":e=r.getEllispeIntersectByPoint({x:o,y:s,rx:a.width/2,ry:a.height/2},t);break;default:e=r.getRectIntersectByPoint(a,t);}var c=e;return u.length&&(c||(c=t),c=function(t,e){for(var n=0,r=t[0],a=i(t[0],e),o=0;o<t.length;o++){var s=t[o],u=i(s,e);u<a&&(r=s,a=u,n=o);}return r.anchorIndex=n,r;}(u,c)),c||(c={x:o,y:s}),c;},n.lock=function(){this.set("locked",!0);},n.unlock=function(){this.set("locked",!1);},n.hasLocked=function(){return this.get("locked");},n.addEdge=function(t){this.get("edges").push(t);},n.removeEdge=function(t){var e=this.getEdges(),n=e.indexOf(t);n>-1&&e.splice(n,1);},n.clearCache=function(){this.set("bboxCache",null),this.set("anchorPointsCache",null);},n._isOnlyMove=function(t){if(!t)return !1;var e=!r.isNil(t.x),n=!r.isNil(t.y),i=Object.keys(t);return 1===i.length&&(e||n)||2===i.length&&e&&n;},n.getAnchorPoints=function(){var t=this.get("anchorPointsCache");if(!t){t=[];var e=this.get("shapeFactory"),n=this.getBBox(),i=this.get("model"),a=this.getShapeCfg(i),o=e.getAnchorPoints(i.shape,a)||[];r.each(o,function(e,i){var a=r.mix({x:n.minX+e[0]*n.width,y:n.minY+e[1]*n.height},e[2],{index:i});t.push(a);}),this.set("anchorPointsCache",t);}return t;},e;}(n(111));t.exports=a;},function(t,e,n){t.exports={Node:n(207),Edge:n(206)};},function(t,e,n){var r=n(1),i=n(208),a=n(2),o=Object.hasOwnProperty,s=function(){function t(t){this.graph=t;}var e=t.prototype;return e.addItem=function(t,e){var n,s=this.graph,u=s.get(t+"Group")||s.get("group"),c=r.upperFirst(t),f=s.get(t+r.upperFirst("stateStyles"))||{},h=s.get("default"+c),l=s.get(t+"Mapper");if(l){var d=l(e);d.stateStyles&&(f=d.stateStyles,delete d.stateStyles),e=a({},h,e,d);}else h&&r.each(h,function(t,n){o.call(e,n)||(r.isObject(t)?e[n]=r.clone(t):e[n]=h[n]);});if(s.emit("beforeadditem",{type:t,model:e}),"edge"===t){var p=e.source,g=e.target;if(p&&r.isString(p)&&(p=s.findById(p)),g&&r.isString(g)&&(g=s.findById(g)),!p||!g)return void console.warn("The source or target node of edge "+e.id+" does not exist!");n=new i[c]({model:e,source:p,target:g,styles:f,linkCenter:s.get("linkCenter"),group:u.addGroup()});}else n=new i[c]({model:e,styles:f,group:u.addGroup()});return s.get(t+"s").push(n),s.get("itemMap")[n.get("id")]=n,s.autoPaint(),s.emit("afteradditem",{item:n,model:e}),n;},e.updateItem=function(t,e){var n=this.graph;if(r.isString(t)&&(t=n.findById(t)),t&&!t.destroyed){var i=n.get(t.getType()+"Mapper"),o=t.getModel();if(i){var s=i(a({},o,e)),u=a({},o,s,e);s.stateStyles&&(t.set("styles",u.stateStyles),delete u.stateStyles),r.each(u,function(t,n){e[n]=t;});}else r.each(e,function(t,n){o[n]&&r.isObject(t)&&!r.isArray(t)&&(e[n]=r.mix({},o[n],e[n]));});if(n.emit("beforeupdateitem",{item:t,cfg:e}),"edge"===t.getType()){if(e.source){var c=e.source;r.isString(c)&&(c=n.findById(c)),t.setSource(c);}if(e.target){var f=e.target;r.isString(f)&&(f=n.findById(f)),t.setTarget(f);}}if(t.update(e),"node"===t.getType()){var h=n.get("autoPaint");n.setAutoPaint(!1),r.each(t.getEdges(),function(t){n.refreshItem(t);}),n.setAutoPaint(h);}n.autoPaint(),n.emit("afterupdateitem",{item:t,cfg:e});}},e.removeItem=function(t){var e=this.graph;if(r.isString(t)&&(t=e.findById(t)),t&&!t.destroyed){e.emit("beforeremoveitem",{item:t});var n=t.getType(),i=e.get(t.getType()+"s"),a=i.indexOf(t);if(i.splice(a,1),delete e.get("itemMap")[t.get("id")],"node"===n)for(var o=t.getEdges(),s=o.length;s>=0;s--)e.removeItem(o[s]);t.destroy(),e.autoPaint(),e.emit("afterremoveitem",{item:t});}},e.setItemState=function(t,e,n){var r=this.graph;t.hasState(e)!==n&&(r.emit("beforeitemstatechange",{item:t,state:e,enabled:n}),t.setState(e,n),r.autoPaint(),r.emit("afteritemstatechange",{item:t,state:e,enabled:n}));},e.clearItemStates=function(t,e){var n=this.graph;r.isString(t)&&(t=n.findById(t)),n.emit("beforeitemstatesclear",{item:t,states:e}),t.clearStates(e),n.autoPaint(),n.emit("afteritemstatesclear",{item:t,states:e});},e.refreshItem=function(t){var e=this.graph;r.isString(t)&&(t=e.findById(t)),e.emit("beforeitemrefresh",{item:t}),t.refresh(),e.autoPaint(),e.emit("afteritemrefresh",{item:t});},e.changeItemVisibility=function(t,e){var n=this,i=n.graph;if(r.isString(t)&&(t=i.findById(t)),i.emit("beforeitemvisibilitychange",{item:t,visible:e}),t.changeVisibility(e),"node"===t.getType()){var a=i.get("autoPaint");i.setAutoPaint(!1),r.each(t.getEdges(),function(t){(!e||t.get("source").isVisible()&&t.get("target").isVisible())&&n.changeItemVisibility(t,e);}),i.setAutoPaint(a);}i.autoPaint(),i.emit("afteritemvisibilitychange",{item:t,visible:e});},e.destroy=function(){this.graph=null,this.destroyed=!0;},t;}();t.exports=s;},function(t,e,n){var r=n(1),i=n(114);function a(t,e){return r.each(e,function(e){t.indexOf(e)<0&&(r.isString(e)&&(e={type:e}),t.push(e));}),t;}function o(t,e){var n=[];return t.forEach(function(t){e.indexOf(t.type)<0&&n.push(t);}),n;}var s=function(){function t(t){this.graph=t,this.modes=t.get("modes")||{default:[]},this._formatModes(),this.mode=t.get("defaultMode")||"default",this.currentBehaves=[],this.setMode(this.mode);}var e=t.prototype;return e._formatModes=function(){var t=this.modes;r.each(t,function(t){r.each(t,function(e,n){r.isString(e)&&(t[n]={type:e});});});},e.setMode=function(t){var e=this.modes,n=this.graph;if(e[t])return n.emit("beforemodechange",{mode:t}),r.each(this.currentBehaves,function(t){t.unbind(n);}),this._setBehaviors(t),n.emit("aftermodechange",{mode:t}),this.mode=t,this;},e.manipulateBehaviors=function(t,e,n){var i=this;return r.isArray(t)||(t=[t]),r.isArray(e)?(r.each(e,function(e){i.modes[e]?i.modes[e]=n?a(i.modes[e],t):o(i.modes[e],t):n&&(i.modes[e]=[].concat(t));}),this):(e||(e=this.mode),i.modes[e]=n?a(i.modes[e],t):o(i.modes[e],t),i.setMode(this.mode),this);},e._setBehaviors=function(t){var e,n=this.graph,a=this.modes[t],o=[];r.each(a,function(t){i.getBehavior(t.type)&&((e=new(i.getBehavior(t.type))(t))&&e.bind(n),o.push(e));}),this.currentBehaves=o;},e.destroy=function(){this.graph=null,this.modes=null,this.currentBehaves=null,this.destroyed=!0;},t;}();t.exports=s;},function(t,e,n){var r=n(1),i=["click","mousedown","mouseup","dblclick","contextmenu","mouseenter","mouseout","mouseover","mousemove","mouseleave","dragstart","dragend","drag","dragenter","dragleave","drop"];var a=[1,0,0,0,1,0,0,0,1],o=9;var s=function(){function t(t){this.graph=t,this.extendEvents=[],this._initEvents();}var e=t.prototype;return e._initEvents=function(){var t=this.graph.get("canvas"),e=t.get("el"),n=this.extendEvents,a=r.wrapBehavior(this,"_onCanvasEvents"),o=r.wrapBehavior(this,"_onExtendEvents"),s=r.wrapBehavior(this,"_onWheelEvent");r.each(i,function(e){t.on(e,a);}),this.canvasHandler=a,n.push(r.addEventListener(e,"DOMMouseScroll",s)),n.push(r.addEventListener(e,"mousewheel",s)),window&&n.push(r.addEventListener(window,"keydown",o)),window&&n.push(r.addEventListener(window,"keyup",o));},e._onCanvasEvents=function(t){var e=this.graph,n=e.get("canvas"),r=n.get("pixelRatio"),i=t.target,s=t.type;t.canvasX=t.x/r,t.canvasY=t.y/r;var u={x:t.canvasX,y:t.canvasY};if(function(t){for(var e=0;e<o;e++)if(t[e]!==a[e])return !0;return !1;}(e.get("group").getMatrix())&&(u=e.getPointByCanvas(t.canvasX,t.canvasY)),t.x=u.x,t.y=u.y,t.currentTarget=e,i===n)return "mousemove"===s&&this._handleMouseMove(t,"canvas"),t.target=n,t.item=null,e.emit(s,t),void e.emit("canvas:"+s,t);var c=function(t){for(;t&&!t.get("item");)t=t.get("parent");return t;}(i);if(c){var f=c.get("item");if(!f.destroyed){var h=f.getType();t.target=i,t.item=f,e.emit(s,t),"mouseenter"!==s&&"mouseleave"!==s&&"dragenter"!==s&&"dragleave"!==s&&(e.emit(h+":"+s,t),"dragstart"===s&&(this.dragging=!0),"dragend"===s&&(this.dragging=!1),"mousemove"===s&&this._handleMouseMove(t,h));}}else e.emit(s,t);},e._onExtendEvents=function(t){this.graph.emit(t.type,t);},e._onWheelEvent=function(t){r.isNil(t.wheelDelta)&&(t.wheelDelta=-t.detail),this.graph.emit("wheel",t);},e._handleMouseMove=function(t,e){var n=this.graph.get("canvas"),i=t.target===n?null:t.item,a=this.preItem;t=r.cloneEvent(t),a&&a!==i&&!a.destroyed&&(t.item=a,this._emitCustomEvent(a.getType(),"mouseleave",t),this.dragging&&this._emitCustomEvent(a.getType(),"dragleave",t)),i&&a!==i&&(t.item=i,this._emitCustomEvent(e,"mouseenter",t),this.dragging&&this._emitCustomEvent(e,"dragenter",t)),this.preItem=i;},e._emitCustomEvent=function(t,e,n){n.type=e,this.graph.emit(t+":"+e,n);},e.destroy=function(){var t=this.graph,e=this.canvasHandler,n=t.get("canvas");r.each(i,function(t){n.off(t,e);}),r.each(this.extendEvents,function(t){t.remove();});},t;}();t.exports=s;},function(t,e,n){var r=n(1),i=function(){function t(t){this.graph=t;}var e=t.prototype;return e.getFormatPadding=function(){return r.formatPadding(this.graph.get("fitViewPadding"));},e._fitView=function(){var t=this.getFormatPadding(),e=this.graph,n=e.get("group"),r=e.get("width"),i=e.get("height");n.resetMatrix();var a=n.getBBox(),o=this._getViewCenter(),s=a.x+a.width/2,u=a.y+a.height/2;e.translate(o.x-s,o.y-u);var c=(r-t[1]-t[3])/a.width,f=(i-t[0]-t[2])/a.height,h=c;c>f&&(h=f),e.zoom(h,o);},e.focusPoint=function(t){var e=this._getViewCenter(),n=this.getPointByCanvas(e.x,e.y),r=this.graph.get("group").getMatrix();this.graph.translate((n.x-t.x)*r[0],(n.y-t.y)*r[4]);},e.getPointByClient=function(t,e){var n=this.graph.get("canvas"),r=n.get("pixelRatio"),i=n.getPointByClient(t,e);return this.getPointByCanvas(i.x/r,i.y/r);},e.getClientByPoint=function(t,e){var n=this.graph.get("canvas"),r=this.getCanvasByPoint(t,e),i=n.get("pixelRatio"),a=n.getClientByPoint(r.x*i,r.y*i);return {x:a.clientX,y:a.clientY};},e.getPointByCanvas=function(t,e){var n=this.graph.get("group").getMatrix();return r.invertMatrix({x:t,y:e},n);},e.getCanvasByPoint=function(t,e){var n=this.graph.get("group").getMatrix();return r.applyMatrix({x:t,y:e},n);},e.focus=function(t){if(r.isString(t)&&(t=this.graph.findById(t)),t){var e=t.get("group").getMatrix();this.focusPoint({x:e[6],y:e[7]});}},e.changeSize=function(t,e){if(!r.isNumber(t)||!r.isNumber(e))throw Error("invalid canvas width & height");this.graph.set({width:t,height:e}),this.graph.get("canvas").changeSize(t,e);},e._getViewCenter=function(){var t=this.getFormatPadding(),e=this.graph,n=this.graph.get("width"),r=e.get("height");return {x:(n-t[2]-t[3])/2+t[3],y:(r-t[0]-t[2])/2+t[0]};},e.destroy=function(){this.graph=null,this.destroyed=!0;},t;}();t.exports=i;},function(t,e,n){t.exports={View:n(212),Event:n(211),Mode:n(210),Item:n(209),State:n(205),Layout:n(204),CustomGroup:n(203)};},function(t,e){var n=["click","dblclick"];t.exports={getDefaultCfg:function(){return {trigger:"dblclick"};},getEvents:function(){var t,e;return n.includes(this.trigger)?e=this.trigger:(e="dblclick",console.warn("Behavior collapse-expand-group的trigger参数不合法，请输入click或dblclick")),(t={})[""+e]="onGroupClick",t;},onGroupClick:function(t){var e=t.target.get("groupId");if(!e)return !1;this.graph.get("customGroupControll").collapseExpandGroup(e);}};},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(2),a=n(10).delegateStyle,o=document.body;t.exports={getDefaultCfg:function(){return {updateEdge:!0,delegate:!0,delegateStyle:{},maxMultiple:1.1,minMultiple:1};},getEvents:function(){return {"node:dragstart":"onDragStart","node:drag":"onDrag","node:dragend":"onDragEnd","canvas:mouseleave":"onOutOfRange",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"};},onMouseEnter:function(t){var e=t.target.get("groupId");if(e&&this.origin){var n=this.graph.get("customGroupControll"),r=n.getDeletageGroupById(e);if(r){var i=r.nodeGroup.get("keyShape");this.inGroupId=e,n.setGroupStyle(i,"hover");}}},onMouseLeave:function(t){var e=t.target.get("groupId");if(e&&this.origin){var n=this.graph.get("customGroupControll"),r=n.getDeletageGroupById(e);if(r){var i=r.nodeGroup.get("keyShape");n.setGroupStyle(i,"default");}}e||(this.inGroupId=null);},onDragStart:function(t){var e=this;if(this.shouldBegin.call(this,t)){var n=t.item,r=this.graph;this.targets=[];var i=r.findAllByState("node","selected"),a=n.get("id");if(0===i.filter(function(t){var e=t.get("id");return a===e;}).length){this.target=n;var o=n.getModel().groupId;if(o){var s=r.get("customGroupControll"),u=s.getDeletageGroupById(o);if(u){var c=u.nodeGroup.get("keyShape");s.setGroupStyle(c,"hover"),this.inGroupId=o;}}}else i.length>1?i.forEach(function(t){e.targets.push(t);}):this.targets.push(n);this.origin={x:t.x,y:t.y},this.point={},this.originPoint={};}},onDrag:function(t){if(this.origin&&this.get("shouldUpdate").call(this,t))if(this.targets.length>0)this._updateDelegate(t);else{this._update(this.target,t,!0);var e=t.item,n=this.graph,r=e.getModel().groupId;if(r){var i=n.get("customGroupControll"),a=i.getDeletageGroupById(r);if(a){var o=a.nodeGroup.get("keyShape");this.inGroupId!==r?i.setGroupStyle(o,"default"):i.setGroupStyle(o,"hover");}}}},onDragEnd:function(t){var e=this;if(this.origin&&this.shouldEnd.call(this,t)){if(this.shape&&(this.shape.remove(),this.shape=null),this.target){var n=this.target.get("delegateShape");n&&(n.remove(),this.target.set("delegateShape",null));}this.targets.length>0?this.targets.forEach(function(n){return e._update(n,t);}):this.target&&this._update(this.target,t),this.point={},this.origin=null,this.originPoint={},this.targets.length=0,this.target=null;var r=this.fn;r&&(o.removeEventListener("mouseup",r,!1),this.fn=null),this.setCurrentGroupStyle(t);}},setCurrentGroupStyle:function(t){var e=t.item,n=this.graph,r=n.get("autoPaint");n.setAutoPaint(!1);var i=e.getModel(),a=i.groupId,o=i.id,s=n.get("customGroupControll"),u=s.customGroup,c=n.get("groupNodes");if(this.inGroupId&&a){var f=u[a].nodeGroup,h=f.get("keyShape"),l=e.getBBox(),d=h.getBBox(),p=l.x,g=l.y,v=d.minX,m=d.minY,y=d.maxX,x=d.maxY;if(!(p<y*this.maxMultiple&&p>v*this.minMultiple&&g<x*this.maxMultiple&&g>m*this.minMultiple)||this.inGroupId!==a){var b=c[a];c[a]=b.filter(function(t){return t!==o;}),s.dynamicChangeGroupSize(t,f,h),delete i.groupId;}if(this.inGroupId!==a){var w=u[this.inGroupId].nodeGroup,_=w.get("keyShape");-1===c[this.inGroupId].indexOf(o)&&c[this.inGroupId].push(o),i.groupId=this.inGroupId,s.dynamicChangeGroupSize(t,w,_);}s.setGroupStyle(h,"default");}else if(this.inGroupId&&!a){var M=u[this.inGroupId].nodeGroup,S=M.get("keyShape");-1===c[this.inGroupId].indexOf(o)&&c[this.inGroupId].push(o),i.groupId=this.inGroupId,s.dynamicChangeGroupSize(t,M,S);}else if(!this.inGroupId&&a){for(var P in c){var A=c[P];c[P]=A.filter(function(t){return t!==o;});}var k=u[a].nodeGroup,C=k.get("keyShape");s.dynamicChangeGroupSize(t,k,C),delete i.groupId;}this.inGroupId=null,n.paint(),n.setAutoPaint(r);},onOutOfRange:function(t){var e=this;if(this.origin){var n=e.graph.get("canvas").get("el"),r=function(r){r.target!==n&&e.onDragEnd(t);};this.fn=r,o.addEventListener("mouseup",r,!1);}},_update:function(t,e,n){var r=this.origin,i=t.get("model"),a=t.get("id");this.point[a]||(this.point[a]={x:i.x,y:i.y});var o=e.x-r.x+this.point[a].x,s=e.y-r.y+this.point[a].y;if(n)this._updateDelegate(e,o,s);else{var u={x:o,y:s};this.get("updateEdge")?this.graph.updateItem(t,u):(t.updatePosition(u),this.graph.paint());}},_updateDelegate:function(t,e,n){var o=t.item,s=this.graph,u=s.get("groupType"),c=o.get("keyShape").getBBox();if(!this.shape){var f=s.get("group"),h=i({},a,this.delegateStyle);if(this.targets.length>0){var l=s.findAllByState("node","selected");0===l.length&&l.push(o);var d=s.get("customGroupControll").calculationGroupPosition(l),p=d.x,g=d.y,v=d.width,m=d.height;this.originPoint={x:p,y:g,width:v,height:m},this.shape=f.addShape("rect",{attrs:r({width:v,height:m,x:p,y:g},h)});}else this.target&&(this.shape=f.addShape("rect",{attrs:r({width:c.width,height:c.height,x:e-c.width/2,y:n-c.height/2},h)}),this.target.set("delegateShape",this.shape));this.shape.set("capture",!1);}if(this.targets.length>0){var y=t.x-this.origin.x+this.originPoint.minX,x=t.y-this.origin.y+this.originPoint.minY;this.shape.attr({x:y,y:x});}else this.target&&("circle"===u?this.shape.attr({x:e-c.width/2,y:n-c.height/2}):"rect"===u&&this.shape.attr({x:e,y:n}));this.graph.paint();}};},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(2),a=document.body,o={fill:"#F3F9FF",fillOpacity:.5,stroke:"#1890FF",strokeOpacity:.9,lineDash:[5,5]};t.exports={getDefaultCfg:function(){return {delegate:!0,delegateStyle:{},delegateShapes:{},delegateShapeBBoxs:{}};},getEvents:function(){return {dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd","canvas:mouseleave":"onOutOfRange"};},onDragStart:function(t){var e=t.target.get("groupId");if(!e)return !1;var n=this.graph,r=n.get("customGroupControll"),i=r.customGroup,a=i[e].nodeGroup;this.targetGroup=a,this.mouseOrigin={x:t.canvasX,y:t.canvasY};var o=null,s=n.save().groups,u=Array.isArray(s),c=0;for(s=u?s:s[Symbol.iterator]();;){var f;if(u){if(c>=s.length)break;f=s[c++];}else{if((c=s.next()).done)break;f=c.value;}var h=f;if(e===h.id){o=h.parentId;break;}}if(o){var l=i[o].nodeGroup;r.setGroupStyle(l.get("keyShape"),"hover");}},onDrag:function(t){if(!this.mouseOrigin)return !1;this._updateDelegate(t);},onDragEnd:function(t){var e=t.target.get("groupId");if(this.delegateShapes[e]&&(this.delegateShapeBBox=this.delegateShapes[e].getBBox(),this.delegateShapes[e].remove(),delete this.delegateShapes[e]),!this.delegateShapeBBox)return !1;var n=this.graph,r=n.get("autoPaint");n.setAutoPaint(!1);var i=n.get("customGroupControll"),a=this.delegateShapeBBoxs[e];i.updateGroup(e,a),n.setAutoPaint(r),n.paint(),this.mouseOrigin=null,this.shapeOrigin=null,i.resetNodePoint(),this.delegateShapeBBox=null;},_updateDelegate:function(t){var e=t.target.get("groupId"),n=this.targetGroup.get("keyShape"),a=this.graph,s=a.get("autoPaint");a.setAutoPaint(!1);var u=this.delegateShapes[e],c=n.getBBox(),f=n.get("type");if(u){var h=this.mouseOrigin,l=this.shapeOrigin,d=t.canvasX-h.x,p=t.canvasY-h.y,g=d+l.x,v=p+l.y,m=a.getPointByCanvas(g,v);u.attr({x:m.x,y:m.y}),this.delegateShapeBBoxs[e]=u.getBBox();}else{var y=a.get("delegateGroup"),x=c.width,b=c.height,w=r({width:x,height:b,x:t.canvasX-x/2,y:t.canvasY-b/2},i({},o,this.delegateStyle));if("circle"===f){var _=t.canvasX,M=t.canvasY,S=x>b?x/2:b/2;u=y.addShape("circle",{attrs:r({x:_,y:M,r:S},i({},o,this.delegateStyle))}),this.shapeOrigin={x:_,y:M};}else u=y.addShape("rect",{attrs:w}),this.shapeOrigin={x:w.x,y:w.y};this.delegateShapes[e]=u,this.delegateShapeBBoxs[e]=u.getBBox();}a.paint(),a.setAutoPaint(s);},onOutOfRange:function(t){var e=this;if(this.origin){var n=e.graph.get("canvas").get("el"),r=function(r){r.target!==n&&e.onDragEnd(t);};this.fn=r,a.addEventListener("mouseup",r,!1);}}};},function(t,e){var n=Math.min,r=Math.max,i=Math.abs,a=["drag","shift","ctrl","alt","control"];t.exports={getDefaultCfg:function(){return {brushStyle:{fill:"#EEF6FF",fillOpacity:.4,stroke:"#DDEEFE",lineWidth:1},onSelect:function(){},onDeselect:function(){},selectedState:"selected",trigger:"shift",includeEdges:!0,selectedEdges:[],selectedNodes:[]};},getEvents:function(){var t;return a.indexOf(this.trigger.toLowerCase())>-1?t=this.trigger:(t="shift",console.warn("Behavior brush-select的trigger参数不合法，请输入drag、shift、ctrl或alt")),"drag"===t?{mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp","canvas:click":"clearStates"}:{mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp","canvas:click":"clearStates",keyup:"onKeyUp",keydown:"onKeyDown"};},onMouseDown:function(t){if(!t.item&&("drag"===this.trigger||this.keydown)){this.selectedNodes&&0!==this.selectedNodes.length&&this.clearStates();var e=this.brush;e||(e=this._createBrush()),this.originPoint={x:t.canvasX,y:t.canvasY},e.attr({width:0,height:0}),e.show(),this.dragging=!0;}},onMouseMove:function(t){this.dragging&&("drag"===this.trigger||this.keydown)&&(this._updateBrush(t),this.graph.paint());},onMouseUp:function(t){if((this.brush||this.dragging)&&("drag"===this.trigger||this.keydown)){var e=this.graph,n=e.get("autoPaint");e.setAutoPaint(!1),this.brush.destroy(),this.brush=null,this._getSelectedNodes(t),this.dragging=!1,this.graph.paint(),e.setAutoPaint(n);}},clearStates:function(){var t=this.graph,e=t.get("autoPaint");t.setAutoPaint(!1);var n=this.selectedState,r=t.findAllByState("node",n),i=t.findAllByState("edge",n);r.forEach(function(e){return t.setItemState(e,n,!1);}),i.forEach(function(e){return t.setItemState(e,n,!1);}),this.selectedNodes=[],this.selectedEdges=[],this.onDeselect&&this.onDeselect(this.selectedNodes,this.selectedEdges),t.paint(),t.setAutoPaint(e);},_getSelectedNodes:function(t){var e=this,i=this.graph,a=this.selectedState,o=this.originPoint,s={x:t.x,y:t.y},u=i.getPointByCanvas(o.x,o.y),c=n(s.x,u.x),f=r(s.x,u.x),h=n(s.y,u.y),l=r(s.y,u.y),d=[],p=this.shouldUpdate,g=[];i.getNodes().forEach(function(t){var e=t.getBBox();if(e.centerX>=c&&e.centerX<=f&&e.centerY>=h&&e.centerY<=l&&p(t,"select")){d.push(t);var n=t.getModel();g.push(n.id),i.setItemState(t,a,!0);}});var v=[];this.includeEdges&&d.forEach(function(t){t.getEdges().forEach(function(t){var n=t.getModel(),r=n.source,a=n.target;g.includes(r)&&g.includes(a)&&p(t,"select")&&(v.push(t),i.setItemState(t,e.selectedState,!0));});}),this.selectedEdges=v,this.selectedNodes=d,this.onSelect&&this.onSelect(d,v);},_createBrush:function(){var t=this.graph.get("canvas").addShape("rect",{attrs:this.brushStyle,capture:!1});return this.brush=t,t;},_updateBrush:function(t){var e=this.originPoint;this.brush.attr({width:i(t.canvasX-e.x),height:i(t.canvasY-e.y),x:n(t.canvasX,e.x),y:n(t.canvasY,e.y)});},onKeyDown:function(t){var e=t.key;e&&e.toLowerCase()===this.trigger.toLowerCase()||"control"===e.toLowerCase()?this.keydown=!0:this.keydown=!1;},onKeyUp:function(){this.brush&&(this.brush.destroy(),this.brush=null,this.dragging=!1),this.keydown=!1;}};},function(t,e){t.exports={getDefaultCfg:function(){return {trigger:"mouseenter",activeState:"active",inactiveState:"inactive",resetSelected:!1,shouldUpdate:function(){return !0;}};},getEvents:function(){return "mouseenter"===this.get("trigger")?{"node:mouseenter":"setAllItemStates","node:mouseleave":"clearAllItemStates"}:{"node:click":"setAllItemStates","canvas:click":"clearAllItemStates"};},setAllItemStates:function(t){var e=this.get("graph"),n=t.item;if(this.item=n,this.shouldUpdate(t.item,{event:t,action:"activate"})){var r=this,i=this.get("activeState"),a=this.get("inactiveState"),o=e.get("autoPaint");e.setAutoPaint(!1),e.getNodes().forEach(function(t){var n=t.hasState("selected");r.resetSelected&&n&&e.setItemState(t,"selected",!1),e.setItemState(t,i,!1),a&&e.setItemState(t,a,!0);}),e.getEdges().forEach(function(t){e.setItemState(t,i,!1),a&&e.setItemState(t,a,!0);}),a&&e.setItemState(n,a,!1),e.setItemState(n,i,!0),e.getEdges().forEach(function(t){if(t.getSource()===n){var o=t.getTarget(),s=o.hasState("selected");r.resetSelected&&s&&e.setItemState(o,"selected",!1),a&&e.setItemState(o,a,!1),e.setItemState(o,i,!0),e.setItemState(t,i,!0),e.setItemState(t,a,!1),t.toFront();}else if(t.getTarget()===n){var u=t.getSource(),c=u.hasState("selected");r.resetSelected&&c&&e.setItemState(u,"selected",!1),a&&e.setItemState(u,a,!1),e.setItemState(u,i,!0),e.setItemState(t,i,!0),e.setItemState(t,a,!1),t.toFront();}}),e.paint(),e.setAutoPaint(o),e.emit("afteractivaterelations",{item:t.item,action:"activate"});}},clearAllItemStates:function(t){var e=this.get("graph");if(this.shouldUpdate(t.item,{event:t,action:"deactivate"})){var n=this,r=e.get("autoPaint");e.setAutoPaint(!1),e.getNodes().forEach(function(t){var r=t.hasState("selected");e.clearItemStates(t),r&&e.setItemState(t,"selected",!n.resetSelected);}),e.getEdges().forEach(function(t){e.clearItemStates(t);}),e.paint(),e.setAutoPaint(r),e.emit("afteractivaterelations",{item:t.item||this.item,action:"deactivate"});}}};},function(t,e){var n=["click","dblclick"];t.exports={getDefaultCfg:function(){return {trigger:"click",onChange:function(){}};},getEvents:function(){var t,e;return n.includes(this.trigger)?e=this.trigger:(e="click",console.warn("Behavior collapse-expand的trigger参数不合法，请输入click或dblclick")),(t={})["node:"+e]="onNodeClick",t;},onNodeClick:function(t){var e=t.item,n=this.graph.findDataById(e.get("id")),r=n.children;if(r&&0!==r.length){var i=!n.collapsed;if(this.shouldBegin(t,i)&&(n.collapsed=i,e.getModel().collapsed=i,this.graph.emit("itemcollapsed",{item:t.item,collapsed:i}),this.shouldUpdate(t,i))){try{this.onChange(e,i);}catch(t){console.warn("G6 自 3.0.4 版本支持直接从 item.getModel() 获取源数据(临时通知，将在3.2.0版本中清除)",t);}this.graph.refreshLayout();}}}};},function(t,e,n){var r=n(1),i=n(113);t.exports=r.mix({getDefaultCfg:function(){return {item:"edge",formatText:function(t){return "source:"+t.source+" target:"+t.target;}};},getEvents:function(){return {"edge:mouseenter":"onMouseEnter","edge:mouseleave":"onMouseLeave","edge:mousemove":"onMouseMove"};}},i);},function(t,e,n){var r=n(1),i=n(113);t.exports=r.mix({getDefaultCfg:function(){return {item:"node",formatText:function(t){return t.label;}};},getEvents:function(){return {"node:mouseenter":"onMouseEnter","node:mouseleave":"onMouseLeave","node:mousemove":"onMouseMove"};}},i);},function(t,e,n){var r=n(1),i=["shift","ctrl","alt"];t.exports={getDefaultCfg:function(){return {multiple:!0,trigger:"shift"};},getEvents:function(){return this.multiple?{"node:click":"onClick","canvas:click":"onCanvasClick",keyup:"onKeyUp",keydown:"onKeyDown"}:{"node:click":"onClick","canvas:click":"onCanvasClick"};},onClick:function(t){var e=t.item,n=this.graph,i=n.get("autoPaint");if(n.setAutoPaint(!1),!this.keydown||!this.multiple){var a=n.findAllByState("node","selected");r.each(a,function(t){t!==e&&n.setItemState(t,"selected",!1);});}e.hasState("selected")?(this.shouldUpdate.call(this,t)&&n.setItemState(e,"selected",!1),n.emit("nodeselectchange",{target:e,select:!1})):(this.shouldUpdate.call(this,t)&&n.setItemState(e,"selected",!0),n.emit("nodeselectchange",{target:e,select:!0})),n.setAutoPaint(i),n.paint();},onCanvasClick:function(){var t=this.graph,e=t.get("autoPaint");t.setAutoPaint(!1);var n=t.findAllByState("node","selected");r.each(n,function(e){t.setItemState(e,"selected",!1);});var i=t.findAllByState("edge","selected");r.each(i,function(e){return t.setItemState(e,"selected",!1);}),t.paint(),t.setAutoPaint(e);},onKeyDown:function(t){var e=t.key;i.indexOf(e.toLowerCase()>-1)?this.keydown=!0:this.keydown=!1;},onKeyUp:function(){this.keydown=!1;}};},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(17),a=n(2),o=n(10).delegateStyle,s=document.body;t.exports={getDefaultCfg:function(){return {updateEdge:!0,delegateStyle:{},enableDelegate:!1};},getEvents:function(){return {"node:dragstart":"onDragStart","node:drag":"onDrag","node:dragend":"onDragEnd","canvas:mouseleave":"onOutOfRange"};},onDragStart:function(t){var e=this;if(this.shouldBegin.call(this,t)){var n=t.item;if(!n.hasLocked()){var r=this.graph;this.targets=[];var i=r.findAllByState("node","selected"),a=n.get("id");0===i.filter(function(t){var e=t.get("id");return a===e;}).length?this.target=n:i.length>1?i.forEach(function(t){t.hasLocked()||e.targets.push(t);}):this.targets.push(n),this.origin={x:t.x,y:t.y},this.point={},this.originPoint={};}}},onDrag:function(t){var e=this;if(this.origin&&this.get("shouldUpdate").call(this,t)){var n=this.graph,r=n.get("autoPaint");n.setAutoPaint(!1),this.targets.length>0?this.enableDelegate?this._updateDelegate(t):this.targets.forEach(function(n){e._update(n,t,e.enableDelegate);}):this._update(this.target,t,this.enableDelegate),n.paint(),n.setAutoPaint(r);}},onDragEnd:function(t){var e=this;if(this.origin&&this.shouldEnd.call(this,t)){var n=this.graph,r=n.get("autoPaint");if(n.setAutoPaint(!1),this.shape&&(this.shape.remove(),this.shape=null),this.target){var i=this.target.get("delegateShape");i&&(i.remove(),this.target.set("delegateShape",null));}this.targets.length>0?this.targets.forEach(function(n){return e._update(n,t);}):this.target&&this._update(this.target,t),this.point={},this.origin=null,this.originPoint={},this.targets.length=0,this.target=null;var a=this.fn;a&&(s.removeEventListener("mouseup",a,!1),this.fn=null),n.paint(),n.setAutoPaint(r);}},onOutOfRange:function(t){var e=this;if(this.origin){var n=e.graph.get("canvas").get("el"),r=function(r){r.target!==n&&e.onDragEnd(t);};this.fn=r,s.addEventListener("mouseup",r,!1);}},_update:function(t,e,n){var r=this.origin,i=t.get("model"),a=t.get("id");this.point[a]||(this.point[a]={x:i.x,y:i.y});var o=e.x-r.x+this.point[a].x,s=e.y-r.y+this.point[a].y;if(n)this._updateDelegate(e,o,s);else{var u={x:o,y:s};this.get("updateEdge")?this.graph.updateItem(t,u):t.updatePosition(u);}},_updateDelegate:function(t,e,n){var i=t.item.get("keyShape").getBBox();if(this.shape){if(this.targets.length>0){var s=t.x-this.origin.x+this.originPoint.minX,u=t.y-this.origin.y+this.originPoint.minY;this.shape.attr({x:s,y:u});}else this.target&&this.shape.attr({x:e+i.x,y:n+i.y});}else{var c=this.graph.get("group"),f=a({},o,this.delegateStyle);if(this.targets.length>0){var h=this.calculationGroupPosition(),l=h.x,d=h.y,p=h.width,g=h.height,v=h.minX,m=h.minY;this.originPoint={x:l,y:d,width:p,height:g,minX:v,minY:m},this.shape=c.addShape("rect",{attrs:r({width:p,height:g,x:l,y:d},f)});}else this.target&&(this.shape=c.addShape("rect",{attrs:r({width:i.width,height:i.height,x:e+i.x,y:n+i.y},f)}),this.target.set("delegateShape",this.shape));this.shape.set("capture",!1);}},calculationGroupPosition:function(){var t=this.graph,e=1/0,n=-1/0,r=1/0,a=-1/0,o=t.findAllByState("node","selected"),s=Array.isArray(o),u=0;for(o=s?o:o[Symbol.iterator]();;){var c;if(s){if(u>=o.length)break;c=o[u++];}else{if((u=o.next()).done)break;c=u.value;}var f=c,h=(i(f)?t.findById(f):f).getBBox(),l=h.minX,d=h.minY,p=h.maxX,g=h.maxY;l<e&&(e=l),d<r&&(r=d),p>n&&(n=p),g>a&&(a=g);}var v=Math.floor(e)-20,m=Math.floor(r)+10;return {x:v,y:m,width:Math.ceil(n)-v,height:Math.ceil(a)-m,minX:e,minY:r};}};},function(t,e){t.exports={getDefaultCfg:function(){return {sensitivity:2,minZoom:.1,maxZoom:10};},getEvents:function(){return {wheel:"onWheel"};},onWheel:function(t){if(t.preventDefault(),this.shouldUpdate.call(this,t)){var e=this.graph,n=e.get("canvas"),r=n.getPointByClient(t.clientX,t.clientY),i=n.get("pixelRatio"),a=this.get("sensitivity"),o=e.getZoom(),s=(o=t.wheelDelta<0?1-.05*a:1+.05*a)*e.getZoom();s>this.get("maxZoom")||s<this.get("minZoom")||(e.zoom(o,{x:r.x/i,y:r.y/i}),e.paint(),e.emit("wheelzoom",t));}}};},function(t,e,n){var r=n(1),i=Math.abs,a=document.body,o=[16,17,18];t.exports={getDefaultCfg:function(){return {direction:"both"};},getEvents:function(){return {"canvas:mousedown":"onMouseDown","canvas:mousemove":"onMouseMove","canvas:mouseup":"onMouseUp","canvas:click":"onMouseUp","canvas:mouseleave":"onOutOfRange",keyup:"onKeyUp",keydown:"onKeyDown"};},updateViewport:function(t){var e=this.origin,n=+t.clientX,r=+t.clientY;if(!isNaN(n)&&!isNaN(r)){var i=n-e.x,a=r-e.y;"x"===this.get("direction")?a=0:"y"===this.get("direction")&&(i=0),this.origin={x:n,y:r},this.graph.translate(i,a),this.graph.paint();}},onMouseDown:function(t){this.keydown||(this.origin={x:t.clientX,y:t.clientY},this.dragging=!1);},onMouseMove:function(t){if(!this.keydown){t=r.cloneEvent(t);var e=this.graph;if(this.origin){if(this.origin&&!this.dragging){if(i(this.origin.x-t.clientX)+i(this.origin.y-t.clientY)<10)return;this.shouldBegin.call(this,t)&&(t.type="dragstart",e.emit("canvas:dragstart",t),this.dragging=!0);}this.dragging&&(t.type="drag",e.emit("canvas:drag",t)),this.shouldUpdate.call(this,t)&&this.updateViewport(t);}}},onMouseUp:function(t){if(!this.keydown)if(this.dragging){t=r.cloneEvent(t);var e=this.graph;this.shouldEnd.call(this,t)&&this.updateViewport(t),t.type="dragend",e.emit("canvas:dragend",t),this.endDrag();}else this.origin=null;},endDrag:function(){if(this.dragging){this.origin=null,this.dragging=!1;var t=this.fn;t&&(a.removeEventListener("mouseup",t,!1),this.fn=null);}},onOutOfRange:function(t){if(this.dragging){var e=this,n=e.graph.get("canvas").get("el"),r=function(r){r.target!==n&&e.onMouseUp(t);};this.fn=r,a.addEventListener("mouseup",r,!1);}},onKeyDown:function(t){var e=t.keyCode||t.which;o.indexOf(e)>-1?this.keydown=!0:this.keydown=!1;},onKeyUp:function(){this.keydown=!1;}};},function(t,e,n){var r=n(1),i={registerBehavior:function(t,e){if(!e)throw new Error("please specify handler for this behavior:"+t);var n=function(t){var e=this;r.mix(e,e.getDefaultCfg(),t);var n=e.getEvents();if(n){var i={};r.each(n,function(t,n){i[n]=r.wrapBehavior(e,t);}),this._events=i;}};r.augment(n,{shouldBegin:function(){return !0;},shouldUpdate:function(){return !0;},shouldEnd:function(){return !0;},getEvents:function(){},bind:function(t){var e=this._events;this.graph=t,r.each(e,function(e,n){t.on(n,e);});},unbind:function(t){var e=this._events;r.each(e,function(e,n){t.off(n,e);});},get:function(t){return this[t];},set:function(t,e){return this[t]=e,this;},getDefaultCfg:function(){}},e),i[t]=n;},hasBehavior:function(t){return !!i[t];},getBehavior:function(t){return i[t];}};t.exports=i;},function(t,e,n){var r=n(110),i=n(24),a=n(3);i.registerLayout("fruchtermanGroup",{getDefaultCfg:function(){return {maxIteration:1e3,center:[0,0],gravity:1,speed:1,groupGravity:1,nodeRepulsiveCoefficient:50,groupRepulsiveCoefficient:10,nodeAttractiveCoefficient:1,groupAttractiveCoefficient:1,preventGroupOverlap:!0,groupCollideStrength:.7};},init:function(t){this.nodes=t.nodes,this.edges=t.edges,this.graph=t.graph,this.groupsData=this.graph.get("groups"),this.customGroup=this.graph.get("customGroup"),this.groupController=this.graph.get("customGroupControll");},execute:function(){var t=this,e=t.nodes,n=t.center;if(0!==e.length){if(1===e.length)return e[0].x=n[0],void(e[0].y=n[1]);var r=new Map(),i=new Map();e.forEach(function(t,e){r.set(t.id,t),i.set(t.id,e);}),t.nodeMap=r,t.nodeIndexMap=i,t.run(),t.graph.refreshPositions();var a=t.customGroup.get("children"),o=t.groupController,s=t.graph.get("groupType");a.forEach(function(e){var n=e.get("id"),r=t.groupMap.get(n);r.item=e;var i=o.getGroupPadding(n),a=o.calculationGroupPosition(r.nodeIds),u=a.x,c=a.y,f=a.width,h=a.height,l=e.findByClassName("group-title"),d=e.get("children")[0],p=0,g=0;if("circle"===s){var v=f>h?f/2:h/2,m=(f+2*u)/2,y=(h+2*c)/2;d.attr({x:m,y:y,r:v+i}),r.x=m,r.y=y,r.size=2*(v+i),p=m,g=y-v-i;}else if("rect"===s){var x=i*o.styles.default.disCoefficient,b=f+2*x,w=h+2*x,_=u-x,M=c-x;d.attr({x:_,y:M,width:b,height:w}),r.x=_,r.y=M,r.size=[b,w],p=u,g=c;}if(l){var S=r.groupData.title,P=0,A=0;S&&(P=S.offsetox||0,A=S.offsetoy||0,S.offsetX=P,S.offsetY=A,"rect"===s&&(S.offsetX=0,S.offsetY=0));var k=p+P,C=g+A;"rect"===s&&(k=p,C=g),l.attr({x:k,y:C}),r.titlePos=[k,C];}}),t.graph.paint();}},run:function(){var t=this,e=t.nodes,n=t.groupsData,r=t.edges,i=t.maxIteration,a=t.width||window.innerHeight,o=t.height||window.innerWidth,s=t.center,u=t.nodeMap,c=t.nodeIndexMap,f=a/10,h=Math.sqrt(a*o/(e.length+1)),l=t.gravity,d=t.speed,p=new Map();t.groupMap=p,e.forEach(function(t){if(void 0===p.get(t.groupId)){var e,r;n.forEach(function(n){n.id===t.groupId&&(e=n.parentId,r=n);});var i={name:t.groupId,cx:0,cy:0,count:0,parentId:e,nodeIds:[],groupData:r};p.set(t.groupId,i);}var a=p.get(t.groupId);a.nodeIds.push(t.id),a.cx+=t.x,a.cy+=t.y,a.count++;}),p.forEach(function(t){t.cx/=t.count,t.cy/=t.count;}),t.DFSSetGroups();for(var g=function(n){var i=[];e.forEach(function(t,e){i[e]={x:0,y:0};}),t.getDisp(e,r,u,c,i,h);var a=t.groupGravity||l;e.forEach(function(e,n){var r=p.get(e.groupId),o=Math.sqrt((e.x-r.cx)*(e.x-r.cx)+(e.y-r.cy)*(e.y-r.cy)),s=t.groupAttractiveCoefficient*h*a;i[n].x-=s*(e.x-r.cx)/o,i[n].y-=s*(e.y-r.cy)/o;}),p.forEach(function(t){t.cx=0,t.cy=0,t.count=0;}),e.forEach(function(t){var e=p.get(t.groupId);e.cx+=t.x,e.cy+=t.y,e.count++;}),p.forEach(function(t){t.cx/=t.count,t.cy/=t.count;}),e.forEach(function(t,e){var n=.01*h*l;i[e].x-=n*(t.x-s[0]),i[e].y-=n*(t.y-s[1]);}),e.forEach(function(t,e){i[e].dx*=d/800,i[e].dy*=d/800;}),e.forEach(function(t,e){var n=Math.sqrt(i[e].x*i[e].x+i[e].y*i[e].y);if(n>0){var r=Math.min(f*(d/800),n);t.x+=i[e].x/n*r,t.y+=i[e].y/n*r;}});},v=0;v<i;v++)g();},getDisp:function(t,e,n,r,i,a){this.calRepulsive(t,i,a),this.calAttractive(e,n,r,i,a),this.calGroupRepulsive(i,a);},calRepulsive:function(t,e,n){var r=this;t.forEach(function(i,a){e[a]={x:0,y:0},t.forEach(function(t,o){if(a!==o){var s=i.x-t.x,u=i.y-t.y,c=s*s+u*u;0===c&&(c=1);var f=r.nodeRepulsiveCoefficient*(n*n)/c;e[a].x+=s*f,e[a].y+=u*f;}});});},calAttractive:function(t,e,n,r,i){var a=this;t.forEach(function(t){var o=n.get(t.source),s=n.get(t.target);if(o!==s){var u=e.get(t.source),c=e.get(t.target),f=c.x-u.x,h=c.y-u.y,l=Math.sqrt(f*f+h*h),d=a.nodeAttractiveCoefficient*l*l/i;r[s].x-=f/l*d,r[s].y-=h/l*d,r[o].x+=f/l*d,r[o].y+=h/l*d;}});},calGroupRepulsive:function(t,e){var n=this,r=n.groupMap,i=n.nodeIndexMap;r.forEach(function(a,o){var s={x:0,y:0};r.forEach(function(t,r){if(o!==r){var i=a.cx-t.cx,u=a.cy-t.cy,c=i*i+u*u;0===c&&(c=1);var f=n.groupRepulsiveCoefficient*(e*e)/c;s.x+=i*f,s.y+=u*f;}}),a.nodeIds.forEach(function(e){var n=i.get(e);t[n].x+=s.x,t[n].y+=s.y;});});},DFSSetGroups:function(){var t=this,e=t.groupMap;e.forEach(function(n){var r=n.parentId;if(r){var i;t.groupsData.forEach(function(t){t.id===n.groupId&&(i=t.parentId);});var a=e.get(r);if(a)n.nodeIds.forEach(function(t){a.nodeIds.push(t);});else{var o={name:r,cx:0,cy:0,count:0,parentId:i,nodeIds:n.nodeIds};e.set(r,o);}}});},BFSDivide:function(t,e,n){var i=this,a=r.forceManyBody();a.strength(30);var o=r.forceSimulation().nodes(n).force("center",r.forceCenter(t/2,e/2)).force("charge",a).alpha(.3).alphaDecay(.01).alphaMin(.001).on("tick",function(){n.forEach(function(t){t.nodes.forEach(function(e){e.x+=t.x-t.ox,e.y+=t.y-t.oy;}),t.ox=t.x,t.oy=t.y,t.item.get("children")[0].attr({x:t.x,y:t.y});}),i.graph.refreshPositions();}).on("end",function(){});i.groupOverlapProcess(o);},groupOverlapProcess:function(t){var e=this.nodeSize,n=this.groupCollideStrength;if(e){if(isNaN(e)){if(2===e.length){e=(e[0]>e[1]?e[0]:e[1])/2;}}else e/=2;}else e=function(t){return t.size?a(t.size)?t.size[0]/2:t.size/2:10;};t.force("collisionForce",r.forceCollide(e).strength(n));}});},function(t,e,n){var r=n(24),i=n(17);r.registerLayout("grid",{getDefaultCfg:function(){return {begin:[0,0],preventOverlap:!0,preventOverlapPadding:10,condense:!1,rows:void 0,cols:void 0,position:function(){},sortBy:"degree",nodeSize:30};},execute:function(){var t=this,e=t.nodes,n=e.length,r=t.center;if(0!==n){if(1===n)return e[0].x=r[0],void(e[0].y=r[1]);var a=t.edges,o=[];e.forEach(function(t){o.push(t);});var s=new Map();if(o.forEach(function(t,e){s.set(t.id,e);}),("degree"===t.sortBy||!i(t.sortBy)||void 0===o[0][t.sortBy])&&(t.sortBy="degree",isNaN(e[0].degree))){var u=function(t,e,n){for(var r=[],i=0;i<t;i++)r[i]=0;return n.forEach(function(t){r[e.get(t.source)]+=1,r[e.get(t.target)]+=1;}),r;}(o.length,s,a);o.forEach(function(t,e){t.degree=u[e];});}o.sort(function(e,n){return n[t.sortBy]-e[t.sortBy];}),t.width=t.width||window.innerHeight,t.height=t.height||window.innerWidth,t.cells=n,t.splits=Math.sqrt(t.cells*t.height/t.width),t.rows=Math.round(t.splits),t.cols=Math.round(t.width/t.height*t.splits);var c=t.rows,f=null!=t.cols?t.cols:t.columns;if(null!=c&&null!=f)t.rows=c,t.cols=f;else if(null!=c&&null==f)t.rows=c,t.cols=Math.ceil(t.cells/t.rows);else if(null==c&&null!=f)t.cols=f,t.rows=Math.ceil(t.cells/t.cols);else if(t.cols*t.rows>t.cells){var h=t.small(),l=t.large();(h-1)*l>=t.cells?t.small(h-1):(l-1)*h>=t.cells&&t.large(l-1);}else for(;t.cols*t.rows<t.cells;){var d=t.small(),p=t.large();(p+1)*d>=t.cells?t.large(p+1):t.small(d+1);}t.cellWidth=t.width/t.cols,t.cellHeight=t.height/t.rows,t.condense&&(t.cellWidth=0,t.cellHeight=0),t.preventOverlap&&o.forEach(function(e){var n,r;null!=e.x&&null!=e.y||(e.x=0,e.y=0),isNaN(e.size)?(n=e.size[0],r=e.size[1]):(n=e.size,r=e.size),(isNaN(n)||isNaN(r))&&(isNaN(t.nodeSize)?(n=t.nodeSize[0],r=t.nodeSize[1]):(n=t.nodeSize,r=t.nodeSize));var i=t.preventOverlapPadding,a=n+i,o=r+i;t.cellWidth=Math.max(t.cellWidth,a),t.cellHeight=Math.max(t.cellHeight,o);}),t.cellUsed={},t.row=0,t.col=0,t.id2manPos={};for(var g=0;g<o.length;g++){var v=o[g],m=t.position(v);if(m&&(void 0!==m.row||void 0!==m.col)){var y={row:m.row,col:m.col};if(void 0===y.col)for(y.col=0;t.used(y.row,y.col);)y.col++;else if(void 0===y.row)for(y.row=0;t.used(y.row,y.col);)y.row++;t.id2manPos[v.id]=y,t.use(y.row,y.col);}t.getPos(v);}}},small:function(t){var e;null==t?e=Math.min(this.rows,this.cols):Math.min(this.rows,this.cols)===this.rows?this.rows=t:this.cols=t;return e;},large:function(t){var e;null==t?e=Math.max(this.rows,this.cols):Math.max(this.rows,this.cols)===this.rows?this.rows=t:this.cols=t;return e;},used:function(t,e){return this.cellUsed["c-"+t+"-"+e]||!1;},use:function(t,e){this.cellUsed["c-"+t+"-"+e]=!0;},moveToNextCell:function(){this.col++,this.col>=this.cols&&(this.col=0,this.row++);},getPos:function(t){var e,n,r=this.begin,i=this.cellWidth,a=this.cellHeight,o=this.id2manPos[t.id];if(o)e=o.col*i+i/2+r[0],n=o.row*a+a/2+r[1];else{for(;this.used(this.row,this.col);)this.moveToNextCell();e=this.col*i+i/2+r[0],n=this.row*a+a/2+r[1],this.use(this.row,this.col),this.moveToNextCell();}t.x=e,t.y=n;}});},function(t,e,n){var r=n(24),i=n(17);r.registerLayout("concentric",{getDefaultCfg:function(){return {center:[0,0],nodeSize:30,minNodeSpacing:10,preventOverlap:!1,sweep:void 0,equidistant:!1,startAngle:1.5*Math.PI,clockwise:!0,maxLevelDiff:void 0,sortBy:"degree"};},execute:function(){var t=this,e=t.nodes,n=t.edges,r=e.length,a=t.center;if(0!==r){if(1===r)return e[0].x=a[0],void(e[0].y=a[1]);var o,s=[];o=isNaN(t.nodeSize)?Math.max(t.nodeSize[0],t.nodeSize[1]):t.nodeSize,e.forEach(function(t){var e;s.push(t),e=isNaN(t.size)?Math.max(t.size[0],t.size[1]):t.size,o=Math.max(o,e);}),t.width=t.width||window.innerHeight,t.height=t.height||window.innerWidth,t.clockwise=void 0!==t.counterclockwise?!t.counterclockwise:t.clockwise;var u=new Map(),c=new Map();if(s.forEach(function(t,e){u.set(t.id,t),c.set(t.id,e);}),t.nodeMap=u,("degree"===t.sortBy||!i(t.sortBy)||void 0===s[0][t.sortBy])&&(t.sortBy="degree",isNaN(e[0].degree))){var f=function(t,e,n){for(var r=[],i=0;i<t;i++)r[i]=0;return n.forEach(function(t){r[e.get(t.source)]+=1,r[e.get(t.target)]+=1;}),r;}(e.length,c,n);s.forEach(function(t,e){t.degree=f[e];});}s.sort(function(e,n){return n[t.sortBy]-e[t.sortBy];}),t.maxValueNode=s[0],t.maxLevelDiff=t.maxLevelDiff||t.maxValueNode[t.sortBy]/4;var h=[[]],l=h[0];s.forEach(function(e){l.length>0&&Math.abs(l[0][t.sortBy]-e[t.sortBy])>=t.maxLevelDiff&&(l=[],h.push(l));l.push(e);});var d=o+t.minNodeSpacing;if(!t.preventOverlap){var p=h.length>0&&h[0].length>1,g=(Math.min(t.width,t.height)/2-d)/(h.length+p?1:0);d=Math.min(d,g);}var v=0;if(h.forEach(function(e){var n=void 0===t.sweep?2*Math.PI-2*Math.PI/e.length:t.sweep,r=e.dTheta=n/Math.max(1,e.length-1);if(e.length>1&&t.preventOverlap){var i=Math.cos(r)-Math.cos(0),a=Math.sin(r)-Math.sin(0),o=Math.sqrt(d*d/(i*i+a*a));v=Math.max(o,v);}e.r=v,v+=d;}),t.equidistant){for(var m=0,y=0,x=0;x<h.length;x++){var b=h[x].r-y;m=Math.max(m,b);}y=0,h.forEach(function(t,e){0===e&&(y=t.r),t.r=y,y+=m;});}h.forEach(function(e){var n=e.dTheta,r=e.r;e.forEach(function(e,i){var o=t.startAngle+(t.clockwise?1:-1)*n*i;e.x=a[0]+r*Math.cos(o),e.y=a[1]+r*Math.sin(o);});});}}});},function(t,e){t.exports="0.8.4";},function(t,e,n){var r=n(5),i=n(13),a=n(23).Graph;t.exports={debugOrdering:function(t){var e=i.buildLayerMatrix(t),n=new a({compound:!0,multigraph:!0}).setGraph({});return r.forEach(t.nodes(),function(e){n.setNode(e,{label:e}),n.setParent(e,"layer"+t.node(e).rank);}),r.forEach(t.edges(),function(t){n.setEdge(t.v,t.w,{},t.name);}),r.forEach(e,function(t,e){var i="layer"+e;n.setNode(i,{rank:"same"}),r.reduce(t,function(t,e){return n.setEdge(t,e,{style:"invis"}),e;});}),n;}};},function(t,e,n){var r=n(5),i=n(23).Graph,a=n(13);function o(t,e){var n={};return r.reduce(e,function(e,i){var a=0,o=0,s=e.length,c=r.last(i);return r.forEach(i,function(e,f){var h=function(t,e){if(t.node(e).dummy)return r.find(t.predecessors(e),function(e){return t.node(e).dummy;});}(t,e),l=h?t.node(h).order:s;(h||e===c)&&(r.forEach(i.slice(o,f+1),function(e){r.forEach(t.predecessors(e),function(r){var i=t.node(r),o=i.order;!(o<a||l<o)||i.dummy&&t.node(e).dummy||u(n,r,e);});}),o=f+1,a=l);}),i;}),n;}function s(t,e){var n={};function i(e,i,a,o,s){var c;r.forEach(r.range(i,a),function(i){c=e[i],t.node(c).dummy&&r.forEach(t.predecessors(c),function(e){var r=t.node(e);r.dummy&&(r.order<o||r.order>s)&&u(n,e,c);});});}return r.reduce(e,function(e,n){var a,o=-1,s=0;return r.forEach(n,function(r,u){if("border"===t.node(r).dummy){var c=t.predecessors(r);c.length&&(a=t.node(c[0]).order,i(n,s,u,o,a),s=u,o=a);}i(n,s,n.length,a,e.length);}),n;}),n;}function u(t,e,n){if(e>n){var r=e;e=n,n=r;}var i=t[e];i||(t[e]=i={}),i[n]=!0;}function c(t,e,n){if(e>n){var i=e;e=n,n=i;}return r.has(t[e],n);}function f(t,e,n,i){var a={},o={},s={};return r.forEach(e,function(t){r.forEach(t,function(t,e){a[t]=t,o[t]=t,s[t]=e;});}),r.forEach(e,function(t){var e=-1;r.forEach(t,function(t){var u=i(t);if(u.length)for(var f=((u=r.sortBy(u,function(t){return s[t];})).length-1)/2,h=Math.floor(f),l=Math.ceil(f);h<=l;++h){var d=u[h];o[t]===t&&e<s[d]&&!c(n,t,d)&&(o[d]=t,o[t]=a[t]=a[d],e=s[d]);}});}),{root:a,align:o};}function h(t,e,n,a,o){var s={},u=function(t,e,n,a){var o=new i(),s=t.graph(),u=function(t,e,n){return function(i,a,o){var s,u=i.node(a),c=i.node(o),f=0;if(f+=u.width/2,r.has(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":s=-u.width/2;break;case"r":s=u.width/2;}if(s&&(f+=n?s:-s),s=0,f+=(u.dummy?e:t)/2,f+=(c.dummy?e:t)/2,f+=c.width/2,r.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":s=c.width/2;break;case"r":s=-c.width/2;}return s&&(f+=n?s:-s),s=0,f;};}(s.nodesep,s.edgesep,a);return r.forEach(e,function(e){var i;r.forEach(e,function(e){var r=n[e];if(o.setNode(r),i){var a=n[i],s=o.edge(a,r);o.setEdge(a,r,Math.max(u(t,e,i),s||0));}i=e;});}),o;}(t,e,n,o),c=o?"borderLeft":"borderRight";function f(t,e){for(var n=u.nodes(),r=n.pop(),i={};r;)i[r]?t(r):(i[r]=!0,n.push(r),n=n.concat(e(r))),r=n.pop();}return f(function(t){s[t]=u.inEdges(t).reduce(function(t,e){return Math.max(t,s[e.v]+u.edge(e));},0);},u.predecessors.bind(u)),f(function(e){var n=u.outEdges(e).reduce(function(t,e){return Math.min(t,s[e.w]-u.edge(e));},Number.POSITIVE_INFINITY),r=t.node(e);n!==Number.POSITIVE_INFINITY&&r.borderType!==c&&(s[e]=Math.max(s[e],n));},u.successors.bind(u)),r.forEach(a,function(t){s[t]=s[n[t]];}),s;}function l(t,e){return r.minBy(r.values(e),function(e){var n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;return r.forIn(e,function(e,r){var a=function(t,e){return t.node(e).width;}(t,r)/2;n=Math.max(e+a,n),i=Math.min(e-a,i);}),n-i;});}function d(t,e){var n=r.values(e),i=r.min(n),a=r.max(n);r.forEach(["u","d"],function(n){r.forEach(["l","r"],function(o){var s,u=n+o,c=t[u];if(c!==e){var f=r.values(c);(s="l"===o?i-r.min(f):a-r.max(f))&&(t[u]=r.mapValues(c,function(t){return t+s;}));}});});}function p(t,e){return r.mapValues(t.ul,function(n,i){if(e)return t[e.toLowerCase()][i];var a=r.sortBy(r.map(t,i));return (a[1]+a[2])/2;});}t.exports={positionX:function(t){var e,n=a.buildLayerMatrix(t),i=r.merge(o(t,n),s(t,n)),u={};r.forEach(["u","d"],function(a){e="u"===a?n:r.values(n).reverse(),r.forEach(["l","r"],function(n){"r"===n&&(e=r.map(e,function(t){return r.values(t).reverse();}));var o=("u"===a?t.predecessors:t.successors).bind(t),s=f(t,e,i,o),c=h(t,e,s.root,s.align,"r"===n);"r"===n&&(c=r.mapValues(c,function(t){return -t;})),u[a+n]=c;});});var c=l(t,u);return d(u,c),p(u,t.graph().align);},findType1Conflicts:o,findType2Conflicts:s,addConflict:u,hasConflict:c,verticalAlignment:f,horizontalCompaction:h,alignCoordinates:d,findSmallestWidthAlignment:l,balance:p};},function(t,e,n){var r=n(5),i=n(13),a=n(232).positionX;t.exports=function(t){(function(t){var e=i.buildLayerMatrix(t),n=t.graph().ranksep,a=0;r.forEach(e,function(e){var i=r.max(r.map(e,function(e){return t.node(e).height;}));r.forEach(e,function(e){t.node(e).y=a+i/2;}),a+=i+n;});})(t=i.asNonCompoundGraph(t)),r.forEach(a(t),function(e,n){t.node(n).x=e;});};},function(t,e,n){var r=n(5);t.exports=function(t,e,n){var i,a={};r.forEach(n,function(n){for(var r,o,s=t.parent(n);s;){if((r=t.parent(s))?(o=a[r],a[r]=s):(o=i,i=s),o&&o!==s)return void e.setEdge(o,s);s=r;}});};},function(t,e,n){var r=n(5),i=n(23).Graph;t.exports=function(t,e,n){var a=function(t){var e;for(;t.hasNode(e=r.uniqueId("_root")););return e;}(t),o=new i({compound:!0}).setGraph({root:a}).setDefaultNodeLabel(function(e){return t.node(e);});return r.forEach(t.nodes(),function(i){var s=t.node(i),u=t.parent(i);(s.rank===e||s.minRank<=e&&e<=s.maxRank)&&(o.setNode(i),o.setParent(i,u||a),r.forEach(t[n](i),function(e){var n=e.v===i?e.w:e.v,a=o.edge(n,i),s=r.isUndefined(a)?0:a.weight;o.setEdge(n,i,{weight:t.edge(e).weight+s});}),r.has(s,"minRank")&&o.setNode(i,{borderLeft:s.borderLeft[e],borderRight:s.borderRight[e]}));}),o;};},function(t,e,n){var r=n(5),i=n(13);function a(t,e,n){for(var i;e.length&&(i=r.last(e)).i<=n;)e.pop(),t.push(i.vs),n++;return n;}t.exports=function(t,e){var n=i.partition(t,function(t){return r.has(t,"barycenter");}),o=n.lhs,s=r.sortBy(n.rhs,function(t){return -t.i;}),u=[],c=0,f=0,h=0;o.sort(function(t){return function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:t?n.i-e.i:e.i-n.i;};}(!!e)),h=a(u,s,h),r.forEach(o,function(t){h+=t.vs.length,u.push(t.vs),c+=t.barycenter*t.weight,f+=t.weight,h=a(u,s,h);});var l={vs:r.flatten(u,!0)};f&&(l.barycenter=c/f,l.weight=f);return l;};},function(t,e,n){var r=n(5);t.exports=function(t,e){var n={};return r.forEach(t,function(t,e){var i=n[t.v]={indegree:0,in:[],out:[],vs:[t.v],i:e};r.isUndefined(t.barycenter)||(i.barycenter=t.barycenter,i.weight=t.weight);}),r.forEach(e.edges(),function(t){var e=n[t.v],i=n[t.w];r.isUndefined(e)||r.isUndefined(i)||(i.indegree++,e.out.push(n[t.w]));}),function(t){var e=[];function n(t){return function(e){e.merged||(r.isUndefined(e.barycenter)||r.isUndefined(t.barycenter)||e.barycenter>=t.barycenter)&&function(t,e){var n=0,r=0;t.weight&&(n+=t.barycenter*t.weight,r+=t.weight),e.weight&&(n+=e.barycenter*e.weight,r+=e.weight),t.vs=e.vs.concat(t.vs),t.barycenter=n/r,t.weight=r,t.i=Math.min(e.i,t.i),e.merged=!0;}(t,e);};}function i(e){return function(n){n.in.push(e),0==--n.indegree&&t.push(n);};}for(;t.length;){var a=t.pop();e.push(a),r.forEach(a.in.reverse(),n(a)),r.forEach(a.out,i(a));}return r.map(r.filter(e,function(t){return !t.merged;}),function(t){return r.pick(t,["vs","i","barycenter","weight"]);});}(r.filter(n,function(t){return !t.indegree;}));};},function(t,e,n){var r=n(5);t.exports=function(t,e){return r.map(e,function(e){var n=t.inEdges(e);if(n.length){var i=r.reduce(n,function(e,n){var r=t.edge(n),i=t.node(n.v);return {sum:e.sum+r.weight*i.order,weight:e.weight+r.weight};},{sum:0,weight:0});return {v:e,barycenter:i.sum/i.weight,weight:i.weight};}return {v:e};});};},function(t,e,n){var r=n(5),i=n(238),a=n(237),o=n(236);t.exports=function t(e,n,s,u){var c=e.children(n),f=e.node(n),h=f?f.borderLeft:void 0,l=f?f.borderRight:void 0,d={};h&&(c=r.filter(c,function(t){return t!==h&&t!==l;}));var p=i(e,c);r.forEach(p,function(n){if(e.children(n.v).length){var i=t(e,n.v,s,u);d[n.v]=i,r.has(i,"barycenter")&&function(t,e){r.isUndefined(t.barycenter)?(t.barycenter=e.barycenter,t.weight=e.weight):(t.barycenter=(t.barycenter*t.weight+e.barycenter*e.weight)/(t.weight+e.weight),t.weight+=e.weight);}(n,i);}});var g=a(p,s);!function(t,e){r.forEach(t,function(t){t.vs=r.flatten(t.vs.map(function(t){return e[t]?e[t].vs:t;}),!0);});}(g,d);var v=o(g,u);if(h&&(v.vs=r.flatten([h,v.vs,l],!0),e.predecessors(h).length)){var m=e.node(e.predecessors(h)[0]),y=e.node(e.predecessors(l)[0]);r.has(v,"barycenter")||(v.barycenter=0,v.weight=0),v.barycenter=(v.barycenter*v.weight+m.order+y.order)/(v.weight+2),v.weight+=2;}return v;};},function(t,e,n){var r=n(5);function i(t,e,n){for(var i=r.zipObject(n,r.map(n,function(t,e){return e;})),a=r.flatten(r.map(e,function(e){return r.sortBy(r.map(t.outEdges(e),function(e){return {pos:i[e.w],weight:t.edge(e).weight};}),"pos");}),!0),o=1;o<n.length;)o<<=1;var s=2*o-1;o-=1;var u=r.map(new Array(s),function(){return 0;}),c=0;return r.forEach(a.forEach(function(t){var e=t.pos+o;u[e]+=t.weight;for(var n=0;e>0;)e%2&&(n+=u[e+1]),u[e=e-1>>1]+=t.weight;c+=t.weight*n;})),c;}t.exports=function(t,e){for(var n=0,r=1;r<e.length;++r)n+=i(t,e[r-1],e[r]);return n;};},function(t,e,n){var r=n(5);t.exports=function(t){var e={},n=r.filter(t.nodes(),function(e){return !t.children(e).length;}),i=r.max(r.map(n,function(e){return t.node(e).rank;})),a=r.map(r.range(i+1),function(){return [];});var o=r.sortBy(n,function(e){return t.node(e).rank;});return r.forEach(o,function n(i){if(!r.has(e,i)){e[i]=!0;var o=t.node(i);a[o.rank].push(i),r.forEach(t.successors(i),n);}}),a;};},function(t,e,n){var r=n(5),i=n(241),a=n(240),o=n(239),s=n(235),u=n(234),c=n(23).Graph,f=n(13);function h(t,e,n){return r.map(e,function(e){return s(t,e,n);});}function l(t,e){var n=new c();r.forEach(t,function(t){var i=t.graph().root,a=o(t,i,n,e);r.forEach(a.vs,function(e,n){t.node(e).order=n;}),u(t,n,a.vs);});}function d(t,e){r.forEach(e,function(e){r.forEach(e,function(e,n){t.node(e).order=n;});});}t.exports=function(t){var e=f.maxRank(t),n=h(t,r.range(1,e+1),"inEdges"),o=h(t,r.range(e-1,-1,-1),"outEdges"),s=i(t);d(t,s);for(var u,c=Number.POSITIVE_INFINITY,p=0,g=0;g<4;++p,++g){l(p%2?n:o,p%4>=2),s=f.buildLayerMatrix(t);var v=a(t,s);v<c&&(g=0,u=r.cloneDeep(s),c=v);}d(t,u);};},function(t,e,n){var r=n(5);function i(t){r.forEach(t.nodes(),function(e){a(t.node(e));}),r.forEach(t.edges(),function(e){a(t.edge(e));});}function a(t){var e=t.width;t.width=t.height,t.height=e;}function o(t){t.y=-t.y;}function s(t){var e=t.x;t.x=t.y,t.y=e;}t.exports={adjust:function(t){var e=t.graph().rankdir.toLowerCase();"lr"!==e&&"rl"!==e||i(t);},undo:function(t){var e=t.graph().rankdir.toLowerCase();"bt"!==e&&"rl"!==e||function(t){r.forEach(t.nodes(),function(e){o(t.node(e));}),r.forEach(t.edges(),function(e){var n=t.edge(e);r.forEach(n.points,o),r.has(n,"y")&&o(n);});}(t);"lr"!==e&&"rl"!==e||(!function(t){r.forEach(t.nodes(),function(e){s(t.node(e));}),r.forEach(t.edges(),function(e){var n=t.edge(e);r.forEach(n.points,s),r.has(n,"x")&&s(n);});}(t),i(t));}};},function(t,e,n){var r=n(5),i=n(13);function a(t,e,n,r,a,o){var s={width:0,height:0,rank:o,borderType:e},u=a[e][o-1],c=i.addDummyNode(t,"border",s,n);a[e][o]=c,t.setParent(c,r),u&&t.setEdge(u,c,{weight:1});}t.exports=function(t){r.forEach(t.children(),function e(n){var i=t.children(n),o=t.node(n);i.length&&r.forEach(i,e);if(r.has(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var s=o.minRank,u=o.maxRank+1;s<u;++s)a(t,"borderLeft","_bl",n,o,s),a(t,"borderRight","_br",n,o,s);}});};},function(t,e,n){var r=n(5),i=n(13);t.exports={run:function(t){var e=i.addDummyNode(t,"root",{},"_root"),n=function(t){var e={};return r.forEach(t.children(),function(n){!function n(i,a){var o=t.children(i);o&&o.length&&r.forEach(o,function(t){n(t,a+1);}),e[i]=a;}(n,1);}),e;}(t),a=r.max(r.values(n))-1,o=2*a+1;t.graph().nestingRoot=e,r.forEach(t.edges(),function(e){t.edge(e).minlen*=o;});var s=function(t){return r.reduce(t.edges(),function(e,n){return e+t.edge(n).weight;},0);}(t)+1;r.forEach(t.children(),function(u){!function t(e,n,a,o,s,u,c){var f=e.children(c);if(!f.length)return void(c!==n&&e.setEdge(n,c,{weight:0,minlen:a}));var h=i.addBorderNode(e,"_bt"),l=i.addBorderNode(e,"_bb"),d=e.node(c);e.setParent(h,c);d.borderTop=h;e.setParent(l,c);d.borderBottom=l;r.forEach(f,function(r){t(e,n,a,o,s,u,r);var i=e.node(r),f=i.borderTop?i.borderTop:r,d=i.borderBottom?i.borderBottom:r,p=i.borderTop?o:2*o,g=f!==d?1:s-u[c]+1;e.setEdge(h,f,{weight:p,minlen:g,nestingEdge:!0}),e.setEdge(d,l,{weight:p,minlen:g,nestingEdge:!0});});e.parent(c)||e.setEdge(n,h,{weight:0,minlen:s+u[c]});}(t,e,o,s,a,n,u);}),t.graph().nodeRankFactor=o;},cleanup:function(t){var e=t.graph();t.removeNode(e.nestingRoot),delete e.nestingRoot,r.forEach(t.edges(),function(e){var n=t.edge(e);n.nestingEdge&&t.removeEdge(e);});}};},function(t,e,n){var r=n(5);t.exports=function(t){var e=function(t){var e={},n=0;return r.forEach(t.children(),function i(a){var o=n;r.forEach(t.children(a),i),e[a]={low:o,lim:n++};}),e;}(t);r.forEach(t.graph().dummyChains,function(n){for(var r=t.node(n),i=r.edgeObj,a=function(t,e,n,r){var i,a,o=[],s=[],u=Math.min(e[n].low,e[r].low),c=Math.max(e[n].lim,e[r].lim);i=n;do{i=t.parent(i),o.push(i);}while(i&&(e[i].low>u||c>e[i].lim));a=i,i=r;for(;(i=t.parent(i))!==a;)s.push(i);return {path:o.concat(s.reverse()),lca:a};}(t,e,i.v,i.w),o=a.path,s=a.lca,u=0,c=o[u],f=!0;n!==i.w;){if(r=t.node(n),f){for(;(c=o[u])!==s&&t.node(c).maxRank<r.rank;)u++;c===s&&(f=!1);}if(!f){for(;u<o.length-1&&t.node(c=o[u+1]).minRank<=r.rank;)u++;c=o[u];}t.setParent(n,c),n=t.successors(n)[0];}});};},function(t,e,n){var r=n(5),i=n(115),a=n(52).slack,o=n(52).longestPath,s=n(23).alg.preorder,u=n(23).alg.postorder,c=n(13).simplify;function f(t){t=c(t),o(t);var e,n=i(t);for(d(n),h(n,t);e=p(n);)v(n,t,e,g(n,t,e));}function h(t,e){var n=u(t,t.nodes());n=n.slice(0,n.length-1),r.forEach(n,function(n){!function(t,e,n){var r=t.node(n).parent;t.edge(n,r).cutvalue=l(t,e,n);}(t,e,n);});}function l(t,e,n){var i=t.node(n).parent,a=!0,o=e.edge(n,i),s=0;return o||(a=!1,o=e.edge(i,n)),s=o.weight,r.forEach(e.nodeEdges(n),function(r){var o=r.v===n,u=o?r.w:r.v;if(u!==i){var c=o===a,f=e.edge(r).weight;if(s+=c?f:-f,function(t,e,n){return t.hasEdge(e,n);}(t,n,u)){var h=t.edge(n,u).cutvalue;s+=c?-h:h;}}}),s;}function d(t,e){arguments.length<2&&(e=t.nodes()[0]),function t(e,n,i,a,o){var s=i,u=e.node(a);n[a]=!0;r.forEach(e.neighbors(a),function(o){r.has(n,o)||(i=t(e,n,i,o,a));});u.low=s;u.lim=i++;o?u.parent=o:delete u.parent;return i;}(t,{},1,e);}function p(t){return r.find(t.edges(),function(e){return t.edge(e).cutvalue<0;});}function g(t,e,n){var i=n.v,o=n.w;e.hasEdge(i,o)||(i=n.w,o=n.v);var s=t.node(i),u=t.node(o),c=s,f=!1;s.lim>u.lim&&(c=u,f=!0);var h=r.filter(e.edges(),function(e){return f===m(t,t.node(e.v),c)&&f!==m(t,t.node(e.w),c);});return r.minBy(h,function(t){return a(e,t);});}function v(t,e,n,i){var a=n.v,o=n.w;t.removeEdge(a,o),t.setEdge(i.v,i.w,{}),d(t),h(t,e),function(t,e){var n=r.find(t.nodes(),function(t){return !e.node(t).parent;}),i=s(t,n);i=i.slice(1),r.forEach(i,function(n){var r=t.node(n).parent,i=e.edge(n,r),a=!1;i||(i=e.edge(r,n),a=!0),e.node(n).rank=e.node(r).rank+(a?i.minlen:-i.minlen);});}(t,e);}function m(t,e,n){return n.low<=e.lim&&e.lim<=n.lim;}t.exports=f,f.initLowLimValues=d,f.initCutValues=h,f.calcCutValue=l,f.leaveEdge=p,f.enterEdge=g,f.exchangeEdges=v;},function(t,e,n){var r=n(52).longestPath,i=n(115),a=n(247);t.exports=function(t){switch(t.graph().ranker){case"network-simplex":s(t);break;case"tight-tree":!function(t){r(t),i(t);}(t);break;case"longest-path":o(t);break;default:s(t);}};var o=r;function s(t){a(t);}},function(t,e,n){var r=n(5),i=n(13);t.exports={run:function(t){t.graph().dummyChains=[],r.forEach(t.edges(),function(e){!function(t,e){var n,r,a,o=e.v,s=t.node(o).rank,u=e.w,c=t.node(u).rank,f=e.name,h=t.edge(e),l=h.labelRank;if(c===s+1)return;for(t.removeEdge(e),a=0,++s;s<c;++a,++s)h.points=[],r={width:0,height:0,edgeLabel:h,edgeObj:e,rank:s},n=i.addDummyNode(t,"edge",r,"_d"),s===l&&(r.width=h.width,r.height=h.height,r.dummy="edge-label",r.labelpos=h.labelpos),t.setEdge(o,n,{weight:h.weight},f),0===a&&t.graph().dummyChains.push(n),o=n;t.setEdge(o,u,{weight:h.weight},f);}(t,e);});},undo:function(t){r.forEach(t.graph().dummyChains,function(e){var n,r=t.node(e),i=r.edgeLabel;for(t.setEdge(r.edgeObj,i);r.dummy;)n=t.successors(e)[0],t.removeNode(e),i.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height),e=n,r=t.node(e);});}};},function(t,e){function n(){var t={};t._next=t._prev=t,this._sentinel=t;}function r(t){t._prev._next=t._next,t._next._prev=t._prev,delete t._next,delete t._prev;}function i(t,e){if("_next"!==t&&"_prev"!==t)return e;}t.exports=n,n.prototype.dequeue=function(){var t=this._sentinel,e=t._prev;if(e!==t)return r(e),e;},n.prototype.enqueue=function(t){var e=this._sentinel;t._prev&&t._next&&r(t),t._next=e._next,e._next._prev=t,e._next=t,t._prev=e;},n.prototype.toString=function(){for(var t=[],e=this._sentinel,n=e._prev;n!==e;)t.push(JSON.stringify(n,i)),n=n._prev;return "["+t.join(", ")+"]";};},function(t,e,n){var r=n(5),i=n(23).Graph,a=n(250);t.exports=function(t,e){if(t.nodeCount()<=1)return [];var n=function(t,e){var n=new i(),o=0,s=0;r.forEach(t.nodes(),function(t){n.setNode(t,{v:t,in:0,out:0});}),r.forEach(t.edges(),function(t){var r=n.edge(t.v,t.w)||0,i=e(t),a=r+i;n.setEdge(t.v,t.w,a),s=Math.max(s,n.node(t.v).out+=i),o=Math.max(o,n.node(t.w).in+=i);});var c=r.range(s+o+3).map(function(){return new a();}),f=o+1;return r.forEach(n.nodes(),function(t){u(c,f,n.node(t));}),{graph:n,buckets:c,zeroIdx:f};}(t,e||o),c=function(t,e,n){var r,i=[],a=e[e.length-1],o=e[0];for(;t.nodeCount();){for(;r=o.dequeue();)s(t,e,n,r);for(;r=a.dequeue();)s(t,e,n,r);if(t.nodeCount())for(var u=e.length-2;u>0;--u)if(r=e[u].dequeue()){i=i.concat(s(t,e,n,r,!0));break;}}return i;}(n.graph,n.buckets,n.zeroIdx);return r.flatten(r.map(c,function(e){return t.outEdges(e.v,e.w);}),!0);};var o=r.constant(1);function s(t,e,n,i,a){var o=a?[]:void 0;return r.forEach(t.inEdges(i.v),function(r){var i=t.edge(r),s=t.node(r.v);a&&o.push({v:r.v,w:r.w}),s.out-=i,u(e,n,s);}),r.forEach(t.outEdges(i.v),function(r){var i=t.edge(r),a=r.w,o=t.node(a);o.in-=i,u(e,n,o);}),t.removeNode(i.v),o;}function u(t,e,n){n.out?n.in?t[n.out-n.in+e].enqueue(n):t[t.length-1].enqueue(n):t[0].enqueue(n);}},function(t,e,n){var r=n(5),i=n(251);t.exports={run:function(t){var e="greedy"===t.graph().acyclicer?i(t,function(t){return function(e){return t.edge(e).weight;};}(t)):function(t){var e=[],n={},i={};return r.forEach(t.nodes(),function a(o){r.has(i,o)||(i[o]=!0,n[o]=!0,r.forEach(t.outEdges(o),function(t){r.has(n,t.w)?e.push(t):a(t.w);}),delete n[o]);}),e;}(t);r.forEach(e,function(e){var n=t.edge(e);t.removeEdge(e),n.forwardName=e.name,n.reversed=!0,t.setEdge(e.w,e.v,n,r.uniqueId("rev"));});},undo:function(t){r.forEach(t.edges(),function(e){var n=t.edge(e);if(n.reversed){t.removeEdge(e);var r=n.forwardName;delete n.reversed,delete n.forwardName,t.setEdge(e.w,e.v,n,r);}});}};},function(t,e){t.exports=function(t,e,n){for(var r=-1,i=t.length,a=e.length,o={};++r<i;){var s=r<a?e[r]:void 0;n(o,t[r],s);}return o;};},function(t,e,n){var r=n(63),i=n(253);t.exports=function(t,e){return i(t||[],e||[],r);};},function(t,e,n){var r=n(139),i=0;t.exports=function(t){var e=++i;return r(t)+e;};},function(t,e,n){var r=n(33);t.exports=function(t,e){if(t!==e){var n=void 0!==t,i=null===t,a=t==t,o=r(t),s=void 0!==e,u=null===e,c=e==e,f=r(e);if(!u&&!f&&!o&&t>e||o&&s&&c&&!u&&!f||i&&s&&c||!n&&c||!a)return 1;if(!i&&!o&&!f&&t<e||f&&n&&a&&!i&&!o||u&&n&&a||!s&&a||!c)return -1;}return 0;};},function(t,e,n){var r=n(256);t.exports=function(t,e,n){for(var i=-1,a=t.criteria,o=e.criteria,s=a.length,u=n.length;++i<s;){var c=r(a[i],o[i]);if(c)return i>=u?c:c*("desc"==n[i]?-1:1);}return t.index-e.index;};},function(t,e){t.exports=function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t;};},function(t,e,n){var r=n(55),i=n(27),a=n(132),o=n(258),s=n(60),u=n(257),c=n(30);t.exports=function(t,e,n){var f=-1;e=r(e.length?e:[c],s(i));var h=a(t,function(t,n,i){return {criteria:r(e,function(e){return e(t);}),index:++f,value:t};});return o(h,function(t,e){return u(t,e,n);});};},function(t,e,n){var r=n(81),i=n(259),a=n(54),o=n(53),s=a(function(t,e){if(null==t)return [];var n=e.length;return n>1&&o(t,e[0],e[1])?e=[]:n>2&&o(e[0],e[1],e[2])&&(e=[e[0]]),i(t,r(e,1),[]);});t.exports=s;},function(t,e){var n=Math.ceil,r=Math.max;t.exports=function(t,e,i,a){for(var o=-1,s=r(n((e-t)/(i||1)),0),u=Array(s);s--;)u[a?s:++o]=t,t+=i;return u;};},function(t,e,n){var r=n(261),i=n(53),a=n(120);t.exports=function(t){return function(e,n,o){return o&&"number"!=typeof o&&i(e,n,o)&&(n=o=void 0),e=a(e),void 0===n?(n=e,e=0):n=a(n),o=void 0===o?e<n?1:-1:a(o),r(e,n,o,t);};};},function(t,e,n){var r=n(262)();t.exports=r;},function(t,e,n){var r=n(119),i=n(130),a=n(129);t.exports=function(t){return a(i(t,void 0,r),t+"");};},function(t,e,n){var r=n(63),i=n(56),a=n(61),o=n(18),s=n(44);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,f=(e=i(e,t)).length,h=f-1,l=t;null!=l&&++c<f;){var d=s(e[c]),p=n;if(c!=h){var g=l[d];void 0===(p=u?u(g,d,l):void 0)&&(p=o(g)?g:a(e[c+1])?[]:{});}r(l,d,p),l=l[d];}return t;};},function(t,e,n){var r=n(83),i=n(265),a=n(56);t.exports=function(t,e,n){for(var o=-1,s=e.length,u={};++o<s;){var c=e[o],f=r(t,c);n(f,c)&&i(u,a(c,t),f);}return u;};},function(t,e,n){var r=n(266),i=n(138);t.exports=function(t,e){return r(t,e,function(e,n){return i(t,n);});};},function(t,e,n){var r=n(267),i=n(264)(function(t,e){return null==t?{}:r(t,e);});t.exports=i;},function(t,e,n){var r=n(22);t.exports=function(){return r.Date.now();};},function(t,e,n){var r=n(80),i=n(27),a=n(116);t.exports=function(t,e){return t&&t.length?r(t,i(e,2),a):void 0;};},function(t,e,n){var r=n(80),i=n(116),a=n(30);t.exports=function(t){return t&&t.length?r(t,a,i):void 0;};},function(t,e,n){var r=n(54),i=n(53);t.exports=function(t){return r(function(e,n){var r=-1,a=n.length,o=a>1?n[a-1]:void 0,s=a>2?n[2]:void 0;for(o=t.length>3&&"function"==typeof o?(a--,o):void 0,s&&i(n[0],n[1],s)&&(o=a<3?void 0:o,a=1),e=Object(e);++r<a;){var u=n[r];u&&t(e,u,r,o);}return e;});};},function(t,e,n){var r=n(47),i=n(35);t.exports=function(t){return r(t,i(t));};},function(t,e,n){var r=n(31),i=n(58),a=n(25),o="[object Object]",s=Function.prototype,u=Object.prototype,c=s.toString,f=u.hasOwnProperty,h=c.call(Object);t.exports=function(t){if(!a(t)||r(t)!=o)return !1;var e=i(t);if(null===e)return !0;var n=f.call(e,"constructor")&&e.constructor;return "function"==typeof n&&n instanceof n&&c.call(n)==h;};},function(t,e,n){var r=n(118),i=n(161),a=n(152),o=n(160),s=n(151),u=n(46),c=n(6),f=n(127),h=n(36),l=n(48),d=n(18),p=n(274),g=n(45),v=n(117),m=n(273);t.exports=function(t,e,n,y,x,b,w){var _=v(t,n),M=v(e,n),S=w.get(M);if(S)r(t,n,S);else{var P=b?b(_,M,n+"",t,e,w):void 0,A=void 0===P;if(A){var k=c(M),C=!k&&h(M),E=!k&&!C&&g(M);P=M,k||C||E?c(_)?P=_:f(_)?P=o(_):C?(A=!1,P=i(M,!0)):E?(A=!1,P=a(M,!0)):P=[]:p(M)||u(M)?(P=_,u(_)?P=m(_):d(_)&&!l(_)||(P=s(M))):A=!1;}A&&(w.set(M,P),x(P,M,y,b,w),w.delete(M)),r(t,n,P);}};},function(t,e,n){var r=n(68),i=n(118),a=n(85),o=n(275),s=n(18),u=n(35),c=n(117);t.exports=function t(e,n,f,h,l){e!==n&&a(n,function(a,u){if(l||(l=new r()),s(a))o(e,n,u,f,t,h,l);else{var d=h?h(c(e,u),a,u+"",e,n,l):void 0;void 0===d&&(d=a),i(e,u,d);}},u);};},function(t,e,n){var r=n(276),i=n(272)(function(t,e,n){r(t,e,n);});t.exports=i;},function(t,e){t.exports=function(t,e){return t>e;};},function(t,e,n){var r=n(80),i=n(278),a=n(30);t.exports=function(t){return t&&t.length?r(t,a,i):void 0;};},function(t,e,n){var r=n(62),i=n(86),a=n(27);t.exports=function(t,e){var n={};return e=a(e,3),i(t,function(t,i,a){r(n,i,e(t,i,a));}),n;};},function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0;};},function(t,e,n){var r=n(85),i=n(147),a=n(35);t.exports=function(t,e){return null==t?t:r(t,i(e),a);};},function(t,e,n){var r=n(18),i=n(33),a=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e;}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):s.test(t)?a:+t;};},function(t,e,n){var r=n(120);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0;};},function(t,e,n){var r=n(128),i=n(27),a=n(284),o=Math.max;t.exports=function(t,e,n){var s=null==t?0:t.length;if(!s)return -1;var u=null==n?0:a(n);return u<0&&(u=o(s+u,0)),r(t,i(e,3),u);};},function(t,e,n){var r=n(27),i=n(28),a=n(29);t.exports=function(t){return function(e,n,o){var s=Object(e);if(!i(e)){var u=r(n,3);e=a(e),n=function(t){return u(s[t],t,s);};}var c=t(e,n,o);return c>-1?s[u?e[c]:c]:void 0;};};},function(t,e,n){var r=n(286)(n(285));t.exports=r;},function(t,e,n){var r=n(54),i=n(38),a=n(53),o=n(35),s=Object.prototype,u=s.hasOwnProperty,c=r(function(t,e){t=Object(t);var n=-1,r=e.length,c=r>2?e[2]:void 0;for(c&&a(e[0],e[1],c)&&(r=1);++n<r;)for(var f=e[n],h=o(f),l=-1,d=h.length;++l<d;){var p=h[l],g=t[p];(void 0===g||i(g,s[p])&&!u.call(t,p))&&(t[p]=f[p]);}return t;});t.exports=c;},function(t,e,n){var r=n(167),i=1,a=4;t.exports=function(t){return r(t,i|a);};},function(t,e,n){var r=n(5),i=n(252),a=n(249),o=n(248),s=n(13).normalizeRanks,u=n(246),c=n(13).removeEmptyRanks,f=n(245),h=n(244),l=n(243),d=n(242),p=n(233),g=n(13),v=n(23).Graph;t.exports=function(t,e){var n=e&&e.debugTiming?g.time:g.notime;n("layout",function(){var e=n("  buildLayoutGraph",function(){return function(t){var e=new v({multigraph:!0,compound:!0}),n=A(t.graph());return e.setGraph(r.merge({},y,P(n,m),r.pick(n,x))),r.forEach(t.nodes(),function(n){var i=A(t.node(n));e.setNode(n,r.defaults(P(i,b),w)),e.setParent(n,t.parent(n));}),r.forEach(t.edges(),function(n){var i=A(t.edge(n));e.setEdge(n,r.merge({},M,P(i,_),r.pick(i,S)));}),e;}(t);});n("  runLayout",function(){!function(t,e){e("    makeSpaceForEdgeLabels",function(){!function(t){var e=t.graph();e.ranksep/=2,r.forEach(t.edges(),function(n){var r=t.edge(n);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset);});}(t);}),e("    removeSelfEdges",function(){!function(t){r.forEach(t.edges(),function(e){if(e.v===e.w){var n=t.node(e.v);n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:e,label:t.edge(e)}),t.removeEdge(e);}});}(t);}),e("    acyclic",function(){i.run(t);}),e("    nestingGraph.run",function(){f.run(t);}),e("    rank",function(){o(g.asNonCompoundGraph(t));}),e("    injectEdgeLabelProxies",function(){!function(t){r.forEach(t.edges(),function(e){var n=t.edge(e);if(n.width&&n.height){var r=t.node(e.v),i=t.node(e.w),a={rank:(i.rank-r.rank)/2+r.rank,e:e};g.addDummyNode(t,"edge-proxy",a,"_ep");}});}(t);}),e("    removeEmptyRanks",function(){c(t);}),e("    nestingGraph.cleanup",function(){f.cleanup(t);}),e("    normalizeRanks",function(){s(t);}),e("    assignRankMinMax",function(){!function(t){var e=0;r.forEach(t.nodes(),function(n){var i=t.node(n);i.borderTop&&(i.minRank=t.node(i.borderTop).rank,i.maxRank=t.node(i.borderBottom).rank,e=r.max(e,i.maxRank));}),t.graph().maxRank=e;}(t);}),e("    removeEdgeLabelProxies",function(){!function(t){r.forEach(t.nodes(),function(e){var n=t.node(e);"edge-proxy"===n.dummy&&(t.edge(n.e).labelRank=n.rank,t.removeNode(e));});}(t);}),e("    normalize.run",function(){a.run(t);}),e("    parentDummyChains",function(){u(t);}),e("    addBorderSegments",function(){h(t);}),e("    order",function(){d(t);}),e("    insertSelfEdges",function(){!function(t){var e=g.buildLayerMatrix(t);r.forEach(e,function(e){var n=0;r.forEach(e,function(e,i){var a=t.node(e);a.order=i+n,r.forEach(a.selfEdges,function(e){g.addDummyNode(t,"selfedge",{width:e.label.width,height:e.label.height,rank:a.rank,order:i+ ++n,e:e.e,label:e.label},"_se");}),delete a.selfEdges;});});}(t);}),e("    adjustCoordinateSystem",function(){l.adjust(t);}),e("    position",function(){p(t);}),e("    positionSelfEdges",function(){!function(t){r.forEach(t.nodes(),function(e){var n=t.node(e);if("selfedge"===n.dummy){var r=t.node(n.e.v),i=r.x+r.width/2,a=r.y,o=n.x-i,s=r.height/2;t.setEdge(n.e,n.label),t.removeNode(e),n.label.points=[{x:i+2*o/3,y:a-s},{x:i+5*o/6,y:a-s},{x:i+o,y:a},{x:i+5*o/6,y:a+s},{x:i+2*o/3,y:a+s}],n.label.x=n.x,n.label.y=n.y;}});}(t);}),e("    removeBorderNodes",function(){!function(t){r.forEach(t.nodes(),function(e){if(t.children(e).length){var n=t.node(e),i=t.node(n.borderTop),a=t.node(n.borderBottom),o=t.node(r.last(n.borderLeft)),s=t.node(r.last(n.borderRight));n.width=Math.abs(s.x-o.x),n.height=Math.abs(a.y-i.y),n.x=o.x+n.width/2,n.y=i.y+n.height/2;}}),r.forEach(t.nodes(),function(e){"border"===t.node(e).dummy&&t.removeNode(e);});}(t);}),e("    normalize.undo",function(){a.undo(t);}),e("    fixupEdgeLabelCoords",function(){!function(t){r.forEach(t.edges(),function(e){var n=t.edge(e);if(r.has(n,"x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset;}});}(t);}),e("    undoCoordinateSystem",function(){l.undo(t);}),e("    translateGraph",function(){!function(t){var e=Number.POSITIVE_INFINITY,n=0,i=Number.POSITIVE_INFINITY,a=0,o=t.graph(),s=o.marginx||0,u=o.marginy||0;function c(t){var r=t.x,o=t.y,s=t.width,u=t.height;e=Math.min(e,r-s/2),n=Math.max(n,r+s/2),i=Math.min(i,o-u/2),a=Math.max(a,o+u/2);}r.forEach(t.nodes(),function(e){c(t.node(e));}),r.forEach(t.edges(),function(e){var n=t.edge(e);r.has(n,"x")&&c(n);}),e-=s,i-=u,r.forEach(t.nodes(),function(n){var r=t.node(n);r.x-=e,r.y-=i;}),r.forEach(t.edges(),function(n){var a=t.edge(n);r.forEach(a.points,function(t){t.x-=e,t.y-=i;}),r.has(a,"x")&&(a.x-=e),r.has(a,"y")&&(a.y-=i);}),o.width=n-e+s,o.height=a-i+u;}(t);}),e("    assignNodeIntersects",function(){!function(t){r.forEach(t.edges(),function(e){var n,r,i=t.edge(e),a=t.node(e.v),o=t.node(e.w);i.points?(n=i.points[0],r=i.points[i.points.length-1]):(i.points=[],n=o,r=a),i.points.unshift(g.intersectRect(a,n)),i.points.push(g.intersectRect(o,r));});}(t);}),e("    reversePoints",function(){!function(t){r.forEach(t.edges(),function(e){var n=t.edge(e);n.reversed&&n.points.reverse();});}(t);}),e("    acyclic.undo",function(){i.undo(t);});}(e,n);}),n("  updateInputGraph",function(){!function(t,e){r.forEach(t.nodes(),function(n){var r=t.node(n),i=e.node(n);r&&(r.x=i.x,r.y=i.y,e.children(n).length&&(r.width=i.width,r.height=i.height));}),r.forEach(t.edges(),function(n){var i=t.edge(n),a=e.edge(n);i.points=a.points,r.has(a,"x")&&(i.x=a.x,i.y=a.y);}),t.graph().width=e.graph().width,t.graph().height=e.graph().height;}(t,e);});});};var m=["nodesep","edgesep","ranksep","marginx","marginy"],y={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},x=["acyclicer","ranker","rankdir","align"],b=["width","height"],w={width:0,height:0},_=["minlen","weight","width","height","labeloffset"],M={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},S=["labelpos"];function P(t,e){return r.mapValues(r.pick(t,e),Number);}function A(t){var e={};return r.forEach(t,function(t,n){e[n.toLowerCase()]=t;}),e;}},function(t,e,n){var r=n(19),i=n(97),a=n(124);t.exports=function(t,e){var n,o=new i(),s={},u=new a();function c(t){var r=t.v===n?t.w:t.v,i=u.priority(r);if(void 0!==i){var a=e(t);a<i&&(s[r]=n,u.decrease(r,a));}}if(0===t.nodeCount())return o;r.each(t.nodes(),function(t){u.add(t,Number.POSITIVE_INFINITY),o.setNode(t);}),u.decrease(t.nodes()[0],0);var f=!1;for(;u.size()>0;){if(n=u.removeMin(),r.has(s,n))o.setEdge(n,s[n]);else{if(f)throw new Error("Input graph is not connected: "+t);f=!0;}t.nodeEdges(n).forEach(c);}return o;};},function(t,e,n){var r=n(121);t.exports=function(t,e){return r(t,e,"pre");};},function(t,e,n){var r=n(121);t.exports=function(t,e){return r(t,e,"post");};},function(t,e,n){var r=n(122);t.exports=function(t){try{r(t);}catch(t){if(t instanceof r.CycleException)return !1;throw t;}return !0;};},function(t,e,n){var r=n(19);t.exports=function(t,e,n){return function(t,e,n){var r={},i=t.nodes();return i.forEach(function(t){r[t]={},r[t][t]={distance:0},i.forEach(function(e){t!==e&&(r[t][e]={distance:Number.POSITIVE_INFINITY});}),n(t).forEach(function(n){var i=n.v===t?n.w:n.v,a=e(n);r[t][i]={distance:a,predecessor:t};});}),i.forEach(function(t){var e=r[t];i.forEach(function(n){var a=r[n];i.forEach(function(n){var r=a[t],i=e[n],o=a[n],s=r.distance+i.distance;s<o.distance&&(o.distance=s,o.predecessor=i.predecessor);});});}),r;}(t,e||i,n||function(e){return t.outEdges(e);});};var i=r.constant(1);},function(t,e,n){var r=n(19),i=n(123);t.exports=function(t){return r.filter(i(t),function(e){return e.length>1||1===e.length&&t.hasEdge(e[0],e[0]);});};},function(t,e,n){var r=n(125),i=n(19);t.exports=function(t,e,n){return i.transform(t.nodes(),function(i,a){i[a]=r(t,a,e,n);},{});};},function(t,e,n){var r=n(19);t.exports=function(t){var e,n={},i=[];function a(i){r.has(n,i)||(n[i]=!0,e.push(i),r.each(t.successors(i),a),r.each(t.predecessors(i),a));}return r.each(t.nodes(),function(t){e=[],a(t),e.length&&i.push(e);}),i;};},function(t,e,n){t.exports={components:n(298),dijkstra:n(125),dijkstraAll:n(297),findCycles:n(296),floydWarshall:n(295),isAcyclic:n(294),postorder:n(293),preorder:n(292),prim:n(291),tarjan:n(123),topsort:n(122)};},function(t,e,n){var r=n(19),i=n(97);t.exports={write:function(t){var e={options:{directed:t.isDirected(),multigraph:t.isMultigraph(),compound:t.isCompound()},nodes:function(t){return r.map(t.nodes(),function(e){var n=t.node(e),i=t.parent(e),a={v:e};return r.isUndefined(n)||(a.value=n),r.isUndefined(i)||(a.parent=i),a;});}(t),edges:function(t){return r.map(t.edges(),function(e){var n=t.edge(e),i={v:e.v,w:e.w};return r.isUndefined(e.name)||(i.name=e.name),r.isUndefined(n)||(i.value=n),i;});}(t)};r.isUndefined(t.graph())||(e.value=r.clone(t.graph()));return e;},read:function(t){var e=new i(t.options).setGraph(t.value);return r.each(t.nodes,function(t){e.setNode(t.v,t.value),t.parent&&e.setParent(t.v,t.parent);}),r.each(t.edges,function(t){e.setEdge({v:t.v,w:t.w,name:t.name},t.value);}),e;}};},function(t,e){t.exports="2.1.7";},function(t,e,n){var r=n(55);t.exports=function(t,e){return r(e,function(e){return t[e];});};},function(t,e){t.exports=function(){};},function(t,e,n){var r=n(154),i=n(303),a=n(84),o=r&&1/a(new r([,-0]))[1]==1/0?function(t){return new r(t);}:i;t.exports=o;},function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return !0;return !1;};},function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return -1;};},function(t,e){t.exports=function(t){return t!=t;};},function(t,e,n){var r=n(128),i=n(307),a=n(306);t.exports=function(t,e,n){return e==e?a(t,e,n):r(t,i,n);};},function(t,e,n){var r=n(308);t.exports=function(t,e){return !(null==t||!t.length)&&r(t,e,0)>-1;};},function(t,e,n){var r=n(143),i=n(309),a=n(305),o=n(142),s=n(304),u=n(84),c=200;t.exports=function(t,e,n){var f=-1,h=i,l=t.length,d=!0,p=[],g=p;if(n)d=!1,h=a;else if(l>=c){var v=e?null:s(t);if(v)return u(v);d=!1,h=o,g=new r();}else g=e?[]:p;t:for(;++f<l;){var m=t[f],y=e?e(m):m;if(m=n||0!==m?m:0,d&&y==y){for(var x=g.length;x--;)if(g[x]===y)continue t;e&&g.push(y),p.push(m);}else h(g,y,n)||(g!==p&&g.push(y),p.push(m));}return p;};},function(t,e){var n=800,r=16,i=Date.now;t.exports=function(t){var e=0,a=0;return function(){var o=i(),s=r-(o-a);if(a=o,s>0){if(++e>=n)return arguments[0];}else e=0;return t.apply(void 0,arguments);};};},function(t,e,n){var r=n(87),i=n(164),a=n(30),o=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0});}:a;t.exports=o;},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2]);}return t.apply(e,n);};},function(t,e,n){var r=n(37),i=n(46),a=n(6),o=r?r.isConcatSpreadable:void 0;t.exports=function(t){return a(t)||i(t)||!!(o&&t&&t[o]);};},function(t,e,n){var r=n(81),i=n(54),a=n(310),o=n(127),s=i(function(t){return a(r(t,1,o,!0));});t.exports=s;},function(t,e,n){var r=n(94),i=n(150),a=n(86),o=n(27),s=n(58),u=n(6),c=n(36),f=n(48),h=n(18),l=n(45);t.exports=function(t,e,n){var d=u(t),p=d||c(t)||l(t);if(e=o(e,4),null==n){var g=t&&t.constructor;n=p?d?new g():[]:h(t)&&f(g)?i(s(t)):{};}return (p?r:a)(t,function(t,r,i){return e(n,t,r,i);}),n;};},function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+i+")"+"?",c="[\\ufe0e\\ufe0f]?"+u+("(?:\\u200d(?:"+[a,o,s].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*"),f="(?:"+[a+r+"?",r,o,s,n].join("|")+")",h=RegExp(i+"(?="+i+")|"+f+c,"g");t.exports=function(t){for(var e=h.lastIndex=0;h.test(t);)++e;return e;};},function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t);};},function(t,e,n){var r=n(136)("length");t.exports=r;},function(t,e,n){var r=n(319),i=n(318),a=n(317);t.exports=function(t){return i(t)?a(t):r(t);};},function(t,e,n){var r=n(31),i=n(6),a=n(25),o="[object String]";t.exports=function(t){return "string"==typeof t||!i(t)&&a(t)&&r(t)==o;};},function(t,e,n){var r=n(91),i=n(34),a=n(28),o=n(321),s=n(320),u="[object Map]",c="[object Set]";t.exports=function(t){if(null==t)return 0;if(a(t))return o(t)?s(t):t.length;var e=i(t);return e==u||e==c?t.size:r(t).length;};},function(t,e){t.exports=function(t,e,n,r,i){return i(t,function(t,i,a){n=r?(r=!1,t):e(n,t,i,a);}),n;};},function(t,e){t.exports=function(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n;};},function(t,e,n){var r=n(91),i=n(34),a=n(46),o=n(6),s=n(28),u=n(36),c=n(59),f=n(45),h="[object Map]",l="[object Set]",d=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return !0;if(s(t)&&(o(t)||"string"==typeof t||"function"==typeof t.splice||u(t)||f(t)||a(t)))return !t.length;var e=i(t);if(e==h||e==l)return !t.size;if(c(t))return !r(t).length;for(var n in t)if(d.call(t,n))return !1;return !0;};},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&n.call(t,e);};},function(t,e,n){var r=n(83);t.exports=function(t){return function(e){return r(e,t);};};},function(t,e,n){var r=n(136),i=n(327),a=n(82),o=n(44);t.exports=function(t){return a(t)?r(o(t)):i(t);};},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t);};},function(t,e,n){var r=n(37),i=n(55),a=n(6),o=n(33),s=1/0,u=r?r.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return i(e,t)+"";if(o(e))return c?c.call(e):"";var n=e+"";return "0"==n&&1/e==-s?"-0":n;};},function(t,e,n){var r=n(95),i="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o;};return n.cache=new(a.Cache||r)(),n;}a.Cache=r,t.exports=a;},function(t,e,n){var r=n(331),i=500;t.exports=function(t){var e=r(t,function(t){return n.size===i&&n.clear(),t;}),n=e.cache;return e;};},function(t,e,n){var r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n(332)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,function(t,n,r,a){e.push(r?a.replace(i,"$1"):n||t);}),e;});t.exports=a;},function(t,e,n){var r=n(83);t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i;};},function(t,e,n){var r=n(145),i=n(334),a=n(138),o=n(82),s=n(141),u=n(140),c=n(44),f=1,h=2;t.exports=function(t,e){return o(t)&&s(e)?u(c(t),e):function(n){var o=i(n,t);return void 0===o&&o===e?a(n,t):r(e,o,f|h);};};},function(t,e,n){var r=n(141),i=n(29);t.exports=function(t){for(var e=i(t),n=e.length;n--;){var a=e[n],o=t[a];e[n]=[a,o,r(o)];}return e;};},function(t,e,n){var r=n(156),i=1,a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,o,s,u){var c=n&i,f=r(t),h=f.length;if(h!=r(e).length&&!c)return !1;for(var l=h;l--;){var d=f[l];if(!(c?d in e:a.call(e,d)))return !1;}var p=u.get(t);if(p&&u.get(e))return p==e;var g=!0;u.set(t,e),u.set(e,t);for(var v=c;++l<h;){var m=t[d=f[l]],y=e[d];if(o)var x=c?o(y,m,d,e,t,u):o(m,y,d,t,e,u);if(!(void 0===x?m===y||s(m,y,n,o,u):x)){g=!1;break;}v||(v="constructor"==d);}if(g&&!v){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(g=!1);}return u.delete(t),u.delete(e),g;};},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t];}),n;};},function(t,e,n){var r=n(37),i=n(153),a=n(38),o=n(144),s=n(338),u=n(84),c=1,f=2,h="[object Boolean]",l="[object Date]",d="[object Error]",p="[object Map]",g="[object Number]",v="[object RegExp]",m="[object Set]",y="[object String]",x="[object Symbol]",b="[object ArrayBuffer]",w="[object DataView]",_=r?r.prototype:void 0,M=_?_.valueOf:void 0;t.exports=function(t,e,n,r,_,S,P){switch(n){case w:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return !1;t=t.buffer,e=e.buffer;case b:return !(t.byteLength!=e.byteLength||!S(new i(t),new i(e)));case h:case l:case g:return a(+t,+e);case d:return t.name==e.name&&t.message==e.message;case v:case y:return t==e+"";case p:var A=s;case m:var k=r&c;if(A||(A=u),t.size!=e.size&&!k)return !1;var C=P.get(t);if(C)return C==e;r|=f,P.set(t,e);var E=o(A(t),A(e),r,_,S,P);return P.delete(t),E;case x:if(M)return M.call(t)==M.call(e);}return !1;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return !0;return !1;};},function(t,e){t.exports=function(t){return this.__data__.has(t);};},function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this;};},function(t,e,n){var r=n(68),i=n(144),a=n(339),o=n(337),s=n(34),u=n(6),c=n(36),f=n(45),h=1,l="[object Arguments]",d="[object Array]",p="[object Object]",g=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,v,m,y){var x=u(t),b=u(e),w=x?d:s(t),_=b?d:s(e),M=(w=w==l?p:w)==p,S=(_=_==l?p:_)==p,P=w==_;if(P&&c(t)){if(!c(e))return !1;x=!0,M=!1;}if(P&&!M)return y||(y=new r()),x||f(t)?i(t,e,n,v,m,y):a(t,e,w,n,v,m,y);if(!(n&h)){var A=M&&g.call(t,"__wrapped__"),k=S&&g.call(e,"__wrapped__");if(A||k){var C=A?t.value():t,E=k?e.value():e;return y||(y=new r()),m(C,E,n,v,y);}}return !!P&&(y||(y=new r()),o(t,e,n,v,m,y));};},function(t,e,n){var r=n(68),i=n(145),a=1,o=2;t.exports=function(t,e,n,s){var u=n.length,c=u,f=!s;if(null==t)return !c;for(t=Object(t);u--;){var h=n[u];if(f&&h[2]?h[1]!==t[h[0]]:!(h[0]in t))return !1;}for(;++u<c;){var l=(h=n[u])[0],d=t[l],p=h[1];if(f&&h[2]){if(void 0===d&&!(l in t))return !1;}else{var g=new r();if(s)var v=s(d,p,l,t,e,g);if(!(void 0===v?i(p,d,a|o,s,g):v))return !1;}}return !0;};},function(t,e,n){var r=n(344),i=n(336),a=n(140);t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e);};};},function(t,e,n){var r=n(57);t.exports=function(t,e){var n=[];return r(t,function(t,r,i){e(t,r,i)&&n.push(t);}),n;};},function(t,e,n){var r=n(28);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var a=n.length,o=e?a:-1,s=Object(n);(e?o--:++o<a)&&!1!==i(s[o],o,s););return n;};};},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,a=Object(e),o=r(e),s=o.length;s--;){var u=o[t?s:++i];if(!1===n(a[u],u,a))break;}return e;};};},function(t,e,n){var r=n(34),i=n(25),a="[object Set]";t.exports=function(t){return i(t)&&r(t)==a;};},function(t,e,n){var r=n(349),i=n(60),a=n(92),o=a&&a.isSet,s=o?i(o):r;t.exports=s;},function(t,e,n){var r=n(34),i=n(25),a="[object Map]";t.exports=function(t){return i(t)&&r(t)==a;};},function(t,e,n){var r=n(351),i=n(60),a=n(92),o=a&&a.isMap,s=o?i(o):r;t.exports=s;},function(t,e,n){var r=n(37),i=r?r.prototype:void 0,a=i?i.valueOf:void 0;t.exports=function(t){return a?Object(a.call(t)):{};};},function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e;};},function(t,e,n){var r=n(88);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength);};},function(t,e,n){var r=n(88),i=n(355),a=n(354),o=n(353),s=n(152),u="[object Boolean]",c="[object Date]",f="[object Map]",h="[object Number]",l="[object RegExp]",d="[object Set]",p="[object String]",g="[object Symbol]",v="[object ArrayBuffer]",m="[object DataView]",y="[object Float32Array]",x="[object Float64Array]",b="[object Int8Array]",w="[object Int16Array]",_="[object Int32Array]",M="[object Uint8Array]",S="[object Uint8ClampedArray]",P="[object Uint16Array]",A="[object Uint32Array]";t.exports=function(t,e,n){var k=t.constructor;switch(e){case v:return r(t);case u:case c:return new k(+t);case m:return i(t,n);case y:case x:case b:case w:case _:case M:case S:case P:case A:return s(t,n);case f:return new k();case h:case p:return new k(t);case l:return a(t);case d:return new k();case g:return o(t);}};},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r;};},function(t,e,n){var r=n(32)(n(22),"WeakMap");t.exports=r;},function(t,e,n){var r=n(32)(n(22),"Promise");t.exports=r;},function(t,e,n){var r=n(32)(n(22),"DataView");t.exports=r;},function(t,e,n){var r=n(155),i=n(157),a=n(35);t.exports=function(t){return r(t,a,i);};},function(t,e,n){var r=n(47),i=n(157);t.exports=function(t,e){return r(t,i(t),e);};},function(t,e,n){var r=n(47),i=n(90);t.exports=function(t,e){return r(t,i(t),e);};},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e;};},function(t,e,n){var r=n(18),i=n(59),a=n(364),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&o.call(t,s))&&n.push(s);return n;};},function(t,e,n){var r=n(47),i=n(35);t.exports=function(t,e){return t&&r(e,i(e),t);};},function(t,e,n){var r=n(162)(Object.keys,Object);t.exports=r;},function(t,e,n){var r=n(31),i=n(93),a=n(25),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&i(t.length)&&!!o[r(t)];};},function(t,e){t.exports=function(){return !1;};},function(t,e,n){var r=n(31),i=n(25),a="[object Arguments]";t.exports=function(t){return i(t)&&r(t)==a;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r;};},function(t,e,n){var r=n(47),i=n(29);t.exports=function(t,e){return t&&r(e,i(e),t);};},function(t,e,n){var r=n(64);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this;};},function(t,e,n){var r=n(64);t.exports=function(t){return r(this,t).has(t);};},function(t,e,n){var r=n(64);t.exports=function(t){return r(this,t).get(t);};},function(t,e){t.exports=function(t){var e=typeof t;return "string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t;};},function(t,e,n){var r=n(64);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e;};},function(t,e,n){var r=n(65),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this;};},function(t,e,n){var r=n(65),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t);};},function(t,e,n){var r=n(65),i="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n;}return a.call(e,t)?e[t]:void 0;};},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e;};},function(t,e,n){var r=n(65);t.exports=function(){this.__data__=r?r(null):{},this.size=0;};},function(t,e,n){var r=n(382),i=n(381),a=n(380),o=n(379),s=n(378);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}u.prototype.clear=r,u.prototype.delete=i,u.prototype.get=a,u.prototype.has=o,u.prototype.set=s,t.exports=u;},function(t,e,n){var r=n(383),i=n(67),a=n(96);t.exports=function(){this.size=0,this.__data__={hash:new r(),map:new(a||i)(),string:new r()};};},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e];};},function(t,e,n){var r=n(22)["__core-js_shared__"];t.exports=r;},function(t,e,n){var r=n(386),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:"";}();t.exports=function(t){return !!i&&i in t;};},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t);};},function(t,e,n){var r=n(37),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0;}catch(t){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i;};},function(t,e,n){var r=n(48),i=n(387),a=n(18),o=n(165),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,f=u.toString,h=c.hasOwnProperty,l=RegExp("^"+f.call(h).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return !(!a(t)||i(t))&&(r(t)?l:s).test(o(t));};},function(t,e,n){var r=n(67),i=n(96),a=n(95),o=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var s=n.__data__;if(!i||s.length<o-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(s);}return n.set(t,e),this.size=n.size,this;};},function(t,e){t.exports=function(t){return this.__data__.has(t);};},function(t,e){t.exports=function(t){return this.__data__.get(t);};},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n;};},function(t,e,n){var r=n(67);t.exports=function(){this.__data__=new r(),this.size=0;};},function(t,e,n){var r=n(66);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this;};},function(t,e,n){var r=n(66);t.exports=function(t){return r(this.__data__,t)>-1;};},function(t,e,n){var r=n(66);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1];};},function(t,e,n){var r=n(66),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return !(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0));};},function(t,e){t.exports=function(){this.__data__=[],this.size=0;};},function(t,e,n){var r=n(167),i=4;t.exports=function(t){return r(t,i);};},function(t,e,n){t.exports={Graph:n(97),version:n(301)};},function(t,e,n){var r=n(402);t.exports={Graph:r.Graph,json:n(300),alg:n(299),version:r.version};},function(t,e,n){t.exports={graphlib:n(23),layout:n(290),debug:n(231),util:{time:n(13).time,notime:n(13).notime},version:n(230)};},function(t,e,n){var r=n(404),i=n(24),a=n(3);i.registerLayout("dagre",{getDefaultCfg:function(){return {rankdir:"TB",align:void 0,nodeSize:void 0,nodesepFunc:function(){return 50;},ranksepFunc:function(){return 50;},nodesep:50,ranksep:50,controlPoints:!0};},execute:function(){var t,e=this,n=e.nodes,i=e.edges,o=new r.graphlib.Graph(),s=e.nodeSize;t=s?a(s)?function(){return s;}:function(){return [s,s];}:function(t){return t.size?a(t.size)?t.size:[t.size,t.size]:[40,40];};var u=e.nodesep;e.nodesepFunc&&(u=e.nodesepFunc);var c=e.ranksep;e.ranksepFunc&&(c=e.ranksepFunc);var f,h=e.rankdir;"LR"!==h&&"RL"!==h||(u=e.ranksep,e.ranksepFunc&&(u=e.ranksepFunc),c=e.nodesep,e.nodesepFunc&&(c=e.nodesepFunc)),o.setDefaultEdgeLabel(function(){return {};}),o.setGraph(e),n.forEach(function(e){var n=t(e),r=u(e),i=c(e),a=n[0]+2*r,s=n[1]+2*i;o.setNode(e.id,{width:a,height:s});}),i.forEach(function(t){o.setEdge(t.source,t.target);}),r.layout(o),o.nodes().forEach(function(t,e){f=o.node(t),n[e].x=f.x,n[e].y=f.y;}),o.edges().forEach(function(t,n){f=o.edge(t),i[n].startPoint=f.points[0],i[n].endPoint=f.points[f.points.length-1],e.controlPoints&&(i[n].controlPoints=f.points.slice(1,f.points.length-1));});}});},function(t,e,n){var r=n(110),i=n(24),a=n(1),o=n(3),s=n(77);i.registerLayout("force",{getDefaultCfg:function(){return {center:[0,0],nodeStrength:null,preventOverlap:!1,nodeSize:void 0,nodeSpacing:void 0,edgeStrength:null,linkDistance:50,forceSimulation:null,alphaDecay:.028,alphaMin:.001,alpha:.3,collideStrength:1,tick:function(){},onLayoutEnd:function(){},onTick:function(){}};},init:function(t){this.nodes=t.nodes,this.edges=t.edges,this.ticking=!1;},execute:function(){var t=this,e=t.nodes,n=t.edges;if(!t.ticking){var i=t.forceSimulation,a=t.alphaMin,o=t.alphaDecay,s=t.alpha;if(i)t.preventOverlap&&t.overlapProcess(i),i.alpha(s).restart(),this.ticking=!0;else try{var u=r.forceManyBody();if(t.nodeStrength&&u.strength(t.nodeStrength),i=r.forceSimulation().nodes(e).force("center",r.forceCenter(t.center[0],t.center[1])).force("charge",u).alpha(s).alphaDecay(o).alphaMin(a).on("tick",function(){t.tick();}).on("end",function(){t.ticking=!1,t.onLayoutEnd&&t.onLayoutEnd();}),t.preventOverlap&&t.overlapProcess(i),n){var c=n.map(function(t){return {id:t.id,source:t.source,target:t.target};}),f=r.forceLink().id(function(t){return t.id;}).links(c);t.edgeStrength&&f.strength(t.edgeStrength),t.linkDistance&&f.distance(t.linkDistance),i.force("link",f);}t.forceSimulation=i,t.ticking=!0;}catch(e){t.ticking=!1,console.warn(e);}}},overlapProcess:function(t){var e,n,i=this.nodeSize,a=this.nodeSpacing,u=this.collideStrength;if(n=s(a)?function(){return a;}:"function"==typeof a?a:function(){return 0;},i){if(isNaN(i)){if(o(i)){var c=(i[0]>i[1]?i[0]:i[1])/2;e=function(t){return c+n(t);};}}else{var f=i/2;e=function(t){return f+n(t);};}}else e=function(t){return t.size?o(t.size)?(t.size[0]>t.size[1]?t.size[0]:t.size[1])/2+n(t):t.size/2+n(t):10+n(t);};t.force("collisionForce",r.forceCollide(e).strength(u));},updateCfg:function(t){this.ticking&&(this.forceSimulation.stop(),this.ticking=!1),this.forceSimulation=null,a.mix(this,t);},destroy:function(){this.ticking&&(this.forceSimulation.stop(),this.ticking=!1),this.nodes=null,this.edges=null,this.destroyed=!0;}});},function(t,e,n){var r=n(168),i=function(){function t(t){this.distances=t.distances,this.dimension=t.dimension||2,this.linkDistance=t.linkDistance;}return t.prototype.layout=function(){var t=this.dimension,e=this.distances,n=this.linkDistance,i=r.mul(-.5,r.pow(e,2));function a(t){return r.div(r.add.apply(null,t),t.length);}for(var o,s=a(i),u=a(r.transpose(i)),c=a(s),f=0;f<i.length;++f)for(var h=0;h<i[0].length;++h)i[f][h]+=c-s[f]-u[h];var l=[];try{o=r.svd(i);}catch(t){for(var d=e.length,p=0;p<d;p++){var g=Math.random()*n,v=Math.random()*n;l.push([g,v]);}}if(0===l.length){var m=r.sqrt(o.S);l=o.U.map(function(e){return r.mul(e,m).splice(0,t);});}return l;},t;}();t.exports=i;},function(t,e){var n=function(){function t(t){this.positions=t.positions,this.adjMatrix=t.adjMatrix,this.focusID=t.focusID,this.radii=t.radii,this.iterations=t.iterations||10,this.height=t.height||10,this.width=t.width||10,this.speed=t.speed||100,this.gravity=t.gravity||10,this.nodeSizeFunc=t.nodeSizeFunc,this.k=t.k||5,this.strictRadial=t.strictRadial,this.nodes=t.nodes;}var e=t.prototype;return e.layout=function(){var t=this.positions,e=[],n=this.iterations,r=this.width/10;this.maxDisplace=r,this.disp=e;for(var i=0;i<n;i++)t.forEach(function(t,n){e[n]={x:0,y:0};}),this.getRepulsion(),this.updatePositions();return t;},e.getRepulsion=function(){var t=this,e=t.positions,n=t.nodes,r=t.disp,i=t.k,a=t.radii;e.forEach(function(o,s){r[s]={x:0,y:0},e.forEach(function(e,u){if(s!==u&&a[s]===a[u]){var c=o[0]-e[0],f=o[1]-e[1],h=Math.sqrt(c*c+f*f);if(0===h&&(h=1),h<t.nodeSizeFunc(n[s])/2+t.nodeSizeFunc(n[u])/2){var l=i*i/h;r[s].x+=c/h*l,r[s].y+=f/h*l;}}});});},e.updatePositions=function(){var t=this,e=t.positions,n=t.disp,r=t.speed,i=t.strictRadial,a=t.focusID;i&&n.forEach(function(t,n){var r=e[n][0]-e[a][0],i=e[n][1]-e[a][1],o=Math.sqrt(r*r+i*i),s=i/o,u=-r/o,c=Math.sqrt(t.x*t.x+t.y*t.y),f=Math.acos((s*t.x+u*t.y)/c);f>Math.PI/2&&(f-=Math.PI/2,s*=-1,u*=-1);var h=Math.cos(f)*c;t.x=s*h,t.y=u*h;}),e.forEach(function(t,e){n[e].dx*=r/800,n[e].dy*=r/800;});var o=t.radii;e.forEach(function(s,u){if(u!==a){var c=Math.sqrt(n[u].x*n[u].x+n[u].y*n[u].y);if(c>0&&u!==a){var f=Math.min(t.maxDisplace*(r/800),c);if(s[0]+=n[u].x/c*f,s[1]+=n[u].y/c*f,i){var h=s[0]-e[a][0],l=s[1]-e[a][1],d=Math.sqrt(h*h+l*l);h=h/d*o[u],l=l/d*o[u],s[0]=e[a][0]+h,s[1]=e[a][1]+l;}}}});},t;}();t.exports=n;},function(t,e,n){var r=n(24),i=n(1),a=n(408),o=n(407),s=n(3),u=n(77);r.registerLayout("radial",{getDefaultCfg:function(){return {center:[0,0],maxIteration:1e3,focusNode:null,unitRadius:null,linkDistance:50,preventOverlap:!1,nodeSize:void 0,nodeSpacing:void 0,strictRadial:!0,maxPreventOverlapIteration:200};},execute:function(){var t=this,e=t.nodes,n=t.edges,r=t.center;if(0!==e.length){if(1===e.length)return e[0].x=r[0],void(e[0].y=r[1]);var c=t.linkDistance,f=t.focusNode;if(i.isString(f)){for(var h=!1,l=0;l<e.length;l++)e[l].id===f&&(f=e[l],t.focusNode=f,h=!0,l=e.length);h||(f=null);}if(!f){if(!(f=e[0]))return;t.focusNode=f;}var d=function(t,e){var n=-1;return t.forEach(function(t,r){t.id!==e||(n=r);}),n;}(e,f.id);t.focusIndex=d;var p=i.getAdjMatrix({nodes:e,edges:n},!1),g=i.floydWarshall(p),v=t.maxToFocus(g,d);t.handleInfinity(g,d,v+1),t.distances=g;var m=g[d],y=t.width||window.innerHeight,x=t.height||window.innerWidth,b=y-r[0]>r[0]?r[0]:y-r[0],w=x-r[1]>r[1]?r[1]:x-r[1];0===b&&(b=y/2),0===w&&(w=x/2);var _=w>b?b:w,M=Math.max.apply(Math,m),S=[];m.forEach(function(e,n){t.unitRadius||(t.unitRadius=_/M),S[n]=e*t.unitRadius;}),t.radii=S;var P=t.eIdealDisMatrix(g,c,S);t.eIdealDistances=P;var A=function(t){for(var e=t.length,n=t[0].length,r=[],i=0;i<e;i++){for(var a=[],o=0;o<n;o++)0!==t[i][o]?a.push(1/Math.pow(t[i][o],2)):a.push(0);r.push(a);}return r;}(P);t.weights=A;var k=new o({distances:P,linkDistance:c,dimension:2}).layout();k.forEach(function(t){isNaN(t[0])&&(t[0]=Math.random()*c),isNaN(t[1])&&(t[1]=Math.random()*c);}),t.positions=k,k.forEach(function(t,n){e[n].x=t[0]+r[0],e[n].y=t[1]+r[1];}),k.forEach(function(t){t[0]-=k[d][0],t[1]-=k[d][1];}),t.run();var C,E=t.preventOverlap,I=t.nodeSize,N=t.strictRadial;if(E){var T,O=t.nodeSpacing;T=u(O)?function(){return O;}:"function"==typeof O?O:function(){return 0;},C=I?s(I)?function(t){return (I[0]>I[1]?I[0]:I[1])+T(t);}:function(t){return I+T(t);}:function(t){return t.size?s(t.size)?(t.size[0]>t.size[1]?t.size[0]:t.size[1])+T(t):t.size+T(t):10+T(t);};var j=new a({nodeSizeFunc:C,adjMatrix:p,positions:k,radii:S,height:x,width:y,strictRadial:N,focusID:d,iterations:t.maxPreventOverlapIteration||200,k:k.length/4.5,nodes:e});k=j.layout();}k.forEach(function(t,n){e[n].x=t[0]+r[0],e[n].y=t[1]+r[1];});}},run:function(){for(var t=this.maxIteration,e=this.positions,n=this.weights,r=this.eIdealDistances,i=this.radii,a=0;a<=t;a++){var o=a/t;this.oneIteration(o,e,i,r,n);}},oneIteration:function(t,e,n,r,a){var o=1-t,s=this.focusIndex;e.forEach(function(u,c){var f=i.getEDistance(u,[0,0]),h=0===f?0:1/f;if(c!==s){var l=0,d=0,p=0;e.forEach(function(t,e){if(c!==e){var n=i.getEDistance(u,t),o=0===n?0:1/n,s=r[e][c];p+=a[c][e],l+=a[c][e]*(t[0]+s*(u[0]-t[0])*o),d+=a[c][e]*(t[1]+s*(u[1]-t[1])*o);}});var g=0===n[c]?0:1/n[c];p*=o,p+=t*Math.pow(g,2),l*=o,l+=t*g*u[0]*h,u[0]=l/p,d*=o,d+=t*g*u[1]*h,u[1]=d/p;}});},eIdealDisMatrix:function(){var t=this.distances,e=this.linkDistance,n=this.radii,r=this.unitRadius,i=[];return t.forEach(function(t,a){var o=[];t.forEach(function(t,i){if(a===i)o.push(0);else if(n[a]===n[i])o.push(t*e/(n[a]/r));else{var s=(e+r)/2;o.push(t*s);}}),i.push(o);}),i;},handleAbnormalMatrix:function(t,e){for(var n=t.length,r=0;r<n;r++)0===t[r].length&&(t[r][e]=1,t[e][r]=1);},handleInfinity:function(t,e,n){for(var r=t.length,i=0;i<r;i++)if(t[e][i]===1/0){t[e][i]=n,t[i][e]=n;for(var a=0;a<r;a++)t[i][a]!==1/0&&t[e][a]===1/0&&(t[e][a]=n+t[i][a],t[a][e]=n+t[i][a]);}for(var o=0;o<r;o++)if(o!==e)for(var s=0;s<r;s++)if(t[o][s]===1/0){var u=Math.abs(t[e][o]-t[e][s]);u=0===u?1:u,t[o][s]=u;}},maxToFocus:function(t,e){for(var n=0,r=0;r<t[e].length;r++)t[e][r]!==1/0&&(n=t[e][r]>n?t[e][r]:n);return n;}});},function(t,e,n){n(24).registerLayout("fruchterman",{getDefaultCfg:function(){return {maxIteration:1e3,center:[0,0],gravity:10,speed:1,clustering:!1,clusterGravity:10};},execute:function(){var t=this.nodes,e=this.center;if(0!==t.length){if(1===t.length)return t[0].x=e[0],void(t[0].y=e[1]);var n=new Map(),r=new Map();t.forEach(function(t,e){n.set(t.id,t),r.set(t.id,e);}),this.nodeMap=n,this.nodeIndexMap=r,this.run();}},run:function(){var t=this,e=t.nodes,n=t.edges,r=t.maxIteration,i=t.width||window.innerHeight,a=t.height||window.innerWidth,o=t.center,s=t.nodeMap,u=t.nodeIndexMap,c=i/10,f=Math.sqrt(i*a/(e.length+1)),h=t.gravity,l=t.speed,d=t.clustering,p=new Map();d&&(e.forEach(function(t){if(void 0===p.get(t.cluster)){var e={name:t.cluster,cx:0,cy:0,count:0};p.set(t.cluster,e);}var n=p.get(t.cluster);n.cx+=t.x,n.cy+=t.y,n.count++;}),p.forEach(function(t){t.cx/=t.count,t.cy/=t.count;}));for(var g=function(r){var i=[];if(e.forEach(function(t,e){i[e]={x:0,y:0};}),t.getDisp(e,n,s,u,i,f),d){var a=t.clusterGravity||h;e.forEach(function(t,e){var n=p.get(t.cluster),r=Math.sqrt((t.x-n.cx)*(t.x-n.cx)+(t.y-n.cy)*(t.y-n.cy)),o=f*a;i[e].x-=o*(t.x-n.cx)/r,i[e].y-=o*(t.y-n.cy)/r;}),p.forEach(function(t){t.cx=0,t.cy=0,t.count=0;}),e.forEach(function(t){var e=p.get(t.cluster);e.cx+=t.x,e.cy+=t.y,e.count++;}),p.forEach(function(t){t.cx/=t.count,t.cy/=t.count;});}e.forEach(function(t,e){var n=.01*f*h;i[e].x-=n*(t.x-o[0]),i[e].y-=n*(t.y-o[1]);}),e.forEach(function(t,e){i[e].dx*=l/800,i[e].dy*=l/800;}),e.forEach(function(t,e){var n=Math.sqrt(i[e].x*i[e].x+i[e].y*i[e].y);if(n>0){var r=Math.min(c*(l/800),n);t.x+=i[e].x/n*r,t.y+=i[e].y/n*r;}});},v=0;v<r;v++)g();},getDisp:function(t,e,n,r,i,a){this.calRepulsive(t,i,a),this.calAttractive(e,n,r,i,a);},calRepulsive:function(t,e,n){t.forEach(function(r,i){e[i]={x:0,y:0},t.forEach(function(t,a){if(i!==a){var o=r.x-t.x,s=r.y-t.y,u=o*o+s*s;0===u&&(u=1);var c=n*n/u;e[i].x+=o*c,e[i].y+=s*c;}});});},calAttractive:function(t,e,n,r,i){t.forEach(function(t){var a=n.get(t.source),o=n.get(t.target);if(a!==o){var s=e.get(t.source),u=e.get(t.target),c=u.x-s.x,f=u.y-s.y,h=Math.sqrt(c*c+f*f),l=h*h/i;r[o].x-=c/h*l,r[o].y-=f/h*l,r[a].x+=c/h*l,r[a].y+=f/h*l;}});}});},function(t,e,n){function r(t,e){return t.degree<e.degree?-1:t.degree>e.degree?1:0;}n(24).registerLayout("circular",{getDefaultCfg:function(){return {center:[0,0],radius:null,startRadius:null,endRadius:null,startAngle:0,endAngle:2*Math.PI,clockwise:!0,divisions:1,ordering:null,angleRatio:1};},execute:function(){var t=this.nodes,e=this.edges,n=t.length,r=this.center;if(0!==n){if(1===n)return t[0].x=r[0],void(t[0].y=r[1]);var i=this.radius,a=this.startRadius,o=this.endRadius,s=this.divisions,u=this.startAngle,c=this.endAngle,f=(c-u)/n,h=new Map();t.forEach(function(t,e){h.set(t.id,e);}),this.nodeMap=h;var l=function(t,e,n){for(var r=[],i=0;i<t;i++)r[i]=0;return n.forEach(function(t){r[e.get(t.source)]+=1,r[e.get(t.target)]+=1;}),r;}(t.length,h,e);this.degrees=l;var d=this.width||window.innerHeight,p=this.height||window.innerWidth;i||a||o?!a&&o?a=o:a&&!o&&(o=a):i=p>d?d/2:p/2;var g=f*this.angleRatio;this.astep=g;var v=this.ordering,m=[];m="topology"===v?this.topologyOrdering():"degree"===v?this.degreeOrdering():t;for(var y=this.clockwise,x=Math.ceil(n/s),b=0;b<n;++b){var w=i;w||(w=a+b*(o-a)/(n-1));var _=u+b%x*g+2*Math.PI/s*Math.floor(b/x);y||(_=c-b%x*g-2*Math.PI/s*Math.floor(b/x)),m[b].x=r[0]+Math.cos(_)*w,m[b].y=r[1]+Math.sin(_)*w,m[b].weight=l[b];}}},topologyOrdering:function(){var t=this.degrees,e=this.edges,n=this.nodes,r=this.nodeMap,i=[n[0]],a=[],o=n.length;a[0]=!0,function(t,e,n,r){t.forEach(function(e,n){t[n].children=[],t[n].parent=[];}),r?e.forEach(function(e){var r=n.get(e.source),i=n.get(e.target);t[r].children.push(t[i]),t[i].parent.push(t[r]);}):e.forEach(function(e){var r=n.get(e.source),i=n.get(e.target);t[r].children.push(t[i]),t[i].children.push(t[r]);});}(n,e,r,!1);var s=0;return n.forEach(function(u,c){if(0!==c)if(c!==o-1&&t[c]===t[c+1]&&!function(t,e,n){for(var r=n.length,i=0;i<r;i++)if(t.id===n[i].source&&e.id===n[i].target||e.id===n[i].source&&t.id===n[i].target)return !0;return !1;}(i[s],u,e)||!0===a[c]){for(var f=i[s].children,h=!1,l=0;l<f.length;++l){var d=r.get(f[l].id);if(t[d]===t[c]&&!0!==a[d]){i.push(n[d]),a[d]=!0,h=!0;break;}}for(var p=0;!h&&(a[p]||(i.push(n[p]),a[p]=!0,h=!0),++p!==o););}else i.push(u),a[c]=!0,s++;}),i;},degreeOrdering:function(){var t=this.nodes,e=[],n=this.degrees;return t.forEach(function(t,r){t.degree=n[r],e.push(t);}),e.sort(r),e;}});},function(t,e,n){var r=n(24),i=n(1),a=n(168);r.registerLayout("mds",{getDefaultCfg:function(){return {center:[0,0],linkDistance:50};},execute:function(){var t=this.nodes,e=this.edges,n=this.center;if(0!==t.length){1===t.length&&(t[0].x=n[0],t[0].y=n[1]);var r=this.linkDistance,a=i.getAdjMatrix({nodes:t,edges:e},!1),o=i.floydWarshall(a);this.handleInfinity(o),this.distances=o;var s=i.scaleMatrix(o,r);this.scaledDistances=s;var u=this.runMDS();this.positions=u,u.forEach(function(e,r){t[r].x=e[0]+n[0],t[r].y=e[1]+n[1];});}},runMDS:function(){var t=this.scaledDistances,e=a.mul(-.5,a.pow(t,2));function n(t){return a.div(a.add.apply(null,t),t.length);}for(var r=n(e),i=n(a.transpose(e)),o=n(r),s=0;s<e.length;++s)for(var u=0;u<e[0].length;++u)e[s][u]+=o-r[s]-i[u];var c=a.svd(e),f=a.sqrt(c.S);return c.U.map(function(t){return a.mul(t,f).splice(0,2);});},handleInfinity:function(t){var e=-999999;t.forEach(function(t){t.forEach(function(t){t!==1/0&&e<t&&(e=t);});}),t.forEach(function(n,r){n.forEach(function(n,i){n===1/0&&(t[r][i]=e);});});}});},function(t,e,n){n(24).registerLayout("random",{getDefaultCfg:function(){return {center:[0,0],height:300,width:300};},execute:function(){var t=this.nodes,e=this.center,n=this.width||window.innerHeight,r=this.height||window.innerWidth;t.forEach(function(t){t.x=.9*(Math.random()-.5)*n+e[0],t.y=.9*(Math.random()-.5)*r+e[1];});}});},function(t,e,n){n.r(e),n.d(e,"getBBoxFromPoint",function(){return i;}),n.d(e,"getBBoxFromPoints",function(){return a;}),n.d(e,"isBBoxesOverlapping",function(){return o;}),n.d(e,"filterConnectPoints",function(){return s;}),n.d(e,"simplifyPolyline",function(){return u;}),n.d(e,"getSimplePolyline",function(){return c;}),n.d(e,"getExpandedBBox",function(){return f;}),n.d(e,"isHorizontalPort",function(){return h;}),n.d(e,"getExpandedBBoxPoint",function(){return l;}),n.d(e,"mergeBBox",function(){return d;}),n.d(e,"getPointsFromBBox",function(){return p;}),n.d(e,"isPointOutsideBBox",function(){return g;}),n.d(e,"getBBoxXCrossPoints",function(){return v;}),n.d(e,"getBBoxYCrossPoints",function(){return m;}),n.d(e,"getBBoxCrossPointsByPoint",function(){return y;}),n.d(e,"distance",function(){return x;}),n.d(e,"_costByPoints",function(){return b;}),n.d(e,"heuristicCostEstimate",function(){return w;}),n.d(e,"reconstructPath",function(){return _;}),n.d(e,"removeFrom",function(){return M;}),n.d(e,"isSegmentsIntersected",function(){return S;}),n.d(e,"isSegmentCrossingBBox",function(){return P;}),n.d(e,"getNeighborPoints",function(){return A;}),n.d(e,"pathFinder",function(){return k;}),n.d(e,"isBending",function(){return C;}),n.d(e,"getBorderRadiusPoints",function(){return E;}),n.d(e,"getPathWithBorderRadiusByPolyline",function(){return I;}),n.d(e,"getPolylinePoints",function(){return N;});var r=n(1),i=function(t){var e=t.x,n=t.y;return {centerX:e,centerY:n,minX:e,minY:n,maxX:e,maxY:n,height:0,width:0};},a=function(t){void 0===t&&(t=[]);var e=[],n=[];t.forEach(function(t){e.push(t.x),n.push(t.y);});var r=Math.min.apply(Math,e),i=Math.max.apply(Math,e),a=Math.min.apply(Math,n),o=Math.max.apply(Math,n);return {centerX:(r+i)/2,centerY:(a+o)/2,maxX:i,maxY:o,minX:r,minY:a,height:o-a,width:i-r};},o=function(t,e){return 2*Math.abs(t.centerX-e.centerX)<t.width+e.width&&2*Math.abs(t.centerY-e.centerY)<t.height+e.height;},s=function(t){var e=[],n={};return t.forEach(function(t){var e=t.id=t.x+"-"+t.y;n[e]=t;}),r.each(n,function(t){e.push(t);}),e;},u=function(t){return t=s(t);},c=function(t,e){return [t,{x:t.x,y:e.y},e];},f=function(t,e){return 0===t.width&&0===t.height?t:{centerX:t.centerX,centerY:t.centerY,minX:t.minX-e,minY:t.minY-e,maxX:t.maxX+e,maxY:t.maxY+e,height:t.height+2*e,width:t.width+2*e};},h=function(t,e){var n=Math.abs(t.x-e.centerX),r=Math.abs(t.y-e.centerY);return n/e.width>r/e.height;},l=function(t,e){return h(e,t)?{x:e.x>t.centerX?t.maxX:t.minX,y:e.y}:{x:e.x,y:e.y>t.centerY?t.maxY:t.minY};},d=function(t,e){var n=Math.min(t.minX,e.minX),r=Math.min(t.minY,e.minY),i=Math.max(t.maxX,e.maxX),a=Math.max(t.maxY,e.maxY);return {centerX:(n+i)/2,centerY:(r+a)/2,minX:n,minY:r,maxX:i,maxY:a,height:a-r,width:i-n};},p=function(t){var e=t.minX,n=t.minY,r=t.maxX,i=t.maxY;return [{x:e,y:n},{x:r,y:n},{x:r,y:i},{x:e,y:i}];},g=function(t,e){var n=t.x,r=t.y;return n<e.minX||n>e.maxX||r<e.minY||r>e.maxY;},v=function(t,e){return e<t.minX||e>t.maxX?[]:[{x:e,y:t.minY},{x:e,y:t.maxY}];},m=function(t,e){return e<t.minY||e>t.maxY?[]:[{x:t.minX,y:e},{x:t.maxX,y:e}];},y=function(t,e){return v(t,e.x).concat(m(t,e.y));},x=function(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y);},b=function(t,e){var n=0;return e.forEach(function(e){e&&(t.x===e.x&&(n+=-2),t.y===e.y&&(n+=-2));}),n;},w=function(t,e,n,r,i){return x(t,e)+x(t,n)+b(t,[e,n,r,i]);},_=function t(e,n,r,i,a){void 0===a&&(a=0),e.unshift(n[i]),r[i]&&r[i]!==i&&a<=100&&t(e,n,r,r[i],a+1);},M=function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1);},S=function(t,e,n,r){var i=e.x-t.x,a=e.y-t.y,o=r.x-n.x,s=r.y-n.y,u=(-a*(t.x-n.x)+i*(t.y-n.y))/(-o*a+i*s),c=(o*(t.y-n.y)-s*(t.x-n.x))/(-o*a+i*s);return u>=0&&u<=1&&c>=0&&c<=1;},P=function(t,e,n){if(n.width===n.height===0)return !1;var r=p(n),i=r[0],a=r[1],o=r[2],s=r[3];return S(t,e,i,a)||S(t,e,i,s)||S(t,e,a,o)||S(t,e,o,s);},A=function(t,e,n,r){var i=[];return t.forEach(function(t){t!==e&&(t.x!==e.x&&t.y!==e.y||P(t,e,n)||P(t,e,r)||i.push(t));}),s(i);},k=function(t,e,n,r,i,a,o){var s=[],u=[e],c={},f={},h={};f[e.id]=0,h[e.id]=w(e,n,e);var l={};t.forEach(function(t){l[t.id]=t;});for(var d=function(){var d=void 0,p=1/0;if(u.forEach(function(t){h[t.id]<p&&(p=h[t.id],d=t);}),d===n){var g=[];return _(g,l,c,n.id),{v:g};}M(u,d),s.push(d),A(t,d,r,i).forEach(function(t){if(-1===s.indexOf(t)){-1===u.indexOf(t)&&u.push(t);var r=h[d.id]+x(d,t);f[t.id]&&r>=f[t.id]||(c[t.id]=d.id,f[t.id]=r,h[t.id]=f[t.id]+w(t,n,e,a,o));}});};u.length;){var p=d();if("object"==typeof p)return p.v;}return [e,n];},C=function(t,e,n){return !(t.x===e.x===n.x||t.y===e.y===n.y);},E=function(t,e,n,r){var i=x(t,e),a=x(n,e);return i<r&&(r=i),a<r&&(r=a),[{x:e.x-r/i*(e.x-t.x),y:e.y-r/i*(e.y-t.y)},{x:e.x-r/a*(e.x-n.x),y:e.y-r/a*(e.y-n.y)}];},I=function(t,e){var n=[],r=t[0];return n.push("M"+r.x+" "+r.y),t.forEach(function(r,i){var a=t[i+1],o=t[i+2];if(a&&o){if(C(r,a,o)){var s=E(r,a,o,e),u=s[0],c=s[1];n.push("L"+u.x+" "+u.y),n.push("Q"+a.x+" "+a.y+" "+c.x+" "+c.y),n.push("L"+c.x+" "+c.y);}else n.push("L"+a.x+" "+a.y);}else a&&n.push("L"+a.x+" "+a.y);}),n.join("");},N=function(t,e,n,r,h){var v=n&&n.getBBox()?n.getBBox():i(t),m=r&&r.getBBox()?r.getBBox():i(e);if(o(v,m))return u(c(t,e));var x=f(v,h),b=f(m,h);if(o(x,b))return u(c(t,e));var w=l(x,t),_=l(b,e),M=a([w,_]),S=d(x,b),P=d(x,M),A=d(b,M),C=[];C=(C=C.concat(p(P))).concat(p(A));var E={x:(t.x+e.x)/2,y:(t.y+e.y)/2};[M,P,A].forEach(function(t){C=C.concat(y(t,E).filter(function(t){return g(t,x)&&g(t,b);}));}),[{x:w.x,y:_.y},{x:_.x,y:w.y}].forEach(function(t){g(t,x)&&g(t,b)&&C.push(t);}),C.unshift(w),C.push(_),C=s(C);var I=k(C,w,_,v,m,t,e);return I.unshift(t),I.push(e),u(I);};},function(t,e,n){var r=n(20),i=n(1),a=n(414),o=n(10);r.registerEdge("polyline",{options:{color:"#999",style:{stroke:"#333",lineWidth:1,radius:0,offset:5,x:0,y:0},labelCfg:{style:{fill:"#595959"}},stateStyles:{hover:{lineWidth:3},selected:{lineWidth:5}}},shapeType:"polyline",labelPosition:"center",drawShape:function(t,e){var n=this.getShapeStyle(t);return e.addShape("path",{className:"edge-shape",attrs:n});},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,a={stroke:t.color},s=i.deepMix({},n,r,a,t.style);t=this.getPathPoints(t),this.radius=s.radius,this.offset=s.offset;var u=t.startPoint,c=t.endPoint,f=this.getControlPoints(t),h=[u];f&&(h=h.concat(f)),h.push(c);var l=t.sourceNode,d=t.targetNode,p={radius:s.radius};f||(p={source:l,target:d,offset:s.offset,radius:s.radius});var g=this.getPath(h,p);return i.deepMix({},o.defaultEdge.style,s,{lineWidth:t.size},{path:g});},getPath:function(t,e){var n=e.source,r=e.target,o=e.offset,s=e.radius;if(!o){var u=[];return s?u=a.getPathWithBorderRadiusByPolyline(t,s):i.each(t,function(t,e){0===e?u.push(["M",t.x,t.y]):u.push(["L",t.x,t.y]);}),u;}if(s){var c=a.simplifyPolyline(a.getPolylinePoints(t[0],t[t.length-1],n,r,o));return a.getPathWithBorderRadiusByPolyline(c,s);}var f=a.getPolylinePoints(t[0],t[t.length-1],n,r,o);return i.pointsToPolygon(f);},update:function(t,e){var n=e.getContainer(),r=this.itemType+"-shape",i=n.findByClassName(r);t.style||(t.style={});var a=i.attr();t.style.radius=t.style.radius||a.radius,t.style.offset=t.style.offset||a.offset;var o=this.getShapeStyle(t);i.attr(o);var s=this.itemType+"-label",u=n.findByClassName(s);if(t.label){if(u){var c=t.labelCfg||{},f=this.getLabelStyle(t,c,n);u.resetMatrix(),u.attr(f);}else{this.drawLabel(t,n).set("className",s);}}else u&&u.remove();}},"single-line");},function(t,e,n){n(415);},function(t,e,n){!function(e,n){t.exports=n();}(0,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r});},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=62);}([function(t,e,n){var r=n(12),i={};r.merge(i,r,{mixin:function(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};i.each(e,function(e){i.augment(t,e);var a=e[n];a&&i.merge(r,a);}),t[n]=i.merge(r,t[n]);}}}),t.exports=i;},function(t,e,n){var r=n(0),i=n(96),a=n(38),o=n(19),s=["zIndex","capture","visible"],u=function t(e){t.superclass.constructor.call(this,e);};u.ATTRS={},r.extend(u,a);var c={matrix:"matrix",path:"path",points:"points",lineDash:"lineDash"};r.augment(u,i,{isShape:!0,drawInner:function(t){var e=this._attrs;this.createPath(t);var n=t.globalAlpha;if(this.hasFill()){var i=e.fillOpacity;r.isNil(i)||1===i?t.fill():(t.globalAlpha=i,t.fill(),t.globalAlpha=n);}if(this.hasStroke()&&this._attrs.lineWidth>0){var a=e.strokeOpacity;r.isNil(a)||1===a||(t.globalAlpha=a),t.stroke();}this.afterPath(t);},afterPath:function(){},isHitBox:function(){return !0;},isHit:function(t,e){var n=[t,e,1];if(this.invert(n),this.isHitBox()){var r=this.getBBox();if(r&&!o.box(r.minX,r.maxX,r.minY,r.maxY,n[0],n[1]))return !1;}var i=this._attrs.clip;return i?(i.invert(n,this.get("canvas")),!!i.isPointInPath(n[0],n[1])&&this.isPointInPath(n[0],n[1])):this.isPointInPath(n[0],n[1]);},calculateBox:function(){return null;},getHitLineWidth:function(){var t=this._attrs,e=t.lineAppendWidth||0;return (t.lineWidth||0)+e;},clearTotalMatrix:function(){this._cfg.totalMatrix=null,this._cfg.region=null;},clearBBox:function(){this._cfg.box=null,this._cfg.region=null;},getBBox:function(){var t=this._cfg.box;return t||((t=this.calculateBox())&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this._cfg.box=t),t;},clone:function(){var t=this,e=null,n=t._attrs,i={};return r.each(n,function(t,e){c[e]&&r.isArray(n[e])?i[e]=function(t){for(var e=[],n=0;n<t.length;n++)r.isArray(t[n])?e.push([].concat(t[n])):e.push(t[n]);return e;}(n[e]):i[e]=n[e];}),e=new t.constructor({attrs:i}),r.each(s,function(n){e._cfg[n]=t._cfg[n];}),e;}}),t.exports=u;},function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]";};},function(t,e,n){var r=n(25);n.d(e,"a",function(){return r.e;}),n.d(e,"f",function(){return r.g;}),n.d(e,"d",function(){return r.f;});var i=n(113);n.d(e,"e",function(){return i.a;}),n.d(e,"c",function(){return i.b;});var a=n(114);n.d(e,"b",function(){return a.a;});},function(t,e,n){var r=n(0),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi;t.exports={parseRadius:function(t){var e=0,n=0,i=0,a=0;return r.isArray(t)?1===t.length?e=n=i=a=t[0]:2===t.length?(e=i=t[0],n=a=t[1]):3===t.length?(e=t[0],n=a=t[1],i=t[2]):(e=t[0],n=t[1],i=t[2],a=t[3]):e=n=i=a=t,{r1:e,r2:n,r3:i,r4:a};},parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i;}r.each(e,function(t,n){isNaN(t)||(e[n]=+t);}),t[n]=e;}),t):void 0;}};},function(t,e,n){e.c=function(t,e){var n=e-t;return n?i(t,n>180||n<-180?n-360*Math.round(n/360):n):Object(r.a)(isNaN(t)?e:t);},e.b=function(t){return 1==(t=+t)?a:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n);};}(e,n,t):Object(r.a)(isNaN(e)?n:e);};},e.a=a;var r=n(57);function i(t,e){return function(n){return t+n*e;};}function a(t,e){var n=e-t;return n?i(t,n):Object(r.a)(isNaN(t)?e:t);}},function(t,e,n){var r=n(2),i=Array.isArray?Array.isArray:function(t){return r(t,"Array");};t.exports=i;},function(t,e,n){var r=n(0).vec2;t.exports={at:function(t,e,n){return (e-t)*n+t;},pointDistance:function(t,e,n,i,a,o){var s=[n-t,i-e];if(r.exactEquals(s,[0,0]))return NaN;var u=[-s[1],s[0]];r.normalize(u,u);var c=[a-t,o-e];return Math.abs(r.dot(c,u));},box:function(t,e,n,r,i){var a=i/2,o=Math.min(t,n),s=Math.max(t,n);return {minX:o-a,minY:Math.min(e,r)-a,maxX:s+a,maxY:Math.max(e,r)+a};},len:function(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));}};},function(t,e,n){var r=n(0);function i(t,e,n,r){return {x:Math.cos(r)*n+t,y:Math.sin(r)*n+e};}function a(t,e,n,r){var i,a;return r?t<e?(i=e-t,a=2*Math.PI-n+t):t>n&&(i=2*Math.PI-t+e,a=t-n):(i=t-e,a=n-t),i>a?n:e;}function o(t,e,n,i){var o=0;return n-e>=2*Math.PI&&(o=2*Math.PI),e=r.mod(e,2*Math.PI),n=r.mod(n,2*Math.PI)+o,t=r.mod(t,2*Math.PI),i?e>=n?t>n&&t<e?t:a(t,n,e,!0):t<e||t>n?t:a(t,e,n):e<=n?e<t&&t<n?t:a(t,e,n,!0):t>e||t<n?t:a(t,n,e);}function s(t,e,n,i,a,s,u,c,f){var h=[u,c],l=[t,e],d=r.vec2.subtract([],h,l),p=r.vec2.angleTo([1,0],d);p=o(p,i,a,s);var g=[n*Math.cos(p)+t,n*Math.sin(p)+e];return f&&(f.x=g[0],f.y=g[1]),r.vec2.distance(g,h);}t.exports={nearAngle:o,projectPoint:function(t,e,n,r,i,a,o,u){var c={};return s(t,e,n,r,i,a,o,u,c),c;},pointDistance:s,box:function(t,e,n,a,s,u){var c=Math.PI/2,f=Math.PI,h=3*Math.PI/2,l=[],d=o(0,a,s,u);0===d&&l.push(i(t,e,n,0)),(d=o(c,a,s,u))===c&&l.push(i(t,e,n,c)),(d=o(f,a,s,u))===f&&l.push(i(t,e,n,f)),(d=o(h,a,s,u))===h&&l.push(i(t,e,n,h)),l.push(i(t,e,n,a)),l.push(i(t,e,n,s));var p=1/0,g=-1/0,v=1/0,m=-1/0;return r.each(l,function(t){p>t.x&&(p=t.x),g<t.x&&(g=t.x),v>t.y&&(v=t.y),m<t.y&&(m=t.y);}),{minX:p,minY:v,maxX:g,maxY:m};}};},function(t,e,n){var r=n(4),i=n(10),a=Math.PI,o=Math.sin,s=Math.cos,u=Math.atan2,c=10,f=a/3;function h(t,e,n,r,i,h,l){var d,p,g,v,m,y,x;if(!e.fill){var b=e.arrowLength||c,w=e.arrowAngle?e.arrowAngle*a/180:f;x=u(r-h,n-i),m=Math.abs(e.lineWidth*s(x))/2,y=Math.abs(e.lineWidth*o(x))/2,l&&(m=-m,y=-y),d=i+b*s(x+w/2),p=h+b*o(x+w/2),g=i+b*s(x-w/2),v=h+b*o(x-w/2),t.beginPath(),t.moveTo(d-m,p-y),t.lineTo(i-m,h-y),t.lineTo(g-m,v-y),t.moveTo(i-m,h-y),t.lineTo(i+m,h+y),t.moveTo(i,h),t.stroke();}}function l(t,e,n,a,u,c,f){var h=f?e.startArrow:e.endArrow,l=h.d,d=u-n,p=c-a,g=Math.atan2(p,d),v=function(t){var e,n=[],a=r.parsePath(t.path);if(!Array.isArray(a)||0===a.length||"M"!==a[0][0]&&"m"!==a[0][0])return !1;for(var o=a.length,s=0;s<a.length;s++){var u=a[s];e=new i(u,e,s===o-1),n.push(e);}return n;}(h);if(v){l&&(u-=s(g)*l,c-=o(g)*l),t.save(),t.beginPath(),t.translate(u,c),t.rotate(g);for(var m=0;m<v.length;m++)v[m].draw(t);t.setTransform(1,0,0,1,0,0),t.fillStyle=t.strokeStyle,t.fill(),t.restore();}}t.exports={addStartArrow:function(t,e,n,r,i,a){"object"==typeof e.startArrow?l(t,e,n,r,i,a,!0):e.startArrow&&h(t,e,n,r,i,a,!0);},addEndArrow:function(t,e,n,r,i,a){"object"==typeof e.endArrow?l(t,e,n,r,i,a,!1):e.endArrow&&h(t,e,n,r,i,a,!1);},getShortenOffset:function(t,e,n,r,i){var a=Math.atan2(r-e,n-t);return {dx:s(a)*i,dy:o(a)*i};}};},function(t,e,n){var r=n(0),i=n(19),a=n(20),o=n(40),s=n(41),u=r.vec3,c=r.mat3,f=["m","l","c","a","q","h","v","t","s","z"];function h(t,e,n){return {x:n.x+t,y:n.y+e};}function l(t,e){return {x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)};}function d(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]);}function p(t,e){return (t[0]*e[0]+t[1]*e[1])/(d(t)*d(e));}function g(t,e){return (t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(p(t,e));}var v=function(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e);};r.augment(v,{init:function(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var i,a,o,s,u=f.indexOf(n)>=0,c=u?n.toUpperCase():n,d=t,v=e.endPoint,m=d[1],y=d[2];switch(c){default:break;case"M":s=u?h(m,y,v):{x:m,y:y},this.command="M",this.params=[v,s],this.subStart=s,this.endPoint=s;break;case"L":s=u?h(m,y,v):{x:m,y:y},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"H":s=u?h(m,0,v):{x:m,y:v.y},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"V":s=u?h(0,m,v):{x:v.x,y:m},this.command="L",this.params=[v,s],this.subStart=e.subStart,this.endPoint=s,this.endTangent=function(){return [s.x-v.x,s.y-v.y];},this.startTangent=function(){return [v.x-s.x,v.y-s.y];};break;case"Q":u?(i=h(m,y,v),a=h(d[3],d[4],v)):(i={x:m,y:y},a={x:d[3],y:d[4]}),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-i.x,a.y-i.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];};break;case"T":a=u?h(m,y,v):{x:m,y:y},"Q"===e.command?(i=l(e.params[1],v),this.command="Q",this.params=[v,i,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-i.x,a.y-i.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];}):(this.command="TL",this.params=[v,a],this.subStart=e.subStart,this.endPoint=a,this.endTangent=function(){return [a.x-v.x,a.y-v.y];},this.startTangent=function(){return [v.x-a.x,v.y-a.y];});break;case"C":u?(i=h(m,y,v),a=h(d[3],d[4],v),o=h(d[5],d[6],v)):(i={x:m,y:y},a={x:d[3],y:d[4]},o={x:d[5],y:d[6]}),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];};break;case"S":u?(a=h(m,y,v),o=h(d[3],d[4],v)):(a={x:m,y:y},o={x:d[3],y:d[4]}),"C"===e.command?(i=l(e.params[2],v),this.command="C",this.params=[v,i,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-i.x,v.y-i.y];}):(this.command="SQ",this.params=[v,a,o],this.subStart=e.subStart,this.endPoint=o,this.endTangent=function(){return [o.x-a.x,o.y-a.y];},this.startTangent=function(){return [v.x-a.x,v.y-a.y];});break;case"A":var x=m,b=y,w=d[3],_=d[4],M=d[5];s=u?h(d[6],d[7],v):{x:d[6],y:d[7]},this.command="A";var S=function(t,e,n,i,a,o,s){var u=r.mod(r.toRadian(s),2*Math.PI),c=t.x,f=t.y,h=e.x,l=e.y,d=Math.cos(u)*(c-h)/2+Math.sin(u)*(f-l)/2,v=-1*Math.sin(u)*(c-h)/2+Math.cos(u)*(f-l)/2,m=d*d/(a*a)+v*v/(o*o);m>1&&(a*=Math.sqrt(m),o*=Math.sqrt(m));var y=a*a*(v*v)+o*o*(d*d),x=Math.sqrt((a*a*(o*o)-y)/y);n===i&&(x*=-1),isNaN(x)&&(x=0);var b=x*a*v/o,w=x*-o*d/a,_=(c+h)/2+Math.cos(u)*b-Math.sin(u)*w,M=(f+l)/2+Math.sin(u)*b+Math.cos(u)*w,S=g([1,0],[(d-b)/a,(v-w)/o]),P=[(d-b)/a,(v-w)/o],A=[(-1*d-b)/a,(-1*v-w)/o],k=g(P,A);return p(P,A)<=-1&&(k=Math.PI),p(P,A)>=1&&(k=0),0===i&&k>0&&(k-=2*Math.PI),1===i&&k<0&&(k+=2*Math.PI),[t,_,M,a,o,S,k,u,i];}(v,s,_,M,x,b,w);this.params=S;var P=e.subStart;this.subStart=P,this.endPoint=s;var A=S[5]%(2*Math.PI);r.isNumberEqual(A,2*Math.PI)&&(A=0);var k=S[6]%(2*Math.PI);r.isNumberEqual(k,2*Math.PI)&&(k=0);var C=.001;this.startTangent=function(){0===M&&(C*=-1);var t=S[3]*Math.cos(A-C)+S[1],e=S[4]*Math.sin(A-C)+S[2];return [t-P.x,e-P.y];},this.endTangent=function(){var t=S[6];t-2*Math.PI<1e-4&&(t=0);var e=S[3]*Math.cos(A+t+C)+S[1],n=S[4]*Math.sin(A+t-C)+S[2];return [v.x-e,v.y-n];};break;case"Z":this.command="Z",this.params=[v,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart;}},isInside:function(t,e,n){var r=this.command,a=this.params,o=this.box;if(o&&!i.box(o.minX,o.maxX,o.minY,o.maxY,t,e))return !1;switch(r){default:break;case"M":return !1;case"TL":case"L":case"Z":return i.line(a[0].x,a[0].y,a[1].x,a[1].y,n,t,e);case"SQ":case"Q":return i.quadraticline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,n,t,e);case"C":return i.cubicline(a[0].x,a[0].y,a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y,n,t,e);case"A":var s=a,f=s[1],h=s[2],l=s[3],d=s[4],p=s[5],g=s[6],v=s[7],m=s[8],y=l>d?l:d,x=l>d?1:l/d,b=l>d?d/l:1;s=[t,e,1];var w=[1,0,0,0,1,0,0,0,1];return c.translate(w,w,[-f,-h]),c.rotate(w,w,-v),c.scale(w,w,[1/x,1/b]),u.transformMat3(s,s,w),i.arcline(0,0,y,p,p+g,1-m,n,s[0],s[1]);}return !1;},draw:function(t){var e,n,r,i=this.command,a=this.params;switch(i){default:break;case"M":t.moveTo(a[1].x,a[1].y);break;case"TL":case"L":t.lineTo(a[1].x,a[1].y);break;case"SQ":case"Q":e=a[1],n=a[2],t.quadraticCurveTo(e.x,e.y,n.x,n.y);break;case"C":e=a[1],n=a[2],r=a[3],t.bezierCurveTo(e.x,e.y,n.x,n.y,r.x,r.y);break;case"A":var o=a,s=o[1],u=o[2],c=o[3],f=o[4],h=o[5],l=o[6],d=o[7],p=o[8],g=c>f?c:f,v=c>f?1:c/f,m=c>f?f/c:1;t.translate(s,u),t.rotate(d),t.scale(v,m),t.arc(0,0,g,h,h+l,1-p),t.scale(1/v,1/m),t.rotate(-d),t.translate(-s,-u);break;case"Z":t.closePath();}},shortenDraw:function(t,e,n){var r,i,a,o=this.command,s=this.params;switch(o){default:break;case"M":t.moveTo(s[1].x-e,s[1].y-n);break;case"TL":case"L":t.lineTo(s[1].x-e,s[1].y-n);break;case"SQ":case"Q":r=s[1],i=s[2],t.quadraticCurveTo(r.x,r.y,i.x-e,i.y-n);break;case"C":r=s[1],i=s[2],a=s[3],t.bezierCurveTo(r.x,r.y,i.x,i.y,a.x-e,a.y-n);break;case"A":var u=s,c=u[1],f=u[2],h=u[3],l=u[4],d=u[5],p=u[6],g=u[7],v=u[8],m=h>l?h:l,y=h>l?1:h/l,x=h>l?l/h:1;t.translate(c,f),t.rotate(g),t.scale(y,x),t.arc(0,0,m,d,d+p,1-v),t.scale(1/y,1/x),t.rotate(-g),t.translate(-c,-f);break;case"Z":t.closePath();}},getBBox:function(t){var e,n,r,i,u=t/2,c=this.params;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(c[0].x,c[1].x)-u,maxX:Math.max(c[0].x,c[1].x)+u,minY:Math.min(c[0].y,c[1].y)-u,maxY:Math.max(c[0].y,c[1].y)+u};break;case"SQ":case"Q":for(r=0,i=(n=o.extrema(c[0].x,c[1].x,c[2].x)).length;r<i;r++)n[r]=o.at(c[0].x,c[1].x,c[2].x,n[r]);for(n.push(c[0].x,c[2].x),r=0,i=(e=o.extrema(c[0].y,c[1].y,c[2].y)).length;r<i;r++)e[r]=o.at(c[0].y,c[1].y,c[2].y,e);e.push(c[0].y,c[2].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"C":for(r=0,i=(n=a.extrema(c[0].x,c[1].x,c[2].x,c[3].x)).length;r<i;r++)n[r]=a.at(c[0].x,c[1].x,c[2].x,c[3].x,n[r]);for(r=0,i=(e=a.extrema(c[0].y,c[1].y,c[2].y,c[3].y)).length;r<i;r++)e[r]=a.at(c[0].y,c[1].y,c[2].y,c[3].y,e[r]);n.push(c[0].x,c[3].x),e.push(c[0].y,c[3].y),this.box={minX:Math.min.apply(Math,n)-u,maxX:Math.max.apply(Math,n)+u,minY:Math.min.apply(Math,e)-u,maxY:Math.max.apply(Math,e)+u};break;case"A":var f=c,h=f[1],l=f[2],d=f[3],p=f[4],g=f[5],v=f[6],m=f[7],y=f[8],x=g,b=g+v,w=s.xExtrema(m,d,p),_=1/0,M=-1/0,S=[x,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var P=w+r;1===y?x<P&&P<b&&S.push(P):b<P&&P<x&&S.push(P);}for(r=0,i=S.length;r<i;r++){var A=s.xAt(m,d,p,h,S[r]);A<_&&(_=A),A>M&&(M=A);}var k=s.yExtrema(m,d,p),C=1/0,E=-1/0,I=[x,b];for(r=2*-Math.PI;r<=2*Math.PI;r+=Math.PI){var N=k+r;1===y?x<N&&N<b&&I.push(N):b<N&&N<x&&I.push(N);}for(r=0,i=I.length;r<i;r++){var T=s.yAt(m,d,p,l,I[r]);T<C&&(C=T),T>E&&(E=T);}this.box={minX:_-u,maxX:M+u,minY:C-u,maxY:E+u};}}}),t.exports=v;},function(t,e,n){e.a=function(t,e){return e-=t=+t,function(n){return t+e*n;};};},function(t,e,n){t.exports={isFunction:n(13),isObject:n(28),isBoolean:n(64),isNil:n(14),isString:n(29),isArray:n(6),isNumber:n(65),isEmpty:n(66),uniqueId:n(69),clone:n(30),deepMix:n(31),assign:n(16),merge:n(31),upperFirst:n(71),each:n(33),isEqual:n(73),toArray:n(34),extend:n(74),augment:n(75),remove:n(76),isNumberEqual:n(77),toRadian:n(78),toDegree:n(79),mod:n(80),clamp:n(35),createDom:n(81),modifyCSS:n(82),requestAnimationFrame:n(83),getRatio:function(){return window.devicePixelRatio?window.devicePixelRatio:2;},mat3:n(36),vec2:n(85),vec3:n(87),transform:n(89)};},function(t,e,n){var r=n(2);t.exports=function(t){return r(t,"Function");};},function(t,e){t.exports=function(t){return null===t||void 0===t;};},function(t,e){t.exports=function(t){return null!==t&&"function"!=typeof t&&isFinite(t.length);};},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n]);}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t;};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=function(t){e.ARRAY_TYPE=t;},e.toRadian=function(t){return t*i;},e.equals=function(t,e){return Math.abs(t-e)<=r*Math.max(1,Math.abs(t),Math.abs(e));};var r=e.EPSILON=1e-6;e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,e.RANDOM=Math.random;var i=Math.PI/180;},function(t,e,n){var r=n(0),i=function(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=new Date().getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e;};r.augment(i,{preventDefault:function(){this.defaultPrevented=this.cancelable&&!0;},stopPropagation:function(){this.propagationStopped=!0;},remove:function(){this.remove=!0;},clone:function(){return r.clone(this);},toString:function(){return "[Event (type="+this.type+")]";}}),t.exports=i;},function(t,e,n){var r=n(7),i=n(40),a=n(20),o=n(8);t.exports={line:function(t,e,n,i,a,o,s){var u=r.box(t,e,n,i,a);if(!this.box(u.minX,u.maxX,u.minY,u.maxY,o,s))return !1;var c=r.pointDistance(t,e,n,i,o,s);return !isNaN(c)&&c<=a/2;},polyline:function(t,e,n,r){var i=t.length-1;if(i<1)return !1;for(var a=0;a<i;a++){var o=t[a][0],s=t[a][1],u=t[a+1][0],c=t[a+1][1];if(this.line(o,s,u,c,e,n,r))return !0;}return !1;},cubicline:function(t,e,n,r,i,o,s,u,c,f,h){return a.pointDistance(t,e,n,r,i,o,s,u,f,h)<=c/2;},quadraticline:function(t,e,n,r,a,o,s,u,c){return i.pointDistance(t,e,n,r,a,o,u,c)<=s/2;},arcline:function(t,e,n,r,i,a,s,u,c){return o.pointDistance(t,e,n,r,i,a,u,c)<=s/2;},rect:function(t,e,n,r,i,a){return t<=i&&i<=t+n&&e<=a&&a<=e+r;},circle:function(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2);},box:function(t,e,n,r,i,a){return t<=i&&i<=e&&n<=a&&a<=r;}};},function(t,e,n){var r=n(0),i=r.vec2;function a(t,e,n,r,i){var a=1-i;return a*a*(a*r+3*i*n)+i*i*(i*t+3*a*e);}function o(t,e,n,r,o,s,u,c,f,h,l){var d,p,g,v,m,y,x,b,w=.005,_=1/0,M=[f,h];for(p=0;p<1;p+=.05)g=[a(t,n,o,u,p),a(e,r,s,c,p)],(v=i.squaredDistance(M,g))<_&&(d=p,_=v);_=1/0;for(var S=0;S<32&&!(w<1e-4);S++)b=d+w,g=[a(t,n,o,u,x=d-w),a(e,r,s,c,x)],v=i.squaredDistance(M,g),x>=0&&v<_?(d=x,_=v):(y=[a(t,n,o,u,b),a(e,r,s,c,b)],m=i.squaredDistance(M,y),b<=1&&m<_?(d=b,_=m):w*=.5);return l&&(l.x=a(t,n,o,u,d),l.y=a(e,r,s,c,d)),Math.sqrt(_);}function s(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;}t.exports={at:a,derivativeAt:function(t,e,n,r,i){var a=1-i;return 3*(((e-t)*a+2*(n-e)*i)*a+(r-n)*i*i);},projectPoint:function(t,e,n,r,i,a,s,u,c,f){var h={};return o(t,e,n,r,i,a,s,u,c,f,h),h;},pointDistance:o,extrema:function(t,e,n,i){var a,o,s,u=3*t-9*e+9*n-3*i,c=6*e-12*n+6*i,f=3*n-3*i,h=[];if(r.isNumberEqual(u,0))r.isNumberEqual(c,0)||(a=-f/c)>=0&&a<=1&&h.push(a);else{var l=c*c-4*u*f;r.isNumberEqual(l,0)?h.push(-c/(2*u)):l>0&&(o=(-c-(s=Math.sqrt(l)))/(2*u),(a=(-c+s)/(2*u))>=0&&a<=1&&h.push(a),o>=0&&o<=1&&h.push(o));}return h;},len:function(t,e,n,i,a,o,u,c,f){r.isNil(f)&&(f=1);for(var h=(f=f>1?1:f<0?0:f)/2,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,g=0;g<12;g++){var v=h*l[g]+h,m=s(v,t,n,a,u),y=s(v,e,i,o,c),x=m*m+y*y;p+=d[g]*Math.sqrt(x);}return h*p;}};},function(t,e,n){var r=n(0),i=n(1),a=n(4),o=n(10),s=function t(e){t.superclass.constructor.call(this,e);};s.Symbols={circle:function(t,e,n){return [["M",t,e],["m",-n,0],["a",n,n,0,1,0,2*n,0],["a",n,n,0,1,0,2*-n,0]];},square:function(t,e,n){return [["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["Z"]];},diamond:function(t,e,n){return [["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["Z"]];},triangle:function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return [["M",t-n,e+r],["L",t,e-r],["L",t+n,e+r],["z"]];},"triangle-down":function(t,e,n){var r=n*Math.sin(1/3*Math.PI);return [["M",t-n,e-r],["L",t+n,e-r],["L",t,e+r],["Z"]];}},s.ATTRS={path:null,lineWidth:1},r.extend(s,i),r.augment(s,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function(){return {x:0,y:0,lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.radius,i=this.getHitLineWidth()/2+r;return {minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},_getPath:function(){var t,e=this._attrs,n=e.x,i=e.y,a=e.radius||e.r,o=e.symbol||"circle";return (t=r.isFunction(o)?o:s.Symbols[o])?t(n,i,a):(console.warn(o+" marker is not supported."),null);},createPath:function(t){var e=this._cfg.segments;if(!e||this._cfg.hasUpdate){var n,r=a.parsePath(this._getPath());t.beginPath(),e=[];for(var i=0;i<r.length;i++){var s=r[i];n=new o(s,n,i===r.length-1),e.push(n),n.draw(t);}this._cfg.segments=e,this._cfg.hasUpdate=!1;}else{t.beginPath();for(var u=0;u<e.length;u++)e[u].draw(t);}}}),t.exports=s;},function(t,e,n){var r=n(12),i="\t\n\v\f\r   ᠎             　\u2028\u2029",a=new RegExp("([a-z])["+i+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+i+"]*,?["+i+"]*)+)","ig"),o=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+i+"]*,?["+i+"]*","ig"),s=function(t){if(!t)return null;if(typeof t==typeof[])return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(a,function(t,r,i){var a=[],s=r.toLowerCase();if(i.replace(o,function(t,e){e&&a.push(+e);}),"m"===s&&a.length>2&&(n.push([r].concat(a.splice(0,2))),s="l",r="m"===r?"l":"L"),"o"===s&&1===a.length&&n.push([r,a[0]]),"r"===s)n.push([r].concat(a));else for(;a.length>=e[s]&&(n.push([r].concat(a.splice(0,e[s]))),e[s]););}),n;},u=function(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var a=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?a[3]={x:+t[0],y:+t[1]}:i-2===r&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?a[3]=a[2]:r||(a[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y]);}return n;},c=function(t,e,n,r,i){var a=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var o=Math.PI/180,s=t+n*Math.cos(-r*o),u=t+n*Math.cos(-i*o);a=[["M",s,e+n*Math.sin(-r*o)],["A",n,n,0,+(i-r>180),0,u,e+n*Math.sin(-i*o)]];}else a=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return a;},f=function(t){if(!(t=s(t))||!t.length)return [["M",0,0]];var e,n,r=[],i=0,a=0,o=0,f=0,h=0;"M"===t[0][0]&&(o=i=+t[0][1],f=a=+t[0][2],h++,r[0]=["M",i,a]);for(var l,d,p=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=h,v=t.length;g<v;g++){if(r.push(l=[]),(e=(d=t[g])[0])!==e.toUpperCase())switch(l[0]=e.toUpperCase(),l[0]){case"A":l[1]=d[1],l[2]=d[2],l[3]=d[3],l[4]=d[4],l[5]=d[5],l[6]=+d[6]+i,l[7]=+d[7]+a;break;case"V":l[1]=+d[1]+a;break;case"H":l[1]=+d[1]+i;break;case"R":for(var m=2,y=(n=[i,a].concat(d.slice(1))).length;m<y;m++)n[m]=+n[m]+i,n[++m]=+n[m]+a;r.pop(),r=r.concat(u(n,p));break;case"O":r.pop(),(n=c(i,a,d[1],d[2])).push(n[0]),r=r.concat(n);break;case"U":r.pop(),r=r.concat(c(i,a,d[1],d[2],d[3])),l=["U"].concat(r[r.length-1].slice(-2));break;case"M":o=+d[1]+i,f=+d[2]+a;break;default:for(var x=1,b=d.length;x<b;x++)l[x]=+d[x]+(x%2?i:a);}else if("R"===e)n=[i,a].concat(d.slice(1)),r.pop(),r=r.concat(u(n,p)),l=["R"].concat(d.slice(-2));else if("O"===e)r.pop(),(n=c(i,a,d[1],d[2])).push(n[0]),r=r.concat(n);else if("U"===e)r.pop(),r=r.concat(c(i,a,d[1],d[2],d[3])),l=["U"].concat(r[r.length-1].slice(-2));else for(var w=0,_=d.length;w<_;w++)l[w]=d[w];if("O"!==(e=e.toUpperCase()))switch(l[0]){case"Z":i=+o,a=+f;break;case"H":i=l[1];break;case"V":a=l[1];break;case"M":o=l[l.length-2],f=l[l.length-1];break;default:i=l[l.length-2],a=l[l.length-1];}}return r;},h=function(t,e,n,r){return [t,e,n,r,n,r];},l=function(t,e,n,r,i,a){return [1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*a+2/3*r,i,a];},d=function(t,e){var n,r=f(t),i=e&&f(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s=[],u=[],c="",d="",p=function(t,e,n){var r,i;if(!t)return ["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,a,o,s,u,c,f){r===i&&(r+=1);var h,l,d,p,g,v=120*Math.PI/180,m=Math.PI/180*(+a||0),y=[],x=function(t,e,n){return {x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)};};if(f)l=f[0],d=f[1],p=f[2],g=f[3];else{e=(h=x(e,n,-m)).x,n=h.y,u=(h=x(u,c,-m)).x,c=h.y,e===u&&n===c&&(u+=1,c+=1);var b=(e-u)/2,w=(n-c)/2,_=b*b/(r*r)+w*w/(i*i);_>1&&(r*=_=Math.sqrt(_),i*=_);var M=r*r,S=i*i,P=(o===s?-1:1)*Math.sqrt(Math.abs((M*S-M*w*w-S*b*b)/(M*w*w+S*b*b)));p=P*r*w/i+(e+u)/2,g=P*-i*b/r+(n+c)/2,l=Math.asin(((n-g)/i).toFixed(9)),d=Math.asin(((c-g)/i).toFixed(9)),l=e<p?Math.PI-l:l,d=u<p?Math.PI-d:d,l<0&&(l=2*Math.PI+l),d<0&&(d=2*Math.PI+d),s&&l>d&&(l-=2*Math.PI),!s&&d>l&&(d-=2*Math.PI);}var A=d-l;if(Math.abs(A)>v){var k=d,C=u,E=c;d=l+v*(s&&d>l?1:-1),y=t(u=p+r*Math.cos(d),c=g+i*Math.sin(d),r,i,a,0,s,C,E,[d,k,p,g]);}A=d-l;var I=Math.cos(l),N=Math.sin(l),T=Math.cos(d),O=Math.sin(d),j=Math.tan(A/4),B=4/3*r*j,L=4/3*i*j,D=[e,n],R=[e+B*N,n-L*I],F=[u+B*O,c-L*T],Y=[u,c];if(R[0]=2*D[0]-R[0],R[1]=2*D[1]-R[1],f)return [R,F,Y].concat(y);for(var z=[],q=0,X=(y=[R,F,Y].concat(y).join().split(",")).length;q<X;q++)z[q]=q%2?x(y[q-1],y[q],m).y:x(y[q],y[q+1],m).x;return z;}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(l(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(l(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(h(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(h(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(h(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(h(e.x,e.y,e.X,e.Y));}return t;},g=function(t,e){if(t[e].length>7){t[e].shift();for(var a=t[e];a.length;)s[e]="A",i&&(u[e]="A"),t.splice(e++,0,["C"].concat(a.splice(0,6)));t.splice(e,1),n=Math.max(r.length,i&&i.length||0);}},v=function(t,e,a,o,s){t&&e&&"M"===t[s][0]&&"M"!==e[s][0]&&(e.splice(s,0,["M",o.x,o.y]),a.bx=0,a.by=0,a.x=t[s][1],a.y=t[s][2],n=Math.max(r.length,i&&i.length||0));};n=Math.max(r.length,i&&i.length||0);for(var m=0;m<n;m++){r[m]&&(c=r[m][0]),"C"!==c&&(s[m]=c,m&&(d=s[m-1])),r[m]=p(r[m],a,d),"A"!==s[m]&&"C"===c&&(s[m]="C"),g(r,m),i&&(i[m]&&(c=i[m][0]),"C"!==c&&(u[m]=c,m&&(d=u[m-1])),i[m]=p(i[m],o,d),"A"!==u[m]&&"C"===c&&(u[m]="C"),g(i,m)),v(r,i,a,o,m),v(i,r,o,a,m);var y=r[m],x=i&&i[m],b=y.length,w=i&&x.length;a.x=y[b-2],a.y=y[b-1],a.bx=parseFloat(y[b-4])||a.x,a.by=parseFloat(y[b-3])||a.y,o.bx=i&&(parseFloat(x[w-4])||o.x),o.by=i&&(parseFloat(x[w-3])||o.y),o.x=i&&x[w-2],o.y=i&&x[w-1];}return i?[r,i]:r;},p=/,?([a-z]),?/gi,g=function(t){return t.join(",").replace(p,"$1");},v=function(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;},m=function(t,e,n,r,i,a,o,s,u){null===u&&(u=1);for(var c=(u=u>1?1:u<0?0:u)/2,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],h=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],l=0,d=0;d<12;d++){var p=c*f[d]+c,g=v(p,t,n,i,o),m=v(p,e,r,a,s),y=g*g+m*m;l+=h[d]*Math.sqrt(y);}return c*l;},y=function(t,e,n,r,i,a,o,s){if(!(Math.max(t,n)<Math.min(i,o)||Math.min(t,n)>Math.max(i,o)||Math.max(e,r)<Math.min(a,s)||Math.min(e,r)>Math.max(a,s))){var u=(t-n)*(a-s)-(e-r)*(i-o);if(u){var c=((t*r-e*n)*(i-o)-(t-n)*(i*s-a*o))/u,f=((t*r-e*n)*(a-s)-(e-r)*(i*s-a*o))/u,h=+c.toFixed(2),l=+f.toFixed(2);if(!(h<+Math.min(t,n).toFixed(2)||h>+Math.max(t,n).toFixed(2)||h<+Math.min(i,o).toFixed(2)||h>+Math.max(i,o).toFixed(2)||l<+Math.min(e,r).toFixed(2)||l>+Math.max(e,r).toFixed(2)||l<+Math.min(a,s).toFixed(2)||l>+Math.max(a,s).toFixed(2)))return {x:c,y:f};}}},x=function(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height;},b=function(t,e,n,r,i){if(i)return [["M",+t+ +i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]];var a=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return a.parsePathArray=g,a;},w=function(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:b(t,e,n,r),vb:[t,e,n,r].join(" ")};},_=function(t,e,n,i,a,o,s,u){r.isArray(t)||(t=[t,e,n,i,a,o,s,u]);var c=function(t,e,n,r,i,a,o,s){for(var u,c,f,h,l=[],d=[[],[]],p=0;p<2;++p)if(0===p?(c=6*t-12*n+6*i,u=-3*t+9*n-9*i+3*o,f=3*n-3*t):(c=6*e-12*r+6*a,u=-3*e+9*r-9*a+3*s,f=3*r-3*e),Math.abs(u)<1e-12){if(Math.abs(c)<1e-12)continue;(h=-f/c)>0&&h<1&&l.push(h);}else{var g=c*c-4*f*u,v=Math.sqrt(g);if(!(g<0)){var m=(-c+v)/(2*u);m>0&&m<1&&l.push(m);var y=(-c-v)/(2*u);y>0&&y<1&&l.push(y);}}for(var x,b=l.length,w=b;b--;)x=1-(h=l[b]),d[0][b]=x*x*x*t+3*x*x*h*n+3*x*h*h*i+h*h*h*o,d[1][b]=x*x*x*e+3*x*x*h*r+3*x*h*h*a+h*h*h*s;return d[0][w]=t,d[1][w]=e,d[0][w+1]=o,d[1][w+1]=s,d[0].length=d[1].length=w+2,{min:{x:Math.min.apply(0,d[0]),y:Math.min.apply(0,d[1])},max:{x:Math.max.apply(0,d[0]),y:Math.max.apply(0,d[1])}};}.apply(null,t);return w(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y);},M=function(t,e,n,r,i,a,o,s,u){var c=1-u,f=Math.pow(c,3),h=Math.pow(c,2),l=u*u,d=l*u,p=t+2*u*(n-t)+l*(i-2*n+t),g=e+2*u*(r-e)+l*(a-2*r+e),v=n+2*u*(i-n)+l*(o-2*i+n),m=r+2*u*(a-r)+l*(s-2*a+r);return {x:f*t+3*h*u*n+3*c*u*u*i+d*o,y:f*e+3*h*u*r+3*c*u*u*a+d*s,m:{x:p,y:g},n:{x:v,y:m},start:{x:c*t+u*n,y:c*e+u*r},end:{x:c*i+u*o,y:c*a+u*s},alpha:90-180*Math.atan2(p-v,g-m)/Math.PI};},S=function(t,e,n){if(!function(t,e){return t=w(t),e=w(e),x(e,t.x,t.y)||x(e,t.x2,t.y)||x(e,t.x,t.y2)||x(e,t.x2,t.y2)||x(t,e.x,e.y)||x(t,e.x2,e.y)||x(t,e.x,e.y2)||x(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y);}(_(t),_(e)))return n?0:[];for(var r=~~(m.apply(0,t)/8),i=~~(m.apply(0,e)/8),a=[],o=[],s={},u=n?0:[],c=0;c<r+1;c++){var f=M.apply(0,t.concat(c/r));a.push({x:f.x,y:f.y,t:c/r});}for(var h=0;h<i+1;h++){var l=M.apply(0,e.concat(h/i));o.push({x:l.x,y:l.y,t:h/i});}for(var d=0;d<r;d++)for(var p=0;p<i;p++){var g=a[d],v=a[d+1],b=o[p],S=o[p+1],P=Math.abs(v.x-g.x)<.001?"y":"x",A=Math.abs(S.x-b.x)<.001?"y":"x",k=y(g.x,g.y,v.x,v.y,b.x,b.y,S.x,S.y);if(k){if(s[k.x.toFixed(4)]===k.y.toFixed(4))continue;s[k.x.toFixed(4)]=k.y.toFixed(4);var C=g.t+Math.abs((k[P]-g[P])/(v[P]-g[P]))*(v.t-g.t),E=b.t+Math.abs((k[A]-b[A])/(S[A]-b[A]))*(S.t-b.t);C>=0&&C<=1&&E>=0&&E<=1&&(n?u++:u.push({x:k.x,y:k.y,t1:C,t2:E}));}}return u;};function P(t,e){var n=[],r=[];return t.length&&function t(e,i){if(1===e.length)n.push(e[0]),r.push(e[0]);else{for(var a=[],o=0;o<e.length-1;o++)0===o&&n.push(e[0]),o===e.length-2&&r.push(e[o+1]),a[o]=[(1-i)*e[o][0]+i*e[o+1][0],(1-i)*e[o][1]+i*e[o+1][1]];t(a,i);}}(t,e),{left:n,right:r.reverse()};}var A=function(t,e,n){if(1===n)return [[].concat(t)];var r=[];if("L"===e[0]||"C"===e[0]||"Q"===e[0])r=r.concat(function(t,e,n){var r=[[t[1],t[2]]];n=n||2;var i=[];"A"===e[0]?(r.push(e[6]),r.push(e[7])):"C"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]]),r.push([e[5],e[6]])):"S"===e[0]||"Q"===e[0]?(r.push([e[1],e[2]]),r.push([e[3],e[4]])):r.push([e[1],e[2]]);for(var a=r,o=1/n,s=0;s<n-1;s++){var u=P(a,o/(1-o*s));i.push(u.left),a=u.right;}return i.push(a),i.map(function(t){var e=[];return 4===t.length&&(e.push("C"),e=e.concat(t[2])),t.length>=3&&(3===t.length&&e.push("Q"),e=e.concat(t[1])),2===t.length&&e.push("L"),e=e.concat(t[t.length-1]);});}(t,e,n));else{var i=[].concat(t);"M"===i[0]&&(i[0]="L");for(var a=0;a<=n-1;a++)r.push(i);}return r;},k=function(t,e){if(t.length!==e.length)return !1;var n=!0;return r.each(t,function(t,r){if(t!==e[r])return n=!1,!1;}),n;};function C(t,e,n){var r=null,i=n;return e<i&&(i=e,r="add"),t<i&&(i=t,r="del"),{type:r,min:i};}function E(t,e,n){for(var r,i=[].concat(t),a=1/(n+1),o=I(e)[0],s=1;s<=n;s++)a*=s,0===(r=Math.floor(t.length*a))?i.unshift([o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]):i.splice(r,0,[o[0]*a+t[r][0]*(1-a),o[1]*a+t[r][1]*(1-a)]);return i;}function I(t){var e=[];switch(t[0]){case"M":case"L":e.push([t[1],t[2]]);break;case"A":e.push([t[6],t[7]]);break;case"Q":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"T":e.push([t[1],t[2]]);break;case"C":e.push([t[5],t[6]]),e.push([t[1],t[2]]),e.push([t[3],t[4]]);break;case"S":e.push([t[3],t[4]]),e.push([t[1],t[2]]);break;case"H":case"V":e.push([t[1],t[1]]);}return e;}t.exports={parsePathString:s,parsePathArray:g,pathTocurve:d,pathToAbsolute:f,catmullRomToBezier:u,rectPath:b,fillPath:function(t,e){if(1===t.length)return t;var n=t.length-1,r=e.length-1,i=n/r,a=[];if(1===t.length&&"M"===t[0][0]){for(var o=0;o<r-n;o++)t.push(t[0]);return t;}for(var s=0;s<r;s++){var u=Math.floor(i*s);a[u]=(a[u]||0)+1;}var c=a.reduce(function(e,r,i){return i===n?e.concat(t[n]):e.concat(A(t[i],t[i+1],r));},[]);return c.unshift(t[0]),"Z"!==e[r]&&"z"!==e[r]||c.push("Z"),c;},fillPathByDiff:function(t,e){var n=function(t,e){var n,r,i=t.length,a=e.length,o=0;if(0===i||0===a)return null;for(var s=[],u=0;u<=i;u++)s[u]=[],s[u][0]={min:u};for(var c=0;c<=a;c++)s[0][c]={min:c};for(var f=1;f<=i;f++){n=t[f-1];for(var h=1;h<=a;h++){r=e[h-1],o=k(n,r)?0:1;var l=s[f-1][h].min+1,d=s[f][h-1].min+1,p=s[f-1][h-1].min+o;s[f][h]=C(l,d,p);}}return s;}(t,e),r=t.length,i=e.length,a=[],o=1,s=1;if(n[r][i]!==r){for(var u=1;u<=r;u++){var c=n[u][u].min;s=u;for(var f=o;f<=i;f++)n[u][f].min<c&&(c=n[u][f].min,s=f);o=s,n[u][o].type&&a.push({index:u-1,type:n[u][o].type});}for(var h=a.length-1;h>=0;h--)o=a[h].index,"add"===a[h].type?t.splice(o,0,[].concat(t[o])):t.splice(o,1);}var l=i-(r=t.length);if(r<i)for(var d=0;d<l;d++)"z"===t[r-1][0]||"Z"===t[r-1][0]?t.splice(r-2,0,t[r-2]):t.push(t[r-1]),r+=1;return t;},formatPath:function(t,e){if(t.length<=1)return t;for(var n,r=0;r<e.length;r++)if(t[r][0]!==e[r][0])switch(n=I(t[r]),e[r][0]){case"M":t[r]=["M"].concat(n[0]);break;case"L":t[r]=["L"].concat(n[0]);break;case"A":t[r]=[].concat(e[r]),t[r][6]=n[0][0],t[r][7]=n[0][1];break;case"Q":if(n.length<2){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],1);}t[r]=["Q"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;case"T":t[r]=["T"].concat(n[0]);break;case"C":if(n.length<3){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],2);}t[r]=["C"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;case"S":if(n.length<2){if(!(r>0)){t[r]=e[r];break;}n=E(n,t[r-1],1);}t[r]=["S"].concat(n.reduce(function(t,e){return t.concat(e);},[]));break;default:t[r]=e[r];}return t;},intersection:function(t,e){return function(t,e,n){var r,i,a,o,s,u,c,f,h,l;t=d(t),e=d(e);for(var p=n?0:[],g=0,v=t.length;g<v;g++){var m=t[g];if("M"===m[0])r=s=m[1],i=u=m[2];else{"C"===m[0]?(r=(h=[r,i].concat(m.slice(1)))[6],i=h[7]):(h=[r,i,r,i,s,u,s,u],r=s,i=u);for(var y=0,x=e.length;y<x;y++){var b=e[y];if("M"===b[0])a=c=b[1],o=f=b[2];else{"C"===b[0]?(a=(l=[a,o].concat(b.slice(1)))[6],o=l[7]):(l=[a,o,a,o,c,f,c,f],a=c,o=f);var w=S(h,l,n);if(n)p+=w;else{for(var _=0,M=w.length;_<M;_++)w[_].segment1=g,w[_].segment2=y,w[_].bez1=h,w[_].bez2=l;p=p.concat(w);}}}}}return p;}(t,e);}};},function(t,e,n){e.b=p,e.a=v,e.c=m,e.d=y;var r,i,a=0,o=0,s=0,u=1e3,c=0,f=0,h=0,l="object"==typeof performance&&performance.now?performance:Date,d="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17);};function p(){return f||(d(g),f=l.now()+h);}function g(){f=0;}function v(){this._call=this._time=this._next=null;}function m(t,e,n){var r=new v();return r.restart(t,e,n),r;}function y(){p(),++a;for(var t,e=r;e;)(t=f-e._time)>=0&&e._call.call(null,t),e=e._next;--a;}function x(){f=(c=l.now())+h,a=o=0;try{y();}finally{a=0,function(){var t,e,n=r,a=1/0;for(;n;)n._call?(a>n._time&&(a=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:r=e);i=t,w(a);}(),f=0;}}function b(){var t=l.now(),e=t-c;e>u&&(h-=e,c=t);}function w(t){a||(o&&(o=clearTimeout(o)),t-f>24?(t<1/0&&(o=setTimeout(x,t-l.now()-h)),s&&(s=clearInterval(s))):(s||(c=l.now(),s=setInterval(b,u)),a=1,d(x)));}v.prototype=m.prototype={constructor:v,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?p():+n)+(null==e?0:+e),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=n,w();},stop:function(){this._call&&(this._call=null,this._time=1/0,w());}};},function(t,e,n){var r=n(3),i=n(55),a=n(58),o=n(59),s=n(11),u=n(60),c=n(61),f=n(57);e.a=function(t,e){var n,h=typeof e;return null==e||"boolean"===h?Object(f.a)(e):("number"===h?s.a:"string"===h?(n=Object(r.a)(e))?(e=n,i.a):c.a:e instanceof r.a?i.a:e instanceof Date?o.a:Array.isArray(e)?a.a:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?u.a:s.a)(t,e);};},function(t,e,n){e.a=i,n.d(e,"d",function(){return a;}),n.d(e,"c",function(){return o;}),e.e=x,e.h=_,e.g=M,e.b=S,e.f=k;var r=n(26);function i(){}var a=.7,o=1/a,s="\\s*([+-]?\\d+)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",f=/^#([0-9a-f]{3})$/,h=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[s,s,s]+"\\)$"),d=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),p=new RegExp("^rgba\\("+[s,s,s,u]+"\\)$"),g=new RegExp("^rgba\\("+[c,c,c,u]+"\\)$"),v=new RegExp("^hsl\\("+[u,c,c]+"\\)$"),m=new RegExp("^hsla\\("+[u,c,c,u]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function x(t){var e;return t=(t+"").trim().toLowerCase(),(e=f.exec(t))?new S((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=h.exec(t))?b(parseInt(e[1],16)):(e=l.exec(t))?new S(e[1],e[2],e[3],1):(e=d.exec(t))?new S(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=p.exec(t))?w(e[1],e[2],e[3],e[4]):(e=g.exec(t))?w(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=v.exec(t))?A(e[1],e[2]/100,e[3]/100,1):(e=m.exec(t))?A(e[1],e[2]/100,e[3]/100,e[4]):y.hasOwnProperty(t)?b(y[t]):"transparent"===t?new S(NaN,NaN,NaN,0):null;}function b(t){return new S(t>>16&255,t>>8&255,255&t,1);}function w(t,e,n,r){return r<=0&&(t=e=n=NaN),new S(t,e,n,r);}function _(t){return t instanceof i||(t=x(t)),t?new S((t=t.rgb()).r,t.g,t.b,t.opacity):new S();}function M(t,e,n,r){return 1===arguments.length?_(t):new S(t,e,n,null==r?1:r);}function S(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r;}function P(t){return ((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16);}function A(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new C(t,e,n,r);}function k(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof C)return new C(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=x(t)),!t)return new C();if(t instanceof C)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),o=Math.max(e,n,r),s=NaN,u=o-a,c=(o+a)/2;return u?(s=e===o?(n-r)/u+6*(n<r):n===o?(r-e)/u+2:(e-n)/u+4,u/=c<.5?o+a:2-o-a,s*=60):u=c>0&&c<1?0:s,new C(s,u,c,t.opacity);}(t):new C(t,e,n,null==r?1:r);}function C(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}function E(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e);}Object(r.a)(i,x,{displayable:function(){return this.rgb().displayable();},hex:function(){return this.rgb().hex();},toString:function(){return this.rgb()+"";}}),Object(r.a)(S,M,Object(r.b)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new S(this.r*t,this.g*t,this.b*t,this.opacity);},darker:function(t){return t=null==t?a:Math.pow(a,t),new S(this.r*t,this.g*t,this.b*t,this.opacity);},rgb:function(){return this;},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1;},hex:function(){return "#"+P(this.r)+P(this.g)+P(this.b);},toString:function(){var t=this.opacity;return (1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")");}})),Object(r.a)(C,k,Object(r.b)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new C(this.h,this.s,this.l*t,this.opacity);},darker:function(t){return t=null==t?a:Math.pow(a,t),new C(this.h,this.s,this.l*t,this.opacity);},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new S(E(t>=240?t-240:t+120,i,r),E(t,i,r),E(t<120?t+240:t-120,i,r),this.opacity);},displayable:function(){return (0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1;}}));},function(t,e,n){e.b=function(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n;},e.a=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t;};},function(t,e,n){function r(t,e,n,r,i){var a=t*t,o=a*t;return ((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6;}e.a=r,e.b=function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),a=t[i],o=t[i+1],s=i>0?t[i-1]:2*a-o,u=i<e-1?t[i+2]:2*o-a;return r((n-i/e)*e,s,a,o,u);};};},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!==t&&"object"===e||"function"===e;};},function(t,e,n){var r=n(2);t.exports=function(t){return r(t,"String");};},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;},i=n(6);t.exports=function t(e){if("object"!==(void 0===e?"undefined":r(e))||null===e)return e;var n=void 0;if(i(e)){n=[];for(var a=0,o=e.length;a<o;a++)"object"===r(e[a])&&null!=e[a]?n[a]=t(e[a]):n[a]=e[a];}else for(var s in n={},e)"object"===r(e[s])&&null!=e[s]?n[s]=t(e[s]):n[s]=e[s];return n;};},function(t,e,n){var r=n(70),i=n(6),a=5;function o(t,e,n,s){for(var u in n=n||0,s=s||a,e)if(e.hasOwnProperty(u)){var c=e[u];null!==c&&r(c)?(r(t[u])||(t[u]={}),n<s?o(t[u],c,n+1,s):t[u]=e[u]):i(c)?(t[u]=[],t[u]=t[u].concat(c)):void 0!==c&&(t[u]=c);}}t.exports=function(){for(var t=new Array(arguments.length),e=t.length,n=0;n<e;n++)t[n]=arguments[n];for(var r=t[0],i=1;i<e;i++)o(r,t[i]);return r;};},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};t.exports=function(t){return "object"===(void 0===t?"undefined":n(t))&&null!==t;};},function(t,e,n){var r=n(28),i=n(6);t.exports=function(t,e){if(t)if(i(t))for(var n=0,a=t.length;n<a&&!1!==e(t[n],n);n++);else if(r(t))for(var o in t)if(t.hasOwnProperty(o)&&!1===e(t[o],o))break;};},function(t,e,n){var r=n(15);t.exports=function(t){return r(t)?Array.prototype.slice.call(t):[];};},function(t,e){t.exports=function(t,e,n){return t<e?e:t>n?n:t;};},function(t,e,n){var r=n(84);r.translate=function(t,e,n){var i=new Array(9);return r.fromTranslation(i,n),r.multiply(t,i,e);},r.rotate=function(t,e,n){var i=new Array(9);return r.fromRotation(i,n),r.multiply(t,i,e);},r.scale=function(t,e,n){var i=new Array(9);return r.fromScaling(i,n),r.multiply(t,i,e);},t.exports=r;},function(t,e,n){var r=n(0),i=n(38),a=n(95),o={},s="_INDEX",u=["zIndex","capture","visible"];function c(t,e,n){for(var r,i=t.length-1;i>=0;i--){var a=t[i];if(a._cfg.visible&&a._cfg.capture&&(a.isGroup?r=a.getShape(e,n):a.isHit(e,n)&&(r=a)),r)break;}return r;}var f=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this.set("tobeRemoved",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI();};r.extend(f,i),r.augment(f,{isGroup:!0,type:"group",canFill:!0,canStroke:!0,getDefaultCfg:function(){return function t(e){if(!e._cfg&&e!==f){var n=e.superclass.constructor;n&&!n._cfg&&t(n),e._cfg={},r.merge(e._cfg,n._cfg),r.merge(e._cfg,e.CFG);}}(this.constructor),r.merge({},this.constructor._cfg);},_beforeRenderUI:function(){},_renderUI:function(){},_bindUI:function(){},addShape:function(t,e){var n=this.get("canvas");e=e||{};var i=o[t];if(i||(i=r.upperFirst(t),o[t]=i),e.attrs&&n){var s=e.attrs;if("text"===t){var u=n.get("fontFamily");u&&(s.fontFamily=s.fontFamily?s.fontFamily:u);}}e.canvas=n,e.type=t;var c=new a[i](e);return this.add(c),c;},addGroup:function(t,e){var n,i=this.get("canvas");if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=i,e.parent=this,n=new t(e)):n=new t({canvas:i,parent:this}),this.add(n);else if(r.isObject(t))t.canvas=i,n=new f(t),this.add(n);else{if(void 0!==t)return !1;n=new f(),this.add(n);}return n;},renderBack:function(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n;},removeChild:function(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t;}0===arguments.length&&(e=!0),f.superclass.remove.call(this,e);}return this;},add:function(t){var e=this,n=e.get("children");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e._setCfgProperty(t);}),e._cfg.children=n.concat(t);else{var i=t,a=i.get("parent");a&&a.removeChild(i,!1),e._setCfgProperty(i),n.push(i);}return e;},_setCfgProperty:function(t){var e=this._cfg;t.set("parent",this),t.set("canvas",e.canvas),e.timeline&&t.set("timeline",e.timeline);},contain:function(t){return this.get("children").indexOf(t)>-1;},getChildByIndex:function(t){return this.get("children")[t];},getFirst:function(){return this.getChildByIndex(0);},getLast:function(){var t=this.get("children").length-1;return this.getChildByIndex(t);},getBBox:function(){var t=1/0,e=-1/0,n=1/0,i=-1/0,a=this.get("children");a.length>0?r.each(a,function(r){if(r.get("visible")){if(r.isGroup&&0===r.get("children").length)return;var a=r.getBBox();if(!a)return !0;var o=[a.minX,a.minY,1],s=[a.minX,a.maxY,1],u=[a.maxX,a.minY,1],c=[a.maxX,a.maxY,1];r.apply(o),r.apply(s),r.apply(u),r.apply(c);var f=Math.min(o[0],s[0],u[0],c[0]),h=Math.max(o[0],s[0],u[0],c[0]),l=Math.min(o[1],s[1],u[1],c[1]),d=Math.max(o[1],s[1],u[1],c[1]);f<t&&(t=f),h>e&&(e=h),l<n&&(n=l),d>i&&(i=d);}}):(t=0,e=0,n=0,i=0);var o={minX:t,minY:n,maxX:e,maxY:i};return o.x=o.minX,o.y=o.minY,o.width=o.maxX-o.minX,o.height=o.maxY-o.minY,o;},getCount:function(){return this.get("children").length;},sort:function(){var t=this.get("children");return r.each(t,function(t,e){return t[s]=e,t;}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r;};}(function(t,e){return t.get("zIndex")-e.get("zIndex");})),this;},findById:function(t){return this.find(function(e){return e.get("id")===t;});},find:function(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return !1;}),n;},findAll:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},findBy:function(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return !1;}),n;},findAllBy:function(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},getShape:function(t,e){var n,r=this._attrs.clip,i=this._cfg.children;if(r){var a=[t,e,1];r.invert(a,this.get("canvas")),r.isPointInPath(a[0],a[1])&&(n=c(i,t,e));}else n=c(i,t,e);return n;},clearTotalMatrix:function(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this._cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix();}}},clear:function(t){if(!this.get("destroyed")){for(var e=this._cfg.children,n=e.length-1;n>=0;n--)e[n].remove(!0,t);return this._cfg.children=[],this;}},destroy:function(){this.get("destroyed")||(this.clear(),f.superclass.destroy.call(this));},clone:function(){var t=this,e=t._cfg.children,n=t._attrs,i={};r.each(n,function(t,e){i[e]="matrix"===e?function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e;}(n[e]):n[e];});var a=new f({attrs:i,canvas:t.get("canvas")});return r.each(e,function(t){a.add(t.clone());}),r.each(u,function(e){a._cfg[e]=t._cfg[e];}),a;}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(91),a=n(92),o=n(93),s=n(94),u=function(t){this._cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this._cfg,this.getDefaultCfg(),t),this.initAttrs(this._cfg.attrs),this._cfg.attrs={},this.initTransform(),this.init();};u.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(u,i,a,s,o,{init:function(){this.setSilent("animable",!0),this.setSilent("animating",!1);},getParent:function(){return this._cfg.parent;},getDefaultCfg:function(){return {};},set:function(t,e){return "zIndex"===t&&this._beforeSetZIndex&&this._beforeSetZIndex(e),"loading"===t&&this._beforeSetLoading&&this._beforeSetLoading(e),this._cfg[t]=e,this;},setSilent:function(t,e){this._cfg[t]=e;},get:function(t){return this._cfg[t];},show:function(){return this._cfg.visible=!0,this;},hide:function(){return this._cfg.visible=!1,this;},remove:function(t,e){var n=this._cfg,i=n.parent,a=n.el;return i&&r.remove(i.get("children"),this),a&&(e?i&&i._cfg.tobeRemoved.push(a):a.parentNode.removeChild(a)),(t||void 0===t)&&this.destroy(),this;},destroy:function(){this.get("destroyed")||(this._attrs=null,this.removeEvent(),this._cfg={destroyed:!0});},toFront:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);n.splice(i,1),n.push(this),r&&(r.parentNode.removeChild(r),t.el=null);}},toBack:function(){var t=this._cfg,e=t.parent;if(e){var n=e._cfg.children,r=t.el,i=n.indexOf(this);if(n.splice(i,1),n.unshift(this),r){var a=r.parentNode;a.removeChild(r),a.insertBefore(r,a.firstChild);}}},_beforeSetZIndex:function(t){var e=this._cfg.parent;this._cfg.zIndex=t,r.isNil(e)||e.sort();var n=this._cfg.el;if(n){var i=e._cfg.children,a=i.indexOf(this),o=n.parentNode;o.removeChild(n),a===i.length-1?o.appendChild(n):o.insertBefore(n,o.childNodes[a]);}return t;},_setAttrs:function(t){return this.attr(t),t;},setZIndex:function(t){return this._cfg.zIndex=t,this._beforeSetZIndex(t);},clone:function(){return r.clone(this);},getBBox:function(){}}),t.exports=u;},function(t,e,n){var r=n(12),i=Array.prototype.slice;var a=function(){};r.augment(a,{on:function(t,e,n){if(!r.isFunction(e))throw new TypeError("listener should be a function");return this._cfg._events||(this._cfg._events={}),this._cfg._events[t]||(this._cfg._events[t]=[]),this._cfg._events[t].push({callback:e,one:n}),this;},one:function(t,e){return this.on(t,e,!0),this;},emit:function(t){if(!this.get("destroyed")&&this._cfg._events&&!r.isEmpty(this._cfg._events)){var e=this._cfg._events[t];if(!r.isEmpty(e))for(var n=arguments,a=i.call(n,1),o=e.length,s=0;s<o;)e[s]&&(e[s].callback.apply(this,a),e[s]&&e[s].one?(e.splice(s,1),o--):s++);}},trigger:function(){this.emit.apply(this,arguments);},off:function(t,e){var n=this._cfg._events;if(n&&!r.isEmpty(n)){if(0===arguments.length)return this._cfg._events={},this;if(n[t]){var i=function(t,e){for(var n=t.length;n--;)if(t[n].callback===e)return n;return -1;}(n[t],e);i>=0&&n[t].splice(i,1),0===n[t].length&&delete n[t];}}},removeEvent:function(t){return void 0===t?this._cfg._events={}:delete this._cfg._events[t],this;},_getEvents:function(){return this._cfg._events||{};}}),t.exports=a;},function(t,e,n){var r=n(0),i=r.vec2;function a(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n;}function o(t,e,n,r,o,s,u,c,f){var h,l,d,p,g,v,m,y=.005,x=1/0,b=[u,c];for(g=0;g<1;g+=.05)d=[a(t,n,o,g),a(e,r,s,g)],(l=i.squaredDistance(b,d))<x&&(h=g,x=l);for(x=1/0,m=0;m<32&&!(y<1e-4);m++){var w=h-y,_=h+y;d=[a(t,n,o,w),a(e,r,s,w)],l=i.squaredDistance(b,d),w>=0&&l<x?(h=w,x=l):(p=[a(t,n,o,_),a(e,r,s,_)],v=i.squaredDistance(b,p),_<=1&&v<x?(h=_,x=v):y*=.5);}return f&&(f.x=a(t,n,o,h),f.y=a(e,r,s,h)),Math.sqrt(x);}t.exports={at:a,projectPoint:function(t,e,n,r,i,a,s,u){var c={};return o(t,e,n,r,i,a,s,u,c),c;},pointDistance:o,extrema:function(t,e,n){var i=t+n-2*e;if(r.isNumberEqual(i,0))return [.5];var a=(t-e)/i;return a<=1&&a>=0?[a]:[];}};},function(t,e){t.exports={xAt:function(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r;},yAt:function(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r;},xExtrema:function(t,e,n){return Math.atan(-n/e*Math.tan(t));},yExtrema:function(t,e,n){return Math.atan(n/(e*Math.tan(t)));}};},function(t,e,n){var r=n(0),i=n(1),a=n(8),o=n(9);function s(t,e,n){return t+e*Math.cos(n);}function u(t,e,n){return t+e*Math.sin(n);}var c=function t(e){t.superclass.constructor.call(this,e);};c.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(c,i),r.augment(c,{canStroke:!0,type:"arc",getDefaultAttrs:function(){return {x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=t.startAngle,o=t.endAngle,s=t.clockwise,u=this.getHitLineWidth()/2,c=a.box(e,n,r,i,o,s);return c.minX-=u,c.minY-=u,c.maxX+=u,c.maxY+=u,c;},getStartTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.startAngle,i=t.r,a=t.clockwise,o=Math.PI/180;a&&(o*=-1);var c=[],f=s(e,i,r+o),h=u(n,i,r+o),l=s(e,i,r),d=u(n,i,r);return c.push([f,h]),c.push([l,d]),c;},getEndTangent:function(){var t=this._attrs,e=t.x,n=t.y,r=t.endAngle,i=t.r,a=t.clockwise,o=Math.PI/180,c=[];a&&(o*=-1);var f=s(e,i,r+o),h=u(n,i,r+o),l=s(e,i,r),d=u(n,i,r);return c.push([l,d]),c.push([f,h]),c;},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r,a=e.startAngle,o=e.endAngle,s=e.clockwise;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,a,o,s);},afterPath:function(t){var e=this._attrs;if(t=t||this.get("context"),e.startArrow){var n=this.getStartTangent();o.addStartArrow(t,e,n[0][0],n[0][1],n[1][0],n[1][1]);}if(e.endArrow){var r=this.getEndTangent();o.addEndArrow(t,e,r[0][0],r[0][1],r[1][0],r[1][1]);}}}),t.exports=c;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.r,i=this.getHitLineWidth()/2+r;return {minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.r;t.beginPath(),t.arc(n,r,i,0,2*Math.PI,!1),t.closePath();}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"dom",calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return {minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a};}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rx,i=t.ry,a=this.getHitLineWidth(),o=r+a/2,s=i+a/2;return {minX:e-o,minY:n-s,maxX:e+o,maxY:n+s};},createPath:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.rx,o=e.ry;t=t||self.get("context");var s=a>o?a:o,u=a>o?1:a/o,c=a>o?o/a:1,f=[1,0,0,0,1,0,0,0,1];r.mat3.scale(f,f,[u,c]),r.mat3.translate(f,f,[n,i]),t.beginPath(),t.save(),t.transform(f[0],f[1],f[3],f[4],f[6],f[7]),t.arc(0,0,s,0,2*Math.PI),t.restore(),t.closePath();}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),a=n(8),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function(){return {clockwise:!1,lineWidth:1,rs:0,re:0};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.rs,i=t.re,o=t.startAngle,s=t.endAngle,u=t.clockwise,c=this.getHitLineWidth(),f=a.box(e,n,r,o,s,u),h=a.box(e,n,i,o,s,u),l=c/2;return {minX:Math.min(f.minX,h.minX)-l,minY:Math.min(f.minY,h.minY)-l,maxX:Math.max(f.maxX,h.maxX)+l,maxY:Math.max(f.maxY,h.maxY)+l};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,i=e.rs,a=e.re,o=e.startAngle,s=e.endAngle,u=e.clockwise,c={x:Math.cos(o)*i+n,y:Math.sin(o)*i+r},f={x:Math.cos(o)*a+n,y:Math.sin(o)*a+r},h={x:Math.cos(s)*i+n,y:Math.sin(s)*i+r};(t=t||self.get("context")).beginPath(),t.moveTo(c.x,c.y),t.lineTo(f.x,f.y),t.arc(n,r,a,o,s,u),t.lineTo(h.x,h.y),t.arc(n,r,i,s,o,!u),t.closePath();}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(a,i),r.augment(a,{type:"image",isHitBox:function(){return !1;},calculateBox:function(){var t=this._attrs;this._cfg.attrs&&this._cfg.attrs.img===t.img||this._setAttrImg();var e=t.x,n=t.y;return {minX:e,minY:n,maxX:e+t.width,maxY:n+t.height};},_beforeSetLoading:function(t){var e=this.get("canvas");return !1===t&&!0===this.get("toDraw")&&(this._cfg.loading=!1,e.draw()),t;},_setAttrImg:function(){var t=this,e=t._attrs,n=e.img;if(!r.isString(n))return n instanceof Image?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):n instanceof HTMLElement&&r.isString(n.nodeName)&&"CANVAS"===n.nodeName.toUpperCase()?(e.width||t.attr("width",Number(n.getAttribute("width"))),e.height||t.attr("height",Number(n.getAttribute("height"))),n):n instanceof ImageData?(e.width||t.attr("width",n.width),e.height||t.attr("height",n.height),n):null;var i=new Image();i.onload=function(){if(t.get("destroyed"))return !1;t.attr("imgSrc",n),t.attr("img",i);var e=t.get("callback");e&&e.call(t),t.set("loading",!1);},i.src=n,i.crossOrigin="Anonymous",t.set("loading",!0);},drawInner:function(t){this._cfg.hasUpdate&&this._setAttrImg(),this.get("loading")?this.set("toDraw",!0):(this._drawImage(t),this._cfg.hasUpdate=!1);},_drawImage:function(t){var e=this._attrs,n=e.x,i=e.y,a=e.img,o=e.width,s=e.height,u=e.sx,c=e.sy,f=e.swidth,h=e.sheight;this.set("toDraw",!1);var l=a;if(l instanceof ImageData&&((l=new Image()).src=a),l instanceof Image||l instanceof HTMLElement&&r.isString(l.nodeName)&&"CANVAS"===l.nodeName.toUpperCase()){if(r.isNil(u)||r.isNil(c)||r.isNil(f)||r.isNil(h))return void t.drawImage(l,n,i,o,s);if(!(r.isNil(u)||r.isNil(c)||r.isNil(f)||r.isNil(h)))return void t.drawImage(l,u,c,f,h,n,i,o,s);}}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),a=n(9),o=n(7),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"line",getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=t.x1,n=t.y1,r=t.x2,i=t.y2,a=this.getHitLineWidth();return o.box(e,n,r,i,a);},createPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;if(e.startArrow&&e.startArrow.d){var s=a.getShortenOffset(n,r,i,o,e.startArrow.d);n+=s.dx,r+=s.dy;}if(e.endArrow&&e.endArrow.d){var u=a.getShortenOffset(n,r,i,o,e.endArrow.d);i-=u.dx,o-=u.dy;}(t=t||this.get("context")).beginPath(),t.moveTo(n,r),t.lineTo(i,o);},afterPath:function(t){var e=this._attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,i,o,n,r),e.endArrow&&a.addEndArrow(t,e,n,r,i,o);},getPoint:function(t){var e=this._attrs;return {x:o.at(e.x1,e.x2,t),y:o.at(e.y1,e.y2,t)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),a=n(10),o=n(4),s=n(9),u=n(22),c=n(20),f=function t(e){t.superclass.constructor.call(this,e);};f.ATTRS={path:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(f,i),r.augment(f,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},_afterSetAttrPath:function(t){if(r.isNil(t))return this.setSilent("segments",null),void this.setSilent("box",void 0);var e,n=o.parsePath(t),i=[];if(r.isArray(n)&&0!==n.length&&("M"===n[0][0]||"m"===n[0][0])){for(var s=n.length,u=0;u<n.length;u++){var c=n[u];e=new a(c,e,u===s-1),i.push(e);}this.setSilent("segments",i),this.setSilent("tCache",null),this.setSilent("totalLength",null),this.setSilent("box",null);}},calculateBox:function(){var t=this.get("segments");if(!t)return null;var e=this.getHitLineWidth(),n=1/0,i=-1/0,a=1/0,o=-1/0;return r.each(t,function(t){t.getBBox(e);var r=t.box;r&&(r.minX<n&&(n=r.minX),r.maxX>i&&(i=r.maxX),r.minY<a&&(a=r.minY),r.maxY>o&&(o=r.maxY));}),n===1/0||a===1/0?{minX:0,minY:0,maxX:0,maxY:0}:{minX:n,minY:a,maxX:i,maxY:o};},_setTcache:function(){var t,e,n,i,a=0,o=0,s=[],u=this._cfg.curve;u&&(r.each(u,function(t,e){n=u[e+1],i=t.length,n&&(a+=c.len(t[i-2],t[i-1],n[1],n[2],n[3],n[4],n[5],n[6]));}),this._cfg.totalLength=a,0!==a?(r.each(u,function(r,f){n=u[f+1],i=r.length,n&&((t=[])[0]=o/a,e=c.len(r[i-2],r[i-1],n[1],n[2],n[3],n[4],n[5],n[6]),o+=e,t[1]=o/a,s.push(t));}),this._cfg.tCache=s):this._cfg.tCache=[]);},getTotalLength:function(){var t=this.get("totalLength");return r.isNil(t)?(this._calculateCurve(),this._setTcache(),this.get("totalLength")):t;},_calculateCurve:function(){var t=this._attrs.path;this._cfg.curve=u.pathTocurve(t);},getStartTangent:function(){var t,e,n,i,a=this.get("segments");if(a.length>1)if(t=a[0].endPoint,e=a[1].endPoint,n=a[1].startTangent,i=[],r.isFunction(n)){var o=n();i.push([t.x-o[0],t.y-o[1]]),i.push([t.x,t.y]);}else i.push([e.x,e.y]),i.push([t.x,t.y]);return i;},getEndTangent:function(){var t,e,n,i,a=this.get("segments"),o=a.length;if(o>1)if(t=a[o-2].endPoint,e=a[o-1].endPoint,n=a[o-1].endTangent,i=[],r.isFunction(n)){var s=n();i.push([e.x-s[0],e.y-s[1]]),i.push([e.x,e.y]);}else i.push([t.x,t.y]),i.push([e.x,e.y]);return i;},getPoint:function(t){var e,n,i=this._cfg.tCache;i||(this._calculateCurve(),this._setTcache(),i=this._cfg.tCache);var a=this._cfg.curve;if(!i||0===i.length)return a?{x:a[0][1],y:a[0][2]}:null;r.each(i,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i);});var o=a[n];if(r.isNil(o)||r.isNil(n))return null;var s=o.length,u=a[n+1];return {x:c.at(o[s-2],u[1],u[3],u[5],1-e),y:c.at(o[s-1],u[2],u[4],u[6],1-e)};},createPath:function(t){var e=this._attrs,n=this.get("segments");if(r.isArray(n)){var i=n.length;if((t=t||this.get("context")).beginPath(),e.startArrow&&e.startArrow.d){var a=this.getStartTangent(),o=s.getShortenOffset(a[0][0],a[0][1],a[1][0],a[1][1],e.startArrow.d);n[0].shortenDraw(t,o.dx,o.dy);}else n[0].draw(t);for(var u=1;u<i-2;u++)n[u].draw(t);if(e.endArrow&&e.endArrow.d){var c=this.getEndTangent(),f=s.getShortenOffset(c[0][0],c[0][1],c[1][0],c[1][1],e.endArrow.d),h=n[i-1];"Z"===h.command.toUpperCase()?(n[i-2].shortenDraw(t,f.dx,f.dy),h.draw(t)):(i>2&&n[i-2].draw(t),h.shortenDraw(t,f.dx,f.dy));}else n[i-2].draw(t),n[i-1].draw(t);}},afterPath:function(t){var e=this._attrs,n=this.get("segments"),i=e.path;if(t=t||this.get("context"),r.isArray(n)&&1!==n.length&&(e.startArrow||e.endArrow)&&"z"!==i[i.length-1]&&"Z"!==i[i.length-1]&&!e.fill){var a=this.getStartTangent();s.addStartArrow(t,e,a[0][0],a[0][1],a[1][0],a[1][1]);var o=this.getEndTangent();s.addEndArrow(t,e,o[0][0],o[0][1],o[1][0],o[1][1]);}}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={points:null,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function(){return {lineWidth:1};},calculateBox:function(){var t=this._attrs.points,e=this.getHitLineWidth();if(!t||0===t.length)return null;var n=1/0,i=1/0,a=-1/0,o=-1/0;r.each(t,function(t){var e=t[0],r=t[1];e<n&&(n=e),e>a&&(a=e),r<i&&(i=r),r>o&&(o=r);});var s=e/2;return {minX:n-s,minY:i-s,maxX:a+s,maxY:o+s};},createPath:function(t){var e=this._attrs.points;e.length<2||((t=t||this.get("context")).beginPath(),r.each(e,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1]);}),t.closePath());}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),a=n(9),o=n(7),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={points:null,lineWidth:1,startArrow:!1,endArrow:!1,tCache:null},r.extend(s,i),r.augment(s,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function(){return {lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function(){var t=this._attrs,e=this.getHitLineWidth(),n=t.points;if(!n||0===n.length)return null;var i=1/0,a=1/0,o=-1/0,s=-1/0;r.each(n,function(t){var e=t[0],n=t[1];e<i&&(i=e),e>o&&(o=e),n<a&&(a=n),n>s&&(s=n);});var u=e/2;return {minX:i-u,minY:a-u,maxX:o+u,maxY:s+u};},_setTcache:function(){var t,e,n=this._attrs.points,i=0,a=0,s=[];n&&0!==n.length&&(r.each(n,function(t,e){n[e+1]&&(i+=o.len(t[0],t[1],n[e+1][0],n[e+1][1]));}),i<=0||(r.each(n,function(r,u){n[u+1]&&((t=[])[0]=a/i,e=o.len(r[0],r[1],n[u+1][0],n[u+1][1]),a+=e,t[1]=a/i,s.push(t));}),this.tCache=s));},createPath:function(t){var e,n=this._attrs,r=n.points;if(!(r.length<2)){var i=r.length-1,o=r[0][0],s=r[0][1],u=r[i][0],c=r[i][1];if(n.startArrow&&n.startArrow.d){var f=a.getShortenOffset(r[0][0],r[0][1],r[1][0],r[1][1],n.startArrow.d);o+=f.dx,s+=f.dy;}if(n.endArrow&&n.endArrow.d){var h=a.getShortenOffset(r[i-1][0],r[i-1][1],r[i][0],r[i][1],n.endArrow.d);u-=h.dx,c-=h.dy;}for((t=t||this.get("context")).beginPath(),t.moveTo(o,s),e=1;e<i;e++)t.lineTo(r[e][0],r[e][1]);t.lineTo(u,c);}},getStartTangent:function(){var t=this.__attrs.points,e=[];return e.push([t[1][0],t[1][1]]),e.push([t[0][0],t[0][1]]),e;},getEndTangent:function(){var t=this.__attrs.points,e=t.length-1,n=[];return n.push([t[e-1][0],t[e-1][1]]),n.push([t[e][0],t[e][1]]),n;},afterPath:function(t){var e=this._attrs,n=e.points,r=n.length-1;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,n[1][0],n[1][1],n[0][0],n[0][1]),e.endArrow&&a.addEndArrow(t,e,n[r-1][0],n[r-1][1],n[r][0],n[r][1]);},getPoint:function(t){var e,n,i=this._attrs.points,a=this.tCache;return a||(this._setTcache(),a=this.tCache),r.each(a,function(r,i){t>=r[0]&&t<=r[1]&&(e=(t-r[0])/(r[1]-r[0]),n=i);}),{x:o.at(i[n][0],i[n+1][0],e),y:o.at(i[n][1],i[n+1][1],e)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(4).parseRadius,a=n(1),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(o,a),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function(){return {lineWidth:1,radius:0};},calculateBox:function(){var t=this._attrs,e=t.x,n=t.y,r=t.width,i=t.height,a=this.getHitLineWidth()/2;return {minX:e-a,minY:n-a,maxX:e+r+a,maxY:n+i+a};},createPath:function(t){var e=this._attrs,n=e.x,r=e.y,a=e.width,o=e.height,s=e.radius;if((t=t||this.get("context")).beginPath(),0===s)t.rect(n,r,a,o);else{var u=i(s);t.moveTo(n+u.r1,r),t.lineTo(n+a-u.r2,r),0!==u.r2&&t.arc(n+a-u.r2,r+u.r2,u.r2,-Math.PI/2,0),t.lineTo(n+a,r+o-u.r3),0!==u.r3&&t.arc(n+a-u.r3,r+o-u.r3,u.r3,0,Math.PI/2),t.lineTo(n+u.r4,r+o),0!==u.r4&&t.arc(n+u.r4,r+o-u.r4,u.r4,Math.PI/2,Math.PI),t.lineTo(n,r+u.r1),0!==u.r1&&t.arc(n+u.r1,r+u.r1,u.r1,Math.PI,1.5*Math.PI),t.closePath();}}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(1),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function(){return {lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"};},initTransform:function(){var t=this._attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this._attrs.x,-1*this._attrs.y],["s",+t/12,+t/12],["t",this._attrs.x,this._attrs.y]]);},_assembleFont:function(){var t=this._attrs,e=t.fontSize,n=t.fontFamily,r=t.fontWeight,i=t.fontStyle,a=t.fontVariant;t.font=[i,a,r,e+"px",n].join(" ");},_setAttrText:function(){var t=this._attrs,e=t.text,n=null;if(r.isString(e)&&-1!==e.indexOf("\n")){var i=(n=e.split("\n")).length;t.lineCount=i;}t.textArr=n;},_getTextHeight:function(){var t=this._attrs,e=t.lineCount,n=1*t.fontSize;return e>1?n*e+this._getSpaceingY()*(e-1):n;},isHitBox:function(){return !1;},calculateBox:function(){var t=this._attrs,e=this._cfg;e.attrs&&!e.hasUpdate||(this._assembleFont(),this._setAttrText()),t.textArr||this._setAttrText();var n=t.x,r=t.y,i=this.measureText();if(!i)return {minX:n,minY:r,maxX:n,maxY:r};var a=this._getTextHeight(),o=t.textAlign,s=t.textBaseline,u=this.getHitLineWidth(),c={x:n,y:r-a};o&&("end"===o||"right"===o?c.x-=i:"center"===o&&(c.x-=i/2)),s&&("top"===s?c.y+=a:"middle"===s&&(c.y+=a/2)),this.set("startPoint",c);var f=u/2;return {minX:c.x-f,minY:c.y-f,maxX:c.x+i+f,maxY:c.y+a+f};},_getSpaceingY:function(){var t=this._attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n;},drawInner:function(t){var e=this._attrs,n=this._cfg;n.attrs&&!n.hasUpdate||(this._assembleFont(),this._setAttrText()),t.font=e.font;var i=e.text;if(i){var a=e.textArr,o=e.x,s=e.y;if(t.beginPath(),this.hasStroke()){var u=e.strokeOpacity;r.isNil(u)||1===u||(t.globalAlpha=u),a?this._drawTextArr(t,!1):t.strokeText(i,o,s),t.globalAlpha=1;}if(this.hasFill()){var c=e.fillOpacity;r.isNil(c)||1===c||(t.globalAlpha=c),a?this._drawTextArr(t,!0):t.fillText(i,o,s);}n.hasUpdate=!1;}},_drawTextArr:function(t,e){var n,i=this._attrs.textArr,a=this._attrs.textBaseline,o=1*this._attrs.fontSize,s=this._getSpaceingY(),u=this._attrs.x,c=this._attrs.y,f=this.getBBox(),h=f.maxY-f.minY;r.each(i,function(r,i){n=c+i*(s+o)-h+o,"middle"===a&&(n+=h-o-(h-o)/2),"top"===a&&(n+=h-o),e?t.fillText(r,u,n):t.strokeText(r,u,n);});},measureText:function(){var t,e=this._attrs,n=e.text,i=e.font,a=e.textArr,o=0;if(!r.isNil(n)){var s=document.createElement("canvas").getContext("2d");return s.save(),s.font=i,a?r.each(a,function(e){t=s.measureText(e).width,o<t&&(o=t),s.restore();}):(o=s.measureText(n).width,s.restore()),o;}}}),t.exports=a;},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"b",function(){return i;});var r=Math.PI/180,i=180/Math.PI;},function(t,e,n){n.d(e,"b",function(){return u;}),n.d(e,"c",function(){return c;});var r=n(3),i=n(27),a=n(56),o=n(5);function s(t){return function(e){var n,i,a=e.length,o=new Array(a),s=new Array(a),u=new Array(a);for(n=0;n<a;++n)i=Object(r.f)(e[n]),o[n]=i.r||0,s[n]=i.g||0,u[n]=i.b||0;return o=t(o),s=t(s),u=t(u),i.opacity=1,function(t){return i.r=o(t),i.g=s(t),i.b=u(t),i+"";};};}e.a=function t(e){var n=Object(o.b)(e);function i(t,e){var i=n((t=Object(r.f)(t)).r,(e=Object(r.f)(e)).r),a=n(t.g,e.g),s=n(t.b,e.b),u=Object(o.a)(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=a(e),t.b=s(e),t.opacity=u(e),t+"";};}return i.gamma=t,i;}(1);var u=s(i.b),c=s(a.a);},function(t,e,n){var r=n(27);e.a=function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),a=t[(i+e-1)%e],o=t[i%e],s=t[(i+1)%e],u=t[(i+2)%e];return Object(r.a)((n-i/e)*e,a,o,s,u);};};},function(t,e,n){e.a=function(t){return function(){return t;};};},function(t,e,n){var r=n(24);e.a=function(t,e){var n,i=e?e.length:0,a=t?Math.min(i,t.length):0,o=new Array(a),s=new Array(i);for(n=0;n<a;++n)o[n]=Object(r.a)(t[n],e[n]);for(;n<i;++n)s[n]=e[n];return function(t){for(n=0;n<a;++n)s[n]=o[n](t);return s;};};},function(t,e,n){e.a=function(t,e){var n=new Date();return e-=t=+t,function(r){return n.setTime(t+e*r),n;};};},function(t,e,n){var r=n(24);e.a=function(t,e){var n,i={},a={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?i[n]=Object(r.a)(t[n],e[n]):a[n]=e[n];return function(t){for(n in i)a[n]=i[n](t);return a;};};},function(t,e,n){var r=n(11),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,a=new RegExp(i.source,"g");e.a=function(t,e){var n,o,s,u=i.lastIndex=a.lastIndex=0,c=-1,f=[],h=[];for(t+="",e+="";(n=i.exec(t))&&(o=a.exec(e));)(s=o.index)>u&&(s=e.slice(u,s),f[c]?f[c]+=s:f[++c]=s),(n=n[0])===(o=o[0])?f[c]?f[c]+=o:f[++c]=o:(f[++c]=null,h.push({i:c,x:Object(r.a)(n,o)})),u=a.lastIndex;return u<e.length&&(s=e.slice(u),f[c]?f[c]+=s:f[++c]=s),f.length<2?h[0]?function(t){return function(e){return t(e)+"";};}(h[0].x):function(t){return function(){return t;};}(e):(e=h.length,function(t){for(var n,r=0;r<e;++r)f[(n=h[r]).i]=n.x(t);return f.join("");});};},function(t,e,n){t.exports={Canvas:n(63),Group:n(37),Shape:n(1),Arc:n(42),Circle:n(43),Dom:n(44),Ellipse:n(45),Fan:n(46),Image:n(47),Line:n(48),Marker:n(21),Path:n(49),Polygon:n(50),Polyline:n(51),Rect:n(52),Text:n(53),PathSegment:n(10),PathUtil:n(22),Event:n(18),EventEmitter:n(39),version:"3.4.5"};},function(t,e,n){var r=n(0),i=n(90),a=n(37),o=n(97),s=n(125),u=function t(e){t.superclass.constructor.call(this,e);};u.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null,renderer:"canvas"},r.extend(u,a),r.augment(u,i,{init:function(){u.superclass.init.call(this),this._setGlobalParam(),this._setContainer(),this._initPainter(),this._scale(),this.get("eventEnable")&&this.registerEvent(this);},_scale:function(){if("svg"!==this._cfg.renderType){var t=this.get("pixelRatio");this.scale(t,t);}},_setGlobalParam:function(){var t=this.get("renderer")||"canvas";"svg"===t?this.set("pixelRatio",1):this.get("pixelRatio")||this.set("pixelRatio",r.getRatio()),this._cfg.renderType=t;var e=s[t];this._cfg.renderer=e,this._cfg.canvas=this;var n=new o(this);this._cfg.timeline=n;},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"});},_initPainter:function(){var t=this.get("containerDOM"),e=new this._cfg.renderer.painter(t);this._cfg.painter=e,this._cfg.canvasDOM=this._cfg.el=e.canvas,this.changeSize(this.get("width"),this.get("height"));},_resize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n);},getWidth:function(){var t=this.get("pixelRatio");return this.get("width")*t;},getHeight:function(){var t=this.get("pixelRatio");return this.get("height")*t;},changeSize:function(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize();},getPointByClient:function(t,e){var n=this.get("el"),r=this.get("pixelRatio")||1,i=n.getBoundingClientRect();return {x:(t-i.left)*r,y:(e-i.top)*r};},getClientByPoint:function(t,e){var n=this.get("el").getBoundingClientRect(),r=this.get("pixelRatio")||1;return {clientX:t/r+n.left,clientY:e/r+n.top};},draw:function(){this._cfg.painter.draw(this);},getShape:function(t,e,n){return 3===arguments.length&&this._cfg.renderer.getShape?this._cfg.renderer.getShape.call(this,t,e,n):u.superclass.getShape.call(this,t,e);},getRenderer:function(){return this._cfg.renderType;},_drawSync:function(){this._cfg.painter.drawSync(this);},destroy:function(){var t=this._cfg,e=t.containerDOM,n=t.canvasDOM;n&&e&&e.removeChild(n),t.timeline.stop(),u.superclass.destroy.call(this);}}),t.exports=u;},function(t,e,n){var r=n(2);t.exports=function(t){return r(t,"Boolean");};},function(t,e,n){var r=n(2);t.exports=function(t){return r(t,"Number");};},function(t,e,n){var r=n(14),i=n(15),a=n(67),o=n(68),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(r(t))return !0;if(i(t))return !t.length;var e=a(t);if("Map"===e||"Set"===e)return !t.size;if(o(t))return !Object.keys(t).length;for(var n in t)if(s.call(t,n))return !1;return !0;};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).replace(/^\[object /,"").replace(/\]$/,"");};},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n);};},function(t,e){var n=function(){var t={};return function(e){return t[e=e||"g"]?t[e]+=1:t[e]=1,e+t[e];};}();t.exports=n;},function(t,e,n){var r=n(32),i=n(2);t.exports=function(t){if(!r(t)||!i(t,"Object"))return !1;if(null===Object.getPrototypeOf(t))return !0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e;};},function(t,e,n){var r=n(72);t.exports=function(t){var e=r(t);return e.charAt(0).toUpperCase()+e.substring(1);};},function(t,e,n){var r=n(14);t.exports=function(t){return r(t)?"":t.toString();};},function(t,e,n){var r=n(32),i=n(15),a=n(29);t.exports=function t(e,n){if(e===n)return !0;if(!e||!n)return !1;if(a(e)||a(n))return !1;if(i(e)||i(n)){if(e.length!==n.length)return !1;for(var o=!0,s=0;s<e.length&&(o=t(e[s],n[s]));s++);return o;}if(r(e)||r(n)){var u=Object.keys(e),c=Object.keys(n);if(u.length!==c.length)return !1;for(var f=!0,h=0;h<u.length&&(f=t(e[u[h]],n[u[h]]));h++);return f;}return !1;};},function(t,e,n){var r=n(13),i=n(16);t.exports=function(t,e,n,a){r(e)||(n=e,e=t,t=function(){});var o=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}});}:function(t,e){function n(){}n.prototype=t;var r=new n();return r.constructor=e,r;},s=o(e.prototype,t);return t.prototype=i(s,t.prototype),t.superclass=o(e.prototype,e),i(s,n),i(t,a),t;};},function(t,e,n){var r=n(13),i=n(34),a=n(16);t.exports=function(t){for(var e=i(arguments),n=1;n<e.length;n++){var o=e[n];r(o)&&(o=o.prototype),a(t.prototype,o);}};},function(t,e){var n=Array.prototype,r=n.splice,i=n.indexOf,a=n.slice;t.exports=function(t){for(var e=a.call(arguments,1),n=0;n<e.length;n++)for(var o=e[n],s=-1;(s=i.call(t,o))>-1;)r.call(t,s,1);return t;};},function(t,e){t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e-5;return Math.abs(t-e)<n;};},function(t,e){var n=Math.PI/180;t.exports=function(t){return n*t;};},function(t,e){var n=180/Math.PI;t.exports=function(t){return n*t;};},function(t,e){t.exports=function(t,e){return (t%e+e)%e;};},function(t,e){var n=document.createElement("table"),r=document.createElement("tr"),i=/^\s*<(\w+|!)[^>]*>/,a={tr:document.createElement("tbody"),tbody:n,thead:n,tfoot:n,td:r,th:r,"*":document.createElement("div")};t.exports=function(t){var e=i.test(t)&&RegExp.$1;e in a||(e="*");var n=a[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var r=n.childNodes[0];return n.removeChild(r),r;};},function(t,e){t.exports=function(t,e){if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[n]=e[n]);return t;};},function(t,e){t.exports=function(t){return (window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16);})(t);};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new r.ARRAY_TYPE(9);r.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0);return t[0]=1,t[4]=1,t[8]=1,t;},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t;},e.clone=function(t){var e=new r.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromValues=function(t,e,n,i,a,o,s,u,c){var f=new r.ARRAY_TYPE(9);return f[0]=t,f[1]=e,f[2]=n,f[3]=i,f[4]=a,f[5]=o,f[6]=s,f[7]=u,f[8]=c,f;},e.set=function(t,e,n,r,i,a,o,s,u,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=u,t[8]=c,t;},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.transpose=function(t,e){if(t===e){var n=e[1],r=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=i;}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t;},e.invert=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=f*o-s*c,l=-f*a+s*u,d=c*a-o*u,p=n*h+r*l+i*d;if(!p)return null;return p=1/p,t[0]=h*p,t[1]=(-f*r+i*c)*p,t[2]=(s*r-i*o)*p,t[3]=l*p,t[4]=(f*n-i*u)*p,t[5]=(-s*n+i*a)*p,t[6]=d*p,t[7]=(-c*n+r*u)*p,t[8]=(o*n-r*a)*p,t;},e.adjoint=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8];return t[0]=o*f-s*c,t[1]=i*c-r*f,t[2]=r*s-i*o,t[3]=s*u-a*f,t[4]=n*f-i*u,t[5]=i*a-n*s,t[6]=a*c-o*u,t[7]=r*u-n*c,t[8]=n*o-r*a,t;},e.determinant=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],u=t[7],c=t[8];return e*(c*a-o*u)+n*(-c*i+o*s)+r*(u*i-a*s);},e.multiply=i,e.translate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=n[0],d=n[1];return t[0]=r,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l*r+d*o+c,t[7]=l*i+d*s+f,t[8]=l*a+d*u+h,t;},e.rotate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=Math.sin(n),d=Math.cos(n);return t[0]=d*r+l*o,t[1]=d*i+l*s,t[2]=d*a+l*u,t[3]=d*o-l*r,t[4]=d*s-l*i,t[5]=d*u-l*a,t[6]=c,t[7]=f,t[8]=h,t;},e.scale=function(t,e,n){var r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t;},e.fromRotation=function(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t;},e.fromQuat=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=n+n,s=r+r,u=i+i,c=n*o,f=r*o,h=r*s,l=i*o,d=i*s,p=i*u,g=a*o,v=a*s,m=a*u;return t[0]=1-h-p,t[3]=f-m,t[6]=l+v,t[1]=f+m,t[4]=1-c-p,t[7]=d-g,t[2]=l-v,t[5]=d+g,t[8]=1-c-h,t;},e.normalFromMat4=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=e[9],l=e[10],d=e[11],p=e[12],g=e[13],v=e[14],m=e[15],y=n*s-r*o,x=n*u-i*o,b=n*c-a*o,w=r*u-i*s,_=r*c-a*s,M=i*c-a*u,S=f*g-h*p,P=f*v-l*p,A=f*m-d*p,k=h*v-l*g,C=h*m-d*g,E=l*m-d*v,I=y*E-x*C+b*k+w*A-_*P+M*S;if(!I)return null;return I=1/I,t[0]=(s*E-u*C+c*k)*I,t[1]=(u*A-o*E-c*P)*I,t[2]=(o*C-s*A+c*S)*I,t[3]=(i*C-r*E-a*k)*I,t[4]=(n*E-i*A+a*P)*I,t[5]=(r*A-n*C-a*S)*I,t[6]=(g*M-v*_+m*w)*I,t[7]=(v*b-p*M-m*x)*I,t[8]=(p*_-g*b+m*y)*I,t;},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t;},e.str=function(t){return "mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")";},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2));},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t;},e.subtract=a,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t;},e.multiplyScalarAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t;},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8];},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],u=t[5],c=t[6],f=t[7],h=t[8],l=e[0],d=e[1],p=e[2],g=e[3],v=e[4],m=e[5],y=e[6],x=e[7],b=e[8];return Math.abs(n-l)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-d)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(a-p)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(o-g)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(s-v)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(u-m)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-y)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-x)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(x))&&Math.abs(h-b)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(b));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(17));function i(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=n[0],d=n[1],p=n[2],g=n[3],v=n[4],m=n[5],y=n[6],x=n[7],b=n[8];return t[0]=l*r+d*o+p*c,t[1]=l*i+d*s+p*f,t[2]=l*a+d*u+p*h,t[3]=g*r+v*o+m*c,t[4]=g*i+v*s+m*f,t[5]=g*a+v*u+m*h,t[6]=y*r+x*o+b*c,t[7]=y*i+x*s+b*f,t[8]=y*a+x*u+b*h,t;}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t;}e.mul=i,e.sub=a;},function(t,e,n){var r=n(86),i=n(35);r.angle=function(t,e){var n=r.dot(t,e)/(r.length(t)*r.length(e));return Math.acos(i(n,-1,1));},r.direction=function(t,e){return t[0]*e[1]-e[0]*t[1];},r.angleTo=function(t,e,n){var i=r.angle(t,e),a=r.direction(t,e)>=0;return n?a?2*Math.PI-i:i:a?i:2*Math.PI-i;},r.vertical=function(t,e,n){return n?(t[0]=e[1],t[1]=-1*e[0]):(t[0]=-1*e[1],t[1]=e[0]),t;},t.exports=r;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e;},e.fromValues=function(t,e){var n=new r.ARRAY_TYPE(2);return n[0]=t,n[1]=e,n;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t;},e.set=function(t,e,n){return t[0]=e,t[1]=n,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t;},e.subtract=a,e.multiply=o,e.divide=s,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t;},e.distance=u,e.squaredDistance=c,e.length=f,e.squaredLength=h,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t;},e.normalize=function(t,e){var n=e[0],r=e[1],i=n*n+r*r;i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i);return t;},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1];},e.cross=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t;},e.lerp=function(t,e,n,r){var i=e[0],a=e[1];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t;},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t;},e.transformMat2=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i,t[1]=n[1]*r+n[3]*i,t;},e.transformMat2d=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t;},e.rotate=function(t,e,n,r){var i=e[0]-n[0],a=e[1]-n[1],o=Math.sin(r),s=Math.cos(r);return t[0]=i*s-a*o+n[0],t[1]=i*o+a*s+n[1],t;},e.angle=function(t,e){var n=t[0],r=t[1],i=e[0],a=e[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var s=i*i+a*a;s>0&&(s=1/Math.sqrt(s));var u=(n*i+r*a)*o*s;return u>1?0:u<-1?Math.PI:Math.acos(u);},e.str=function(t){return "vec2("+t[0]+", "+t[1]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1];},e.equals=function(t,e){var n=t[0],i=t[1],a=e[0],o=e[1];return Math.abs(n-a)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-o)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(o));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(17));function i(){var t=new r.ARRAY_TYPE(2);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t;}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t;}function o(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t;}function s(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t;}function u(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r);}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r;}function f(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n);}function h(t){var e=t[0],n=t[1];return e*e+n*n;}e.len=f,e.sub=a,e.mul=o,e.div=s,e.dist=u,e.sqrDist=c,e.sqrLen=h,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=2),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],a(t,t,o),e[s]=t[0],e[s+1]=t[1];return e;};}();},function(t,e,n){var r=n(88);t.exports=r;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e;},e.length=a,e.fromValues=o,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t;},e.set=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t;},e.subtract=s,e.multiply=u,e.divide=c,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t;},e.distance=f,e.squaredDistance=h,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t;},e.normalize=d,e.dot=p,e.cross=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[0],s=n[1],u=n[2];return t[0]=i*u-a*s,t[1]=a*o-r*u,t[2]=r*s-i*o,t;},e.lerp=function(t,e,n,r){var i=e[0],a=e[1],o=e[2];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t[2]=o+r*(n[2]-o),t;},e.hermite=function(t,e,n,r,i,a){var o=a*a,s=o*(2*a-3)+1,u=o*(a-2)+a,c=o*(a-1),f=o*(3-2*a);return t[0]=e[0]*s+n[0]*u+r[0]*c+i[0]*f,t[1]=e[1]*s+n[1]*u+r[1]*c+i[1]*f,t[2]=e[2]*s+n[2]*u+r[2]*c+i[2]*f,t;},e.bezier=function(t,e,n,r,i,a){var o=1-a,s=o*o,u=a*a,c=s*o,f=3*a*s,h=3*u*o,l=u*a;return t[0]=e[0]*c+n[0]*f+r[0]*h+i[0]*l,t[1]=e[1]*c+n[1]*f+r[1]*h+i[1]*l,t[2]=e[2]*c+n[2]*f+r[2]*h+i[2]*l,t;},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI,i=2*r.RANDOM()-1,a=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t[2]=i*e,t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,t[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,t[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1],a=e[2];return t[0]=r*n[0]+i*n[3]+a*n[6],t[1]=r*n[1]+i*n[4]+a*n[7],t[2]=r*n[2]+i*n[5]+a*n[8],t;},e.transformQuat=function(t,e,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=e[0],u=e[1],c=e[2],f=i*c-a*u,h=a*s-r*c,l=r*u-i*s,d=i*l-a*h,p=a*f-r*l,g=r*h-i*f,v=2*o;return f*=v,h*=v,l*=v,d*=2,p*=2,g*=2,t[0]=s+f+d,t[1]=u+h+p,t[2]=c+l+g,t;},e.rotateX=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.rotateY=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.rotateZ=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.angle=function(t,e){var n=o(t[0],t[1],t[2]),r=o(e[0],e[1],e[2]);d(n,n),d(r,r);var i=p(n,r);return i>1?0:i<-1?Math.PI:Math.acos(i);},e.str=function(t){return "vec3("+t[0]+", "+t[1]+", "+t[2]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=e[0],s=e[1],u=e[2];return Math.abs(n-o)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-s)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-u)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(u));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(17));function i(){var t=new r.ARRAY_TYPE(3);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t;}function a(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r);}function o(t,e,n){var i=new r.ARRAY_TYPE(3);return i[0]=t,i[1]=e,i[2]=n,i;}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t;}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t;}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t;}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i);}function h(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i;}function l(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r;}function d(t,e){var n=e[0],r=e[1],i=e[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t;}function p(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2];}e.sub=s,e.mul=u,e.div=c,e.dist=f,e.sqrDist=h,e.len=a,e.sqrLen=l,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=3),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e;};}();},function(t,e,n){var r=n(30),i=n(33),a=n(36);t.exports=function(t,e){return t=r(t),i(e,function(e){switch(e[0]){case"t":a.translate(t,t,[e[1],e[2]]);break;case"s":a.scale(t,t,[e[1],e[2]]);break;case"r":a.rotate(t,t,e[1]);break;case"m":a.multiply(t,t,e[1]);break;default:return !1;}}),t;};},function(t,e,n){var r=n(0),i=n(18),a=["mousedown","mouseup","dblclick","mouseenter","mouseout","mouseover","mousemove","mouseleave"],o=function(){return new Date().getTime();},s=null,u=null,c={},f=null,h=0;t.exports={registerEvent:function(){var t=this,e=this.get("el");r.each(a,function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e);},!1);}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0]);},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0]);},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0]);},!1),e.addEventListener("contextmenu",function(e){t._triggerEvent("contextmenu",e),e.preventDefault();},!1);},_getEmitter:function(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this._getEmitter(n,e);}},_getEventObj:function(t,e,n,r){var a=new i(t,e,!0,!0);return a.x=n.x,a.y=n.y,a.clientX=e.clientX,a.clientY=e.clientY,a.currentTarget=r,a.target=r,a;},_triggerEvent:function(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.getShape(n.x,n.y,e),i=this.get("el");if(f&&"svg"===this.getRenderer()&&(r=this.getShape(n.x,n.y)),"mousemove"===t){if(s&&s!==r&&(this._emitEvent("mouseout",e,n,s),this._emitEvent("mouseleave",e,n,s),f&&this._emitEvent("dragleave",e,n,s),r&&!r.destroyed||(i.style.cursor="default")),f&&(this._emitEvent("drag",e,n,f),this._emitEvent("mousemove",e,n,r)),r){if(!f)if(u===r){var a=o()-h,l=c.x-e.clientX,d=c.y-e.clientY;a>120||l*l+d*d>40?(f=r,u=null,this._emitEvent("dragstart",e,n,r)):this._emitEvent("mousemove",e,n,r);}else this._emitEvent("mousemove",e,n,r);s!==r&&(this._emitEvent("mouseenter",e,n,r),this._emitEvent("mouseover",e,n,r),f&&this._emitEvent("dragenter",e,n,r));}else{var p=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",p);}s=r;}else if(this._emitEvent(t,e,n,r||this),f||"mousedown"!==t||0!==e.button||(u=r,c={x:e.clientX,y:e.clientY},h=o()),"mouseup"===t&&0===e.button){var g=c.x-e.clientX,v=c.y-e.clientY,m=g*g+v*v,y=o();(m<40||y-h<200)&&(h=0,this._emitEvent("click",e,n,u||this)),f&&(f._cfg.capture=!0,this._emitEvent("dragend",e,n,f),f=null,this._emitEvent("drop",e,n,r||this)),u=null;}r&&!r.get("destroyed")&&(i.style.cursor=r.attr("cursor")||"default");},_emitEvent:function(t,e,n,r){var i=this._getEventObj(t,e,n,r),a=this._getEmitter(r,e);return a&&!a.get("destroyed")&&a.emit(t,i),a;}};},function(t,e,n){var r=n(0);t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this._attrs={opacity:1,fillOpacity:1,strokeOpacity:1,matrix:[1,0,0,0,1,0,0,0,1]},this.attr(r.assign(this.getDefaultAttrs(),t)),this;},getDefaultAttrs:function(){return {};},attr:function(t,e){if(0===arguments.length)return this._attrs;if(r.isObject(t)){for(var n in t)this._setAttr(n,t[n]);return this.clearBBox(),this._cfg.hasUpdate=!0,this;}return 2===arguments.length?(this._setAttr(t,e),this.clearBBox(),this._cfg.hasUpdate=!0,this):this._attrs[t];},_setAttr:function(t,e){var n=this._attrs;n[t]=e,"fill"!==t&&"stroke"!==t?"opacity"!==t?"clip"===t&&e?this._setClip(e):"path"===t&&this._afterSetAttrPath?this._afterSetAttrPath(e):"transform"!==t?"rotate"===t&&this.rotateAtStart(e):this.transform(e):n.globalAlpha=e:n[t+"Style"]=e;},clearBBox:function(){this.setSilent("box",null);},hasFill:function(){return this.canFill&&this._attrs.fillStyle;},hasStroke:function(){return this.canStroke&&this._attrs.strokeStyle;},_setClip:function(t){t._cfg.renderer=this._cfg.renderer,t._cfg.canvas=this._cfg.canvas,t._cfg.parent=this._cfg.parent,t.hasFill=function(){return !0;};}};},function(t,e,n){var r=n(0);function i(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7];}function a(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7];}function o(t,e){i(e)||(a(e)?(t[0]*=e[0],t[4]*=e[4]):r.mat3.multiply(t,t,e));}t.exports={initTransform:function(){},resetMatrix:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);},translate:function(t,e){var n=this._attrs.matrix;return r.mat3.translate(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotate:function(t){var e=this._attrs.matrix;return r.mat3.rotate(e,e,t),this.clearTotalMatrix(),this.attr("matrix",e),this;},scale:function(t,e){var n=this._attrs.matrix;return r.mat3.scale(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotateAtStart:function(t){var e=this._attrs.x||this._cfg.attrs.x,n=this._attrs.y||this._cfg.attrs.y;return Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]]);},move:function(t,e){var n=this.get("x")||0,r=this.get("y")||0;return this.translate(t-n,e-r),this.set("x",t),this.set("y",e),this;},transform:function(t){var e=this,n=this._attrs.matrix;return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.attr("matrix",r.mat3.multiply([],n,t[1])),e.clearTotalMatrix();}}),e;},setTransform:function(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t);},getMatrix:function(){return this.attr("matrix");},setMatrix:function(t){return this.attr("matrix",t),this.clearTotalMatrix(),this;},apply:function(t,e){var n;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),r.vec3.transformMat3(t,t,n),this;},_getMatrixByRoot:function(t){t=t||this;for(var e=this,n=[];e!==t;)n.unshift(e),e=e.get("parent");n.unshift(e);var i=[1,0,0,0,1,0,0,0,1];return r.each(n,function(t){r.mat3.multiply(i,t.attr("matrix"),i);}),i;},getTotalMatrix:function(){var t=this._cfg.totalMatrix;if(!t){t=[1,0,0,0,1,0,0,0,1];var e=this._cfg.parent;if(e)o(t,e.getTotalMatrix());o(t,this.attr("matrix")),this._cfg.totalMatrix=t;}return t;},clearTotalMatrix:function(){},invert:function(t){var e=this.getTotalMatrix();if(a(e))t[0]/=e[0],t[1]/=e[4];else{var n=r.mat3.invert([],e);n&&r.vec3.transformMat3(t,t,n);}return this;},resetTransform:function(t){var e=this.attr("matrix");i(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7]);}};},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(0),a={delay:"delay",repeat:"repeat",rotate:"rotate"},o={fill:"fill",stroke:"stroke",fillStyle:"fillStyle",strokeStyle:"strokeStyle"};t.exports={animate:function(t,e,n,s,u){void 0===u&&(u=0);this.set("animating",!0);var c=this.get("timeline");c||(c=this.get("canvas").get("timeline"),this.setSilent("timeline",c));var f=this.get("animators")||[];c._timer||c.initTimer(),i.isNumber(s)&&(u=s,s=null),i.isFunction(n)?(s=n,n="easeLinear"):n=n||"easeLinear";var h={repeat:t.repeat,duration:e,easing:n,callback:s,delay:u,startTime:c.getTime(),id:i.uniqueId()};if(t.onFrame)h.onFrame=t.onFrame;else{var l=function(t,e){var n={matrix:null,attrs:{}},r=e._attrs;for(var s in t)if("transform"===s)n.matrix=i.transform(e.getMatrix(),t[s]);else if("matrix"===s)n.matrix=t[s];else{if(o[s]&&/^[r,R,L,l]{1}[\s]*\(/.test(t[s]))continue;a[s]||r[s]===t[s]||("rotate"===s&&(e._attrs.rotate=e._attrs.rotate||0),n.attrs[s]=t[s]);}return n;}(t,this);h=r({fromAttrs:function(t,e){var n={},r=e._attrs;for(var i in t.attrs)n[i]=r[i];return n;}(l,this),toAttrs:l.attrs,fromMatrix:i.clone(this.getMatrix()),toMatrix:l.matrix},h);}f.length>0?f=function(t,e){if(e.onFrame)return t;var n=e.delay,r=Object.prototype.hasOwnProperty;return i.each(e.toAttrs,function(e,a){i.each(t,function(t){n<t.startTime+t.duration&&r.call(t.toAttrs,a)&&(delete t.toAttrs[a],delete t.fromAttrs[a]);});}),e.toMatrix&&i.each(t,function(t){n<t.startTime+t.duration&&t.toMatrix&&delete t.toMatrix;}),t;}(f,h):c.addAnimator(this),f.push(h),this.setSilent("animators",f),this.setSilent("pause",{isPaused:!1});},stopAnimate:function(){var t=this,e=this.get("animators");i.each(e,function(e){t.attr(e.toAttrs||e.onFrame(1)),e.toMatrix&&t.attr("matrix",e.toMatrix),e.callback&&e.callback();}),this.setSilent("animating",!1),this.setSilent("animators",[]);},pauseAnimate:function(){var t=this.get("timeline");return this.setSilent("pause",{isPaused:!0,pauseTime:t.getTime()}),this;},resumeAnimate:function(){var t=this.get("timeline").getTime(),e=this.get("animators"),n=this.get("pause").pauseTime;return i.each(e,function(e){e.startTime=e.startTime+(t-n),e._paused=!1,e._pauseTime=null;}),this.setSilent("pause",{isPaused:!1}),this.setSilent("animators",e),this;}};},function(t,e,n){var r=n(0),i=n(18),a=n(39),o=["click","mousedown","mouseup","dblclick","contextmenu","mouseout","mouseover","mousemove","dragstart","drag","dragend","dragenter","dragleave","drop"],s=function(){};r.augment(s,a,{emit:function(t,e){var n=arguments;if(a.prototype.emit.apply(this,n),!(n.length>=2&&n[1]instanceof i&&n[1].propagationStopped)&&o.indexOf(t)>=0&&e.target===this)for(var r=this._cfg.parent;r&&!r.get("destroyed");)r.emit.apply(r,n),r=r._cfg.parent;}}),t.exports=s;},function(t,e,n){var r=n(1);r.Arc=n(42),r.Circle=n(43),r.Dom=n(44),r.Ellipse=n(45),r.Fan=n(46),r.Image=n(47),r.Line=n(48),r.Marker=n(21),r.Path=n(49),r.Polygon=n(50),r.Polyline=n(51),r.Rect=n(52),r.Text=n(53),t.exports=r;},function(t,e,n){var r=n(0),i=n(19),a={arc:n(8),ellipse:n(41),line:n(7)},o=r.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");function s(t,e,n){return n.createPath(o),o.isPointInPath(t,e);}var u={arc:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=n.startAngle,u=n.endAngle,c=n.clockwise,f=this.getHitLineWidth();return !!this.hasStroke()&&i.arcline(r,a,o,s,u,c,f,t,e);},circle:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=this.getHitLineWidth(),u=this.hasFill(),c=this.hasStroke();return u&&c?i.circle(r,a,o,t,e)||i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e):u?i.circle(r,a,o,t,e):!!c&&i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e);},dom:function(t,e){if(!this._cfg.el)return !1;var n=this._cfg.el.getBBox();return i.box(n.x,n.x+n.width,n.y,n.y+n.height,t,e);},ellipse:function(t,e){var n=this._attrs,a=this.hasFill(),o=this.hasStroke(),s=n.x,u=n.y,c=n.rx,f=n.ry,h=this.getHitLineWidth(),l=c>f?c:f,d=c>f?1:c/f,p=c>f?f/c:1,g=[t,e,1],v=[1,0,0,0,1,0,0,0,1];r.mat3.scale(v,v,[d,p]),r.mat3.translate(v,v,[s,u]);var m=r.mat3.invert([],v);return r.vec3.transformMat3(g,g,m),a&&o?i.circle(0,0,l,g[0],g[1])||i.arcline(0,0,l,0,2*Math.PI,!1,h,g[0],g[1]):a?i.circle(0,0,l,g[0],g[1]):!!o&&i.arcline(0,0,l,0,2*Math.PI,!1,h,g[0],g[1]);},fan:function(t,e){var n=this,o=n.hasFill(),s=n.hasStroke(),u=n._attrs,c=u.x,f=u.y,h=u.rs,l=u.re,d=u.startAngle,p=u.endAngle,g=u.clockwise,v=[t-c,e-f],m=r.vec2.angleTo([1,0],v);function y(){var t=a.arc.nearAngle(m,d,p,g);if(r.isNumberEqual(m,t)){var e=r.vec2.squaredLength(v);if(h*h<=e&&e<=l*l)return !0;}return !1;}function x(){var r=n.getHitLineWidth(),a={x:Math.cos(d)*h+c,y:Math.sin(d)*h+f},o={x:Math.cos(d)*l+c,y:Math.sin(d)*l+f},s={x:Math.cos(p)*h+c,y:Math.sin(p)*h+f},u={x:Math.cos(p)*l+c,y:Math.sin(p)*l+f};return !!(i.line(a.x,a.y,o.x,o.y,r,t,e)||i.line(s.x,s.y,u.x,u.y,r,t,e)||i.arcline(c,f,h,d,p,g,r,t,e)||i.arcline(c,f,l,d,p,g,r,t,e));}return o&&s?y()||x():o?y():!!s&&x();},image:function(t,e){var n=this._attrs;if(this.get("toDraw")||!n.img)return !1;this._cfg.attrs&&this._cfg.attrs.img===n.img||this._setAttrImg();var r=n.x,a=n.y,o=n.width,s=n.height;return i.rect(r,a,o,s,t,e);},line:function(t,e){var n=this._attrs,r=n.x1,a=n.y1,o=n.x2,s=n.y2,u=this.getHitLineWidth();return !!this.hasStroke()&&i.line(r,a,o,s,u,t,e);},path:function(t,e){var n=this,i=n.get("segments"),a=n.hasFill(),o=n.hasStroke();function u(){if(!r.isEmpty(i)){for(var a=n.getHitLineWidth(),o=0,s=i.length;o<s;o++)if(i[o].isInside(t,e,a))return !0;return !1;}}return a&&o?s(t,e,n)||u():a?s(t,e,n):!!o&&u();},marker:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.radius||n.r,s=this.getHitLineWidth();return i.circle(r,a,o+s/2,t,e);},polygon:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs.points;if(r.length<2)return !1;var a=n.getHitLineWidth(),o=r.slice(0);return r.length>=3&&o.push(r[0]),i.polyline(o,a,t,e);}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o();},polyline:function(t,e){var n=this._attrs;if(this.hasStroke()){var r=n.points;if(r.length<2)return !1;var a=n.lineWidth;return i.polyline(r,a,t,e);}return !1;},rect:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs,a=r.x,o=r.y,s=r.width,u=r.height,c=r.radius,f=n.getHitLineWidth();if(0===c){var h=f/2;return i.line(a-h,o,a+s+h,o,f,t,e)||i.line(a+s,o-h,a+s,o+u+h,f,t,e)||i.line(a+s+h,o+u,a-h,o+u,f,t,e)||i.line(a,o+u+h,a,o-h,f,t,e);}return i.line(a+c,o,a+s-c,o,f,t,e)||i.line(a+s,o+c,a+s,o+u-c,f,t,e)||i.line(a+s-c,o+u,a+c,o+u,f,t,e)||i.line(a,o+u-c,a,o+c,f,t,e)||i.arcline(a+s-c,o+c,c,1.5*Math.PI,2*Math.PI,!1,f,t,e)||i.arcline(a+s-c,o+u-c,c,0,.5*Math.PI,!1,f,t,e)||i.arcline(a+c,o+u-c,c,.5*Math.PI,Math.PI,!1,f,t,e)||i.arcline(a+c,o+c,c,Math.PI,1.5*Math.PI,!1,f,t,e);}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o();},text:function(t,e){var n=this.getBBox();if(this.hasFill()||this.hasStroke())return i.box(n.minX,n.maxX,n.minY,n.maxY,t,e);}};t.exports={isPointInPath:function(t,e){var n=u[this.type];return !!n&&n.call(this,t,e);}};},function(t,e,n){var r=n(0),i=n(22),a=n(98),o=n(101),s=n(112),u=s.interpolate,c=s.interpolateArray,f=function(t){this._animators=[],this._current=0,this._timer=null,this.canvas=t;};function h(t,e,n){var a,s=e.startTime;if(n<s+e.delay||e.isPaused)return !1;var f=e.duration,h=e.easing;if(n=n-s-e.delay,e.repeat)a=n%f/f,a=o[h](a);else{if(!((a=n/f)<1)){var l=e.toAttrs||e.onFrame(1);return t.attr(l),e.toMatrix&&t.setMatrix(e.toMatrix),!0;}a=o[h](a);}if(e.onFrame){var d=e.onFrame(a);t.attr(d);}else!function(t,e,n){var a={},o=e.toAttrs,s=e.fromAttrs,f=e.toMatrix;if(!t.get("destroyed")){var h;for(var l in o)if(!r.isEqual(s[l],o[l]))if("path"===l){var d=o[l],p=s[l];d.length>p.length?(d=i.parsePathString(o[l]),p=i.parsePathString(s[l]),p=i.fillPathByDiff(p,d),p=i.formatPath(p,d),e.fromAttrs.path=p,e.toAttrs.path=d):e.pathFormatted||(d=i.parsePathString(o[l]),p=i.parsePathString(s[l]),p=i.formatPath(p,d),e.fromAttrs.path=p,e.toAttrs.path=d,e.pathFormatted=!0),a[l]=[];for(var g=0;g<d.length;g++){for(var v=d[g],m=p[g],y=[],x=0;x<v.length;x++)r.isNumber(v[x])&&m&&r.isNumber(m[x])?(h=u(m[x],v[x]),y.push(h(n))):y.push(v[x]);a[l].push(y);}}else h=u(s[l],o[l]),a[l]=h(n);if(f){var b=c(e.fromMatrix,f)(n);t.setMatrix(b);}t.attr(a);}}(t,e,a);return !1;}r.augment(f,{initTimer:function(){var t,e,n,r=this,i=this;i._timer=a.timer(function(a){if(i._current=a,r._animators.length>0){for(var o=r._animators.length-1;o>=0;o--)if((t=r._animators[o]).get("destroyed"))i.removeAnimator(o);else{if(!t.get("pause").isPaused)for(var s=(e=t.get("animators")).length-1;s>=0;s--)n=e[s],h(t,n,a)&&(e.splice(s,1),n.callback&&n.callback());0===e.length&&i.removeAnimator(o);}r.canvas.draw();}});},addAnimator:function(t){this._animators.push(t);},removeAnimator:function(t){this._animators.splice(t,1);},isAnimating:function(){return !!this._animators.length;},stop:function(){this._timer&&this._timer.stop();},stopAllAnimations:function(){this._animators.forEach(function(t){t.stopAnimate();}),this._animators=[],this.canvas.draw();},getTime:function(){return this._current;}}),t.exports=f;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(23);n.d(e,"now",function(){return r.b;}),n.d(e,"timer",function(){return r.c;}),n.d(e,"timerFlush",function(){return r.d;});var i=n(99);n.d(e,"timeout",function(){return i.a;});var a=n(100);n.d(e,"interval",function(){return a.a;});},function(t,e,n){var r=n(23);e.a=function(t,e,n){var i=new r.a();return e=null==e?0:+e,i.restart(function(n){i.stop(),t(n+e);},e,n),i;};},function(t,e,n){var r=n(23);e.a=function(t,e,n){var i=new r.a(),a=e;return null==e?(i.restart(t,e,n),i):(e=+e,n=null==n?Object(r.b)():+n,i.restart(function r(o){o+=a,i.restart(r,a+=e,n),t(o);},e,n),i);};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(102);n.d(e,"easeLinear",function(){return r.a;});var i=n(103);n.d(e,"easeQuad",function(){return i.b;}),n.d(e,"easeQuadIn",function(){return i.a;}),n.d(e,"easeQuadOut",function(){return i.c;}),n.d(e,"easeQuadInOut",function(){return i.b;});var a=n(104);n.d(e,"easeCubic",function(){return a.b;}),n.d(e,"easeCubicIn",function(){return a.a;}),n.d(e,"easeCubicOut",function(){return a.c;}),n.d(e,"easeCubicInOut",function(){return a.b;});var o=n(105);n.d(e,"easePoly",function(){return o.b;}),n.d(e,"easePolyIn",function(){return o.a;}),n.d(e,"easePolyOut",function(){return o.c;}),n.d(e,"easePolyInOut",function(){return o.b;});var s=n(106);n.d(e,"easeSin",function(){return s.b;}),n.d(e,"easeSinIn",function(){return s.a;}),n.d(e,"easeSinOut",function(){return s.c;}),n.d(e,"easeSinInOut",function(){return s.b;});var u=n(107);n.d(e,"easeExp",function(){return u.b;}),n.d(e,"easeExpIn",function(){return u.a;}),n.d(e,"easeExpOut",function(){return u.c;}),n.d(e,"easeExpInOut",function(){return u.b;});var c=n(108);n.d(e,"easeCircle",function(){return c.b;}),n.d(e,"easeCircleIn",function(){return c.a;}),n.d(e,"easeCircleOut",function(){return c.c;}),n.d(e,"easeCircleInOut",function(){return c.b;});var f=n(109);n.d(e,"easeBounce",function(){return f.c;}),n.d(e,"easeBounceIn",function(){return f.a;}),n.d(e,"easeBounceOut",function(){return f.c;}),n.d(e,"easeBounceInOut",function(){return f.b;});var h=n(110);n.d(e,"easeBack",function(){return h.b;}),n.d(e,"easeBackIn",function(){return h.a;}),n.d(e,"easeBackOut",function(){return h.c;}),n.d(e,"easeBackInOut",function(){return h.b;});var l=n(111);n.d(e,"easeElastic",function(){return l.c;}),n.d(e,"easeElasticIn",function(){return l.a;}),n.d(e,"easeElasticOut",function(){return l.c;}),n.d(e,"easeElasticInOut",function(){return l.b;});},function(t,e,n){e.a=function(t){return +t;};},function(t,e,n){e.a=function(t){return t*t;},e.c=function(t){return t*(2-t);},e.b=function(t){return ((t*=2)<=1?t*t:--t*(2-t)+1)/2;};},function(t,e,n){e.a=function(t){return t*t*t;},e.c=function(t){return --t*t*t+1;},e.b=function(t){return ((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;};},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"c",function(){return i;}),n.d(e,"b",function(){return a;});var r=function t(e){function n(t){return Math.pow(t,e);}return e=+e,n.exponent=t,n;}(3),i=function t(e){function n(t){return 1-Math.pow(1-t,e);}return e=+e,n.exponent=t,n;}(3),a=function t(e){function n(t){return ((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2;}return e=+e,n.exponent=t,n;}(3);},function(t,e,n){e.a=function(t){return 1-Math.cos(t*i);},e.c=function(t){return Math.sin(t*i);},e.b=function(t){return (1-Math.cos(r*t))/2;};var r=Math.PI,i=r/2;},function(t,e,n){e.a=function(t){return Math.pow(2,10*t-10);},e.c=function(t){return 1-Math.pow(2,-10*t);},e.b=function(t){return ((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2;};},function(t,e,n){e.a=function(t){return 1-Math.sqrt(1-t*t);},e.c=function(t){return Math.sqrt(1- --t*t);},e.b=function(t){return ((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2;};},function(t,e,n){e.a=function(t){return 1-d(1-t);},e.c=d,e.b=function(t){return ((t*=2)<=1?1-d(1-t):d(t-1)+1)/2;};var r=4/11,i=6/11,a=8/11,o=.75,s=9/11,u=10/11,c=.9375,f=21/22,h=63/64,l=1/r/r;function d(t){return (t=+t)<r?l*t*t:t<a?l*(t-=i)*t+o:t<u?l*(t-=s)*t+c:l*(t-=f)*t+h;}},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"c",function(){return i;}),n.d(e,"b",function(){return a;});var r=function t(e){function n(t){return t*t*((e+1)*t-e);}return e=+e,n.overshoot=t,n;}(1.70158),i=function t(e){function n(t){return --t*t*((e+1)*t+e)+1;}return e=+e,n.overshoot=t,n;}(1.70158),a=function t(e){function n(t){return ((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2;}return e=+e,n.overshoot=t,n;}(1.70158);},function(t,e,n){n.d(e,"a",function(){return i;}),n.d(e,"c",function(){return a;}),n.d(e,"b",function(){return o;});var r=2*Math.PI,i=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function a(t){return e*Math.pow(2,10*--t)*Math.sin((i-t)/n);}return a.amplitude=function(e){return t(e,n*r);},a.period=function(n){return t(e,n);},a;}(1,.3),a=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function a(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/n);}return a.amplitude=function(e){return t(e,n*r);},a.period=function(n){return t(e,n);},a;}(1,.3),o=function t(e,n){var i=Math.asin(1/(e=Math.max(1,e)))*(n/=r);function a(t){return ((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((i-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((i+t)/n))/2;}return a.amplitude=function(e){return t(e,n*r);},a.period=function(n){return t(e,n);},a;}(1,.3);},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24);n.d(e,"interpolate",function(){return r.a;});var i=n(58);n.d(e,"interpolateArray",function(){return i.a;});var a=n(27);n.d(e,"interpolateBasis",function(){return a.b;});var o=n(56);n.d(e,"interpolateBasisClosed",function(){return o.a;});var s=n(59);n.d(e,"interpolateDate",function(){return s.a;});var u=n(11);n.d(e,"interpolateNumber",function(){return u.a;});var c=n(60);n.d(e,"interpolateObject",function(){return c.a;});var f=n(115);n.d(e,"interpolateRound",function(){return f.a;});var h=n(61);n.d(e,"interpolateString",function(){return h.a;});var l=n(116);n.d(e,"interpolateTransformCss",function(){return l.a;}),n.d(e,"interpolateTransformSvg",function(){return l.b;});var d=n(119);n.d(e,"interpolateZoom",function(){return d.a;});var p=n(55);n.d(e,"interpolateRgb",function(){return p.a;}),n.d(e,"interpolateRgbBasis",function(){return p.b;}),n.d(e,"interpolateRgbBasisClosed",function(){return p.c;});var g=n(120);n.d(e,"interpolateHsl",function(){return g.a;}),n.d(e,"interpolateHslLong",function(){return g.b;});var v=n(121);n.d(e,"interpolateLab",function(){return v.a;});var m=n(122);n.d(e,"interpolateHcl",function(){return m.a;}),n.d(e,"interpolateHclLong",function(){return m.b;});var y=n(123);n.d(e,"interpolateCubehelix",function(){return y.b;}),n.d(e,"interpolateCubehelixLong",function(){return y.a;});var x=n(124);n.d(e,"quantize",function(){return x.a;});},function(t,e,n){e.a=p,e.b=w;var r=n(26),i=n(25),a=n(54),o=.96422,s=1,u=.82521,c=4/29,f=6/29,h=3*f*f,l=f*f*f;function d(t){if(t instanceof g)return new g(t.l,t.a,t.b,t.opacity);if(t instanceof _){if(isNaN(t.h))return new g(t.l,0,0,t.opacity);var e=t.h*a.a;return new g(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity);}t instanceof i.b||(t=Object(i.h)(t));var n,r,c=x(t.r),f=x(t.g),h=x(t.b),l=v((.2225045*c+.7168786*f+.0606169*h)/s);return c===f&&f===h?n=r=l:(n=v((.4360747*c+.3850649*f+.1430804*h)/o),r=v((.0139322*c+.0971045*f+.7141733*h)/u)),new g(116*l-16,500*(n-l),200*(l-r),t.opacity);}function p(t,e,n,r){return 1===arguments.length?d(t):new g(t,e,n,null==r?1:r);}function g(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r;}function v(t){return t>l?Math.pow(t,1/3):t/h+c;}function m(t){return t>f?t*t*t:h*(t-c);}function y(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055);}function x(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);}function b(t){if(t instanceof _)return new _(t.h,t.c,t.l,t.opacity);if(t instanceof g||(t=d(t)),0===t.a&&0===t.b)return new _(NaN,0,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*a.b;return new _(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity);}function w(t,e,n,r){return 1===arguments.length?b(t):new _(t,e,n,null==r?1:r);}function _(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r;}Object(r.a)(g,p,Object(r.b)(i.a,{brighter:function(t){return new g(this.l+18*(null==t?1:t),this.a,this.b,this.opacity);},darker:function(t){return new g(this.l-18*(null==t?1:t),this.a,this.b,this.opacity);},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return e=o*m(e),t=s*m(t),n=u*m(n),new i.b(y(3.1338561*e-1.6168667*t-.4906146*n),y(-.9787684*e+1.9161415*t+.033454*n),y(.0719453*e-.2289914*t+1.4052427*n),this.opacity);}})),Object(r.a)(_,w,Object(r.b)(i.a,{brighter:function(t){return new _(this.h,this.c,this.l+18*(null==t?1:t),this.opacity);},darker:function(t){return new _(this.h,this.c,this.l-18*(null==t?1:t),this.opacity);},rgb:function(){return d(this).rgb();}}));},function(t,e,n){e.a=p;var r=n(26),i=n(25),a=n(54),o=-.14861,s=1.78277,u=-.29227,c=-.90649,f=1.97294,h=f*c,l=f*s,d=s*u-c*o;function p(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof g)return new g(t.h,t.s,t.l,t.opacity);t instanceof i.b||(t=Object(i.h)(t));var e=t.r/255,n=t.g/255,r=t.b/255,o=(d*r+h*e-l*n)/(d+h-l),s=r-o,p=(f*(n-o)-u*s)/c,v=Math.sqrt(p*p+s*s)/(f*o*(1-o)),m=v?Math.atan2(p,s)*a.b-120:NaN;return new g(m<0?m+360:m,v,o,t.opacity);}(t):new g(t,e,n,null==r?1:r);}function g(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}Object(r.a)(g,p,Object(r.b)(i.a,{brighter:function(t){return t=null==t?i.c:Math.pow(i.c,t),new g(this.h,this.s,this.l*t,this.opacity);},darker:function(t){return t=null==t?i.d:Math.pow(i.d,t),new g(this.h,this.s,this.l*t,this.opacity);},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*a.a,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),h=Math.sin(t);return new i.b(255*(e+n*(o*r+s*h)),255*(e+n*(u*r+c*h)),255*(e+n*(f*r)),this.opacity);}}));},function(t,e,n){e.a=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n);};};},function(t,e,n){n.d(e,"a",function(){return o;}),n.d(e,"b",function(){return s;});var r=n(11),i=n(117);function a(t,e,n,i){function a(t){return t.length?t.pop()+" ":"";}return function(o,s){var u=[],c=[];return o=t(o),s=t(s),function(t,i,a,o,s,u){if(t!==a||i!==o){var c=s.push("translate(",null,e,null,n);u.push({i:c-4,x:Object(r.a)(t,a)},{i:c-2,x:Object(r.a)(i,o)});}else(a||o)&&s.push("translate("+a+e+o+n);}(o.translateX,o.translateY,s.translateX,s.translateY,u,c),function(t,e,n,o){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),o.push({i:n.push(a(n)+"rotate(",null,i)-2,x:Object(r.a)(t,e)})):e&&n.push(a(n)+"rotate("+e+i);}(o.rotate,s.rotate,u,c),function(t,e,n,o){t!==e?o.push({i:n.push(a(n)+"skewX(",null,i)-2,x:Object(r.a)(t,e)}):e&&n.push(a(n)+"skewX("+e+i);}(o.skewX,s.skewX,u,c),function(t,e,n,i,o,s){if(t!==n||e!==i){var u=o.push(a(o)+"scale(",null,",",null,")");s.push({i:u-4,x:Object(r.a)(t,n)},{i:u-2,x:Object(r.a)(e,i)});}else 1===n&&1===i||o.push(a(o)+"scale("+n+","+i+")");}(o.scaleX,o.scaleY,s.scaleX,s.scaleY,u,c),o=s=null,function(t){for(var e,n=-1,r=c.length;++n<r;)u[(e=c[n]).i]=e.x(t);return u.join("");};};}var o=a(i.a,"px, ","px)","deg)"),s=a(i.b,", ",")",")");},function(t,e,n){e.a=function(t){if("none"===t)return s.b;r||(r=document.createElement("DIV"),i=document.documentElement,a=document.defaultView);return r.style.transform=t,t=a.getComputedStyle(i.appendChild(r),null).getPropertyValue("transform"),i.removeChild(r),t=t.slice(7,-1).split(","),Object(s.a)(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]);},e.b=function(t){if(null==t)return s.b;o||(o=document.createElementNS("http://www.w3.org/2000/svg","g"));return o.setAttribute("transform",t),(t=o.transform.baseVal.consolidate())?(t=t.matrix,Object(s.a)(t.a,t.b,t.c,t.d,t.e,t.f)):s.b;};var r,i,a,o,s=n(118);},function(t,e,n){n.d(e,"b",function(){return i;});var r=180/Math.PI,i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};e.a=function(t,e,n,i,a,o){var s,u,c;return (s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(u=Math.sqrt(n*n+i*i))&&(n/=u,i/=u,c/=u),t*i<e*n&&(t=-t,e=-e,c=-c,s=-s),{translateX:a,translateY:o,rotate:Math.atan2(e,t)*r,skewX:Math.atan(c)*r,scaleX:s,scaleY:u};};},function(t,e,n){var r=Math.SQRT2;function i(t){return ((t=Math.exp(t))+1/t)/2;}e.a=function(t,e){var n,a,o=t[0],s=t[1],u=t[2],c=e[0],f=e[1],h=e[2],l=c-o,d=f-s,p=l*l+d*d;if(p<1e-12)a=Math.log(h/u)/r,n=function(t){return [o+t*l,s+t*d,u*Math.exp(r*t*a)];};else{var g=Math.sqrt(p),v=(h*h-u*u+4*p)/(2*u*2*g),m=(h*h-u*u-4*p)/(2*h*2*g),y=Math.log(Math.sqrt(v*v+1)-v),x=Math.log(Math.sqrt(m*m+1)-m);a=(x-y)/r,n=function(t){var e=t*a,n=i(y),c=u/(2*g)*(n*function(t){return ((t=Math.exp(2*t))-1)/(t+1);}(r*e+y)-function(t){return ((t=Math.exp(t))-1/t)/2;}(y));return [o+c*l,s+c*d,u*n/i(r*e+y)];};}return n.duration=1e3*a,n;};},function(t,e,n){n.d(e,"b",function(){return o;});var r=n(3),i=n(5);function a(t){return function(e,n){var a=t((e=Object(r.d)(e)).h,(n=Object(r.d)(n)).h),o=Object(i.a)(e.s,n.s),s=Object(i.a)(e.l,n.l),u=Object(i.a)(e.opacity,n.opacity);return function(t){return e.h=a(t),e.s=o(t),e.l=s(t),e.opacity=u(t),e+"";};};}e.a=a(i.c);var o=a(i.a);},function(t,e,n){e.a=function(t,e){var n=Object(i.a)((t=Object(r.e)(t)).l,(e=Object(r.e)(e)).l),a=Object(i.a)(t.a,e.a),o=Object(i.a)(t.b,e.b),s=Object(i.a)(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=a(e),t.b=o(e),t.opacity=s(e),t+"";};};var r=n(3),i=n(5);},function(t,e,n){n.d(e,"b",function(){return o;});var r=n(3),i=n(5);function a(t){return function(e,n){var a=t((e=Object(r.c)(e)).h,(n=Object(r.c)(n)).h),o=Object(i.a)(e.c,n.c),s=Object(i.a)(e.l,n.l),u=Object(i.a)(e.opacity,n.opacity);return function(t){return e.h=a(t),e.c=o(t),e.l=s(t),e.opacity=u(t),e+"";};};}e.a=a(i.c);var o=a(i.a);},function(t,e,n){n.d(e,"a",function(){return o;});var r=n(3),i=n(5);function a(t){return function e(n){function a(e,a){var o=t((e=Object(r.b)(e)).h,(a=Object(r.b)(a)).h),s=Object(i.a)(e.s,a.s),u=Object(i.a)(e.l,a.l),c=Object(i.a)(e.opacity,a.opacity);return function(t){return e.h=o(t),e.s=s(t),e.l=u(Math.pow(t,n)),e.opacity=c(t),e+"";};}return n=+n,a.gamma=e,a;}(1);}e.b=a(i.c);var o=a(i.a);},function(t,e,n){e.a=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n;};},function(t,e,n){t.exports={canvas:n(126),svg:n(129)};},function(t,e,n){t.exports={painter:n(127)};},function(t,e,n){var r=n(0),i=n(128),a=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash","lineDashOffset"],o=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<canvas id="'+e+'"></canvas>');return t.appendChild(n),this.type="canvas",this.canvas=n,this.context=n.getContext("2d"),this.toDraw=!1,this;}var e=t.prototype;return e.beforeDraw=function(){var t=this.canvas;this.context&&this.context.clearRect(0,0,t.width,t.height);},e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n();}),e.beforeDraw();try{e._drawGroup(t);}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t);}finally{e.toDraw=!1;}}();},e.drawSync=function(t){this.beforeDraw(),this._drawGroup(t);},e._drawGroup=function(t){if(!t._cfg.removed&&!t._cfg.destroyed&&t._cfg.visible){var e=t._cfg.children,n=null;this.setContext(t);for(var r=0;r<e.length;r++)n=e[r],e[r].isGroup?this._drawGroup(n):this._drawShape(n);this.restoreContext(t);}},e._drawShape=function(t){t._cfg.removed||t._cfg.destroyed||!t._cfg.visible||(this.setContext(t),t.drawInner(this.context),this.restoreContext(t),t._cfg.attrs=t._attrs,t._cfg.hasUpdate=!1);},e.setContext=function(t){var e=this.context,n=t._attrs.clip;e.save(),n&&(n.resetTransform(e),n.createPath(e),e.clip()),this.resetContext(t),t.resetTransform(e);},e.restoreContext=function(){this.context.restore();},e.resetContext=function(t){var e=this.context,n=t._attrs;if(!t.isGroup)for(var o in n)if(a.indexOf(o)>-1){var s=n[o];"fillStyle"===o&&(s=i.parseStyle(s,t,e)),"strokeStyle"===o&&(s=i.parseStyle(s,t,e)),"lineDash"===o&&e.setLineDash?r.isArray(s)?e.setLineDash(s):r.isString(s)&&e.setLineDash(s.split(" ")):e[o]=s;}},t;}();t.exports=o;},function(t,e,n){var r=n(0),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi,o=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,s=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,u=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,c=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function f(t,e){var n=t.match(c);r.each(n,function(t){t=t.split(":"),e.addColorStop(t[0],t[1]);});}t.exports={parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i;}r.each(e,function(t,n){isNaN(t)||(e[n]=+t);}),t[n]=e;}),t):void 0;},parseStyle:function(t,e,n){if(r.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return function(t,e,n){var i,a,s=o.exec(t),u=r.mod(r.toRadian(parseFloat(s[1])),2*Math.PI),c=s[2],h=e.getBBox();u>=0&&u<.5*Math.PI?(i={x:h.minX,y:h.minY},a={x:h.maxX,y:h.maxY}):.5*Math.PI<=u&&u<Math.PI?(i={x:h.maxX,y:h.minY},a={x:h.minX,y:h.maxY}):Math.PI<=u&&u<1.5*Math.PI?(i={x:h.maxX,y:h.maxY},a={x:h.minX,y:h.minY}):(i={x:h.minX,y:h.maxY},a={x:h.maxX,y:h.minY});var l=Math.tan(u),d=l*l,p=(a.x-i.x+l*(a.y-i.y))/(d+1)+i.x,g=l*(a.x-i.x+l*(a.y-i.y))/(d+1)+i.y,v=n.createLinearGradient(i.x,i.y,p,g);return f(c,v),v;}(t,e,n);if("r"===t[0])return function(t,e,n){var r=s.exec(t),i=parseFloat(r[1]),a=parseFloat(r[2]),o=parseFloat(r[3]),u=r[4];if(0===o){var h=u.match(c);return h[h.length-1].split(":")[1];}var l=e.getBBox(),d=l.maxX-l.minX,p=l.maxY-l.minY,g=Math.sqrt(d*d+p*p)/2,v=n.createRadialGradient(l.minX+d*i,l.minY+p*a,o*g,l.minX+d/2,l.minY+p/2,g);return f(u,v),v;}(t,e,n);if("p"===t[0])return function(t,e,n){if(e.get("patternSource")&&e.get("patternSource")===t)return e.get("pattern");var r,i,a=u.exec(t),o=a[1],s=a[2];function c(){r=n.createPattern(i,o),e.setSilent("pattern",r),e.setSilent("patternSource",t);}switch(o){case"a":o="repeat";break;case"x":o="repeat-x";break;case"y":o="repeat-y";break;case"n":o="no-repeat";break;default:o="no-repeat";}return i=new Image(),s.match(/^data:/i)||(i.crossOrigin="Anonymous"),i.src=s,i.complete?c():(i.onload=c,i.src=i.src),r;}(t,e,n);}return t;}}};},function(t,e,n){t.exports={painter:n(130),getShape:n(137)};},function(t,e,n){var r=n(0),i=n(4).parseRadius,a=n(21),o=n(131),s={rect:"path",circle:"circle",line:"line",path:"path",marker:"path",text:"text",polygon:"polygon",image:"image",ellipse:"ellipse",dom:"foreignObject",fan:"path",group:"g"},u={opacity:"opacity",fillStyle:"fill",strokeOpacity:"stroke-opacity",fillOpacity:"fill-opacity",strokeStyle:"stroke",x:"x",y:"y",r:"r",rx:"rx",ry:"ry",width:"width",height:"height",x1:"x1",x2:"x2",y1:"y1",y2:"y2",lineCap:"stroke-linecap",lineJoin:"stroke-linejoin",lineWidth:"stroke-width",lineDash:"stroke-dasharray",lineDashOffset:"stroke-dashoffset",miterLimit:"stroke-miterlimit",font:"font",fontSize:"font-size",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",fontFamily:"font-family",startArrow:"marker-start",endArrow:"marker-end",path:"d",class:"class",id:"id",style:"style",preserveAspectRatio:"preserveAspectRatio"},c={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},f={left:"left",start:"left",center:"middle",right:"end",end:"end"},h=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<svg id="'+e+'"></svg>');return t.appendChild(n),this.type="svg",this.canvas=n,this.context=new o(n),this.toDraw=!1,this;}var e=t.prototype;return e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n();});try{e._drawChildren(t);}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t);}finally{e.toDraw=!1;}}();},e.drawSync=function(t){this._drawChildren(t);},e._drawGroup=function(t,e){var n=t._cfg;n.removed||n.destroyed||(n.tobeRemoved&&(r.each(n.tobeRemoved,function(t){t.parentNode&&t.parentNode.removeChild(t);}),n.tobeRemoved=[]),this._drawShape(t,e),n.children&&n.children.length>0&&this._drawChildren(t));},e._drawChildren=function(t){var e,n=t._cfg.children;if(n)for(var r=0;r<n.length;r++)(e=n[r]).isGroup?this._drawGroup(e,r):this._drawShape(e,r);},e._drawShape=function(t,e){var n=t._attrs,r=t._cfg,i=r.el;r.removed||r.destroyed?i&&i.parentNode.removeChild(r.el):(!i&&r.parent&&(this._createDom(t,e),this._updateShape(t)),i=r.el,!1!==r.visible?(r.visible&&i.hasAttribute("visibility")&&i.removeAttribute("visibility"),r.hasUpdate&&this._updateShape(t),n.clip&&n.clip._cfg.hasUpdate&&this._updateShape(n.clip)):i.setAttribute("visibility","hidden"));},e._updateShape=function(t){var e=t._attrs,n=t._cfg.attrs;if(n)if(t._cfg.el||this._createDom(t),"clip"in e&&this._setClip(t,e.clip),("shadowOffsetX"in e||"shadowOffsetY"in e||"shadowBlur"in e||"shadowColor"in e)&&this._setShadow(t),"text"!==t.type){for(var i in "fan"===t.type&&this._updateFan(t),"marker"===t.type&&t._cfg.el.setAttribute("d",this._assembleMarker(e)),"rect"===t.type&&t._cfg.el.setAttribute("d",this._assembleRect(e)),e)e[i]!==n[i]&&this._setAttribute(t,i,e[i]);t._cfg.attrs=r.deepMix({},t._attrs),t._cfg.hasUpdate=!1;}else this._updateText(t);},e._setAttribute=function(t,e,n){var i=t.type,a=t._attrs,o=t._cfg.el,s=this.context;if("marker"!==i&&"rect"!==i||!~["x","y","radius","r"].indexOf(e))if(~["circle","ellipse"].indexOf(i)&&~["x","y"].indexOf(e))o.setAttribute("c"+e,parseInt(n,10));else{if("polygon"===i&&"points"===e)return n&&0!==n.length||(n=""),r.isArray(n)&&(n=(n=n.map(function(t){return t[0]+","+t[1];})).join(" ")),void o.setAttribute("points",n);if("path"===e&&r.isArray(n))o.setAttribute("d",this._formatPath(n));else if("img"!==e){if("transform"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("rotate"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("matrix"!==e){if("fillStyle"!==e&&"strokeStyle"!==e){if("clip"!==e)if(~e.indexOf("Arrow")){if(e=u[e],n){var c=null;c="boolean"==typeof n?s.getDefaultArrow(a,e):s.addArrow(a,e),o.setAttribute(e,"url(#"+c+")"),t._cfg[e]=c;}else t._cfg[e]=null,o.removeAttribute(e);}else"html"===e&&("string"==typeof n?o.innerHTML=n:(o.innerHTML="",o.appendChild(n))),u[e]&&o.setAttribute(u[e],n);}else this._setColor(t,e,n);}else this._setTransform(t);}else this._setImage(t,n);}},e._createDom=function(t,e){var n=s[t.type],r=t._attrs,i=t._cfg.parent;if(!n)throw new Error("the type"+t.type+"is not supported by svg");var a=document.createElementNS("http://www.w3.org/2000/svg",n);if(t._cfg.id&&(a.id=t._cfg.id),t._cfg.el=a,i){var o=i._cfg.el;if(void 0===e)o.appendChild(a);else{var u=i._cfg.el.childNodes;"svg"===o.tagName&&(e+=1),u.length<=e?o.appendChild(a):o.insertBefore(a,u[e]);}}return t._cfg.attrs={},"text"===t.type?(a.setAttribute("paint-order","stroke"),a.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;")):(r.stroke||r.strokeStyle||a.setAttribute("stroke","none"),r.fill||r.fillStyle||a.setAttribute("fill","none")),a;},e._assembleMarker=function(t){var e=t.r;if(void 0===t.r&&(e=t.radius),isNaN(Number(t.x))||isNaN(Number(t.y))||isNaN(Number(e)))return "";var n="";return n="function"==typeof t.symbol?t.symbol(t.x,t.y,e):a.Symbols[t.symbol||"circle"](t.x,t.y,e),r.isArray(n)&&(n=n.map(function(t){return t.join(" ");}).join("")),n;},e._assembleRect=function(t){var e=t.x,n=t.y,a=t.width,o=t.height,s=t.radius;if(!s)return "M "+e+","+n+" l "+a+",0 l 0,"+o+" l"+-a+" 0 z";var u=i(s);return r.isArray(s)?1===s.length?u.r1=u.r2=u.r3=u.r4=s[0]:2===s.length?(u.r1=u.r3=s[0],u.r2=u.r4=s[1]):3===s.length?(u.r1=s[0],u.r2=u.r4=s[1],u.r3=s[2]):(u.r1=s[0],u.r2=s[1],u.r3=s[2],u.r4=s[3]):u.r1=u.r2=u.r3=u.r4=s,[["M "+(e+u.r1)+","+n],["l "+(a-u.r1-u.r2)+",0"],["a "+u.r2+","+u.r2+",0,0,1,"+u.r2+","+u.r2],["l 0,"+(o-u.r2-u.r3)],["a "+u.r3+","+u.r3+",0,0,1,"+-u.r3+","+u.r3],["l "+(u.r3+u.r4-a)+",0"],["a "+u.r4+","+u.r4+",0,0,1,"+-u.r4+","+-u.r4],["l 0,"+(u.r4+u.r1-o)],["a "+u.r1+","+u.r1+",0,0,1,"+u.r1+","+-u.r1],["z"]].join(" ");},e._formatPath=function(t){return ~(t=t.map(function(t){return t.join(" ");}).join("")).indexOf("NaN")?"":t;},e._setTransform=function(t){for(var e=t._attrs.matrix,n=t._cfg.el,r=[],i=0;i<9;i+=3)r.push(e[i]+","+e[i+1]);-1===(r=r.join(",")).indexOf("NaN")?n.setAttribute("transform","matrix("+r+")"):console.warn("invalid matrix:",e);},e._setImage=function(t,e){var n=t._attrs,i=t._cfg.el;if(r.isString(e))i.setAttribute("href",e);else if(e instanceof Image)n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",e.src);else if(e instanceof HTMLElement&&r.isString(e.nodeName)&&"CANVAS"===e.nodeName.toUpperCase())i.setAttribute("href",e.toDataURL());else if(e instanceof ImageData){var a=document.createElement("canvas");a.setAttribute("width",e.width),a.setAttribute("height",e.height),a.getContext("2d").putImageData(e,0,0),n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",a.toDataURL());}},e._updateFan=function(t){function e(t,e,n){return {x:e*Math.cos(t)+n.x,y:e*Math.sin(t)+n.y};}var n=t._attrs,i=t._cfg,a={x:n.x,y:n.y},o=[],s=n.startAngle,u=n.endAngle;r.isNumberEqual(u-s,2*Math.PI)&&(u-=1e-5);var c=e(s,n.re,a),f=e(u,n.re,a),h=u>s?1:0,l=Math.abs(u-s)>Math.PI?1:0,d=n.rs,p=n.re,g=e(s,n.rs,a),v=e(u,n.rs,a);n.rs>0?(o.push("M "+f.x+","+f.y),o.push("L "+v.x+","+v.y),o.push("A "+d+","+d+",0,"+l+","+(1===h?0:1)+","+g.x+","+g.y),o.push("L "+c.x+" "+c.y)):(o.push("M "+a.x+","+a.y),o.push("L "+c.x+","+c.y)),o.push("A "+p+","+p+",0,"+l+","+h+","+f.x+","+f.y),n.rs>0?o.push("L "+v.x+","+v.y):o.push("Z"),i.el.setAttribute("d",o.join(" "));},e._updateText=function(t){var e=t._attrs,n=t._cfg.attrs,r=t._cfg.el;for(var i in this._setFont(t),e)if(e[i]!==n[i]){if("text"===i){this._setText(t,""+e[i]);continue;}if("fillStyle"===i||"strokeStyle"===i){this._setColor(t,i,e[i]);continue;}if("matrix"===i){this._setTransform(t);continue;}u[i]&&r.setAttribute(u[i],e[i]);}t._cfg.attrs=Object.assign({},t._attrs),t._cfg.hasUpdate=!1;},e._setFont=function(t){var e=t.get("el"),n=t._attrs,r=n.fontSize;e.setAttribute("alignment-baseline",c[n.textBaseline]||"baseline"),e.setAttribute("text-anchor",f[n.textAlign]||"left"),r&&+r<12&&(n.matrix=[1,0,0,0,1,0,0,0,1],t.transform([["t",-n.x,-n.y],["s",+r/12,+r/12],["t",n.x,n.y]]));},e._setText=function(t,e){var n=t._cfg.el,i=t._attrs.textBaseline||"bottom";if(e){if(~e.indexOf("\n")){var a=t._attrs.x,o=e.split("\n"),s=o.length-1,u="";r.each(o,function(t,e){0===e?"alphabetic"===i?u+='<tspan x="'+a+'" dy="'+-s+'em">'+t+"</tspan>":"top"===i?u+='<tspan x="'+a+'" dy="0.9em">'+t+"</tspan>":"middle"===i?u+='<tspan x="'+a+'" dy="'+-(s-1)/2+'em">'+t+"</tspan>":"bottom"===i?u+='<tspan x="'+a+'" dy="-'+(s+.3)+'em">'+t+"</tspan>":"hanging"===i&&(u+='<tspan x="'+a+'" dy="'+(-(s-1)-.3)+'em">'+t+"</tspan>"):u+='<tspan x="'+a+'" dy="1em">'+t+"</tspan>";}),n.innerHTML=u;}else n.innerHTML=e;}else n.innerHTML="";},e._setClip=function(t,e){var n=t._cfg.el;if(e){if(n.hasAttribute("clip-path"))e._cfg.hasUpdate&&this._updateShape(e);else{this._createDom(e),this._updateShape(e);var r=this.context.addClip(e);n.setAttribute("clip-path","url(#"+r+")");}}else n.removeAttribute("clip-path");},e._setColor=function(t,e,n){var r=t._cfg.el,i=this.context;if(n){if(n=n.trim(),/^[r,R,L,l]{1}[\s]*\(/.test(n)){var a=i.find("gradient",n);a||(a=i.addGradient(n)),r.setAttribute(u[e],"url(#"+a+")");}else if(/^[p,P]{1}[\s]*\(/.test(n)){var o=i.find("pattern",n);o||(o=i.addPattern(n)),r.setAttribute(u[e],"url(#"+o+")");}else r.setAttribute(u[e],n);}else r.setAttribute(u[e],"none");},e._setShadow=function(t){var e=t._cfg.el,n=t._attrs,r={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(r.dx||r.dy||r.blur||r.color){var i=this.context.find("filter",r);i||(i=this.context.addShadow(r,this)),e.setAttribute("filter","url(#"+i+")");}else e.removeAttribute("filter");},t;}();t.exports=h;},function(t,e,n){var r=n(0),i=n(132),a=n(133),o=n(134),s=n(135),u=n(136),c=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=r.uniqueId("defs_");e.id=n,t.appendChild(e),this.children=[],this.defaultArrow={},this.el=e,this.canvas=t;}var e=t.prototype;return e.find=function(t,e){for(var n=this.children,r=null,i=0;i<n.length;i++)if(n[i].match(t,e)){r=n[i].id;break;}return r;},e.findById=function(t){for(var e=this.children,n=null,r=0;r<e.length;r++)if(e[r].id===t){n=e[r];break;}return n;},e.add=function(t){this.children.push(t),t.canvas=this.canvas,t.parent=this;},e.getDefaultArrow=function(t,e){var n=t.stroke||t.strokeStyle;if(this.defaultArrow[n])return this.defaultArrow[n].id;var r=new o(t,e);return this.defaultArrow[n]=r,this.el.appendChild(r.el),r.id;},e.addGradient=function(t){var e=new i(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addArrow=function(t,e){var n=new o(t,e);return this.el.appendChild(n.el),n.id;},e.addShadow=function(t){var e=new a(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addPattern=function(t){var e=new u(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addClip=function(t){var e=new s(t);return this.el.appendChild(e.el),this.add(e),e.id;},t;}();t.exports=c;},function(t,e,n){var r=n(0),i=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,a=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,o=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function s(t){var e=t.match(o);if(!e)return "";var n="";return e.sort(function(t,e){return t=t.split(":"),e=e.split(":"),Number(t[0])-Number(e[0]);}),r.each(e,function(t){t=t.split(":"),n+='<stop offset="'+t[0]+'" stop-color="'+t[1]+'"></stop>';}),n;}var u=function(){function t(t){var e=null,n=r.uniqueId("gradient_");return "l"===t.toLowerCase()[0]?function(t,e){var n,a,o=i.exec(t),u=r.mod(r.toRadian(parseFloat(o[1])),2*Math.PI),c=o[2];u>=0&&u<.5*Math.PI?(n={x:0,y:0},a={x:1,y:1}):.5*Math.PI<=u&&u<Math.PI?(n={x:1,y:0},a={x:0,y:1}):Math.PI<=u&&u<1.5*Math.PI?(n={x:1,y:1},a={x:0,y:0}):(n={x:0,y:1},a={x:1,y:0});var f=Math.tan(u),h=f*f,l=(a.x-n.x+f*(a.y-n.y))/(h+1)+n.x,d=f*(a.x-n.x+f*(a.y-n.y))/(h+1)+n.y;e.setAttribute("x1",n.x),e.setAttribute("y1",n.y),e.setAttribute("x2",l),e.setAttribute("y2",d),e.innerHTML=s(c);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")):function(t,e){var n=a.exec(t),r=parseFloat(n[1]),i=parseFloat(n[2]),o=parseFloat(n[3]),u=n[4];e.setAttribute("cx",r),e.setAttribute("cy",i),e.setAttribute("r",o),e.innerHTML=s(u);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")),e.setAttribute("id",n),this.el=e,this.id=n,this.cfg=t,this;}return t.prototype.match=function(t,e){return this.cfg===e;},t;}();t.exports=u;},function(t,e,n){var r=n(0),i={shadowColor:"color",shadowOpacity:"opacity",shadowBlur:"blur",shadowOffsetX:"dx",shadowOffsetY:"dy"},a={x:"-40%",y:"-40%",width:"200%",height:"200%"},o=function(){function t(t){this.type="filter";var e=document.createElementNS("http://www.w3.org/2000/svg","filter");return r.each(a,function(t,n){e.setAttribute(n,t);}),this.el=e,this.id=r.uniqueId("filter_"),this.el.id=this.id,this.cfg=t,this._parseShadow(t,e),this;}var e=t.prototype;return e.match=function(t,e){if(this.type!==t)return !1;var n=!0,i=this.cfg;return r.each(Object.keys(i),function(t){if(i[t]!==e[t])return n=!1,!1;}),n;},e.update=function(t,e){var n=this.cfg;return n[i[t]]=e,this._parseShadow(n,this.el),this;},e._parseShadow=function(t,e){var n='<feDropShadow \n      dx="'+(t.dx||0)+'" \n      dy="'+(t.dy||0)+'" \n      stdDeviation="'+(t.blur?t.blur/10:0)+'"\n      flood-color="'+(t.color?t.color:"#000")+'"\n      flood-opacity="'+(t.opacity?t.opacity:1)+'"\n      />';e.innerHTML=n;},t;}();t.exports=o;},function(t,e,n){var r=n(0),i=function(){function t(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=r.uniqueId("marker_");n.setAttribute("id",i);var a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("stroke","none"),a.setAttribute("fill",t.stroke||"#000"),n.appendChild(a),n.setAttribute("overflow","visible"),n.setAttribute("orient","auto-start-reverse"),this.el=n,this.child=a,this.id=i,this.cfg=t["marker-start"===e?"startArrow":"endArrow"],this.stroke=t.stroke||"#000",!0===this.cfg?this._setDefaultPath(e,a):this._setMarker(t.lineWidth,a),this;}var e=t.prototype;return e.match=function(){return !1;},e._setDefaultPath=function(t,e){var n=this.el;e.setAttribute("d","M0,0 L6,3 L0,6 L3,3Z"),n.setAttribute("refX",3),n.setAttribute("refY",3);},e._setMarker=function(t,e){var n=this.el,i=this.cfg.path,a=this.cfg.d;r.isArray(i)&&(i=i.map(function(t){return t.join(" ");}).join("")),e.setAttribute("d",i),n.appendChild(e),a&&n.setAttribute("refX",a/t);},e.update=function(t){var e=this.child;e.attr?e.attr("fill",t):e.setAttribute("fill",t);},t;}();t.exports=i;},function(t,e,n){var r=n(0),i=function(){function t(t){this.type="clip";var e=document.createElementNS("http://www.w3.org/2000/svg","clipPath");this.el=e,this.id=r.uniqueId("clip_"),e.id=this.id;var n=t._cfg.el;return e.appendChild(n.cloneNode(!0)),this.cfg=t,this;}var e=t.prototype;return e.match=function(){return !1;},e.remove=function(){var t=this.el;t.parentNode.removeChild(t);},t;}();t.exports=i;},function(t,e,n){var r=n(0),i=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,a=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","pattern");e.setAttribute("patternUnits","userSpaceOnUse");var n=document.createElementNS("http://www.w3.org/2000/svg","image");e.appendChild(n);var a=r.uniqueId("pattern_");e.id=a,this.el=e,this.id=a,this.cfg=t;var o=i.exec(t)[2];n.setAttribute("href",o);var s=new Image();function u(){e.setAttribute("width",s.width),e.setAttribute("height",s.height);}return o.match(/^data:/i)||(s.crossOrigin="Anonymous"),s.src=o,s.complete?u():(s.onload=u,s.src=s.src),this;}return t.prototype.match=function(t,e){return this.cfg===e;},t;}();t.exports=a;},function(t,e){var n={svg:"svg",circle:"circle",rect:"rect",text:"text",path:"path",foreignObject:"foreignObject",polygon:"polygon",ellipse:"ellipse",image:"image"};t.exports=function(t,e,r){var i=r.target||r.srcElement;if(!n[i.tagName]){for(var a=i.parentNode;a&&!n[a.tagName];)a=a.parentNode;i=a;}return this._cfg.el===i?this:this.find(function(t){return t._cfg&&t._cfg.el===i;});};}]);});},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(20),a=n(1),o=n(417);i.registerNode("image",{options:{img:"https://img2.bosszhipin.com/boss/avatar/avatar_13.png",size:200,clipCfg:{show:!1,type:"circle",r:50,rx:50,ry:35,width:50,height:35,points:[[30,12],[12,30],[30,48],[48,30]],path:[["M",25,25],["L",50,25],["A",12.5,12.5,0,1,1,50,50],["A",12.5,12.5,0,1,0,50,50],["L",25,75],["Z"]],x:0,y:0,style:{lineWidth:1}}},shapeType:"image",labelPosition:"bottom",drawShape:function(t,e){var n=this.shapeType,r=this.getShapeStyle(t),i=e.addShape(n,{attrs:r});return this.drawClip(t,i),i;},drawClip:function(t,e){var n=a.mix({},this.options.clipCfg,t.clipCfg);if(n.show){var i=n.type,s=n.x,u=n.y,c=n.style,f=null;if("circle"===i){var h=n.r;f=new o.Circle({attrs:r({r:h,x:s,y:u},c)});}else if("rect"===i){var l=n.width,d=n.height;f=new o.Rect({attrs:r({x:s,y:u,width:l,height:d},c)});}else if("ellipse"===i){var p=n.rx,g=n.ry;f=new o.Ellipse({attrs:r({x:s,y:u,rx:p,ry:g},c)});}else if("polygon"===i){var v=n.points;f=new o.Polygon({attrs:r({points:v},c)});}else if("path"===i){var m=n.path;f=new o.Path({attrs:r({path:m},c)});}f&&e.attr("clip",f);}},getShapeStyle:function(t){var e=this.getSize(t),n=t.img||this.options.img,r=e[0],i=e[1];return a.mix({},{x:0-r/2,y:0-i/2,width:r,height:i,img:n},t.style);}},"single-shape");},function(t,e,n){function r(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}function i(){return (i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var a=n(20),o=n(2),s=n(10);a.registerNode("star",{options:{size:60,style:{stroke:s.defaultShapeStrokeColor,fill:s.defaultShapeFillColor,lineWidth:1},labelCfg:{style:{fill:"#595959"},offset:0},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,left:!1,leftBottom:!1,rightBottom:!1,size:3,lineWidth:1,fill:"#fff",stroke:"#72CC4A"},icon:{show:!1,img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",width:16,height:16}},shapeType:"star",labelPosition:"center",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.icon,a=n.icon,s=this.getShapeStyle(t),u=o({},r,a,t.icon),c=e.addShape("path",{attrs:s}),f=u.width,h=u.height;u.show&&e.addShape("image",{attrs:i({x:-f/2,y:-h/2},u),className:"star-icon"}).set("capture",!1);return this.drawLinkPoints(t,e),c;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.linkPoints,s=n.linkPoints,u=o({},a,s,t.linkPoints),c=u.top,f=u.left,h=u.right,l=u.leftBottom,d=u.rightBottom,p=u.size,g=r(u,["top","left","right","leftBottom","rightBottom","size"]),v=this.getSize(t)[0];if(h){var m=Math.cos(.1*Math.PI)*v,y=Math.sin(.1*Math.PI)*v;e.addShape("circle",{attrs:i({},g,{x:m,y:-y,r:p}),className:"star-mark-right"});}if(c){var x=Math.cos(.5*Math.PI)*v,b=Math.sin(.5*Math.PI)*v;e.addShape("circle",{attrs:i({},g,{x:x,y:-b,r:p}),className:"star-mark-top"});}if(f){var w=Math.cos(.9*Math.PI)*v,_=Math.sin(.9*Math.PI)*v;e.addShape("circle",{attrs:i({},g,{x:w,y:-_,r:p}),className:"star-mark-left"});}if(l){var M=Math.cos(1.3*Math.PI)*v,S=Math.sin(1.3*Math.PI)*v;e.addShape("circle",{attrs:i({},g,{x:M,y:-S,r:p}),className:"star-mark-left-bottom"});}if(d){var P=Math.cos(1.7*Math.PI)*v,A=Math.sin(1.7*Math.PI)*v;e.addShape("circle",{attrs:i({},g,{x:P,y:-A,r:p}),className:"star-mark-right-bottom"});}},getPath:function(t){for(var e=(this.getCustomConfig(t)||{}).innerR,n=this.getSize(t)[0],r=3*n/8,i=t.innerR||e||r,a=[],o=0;o<5;o++){var s=Math.cos((18+72*o)/180*Math.PI)*n,u=Math.sin((18+72*o)/180*Math.PI)*n,c=Math.cos((54+72*o)/180*Math.PI)*i,f=Math.sin((54+72*o)/180*Math.PI)*i;0===o?a.push(["M",s,-u]):a.push(["L",s,-u]),a.push(["L",c,-f]);}return a.push(["Z"]),a;},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,a={stroke:t.color},s=o({},n,r,a,t.style);return i({path:this.getPath(t)},s);},update:function(t,e){var n=e.getContainer(),r=this.getCustomConfig(t)||{},a=this.options,s=a.style,u=a.icon,c=a.labelCfg,f=r.style,h=r.icon,l=r.labelCfg,d=o({},s,f,t.style),p=o({},u,h,t.icon),g=e.get("keyShape"),v=this.getPath(t);g.attr(i({path:v},d));var m=o({},c,l,t.labelCfg),y=this.getLabelStyle(t,m,n),x=n.findByClassName("node-label");x&&x.attr(i({},y));var b=n.findByClassName("star-icon");if(b){var w=p.width,_=p.height;b.attr(i({x:-w/2,y:-_/2},p));}this.updateLinkPoints(t,n);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.linkPoints,s=n.linkPoints,u=o({},a,s,t.linkPoints),c=u.size,f=r(u,["size"]),h=this.getSize(t)[0],l=e.findByClassName("star-mark-right");if(l){var d=Math.cos(.1*Math.PI)*h,p=Math.sin(.1*Math.PI)*h;l.attr(i({},f,{x:d,y:-p,r:c}));}var g=e.findByClassName("star-mark-top");if(g){var v=Math.cos(.5*Math.PI)*h,m=Math.sin(.5*Math.PI)*h;g.attr(i({},f,{x:v,y:-m,r:c}));}var y=e.findByClassName("star-mark-left");if(y){var x=Math.cos(.9*Math.PI)*h,b=Math.sin(.9*Math.PI)*h;y.attr(i({},f,{x:x,y:-b,r:c}));}var w=e.findByClassName("star-mark-left-bottom");if(w){var _=Math.cos(1.3*Math.PI)*h,M=Math.sin(1.3*Math.PI)*h;w.attr(i({},f,{x:_,y:-M,r:c}));}var S=e.findByClassName("star-mark-right-bottom");if(S){var P=Math.cos(1.7*Math.PI)*h,A=Math.sin(1.7*Math.PI)*h;S.attr(i({},f,{x:P,y:-A,r:c}));}}},"single-shape");},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}function i(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}var a=n(20),o=n(2),s=n(1);a.registerNode("modelRect",{options:{size:[185,70],style:{radius:5,stroke:"#69c0ff",fill:"#ffffff",lineWidth:1,fillOpacity:1},labelCfg:{style:{fill:"#595959",fontSize:14},offset:30},stateStyles:{hover:{lineWidth:2,stroke:"#1890ff",fill:"#e6f7ff"},selected:{lineWidth:3,stroke:"#1890ff",fill:"#e6f7ff"}},preRect:{show:!0,width:4,fill:"#40a9ff",radius:2},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:3,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},logoIcon:{show:!0,x:0,y:0,img:"https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg",width:16,height:16,offset:0},stateIcon:{show:!0,x:0,y:0,img:"https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg",width:16,height:16,offset:-5},anchorPoints:[[0,.5],[1,.5]]},shapeType:"modelRect",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.preRect,s=n.preRect,u=this.getShapeStyle(t),c=this.getSize(t),f=c[0],h=c[1],l=e.addShape("rect",{attrs:u}),d=o({},a,s,t.preRect),p=d.show,g=i(d,["show"]);return p&&e.addShape("rect",{attrs:r({x:-f/2,y:-h/2,height:h},g),className:"pre-rect"}),this.drawLogoIcon(t,e),this.drawStateIcon(t,e),this.drawLinkPoints(t,e),l;},drawLogoIcon:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.logoIcon,s=n.logoIcon,u=o({},a,s,t.logoIcon),c=this.getSize(t)[0];if(u.show){var f=u.width,h=u.height,l=u.x,d=u.y,p=u.offset,g=i(u,["width","height","x","y","offset"]);e.addShape("image",{attrs:r({},g,{x:l||-c/2+f+p,y:d||-h/2,width:f,height:h}),className:"rect-logo-icon"}).set("capture",!1);}},drawStateIcon:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.stateIcon,s=n.stateIcon,u=o({},a,s,t.stateIcon),c=this.getSize(t)[0];if(u.show){var f=u.width,h=u.height,l=u.x,d=u.y,p=u.offset,g=i(u,["width","height","x","y","offset"]);e.addShape("image",{attrs:r({},g,{x:l||c/2-f+p,y:d||-h/2,width:f,height:h}),className:"rect-state-icon"}).set("capture",!1);}},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.linkPoints,s=n.linkPoints,u=o({},a,s,t.linkPoints),c=u.top,f=u.left,h=u.right,l=u.bottom,d=u.size,p=i(u,["top","left","right","bottom","size"]),g=this.getSize(t),v=g[0],m=g[1];f&&e.addShape("circle",{attrs:r({},p,{x:-v/2,y:0,r:d}),className:"rect-mark-left"}),h&&e.addShape("circle",{attrs:r({},p,{x:v/2,y:0,r:d}),className:"rect-mark-right"}),c&&e.addShape("circle",{attrs:r({},p,{x:0,y:-m/2,r:d}),className:"rect-mark-top"}),l&&e.addShape("circle",{attrs:r({},p,{x:0,y:m/2,r:d}),className:"rect-mark-bottom"});},drawLabel:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options,a=i.labelCfg,u=i.logoIcon,c=n.labelCfg,f=n.logoIcon,h=o({},u,f,t.logoIcon),l=o({},a,c,t.labelCfg),d=this.getSize(t)[0],p=null,g=h.show,v=h.width,m=-d/2+l.offset;g&&(m=-d/2+v+l.offset);var y=l.style;return t.description?(p=e.addShape("text",{attrs:r({},y,{y:-5,x:m,text:s.fittingString(t.label,100,14)})}),e.addShape("text",{attrs:{text:s.fittingString(t.description,75,12),fontSize:12,x:m,y:17,fill:"#bfbfbf"},className:"rect-description"})):p=e.addShape("text",{attrs:r({},y,{x:m,y:7,text:s.fittingString(t.label,70,14)})}),p;},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,i={stroke:t.color},a=o({},n,r,i,t.style),u=this.getSize(t),c=u[0],f=u[1];return s.mix({},{x:-c/2,y:-f/2,width:c,height:f},a);},update:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options,s=a.style,u=a.labelCfg,c=a.preRect,f=a.logoIcon,h=a.stateIcon,l=n.style,d=n.labelCfg,p=n.preRect,g=n.logoIcon,v=n.stateIcon,m=o({},s,l,t.style),y=this.getSize(t),x=y[0],b=y[1];e.get("keyShape").attr(r({},m,{x:-x/2,y:-b/2,width:x,height:b}));var w=e.getContainer(),_=o({},u,d,t.labelCfg),M=w.findByClassName("node-label"),S=o({},f,g,t.logoIcon),P=S.show,A=S.width,k=_.offset,C=_.style,E=-x/2+k;P&&(E=-x/2+A+k);var I=w.findByClassName("rect-description");I?(M&&M.attr(r({},C,{y:-5,x:E})),I.attr({x:E,y:17})):M&&M.attr(r({},C,{x:E,y:-5}));var N=w.findByClassName("pre-rect");if(N){var T=o({},c,p,t.preRect);N.attr(r({},T,{x:-x/2,y:-b/2,height:b}));}var O=w.findByClassName("rect-logo-icon");if(O){var j=S.width,B=S.height,L=S.x,D=S.y,R=S.offset,F=i(S,["width","height","x","y","offset"]);O.attr(r({},F,{x:L||-x/2+j+R,y:D||-B/2,width:j,height:B}));}var Y=w.findByClassName("rect-state-icon");if(Y){var z=o({},h,v,t.stateIcon),q=z.width,X=z.height,G=z.x,W=z.y,U=z.offset,H=i(z,["width","height","x","y","offset"]);Y.attr(r({},H,{x:G||x/2-q+U,y:W||-X/2,width:q,height:X}));}this.updateLinkPoints(t,w);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.linkPoints,i=n.linkPoints,a=o({},r,i,t.linkPoints),s=a.size,u=a.fill,c=a.stroke,f=a.lineWidth,h=this.getSize(t),l=h[0],d=h[1],p=e.findByClassName("rect-mark-left");p&&p.attr({x:-l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var g=e.findByClassName("rect-mark-right");g&&g.attr({x:l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var v=e.findByClassName("rect-mark-top");v&&v.attr({x:0,y:-d/2,r:s,fill:u,stroke:c,lineWidth:f});var m=e.findByClassName("rect-mark-bottom");m&&m.attr({x:0,y:d/2,r:s,fill:u,stroke:c,lineWidth:f});}},"single-shape");},function(t,e,n){function r(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}function i(){return (i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var a=n(20),o=n(2),s=n(10);a.registerNode("triangle",{options:{size:40,direction:"up",style:{stroke:s.defaultShapeStrokeColor,fill:s.defaultShapeFillColor,lineWidth:1},labelCfg:{style:{fill:"#595959"},offset:15},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:5,lineWidth:1,fill:"#fff",stroke:"#72CC4A"},icon:{show:!1,img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",width:16,height:16,offset:6}},shapeType:"triangle",labelPosition:"bottom",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options,a=r.icon,s=r.direction,u=n.icon,c=n.direction,f=this.getShapeStyle(t),h=o({},a,u,t.icon),l=t.direction||c||s,d=e.addShape("path",{attrs:f}),p=h.width,g=h.height,v=h.show,m=h.offset;if(v){var y=-p/2,x=-g/2;"up"!==l&&"down"!==l||(x+=m),"left"!==l&&"right"!==l||(y+=m),e.addShape("image",{attrs:i({x:y,y:x},h),className:"triangle-icon"}).set("capture",!1);}return this.drawLinkPoints(t,e),d;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options,s=a.linkPoints,u=a.direction,c=n.linkPoints,f=n.direction,h=o({},s,c,t.linkPoints),l=t.direction||f||u,d=h.top,p=h.left,g=h.right,v=h.bottom,m=h.size,y=r(h,["top","left","right","bottom","size"]),x=this.getSize(t)[0];if(p){var b=null,w=x*Math.sin(1/3*Math.PI),_=x*Math.sin(1/3*Math.PI);"up"===l?b=[-_,w]:"down"===l?b=[-_,-w]:"left"===l&&(b=[-_,_-w]),b&&e.addShape("circle",{attrs:i({},y,{x:b[0],y:b[1],r:m}),className:"triangle-mark-left"});}if(g){var M=null,S=x*Math.sin(1/3*Math.PI),P=x*Math.sin(1/3*Math.PI);"up"===l?M=[P,S]:"down"===l?M=[P,-S]:"right"===l&&(M=[P,P-S]),M&&e.addShape("circle",{attrs:i({},y,{x:M[0],y:M[1],r:m}),className:"triangle-mark-right"});}if(d){var A=null,k=x*Math.sin(1/3*Math.PI),C=x*Math.sin(1/3*Math.PI);"up"===l?A=[C-k,-k]:"left"===l?A=[C,-k]:"right"===l&&(A=[-C,-k]),A&&e.addShape("circle",{attrs:i({},y,{x:A[0],y:A[1],r:m}),className:"triangle-mark-top"});}if(v){var E=null,I=x*Math.sin(1/3*Math.PI),N=x*Math.sin(1/3*Math.PI);"down"===l?E=[-N+I,I]:"left"===l?E=[N,I]:"right"===l&&(E=[-N,I]),E&&e.addShape("circle",{attrs:i({},y,{x:E[0],y:E[1],r:m}),className:"triangle-mark-bottom"});}},getPath:function(t){var e=this.getCustomConfig(t)||{},n=this.options.direction,r=e.direction,i=t.direction||r||n,a=this.getSize(t)[0],o=a*Math.sin(1/3*Math.PI),s=a*Math.sin(1/3*Math.PI),u=[["M",-s,o],["L",0,-o],["L",s,o],["Z"]];return "down"===i?u=[["M",-s,-o],["L",s,-o],["L",0,o],["Z"]]:"left"===i?u=[["M",-s,s-o],["L",s,-s],["L",s,s],["Z"]]:"right"===i&&(u=[["M",s,s-o],["L",-s,s],["L",-s,-s],["Z"]]),u;},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,a={stroke:t.color},s=o({},n,r,a,t.style);return i({path:this.getPath(t)},s);},update:function(t,e){var n=e.getContainer(),r=this.getCustomConfig(t)||{},a=this.options,s=a.style,u=a.icon,c=a.labelCfg,f=r.style,h=r.icon,l=r.labelCfg,d=o({},s,f,t.style),p=o({},u,h,t.icon),g=e.get("keyShape"),v=this.getPath(t);g.attr(i({path:v},d));var m=o({},c,l,t.labelCfg),y=this.getLabelStyle(t,m,n),x=n.findByClassName("node-label");x&&x.attr(i({},y));var b=n.findByClassName("triangle-icon");if(b){var w=p.width,_=p.height;b.attr(i({x:-w/2,y:-_/2},p));}this.updateLinkPoints(t,n);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options,s=a.linkPoints,u=a.direction,c=n.linkPoints,f=n.direction,h=o({},s,c,t.linkPoints),l=t.direction||f||u,d=h.size,p=r(h,["size"]),g=this.getSize(t)[0],v=e.findByClassName("triangle-mark-left");if(v){var m=null,y=g*Math.sin(1/3*Math.PI),x=g*Math.sin(1/3*Math.PI);"up"===l?m=[-x,y]:"down"===l?m=[-x,-y]:"left"===l&&(m=[-x,x-y]),m&&v.attr(i({},p,{x:m[0],y:m[1],r:d}));}var b=e.findByClassName("triangle-mark-right");if(b){var w=null,_=g*Math.sin(1/3*Math.PI),M=g*Math.sin(1/3*Math.PI);"up"===l?w=[M,_]:"down"===l?w=[M,-_]:"right"===l&&(w=[M,M-_]),w&&b.attr(i({},p,{x:w[0],y:w[1],r:d}));}var S=e.findByClassName("triangle-mark-top");if(S){var P=null,A=g*Math.sin(1/3*Math.PI),k=g*Math.sin(1/3*Math.PI);"up"===l?P=[k-A,-A]:"left"===l?P=[k,-A]:"right"===l&&(P=[-k,-A]),P&&S.attr(i({},p,{x:P[0],y:P[1],r:d}));}var C=e.findByClassName("triangle-mark-bottom");if(C){var E=null,I=g*Math.sin(1/3*Math.PI),N=g*Math.sin(1/3*Math.PI);"down"===l?E=[-N+I,I]:"left"===l?E=[N,I]:"right"===l&&(E=[-N,I]),E&&C.attr(i({},p,{x:E[0],y:E[1],r:d}));}}},"single-shape");},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(20),a=n(2),o=n(10);i.registerNode("diamond",{options:{size:[100,100],style:{stroke:o.defaultShapeStrokeColor,fill:o.defaultShapeFillColor,lineWidth:1},labelCfg:{style:{fill:"#595959"}},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:3,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},icon:{show:!1,img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",width:16,height:16}},shapeType:"circle",labelPosition:"center",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options.icon,o=n.icon,s=this.getShapeStyle(t),u=a({},i,o,t.icon),c=e.addShape("path",{attrs:s}),f=u.width,h=u.height;u.show&&e.addShape("image",{attrs:r({x:-f/2,y:-h/2},u),className:"diamond-icon"}).set("capture",!1);return this.drawLinkPoints(t,e),c;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options.linkPoints,o=n.linkPoints,s=a({},i,o,t.linkPoints),u=s.top,c=s.left,f=s.right,h=s.bottom,l=s.size,d=function(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}(s,["top","left","right","bottom","size"]),p=this.getSize(t),g=p[0],v=p[1];c&&e.addShape("circle",{attrs:r({},d,{x:-g/2,y:0,r:l}),className:"diamond-mark-left"}),f&&e.addShape("circle",{attrs:r({},d,{x:g/2,y:0,r:l}),className:"diamond-mark-right"}),u&&e.addShape("circle",{attrs:r({},d,{x:0,y:-v/2,r:l}),className:"diamond-mark-top"}),h&&e.addShape("circle",{attrs:r({},d,{x:0,y:v/2,r:l}),className:"diamond-mark-bottom"});},getPath:function(t){var e=this.getSize(t),n=e[0],r=e[1];return [["M",0,-r/2],["L",n/2,0],["L",0,r/2],["L",-n/2,0],["Z"]];},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,i=e.style,o={stroke:t.color},s=a({},n,i,o,t.style);return r({path:this.getPath(t)},s);},update:function(t,e){var n=e.getContainer(),i=this.getCustomConfig(t)||{},o=this.options,s=o.style,u=o.icon,c=o.labelCfg,f=i.style,h=i.icon,l=i.labelCfg,d=a({},s,f,t.style),p=a({},u,h,t.icon),g=e.get("keyShape"),v=this.getPath(t);g.attr(r({path:v},d));var m=a({},c,l,t.labelCfg),y=this.getLabelStyle(t,m,n),x=n.findByClassName("node-label");x&&x.attr(r({},y));var b=n.findByClassName("diamond-icon");if(b){var w=p.width,_=p.height;b.attr(r({x:-w/2,y:-_/2},p));}this.updateLinkPoints(t,n);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.linkPoints,i=n.linkPoints,o=a({},r,i,t.linkPoints),s=o.size,u=o.fill,c=o.stroke,f=o.lineWidth,h=this.getSize(t),l=h[0],d=h[1],p=e.findByClassName("diamond-mark-left");p&&p.attr({x:-l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var g=e.findByClassName("diamond-mark-right");g&&g.attr({x:l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var v=e.findByClassName("diamond-mark-top");v&&v.attr({x:0,y:-d/2,r:s,fill:u,stroke:c,lineWidth:f});var m=e.findByClassName("diamond-mark-bottom");m&&m.attr({x:0,y:d/2,r:s,fill:u,stroke:c,lineWidth:f});}},"single-shape");},function(t,e,n){function r(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}function i(){return (i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var a=n(20),o=n(2),s=n(1),u=n(10);a.registerNode("ellipse",{options:{size:[120,60],style:{x:0,y:0,stroke:u.defaultShapeStrokeColor,fill:u.defaultShapeFillColor,lineWidth:1},labelCfg:{style:{fill:"#595959"}},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:3,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},icon:{show:!1,img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",width:36,height:36}},shapeType:"ellipse",labelPosition:"center",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.icon,a=n.icon,s=this.getShapeStyle(t),u=o({},r,a,t.icon),c=e.addShape("ellipse",{attrs:s}),f=u.width,h=u.height;u.show&&e.addShape("image",{attrs:i({x:-f/2,y:-h/2},u),className:"ellipse-icon"}).set("capture",!1);return this.drawLinkPoints(t,e),c;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.linkPoints,s=n.linkPoints,u=o({},a,s,t.linkPoints),c=u.top,f=u.left,h=u.right,l=u.bottom,d=u.size,p=r(u,["top","left","right","bottom","size"]),g=this.getSize(t),v=g[0]/2,m=g[1]/2;f&&e.addShape("circle",{attrs:i({},p,{x:-v,y:0,r:d}),className:"ellipse-mark-left"}),h&&e.addShape("circle",{attrs:i({},p,{x:v,y:0,r:d}),className:"ellipse-mark-right"}),c&&e.addShape("circle",{attrs:i({},p,{x:0,y:-m,r:d}),className:"ellipse-mark-top"}),l&&e.addShape("circle",{attrs:i({},p,{x:0,y:m,r:d}),className:"ellipse-mark-bottom"});},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,i={stroke:t.color},a=o({},n,r,i,t.style),u=this.getSize(t),c=u[0]/2,f=u[1]/2;return s.mix({},{x:0,y:0,rx:c,ry:f},a);},update:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options,a=r.style,s=r.icon,u=r.labelCfg,c=n.style,f=n.icon,h=n.labelCfg,l=o({},a,c,t.style),d=o({},s,f,t.icon),p=this.getSize(t),g=p[0]/2,v=p[1]/2;e.get("keyShape").attr(i({},l,{rx:g,ry:v}));var m=e.getContainer(),y=o({},u,h,t.labelCfg),x=this.getLabelStyle(t,y,m),b=m.findByClassName("node-label");b&&b.attr(i({},x));var w=m.findByClassName("ellipse-icon"),_=d.width,M=d.height;w&&w.attr(i({x:-_/2,y:-M/2},d)),this.updateLinkPoints(t,m);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},a=this.options.linkPoints,s=n.linkPoints,u=o({},a,s,t.linkPoints),c=u.size,f=r(u,["size"]),h=this.getSize(t),l=h[0]/2,d=h[1]/2,p=e.findByClassName("ellipse-mark-left");p&&p.attr(i({},f,{x:-l,y:0,r:c}));var g=e.findByClassName("ellipse-mark-right");g&&g.attr(i({},f,{x:l,y:0,r:c}));var v=e.findByClassName("ellipse-mark-top");v&&v.attr(i({},f,{x:0,y:-d,r:c}));var m=e.findByClassName("ellipse-mark-bottom");m&&m.attr(i({},f,{x:0,y:d,r:c}));}},"single-shape");},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(20),a=n(2),o=n(1),s=n(10);i.registerNode("rect",{options:{size:[100,30],style:{radius:0,stroke:s.defaultShapeStrokeColor,fill:s.defaultShapeFillColor,lineWidth:1,fillOpacity:1},labelCfg:{style:{fill:"#595959",fontSize:12}},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:3,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},markPoints:[[0,.5],[1,.5]]},shapeType:"rect",drawShape:function(t,e){var n=this.getShapeStyle(t),r=e.addShape("rect",{attrs:n,className:"rect-keyShape"});return this.drawLinkPoints(t,e),r;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options.linkPoints,o=n.linkPoints,s=a({},i,o,t.linkPoints),u=s.top,c=s.left,f=s.right,h=s.bottom,l=s.size,d=function(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}(s,["top","left","right","bottom","size"]),p=this.getSize(t),g=p[0],v=p[1];c&&e.addShape("circle",{attrs:r({},d,{x:-g/2,y:0,r:l}),className:"rect-mark-left"}),f&&e.addShape("circle",{attrs:r({},d,{x:g/2,y:0,r:l}),className:"rect-mark-right"}),u&&e.addShape("circle",{attrs:r({},d,{x:0,y:-v/2,r:l}),className:"rect-mark-top"}),h&&e.addShape("circle",{attrs:r({},d,{x:0,y:v/2,r:l}),className:"rect-mark-bottom"});},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,i={stroke:t.color},s=a({},n,r,i,t.style),u=this.getSize(t),c=u[0],f=u[1];return o.mix({},{x:-c/2,y:-f/2,width:c,height:f},s);},update:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options,o=i.style,s=i.labelCfg,u=n.style,c=n.labelCfg,f=a({},o,u,t.style),h=this.getSize(t),l=h[0],d=h[1];e.get("keyShape").attr(r({x:-l/2,y:-d/2,width:l,height:d},f));var p=e.getContainer(),g=a({},s,c,t.labelCfg),v=this.getLabelStyle(t,g,p),m=p.findByClassName("node-label");m&&m.attr(r({},v)),this.updateLinkPoints(t,p);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.linkPoints,i=n.linkPoints,o=a({},r,i,t.linkPoints),s=o.size,u=o.fill,c=o.stroke,f=o.lineWidth,h=this.getSize(t),l=h[0],d=h[1],p=e.findByClassName("rect-mark-left");p&&p.attr({x:-l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var g=e.findByClassName("rect-mark-right");g&&g.attr({x:l/2,y:0,r:s,fill:u,stroke:c,lineWidth:f});var v=e.findByClassName("rect-mark-top");v&&v.attr({x:0,y:-d/2,r:s,fill:u,stroke:c,lineWidth:f});var m=e.findByClassName("rect-mark-bottom");m&&m.attr({x:0,y:d/2,r:s,fill:u,stroke:c,lineWidth:f});}},"single-shape");},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(20),a=n(2),o=n(1),s=n(10);i.registerNode("circle",{options:{size:60,style:{x:0,y:0,stroke:s.defaultShapeStrokeColor,fill:s.defaultShapeFillColor,lineWidth:1},labelCfg:{style:{fill:"#595959"},offset:0},stateStyles:{hover:{fillOpacity:.8},selected:{lineWidth:3}},linkPoints:{top:!1,right:!1,bottom:!1,left:!1,size:3,lineWidth:1,fill:"#72CC4A",stroke:"#72CC4A"},icon:{show:!1,img:"https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg",width:16,height:16}},shapeType:"circle",labelPosition:"center",drawShape:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options.icon,o=n.icon,s=this.getShapeStyle(t),u=a({},i,o,t.icon),c=e.addShape("circle",{attrs:s}),f=u.width,h=u.height;u.show&&e.addShape("image",{attrs:r({x:-f/2,y:-h/2},u),className:"circle-icon"}).set("capture",!1);return this.drawLinkPoints(t,e),c;},drawLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options.linkPoints,o=n.linkPoints,s=a({},i,o,t.linkPoints),u=s.top,c=s.left,f=s.right,h=s.bottom,l=s.size,d=function(t,e){if(null==t)return {};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i;}(s,["top","left","right","bottom","size"]),p=this.getSize(t)[0]/2;c&&e.addShape("circle",{attrs:r({},d,{x:-p,y:0,r:l}),className:"circle-mark-left"}),f&&e.addShape("circle",{attrs:r({},d,{x:p,y:0,r:l}),className:"circle-mark-right"}),u&&e.addShape("circle",{attrs:r({},d,{x:0,y:-p,r:l}),className:"circle-mark-top"}),h&&e.addShape("circle",{attrs:r({},d,{x:0,y:p,r:l}),className:"circle-mark-bottom"});},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,i={stroke:t.color},s=a({},n,r,i,t.style),u=this.getSize(t)[0]/2;return o.mix({},{x:0,y:0,r:u},s);},update:function(t,e){var n=this.getCustomConfig(t)||{},i=this.options,o=i.style,s=i.icon,u=i.labelCfg,c=n.style,f=n.icon,h=n.labelCfg,l=a({},o,c,t.style),d=a({},s,f,t.icon),p=this.getSize(t)[0]/2,g=e.getContainer();e.get("keyShape").attr(r({},l,{r:p}));var v=a({},u,h,t.labelCfg),m=this.getLabelStyle(t,v,g),y=g.findByClassName("node-label");y&&y.attr(r({},m));var x=g.findByClassName("circle-icon"),b=d.width,w=d.height;x&&x.attr(r({x:-b/2,y:-w/2},d)),this.updateLinkPoints(t,g);},updateLinkPoints:function(t,e){var n=this.getCustomConfig(t)||{},r=this.options.linkPoints,i=n.linkPoints,o=a({},r,i,t.linkPoints),s=o.size,u=o.fill,c=o.stroke,f=o.lineWidth,h=this.getSize(t)[0]/2,l=e.findByClassName("circle-mark-left");l&&l.attr({x:-h,y:0,r:s,fill:u,stroke:c,lineWidth:f});var d=e.findByClassName("circle-mark-right");d&&d.attr({x:h,y:0,r:s,fill:u,stroke:c,lineWidth:f});var p=e.findByClassName("circle-mark-top");p&&p.attr({x:0,y:-h,r:s,fill:u,stroke:c,lineWidth:f});var g=e.findByClassName("circle-mark-bottom");g&&g.attr({x:0,y:h,r:s,fill:u,stroke:c,lineWidth:f});}},"single-shape");},function(t,e,n){n(425),n(424),n(423),n(422),n(421),n(420),n(419),n(418);},function(t,e,n){var r=n(20),i=n(1),a=n(10),o=n(170);r.registerFactory("edge",{defaultShapeType:"line"});var s=i.mix({},o,{itemType:"edge",labelPosition:"center",labelAutoRotate:!1,getPath:function(t){var e=[];return i.each(t,function(t,n){0===n?e.push(["M",t.x,t.y]):e.push(["L",t.x,t.y]);}),e;},getShapeStyle:function(t){var e=this.getCustomConfig(t)||{},n=this.options.style,r=e.style,o={stroke:t.color},s=i.deepMix({},n,r,o,t.style),u=t.size||a.defaultEdge.size,c=(t=this.getPathPoints(t)).startPoint,f=t.endPoint,h=this.getControlPoints(t),l=[c];h&&(l=l.concat(h)),l.push(f);var d=this.getPath(l);return i.mix({},a.defaultEdge.style,{stroke:a.defaultEdge.color,lineWidth:u,path:d},s);},getLabelStyleByPosition:function(t,e,n){var r,a=e.position||this.labelPosition,o={},s=n.findByClassName("edge-shape");r="start"===a?0:"end"===a?1:.5;var u=e.refX,c=e.refY;if(t.startPoint.x===t.endPoint.x&&t.startPoint.y===t.endPoint.y)return o.x=t.startPoint.x+u?u:0,o.y=t.endPoint.y+c?c:0,o;var f=i.isNil(e.autoRotate)?this.labelAutoRotate:e.autoRotate,h=i.getLabelPosition(s,r,u,c,f);return o.x=h.x,o.y=h.y,o.rotate=h.rotate,o.textAlign=this._getTextAlign(a,h.angle),o;},_getTextAlign:function(t,e){var n="center";return e?(e%=2*Math.PI,"center"!==t&&(n=e>=0&&e<=Math.PI/2||e>=1.5*Math.PI&&e<2*Math.PI?t:function(t){var e=t;return "start"===t?e="end":"end"===t&&(e="start"),e;}(t)),n):t;},getControlPoints:function(t){return t.controlPoints;},getPathPoints:function(t){return t;},drawShape:function(t,e){var n=this.getShapeStyle(t);return e.addShape("path",{className:"edge-shape",attrs:n});},drawLabel:function(t,e){var n=(this.getCustomConfig(t)||{}).default||{},r=i.deepMix({},this.options.labelCfg,n.labelCfg,t.labelCfg),a=this.getLabelStyle(t,r,e);return e.addShape("text",{attrs:a});}});r.registerEdge("single-line",s),r.registerEdge("line",{getControlPoints:function(){return [];}},"single-line"),r.registerEdge("spline",{getPath:function(t){return i.getSpline(t);}},"single-line"),r.registerEdge("arc",{curveOffset:20,clockwise:1,getControlPoints:function(t){var e,n,r=t.startPoint,a=t.endPoint,o=(r.x+a.x)/2,s=(r.y+a.y)/2;if(void 0!==t.controlPoints){if(n=t.controlPoints[0],e=i.getCircleCenterByPoints(r,n,a),r.x<=a.x&&r.y>a.y?this.clockwise=e.x>o?1:0:r.x<=a.x&&r.y<a.y?this.clockwise=e.x>o?0:1:(r.x>a.x&&(r.y,a.y),this.clockwise=e.y<s?1:0),(n.x-r.x)/(n.y-r.y)==(a.x-r.x)/(a.y-r.y))return [];}else{void 0!==t.curveOffset&&(this.curveOffset=t.curveOffset),this.curveOffset<0?this.clockwise=0:this.clockwise=1;var u={x:a.x-r.x,y:a.y-r.y},c=Math.atan2(u.y,u.x);n={x:this.curveOffset*Math.cos(-Math.PI/2+c)+o,y:this.curveOffset*Math.sin(-Math.PI/2+c)+s},e=i.getCircleCenterByPoints(r,n,a);}var f=i.distance(r,e);return [{x:f,y:f}];},getPath:function(t){var e=[];return e.push(["M",t[0].x,t[0].y]),2===t.length?e.push(["L",t[1].x,t[1].y]):e.push(["A",t[1].x,t[1].y,0,0,this.clockwise,t[2].x,t[2].y]),e;}},"single-line"),r.registerEdge("quadratic",{curvePosition:.5,curveOffset:-20,getControlPoints:function(t){var e=t.controlPoints;if(!e||!e.length){var n=t.startPoint,r=t.endPoint;e=[i.getControlPoint(n,r,this.curvePosition,this.curveOffset)];}return e;},getPath:function(t){var e=[];return e.push(["M",t[0].x,t[0].y]),e.push(["Q",t[1].x,t[1].y,t[2].x,t[2].y]),e;}},"single-line"),r.registerEdge("cubic",{curvePosition:[.5,.5],curveOffset:[-20,20],getControlPoints:function(t){var e=t.controlPoints;if(!e||!e.length){var n=t.startPoint,r=t.endPoint;e=[i.getControlPoint(n,r,this.curvePosition[0],this.curveOffset[0]),i.getControlPoint(n,r,this.curvePosition[1],this.curveOffset[1])];}return e;},getPath:function(t){var e=[];return e.push(["M",t[0].x,t[0].y]),e.push(["C",t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),e;}},"single-line"),r.registerEdge("cubic-vertical",{curvePosition:[.5,.5],getControlPoints:function(t){var e=t.startPoint,n=t.endPoint;return [{x:e.x,y:(n.y-e.y)*this.curvePosition[0]+e.y},{x:n.x,y:(n.y-e.y)*this.curvePosition[1]+e.y}];}},"cubic"),r.registerEdge("cubic-horizontal",{curvePosition:[.5,.5],getControlPoints:function(t){var e=t.startPoint,n=t.endPoint;return [{x:(n.x-e.x)*this.curvePosition[0]+e.x,y:e.y},{x:(n.x-e.x)*this.curvePosition[1]+e.x,y:n.y}];}},"cubic"),r.registerEdge("loop",{getPathPoints:function(t){return i.getLoopCfgs(t);},getControlPoints:function(t){return t.controlPoints;},afterDraw:function(t){t.controlPoints=null;},afterUpdate:function(t){t.controlPoints=null;}},"cubic");},function(t,e,n){var r=n(20),i=n(1),a=n(10),o=n(170);r.registerFactory("node",{defaultShapeType:"circle"});var s=i.mix({},o,{itemType:"node",shapeType:"",labelPosition:"center",getSize:function(t){var e=this.getCustomConfig(t)||{},n=t.size||e.size||this.options.size||a.defaultNode.size;return i.isArray(n)||(n=[n,n]),n;},getLabelStyleByPosition:function(t,e){var n=e.position||this.labelPosition;if("center"===n)return {x:0,y:0};var r=e.offset;i.isNil(r)&&(r=a.nodeLabel.offset);var o,s=this.getSize(t),u=s[0],c=s[1];switch(n){case"top":o={x:0,y:0-c/2-r,textBaseline:"bottom"};break;case"bottom":o={x:0,y:c/2+r,textBaseline:"top"};break;case"left":o={x:0-u/2-r,y:0,textAlign:"right"};break;default:o={x:u/2+r,y:0,textAlign:"left"};}return o;},drawShape:function(t,e){var n=this.shapeType,r=this.getShapeStyle(t);return e.addShape(n,{attrs:r});}});r.registerNode("single-shape",s);},function(t,e,n){var r=n(1),i=n(78).Group;t.exports=r.augment(i,{findByClassName:function(t){return this.find(function(e){return e.get("className")===t;});}});},function(t,e,n){n.r(e),n.d(e,"calcStrLen",function(){return r;}),n.d(e,"fittingString",function(){return i;});var r=function(t){for(var e=0,n=0;n<t.length;n++)t.charCodeAt(n)>0&&t.charCodeAt(n)<128?e++:e+=2;return e;},i=function(t,e,n){var i=1.3*n;e*=2;if(r(t)*i>e){var a=Math.floor((e-10)/i);return t.substring(0,a)+"…";}return t;};},function(t,e,n){var r=n(99),i=r.cloneDeep,a=r.groupBy,o=r.merge;t.exports={groupMapNodes:{},nodeArr:[],flatToTree:function(t,e,n){void 0===e&&(e="id"),void 0===n&&(n="parentId");var r=[],i=[],a=t.groups;return a.forEach(function(t){r[t[e]]=t;}),a.forEach(function(t){var e=r[t[n]];e?(!e.children&&(e.children=[]),e.children.push(t)):i.push(t);}),i;},addNodesToParentNode:function(t,e){var n=this;return function(t){t.forEach(function(t){t.children?(n.nodeArr.push({id:t.id,parentId:t.parentId}),n.addNodesToParentNode(t.children,e)):n.nodeArr.push({id:t.id,parentId:t.parentId});}),n.nodeArr.length>0&&function t(e){if(0!==e.length){var r=e.shift(),a=i(e);n.groupMapNodes[r.id]=a,t(e);}}(n.nodeArr);n.nodeArr.length=0;}(t),this.groupMapNodes;},getAllNodeInGroups:function(t){var e=a(t.groups,"id"),n=a(t.groups,"parentId"),r={};for(var i in n)if(i){var s=n[i],u=e[i];if(u&&s){var c=[].concat(s,u);r[i]=c;}else s&&(r[i]=s);}var f=o({},e,r),h={};for(var l in f)if(l&&"undefined"!==l){var d=f[l].map(function(t){return t.id;});h[l]=d;}var p={},g=function(e){if(!e||"undefined"===e)return "continue";var n=[],r=h[e],i=Array.isArray(r),a=0;for(r=i?r:r[Symbol.iterator]();;){var o;if(i){if(a>=r.length)break;o=r[a++];}else{if((a=r.next()).done)break;o=a.value;}var s=f[o].map(function(t){return t.id;});n.push.apply(n,s);}var u=t.nodes.filter(function(t){return n.indexOf(t.groupId)>-1;}).map(function(t){return t.id;});p[e]=u;};for(var v in h)g(v);return p;}};},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(171),a=n(70),o=n(10),s=Math.PI,u=Math.sin,c=Math.cos,f=u(s/8),h=c(s/8);var l={getBBox:function(t,e){var n=t.getBBox(),r={x:n.minX,y:n.minY},a={x:n.maxX,y:n.maxY};if(e){var o=e.getMatrix();r=i.applyMatrix(r,o),a=i.applyMatrix(a,o);}return {minX:r.x,minY:r.y,maxX:a.x,maxY:a.y};},getLoopCfgs:function(t){var e=t.sourceNode||t.targetNode,n=e.get("group").getMatrix(),r=e.getKeyShape().getBBox(),i=t.loopCfg||{},s=i.dist||2*Math.max(r.width,r.height),u=i.position||o.loopPosition,c=Math.max(r.width,r.height)/2,l=(c+s)/c,d=[n[6],n[7]],p=c*f,g=c*h,v=[t.startPoint.x,t.startPoint.y],m=[t.endPoint.x,t.endPoint.y];if(v[0]===m[0]&&v[1]===m[1]){switch(u){case"top":v=[d[0]-p,d[1]-g],m=[d[0]+p,d[1]-g];break;case"top-right":v=[d[0]+p,d[1]-g],m=[d[0]+g,d[1]-p];break;case"right":v=[d[0]+g,d[1]-p],m=[d[0]+g,d[1]+p];break;case"bottom-right":v=[d[0]+g,d[1]+p],m=[d[0]+p,d[1]+g];break;case"bottom":v=[d[0]+p,d[1]+g],m=[d[0]-p,d[1]+g];break;case"bottom-left":v=[d[0]-p,d[1]+g],m=[d[0]-g,d[1]+p];break;case"left":v=[d[0]-g,d[1]+p],m=[d[0]-g,d[1]-p];break;case"top-left":v=[d[0]-g,d[1]-p],m=[d[0]-p,d[1]-g];break;default:v=[d[0]-p,d[1]-g],m=[d[0]+p,d[1]-g];}if(!1===i.clockwise){var y=[v[0],v[1]];v=[m[0],m[1]],m=[y[0],y[1]];}}var x=[v[0]-d[0],v[1]-d[1]],b=a.vec2.scale([],x,l),w=[d[0]+b[0],d[1]+b[1]],_=[m[0]-d[0],m[1]-d[1]],M=a.vec2.scale([],_,l),S=[d[0]+M[0],d[1]+M[1]];return t.startPoint={x:v[0],y:v[1]},t.endPoint={x:m[0],y:m[1]},t.controlPoints=[{x:w[0],y:w[1]},{x:S[0],y:S[1]}],t;},traverseTree:function(t,e){"function"==typeof e&&function t(e,n){!1!==n(e)&&a.each(e.children,function(e){t(e,n);});}(t,e);},radialLayout:function(t,e){var n={x:1/0,y:1/0},r={x:-1/0,y:-1/0},i="x",a="y";e&&["V","TB","BT"].indexOf(e)>=0&&(a="x",i="y");var o=0;this.traverseTree(t,function(t){o++,t.x>r.x&&(r.x=t.x),t.x<n.x&&(n.x=t.x),t.y>r.y&&(r.y=t.y),t.y<n.y&&(n.y=t.y);});var u=2*s/o,c=r[a]-n[a];return 0===c?t:(this.traverseTree(t,function(e){var r=(e[a]-n[a])/c*(2*s-u)+u,o=Math.abs("x"===i?e.x-t.x:e.y-t.y);e.x=o*Math.cos(r),e.y=o*Math.sin(r);}),t);},getLabelPosition:function(t,e,n,i,a){var o=[],f=t.getPoint(e);if(null===f)return {x:0,y:0,angle:0};if(e<1e-4)o=t.getStartTangent().reverse();else if(e>.9999)o=t.getEndTangent();else{var h=t.getPoint(e+1e-4);o.push([f.x,f.y]),o.push([h.x,h.y]);}var l=Math.atan2(o[1][1]-o[0][1],o[1][0]-o[0][0]);if(l<0&&(l+=2*s),n&&(f.x+=c(l)*n,f.y+=u(l)*n),i){var d=l-s/2;l>.5*s&&l<1.5*s&&(d-=s),f.x+=c(d)*i,f.y+=u(d)*i;}var p={x:f.x,y:f.y,angle:l};return a?(l>.5*s&&l<1.5*s&&(l-=s),r({rotate:l},p)):p;}};t.exports=l;},function(t,e,n){var r=n(78),i=n(70).vec2;function a(t,e){return t&&e?t.replace(/\\?\{([^{}]+)\}/g,function(t,n){return "\\"===t.charAt(0)?t.slice(1):void 0===e[n]?"":e[n];}):t;}t.exports={getSpline:function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n];e.push(i.x),e.push(i.y);}var a=r.PathUtil.catmullRomToBezier(e);return a.unshift(["M",t[0].x,t[0].y]),a;},getControlPoint:function(t,e,n,r){var a={x:(1-n)*t.x+n*e.x,y:(1-n)*t.y+n*e.y},o=[];i.normalize(o,[e.x-t.x,e.y-t.y]);var s=[-o[1]*r,o[0]*r];return a.x+=s[0],a.y+=s[1],a;},pointsToPolygon:function(t,e){if(!t.length)return "";for(var n="",r=0,i=t.length;r<i;r++){var o=t[r];n+=a(0===r?"M{x} {y}":"L{x} {y}",o);}return e&&(n+="Z"),n;}};},function(t,e,n){var r=n(51),i=Array.prototype.splice;t.exports=function(t,e){if(!r(t))return [];for(var n=t?e.length:0,a=n-1;n--;){var o=void 0,s=e[n];n!==a&&s===o||(o=s,i.call(t,s,1));}return t;};},function(t,e,n){var r=n(51),i=n(434);t.exports=function(t,e){var n=[];if(!r(t))return n;for(var a=-1,o=[],s=t.length;++a<s;){var u=t[a];e(u,a,t)&&(n.push(u),o.push(a));}return i(t,o),n;};},function(t,e){t.exports=function(t,e,n){if(t){if(t.addEventListener)return t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1);}};if(t.attachEvent)return t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n);}};}};},function(t,e){t.exports=function(t,e,n){var r=void 0,i=void 0,a=void 0,o=void 0,s=0;n||(n={});var u=function(){s=!1===n.leading?0:Date.now(),r=null,o=t.apply(i,a),r||(i=a=null);},c=function(){var c=Date.now();s||!1!==n.leading||(s=c);var f=e-(c-s);return i=this,a=arguments,f<=0||f>e?(r&&(clearTimeout(r),r=null),s=c,o=t.apply(i,a),r||(i=a=null)):r||!1===n.trailing||(r=setTimeout(u,f)),o;};return c.cancel=function(){clearTimeout(r),s=0,r=i=a=null;},c;};},function(t,e){t.exports=function(t,e,n){var r=void 0;return function(){var i=this,a=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(i,a);},e),o&&t.apply(i,a);};};},function(t,e){var n={svg:"svg",circle:"circle",rect:"rect",text:"text",path:"path",foreignObject:"foreignObject",polygon:"polygon",ellipse:"ellipse",image:"image"};t.exports=function(t,e,r){var i=r.target||r.srcElement;if(!n[i.tagName]){for(var a=i.parentNode;a&&!n[a.tagName];)a=a.parentNode;i=a;}return this._cfg.el===i?this:this.find(function(t){return t._cfg&&t._cfg.el===i;});};},function(t,e,n){var r=n(0),i=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,a=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","pattern");e.setAttribute("patternUnits","userSpaceOnUse");var n=document.createElementNS("http://www.w3.org/2000/svg","image");e.appendChild(n);var a=r.uniqueId("pattern_");e.id=a,this.el=e,this.id=a,this.cfg=t;var o=i.exec(t)[2];n.setAttribute("href",o);var s=new Image();function u(){e.setAttribute("width",s.width),e.setAttribute("height",s.height);}return o.match(/^data:/i)||(s.crossOrigin="Anonymous"),s.src=o,s.complete?u():(s.onload=u,s.src=s.src),this;}return t.prototype.match=function(t,e){return this.cfg===e;},t;}();t.exports=a;},function(t,e,n){var r=n(0),i=function(){function t(t){this.type="clip";var e=document.createElementNS("http://www.w3.org/2000/svg","clipPath");this.el=e,this.id=r.uniqueId("clip_"),e.id=this.id;var n=t._cfg.el;return e.appendChild(n.cloneNode(!0)),this.cfg=t,this;}var e=t.prototype;return e.match=function(){return !1;},e.remove=function(){var t=this.el;t.parentNode.removeChild(t);},t;}();t.exports=i;},function(t,e,n){var r=n(0),i=function(){function t(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=r.uniqueId("marker_");n.setAttribute("id",i);var a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("stroke","none"),a.setAttribute("fill",t.stroke||"#000"),n.appendChild(a),n.setAttribute("overflow","visible"),n.setAttribute("orient","auto-start-reverse"),this.el=n,this.child=a,this.id=i,this.cfg=t["marker-start"===e?"startArrow":"endArrow"],this.stroke=t.stroke||"#000",!0===this.cfg?this._setDefaultPath(e,a):this._setMarker(t.lineWidth,a),this;}var e=t.prototype;return e.match=function(){return !1;},e._setDefaultPath=function(t,e){var n=this.el;e.setAttribute("d","M0,0 L6,3 L0,6 L3,3Z"),n.setAttribute("refX",3),n.setAttribute("refY",3);},e._setMarker=function(t,e){var n=this.el,i=this.cfg.path,a=this.cfg.d;r.isArray(i)&&(i=i.map(function(t){return t.join(" ");}).join("")),e.setAttribute("d",i),n.appendChild(e),a&&n.setAttribute("refX",a/t);},e.update=function(t){var e=this.child;e.attr?e.attr("fill",t):e.setAttribute("fill",t);},t;}();t.exports=i;},function(t,e,n){var r=n(0),i={shadowColor:"color",shadowOpacity:"opacity",shadowBlur:"blur",shadowOffsetX:"dx",shadowOffsetY:"dy"},a={x:"-40%",y:"-40%",width:"200%",height:"200%"},o=function(){function t(t){this.type="filter";var e=document.createElementNS("http://www.w3.org/2000/svg","filter");return r.each(a,function(t,n){e.setAttribute(n,t);}),this.el=e,this.id=r.uniqueId("filter_"),this.el.id=this.id,this.cfg=t,this._parseShadow(t,e),this;}var e=t.prototype;return e.match=function(t,e){if(this.type!==t)return !1;var n=!0,i=this.cfg;return r.each(Object.keys(i),function(t){if(i[t]!==e[t])return n=!1,!1;}),n;},e.update=function(t,e){var n=this.cfg;return n[i[t]]=e,this._parseShadow(n,this.el),this;},e._parseShadow=function(t,e){var n='<feDropShadow \n      dx="'+(t.dx||0)+'" \n      dy="'+(t.dy||0)+'" \n      stdDeviation="'+(t.blur?t.blur/10:0)+'"\n      flood-color="'+(t.color?t.color:"#000")+'"\n      flood-opacity="'+(t.opacity?t.opacity:1)+'"\n      />';e.innerHTML=n;},t;}();t.exports=o;},function(t,e,n){var r=n(0),i=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,a=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,o=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function s(t){var e=t.match(o);if(!e)return "";var n="";return e.sort(function(t,e){return t=t.split(":"),e=e.split(":"),Number(t[0])-Number(e[0]);}),r.each(e,function(t){t=t.split(":"),n+='<stop offset="'+t[0]+'" stop-color="'+t[1]+'"></stop>';}),n;}var u=function(){function t(t){var e=null,n=r.uniqueId("gradient_");return "l"===t.toLowerCase()[0]?function(t,e){var n,a,o=i.exec(t),u=r.mod(r.toRadian(parseFloat(o[1])),2*Math.PI),c=o[2];u>=0&&u<.5*Math.PI?(n={x:0,y:0},a={x:1,y:1}):.5*Math.PI<=u&&u<Math.PI?(n={x:1,y:0},a={x:0,y:1}):Math.PI<=u&&u<1.5*Math.PI?(n={x:1,y:1},a={x:0,y:0}):(n={x:0,y:1},a={x:1,y:0});var f=Math.tan(u),h=f*f,l=(a.x-n.x+f*(a.y-n.y))/(h+1)+n.x,d=f*(a.x-n.x+f*(a.y-n.y))/(h+1)+n.y;e.setAttribute("x1",n.x),e.setAttribute("y1",n.y),e.setAttribute("x2",l),e.setAttribute("y2",d),e.innerHTML=s(c);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")):function(t,e){var n=a.exec(t),r=parseFloat(n[1]),i=parseFloat(n[2]),o=parseFloat(n[3]),u=n[4];e.setAttribute("cx",r),e.setAttribute("cy",i),e.setAttribute("r",o),e.innerHTML=s(u);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")),e.setAttribute("id",n),this.el=e,this.id=n,this.cfg=t,this;}return t.prototype.match=function(t,e){return this.cfg===e;},t;}();t.exports=u;},function(t,e,n){var r=n(0),i=n(444),a=n(443),o=n(442),s=n(441),u=n(440),c=function(){function t(t){var e=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=r.uniqueId("defs_");e.id=n,t.appendChild(e),this.children=[],this.defaultArrow={},this.el=e,this.canvas=t;}var e=t.prototype;return e.find=function(t,e){for(var n=this.children,r=null,i=0;i<n.length;i++)if(n[i].match(t,e)){r=n[i].id;break;}return r;},e.findById=function(t){for(var e=this.children,n=null,r=0;r<e.length;r++)if(e[r].id===t){n=e[r];break;}return n;},e.add=function(t){this.children.push(t),t.canvas=this.canvas,t.parent=this;},e.getDefaultArrow=function(t,e){var n=t.stroke||t.strokeStyle;if(this.defaultArrow[n])return this.defaultArrow[n].id;var r=new o(t,e);return this.defaultArrow[n]=r,this.el.appendChild(r.el),r.id;},e.addGradient=function(t){var e=new i(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addArrow=function(t,e){var n=new o(t,e);return this.el.appendChild(n.el),n.id;},e.addShadow=function(t){var e=new a(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addPattern=function(t){var e=new u(t);return this.el.appendChild(e.el),this.add(e),e.id;},e.addClip=function(t){var e=new s(t);return this.el.appendChild(e.el),this.add(e),e.id;},t;}();t.exports=c;},function(t,e,n){var r=n(0),i=n(50).parseRadius,a=n(101),o=n(445),s={rect:"path",circle:"circle",line:"line",path:"path",marker:"path",text:"text",polygon:"polygon",image:"image",ellipse:"ellipse",dom:"foreignObject",fan:"path",group:"g"},u={opacity:"opacity",fillStyle:"fill",strokeOpacity:"stroke-opacity",fillOpacity:"fill-opacity",strokeStyle:"stroke",x:"x",y:"y",r:"r",rx:"rx",ry:"ry",width:"width",height:"height",x1:"x1",x2:"x2",y1:"y1",y2:"y2",lineCap:"stroke-linecap",lineJoin:"stroke-linejoin",lineWidth:"stroke-width",lineDash:"stroke-dasharray",lineDashOffset:"stroke-dashoffset",miterLimit:"stroke-miterlimit",font:"font",fontSize:"font-size",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",fontFamily:"font-family",startArrow:"marker-start",endArrow:"marker-end",path:"d",class:"class",id:"id",style:"style",preserveAspectRatio:"preserveAspectRatio"},c={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},f={left:"left",start:"left",center:"middle",right:"end",end:"end"},h=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<svg id="'+e+'"></svg>');return t.appendChild(n),this.type="svg",this.canvas=n,this.context=new o(n),this.toDraw=!1,this;}var e=t.prototype;return e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n();});try{e._drawChildren(t);}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t);}finally{e.toDraw=!1;}}();},e.drawSync=function(t){this._drawChildren(t);},e._drawGroup=function(t,e){var n=t._cfg;n.removed||n.destroyed||(n.tobeRemoved&&(r.each(n.tobeRemoved,function(t){t.parentNode&&t.parentNode.removeChild(t);}),n.tobeRemoved=[]),this._drawShape(t,e),n.children&&n.children.length>0&&this._drawChildren(t));},e._drawChildren=function(t){var e,n=t._cfg.children;if(n)for(var r=0;r<n.length;r++)(e=n[r]).isGroup?this._drawGroup(e,r):this._drawShape(e,r);},e._drawShape=function(t,e){var n=t._attrs,r=t._cfg,i=r.el;r.removed||r.destroyed?i&&i.parentNode.removeChild(r.el):(!i&&r.parent&&(this._createDom(t,e),this._updateShape(t)),i=r.el,!1!==r.visible?(r.visible&&i.hasAttribute("visibility")&&i.removeAttribute("visibility"),r.hasUpdate&&this._updateShape(t),n.clip&&n.clip._cfg.hasUpdate&&this._updateShape(n.clip)):i.setAttribute("visibility","hidden"));},e._updateShape=function(t){var e=t._attrs,n=t._cfg.attrs;if(n)if(t._cfg.el||this._createDom(t),"clip"in e&&this._setClip(t,e.clip),("shadowOffsetX"in e||"shadowOffsetY"in e||"shadowBlur"in e||"shadowColor"in e)&&this._setShadow(t),"text"!==t.type){for(var i in "fan"===t.type&&this._updateFan(t),"marker"===t.type&&t._cfg.el.setAttribute("d",this._assembleMarker(e)),"rect"===t.type&&t._cfg.el.setAttribute("d",this._assembleRect(e)),e)e[i]!==n[i]&&this._setAttribute(t,i,e[i]);t._cfg.attrs=r.deepMix({},t._attrs),t._cfg.hasUpdate=!1;}else this._updateText(t);},e._setAttribute=function(t,e,n){var i=t.type,a=t._attrs,o=t._cfg.el,s=this.context;if("marker"!==i&&"rect"!==i||!~["x","y","radius","r"].indexOf(e))if(~["circle","ellipse"].indexOf(i)&&~["x","y"].indexOf(e))o.setAttribute("c"+e,parseInt(n,10));else{if("polygon"===i&&"points"===e)return n&&0!==n.length||(n=""),r.isArray(n)&&(n=(n=n.map(function(t){return t[0]+","+t[1];})).join(" ")),void o.setAttribute("points",n);if("path"===e&&r.isArray(n))o.setAttribute("d",this._formatPath(n));else if("img"!==e){if("transform"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("rotate"===e)return n?void this._setTransform(t):void o.removeAttribute("transform");if("matrix"!==e){if("fillStyle"!==e&&"strokeStyle"!==e){if("clip"!==e)if(~e.indexOf("Arrow")){if(e=u[e],n){var c=null;c="boolean"==typeof n?s.getDefaultArrow(a,e):s.addArrow(a,e),o.setAttribute(e,"url(#"+c+")"),t._cfg[e]=c;}else t._cfg[e]=null,o.removeAttribute(e);}else"html"===e&&("string"==typeof n?o.innerHTML=n:(o.innerHTML="",o.appendChild(n))),u[e]&&o.setAttribute(u[e],n);}else this._setColor(t,e,n);}else this._setTransform(t);}else this._setImage(t,n);}},e._createDom=function(t,e){var n=s[t.type],r=t._attrs,i=t._cfg.parent;if(!n)throw new Error("the type"+t.type+"is not supported by svg");var a=document.createElementNS("http://www.w3.org/2000/svg",n);if(t._cfg.id&&(a.id=t._cfg.id),t._cfg.el=a,i){var o=i._cfg.el;if(void 0===e)o.appendChild(a);else{var u=i._cfg.el.childNodes;"svg"===o.tagName&&(e+=1),u.length<=e?o.appendChild(a):o.insertBefore(a,u[e]);}}return t._cfg.attrs={},"text"===t.type?(a.setAttribute("paint-order","stroke"),a.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;")):(r.stroke||r.strokeStyle||a.setAttribute("stroke","none"),r.fill||r.fillStyle||a.setAttribute("fill","none")),a;},e._assembleMarker=function(t){var e=t.r;if(void 0===t.r&&(e=t.radius),isNaN(Number(t.x))||isNaN(Number(t.y))||isNaN(Number(e)))return "";var n="";return n="function"==typeof t.symbol?t.symbol(t.x,t.y,e):a.Symbols[t.symbol||"circle"](t.x,t.y,e),r.isArray(n)&&(n=n.map(function(t){return t.join(" ");}).join("")),n;},e._assembleRect=function(t){var e=t.x,n=t.y,a=t.width,o=t.height,s=t.radius;if(!s)return "M "+e+","+n+" l "+a+",0 l 0,"+o+" l"+-a+" 0 z";var u=i(s);return r.isArray(s)?1===s.length?u.r1=u.r2=u.r3=u.r4=s[0]:2===s.length?(u.r1=u.r3=s[0],u.r2=u.r4=s[1]):3===s.length?(u.r1=s[0],u.r2=u.r4=s[1],u.r3=s[2]):(u.r1=s[0],u.r2=s[1],u.r3=s[2],u.r4=s[3]):u.r1=u.r2=u.r3=u.r4=s,[["M "+(e+u.r1)+","+n],["l "+(a-u.r1-u.r2)+",0"],["a "+u.r2+","+u.r2+",0,0,1,"+u.r2+","+u.r2],["l 0,"+(o-u.r2-u.r3)],["a "+u.r3+","+u.r3+",0,0,1,"+-u.r3+","+u.r3],["l "+(u.r3+u.r4-a)+",0"],["a "+u.r4+","+u.r4+",0,0,1,"+-u.r4+","+-u.r4],["l 0,"+(u.r4+u.r1-o)],["a "+u.r1+","+u.r1+",0,0,1,"+u.r1+","+-u.r1],["z"]].join(" ");},e._formatPath=function(t){return ~(t=t.map(function(t){return t.join(" ");}).join("")).indexOf("NaN")?"":t;},e._setTransform=function(t){for(var e=t._attrs.matrix,n=t._cfg.el,r=[],i=0;i<9;i+=3)r.push(e[i]+","+e[i+1]);-1===(r=r.join(",")).indexOf("NaN")?n.setAttribute("transform","matrix("+r+")"):console.warn("invalid matrix:",e);},e._setImage=function(t,e){var n=t._attrs,i=t._cfg.el;if(r.isString(e))i.setAttribute("href",e);else if(e instanceof Image)n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",e.src);else if(e instanceof HTMLElement&&r.isString(e.nodeName)&&"CANVAS"===e.nodeName.toUpperCase())i.setAttribute("href",e.toDataURL());else if(e instanceof ImageData){var a=document.createElement("canvas");a.setAttribute("width",e.width),a.setAttribute("height",e.height),a.getContext("2d").putImageData(e,0,0),n.width||(i.setAttribute("width",e.width),t._attrs.width=e.width),n.height||(i.setAttribute("height",e.height),t._attrs.height=e.height),i.setAttribute("href",a.toDataURL());}},e._updateFan=function(t){function e(t,e,n){return {x:e*Math.cos(t)+n.x,y:e*Math.sin(t)+n.y};}var n=t._attrs,i=t._cfg,a={x:n.x,y:n.y},o=[],s=n.startAngle,u=n.endAngle;r.isNumberEqual(u-s,2*Math.PI)&&(u-=1e-5);var c=e(s,n.re,a),f=e(u,n.re,a),h=u>s?1:0,l=Math.abs(u-s)>Math.PI?1:0,d=n.rs,p=n.re,g=e(s,n.rs,a),v=e(u,n.rs,a);n.rs>0?(o.push("M "+f.x+","+f.y),o.push("L "+v.x+","+v.y),o.push("A "+d+","+d+",0,"+l+","+(1===h?0:1)+","+g.x+","+g.y),o.push("L "+c.x+" "+c.y)):(o.push("M "+a.x+","+a.y),o.push("L "+c.x+","+c.y)),o.push("A "+p+","+p+",0,"+l+","+h+","+f.x+","+f.y),n.rs>0?o.push("L "+v.x+","+v.y):o.push("Z"),i.el.setAttribute("d",o.join(" "));},e._updateText=function(t){var e=t._attrs,n=t._cfg.attrs,r=t._cfg.el;for(var i in this._setFont(t),e)if(e[i]!==n[i]){if("text"===i){this._setText(t,""+e[i]);continue;}if("fillStyle"===i||"strokeStyle"===i){this._setColor(t,i,e[i]);continue;}if("matrix"===i){this._setTransform(t);continue;}u[i]&&r.setAttribute(u[i],e[i]);}t._cfg.attrs=Object.assign({},t._attrs),t._cfg.hasUpdate=!1;},e._setFont=function(t){var e=t.get("el"),n=t._attrs,r=n.fontSize;e.setAttribute("alignment-baseline",c[n.textBaseline]||"baseline"),e.setAttribute("text-anchor",f[n.textAlign]||"left"),r&&+r<12&&(n.matrix=[1,0,0,0,1,0,0,0,1],t.transform([["t",-n.x,-n.y],["s",+r/12,+r/12],["t",n.x,n.y]]));},e._setText=function(t,e){var n=t._cfg.el,i=t._attrs.textBaseline||"bottom";if(e){if(~e.indexOf("\n")){var a=t._attrs.x,o=e.split("\n"),s=o.length-1,u="";r.each(o,function(t,e){0===e?"alphabetic"===i?u+='<tspan x="'+a+'" dy="'+-s+'em">'+t+"</tspan>":"top"===i?u+='<tspan x="'+a+'" dy="0.9em">'+t+"</tspan>":"middle"===i?u+='<tspan x="'+a+'" dy="'+-(s-1)/2+'em">'+t+"</tspan>":"bottom"===i?u+='<tspan x="'+a+'" dy="-'+(s+.3)+'em">'+t+"</tspan>":"hanging"===i&&(u+='<tspan x="'+a+'" dy="'+(-(s-1)-.3)+'em">'+t+"</tspan>"):u+='<tspan x="'+a+'" dy="1em">'+t+"</tspan>";}),n.innerHTML=u;}else n.innerHTML=e;}else n.innerHTML="";},e._setClip=function(t,e){var n=t._cfg.el;if(e){if(n.hasAttribute("clip-path"))e._cfg.hasUpdate&&this._updateShape(e);else{this._createDom(e),this._updateShape(e);var r=this.context.addClip(e);n.setAttribute("clip-path","url(#"+r+")");}}else n.removeAttribute("clip-path");},e._setColor=function(t,e,n){var r=t._cfg.el,i=this.context;if(n){if(n=n.trim(),/^[r,R,L,l]{1}[\s]*\(/.test(n)){var a=i.find("gradient",n);a||(a=i.addGradient(n)),r.setAttribute(u[e],"url(#"+a+")");}else if(/^[p,P]{1}[\s]*\(/.test(n)){var o=i.find("pattern",n);o||(o=i.addPattern(n)),r.setAttribute(u[e],"url(#"+o+")");}else r.setAttribute(u[e],n);}else r.setAttribute(u[e],"none");},e._setShadow=function(t){var e=t._cfg.el,n=t._attrs,r={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(r.dx||r.dy||r.blur||r.color){var i=this.context.find("filter",r);i||(i=this.context.addShadow(r,this)),e.setAttribute("filter","url(#"+i+")");}else e.removeAttribute("filter");},t;}();t.exports=h;},function(t,e,n){t.exports={painter:n(446),getShape:n(439)};},function(t,e,n){var r=n(0),i=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi,o=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,s=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,u=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,c=/[\d.]+:(#[^\s]+|[^\)]+\))/gi;function f(t,e){var n=t.match(c);r.each(n,function(t){t=t.split(":"),e.addColorStop(t[0],t[1]);});}t.exports={parsePath:function(t){return t=t||[],r.isArray(t)?t:r.isString(t)?(t=t.match(i),r.each(t,function(e,n){if((e=e.match(a))[0].length>1){var i=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=i;}r.each(e,function(t,n){isNaN(t)||(e[n]=+t);}),t[n]=e;}),t):void 0;},parseStyle:function(t,e,n){if(r.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return function(t,e,n){var i,a,s=o.exec(t),u=r.mod(r.toRadian(parseFloat(s[1])),2*Math.PI),c=s[2],h=e.getBBox();u>=0&&u<.5*Math.PI?(i={x:h.minX,y:h.minY},a={x:h.maxX,y:h.maxY}):.5*Math.PI<=u&&u<Math.PI?(i={x:h.maxX,y:h.minY},a={x:h.minX,y:h.maxY}):Math.PI<=u&&u<1.5*Math.PI?(i={x:h.maxX,y:h.maxY},a={x:h.minX,y:h.minY}):(i={x:h.minX,y:h.maxY},a={x:h.maxX,y:h.minY});var l=Math.tan(u),d=l*l,p=(a.x-i.x+l*(a.y-i.y))/(d+1)+i.x,g=l*(a.x-i.x+l*(a.y-i.y))/(d+1)+i.y,v=n.createLinearGradient(i.x,i.y,p,g);return f(c,v),v;}(t,e,n);if("r"===t[0])return function(t,e,n){var r=s.exec(t),i=parseFloat(r[1]),a=parseFloat(r[2]),o=parseFloat(r[3]),u=r[4];if(0===o){var h=u.match(c);return h[h.length-1].split(":")[1];}var l=e.getBBox(),d=l.maxX-l.minX,p=l.maxY-l.minY,g=Math.sqrt(d*d+p*p)/2,v=n.createRadialGradient(l.minX+d*i,l.minY+p*a,o*g,l.minX+d/2,l.minY+p/2,g);return f(u,v),v;}(t,e,n);if("p"===t[0])return function(t,e,n){if(e.get("patternSource")&&e.get("patternSource")===t)return e.get("pattern");var r,i,a=u.exec(t),o=a[1],s=a[2];function c(){r=n.createPattern(i,o),e.setSilent("pattern",r),e.setSilent("patternSource",t);}switch(o){case"a":o="repeat";break;case"x":o="repeat-x";break;case"y":o="repeat-y";break;case"n":o="no-repeat";break;default:o="no-repeat";}return i=new Image(),s.match(/^data:/i)||(i.crossOrigin="Anonymous"),i.src=s,i.complete?c():(i.onload=c,i.src=i.src),r;}(t,e,n);}return t;}}};},function(t,e,n){var r=n(0),i=n(448),a=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash","lineDashOffset"],o=function(){function t(t){if(!t)return null;var e=r.uniqueId("canvas_"),n=r.createDom('<canvas id="'+e+'"></canvas>');return t.appendChild(n),this.type="canvas",this.canvas=n,this.context=n.getContext("2d"),this.toDraw=!1,this;}var e=t.prototype;return e.beforeDraw=function(){var t=this.canvas;this.context&&this.context.clearRect(0,0,t.width,t.height);},e.draw=function(t){var e=this;e.animateHandler?e.toDraw=!0:function n(){e.animateHandler=r.requestAnimationFrame(function(){e.animateHandler=void 0,e.toDraw&&n();}),e.beforeDraw();try{e._drawGroup(t);}catch(t){console.warn("error in draw canvas, detail as:"),console.warn(t);}finally{e.toDraw=!1;}}();},e.drawSync=function(t){this.beforeDraw(),this._drawGroup(t);},e._drawGroup=function(t){if(!t._cfg.removed&&!t._cfg.destroyed&&t._cfg.visible){var e=t._cfg.children,n=null;this.setContext(t);for(var r=0;r<e.length;r++)n=e[r],e[r].isGroup?this._drawGroup(n):this._drawShape(n);this.restoreContext(t);}},e._drawShape=function(t){t._cfg.removed||t._cfg.destroyed||!t._cfg.visible||(this.setContext(t),t.drawInner(this.context),this.restoreContext(t),t._cfg.attrs=t._attrs,t._cfg.hasUpdate=!1);},e.setContext=function(t){var e=this.context,n=t._attrs.clip;e.save(),n&&(n.resetTransform(e),n.createPath(e),e.clip()),this.resetContext(t),t.resetTransform(e);},e.restoreContext=function(){this.context.restore();},e.resetContext=function(t){var e=this.context,n=t._attrs;if(!t.isGroup)for(var o in n)if(a.indexOf(o)>-1){var s=n[o];"fillStyle"===o&&(s=i.parseStyle(s,t,e)),"strokeStyle"===o&&(s=i.parseStyle(s,t,e)),"lineDash"===o&&e.setLineDash?r.isArray(s)?e.setLineDash(s):r.isString(s)&&e.setLineDash(s.split(" ")):e[o]=s;}},t;}();t.exports=o;},function(t,e,n){t.exports={painter:n(449)};},function(t,e,n){t.exports={canvas:n(450),svg:n(447)};},function(t,e,n){var r=n(0),i=n(100),a=n(109),o=n(199),s=n(200),u=s.interpolate,c=s.interpolateArray,f=function(t){this._animators=[],this._current=0,this._timer=null,this.canvas=t;};function h(t,e,n){var a,s=e.startTime;if(n<s+e.delay||e.isPaused)return !1;var f=e.duration,h=e.easing;if(n=n-s-e.delay,e.repeat)a=n%f/f,a=o[h](a);else{if(!((a=n/f)<1)){var l=e.toAttrs||e.onFrame(1);return t.attr(l),e.toMatrix&&t.setMatrix(e.toMatrix),!0;}a=o[h](a);}if(e.onFrame){var d=e.onFrame(a);t.attr(d);}else!function(t,e,n){var a={},o=e.toAttrs,s=e.fromAttrs,f=e.toMatrix;if(!t.get("destroyed")){var h;for(var l in o)if(!r.isEqual(s[l],o[l]))if("path"===l){var d=o[l],p=s[l];d.length>p.length?(d=i.parsePathString(o[l]),p=i.parsePathString(s[l]),p=i.fillPathByDiff(p,d),p=i.formatPath(p,d),e.fromAttrs.path=p,e.toAttrs.path=d):e.pathFormatted||(d=i.parsePathString(o[l]),p=i.parsePathString(s[l]),p=i.formatPath(p,d),e.fromAttrs.path=p,e.toAttrs.path=d,e.pathFormatted=!0),a[l]=[];for(var g=0;g<d.length;g++){for(var v=d[g],m=p[g],y=[],x=0;x<v.length;x++)r.isNumber(v[x])&&m&&r.isNumber(m[x])?(h=u(m[x],v[x]),y.push(h(n))):y.push(v[x]);a[l].push(y);}}else h=u(s[l],o[l]),a[l]=h(n);if(f){var b=c(e.fromMatrix,f)(n);t.setMatrix(b);}t.attr(a);}}(t,e,a);return !1;}r.augment(f,{initTimer:function(){var t,e,n,r=this,i=this;i._timer=a.timer(function(a){if(i._current=a,r._animators.length>0){for(var o=r._animators.length-1;o>=0;o--)if((t=r._animators[o]).get("destroyed"))i.removeAnimator(o);else{if(!t.get("pause").isPaused)for(var s=(e=t.get("animators")).length-1;s>=0;s--)n=e[s],h(t,n,a)&&(e.splice(s,1),n.callback&&n.callback());0===e.length&&i.removeAnimator(o);}r.canvas.draw();}});},addAnimator:function(t){this._animators.push(t);},removeAnimator:function(t){this._animators.splice(t,1);},isAnimating:function(){return !!this._animators.length;},stop:function(){this._timer&&this._timer.stop();},stopAllAnimations:function(){this._animators.forEach(function(t){t.stopAnimate();}),this._animators=[],this.canvas.draw();},getTime:function(){return this._current;}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(103),a={arc:n(73),ellipse:n(185),line:n(74)},o=r.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");function s(t,e,n){return n.createPath(o),o.isPointInPath(t,e);}var u={arc:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=n.startAngle,u=n.endAngle,c=n.clockwise,f=this.getHitLineWidth();return !!this.hasStroke()&&i.arcline(r,a,o,s,u,c,f,t,e);},circle:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.r,s=this.getHitLineWidth(),u=this.hasFill(),c=this.hasStroke();return u&&c?i.circle(r,a,o,t,e)||i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e):u?i.circle(r,a,o,t,e):!!c&&i.arcline(r,a,o,0,2*Math.PI,!1,s,t,e);},dom:function(t,e){if(!this._cfg.el)return !1;var n=this._cfg.el.getBBox();return i.box(n.x,n.x+n.width,n.y,n.y+n.height,t,e);},ellipse:function(t,e){var n=this._attrs,a=this.hasFill(),o=this.hasStroke(),s=n.x,u=n.y,c=n.rx,f=n.ry,h=this.getHitLineWidth(),l=c>f?c:f,d=c>f?1:c/f,p=c>f?f/c:1,g=[t,e,1],v=[1,0,0,0,1,0,0,0,1];r.mat3.scale(v,v,[d,p]),r.mat3.translate(v,v,[s,u]);var m=r.mat3.invert([],v);return r.vec3.transformMat3(g,g,m),a&&o?i.circle(0,0,l,g[0],g[1])||i.arcline(0,0,l,0,2*Math.PI,!1,h,g[0],g[1]):a?i.circle(0,0,l,g[0],g[1]):!!o&&i.arcline(0,0,l,0,2*Math.PI,!1,h,g[0],g[1]);},fan:function(t,e){var n=this,o=n.hasFill(),s=n.hasStroke(),u=n._attrs,c=u.x,f=u.y,h=u.rs,l=u.re,d=u.startAngle,p=u.endAngle,g=u.clockwise,v=[t-c,e-f],m=r.vec2.angleTo([1,0],v);function y(){var t=a.arc.nearAngle(m,d,p,g);if(r.isNumberEqual(m,t)){var e=r.vec2.squaredLength(v);if(h*h<=e&&e<=l*l)return !0;}return !1;}function x(){var r=n.getHitLineWidth(),a={x:Math.cos(d)*h+c,y:Math.sin(d)*h+f},o={x:Math.cos(d)*l+c,y:Math.sin(d)*l+f},s={x:Math.cos(p)*h+c,y:Math.sin(p)*h+f},u={x:Math.cos(p)*l+c,y:Math.sin(p)*l+f};return !!(i.line(a.x,a.y,o.x,o.y,r,t,e)||i.line(s.x,s.y,u.x,u.y,r,t,e)||i.arcline(c,f,h,d,p,g,r,t,e)||i.arcline(c,f,l,d,p,g,r,t,e));}return o&&s?y()||x():o?y():!!s&&x();},image:function(t,e){var n=this._attrs;if(this.get("toDraw")||!n.img)return !1;this._cfg.attrs&&this._cfg.attrs.img===n.img||this._setAttrImg();var r=n.x,a=n.y,o=n.width,s=n.height;return i.rect(r,a,o,s,t,e);},line:function(t,e){var n=this._attrs,r=n.x1,a=n.y1,o=n.x2,s=n.y2,u=this.getHitLineWidth();return !!this.hasStroke()&&i.line(r,a,o,s,u,t,e);},path:function(t,e){var n=this,i=n.get("segments"),a=n.hasFill(),o=n.hasStroke();function u(){if(!r.isEmpty(i)){for(var a=n.getHitLineWidth(),o=0,s=i.length;o<s;o++)if(i[o].isInside(t,e,a))return !0;return !1;}}return a&&o?s(t,e,n)||u():a?s(t,e,n):!!o&&u();},marker:function(t,e){var n=this._attrs,r=n.x,a=n.y,o=n.radius||n.r,s=this.getHitLineWidth();return i.circle(r,a,o+s/2,t,e);},polygon:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs.points;if(r.length<2)return !1;var a=n.getHitLineWidth(),o=r.slice(0);return r.length>=3&&o.push(r[0]),i.polyline(o,a,t,e);}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o();},polyline:function(t,e){var n=this._attrs;if(this.hasStroke()){var r=n.points;if(r.length<2)return !1;var a=n.lineWidth;return i.polyline(r,a,t,e);}return !1;},rect:function(t,e){var n=this,r=n.hasFill(),a=n.hasStroke();function o(){var r=n._attrs,a=r.x,o=r.y,s=r.width,u=r.height,c=r.radius,f=n.getHitLineWidth();if(0===c){var h=f/2;return i.line(a-h,o,a+s+h,o,f,t,e)||i.line(a+s,o-h,a+s,o+u+h,f,t,e)||i.line(a+s+h,o+u,a-h,o+u,f,t,e)||i.line(a,o+u+h,a,o-h,f,t,e);}return i.line(a+c,o,a+s-c,o,f,t,e)||i.line(a+s,o+c,a+s,o+u-c,f,t,e)||i.line(a+s-c,o+u,a+c,o+u,f,t,e)||i.line(a,o+u-c,a,o+c,f,t,e)||i.arcline(a+s-c,o+c,c,1.5*Math.PI,2*Math.PI,!1,f,t,e)||i.arcline(a+s-c,o+u-c,c,0,.5*Math.PI,!1,f,t,e)||i.arcline(a+c,o+u-c,c,.5*Math.PI,Math.PI,!1,f,t,e)||i.arcline(a+c,o+c,c,Math.PI,1.5*Math.PI,!1,f,t,e);}return r&&a?s(t,e,n)||o():r?s(t,e,n):!!a&&o();},text:function(t,e){var n=this.getBBox();if(this.hasFill()||this.hasStroke())return i.box(n.minX,n.maxX,n.minY,n.maxY,t,e);}};t.exports={isPointInPath:function(t,e){var n=u[this.type];return !!n&&n.call(this,t,e);}};},function(t,e,n){var r=n(11);r.Arc=n(184),r.Circle=n(183),r.Dom=n(182),r.Ellipse=n(181),r.Fan=n(180),r.Image=n(179),r.Line=n(178),r.Marker=n(101),r.Path=n(177),r.Polygon=n(176),r.Polyline=n(175),r.Rect=n(174),r.Text=n(173),t.exports=r;},function(t,e,n){var r=n(0),i=n(75),a=n(187),o=["click","mousedown","mouseup","dblclick","contextmenu","mouseout","mouseover","mousemove","dragstart","drag","dragend","dragenter","dragleave","drop"],s=function(){};r.augment(s,a,{emit:function(t,e){var n=arguments;if(a.prototype.emit.apply(this,n),!(n.length>=2&&n[1]instanceof i&&n[1].propagationStopped)&&o.indexOf(t)>=0&&e.target===this)for(var r=this._cfg.parent;r&&!r.get("destroyed");)r.emit.apply(r,n),r=r._cfg.parent;}}),t.exports=s;},function(t,e,n){function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}return t;}).apply(this,arguments);}var i=n(0),a={delay:"delay",repeat:"repeat",rotate:"rotate"},o={fill:"fill",stroke:"stroke",fillStyle:"fillStyle",strokeStyle:"strokeStyle"};t.exports={animate:function(t,e,n,s,u){void 0===u&&(u=0);this.set("animating",!0);var c=this.get("timeline");c||(c=this.get("canvas").get("timeline"),this.setSilent("timeline",c));var f=this.get("animators")||[];c._timer||c.initTimer(),i.isNumber(s)&&(u=s,s=null),i.isFunction(n)?(s=n,n="easeLinear"):n=n||"easeLinear";var h={repeat:t.repeat,duration:e,easing:n,callback:s,delay:u,startTime:c.getTime(),id:i.uniqueId()};if(t.onFrame)h.onFrame=t.onFrame;else{var l=function(t,e){var n={matrix:null,attrs:{}},r=e._attrs;for(var s in t)if("transform"===s)n.matrix=i.transform(e.getMatrix(),t[s]);else if("matrix"===s)n.matrix=t[s];else{if(o[s]&&/^[r,R,L,l]{1}[\s]*\(/.test(t[s]))continue;a[s]||r[s]===t[s]||("rotate"===s&&(e._attrs.rotate=e._attrs.rotate||0),n.attrs[s]=t[s]);}return n;}(t,this);h=r({fromAttrs:function(t,e){var n={},r=e._attrs;for(var i in t.attrs)n[i]=r[i];return n;}(l,this),toAttrs:l.attrs,fromMatrix:i.clone(this.getMatrix()),toMatrix:l.matrix},h);}f.length>0?f=function(t,e){if(e.onFrame)return t;var n=e.delay,r=Object.prototype.hasOwnProperty;return i.each(e.toAttrs,function(e,a){i.each(t,function(t){n<t.startTime+t.duration&&r.call(t.toAttrs,a)&&(delete t.toAttrs[a],delete t.fromAttrs[a]);});}),e.toMatrix&&i.each(t,function(t){n<t.startTime+t.duration&&t.toMatrix&&delete t.toMatrix;}),t;}(f,h):c.addAnimator(this),f.push(h),this.setSilent("animators",f),this.setSilent("pause",{isPaused:!1});},stopAnimate:function(){var t=this,e=this.get("animators");i.each(e,function(e){t.attr(e.toAttrs||e.onFrame(1)),e.toMatrix&&t.attr("matrix",e.toMatrix),e.callback&&e.callback();}),this.setSilent("animating",!1),this.setSilent("animators",[]);},pauseAnimate:function(){var t=this.get("timeline");return this.setSilent("pause",{isPaused:!0,pauseTime:t.getTime()}),this;},resumeAnimate:function(){var t=this.get("timeline").getTime(),e=this.get("animators"),n=this.get("pause").pauseTime;return i.each(e,function(e){e.startTime=e.startTime+(t-n),e._paused=!1,e._pauseTime=null;}),this.setSilent("pause",{isPaused:!1}),this.setSilent("animators",e),this;}};},function(t,e,n){var r=n(0);function i(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7];}function a(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7];}function o(t,e){i(e)||(a(e)?(t[0]*=e[0],t[4]*=e[4]):r.mat3.multiply(t,t,e));}t.exports={initTransform:function(){},resetMatrix:function(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);},translate:function(t,e){var n=this._attrs.matrix;return r.mat3.translate(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotate:function(t){var e=this._attrs.matrix;return r.mat3.rotate(e,e,t),this.clearTotalMatrix(),this.attr("matrix",e),this;},scale:function(t,e){var n=this._attrs.matrix;return r.mat3.scale(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotateAtStart:function(t){var e=this._attrs.x||this._cfg.attrs.x,n=this._attrs.y||this._cfg.attrs.y;return Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]]);},move:function(t,e){var n=this.get("x")||0,r=this.get("y")||0;return this.translate(t-n,e-r),this.set("x",t),this.set("y",e),this;},transform:function(t){var e=this,n=this._attrs.matrix;return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.attr("matrix",r.mat3.multiply([],n,t[1])),e.clearTotalMatrix();}}),e;},setTransform:function(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t);},getMatrix:function(){return this.attr("matrix");},setMatrix:function(t){return this.attr("matrix",t),this.clearTotalMatrix(),this;},apply:function(t,e){var n;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),r.vec3.transformMat3(t,t,n),this;},_getMatrixByRoot:function(t){t=t||this;for(var e=this,n=[];e!==t;)n.unshift(e),e=e.get("parent");n.unshift(e);var i=[1,0,0,0,1,0,0,0,1];return r.each(n,function(t){r.mat3.multiply(i,t.attr("matrix"),i);}),i;},getTotalMatrix:function(){var t=this._cfg.totalMatrix;if(!t){t=[1,0,0,0,1,0,0,0,1];var e=this._cfg.parent;if(e)o(t,e.getTotalMatrix());o(t,this.attr("matrix")),this._cfg.totalMatrix=t;}return t;},clearTotalMatrix:function(){},invert:function(t){var e=this.getTotalMatrix();if(a(e))t[0]/=e[0],t[1]/=e[4];else{var n=r.mat3.invert([],e);n&&r.vec3.transformMat3(t,t,n);}return this;},resetTransform:function(t){var e=this.attr("matrix");i(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7]);}};},function(t,e,n){var r=n(0);t.exports={canFill:!1,canStroke:!1,initAttrs:function(t){return this._attrs={opacity:1,fillOpacity:1,strokeOpacity:1,matrix:[1,0,0,0,1,0,0,0,1]},this.attr(r.assign(this.getDefaultAttrs(),t)),this;},getDefaultAttrs:function(){return {};},attr:function(t,e){if(0===arguments.length)return this._attrs;if(r.isObject(t)){for(var n in t)this._setAttr(n,t[n]);return this.clearBBox(),this._cfg.hasUpdate=!0,this;}return 2===arguments.length?(this._setAttr(t,e),this.clearBBox(),this._cfg.hasUpdate=!0,this):this._attrs[t];},_setAttr:function(t,e){var n=this._attrs;n[t]=e,"fill"!==t&&"stroke"!==t?"opacity"!==t?"clip"===t&&e?this._setClip(e):"path"===t&&this._afterSetAttrPath?this._afterSetAttrPath(e):"transform"!==t?"rotate"===t&&this.rotateAtStart(e):this.transform(e):n.globalAlpha=e:n[t+"Style"]=e;},clearBBox:function(){this.setSilent("box",null);},hasFill:function(){return this.canFill&&this._attrs.fillStyle;},hasStroke:function(){return this.canStroke&&this._attrs.strokeStyle;},_setClip:function(t){t._cfg.renderer=this._cfg.renderer,t._cfg.canvas=this._cfg.canvas,t._cfg.parent=this._cfg.parent,t.hasFill=function(){return !0;};}};},function(t,e,n){var r=n(0),i=n(75),a=["mousedown","mouseup","dblclick","mouseenter","mouseout","mouseover","mousemove","mouseleave"],o=function(){return new Date().getTime();},s=null,u=null,c={},f=null,h=0;t.exports={registerEvent:function(){var t=this,e=this.get("el");r.each(a,function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e);},!1);}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0]);},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0]);},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0]);},!1),e.addEventListener("contextmenu",function(e){t._triggerEvent("contextmenu",e),e.preventDefault();},!1);},_getEmitter:function(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this._getEmitter(n,e);}},_getEventObj:function(t,e,n,r){var a=new i(t,e,!0,!0);return a.x=n.x,a.y=n.y,a.clientX=e.clientX,a.clientY=e.clientY,a.currentTarget=r,a.target=r,a;},_triggerEvent:function(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.getShape(n.x,n.y,e),i=this.get("el");if(f&&"svg"===this.getRenderer()&&(r=this.getShape(n.x,n.y)),"mousemove"===t){if(s&&s!==r&&(this._emitEvent("mouseout",e,n,s),this._emitEvent("mouseleave",e,n,s),f&&this._emitEvent("dragleave",e,n,s),r&&!r.destroyed||(i.style.cursor="default")),f&&(this._emitEvent("drag",e,n,f),this._emitEvent("mousemove",e,n,r)),r){if(!f)if(u===r){var a=o()-h,l=c.x-e.clientX,d=c.y-e.clientY;a>120||l*l+d*d>40?(f=r,u=null,this._emitEvent("dragstart",e,n,r)):this._emitEvent("mousemove",e,n,r);}else this._emitEvent("mousemove",e,n,r);s!==r&&(this._emitEvent("mouseenter",e,n,r),this._emitEvent("mouseover",e,n,r),f&&this._emitEvent("dragenter",e,n,r));}else{var p=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",p);}s=r;}else if(this._emitEvent(t,e,n,r||this),f||"mousedown"!==t||0!==e.button||(u=r,c={x:e.clientX,y:e.clientY},h=o()),"mouseup"===t&&0===e.button){var g=c.x-e.clientX,v=c.y-e.clientY,m=g*g+v*v,y=o();(m<40||y-h<200)&&(h=0,this._emitEvent("click",e,n,u||this)),f&&(f._cfg.capture=!0,this._emitEvent("dragend",e,n,f),f=null,this._emitEvent("drop",e,n,r||this)),u=null;}r&&!r.get("destroyed")&&(i.style.cursor=r.attr("cursor")||"default");},_emitEvent:function(t,e,n,r){var i=this._getEventObj(t,e,n,r),a=this._getEmitter(r,e);return a&&!a.get("destroyed")&&a.emit(t,i),a;}};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e;},e.length=a,e.fromValues=o,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t;},e.set=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t;},e.subtract=s,e.multiply=u,e.divide=c,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t;},e.distance=f,e.squaredDistance=h,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t;},e.normalize=d,e.dot=p,e.cross=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[0],s=n[1],u=n[2];return t[0]=i*u-a*s,t[1]=a*o-r*u,t[2]=r*s-i*o,t;},e.lerp=function(t,e,n,r){var i=e[0],a=e[1],o=e[2];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t[2]=o+r*(n[2]-o),t;},e.hermite=function(t,e,n,r,i,a){var o=a*a,s=o*(2*a-3)+1,u=o*(a-2)+a,c=o*(a-1),f=o*(3-2*a);return t[0]=e[0]*s+n[0]*u+r[0]*c+i[0]*f,t[1]=e[1]*s+n[1]*u+r[1]*c+i[1]*f,t[2]=e[2]*s+n[2]*u+r[2]*c+i[2]*f,t;},e.bezier=function(t,e,n,r,i,a){var o=1-a,s=o*o,u=a*a,c=s*o,f=3*a*s,h=3*u*o,l=u*a;return t[0]=e[0]*c+n[0]*f+r[0]*h+i[0]*l,t[1]=e[1]*c+n[1]*f+r[1]*h+i[1]*l,t[2]=e[2]*c+n[2]*f+r[2]*h+i[2]*l,t;},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI,i=2*r.RANDOM()-1,a=Math.sqrt(1-i*i)*e;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t[2]=i*e,t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=n[3]*r+n[7]*i+n[11]*a+n[15];return o=o||1,t[0]=(n[0]*r+n[4]*i+n[8]*a+n[12])/o,t[1]=(n[1]*r+n[5]*i+n[9]*a+n[13])/o,t[2]=(n[2]*r+n[6]*i+n[10]*a+n[14])/o,t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1],a=e[2];return t[0]=r*n[0]+i*n[3]+a*n[6],t[1]=r*n[1]+i*n[4]+a*n[7],t[2]=r*n[2]+i*n[5]+a*n[8],t;},e.transformQuat=function(t,e,n){var r=n[0],i=n[1],a=n[2],o=n[3],s=e[0],u=e[1],c=e[2],f=i*c-a*u,h=a*s-r*c,l=r*u-i*s,d=i*l-a*h,p=a*f-r*l,g=r*h-i*f,v=2*o;return f*=v,h*=v,l*=v,d*=2,p*=2,g*=2,t[0]=s+f+d,t[1]=u+h+p,t[2]=c+l+g,t;},e.rotateX=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0],a[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),a[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.rotateY=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),a[1]=i[1],a[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.rotateZ=function(t,e,n,r){var i=[],a=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],a[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),a[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),a[2]=i[2],t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t;},e.angle=function(t,e){var n=o(t[0],t[1],t[2]),r=o(e[0],e[1],e[2]);d(n,n),d(r,r);var i=p(n,r);return i>1?0:i<-1?Math.PI:Math.acos(i);},e.str=function(t){return "vec3("+t[0]+", "+t[1]+", "+t[2]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=e[0],s=e[1],u=e[2];return Math.abs(n-o)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-s)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-u)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(u));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(104));function i(){var t=new r.ARRAY_TYPE(3);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t;}function a(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r);}function o(t,e,n){var i=new r.ARRAY_TYPE(3);return i[0]=t,i[1]=e,i[2]=n,i;}function s(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t;}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t;}function c(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t;}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i);}function h(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i;}function l(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r;}function d(t,e){var n=e[0],r=e[1],i=e[2],a=n*n+r*r+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t;}function p(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2];}e.sub=s,e.mul=u,e.div=c,e.dist=f,e.sqrDist=h,e.len=a,e.sqrLen=l,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=3),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2];return e;};}();},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=i,e.clone=function(t){var e=new r.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e;},e.fromValues=function(t,e){var n=new r.ARRAY_TYPE(2);return n[0]=t,n[1]=e,n;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t;},e.set=function(t,e,n){return t[0]=e,t[1]=n,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t;},e.subtract=a,e.multiply=o,e.divide=s,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t;},e.distance=u,e.squaredDistance=c,e.length=f,e.squaredLength=h,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t;},e.normalize=function(t,e){var n=e[0],r=e[1],i=n*n+r*r;i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i);return t;},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1];},e.cross=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t;},e.lerp=function(t,e,n,r){var i=e[0],a=e[1];return t[0]=i+r*(n[0]-i),t[1]=a+r*(n[1]-a),t;},e.random=function(t,e){e=e||1;var n=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t;},e.transformMat2=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i,t[1]=n[1]*r+n[3]*i,t;},e.transformMat2d=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t;},e.rotate=function(t,e,n,r){var i=e[0]-n[0],a=e[1]-n[1],o=Math.sin(r),s=Math.cos(r);return t[0]=i*s-a*o+n[0],t[1]=i*o+a*s+n[1],t;},e.angle=function(t,e){var n=t[0],r=t[1],i=e[0],a=e[1],o=n*n+r*r;o>0&&(o=1/Math.sqrt(o));var s=i*i+a*a;s>0&&(s=1/Math.sqrt(s));var u=(n*i+r*a)*o*s;return u>1?0:u<-1?Math.PI:Math.acos(u);},e.str=function(t){return "vec2("+t[0]+", "+t[1]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1];},e.equals=function(t,e){var n=t[0],i=t[1],a=e[0],o=e[1];return Math.abs(n-a)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(i-o)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(o));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(104));function i(){var t=new r.ARRAY_TYPE(2);return r.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t;}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t;}function o(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t;}function s(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t;}function u(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r);}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r;}function f(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n);}function h(t){var e=t[0],n=t[1];return e*e+n*n;}e.len=f,e.sub=a,e.mul=o,e.div=s,e.dist=u,e.sqrDist=c,e.sqrLen=h,e.forEach=function(){var t=i();return function(e,n,r,i,a,o){var s=void 0,u=void 0;for(n||(n=2),r||(r=0),u=i?Math.min(i*n+r,e.length):e.length,s=r;s<u;s+=n)t[0]=e[s],t[1]=e[s+1],a(t,t,o),e[s]=t[0],e[s+1]=t[1];return e;};}();},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new r.ARRAY_TYPE(9);r.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0);return t[0]=1,t[4]=1,t[8]=1,t;},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t;},e.clone=function(t){var e=new r.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromValues=function(t,e,n,i,a,o,s,u,c){var f=new r.ARRAY_TYPE(9);return f[0]=t,f[1]=e,f[2]=n,f[3]=i,f[4]=a,f[5]=o,f[6]=s,f[7]=u,f[8]=c,f;},e.set=function(t,e,n,r,i,a,o,s,u,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=u,t[8]=c,t;},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.transpose=function(t,e){if(t===e){var n=e[1],r=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=i;}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t;},e.invert=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=f*o-s*c,l=-f*a+s*u,d=c*a-o*u,p=n*h+r*l+i*d;if(!p)return null;return p=1/p,t[0]=h*p,t[1]=(-f*r+i*c)*p,t[2]=(s*r-i*o)*p,t[3]=l*p,t[4]=(f*n-i*u)*p,t[5]=(-s*n+i*a)*p,t[6]=d*p,t[7]=(-c*n+r*u)*p,t[8]=(o*n-r*a)*p,t;},e.adjoint=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8];return t[0]=o*f-s*c,t[1]=i*c-r*f,t[2]=r*s-i*o,t[3]=s*u-a*f,t[4]=n*f-i*u,t[5]=i*a-n*s,t[6]=a*c-o*u,t[7]=r*u-n*c,t[8]=n*o-r*a,t;},e.determinant=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],u=t[7],c=t[8];return e*(c*a-o*u)+n*(-c*i+o*s)+r*(u*i-a*s);},e.multiply=i,e.translate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=n[0],d=n[1];return t[0]=r,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=u,t[6]=l*r+d*o+c,t[7]=l*i+d*s+f,t[8]=l*a+d*u+h,t;},e.rotate=function(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=Math.sin(n),d=Math.cos(n);return t[0]=d*r+l*o,t[1]=d*i+l*s,t[2]=d*a+l*u,t[3]=d*o-l*r,t[4]=d*s-l*i,t[5]=d*u-l*a,t[6]=c,t[7]=f,t[8]=h,t;},e.scale=function(t,e,n){var r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t;},e.fromRotation=function(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t;},e.fromQuat=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=n+n,s=r+r,u=i+i,c=n*o,f=r*o,h=r*s,l=i*o,d=i*s,p=i*u,g=a*o,v=a*s,m=a*u;return t[0]=1-h-p,t[3]=f-m,t[6]=l+v,t[1]=f+m,t[4]=1-c-p,t[7]=d-g,t[2]=l-v,t[5]=d+g,t[8]=1-c-h,t;},e.normalFromMat4=function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5],u=e[6],c=e[7],f=e[8],h=e[9],l=e[10],d=e[11],p=e[12],g=e[13],v=e[14],m=e[15],y=n*s-r*o,x=n*u-i*o,b=n*c-a*o,w=r*u-i*s,_=r*c-a*s,M=i*c-a*u,S=f*g-h*p,P=f*v-l*p,A=f*m-d*p,k=h*v-l*g,C=h*m-d*g,E=l*m-d*v,I=y*E-x*C+b*k+w*A-_*P+M*S;if(!I)return null;return I=1/I,t[0]=(s*E-u*C+c*k)*I,t[1]=(u*A-o*E-c*P)*I,t[2]=(o*C-s*A+c*S)*I,t[3]=(i*C-r*E-a*k)*I,t[4]=(n*E-i*A+a*P)*I,t[5]=(r*A-n*C-a*S)*I,t[6]=(g*M-v*_+m*w)*I,t[7]=(v*b-p*M-m*x)*I,t[8]=(p*_-g*b+m*y)*I,t;},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t;},e.str=function(t){return "mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")";},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2));},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t;},e.subtract=a,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t;},e.multiplyScalarAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t;},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8];},e.equals=function(t,e){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],u=t[5],c=t[6],f=t[7],h=t[8],l=e[0],d=e[1],p=e[2],g=e[3],v=e[4],m=e[5],y=e[6],x=e[7],b=e[8];return Math.abs(n-l)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-d)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(a-p)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(o-g)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(s-v)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(v))&&Math.abs(u-m)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(m))&&Math.abs(c-y)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-x)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(x))&&Math.abs(h-b)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(b));};var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e;}(n(104));function i(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],s=e[4],u=e[5],c=e[6],f=e[7],h=e[8],l=n[0],d=n[1],p=n[2],g=n[3],v=n[4],m=n[5],y=n[6],x=n[7],b=n[8];return t[0]=l*r+d*o+p*c,t[1]=l*i+d*s+p*f,t[2]=l*a+d*u+p*h,t[3]=g*r+v*o+m*c,t[4]=g*i+v*s+m*f,t[5]=g*a+v*u+m*h,t[6]=y*r+x*o+b*c,t[7]=y*i+x*s+b*f,t[8]=y*a+x*u+b*h,t;}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t;}e.mul=i,e.sub=a;},function(t,e){t.exports=function(t){return (window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16);})(t);};},function(t,e){t.exports=function(t,e){return (t%e+e)%e;};},function(t,e){var n=180/Math.PI;t.exports=function(t){return n*t;};},function(t,e){var n=Math.PI/180;t.exports=function(t){return n*t;};},function(t,e){t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e-5;return Math.abs(t-e)<n;};},function(t,e){var n=Array.prototype,r=n.splice,i=n.indexOf,a=n.slice;t.exports=function(t){for(var e=a.call(arguments,1),n=0;n<e.length;n++)for(var o=e[n],s=-1;(s=i.call(t,o))>-1;)r.call(t,s,1);return t;};},function(t,e,n){var r=n(14),i=n(51),a=n(17);t.exports=function t(e,n){if(e===n)return !0;if(!e||!n)return !1;if(a(e)||a(n))return !1;if(i(e)||i(n)){if(e.length!==n.length)return !1;for(var o=!0,s=0;s<e.length&&(o=t(e[s],n[s]));s++);return o;}if(r(e)||r(n)){var u=Object.keys(e),c=Object.keys(n);if(u.length!==c.length)return !1;for(var f=!0,h=0;h<u.length&&(f=t(e[u[h]],n[u[h]]));h++);return f;}return !1;};},function(t,e,n){var r=n(26);t.exports=function(t){return r(t)?"":t.toString();};},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n);};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).replace(/^\[object /,"").replace(/\]$/,"");};},function(t,e,n){var r=n(26),i=n(51),a=n(472),o=n(471),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(r(t))return !0;if(i(t))return !t.length;var e=a(t);if("Map"===e||"Set"===e)return !t.size;if(o(t))return !Object.keys(t).length;for(var n in t)if(s.call(t,n))return !1;return !0;};},function(t,e,n){var r=n(4);t.exports=function(t){return r(t,"Boolean");};},function(t,e,n){var r=n(0),i=n(459),a=n(189),o=n(452),s=n(451),u=function t(e){t.superclass.constructor.call(this,e);};u.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null,renderer:"canvas"},r.extend(u,a),r.augment(u,i,{init:function(){u.superclass.init.call(this),this._setGlobalParam(),this._setContainer(),this._initPainter(),this._scale(),this.get("eventEnable")&&this.registerEvent(this);},_scale:function(){if("svg"!==this._cfg.renderType){var t=this.get("pixelRatio");this.scale(t,t);}},_setGlobalParam:function(){var t=this.get("renderer")||"canvas";"svg"===t?this.set("pixelRatio",1):this.get("pixelRatio")||this.set("pixelRatio",r.getRatio()),this._cfg.renderType=t;var e=s[t];this._cfg.renderer=e,this._cfg.canvas=this;var n=new o(this);this._cfg.timeline=n;},_setContainer:function(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"});},_initPainter:function(){var t=this.get("containerDOM"),e=new this._cfg.renderer.painter(t);this._cfg.painter=e,this._cfg.canvasDOM=this._cfg.el=e.canvas,this.changeSize(this.get("width"),this.get("height"));},_resize:function(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n);},getWidth:function(){var t=this.get("pixelRatio");return this.get("width")*t;},getHeight:function(){var t=this.get("pixelRatio");return this.get("height")*t;},changeSize:function(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize();},getPointByClient:function(t,e){var n=this.get("el"),r=this.get("pixelRatio")||1,i=n.getBoundingClientRect();return {x:(t-i.left)*r,y:(e-i.top)*r};},getClientByPoint:function(t,e){var n=this.get("el").getBoundingClientRect(),r=this.get("pixelRatio")||1;return {clientX:t/r+n.left,clientY:e/r+n.top};},draw:function(){this._cfg.painter.draw(this);},getShape:function(t,e,n){return 3===arguments.length&&this._cfg.renderer.getShape?this._cfg.renderer.getShape.call(this,t,e,n):u.superclass.getShape.call(this,t,e);},getRenderer:function(){return this._cfg.renderType;},_drawSync:function(){this._cfg.painter.drawSync(this);},destroy:function(){var t=this._cfg,e=t.containerDOM,n=t.canvasDOM;n&&e&&e.removeChild(n),t.timeline.stop(),u.superclass.destroy.call(this);}}),t.exports=u;},function(t,e,n){var r=n(10),i=n(78),a=n(172),o=n(169),s=n(114),u={Graph:n(112),TreeGraph:n(202),Util:n(1),G:i,Global:r,Shape:a,Layout:o,registerNode:a.registerNode,registerEdge:a.registerEdge,registerBehavior:s.registerBehavior,registerLayout:o.registerLayout,version:r.version};t.exports=u;}]);});});var G6 = unwrapExports(g6);var g6_1=g6.G6;

	const FLOW_CONTAINER_ID = 'J_FlowContainer';
	const MIND_CONTAINER_ID = 'J_MindContainer';
	const LABEL_DEFAULT_TEXT = '新建节点';
	const LABEL_DEFAULT_MAX_WIDTH = 200;
	var ShapeClassName;
	(function (ShapeClassName) {
	    ShapeClassName["Label"] = "node-label";
	    ShapeClassName["KeyShape"] = "node-shape";
	    ShapeClassName["Wrapper"] = "node-wrapper";
	    ShapeClassName["Appendix"] = "node-appendix";
	    ShapeClassName["Anchor"] = "Anchor";
	    ShapeClassName["CollapseExpandButton"] = "CollapseExpandButton";
	    ShapeClassName["StatusIcon"] = "StatusIcon";
	})(ShapeClassName || (ShapeClassName = {}));
	var ItemType;
	(function (ItemType) {
	    ItemType["Node"] = "node";
	    ItemType["Edge"] = "edge";
	})(ItemType || (ItemType = {}));
	var ItemState;
	(function (ItemState) {
	    ItemState["Active"] = "active";
	    ItemState["Selected"] = "selected";
	    ItemState["HighLight"] = "highLight";
	    ItemState["Error"] = "error";
	})(ItemState || (ItemState = {}));
	var GraphType;
	(function (GraphType) {
	    GraphType["Flow"] = "Flow";
	    GraphType["Mind"] = "Mind";
	})(GraphType || (GraphType = {}));
	var GraphState;
	(function (GraphState) {
	    GraphState["NodeSelected"] = "NodeSelected";
	    GraphState["EdgeSelected"] = "EdgeSelected";
	    GraphState["MultiSelected"] = "MultiSelected";
	    GraphState["CanvasSelected"] = "CanvasSelected";
	})(GraphState || (GraphState = {}));
	var LabelState;
	(function (LabelState) {
	    LabelState["Hide"] = "Hide";
	    LabelState["Show"] = "Show";
	})(LabelState || (LabelState = {}));
	var EditorEvent;
	(function (EditorEvent) {
	    /** 调用命令之前触发 */
	    EditorEvent["onBeforeExecuteCommand"] = "onBeforeExecuteCommand";
	    /** 调用命令之后触发 */
	    EditorEvent["onAfterExecuteCommand"] = "onAfterExecuteCommand";
	    /** 改变画面状态触发 */
	    EditorEvent["onGraphStateChange"] = "onGraphStateChange";
	    /** 改变标签状态触发 */
	    EditorEvent["onLabelStateChange"] = "onLabelStateChange";
	    /** 改变右键菜单状态触发 */
	    EditorEvent["onContextMenuStateChange"] = "onContextMenuStateChange";
	    /** 改变nodePopover状态触发 */
	    EditorEvent["onNodePopoverStateChange"] = "onNodePopoverStateChange";
	})(EditorEvent || (EditorEvent = {}));
	var EditorCommand;
	(function (EditorCommand) {
	    /** 撤销 */
	    EditorCommand["Undo"] = "undo";
	    /** 重做 */
	    EditorCommand["Redo"] = "redo";
	    /** 添加 */
	    EditorCommand["Add"] = "add";
	    /** 更新 */
	    EditorCommand["Update"] = "update";
	    /** 删除 */
	    EditorCommand["Remove"] = "remove";
	    /** 插入主题 */
	    EditorCommand["Topic"] = "topic";
	    /** 插入子主题 */
	    EditorCommand["Subtopic"] = "subtopic";
	    /** 收起 */
	    EditorCommand["Fold"] = "fold";
	    /** 展开 */
	    EditorCommand["Unfold"] = "unfold";
	})(EditorCommand || (EditorCommand = {}));
	var GraphCommonEvent;
	(function (GraphCommonEvent) {
	    /** 单击鼠标左键或者按下回车键时触发 */
	    GraphCommonEvent["onClick"] = "click";
	    /** 双击鼠标左键时触发 */
	    GraphCommonEvent["onDoubleClick"] = "dblclick";
	    /** 鼠标移入元素范围内触发，该事件不冒泡，即鼠标移到其后代元素上时不会触发 */
	    GraphCommonEvent["onMouseEnter"] = "mouseenter";
	    /** 鼠标在元素内部移到时不断触发，不能通过键盘触发 */
	    GraphCommonEvent["onMouseMove"] = "mousemove";
	    /** 鼠标移出目标元素后触发 */
	    GraphCommonEvent["onMouseOut"] = "mouseout";
	    /** 鼠标移入目标元素上方，鼠标移到其后代元素上时会触发 */
	    GraphCommonEvent["onMouseOver"] = "mouseover";
	    /** 鼠标移出元素范围时触发，该事件不冒泡，即鼠标移到其后代元素时不会触发 */
	    GraphCommonEvent["onMouseLeave"] = "mouseleave";
	    /** 鼠标按钮被按下（左键或者右键）时触发，不能通过键盘触发 */
	    GraphCommonEvent["onMouseDown"] = "mousedown";
	    /** 鼠标按钮被释放弹起时触发，不能通过键盘触发 */
	    GraphCommonEvent["onMouseUp"] = "mouseup";
	    /** 用户右击鼠标时触发并打开上下文菜单 */
	    GraphCommonEvent["onContextMenu"] = "contextmenu";
	    /** 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上 */
	    GraphCommonEvent["onDragStart"] = "dragstart";
	    /** 当拖拽元素在拖动过程中时触发的事件，此事件作用于被拖拽元素上 */
	    GraphCommonEvent["onDrag"] = "drag";
	    /** 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 */
	    GraphCommonEvent["onDragEnd"] = "dragend";
	    /** 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphCommonEvent["onDragEnter"] = "dragenter";
	    /** 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphCommonEvent["onDragLeave"] = "dragleave";
	    /** 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */
	    GraphCommonEvent["onDrop"] = "drop";
	    /** 按下键盘键触发该事件 */
	    GraphCommonEvent["onKeyDown"] = "keydown";
	    /** 释放键盘键触发该事件 */
	    GraphCommonEvent["onKeyUp"] = "keyup";
	    /** 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 */
	    GraphCommonEvent["onTouchStart"] = "touchstart";
	    /** 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用 preventDefault() 事件可以阻止滚动。 */
	    GraphCommonEvent["onTouchMove"] = "touchmove";
	    /** 当手指从屏幕上离开的时候触发 */
	    GraphCommonEvent["onTouchEnd"] = "touchend";
	})(GraphCommonEvent || (GraphCommonEvent = {}));
	var GraphNodeEvent;
	(function (GraphNodeEvent) {
	    /** 鼠标左键单击节点时触发 */
	    GraphNodeEvent["onNodeClick"] = "node:click";
	    /** 鼠标双击左键节点时触发 */
	    GraphNodeEvent["onNodeDoubleClick"] = "node:dblclick";
	    /** 鼠标移入节点时触发 */
	    GraphNodeEvent["onNodeMouseEnter"] = "node:mouseenter";
	    /** 鼠标在节点内部移到时不断触发，不能通过键盘触发 */
	    GraphNodeEvent["onNodeMouseMove"] = "node:mousemove";
	    /** 鼠标移出节点后触发 */
	    GraphNodeEvent["onNodeMouseOut"] = "node:mouseout";
	    /** 鼠标移入节点上方时触发 */
	    GraphNodeEvent["onNodeMouseOver"] = "node:mouseover";
	    /** 鼠标移出节点时触发 */
	    GraphNodeEvent["onNodeMouseLeave"] = "node:mouseleave";
	    /** 鼠标按钮在节点上按下（左键或者右键）时触发，不能通过键盘触发 */
	    GraphNodeEvent["onNodeMouseDown"] = "node:mousedown";
	    /** 节点上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
	    GraphNodeEvent["onNodeMouseUp"] = "node:mouseup";
	    /** 用户在节点上右击鼠标时触发并打开右键菜单 */
	    GraphNodeEvent["onNodeContextMenu"] = "node:contextmenu";
	    /** 当节点开始被拖拽的时候触发的事件，此事件作用在被拖曳节点上 */
	    GraphNodeEvent["onNodeDragStart"] = "node:dragstart";
	    /** 当节点在拖动过程中时触发的事件，此事件作用于被拖拽节点上 */
	    GraphNodeEvent["onNodeDrag"] = "node:drag";
	    /** 当拖拽完成后触发的事件，此事件作用在被拖曳节点上 */
	    GraphNodeEvent["onNodeDragEnd"] = "node:dragend";
	    /** 当拖曳节点进入目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphNodeEvent["onNodeDragEnter"] = "node:dragenter";
	    /** 当拖曳节点离开目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphNodeEvent["onNodeDragLeave"] = "node:dragleave";
	    /** 被拖拽的节点在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */
	    GraphNodeEvent["onNodeDrop"] = "node:drop";
	})(GraphNodeEvent || (GraphNodeEvent = {}));
	var GraphEdgeEvent;
	(function (GraphEdgeEvent) {
	    /** 鼠标左键单击边时触发 */
	    GraphEdgeEvent["onEdgeClick"] = "edge:click";
	    /** 鼠标双击左键边时触发 */
	    GraphEdgeEvent["onEdgeDoubleClick"] = "edge:dblclick";
	    /** 鼠标移入边时触发 */
	    GraphEdgeEvent["onEdgeMouseEnter"] = "edge:mouseenter";
	    /** 鼠标在边上移到时不断触发，不能通过键盘触发 */
	    GraphEdgeEvent["onEdgeMouseMove"] = "edge:mousemove";
	    /** 鼠标移出边后触发 */
	    GraphEdgeEvent["onEdgeMouseOut"] = "edge:mouseout";
	    /** 鼠标移入边上方时触发 */
	    GraphEdgeEvent["onEdgeMouseOver"] = "edge:mouseover";
	    /** 鼠标移出边时触发 */
	    GraphEdgeEvent["onEdgeMouseLeave"] = "edge:mouseleave";
	    /** 鼠标按钮在边上按下（左键或者右键）时触发，不能通过键盘触发 */
	    GraphEdgeEvent["onEdgeMouseDown"] = "edge:mousedown";
	    /** 边上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
	    GraphEdgeEvent["onEdgeMouseUp"] = "edge:mouseup";
	    /** 用户在边上右击鼠标时触发并打开右键菜单 */
	    GraphEdgeEvent["onEdgeContextMenu"] = "edge:contextmenu";
	})(GraphEdgeEvent || (GraphEdgeEvent = {}));
	var GraphCanvasEvent;
	(function (GraphCanvasEvent) {
	    /** 鼠标左键单击画布时触发 */
	    GraphCanvasEvent["onCanvasClick"] = "canvas:click";
	    /** 鼠标双击左键画布时触发 */
	    GraphCanvasEvent["onCanvasDoubleClick"] = "canvas:dblclick";
	    /** 鼠标移入画布时触发 */
	    GraphCanvasEvent["onCanvasMouseEnter"] = "canvas:mouseenter";
	    /** 鼠标在画布内部移到时不断触发，不能通过键盘触发 */
	    GraphCanvasEvent["onCanvasMouseMove"] = "canvas:mousemove";
	    /** 鼠标移出画布后触发 */
	    GraphCanvasEvent["onCanvasMouseOut"] = "canvas:mouseout";
	    /** 鼠标移入画布上方时触发 */
	    GraphCanvasEvent["onCanvasMouseOver"] = "canvas:mouseover";
	    /** 鼠标移出画布时触发 */
	    GraphCanvasEvent["onCanvasMouseLeave"] = "canvas:mouseleave";
	    /** 鼠标按钮在画布上按下（左键或者右键）时触发，不能通过键盘触发 */
	    GraphCanvasEvent["onCanvasMouseDown"] = "canvas:mousedown";
	    /** 画布上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
	    GraphCanvasEvent["onCanvasMouseUp"] = "canvas:mouseup";
	    /** 用户在画布上右击鼠标时触发并打开右键菜单 */
	    GraphCanvasEvent["onCanvasContextMenu"] = "canvas:contextmenu";
	    /** 当画布开始被拖拽的时候触发的事件，此事件作用在被拖曳画布上 */
	    GraphCanvasEvent["onCanvasDragStart"] = "canvas:dragstart";
	    /** 当画布在拖动过程中时触发的事件，此事件作用于被拖拽画布上 */
	    GraphCanvasEvent["onCanvasDrag"] = "canvas:drag";
	    /** 当拖拽完成后触发的事件，此事件作用在被拖曳画布上 */
	    GraphCanvasEvent["onCanvasDragEnd"] = "canvas:dragend";
	    /** 当拖曳画布进入目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphCanvasEvent["onCanvasDragEnter"] = "canvas:dragenter";
	    /** 当拖曳画布离开目标元素的时候触发的事件，此事件作用在目标元素上 */
	    GraphCanvasEvent["onCanvasDragLeave"] = "canvas:dragleave";
	})(GraphCanvasEvent || (GraphCanvasEvent = {}));
	var GraphCustomEvent;
	(function (GraphCustomEvent) {
	    /** 调用 add / addItem 方法之前触发 */
	    GraphCustomEvent["onBeforeAddItem"] = "beforeadditem";
	    /** 调用 add / addItem 方法之后触发 */
	    GraphCustomEvent["onAfterAddItem"] = "afteradditem";
	    /** 调用 remove / removeItem 方法之前触发 */
	    GraphCustomEvent["onBeforeRemoveItem"] = "beforeremoveitem";
	    /** 调用 remove / removeItem 方法之后触发 */
	    GraphCustomEvent["onAfterRemoveItem"] = "afterremoveitem";
	    /** 调用 update / updateItem 方法之前触发 */
	    GraphCustomEvent["onBeforeUpdateItem"] = "beforeupdateitem";
	    /** 调用 update / updateItem 方法之后触发 */
	    GraphCustomEvent["onAfterUpdateItem"] = "afterupdateitem";
	    /** 调用 showItem / hideItem 方法之前触发 */
	    GraphCustomEvent["onBeforeItemVisibilityChange"] = "beforeitemvisibilitychange";
	    /** 调用 showItem / hideItem 方法之后触发 */
	    GraphCustomEvent["onAfterItemVisibilityChange"] = "afteritemvisibilitychange";
	    /** 调用 setItemState 方法之前触发 */
	    GraphCustomEvent["onBeforeItemStateChange"] = "beforeitemstatechange";
	    /** 调用 setItemState 方法之后触发 */
	    GraphCustomEvent["onAfterItemStateChange"] = "afteritemstatechange";
	    /** 调用 refreshItem 方法之前触发 */
	    GraphCustomEvent["onBeforeRefreshItem"] = "beforerefreshitem";
	    /** 调用 refreshItem 方法之后触发 */
	    GraphCustomEvent["onAfterRefreshItem"] = "afterrefreshitem";
	    /** 调用 clearItemStates 方法之前触发 */
	    GraphCustomEvent["onBeforeItemStatesClear"] = "beforeitemstatesclear";
	    /** 调用 clearItemStates 方法之后触发 */
	    GraphCustomEvent["onAfterItemStatesClear"] = "afteritemstatesclear";
	    /** 布局前触发。调用 render 时会进行布局，因此 render 时会触发。或用户主动调用图的 layout 时触发 */
	    GraphCustomEvent["onBeforeLayout"] = "beforelayout";
	    /** 布局完成后触发。调用 render 时会进行布局，因此 render 时布局完成后会触发。或用户主动调用图的 layout 时布局完成后触发 */
	    GraphCustomEvent["onAfterLayout"] = "afterlayout";
	})(GraphCustomEvent || (GraphCustomEvent = {}));

	/** 生成唯一标识 */
	function guid() {
	    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	        const r = (Math.random() * 16) | 0;
	        const v = c === 'x' ? r : (r & 0x3) | 0x8;
	        return v.toString(16);
	    });
	}
	/** 拼接查询字符 */
	const toQueryString = (obj) => Object.keys(obj)
	    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
	    .join('&');
	/** 添加事件监听 */
	function addListener(target, eventName, handler) {
	    if (typeof handler === 'function') {
	        target.on(eventName, handler);
	    }
	}
	/** 判断是否脑图 */
	function isMind(graph) {
	    return graph.constructor === G6.TreeGraph;
	}
	/** 判断是否边线 */
	function isEdge(item) {
	    return item.getType() === ItemType.Edge;
	}
	/** 获取选中节点 */
	function getSelectedNodes(graph) {
	    return graph.findAllByState(ItemType.Node, ItemState.Selected);
	}
	/** 获取选中边线 */
	function getSelectedEdges(graph) {
	    return graph.findAllByState(ItemType.Edge, ItemState.Selected);
	}
	/** 获取高亮边线 */
	function getHighlightEdges(graph) {
	    return graph.findAllByState(ItemType.Edge, ItemState.HighLight);
	}
	/** 执行批量处理 */
	function executeBatch(graph, execute) {
	    graph.setAutoPaint(false);
	    execute();
	    graph.paint();
	    graph.setAutoPaint(true);
	}
	function recursiveTraversal(root, callback) {
	    if (!root) {
	        return;
	    }
	    callback(root);
	    if (!root.children) {
	        return;
	    }
	    root.children.forEach(item => recursiveTraversal(item, callback));
	}

	const global$1 = {
	    version: "3.0.0-beta.4",
	    trackable: true,
	};
	var Global = {
	    /** 获取当前版本 */
	    getVersion() {
	        return global$1.version;
	    },
	    /** 设置当前版本 */
	    setVersion(version) {
	        global$1.version = version;
	    },
	    /** 获取埋点开关 */
	    getTrackable() {
	        return global$1.trackable;
	    },
	    /** 设置埋点开关 */
	    setTrackable(trackable) {
	        global$1.trackable = trackable;
	    },
	};

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */

	function stackClear() {
	  this.__data__ = new _ListCache();
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Used as the size to enable large array optimizations. */

	var LARGE_ARRAY_SIZE = 200;
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */

	function stackSet(key, value) {
	  var data = this.__data__;

	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;

	    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }

	    data = this.__data__ = new _MapCache(pairs);
	  }

	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */

	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	} // Add methods to `Stack`.


	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;
	var _Stack = Stack;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }

	  return array;
	}

	var _arrayEach = arrayEach;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */

	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }

	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }

	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }

	  return result;
	}

	var _baseTimes = baseTimes;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports =  exports && !exports.nodeType && exports;
	  /** Detect free variable `module`. */

	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	  /** Detect the popular CommonJS extension `module.exports`. */

	  var moduleExports = freeModule && freeModule.exports === freeExports;
	  /** Built-in value references. */

	  var Buffer = moduleExports ? _root.Buffer : undefined;
	  /* Built-in method references for those with the same name as other `lodash` methods. */

	  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	  /**
	   * Checks if `value` is a buffer.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.3.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	   * @example
	   *
	   * _.isBuffer(new Buffer(2));
	   * // => true
	   *
	   * _.isBuffer(new Uint8Array(2));
	   * // => false
	   */

	  var isBuffer = nativeIsBuffer || stubFalse_1;
	  module.exports = isBuffer;
	});

	/** `Object#toString` result references. */

	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	/** Used to identify `toStringTag` values of typed arrays. */

	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */

	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports =  exports && !exports.nodeType && exports;
	  /** Detect free variable `module`. */

	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	  /** Detect the popular CommonJS extension `module.exports`. */

	  var moduleExports = freeModule && freeModule.exports === freeExports;
	  /** Detect free variable `process` from Node.js. */

	  var freeProcess = moduleExports && _freeGlobal.process;
	  /** Used to access faster Node.js helpers. */

	  var nodeUtil = function () {
	    try {
	      // Use `util.types` for Node.js 10+.
	      var types = freeModule && freeModule.require && freeModule.require('util').types;

	      if (types) {
	        return types;
	      } // Legacy `process.binding('util')` for Node.js < 10.


	      return freeProcess && freeProcess.binding && freeProcess.binding('util');
	    } catch (e) {}
	  }();

	  module.exports = nodeUtil;
	});

	/* Node.js helper references. */

	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */

	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */

	var objectProto$7 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */

	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
	    _isIndex(key, length)))) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */

	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$8;
	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeKeys = _overArg(Object.keys, Object);
	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */

	var objectProto$9 = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }

	  var result = [];

	  for (var key in Object(object)) {
	    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */

	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */

	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */

	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];

	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */

	var objectProto$a = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */

	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }

	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
	      result.push(key);
	    }
	  }

	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */

	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */

	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	  /** Detect free variable `exports`. */
	  var freeExports =  exports && !exports.nodeType && exports;
	  /** Detect free variable `module`. */

	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	  /** Detect the popular CommonJS extension `module.exports`. */

	  var moduleExports = freeModule && freeModule.exports === freeExports;
	  /** Built-in value references. */

	  var Buffer = moduleExports ? _root.Buffer : undefined,
	      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	  /**
	   * Creates a clone of  `buffer`.
	   *
	   * @private
	   * @param {Buffer} buffer The buffer to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Buffer} Returns the cloned buffer.
	   */

	  function cloneBuffer(buffer, isDeep) {
	    if (isDeep) {
	      return buffer.slice();
	    }

	    var length = buffer.length,
	        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	    buffer.copy(result);
	    return result;
	  }

	  module.exports = cloneBuffer;
	});

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	  array || (array = Array(length));

	  while (++index < length) {
	    array[index] = source[index];
	  }

	  return array;
	}

	var _copyArray = copyArray;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];

	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }

	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */

	var objectProto$b = Object.prototype;
	/** Built-in value references. */

	var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeGetSymbols = Object.getOwnPropertySymbols;
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */

	var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
	  if (object == null) {
	    return [];
	  }

	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};
	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */

	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/** Built-in value references. */

	var getPrototype = _overArg(Object.getPrototypeOf, Object);
	var _getPrototype = getPrototype;

	/* Built-in method references for those with the same name as other `lodash` methods. */

	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */

	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
	  var result = [];

	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }

	  return result;
	};
	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */

	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */

	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */

	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */

	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */

	var DataView = _getNative(_root, 'DataView');
	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */

	var Promise = _getNative(_root, 'Promise');
	var _Promise = Promise;

	/* Built-in method references that are verified to be native. */

	var Set = _getNative(_root, 'Set');
	var _Set = Set;

	/* Built-in method references that are verified to be native. */

	var WeakMap = _getNative(_root, 'WeakMap');
	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */

	var mapTag$1 = '[object Map]',
	    objectTag$1 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';
	var dataViewTag$1 = '[object DataView]';
	/** Used to detect maps, sets, and weakmaps. */

	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

	if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
	  getTag = function (value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$1 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag$1;

	        case mapCtorString:
	          return mapTag$1;

	        case promiseCtorString:
	          return promiseTag;

	        case setCtorString:
	          return setTag$1;

	        case weakMapCtorString:
	          return weakMapTag$1;
	      }
	    }

	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */

	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

	  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }

	  return result;
	}

	var _initCloneArray = initCloneArray;

	/** Built-in value references. */

	var Uint8Array$1 = _root.Uint8Array;
	var _Uint8Array = Uint8Array$1;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */

	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */

	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */

	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */

	var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */

	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */

	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/** `Object#toString` result references. */

	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag$1 = '[object Symbol]';
	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */

	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;

	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1:
	    case float64Tag$1:
	    case int8Tag$1:
	    case int16Tag$1:
	    case int32Tag$1:
	    case uint8Tag$1:
	    case uint8ClampedTag$1:
	    case uint16Tag$1:
	    case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor();

	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor();

	    case symbolTag$1:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** Built-in value references. */

	var objectCreate = Object.create;
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */

	var baseCreate = function () {
	  function object() {}

	  return function (proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }

	    if (objectCreate) {
	      return objectCreate(proto);
	    }

	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	var _baseCreate = baseCreate;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */

	function initCloneObject(object) {
	  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
	}

	var _initCloneObject = initCloneObject;

	/** `Object#toString` result references. */

	var mapTag$3 = '[object Map]';
	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */

	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */

	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */

	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
	var isMap_1 = isMap;

	/** `Object#toString` result references. */

	var setTag$3 = '[object Set]';
	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */

	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */

	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */

	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */

	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	/** `Object#toString` result references. */

	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$2 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$2 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';
	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';
	/** Used to identify `toStringTag` values supported by `_.clone`. */

	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */

	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }

	  if (result !== undefined) {
	    return result;
	  }

	  if (!isObject_1(value)) {
	    return value;
	  }

	  var isArr = isArray_1(value);

	  if (isArr) {
	    result = _initCloneArray(value);

	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }

	    if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
	      result = isFlat || isFunc ? {} : _initCloneObject(value);

	      if (!isDeep) {
	        return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }

	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  } // Check for circular references and return its corresponding clone.


	  stack || (stack = new _Stack());
	  var stacked = stack.get(value);

	  if (stacked) {
	    return stacked;
	  }

	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function (subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function (subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function (subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    } // Recursively populate clone (susceptible to call stack limits).


	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */

	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */

	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	class CommandManager {
	    constructor() {
	        this.command = {};
	        this.commandQueue = [];
	        this.commandIndex = 0;
	    }
	    /** 注册命令 */
	    register(name, command) {
	        this.command[name] = {
	            ...command,
	            name,
	        };
	    }
	    /** 执行命令 */
	    execute(graph, name, params) {
	        const Command = this.command[name];
	        if (!Command) {
	            return;
	        }
	        const command = Object.create(Command);
	        command.params = cloneDeep_1(Command.params);
	        if (params) {
	            command.params = {
	                ...command.params,
	                ...params,
	            };
	        }
	        if (!command.canExecute(graph)) {
	            return;
	        }
	        if (!command.shouldExecute(graph)) {
	            return;
	        }
	        command.init(graph);
	        graph.emit(EditorEvent.onBeforeExecuteCommand, {
	            name: command.name,
	            params: command.params,
	        });
	        command.execute(graph);
	        graph.emit(EditorEvent.onAfterExecuteCommand, {
	            name: command.name,
	            params: command.params,
	        });
	        if (!command.canUndo(graph)) {
	            return;
	        }
	        const { commandQueue, commandIndex } = this;
	        commandQueue.splice(commandIndex, commandQueue.length - commandIndex, command);
	        this.commandIndex += 1;
	    }
	    /** 判断是否可以执行 */
	    canExecute(graph, name) {
	        return this.command[name].canExecute(graph);
	    }
	    /** 注入是否应该执行 */
	    injectShouldExecute(name, shouldExecute) {
	        this.command[name].shouldExecute = shouldExecute;
	    }
	}
	var commandManager = new CommandManager();

	const EditorContext = React.createContext({});

	const EditorPrivateContext = React.createContext({});
	const withEditorPrivateContext = function (WrappedComponent) {
	    const InjectEditorContext = props => {
	        const { forwardRef, ...rest } = props;
	        return (React.createElement(EditorPrivateContext.Consumer, null, context => React.createElement(WrappedComponent, Object.assign({ ref: forwardRef }, rest, context))));
	    };
	    return React.forwardRef((props, ref) => (React.createElement(InjectEditorContext, Object.assign({ forwardRef: ref }, props))));
	};

	const UtilCanvas = document.createElement('canvas');
	const UtilCanvasContext = UtilCanvas.getContext('2d');

	/* 节点固定宽高 */
	const keyShapeSize = {
	    width: 114,
	    height: 54,
	};
	/* 默认颜色 */
	const defaultColor = '#6580EB';
	const options = {
	    draw(model, group) {
	        this.drawWrapper(model, group);
	        const keyShape = group.addShape('rect', {
	            className: ShapeClassName.KeyShape,
	            attrs: {
	                width: keyShapeSize.width,
	                height: keyShapeSize.height,
	                x: 0,
	                y: 0,
	                radius: 6,
	                fill: '#fff',
	            },
	        });
	        this.showMenuIcon && this.drawMenuIcon(model, group);
	        this.drawStatusIcon(model, group);
	        this.drawLabel(model, group);
	        return keyShape;
	    },
	    afterDraw(model, group) {
	        this.alignLabel(group.findByClassName(ShapeClassName.Label));
	        this.alignMenuIcon(group.findByClassName(ShapeClassName.Appendix));
	    },
	    /* 绘制菜单按钮 */
	    drawMenuIcon(model, group) {
	        return group.addShape('image', {
	            className: ShapeClassName.Appendix,
	            attrs: {
	                img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0wIDBoMTRhNiA2IDAgMCAxIDYgNnY2SDZhNiA2IDAgMCAxLTYtNlYweiIvPjxnIGZpbGw9IiNBQUI1QzUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE0LjUgOCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iNyIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxMiIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxNyIgY3g9IjEyIi8+PC9nPjwvZz48L3N2Zz4=',
	                x: 0,
	                y: 0,
	                width: 20,
	                cursor: 'pointer',
	            },
	        });
	    },
	    /* 绘制状态标志 */
	    drawStatusIcon(model, group) {
	        if (model.statusIconColor) {
	            group.addShape('rect', {
	                className: ShapeClassName.StatusIcon,
	                attrs: {
	                    width: 14,
	                    height: 14,
	                    fill: '#F4F6F8',
	                    x: 0,
	                    y: 0,
	                    radius: [6, 0, 6, 0],
	                },
	            });
	            group.addShape('circle', {
	                className: ShapeClassName.StatusIcon,
	                attrs: {
	                    r: 2.5,
	                    x: 7,
	                    y: 7,
	                    fill: typeof model.statusIconColor === 'string' ? model.statusIconColor : defaultColor,
	                },
	            });
	        }
	    },
	    /* 绘制文本 */
	    drawLabel(model, group) {
	        const label = group.addShape('text', {
	            className: ShapeClassName.Label,
	            attrs: {
	                textAlign: 'left',
	                textBaseline: 'top',
	                text: model.label,
	                fill: 'black',
	                x: 0,
	                y: 0,
	            },
	        });
	        label.attr('text', this.resetLabelText(label, keyShapeSize.width - 20));
	        return label;
	    },
	    /* 更新 */
	    update(model, item) {
	        const group = item.getContainer();
	        const label = group.findByClassName(ShapeClassName.Label);
	        const statusIcon = group.findByClassName(ShapeClassName.StatusIcon);
	        label && label.remove(true);
	        statusIcon && statusIcon.remove(true);
	        this.drawStatusIcon(model, group);
	        const newLabel = this.drawLabel(model, group);
	        this.alignLabel(newLabel);
	    },
	    /* 根据尺寸重设节点文本 */
	    resetLabelText(label, maxWidth, maxLine = 2) {
	        const initialText = label.attr('text');
	        if (typeof initialText !== 'string' || initialText === '')
	            return initialText;
	        const { fontWeight, fontFamily, fontSize, fontStyle, fontVariant } = label.attr();
	        const initialFont = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
	        UtilCanvasContext.font = initialFont;
	        const ellipseWidth = UtilCanvasContext.measureText('...').width;
	        const lines = [];
	        let tempStr = '';
	        for (let i = 0; i < initialText.length; i++) {
	            const char = initialText[i];
	            if (/\s/.test(char)) {
	                continue;
	            }
	            tempStr += char;
	            if (UtilCanvasContext.measureText(tempStr).width > maxWidth || i === initialText.length - 1) {
	                lines.push(tempStr);
	                // 超出的字符放在下一行
	                tempStr = char;
	            }
	        }
	        const lastLine = lines[maxLine - 1];
	        // 没有最后一行文本或最后一行文本宽度不超，则直接返回
	        if (!lastLine || UtilCanvasContext.measureText(lastLine).width < maxWidth) {
	            return lines.join('\n').trim();
	        }
	        // 添加省略号
	        let newLastLine = '';
	        for (const char of lastLine) {
	            if (UtilCanvasContext.measureText(newLastLine + char).width < maxWidth - ellipseWidth) {
	                newLastLine += char;
	            }
	        }
	        return lines
	            .slice(0, maxLine - 1)
	            .concat(`${newLastLine}...`)
	            .join('\n');
	    },
	    /* 调整节点文本的位置 */
	    alignLabel(label) {
	        label.attr('x', (keyShapeSize.width - label.getBBox().width) / 2);
	        label.attr('y', (keyShapeSize.height - label.getBBox().height) / 2);
	    },
	    /* 调整menuIcon位置 */
	    alignMenuIcon(icon) {
	        icon.attr('x', keyShapeSize.width - icon.getBBox().width);
	    },
	    /* 绘制包围层 */
	    drawWrapper(model, group) {
	        return group.addShape('rect', {
	            className: ShapeClassName.Wrapper,
	            attrs: this[`get${ShapeClassName.Wrapper}defaultStyle`](),
	        });
	    },
	    /* 设置包围层状态样式 */
	    setWrapperStateStyle(state, wrapper) {
	        return wrapper.attr(this[`get${ShapeClassName.Wrapper}${state}Style`]());
	    },
	    /* 设置状态 */
	    setState(name, value, item) {
	        const wrapper = item.getContainer().findByClassName(ShapeClassName.Wrapper);
	        if (item.getStates().includes(ItemState.Selected)) {
	            return this.setWrapperStateStyle(ItemState.Selected, wrapper);
	        }
	        this.setWrapperStateStyle('default', wrapper);
	    },
	    /* 锚点 */
	    getAnchorPoints(model) {
	        if (Array.isArray(model.anchorPoints)) {
	            return model.anchorPoints;
	        }
	        return [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]];
	    },
	    [`get${ShapeClassName.Wrapper}defaultStyle`]() {
	        return {
	            width: keyShapeSize.width,
	            height: keyShapeSize.height,
	            x: 0,
	            y: -4,
	            fill: this.themeColor || defaultColor,
	            radius: 8,
	            shadowBlur: 25,
	            shadowColor: '#ccc',
	        };
	    },
	    [`get${ShapeClassName.Wrapper}selectedStyle`]() {
	        return {
	            width: keyShapeSize.width + 4,
	            height: keyShapeSize.height + 6,
	            x: -2,
	            y: -4,
	            fill: this.themeColor || defaultColor,
	            radius: 8,
	            shadowBlur: 25,
	            shadowColor: '#ccc',
	        };
	    },
	    [`get${ShapeClassName.Anchor}defaultStyle`]() {
	        return {
	            stroke: this.themeColor || defaultColor,
	            lineWidth: 2,
	            fill: '#fff',
	            r: 4,
	        };
	    },
	};
	G6.registerNode('bizNode', options);

	class GGEditor extends React.Component {
	    constructor(props) {
	        super(props);
	        this.setGraph = (graph) => {
	            this.setState({
	                graph,
	            });
	            this.bindEvent(graph);
	            this.bindShortcut(graph);
	        };
	        this.setGraphState = (graphState) => {
	            this.setState({
	                graphState,
	            });
	        };
	        this.setLabelState = (labelState) => {
	            this.setState({
	                labelState,
	            });
	        };
	        this.setContextMenuState = (param) => {
	            const { contextMenuState } = param;
	            this.setState({
	                contextMenuState,
	            });
	        };
	        this.setNodePopoverState = (param) => {
	            const { nodePopoverState } = param;
	            this.setState({ nodePopoverState });
	        };
	        this.canExecuteCommand = (name) => {
	            const { graph } = this.state;
	            if (graph) {
	                return commandManager.canExecute(graph, name);
	            }
	            return false;
	        };
	        this.executeCommand = (name, params) => {
	            const { graph } = this.state;
	            if (graph) {
	                commandManager.execute(graph, name, params);
	            }
	        };
	        this.state = {
	            graph: null,
	            graphState: GraphState.CanvasSelected,
	            labelState: LabelState.Hide,
	            contextMenuState: { visible: false, clientX: 0, clientY: 0 },
	            nodePopoverState: { visible: false, x: 0, y: 0 },
	            setGraph: this.setGraph,
	            setGraphState: this.setGraphState,
	            setLabelState: this.setLabelState,
	            canExecuteCommand: this.canExecuteCommand,
	            executeCommand: this.executeCommand,
	            setContextMenuState: this.setContextMenuState,
	        };
	        this.lastMousedownTarget = null;
	    }
	    static setTrackable(trackable) {
	        Global.setTrackable(trackable);
	    }
	    bindEvent(graph) {
	        const { props } = this;
	        addListener(graph, EditorEvent.onBeforeExecuteCommand, props[EditorEvent.onBeforeExecuteCommand]);
	        addListener(graph, EditorEvent.onAfterExecuteCommand, props[EditorEvent.onAfterExecuteCommand]);
	        addListener(graph, EditorEvent.onGraphStateChange, ({ graphState }) => {
	            if (graphState === this.state.graphState) {
	                return;
	            }
	            this.setState({
	                graphState,
	            });
	        });
	        addListener(graph, EditorEvent.onLabelStateChange, ({ graphState = GraphState.NodeSelected, labelState }) => {
	            if (labelState === this.state.labelState) {
	                return;
	            }
	            this.setState({
	                graphState,
	                labelState,
	            });
	        });
	        addListener(graph, EditorEvent.onContextMenuStateChange, (param) => {
	            this.setContextMenuState(param);
	        });
	        addListener(graph, EditorEvent.onNodePopoverStateChange, (param) => {
	            this.setNodePopoverState(param);
	        });
	    }
	    bindShortcut(graph) {
	        window.addEventListener(GraphCommonEvent.onMouseDown, e => {
	            this.lastMousedownTarget = e.target;
	        });
	        graph.on(GraphCommonEvent.onKeyDown, (e) => {
	            const canvasElement = graph.get('canvas').get('el');
	            if (this.lastMousedownTarget !== canvasElement) {
	                return;
	            }
	            Object.values(commandManager.command).some(command => {
	                const { name, shortcuts } = command;
	                const flag = shortcuts.some((shortcut) => {
	                    const { key } = e;
	                    if (!isArray_1(shortcut)) {
	                        return shortcut === key;
	                    }
	                    return shortcut.every((item, index) => {
	                        if (index === shortcut.length - 1) {
	                            return item === key;
	                        }
	                        return e[item];
	                    });
	                });
	                if (flag) {
	                    if (this.canExecuteCommand(name)) {
	                        this.executeCommand(name);
	                        return true;
	                    }
	                }
	                return false;
	            });
	        });
	    }
	    render() {
	        const { children } = this.props;
	        const { graph, executeCommand } = this.state;
	        return (React.createElement(EditorContext.Provider, { value: {
	                graph,
	                executeCommand,
	            } },
	            React.createElement(EditorPrivateContext.Provider, { value: this.state },
	                React.createElement("div", Object.assign({}, pick_1(this.props, ['className', 'style'])), children))));
	    }
	}

	class BehaviorManager {
	    constructor() {
	        this.behaviors = {};
	    }
	    wrapEventHandler(type, behavior) {
	        const events = behavior.getEvents();
	        Object.keys(events).forEach(event => {
	            const customBehavior = behavior;
	            const handlerName = events[event];
	            const handler = customBehavior[handlerName];
	            customBehavior[handlerName] = function (...params) {
	                const { graph } = this;
	                if ((type === GraphType.Flow && isMind(graph) === false) ||
	                    (type === GraphType.Mind && isMind(graph))) {
	                    handler.apply(this, params);
	                }
	            };
	        });
	        return behavior;
	    }
	    register(name, behavior) {
	        const { graphType } = behavior;
	        this.behaviors[name] = behavior;
	        switch (graphType) {
	            case GraphType.Flow:
	                G6.registerBehavior(name, this.wrapEventHandler(GraphType.Flow, behavior));
	                break;
	            case GraphType.Mind:
	                G6.registerBehavior(name, this.wrapEventHandler(GraphType.Mind, behavior));
	                break;
	            default:
	                G6.registerBehavior(name, behavior);
	                break;
	        }
	    }
	}
	var behaviorManager = new BehaviorManager();

	const BASE_URL = 'http://gm.mmstat.com/fsp.1.1';
	function track(graphType) {
	    const version = Global.getVersion();
	    const trackable = Global.getTrackable();
	    if (!trackable) {
	        return;
	    }
	    const { location, navigator } = window;
	    const image = new Image();
	    const params = toQueryString({
	        pid: 'ggeditor',
	        code: '11',
	        msg: 'syslog',
	        page: `${location.protocol}//${location.host}${location.pathname}`,
	        hash: location.hash,
	        ua: navigator.userAgent,
	        rel: version,
	        c1: graphType,
	    });
	    image.src = `${BASE_URL}?${params}`;
	}

	class EditableLabel extends React.PureComponent {
	    constructor() {
	        super(...arguments);
	        this.labelElement = null;
	        this.handleBlur = () => {
	            const { labelState } = this.props;
	            if (labelState === LabelState.Show) {
	                this.executeUpdate();
	            }
	        };
	        this.handleKeyDown = (e) => {
	            const { key } = e;
	            if (key === 'Enter' || key === 'Escape') {
	                // 阻止事件冒泡
	                e.stopPropagation();
	                // 执行模型更新
	                this.executeUpdate();
	                // 隐藏编辑标签
	                this.props.setLabelState(LabelState.Hide);
	            }
	        };
	        this.executeUpdate = () => {
	            const { executeCommand } = this.props;
	            const model = this.getSelectedNode().getModel();
	            const { label } = model;
	            const { textContent } = this.labelElement;
	            if (textContent === label) {
	                return;
	            }
	            const { id } = model;
	            executeCommand('update', {
	                id,
	                updateModel: {
	                    label: textContent,
	                },
	                forceRefreshLayout: true,
	            });
	        };
	        this.getSelectedNode = () => {
	            const { graph } = this.props;
	            return getSelectedNodes(graph)[0];
	        };
	        this.getLabelOffset = ({ labelShape, selectedNode }) => {
	            const { graph } = this.props;
	            const { x: relativeX, y: relativeY } = labelShape.getBBox();
	            const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix({
	                x: relativeX,
	                y: relativeY,
	            }, selectedNode.getContainer().getMatrix());
	            const { x: left, y: top } = graph.getCanvasByPoint(absoluteX, absoluteY);
	            return {
	                top,
	                left,
	            };
	        };
	        this.getLabelSize = ({ labelShape }) => {
	            const { width, height } = labelShape.getBBox();
	            const model = this.getSelectedNode().getModel();
	            const maxWidth = (model.labelCfg && model.labelCfg.maxWidth) || LABEL_DEFAULT_MAX_WIDTH;
	            return {
	                width: 'auto',
	                height: 'auto',
	                'min-width': width,
	                'max-width': maxWidth,
	                'min-height': height,
	            };
	        };
	        this.getLabelFont = ({ labelShape }) => {
	            const font = labelShape.attr('font');
	            return {
	                font,
	            };
	        };
	        this.getLabelZoom = () => {
	            const { graph } = this.props;
	            const zoom = graph.getZoom();
	            return {
	                transform: `scale(${zoom})`,
	                'transform-origin': 'left top',
	            };
	        };
	    }
	    componentDidUpdate() {
	        const { labelState } = this.props;
	        if (labelState === LabelState.Show) {
	            // focus
	            this.labelElement.focus();
	            // select all
	            document.execCommand('selectAll', false, null);
	        }
	    }
	    render() {
	        const { labelState } = this.props;
	        let label = '';
	        let labelStyle = {
	            position: 'absolute',
	            background: 'white',
	            border: '1px solid #1890FF',
	            outline: 'none',
	        };
	        if (labelState === LabelState.Hide) {
	            labelStyle = {
	                ...labelStyle,
	                display: 'none',
	            };
	        }
	        else {
	            const selectedNode = this.getSelectedNode();
	            const labelShape = selectedNode.getContainer().findByClassName(ShapeClassName.Label);
	            label = selectedNode.getModel().label;
	            labelStyle = {
	                ...labelStyle,
	                ...this.getLabelOffset({
	                    labelShape,
	                    selectedNode,
	                }),
	                ...this.getLabelSize({
	                    labelShape,
	                }),
	                ...this.getLabelFont({
	                    labelShape,
	                }),
	                ...this.getLabelZoom(),
	            };
	        }
	        return (React.createElement("div", { ref: el => {
	                this.labelElement = el;
	            }, style: labelStyle, contentEditable: true, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }, label));
	    }
	}
	var EditableLabel$1 = withEditorPrivateContext(EditableLabel);

	const command = {
	    name: '',
	    params: {},
	    canExecute() {
	        return true;
	    },
	    shouldExecute() {
	        return true;
	    },
	    canUndo() {
	        return true;
	    },
	    init() { },
	    execute() { },
	    undo() { },
	    shortcuts: [],
	};

	const baseCommand = {
	    ...command,
	    isMind,
	    getSelectedNodes,
	    getSelectedEdges,
	    setSelectedNode(graph, id) {
	        const autoPaint = graph.get('autoPaint');
	        graph.setAutoPaint(false);
	        const selectedNodes = this.getSelectedNodes(graph);
	        selectedNodes.forEach(node => {
	            if (node.hasState(ItemState.Selected)) {
	                graph.setItemState(node, ItemState.Selected, false);
	            }
	        });
	        graph.setItemState(id, ItemState.Selected, true);
	        graph.setAutoPaint(autoPaint);
	        graph.paint();
	    },
	    editSelectedNode(graph) {
	        const modes = graph.get('modes');
	        const mode = graph.getCurrentMode();
	        const behaviors = modes[mode];
	        if (behaviors.some((behavior) => {
	            return behavior === 'edit-label' || behavior.type === 'edit-label';
	        })) {
	            graph.emit(EditorEvent.onLabelStateChange, {
	                labelState: LabelState.Show,
	            });
	        }
	    },
	};
	commandManager.register('base', baseCommand);

	commandManager.register('redo', {
	    ...command,
	    canExecute() {
	        const { commandQueue, commandIndex } = commandManager;
	        return commandIndex < commandQueue.length;
	    },
	    canUndo() {
	        return false;
	    },
	    execute(graph) {
	        const { commandQueue, commandIndex } = commandManager;
	        commandQueue[commandIndex].execute(graph);
	        commandManager.commandIndex += 1;
	    },
	    shortcuts: [['metaKey', 'shiftKey', 'z'], ['ctrlKey', 'shiftKey', 'z']],
	});

	commandManager.register('undo', {
	    ...command,
	    canExecute() {
	        const { commandIndex } = commandManager;
	        return commandIndex > 0;
	    },
	    canUndo() {
	        return false;
	    },
	    execute(graph) {
	        const { commandQueue, commandIndex } = commandManager;
	        commandQueue[commandIndex - 1].undo(graph);
	        commandManager.commandIndex -= 1;
	    },
	    shortcuts: [['metaKey', 'z'], ['ctrlKey', 'z']],
	});

	const addCommand = {
	    ...baseCommand,
	    params: {
	        type: ItemType.Node,
	        model: {
	            id: '',
	        },
	    },
	    init() {
	        const { model } = this.params;
	        if (model.id) {
	            return;
	        }
	        model.id = guid();
	    },
	    execute(graph) {
	        const { type, model } = this.params;
	        graph.add(type, model);
	        this.setSelectedNode(graph, model.id);
	    },
	    undo(graph) {
	        const { model } = this.params;
	        graph.remove(model.id);
	    },
	};
	commandManager.register('add', addCommand);

	const removeCommand = {
	    ...baseCommand,
	    params: {
	        flow: {
	            nodes: {},
	            edges: {},
	        },
	        mind: {
	            model: null,
	            parent: '',
	        },
	    },
	    canExecute(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        const selectedEdges = this.getSelectedEdges(graph);
	        return !!(selectedNodes.length || selectedEdges.length);
	    },
	    init(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        const selectedEdges = this.getSelectedEdges(graph);
	        if (isMind(graph)) {
	            const selectedNode = selectedNodes[0];
	            const selectedNodeModel = selectedNode.getModel();
	            const selectedNodeParent = selectedNode.get('parent');
	            const selectedNodeParentModel = selectedNodeParent ? selectedNodeParent.getModel() : {};
	            this.params.mind = {
	                model: selectedNodeModel,
	                parent: selectedNodeParentModel.id,
	            };
	        }
	        else {
	            const { nodes, edges } = this.params.flow;
	            selectedNodes.forEach(node => {
	                const nodeModel = node.getModel();
	                const nodeEdges = node.getEdges();
	                nodes[nodeModel.id] = nodeModel;
	                nodeEdges.forEach(edge => {
	                    const edgeModel = edge.getModel();
	                    edges[edgeModel.id] = edgeModel;
	                });
	            });
	            selectedEdges.forEach(edge => {
	                const edgeModel = edge.getModel();
	                edges[edgeModel.id] = edgeModel;
	            });
	        }
	    },
	    execute(graph) {
	        if (isMind(graph)) {
	            const { model } = this.params.mind;
	            if (!model) {
	                return;
	            }
	            graph.removeChild(model.id);
	        }
	        else {
	            const { nodes, edges } = this.params.flow;
	            executeBatch(graph, () => {
	                [...Object.keys(nodes), ...Object.keys(edges)].forEach(id => {
	                    graph.removeItem(id);
	                });
	            });
	        }
	    },
	    undo(graph) {
	        if (isMind(graph)) {
	            const { model, parent } = this.params.mind;
	            if (!model) {
	                return;
	            }
	            graph.addChild(model, parent);
	        }
	        else {
	            const { nodes, edges } = this.params.flow;
	            executeBatch(graph, () => {
	                Object.keys(nodes).forEach(id => {
	                    const model = nodes[id];
	                    graph.addItem(ItemType.Node, model);
	                });
	                Object.keys(edges).forEach(id => {
	                    const model = edges[id];
	                    graph.addItem(ItemType.Edge, model);
	                });
	            });
	        }
	    },
	    shortcuts: ['Delete', 'Backspace'],
	};
	commandManager.register('remove', removeCommand);

	const updateCommand = {
	    ...baseCommand,
	    params: {
	        id: '',
	        originModel: {},
	        updateModel: {},
	        forceRefreshLayout: false,
	    },
	    canExecute(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        const selectedEdges = this.getSelectedEdges(graph);
	        return (selectedNodes.length || selectedEdges.length) && (selectedNodes.length === 1 || selectedEdges.length === 1)
	            ? true
	            : false;
	    },
	    init(graph) {
	        const { id, updateModel } = this.params;
	        const updatePaths = Object.keys(updateModel);
	        const originModel = pick_1(graph.findById(id).getModel(), updatePaths);
	        this.params.originModel = originModel;
	    },
	    execute(graph) {
	        const { id, updateModel, forceRefreshLayout } = this.params;
	        graph.updateItem(id, updateModel);
	        if (forceRefreshLayout) {
	            graph.refreshLayout && graph.refreshLayout(false);
	        }
	    },
	    undo(graph) {
	        const { id, originModel } = this.params;
	        graph.updateItem(id, originModel);
	    },
	};
	commandManager.register('update', updateCommand);

	const clickItemBehavior = {
	    getDefaultCfg() {
	        return {
	            multiple: true,
	            keydown: false,
	            keyCode: 17,
	        };
	    },
	    getEvents() {
	        return {
	            'node:click': 'handleItemClick',
	            'edge:click': 'handleItemClick',
	            'canvas:click': 'handleCanvasClick',
	            keydown: 'handleKeyDown',
	            keyup: 'handleKeyUp',
	        };
	    },
	    clearSelectedState(shouldUpdate = () => true) {
	        const { graph } = this;
	        const selectedNodes = getSelectedNodes(graph);
	        const selectedEdges = getSelectedEdges(graph);
	        executeBatch(graph, () => {
	            [...selectedNodes, ...selectedEdges].forEach(item => {
	                if (shouldUpdate(item)) {
	                    graph.setItemState(item, ItemState.Selected, false);
	                }
	            });
	        });
	    },
	    handleItemClick({ item }) {
	        const { graph } = this;
	        if (isMind(graph) && isEdge(item)) {
	            return;
	        }
	        const isSelected = item.hasState(ItemState.Selected);
	        if (this.multiple && this.keydown) {
	            graph.setItemState(item, ItemState.Selected, !isSelected);
	        }
	        else {
	            this.clearSelectedState(selectedItem => {
	                return selectedItem !== item;
	            });
	            if (!isSelected) {
	                graph.setItemState(item, ItemState.Selected, true);
	            }
	        }
	    },
	    handleCanvasClick() {
	        this.clearSelectedState();
	    },
	    handleKeyDown(e) {
	        this.keydown = (e.keyCode || e.which) === this.keyCode;
	    },
	    handleKeyUp() {
	        this.keydown = false;
	    },
	};
	behaviorManager.register('click-item', clickItemBehavior);

	const hoverItemBehavior = {
	    getEvents() {
	        return {
	            'node:mouseenter': 'handleItemMouseenter',
	            'edge:mouseenter': 'handleItemMouseenter',
	            'node:mouseleave': 'handleItemMouseleave',
	            'edge:mouseleave': 'handleItemMouseleave',
	        };
	    },
	    handleItemMouseenter({ item }) {
	        const { graph } = this;
	        graph.setItemState(item, ItemState.Active, true);
	    },
	    handleItemMouseleave({ item }) {
	        const { graph } = this;
	        graph.setItemState(item, ItemState.Active, false);
	    },
	};
	behaviorManager.register('hover-item', hoverItemBehavior);

	const editLabelBehavior = {
	    getEvents() {
	        return {
	            'node:click': 'handleNodeClick',
	            'node:dblclick': 'handleNodeDoubleClick',
	            'canvas:click': 'handleCanvasClick',
	        };
	    },
	    showLabel() {
	        const { graph } = this;
	        graph.emit(EditorEvent.onLabelStateChange, {
	            labelState: LabelState.Show,
	        });
	    },
	    hideLabel() {
	        const { graph } = this;
	        graph.emit(EditorEvent.onLabelStateChange, {
	            labelState: LabelState.Hide,
	        });
	    },
	    handleNodeClick() {
	        this.hideLabel();
	    },
	    handleNodeDoubleClick() {
	        this.showLabel();
	    },
	    handleCanvasClick() {
	        const { graph } = this;
	        graph.emit(EditorEvent.onLabelStateChange, {
	            graphState: GraphState.CanvasSelected,
	            labelState: LabelState.Hide,
	        });
	    },
	};
	behaviorManager.register('edit-label', editLabelBehavior);

	const contextMenuBehavior = {
	    getEvents() {
	        return {
	            'node:contextmenu': 'handleNodeContextMenu',
	            'canvas:mousedown': 'handleCanvasMousedown',
	            'node:click': 'handleAppendixClick',
	        };
	    },
	    showContextMenu(e) {
	        const { graph } = this;
	        graph.emit(EditorEvent.onContextMenuStateChange, {
	            contextMenuState: {
	                visible: true,
	                clientX: e.clientX,
	                clientY: e.clientY,
	            },
	        });
	    },
	    hideContextMenu() {
	        const { graph } = this;
	        graph.emit(EditorEvent.onContextMenuStateChange, {
	            contextMenuState: {
	                visible: false,
	                clientX: 0,
	                clientY: 0,
	            },
	        });
	    },
	    handleNodeContextMenu(e) {
	        this.showContextMenu(e);
	    },
	    handleCanvasMousedown() {
	        this.hideContextMenu();
	    },
	    handleAppendixClick(e) {
	        const { target } = e;
	        if (target.get('className') === ShapeClassName.Appendix) {
	            this.showContextMenu(e);
	        }
	    },
	};
	behaviorManager.register('context-menu', contextMenuBehavior);

	const recallEdgeBehavior = {
	    getEvents() {
	        return {
	            [`${GraphNodeEvent.onNodeClick}`]: 'handleNodeClick',
	            [`${GraphCanvasEvent.onCanvasClick}`]: 'handleCanvasClick',
	            [`${GraphEdgeEvent.onEdgeClick}`]: 'handleEdgeClick',
	        };
	    },
	    clearHighlightState(shouldUpdate = () => true) {
	        const { graph } = this;
	        const selectedEdges = getHighlightEdges(graph);
	        executeBatch(graph, () => {
	            [...selectedEdges].forEach(item => {
	                if (shouldUpdate(item)) {
	                    graph.setItemState(item, ItemState.HighLight, false);
	                }
	            });
	        });
	    },
	    handleNodeClick({ item }) {
	        const { graph } = this;
	        const isSelected = item.hasState(ItemState.Selected);
	        this.clearHighlightState(selectedItem => {
	            return selectedItem !== item;
	        });
	        if (!isSelected) {
	            graph.setItemState(item, ItemState.Selected, true);
	        }
	        this.highlightParentEdges(item);
	    },
	    handleEdgeClick({ item }) {
	        const { graph } = this;
	        const isHighlight = item.hasState(ItemState.HighLight);
	        if (isHighlight) {
	            graph.setItemState(item, ItemState.HighLight, false);
	        }
	    },
	    highlightParentEdges(item) {
	        const { graph } = this;
	        this.clearHighlightState();
	        let edges = [];
	        if (isMind(graph)) {
	            edges = this.findMindParentEdges(item);
	        }
	        if (!isMind(graph)) {
	            edges = this.findFlowRecallEdges(item);
	        }
	        if (edges.length > 0) {
	            edges.forEach(edge => graph.setItemState(edge, ItemState.HighLight, true));
	        }
	    },
	    findMindParentEdges(item, edges = []) {
	        const parentNode = item.get('parent');
	        if (!parentNode) {
	            return edges;
	        }
	        const foundEdge = item.getEdges().find(edge => edge.getModel().source === parentNode.getModel().id);
	        if (foundEdge) {
	            edges.push(foundEdge);
	        }
	        return this.findMindParentEdges(item.get('parent'), edges);
	    },
	    /**
	     * 暂时支持返回直接连到节点的边
	     * */
	    findFlowRecallEdges(item) {
	        return item.getEdges();
	    },
	    handleCanvasClick() {
	        this.clearHighlightState();
	    },
	};
	behaviorManager.register('recall-edge', recallEdgeBehavior);

	const nodePopoverBehavior = {
	    getPopoverText(model) {
	        let text = model.label;
	        const { formatText } = this;
	        // 用户初始化画布时配置的，与G6保持一致
	        if (typeof formatText === 'function') {
	            text = formatText(model);
	        }
	        return text;
	    },
	    getEvents() {
	        return {
	            'node:mouseenter': 'handleItemMouseenter',
	            'node:mouseleave': 'handleItemMouseleave',
	        };
	    },
	    getPopoverPosition(item) {
	        const { graph } = this;
	        const { x: relativeX, y: relativeY } = item.getKeyShape().getBBox();
	        const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix({
	            x: relativeX,
	            y: relativeY,
	        }, item.getContainer().getMatrix());
	        return graph.getCanvasByPoint(absoluteX, absoluteY);
	    },
	    showPopover(e) {
	        const { graph } = this;
	        const model = e.item.getModel();
	        const text = this.getPopoverText(model);
	        if (!text)
	            return;
	        const position = this.getPopoverPosition(e.item);
	        graph.emit(EditorEvent.onNodePopoverStateChange, {
	            nodePopoverState: {
	                visible: true,
	                x: position.x,
	                y: position.y,
	                text,
	            },
	        });
	    },
	    hidePopover() {
	        const { graph } = this;
	        graph.emit(EditorEvent.onNodePopoverStateChange, {
	            nodePopoverState: {
	                visible: false,
	                x: 0,
	                y: 0,
	            },
	        });
	    },
	    handleItemMouseenter(e) {
	        this.showPopover(e);
	    },
	    handleItemMouseleave() {
	        this.hidePopover();
	    },
	};
	behaviorManager.register('node-popover', nodePopoverBehavior);

	class NodePopover extends React.Component {
	    constructor() {
	        super(...arguments);
	        this.getPopoverStyle = () => {
	            const { nodePopoverState } = this.props;
	            return {
	                position: 'fixed',
	                minWidth: '50px',
	                minHeight: '10px',
	                left: `${nodePopoverState.x}px`,
	                top: `${nodePopoverState.y}px`,
	                display: nodePopoverState.visible ? 'block' : 'none',
	                padding: '4px',
	                textAlign: 'center',
	                boxShadow: '#d9d9d9 0 0 5px 1px',
	                border: 'solid 1px #ccc',
	                borderRadius: '4px',
	                backgroundColor: '#fff',
	            };
	        };
	    }
	    componentDidMount() { }
	    render() {
	        const { children, nodePopoverState } = this.props;
	        return (React.createElement("div", Object.assign({}, pick_1(this.props, ['style', 'className']), { style: this.getPopoverStyle() }), nodePopoverState.text));
	    }
	}
	var NodePopover$1 = withEditorPrivateContext(NodePopover);

	const FIT_VIEW_PADDING = 200;
	class EditorGraph extends React.Component {
	    constructor(props) {
	        super(props);
	        this.getGraphState = () => {
	            const { graph } = this;
	            let graphState = GraphState.CanvasSelected;
	            if (!graph) {
	                return graphState;
	            }
	            const selectedNodes = getSelectedNodes(graph);
	            const selectedEdges = getSelectedEdges(graph);
	            if (selectedNodes.length === 1 && !selectedEdges.length) {
	                graphState = GraphState.NodeSelected;
	            }
	            if (selectedEdges.length === 1 && !selectedNodes.length) {
	                graphState = GraphState.EdgeSelected;
	            }
	            if (selectedNodes.length && selectedEdges.length) {
	                graphState = GraphState.MultiSelected;
	            }
	            return graphState;
	        };
	        this.graph = null;
	    }
	    componentDidMount() {
	        this.initGraph();
	        this.bindEvent();
	    }
	    componentDidUpdate(prevProps) {
	        const { data } = this.props;
	        if (data !== prevProps.data) {
	            this.changeData(data);
	        }
	    }
	    initGraph() {
	        const { containerId, parseData, initGraph, setGraph } = this.props;
	        const { clientWidth = 0, clientHeight = 0 } = document.getElementById(containerId) || {};
	        // 解析数据
	        const data = { ...this.props.data };
	        parseData(data);
	        // 初始画布
	        this.graph = initGraph(clientWidth, clientHeight);
	        this.graph.read(data);
	        this.graph.fitView(FIT_VIEW_PADDING);
	        this.graph.setMode('default');
	        setGraph(this.graph);
	        // 发送埋点
	        if (Global.getTrackable()) {
	            const graphType = isMind(this.graph) ? GraphType.Mind : GraphType.Flow;
	            track(graphType);
	        }
	    }
	    bindEvent() {
	        const { graph, props } = this;
	        if (!graph) {
	            return;
	        }
	        const events = {
	            ...GraphCommonEvent,
	            ...GraphNodeEvent,
	            ...GraphEdgeEvent,
	            ...GraphCanvasEvent,
	            ...GraphCustomEvent,
	        };
	        Object.keys(events).forEach(event => {
	            addListener(graph, events[event], props[event]);
	        });
	        // Add listener for the selected status of the graph
	        const { setGraphState } = this.props;
	        addListener(graph, EditorEvent.onAfterExecuteCommand, () => {
	            setGraphState(this.getGraphState());
	        });
	        addListener(graph, GraphNodeEvent.onNodeClick, () => {
	            setGraphState(this.getGraphState());
	        });
	        addListener(graph, GraphEdgeEvent.onEdgeClick, () => {
	            setGraphState(this.getGraphState());
	        });
	        addListener(graph, GraphCanvasEvent.onCanvasClick, () => {
	            setGraphState(GraphState.CanvasSelected);
	        });
	    }
	    changeData(data) {
	        const { graph } = this;
	        const { parseData } = this.props;
	        if (!graph) {
	            return;
	        }
	        parseData(data);
	        graph.changeData(data);
	        graph.fitView(FIT_VIEW_PADDING);
	    }
	    render() {
	        const { containerId, children } = this.props;
	        return (React.createElement("div", Object.assign({ id: containerId }, pick_1(this.props, ['className', 'style'])),
	            children,
	            React.createElement(EditableLabel$1, null),
	            React.createElement(NodePopover$1, null)));
	    }
	}
	var Graph = withEditorPrivateContext(EditorGraph);

	const activeEdgeBehavior = {
	    graphType: GraphType.Flow,
	    getEvents() {
	        return {
	            'edge:mouseenter': 'setAllItemStates',
	            'edge:mouseleave': 'clearAllItemStates',
	        };
	    },
	    shouldBegin(e) {
	        // 拖拽过程中没有目标节点，只有 x, y 坐标，不点亮
	        const edge = e.item;
	        if (edge.getTarget().x)
	            return false;
	        return true;
	    },
	    setAllItemStates(e) {
	        if (!this.shouldBegin(e))
	            return;
	        // 1.激活当前选中的边
	        const { graph } = this;
	        const edge = e.item;
	        graph.setItemState(edge, 'active', true);
	        // 2. 激活边关联的 sourceNode 与 targetNode
	        graph.setItemState(edge.getTarget(), 'active', true);
	        graph.setItemState(edge.getSource(), 'active', true);
	    },
	    clearAllItemStates(e) {
	        if (!this.shouldBegin(e))
	            return;
	        // 状态还原
	        const { graph } = this;
	        const edge = e.item;
	        graph.setItemState(edge, 'active', false);
	        graph.setItemState(edge.getTarget(), 'active', false);
	        graph.setItemState(edge.getSource(), 'active', false);
	    },
	};
	behaviorManager.register('active-edge', activeEdgeBehavior);

	var globalStyle = {
	    alignLine: {
	        // lineDash: [5],
	        stroke: '#ff9800',
	        lineWidth: 1,
	    },
	    delegateStyle: {
	        fill: '#F3F9FF',
	        fillOpacity: 0.5,
	        stroke: '#1890FF',
	        strokeOpacity: 0.9,
	        lineDash: [5, 5],
	    },
	    // 元素层级
	    zIndex: {
	        anchorPoint: 3,
	        anchorHotsopt: 2,
	        selectedBox: 1,
	        controlPoint: 4,
	    },
	    // 箭头半径
	    arrowRadius: 6,
	    // ********************     边样式      ********************
	    // 边样式
	    edgeStyle: {
	        stroke: '#A3B1BF',
	        strokeOpacity: 0.92,
	        lineWidth: 1,
	        lineAppendWidth: 8,
	        lineDash: [0, 0],
	    },
	    // 线条拖拽样式
	    edgeDragStyle: {
	        stroke: '#ff9800',
	        strokeOpacity: 0.92,
	        lineWidth: 1,
	        lineAppendWidth: 8,
	        lineDash: [5, 5],
	    },
	    // 鼠标悬浮边
	    edgeActivedStyle: {
	        stroke: '#1890FF',
	        strokeOpacity: 0.92,
	    },
	    // 选中边的样式
	    edgeSelectedStyle: {
	        lineWidth: 2,
	        strokeOpacity: 0.92,
	        stroke: '#A3B1BF',
	    },
	    // 边文本样式
	    edgeLabelStyle: {
	        fill: '#666',
	        textAlign: 'center',
	        textBaseline: 'middle',
	    },
	    // 边文本矩形背景边距
	    edgeLabelRectPadding: 4,
	    // 边文本矩形背景样式
	    edgeLabelRectStyle: {
	        fill: '#eee',
	    },
	    // ********************     锚点      ********************
	    // 锚点样式
	    anchorPointStyle: {
	        radius: 3.5,
	        fill: '#fff',
	        stroke: '#1890FF',
	        lineAppendWidth: 12,
	    },
	    banFlagStyle: {
	        radius: 4,
	        fill: '#ff7676',
	        fillOpacity: 1,
	        stroke: '#ff7676',
	    },
	    // 锚点热区样式
	    anchorHotsoptStyle: {
	        radius: 12,
	        fill: '#1890FF',
	        fillOpacity: 0.25,
	    },
	    // 锚点热区激活样式
	    anchorHotsoptActivedStyle: {
	        radius: 14,
	    },
	    // 锚点鼠标悬浮样式
	    anchorPointHoverStyle: {
	        radius: 4,
	        fill: '#1890FF',
	        fillOpacity: 1,
	        stroke: '#1890FF',
	    },
	    // ********************     节点      ********************
	    nodeLogoStyle: {
	        img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI0Ii8+PGZpbHRlciB4PSItMzUlIiB5PSItMjUlIiB3aWR0aD0iMTcwJSIgaGVpZ2h0PSIxNzAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVPZmZzZXQgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNzQ1MDk4MDM5IDAgMCAwIDAgMC43NjA3ODQzMTQgMCAwIDAgMCAwLjc2MDc4NDMxNCAwIDAgMCAwLjUgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiMxM0MyQzIiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxwYXRoIGQ9Ik0xOC40NjYgMTQuMjEyYS4zNzYuMzc2IDAgMCAwIC4wMDgtLjA3OXYtMi4yNTFhLjk2Ljk2IDAgMCAwLS45NTMtLjk2M2gtMy4yMTNWOS43ODZhMS45MSAxLjkxIDAgMCAwIDEuNTI2LTEuODc1QTEuOTA0IDEuOTA0IDAgMCAwIDEzLjk0IDZhMS45MDQgMS45MDQgMCAwIDAtMS44OTIgMS45MTEgMS45MSAxLjkxIDAgMCAwIDEuNTI2IDEuODc1djEuMTMzaC0zLjIxM2EuOTYuOTYgMCAwIDAtLjk1NC45NjN2Mi4yNEExLjkxMSAxLjkxMSAwIDAgMCA4IDE1Ljk3YzAgMS4wNTQuODQ5IDEuOTEyIDEuODkyIDEuOTEyYTEuOTA0IDEuOTA0IDAgMCAwIDEuODkzLTEuOTEyYzAtLjk2OC0uNzE3LTEuNzctMS42NDMtMS44OTR2LTIuMTk0YzAtLjEyMy4wOTktLjIyMy4yMi0uMjIzaDcuMTU5Yy4xMjEgMCAuMjIuMS4yMi4yMjN2Mi4yNTFjMCAuMDI3LjAwMy4wNTQuMDA4LjA4YTEuOTEgMS45MSAwIDAgMC0xLjUzNCAxLjg3NmMwIDEuMDU0Ljg1IDEuOTExIDEuODkzIDEuOTExQTEuOTA0IDEuOTA0IDAgMCAwIDIwIDE2LjA4OWExLjkxIDEuOTEgMCAwIDAtMS41MzQtMS44Nzd6bS01LjY4NC02LjNjMC0uNjQ2LjUyLTEuMTcxIDEuMTYtMS4xNzEuNjM4IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU5IDEuMTdhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNTktMS4xN3ptLTEuNzMgOC4wNThjMCAuNjQ2LS41MiAxLjE3LTEuMTYgMS4xN2ExLjE2NiAxLjE2NiAwIDAgMS0xLjE1OC0xLjE3YzAtLjY0NS41Mi0xLjE3IDEuMTU4LTEuMTcuNjQgMCAxLjE2LjUyNSAxLjE2IDEuMTd6bTcuMDU2IDEuMjlhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNi0xLjE3MWMwLS42NDUuNTItMS4xNyAxLjE2LTEuMTcuNjM5IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU4IDEuMTd6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==',
	        width: 20,
	        height: 20,
	    },
	    // 节点悬浮样式
	    nodeActivedStyle: {
	        fill: '#F3F9FF',
	        stroke: '#1890FF',
	        fillOpacity: 0.92,
	    },
	    // 节点选中样式
	    nodeSelectedStyle: {
	        shadowOffsetX: 0,
	        shadowOffsetY: 4,
	        shadowBlur: 10,
	        shadowColor: '#ccc',
	        lineWidth: 1.5,
	    },
	    // 开始节点样式
	    startNodeStyle: {
	        x: 0,
	        y: 0,
	        r: 17,
	        stroke: '#1296DB',
	        fill: '#fff',
	        shadowOffsetX: 0,
	        shadowOffsetY: 0,
	        shadowBlur: 0,
	        shadowColor: '#fff',
	        lineWidth: 1,
	    },
	    // 结束节点样式
	    endNodeStyle1: { x: 0, y: 0, r: 17, stroke: '#1296DB' },
	    endNodeStyle2: { x: 0, y: 0, r: 12, stroke: '#1296DB', fill: '#1296DB', lineWidth: 1 },
	    // 节点样式
	    nodeStyle: {
	        stroke: '#d5d5d5',
	        fill: '#FFFFFF',
	        lineWidth: 1,
	        radius: 4,
	        fillOpacity: 0.92,
	        shadowOffsetX: 0,
	        shadowOffsetY: 0,
	        shadowBlur: 0,
	        shadowColor: '#fff',
	        nodeColor: '#13c2c2',
	    },
	    // 节点文本标签样式
	    nodeLabelStyle: {
	        fill: '#333',
	        fontSize: 14,
	        fontWeight: 'normal',
	        fontStyle: 'normal',
	        fontVariant: 'normal',
	        textAlign: 'center',
	        textBaseline: 'middle',
	    },
	};

	const { alignLine } = globalStyle;
	function normalize(out, a) {
	    const x = a[0];
	    const y = a[1];
	    let len = x * x + y * y;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	}
	function dot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	}
	function pointLineDistance(line, point) {
	    const [x, y] = point;
	    const [x1, y1, x2, y2] = line;
	    const d = [x2 - x1, y2 - y1];
	    if (d.every(p => p === 0))
	        return NaN;
	    const u = [-d[1], d[0]];
	    normalize(u, u);
	    const a = [x - x1, y - y1];
	    return dot(a, u);
	}
	const alignBehavior = {
	    graphType: GraphType.Flow,
	    getDefaultCfg() {
	        return {
	            enable: true,
	            tolerance: 5,
	        };
	    },
	    getEvents() {
	        return {
	            'node:drag': 'onDrag',
	        };
	    },
	    shouldBegin() {
	        return this.enable;
	    },
	    onDrag(e) {
	        if (!this.shouldBegin())
	            return;
	        const { graph } = this;
	        const delegateShape = e.item.get('delegateShape');
	        if (!delegateShape)
	            return;
	        const bbox = delegateShape.getBBox();
	        const originPoint = { x: bbox.minX, y: bbox.minY };
	        ['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(lname => {
	            delegateShape['_' + lname] && delegateShape['_' + lname].remove();
	            delegateShape['_' + lname] = void 0;
	        });
	        const tc = {
	            x: originPoint.x + bbox.width / 2,
	            y: originPoint.y,
	        };
	        const cc = {
	            x: originPoint.x + bbox.width / 2,
	            y: originPoint.y + bbox.height / 2,
	        };
	        const bc = {
	            x: originPoint.x + bbox.width / 2,
	            y: originPoint.y + bbox.height,
	        };
	        const lc = {
	            x: originPoint.x,
	            y: originPoint.y + bbox.height / 2,
	        };
	        const rc = {
	            x: originPoint.x + bbox.width,
	            y: originPoint.y + bbox.height / 2,
	        };
	        const nodes = graph.getNodes();
	        const tolerance = this.tolerance;
	        const hLines = { HTL: [], HCL: [], HBL: [] };
	        const vLines = { VLL: [], VCL: [], VRL: [] };
	        nodes.forEach(node => {
	            const { horizontalLines, verticalLines } = this.getBoxLine(node);
	            // 1. 计算水平或垂直方向相关的三个对齐点到节点水平线之间的距离
	            // 2. 一旦距离小于误差便自动吸附，一旦吸附就终止其它对齐点的计算
	            // 3. 吸附后对齐点到水平线的距离应该是无误差的，此时显示对齐线
	            const calc = (points, lines, arr, axis) => {
	                start: for (const p of points)
	                    for (const name of Object.keys(lines)) {
	                        const line = lines[name];
	                        const dis = pointLineDistance(line, [p.x, p.y]);
	                        if (Math.abs(dis) < tolerance) {
	                            delegateShape.attachFlag = axis;
	                            delegateShape.attachTolerance = tolerance;
	                            if (axis === 'Y')
	                                delegateShape.attr({ y: originPoint.y - dis });
	                            if (axis === 'X')
	                                delegateShape.attr({ x: originPoint.x + dis });
	                            arr[name].push({ line, dis });
	                            break start;
	                        }
	                    }
	            };
	            calc([tc, cc, bc], horizontalLines, hLines, 'Y');
	            calc([lc, cc, rc], verticalLines, vLines, 'X');
	        });
	        // minX 排序
	        ['HTL', 'HCL', 'HBL'].forEach(h => hLines[h].sort((a, b) => a.dis - b.dis));
	        ['VLL', 'VCL', 'VRL'].forEach(v => vLines[v].sort((a, b) => a.dis - b.dis));
	        const drawLine = (lines, d) => {
	            const s = delegateShape;
	            const names = d === 'H' ? ['HTL', 'HCL', 'HBL'] : ['VLL', 'VCL', 'VRL'];
	            names.forEach(name => {
	                if (lines[name].length > 0) {
	                    const line = lines[name][0]['line'];
	                    const xs = [bbox.minX, bbox.maxX, line[0], line[2]];
	                    const ys = [bbox.minY, bbox.maxY, line[1], line[3]];
	                    const y = line[1];
	                    const x = line[0];
	                    // 将画布转标转换为视口坐标并乘缩放比例
	                    const pointTS = (x, y) => graph.getCanvasByPoint(x, y);
	                    const hLine = pointTS(Math.min(...xs), y);
	                    const vLine = pointTS(x, Math.min(...ys));
	                    const hLineEnd = pointTS(Math.max(...xs), 0);
	                    const vLineEnd = pointTS(0, Math.max(...ys));
	                    const path = d === 'H' ? [['M', hLine.x, hLine.y], ['H', hLineEnd.x]] : [['M', vLine.x, vLine.y], ['V', vLineEnd.y]];
	                    s['_' + name] = graph.get('canvas').addShape('path', {
	                        attrs: { path, ...alignLine },
	                    });
	                }
	            });
	        };
	        drawLine(hLines, 'H');
	        drawLine(vLines, 'V');
	    },
	    getBoxLine(item) {
	        const bbox = item.getBBox();
	        const horizontalLines = {
	            HTL: [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
	            HCL: [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
	            HBL: [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
	        };
	        const verticalLines = {
	            VLL: [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
	            VCL: [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
	            VRL: [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
	        };
	        return { horizontalLines, verticalLines };
	    },
	};
	behaviorManager.register('align', alignBehavior);

	const dragAddEdge = {
	    graphType: GraphType.Flow,
	    getDefaultCfg() {
	        return {
	            edgeType: 'flowSmooth',
	        };
	    },
	    getEvents() {
	        return {
	            mousedown: 'onMousedown',
	            mousemove: 'onMousemove',
	            mouseup: 'onMouseup',
	        };
	    },
	    isAnchor(e) {
	        const { target } = e;
	        const targetName = target.get('className');
	        if (targetName == 'anchor')
	            return true;
	        else
	            return false;
	    },
	    notThis(e) {
	        const node = e.item;
	        const model = node.getModel();
	        if (this.edge.getSource().get('id') === model.id)
	            return false;
	        return true;
	    },
	    shouldBegin(e) {
	        const { target } = e;
	        const targetName = target.get('className');
	        // 如果点击的不是锚点就结束
	        if (targetName === 'anchor')
	            return true;
	        else
	            return false;
	    },
	    onMousedown(e) {
	        const { edgeType } = this;
	        if (!this.shouldBegin.call(this, e))
	            return;
	        const node = e.item;
	        const graph = this.graph;
	        this.sourceNode = node;
	        graph.getNodes().forEach(node => {
	            if (node.get('id') !== node.get('id'))
	                graph.setItemState(node, 'addingEdge', true);
	            else
	                graph.setItemState(node, 'addingSource', true);
	        });
	        const point = { x: e.x, y: e.y };
	        const model = node.getModel();
	        // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
	        // 点击节点，触发增加边
	        if (!this.addingEdge && !this.edge) {
	            const item = {
	                id: guid(),
	                shape: edgeType,
	                source: model.id,
	                target: point,
	                sourceAnchor: e.target.get('index'),
	            };
	            this.edge = graph.addItem(ItemType.Edge, item);
	            this.addingEdge = true;
	        }
	    },
	    onMousemove(e) {
	        if (this.addingEdge && this.edge) {
	            const point = { x: e.x, y: e.y };
	            !this.edge.hasState('drag') && this.graph.setItemState(this.edge, 'drag', true);
	            if (this.isAnchor(e) && this.notThis(e)) {
	                const node = e.item;
	                const model = node.getModel();
	                this.graph.updateItem(this.edge, {
	                    targetAnchor: e.target.get('index'),
	                    target: model.id,
	                });
	                !this.edge.hasState('onAnchor') && this.graph.setItemState(this.edge, 'onAnchor', true);
	            }
	            else {
	                this.edge.hasState('onAnchor') && this.graph.setItemState(this.edge, 'onAnchor', false);
	                this.graph.updateItem(this.edge, {
	                    target: point,
	                });
	            }
	        }
	    },
	    onMouseup(e) {
	        const { graph, sourceNode } = this;
	        const node = e.item;
	        // 隐藏所有节点的锚点
	        const hideAnchors = () => {
	            graph.getNodes().forEach(node => {
	                // 清楚所有节点状态
	                graph.clearItemStates(node);
	            });
	            // 奇怪的问题，结束拖拽后源节点的锚点只能这样清除
	            //    graph.refreshItem(sourceNode) 无效；
	            graph.setItemState(sourceNode, 'addingEdge', true);
	            graph.setItemState(sourceNode, 'addingEdge', false);
	        };
	        const removEdge = () => {
	            graph.remove(this.edge);
	            this.edge = null;
	            this.addingEdge = false;
	            hideAnchors();
	        };
	        if (!this.shouldBegin.call(this, e)) {
	            // 拖拽连线时，未在锚点上放开则取消连线过程
	            if (this.edge && this.addingEdge)
	                removEdge();
	            return;
	        }
	        const model = node.getModel();
	        if (this.addingEdge && this.edge) {
	            // 禁止自己连自己
	            if (!this.notThis(e)) {
	                removEdge();
	                return;
	            }
	            this.graph.setItemState(this.edge, 'drag', false);
	            graph.updateItem(this.edge, {
	                targetAnchor: e.target.get('index'),
	                target: model.id,
	            });
	            this.edge = null;
	            this.addingEdge = false;
	            hideAnchors();
	        }
	    },
	};
	behaviorManager.register('drag-add-edge', dragAddEdge);

	const hoverAnchor = {
	    graphType: GraphType.Flow,
	    getEvents() {
	        return {
	            mouseenter: 'onEnterAnchor',
	            mouseleave: 'onLeaveAnchor',
	        };
	    },
	    shouldBegin(e) {
	        const { target } = e;
	        const targetName = target.get('className');
	        // 如果点击的不是锚点就结束
	        if (targetName === 'anchor')
	            return true;
	        return false;
	    },
	    onEnterAnchor(e) {
	        if (!this.shouldBegin(e))
	            return;
	        const graph = this.graph;
	        const node = e.item;
	        graph.setItemState(node, 'activeAnchor', true);
	    },
	    onLeaveAnchor(e) {
	        if (!this.shouldBegin(e))
	            return;
	        const graph = this.graph;
	        const node = e.item;
	        graph.setItemState(node, 'activeAnchor', false);
	    },
	};
	behaviorManager.register('hover-anchor', hoverAnchor);

	const { delegateStyle } = globalStyle;
	const { body } = document;
	const dragNode = {
	    graphType: GraphType.Flow,
	    getEvents() {
	        return {
	            'node:dragstart': 'onDragStart',
	            'node:drag': 'onDrag',
	            'node:dragend': 'onDragEnd',
	            'canvas:mouseleave': 'onOutOfRange',
	        };
	    },
	    getDefaultCfg() {
	        return {
	            updateEdge: true,
	            showDelegate: true,
	            delegateStyle: {},
	        };
	    },
	    shouldBegin(e) {
	        // 锚点上不触发拖拽；
	        if (e.target.get('className') == 'anchor')
	            return false;
	        else
	            return true;
	    },
	    onDragStart(e) {
	        if (!this.shouldBegin(e))
	            return;
	        const { graph } = this;
	        this.origin = {
	            x: e.x,
	            y: e.y,
	        };
	        this.target = e.item;
	        // 单节点拖拽当做多节点拖拽的特例
	        this.selectedNodes = graph.findAllByState(ItemType.Node, ItemState.Selected) || [];
	        if (this.selectedNodes.length == 0)
	            this.selectedNodes.push(e.item);
	    },
	    onDrag(e) {
	        if (!this.shouldUpdate.call(this, e))
	            return;
	        if (!this.origin)
	            return;
	        this._update(e, false);
	    },
	    onDragEnd(e) {
	        if (!this.shouldEnd.call(this, e))
	            return;
	        if (!this.origin)
	            return;
	        const { selectedNodes } = this;
	        // 清理委托图形与对齐线
	        selectedNodes
	            .map((item) => item.get('delegateShape'))
	            .forEach((ds) => {
	            if (ds) {
	                ['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(lname => {
	                    ds['_' + lname] && ds['_' + lname].remove();
	                    ds['_' + lname] = void 0;
	                });
	                ds.remove();
	            }
	        });
	        selectedNodes.forEach((node) => node.set('delegateShape', null));
	        this._update(e, true);
	        if (this.multipleDelegate) {
	            this.multipleDelegate.remove(false);
	            this.multipleDelegate = void 0;
	        }
	        this.origin = null;
	        // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
	        const fn = this.fn;
	        if (fn) {
	            body.removeEventListener('mouseup', fn, false);
	            this.fn = null;
	        }
	    },
	    // 若在拖拽时，鼠标移出画布区域，此时放开鼠标无法终止 drag 行为。在画布外监听 mouseup 事件，放开则终止
	    onOutOfRange(e) {
	        const self = this;
	        if (this.origin) {
	            const canvasElement = self.graph.get('canvas').get('el');
	            const fn = (ev) => {
	                if (ev.target !== canvasElement) {
	                    self.onDragEnd(e);
	                }
	            };
	            this.fn = fn;
	            body.addEventListener('mouseup', fn, false);
	        }
	    },
	    _update(e, force) {
	        const { selectedNodes, showDelegate, origin } = this;
	        const offsetX = e.x - origin.x;
	        const offsetY = e.y - origin.y;
	        const moveXY = (item) => {
	            const model = item.getModel();
	            const bbox = item.getBBox();
	            const x = model.x - bbox.width / 2 + offsetX;
	            const y = model.y - bbox.height / 2 + offsetY;
	            return { x, y };
	        };
	        if (showDelegate && !force) {
	            // 当选中的节点大于 1 时，绘制一个大的矩形框住所有节点
	            if (selectedNodes.length > 1 && !this.multipleDelegate)
	                this.drawMultipleDelegate();
	            // this._updateDelegate(item, x, y);
	            // 更新所有委托图形的位置;
	            selectedNodes.forEach((node) => {
	                const { x, y } = moveXY(node);
	                this._updateDelegate(node, x, y);
	            });
	            if (this.multipleDelegate) {
	                const { x, y } = this.mdOrigin;
	                this.multipleDelegate.attr({ x: x + offsetX, y: y + offsetY });
	            }
	            this.graph.paint();
	            return;
	        }
	        if (this.updateEdge) {
	            selectedNodes.forEach((node) => {
	                const model = node.getModel();
	                const x = model.x + offsetX;
	                const y = model.y + offsetY;
	                this.graph.updateItem(node, { x, y });
	            });
	        }
	        else {
	            selectedNodes.forEach((node) => {
	                const model = node.getModel();
	                const x = model.x + offsetX;
	                const y = model.y + offsetY;
	                node.updatePosition({ x, y });
	            });
	            this.graph.paint();
	        }
	    },
	    _updateDelegate(item, x, y) {
	        let shape = item.get('delegateShape');
	        const bbox = item.get('keyShape').getBBox();
	        if (!shape) {
	            // 在组外画框框
	            const parent = this.graph.get('group');
	            const attrs = delegateStyle;
	            // model上的x, y是相对于图形中心的，delegateShape是g实例，x,y是绝对坐标
	            shape = parent.addShape('rect', {
	                attrs: {
	                    width: bbox.width,
	                    height: bbox.height,
	                    x,
	                    y,
	                    ...attrs,
	                },
	            });
	            shape.set('capture', false);
	            item.set('delegateShape', shape);
	        }
	        // 拖拽过程中处于吸附状态
	        const isAttach = () => (shape.attachFlag === 'Y' && Math.abs(y - shape.attr('y')) <= shape.attachTolerance) ||
	            (shape.attachFlag === 'X' && Math.abs(x - shape.attr('x')) <= shape.attachTolerance);
	        const setAttr = ({ x, y }) => {
	            if (x && y)
	                shape.attr({ x, y });
	            if (x)
	                shape.attr({ x });
	            if (y)
	                shape.attr({ y });
	        };
	        if (isAttach()) {
	            if (shape.attachFlag === 'Y')
	                setAttr({ x });
	            if (shape.attachFlag === 'X')
	                setAttr({ y });
	        }
	        else {
	            setAttr({ x, y });
	            // 超出范围取消吸附状态
	            shape.attachFlag = '';
	        }
	    },
	    // 绘制所有选中节点的最小外接矩形
	    drawMultipleDelegate() {
	        if (this.multipleDelegate)
	            return;
	        const nodes = this.selectedNodes;
	        const xs = [];
	        const ys = [];
	        nodes.forEach((n) => {
	            const { minX, minY, maxX, maxY } = n.getBBox();
	            xs.push(minX, maxX);
	            ys.push(minY, maxY);
	        });
	        // 矩形左上角
	        const minX = Math.min(...xs);
	        const minY = Math.min(...ys);
	        const maxX = Math.max(...xs);
	        const maxY = Math.max(...ys);
	        const parent = this.graph.get('group');
	        const attrs = delegateStyle;
	        const padding = 20;
	        this.mdOrigin = { x: minX - padding, y: minY - padding };
	        this.multipleDelegate = parent.addShape('rect', {
	            attrs: {
	                width: Math.floor(maxX - minX) + padding * 2,
	                height: Math.floor(maxY - minY) + padding * 2,
	                x: minX - padding,
	                y: minY - padding,
	                ...attrs,
	                stroke: '#ff9800',
	            },
	        });
	    },
	};
	behaviorManager.register('drag-node', dragNode);

	const min = Math.min;
	const max = Math.max;
	const abs = Math.abs;
	const hypot = Math.hypot;
	const brushSelect = {
	    graphType: GraphType.Flow,
	    getDefaultCfg() {
	        return {
	            brushStyle: {
	                fill: '#EEF6FF',
	                fillOpacity: 0.4,
	                stroke: '#DDEEFE',
	                lineWidth: 1,
	            },
	            onSelect() { },
	            onDeselect() { },
	            selectedNodes: [],
	            selectedEdges: [],
	            includeEdges: true,
	        };
	    },
	    getEvents() {
	        return {
	            keyup: 'onKeyUp',
	            keydown: 'onKeyDown',
	            mousedown: 'onMouseDown',
	            mousemove: 'onMouseMove',
	            mouseup: 'onMouseUp',
	            'canvas:click': 'clearStates',
	        };
	    },
	    onKeyUp(e) {
	        const SPACE = 32;
	        if (e.keyCode === SPACE)
	            this.keyFlag = false;
	    },
	    onKeyDown(e) {
	        const SPACE = 32;
	        if (e.keyCode === SPACE)
	            this.keyFlag = true;
	    },
	    onMouseDown(e) {
	        if (this.keyFlag)
	            return;
	        // 按在node上面拖动时候不应该是框选
	        const { item } = e;
	        if (item) {
	            return;
	        }
	        if (this.selectedNodes && this.selectedNodes.length !== 0) {
	            this.clearStates();
	        }
	        let brush = this.brush;
	        if (!brush) {
	            brush = this._createBrush();
	        }
	        this.originPoint = { x: e.canvasX, y: e.canvasY };
	        brush.attr({ width: 0, height: 0 });
	        brush.show();
	        this.dragging = true;
	    },
	    onMouseMove(e) {
	        const originPoint = this.originPoint;
	        if (!this.dragging || hypot(originPoint.x - e.canvasX, originPoint.y - e.canvasY) < 10) {
	            return;
	        }
	        this._updateBrush(e);
	        this.graph.paint();
	    },
	    onMouseUp(e) {
	        if (!this.brush) {
	            return;
	        }
	        const graph = this.graph;
	        const autoPaint = graph.get('autoPaint');
	        graph.setAutoPaint(false);
	        this.brush.hide();
	        this._getSelectedNodes(e);
	        this.dragging = false;
	        this.graph.paint();
	        graph.setAutoPaint(autoPaint);
	        setTimeout(() => graph.setMode('default'), 1);
	    },
	    clearStates() {
	        const graph = this.graph;
	        const autoPaint = graph.get('autoPaint');
	        graph.setAutoPaint(false);
	        const nodes = graph.findAllByState(ItemType.Node, ItemState.Selected);
	        const edges = graph.findAllByState(ItemType.Edge, ItemState.Selected);
	        nodes.forEach((node) => graph.setItemState(node, ItemState.Selected, false));
	        edges.forEach((edge) => graph.setItemState(edge, ItemState.Selected, false));
	        this.selectedNodes = [];
	        this.selectedEdges = [];
	        this.onDeselect && this.onDeselect(this.selectedNodes, this.selectedEdges);
	        graph.paint();
	        graph.setAutoPaint(autoPaint);
	    },
	    _getSelectedNodes(e) {
	        const graph = this.graph;
	        const state = this.selectedState;
	        const originPoint = this.originPoint;
	        const p1 = { x: e.x, y: e.y };
	        const p2 = graph.getPointByCanvas(originPoint.x, originPoint.y);
	        const left = min(p1.x, p2.x);
	        const right = max(p1.x, p2.x);
	        const top = min(p1.y, p2.y);
	        const bottom = max(p1.y, p2.y);
	        const selectedNodes = [];
	        const selectedIds = [];
	        graph.getNodes().forEach((node) => {
	            const bbox = node.getBBox();
	            if (bbox.centerX >= left && bbox.centerX <= right && bbox.centerY >= top && bbox.centerY <= bottom) {
	                selectedNodes.push(node);
	                const model = node.getModel();
	                selectedIds.push(model.id);
	                graph.setItemState(node, state, true);
	            }
	        });
	        const selectedEdges = [];
	        if (this.includeEdges) {
	            // 选中边，边的source和target都在选中的节点中时才选中
	            selectedNodes.forEach(node => {
	                const edges = node.getEdges();
	                edges.forEach(edge => {
	                    const model = edge.getModel();
	                    const { source, target } = model;
	                    if (selectedIds.includes(source) && selectedIds.includes(target)) {
	                        selectedEdges.push(edge);
	                        graph.setItemState(edge, ItemState.Selected, true);
	                    }
	                });
	            });
	        }
	        this.selectedNodes = selectedNodes;
	        this.selectedEdges = selectedEdges;
	        this.onSelect && this.onSelect(selectedNodes, selectedEdges);
	    },
	    _createBrush() {
	        const self = this;
	        const brush = self.graph.get('canvas').addShape('rect', {
	            attrs: self.brushStyle,
	            capture: false,
	        });
	        this.brush = brush;
	        return brush;
	    },
	    _updateBrush(e) {
	        const originPoint = this.originPoint;
	        this.brush.attr({
	            width: abs(e.canvasX - originPoint.x),
	            height: abs(e.canvasY - originPoint.y),
	            x: min(e.canvasX, originPoint.x),
	            y: min(e.canvasY, originPoint.y),
	        });
	    },
	};
	behaviorManager.register('brush-select', brushSelect);

	class Flow extends React.Component {
	    constructor() {
	        super(...arguments);
	        this.containerId = `${FLOW_CONTAINER_ID}_${guid()}`;
	        this.canDragCanvas = () => {
	            const { labelState } = this.props;
	            return labelState === LabelState.Hide;
	        };
	        this.canZoomCanvas = () => {
	            const { labelState } = this.props;
	            return labelState === LabelState.Hide;
	        };
	        this.parseData = data => {
	            const { nodes, edges } = data;
	            [...nodes, ...edges].forEach(item => {
	                const { id } = item;
	                if (id) {
	                    return;
	                }
	                item.id = guid();
	            });
	        };
	        this.initGraph = (width, height) => {
	            const { containerId } = this;
	            const { graphConfig, customModes } = this.props;
	            const customBehaviors = {};
	            Object.keys(behaviorManager.behaviors).forEach(name => {
	                const behavior = behaviorManager.behaviors[name];
	                if (!behavior.graphType || behavior.graphType === GraphType.Flow) {
	                    customBehaviors[name] = name;
	                }
	            });
	            const modes = {
	                default: {
	                    ...customBehaviors,
	                    'flow-drag-canvas': {
	                        type: 'flow-drag-canvas',
	                        shouldBegin: this.canDragCanvas,
	                        shouldUpdate: this.canDragCanvas,
	                        shouldEnd: this.canDragCanvas,
	                    },
	                    'zoom-canvas': {
	                        type: 'zoom-canvas',
	                        shouldUpdate: this.canZoomCanvas,
	                    },
	                    'recall-edge': 'recall-edge',
	                },
	            };
	            Object.keys(modes).forEach(mode => {
	                const behaviors = modes[mode];
	                modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
	            });
	            return new G6.Graph({
	                container: containerId,
	                width,
	                height,
	                modes,
	                ...graphConfig,
	            });
	        };
	    }
	    render() {
	        const { containerId, parseData, initGraph } = this;
	        const { data } = this.props;
	        return (React.createElement(Graph, Object.assign({ containerId: containerId, data: data, parseData: parseData, initGraph: initGraph }, pick_1(this.props, ['className', 'style']))));
	    }
	}
	Flow.defaultProps = {
	    graphConfig: {},
	};
	var Flow$1 = withEditorPrivateContext(Flow);

	const topicCommand = {
	    ...baseCommand,
	    params: {
	        id: '',
	        model: {
	            id: '',
	        },
	    },
	    canExecute(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        return selectedNodes.length && selectedNodes.length === 1 && selectedNodes[0].get('parent');
	    },
	    init(graph) {
	        if (this.params.id) {
	            return;
	        }
	        const selectedNode = this.getSelectedNodes(graph)[0];
	        this.params = {
	            id: selectedNode.get('id'),
	            model: {
	                id: guid(),
	                label: LABEL_DEFAULT_TEXT,
	            },
	        };
	    },
	    execute(graph) {
	        const { id, model } = this.params;
	        const parent = graph.findById(id).get('parent');
	        // 添加节点
	        graph.addChild(model, parent);
	        // 选中节点
	        this.setSelectedNode(graph, model.id);
	        // 编辑节点
	        this.editSelectedNode(graph);
	    },
	    undo(graph) {
	        const { id, model } = this.params;
	        this.setSelectedNode(graph, id);
	        graph.removeChild(model.id);
	    },
	    shortcuts: ['Enter'],
	};
	commandManager.register('topic', topicCommand);

	const subtopicCommand = {
	    ...topicCommand,
	    canExecute(graph) {
	        return this.getSelectedNodes(graph)[0] ? true : false;
	    },
	    execute(graph) {
	        const { id, model } = this.params;
	        // 添加节点
	        graph.addChild(model, id);
	        // 选中节点
	        this.setSelectedNode(graph, model.id);
	        // 编辑节点
	        this.editSelectedNode(graph);
	    },
	    shortcuts: ['Tab'],
	};
	commandManager.register('subtopic', subtopicCommand);

	const foldCommand = {
	    ...baseCommand,
	    params: {
	        id: '',
	    },
	    canExecute(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        if (!selectedNodes.length) {
	            return false;
	        }
	        const selectedNode = selectedNodes[0];
	        const selectedNodeModel = selectedNode.getModel();
	        if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
	            return false;
	        }
	        if (selectedNodeModel.collapsed) {
	            return false;
	        }
	        return true;
	    },
	    init(graph) {
	        const selectedNode = this.getSelectedNodes(graph)[0];
	        const selectedNodeModel = selectedNode.getModel();
	        this.params = {
	            id: selectedNodeModel.id,
	        };
	    },
	    execute(graph) {
	        const { id } = this.params;
	        const sourceData = graph.findDataById(id);
	        sourceData.collapsed = !sourceData.collapsed;
	        graph.refreshLayout(false);
	    },
	    undo(graph) {
	        this.execute(graph);
	    },
	    shortcuts: [['metaKey', '/'], ['ctrlKey', '/']],
	};
	commandManager.register('fold', foldCommand);

	const unfoldCommand = {
	    ...foldCommand,
	    canExecute(graph) {
	        const selectedNodes = this.getSelectedNodes(graph);
	        if (!selectedNodes.length) {
	            return false;
	        }
	        const selectedNode = selectedNodes[0];
	        const selectedNodeModel = selectedNode.getModel();
	        if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
	            return false;
	        }
	        if (!selectedNodeModel.collapsed) {
	            return false;
	        }
	        return true;
	    },
	    shortcuts: [['metaKey', '/'], ['ctrlKey', '/']],
	};
	commandManager.register('unfold', unfoldCommand);

	class Mind extends React.Component {
	    constructor() {
	        super(...arguments);
	        this.containerId = `${MIND_CONTAINER_ID}_${guid()}`;
	        this.canDragCanvas = () => {
	            const { labelState } = this.props;
	            return labelState === LabelState.Hide;
	        };
	        this.canZoomCanvas = () => {
	            const { labelState, contextMenuState, nodePopoverState } = this.props;
	            return labelState === LabelState.Hide && !contextMenuState.visible && !nodePopoverState.visible;
	        };
	        this.canCollapseExpand = ({ target }) => {
	            return target && target.get('className') === ShapeClassName.CollapseExpandButton;
	        };
	        this.parseData = data => {
	            recursiveTraversal(data, item => {
	                const { id } = item;
	                if (id) {
	                    return;
	                }
	                item.id = guid();
	            });
	        };
	        this.initGraph = (width, height) => {
	            const { containerId } = this;
	            const { graphConfig, customModes } = this.props;
	            const customBehaviors = {};
	            Object.keys(behaviorManager.behaviors).forEach(name => {
	                const behavior = behaviorManager.behaviors[name];
	                if (!behavior.graphType || behavior.graphType === GraphType.Mind) {
	                    customBehaviors[name] = name;
	                }
	            });
	            const modes = {
	                default: {
	                    ...customBehaviors,
	                    'click-item': {
	                        type: 'click-item',
	                        multiple: false,
	                    },
	                    'collapse-expand': {
	                        type: 'collapse-expand',
	                        shouldBegin: this.canCollapseExpand,
	                    },
	                    'drag-canvas': {
	                        type: 'drag-canvas',
	                        shouldBegin: this.canDragCanvas,
	                        shouldUpdate: this.canDragCanvas,
	                        shouldEnd: this.canDragCanvas,
	                    },
	                    'zoom-canvas': {
	                        type: 'zoom-canvas',
	                        shouldUpdate: this.canZoomCanvas,
	                    },
	                },
	            };
	            Object.keys(modes).forEach(mode => {
	                const behaviors = modes[mode];
	                modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
	            });
	            return new G6.TreeGraph({
	                container: containerId,
	                width,
	                height,
	                modes,
	                layout: {
	                    type: 'mindmap',
	                    direction: 'H',
	                    getHGap: this.getHGap,
	                    getVGap: this.getVGap,
	                },
	                animate: false,
	                defaultNode: {
	                    shape: 'bizNode',
	                },
	                defaultEdge: {
	                    shape: 'biz-cubic',
	                },
	                ...graphConfig,
	            });
	        };
	    }
	    getHGap(model) {
	        let totalTextWidth = 0;
	        if (typeof model.label !== 'string' || !UtilCanvasContext)
	            return 40;
	        for (const char of model.label) {
	            totalTextWidth += UtilCanvasContext.measureText(char).width;
	        }
	        // 达到节点最大宽度
	        if (totalTextWidth >= 120)
	            return 120;
	        // 节点最小宽度
	        if (totalTextWidth < 40)
	            return 40;
	        return totalTextWidth + 10;
	    }
	    getVGap(model) {
	        let totalTextWidth = 0;
	        if (typeof model.label !== 'string' || !UtilCanvasContext)
	            return 5;
	        for (const char of model.label) {
	            totalTextWidth += UtilCanvasContext.measureText(char).width;
	        }
	        // 没有换行
	        if (totalTextWidth <= 120)
	            return 5;
	        return (totalTextWidth / 120) * 5;
	    }
	    render() {
	        const { containerId, parseData, initGraph } = this;
	        const { data } = this.props;
	        return (React.createElement(Graph, Object.assign({ containerId: containerId, data: data, parseData: parseData, initGraph: initGraph }, pick_1(this.props, ['className', 'style']))));
	    }
	}
	Mind.defaultProps = {
	    graphConfig: {},
	};
	withEditorPrivateContext(Mind);

	class Command extends React.Component {
	    constructor() {
	        super(...arguments);
	        this.state = {
	            disabled: false,
	        };
	        this.handleClick = () => {
	            const { name, executeCommand } = this.props;
	            executeCommand(name);
	        };
	    }
	    render() {
	        const { name, graph, canExecuteCommand, children } = this.props;
	        if (!graph) {
	            return null;
	        }
	        return (React.createElement("div", { className: `command${canExecuteCommand(name) ? '' : ' command-disabled'}`, onClick: this.handleClick }, children));
	    }
	}
	withEditorPrivateContext(Command);

	class Item extends React.PureComponent {
	    constructor(props) {
	        super(props);
	        this.handleMouseDown = (ev) => {
	            const shadowShape = this.createShadowShape(ev);
	            document.body.appendChild(shadowShape);
	            this.setState({
	                shadowShape,
	            });
	        };
	        this.handleMouseUp = () => {
	            this.unloadDragShape();
	        };
	        this.handleDragover = (ev) => {
	            ev.preventDefault();
	        };
	        this.handleDragenter = (ev) => {
	            const { graph } = this.props;
	            if (!graph) {
	                return;
	            }
	            const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);
	            const canvas = graph.get('container').getElementsByTagName('canvas')[0];
	            // drag into canvas
	            if (ev.target && ev.target === canvas.id) {
	                this.loadDragShape(transferredPos);
	            }
	        };
	        this.handleDrag = (ev) => {
	            const { graph } = this.props;
	            if (!graph) {
	                return;
	            }
	            const { hasDragShape, dragShapeID } = this.state;
	            if (hasDragShape) {
	                const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);
	                graph.update(dragShapeID, {
	                    ...transferredPos,
	                });
	            }
	        };
	        this.handleDrop = (ev) => {
	            const { graph, executeCommand, type, model, shape, size } = this.props;
	            const { dragShapeID } = this.state;
	            if (!graph) {
	                return;
	            }
	            const canvas = graph.get('container').getElementsByTagName('canvas')[0];
	            const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);
	            // drag into canvas
	            if (ev.target && ev.target.id === canvas.id) {
	                executeCommand('add', {
	                    type,
	                    model: {
	                        ...model,
	                        shape,
	                        ...transferredPos,
	                        size: size.split('*'),
	                    },
	                });
	            }
	            this.unloadDragShape();
	            graph.remove(dragShapeID);
	        };
	        this.state = {
	            shadowShape: null,
	            hasDragShape: false,
	            dragShapeID: 'temp_drag_node',
	        };
	    }
	    createShadowShape(ev) {
	        const { src } = this.props;
	        const Img = document.createElement('img');
	        Img.src = src;
	        const shadowShape = document.createElement('div');
	        const styleObj = `
      width: ${Img.width}px;
      height: ${Img.height}px;
      position: fixed;
      opacity: 0;
      top: ${ev.clientY - Img.height / 2}px;
      left: ${ev.clientX - Img.width / 2}px;
      cursor: pointer;
      z-index:99999;
    `;
	        shadowShape.setAttribute('style', styleObj);
	        shadowShape.setAttribute('draggable', 'true');
	        shadowShape.addEventListener('drag', this.handleDrag, false);
	        document.addEventListener('dragover', this.handleDragover, false);
	        document.addEventListener('dragenter', this.handleDragenter, false);
	        document.addEventListener('drop', this.handleDrop, false);
	        shadowShape.addEventListener('mouseup', this.handleMouseUp, false);
	        return shadowShape;
	    }
	    loadDragShape({ x, y }) {
	        const { graph } = this.props;
	        const { hasDragShape, shadowShape, dragShapeID } = this.state;
	        if (!graph || !shadowShape) {
	            return;
	        }
	        if (!hasDragShape) {
	            graph.add(ItemType.Node, {
	                shape: 'rect',
	                x,
	                y,
	                size: [shadowShape.offsetWidth, shadowShape.offsetHeight],
	                style: {
	                    fill: '#F3F9FF',
	                    fillOpacity: 0.5,
	                    stroke: '#1890FF',
	                    strokeOpacity: 0.9,
	                    lineDash: [5, 5],
	                },
	                id: dragShapeID,
	            });
	            this.setState({
	                hasDragShape: true,
	            });
	        }
	    }
	    unloadDragShape() {
	        const { graph } = this.props;
	        const { hasDragShape, shadowShape, dragShapeID } = this.state;
	        if (!graph) {
	            return;
	        }
	        if (hasDragShape) {
	            graph.remove(dragShapeID);
	        }
	        if (shadowShape) {
	            document.body.removeChild(shadowShape);
	        }
	        this.setState({
	            hasDragShape: false,
	            shadowShape: null,
	        });
	        document.removeEventListener('dragenter', this.handleDragenter);
	        document.removeEventListener('dragover', this.handleDragover);
	        document.removeEventListener('drop', this.handleDrop);
	    }
	    render() {
	        const { src, shape, children } = this.props;
	        return (React.createElement("div", Object.assign({ style: { cursor: 'pointer' }, onMouseDown: this.handleMouseDown }, pick_1(this.props, ['style', 'className'])), src ? React.createElement("img", { src: src, alt: shape, draggable: false }) : children));
	    }
	}
	withEditorPrivateContext(Item);

	class ItemPanel extends React.PureComponent {
	    constructor(props) {
	        super(props);
	        this.bindEvent();
	    }
	    bindEvent() {
	        /* const { onAfterAddPage } = this.props;
	    
	        onAfterAddPage(({ page }) => {
	          this.page = page;
	    
	          document.addEventListener('mouseup', this.handleMouseUp);
	        }); */
	    }
	    render() {
	        const { children } = this.props;
	        return React.createElement("div", Object.assign({}, pick_1(this.props, ['style', 'className'])), children);
	    }
	}

	class DetailPanel extends React.Component {
	    constructor(props, type) {
	        super(props);
	        this.type = type;
	    }
	    render() {
	        const { graph, graphState, children } = this.props;
	        if (!graph) {
	            return null;
	        }
	        if (graphState !== this.type) {
	            return null;
	        }
	        return (React.createElement("div", Object.assign({}, pick_1(this.props, ['style', 'className'])), React.Children.toArray(children).map(child => {
	            if (React.isValidElement(child)) {
	                return React.cloneElement(child, {
	                    nodes: getSelectedNodes(graph),
	                    edges: getSelectedEdges(graph),
	                });
	            }
	        })));
	    }
	}
	DetailPanel.create = function (type) {
	    class TypedPanel extends DetailPanel {
	        constructor(props) {
	            super(props, type);
	        }
	    }
	    return withEditorPrivateContext(TypedPanel);
	};
	const NodePanel = DetailPanel.create(GraphState.NodeSelected);
	const EdgePanel = DetailPanel.create(GraphState.EdgeSelected);
	const MultiPanel = DetailPanel.create(GraphState.MultiSelected);
	const CanvasPanel = DetailPanel.create(GraphState.CanvasSelected);

	class Menu extends React.Component {
	    constructor(props, type) {
	        super(props);
	        this.type = null;
	        this.type = type;
	    }
	    render() {
	        const { children } = this.props;
	        const { type } = this;
	        return (React.createElement("div", { className: "menu", "data-status": `${type}-selected` }, children));
	    }
	}
	Menu.create = function (type) {
	    return class TypedMenu extends Menu {
	        constructor(props) {
	            super(props, type);
	        }
	    };
	};

	class ContextMenu extends React.Component {
	    constructor() {
	        super(...arguments);
	        this.getContextMenuStyle = () => {
	            const { contextMenuState } = this.props;
	            return {
	                position: 'absolute',
	                minWidth: '50px',
	                minHeight: '10px',
	                left: `${contextMenuState.clientX}px`,
	                top: `${contextMenuState.clientY}px`,
	                display: contextMenuState.visible ? 'block' : 'none',
	            };
	        };
	        this.handleClick = () => {
	            const { graph } = this.props;
	            if (!graph)
	                return;
	            graph.emit(EditorEvent.onContextMenuStateChange, {
	                contextMenuState: {
	                    visible: false,
	                    clientX: 0,
	                    clientY: 0,
	                },
	            });
	        };
	    }
	    componentDidMount() { }
	    render() {
	        const { children } = this.props;
	        return (React.createElement("div", Object.assign({}, pick_1(this.props, ['style', 'className']), { style: this.getContextMenuStyle(), onClick: this.handleClick }), children));
	    }
	}
	const NodeMenu = Menu.create('node');
	const EdgeMenu = Menu.create('edge');
	const GroupMenu = Menu.create('group');
	const MultiMenu = Menu.create('multi');
	const CanvasMenu = Menu.create('canvas');
	withEditorPrivateContext(ContextMenu);

	class Register extends React.Component {
	    constructor(props, type) {
	        super(props);
	        const { name, config, extend } = props;
	        switch (type) {
	            case 'node':
	                G6.registerNode(name, config, extend);
	                break;
	            case 'edge':
	                G6.registerEdge(name, config, extend);
	                break;
	            case 'command':
	                commandManager.register(name, config);
	                break;
	            case 'behavior':
	                behaviorManager.register(name, config);
	                break;
	        }
	    }
	    render() {
	        return null;
	    }
	}
	Register.create = function (type) {
	    return class extends Register {
	        constructor(props) {
	            super(props, type);
	        }
	    };
	};
	const RegisterNode = Register.create('node');
	const RegisterEdge = Register.create('edge');
	const RegisterCommand = Register.create('command');
	const RegisterBehavior = Register.create('behavior');

	function styleInject(css, ref) {
	  if (ref === void 0) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') {
	    return;
	  }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = "#root {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.editor--2D26d {\n  display: flex;\n  flex: 1;\n  background-color: #f4f6f8;\n}\n.editor-bd--35YQZ {\n  flex: 1;\n}\n";
	var styles = {"editor":"editor--2D26d","editor-bd":"editor-bd--35YQZ","editorBd":"editor-bd--35YQZ"};
	styleInject(css);

	const data = {
	    nodes: [
	        {
	            id: '0',
	            label: '开始节点',
	            x: 55,
	            y: 55,
	            statusIconColor: true,
	        },
	        {
	            id: '1',
	            label: '结束节点',
	            x: 55,
	            y: 255,
	            statusIconColor: 'brown ',
	        },
	    ],
	    edges: [
	        {
	            label: '测试文案',
	            source: '0',
	            target: '1',
	        },
	    ],
	};
	/* 自定义节点shape配置 */
	const nodeShapeConfig = {
	    themeColor: 'brown',
	    showMenuIcon: true,
	};
	class Index extends React.Component {
	    render() {
	        return (React.createElement(GGEditor, { className: styles.editor },
	            React.createElement(RegisterNode, { name: "customFlowNode", extend: "bizNode", config: nodeShapeConfig }),
	            React.createElement(Flow$1, { className: styles.editorBd, data: data, graphConfig: {
	                    defaultEdge: {
	                        shape: 'bizFlowEdge',
	                    },
	                    defaultNode: {
	                        shape: 'customFlowNode',
	                    },
	                } })));
	    }
	}
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

})));

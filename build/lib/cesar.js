"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _alphabet = require("../../alphabet.json");

var _char3 = require("../util/char");

var MAX_ROT = _alphabet.es.length;
/**
 * @module crypt/cesar
 */

var Cesar = {
  /**
   * Encrypt text  using spanish Cesar encryption
   * @memberof crypt/cesar
   * @param {string} text - A string to be encrypted
   * @param {number} rot - Scroll numer, can be from 0 to 26
   * @returns {string} - Encrypted text
   */
  encrypt: function encrypt(text) {
    var rot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    if (rot > MAX_ROT || rot < 0) {
      throw Error('rot can be only beetween 0 to 26');
    }

    text = Array.from(text);
    var encryptedText = text.map(function (_char) {
      var isLower = (0, _char3.isLowerCase)(_char);

      var idx = _alphabet.es.indexOf(_char.toUpperCase());

      if (idx === -1) {
        return _char;
      }

      var encryptedIdx = (idx + rot) % MAX_ROT;
      var encryptedChar = _alphabet.es[encryptedIdx];
      return isLower ? encryptedChar.toLowerCase() : encryptedChar;
    });
    return encryptedText.join('');
  },

  /**
   * Decrypt text using spanish Cesar encryption
   * @memberof crypt/cesar
   * @param {string} text - A string to be decrypted
   * @param {number} rot - Scroll numer, can be from 0 to 26
   * @returns {string} - Decrypted text
   */
  decrypt: function decrypt(text) {
    var rot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    if (rot > MAX_ROT || rot < 0) {
      throw Error('rot can be only beetween 0 to 26');
    }

    text = Array.from(text);
    var decryptedText = text.map(function (_char2) {
      var isLower = (0, _char3.isLowerCase)(_char2);

      var idx = _alphabet.es.indexOf(_char2.toUpperCase());

      if (idx === -1) {
        return _char2;
      }

      var decryptedIdx = (idx - rot) % MAX_ROT;
      decryptedIdx = decryptedIdx < 0 ? decryptedIdx + MAX_ROT : decryptedIdx;
      var decryptedChar = _alphabet.es[decryptedIdx];
      return isLower ? decryptedChar.toLowerCase() : decryptedChar;
    });
    return decryptedText.join('');
  }
};
var _default = Cesar;
exports["default"] = _default;
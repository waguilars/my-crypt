"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUpperCase = exports.isLowerCase = void 0;

/**
 *
 * @param {string} char
 * @returns A boolean that represents if the character is lowerCase
 */
var isLowerCase = function isLowerCase(_char) {
  return _char === _char.toLowerCase();
};
/**
 *
 * @param {string} char
 * @returns A boolean that represents if the character is uppercase
 */


exports.isLowerCase = isLowerCase;

var isUpperCase = function isUpperCase(_char2) {
  return _char2 === _char2.toUpperCase();
};

exports.isUpperCase = isUpperCase;
"use strict";

var _cesar = _interopRequireDefault(require("./lib/cesar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log(Cesar.encrypt('Hola mundo WXYZ'))
// console.log(Cesar.decrypt('Krñd oxpgr ZABC'))
module.exports = {
  Cesar: _cesar["default"]
};
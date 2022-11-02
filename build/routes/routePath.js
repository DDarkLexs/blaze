"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _carregamento = _interopRequireDefault(require("./module/carregamento"));
var _usuario = _interopRequireDefault(require("./module/usuario"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _carregamento["default"])(app);
(0, _usuario["default"])(app);
var _default = app;
exports["default"] = _default;
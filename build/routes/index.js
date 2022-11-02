"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _routePath = _interopRequireDefault(require("./routePath"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = function _default(app) {
  app.use('/api', _routePath["default"]);
};
exports["default"] = _default;
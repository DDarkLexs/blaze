"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _model = _interopRequireDefault(require("../../model"));
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _usuario = _interopRequireDefault(require("../../controller/usuario"));
var _configs = require("../../configs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var findUsuario = _usuario["default"].findUsuario,
  insertNewUsuario = _usuario["default"].insertNewUsuario;
var _default = function _default(app) {
  app.route("/auth/usuario").get(function (req, res, next) {
    //    console.log("autenticando usuario")

    next();
  }, findUsuario).post(function (req, res, next) {
    //   console.log(req.query)
    next();
  }, insertNewUsuario);
  app.route("/auth/usuario/checkToken").get(_configs.authToken, function (req, res, next) {
    // console.log("verificando a assinatura")
    // console.log(req)

    res.sendStatus(200);
  });
};
exports["default"] = _default;
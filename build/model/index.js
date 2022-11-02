"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _configs = require("../configs");
// import { knex } from 'knex'

var knex = require('knex')(_configs.sqliteConnection);
knex.raw("PRAGMA foreign_keys = ON;").then(function (a) {
  //  console.log("verificacao de chave estrangeira ativo")
});
var _default = knex;
exports["default"] = _default;
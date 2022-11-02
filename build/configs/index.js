"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authToken = authToken;
exports.formatToByte = void 0;
exports.generateAccessToken = generateAccessToken;
exports.sqliteConnection = void 0;
var _path = _interopRequireDefault(require("path"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _numeral = _interopRequireDefault(require("numeral"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var sqliteConnection = {
  client: 'sqlite3',
  // or 'better-sqlite3'
  connection: {
    filename: _path["default"].join(process.env.INIT_CWD + '/src/database/index.db')
  },
  useNullAsDefault: true
};
exports.sqliteConnection = sqliteConnection;
function generateAccessToken(user) {
  // console.log(user)
  return _jsonwebtoken["default"].sign(user, process.env.TOKEN_SECRET, {
    expiresIn: '1800s'
  });
}
function authToken(req, res, next) {
  var authHeader = req.headers['authorization'];
  var token = authHeader; // && authHeader.split(' ')[1]
  // console.log(authHeader)
  if (token == null) return res.sendStatus(401);
  _jsonwebtoken["default"].verify(token, process.env.TOKEN_SECRET, function (err, user) {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
var formatToByte = function formatToByte(value) {
  return (0, _numeral["default"])(value).format('0b');
};

// console.log(path.join(process.env.INIT_CWD+'/src/database/index.db'))
exports.formatToByte = formatToByte;
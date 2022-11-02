"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _routes = _interopRequireDefault(require("./routes"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import { authToken, generateAccessToken,formatToByte } from './configs'

_dotenv["default"].config();
console.log(process.env.PORT);
var PORT = process.env.PORT || 5000;
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
(0, _routes["default"])(app);
app.use(_express["default"]["static"]("src/public"));
app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  });
});
app.listen(PORT, function () {
  console.clear();
  console.log("servidor a ser executado na porta:".concat(PORT));
});
module.exports = app;
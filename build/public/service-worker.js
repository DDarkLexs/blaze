"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
if (!self.define) {
  var e,
    s = {};
  var n = function n(_n, i) {
    return _n = new URL(_n + ".js", i).href, s[_n] || new Promise(function (s) {
      if ("document" in self) {
        var _e = document.createElement("script");
        _e.src = _n, _e.onload = s, document.head.appendChild(_e);
      } else e = _n, importScripts(_n), s();
    }).then(function () {
      var e = s[_n];
      if (!e) throw new Error("Module ".concat(_n, " didn\u2019t register its module"));
      return e;
    });
  };
  self.define = function (i, l) {
    var r = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[r]) return;
    var o = {};
    var c = function c(e) {
        return n(e, r);
      },
      u = {
        module: {
          uri: r
        },
        exports: o,
        require: c
      };
    s[r] = Promise.all(i.map(function (e) {
      return u[e] || c(e);
    })).then(function (e) {
      return l.apply(void 0, _toConsumableArray(e)), o;
    });
  };
}
define(["./workbox-79ffe3e0"], function (e) {
  "use strict";

  e.setCacheNameDetails({
    prefix: "blaze"
  }), self.addEventListener("message", function (e) {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }), e.precacheAndRoute([{
    url: "/css/135.3cad60ef.css",
    revision: null
  }, {
    url: "/css/389.c47b7e21.css",
    revision: null
  }, {
    url: "/css/chunk-vendors.a8a259d6.css",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.1dab7af5.woff",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.2474c2c1.woff2",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.a1c852b2.eot",
    revision: null
  }, {
    url: "/fonts/materialdesignicons-webfont.b33ccf64.ttf",
    revision: null
  }, {
    url: "/img/bg-laptop.1c05cfa9.jpg",
    revision: null
  }, {
    url: "/img/scene-251.e875feff.jpg",
    revision: null
  }, {
    url: "/index.html",
    revision: "d047ef8e1b7c3dfdc17f71cd551e5241"
  }, {
    url: "/js/135.4e7fc652.js",
    revision: null
  }, {
    url: "/js/261.f40e520e.js",
    revision: null
  }, {
    url: "/js/389.67d02c8c.js",
    revision: null
  }, {
    url: "/js/6.9478da81.js",
    revision: null
  }, {
    url: "/js/786.db3da824.js",
    revision: null
  }, {
    url: "/js/app.ded3ea7b.js",
    revision: null
  }, {
    url: "/js/chunk-vendors.eb20b21a.js",
    revision: null
  }, {
    url: "/manifest.json",
    revision: "b9a2d0965dcb467592f2b1c70fcc2e60"
  }, {
    url: "/robots.txt",
    revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
  }], {});
});
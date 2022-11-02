"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e9) { throw _e9; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e10) { didErr = true; err = _e10; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
define(["exports"], function (t) {
  "use strict";

  try {
    self["workbox:core:6.5.3"] && _();
  } catch (t) {}
  var e = function e(t) {
    var s = t;
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    return e.length > 0 && (s += " :: ".concat(JSON.stringify(e))), s;
  };
  var s = /*#__PURE__*/function (_Error) {
    _inherits(s, _Error);
    var _super = _createSuper(s);
    function s(t, _s) {
      var _this;
      _classCallCheck(this, s);
      _this = _super.call(this, e(t, _s)), _this.name = t, _this.details = _s;
      return _this;
    }
    return _createClass(s);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var n = {
      googleAnalytics: "googleAnalytics",
      precache: "precache-v2",
      prefix: "workbox",
      runtime: "runtime",
      suffix: "undefined" != typeof registration ? registration.scope : ""
    },
    i = function i(t) {
      return [n.prefix, t, n.suffix].filter(function (t) {
        return t && t.length > 0;
      }).join("-");
    },
    r = function r(t) {
      (function (t) {
        for (var _i = 0, _Object$keys = Object.keys(n); _i < _Object$keys.length; _i++) {
          var _e = _Object$keys[_i];
          t(_e);
        }
      })(function (e) {
        "string" == typeof t[e] && (n[e] = t[e]);
      });
    },
    o = function o(t) {
      return t || i(n.precache);
    },
    c = function c(t) {
      return t || i(n.runtime);
    };
  try {
    self["workbox:routing:6.5.3"] && _();
  } catch (t) {}
  var a = function a(t) {
    return t && "object" == _typeof(t) ? t : {
      handle: t
    };
  };
  var h = /*#__PURE__*/function () {
    function h(t, e) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
      _classCallCheck(this, h);
      this.handler = a(e), this.match = t, this.method = s;
    }
    _createClass(h, [{
      key: "setCatchHandler",
      value: function setCatchHandler(t) {
        this.catchHandler = a(t);
      }
    }]);
    return h;
  }();
  var u = /*#__PURE__*/function (_h) {
    _inherits(u, _h);
    var _super2 = _createSuper(u);
    function u(t, e, s) {
      _classCallCheck(this, u);
      return _super2.call(this, function (_ref) {
        var e = _ref.url;
        var s = t.exec(e.href);
        if (s && (e.origin === location.origin || 0 === s.index)) return s.slice(1);
      }, e, s);
    }
    return _createClass(u);
  }(h);
  var l = /*#__PURE__*/function () {
    function l() {
      _classCallCheck(this, l);
      this.t = new Map(), this.i = new Map();
    }
    _createClass(l, [{
      key: "routes",
      get: function get() {
        return this.t;
      }
    }, {
      key: "addFetchListener",
      value: function addFetchListener() {
        var _this2 = this;
        self.addEventListener("fetch", function (t) {
          var e = t.request,
            s = _this2.handleRequest({
              request: e,
              event: t
            });
          s && t.respondWith(s);
        });
      }
    }, {
      key: "addCacheListener",
      value: function addCacheListener() {
        var _this3 = this;
        self.addEventListener("message", function (t) {
          if (t.data && "CACHE_URLS" === t.data.type) {
            var _e2 = t.data.payload,
              _s2 = Promise.all(_e2.urlsToCache.map(function (e) {
                "string" == typeof e && (e = [e]);
                var s = _construct(Request, _toConsumableArray(e));
                return _this3.handleRequest({
                  request: s,
                  event: t
                });
              }));
            t.waitUntil(_s2), t.ports && t.ports[0] && _s2.then(function () {
              return t.ports[0].postMessage(!0);
            });
          }
        });
      }
    }, {
      key: "handleRequest",
      value: function handleRequest(_ref2) {
        var _this4 = this;
        var t = _ref2.request,
          e = _ref2.event;
        var s = new URL(t.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        var n = s.origin === location.origin,
          _this$findMatchingRou = this.findMatchingRoute({
            event: e,
            request: t,
            sameOrigin: n,
            url: s
          }),
          i = _this$findMatchingRou.params,
          r = _this$findMatchingRou.route;
        var o = r && r.handler;
        var c = t.method;
        if (!o && this.i.has(c) && (o = this.i.get(c)), !o) return;
        var a;
        try {
          a = o.handle({
            url: s,
            request: t,
            event: e,
            params: i
          });
        } catch (t) {
          a = Promise.reject(t);
        }
        var h = r && r.catchHandler;
        return a instanceof Promise && (this.o || h) && (a = a["catch"]( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(n) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!h) {
                      _context.next = 10;
                      break;
                    }
                    _context.prev = 1;
                    _context.next = 4;
                    return h.handle({
                      url: s,
                      request: t,
                      event: e,
                      params: i
                    });
                  case 4:
                    return _context.abrupt("return", _context.sent);
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](1);
                    _context.t0 instanceof Error && (n = _context.t0);
                  case 10:
                    if (!_this4.o) {
                      _context.next = 12;
                      break;
                    }
                    return _context.abrupt("return", _this4.o.handle({
                      url: s,
                      request: t,
                      event: e
                    }));
                  case 12:
                    throw n;
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[1, 7]]);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }())), a;
      }
    }, {
      key: "findMatchingRoute",
      value: function findMatchingRoute(_ref4) {
        var t = _ref4.url,
          e = _ref4.sameOrigin,
          s = _ref4.request,
          n = _ref4.event;
        var i = this.t.get(s.method) || [];
        var _iterator = _createForOfIteratorHelper(i),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _r = _step.value;
            var _i2 = void 0;
            var _o = _r.match({
              url: t,
              sameOrigin: e,
              request: s,
              event: n
            });
            if (_o) return _i2 = _o, (Array.isArray(_i2) && 0 === _i2.length || _o.constructor === Object && 0 === Object.keys(_o).length || "boolean" == typeof _o) && (_i2 = void 0), {
              route: _r,
              params: _i2
            };
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return {};
      }
    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
        this.i.set(e, a(t));
      }
    }, {
      key: "setCatchHandler",
      value: function setCatchHandler(t) {
        this.o = a(t);
      }
    }, {
      key: "registerRoute",
      value: function registerRoute(t) {
        this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t);
      }
    }, {
      key: "unregisterRoute",
      value: function unregisterRoute(t) {
        if (!this.t.has(t.method)) throw new s("unregister-route-but-not-found-with-method", {
          method: t.method
        });
        var e = this.t.get(t.method).indexOf(t);
        if (!(e > -1)) throw new s("unregister-route-route-not-registered");
        this.t.get(t.method).splice(e, 1);
      }
    }]);
    return l;
  }();
  var f;
  function w(t, e) {
    var s = e();
    return t.waitUntil(s), s;
  }
  try {
    self["workbox:precaching:6.5.3"] && _();
  } catch (t) {}
  function d(t) {
    if (!t) throw new s("add-to-cache-list-unexpected-type", {
      entry: t
    });
    if ("string" == typeof t) {
      var _e3 = new URL(t, location.href);
      return {
        cacheKey: _e3.href,
        url: _e3.href
      };
    }
    var e = t.revision,
      n = t.url;
    if (!n) throw new s("add-to-cache-list-unexpected-type", {
      entry: t
    });
    if (!e) {
      var _t = new URL(n, location.href);
      return {
        cacheKey: _t.href,
        url: _t.href
      };
    }
    var i = new URL(n, location.href),
      r = new URL(n, location.href);
    return i.searchParams.set("__WB_REVISION__", e), {
      cacheKey: i.href,
      url: r.href
    };
  }
  var p = /*#__PURE__*/_createClass(function p() {
    var _this5 = this;
    _classCallCheck(this, p);
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref5) {
        var t, e;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                t = _ref5.request, e = _ref5.state;
                e && (e.originalRequest = t);
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }(), this.cachedResponseWillBeUsed = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref7) {
        var t, e, s, _t2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                t = _ref7.event, e = _ref7.state, s = _ref7.cachedResponse;
                if ("install" === t.type && e && e.originalRequest && e.originalRequest instanceof Request) {
                  _t2 = e.originalRequest.url;
                  s ? _this5.notUpdatedURLs.push(_t2) : _this5.updatedURLs.push(_t2);
                }
                return _context3.abrupt("return", s);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref8.apply(this, arguments);
      };
    }();
  });
  var y = /*#__PURE__*/_createClass(function y(_ref9) {
    var _this6 = this;
    var t = _ref9.precacheController;
    _classCallCheck(this, y);
    this.cacheKeyWillBeUsed = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref10) {
        var t, e, s;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                t = _ref10.request, e = _ref10.params;
                s = (null == e ? void 0 : e.cacheKey) || _this6.h.getCacheKeyForURL(t.url);
                return _context4.abrupt("return", s ? new Request(s, {
                  headers: t.headers
                }) : t);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return function (_x4) {
        return _ref11.apply(this, arguments);
      };
    }(), this.h = t;
  });
  var g;
  function R(_x5, _x6) {
    return _R.apply(this, arguments);
  }
  function _R() {
    _R = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(t, e) {
      var n, i, r, o, c;
      return _regeneratorRuntime().wrap(function _callee26$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              n = null;
              if (t.url) {
                n = new URL(t.url).origin;
              }
              if (!(n !== self.location.origin)) {
                _context28.next = 4;
                break;
              }
              throw new s("cross-origin-copy-response", {
                origin: n
              });
            case 4:
              i = t.clone();
              r = {
                headers: new Headers(i.headers),
                status: i.status,
                statusText: i.statusText
              };
              o = e ? e(r) : r;
              if (!function () {
                if (void 0 === g) {
                  var _t18 = new Response("");
                  if ("body" in _t18) try {
                    new Response(_t18.body), g = !0;
                  } catch (t) {
                    g = !1;
                  }
                  g = !1;
                }
                return g;
              }()) {
                _context28.next = 11;
                break;
              }
              _context28.t0 = i.body;
              _context28.next = 14;
              break;
            case 11:
              _context28.next = 13;
              return i.blob();
            case 13:
              _context28.t0 = _context28.sent;
            case 14:
              c = _context28.t0;
              return _context28.abrupt("return", new Response(c, o));
            case 16:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee26);
    }));
    return _R.apply(this, arguments);
  }
  function m(t, e) {
    var s = new URL(t);
    var _iterator2 = _createForOfIteratorHelper(e),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _t3 = _step2.value;
        s.searchParams["delete"](_t3);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return s.href;
  }
  var v = /*#__PURE__*/_createClass(function v() {
    var _this7 = this;
    _classCallCheck(this, v);
    this.promise = new Promise(function (t, e) {
      _this7.resolve = t, _this7.reject = e;
    });
  });
  var q = new Set();
  try {
    self["workbox:strategies:6.5.3"] && _();
  } catch (t) {}
  function U(t) {
    return "string" == typeof t ? new Request(t) : t;
  }
  var b = /*#__PURE__*/function () {
    function b(t, e) {
      _classCallCheck(this, b);
      this.u = {}, Object.assign(this, e), this.event = e.event, this.l = t, this.p = new v(), this.g = [], this.R = _toConsumableArray(t.plugins), this.m = new Map();
      var _iterator3 = _createForOfIteratorHelper(this.R),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _t4 = _step3.value;
          this.m.set(_t4, {});
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.event.waitUntil(this.p.promise);
    }
    _createClass(b, [{
      key: "fetch",
      value: function (_fetch) {
        function fetch(_x7) {
          return _fetch.apply(this, arguments);
        }
        fetch.toString = function () {
          return _fetch.toString();
        };
        return fetch;
      }( /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(t) {
          var e, n, _t5, i, _iterator4, _step4, _t6, r, _t7, _iterator5, _step5, _s3;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  e = this.event;
                  n = U(t);
                  if (!("navigate" === n.mode && e instanceof FetchEvent && e.preloadResponse)) {
                    _context5.next = 8;
                    break;
                  }
                  _context5.next = 5;
                  return e.preloadResponse;
                case 5:
                  _t5 = _context5.sent;
                  if (!_t5) {
                    _context5.next = 8;
                    break;
                  }
                  return _context5.abrupt("return", _t5);
                case 8:
                  i = this.hasCallback("fetchDidFail") ? n.clone() : null;
                  _context5.prev = 9;
                  _iterator4 = _createForOfIteratorHelper(this.iterateCallbacks("requestWillFetch"));
                  _context5.prev = 11;
                  _iterator4.s();
                case 13:
                  if ((_step4 = _iterator4.n()).done) {
                    _context5.next = 20;
                    break;
                  }
                  _t6 = _step4.value;
                  _context5.next = 17;
                  return _t6({
                    request: n.clone(),
                    event: e
                  });
                case 17:
                  n = _context5.sent;
                case 18:
                  _context5.next = 13;
                  break;
                case 20:
                  _context5.next = 25;
                  break;
                case 22:
                  _context5.prev = 22;
                  _context5.t0 = _context5["catch"](11);
                  _iterator4.e(_context5.t0);
                case 25:
                  _context5.prev = 25;
                  _iterator4.f();
                  return _context5.finish(25);
                case 28:
                  _context5.next = 34;
                  break;
                case 30:
                  _context5.prev = 30;
                  _context5.t1 = _context5["catch"](9);
                  if (!(_context5.t1 instanceof Error)) {
                    _context5.next = 34;
                    break;
                  }
                  throw new s("plugin-error-request-will-fetch", {
                    thrownErrorMessage: _context5.t1.message
                  });
                case 34:
                  r = n.clone();
                  _context5.prev = 35;
                  _context5.next = 38;
                  return fetch(n, "navigate" === n.mode ? void 0 : this.l.fetchOptions);
                case 38:
                  _t7 = _context5.sent;
                  _iterator5 = _createForOfIteratorHelper(this.iterateCallbacks("fetchDidSucceed"));
                  _context5.prev = 40;
                  _iterator5.s();
                case 42:
                  if ((_step5 = _iterator5.n()).done) {
                    _context5.next = 49;
                    break;
                  }
                  _s3 = _step5.value;
                  _context5.next = 46;
                  return _s3({
                    event: e,
                    request: r,
                    response: _t7
                  });
                case 46:
                  _t7 = _context5.sent;
                case 47:
                  _context5.next = 42;
                  break;
                case 49:
                  _context5.next = 54;
                  break;
                case 51:
                  _context5.prev = 51;
                  _context5.t2 = _context5["catch"](40);
                  _iterator5.e(_context5.t2);
                case 54:
                  _context5.prev = 54;
                  _iterator5.f();
                  return _context5.finish(54);
                case 57:
                  return _context5.abrupt("return", _t7);
                case 60:
                  _context5.prev = 60;
                  _context5.t3 = _context5["catch"](35);
                  _context5.t4 = i;
                  if (!_context5.t4) {
                    _context5.next = 66;
                    break;
                  }
                  _context5.next = 66;
                  return this.runCallbacks("fetchDidFail", {
                    error: _context5.t3,
                    event: e,
                    originalRequest: i.clone(),
                    request: r.clone()
                  });
                case 66:
                  throw _context5.t3;
                case 67:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[9, 30], [11, 22, 25, 28], [35, 60], [40, 51, 54, 57]]);
        }));
        return function (_x8) {
          return _ref12.apply(this, arguments);
        };
      }())
    }, {
      key: "fetchAndCachePut",
      value: function () {
        var _fetchAndCachePut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(t) {
          var e, s;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.fetch(t);
                case 2:
                  e = _context6.sent;
                  s = e.clone();
                  return _context6.abrupt("return", (this.waitUntil(this.cachePut(t, s)), e));
                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
        function fetchAndCachePut(_x9) {
          return _fetchAndCachePut.apply(this, arguments);
        }
        return fetchAndCachePut;
      }()
    }, {
      key: "cacheMatch",
      value: function () {
        var _cacheMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(t) {
          var e, s, _this$l, n, i, r, o, _iterator6, _step6, _t8;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  e = U(t);
                  _this$l = this.l;
                  n = _this$l.cacheName;
                  i = _this$l.matchOptions;
                  _context7.next = 6;
                  return this.getCacheKey(e, "read");
                case 6:
                  r = _context7.sent;
                  o = Object.assign(Object.assign({}, i), {
                    cacheName: n
                  });
                  _context7.next = 10;
                  return caches.match(r, o);
                case 10:
                  s = _context7.sent;
                  _iterator6 = _createForOfIteratorHelper(this.iterateCallbacks("cachedResponseWillBeUsed"));
                  _context7.prev = 12;
                  _iterator6.s();
                case 14:
                  if ((_step6 = _iterator6.n()).done) {
                    _context7.next = 24;
                    break;
                  }
                  _t8 = _step6.value;
                  _context7.next = 18;
                  return _t8({
                    cacheName: n,
                    matchOptions: i,
                    cachedResponse: s,
                    request: r,
                    event: this.event
                  });
                case 18:
                  _context7.t0 = _context7.sent;
                  if (_context7.t0) {
                    _context7.next = 21;
                    break;
                  }
                  _context7.t0 = void 0;
                case 21:
                  s = _context7.t0;
                case 22:
                  _context7.next = 14;
                  break;
                case 24:
                  _context7.next = 29;
                  break;
                case 26:
                  _context7.prev = 26;
                  _context7.t1 = _context7["catch"](12);
                  _iterator6.e(_context7.t1);
                case 29:
                  _context7.prev = 29;
                  _iterator6.f();
                  return _context7.finish(29);
                case 32:
                  return _context7.abrupt("return", s);
                case 33:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[12, 26, 29, 32]]);
        }));
        function cacheMatch(_x10) {
          return _cacheMatch.apply(this, arguments);
        }
        return cacheMatch;
      }()
    }, {
      key: "cachePut",
      value: function () {
        var _cachePut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(t, e) {
          var n, i, r, o, c, _this$l2, a, h, u, l, f, _iterator9, _step9, _t10;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  n = U(t);
                  _context10.next = 3;
                  return i = 0, new Promise(function (t) {
                    return setTimeout(t, i);
                  });
                case 3:
                  _context10.next = 5;
                  return this.getCacheKey(n, "write");
                case 5:
                  r = _context10.sent;
                  if (e) {
                    _context10.next = 8;
                    break;
                  }
                  throw new s("cache-put-with-no-response", {
                    url: (o = r.url, new URL(String(o), location.href).href.replace(new RegExp("^".concat(location.origin)), ""))
                  });
                case 8:
                  _context10.next = 10;
                  return this.v(e);
                case 10:
                  c = _context10.sent;
                  if (c) {
                    _context10.next = 13;
                    break;
                  }
                  return _context10.abrupt("return", !1);
                case 13:
                  _this$l2 = this.l;
                  a = _this$l2.cacheName;
                  h = _this$l2.matchOptions;
                  _context10.next = 18;
                  return self.caches.open(a);
                case 18:
                  u = _context10.sent;
                  l = this.hasCallback("cacheDidUpdate");
                  if (!l) {
                    _context10.next = 26;
                    break;
                  }
                  _context10.next = 23;
                  return function () {
                    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(t, e, s, n) {
                      var i, r, o, _iterator7, _step7, _e4;
                      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              i = m(e.url, s);
                              if (!(e.url === i)) {
                                _context8.next = 3;
                                break;
                              }
                              return _context8.abrupt("return", t.match(e, n));
                            case 3:
                              r = Object.assign(Object.assign({}, n), {
                                ignoreSearch: !0
                              });
                              _context8.next = 6;
                              return t.keys(e, r);
                            case 6:
                              o = _context8.sent;
                              _iterator7 = _createForOfIteratorHelper(o);
                              _context8.prev = 8;
                              _iterator7.s();
                            case 10:
                              if ((_step7 = _iterator7.n()).done) {
                                _context8.next = 16;
                                break;
                              }
                              _e4 = _step7.value;
                              if (!(i === m(_e4.url, s))) {
                                _context8.next = 14;
                                break;
                              }
                              return _context8.abrupt("return", t.match(_e4, n));
                            case 14:
                              _context8.next = 10;
                              break;
                            case 16:
                              _context8.next = 21;
                              break;
                            case 18:
                              _context8.prev = 18;
                              _context8.t0 = _context8["catch"](8);
                              _iterator7.e(_context8.t0);
                            case 21:
                              _context8.prev = 21;
                              _iterator7.f();
                              return _context8.finish(21);
                            case 24:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8, null, [[8, 18, 21, 24]]);
                    }));
                    return function (_x13, _x14, _x15, _x16) {
                      return _ref13.apply(this, arguments);
                    };
                  }()(u, r.clone(), ["__WB_REVISION__"], h);
                case 23:
                  _context10.t0 = _context10.sent;
                  _context10.next = 27;
                  break;
                case 26:
                  _context10.t0 = null;
                case 27:
                  f = _context10.t0;
                  _context10.prev = 28;
                  _context10.next = 31;
                  return u.put(r, l ? c.clone() : c);
                case 31:
                  _context10.next = 41;
                  break;
                case 33:
                  _context10.prev = 33;
                  _context10.t1 = _context10["catch"](28);
                  if (!(_context10.t1 instanceof Error)) {
                    _context10.next = 41;
                    break;
                  }
                  _context10.t2 = "QuotaExceededError" === _context10.t1.name;
                  if (!_context10.t2) {
                    _context10.next = 40;
                    break;
                  }
                  _context10.next = 40;
                  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                    var _iterator8, _step8, _t9;
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _iterator8 = _createForOfIteratorHelper(q);
                            _context9.prev = 1;
                            _iterator8.s();
                          case 3:
                            if ((_step8 = _iterator8.n()).done) {
                              _context9.next = 9;
                              break;
                            }
                            _t9 = _step8.value;
                            _context9.next = 7;
                            return _t9();
                          case 7:
                            _context9.next = 3;
                            break;
                          case 9:
                            _context9.next = 14;
                            break;
                          case 11:
                            _context9.prev = 11;
                            _context9.t0 = _context9["catch"](1);
                            _iterator8.e(_context9.t0);
                          case 14:
                            _context9.prev = 14;
                            _iterator8.f();
                            return _context9.finish(14);
                          case 17:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, null, [[1, 11, 14, 17]]);
                  }))();
                case 40:
                  throw _context10.t1;
                case 41:
                  _iterator9 = _createForOfIteratorHelper(this.iterateCallbacks("cacheDidUpdate"));
                  _context10.prev = 42;
                  _iterator9.s();
                case 44:
                  if ((_step9 = _iterator9.n()).done) {
                    _context10.next = 50;
                    break;
                  }
                  _t10 = _step9.value;
                  _context10.next = 48;
                  return _t10({
                    cacheName: a,
                    oldResponse: f,
                    newResponse: c.clone(),
                    request: r,
                    event: this.event
                  });
                case 48:
                  _context10.next = 44;
                  break;
                case 50:
                  _context10.next = 55;
                  break;
                case 52:
                  _context10.prev = 52;
                  _context10.t3 = _context10["catch"](42);
                  _iterator9.e(_context10.t3);
                case 55:
                  _context10.prev = 55;
                  _iterator9.f();
                  return _context10.finish(55);
                case 58:
                  return _context10.abrupt("return", !0);
                case 59:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this, [[28, 33], [42, 52, 55, 58]]);
        }));
        function cachePut(_x11, _x12) {
          return _cachePut.apply(this, arguments);
        }
        return cachePut;
      }()
    }, {
      key: "getCacheKey",
      value: function () {
        var _getCacheKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(t, e) {
          var s, _n, _iterator10, _step10, _t11;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  s = "".concat(t.url, " | ").concat(e);
                  if (this.u[s]) {
                    _context11.next = 24;
                    break;
                  }
                  _n = t;
                  _iterator10 = _createForOfIteratorHelper(this.iterateCallbacks("cacheKeyWillBeUsed"));
                  _context11.prev = 4;
                  _iterator10.s();
                case 6:
                  if ((_step10 = _iterator10.n()).done) {
                    _context11.next = 15;
                    break;
                  }
                  _t11 = _step10.value;
                  _context11.t0 = U;
                  _context11.next = 11;
                  return _t11({
                    mode: e,
                    request: _n,
                    event: this.event,
                    params: this.params
                  });
                case 11:
                  _context11.t1 = _context11.sent;
                  _n = (0, _context11.t0)(_context11.t1);
                case 13:
                  _context11.next = 6;
                  break;
                case 15:
                  _context11.next = 20;
                  break;
                case 17:
                  _context11.prev = 17;
                  _context11.t2 = _context11["catch"](4);
                  _iterator10.e(_context11.t2);
                case 20:
                  _context11.prev = 20;
                  _iterator10.f();
                  return _context11.finish(20);
                case 23:
                  this.u[s] = _n;
                case 24:
                  return _context11.abrupt("return", this.u[s]);
                case 25:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this, [[4, 17, 20, 23]]);
        }));
        function getCacheKey(_x17, _x18) {
          return _getCacheKey.apply(this, arguments);
        }
        return getCacheKey;
      }()
    }, {
      key: "hasCallback",
      value: function hasCallback(t) {
        var _iterator11 = _createForOfIteratorHelper(this.l.plugins),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _e5 = _step11.value;
            if (t in _e5) return !0;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return !1;
      }
    }, {
      key: "runCallbacks",
      value: function () {
        var _runCallbacks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(t, e) {
          var _iterator12, _step12, _s4;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _iterator12 = _createForOfIteratorHelper(this.iterateCallbacks(t));
                  _context12.prev = 1;
                  _iterator12.s();
                case 3:
                  if ((_step12 = _iterator12.n()).done) {
                    _context12.next = 9;
                    break;
                  }
                  _s4 = _step12.value;
                  _context12.next = 7;
                  return _s4(e);
                case 7:
                  _context12.next = 3;
                  break;
                case 9:
                  _context12.next = 14;
                  break;
                case 11:
                  _context12.prev = 11;
                  _context12.t0 = _context12["catch"](1);
                  _iterator12.e(_context12.t0);
                case 14:
                  _context12.prev = 14;
                  _iterator12.f();
                  return _context12.finish(14);
                case 17:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this, [[1, 11, 14, 17]]);
        }));
        function runCallbacks(_x19, _x20) {
          return _runCallbacks.apply(this, arguments);
        }
        return runCallbacks;
      }()
    }, {
      key: "iterateCallbacks",
      value: /*#__PURE__*/_regeneratorRuntime().mark(function iterateCallbacks(t) {
        var _this8 = this;
        var _iterator13, _step13, _loop;
        return _regeneratorRuntime().wrap(function iterateCallbacks$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _iterator13 = _createForOfIteratorHelper(this.l.plugins);
                _context14.prev = 1;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var e, _s5, _n2;
                  return _regeneratorRuntime().wrap(function _loop$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          e = _step13.value;
                          if (!("function" == typeof e[t])) {
                            _context13.next = 5;
                            break;
                          }
                          _s5 = _this8.m.get(e), _n2 = function _n2(n) {
                            var i = Object.assign(Object.assign({}, n), {
                              state: _s5
                            });
                            return e[t](i);
                          };
                          _context13.next = 5;
                          return _n2;
                        case 5:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _loop);
                });
                _iterator13.s();
              case 4:
                if ((_step13 = _iterator13.n()).done) {
                  _context14.next = 8;
                  break;
                }
                return _context14.delegateYield(_loop(), "t0", 6);
              case 6:
                _context14.next = 4;
                break;
              case 8:
                _context14.next = 13;
                break;
              case 10:
                _context14.prev = 10;
                _context14.t1 = _context14["catch"](1);
                _iterator13.e(_context14.t1);
              case 13:
                _context14.prev = 13;
                _iterator13.f();
                return _context14.finish(13);
              case 16:
              case "end":
                return _context14.stop();
            }
          }
        }, iterateCallbacks, this, [[1, 10, 13, 16]]);
      })
    }, {
      key: "waitUntil",
      value: function waitUntil(t) {
        return this.g.push(t), t;
      }
    }, {
      key: "doneWaiting",
      value: function () {
        var _doneWaiting = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
          var t;
          return _regeneratorRuntime().wrap(function _callee13$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  if (!(t = this.g.shift())) {
                    _context15.next = 5;
                    break;
                  }
                  _context15.next = 3;
                  return t;
                case 3:
                  _context15.next = 0;
                  break;
                case 5:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee13, this);
        }));
        function doneWaiting() {
          return _doneWaiting.apply(this, arguments);
        }
        return doneWaiting;
      }()
    }, {
      key: "destroy",
      value: function destroy() {
        this.p.resolve(null);
      }
    }, {
      key: "v",
      value: function () {
        var _v = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(t) {
          var e, s, _iterator14, _step14, _t12;
          return _regeneratorRuntime().wrap(function _callee14$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  e = t, s = !1;
                  _iterator14 = _createForOfIteratorHelper(this.iterateCallbacks("cacheWillUpdate"));
                  _context16.prev = 2;
                  _iterator14.s();
                case 4:
                  if ((_step14 = _iterator14.n()).done) {
                    _context16.next = 17;
                    break;
                  }
                  _t12 = _step14.value;
                  _context16.next = 8;
                  return _t12({
                    request: this.request,
                    response: e,
                    event: this.event
                  });
                case 8:
                  _context16.t0 = _context16.sent;
                  if (_context16.t0) {
                    _context16.next = 11;
                    break;
                  }
                  _context16.t0 = void 0;
                case 11:
                  e = _context16.t0;
                  s = !0;
                  if (e) {
                    _context16.next = 15;
                    break;
                  }
                  return _context16.abrupt("break", 17);
                case 15:
                  _context16.next = 4;
                  break;
                case 17:
                  _context16.next = 22;
                  break;
                case 19:
                  _context16.prev = 19;
                  _context16.t1 = _context16["catch"](2);
                  _iterator14.e(_context16.t1);
                case 22:
                  _context16.prev = 22;
                  _iterator14.f();
                  return _context16.finish(22);
                case 25:
                  return _context16.abrupt("return", (s || e && 200 !== e.status && (e = void 0), e));
                case 26:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee14, this, [[2, 19, 22, 25]]);
        }));
        function v(_x21) {
          return _v.apply(this, arguments);
        }
        return v;
      }()
    }]);
    return b;
  }();
  var L = /*#__PURE__*/function (_ref15) {
    _inherits(L, _ref15);
    var _super3 = _createSuper(L);
    function L() {
      var _this9;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, L);
      t.cacheName = o(t.cacheName), _this9 = _super3.call(this, t), _this9._ = !1 !== t.fallbackToNetwork, _this9.plugins.push(L.copyRedirectedCacheableResponsesPlugin);
      return _this9;
    }
    _createClass(L, [{
      key: "L",
      value: function () {
        var _L = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(t, e) {
          var s;
          return _regeneratorRuntime().wrap(function _callee15$(_context17) {
            while (1) {
              switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return e.cacheMatch(t);
                case 2:
                  s = _context17.sent;
                  _context17.t0 = s;
                  if (_context17.t0) {
                    _context17.next = 15;
                    break;
                  }
                  if (!(e.event && "install" === e.event.type)) {
                    _context17.next = 11;
                    break;
                  }
                  _context17.next = 8;
                  return this.C(t, e);
                case 8:
                  _context17.t1 = _context17.sent;
                  _context17.next = 14;
                  break;
                case 11:
                  _context17.next = 13;
                  return this.O(t, e);
                case 13:
                  _context17.t1 = _context17.sent;
                case 14:
                  _context17.t0 = _context17.t1;
                case 15:
                  return _context17.abrupt("return", _context17.t0);
                case 16:
                case "end":
                  return _context17.stop();
              }
            }
          }, _callee15, this);
        }));
        function L(_x22, _x23) {
          return _L.apply(this, arguments);
        }
        return L;
      }()
    }, {
      key: "O",
      value: function () {
        var _O = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(t, e) {
          var n, i, _s6, _r2, _o2;
          return _regeneratorRuntime().wrap(function _callee16$(_context18) {
            while (1) {
              switch (_context18.prev = _context18.next) {
                case 0:
                  i = e.params || {};
                  if (this._) {
                    _context18.next = 3;
                    break;
                  }
                  throw new s("missing-precache-entry", {
                    cacheName: this.cacheName,
                    url: t.url
                  });
                case 3:
                  _s6 = i.integrity, _r2 = t.integrity, _o2 = !_r2 || _r2 === _s6;
                  _context18.next = 6;
                  return e.fetch(new Request(t, {
                    integrity: "no-cors" !== t.mode ? _r2 || _s6 : void 0
                  }));
                case 6:
                  n = _context18.sent;
                  _context18.t0 = _s6 && _o2 && "no-cors" !== t.mode;
                  if (!_context18.t0) {
                    _context18.next = 12;
                    break;
                  }
                  this.N();
                  _context18.next = 12;
                  return e.cachePut(t, n.clone());
                case 12:
                  return _context18.abrupt("return", n);
                case 13:
                case "end":
                  return _context18.stop();
              }
            }
          }, _callee16, this);
        }));
        function O(_x24, _x25) {
          return _O.apply(this, arguments);
        }
        return O;
      }()
    }, {
      key: "C",
      value: function () {
        var _C = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(t, e) {
          var n;
          return _regeneratorRuntime().wrap(function _callee17$(_context19) {
            while (1) {
              switch (_context19.prev = _context19.next) {
                case 0:
                  this.N();
                  _context19.next = 3;
                  return e.fetch(t);
                case 3:
                  n = _context19.sent;
                  _context19.next = 6;
                  return e.cachePut(t, n.clone());
                case 6:
                  if (_context19.sent) {
                    _context19.next = 8;
                    break;
                  }
                  throw new s("bad-precaching-response", {
                    url: t.url,
                    status: n.status
                  });
                case 8:
                  return _context19.abrupt("return", n);
                case 9:
                case "end":
                  return _context19.stop();
              }
            }
          }, _callee17, this);
        }));
        function C(_x26, _x27) {
          return _C.apply(this, arguments);
        }
        return C;
      }()
    }, {
      key: "N",
      value: function N() {
        var t = null,
          e = 0;
        var _iterator15 = _createForOfIteratorHelper(this.plugins.entries()),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _step15$value = _slicedToArray(_step15.value, 2),
              _s7 = _step15$value[0],
              n = _step15$value[1];
            n !== L.copyRedirectedCacheableResponsesPlugin && (n === L.defaultPrecacheCacheabilityPlugin && (t = _s7), n.cacheWillUpdate && e++);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        0 === e ? this.plugins.push(L.defaultPrecacheCacheabilityPlugin) : e > 1 && null !== t && this.plugins.splice(t, 1);
      }
    }]);
    return L;
  }( /*#__PURE__*/function () {
    function _class() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, _class);
      this.cacheName = c(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions;
    }
    _createClass(_class, [{
      key: "handle",
      value: function handle(t) {
        var _this$handleAll = this.handleAll(t),
          _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
          e = _this$handleAll2[0];
        return e;
      }
    }, {
      key: "handleAll",
      value: function handleAll(t) {
        t instanceof FetchEvent && (t = {
          event: t,
          request: t.request
        });
        var e = t.event,
          s = "string" == typeof t.request ? new Request(t.request) : t.request,
          n = "params" in t ? t.params : void 0,
          i = new b(this, {
            event: e,
            request: s,
            params: n
          }),
          r = this.q(i, s, e);
        return [r, this.U(r, i, s, e)];
      }
    }, {
      key: "q",
      value: function () {
        var _q = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(t, e, n) {
          var i, _iterator16, _step16, _r3, _iterator17, _step17, _s8;
          return _regeneratorRuntime().wrap(function _callee18$(_context20) {
            while (1) {
              switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return t.runCallbacks("handlerWillStart", {
                    event: n,
                    request: e
                  });
                case 2:
                  _context20.prev = 2;
                  _context20.next = 5;
                  return this.L(e, t);
                case 5:
                  i = _context20.sent;
                  if (!(!i || "error" === i.type)) {
                    _context20.next = 8;
                    break;
                  }
                  throw new s("no-response", {
                    url: e.url
                  });
                case 8:
                  _context20.next = 35;
                  break;
                case 10:
                  _context20.prev = 10;
                  _context20.t0 = _context20["catch"](2);
                  if (!(_context20.t0 instanceof Error)) {
                    _context20.next = 33;
                    break;
                  }
                  _iterator16 = _createForOfIteratorHelper(t.iterateCallbacks("handlerDidError"));
                  _context20.prev = 14;
                  _iterator16.s();
                case 16:
                  if ((_step16 = _iterator16.n()).done) {
                    _context20.next = 25;
                    break;
                  }
                  _r3 = _step16.value;
                  _context20.next = 20;
                  return _r3({
                    error: _context20.t0,
                    event: n,
                    request: e
                  });
                case 20:
                  i = _context20.sent;
                  if (!i) {
                    _context20.next = 23;
                    break;
                  }
                  return _context20.abrupt("break", 25);
                case 23:
                  _context20.next = 16;
                  break;
                case 25:
                  _context20.next = 30;
                  break;
                case 27:
                  _context20.prev = 27;
                  _context20.t1 = _context20["catch"](14);
                  _iterator16.e(_context20.t1);
                case 30:
                  _context20.prev = 30;
                  _iterator16.f();
                  return _context20.finish(30);
                case 33:
                  if (i) {
                    _context20.next = 35;
                    break;
                  }
                  throw _context20.t0;
                case 35:
                  _iterator17 = _createForOfIteratorHelper(t.iterateCallbacks("handlerWillRespond"));
                  _context20.prev = 36;
                  _iterator17.s();
                case 38:
                  if ((_step17 = _iterator17.n()).done) {
                    _context20.next = 45;
                    break;
                  }
                  _s8 = _step17.value;
                  _context20.next = 42;
                  return _s8({
                    event: n,
                    request: e,
                    response: i
                  });
                case 42:
                  i = _context20.sent;
                case 43:
                  _context20.next = 38;
                  break;
                case 45:
                  _context20.next = 50;
                  break;
                case 47:
                  _context20.prev = 47;
                  _context20.t2 = _context20["catch"](36);
                  _iterator17.e(_context20.t2);
                case 50:
                  _context20.prev = 50;
                  _iterator17.f();
                  return _context20.finish(50);
                case 53:
                  return _context20.abrupt("return", i);
                case 54:
                case "end":
                  return _context20.stop();
              }
            }
          }, _callee18, this, [[2, 10], [14, 27, 30, 33], [36, 47, 50, 53]]);
        }));
        function q(_x28, _x29, _x30) {
          return _q.apply(this, arguments);
        }
        return q;
      }()
    }, {
      key: "U",
      value: function () {
        var _U = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(t, e, s, n) {
          var i, r;
          return _regeneratorRuntime().wrap(function _callee19$(_context21) {
            while (1) {
              switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.prev = 0;
                  _context21.next = 3;
                  return t;
                case 3:
                  i = _context21.sent;
                  _context21.next = 8;
                  break;
                case 6:
                  _context21.prev = 6;
                  _context21.t0 = _context21["catch"](0);
                case 8:
                  _context21.prev = 8;
                  _context21.next = 11;
                  return e.runCallbacks("handlerDidRespond", {
                    event: n,
                    request: s,
                    response: i
                  });
                case 11:
                  _context21.next = 13;
                  return e.doneWaiting();
                case 13:
                  _context21.next = 18;
                  break;
                case 15:
                  _context21.prev = 15;
                  _context21.t1 = _context21["catch"](8);
                  _context21.t1 instanceof Error && (r = _context21.t1);
                case 18:
                  _context21.next = 20;
                  return e.runCallbacks("handlerDidComplete", {
                    event: n,
                    request: s,
                    response: i,
                    error: r
                  });
                case 20:
                  e.destroy();
                  if (!r) {
                    _context21.next = 23;
                    break;
                  }
                  throw r;
                case 23:
                case "end":
                  return _context21.stop();
              }
            }
          }, _callee19, null, [[0, 6], [8, 15]]);
        }));
        function U(_x31, _x32, _x33, _x34) {
          return _U.apply(this, arguments);
        }
        return U;
      }()
    }]);
    return _class;
  }());
  L.defaultPrecacheCacheabilityPlugin = {
    cacheWillUpdate: function () {
      var _cacheWillUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_ref16) {
        var t;
        return _regeneratorRuntime().wrap(function _callee20$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                t = _ref16.response;
                return _context22.abrupt("return", !t || t.status >= 400 ? null : t);
              case 2:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee20);
      }));
      function cacheWillUpdate(_x35) {
        return _cacheWillUpdate.apply(this, arguments);
      }
      return cacheWillUpdate;
    }()
  }, L.copyRedirectedCacheableResponsesPlugin = {
    cacheWillUpdate: function () {
      var _cacheWillUpdate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(_ref17) {
        var t;
        return _regeneratorRuntime().wrap(function _callee21$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                t = _ref17.response;
                if (!t.redirected) {
                  _context23.next = 7;
                  break;
                }
                _context23.next = 4;
                return R(t);
              case 4:
                _context23.t0 = _context23.sent;
                _context23.next = 8;
                break;
              case 7:
                _context23.t0 = t;
              case 8:
                return _context23.abrupt("return", _context23.t0);
              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee21);
      }));
      function cacheWillUpdate(_x36) {
        return _cacheWillUpdate2.apply(this, arguments);
      }
      return cacheWillUpdate;
    }()
  };
  var C = /*#__PURE__*/function () {
    function C() {
      var _ref18 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        t = _ref18.cacheName,
        _ref18$plugins = _ref18.plugins,
        e = _ref18$plugins === void 0 ? [] : _ref18$plugins,
        _ref18$fallbackToNetw = _ref18.fallbackToNetwork,
        s = _ref18$fallbackToNetw === void 0 ? !0 : _ref18$fallbackToNetw;
      _classCallCheck(this, C);
      this.j = new Map(), this.k = new Map(), this.K = new Map(), this.l = new L({
        cacheName: o(t),
        plugins: [].concat(_toConsumableArray(e), [new y({
          precacheController: this
        })]),
        fallbackToNetwork: s
      }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
    }
    _createClass(C, [{
      key: "strategy",
      get: function get() {
        return this.l;
      }
    }, {
      key: "precache",
      value: function precache(t) {
        this.addToCacheList(t), this.T || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this.T = !0);
      }
    }, {
      key: "addToCacheList",
      value: function addToCacheList(t) {
        var e = [];
        var _iterator18 = _createForOfIteratorHelper(t),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var n = _step18.value;
            "string" == typeof n ? e.push(n) : n && void 0 === n.revision && e.push(n.url);
            var _d2 = d(n),
              _t13 = _d2.cacheKey,
              i = _d2.url,
              r = "string" != typeof n && n.revision ? "reload" : "default";
            if (this.j.has(i) && this.j.get(i) !== _t13) throw new s("add-to-cache-list-conflicting-entries", {
              firstEntry: this.j.get(i),
              secondEntry: _t13
            });
            if ("string" != typeof n && n.integrity) {
              if (this.K.has(_t13) && this.K.get(_t13) !== n.integrity) throw new s("add-to-cache-list-conflicting-integrities", {
                url: i
              });
              this.K.set(_t13, n.integrity);
            }
            if (this.j.set(i, _t13), this.k.set(i, r), e.length > 0) {
              var _t14 = "Workbox is precaching URLs without revision info: ".concat(e.join(", "), "\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache");
              console.warn(_t14);
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
    }, {
      key: "install",
      value: function install(t) {
        var _this10 = this;
        return w(t, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
          var e, _iterator19, _step19, _step19$value, _e6, _s9, _n3, i, r, s, n;
          return _regeneratorRuntime().wrap(function _callee22$(_context24) {
            while (1) {
              switch (_context24.prev = _context24.next) {
                case 0:
                  e = new p();
                  _this10.strategy.plugins.push(e);
                  _iterator19 = _createForOfIteratorHelper(_this10.j);
                  _context24.prev = 3;
                  _iterator19.s();
                case 5:
                  if ((_step19 = _iterator19.n()).done) {
                    _context24.next = 12;
                    break;
                  }
                  _step19$value = _slicedToArray(_step19.value, 2), _e6 = _step19$value[0], _s9 = _step19$value[1];
                  _n3 = _this10.K.get(_s9), i = _this10.k.get(_e6), r = new Request(_e6, {
                    integrity: _n3,
                    cache: i,
                    credentials: "same-origin"
                  });
                  _context24.next = 10;
                  return Promise.all(_this10.strategy.handleAll({
                    params: {
                      cacheKey: _s9
                    },
                    request: r,
                    event: t
                  }));
                case 10:
                  _context24.next = 5;
                  break;
                case 12:
                  _context24.next = 17;
                  break;
                case 14:
                  _context24.prev = 14;
                  _context24.t0 = _context24["catch"](3);
                  _iterator19.e(_context24.t0);
                case 17:
                  _context24.prev = 17;
                  _iterator19.f();
                  return _context24.finish(17);
                case 20:
                  s = e.updatedURLs, n = e.notUpdatedURLs;
                  return _context24.abrupt("return", {
                    updatedURLs: s,
                    notUpdatedURLs: n
                  });
                case 22:
                case "end":
                  return _context24.stop();
              }
            }
          }, _callee22, null, [[3, 14, 17, 20]]);
        })));
      }
    }, {
      key: "activate",
      value: function activate(t) {
        var _this11 = this;
        return w(t, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
          var t, e, s, n, _iterator20, _step20, i;
          return _regeneratorRuntime().wrap(function _callee23$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return self.caches.open(_this11.strategy.cacheName);
                case 2:
                  t = _context25.sent;
                  _context25.next = 5;
                  return t.keys();
                case 5:
                  e = _context25.sent;
                  s = new Set(_this11.j.values());
                  n = [];
                  _iterator20 = _createForOfIteratorHelper(e);
                  _context25.prev = 9;
                  _iterator20.s();
                case 11:
                  if ((_step20 = _iterator20.n()).done) {
                    _context25.next = 20;
                    break;
                  }
                  i = _step20.value;
                  _context25.t0 = s.has(i.url);
                  if (_context25.t0) {
                    _context25.next = 18;
                    break;
                  }
                  _context25.next = 17;
                  return t["delete"](i);
                case 17:
                  n.push(i.url);
                case 18:
                  _context25.next = 11;
                  break;
                case 20:
                  _context25.next = 25;
                  break;
                case 22:
                  _context25.prev = 22;
                  _context25.t1 = _context25["catch"](9);
                  _iterator20.e(_context25.t1);
                case 25:
                  _context25.prev = 25;
                  _iterator20.f();
                  return _context25.finish(25);
                case 28:
                  return _context25.abrupt("return", {
                    deletedURLs: n
                  });
                case 29:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee23, null, [[9, 22, 25, 28]]);
        })));
      }
    }, {
      key: "getURLsToCacheKeys",
      value: function getURLsToCacheKeys() {
        return this.j;
      }
    }, {
      key: "getCachedURLs",
      value: function getCachedURLs() {
        return _toConsumableArray(this.j.keys());
      }
    }, {
      key: "getCacheKeyForURL",
      value: function getCacheKeyForURL(t) {
        var e = new URL(t, location.href);
        return this.j.get(e.href);
      }
    }, {
      key: "getIntegrityForCacheKey",
      value: function getIntegrityForCacheKey(t) {
        return this.K.get(t);
      }
    }, {
      key: "matchPrecache",
      value: function () {
        var _matchPrecache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(t) {
          var e, s;
          return _regeneratorRuntime().wrap(function _callee24$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  e = t instanceof Request ? t.url : t, s = this.getCacheKeyForURL(e);
                  if (!s) {
                    _context26.next = 5;
                    break;
                  }
                  _context26.next = 4;
                  return self.caches.open(this.strategy.cacheName);
                case 4:
                  return _context26.abrupt("return", _context26.sent.match(s));
                case 5:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee24, this);
        }));
        function matchPrecache(_x37) {
          return _matchPrecache.apply(this, arguments);
        }
        return matchPrecache;
      }()
    }, {
      key: "createHandlerBoundToURL",
      value: function createHandlerBoundToURL(t) {
        var _this12 = this;
        var e = this.getCacheKeyForURL(t);
        if (!e) throw new s("non-precached-url", {
          url: t
        });
        return function (s) {
          return s.request = new Request(t), s.params = Object.assign({
            cacheKey: e
          }, s.params), _this12.strategy.handle(s);
        };
      }
    }]);
    return C;
  }();
  var E;
  var O = function O() {
    return E || (E = new C()), E;
  };
  var x = /*#__PURE__*/function (_h2) {
    _inherits(x, _h2);
    var _super4 = _createSuper(x);
    function x(t, e) {
      _classCallCheck(this, x);
      return _super4.call(this, function (_ref21) {
        var s = _ref21.request;
        var n = t.getURLsToCacheKeys();
        var _iterator21 = _createForOfIteratorHelper( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(t) {
            var _ref22,
              _ref22$ignoreURLParam,
              e,
              _ref22$directoryIndex,
              s,
              _ref22$cleanURLs,
              n,
              i,
              r,
              o,
              _t15,
              _t16,
              _t17,
              _iterator22,
              _step22,
              _e7,
              _args27 = arguments;
            return _regeneratorRuntime().wrap(function _callee25$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _ref22 = _args27.length > 1 && _args27[1] !== undefined ? _args27[1] : {}, _ref22$ignoreURLParam = _ref22.ignoreURLParametersMatching, e = _ref22$ignoreURLParam === void 0 ? [/^utm_/, /^fbclid$/] : _ref22$ignoreURLParam, _ref22$directoryIndex = _ref22.directoryIndex, s = _ref22$directoryIndex === void 0 ? "index.html" : _ref22$directoryIndex, _ref22$cleanURLs = _ref22.cleanURLs, n = _ref22$cleanURLs === void 0 ? !0 : _ref22$cleanURLs, i = _ref22.urlManipulation;
                    r = new URL(t, location.href);
                    r.hash = "";
                    _context27.next = 5;
                    return r.href;
                  case 5:
                    o = function (t) {
                      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
                      var _loop2 = function _loop2() {
                        var s = _arr2[_i3];
                        e.some(function (t) {
                          return t.test(s);
                        }) && t.searchParams["delete"](s);
                      };
                      for (var _i3 = 0, _arr2 = _toConsumableArray(t.searchParams.keys()); _i3 < _arr2.length; _i3++) {
                        _loop2();
                      }
                      return t;
                    }(r, e);
                    _context27.next = 8;
                    return o.href;
                  case 8:
                    if (!(s && o.pathname.endsWith("/"))) {
                      _context27.next = 13;
                      break;
                    }
                    _t15 = new URL(o.href);
                    _t15.pathname += s;
                    _context27.next = 13;
                    return _t15.href;
                  case 13:
                    if (!n) {
                      _context27.next = 18;
                      break;
                    }
                    _t16 = new URL(o.href);
                    _t16.pathname += ".html";
                    _context27.next = 18;
                    return _t16.href;
                  case 18:
                    if (!i) {
                      _context27.next = 37;
                      break;
                    }
                    _t17 = i({
                      url: r
                    });
                    _iterator22 = _createForOfIteratorHelper(_t17);
                    _context27.prev = 21;
                    _iterator22.s();
                  case 23:
                    if ((_step22 = _iterator22.n()).done) {
                      _context27.next = 29;
                      break;
                    }
                    _e7 = _step22.value;
                    _context27.next = 27;
                    return _e7.href;
                  case 27:
                    _context27.next = 23;
                    break;
                  case 29:
                    _context27.next = 34;
                    break;
                  case 31:
                    _context27.prev = 31;
                    _context27.t0 = _context27["catch"](21);
                    _iterator22.e(_context27.t0);
                  case 34:
                    _context27.prev = 34;
                    _iterator22.f();
                    return _context27.finish(34);
                  case 37:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee25, null, [[21, 31, 34, 37]]);
          })(s.url, e)),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var i = _step21.value;
            var _e8 = n.get(i);
            if (_e8) {
              return {
                cacheKey: _e8,
                integrity: t.getIntegrityForCacheKey(_e8)
              };
            }
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }, t.strategy);
    }
    return _createClass(x);
  }(h);
  function N(t) {
    var e = O();
    !function (t, e, n) {
      var i;
      if ("string" == typeof t) {
        var _s10 = new URL(t, location.href);
        i = new h(function (_ref23) {
          var t = _ref23.url;
          return t.href === _s10.href;
        }, e, n);
      } else if (t instanceof RegExp) i = new u(t, e, n);else if ("function" == typeof t) i = new h(t, e, n);else {
        if (!(t instanceof h)) throw new s("unsupported-route-type", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
        i = t;
      }
      (f || (f = new l(), f.addFetchListener(), f.addCacheListener()), f).registerRoute(i);
    }(new x(e, t));
  }
  t.precacheAndRoute = function (t, e) {
    !function (t) {
      O().precache(t);
    }(t), N(e);
  }, t.setCacheNameDetails = function (t) {
    r(t);
  };
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(function () {
  "use strict";

  var e = {
      4108: function _(e, t, a) {
        var r = a(144),
          o = function o() {
            var e = this,
              t = e._self._c;
            return t("div", [t("router-view")], 1);
          },
          n = [],
          s = a(629),
          i = a(4562),
          c = a(7394),
          l = a(4324),
          u = function u() {
            var e = this,
              t = e._self._c;
            return t("div", {
              staticStyle: {
                position: "relative"
              }
            }, [t(c.b0, [t(i.Z, {
              staticClass: "transition-swing v-btn--right v-btn v-btn--bottom v-btn--is-elevated v-btn--fab v-btn--fixed v-btn--has-bg v-btn--round v-size--large",
              attrs: {
                dark: "",
                color: "pink"
              },
              on: {
                click: e.sair
              }
            }, [t(l.Z, [e._v(" mdi-exit-to-app ")])], 1)], 1)], 1);
          },
          d = [],
          m = (a(7658), a(9669)),
          p = a.n(m);
        var h = p().create({
          baseURL: "".concat(location.origin, "/api"),
          headers: {
            authorization: localStorage.getItem("userToken")
          }
        });
        r.ZP.prototype.$http = h;
        var g = h;
        var f = "userToken";
        var v = {
          isUserLoggedIn: function isUserLoggedIn() {
            return !y();
          },
          setData: function setData(e, t) {
            localStorage.setItem(f, t), g.defaults.headers = {
              authorization: localStorage.getItem("userToken")
            };
          },
          clearData: function clearData() {
            return localStorage.clear(f);
          },
          getUserToken: function getUserToken() {
            return localStorage.getItem(f);
          }
        };
        function y() {
          var e = localStorage.getItem(f) || null;
          return !e;
        }
        var b = v.setData,
          _ = v.clearData,
          w = v.isUserLoggedIn;
        var Z = {
            data: function data() {
              return {
                show: !0,
                lock: !1
              };
            },
            methods: {
              sair: function sair() {
                _(), this.$router.push({
                  name: "entrada"
                });
              }
            },
            watch: {}
          },
          O = Z,
          C = a(1001),
          I = (0, C.Z)(O, u, d, !1, null, null, null),
          k = I.exports,
          x = a(626),
          A = a(762),
          M = function M() {
            var e = this,
              t = e._self._c;
            return t(A.Z, {
              attrs: {
                centered: "",
                color: "white",
                "slider-color": "white"
              },
              model: {
                value: e.route,
                callback: function callback(t) {
                  e.route = t;
                },
                expression: "route"
              }
            }, e._l(e.BottomRoute, function (_ref) {
              var a = _ref.icon,
                r = _ref.name;
              return t(x.Z, {
                key: r,
                attrs: {
                  color: "primary",
                  to: {
                    name: r
                  }
                }
              }, [t(l.Z, [e._v(" " + e._s(a) + " ")])], 1);
            }), 1);
          },
          D = [],
          T = JSON.parse('[{"label":"Inicio","icon":"mdi-home","name":"home"},{"label":"Carregamento","icon":"mdi-upload","name":"carregamento"},{"label":"Remoto","icon":"mdi-folder","name":"remoto"},{"label":"Histórico","icon":"mdi-history","name":"historico"}]'),
          S = {
            name: "App",
            data: function data() {
              return {
                BottomRoute: T,
                route: 0,
                absolute: !0,
                grow: !0,
                horizontal: !0
              };
            }
          },
          P = S,
          L = (0, C.Z)(P, M, D, !1, null, null, null),
          N = L.exports,
          q = {
            name: "App",
            components: {
              BottomNav: N,
              SpeedDial: k
            },
            data: function data() {
              return {
                title: document.title
              };
            },
            computed: _objectSpread({}, (0, s.Se)({
              progresso: "carregamento/progresso_total",
              loading: "carregamento/loading_state"
            })),
            mounted: function mounted() {},
            beforeCreate: function beforeCreate() {}
          },
          U = q,
          E = (0, C.Z)(U, o, n, !1, null, null, null),
          B = E.exports,
          R = a(5205);
        (0, R.z)("/service-worker.js", {
          ready: function ready() {
            console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB");
          },
          registered: function registered() {
            console.log("Service worker has been registered.");
          },
          cached: function cached() {
            console.log("Content has been cached for offline use.");
          },
          updatefound: function updatefound() {
            console.log("New content is downloading.");
          },
          updated: function updated() {
            console.log("New content is available; please refresh.");
          },
          offline: function offline() {
            console.log("No internet connection found. App is running in offline mode.");
          },
          error: function error(e) {
            console.error("Error during service worker registration:", e);
          }
        });
        var j = a(8345),
          $ = a(9582),
          G = a(266),
          z = a(2118),
          F = a(1713),
          H = function H() {
            var e = this,
              t = e._self._c;
            return t(z.Z, [t(F.Z, {
              attrs: {
                "g-5": ""
              }
            }, [t(G.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t("div", {
              staticClass: "ma-4 text-center"
            }, [t("p", {
              staticClass: "text-h6"
            }, [t(l.Z, [e._v("mdi-calendar")]), e._v(" " + e._s(e.calendario_em_pt) + " ")], 1), t("p", {
              staticClass: "font-weight-medium"
            }, [e._v(" " + e._s(e.dica) + " ")])])]), t(G.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t($.Z, {
              staticClass: "pa-2",
              attrs: {
                outlined: "",
                tile: ""
              }
            }, [e._v(" Inovações ")])], 1), t(G.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t($.Z, {
              staticClass: "pa-2",
              attrs: {
                outlined: "",
                tile: ""
              }
            }, [e._v(" Lançamentos ")])], 1), t(G.Z, {
              attrs: {
                cols: "12",
                sm: "12"
              }
            }, [t($.Z, {
              staticClass: "pa-2",
              attrs: {
                outlined: "",
                tile: ""
              }
            }, [e._v(" Link úteis ")])], 1)], 1)], 1);
          },
          Y = [],
          J = {
            name: "Home",
            components: {},
            data: function data() {
              return {};
            },
            computed: _objectSpread({}, (0, s.Se)({
              calendario_em_pt: "home/calendarioEmPortugues",
              dica: "home/dicaDoDia"
            })),
            methods: _objectSpread({}, (0, s.nv)({
              data: "home/getDateFromServer"
            })),
            beforeMount: function beforeMount() {
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
            }
          },
          Q = J,
          V = (0, C.Z)(Q, H, Y, !1, null, null, null),
          K = V.exports,
          W = a(4886),
          X = a(4127),
          ee = a(1625),
          te = a(5495),
          ae = function ae() {
            var e = this,
              t = e._self._c;
            return t(z.Z, [t("form", {
              staticClass: "mt-2 d-flex justify-center",
              attrs: {
                enctype: "multipart/form-data"
              },
              on: {
                submit: function submit(t) {
                  return t.preventDefault(), e.carregar.apply(null, arguments);
                }
              }
            }, [t($.Z, {
              attrs: {
                width: "700"
              }
            }, [t(te.Z, {
              staticClass: "white--text align-end",
              attrs: {
                height: "300",
                gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)",
                "lazy-src": a(7890),
                src: a(7890)
              }
            }, [t(W.EB, {
              staticClass: "display-1"
            }, [e._v(" " + e._s("Carregar arquivo") + " ")])], 1), t(W.ZB, [t(ee.Z, {
              attrs: {
                color: "primary",
                counter: "",
                multiple: "",
                required: "",
                rules: [function (e) {
                  return !!e || "campo vazio";
                }],
                placeholder: "Selecione o arquivo",
                "prepend-icon": "mdi-paperclip",
                outlined: "",
                loading: e.loading,
                disabled: e.loading,
                "show-size": 1e3
              },
              on: {
                change: e.prepararArquivos
              },
              scopedSlots: e._u([{
                key: "selection",
                fn: function fn(_ref2) {
                  var a = _ref2.index,
                    r = _ref2.text;
                  return [a < 2 ? t(X.Z, {
                    attrs: {
                      color: "primary",
                      dark: "",
                      label: "",
                      small: ""
                    }
                  }, [e._v(" " + e._s(r) + " ")]) : e._e()];
                }
              }]),
              model: {
                value: e.files,
                callback: function callback(t) {
                  e.files = t;
                },
                expression: "files"
              }
            })], 1), t(W.h7, [t(i.Z, {
              attrs: {
                loading: e.loading,
                disabled: e.loading,
                type: "submit",
                block: "",
                color: "primary",
                dark: ""
              }
            }, [e._v("Carregar "), t(l.Z, {
              attrs: {
                right: ""
              }
            }, [e._v(" mdi-cloud-upload ")])], 1)], 1)], 1)], 1)]);
          },
          re = [],
          oe = {
            data: function data() {
              return {
                files: [],
                n: {
                  snackbar: !1,
                  msg: "preparado para carregar arquivo"
                }
              };
            },
            computed: _objectSpread({}, (0, s.Se)({
              loading: "carregamento/loading_state",
              selected: "carregamento/arquivosGetter"
            })),
            methods: _objectSpread(_objectSpread({}, (0, s.nv)({
              mandarPreparar: "carregamento/prepararArquivos",
              carregarBackend: "carregamento/tentarCarregar",
              call: "assets/notificate"
            })), {}, {
              prepararArquivos: function prepararArquivos(e) {
                var _this = this;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var _t;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.prev = 0;
                          _context2.next = 3;
                          return _this.mandarPreparar(e);
                        case 3:
                          _t = _context2.sent;
                          _this.n.msg = _t, _this.call({
                            text: _t
                          });
                          _context2.next = 10;
                          break;
                        case 7:
                          _context2.prev = 7;
                          _context2.t0 = _context2["catch"](0);
                          _this.call({
                            text: _context2.t0,
                            color: "#e14343"
                          });
                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[0, 7]]);
                }))();
              },
              carregar: function carregar() {
                var _this2 = this;
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  var _e2;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.prev = 0;
                          _context3.next = 3;
                          return _this2.carregarBackend();
                        case 3:
                          _e2 = _context3.sent;
                          _this2.call({
                            text: _e2
                          });
                          _context3.next = 10;
                          break;
                        case 7:
                          _context3.prev = 7;
                          _context3.t0 = _context3["catch"](0);
                          _this2.call({
                            text: _context3.t0,
                            color: "#e14343"
                          });
                        case 10:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[0, 7]]);
                }))();
              }
            }),
            watch: {
              files: {
                handler: function handler(e) {},
                immediate: !1
              }
            },
            mounted: function mounted() {}
          },
          ne = oe,
          se = (0, C.Z)(ne, ae, re, !1, null, null, null),
          ie = se.exports,
          ce = function ce() {
            var e = this,
              t = e._self._c;
            return t(z.Z);
          },
          le = [],
          ue = {},
          de = ue,
          me = (0, C.Z)(de, ce, le, !1, null, null, null),
          pe = me.exports,
          he = function he() {
            var e = this,
              t = e._self._c;
            return t("div", [t(A.Z, {
              attrs: {
                centered: ""
              },
              model: {
                value: e.tab,
                callback: function callback(t) {
                  e.tab = t;
                },
                expression: "tab"
              }
            }, e._l(e.tabs, function (_ref3, o) {
              var a = _ref3.name,
                r = _ref3.label;
              return t(x.Z, {
                key: r + " " + o,
                attrs: {
                  to: {
                    name: a
                  }
                }
              }, [e._v(" " + e._s(r) + " ")]);
            }), 1), t(z.Z, [t("router-view")], 1)], 1);
          },
          ge = [],
          fe = {
            data: function data() {
              return {
                tab: 1,
                tabs: [{
                  label: "acesso",
                  name: "acesso"
                }, {
                  label: "carregamento",
                  name: "carregamentos"
                }, {
                  label: "descarregamento",
                  name: "descarregados"
                }]
              };
            },
            watch: {
              "$route.name": {
                handler: function handler(e) {
                  "historico" == e && this.$router.push({
                    name: this.tabs[0].name
                  });
                },
                immediate: !0
              }
            }
          },
          ve = fe,
          ye = (0, C.Z)(ve, he, ge, !1, null, null, null),
          be = ye.exports,
          _e = a(998),
          we = a(6843),
          Ze = a(8271),
          Oe = a(3059),
          Ce = a(3305),
          Ie = a(3687),
          ke = a(9884),
          xe = function xe() {
            var e = this,
              t = e._self._c;
            return t(_e.Z, [t(we.Z, {
              attrs: {
                app: "",
                color: "primary",
                dark: ""
              },
              scopedSlots: e._u([{
                key: "extension",
                fn: function fn() {
                  return [t("BottomNav")];
                },
                proxy: !0
              }])
            }, [t("div", {
              staticClass: "d-flex align-center text-h5"
            }, [e._v(" " + e._s(e.title) + " ")]), t(Ie.Z), t(c.Fx, [t($.Z, {
              directives: [{
                name: "show",
                rawName: "v-show",
                value: e.panel,
                expression: "panel"
              }],
              staticClass: "mx-auto transparent",
              attrs: {
                outlined: "",
                transparent: "",
                color: "transparent"
              }
            }, [t("span", [t(Ce.Z, {
              attrs: {
                rotate: 360,
                size: 45,
                width: 3,
                value: e.progresso,
                color: "secondary"
              }
            }, [t("span", {
              staticClass: "white--text py-4"
            }, [e._v(" " + e._s(e.progresso) + "% ")])])], 1)])], 1), t(Ie.Z), t(ke.Z, {
              attrs: {
                inset: "",
                color: "gray"
              },
              model: {
                value: e.$vuetify.theme.dark,
                callback: function callback(t) {
                  e.$set(e.$vuetify.theme, "dark", t);
                },
                expression: "$vuetify.theme.dark"
              }
            })], 1), t(Oe.Z, [t("router-view")], 1), t("SpeedDial"), t(Ze.Z, {
              attrs: {
                dark: "",
                dense: "",
                padless: "",
                app: ""
              }
            }, [t($.Z, {
              staticClass: "flex",
              attrs: {
                flat: "",
                tile: ""
              }
            }, [t(W.ZB, {
              staticClass: "py-0 white--text text-center"
            }, [e._v(" " + e._s(new Date().getFullYear()) + " — "), t("strong", [e._v("Todos os direitos reservado")])])], 1)], 1)], 1);
          },
          Ae = [];
        var Me = v.setData,
          De = v.clearData,
          Te = v.isUserLoggedIn;
        var Se = _defineProperty({
            name: "App",
            components: {
              BottomNav: N,
              SpeedDial: k
            },
            data: function data() {
              return {
                title: document.title
              };
            },
            computed: _objectSpread({}, (0, s.Se)({
              progresso: "carregamento/progresso_total",
              panel: "carregamento/panel",
              loading: "carregamento/loading_state"
            })),
            watch: {
              "$route.name": {
                handler: function handler(e) {
                  var _this3 = this;
                  return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return g.get("/auth/usuario/checkToken");
                          case 3:
                            _context4.sent.data;
                            _context4.next = 9;
                            break;
                          case 6:
                            _context4.prev = 6;
                            _context4.t0 = _context4["catch"](0);
                            _this3.call({
                              text: "A sua sessão expirou"
                            }), _this3.$router.push({
                              name: "entrada"
                            }), De();
                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[0, 6]]);
                  }))();
                },
                immediate: !0
              }
            },
            methods: _objectSpread({}, (0, s.nv)({
              call: "assets/notificate"
            })),
            mounted: function mounted() {
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }))();
            }
          }, "mounted", function mounted() {}),
          Pe = Se,
          Le = (0, C.Z)(Pe, xe, Ae, !1, null, null, null),
          Ne = Le.exports,
          qe = function qe() {
            var e = this,
              t = e._self._c;
            return t(_e.Z, [t(te.Z, {
              attrs: {
                src: a(9629),
                height: "100%",
                "lazy-src": a(9629)
              }
            }, [t(Oe.Z, [t("router-view")], 1)], 1), t(Ze.Z, {
              attrs: {
                dark: "",
                dense: "",
                padless: "",
                app: ""
              }
            }, [t($.Z, {
              staticClass: "flex",
              attrs: {
                flat: "",
                tile: ""
              }
            }, [t(W.ZB, {
              staticClass: "py-0 white--text text-center"
            }, [e._v(" " + e._s(new Date().getFullYear()) + " — "), t("strong", [e._v("Todos os direitos reservado")])])], 1)], 1)], 1);
          },
          Ue = [];
        var Ee = v.setData,
          Be = v.clearData,
          Re = v.isUserLoggedIn;
        var je = {
            data: function data() {
              return {};
            },
            watch: {
              "$route.name": {
                handler: function handler(e) {
                  Re() && this.$router.push({
                    name: "home"
                  });
                },
                immediate: !0
              }
            },
            methods: {},
            mounted: function mounted() {}
          },
          $e = je,
          Ge = (0, C.Z)($e, qe, Ue, !1, null, null, null),
          ze = Ge.exports;
        var Fe = v.setData,
          He = v.clearData,
          Ye = v.isUserLoggedIn;
        r.ZP.use(j.ZP);
        var Je = [{
            path: "/auth",
            component: ze,
            children: [{
              path: "cadastro",
              name: "cadastro",
              meta: {
                requiresAuth: !1
              },
              component: function component() {
                return a.e(135).then(a.bind(a, 135));
              }
            }, {
              path: "entrada",
              name: "entrada",
              meta: {
                requiresAuth: !1
              },
              component: function component() {
                return a.e(261).then(a.bind(a, 3261));
              }
            }]
          }, {
            path: "/",
            redirect: "/home",
            component: Ne,
            children: [{
              path: "/home",
              name: "home",
              meta: {
                requiresAuth: !0
              },
              component: K
            }, {
              path: "/carregamento",
              name: "carregamento",
              meta: {
                requiresAuth: !0
              },
              component: ie
            }, {
              path: "/historico",
              name: "historico",
              meta: {
                requiresAuth: !0
              },
              component: be,
              children: [{
                path: "carregamento",
                name: "carregamentos",
                meta: {
                  requiresAuth: !0
                },
                component: function component() {
                  return a.e(389).then(a.bind(a, 3389));
                }
              }, {
                path: "acesso",
                name: "acesso",
                meta: {
                  requiresAuth: !0
                },
                component: function component() {
                  return a.e(786).then(a.bind(a, 6786));
                }
              }, {
                path: "descarregados",
                name: "descarregados",
                meta: {
                  requiresAuth: !0
                },
                component: function component() {
                  return a.e(6).then(a.bind(a, 6));
                }
              }]
            }, {
              path: "/remoteFileTransfer",
              name: "remoto",
              meta: {
                requiresAuth: !0
              },
              component: pe
            }]
          }],
          Qe = new j.ZP({
            mode: "history",
            base: "/",
            routes: Je
          });
        Qe.beforeEach(function (e, t, a) {
          var r = e.matched.some(function (e) {
            return e.meta.requiresAuth;
          });
          r ? Ye() ? a() : a({
            name: "entrada"
          }) : a();
        });
        var Ve = Qe;
        var Ke = v.setData,
          We = v.clearData,
          Xe = v.isUserLoggedIn;
        var et = {
            namespaced: !0,
            state: {
              arquivos: [],
              loading: !1,
              progress_panel: !1,
              progresso: 0,
              history: []
            },
            getters: {
              todo: function todo(_ref4) {
                var e = _ref4.history;
                return e;
              },
              panel: function panel(e) {
                return e.progress_panel;
              },
              loading_state: function loading_state(e) {
                return e.loading;
              },
              progresso_total: function progresso_total(e) {
                return e.progresso;
              },
              arquivosGetter: function arquivosGetter(_ref5) {
                var e = _ref5.arquivos;
                return e;
              }
            },
            mutations: {
              COMMIT_UPLOAD_HISTORY: function COMMIT_UPLOAD_HISTORY(e, t) {
                e.history = t;
              },
              COMMIT_PROGRESSO: function COMMIT_PROGRESSO(e, t) {
                e.progresso = t;
              },
              COMMIT_PANEL: function COMMIT_PANEL(e, t) {
                e.progress_panel = t;
              },
              COMMIT_LOADING: function COMMIT_LOADING(e, t) {
                e.loading = t;
              },
              COMMIT_ARQUIVOS: function COMMIT_ARQUIVOS(e, t) {
                e.arquivos = t;
              }
            },
            actions: {
              deleteUploadHistory: function deleteUploadHistory(_ref6, r) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  var e, t, a;
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          e = _ref6.commit, t = _ref6.dispatch, a = _ref6.state;
                          return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
                            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(a, o) {
                              var _o;
                              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.prev = 0;
                                      e("COMMIT_LOADING", !0);
                                      _context6.next = 4;
                                      return g["delete"]("/carregamento", {
                                        params: r
                                      });
                                    case 4:
                                      _o = _context6.sent.data;
                                      console.log(_o);
                                      _context6.next = 8;
                                      return t("getUploadHistoryByIdUsuario");
                                    case 8:
                                      a(_o);
                                      e("COMMIT_LOADING", !1);
                                      _context6.next = 15;
                                      break;
                                    case 12:
                                      _context6.prev = 12;
                                      _context6.t0 = _context6["catch"](0);
                                      e("COMMIT_LOADING", !1), o(_context6.t0);
                                    case 15:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6, null, [[0, 12]]);
                            }));
                            return function (_x, _x2) {
                              return _ref7.apply(this, arguments);
                            };
                          }()));
                        case 2:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }))();
              },
              downloadFileUploaded: function downloadFileUploaded(_ref8, r) {
                var e = _ref8.commit,
                  t = _ref8.dispatch,
                  a = _ref8.state;
                return new Promise( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(t, a) {
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            try {
                              e("COMMIT_PROGRESSO", 0), e("COMMIT_LOADING", !0), window.open("".concat(g.getUri(), "/carregamento/download?caminho=").concat(r.caminho)), t(r), e("COMMIT_LOADING", !1);
                            } catch (o) {
                              e("COMMIT_LOADING", !1), a(o);
                            }
                          case 1:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));
                  return function (_x3, _x4) {
                    return _ref9.apply(this, arguments);
                  };
                }());
              },
              prepararArquivos: function prepararArquivos(_ref10, t) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                  var e;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          e = _ref10.commit;
                          return _context9.abrupt("return", new Promise(function (a, r) {
                            try {
                              e("COMMIT_ARQUIVOS", t), a("preparado para enviar");
                            } catch (o) {
                              r(o);
                            }
                          }));
                        case 2:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }))();
              },
              tentarCarregar: function tentarCarregar(_ref11, r) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
                  var e, t, a;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          e = _ref11.commit, t = _ref11.dispatch, a = _ref11.state;
                          return _context11.abrupt("return", new Promise( /*#__PURE__*/function () {
                            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(r, o) {
                              var _o2, n, _e3;
                              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                                while (1) {
                                  switch (_context10.prev = _context10.next) {
                                    case 0:
                                      _context10.prev = 0;
                                      e("COMMIT_PROGRESSO", 0), e("COMMIT_PANEL", !0), e("COMMIT_LOADING", !0);
                                      _o2 = a.arquivos;
                                      n = 0;
                                    case 4:
                                      if (!(n < _o2.length)) {
                                        _context10.next = 13;
                                        break;
                                      }
                                      _e3 = _o2[n];
                                      _context10.next = 8;
                                      return t("carregarUm", _e3);
                                    case 8:
                                      _context10.next = 10;
                                      return t("getUploadHistoryByIdUsuario");
                                    case 10:
                                      n++;
                                      _context10.next = 4;
                                      break;
                                    case 13:
                                      e("COMMIT_PANEL", !1), e("COMMIT_LOADING", !1), r("foi carregado no total: ".concat(_o2.length, " arquivo(s)"));
                                      _context10.next = 19;
                                      break;
                                    case 16:
                                      _context10.prev = 16;
                                      _context10.t0 = _context10["catch"](0);
                                      e("COMMIT_PANEL", !1), e("COMMIT_LOADING", !1), o(_context10.t0);
                                    case 19:
                                    case "end":
                                      return _context10.stop();
                                  }
                                }
                              }, _callee10, null, [[0, 16]]);
                            }));
                            return function (_x5, _x6) {
                              return _ref12.apply(this, arguments);
                            };
                          }()));
                        case 2:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }))();
              },
              carregarUm: function carregarUm(_ref13, a) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                  var e, t;
                  return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          e = _ref13.commit, t = _ref13.dispatch;
                          return _context13.abrupt("return", new Promise( /*#__PURE__*/function () {
                            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(t, r) {
                              var o, _a;
                              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                                while (1) {
                                  switch (_context12.prev = _context12.next) {
                                    case 0:
                                      o = new FormData();
                                      o.append("file", a);
                                      _context12.prev = 2;
                                      _context12.next = 5;
                                      return g.post("/carregamento", o, {
                                        onUploadProgress: function onUploadProgress(t) {
                                          var a = t.loaded / t.total * 100 | 0;
                                          e("COMMIT_PROGRESSO", a);
                                        }
                                      });
                                    case 5:
                                      _a = _context12.sent;
                                      t(_a);
                                      _context12.next = 12;
                                      break;
                                    case 9:
                                      _context12.prev = 9;
                                      _context12.t0 = _context12["catch"](2);
                                      r(_context12.t0);
                                    case 12:
                                    case "end":
                                      return _context12.stop();
                                  }
                                }
                              }, _callee12, null, [[2, 9]]);
                            }));
                            return function (_x7, _x8) {
                              return _ref14.apply(this, arguments);
                            };
                          }()));
                        case 2:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }))();
              },
              getUploadHistoryByIdUsuario: function getUploadHistoryByIdUsuario(_ref15) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                  var e, t;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          e = _ref15.commit, t = _ref15.dispatch;
                          return _context15.abrupt("return", new Promise( /*#__PURE__*/function () {
                            var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(t, a) {
                              var _a2;
                              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                                while (1) {
                                  switch (_context14.prev = _context14.next) {
                                    case 0:
                                      _context14.prev = 0;
                                      _context14.next = 3;
                                      return g.get("/carregamento", {});
                                    case 3:
                                      _a2 = _context14.sent.data;
                                      if (_a2.response) {
                                        _context14.next = 6;
                                        break;
                                      }
                                      throw _a2.msg;
                                    case 6:
                                      e("COMMIT_UPLOAD_HISTORY", _a2.query), t(_a2);
                                      _context14.next = 12;
                                      break;
                                    case 9:
                                      _context14.prev = 9;
                                      _context14.t0 = _context14["catch"](0);
                                      a(_context14.t0);
                                    case 12:
                                    case "end":
                                      return _context14.stop();
                                  }
                                }
                              }, _callee14, null, [[0, 9]]);
                            }));
                            return function (_x9, _x10) {
                              return _ref16.apply(this, arguments);
                            };
                          }()));
                        case 2:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                }))();
              }
            }
          },
          tt = {
            namespaced: !0,
            state: {
              calendar: new Date(),
              dica: "seja bem vindo ao blaze⚡"
            },
            getters: {
              dicaDoDia: function dicaDoDia(_ref17) {
                var e = _ref17.dica;
                return e;
              },
              calendarioEmPortugues: function calendarioEmPortugues(_ref18) {
                var e = _ref18.calendar;
                return new Date(e).toLocaleDateString("pt-br", {
                  dateStyle: "full"
                });
              }
            },
            mutations: {
              COMMIT_CALENDAR: function COMMIT_CALENDAR(_ref19, t) {
                var e = _ref19.calendar;
                t;
              }
            },
            actions: {
              getDateFromServer: function getDateFromServer(_ref20) {
                return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
                  var e;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1) {
                      switch (_context17.prev = _context17.next) {
                        case 0:
                          e = _ref20.commit;
                          new Promise( /*#__PURE__*/function () {
                            var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(t, a) {
                              var _a3;
                              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                                while (1) {
                                  switch (_context16.prev = _context16.next) {
                                    case 0:
                                      _context16.prev = 0;
                                      _context16.next = 3;
                                      return g.get("/calendar");
                                    case 3:
                                      _a3 = _context16.sent.data;
                                      e("COMMIT_CALENDAR", _a3), t(_a3);
                                      _context16.next = 10;
                                      break;
                                    case 7:
                                      _context16.prev = 7;
                                      _context16.t0 = _context16["catch"](0);
                                      a(_context16.t0);
                                    case 10:
                                    case "end":
                                      return _context16.stop();
                                  }
                                }
                              }, _callee16, null, [[0, 7]]);
                            }));
                            return function (_x11, _x12) {
                              return _ref21.apply(this, arguments);
                            };
                          }());
                        case 2:
                        case "end":
                          return _context17.stop();
                      }
                    }
                  }, _callee17);
                }))();
              }
            }
          },
          at = a(8588),
          rt = a.n(at);
        var ot = v.setData,
          nt = v.clearData,
          st = v.isUserLoggedIn;
        var it = {
          namespaced: !0,
          state: {},
          getters: {},
          mutations: {},
          actions: {
            registrar: function registrar(_ref22, e) {
              _objectDestructuringEmpty(_ref22);
              return new Promise( /*#__PURE__*/function () {
                var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(t, a) {
                  var _a4;
                  return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          _context18.prev = 0;
                          _context18.next = 3;
                          return g.post("/auth/usuario", {}, {
                            params: e
                          });
                        case 3:
                          _a4 = _context18.sent.data;
                          setTimeout(function () {
                            t(_a4);
                          }, 1500);
                          _context18.next = 10;
                          break;
                        case 7:
                          _context18.prev = 7;
                          _context18.t0 = _context18["catch"](0);
                          a(_context18.t0);
                        case 10:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18, null, [[0, 7]]);
                }));
                return function (_x13, _x14) {
                  return _ref23.apply(this, arguments);
                };
              }());
            },
            autenticar: function autenticar(_ref24, t) {
              var e = _ref24.commit;
              return new Promise( /*#__PURE__*/function () {
                var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(e, a) {
                  var _a5;
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          _context19.prev = 0;
                          _context19.next = 3;
                          return g.get("/auth/usuario", {
                            params: t
                          });
                        case 3:
                          _a5 = _context19.sent.data;
                          if (_a5.response) {
                            _context19.next = 6;
                            break;
                          }
                          throw JSON.stringify(_a5.msg);
                        case 6:
                          console.log(_a5), ot(_a5.query, _a5.token), setTimeout(function () {
                            e(_a5);
                          }, 1500);
                          _context19.next = 12;
                          break;
                        case 9:
                          _context19.prev = 9;
                          _context19.t0 = _context19["catch"](0);
                          nt(), a(_context19.t0);
                        case 12:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19, null, [[0, 9]]);
                }));
                return function (_x15, _x16) {
                  return _ref25.apply(this, arguments);
                };
              }());
            }
          }
        };
        var ct = v.setData,
          lt = v.clearData,
          ut = v.isUserLoggedIn;
        var dt = {
          namespaced: !0,
          state: {
            second: 3e3,
            color: "#00b09b"
          },
          getters: {},
          mutations: {},
          actions: {
            notificate: function notificate(_ref26, _ref27) {
              var e = _ref26.state;
              var t = _ref27.text,
                a = _ref27.color,
                r = _ref27.seconds;
              rt()({
                text: t,
                duration: r || e.second,
                close: !0,
                gravity: "bottom",
                position: "left",
                style: {
                  background: a || e.color
                }
              }).showToast();
            }
          }
        };
        r.ZP.use(s.ZP);
        var mt = new s.ZP.Store({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {
              carregamento: et,
              home: tt,
              usuario: it,
              assets: dt
            }
          }),
          pt = a(1705),
          ht = a(7258);
        r.ZP.use(pt.Z);
        var gt = new pt.Z({
          breakpoint: {
            scrollBarWidth: 16,
            thresholds: {
              xs: 600,
              sm: 960,
              md: 1280,
              lg: 1920
            }
          },
          lang: {
            current: "pt",
            locales: {
              pt: ht.Z
            }
          },
          theme: {
            dark: !1,
            "default": "light",
            disable: !1,
            themes: {
              dark: {
                primary: "#00b09b",
                secondary: "#3f51b5",
                accent: "#8c9eff",
                error: "#b71c1c"
              },
              light: {
                primary: "#00b09b",
                secondary: "#3f51b5",
                accent: "#8c9eff",
                error: "#b71c1c"
              }
            },
            options: {
              cspNonce: void 0,
              customProperties: void 0,
              minifyTheme: void 0,
              themeCache: void 0
            }
          }
        });
        r.ZP.config.productionTip = !1, new r.ZP({
          router: Ve,
          store: mt,
          vuetify: gt,
          render: function render(e) {
            return e(B);
          }
        }).$mount("#app");
      },
      9629: function _(e, t, a) {
        e.exports = a.p + "img/bg-laptop.1c05cfa9.jpg";
      },
      7890: function _(e, t, a) {
        e.exports = a.p + "img/scene-251.e875feff.jpg";
      }
    },
    t = {};
  function a(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var n = t[r] = {
      id: r,
      loaded: !1,
      exports: {}
    };
    return e[r].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports;
  }
  a.m = e, function () {
    var e = [];
    a.O = function (t, r, o, n) {
      if (!r) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          r = e[u][0], o = e[u][1], n = e[u][2];
          for (var i = !0, c = 0; c < r.length; c++) {
            (!1 & n || s >= n) && Object.keys(a.O).every(function (e) {
              return a.O[e](r[c]);
            }) ? r.splice(c--, 1) : (i = !1, n < s && (s = n));
          }
          if (i) {
            e.splice(u--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) {
        e[u] = e[u - 1];
      }
      e[u] = [r, o, n];
    };
  }(), function () {
    a.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return a.d(t, {
        a: t
      }), t;
    };
  }(), function () {
    a.d = function (e, t) {
      for (var r in t) {
        a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
          enumerable: !0,
          get: t[r]
        });
      }
    };
  }(), function () {
    a.f = {}, a.e = function (e) {
      return Promise.all(Object.keys(a.f).reduce(function (t, r) {
        return a.f[r](e, t), t;
      }, []));
    };
  }(), function () {
    a.u = function (e) {
      return "js/" + e + "." + {
        6: "9478da81",
        135: "4e7fc652",
        261: "f40e520e",
        389: "67d02c8c",
        786: "db3da824"
      }[e] + ".js";
    };
  }(), function () {
    a.miniCssF = function (e) {
      return "css/" + e + "." + {
        135: "3cad60ef",
        389: "c47b7e21"
      }[e] + ".css";
    };
  }(), function () {
    a.g = function () {
      if ("object" === (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
      }
    }();
  }(), function () {
    a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
  }(), function () {
    var e = {},
      t = "blaze:";
    a.l = function (r, o, n, s) {
      if (e[r]) e[r].push(o);else {
        var i, c;
        if (void 0 !== n) for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
          var d = l[u];
          if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + n) {
            i = d;
            break;
          }
        }
        i || (c = !0, i = document.createElement("script"), i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.setAttribute("data-webpack", t + n), i.src = r), e[r] = [o];
        var m = function m(t, a) {
            i.onerror = i.onload = null, clearTimeout(p);
            var o = e[r];
            if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach(function (e) {
              return e(a);
            }), t) return t(a);
          },
          p = setTimeout(m.bind(null, void 0, {
            type: "timeout",
            target: i
          }), 12e4);
        i.onerror = m.bind(null, i.onerror), i.onload = m.bind(null, i.onload), c && document.head.appendChild(i);
      }
    };
  }(), function () {
    a.r = function (e) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    };
  }(), function () {
    a.nmd = function (e) {
      return e.paths = [], e.children || (e.children = []), e;
    };
  }(), function () {
    a.p = "/";
  }(), function () {
    var e = function e(_e4, t, a, r) {
        var o = document.createElement("link");
        o.rel = "stylesheet", o.type = "text/css";
        var n = function n(_n) {
          if (o.onerror = o.onload = null, "load" === _n.type) a();else {
            var s = _n && ("load" === _n.type ? "missing" : _n.type),
              i = _n && _n.target && _n.target.href || t,
              c = new Error("Loading CSS chunk " + _e4 + " failed.\n(" + i + ")");
            c.code = "CSS_CHUNK_LOAD_FAILED", c.type = s, c.request = i, o.parentNode.removeChild(o), r(c);
          }
        };
        return o.onerror = o.onload = n, o.href = t, document.head.appendChild(o), o;
      },
      t = function t(e, _t2) {
        for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
          var o = a[r],
            n = o.getAttribute("data-href") || o.getAttribute("href");
          if ("stylesheet" === o.rel && (n === e || n === _t2)) return o;
        }
        var s = document.getElementsByTagName("style");
        for (r = 0; r < s.length; r++) {
          o = s[r], n = o.getAttribute("data-href");
          if (n === e || n === _t2) return o;
        }
      },
      r = function r(_r) {
        return new Promise(function (o, n) {
          var s = a.miniCssF(_r),
            i = a.p + s;
          if (t(s, i)) return o();
          e(_r, i, o, n);
        });
      },
      o = {
        143: 0
      };
    a.f.miniCss = function (e, t) {
      var a = {
        135: 1,
        389: 1
      };
      o[e] ? t.push(o[e]) : 0 !== o[e] && a[e] && t.push(o[e] = r(e).then(function () {
        o[e] = 0;
      }, function (t) {
        throw delete o[e], t;
      }));
    };
  }(), function () {
    var e = {
      143: 0
    };
    a.f.j = function (t, r) {
      var o = a.o(e, t) ? e[t] : void 0;
      if (0 !== o) if (o) r.push(o[2]);else {
        var n = new Promise(function (a, r) {
          o = e[t] = [a, r];
        });
        r.push(o[2] = n);
        var s = a.p + a.u(t),
          i = new Error(),
          c = function c(r) {
            if (a.o(e, t) && (o = e[t], 0 !== o && (e[t] = void 0), o)) {
              var n = r && ("load" === r.type ? "missing" : r.type),
                s = r && r.target && r.target.src;
              i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")", i.name = "ChunkLoadError", i.type = n, i.request = s, o[1](i);
            }
          };
        a.l(s, c, "chunk-" + t, t);
      }
    }, a.O.j = function (t) {
      return 0 === e[t];
    };
    var t = function t(_t3, r) {
        var o,
          n,
          s = r[0],
          i = r[1],
          c = r[2],
          l = 0;
        if (s.some(function (t) {
          return 0 !== e[t];
        })) {
          for (o in i) {
            a.o(i, o) && (a.m[o] = i[o]);
          }
          if (c) var u = c(a);
        }
        for (_t3 && _t3(r); l < s.length; l++) {
          n = s[l], a.o(e, n) && e[n] && e[n][0](), e[n] = 0;
        }
        return a.O(u);
      },
      r = self["webpackChunkblaze"] = self["webpackChunkblaze"] || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  }();
  var r = a.O(void 0, [998], function () {
    return a(4108);
  });
  r = a.O(r);
})();
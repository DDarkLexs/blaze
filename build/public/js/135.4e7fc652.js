"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["title"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
(self["webpackChunkblaze"] = self["webpackChunkblaze"] || []).push([[135], {
  135: function _(t, e, s) {
    s.r(e), s.d(e, {
      "default": function _default() {
        return Z;
      }
    });
    var i = s(4562),
      n = s(9582),
      a = s(4886),
      o = (s(7393), s(2240)),
      r = s(573),
      c = s(596),
      l = c.Z.extend({
        name: "v-checkbox",
        props: {
          indeterminate: Boolean,
          indeterminateIcon: {
            type: String,
            "default": "$checkboxIndeterminate"
          },
          offIcon: {
            type: String,
            "default": "$checkboxOff"
          },
          onIcon: {
            type: String,
            "default": "$checkboxOn"
          }
        },
        data: function data() {
          return {
            inputIndeterminate: this.indeterminate
          };
        },
        computed: {
          classes: function classes() {
            return _objectSpread(_objectSpread({}, r.Z.options.computed.classes.call(this)), {}, {
              "v-input--selection-controls": !0,
              "v-input--checkbox": !0,
              "v-input--indeterminate": this.inputIndeterminate
            });
          },
          computedIcon: function computedIcon() {
            return this.inputIndeterminate ? this.indeterminateIcon : this.isActive ? this.onIcon : this.offIcon;
          },
          validationState: function validationState() {
            if (!this.isDisabled || this.inputIndeterminate) return this.hasError && this.shouldValidate ? "error" : this.hasSuccess ? "success" : null !== this.hasColor ? this.computedColor : void 0;
          }
        },
        watch: {
          indeterminate: function indeterminate(t) {
            var _this = this;
            this.$nextTick(function () {
              return _this.inputIndeterminate = t;
            });
          },
          inputIndeterminate: function inputIndeterminate(t) {
            this.$emit("update:indeterminate", t);
          },
          isActive: function isActive() {
            this.indeterminate && (this.inputIndeterminate = !1);
          }
        },
        methods: {
          genCheckbox: function genCheckbox() {
            var _this$attrs$ = this.attrs$,
              t = _this$attrs$.title,
              e = _objectWithoutProperties(_this$attrs$, _excluded);
            return this.$createElement("div", {
              staticClass: "v-input--selection-controls__input"
            }, [this.$createElement(o.Z, this.setTextColor(this.validationState, {
              props: {
                dense: this.dense,
                dark: this.dark,
                light: this.light
              }
            }), this.computedIcon), this.genInput("checkbox", _objectSpread(_objectSpread({}, e), {}, {
              "aria-checked": this.inputIndeterminate ? "mixed" : this.isActive.toString()
            })), this.genRipple(this.setTextColor(this.rippleState))]);
          },
          genDefaultSlot: function genDefaultSlot() {
            return [this.genCheckbox(), this.genLabel()];
          }
        }
      }),
      h = s(266),
      u = s(2118),
      d = s(1713),
      m = s(9258),
      p = s(3687),
      v = s(7808),
      f = function f() {
        var _attrs, _attrs2;
        var t = this,
          e = t._self._c;
        return e(u.Z, {
          staticClass: "d-flex justify-center mt-15"
        }, [e("form", {
          attrs: {
            enctype: "text/plain"
          },
          on: {
            submit: function submit(e) {
              return e.preventDefault(), t.registar.apply(null, arguments);
            }
          }
        }, [e(n.Z, {
          attrs: {
            loading: t.loading,
            disabled: t.loading,
            height: "auto",
            "max-width": "600",
            outlined: ""
          }
        }, [e(a.EB, {
          staticClass: "text-h3",
          attrs: {
            "primary-title": ""
          }
        }, [t._v(" Cadastrar-se ")]), e(a.ZB, [e(d.Z, {
          attrs: {
            "g-2": ""
          }
        }, [e(h.Z, {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [e(v.Z, {
          attrs: {
            type: "text",
            rules: t.nomeRegra,
            required: "",
            label: "Nome usuário",
            "prepend-icon": "mdi-account",
            hint: "Informe o usuário"
          },
          model: {
            value: t.form.nome,
            callback: function callback(e) {
              t.$set(t.form, "nome", e);
            },
            expression: "form.nome"
          }
        })], 1), e(h.Z, {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [e(v.Z, {
          attrs: (_attrs = {
            type: "password",
            rules: t.passwordRegra,
            "append-icon": t.show1 ? "mdi-eye" : "mdi-eye-off"
          }, _defineProperty(_attrs, "type", t.show1 ? "text" : "password"), _defineProperty(_attrs, "required", ""), _defineProperty(_attrs, "label", "Palavra-passe"), _defineProperty(_attrs, "prepend-icon", "mdi-lock"), _defineProperty(_attrs, "hint", "Informe a Palavra-passe"), _attrs),
          on: {
            "click:append": function clickAppend(e) {
              t.show1 = !t.show1;
            }
          },
          model: {
            value: t.form.senha,
            callback: function callback(e) {
              t.$set(t.form, "senha", e);
            },
            expression: "form.senha"
          }
        })], 1), e(h.Z, {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [e(v.Z, {
          attrs: (_attrs2 = {
            type: "password",
            rules: t.passwordRegra,
            "append-icon": t.show2 ? "mdi-eye" : "mdi-eye-off"
          }, _defineProperty(_attrs2, "type", t.show2 ? "text" : "password"), _defineProperty(_attrs2, "label", "Palavra-passe novamente"), _defineProperty(_attrs2, "prepend-icon", "mdi-lock"), _defineProperty(_attrs2, "hint", "Informe a Palavra-passe"), _attrs2),
          on: {
            "click:append": function clickAppend(e) {
              t.show2 = !t.show2;
            }
          },
          model: {
            value: t.senhaPreview,
            callback: function callback(e) {
              t.senhaPreview = e;
            },
            expression: "senhaPreview"
          }
        })], 1), e(h.Z, {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [e(l, {
          attrs: {
            label: "Concorda com os nossos termos e condições",
            indeterminate: ""
          },
          model: {
            value: t.form.concorda,
            callback: function callback(e) {
              t.$set(t.form, "concorda", e);
            },
            expression: "form.concorda"
          }
        })], 1)], 1)], 1), e(a.h7, [e(i.Z, {
          attrs: {
            color: "success",
            type: "submit"
          }
        }, [t._v(" registar ")]), e(p.Z), e(i.Z, {
          attrs: {
            to: {
              name: "entrada"
            },
            color: "primary"
          }
        }, [t._v(" entrada ")])], 1)], 1)], 1), e(m.Z, {
          scopedSlots: t._u([{
            key: "action",
            fn: function fn(_ref) {
              var s = _ref.attrs;
              return [e(i.Z, t._b({
                attrs: {
                  color: "pink",
                  text: ""
                },
                on: {
                  click: function click(e) {
                    t.snackbar = !1;
                  }
                }
              }, "v-btn", s, !1), [t._v(" fechar ")])];
            }
          }]),
          model: {
            value: t.snackbar,
            callback: function callback(e) {
              t.snackbar = e;
            },
            expression: "snackbar"
          }
        }, [t._v(" " + t._s(t.text) + " ")])], 1);
      },
      k = [],
      g = s(629),
      b = {
        data: function data() {
          return {
            form: {
              nome: "",
              senha: "",
              concorda: !1
            },
            snackbar: !1,
            text: "Novo usuário registrado com sucesso!",
            loading: !1,
            senhaPreview: "",
            show1: !1,
            show2: !1,
            nomeRegra: [function (t) {
              return !!t || "Informe o nome de usuário!";
            }],
            passwordRegra: [function (t) {
              return !!t || "Informe a palavra-passe do usuário!";
            }]
          };
        },
        methods: _objectSpread(_objectSpread({}, (0, g.nv)({
          registrar: "usuario/registrar"
        })), {}, {
          registar: function registar(t) {
            var _this2 = this;
            return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      if (!(_this2.loading = !0, !_this2.form.senha)) {
                        _context.next = 3;
                        break;
                      }
                      throw "informe a sua senha";
                    case 3:
                      if (!(_this2.senhaPreview !== _this2.form.senha)) {
                        _context.next = 5;
                        break;
                      }
                      throw "Senha não consta o mesmo valor";
                    case 5:
                      if (_this2.form.concorda) {
                        _context.next = 7;
                        break;
                      }
                      throw "Tens que concordar com o nosso termo";
                    case 7:
                      _context.next = 9;
                      return _this2.registrar(_this2.form);
                    case 9:
                      _this2.snackbar = !0;
                      _this2.loading = !1;
                      _context.next = 16;
                      break;
                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](0);
                      _this2.loading = !1, alert(_context.t0);
                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[0, 13]]);
            }))();
          }
        })
      },
      w = b,
      x = s(1001),
      y = (0, x.Z)(w, f, k, !1, null, null, null),
      Z = y.exports;
  },
  9258: function _(t, e, s) {
    s.d(e, {
      Z: function Z() {
        return u;
      }
    });
    var i = s(7423),
      n = s(6878),
      a = s(6669),
      o = s(1444),
      r = s(4263),
      c = s(7678),
      l = s(5352),
      h = s(4101),
      u = (0, c.Z)(i.Z, n.Z, o.Z, (0, r.d)(["absolute", "bottom", "left", "right", "top"])).extend({
        name: "v-snackbar",
        props: {
          app: Boolean,
          centered: Boolean,
          contentClass: {
            type: String,
            "default": ""
          },
          multiLine: Boolean,
          text: Boolean,
          timeout: {
            type: [Number, String],
            "default": 5e3
          },
          transition: {
            type: [Boolean, String],
            "default": "v-snack-transition",
            validator: function validator(t) {
              return "string" === typeof t || !1 === t;
            }
          },
          vertical: Boolean
        },
        data: function data() {
          return {
            activeTimeout: -1
          };
        },
        computed: {
          classes: function classes() {
            return {
              "v-snack--absolute": this.absolute,
              "v-snack--active": this.isActive,
              "v-snack--bottom": this.bottom || !this.top,
              "v-snack--centered": this.centered,
              "v-snack--has-background": this.hasBackground,
              "v-snack--left": this.left,
              "v-snack--multi-line": this.multiLine && !this.vertical,
              "v-snack--right": this.right,
              "v-snack--text": this.text,
              "v-snack--top": this.top,
              "v-snack--vertical": this.vertical
            };
          },
          hasBackground: function hasBackground() {
            return !this.text && !this.outlined;
          },
          isDark: function isDark() {
            return this.hasBackground ? !this.light : a.Z.options.computed.isDark.call(this);
          },
          styles: function styles() {
            if (this.absolute || !this.app) return {};
            var _this$$vuetify$applic = this.$vuetify.application,
              t = _this$$vuetify$applic.bar,
              e = _this$$vuetify$applic.bottom,
              s = _this$$vuetify$applic.footer,
              i = _this$$vuetify$applic.insetFooter,
              n = _this$$vuetify$applic.left,
              a = _this$$vuetify$applic.right,
              o = _this$$vuetify$applic.top;
            return {
              paddingBottom: (0, l.kb)(e + s + i),
              paddingLeft: (0, l.kb)(n),
              paddingRight: (0, l.kb)(a),
              paddingTop: (0, l.kb)(t + o)
            };
          }
        },
        watch: {
          isActive: "setTimeout",
          timeout: "setTimeout"
        },
        mounted: function mounted() {
          this.isActive && this.setTimeout();
        },
        created: function created() {
          this.$attrs.hasOwnProperty("auto-height") && (0, h.Jk)("auto-height", this), 0 == this.timeout && (0, h.Rn)('timeout="0"', "-1", this);
        },
        methods: {
          genActions: function genActions() {
            return this.$createElement("div", {
              staticClass: "v-snack__action "
            }, [(0, l.z9)(this, "action", {
              attrs: {
                "class": "v-snack__btn"
              }
            })]);
          },
          genContent: function genContent() {
            return this.$createElement("div", {
              staticClass: "v-snack__content",
              "class": _defineProperty({}, this.contentClass, !0),
              attrs: {
                role: "status",
                "aria-live": "polite"
              }
            }, [(0, l.z9)(this)]);
          },
          genWrapper: function genWrapper() {
            var _this3 = this;
            var t = this.hasBackground ? this.setBackgroundColor : this.setTextColor,
              e = t(this.color, {
                staticClass: "v-snack__wrapper",
                "class": i.Z.options.computed.classes.call(this),
                style: i.Z.options.computed.styles.call(this),
                directives: [{
                  name: "show",
                  value: this.isActive
                }],
                on: {
                  pointerenter: function pointerenter() {
                    return window.clearTimeout(_this3.activeTimeout);
                  },
                  pointerleave: this.setTimeout
                }
              });
            return this.$createElement("div", e, [this.genContent(), this.genActions()]);
          },
          genTransition: function genTransition() {
            return this.$createElement("transition", {
              props: {
                name: this.transition
              }
            }, [this.genWrapper()]);
          },
          setTimeout: function setTimeout() {
            var _this4 = this;
            window.clearTimeout(this.activeTimeout);
            var t = Number(this.timeout);
            this.isActive && ![0, -1].includes(t) && (this.activeTimeout = window.setTimeout(function () {
              _this4.isActive = !1;
            }, t));
          }
        },
        render: function render(t) {
          return t("div", {
            staticClass: "v-snack",
            "class": this.classes,
            style: this.styles
          }, [!1 !== this.transition ? this.genTransition() : this.genWrapper()]);
        }
      });
  }
}]);
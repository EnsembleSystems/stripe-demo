/*! For license information please see 805.js.LICENSE.txt */
export const id = 805;
export const ids = [805];
export const modules = {
  7805: (t, e, n) => {
    n.d(e, {
      SG: () => $,
      fz: () => X,
      lJ: () => J,
    });
    var r = n(573),
      o = n(9529),
      i = n(5587),
      a = n(1892),
      c = n.n(a),
      u = n(5760),
      l = n.n(u),
      s = n(8311),
      h = n.n(s),
      d = n(8192),
      p = n.n(d),
      f = n(8060),
      v = n.n(f),
      m = n(4865),
      y = n.n(m),
      g = n(9091),
      b = {};
    (b.styleTagTransform = y()),
      (b.setAttributes = p()),
      (b.insert = h().bind(null, "head")),
      (b.domAPI = l()),
      (b.insertStyleElement = v()),
      c()(g.Z, b),
      g.Z && g.Z.locals && g.Z.locals;
    var w = n(4462),
      x = n(1690),
      j = n(1988),
      _ = n(9724),
      O = n(7959),
      S = n(3483),
      E = n(7354),
      L = n(424),
      k = (n(1442), n(9799)),
      P = n(7188),
      N = function () {
        return (0, P.jsxs)(k.O, {
          children: [
            (0, P.jsx)(k.d, {
              variant: "heading",
              size: "small",
            }),
            (0, P.jsx)(k.d, {
              variant: "empty",
              size: "small",
            }),
            (0, P.jsx)(k.d, {
              size: "medium",
              isFull: !0,
            }),
            (0, P.jsx)(k.d, {
              size: "medium",
              isFull: !0,
            }),
          ],
        });
      },
      A = (0, _.zB)({
        EmptyState: "Checkout.ShippingMethods.emptyState",
      })(function (t) {
        var e = t.className,
          n = t.value,
          r = t.options,
          o = t.isLoading,
          a = void 0 !== o && o,
          c = t.onChange,
          u = void 0 === c ? function () {} : c;
        return void 0 === r
          ? (0, P.jsx)(N, {})
          : (0, P.jsxs)("div", {
              className: (0, i.S)(["checkout-shipping-methods", e]),
              children: [
                (0, P.jsx)(S.X, {
                  level: 3,
                  children: (0, P.jsx)(_.xv, {
                    id: "Checkout.ShippingMethods.title",
                  }),
                  className: "checkout-shipping-methods__title",
                }),
                a &&
                  (0, P.jsx)(E.a, {
                    className: "checkout-shipping-methods__loader",
                  }),
                !a &&
                  0 === r.length &&
                  (0, P.jsx)(w.Z, {
                    variant: "secondary",
                    children: (0, P.jsx)(L.u, {
                      icon: O.Z,
                      message: t.EmptyState,
                    }),
                  }),
                !a &&
                  r.map(function (t) {
                    var e = J(t),
                      r = e;
                    return (0, P.jsx)(
                      x.E,
                      {
                        id: e,
                        name: "shipping-method",
                        className: "checkout-shipping-methods__method",
                        label: (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsx)(j.t, {
                              amount: t.amount.value,
                              currency: t.amount.currency,
                            }),
                            " ",
                            (0, P.jsx)("span", {
                              children: t.carrier_title,
                            }),
                          ],
                        }),
                        description: t.method_title,
                        value: r,
                        checked: n === r,
                        onChange: function () {
                          return u(r);
                        },
                      },
                      e
                    );
                  }),
              ],
            });
      }),
      M = n(3177),
      C = n(4853);
    function G(t) {
      return (
        (G =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        G(t)
      );
    }
    var T = ["children"];
    function F(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function I(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? F(Object(n), !0).forEach(function (e) {
              Z(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : F(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function Z(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== G(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" !== G(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === G(e) ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function z() {
      z = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        n = e.hasOwnProperty,
        r =
          Object.defineProperty ||
          function (t, e, n) {
            t[e] = n.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        c = o.toStringTag || "@@toStringTag";
      function u(t, e, n) {
        return (
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        u({}, "");
      } catch (t) {
        u = function (t, e, n) {
          return (t[e] = n);
        };
      }
      function l(t, e, n, o) {
        var i = e && e.prototype instanceof d ? e : d,
          a = Object.create(i.prototype),
          c = new S(o || []);
        return (
          r(a, "_invoke", {
            value: x(t, n, c),
          }),
          a
        );
      }
      function s(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n),
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t,
          };
        }
      }
      t.wrap = l;
      var h = {};
      function d() {}
      function p() {}
      function f() {}
      var v = {};
      u(v, i, function () {
        return this;
      });
      var m = Object.getPrototypeOf,
        y = m && m(m(E([])));
      y && y !== e && n.call(y, i) && (v = y);
      var g = (f.prototype = d.prototype = Object.create(v));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function w(t, e) {
        function o(r, i, a, c) {
          var u = s(t[r], t, i);
          if ("throw" !== u.type) {
            var l = u.arg,
              h = l.value;
            return h && "object" == G(h) && n.call(h, "__await")
              ? e.resolve(h.__await).then(
                  function (t) {
                    o("next", t, a, c);
                  },
                  function (t) {
                    o("throw", t, a, c);
                  }
                )
              : e.resolve(h).then(
                  function (t) {
                    (l.value = t), a(l);
                  },
                  function (t) {
                    return o("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var i;
        r(this, "_invoke", {
          value: function (t, n) {
            function r() {
              return new e(function (e, r) {
                o(t, n, e, r);
              });
            }
            return (i = i ? i.then(r, r) : r());
          },
        });
      }
      function x(t, e, n) {
        var r = "suspendedStart";
        return function (o, i) {
          if ("executing" === r)
            throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw i;
            return {
              value: void 0,
              done: !0,
            };
          }
          for (n.method = o, n.arg = i; ; ) {
            var a = n.delegate;
            if (a) {
              var c = j(a, n);
              if (c) {
                if (c === h) continue;
                return c;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = "executing";
            var u = s(t, e, n);
            if ("normal" === u.type) {
              if (((r = n.done ? "completed" : "suspendedYield"), u.arg === h))
                continue;
              return {
                value: u.arg,
                done: n.done,
              };
            }
            "throw" === u.type &&
              ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
          }
        };
      }
      function j(t, e) {
        var n = e.method,
          r = t.iterator[n];
        if (void 0 === r)
          return (
            (e.delegate = null),
            ("throw" === n &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              j(t, e),
              "throw" === e.method)) ||
              ("return" !== n &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            h
          );
        var o = s(r, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), h;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              h)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            h);
      }
      function _(t) {
        var e = {
          tryLoc: t[0],
        };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function O(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function S(t) {
        (this.tryEntries = [
          {
            tryLoc: "root",
          },
        ]),
          t.forEach(_, this),
          this.reset(!0);
      }
      function E(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function e() {
                for (; ++r < t.length; )
                  if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return {
          next: L,
        };
      }
      function L() {
        return {
          value: void 0,
          done: !0,
        };
      }
      return (
        (p.prototype = f),
        r(g, "constructor", {
          value: f,
          configurable: !0,
        }),
        r(f, "constructor", {
          value: p,
          configurable: !0,
        }),
        (p.displayName = u(f, c, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === p || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, f)
              : ((t.__proto__ = f), u(t, c, "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return {
            __await: t,
          };
        }),
        b(w.prototype),
        u(w.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = w),
        (t.async = function (e, n, r, o, i) {
          void 0 === i && (i = Promise);
          var a = new w(l(e, n, r, o), i);
          return t.isGeneratorFunction(n)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        b(g),
        u(g, c, "Generator"),
        u(g, i, function () {
          return this;
        }),
        u(g, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = Object(t),
            n = [];
          for (var r in e) n.push(r);
          return (
            n.reverse(),
            function t() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in e) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = E),
        (S.prototype = {
          constructor: S,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(O),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  n.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = n),
                r && ((e.method = "next"), (e.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              h
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t)
                return this.complete(n.completion, n.afterLoc), O(n), h;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  O(n);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, n) {
            return (
              (this.delegate = {
                iterator: E(t),
                resultName: e,
                nextLoc: n,
              }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        t
      );
    }
    function D(t, e, n, r, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function U(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null != n) {
            var r,
              o,
              i,
              a,
              c = [],
              u = !0,
              l = !1;
            try {
              if (((i = (n = n.call(t)).next), 0 === e)) {
                if (Object(n) !== n) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (r = i.call(n)).done) &&
                  (c.push(r.value), c.length !== e);
                  u = !0
                );
            } catch (t) {
              (l = !0), (o = t);
            } finally {
              try {
                if (
                  !u &&
                  null != n.return &&
                  ((a = n.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (l) throw o;
              }
            }
            return c;
          }
        })(t, e) ||
        (function (t, e) {
          if (t) {
            if ("string" == typeof t) return Y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Y(t, e)
                : void 0
            );
          }
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Y(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var B = function (t, e) {
        return t.amount.value - e.amount.value;
      },
      J = function (t) {
        return (null != t && t.carrier_code) || (null != t && t.method_code)
          ? "".concat(t.carrier_code, " - ").concat(t.method_code)
          : "";
      },
      X = function () {
        var t = U(
          (arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : ""
          ).split(" - "),
          2
        );
        return {
          carrier_code: t[0] || "",
          method_code: t[1] || "",
        };
      };
    var $ = function (t) {
      t.children;
      var e = (function (t, e) {
          if (null == t) return {};
          var n,
            r,
            o = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]),
                e.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]));
          }
          return o;
        })(t, T),
        n = (function () {
          var t,
            e,
            n,
            i = U((0, C.useState)(!1), 2),
            a = i[0],
            c = i[1],
            u = U((0, C.useState)(), 2),
            l = u[0],
            s = u[1],
            h = U((0, C.useState)(), 2),
            d = h[0],
            p = h[1],
            f = (0, M.t)(),
            v = !!f,
            m = !(
              null == f ||
              null === (t = f.shipping_addresses) ||
              void 0 === t ||
              !t[0]
            ),
            y =
              null == f ||
              null === (e = f.shipping_addresses) ||
              void 0 === e ||
              null === (e = e[0]) ||
              void 0 === e
                ? void 0
                : e.available_shipping_methods,
            g =
              null == f ||
              null === (n = f.shipping_addresses) ||
              void 0 === n ||
              null === (n = n[0]) ||
              void 0 === n
                ? void 0
                : n.selected_shipping_method,
            b = (0, C.useCallback)(
              function (t) {
                return J(t) === l;
              },
              [l]
            ),
            w = (0, C.useCallback)(
              (function () {
                var t,
                  e =
                    ((t = z().mark(function t(e) {
                      return z().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((t.prev = 0), (t.t0 = m), !t.t0)) {
                                  t.next = 5;
                                  break;
                                }
                                return (t.next = 5), (0, r.v)([e]);
                              case 5:
                                s(J(e)), (t.next = 11);
                                break;
                              case 8:
                                (t.prev = 8),
                                  (t.t1 = t.catch(0)),
                                  console.error(
                                    "setting shipping methods on cart failed:",
                                    t.t1
                                  );
                              case 11:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 8]]
                      );
                    })),
                    function () {
                      var e = this,
                        n = arguments;
                      return new Promise(function (r, o) {
                        var i = t.apply(e, n);
                        function a(t) {
                          D(i, r, o, a, c, "next", t);
                        }
                        function c(t) {
                          D(i, r, o, a, c, "throw", t);
                        }
                        a(void 0);
                      });
                    });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return (
            (0, C.useEffect)(
              function () {
                if (v && void 0 !== y)
                  if ((p(y.sort(B)), g)) s(J(g));
                  else {
                    var t = y.find(b);
                    t
                      ? w({
                          carrier_code: t.carrier_code,
                          method_code: t.method_code,
                        })
                      : y.length > 0
                      ? w({
                          carrier_code: y[0].carrier_code,
                          method_code: y[0].method_code,
                        })
                      : s("");
                  }
              },
              [y, v, g, w, b]
            ),
            (0, C.useEffect)(
              function () {
                v &&
                  !y &&
                  (c(!0),
                  (0, o.d)()
                    .then(function (t) {
                      (t = t.map(function (t) {
                        return I(
                          I({}, t),
                          {},
                          {
                            amount: {
                              value: t.amount.value,
                              currency: "USD",
                            },
                          }
                        );
                      })),
                        p(t.sort(B)),
                        s(J(t[0]));
                    })
                    .catch(function (t) {
                      p([]),
                        console.error("shipping methods estimation failed:", t);
                    })
                    .finally(function () {
                      c(!1);
                    }));
              },
              [y, v]
            ),
            {
              availableShippingMethods: d,
              isLoading: a,
              onShippingMethodChange: function (t) {
                w(X(t));
              },
              selectedShippingMethod: l,
              setAvailableShippingMethods: p,
            }
          );
        })(),
        i = n.availableShippingMethods,
        a = n.isLoading,
        c = n.onShippingMethodChange,
        u = n.selectedShippingMethod;
      return (0, P.jsx)(
        A,
        I(
          I({}, e),
          {},
          {
            className: "checkout-shipping-methods",
            isLoading: a,
            onChange: c,
            options: i,
            value: u,
          }
        )
      );
    };
  },
  9091: (t, e, n) => {
    n.d(e, {
      Z: () => c,
    });
    var r = n(4933),
      o = n.n(r),
      i = n(3476),
      a = n.n(i)()(o());
    a.push([
      t.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.checkout-shipping-methods {}\n\n.checkout-shipping-methods__title {\n    color: var(--color-neutral-800);\n    font: var(--type-body-1-default-font);\n    letter-spacing: var(--type-body-1-default-letter-spacing);\n    margin-bottom: var(--spacing-medium);\n}\n\n.checkout-shipping-methods__method {\n    margin-bottom: var(--spacing-medium);\n}\n\n.elsie-radio-button__label .elsie-price {\n    color: var(--color-neutral-800);\n    font-weight: normal;\n}\n\n.checkout-shipping-methods__loader {\n    margin: 0 auto;\n}\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const c = a;
  },
};

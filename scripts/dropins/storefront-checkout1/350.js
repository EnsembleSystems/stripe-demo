/*! For license information please see 350.js.LICENSE.txt */
export const id = 350;
export const ids = [350];
export const modules = {
  845: (t, r, e) => {
    e.d(r, {
      w: () => d,
    });
    var n = e(6680),
      o = e(7322),
      i = e(6261),
      a = e(6765),
      c = e(7096),
      u =
        "\n  mutation setBillingAddressOnCart($cartId: String!, $billingAddress: BillingAddressInput!) {\n    setBillingAddressOnCart(input: { \n        cart_id: $cartId,\n        billing_address: $billingAddress \n    }) {\n      cart {\n        id\n        ...CheckoutData\n      }\n    }\n  }\n".concat(
          c.m,
          "\n"
        );
    function l(t) {
      return (
        (l =
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
        l(t)
      );
    }
    function s() {
      s = function () {
        return t;
      };
      var t = {},
        r = Object.prototype,
        e = r.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (t, r, e) {
            t[r] = e.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        c = o.toStringTag || "@@toStringTag";
      function u(t, r, e) {
        return (
          Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[r]
        );
      }
      try {
        u({}, "");
      } catch (t) {
        u = function (t, r, e) {
          return (t[r] = e);
        };
      }
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof y ? r : y,
          a = Object.create(i.prototype),
          c = new k(o || []);
        return (
          n(a, "_invoke", {
            value: S(t, e, c),
          }),
          a
        );
      }
      function d(t, r, e) {
        try {
          return {
            type: "normal",
            arg: t.call(r, e),
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t,
          };
        }
      }
      t.wrap = f;
      var p = {};
      function y() {}
      function h() {}
      function v() {}
      var b = {};
      u(b, i, function () {
        return this;
      });
      var m = Object.getPrototypeOf,
        g = m && m(m(L([])));
      g && g !== r && e.call(g, i) && (b = g);
      var w = (v.prototype = y.prototype = Object.create(b));
      function O(t) {
        ["next", "throw", "return"].forEach(function (r) {
          u(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function j(t, r) {
        function o(n, i, a, c) {
          var u = d(t[n], t, i);
          if ("throw" !== u.type) {
            var s = u.arg,
              f = s.value;
            return f && "object" == l(f) && e.call(f, "__await")
              ? r.resolve(f.__await).then(
                  function (t) {
                    o("next", t, a, c);
                  },
                  function (t) {
                    o("throw", t, a, c);
                  }
                )
              : r.resolve(f).then(
                  function (t) {
                    (s.value = t), a(s);
                  },
                  function (t) {
                    return o("throw", t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var i;
        n(this, "_invoke", {
          value: function (t, e) {
            function n() {
              return new r(function (r, n) {
                o(t, e, r, n);
              });
            }
            return (i = i ? i.then(n, n) : n());
          },
        });
      }
      function S(t, r, e) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return {
              value: void 0,
              done: !0,
            };
          }
          for (e.method = o, e.arg = i; ; ) {
            var a = e.delegate;
            if (a) {
              var c = x(a, e);
              if (c) {
                if (c === p) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            n = "executing";
            var u = d(t, r, e);
            if ("normal" === u.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), u.arg === p))
                continue;
              return {
                value: u.arg,
                done: e.done,
              };
            }
            "throw" === u.type &&
              ((n = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function x(t, r) {
        var e = r.method,
          n = t.iterator[e];
        if (void 0 === n)
          return (
            (r.delegate = null),
            ("throw" === e &&
              t.iterator.return &&
              ((r.method = "return"),
              (r.arg = void 0),
              x(t, r),
              "throw" === r.method)) ||
              ("return" !== e &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + e + "' method"
                )))),
            p
          );
        var o = d(n, t.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
        var i = o.arg;
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              p)
            : i
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            p);
      }
      function P(t) {
        var r = {
          tryLoc: t[0],
        };
        1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
      }
      function E(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function k(t) {
        (this.tryEntries = [
          {
            tryLoc: "root",
          },
        ]),
          t.forEach(P, this),
          this.reset(!0);
      }
      function L(t) {
        if (t) {
          var r = t[i];
          if (r) return r.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function r() {
                for (; ++n < t.length; )
                  if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r;
                return (r.value = void 0), (r.done = !0), r;
              };
            return (o.next = o);
          }
        }
        return {
          next: _,
        };
      }
      function _() {
        return {
          value: void 0,
          done: !0,
        };
      }
      return (
        (h.prototype = v),
        n(w, "constructor", {
          value: v,
          configurable: !0,
        }),
        n(v, "constructor", {
          value: h,
          configurable: !0,
        }),
        (h.displayName = u(v, c, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var r = "function" == typeof t && t.constructor;
          return (
            !!r &&
            (r === h || "GeneratorFunction" === (r.displayName || r.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), u(t, c, "GeneratorFunction")),
            (t.prototype = Object.create(w)),
            t
          );
        }),
        (t.awrap = function (t) {
          return {
            __await: t,
          };
        }),
        O(j.prototype),
        u(j.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = j),
        (t.async = function (r, e, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new j(f(r, e, n, o), i);
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(w),
        u(w, c, "Generator"),
        u(w, i, function () {
          return this;
        }),
        u(w, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var r = Object(t),
            e = [];
          for (var n in r) e.push(n);
          return (
            e.reverse(),
            function t() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in r) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = L),
        (k.prototype = {
          constructor: k,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(E),
              !t)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  e.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var r = this;
            function n(e, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (r.next = e),
                n && ((r.method = "next"), (r.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var c = e.call(i, "catchLoc"),
                  u = e.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, r) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                e.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= r &&
              r <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = r),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                : this.complete(a)
            );
          },
          complete: function (t, r) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && r && (this.next = r),
              p
            );
          },
          finish: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), E(e), p;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  E(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (
              (this.delegate = {
                iterator: L(t),
                resultName: r,
                nextLoc: e,
              }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        t
      );
    }
    function f(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(u) : Promise.resolve(u).then(n, o);
    }
    var d = (function () {
      var t,
        r =
          ((t = s().mark(function t(r) {
            var e, c, l, f, d;
            return s().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((e = (0, i.QC)())) {
                      t.next = 3;
                      break;
                    }
                    throw new n.fQ();
                  case 3:
                    if (r) {
                      t.next = 5;
                      break;
                    }
                    throw new n.e8();
                  case 5:
                    return (
                      (t.next = 7),
                      (0, o.gX)(u, {
                        variables: {
                          cartId: e,
                          billingAddress: r,
                        },
                      })
                    );
                  case 7:
                    if (((c = t.sent), (l = c.data), !(f = c.errors))) {
                      t.next = 12;
                      break;
                    }
                    throw new n.kp(f);
                  case 12:
                    (d = l.setBillingAddressOnCart.cart),
                      a.events.emit("checkout/data", d);
                  case 14:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                f(i, n, o, a, c, "next", t);
              }
              function c(t) {
                f(i, n, o, a, c, "throw", t);
              }
              a(void 0);
            });
          });
      return function (t) {
        return r.apply(this, arguments);
      };
    })();
  },
  6350: (t, r, e) => {
    e.d(r, {
      y: () => O,
    });
    var n = e(4853),
      o = e(9724),
      i = e(5587),
      a = e(5013),
      c = e(7188);
    function u(t) {
      return (
        (u =
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
        u(t)
      );
    }
    var l = ["className", "checked"];
    function s(t, r) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
          })),
          e.push.apply(e, n);
      }
      return e;
    }
    function f(t, r, e) {
      return (
        (r = (function (t) {
          var r = (function (t, r) {
            if ("object" !== u(t) || null === t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, "string");
              if ("object" !== u(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === u(r) ? r : String(r);
        })(r)) in t
          ? Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = e),
        t
      );
    }
    var d = function (t) {
        var r = t.className,
          e = t.checked,
          n = void 0 === e || e,
          u = (function (t, r) {
            if (null == t) return {};
            var e,
              n,
              o = (function (t, r) {
                if (null == t) return {};
                var e,
                  n,
                  o = {},
                  i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                  (e = i[n]), r.indexOf(e) >= 0 || (o[e] = t[e]);
                return o;
              })(t, r);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (e = i[n]),
                  r.indexOf(e) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, e) &&
                      (o[e] = t[e]));
            }
            return o;
          })(t, l);
        return (0, c.jsx)(
          a.X,
          (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var e = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? s(Object(e), !0).forEach(function (r) {
                    f(t, r, e[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : s(Object(e)).forEach(function (r) {
                    Object.defineProperty(
                      t,
                      r,
                      Object.getOwnPropertyDescriptor(e, r)
                    );
                  });
            }
            return t;
          })(
            {
              className: (0, i.S)(["checkout-bill-to-shipping-address", r]),
              checked: n,
              name: "checkout-bill-to-shipping-address",
              label: (0, c.jsx)(o.xv, {
                id: "Checkout.BillToShippingAddress.title",
              }),
            },
            u
          )
        );
      },
      p = e(3177),
      y = e(845);
    function h(t) {
      return (
        (h =
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
        h(t)
      );
    }
    var v = ["className", "checked", "children"];
    function b(t, r) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable;
          })),
          e.push.apply(e, n);
      }
      return e;
    }
    function m(t) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? b(Object(e), !0).forEach(function (r) {
              g(t, r, e[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : b(Object(e)).forEach(function (r) {
              Object.defineProperty(
                t,
                r,
                Object.getOwnPropertyDescriptor(e, r)
              );
            });
      }
      return t;
    }
    function g(t, r, e) {
      return (
        (r = (function (t) {
          var r = (function (t, r) {
            if ("object" !== h(t) || null === t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, "string");
              if ("object" !== h(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === h(r) ? r : String(r);
        })(r)) in t
          ? Object.defineProperty(t, r, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = e),
        t
      );
    }
    function w(t, r) {
      (null == r || r > t.length) && (r = t.length);
      for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
      return n;
    }
    var O = function (t) {
      var r,
        e,
        o,
        i,
        a,
        u,
        l,
        s,
        f,
        h = t.className,
        b = t.checked,
        g = void 0 === b || b,
        O =
          (t.children,
          (function (t, r) {
            if (null == t) return {};
            var e,
              n,
              o = (function (t, r) {
                if (null == t) return {};
                var e,
                  n,
                  o = {},
                  i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                  (e = i[n]), r.indexOf(e) >= 0 || (o[e] = t[e]);
                return o;
              })(t, r);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t);
              for (n = 0; n < i.length; n++)
                (e = i[n]),
                  r.indexOf(e) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(t, e) &&
                      (o[e] = t[e]));
            }
            return o;
          })(t, v)),
        j = (0, p.t)(),
        S = !!j,
        x =
          ((s = (0, n.useState)(void 0)),
          (f = 2),
          (function (t) {
            if (Array.isArray(t)) return t;
          })(s) ||
            (function (t, r) {
              var e =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != e) {
                var n,
                  o,
                  i,
                  a,
                  c = [],
                  u = !0,
                  l = !1;
                try {
                  if (((i = (e = e.call(t)).next), 0 === r)) {
                    if (Object(e) !== e) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (n = i.call(e)).done) &&
                      (c.push(n.value), c.length !== r);
                      u = !0
                    );
                } catch (t) {
                  (l = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != e.return &&
                      ((a = e.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (l) throw o;
                  }
                }
                return c;
              }
            })(s, f) ||
            (function (t, r) {
              if (t) {
                if ("string" == typeof t) return w(t, r);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === e && t.constructor && (e = t.constructor.name),
                  "Map" === e || "Set" === e
                    ? Array.from(t)
                    : "Arguments" === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? w(t, r)
                    : void 0
                );
              }
            })(s, f) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        P = x[0],
        E = x[1],
        k =
          ((e = null == j ? void 0 : j.billing_address),
          (o =
            null == j || null === (r = j.shipping_addresses) || void 0 === r
              ? void 0
              : r[0]),
          (null == e ? void 0 : e.city) === (null == o ? void 0 : o.city) &&
            (null == o ? void 0 : o.company) ===
              (null == e ? void 0 : e.company) &&
            (null == e || null === (i = e.country) || void 0 === i
              ? void 0
              : i.code) ===
              (null == o || null === (a = o.country) || void 0 === a
                ? void 0
                : a.code) &&
            (null == e ? void 0 : e.firstname) ===
              (null == o ? void 0 : o.firstname) &&
            (null == e ? void 0 : e.lastname) ===
              (null == o ? void 0 : o.lastname) &&
            (null == e ? void 0 : e.postcode) ===
              (null == o ? void 0 : o.postcode) &&
            (null == e || null === (u = e.region) || void 0 === u
              ? void 0
              : u.code) ===
              (null == o || null === (l = o.region) || void 0 === l
                ? void 0
                : l.code) &&
            JSON.stringify(null == e ? void 0 : e.street) ===
              JSON.stringify(null == o ? void 0 : o.street) &&
            (null == e ? void 0 : e.telephone) ===
              (null == o ? void 0 : o.telephone) &&
            (null == e ? void 0 : e.vat_id) ===
              (null == o ? void 0 : o.vat_id) &&
            JSON.stringify(null == e ? void 0 : e.custom_attributes) ===
              JSON.stringify(null == o ? void 0 : o.custom_attributes));
      return (
        void 0 === P && S && E(null === j.billing_address ? g : k),
        (0, n.useEffect)(
          function () {
            void 0 !== P &&
              P &&
              !k &&
              (0, y.w)({
                same_as_shipping: !0,
              }).catch(function (t) {
                console.log(t);
              });
          },
          [P, k]
        ),
        (0, c.jsx)(
          "div",
          m(
            m({}, O),
            {},
            {
              children: (0, c.jsx)(
                d,
                m(
                  {
                    className: h,
                    checked: null != P ? P : g,
                    onChange: function (t) {
                      var r;
                      E(
                        null == t || null === (r = t.target) || void 0 === r
                          ? void 0
                          : r.checked
                      );
                    },
                  },
                  O
                )
              ),
            }
          )
        )
      );
    };
  },
};

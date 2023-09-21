/*! For license information please see 299.js.LICENSE.txt */
export const id = 299;
export const ids = [299];
export const modules = {
  2701: (t, r, e) => {
    e.d(r, {
      T: () => p,
      A: () => h,
    });
    var n = e(6261),
      o = e(6765),
      i = e(7322),
      a = e(7096),
      c =
        "\n  mutation setGuestEmailOnCart($cartId: String!, $email: String!) {\n    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {\n      cart {\n        id\n        ...CheckoutData\n      }\n    }\n  }\n  ".concat(
          a.m,
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
    function u() {
      u = function () {
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
      function s(t, r, e) {
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
        s({}, "");
      } catch (t) {
        s = function (t, r, e) {
          return (t[r] = e);
        };
      }
      function f(t, r, e, o) {
        var i = r && r.prototype instanceof p ? r : p,
          a = Object.create(i.prototype),
          c = new S(o || []);
        return (
          n(a, "_invoke", {
            value: j(t, e, c),
          }),
          a
        );
      }
      function m(t, r, e) {
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
      var h = {};
      function p() {}
      function d() {}
      function v() {}
      var y = {};
      s(y, i, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        b = g && g(g(k([])));
      b && b !== r && e.call(b, i) && (y = b);
      var x = (v.prototype = p.prototype = Object.create(y));
      function w(t) {
        ["next", "throw", "return"].forEach(function (r) {
          s(t, r, function (t) {
            return this._invoke(r, t);
          });
        });
      }
      function E(t, r) {
        function o(n, i, a, c) {
          var u = m(t[n], t, i);
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
      function j(t, r, e) {
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
              var c = L(a, e);
              if (c) {
                if (c === h) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), e.arg);
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            n = "executing";
            var l = m(t, r, e);
            if ("normal" === l.type) {
              if (((n = e.done ? "completed" : "suspendedYield"), l.arg === h))
                continue;
              return {
                value: l.arg,
                done: e.done,
              };
            }
            "throw" === l.type &&
              ((n = "completed"), (e.method = "throw"), (e.arg = l.arg));
          }
        };
      }
      function L(t, r) {
        var e = r.method,
          n = t.iterator[e];
        if (void 0 === n)
          return (
            (r.delegate = null),
            ("throw" === e &&
              t.iterator.return &&
              ((r.method = "return"),
              (r.arg = void 0),
              L(t, r),
              "throw" === r.method)) ||
              ("return" !== e &&
                ((r.method = "throw"),
                (r.arg = new TypeError(
                  "The iterator does not provide a '" + e + "' method"
                )))),
            h
          );
        var o = m(n, t.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), h;
        var i = o.arg;
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
              (r.delegate = null),
              h)
            : i
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            h);
      }
      function O(t) {
        var r = {
          tryLoc: t[0],
        };
        1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r);
      }
      function _(t) {
        var r = t.completion || {};
        (r.type = "normal"), delete r.arg, (t.completion = r);
      }
      function S(t) {
        (this.tryEntries = [
          {
            tryLoc: "root",
          },
        ]),
          t.forEach(O, this),
          this.reset(!0);
      }
      function k(t) {
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
          next: P,
        };
      }
      function P() {
        return {
          value: void 0,
          done: !0,
        };
      }
      return (
        (d.prototype = v),
        n(x, "constructor", {
          value: v,
          configurable: !0,
        }),
        n(v, "constructor", {
          value: d,
          configurable: !0,
        }),
        (d.displayName = s(v, c, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var r = "function" == typeof t && t.constructor;
          return (
            !!r &&
            (r === d || "GeneratorFunction" === (r.displayName || r.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), s(t, c, "GeneratorFunction")),
            (t.prototype = Object.create(x)),
            t
          );
        }),
        (t.awrap = function (t) {
          return {
            __await: t,
          };
        }),
        w(E.prototype),
        s(E.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = E),
        (t.async = function (r, e, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new E(f(r, e, n, o), i);
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        w(x),
        s(x, c, "Generator"),
        s(x, i, function () {
          return this;
        }),
        s(x, "toString", function () {
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
        (t.values = k),
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
              this.tryEntries.forEach(_),
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
                  l = e.call(i, "finallyLoc");
                if (c && l) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!l)
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
                ? ((this.method = "next"), (this.next = i.finallyLoc), h)
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
              h
            );
          },
          finish: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), _(e), h;
            }
          },
          catch: function (t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r];
              if (e.tryLoc === t) {
                var n = e.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  _(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, e) {
            return (
              (this.delegate = {
                iterator: k(t),
                resultName: r,
                nextLoc: e,
              }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        t
      );
    }
    function s(t, r, e, n, o, i, a) {
      try {
        var c = t[i](a),
          l = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? r(l) : Promise.resolve(l).then(n, o);
    }
    function f(t) {
      return function () {
        var r = this,
          e = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(r, e);
          function a(t) {
            s(i, n, o, a, c, "next", t);
          }
          function c(t) {
            s(i, n, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var m = function (t) {
        throw Error(
          t
            .map(function (t) {
              return t.message;
            })
            .join(" ")
        );
      },
      h = (function () {
        var t = f(
          u().mark(function t(r) {
            var e, a, l, s;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((e = (0, n.QC)())) {
                      t.next = 3;
                      break;
                    }
                    throw Error("Cart ID is required");
                  case 3:
                    return (
                      (t.next = 5),
                      (0, i.gX)(c, {
                        variables: {
                          cartId: e,
                          email: r,
                        },
                      })
                    );
                  case 5:
                    return (
                      (a = t.sent),
                      (l = a.data),
                      (s = a.errors) && m(s),
                      o.events.emit(
                        "checkout/data",
                        l.setGuestEmailOnCart.cart
                      ),
                      t.abrupt("return", l.setGuestEmailOnCart.cart)
                    );
                  case 11:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (r) {
          return t.apply(this, arguments);
        };
      })(),
      p = (function () {
        var t = f(
          u().mark(function t(r) {
            var e, n, o;
            return u().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (r) {
                      t.next = 2;
                      break;
                    }
                    throw Error("Email not found.");
                  case 2:
                    return (
                      (t.next = 4),
                      (0, i.gX)(
                        "\n  query IS_EMAIL_AVAILABLE($email: String!) {\n    isEmailAvailable(email: $email) {\n      is_email_available\n    }\n  }\n",
                        {
                          variables: {
                            email: r,
                          },
                        }
                      )
                    );
                  case 4:
                    if (
                      ((n = t.sent),
                      !(o =
                        null == n || null === (e = n.errors) || void 0 === e
                          ? void 0
                          : e[0]))
                    ) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(o.message);
                  case 8:
                    return t.abrupt(
                      "return",
                      n.data.isEmailAvailable.is_email_available
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (r) {
          return t.apply(this, arguments);
        };
      })();
  },
  8299: (t, r, e) => {
    e.d(r, {
      U: () => B,
    });
    var n = e(2701),
      o = e(5587),
      i = e(1892),
      a = e.n(i),
      c = e(5760),
      l = e.n(c),
      u = e(8311),
      s = e.n(u),
      f = e(8192),
      m = e.n(f),
      h = e(8060),
      p = e.n(h),
      d = e(4865),
      v = e.n(d),
      y = e(1153),
      g = {};
    (g.styleTagTransform = v()),
      (g.setAttributes = m()),
      (g.insert = s().bind(null, "head")),
      (g.domAPI = l()),
      (g.insertStyleElement = p()),
      a()(y.Z, g),
      y.Z && y.Z.locals && y.Z.locals;
    var b = e(9724),
      x = e(3483),
      w = e(7188),
      E = function () {
        return (0, w.jsxs)("p", {
          className: "checkout-login-form__signIn",
          children: [
            (0, w.jsx)(b.xv, {
              id: "Checkout.LoginForm.account",
            }),
            (0, w.jsx)("a", {
              className: "checkout-login-form__link",
              href: "#",
              target: "_blank",
              rel: "noreferrer",
              children: (0, w.jsx)(b.xv, {
                id: "Checkout.LoginForm.signIn",
              }),
            }),
          ],
        });
      },
      j = e(9627),
      L = e(2773),
      O = (0, b.zB)({
        LoginFormLabel: "Checkout.LoginForm.ariaLabel",
        LoginFormFloatingLabel: "Checkout.LoginForm.floatingLabel",
        LoginFormPlaceholder: "Checkout.LoginForm.placeholder",
      })(function (t) {
        var r = t.error,
          e = t.hint,
          n = t.value,
          o = t.onChange,
          i = t.onBlur;
        return (0, w.jsx)(j.g, {
          size: "medium",
          error: r,
          hint: e,
          children: (0, w.jsx)(L.I, {
            id: "customer-email",
            name: "userName",
            type: "email",
            value: n,
            autocomplete: "email",
            placeholder: t.LoginFormPlaceholder,
            floatingLabel: t.LoginFormFloatingLabel,
            onChange: o,
            onBlur: i,
            required: !0,
            "aria-label": t.LoginFormLabel,
            "aria-required": !0,
          }),
        });
      });
    function _(t) {
      return (
        (_ =
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
        _(t)
      );
    }
    function S(t, r) {
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
    function k(t) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? S(Object(e), !0).forEach(function (r) {
              P(t, r, e[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : S(Object(e)).forEach(function (r) {
              Object.defineProperty(
                t,
                r,
                Object.getOwnPropertyDescriptor(e, r)
              );
            });
      }
      return t;
    }
    function P(t, r, e) {
      return (
        (r = (function (t) {
          var r = (function (t, r) {
            if ("object" !== _(t) || null === t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, "string");
              if ("object" !== _(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === _(r) ? r : String(r);
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
    var F = (0, b.zB)({})(function (t) {
        var r = t.className,
          e = t.currentEmail,
          n = t.hint,
          i = t.error,
          a = void 0 === i ? null : i,
          c = t.onEmailChange,
          l =
            void 0 === c
              ? function (t) {
                  return t;
                }
              : c,
          u = t.onEmailBlur,
          s =
            void 0 === u
              ? function (t) {
                  return t;
                }
              : u;
        return (0, w.jsxs)("div", {
          className: "checkout-login-form",
          children: [
            (0, w.jsxs)("div", {
              className: "checkout-login-form__heading",
              children: [
                (0, w.jsx)(x.X, {
                  level: 2,
                  children: (0, w.jsx)(b.xv, {
                    id: "Checkout.LoginForm.title",
                  }),
                  className: "checkout-login-form__title",
                }),
                (0, w.jsx)(E, {}),
              ],
            }),
            (0, w.jsx)("div", {
              className: "checkout-login-form__content",
              children: (0, w.jsx)(
                "form",
                k(
                  k(
                    {
                      className: (0, o.S)(["elsie-login-form__form", r]),
                      noValidate: !0,
                    },
                    t
                  ),
                  {},
                  {
                    children: (0, w.jsx)(O, {
                      value: e || void 0,
                      error: a || "",
                      hint: n,
                      onChange: l,
                      onBlur: s,
                    }),
                  }
                )
              ),
            }),
          ],
        });
      }),
      C = e(5437);
    function I(t) {
      return (
        (I =
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
        I(t)
      );
    }
    function N(t, r) {
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
    function A(t) {
      for (var r = 1; r < arguments.length; r++) {
        var e = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? N(Object(e), !0).forEach(function (r) {
              T(t, r, e[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : N(Object(e)).forEach(function (r) {
              Object.defineProperty(
                t,
                r,
                Object.getOwnPropertyDescriptor(e, r)
              );
            });
      }
      return t;
    }
    function T(t, r, e) {
      return (
        (r = (function (t) {
          var r = (function (t, r) {
            if ("object" !== I(t) || null === t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, "string");
              if ("object" !== I(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === I(r) ? r : String(r);
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
    function G(t, r) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
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
              l = !0,
              u = !1;
            try {
              if (((i = (e = e.call(t)).next), 0 === r)) {
                if (Object(e) !== e) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (n = i.call(e)).done) &&
                  (c.push(n.value), c.length !== r);
                  l = !0
                );
            } catch (t) {
              (u = !0), (o = t);
            } finally {
              try {
                if (
                  !l &&
                  null != e.return &&
                  ((a = e.return()), Object(a) !== a)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return c;
          }
        })(t, r) ||
        (function (t, r) {
          if (t) {
            if ("string" == typeof t) return D(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e
                ? Array.from(t)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? D(t, r)
                : void 0
            );
          }
        })(t, r) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function D(t, r) {
      (null == r || r > t.length) && (r = t.length);
      for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
      return n;
    }
    var B = (0, b.zB)({
      LoginFormInvalidEmailError: "Checkout.LoginForm.invalidEmailError",
      LoginFormMissingEmailError: "Checkout.LoginForm.missingEmailError",
      LoginFormEmailExists: "Checkout.LoginForm.emailExists",
    })(function (t) {
      var r = t.className,
        e = t.email,
        o = void 0 === e ? null : e,
        i = t.LoginFormEmailExists,
        a = t.LoginFormInvalidEmailError,
        c = t.LoginFormMissingEmailError,
        l = G((0, C.useState)(o), 2),
        u = l[0],
        s = l[1],
        f = G((0, C.useState)(), 2),
        m = f[0],
        h = f[1],
        p = G((0, C.useState)(!0), 2),
        d = p[0],
        v = p[1];
      return (
        (0, C.useEffect)(
          function () {
            if (u && !m) {
              var t = setTimeout(function () {
                (0, n.T)(u)
                  .then(function (t) {
                    v(t);
                  })
                  .catch(function (t) {
                    console.error(t), h(a), v(!0);
                  });
              }, 1e3);
              return function () {
                clearTimeout(t);
              };
            }
          },
          [u, m, a]
        ),
        (0, w.jsx)(w.Fragment, {
          children: (0, w.jsx)(
            F,
            A(
              {
                className: r,
                currentEmail: u,
                hint: d ? "" : i,
                error: m,
                onChange: function (t) {
                  var r = t.target.value;
                  s(r), h(null), v(!0);
                },
                onBlur: function (t) {
                  var r = t.target.validity;
                  h(
                    (function (t) {
                      return t.valid ? null : t.valueMissing ? c : a;
                    })(r)
                  );
                },
              },
              t
            )
          ),
        })
      );
    });
  },
  1153: (t, r, e) => {
    e.d(r, {
      Z: () => c,
    });
    var n = e(4933),
      o = e.n(n),
      i = e(3476),
      a = e.n(i)()(o());
    a.push([
      t.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.checkout-login-form {\n    display: grid;\n}\n\n/* Move to SDK */\n.elsie-field__hint:empty {\n    display: none;\n}\n\n.checkout-login-form__heading {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr [col-start]);\n    grid-auto-rows: max-content;\n}\n\n.checkout-login-form__content {\n    grid-auto-rows: max-content;\n}\n\n.checkout-login-form__title {\n    grid-column-start: 1;\n    color: var(--color-neutral-800);\n    font: var(--type-headline-2-default-font);\n    letter-spacing: var(--type-headline-2-default-letter-spacing);\n    margin: 0;\n}\n\n.checkout-login-form__signIn {\n    grid-column-start: 2;\n    color: var(--color-neutral-800);\n    font: var(--type-body-2-default-font);\n    letter-spacing: var(--type-body-2-default-letter-spacing);\n    margin-bottom: var(--spacing-medium);\n    align-self: flex-end;\n    justify-self: flex-end;\n    margin-top: var(--spacing-xxsmall);\n}\n\na.checkout-login-form__link {\n    font: var(--type-body-2-strong-font);\n    margin-left: var(--spacing-xxsmall);\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (min-width:320px) and (max-width: 768px) {\n    .checkout-login-form__heading {\n        grid-template-columns: repeat(1, 1fr [col-start]);\n        grid-template-rows: 1fr;\n    }\n\n    .checkout-login-form__signIn {\n        grid-column-start: 1;\n        align-self: flex-start;\n        justify-self: flex-start;\n        padding-top: var(--spacing-xsmall);\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const c = a;
  },
};

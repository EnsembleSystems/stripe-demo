import * as e from "@dropins/elsie/event-bus.js";
import * as r from "@dropins/elsie/preact-compat.js";
import * as n from "@dropins/elsie/preact-hooks.js";
import * as t from "@dropins/elsie/preact-jsx-runtime.js";
import * as o from "@dropins/elsie/preact.js";
export const id = 166;
export const ids = [166];
export const modules = {
  1988: (e, r, n) => {
    n.d(r, {
      t: () => O,
    });
    var t = n(5587),
      o = n(1892),
      a = n.n(o),
      i = n(5760),
      s = n.n(i),
      l = n(8311),
      c = n.n(l),
      u = n(8192),
      d = n.n(u),
      m = n(8060),
      p = n.n(m),
      y = n(4865),
      f = n.n(y),
      h = n(6948),
      v = {};
    (v.styleTagTransform = f()),
      (v.setAttributes = d()),
      (v.insert = c().bind(null, "head")),
      (v.domAPI = s()),
      (v.insertStyleElement = p()),
      a()(h.Z, v),
      h.Z && h.Z.locals && h.Z.locals;
    var b = n(7188);
    function g(e) {
      return (
        (g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        g(e)
      );
    }
    var x = [
      "amount",
      "currency",
      "locale",
      "variant",
      "className",
      "children",
      "sale",
      "formatOptions",
    ];
    function k(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r &&
          (t = t.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          n.push.apply(n, t);
      }
      return n;
    }
    function j(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? k(Object(n), !0).forEach(function (r) {
              w(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : k(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function w(e, r, n) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== g(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" !== g(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === g(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = n),
        e
      );
    }
    var O = function (e) {
      var r = e.amount,
        n = void 0 === r ? 0 : r,
        o = e.currency,
        a = void 0 === o ? "USD" : o,
        i = e.locale,
        s = void 0 === i ? void 0 : i,
        l = e.variant,
        c = void 0 === l ? "default" : l,
        u = e.className,
        d = (e.children, e.sale),
        m = void 0 !== d && d,
        p = e.formatOptions,
        y = void 0 === p ? {} : p,
        f = (function (e, r) {
          if (null == e) return {};
          var n,
            t,
            o = (function (e, r) {
              if (null == e) return {};
              var n,
                t,
                o = {},
                a = Object.keys(e);
              for (t = 0; t < a.length; t++)
                (n = a[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, r);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (t = 0; t < a.length; t++)
              (n = a[t]),
                r.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        })(e, x),
        h = new Intl.NumberFormat(
          s,
          j(
            {
              style: "currency",
              currency: a,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
            y
          )
        );
      return (0, b.jsx)(
        "span",
        j(
          j({}, f),
          {},
          {
            className: (0, t.S)([
              "elsie-price",
              u,
              "elsie-price--".concat(c),
              ["elsie-price--sale", m],
            ]),
            children: h.format(n),
          }
        )
      );
    };
  },
  3483: (e, r, n) => {
    n.d(r, {
      X: () => b,
    });
    var t = n(1892),
      o = n.n(t),
      a = n(5760),
      i = n.n(a),
      s = n(8311),
      l = n.n(s),
      c = n(8192),
      u = n.n(c),
      d = n(8060),
      m = n.n(d),
      p = n(4865),
      y = n.n(p),
      f = n(8695),
      h = {};
    (h.styleTagTransform = y()),
      (h.setAttributes = u()),
      (h.insert = l().bind(null, "head")),
      (h.domAPI = i()),
      (h.insertStyleElement = m()),
      o()(f.Z, h),
      f.Z && f.Z.locals && f.Z.locals;
    var v = n(7188),
      b = function (e) {
        var r = e.className,
          n = e.children,
          t = e.level,
          o = void 0 === t ? 2 : t,
          a = o >= 1 && o <= 6 ? "h".concat(o) : "h2";
        return (0, v.jsx)(a, {
          className: r,
          children: n,
        });
      };
  },
  7354: (e, r, n) => {
    n.d(r, {
      a: () => g,
    });
    var t = n(5587),
      o = n(1892),
      a = n.n(o),
      i = n(5760),
      s = n.n(i),
      l = n(8311),
      c = n.n(l),
      u = n(8192),
      d = n.n(u),
      m = n(8060),
      p = n.n(m),
      y = n(4865),
      f = n.n(y),
      h = n(9794),
      v = {};
    (v.styleTagTransform = f()),
      (v.setAttributes = d()),
      (v.insert = c().bind(null, "head")),
      (v.domAPI = s()),
      (v.insertStyleElement = p()),
      a()(h.Z, v),
      h.Z && h.Z.locals && h.Z.locals;
    var b = n(7188),
      g = function (e) {
        var r = e.size,
          n = void 0 === r ? "24" : r,
          o = e.stroke,
          a = void 0 === o ? "4" : o,
          i = e.className;
        return (0, b.jsx)("div", {
          className: (0, t.S)([
            "elsie-loader",
            "elsie-loader--shape-size-".concat(n),
            "elsie-loader--shape-stroke-".concat(a),
            i,
          ]),
        });
      };
  },
  9799: (e, r, n) => {
    n.d(r, {
      O: () => p,
      d: () => m,
    });
    var t = n(5587),
      o = (n(1442), n(7188));
    function a(e) {
      return (
        (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        a(e)
      );
    }
    var i = ["isFull", "lines", "size", "variant"],
      s = ["className", "children"];
    function l(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r &&
          (t = t.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          n.push.apply(n, t);
      }
      return n;
    }
    function c(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? l(Object(n), !0).forEach(function (r) {
              u(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function u(e, r, n) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== a(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" !== a(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === a(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = n),
        e
      );
    }
    function d(e, r) {
      if (null == e) return {};
      var n,
        t,
        o = (function (e, r) {
          if (null == e) return {};
          var n,
            t,
            o = {},
            a = Object.keys(e);
          for (t = 0; t < a.length; t++)
            (n = a[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, r);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (t = 0; t < a.length; t++)
          (n = a[t]),
            r.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    }
    var m = function (e) {
        var r = e.isFull,
          n = void 0 !== r && r,
          a = e.lines,
          s = void 0 === a ? 1 : a,
          l = e.size,
          u = void 0 === l ? "small" : l,
          m = e.variant,
          p = void 0 === m ? "row" : m,
          y = d(e, i),
          f = [
            ["checkout-skeleton-row__".concat(p), p],
            ["checkout-skeleton-row__".concat(p, "-").concat(u), p && u],
          ];
        return !1 == s > 1
          ? (0, o.jsx)(
              "div",
              c(
                c({}, y),
                {},
                {
                  class: (0, t.S)(
                    [
                      "checkout-skeleton-row",
                      ["checkout-skeleton-row--full", n],
                    ].concat(f)
                  ),
                }
              )
            )
          : (0, o.jsx)(
              "div",
              c(
                c({}, y),
                {},
                {
                  class: (0, t.S)([
                    "checkout-skeleton-row--multiline",
                    ["checkout-skeleton-row--full", n],
                  ]),
                  children: Array.from({
                    length: s,
                  }).map(function (e, r) {
                    return (0, o.jsx)(
                      "div",
                      {
                        class: (0, t.S)(
                          [
                            "checkout-skeleton-row",
                            ["checkout-skeleton-row--full", n],
                          ].concat(f)
                        ),
                      },
                      r
                    );
                  }),
                }
              )
            );
      },
      p = function (e) {
        var r = e.className,
          n = e.children,
          a = d(e, s);
        return (0, o.jsx)(
          "div",
          c(
            c({}, a),
            {},
            {
              className: (0, t.S)(["checkout-skeleton", r]),
              children: n,
            }
          )
        );
      };
  },
  7357: (e, r, n) => {
    n.d(r, {
      H: () => R,
      Y: () => F,
    });
    var t = n(3177),
      o = n(5587),
      a = n(1892),
      i = n.n(a),
      s = n(5760),
      l = n.n(s),
      c = n(8311),
      u = n.n(c),
      d = n(8192),
      m = n.n(d),
      p = n(8060),
      y = n.n(p),
      f = n(4865),
      h = n.n(f),
      v = n(5509),
      b = {};
    (b.styleTagTransform = h()),
      (b.setAttributes = m()),
      (b.insert = u().bind(null, "head")),
      (b.domAPI = l()),
      (b.insertStyleElement = y()),
      i()(v.Z, b),
      v.Z && v.Z.locals && v.Z.locals;
    var g = n(3483),
      x = n(7354),
      k = n(9724),
      j = n(1988),
      w = n(7188);
    function O(e) {
      return (
        (O =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        O(e)
      );
    }
    var _ = [
      "className",
      "currency",
      "subtotal",
      "total",
      "shipping",
      "tax",
      "isLoading",
    ];
    function S(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r &&
          (t = t.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          n.push.apply(n, t);
      }
      return n;
    }
    function P(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? S(Object(n), !0).forEach(function (r) {
              E(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : S(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function E(e, r, n) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== O(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" !== O(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === O(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = n),
        e
      );
    }
    var N = function (e) {
        var r = e.className,
          n = e.currency,
          t = e.subtotal,
          a = e.total,
          i = e.shipping,
          s = e.tax,
          l = e.isLoading,
          c = void 0 !== l && l,
          u = (function (e, r) {
            if (null == e) return {};
            var n,
              t,
              o = (function (e, r) {
                if (null == e) return {};
                var n,
                  t,
                  o = {},
                  a = Object.keys(e);
                for (t = 0; t < a.length; t++)
                  (n = a[t]), r.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
              })(e, r);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (t = 0; t < a.length; t++)
                (n = a[t]),
                  r.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]));
            }
            return o;
          })(e, _);
        return (0, w.jsxs)(
          "div",
          P(
            P({}, u),
            {},
            {
              className: (0, o.S)(["checkout-order-summary", r]),
              children: [
                (0, w.jsx)(g.X, {
                  level: 2,
                  className: "checkout-order-summary__title",
                  children: (0, w.jsx)(k.xv, {
                    id: "Checkout.OrderSummary.title",
                  }),
                }),
                c &&
                  (0, w.jsx)(x.a, {
                    className: "checkout-order-summary__loader",
                  }),
                (0, w.jsxs)("div", {
                  className: (0, o.S)([["checkout-order-summary--loading", c]]),
                  children: [
                    (0, w.jsxs)("div", {
                      className: "checkout-order-summary__breakdown",
                      children: [
                        (0, w.jsxs)("div", {
                          className:
                            "checkout-order-summary__row checkout-order-summary__row-subtotal",
                          children: [
                            (0, w.jsx)("p", {
                              children: (0, w.jsx)(k.xv, {
                                id: "Checkout.OrderSummary.subtotal",
                              }),
                            }),
                            (0, w.jsx)(j.t, {
                              amount: t,
                              currency: n,
                              className: (0, o.S)([
                                "checkout-order-summary__row-price",
                                r,
                              ]),
                            }),
                          ],
                        }),
                        null != i &&
                          (0, w.jsxs)("div", {
                            className:
                              "checkout-order-summary__row checkout-order-summary__row-shipping",
                            children: [
                              (0, w.jsx)("p", {
                                children: (0, w.jsx)(k.xv, {
                                  id: "Checkout.OrderSummary.shipping",
                                }),
                              }),
                              0 === i
                                ? (0, w.jsx)("p", {
                                    className:
                                      "checkout-order-summary__row-price",
                                    children: (0, w.jsx)(k.xv, {
                                      id: "Checkout.OrderSummary.freeShipping",
                                    }),
                                  })
                                : (0, w.jsx)(j.t, {
                                    amount: i,
                                    currency: n,
                                    className: (0, o.S)([
                                      "checkout-order-summary__row-price",
                                      r,
                                    ]),
                                  }),
                            ],
                          }),
                        null != s &&
                          (0, w.jsxs)("div", {
                            className:
                              "checkout-order-summary__row checkout-order-summary__row-tax",
                            children: [
                              (0, w.jsx)("p", {
                                children: (0, w.jsx)(k.xv, {
                                  id: "Checkout.OrderSummary.tax",
                                }),
                              }),
                              (0, w.jsx)(j.t, {
                                amount: s,
                                currency: n,
                                className: (0, o.S)([
                                  "checkout-order-summary__row-price",
                                  r,
                                ]),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, w.jsx)("div", {
                      className: "checkout-order-summary__total",
                      children: (0, w.jsxs)("div", {
                        className:
                          "checkout-order-summary__row checkout-order-summary__row-total",
                        children: [
                          (0, w.jsx)("p", {
                            children: (0, w.jsx)(k.xv, {
                              id: "Checkout.OrderSummary.total",
                            }),
                          }),
                          (0, w.jsx)(j.t, {
                            amount: a,
                            currency: n,
                            className: (0, o.S)([
                              "checkout-order-summary__row-price",
                              r,
                            ]),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }
          )
        );
      },
      Z = (n(1442), n(9799)),
      z = function () {
        return (0, w.jsxs)(Z.O, {
          className: "order-summary__skeleton",
          children: [
            (0, w.jsx)(Z.d, {
              variant: "heading",
              size: "medium",
            }),
            (0, w.jsx)(Z.d, {
              variant: "empty",
              size: "medium",
            }),
            (0, w.jsx)(Z.d, {
              size: "large",
              isFull: !0,
              lines: 3,
            }),
          ],
        });
      },
      C = 0;
    function D(e) {
      return (
        (D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        D(e)
      );
    }
    function A(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        r &&
          (t = t.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          n.push.apply(n, t);
      }
      return n;
    }
    function I(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? A(Object(n), !0).forEach(function (r) {
              T(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : A(Object(n)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(n, r)
              );
            });
      }
      return e;
    }
    function T(e, r, n) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== D(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" !== D(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === D(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = n),
        e
      );
    }
    function L() {
      return (
        (L = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                for (var t in n)
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }
              return e;
            }),
        L.apply(this, arguments)
      );
    }
    function F() {
      var e,
        r,
        n = (0, t.t)(),
        o = !!n,
        a = null == n ? void 0 : n.shipping_addresses,
        i = !(null == a || !a.length),
        s = null == n ? void 0 : n.prices,
        l = null == s ? void 0 : s.grand_total,
        c = !!l,
        u = null == s ? void 0 : s.subtotal_excluding_tax,
        d = !!u,
        m = (null == s ? void 0 : s.applied_taxes) || [],
        p = !!m.length,
        y = {
          isLoading: !1,
        };
      if (!o || !c) return y;
      if (
        ((y.summary = {
          total: l.value,
          subtotal: C,
          currency: l.currency,
        }),
        d && (y.summary.subtotal = u.value),
        p &&
          (y.summary.tax = m.reduce(function (e, r) {
            return e + r.amount.value;
          }, C)),
        !i)
      )
        return y;
      var f = a[0],
        h = null == f ? void 0 : f.selected_shipping_method;
      return h
        ? ((y.summary.shipping =
            null !==
              (e =
                null == h || null === (r = h.amount) || void 0 === r
                  ? void 0
                  : r.value) && void 0 !== e
              ? e
              : C),
          y)
        : y;
    }
    var R = function (e) {
      var r = L(
          {},
          ((function (e) {
            if (null == e) throw new TypeError("Cannot destructure " + e);
          })(e),
          e)
        ),
        n = F(),
        t = n.isLoading,
        o = n.summary;
      return (0, w.jsxs)(
        "div",
        I(
          I({}, r),
          {},
          {
            children: [
              !o && (0, w.jsx)(z, {}),
              o &&
                (0, w.jsx)(N, {
                  isLoading: t,
                  total: o.total,
                  subtotal: o.subtotal,
                  shipping: o.shipping,
                  tax: o.tax,
                  currency: o.currency,
                }),
            ],
          }
        )
      );
    };
  },
  1970: (e, r, n) => {
    n.d(r, {
      He: () => t.H,
      Yj: () => t.Y,
      ZP: () => t.H,
    });
    var t = n(7357);
  },
  3177: (e, r, n) => {
    n.d(r, {
      t: () => i,
    });
    var t = n(6765),
      o = n(5437);
    function a(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n];
      return t;
    }
    function i() {
      var e,
        r,
        n =
          ((e = (0, o.useState)()),
          (r = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
            (function (e, r) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var t,
                  o,
                  a,
                  i,
                  s = [],
                  l = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === r)) {
                    if (Object(n) !== n) return;
                    l = !1;
                  } else
                    for (
                      ;
                      !(l = (t = a.call(n)).done) &&
                      (s.push(t.value), s.length !== r);
                      l = !0
                    );
                } catch (e) {
                  (c = !0), (o = e);
                } finally {
                  try {
                    if (
                      !l &&
                      null != n.return &&
                      ((i = n.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (c) throw o;
                  }
                }
                return s;
              }
            })(e, r) ||
            (function (e, r) {
              if (e) {
                if ("string" == typeof e) return a(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? a(e, r)
                    : void 0
                );
              }
            })(e, r) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        i = n[0],
        s = n[1];
      return (
        (0, o.useEffect)(function () {
          var e = t.events.on(
            "checkout/data",
            function (e) {
              e && s(e);
            },
            {
              eager: !0,
            }
          );
          return function () {
            null == e || e.off();
          };
        }, []),
        i
      );
    }
  },
  6948: (e, r, n) => {
    n.d(r, {
      Z: () => s,
    });
    var t = n(4933),
      o = n.n(t),
      a = n(3476),
      i = n.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-2-emphasized-font);\n}\n\n.elsie-price--strikethrough {\n  text-decoration: line-through;\n}\n\n.elsie-price--sale {\n  color: var(--color-alert-800);\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",
      "",
    ]);
    const s = i;
  },
  8695: (e, r, n) => {
    n.d(r, {
      Z: () => s,
    });
    var t = n(4933),
      o = n.n(t),
      a = n(3476),
      i = n.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n/* .elsie-heading { } */\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const s = i;
  },
  9794: (e, r, n) => {
    n.d(r, {
      Z: () => s,
    });
    var t = n(4933),
      o = n.n(t),
      a = n(3476),
      i = n.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-loader {\n  --size: 24px;\n  --stroke-width: var(--shape-icon-stroke-4);\n  width: var(--size);\n  height: var(--size);\n  border-style: solid;\n  border-width: var(--stroke-width);\n  border-color: var(--color-neutral-400);\n  border-top-color: var(--color-brand-500);\n  border-radius: 50%;\n  animation: indeterminate 1s infinite ease-in-out;\n}\n\n.elsie-loader--shape-size-16 {\n  --size: 16px;\n}\n\n.elsie-loader--shape-size-24 {\n  --size: 24px;\n}\n\n.elsie-loader--shape-size-32 {\n  --size: 32px;\n}\n\n.elsie-loader--shape-size-64 {\n  --size: 64px;\n}\n\n.elsie-loader--shape-stroke-1 {\n  --stroke-width: var(--shape-icon-stroke-1);\n}\n\n.elsie-loader--shape-stroke-2 {\n  --stroke-width: var(--shape-icon-stroke-2);\n}\n\n.elsie-loader--shape-stroke-3 {\n  --stroke-width: var(--shape-icon-stroke-3);\n}\n\n.elsie-loader--shape-stroke-4 {\n  --stroke-width: var(--shape-icon-stroke-4);\n}\n\n@keyframes indeterminate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
      "",
    ]);
    const s = i;
  },
  5509: (e, r, n) => {
    n.d(r, {
      Z: () => s,
    });
    var t = n(4933),
      o = n.n(t),
      a = n(3476),
      i = n.n(a)()(o());
    i.push([
      e.id,
      ".checkout-order-summary {\n    border-radius: var(--shape-border-radius-2);\n    background: var(--color-neutral-200);\n    position: relative;\n    display: grid;\n    padding: var(--spacing-medium);\n}\n\n.checkout-order-summary__title {\n    color: var(--color-neutral-800);\n    font: var(--type-headline-2-default-font);\n    letter-spacing: var(--type-headline-2-default-letter-spacing);\n    margin: 0;\n    padding-bottom: var(--spacing-xsmall);\n    border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n}\n\n.checkout-order-summary__row {\n    color: var(--color-neutral-800);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--spacing-medium);\n}\n\n.checkout-order-summary__row > * {\n    margin: 0;\n}\n\n.checkout-order-summary__row .checkout-order-summary__row-price {\n    justify-self: end;\n}\n\n.checkout-order-summary__breakdown {\n    display: grid;\n    gap: var(--spacing-xsmall);\n    margin: var(--spacing-xbig) 0;\n}\n\n.checkout-order-summary__breakdown .checkout-order-summary__row > * {\n    font: var(--type-body-1-default-font);\n    letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__total .checkout-order-summary__row > * {\n    font: var(--type-body-1-emphasized-font);\n    letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n}\n\n/* Loading */\n.checkout-order-summary--loading {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.checkout-order-summary__loader {\n    margin: 0 auto;\n    position: absolute;\n    z-index: 999;\n    left: 0;\n    right: 0;\n    top: 50%;\n    bottom: 0;\n}\n\n@media only screen and (min-width:320px) and (max-width: 768px) {\n    .checkout-order-summary {\n        border-top: var(--shape-border-width-2) solid var(--color-neutral-400);\n        border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n        border-radius: 0;\n    }\n\n    .checkout-order-summary__title {\n        display: none;\n    }\n\n    .checkout-order-summary__breakdown {\n        margin-top: 0;\n    }\n}\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",
      "",
    ]);
    const s = i;
  },
  6374: (e, r, n) => {
    n.d(r, {
      Z: () => s,
    });
    var t = n(4933),
      o = n.n(t),
      a = n(3476),
      i = n.n(a)()(o());
    i.push([
      e.id,
      ".checkout-skeleton {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium);\n}\n\n.checkout-skeleton-row {\n  background: var(--color-neutral-300)\n    linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    )\n    no-repeat;\n  animation: shimmer infinite 1.2s linear;\n  border-radius: var(--shape-border-radius-2);\n}\n\n.checkout-skeleton-row__empty {\n  background: none;\n}\n\n.checkout-skeleton-row--multiline {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: var(--spacing-small);\n}\n\n.checkout-skeleton-row--full {\n  grid-column: 1 / -1;\n}\n\n/* Heading variants */\n.checkout-skeleton-row__heading-small {\n  height: 24px;\n}\n\n.checkout-skeleton-row__heading-medium {\n  height: 32px;\n}\n\n.checkout-skeleton-row__heading-large {\n  height: 40px;\n}\n\n/* Row variants */\n.checkout-skeleton-row__row-small {\n  height: 40px;\n}\n\n.checkout-skeleton-row__row-medium {\n  height: 48px;\n}\n\n.checkout-skeleton-row__row-large {\n  height: 56px;\n}\n\n.checkout-skeleton-row__row-xlarge {\n  height: 72px;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .checkout-skeleton {\n    grid-template-columns: 1fr;\n  }\n}\n",
      "",
    ]);
    const s = i;
  },
  1442: (e, r, n) => {
    var t = n(1892),
      o = n.n(t),
      a = n(5760),
      i = n.n(a),
      s = n(8311),
      l = n.n(s),
      c = n(8192),
      u = n.n(c),
      d = n(8060),
      m = n.n(d),
      p = n(4865),
      y = n.n(p),
      f = n(6374),
      h = {};
    (h.styleTagTransform = y()),
      (h.setAttributes = u()),
      (h.insert = l().bind(null, "head")),
      (h.domAPI = i()),
      (h.insertStyleElement = m()),
      o()(f.Z, h),
      f.Z && f.Z.locals && f.Z.locals;
  },
  6765: (r, n, t) => {
    var o, a;
    r.exports =
      ((o = {
        events: () => e.events,
      }),
      (a = {}),
      t.d(a, o),
      a);
  },
  4853: (e, n, t) => {
    var o, a;
    e.exports =
      ((o = {
        useCallback: () => r.useCallback,
        useEffect: () => r.useEffect,
        useRef: () => r.useRef,
        useState: () => r.useState,
      }),
      (a = {}),
      t.d(a, o),
      a);
  },
  5437: (e, r, t) => {
    var o, a;
    e.exports =
      ((o = {
        useCallback: () => n.useCallback,
        useContext: () => n.useContext,
        useDebugValue: () => n.useDebugValue,
        useEffect: () => n.useEffect,
        useId: () => n.useId,
        useImperativeHandle: () => n.useImperativeHandle,
        useLayoutEffect: () => n.useLayoutEffect,
        useMemo: () => n.useMemo,
        useReducer: () => n.useReducer,
        useRef: () => n.useRef,
        useState: () => n.useState,
      }),
      (a = {}),
      t.d(a, o),
      a);
  },
  4142: (e, r, n) => {
    var o, a;
    e.exports =
      ((o = {
        Fragment: () => t.Fragment,
        jsx: () => t.jsx,
        jsxs: () => t.jsxs,
      }),
      (a = {}),
      n.d(a, o),
      a);
  },
  3474: (e, r, n) => {
    var t, a;
    e.exports =
      ((t = {
        Component: () => o.Component,
        Fragment: () => o.Fragment,
        cloneElement: () => o.cloneElement,
        createContext: () => o.createContext,
        createElement: () => o.createElement,
        createRef: () => o.createRef,
        h: () => o.h,
        hydrate: () => o.hydrate,
        options: () => o.options,
        render: () => o.render,
        toChildArray: () => o.toChildArray,
      }),
      (a = {}),
      n.d(a, t),
      a);
  },
};
import a from "../runtime.js";
import * as i from "../757.js";
a.C(i);
import * as s from "./OrderSummary.js";
a.C(s);
var l = (1970, a((a.s = 1970))),
  c = l.He,
  u = l.ZP,
  d = l.Yj;
export { c as OrderSummary, u as default, d as useOrderSummary };

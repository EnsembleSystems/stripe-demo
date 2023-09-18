import * as e from "@dropins/elsie/event-bus.js";
import * as r from "@dropins/elsie/fetch-graphql.js";
import * as t from "@dropins/elsie/preact-compat.js";
import * as n from "@dropins/elsie/preact-hooks.js";
import * as o from "@dropins/elsie/preact-jsx-runtime.js";
import * as a from "@dropins/elsie/preact.js";
export const id = 940;
export const ids = [940];
export const modules = {
  9662: (e, r, t) => {
    t.d(r, {
      h: () => H,
      Z: () => H,
    });
    var n = t(424),
      o = t(5587),
      a = t(1892),
      i = t.n(a),
      s = t(5760),
      c = t.n(s),
      u = t(8311),
      l = t.n(u),
      d = t(8192),
      p = t.n(d),
      m = t(8060),
      h = t.n(m),
      y = t(4865),
      f = t.n(y),
      g = t(5445),
      b = {};
    (b.styleTagTransform = f()),
      (b.setAttributes = p()),
      (b.insert = l().bind(null, "head")),
      (b.domAPI = c()),
      (b.insertStyleElement = h()),
      i()(g.Z, b),
      g.Z && g.Z.locals && g.Z.locals;
    var v = t(3483),
      j = t(9724),
      x = t(7188);
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
    var k = [
      "className",
      "login",
      "shippingAddress",
      "billToShippingAddress",
      "shippingMethods",
      "paymentMethods",
      "orderSummary",
      "placeOrder",
    ];
    function w(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function S(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? w(Object(t), !0).forEach(function (r) {
              _(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : w(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r)
              );
            });
      }
      return e;
    }
    function _(e, r, t) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== O(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" !== O(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === O(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    var P = function (e) {
        var r = e.className,
          t = e.login,
          n = e.shippingAddress,
          a = e.billToShippingAddress,
          i = e.shippingMethods,
          s = e.paymentMethods,
          c = e.orderSummary,
          u = e.placeOrder,
          l = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = (function (e, r) {
                if (null == e) return {};
                var t,
                  n,
                  o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                  (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
              })(e, r);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (t = a[n]),
                  r.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (o[t] = e[t]));
            }
            return o;
          })(e, k);
        return (0, x.jsxs)(
          "div",
          S(
            S({}, l),
            {},
            {
              className: (0, o.S)(["checkout-checkout", r]),
              children: [
                (0, x.jsx)("div", {
                  className: "checkout-header",
                  children: (0, x.jsx)(v.X, {
                    level: 1,
                    children: (0, x.jsx)(j.xv, {
                      id: "Checkout.title",
                    }),
                    className: "checkout-header-title",
                  }),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-orderSummary",
                  children:
                    c &&
                    (0, x.jsx)(
                      c.type,
                      S(
                        {
                          ref: c.ref,
                        },
                        c.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-login",
                  children:
                    t &&
                    (0, x.jsx)(
                      t.type,
                      S(
                        {
                          ref: t.ref,
                        },
                        t.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-shippingAddress",
                  children:
                    n &&
                    (0, x.jsx)(
                      n.type,
                      S(
                        {
                          ref: n.ref,
                        },
                        n.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-billToShippingAddress",
                  children:
                    a &&
                    (0, x.jsx)(
                      a.type,
                      S(
                        {
                          ref: a.ref,
                        },
                        a.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-shippingMethods",
                  children:
                    i &&
                    (0, x.jsx)(
                      i.type,
                      S(
                        {
                          ref: i.ref,
                        },
                        i.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-paymentMethods",
                  children:
                    s &&
                    (0, x.jsx)(
                      s.type,
                      S(
                        {
                          ref: s.ref,
                        },
                        s.props
                      )
                    ),
                }),
                (0, x.jsx)("div", {
                  className: "checkout-placeOrder",
                  children:
                    u &&
                    (0, x.jsx)(
                      u.type,
                      S(
                        {
                          ref: u.ref,
                        },
                        u.props
                      )
                    ),
                }),
              ],
            }
          )
        );
      },
      C = t(7357),
      N = t(8299),
      E = t(4338),
      A = t(6350),
      M = t(7805),
      D = t(3474),
      T = t(5437);
    function L(e) {
      var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (0, x.jsx)(D.Fragment, {}),
        t = arguments.length > 2 ? arguments[2] : void 0;
      return (0, T.useMemo)(
        function () {
          return e
            ? (0, x.jsx)("div", {
                className: "elsie-slot",
                ref: function (r) {
                  r && e(r, t);
                },
              })
            : r;
        },
        [e]
      );
    }
    var I = t(9853),
      Z = t(4853);
    function z(e) {
      return (
        (z =
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
        z(e)
      );
    }
    var F = ["className", "slots"];
    function R(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function G(e, r, t) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== z(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" !== z(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === z(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    function X(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
      return n;
    }
    var H = function (e) {
      var r,
        t,
        a = e.className,
        i = e.slots,
        s = (function (e, r) {
          if (null == e) return {};
          var t,
            n,
            o = (function (e, r) {
              if (null == e) return {};
              var t,
                n,
                o = {},
                a = Object.keys(e);
              for (n = 0; n < a.length; n++)
                (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
              return o;
            })(e, r);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]),
                r.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        })(e, F),
        c =
          ((r = (0, Z.useState)(function () {
            return function () {
              console.log("Default Place order");
            };
          })),
          (t = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(r) ||
            (function (e, r) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var n,
                  o,
                  a,
                  i,
                  s = [],
                  c = !0,
                  u = !1;
                try {
                  if (((a = (t = t.call(e)).next), 0 === r)) {
                    if (Object(t) !== t) return;
                    c = !1;
                  } else
                    for (
                      ;
                      !(c = (n = a.call(t)).done) &&
                      (s.push(n.value), s.length !== r);
                      c = !0
                    );
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    if (
                      !c &&
                      null != t.return &&
                      ((i = t.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return s;
              }
            })(r, t) ||
            (function (e, r) {
              if (e) {
                if ("string" == typeof e) return X(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? X(e, r)
                    : void 0
                );
              }
            })(r, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        u = c[0],
        l = c[1],
        d = L(
          null == i ? void 0 : i.PaymentMethods,
          (0, x.jsx)(
            n.u,
            {
              message: "Payment Methods",
            },
            "paymentMethods"
          ),
          {
            onPlaceOrder: function (e) {
              l(function () {
                return e;
              });
            },
          }
        ),
        p = L(
          null == i ? void 0 : i.OrderSummary,
          (0, x.jsx)(C.H, {}, "orderSummary"),
          {}
        );
      return (0, x.jsx)(
        P,
        (function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2
              ? R(Object(t), !0).forEach(function (r) {
                  G(e, r, t[r]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : R(Object(t)).forEach(function (r) {
                  Object.defineProperty(
                    e,
                    r,
                    Object.getOwnPropertyDescriptor(t, r)
                  );
                });
          }
          return e;
        })(
          {
            className: a,
            login: (0, x.jsx)(N.U, {}),
            shippingAddress: (0, x.jsx)(E.G, {}),
            billToShippingAddress: (0, x.jsx)(A.y, {}),
            shippingMethods: (0, x.jsx)(M.SG, {}, "shippingMethods"),
            paymentMethods: d,
            orderSummary: p,
            placeOrder: (0, x.jsx)(
              I.z,
              {
                size: "large",
                onClick: u,
                className: (0, o.S)(["checkout-place-order__button", a]),
                children: (0, x.jsx)(j.xv, {
                  id: "Checkout.PlaceOrder.button",
                }),
              },
              "placeOrder"
            ),
          },
          s
        )
      );
    };
  },
  7357: (e, r, t) => {
    t.d(r, {
      H: () => F,
      Y: () => z,
    });
    var n = t(3177),
      o = t(5587),
      a = t(1892),
      i = t.n(a),
      s = t(5760),
      c = t.n(s),
      u = t(8311),
      l = t.n(u),
      d = t(8192),
      p = t.n(d),
      m = t(8060),
      h = t.n(m),
      y = t(4865),
      f = t.n(y),
      g = t(5509),
      b = {};
    (b.styleTagTransform = f()),
      (b.setAttributes = p()),
      (b.insert = l().bind(null, "head")),
      (b.domAPI = c()),
      (b.insertStyleElement = h()),
      i()(g.Z, b),
      g.Z && g.Z.locals && g.Z.locals;
    var v = t(3483),
      j = t(7354),
      x = t(9724),
      O = t(1988),
      k = t(7188);
    function w(e) {
      return (
        (w =
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
        w(e)
      );
    }
    var S = [
      "className",
      "currency",
      "subtotal",
      "total",
      "shipping",
      "tax",
      "isLoading",
    ];
    function _(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function P(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? _(Object(t), !0).forEach(function (r) {
              C(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : _(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r)
              );
            });
      }
      return e;
    }
    function C(e, r, t) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== w(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" !== w(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === w(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    var N = function (e) {
        var r = e.className,
          t = e.currency,
          n = e.subtotal,
          a = e.total,
          i = e.shipping,
          s = e.tax,
          c = e.isLoading,
          u = void 0 !== c && c,
          l = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = (function (e, r) {
                if (null == e) return {};
                var t,
                  n,
                  o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                  (t = a[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
              })(e, r);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (t = a[n]),
                  r.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (o[t] = e[t]));
            }
            return o;
          })(e, S);
        return (0, k.jsxs)(
          "div",
          P(
            P({}, l),
            {},
            {
              className: (0, o.S)(["checkout-order-summary", r]),
              children: [
                (0, k.jsx)(v.X, {
                  level: 2,
                  className: "checkout-order-summary__title",
                  children: (0, k.jsx)(x.xv, {
                    id: "Checkout.OrderSummary.title",
                  }),
                }),
                u &&
                  (0, k.jsx)(j.a, {
                    className: "checkout-order-summary__loader",
                  }),
                (0, k.jsxs)("div", {
                  className: (0, o.S)([["checkout-order-summary--loading", u]]),
                  children: [
                    (0, k.jsxs)("div", {
                      className: "checkout-order-summary__breakdown",
                      children: [
                        (0, k.jsxs)("div", {
                          className:
                            "checkout-order-summary__row checkout-order-summary__row-subtotal",
                          children: [
                            (0, k.jsx)("p", {
                              children: (0, k.jsx)(x.xv, {
                                id: "Checkout.OrderSummary.subtotal",
                              }),
                            }),
                            (0, k.jsx)(O.t, {
                              amount: n,
                              currency: t,
                              className: (0, o.S)([
                                "checkout-order-summary__row-price",
                                r,
                              ]),
                            }),
                          ],
                        }),
                        null != i &&
                          (0, k.jsxs)("div", {
                            className:
                              "checkout-order-summary__row checkout-order-summary__row-shipping",
                            children: [
                              (0, k.jsx)("p", {
                                children: (0, k.jsx)(x.xv, {
                                  id: "Checkout.OrderSummary.shipping",
                                }),
                              }),
                              0 === i
                                ? (0, k.jsx)("p", {
                                    className:
                                      "checkout-order-summary__row-price",
                                    children: (0, k.jsx)(x.xv, {
                                      id: "Checkout.OrderSummary.freeShipping",
                                    }),
                                  })
                                : (0, k.jsx)(O.t, {
                                    amount: i,
                                    currency: t,
                                    className: (0, o.S)([
                                      "checkout-order-summary__row-price",
                                      r,
                                    ]),
                                  }),
                            ],
                          }),
                        null != s &&
                          (0, k.jsxs)("div", {
                            className:
                              "checkout-order-summary__row checkout-order-summary__row-tax",
                            children: [
                              (0, k.jsx)("p", {
                                children: (0, k.jsx)(x.xv, {
                                  id: "Checkout.OrderSummary.tax",
                                }),
                              }),
                              (0, k.jsx)(O.t, {
                                amount: s,
                                currency: t,
                                className: (0, o.S)([
                                  "checkout-order-summary__row-price",
                                  r,
                                ]),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, k.jsx)("div", {
                      className: "checkout-order-summary__total",
                      children: (0, k.jsxs)("div", {
                        className:
                          "checkout-order-summary__row checkout-order-summary__row-total",
                        children: [
                          (0, k.jsx)("p", {
                            children: (0, k.jsx)(x.xv, {
                              id: "Checkout.OrderSummary.total",
                            }),
                          }),
                          (0, k.jsx)(O.t, {
                            amount: a,
                            currency: t,
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
      E = (t(1442), t(9799)),
      A = function () {
        return (0, k.jsxs)(E.O, {
          className: "order-summary__skeleton",
          children: [
            (0, k.jsx)(E.d, {
              variant: "heading",
              size: "medium",
            }),
            (0, k.jsx)(E.d, {
              variant: "empty",
              size: "medium",
            }),
            (0, k.jsx)(E.d, {
              size: "large",
              isFull: !0,
              lines: 3,
            }),
          ],
        });
      },
      M = 0;
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
    function T(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function L(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? T(Object(t), !0).forEach(function (r) {
              I(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : T(Object(t)).forEach(function (r) {
              Object.defineProperty(
                e,
                r,
                Object.getOwnPropertyDescriptor(t, r)
              );
            });
      }
      return e;
    }
    function I(e, r, t) {
      return (
        (r = (function (e) {
          var r = (function (e, r) {
            if ("object" !== D(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" !== D(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === D(r) ? r : String(r);
        })(r)) in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    function Z() {
      return (
        (Z = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }),
        Z.apply(this, arguments)
      );
    }
    function z() {
      var e,
        r,
        t = (0, n.t)(),
        o = !!t,
        a = null == t ? void 0 : t.shipping_addresses,
        i = !(null == a || !a.length),
        s = null == t ? void 0 : t.prices,
        c = null == s ? void 0 : s.grand_total,
        u = !!c,
        l = null == s ? void 0 : s.subtotal_excluding_tax,
        d = !!l,
        p = (null == s ? void 0 : s.applied_taxes) || [],
        m = !!p.length,
        h = {
          isLoading: !1,
        };
      if (!o || !u) return h;
      if (
        ((h.summary = {
          total: c.value,
          subtotal: M,
          currency: c.currency,
        }),
        d && (h.summary.subtotal = l.value),
        m &&
          (h.summary.tax = p.reduce(function (e, r) {
            return e + r.amount.value;
          }, M)),
        !i)
      )
        return h;
      var y = a[0],
        f = null == y ? void 0 : y.selected_shipping_method;
      return f
        ? ((h.summary.shipping =
            null !==
              (e =
                null == f || null === (r = f.amount) || void 0 === r
                  ? void 0
                  : r.value) && void 0 !== e
              ? e
              : M),
          h)
        : h;
    }
    var F = function (e) {
      var r = Z(
          {},
          ((function (e) {
            if (null == e) throw new TypeError("Cannot destructure " + e);
          })(e),
          e)
        ),
        t = z(),
        n = t.isLoading,
        o = t.summary;
      return (0, k.jsxs)(
        "div",
        L(
          L({}, r),
          {},
          {
            children: [
              !o && (0, k.jsx)(A, {}),
              o &&
                (0, k.jsx)(N, {
                  isLoading: n,
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
  5445: (e, r, t) => {
    t.d(r, {
      Z: () => s,
    });
    var n = t(4933),
      o = t.n(n),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.checkout-checkout {\n    grid-template-columns: repeat(var(--grid-4-columns), 1fr);\n    grid-column-gap: var(--grid-4-gutters);\n    grid-row-gap: var(--spacing-xbig);\n    margin: 0 auto;\n    display: grid;\n    align-items: start;\n    justify-content: center;\n    width: 100%;\n    max-width: 1920px;\n}\n\n.checkout-header {\n    text-align: left;\n    width: 100%;\n}\n\n.checkout-header-title {\n    color: var(--color-neutral-800);\n    font: var(--type-headline-1-font);\n    letter-spacing: var(--type-headline-1-letter-spacing);\n    border-bottom: var(--shape-border-width-3) solid var(--color-neutral-400);\n    padding-bottom: var(--spacing-xsmall);\n    padding-top: var(--spacing-small);\n    margin: 0;\n}\n\n/* Grid */\n.checkout-header,\n.checkout-login,\n.checkout-shippingAddress,\n.checkout-billToShippingAddress,\n.checkout-shippingMethods,\n.checkout-paymentMethods,\n.checkout-placeOrder {\n    grid-column: 3 / span 4;\n}\n\n.checkout-orderSummary {\n    grid-column: 8 / span 3;\n    grid-row: 1 / 6;\n}\n\n@media screen and (min-width:768px) and (max-width:1366px) {\n    .checkout-checkout {\n        grid-template-columns: repeat(var(--grid-3-columns), 1fr);\n        grid-column-gap: var(--grid-3-gutters);\n    }\n\n    .checkout-header,\n    .checkout-login,\n    .checkout-shippingAddress,\n    .checkout-billToShippingAddress,\n    .checkout-shippingMethods,\n    .checkout-paymentMethods,\n    .checkout-placeOrder {\n        grid-column: 1 / span 7;\n    }\n\n    .checkout-orderSummary {\n        grid-column: 9 / span 4;\n        grid-row: 1 / 6;\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (min-width:320px) and (max-width: 768px) {\n    .checkout-checkout {\n        grid-template-columns: repeat(var(--grid-1-columns), 1fr);\n        grid-column-gap: var(--grid-1-gutters);\n    }\n\n    .checkout-header-title,\n    .checkout-login,\n    .checkout-shippingAddress,\n    .checkout-billToShippingAddress,\n    .checkout-shippingMethods,\n    .checkout-paymentMethods,\n    .checkout-placeOrder{\n        padding-left: var(--spacing-small);\n        padding-right: var(--spacing-small);\n    }\n\n    .checkout-header,\n    .checkout-orderSummary,\n    .checkout-login,\n    .checkout-shippingAddress,\n    .checkout-billToShippingAddress,\n    .checkout-shippingMethods,\n    .checkout-paymentMethods,\n    .checkout-placeOrder {\n        grid-column: 1 / span 4;\n    }\n\n    .checkout-orderSummary {\n        grid-row: 6 / 6;\n    }\n\n    .checkout-placeOrder button {\n        width: 100%;\n    }\n}\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const s = i;
  },
  5509: (e, r, t) => {
    t.d(r, {
      Z: () => s,
    });
    var n = t(4933),
      o = t.n(n),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      ".checkout-order-summary {\n    border-radius: var(--shape-border-radius-2);\n    background: var(--color-neutral-200);\n    position: relative;\n    display: grid;\n    padding: var(--spacing-medium);\n}\n\n.checkout-order-summary__title {\n    color: var(--color-neutral-800);\n    font: var(--type-headline-2-default-font);\n    letter-spacing: var(--type-headline-2-default-letter-spacing);\n    margin: 0;\n    padding-bottom: var(--spacing-xsmall);\n    border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n}\n\n.checkout-order-summary__row {\n    color: var(--color-neutral-800);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--spacing-medium);\n}\n\n.checkout-order-summary__row > * {\n    margin: 0;\n}\n\n.checkout-order-summary__row .checkout-order-summary__row-price {\n    justify-self: end;\n}\n\n.checkout-order-summary__breakdown {\n    display: grid;\n    gap: var(--spacing-xsmall);\n    margin: var(--spacing-xbig) 0;\n}\n\n.checkout-order-summary__breakdown .checkout-order-summary__row > * {\n    font: var(--type-body-1-default-font);\n    letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__total .checkout-order-summary__row > * {\n    font: var(--type-body-1-emphasized-font);\n    letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n}\n\n/* Loading */\n.checkout-order-summary--loading {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.checkout-order-summary__loader {\n    margin: 0 auto;\n    position: absolute;\n    z-index: 999;\n    left: 0;\n    right: 0;\n    top: 50%;\n    bottom: 0;\n}\n\n@media only screen and (min-width:320px) and (max-width: 768px) {\n    .checkout-order-summary {\n        border-top: var(--shape-border-width-2) solid var(--color-neutral-400);\n        border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n        border-radius: 0;\n    }\n\n    .checkout-order-summary__title {\n        display: none;\n    }\n\n    .checkout-order-summary__breakdown {\n        margin-top: 0;\n    }\n}\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",
      "",
    ]);
    const s = i;
  },
  6765: (r, t, n) => {
    var o, a;
    r.exports =
      ((o = {
        events: () => e.events,
      }),
      (a = {}),
      n.d(a, o),
      a);
  },
  9699: (e, t, n) => {
    var o, a;
    e.exports =
      ((o = {
        FetchGraphQL: () => r.FetchGraphQL,
      }),
      (a = {}),
      n.d(a, o),
      a);
  },
  4853: (e, r, n) => {
    var o, a;
    e.exports =
      ((o = {
        useCallback: () => t.useCallback,
        useEffect: () => t.useEffect,
        useRef: () => t.useRef,
        useState: () => t.useState,
      }),
      (a = {}),
      n.d(a, o),
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
  4142: (e, r, t) => {
    var n, a;
    e.exports =
      ((n = {
        Fragment: () => o.Fragment,
        jsx: () => o.jsx,
        jsxs: () => o.jsxs,
      }),
      (a = {}),
      t.d(a, n),
      a);
  },
  3474: (e, r, t) => {
    var n, o;
    e.exports =
      ((n = {
        Component: () => a.Component,
        Fragment: () => a.Fragment,
        cloneElement: () => a.cloneElement,
        createContext: () => a.createContext,
        createElement: () => a.createElement,
        createRef: () => a.createRef,
        h: () => a.h,
        hydrate: () => a.hydrate,
        options: () => a.options,
        render: () => a.render,
        toChildArray: () => a.toChildArray,
      }),
      (o = {}),
      t.d(o, n),
      o);
  },
};
import i from "../runtime.js";
import * as s from "../757.js";
i.C(s);
import * as c from "../750.js";
i.C(c);
import * as u from "../212.js";
i.C(u);
import * as l from "../693.js";
i.C(l);
import * as d from "../942.js";
i.C(d);
import * as p from "../574.js";
i.C(p);
import * as m from "../261.js";
i.C(m);
import * as h from "../853.js";
i.C(h);
import * as y from "../549.js";
i.C(y);
import * as f from "../471.js";
i.C(f);
import * as g from "../338.js";
i.C(g);
import * as b from "../299.js";
i.C(b);
import * as v from "../805.js";
i.C(v);
import * as j from "../350.js";
i.C(j);
import * as x from "./Checkout.js";
i.C(x);
var O = (9662, i((i.s = 9662))),
  k = O.h,
  w = O.Z;
export { k as Checkout, w as default };

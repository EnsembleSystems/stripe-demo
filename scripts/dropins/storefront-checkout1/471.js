export const id = 471;
export const ids = [471];
export const modules = {
  424: (e, n, t) => {
    t.d(n, {
      u: () => _,
    });
    var r = t(5587),
      o = t(1892),
      a = t.n(o),
      i = t(5760),
      l = t.n(i),
      s = t(8311),
      c = t.n(s),
      u = t(8192),
      d = t.n(u),
      p = t(8060),
      m = t.n(p),
      f = t(4865),
      h = t.n(f),
      y = t(123),
      v = {};
    (v.styleTagTransform = h()),
      (v.setAttributes = d()),
      (v.insert = c().bind(null, "head")),
      (v.domAPI = l()),
      (v.insertStyleElement = m()),
      a()(y.Z, v),
      y.Z && y.Z.locals && y.Z.locals;
    var b = t(1072),
      g = t(3483),
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
    var O = ["className", "icon", "heading", "headingLevel", "message"];
    function x(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    function j(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? x(Object(t), !0).forEach(function (n) {
              S(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : x(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function S(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== w(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== w(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === w(n) ? n : String(n);
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    var _ = function (e) {
      var n = e.className,
        t = e.icon,
        o = e.heading,
        a = e.headingLevel,
        i = void 0 === a ? 2 : a,
        l = e.message,
        s = (function (e, n) {
          if (null == e) return {};
          var t,
            r,
            o = (function (e, n) {
              if (null == e) return {};
              var t,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
              return o;
            })(e, n);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (t = a[r]),
                n.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        })(e, O);
      return (0, k.jsxs)(
        "div",
        j(
          j({}, s),
          {},
          {
            className: (0, r.S)(["elsie-empty-state", n]),
            children: [
              t &&
                (0, k.jsx)(b.J, {
                  size: "64",
                  className: "elsie-empty-state__icon",
                  source: t,
                }),
              o &&
                (0, k.jsx)(g.X, {
                  level: i,
                  className: "elsie-empty-state__heading",
                  children: o,
                }),
              l &&
                (0, k.jsx)("p", {
                  className: "elsie-empty-state__message",
                  children: l,
                }),
            ],
          }
        )
      );
    };
  },
  3483: (e, n, t) => {
    t.d(n, {
      X: () => b,
    });
    var r = t(1892),
      o = t.n(r),
      a = t(5760),
      i = t.n(a),
      l = t(8311),
      s = t.n(l),
      c = t(8192),
      u = t.n(c),
      d = t(8060),
      p = t.n(d),
      m = t(4865),
      f = t.n(m),
      h = t(8695),
      y = {};
    (y.styleTagTransform = f()),
      (y.setAttributes = u()),
      (y.insert = s().bind(null, "head")),
      (y.domAPI = i()),
      (y.insertStyleElement = p()),
      o()(h.Z, y),
      h.Z && h.Z.locals && h.Z.locals;
    var v = t(7188),
      b = function (e) {
        var n = e.className,
          t = e.children,
          r = e.level,
          o = void 0 === r ? 2 : r,
          a = o >= 1 && o <= 6 ? "h".concat(o) : "h2";
        return (0, v.jsx)(a, {
          className: n,
          children: t,
        });
      };
  },
  7354: (e, n, t) => {
    t.d(n, {
      a: () => g,
    });
    var r = t(5587),
      o = t(1892),
      a = t.n(o),
      i = t(5760),
      l = t.n(i),
      s = t(8311),
      c = t.n(s),
      u = t(8192),
      d = t.n(u),
      p = t(8060),
      m = t.n(p),
      f = t(4865),
      h = t.n(f),
      y = t(9794),
      v = {};
    (v.styleTagTransform = h()),
      (v.setAttributes = d()),
      (v.insert = c().bind(null, "head")),
      (v.domAPI = l()),
      (v.insertStyleElement = m()),
      a()(y.Z, v),
      y.Z && y.Z.locals && y.Z.locals;
    var b = t(7188),
      g = function (e) {
        var n = e.size,
          t = void 0 === n ? "24" : n,
          o = e.stroke,
          a = void 0 === o ? "4" : o,
          i = e.className;
        return (0, b.jsx)("div", {
          className: (0, r.S)([
            "elsie-loader",
            "elsie-loader--shape-size-".concat(t),
            "elsie-loader--shape-stroke-".concat(a),
            i,
          ]),
        });
      };
  },
  9799: (e, n, t) => {
    t.d(n, {
      O: () => m,
      d: () => p,
    });
    var r = t(5587),
      o = (t(1442), t(7188));
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
      l = ["className", "children"];
    function s(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r);
      }
      return t;
    }
    function c(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? s(Object(t), !0).forEach(function (n) {
              u(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : s(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function u(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== a(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== a(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === a(n) ? n : String(n);
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function d(e, n) {
      if (null == e) return {};
      var t,
        r,
        o = (function (e, n) {
          if (null == e) return {};
          var t,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
          return o;
        })(e, n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
          (t = a[r]),
            n.indexOf(t) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, t) &&
                (o[t] = e[t]));
      }
      return o;
    }
    var p = function (e) {
        var n = e.isFull,
          t = void 0 !== n && n,
          a = e.lines,
          l = void 0 === a ? 1 : a,
          s = e.size,
          u = void 0 === s ? "small" : s,
          p = e.variant,
          m = void 0 === p ? "row" : p,
          f = d(e, i),
          h = [
            ["checkout-skeleton-row__".concat(m), m],
            ["checkout-skeleton-row__".concat(m, "-").concat(u), m && u],
          ];
        return !1 == l > 1
          ? (0, o.jsx)(
              "div",
              c(
                c({}, f),
                {},
                {
                  class: (0, r.S)(
                    [
                      "checkout-skeleton-row",
                      ["checkout-skeleton-row--full", t],
                    ].concat(h)
                  ),
                }
              )
            )
          : (0, o.jsx)(
              "div",
              c(
                c({}, f),
                {},
                {
                  class: (0, r.S)([
                    "checkout-skeleton-row--multiline",
                    ["checkout-skeleton-row--full", t],
                  ]),
                  children: Array.from({
                    length: l,
                  }).map(function (e, n) {
                    return (0, o.jsx)(
                      "div",
                      {
                        class: (0, r.S)(
                          [
                            "checkout-skeleton-row",
                            ["checkout-skeleton-row--full", t],
                          ].concat(h)
                        ),
                      },
                      n
                    );
                  }),
                }
              )
            );
      },
      m = function (e) {
        var n = e.className,
          t = e.children,
          a = d(e, l);
        return (0, o.jsx)(
          "div",
          c(
            c({}, a),
            {},
            {
              className: (0, r.S)(["checkout-skeleton", n]),
              children: t,
            }
          )
        );
      };
  },
  3177: (e, n, t) => {
    t.d(n, {
      t: () => i,
    });
    var r = t(6765),
      o = t(5437);
    function a(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    function i() {
      var e,
        n,
        t =
          ((e = (0, o.useState)()),
          (n = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var r,
                  o,
                  a,
                  i,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (t = t.call(e)).next), 0 === n)) {
                    if (Object(t) !== t) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(t)).done) &&
                      (l.push(r.value), l.length !== n);
                      s = !0
                    );
                } catch (e) {
                  (c = !0), (o = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != t.return &&
                      ((i = t.return()), Object(i) !== i)
                    )
                      return;
                  } finally {
                    if (c) throw o;
                  }
                }
                return l;
              }
            })(e, n) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return a(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? a(e, n)
                    : void 0
                );
              }
            })(e, n) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        i = t[0],
        l = t[1];
      return (
        (0, o.useEffect)(function () {
          var e = r.events.on(
            "checkout/data",
            function (e) {
              e && l(e);
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
  123: (e, n, t) => {
    t.d(n, {
      Z: () => l,
    });
    var r = t(4933),
      o = t.n(r),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      ".elsie-empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  row-gap: var(--spacing-small);\n}\n\n.elsie-empty-state__icon {\n  color: var(--color-neutral-400);\n}\n\n.elsie-empty-state__heading {\n  color: var(--color-neutral-800);\n  font: var(--type-headline-2-default-font);\n  letter-spacing: var(--type-headline-2-default-letter-spacing);\n  margin: 0;\n}\n\n.elsie-empty-state__message {\n  color: var(--color-neutral-800);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n  text-align: center;\n  margin: 0;\n  max-width: 544px; /* ~80 characters line length*/\n}\n",
      "",
    ]);
    const l = i;
  },
  8695: (e, n, t) => {
    t.d(n, {
      Z: () => l,
    });
    var r = t(4933),
      o = t.n(r),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n/* .elsie-heading { } */\n\n/* Extra small devices (phones, 600px and down) */\n/* @media only screen and (max-width: 600px) { } */\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const l = i;
  },
  9794: (e, n, t) => {
    t.d(n, {
      Z: () => l,
    });
    var r = t(4933),
      o = t.n(r),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-loader {\n  --size: 24px;\n  --stroke-width: var(--shape-icon-stroke-4);\n  width: var(--size);\n  height: var(--size);\n  border-style: solid;\n  border-width: var(--stroke-width);\n  border-color: var(--color-neutral-400);\n  border-top-color: var(--color-brand-500);\n  border-radius: 50%;\n  animation: indeterminate 1s infinite ease-in-out;\n}\n\n.elsie-loader--shape-size-16 {\n  --size: 16px;\n}\n\n.elsie-loader--shape-size-24 {\n  --size: 24px;\n}\n\n.elsie-loader--shape-size-32 {\n  --size: 32px;\n}\n\n.elsie-loader--shape-size-64 {\n  --size: 64px;\n}\n\n.elsie-loader--shape-stroke-1 {\n  --stroke-width: var(--shape-icon-stroke-1);\n}\n\n.elsie-loader--shape-stroke-2 {\n  --stroke-width: var(--shape-icon-stroke-2);\n}\n\n.elsie-loader--shape-stroke-3 {\n  --stroke-width: var(--shape-icon-stroke-3);\n}\n\n.elsie-loader--shape-stroke-4 {\n  --stroke-width: var(--shape-icon-stroke-4);\n}\n\n@keyframes indeterminate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
      "",
    ]);
    const l = i;
  },
  6374: (e, n, t) => {
    t.d(n, {
      Z: () => l,
    });
    var r = t(4933),
      o = t.n(r),
      a = t(3476),
      i = t.n(a)()(o());
    i.push([
      e.id,
      ".checkout-skeleton {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium);\n}\n\n.checkout-skeleton-row {\n  background: var(--color-neutral-300)\n    linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    )\n    no-repeat;\n  animation: shimmer infinite 1.2s linear;\n  border-radius: var(--shape-border-radius-2);\n}\n\n.checkout-skeleton-row__empty {\n  background: none;\n}\n\n.checkout-skeleton-row--multiline {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: var(--spacing-small);\n}\n\n.checkout-skeleton-row--full {\n  grid-column: 1 / -1;\n}\n\n/* Heading variants */\n.checkout-skeleton-row__heading-small {\n  height: 24px;\n}\n\n.checkout-skeleton-row__heading-medium {\n  height: 32px;\n}\n\n.checkout-skeleton-row__heading-large {\n  height: 40px;\n}\n\n/* Row variants */\n.checkout-skeleton-row__row-small {\n  height: 40px;\n}\n\n.checkout-skeleton-row__row-medium {\n  height: 48px;\n}\n\n.checkout-skeleton-row__row-large {\n  height: 56px;\n}\n\n.checkout-skeleton-row__row-xlarge {\n  height: 72px;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .checkout-skeleton {\n    grid-template-columns: 1fr;\n  }\n}\n",
      "",
    ]);
    const l = i;
  },
  1442: (e, n, t) => {
    var r = t(1892),
      o = t.n(r),
      a = t(5760),
      i = t.n(a),
      l = t(8311),
      s = t.n(l),
      c = t(8192),
      u = t.n(c),
      d = t(8060),
      p = t.n(d),
      m = t(4865),
      f = t.n(m),
      h = t(6374),
      y = {};
    (y.styleTagTransform = f()),
      (y.setAttributes = u()),
      (y.insert = s().bind(null, "head")),
      (y.domAPI = i()),
      (y.insertStyleElement = p()),
      o()(h.Z, y),
      h.Z && h.Z.locals && h.Z.locals;
  },
};

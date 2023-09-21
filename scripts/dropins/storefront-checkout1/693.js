export const id = 693;
export const ids = [693];
export const modules = {
  3268: (e, n, t) => {
    t.d(n, {
      c: () => D,
    });
    var r = t(4853),
      i = t(5587),
      o = t(1892),
      l = t.n(o),
      a = t(5760),
      s = t.n(a),
      c = t(8311),
      p = t.n(c),
      d = t(8192),
      u = t.n(d),
      b = t(8060),
      f = t.n(b),
      _ = t(4865),
      g = t.n(_),
      m = t(1971),
      y = {};
    (y.styleTagTransform = g()),
      (y.setAttributes = u()),
      (y.insert = p().bind(null, "head")),
      (y.domAPI = s()),
      (y.insertStyleElement = f()),
      l()(m.Z, y),
      m.Z && m.Z.locals && m.Z.locals;
    var v,
      k = t(3354);
    function h() {
      return (
        (h = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
        h.apply(this, arguments)
      );
    }
    const x = function (e) {
      return k.createElement(
        "svg",
        h(
          {
            "data-name": "Icon \\u2013 Chevron down \\u2013 Base",
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
          },
          e
        ),
        v ||
          (v = k.createElement("path", {
            d: "M7.745 9.877 12 14.132l4.255-4.255",
            fill: "none",
            stroke: "currentColor",
            "data-name": "Chevron down icon",
          }))
      );
    };
    var w = t(1072),
      j = t(7188);
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
    function S(e, n) {
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
    function P(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? S(Object(t), !0).forEach(function (n) {
              N(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : S(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function N(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== O(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== O(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === O(n) ? n : String(n);
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
    function A(e, n) {
      return (
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
              i,
              o,
              l,
              a = [],
              s = !0,
              c = !1;
            try {
              if (((o = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = o.call(t)).done) &&
                  (a.push(r.value), a.length !== n);
                  s = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return a;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return E(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? E(e, n)
                : void 0
            );
          }
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function E(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var D = function (e) {
      var n = e.name,
        t = e.value,
        o = void 0 === t ? null : t,
        l = e.options,
        a = e.variant,
        s = void 0 === a ? "primary" : a,
        c = e.floatingLabel,
        p = e.size,
        d = void 0 === p ? "large" : p,
        u = e.handleSelect,
        b = void 0 === u ? function () {} : u,
        f = e.disabled,
        _ = void 0 !== f && f,
        g = e.placeholder,
        m = e.icon,
        y = e.className,
        v = A(
          (0, r.useState)({
            value: o,
            text: g,
            icon: m,
          }),
          2
        ),
        k = v[0],
        h = v[1];
      (0, r.useEffect)(
        function () {
          var e =
            null == l
              ? void 0
              : l.find(function (e) {
                  return e.value === o;
                });
          h(
            e || {
              value: null,
              text: g,
              icon: m,
            }
          );
        },
        [o, l, g, m]
      );
      var O = A((0, r.useState)(!1), 2),
        S = O[0],
        N = O[1],
        E = (0, r.useRef)(null),
        D =
          null == l
            ? void 0
            : l.map(function (e) {
                var n = e.value,
                  t = e.icon,
                  r = e.text,
                  o = e.disabled,
                  l = void 0 !== o && o,
                  a = n === k.value;
                return (0, j.jsx)(
                  "li",
                  {
                    className: (0, i.S)(["elsie-picker__option"]),
                    children: (0, j.jsxs)("button", {
                      disabled: l,
                      type: "button",
                      className: (0, i.S)([
                        "elsie-picker__option-button",
                        "elsie-picker__option-button--".concat(d),
                        ["elsie-picker__option-button--selected", a],
                        ["elsie-picker__option-button--disabled", l],
                      ]),
                      onClick: function () {
                        return (function (e) {
                          var n;
                          h(e),
                            N(!1),
                            null === (n = E.current) ||
                              void 0 === n ||
                              n.focus(),
                            b(e.value);
                        })(e);
                      },
                      "aria-label": r,
                      children: [
                        t &&
                          (0, j.jsx)(
                            t.type,
                            P(
                              P({}, t.props),
                              {},
                              {
                                className: (0, i.S)([
                                  "elsie-picker__option-icon",
                                  t.props.className,
                                ]),
                              }
                            )
                          ),
                        (0, j.jsx)("span", {
                          className: (0, i.S)([
                            "elsie-picker__option-label",
                            ["elsie-picker__option-label-icon", t],
                          ]),
                          children: r,
                        }),
                      ],
                    }),
                  },
                  n
                );
              });
      return (0, j.jsxs)("div", {
        className: (0, i.S)([
          "elsie-picker",
          ["elsie-picker--floating", !!c],
          "elsie-picker--".concat(d),
          y,
        ]),
        children: [
          (0, j.jsxs)("button", {
            ref: E,
            "aria-label": k.text,
            type: "button",
            disabled: _,
            onClick: function () {
              N(function (e) {
                return !e;
              });
            },
            className: (0, i.S)([
              "elsie-picker__selected",
              "elsie-picker__selected--".concat(s),
              ["elsie-picker__selected--floating", !!c],
              ["elsie-picker__selected--disabled", _],
              ["elsie-picker__selected--icon", m],
              ["elsie-picker__selected--option", k.text != g],
            ]),
            children: [
              (0, j.jsxs)("span", {
                className: (0, i.S)([
                  "elsie-picker__selected-content",
                  ["elsie-picker__selected-content--floating", !!c],
                ]),
                children: [
                  k.icon &&
                    (0, j.jsx)(
                      k.icon.type,
                      P(
                        P({}, k.icon.props),
                        {},
                        {
                          className: (0, i.S)([
                            "elsie-picker__selected-icon",
                            ["elsie-picker__selected-icon--disabled", _],
                            k.icon.props.className,
                          ]),
                        }
                      )
                    ),
                  c &&
                    (0, j.jsx)("span", {
                      htmlFor: n,
                      className: (0, i.S)([
                        ["elsie-picker__label--floating", !!c],
                      ]),
                      children: c,
                    }),
                  (0, j.jsx)("span", {
                    className: (0, i.S)([
                      "elsie-picker__selected-label",
                      "elsie-picker__selected-label--".concat(d),
                    ]),
                    children: k.text,
                  }),
                ],
              }),
              (0, j.jsx)("span", {
                className: "elsie-picker__selected-chevron",
                children: (0, j.jsx)(w.J, {
                  source: x,
                  size: "24",
                  stroke: "2",
                  className: "elsie-picker__chevronDown",
                }),
              }),
            ],
          }),
          (0, j.jsx)("input", {
            type: "hidden",
            name: n,
            value: k.value || void 0,
          }),
          (0, j.jsx)("div", {
            className: (0, i.S)([
              "elsie-picker__options-container",
              ["elsie-picker__options-container--hidden", !S],
            ]),
            children: (0, j.jsx)("ul", {
              className: (0, i.S)(["elsie-picker__options-list"]),
              children: D,
            }),
          }),
        ],
      });
    };
  },
  4625: (e, n, t) => {
    function r(e) {
      return (
        (r =
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
        r(e)
      );
    }
    function i(e, n) {
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
    function o(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? i(Object(t), !0).forEach(function (n) {
              l(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : i(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function l(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== r(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var i = t.call(e, "string");
              if ("object" !== r(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === r(n) ? n : String(n);
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
    function a(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    t.d(n, {
      C: () => s,
    });
    var s = function (e) {
      var n = new FormData(e),
        t = Object.fromEntries(n);
      return Object.entries(t).reduce(function (n, t) {
        var r,
          i,
          s = ((r = t),
          (i = 1),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(r) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var r,
                  i,
                  o,
                  l,
                  a = [],
                  s = !0,
                  c = !1;
                try {
                  if (((o = (t = t.call(e)).next), 0 === n)) {
                    if (Object(t) !== t) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = o.call(t)).done) &&
                      (a.push(r.value), a.length !== n);
                      s = !0
                    );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    if (
                      !s &&
                      null != t.return &&
                      ((l = t.return()), Object(l) !== l)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return a;
              }
            })(r, i) ||
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
            })(r, i) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })())[0],
          c = e.elements[s];
        return null != c && c.validationMessage
          ? o(o({}, n), {}, l({}, s, c.validationMessage))
          : o({}, n);
      }, {});
    };
  },
  1971: (e, n, t) => {
    t.d(n, {
      Z: () => a,
    });
    var r = t(4933),
      i = t.n(r),
      o = t(3476),
      l = t.n(o)()(i());
    l.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-picker {\n  display: grid;\n  grid-auto-flow: row;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n}\n\n.elsie-picker__selected {\n  background-color: var(--color-neutral-50);\n  border: solid var(--shape-border-width-1);\n  border-color: var(--color-neutral-600);\n  border-radius: var(--shape-border-radius-1);\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  color: var(--color-neutral-700);\n  display: flex;\n  gap: var(--spacing-small);\n  width: 100%;\n}\n\n.elsie-picker__selected-content {\n  align-items: center;\n  display: flex;\n}\n\n/* Options list with icons */\n.elsie-picker__option-label-icon.elsie-picker__option-label {\n  padding-left: 28px;\n}\n\n/* Resulting height of 40px for medium size, 48px for large size */\n.elsie-picker--medium .elsie-picker__selected--primary,\n.elsie-picker--medium .elsie-picker__selected--secondary {\n  padding: 7px var(--spacing-small);\n}\n\n.elsie-picker--medium .elsie-picker__selected--icon {\n  padding-top: 7px;\n  padding-bottom: 7px;\n}\n\n.elsie-picker--large .elsie-picker__selected--primary,\n.elsie-picker--large .elsie-picker__selected--secondary {\n  padding: 11px var(--spacing-small);\n}\n\n.elsie-picker__selected-chevron {\n  display: grid;\n  right: var(--spacing-small);\n}\n\n.elsie-picker__options-container {\n  border: solid var(--shape-border-width-1);\n  border-color: var(--color-neutral-400);\n  border-radius: var(--shape-border-radius-1);\n  box-shadow: var(--shape-shadow-2);\n  margin-top: var(--spacing-xxsmall);\n  min-width: max-content;\n  position: absolute;\n  width: 100%;\n  top: 100%;\n  max-height: 120px; /* TODO Remove hard coded pixel value */\n  overflow-y: auto;\n  z-index: 1;\n}\n\n.elsie-picker__options-container--hidden {\n  display: none;\n}\n\n.elsie-picker__options-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.elsie-picker__option {\n  align-items: center;\n  grid-auto-flow: column;\n  gap: var(--spacing-xsmall);\n}\n\n.elsie-picker__option-button {\n  border: none;\n  background-color: var(--color-neutral-50);\n  align-items: center;\n  cursor: pointer;\n  color: var(--color-neutral-700);\n  display: flex;\n  gap: var(--spacing-small);\n  width: 100%;\n}\n\n.elsie-picker__option-icon,\n.elsie-picker__selected-icon {\n  height: 24px;\n  line-height: 0;\n  color: var(--color-neutral-700);\n  margin-right: var(--spacing-xxsmall);\n  position: absolute;\n}\n\n.elsie-picker__selected-icon--disabled {\n  color: var(--color-neutral-500);\n}\n\n.elsie-picker__option-button--selected {\n  background-color: var(--color-neutral-200);\n}\n\n.elsie-picker__selected--secondary {\n  border: none;\n  border-top: var(--shape-border-width-1) solid transparent;\n  border-bottom: solid var(--shape-border-width-1);\n  border-bottom-color: var(--color-neutral-600);\n  border-radius: 0;\n}\n\n.elsie-picker__selected-label--medium {\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n}\n\n.elsie-picker__selected-label--large {\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.elsie-picker__option-button {\n  padding: var(--spacing-small);\n}\n\n/* Pseudo Classes */\n.elsie-picker__selected:focus {\n  outline: none;\n  border: var(--shape-border-width-1) solid var(--color-neutral-800);\n}\n\n.elsie-picker__option-button:hover {\n  background-color: var(--color-neutral-100);\n}\n\n.elsie-picker__selected--disabled,\n.elsie-picker__selected--disabled:hover,\n.elsie-picker__option-button--disabled,\n.elsie-picker__option-button--disabled:hover {\n  background-color: var(--color-neutral-300);\n  color: var(--color-neutral-500);\n  cursor: not-allowed;\n  border-bottom-color: var(--color-neutral-500);\n}\n\n/*********** Floating Label ***********/\n.elsie-picker__label--floating {\n  cursor: pointer;\n  color: var(--color-neutral-800);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: top 20ms ease-in, font-size 50ms ease-in;\n  z-index: 1;\n}\n\nbutton.elsie-picker__selected--floating,\n.elsie-picker__label--floating {\n  transition: all 0.4s;\n  touch-action: manipulation;\n}\n\n/* Chevron is absolute and vertically centered */\nbutton.elsie-picker__selected--floating .elsie-picker__selected-chevron {\n  display: grid;\n  position: absolute;\n  right: var(--spacing-small);\n  top: 30%;\n}\n\n/* Hide placeholder to show floating label */\nbutton.elsie-picker__selected--floating .elsie-picker__selected-label {\n  color: var(--color-neutral-700);\n  transition: inherit;\n  opacity: 0;\n}\n\n/* Show placeholder on button focus */\n.elsie-picker__selected--floating:focus .elsie-picker__selected-label {\n  transition: opacity 0.2s ease-in;\n  opacity: 1;\n}\n\n/* Show placeholder if user has selected an option, highlight selection with color neutral 800 */\nbutton.elsie-picker__selected--floating.elsie-picker__selected--option .elsie-picker__selected-label {\n  color: var(--color-neutral-800);\n  opacity: 1;\n}\n\n/* Move floating label position to the top on button focus */\nbutton.elsie-picker__selected--floating:focus .elsie-picker__label--floating {\n  transform: translate(0.1em, -1.5em);\n  font: var(--type-details-caption-1-font);\n  letter-spacing: var(--type-details-caption-1-letter-spacing);\n}\n\n/* Keep floating label transformed when option chosen */\nbutton.elsie-picker__selected--floating.elsie-picker__selected--option .elsie-picker__label--floating {\n  transform: translate(0.1em, -1.5em);\n  font: var(--type-details-caption-1-font);\n  letter-spacing: var(--type-details-caption-1-letter-spacing);\n}\n\nbutton.elsie-picker__selected--icon .elsie-picker__label--floating {\n  left: 15%;\n}\n\nbutton.elsie-picker__selected--icon .elsie-picker__selected-label {\n  padding-left: 28px;\n}\n\n/* Medium size - Floating label should be 56px height */\n.elsie-picker--medium button.elsie-picker__selected--floating {\n  padding-top: 17px;\n  padding-bottom: 17px;\n}\n\n/* Medium size - Placeholder position on button focus */\n.elsie-picker--medium button.elsie-picker__selected--floating:focus {\n  padding-top: 24px;\n  padding-bottom: 10px;\n}\n\n/* floating button has been selected, display selection */\n.elsie-picker--medium button.elsie-picker__selected.elsie-picker__selected--floating.elsie-picker__selected--option {\n  padding-top: 24px;\n  padding-bottom: 10px;\n}\n\n.elsie-picker--medium .elsie-picker__label--floating {\n  font: var(--type-body-2-strong-font);\n  letter-spacing: var(--type-body-2-strong-letter-spacing);\n}\n\n/* Selected option has to be strong */\n.elsie-picker--medium .elsie-picker__selected--option .elsie-picker__selected-label {\n  font: var(--type-body-2-strong-font);\n  letter-spacing: var(--type-body-2-strong-letter-spacing);\n}\n\n/* Large size paddings */\n.elsie-picker--large button.elsie-picker__selected--floating {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.elsie-picker--large button.elsie-picker__selected--floating:focus {\n  padding-top: 22px;\n  padding-bottom: 8px;\n}\n\n.elsie-picker--large button.elsie-picker__selected.elsie-picker__selected--floating.elsie-picker__selected--option {\n  padding-top: 22px;\n  padding-bottom: 8px;\n}\n\n.elsie-picker--large .elsie-picker__label--floating {\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n.elsie-picker--large .elsie-picker__selected--option .elsie-picker__selected-label {\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n/* Disabled state when floatingLabel */\nbutton.elsie-picker__selected--disabled .elsie-picker__label--floating,\nbutton.elsie-picker__selected--disabled.elsie-picker__selected--option .elsie-picker__selected-label {\n  color: var(--color-neutral-500);\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",
      "",
    ]);
    const a = l;
  },
};

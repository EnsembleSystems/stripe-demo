export const id = 574;
export const ids = [574];
export const modules = {
  9853: (e, n, r) => {
    r.d(n, {
      z: () => O,
    });
    var o = r(5587),
      t = r(1892),
      a = r.n(t),
      c = r(5760),
      i = r.n(c),
      l = r(8311),
      s = r.n(l),
      d = r(8192),
      b = r.n(d),
      p = r(8060),
      u = r.n(p),
      h = r(4865),
      v = r.n(h),
      x = r(4367),
      g = {};
    (g.styleTagTransform = v()),
      (g.setAttributes = b()),
      (g.insert = s().bind(null, "head")),
      (g.domAPI = i()),
      (g.insertStyleElement = u()),
      a()(x.Z, g),
      x.Z && x.Z.locals && x.Z.locals;
    var k = r(7188);
    function m(e) {
      return (
        (m =
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
        m(e)
      );
    }
    var y = [
      "value",
      "variant",
      "size",
      "icon",
      "className",
      "children",
      "disabled",
    ];
    function f(e, n) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function _(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? f(Object(r), !0).forEach(function (n) {
              w(e, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : f(Object(r)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(r, n)
              );
            });
      }
      return e;
    }
    function w(e, n, r) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== m(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" !== m(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === m(n) ? n : String(n);
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = r),
        e
      );
    }
    var O = function (e) {
      var n = e.value,
        r = e.variant,
        t = void 0 === r ? "primary" : r,
        a = e.size,
        c = void 0 === a ? "medium" : a,
        i = e.icon,
        l = e.className,
        s = e.children,
        d = e.disabled,
        b = void 0 !== d && d,
        p = (function (e, n) {
          if (null == e) return {};
          var r,
            o,
            t = (function (e, n) {
              if (null == e) return {};
              var r,
                o,
                t = {},
                a = Object.keys(e);
              for (o = 0; o < a.length; o++)
                (r = a[o]), n.indexOf(r) >= 0 || (t[r] = e[r]);
              return t;
            })(e, n);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]),
                n.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (t[r] = e[r]));
          }
          return t;
        })(e, y),
        u = "elsie-button";
      i && !s && (u = "elsie-iconButton"),
        (l = (0, o.S)([
          u,
          "".concat(u, "--").concat(c),
          "".concat(u, "--").concat(t),
          ["".concat(u, "--").concat(t, "--disabled"), b],
          s && i && "".concat(u, "--with-icon"),
          l,
        ]));
      var h = (0, o.S)([
        "elsie-button-icon",
        "elsie-button-icon--".concat(t),
        ["elsie-button-icon--".concat(t, "--disabled"), b],
        null == i ? void 0 : i.props.className,
      ]);
      return (0, k.jsxs)(
        "button",
        _(
          _(
            {
              role: "button",
            },
            p
          ),
          {},
          {
            value: n,
            className: l,
            disabled: b,
            children: [
              i &&
                (0, k.jsx)(
                  i.type,
                  _(
                    _({}, i.props),
                    {},
                    {
                      className: h,
                    }
                  )
                ),
              s &&
                ("string" == typeof s
                  ? (0, k.jsx)("span", {
                      children: s,
                    })
                  : s),
            ],
          }
        )
      );
    };
  },
  5013: (e, n, r) => {
    r.d(n, {
      X: () => P,
    });
    var o = r(4853),
      t = r(5587),
      a = r(6966),
      c = r(1072),
      i = r(1892),
      l = r.n(i),
      s = r(5760),
      d = r.n(s),
      b = r(8311),
      p = r.n(b),
      u = r(8192),
      h = r.n(u),
      v = r(8060),
      x = r.n(v),
      g = r(4865),
      k = r.n(g),
      m = r(2429),
      y = {};
    (y.styleTagTransform = k()),
      (y.setAttributes = h()),
      (y.insert = p().bind(null, "head")),
      (y.domAPI = d()),
      (y.insertStyleElement = x()),
      l()(m.Z, y),
      m.Z && m.Z.locals && m.Z.locals;
    var f = r(7188);
    function _(e) {
      return (
        (_ =
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
        _(e)
      );
    }
    var w = [
      "name",
      "value",
      "size",
      "disabled",
      "error",
      "label",
      "description",
      "className",
    ];
    function O(e, n) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n &&
          (o = o.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function j(e) {
      for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? O(Object(r), !0).forEach(function (n) {
              S(e, n, r[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : O(Object(r)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(r, n)
              );
            });
      }
      return e;
    }
    function S(e, n, r) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== _(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var o = r.call(e, "string");
              if ("object" !== _(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === _(n) ? n : String(n);
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = r),
        e
      );
    }
    var P = function (e) {
      var n = e.name,
        r = e.value,
        i = e.size,
        l = void 0 === i ? "medium" : i,
        s = e.disabled,
        d = void 0 !== s && s,
        b = e.error,
        p = void 0 !== b && b,
        u = e.label,
        h = void 0 === u ? "" : u,
        v = e.description,
        x = void 0 === v ? "" : v,
        g = e.className,
        k = (function (e, n) {
          if (null == e) return {};
          var r,
            o,
            t = (function (e, n) {
              if (null == e) return {};
              var r,
                o,
                t = {},
                a = Object.keys(e);
              for (o = 0; o < a.length; o++)
                (r = a[o]), n.indexOf(r) >= 0 || (t[r] = e[r]);
              return t;
            })(e, n);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++)
              (r = a[o]),
                n.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (t[r] = e[r]));
          }
          return t;
        })(e, w),
        m = (0, o.useRef)(null);
      return (0, f.jsxs)("label", {
        className: (0, t.S)([
          "elsie-checkbox",
          ["elsie-checkbox--disabled", d],
        ]),
        children: [
          (0, f.jsx)(
            "input",
            j(
              {
                ref: m,
                name: n,
                value: r,
                type: "checkbox",
                disabled: d,
                className: (0, t.S)([
                  "elsie-checkbox__checkbox",
                  ["elsie-checkbox__checkbox--error", p],
                  g,
                ]),
              },
              k
            )
          ),
          (0, f.jsx)("span", {
            className: (0, t.S)([
              "elsie-checkbox__box",
              ["elsie-checkbox__box--error", p],
              ["elsie-checkbox__box--disabled", d],
            ]),
            tabIndex: d ? -1 : 0,
            onKeyDown: function (e) {
              var n;
              " " === e.key &&
                (null == m ||
                  null === (n = m.current) ||
                  void 0 === n ||
                  n.click());
            },
            children: (0, f.jsx)(c.J, {
              className: (0, t.S)(["elsie-checkbox__checkmark"]),
              source: a.Z,
              size: "16",
              stroke: "3",
            }),
          }),
          (0, f.jsx)("div", {
            className: (0, t.S)([
              "elsie-checkbox__label",
              "elsie-checkbox__label--".concat(l),
              ["elsie-checkbox__label--disabled", d],
            ]),
            children: h,
          }),
          (0, f.jsx)("div", {}),
          (0, f.jsx)("div", {
            className: (0, t.S)([
              "elsie-checkbox__description",
              "elsie-checkbox__description--".concat(l),
              ["elsie-checkbox__description--disabled", d],
            ]),
            children: x,
          }),
        ],
      });
    };
  },
  4367: (e, n, r) => {
    r.d(n, {
      Z: () => i,
    });
    var o = r(4933),
      t = r.n(o),
      a = r(3476),
      c = r.n(a)()(t());
    c.push([
      e.id,
      "/* Common button styles */\n.elsie-button,\n.elsie-iconButton {\n  border: 0 none;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.elsie-button {\n  border-radius: var(--shape-border-radius-3);\n  font-size: var(--type-button-1-font);\n  font-weight: var(--type-button-1-font);\n  padding: var(--spacing-xsmall) var(--spacing-medium);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.elsie-iconButton {\n  border-radius: 50%; /* Make the button a perfect circle */\n  height: var(--spacing-xbig);\n  width: var(--spacing-xbig);\n  padding: var(--spacing-xsmall);\n}\n\n.elsie-button:disabled,\n.elsie-iconButton:disabled {\n  pointer-events: none;\n  user-select: none;\n}\n\n.elsie-button:not(:disabled),\n.elsie-iconButton:not(:disabled) {\n  cursor: pointer;\n}\n\n.elsie-button:hover > svg,\n.elsie-iconButton:hover > svg {\n  fill: var(--color-neutral-300);\n}\n\n.elsie-button:focus,\n.elsie-iconButton:focus {\n  outline: var(--spacing-xxsmall) solid var(--color-neutral-400);\n}\n\n/* Primary */\n.elsie-button--primary,\n.elsie-iconButton--primary {\n  border: none;\n  background: var(--color-brand-500) 0 0% no-repeat padding-box;\n  color: var(--color-neutral-50);\n  text-align: left;\n  margin-right: 0;\n}\n\n.elsie-iconButton--primary {\n  border-radius: var(--spacing-xbig);\n  min-height: var(--spacing-xbig);\n  min-width: var(--spacing-xbig);\n  padding: var(--spacing-xsmall);\n}\n\n.elsie-button--primary--disabled,\n.elsie-iconButton--primary--disabled {\n  background: var(--color-neutral-300) 0 0% no-repeat padding-box;\n  color: var(--color-neutral-500);\n  fill: var(--color-neutral-300);\n  pointer-events: none;\n  user-select: none;\n}\n\n.elsie-button--primary:hover,\n.elsie-iconButton--primary:hover {\n  background: var(--color-brand-600) 0 0% no-repeat padding-box;\n}\n\n/* Secondary */\n.elsie-button--secondary,\n.elsie-iconButton--secondary {\n  border: var(--shape-border-width-2) solid var(--color-brand-500);\n  background: none 0 0% no-repeat padding-box;\n  color: var(--color-brand-500);\n  padding-top: calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left: calc(var(--spacing-medium) - var(--shape-border-width-2));\n}\n\n.elsie-iconButton--secondary {\n  border-radius: var(--spacing-xbig);\n  min-height: var(--spacing-xbig);\n  min-width: var(--spacing-xbig);\n  padding: var(--spacing-xsmall);\n  padding-top: calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n  padding-left: calc(var(--spacing-xsmall) - var(--shape-border-width-2));\n}\n\n.elsie-button--secondary--disabled,\n.elsie-iconButton--secondary--disabled {\n  border: var(--shape-border-width-2) solid var(--color-neutral-300);\n  background: none 0 0% no-repeat padding-box;\n  color: var(--color-neutral-500);\n  fill: var(--color-neutral-300);\n  padding-top: var(--spacing-xsmall);\n  padding-left: var(--spacing-medium);\n  pointer-events: none;\n  user-select: none;\n}\n\n.elsie-button--secondary:hover,\n.elsie-iconButton--secondary:hover {\n  border: var(--shape-border-width-2) solid var(--color-brand-600);\n  color: var(--color-brand-600);\n}\n\n/* Tertiary */\n.elsie-button--tertiary,\n.elsie-iconButton--tertiary {\n  border: none;\n  background: none 0 0% no-repeat padding-box;\n  color: var(--color-brand-500);\n}\n\n.elsie-iconButton--tertiary {\n  border: none;\n  min-height: var(--spacing-xbig);\n  min-width: var(--spacing-xbig);\n  padding: var(--spacing-xsmall);\n}\n\n.elsie-button--tertiary--disabled,\n.elsie-iconButton--tertiary--disabled {\n  border: none;\n  color: var(--color-neutral-500);\n  pointer-events: none;\n  user-select: none;\n}\n\n.elsie-button--tertiary:hover,\n.elsie-iconButton--tertiary:hover {\n  color: var(--color-brand-600);\n}\n\n/* Button Sizes */\n.elsie-button--large {\n  font: var(--type-button-1-font);\n  letter-spacing: var(--type-button-1-letter-spacing);\n}\n\n.elsie-button--medium {\n  font: var(--type-button-2-font);\n  letter-spacing: var(--type-button-2-letter-spacing);\n}\n\n.elsie-button-icon {\n  height: 24px;\n}\n\n/* No Icon */\n.elsie-button--with-icon {\n  column-gap: var(--spacing-xsmall);\n  row-gap: var(--spacing-xsmall);\n}\n",
      "",
    ]);
    const i = c;
  },
  2429: (e, n, r) => {
    r.d(n, {
      Z: () => i,
    });
    var o = r(4933),
      t = r.n(o),
      a = r(3476),
      c = r.n(a)()(t());
    c.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n.elsie-checkbox {\n  display: grid;\n  grid-template-columns: var(--spacing-small) auto;\n  grid-gap: var(--spacing-xxsmall) 0;\n  align-items: center;\n}\n\n.elsie-checkbox__checkbox {\n  display: none;\n  margin: 0;\n}\n\n.elsie-checkbox__box {\n  margin: 0;\n  /* width: var(--spacing-small);\n    height: var(--spacing-small); */\n  width: 14px;\n  height: 14px;\n  border-radius: var(--shape-border-radius-1);\n  border: var(--shape-border-width-1) solid var(--color-neutral-600);\n  background: var(--color-neutral-50) 0% 0% no-repeat padding-box;\n  cursor: pointer;\n}\n\n.elsie-checkbox__checkmark {\n  opacity: 0;\n  border-radius: var(--shape-border-radius-1);\n}\n\n/* checked */\n\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box {\n  border: none;\n}\n\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box\n  .elsie-checkbox__checkmark {\n  opacity: 1;\n  color: var(--color-neutral-50);\n  background: var(--color-neutral-700) 0% 0% no-repeat padding-box;\n  top: -1px;\n  position: relative;\n}\n\n/* hover */\n\n.elsie-checkbox__box:hover {\n  border: var(--shape-border-width-1) solid var(--color-neutral-800);\n}\n\n/* checked + hover */\n\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box:hover {\n  border: none;\n  background: var(--color-neutral-800) 0% 0% no-repeat padding-box;\n}\n\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box\n  .elsie-checkbox__checkmark:hover {\n  background: var(--color-neutral-800) 0% 0% no-repeat padding-box;\n}\n\n/* focus */\n\n.elsie-checkbox__box:focus-visible {\n  border: var(--shape-border-width-1) solid var(--color-neutral-800);\n  outline: var(--shape-border-width-3) solid var(--color-neutral-400);\n}\n\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box:focus-visible {\n  width: var(--spacing-small);\n  height: var(--spacing-small);\n  border: none;\n  background: var(--color-neutral-800) 0% 0% no-repeat padding-box;\n  outline: var(--shape-border-width-3) solid var(--color-neutral-400);\n}\n\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box:focus-visible\n  .elsie-checkbox__checkmark {\n  top: 0;\n}\n\n/* label and description */\n\n.elsie-checkbox__label,\n.elsie-checkbox__label--medium {\n  padding-left: var(--spacing-xsmall);\n  color: var(--color-neutral-800);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n  text-align: left;\n}\n\n.elsie-checkbox__label--large {\n  padding-left: var(--spacing-small);\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n  text-align: left;\n}\n\n.elsie-checkbox__description,\n.elsie-checkbox__description--medium {\n  padding-left: var(--spacing-xsmall);\n  color: var(--color-neutral-700);\n  font: var(--type-details-caption-2-font);\n  letter-spacing: var(--type-details-caption-2-letter-spacing);\n  text-align: left;\n}\n\n.elsie-checkbox__description--large {\n  padding-left: var(--spacing-small);\n  color: var(--color-neutral-700);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n  text-align: left;\n}\n\n.elsie-checkbox,\n.elsie-checkbox--checkbox:not(:disabled) {\n  cursor: pointer;\n}\n\n/* error */\n\n.elsie-checkbox__box--error {\n  border: var(--shape-border-width-2) solid var(--color-alert-500);\n  background: var(--color-neutral-50) 0% 0% no-repeat padding-box;\n}\n\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box--error,\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box--error:hover {\n  border: none;\n  background: var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box--error\n  > .elsie-checkbox__checkmark,\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box--error\n  > .elsie-checkbox__checkmark:hover {\n  background: var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n.elsie-checkbox__checkmark--error {\n  opacity: 1;\n  color: var(--color-neutral-50);\n  border: var(--color-alert-500);\n  background: var(--color-alert-500) 0% 0% no-repeat padding-box;\n}\n\n/* disabled */\n\n.elsie-checkbox--disabled,\n.elsie-checkbox__label--disabled,\n.elsie-checkbox__description--disabled {\n  color: var(--color-neutral-500);\n  cursor: default;\n}\n\n.elsie-checkbox__box--disabled,\n.elsie-checkbox__box--disabled:hover {\n  background: var(--color-neutral-300) 0% 0% no-repeat padding-box;\n  border: var(--shape-border-width-1) solid var(--color-neutral-500);\n  cursor: default;\n}\n\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box--disabled,\n.elsie-checkbox__checkbox:checked + .elsie-checkbox__box--disabled:hover {\n  border: none;\n  background: var(--color-neutral-300) 0% 0% no-repeat padding-box;\n}\n\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box--disabled\n  > .elsie-checkbox__checkmark,\n.elsie-checkbox__checkbox:checked\n  + .elsie-checkbox__box--disabled\n  > .elsie-checkbox__checkmark:hover {\n  background: var(--color-neutral-300) 0% 0% no-repeat padding-box;\n}\n\n/* Medium (portrait tablets and large phones, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large (landscape tablets, 1024px and up) */\n/* @media only screen and (min-width: 1024px) { } */\n\n/* XLarge (laptops/desktops, 1366px and up) */\n/* @media only screen and (min-width: 1366px) { } */\n\n/* XXlarge (large laptops and desktops, 1920px and up) */\n/* @media only screen and (min-width: 1920px) { } */\n",
      "",
    ]);
    const i = c;
  },
};

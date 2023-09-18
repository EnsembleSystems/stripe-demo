export const id = 338;
export const ids = [338];
export const modules = {
  4338: (e, n, t) => {
    t.d(n, {
      G: () => ae,
    });
    var r = t(2460),
      o = t(7517),
      i = (t(1442), t(9799)),
      c = t(7188),
      a = function () {
        return (0, c.jsxs)(i.O, {
          children: [
            (0, c.jsx)(i.d, {
              variant: "heading",
              size: "medium",
            }),
            (0, c.jsx)(i.d, {
              variant: "empty",
              size: "medium",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
              isFull: !0,
            }),
            (0, c.jsx)(i.d, {
              size: "large",
              isFull: !0,
              lines: 3,
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
            (0, c.jsx)(i.d, {
              size: "large",
            }),
          ],
        });
      },
      l = t(5587),
      u = t(1892),
      s = t.n(u),
      f = t(5760),
      p = t.n(f),
      d = t(8311),
      m = t.n(d),
      y = t(8192),
      b = t.n(y),
      g = t(8060),
      v = t.n(g),
      h = t(4865),
      O = t.n(h),
      j = t(3676),
      S = {};
    (S.styleTagTransform = O()),
      (S.setAttributes = b()),
      (S.insert = m().bind(null, "head")),
      (S.domAPI = p()),
      (S.insertStyleElement = v()),
      s()(j.Z, S),
      j.Z && j.Z.locals && j.Z.locals;
    var w = t(2773),
      _ = t(3268),
      E = t(9627);
    function P(e) {
      return (
        (P =
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
        P(e)
      );
    }
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
    function F(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? x(Object(t), !0).forEach(function (n) {
              k(e, n, t[n]);
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
    function k(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== P(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== P(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === P(n) ? n : String(n);
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
    var A = function (e) {
        return e.reduce(function (e, n) {
          switch (n.name) {
            case "DATE_RANGE_MAX":
              return F(
                F({}, e),
                {},
                {
                  max: n.value,
                }
              );
            case "DATE_RANGE_MIN":
              return F(
                F({}, e),
                {},
                {
                  min: n.value,
                }
              );
            case "FILE_EXTENSIONS":
              return F(
                F({}, e),
                {},
                {
                  accept: n.value,
                }
              );
            case "INPUT_VALIDATION":
              return F(
                F({}, e),
                {},
                {
                  pattern: I(n.value),
                }
              );
            case "MAX_FILE_SIZE":
            case "MAX_IMAGE_HEIGHT":
            case "MAX_IMAGE_WIDTH":
              return e;
            case "MAX_TEXT_LENGTH":
              return F(
                F({}, e),
                {},
                {
                  maxLength: n.value,
                }
              );
            case "MIN_TEXT_LENGTH":
              return F(
                F({}, e),
                {},
                {
                  minLength: n.value,
                }
              );
            default:
              throw new Error("Unknown rule: ".concat(n.name));
          }
        }, {});
      },
      D = {
        alpha: /^[a-zA-Z]+$/,
        alphanumeric: /^[a-zA-Z0-9]+$/,
        "alphanumeric-w-space": /^[a-zA-Z0-9 ]+$/,
        email:
          /^([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9,!#$%&'*+/=?^_`{|}~-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*@([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z0-9-]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*\.(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]){2,})$/i,
        numeric: /^[0-9]+$/,
        url: /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,
      },
      I = function (e) {
        switch (e) {
          case "alpha":
            return D.alpha.source;
          case "alphanumeric":
            return D.alphanumeric.source;
          case "alphanumeric-w-space":
            return D["alphanumeric-w-space"].source;
          case "url":
            return D.url.source;
          case "numeric":
            return D.numeric.source;
          case "email":
            return D.email.source;
          default:
            throw new Error("Unknown validation type: ".concat(e));
        }
      };
    const T = {
      country: "country",
      firstname: "given-name",
      city: "home city",
      prefix: "honorific-prefix",
      postcode: "postal-code",
      middlename: "additional-name",
      telephone: "tel",
      suffix: "honorific-suffix",
      lastname: "family-name",
      street: "address-line1",
      company: "organization",
      region: "address-level1",
      email: "email",
    };
    function C(e) {
      return (
        (C =
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
        C(e)
      );
    }
    function L(e, n) {
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
    function N(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? L(Object(t), !0).forEach(function (n) {
              M(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : L(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function M(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== C(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== C(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === C(n) ? n : String(n);
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
    var z = {
        BOOLEAN: null,
        DATE: null,
        DATETIME: null,
        FILE: null,
        GALLERY: null,
        HIDDEN: function (e) {
          var n,
            t = e.id,
            r = e.className;
          return (0, c.jsx)(
            "input",
            {
              id: t,
              className: r,
              name: e.code,
              type: "hidden",
              value: null !== (n = e.default_value) && void 0 !== n ? n : "",
            },
            e.code
          );
        },
        IMAGE: null,
        MEDIA_IMAGE: null,
        MULTILINE: function (e) {
          for (
            var n,
              t = e.id,
              r = e.className,
              o = e.value,
              i = e.onChange,
              a = e.onBlur,
              u = null !== (n = e.multiline_count) && void 0 !== n ? n : 0,
              s = A(e.validate_rules),
              f = [],
              p = 0;
            p < u;
            p++
          )
            f.push(
              (0, c.jsx)(
                w.I,
                N(
                  {
                    id: "".concat(t, "-").concat(p),
                    className: (0, l.S)([
                      "checkout-shipping-form__multiline",
                      r,
                    ]),
                    name: "".concat(e.code, "-").concat(p),
                    floatingLabel: ""
                      .concat(e.label, " ")
                      .concat(0 != p ? p : "", " ")
                      .concat(e.is_required && 0 === p ? "*" : ""),
                    autocomplete: 0 === p ? T[e.label] : "off",
                    placeholder: ""
                      .concat(e.label, " ")
                      .concat(0 != p ? p : ""),
                    type: "text",
                    required: e.is_required && 0 === p,
                    value: (null == o ? void 0 : o[p]) || void 0,
                    onChange: i,
                    onBlur: a,
                  },
                  s
                ),
                "".concat(e.code, "-").concat(p)
              )
            );
          return (0, c.jsx)(c.Fragment, {
            children: f,
          });
        },
        MULTISELECT: null,
        PRICE: null,
        SELECT: function (e) {
          var n,
            t,
            r = e.id,
            o = e.className,
            i = e.value,
            a = e.handleSelect,
            l = a
              ? {
                  handleSelect: a,
                }
              : {};
          return (0, c.jsx)(
            _.c,
            N(
              {
                id: r,
                className: o,
                name: e.code,
                floatingLabel: ""
                  .concat(e.label, " ")
                  .concat(e.is_required ? "*" : ""),
                placeholder: e.label,
                options:
                  null !==
                    (n =
                      null === (t = e.options) || void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            return {
                              text: e.label,
                              value: e.value,
                            };
                          })) && void 0 !== n
                    ? n
                    : [],
                value: i,
              },
              l
            ),
            e.code
          );
        },
        TEXT: function (e) {
          var n = e.id,
            t = e.className,
            r = e.value,
            o = e.onChange,
            i = e.onBlur,
            a = A(e.validate_rules);
          return (0, c.jsx)(
            w.I,
            N(
              {
                id: n,
                className: t,
                name: e.code,
                floatingLabel: ""
                  .concat(e.label, " ")
                  .concat(e.is_required ? "*" : ""),
                placeholder: e.label,
                type: "text",
                autocomplete: T[e.label] || "off",
                required: e.is_required || !1,
                value: null != r ? r : void 0,
                onChange: o,
                onBlur: i,
              },
              a
            ),
            e.code
          );
        },
        TEXTAREA: null,
        WEIGHT: null,
        UNDEFINED: null,
      },
      R = function (e) {
        var n = e.error,
          t = e.className,
          r = z[e.frontend_input];
        return "HIDDEN" === e.frontend_input
          ? r && r(e)
          : r &&
              (0, c.jsx)(
                E.g,
                {
                  className: t,
                  name: e.code,
                  error: n,
                  disabled: e.disabled,
                  children: r(e),
                },
                e.code
              );
      },
      U = t(3483),
      V = t(9724);
    function X(e) {
      return (
        (X =
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
        X(e)
      );
    }
    var Z = ["className", "formRef", "fields"];
    function $(e, n) {
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
    function G(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? $(Object(t), !0).forEach(function (n) {
              q(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : $(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function q(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== X(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== X(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === X(n) ? n : String(n);
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
    var B = function (e) {
        var n = e.className,
          t = e.formRef,
          r = e.fields,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
              })(e, n);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  n.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (o[t] = e[t]));
            }
            return o;
          })(e, Z);
        return (0, c.jsxs)("div", {
          className: (0, l.S)(["checkout-shipping-form", n]),
          children: [
            (0, c.jsx)(U.X, {
              level: 2,
              children: (0, c.jsx)(V.xv, {
                id: "Checkout.ShippingAddress.title",
              }),
              className: "checkout-shipping-form__title",
            }),
            (0, c.jsx)(
              "form",
              G(
                G({}, o),
                {},
                {
                  ref: t,
                  className: (0, l.S)(["checkout-shipping-form__form", n]),
                  noValidate: !0,
                  children: r
                    .sort(function (e, n) {
                      return e.sort_order - n.sort_order;
                    })
                    .map(R),
                }
              )
            ),
          ],
        });
      },
      H = t(4914),
      W = t(7613),
      K = t(3177),
      J = t(245),
      Y = t(6765),
      Q = t(4853);
    function ee(e) {
      return (
        (ee =
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
        ee(e)
      );
    }
    var ne = ["children"];
    function te(e, n) {
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
    function re(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? te(Object(t), !0).forEach(function (n) {
              oe(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : te(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function oe(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== ee(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== ee(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === ee(n) ? n : String(n);
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
    function ie(e, n) {
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
              o,
              i,
              c,
              a = [],
              l = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                l = !1;
              } else
                for (
                  ;
                  !(l = (r = i.call(t)).done) &&
                  (a.push(r.value), a.length !== n);
                  l = !0
                );
            } catch (e) {
              (u = !0), (o = e);
            } finally {
              try {
                if (
                  !l &&
                  null != t.return &&
                  ((c = t.return()), Object(c) !== c)
                )
                  return;
              } finally {
                if (u) throw o;
              }
            }
            return a;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return ce(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                ? ce(e, n)
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
    function ce(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var ae = function (e) {
      e.children;
      var n = (function (e, n) {
          if (null == e) return {};
          var t,
            r,
            o = (function (e, n) {
              if (null == e) return {};
              var t,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
              return o;
            })(e, n);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]),
                n.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        })(e, ne),
        t = (function () {
          var e = ie((0, Q.useState)(!0), 2),
            n = e[0],
            t = e[1],
            o = ie((0, Q.useState)([]), 2),
            i = o[0],
            c = o[1];
          return (
            (0, Q.useEffect)(function () {
              (0, r.w)()
                .then(function (e) {
                  c(e);
                })
                .catch(function (e) {
                  console.error(e), c([]);
                })
                .finally(function () {
                  t(!1);
                });
            }, []),
            {
              isLoadingFormFields: n,
              fields: i,
            }
          );
        })(),
        i = t.isLoadingFormFields,
        l = t.fields,
        u = (function () {
          var e = ie((0, Q.useState)(!1), 2),
            n = e[0],
            t = e[1],
            r = ie((0, Q.useState)(), 2),
            o = r[0],
            i = r[1];
          return (
            (0, Q.useEffect)(function () {
              Y.events.on(
                "checkout/initialized",
                function (e) {
                  void 0 !== e && (i(e), t(!0));
                },
                {
                  eager: !0,
                }
              );
            }, []),
            {
              config: o,
              isConfigInitialized: n,
            }
          );
        })(),
        s = u.isConfigInitialized,
        f = u.config,
        p = (0, Q.useRef)(null),
        d = (0, K.t)(),
        m = null == d ? void 0 : d.shipping_addresses,
        y = (0, H.f)({
          formRef: p,
        }),
        b = y.address,
        g = y.setAddress,
        v = y.setSelection,
        h = y.errors,
        O = y.onChange,
        j = y.onBlur,
        S = (function (e) {
          var n = e.country,
            t = ie((0, Q.useState)([]), 2),
            r = t[0],
            i = t[1];
          return (
            (0, Q.useEffect)(
              function () {
                n &&
                  (0, o.J)(n)
                    .then(function (e) {
                      var n,
                        t =
                          null !==
                            (n =
                              null == e
                                ? void 0
                                : e.map(function (e) {
                                    return {
                                      label: e.name,
                                      value: e.code,
                                      is_default: !1,
                                    };
                                  })) && void 0 !== n
                            ? n
                            : [];
                      i(t);
                    })
                    .catch(function (e) {
                      console.error(e);
                    });
              },
              [i, n]
            ),
            {
              availableRegions: r,
            }
          );
        })({
          country: b.country_id || (null == f ? void 0 : f.defaultCountry),
        }),
        w = S.availableRegions,
        _ = (0, Q.useCallback)(
          function (e) {
            var n = l.find(function (n) {
              return n.code === e;
            });
            return !!n && "MULTILINE" === n.frontend_input;
          },
          [l]
        ),
        E = i || !s;
      (0, Q.useEffect)(
        function () {
          if (null != m && m.length) {
            var e = m[0],
              n = {
                firstname: e.firstname,
                lastname: e.lastname,
                telephone: e.telephone,
                city: e.city,
                company: e.company,
                postcode: e.postcode,
                region: e.region.code,
                country_id: e.country.code,
                vat_id: e.vat_id,
              };
            e.street &&
              e.street.length > 0 &&
              e.street.forEach(function (e, t) {
                n["street".concat(W.E).concat(t)] = e;
              }),
              (e.custom_attributes || [])
                .filter(function (e) {
                  return !(null == e || !e.code);
                })
                .forEach(function (e) {
                  _(e.code)
                    ? e.value.split(W.M).forEach(function (t, r) {
                        n["".concat(e.code).concat(W.E).concat(r)] = t;
                      })
                    : (n[e.code] = e.value);
                }),
              g(n);
          } else
            g(function (e) {
              var n;
              return re(
                re({}, e),
                {},
                {
                  country_id:
                    null !== (n = e.country_id) && void 0 !== n
                      ? n
                      : null == f
                      ? void 0
                      : f.defaultCountry,
                }
              );
            });
        },
        [m, g, _, null == f ? void 0 : f.defaultCountry]
      );
      var P = E
        ? []
        : l.map(function (e) {
            var n,
              t = e.is_required,
              r = b[e.code],
              o = e.frontend_input,
              i = e.options,
              c = h[e.code] || "",
              a = {};
            return (
              "country_id" === e.code &&
                (a = {
                  handleSelect: function (e) {
                    v("region", ""), v("country_id", e);
                  },
                }),
              "region" === e.code &&
                ((t = f.countriesWithRequiredRegion.includes(
                  null == b ? void 0 : b.country_id
                )),
                (i = w),
                t || f.displayStateIfOptional || (o = "UNDEFINED"),
                "SELECT" == (o = i.length > 0 ? "SELECT" : "TEXT") &&
                  (a = {
                    handleSelect: function (e) {
                      v("region", e);
                    },
                  }),
                (r =
                  i.length > 0
                    ? (null ===
                        (n = i.find(function (e) {
                          return e.value === r;
                        })) || void 0 === n
                        ? void 0
                        : n.value) || ""
                    : r)),
              "postcode" === e.code &&
                (t = !f.countriesWithOptionalZipCode.includes(
                  null == b ? void 0 : b.country_id
                )),
              "MULTILINE" === o &&
                ((r = (0, J.S)(e.code, b)),
                (c = (0, J.S)(e.code, h).join("\n"))),
              re(
                re(re({}, e), a),
                {},
                {
                  is_required: t,
                  frontend_input: o,
                  className: "checkout-shipping-form__".concat(e.code),
                  value: r,
                  options: i,
                  error: c,
                  onChange: O,
                  onBlur: j,
                }
              )
            );
          });
      return (0, c.jsxs)(
        "div",
        re(
          re({}, n),
          {},
          {
            children: [
              E && (0, c.jsx)(a, {}),
              !E &&
                (0, c.jsx)(B, {
                  formRef: p,
                  fields: P,
                }),
            ],
          }
        )
      );
    };
  },
  4914: (e, n, t) => {
    t.d(n, {
      f: () => v,
    });
    var r = t(5437),
      o = t(4625);
    function i(e) {
      return (
        (i =
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
        i(e)
      );
    }
    function c(e, n) {
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
    function a(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? c(Object(t), !0).forEach(function (n) {
              l(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : c(Object(t)).forEach(function (n) {
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
            if ("object" !== i(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== i(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === i(n) ? n : String(n);
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
    function u(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var s = function (e, n) {
        var t,
          i,
          c =
            ((t = (0, r.useState)({})),
            (i = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(t) ||
              (function (e, n) {
                var t =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i,
                    c,
                    a = [],
                    l = !0,
                    u = !1;
                  try {
                    if (((i = (t = t.call(e)).next), 0 === n)) {
                      if (Object(t) !== t) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (r = i.call(t)).done) &&
                        (a.push(r.value), a.length !== n);
                        l = !0
                      );
                  } catch (e) {
                    (u = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != t.return &&
                        ((c = t.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return a;
                }
              })(t, i) ||
              (function (e, n) {
                if (e) {
                  if ("string" == typeof e) return u(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === t && e.constructor && (t = e.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(e)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? u(e, n)
                      : void 0
                  );
                }
              })(t, i) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          s = c[0],
          f = c[1];
        return {
          errors: s,
          checkInputValidity: (0, r.useCallback)(
            function (e) {
              var t = e.target,
                r = t.name,
                o = t.validity,
                i = t.placeholder || t.name,
                c = "";
              o.badInput && (c = n.BadInput.replace("{fieldLabel}", i)),
                o.patternMismatch &&
                  (c = n.PatternMismatch.replace("{fieldLabel}", i)),
                o.rangeOverflow &&
                  (c = n.RangeOverflow.replace("{date}", t.max)),
                o.rangeUnderflow &&
                  (c = n.RangeUnderflow.replace("{date}", t.min)),
                o.tooLong &&
                  (c = n.TooLong.replace(
                    "{maxlength}",
                    t.maxLength.toString()
                  )),
                o.tooShort &&
                  (c = n.TooShort.replace(
                    "{minlength}",
                    t.minLength.toString()
                  )),
                o.typeMismatch &&
                  (c = n.TypeMismatch.replace("{fieldLabel}", i)),
                o.valueMissing &&
                  (c = n.ValueMissing.replace("{fieldLabel}", i)),
                o.customError && (c = t.validationMessage),
                f(function (e) {
                  return a(a({}, e), {}, l({}, r, c));
                });
            },
            [n]
          ),
          checkFormValidity: function () {
            var n,
              t = e.current;
            return (
              !!t &&
              ((n = (0, o.C)(t)),
              0 === Object.keys(n).length && n.constructor === Object)
            );
          },
        };
      },
      f = t(9724),
      p = t(1468);
    function d(e) {
      return (
        (d =
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
        d(e)
      );
    }
    function m(e, n) {
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
    function y(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? m(Object(t), !0).forEach(function (n) {
              b(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : m(Object(t)).forEach(function (n) {
              Object.defineProperty(
                e,
                n,
                Object.getOwnPropertyDescriptor(t, n)
              );
            });
      }
      return e;
    }
    function b(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e, n) {
            if ("object" !== d(e) || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" !== d(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === d(n) ? n : String(n);
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
    function g(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var v = function (e) {
      var n,
        t,
        o = e.formRef,
        i = (0, f.XK)({
          BadInput: "Checkout.ShippingForm.Validity.BadInput",
          PatternMismatch: "Checkout.ShippingForm.Validity.PatternMismatch",
          RangeUnderflow: "Checkout.ShippingForm.Validity.RangeUnderflow",
          TooLong: "Checkout.ShippingForm.Validity.TooLong",
          TooShort: "Checkout.ShippingForm.Validity.TooShort",
          TypeMismatch: "Checkout.ShippingForm.Validity.TypeMismatch",
          ValueMissing: "Checkout.ShippingForm.Validity.ValueMissing",
        }),
        c = (0, r.useRef)(!1),
        a = !0 === c.current,
        l =
          ((n = (0, r.useState)({})),
          (t = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })(n) ||
            (function (e, n) {
              var t =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != t) {
                var r,
                  o,
                  i,
                  c,
                  a = [],
                  l = !0,
                  u = !1;
                try {
                  if (((i = (t = t.call(e)).next), 0 === n)) {
                    if (Object(t) !== t) return;
                    l = !1;
                  } else
                    for (
                      ;
                      !(l = (r = i.call(t)).done) &&
                      (a.push(r.value), a.length !== n);
                      l = !0
                    );
                } catch (e) {
                  (u = !0), (o = e);
                } finally {
                  try {
                    if (
                      !l &&
                      null != t.return &&
                      ((c = t.return()), Object(c) !== c)
                    )
                      return;
                  } finally {
                    if (u) throw o;
                  }
                }
                return a;
              }
            })(n, t) ||
            (function (e, n) {
              if (e) {
                if ("string" == typeof e) return g(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === t && e.constructor && (t = e.constructor.name),
                  "Map" === t || "Set" === t
                    ? Array.from(e)
                    : "Arguments" === t ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                    ? g(e, n)
                    : void 0
                );
              }
            })(n, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        u = l[0],
        d = l[1],
        m = s(o, i),
        v = m.errors,
        h = m.checkInputValidity,
        O = m.checkFormValidity,
        j = function (e, n) {
          d(function (t) {
            return y(y({}, t), {}, b({}, e, n));
          }),
            (c.current = !0);
        };
      return (
        (0, r.useEffect)(
          function () {
            if (a && O()) {
              var e = setTimeout(function () {
                !(function (e) {
                  (0, p.nc)({
                    address: (0, p.NP)(e),
                  })
                    .catch(function (e) {
                      console.error("Saving shipping form failed:", e);
                    })
                    .finally(function () {
                      c.current = !1;
                    });
                })(u);
              }, 2e3);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [u, a, O]
        ),
        {
          address: u,
          setAddress: d,
          setSelection: function (e, n) {
            j(e, n);
          },
          errors: v,
          onChange: function (e) {
            var n = e.target,
              t = n.name;
            j(t, n.value), h(e);
          },
          onBlur: function (e) {
            h(e);
          },
        }
      );
    };
  },
  3676: (e, n, t) => {
    t.d(n, {
      Z: () => a,
    });
    var r = t(4933),
      o = t.n(r),
      i = t(3476),
      c = t.n(i)()(o());
    c.push([
      e.id,
      "/* https://cssguidelin.es/#bem-like-naming */\n\n/* TODO remove this style once https://jira.corp.adobe.com/browse/USF-350 is done */\n.elsie-input__label--floating {\n  color: var(--color-neutral-700);\n}\n\n.checkout-shipping-form .elsie-picker--medium .elsie-picker__label--floating {\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n  color: var(--color-neutral-700);\n}\n\nbutton.elsie-picker__selected--floating:focus .elsie-picker__label--floating {\n  color: var(--color-neutral-800) !important;\n}\n\n.checkout-shipping-form .elsie-picker__options-container {\n  z-index: 2;\n}\n\n.elsie-input__label--floating, .elsie-picker__label--floating {\n  pointer-events: none;\n}\n\n/* ⬆️ fixes to be done on SDK*/\n\n/*********** Skeleton ***********/\n.checkout-shipping-address__skeleton {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--spacing-medium);\n  flex-wrap: wrap;\n  min-width: 384px;\n}\n\n/*********** Container ***********/\n.checkout-shipping-form {}\n\n.checkout-shipping-form__title {\n  color: var(--color-neutral-800);\n  font: var(--type-headline-2-default-font);\n  letter-spacing: var(--type-headline-2-default-letter-spacing);\n  margin: 0 0 var(--spacing-medium) 0;\n  width: 100%;\n}\n\n.checkout-shipping-form__form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-medium);\n}\n\n/*********** Fields ***********/\n.checkout-shipping-form__company {\n  /* fill both columns */\n  grid-column: 1 / -1;\n}\n\n.checkout-shipping-form__street {\n  /* fill both columns */\n  grid-column: 1 / -1;\n}\n\n.checkout-shipping-form__street .elsie-input-container {\n  margin-bottom: var(--spacing-medium);\n}\n\n.checkout-shipping-form__street .elsie-input-container:last-child {\n  margin-bottom: 0;\n}\n\n.checkout-shipping-form__street .elsie-field__content {\n  display: grid;\n  grid-auto-flow: row;\n  gap: var(--spacing-xxsmall);\n}\n\n.checkout-shipping-form__country_id .elsie-picker__options-container,\n.checkout-shipping-form__region .elsie-picker__options-container {\n  z-index: 100;\n}\n\n.checkout-shipping-form__save {\n  /* fill both columns */\n  grid-column: 1 / -1;\n  /* center the button */\n  justify-self: center;\n}\n\n/*********** Media queries ***********/\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (min-width:320px) and (max-width: 768px) {\n  .checkout-shipping-form__form {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* @media only screen and (min-width: 600px) { } */\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* @media only screen and (min-width: 768px) { } */\n\n/* Large devices (laptops/desktops, 992px and up) */\n/* @media only screen and (min-width: 992px) { } */\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n/* @media only screen and (min-width: 1200px) { } */\n",
      "",
    ]);
    const a = c;
  },
};

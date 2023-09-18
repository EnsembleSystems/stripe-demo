/*! For license information please see 289.js.LICENSE.txt */
export const id = 289;
export const ids = [289];
export const modules = {
  699: (t, e, r) => {
    r.d(e, {
      J: () => at,
    });
    var n = r(857),
      o = r.n(n);
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    const a = JSON.parse(
        '{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"}}}'
      ),
      l = JSON.parse(
        '{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Diminuer la quantité","increaseLabel":"Augmenter la quantité","label":"Quantité"}}}'
      );
    var c,
      s = r(474),
      u = r(437),
      p = r(152),
      f = r.n(p),
      d = {};
    function y(t, e, r) {
      if (3 === t.nodeType) {
        var n = "textContent" in t ? t.textContent : t.nodeValue || "";
        if (!1 !== y.options.trim) {
          var o = 0 === e || e === r.length - 1;
          if (
            (!(n =
              n.match(/^[\s\n]+$/g) && "all" !== y.options.trim
                ? " "
                : n.replace(
                    /(^[\s\n]+|[\s\n]+$)/g,
                    "all" === y.options.trim || o ? "" : " "
                  )) ||
              " " === n) &&
            r.length > 1 &&
            o
          )
            return null;
        }
        return n;
      }
      if (1 !== t.nodeType) return null;
      var i = String(t.nodeName).toLowerCase();
      if ("script" === i && !y.options.allowScripts) return null;
      var a,
        l,
        c = y.h(
          i,
          (function (t) {
            var e = t && t.length;
            if (!e) return null;
            for (var r = {}, n = 0; n < e; n++) {
              var o = t[n],
                i = o.name,
                a = o.value;
              "on" === i.substring(0, 2) &&
                y.options.allowEvents &&
                (a = new Function(a)),
                (r[i] = a);
            }
            return r;
          })(t.attributes),
          (l =
            (a = t.childNodes) && Array.prototype.map.call(a, y).filter(m)) &&
            l.length
            ? l
            : null
        );
      return y.visitor && y.visitor(c), c;
    }
    var v,
      m = function (t) {
        return t;
      },
      h = {};
    function g(t) {
      var e = (t.type || "").toLowerCase(),
        r = g.map;
      r && r.hasOwnProperty(e)
        ? ((t.type = r[e]),
          (t.props = Object.keys(t.props || {}).reduce(function (e, r) {
            var n;
            return (
              (e[
                ((n = r),
                n.replace(/-(.)/g, function (t, e) {
                  return e.toUpperCase();
                }))
              ] = t.props[r]),
              e
            );
          }, {})))
        : (t.type = e.replace(/[^a-z0-9-]/i, ""));
    }
    const b = (function (t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        t && (e.__proto__ = t),
        ((e.prototype = Object.create(t && t.prototype)).constructor = e),
        (e.setReviver = function (t) {
          v = t;
        }),
        (e.prototype.shouldComponentUpdate = function (t) {
          var e = this.props;
          return (
            t.wrap !== e.wrap || t.type !== e.type || t.markup !== e.markup
          );
        }),
        (e.prototype.setComponents = function (t) {
          if (((this.map = {}), t))
            for (var e in t)
              if (t.hasOwnProperty(e)) {
                var r = e
                  .replace(
                    /([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,
                    "$1$3-$2$4"
                  )
                  .toLowerCase();
                this.map[r] = t[e];
              }
        }),
        (e.prototype.render = function (t) {
          var e = t.wrap;
          void 0 === e && (e = !0);
          var r,
            n = t.type,
            o = t.markup,
            i = t.components,
            a = t.reviver,
            l = t.onError,
            u = t["allow-scripts"],
            p = t["allow-events"],
            f = t.trim,
            m = (function (t, e) {
              var r = {};
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) &&
                  -1 === e.indexOf(n) &&
                  (r[n] = t[n]);
              return r;
            })(t, [
              "wrap",
              "type",
              "markup",
              "components",
              "reviver",
              "onError",
              "allow-scripts",
              "allow-events",
              "trim",
            ]),
            b =
              a ||
              this.reviver ||
              this.constructor.prototype.reviver ||
              v ||
              s.h;
          this.setComponents(i);
          var x = {
            allowScripts: u,
            allowEvents: p,
            trim: f,
          };
          try {
            r = (function (t, e, r, n, o) {
              var i = (function (t, e) {
                var r,
                  n,
                  o,
                  i,
                  a = "html" === e ? "text/html" : "application/xml";
                "html" === e
                  ? ((i = "body"),
                    (o =
                      "<!DOCTYPE html>\n<html><body>" + t + "</body></html>"))
                  : ((i = "xml"),
                    (o =
                      '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' +
                      t +
                      "</xml>"));
                try {
                  r = new DOMParser().parseFromString(o, a);
                } catch (t) {
                  n = t;
                }
                if (
                  (r ||
                    "html" !== e ||
                    ((r =
                      c ||
                      (c = (function () {
                        if (
                          document.implementation &&
                          document.implementation.createHTMLDocument
                        )
                          return document.implementation.createHTMLDocument("");
                        var t = document.createElement("iframe");
                        return (
                          (t.style.cssText =
                            "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;"),
                          t.setAttribute("sandbox", "allow-forms"),
                          document.body.appendChild(t),
                          t.contentWindow.document
                        );
                      })())).open(),
                    r.write(o),
                    r.close()),
                  r)
                ) {
                  var l = r.getElementsByTagName(i)[0],
                    s = l.firstChild;
                  return (
                    t && !s && (l.error = "Document parse failed."),
                    s &&
                      "parsererror" === String(s.nodeName).toLowerCase() &&
                      (s.removeChild(s.firstChild),
                      s.removeChild(s.lastChild),
                      (l.error =
                        s.textContent || s.nodeValue || n || "Unknown error"),
                      l.removeChild(s)),
                    l
                  );
                }
              })(t, e);
              if (i && i.error) throw new Error(i.error);
              var a = (i && i.body) || i;
              g.map = n || h;
              var l =
                a &&
                (function (t, e, r, n) {
                  return (y.visitor = e), (y.h = r), (y.options = n || d), y(t);
                })(a, g, r, o);
              return (g.map = null), (l && l.props && l.props.children) || null;
            })(o, n, b, this.map, x);
          } catch (t) {
            l
              ? l({
                  error: t,
                })
              : "undefined" != typeof console &&
                console.error &&
                console.error("preact-markup: " + t);
          }
          if (!1 === e) return r || null;
          var w = m.hasOwnProperty("className") ? "className" : "class",
            _ = m[w];
          return (
            _
              ? _.splice
                ? _.splice(0, 0, "markup")
                : "string" == typeof _
                ? (m[w] += " markup")
                : "object" == typeof _ && (_.markup = !0)
              : (m[w] = "markup"),
            b("div", m, r || null)
          );
        }),
        e
      );
    })(s.Component);
    var x = (0, s.createContext)({
      intl: {},
    });
    function w(t) {
      return null != t;
    }
    function _(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    function O(t, e) {
      var r = _({}, t);
      for (var n in e)
        e.hasOwnProperty(n) &&
          (t[n] && e[n] && "object" == typeof t[n] && "object" == typeof e[n]
            ? (r[n] = O(t[n], e[n]))
            : (r[n] = t[n] || e[n]));
      return r;
    }
    var j = /[?&#]intl=show/;
    function S(t) {
      var e = t.scope,
        r = t.mark,
        n = t.definition,
        o = (function (t, e) {
          var r = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) &&
              -1 === e.indexOf(n) &&
              (r[n] = t[n]);
          return r;
        })(t, ["scope", "mark", "definition"]),
        i = _({}, (0, u.useContext)(x).intl || {});
      return (
        e && (i.scope = e),
        n && (i.dictionary = O(i.dictionary || {}, n)),
        (r || ("undefined" != typeof location && String(location).match(j))) &&
          (i.mark = !0),
        (0, s.h)(
          x.Provider,
          {
            value: {
              intl: i,
            },
          },
          o.children
        )
      );
    }
    function A(t, e) {
      if (arguments.length < 2)
        return (
          (e = t),
          function (t) {
            return A(t, e);
          }
        );
      function r(r) {
        return (0, s.h)(S, e || {}, (0, s.h)(t, r));
      }
      return (
        (r.getWrappedComponent =
          (t && t.getWrappedComponent) ||
          function () {
            return t;
          }),
        r
      );
    }
    var k = {};
    function E(t, e, r, n) {
      return t && t.replace(/\{\{([\w.-]+)\}\}/g, C.bind(null, e || k, r, n));
    }
    function C(t, e, r, n, o) {
      for (var i = o.split("."), a = t, l = 0; l < i.length; l++) {
        if (null == (a = a[i[l]])) return "";
        if (a && a.type === T)
          return L(
            a.props.id,
            e,
            r,
            a.props.fields,
            a.props.plural,
            a.props.fallback
          );
      }
      return "string" == typeof a && a.match(/\{\{/) && (a = E(a, t)), a;
    }
    function L(t, e, r, n, o, i) {
      e && (t = e + "." + t);
      var a = r && f()(r, t);
      return (
        (o || 0 === o) &&
          a &&
          "object" == typeof a &&
          (a = a.splice
            ? a[o] || a[0]
            : 0 === o && w(a.none || a.zero)
            ? a.none || a.zero
            : 1 === o && w(a.one || a.singular)
            ? a.one || a.singular
            : a.some || a.many || a.plural || a.other || a),
        (a && E(a, n, e, r)) || i || null
      );
    }
    function P(t) {
      var e = t.value,
        r = t.id,
        n = (0, u.useContext)(x).intl;
      if (n && n.mark) {
        var o = "dictionary" + (n && n.scope ? "." + n.scope : "") + "." + r;
        return (0, s.h)(
          "mark",
          {
            style: {
              background: e
                ? f()(n, o)
                  ? "rgba(119,231,117,.5)"
                  : "rgba(229,226,41,.5)"
                : "rgba(228,147,51,.5)",
            },
            title: r,
          },
          e
        );
      }
      return e;
    }
    function T(t) {
      var e = t.id,
        r = t.children,
        n = t.plural,
        o = t.fields,
        i = (0, u.useContext)(x).intl,
        a = L(e, i && i.scope, i && i.dictionary, o, n, r);
      return (0, s.h)(P, {
        id: e,
        value: a,
      });
    }
    function D(t, e, r) {
      var n = {};
      for (var o in ((e = e || {}),
      (t = (function (t) {
        if (
          ("string" == typeof (t = t || {}) && (t = t.split(",")), "join" in t)
        ) {
          for (var e = {}, r = 0; r < t.length; r++) {
            var n = t[r].trim();
            n && (e[n.split(".").pop()] = n);
          }
          return e;
        }
        return t;
      })(t)),
      t))
        if (t.hasOwnProperty(o) && t[o]) {
          var i = t[o];
          r || "string" != typeof i
            ? i.type === T &&
              ((i = _(
                {
                  fallback: i.props.children,
                },
                i.props
              )),
              (n[o] = L(
                i.id,
                e.scope,
                e.dictionary,
                i.fields,
                i.plural,
                i.fallback
              )))
            : (n[o] = L(i, e.scope, e.dictionary));
        }
      return n;
    }
    function M(t) {
      var e = t.children,
        r = (0, u.useContext)(x).intl;
      return e && e.length
        ? e.map(function (t) {
            return (0, s.cloneElement)(t, D(t.props, r, !0));
          })
        : e && (0, s.cloneElement)(e, D(e.props, r, !0));
    }
    function N(t, e) {
      var r = {};
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) &&
          -1 === e.indexOf(n) &&
          (r[n] = t[n]);
      return r;
    }
    function F(t) {
      var e = t.html,
        r = t.id,
        n = N(t, ["html", "id"]);
      return (0, s.h)(P, {
        id: r,
        value: e
          ? "string" == typeof e
            ? (0, s.h)(
                b,
                Object.assign(
                  {},
                  {
                    type: "html",
                    trim: !1,
                  },
                  n,
                  {
                    markup: e,
                  }
                )
              )
            : (0, s.h)("span", null, e)
          : e,
      });
    }
    (A.intl = A),
      (A.IntlContext = x),
      (A.IntlProvider = S),
      (A.Text = T),
      (A.MarkupText = function (t) {
        var e = t.id,
          r = t.fields,
          n = t.plural,
          o = t.children,
          i = N(t, ["id", "fields", "plural", "children"]);
        return (0, s.h)(
          M,
          null,
          (0, s.h)(
            F,
            Object.assign(
              {},
              {
                html: (0, s.h)(T, {
                  id: e,
                  fields: r,
                  plural: n,
                  children: o,
                }),
                id: e,
              },
              i
            )
          )
        );
      }),
      (A.Localizer = M),
      (A.withText = function (t) {
        return function (e) {
          function r(r, n) {
            var o = (0, u.useContext)(x).intl,
              i = D(
                "function" == typeof t
                  ? t(r, {
                      intl: o,
                    })
                  : t,
                o
              );
            return (0, s.h)(e, _(_({}, r), i));
          }
          return (
            (r.getWrappedComponent =
              (e && e.getWrappedComponent) ||
              function () {
                return e;
              }),
            r
          );
        };
      }),
      (A.useText = function (t) {
        var e = (0, u.useContext)(x).intl;
        return D(
          "function" == typeof t
            ? t({
                intl: e,
              })
            : t,
          e
        );
      }),
      (A.translate = L);
    var I = {
        default: a,
        en_US: a,
        fr_FR: l,
      },
      H = r(892),
      Z = r.n(H),
      $ = r(760),
      U = r.n($),
      z = r(311),
      G = r.n(z),
      R = r(192),
      W = r.n(R),
      B = r(60),
      J = r.n(B),
      q = r(865),
      Q = r.n(q),
      V = r(80),
      Y = {};
    (Y.styleTagTransform = Q()),
      (Y.setAttributes = W()),
      (Y.insert = G().bind(null, "head")),
      (Y.domAPI = U()),
      (Y.insertStyleElement = J()),
      Z()(V.Z, Y),
      V.Z && V.Z.locals && V.Z.locals;
    var K = r(763),
      X = {};
    (X.styleTagTransform = Q()),
      (X.setAttributes = W()),
      (X.insert = G().bind(null, "head")),
      (X.domAPI = U()),
      (X.insertStyleElement = J()),
      Z()(K.Z, X),
      K.Z && K.Z.locals && K.Z.locals;
    var tt = r(188);
    function et(t) {
      return (
        (et =
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
        et(t)
      );
    }
    var rt = ["lang", "langDefinitions", "className", "children"];
    function nt(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ot(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? nt(Object(r), !0).forEach(function (e) {
              it(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : nt(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function it(t, e, r) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== et(t) || null === t) return t;
            var r = t[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(t, "string");
              if ("object" !== et(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === et(e) ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    var at = function (t) {
      var e,
        r,
        n = t.lang,
        a = void 0 === n ? "en_US" : n,
        l = t.langDefinitions,
        c = void 0 === l ? {} : l,
        s = t.className,
        u = t.children,
        p = (function (t, e) {
          if (null == t) return {};
          var r,
            n,
            o = (function (t, e) {
              if (null == t) return {};
              var r,
                n,
                o = {},
                i = Object.keys(t);
              for (n = 0; n < i.length; n++)
                (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
              return o;
            })(t, e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]),
                e.indexOf(r) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(t, r) &&
                    (o[r] = t[r]));
          }
          return o;
        })(t, rt),
        f = o()(c.default, null !== (e = c[a]) && void 0 !== e ? e : {}),
        d = o()(
          (function (t) {
            return o()(I.default, I[t] || {});
          })(a),
          f
        );
      return (0, tt.jsx)(S, {
        definition: d,
        children: (0, tt.jsx)(
          "div",
          ot(
            ot({}, p),
            {},
            {
              className:
                ((r = ["elsie-base-design", s]),
                r
                  .reduce(function (t, e) {
                    if (!e) return t;
                    if (
                      ("string" == typeof e && (t += " ".concat(e)),
                      Array.isArray(e))
                    ) {
                      var r = (function (t, e) {
                          return (
                            (function (t) {
                              if (Array.isArray(t)) return t;
                            })(t) ||
                            (function (t, e) {
                              var r =
                                null == t
                                  ? null
                                  : ("undefined" != typeof Symbol &&
                                      t[Symbol.iterator]) ||
                                    t["@@iterator"];
                              if (null != r) {
                                var n,
                                  o,
                                  i,
                                  a,
                                  l = [],
                                  c = !0,
                                  s = !1;
                                try {
                                  if (((i = (r = r.call(t)).next), 0 === e)) {
                                    if (Object(r) !== r) return;
                                    c = !1;
                                  } else
                                    for (
                                      ;
                                      !(c = (n = i.call(r)).done) &&
                                      (l.push(n.value), l.length !== e);
                                      c = !0
                                    );
                                } catch (t) {
                                  (s = !0), (o = t);
                                } finally {
                                  try {
                                    if (
                                      !c &&
                                      null != r.return &&
                                      ((a = r.return()), Object(a) !== a)
                                    )
                                      return;
                                  } finally {
                                    if (s) throw o;
                                  }
                                }
                                return l;
                              }
                            })(t, e) ||
                            (function (t, e) {
                              if (t) {
                                if ("string" == typeof t) return i(t, e);
                                var r = Object.prototype.toString
                                  .call(t)
                                  .slice(8, -1);
                                return (
                                  "Object" === r &&
                                    t.constructor &&
                                    (r = t.constructor.name),
                                  "Map" === r || "Set" === r
                                    ? Array.from(t)
                                    : "Arguments" === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        r
                                      )
                                    ? i(t, e)
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
                        })(e, 2),
                        n = r[0],
                        o = r[1];
                      n && o && (t += " ".concat(n));
                    }
                    return t;
                  }, "")
                  .trim()),
              children: u,
            }
          )
        ),
      });
    };
  },
  516: (t, e, r) => {
    r.d(e, {
      H: () => U,
    });
    var n = r(474),
      o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
      i =
        /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
      a = /[\s\n\\/='"\0<>]/,
      l = /^xlink:?./,
      c = /["&<]/;
    function s(t) {
      if (!1 === c.test((t += ""))) return t;
      for (var e = 0, r = 0, n = "", o = ""; r < t.length; r++) {
        switch (t.charCodeAt(r)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 60:
            o = "&lt;";
            break;
          default:
            continue;
        }
        r !== e && (n += t.slice(e, r)), (n += o), (e = r + 1);
      }
      return r !== e && (n += t.slice(e, r)), n;
    }
    var u = function (t, e) {
        return String(t).replace(/(\n+)/g, "$1" + (e || "\t"));
      },
      p = function (t, e, r) {
        return (
          String(t).length > (e || 40) ||
          (!r && -1 !== String(t).indexOf("\n")) ||
          -1 !== String(t).indexOf("<")
        );
      },
      f = {},
      d = /([A-Z])/g;
    function y(t) {
      var e = "";
      for (var r in t) {
        var n = t[r];
        null != n &&
          "" !== n &&
          (e && (e += " "),
          (e +=
            "-" == r[0]
              ? r
              : f[r] || (f[r] = r.replace(d, "-$1").toLowerCase())),
          (e =
            "number" == typeof n && !1 === o.test(r)
              ? e + ": " + n + "px;"
              : e + ": " + n + ";"));
      }
      return e || void 0;
    }
    function v(t, e) {
      return (
        Array.isArray(e) ? e.reduce(v, t) : null != e && !1 !== e && t.push(e),
        t
      );
    }
    function m() {
      this.__d = !0;
    }
    function h(t, e) {
      return {
        __v: t,
        context: e,
        props: t.props,
        setState: m,
        forceUpdate: m,
        __d: !0,
        __h: [],
      };
    }
    function g(t, e) {
      var r = t.contextType,
        n = r && e[r.__c];
      return null != r ? (n ? n.props.value : r.__) : e;
    }
    var b = [];
    function x(t, e, r, o, c, f) {
      if (null == t || "boolean" == typeof t) return "";
      if ("object" != typeof t) return "function" == typeof t ? "" : s(t);
      var d = r.pretty,
        m = d && "string" == typeof d ? d : "\t";
      if (Array.isArray(t)) {
        for (var w = "", _ = 0; _ < t.length; _++)
          d && _ > 0 && (w += "\n"), (w += x(t[_], e, r, o, c, f));
        return w;
      }
      if (void 0 !== t.constructor) return "";
      var O,
        j = t.type,
        S = t.props,
        A = !1;
      if ("function" == typeof j) {
        if (((A = !0), !r.shallow || (!o && !1 !== r.renderRootComponent))) {
          if (j === n.Fragment) {
            var k = [];
            return (
              v(k, t.props.children),
              x(k, e, r, !1 !== r.shallowHighOrder, c, f)
            );
          }
          var E,
            C = (t.__c = h(t, e));
          n.options.__b && n.options.__b(t);
          var L = n.options.__r;
          if (j.prototype && "function" == typeof j.prototype.render) {
            var P = g(j, e);
            ((C = t.__c = new j(S, P)).__v = t),
              (C._dirty = C.__d = !0),
              (C.props = S),
              null == C.state && (C.state = {}),
              null == C._nextState &&
                null == C.__s &&
                (C._nextState = C.__s = C.state),
              (C.context = P),
              j.getDerivedStateFromProps
                ? (C.state = Object.assign(
                    {},
                    C.state,
                    j.getDerivedStateFromProps(C.props, C.state)
                  ))
                : C.componentWillMount &&
                  (C.componentWillMount(),
                  (C.state =
                    C._nextState !== C.state
                      ? C._nextState
                      : C.__s !== C.state
                      ? C.__s
                      : C.state)),
              L && L(t),
              (E = C.render(C.props, C.state, C.context));
          } else
            for (var T = g(j, e), D = 0; C.__d && D++ < 25; )
              (C.__d = !1), L && L(t), (E = j.call(t.__c, S, T));
          return (
            C.getChildContext &&
              (e = Object.assign({}, e, C.getChildContext())),
            n.options.diffed && n.options.diffed(t),
            x(E, e, r, !1 !== r.shallowHighOrder, c, f)
          );
        }
        j =
          (O = j).displayName ||
          (O !== Function && O.name) ||
          (function (t) {
            var e = (Function.prototype.toString
              .call(t)
              .match(/^\s*function\s+([^( ]+)/) || "")[1];
            if (!e) {
              for (var r = -1, n = b.length; n--; )
                if (b[n] === t) {
                  r = n;
                  break;
                }
              r < 0 && (r = b.push(t) - 1), (e = "UnnamedComponent" + r);
            }
            return e;
          })(O);
      }
      var M,
        N,
        F = "<" + j;
      if (S) {
        var I = Object.keys(S);
        r && !0 === r.sortAttributes && I.sort();
        for (var H = 0; H < I.length; H++) {
          var Z = I[H],
            $ = S[Z];
          if ("children" !== Z) {
            if (
              !a.test(Z) &&
              ((r && r.allAttributes) ||
                ("key" !== Z &&
                  "ref" !== Z &&
                  "__self" !== Z &&
                  "__source" !== Z))
            ) {
              if ("defaultValue" === Z) Z = "value";
              else if ("defaultChecked" === Z) Z = "checked";
              else if ("defaultSelected" === Z) Z = "selected";
              else if ("className" === Z) {
                if (void 0 !== S.class) continue;
                Z = "class";
              } else
                c &&
                  l.test(Z) &&
                  (Z = Z.toLowerCase().replace(/^xlink:?/, "xlink:"));
              if ("htmlFor" === Z) {
                if (S.for) continue;
                Z = "for";
              }
              "style" === Z && $ && "object" == typeof $ && ($ = y($)),
                "a" === Z[0] &&
                  "r" === Z[1] &&
                  "boolean" == typeof $ &&
                  ($ = String($));
              var U = r.attributeHook && r.attributeHook(Z, $, e, r, A);
              if (U || "" === U) F += U;
              else if ("dangerouslySetInnerHTML" === Z) N = $ && $.__html;
              else if ("textarea" === j && "value" === Z) M = $;
              else if (($ || 0 === $ || "" === $) && "function" != typeof $) {
                if (!((!0 !== $ && "" !== $) || (($ = Z), r && r.xml))) {
                  F = F + " " + Z;
                  continue;
                }
                if ("value" === Z) {
                  if ("select" === j) {
                    f = $;
                    continue;
                  }
                  "option" === j &&
                    f == $ &&
                    void 0 === S.selected &&
                    (F += " selected");
                }
                F = F + " " + Z + '="' + s($) + '"';
              }
            }
          } else M = $;
        }
      }
      if (d) {
        var z = F.replace(/\n\s*/, " ");
        z === F || ~z.indexOf("\n")
          ? d && ~F.indexOf("\n") && (F += "\n")
          : (F = z);
      }
      if (((F += ">"), a.test(j)))
        throw new Error(j + " is not a valid HTML tag name in " + F);
      var G,
        R = i.test(j) || (r.voidElements && r.voidElements.test(j)),
        W = [];
      if (N) d && p(N) && (N = "\n" + m + u(N, m)), (F += N);
      else if (null != M && v((G = []), M).length) {
        for (var B = d && ~F.indexOf("\n"), J = !1, q = 0; q < G.length; q++) {
          var Q = G[q];
          if (null != Q && !1 !== Q) {
            var V = x(
              Q,
              e,
              r,
              !0,
              "svg" === j || ("foreignObject" !== j && c),
              f
            );
            if ((d && !B && p(V) && (B = !0), V))
              if (d) {
                var Y = V.length > 0 && "<" != V[0];
                J && Y ? (W[W.length - 1] += V) : W.push(V), (J = Y);
              } else W.push(V);
          }
        }
        if (d && B) for (var K = W.length; K--; ) W[K] = "\n" + m + u(W[K], m);
      }
      if (W.length || N) F += W.join("");
      else if (r && r.xml) return F.substring(0, F.length - 1) + " />";
      return (
        !R || G || N
          ? (d && ~F.indexOf("\n") && (F += "\n"), (F = F + "</" + j + ">"))
          : (F = F.replace(/>$/, " />")),
        F
      );
    }
    var w = {
      shallow: !0,
    };
    O.render = O;
    var _ = [];
    function O(t, e, r) {
      e = e || {};
      var o = n.options.__s;
      n.options.__s = !0;
      var i,
        a = (0, n.h)(n.Fragment, null);
      return (
        (a.__k = [t]),
        (i =
          r &&
          (r.pretty ||
            r.voidElements ||
            r.sortAttributes ||
            r.shallow ||
            r.allAttributes ||
            r.xml ||
            r.attributeHook)
            ? x(t, e, r)
            : C(t, e, !1, void 0, a)),
        n.options.__c && n.options.__c(t, _),
        (n.options.__s = o),
        (_.length = 0),
        i
      );
    }
    function j(t) {
      return null == t || "boolean" == typeof t
        ? null
        : "string" == typeof t || "number" == typeof t || "bigint" == typeof t
        ? (0, n.h)(null, null, t)
        : t;
    }
    function S(t, e) {
      return "className" === t
        ? "class"
        : "htmlFor" === t
        ? "for"
        : "defaultValue" === t
        ? "value"
        : "defaultChecked" === t
        ? "checked"
        : "defaultSelected" === t
        ? "selected"
        : e && l.test(t)
        ? t.toLowerCase().replace(/^xlink:?/, "xlink:")
        : t;
    }
    function A(t, e) {
      return "style" === t && null != e && "object" == typeof e
        ? y(e)
        : "a" === t[0] && "r" === t[1] && "boolean" == typeof e
        ? String(e)
        : e;
    }
    var k = Array.isArray,
      E = Object.assign;
    function C(t, e, r, o, l) {
      if (null == t || !0 === t || !1 === t || "" === t) return "";
      if ("object" != typeof t) return "function" == typeof t ? "" : s(t);
      if (k(t)) {
        var c = "";
        l.__k = t;
        for (var u = 0; u < t.length; u++)
          (c += C(t[u], e, r, o, l)), (t[u] = j(t[u]));
        return c;
      }
      if (void 0 !== t.constructor) return "";
      (t.__ = l), n.options.__b && n.options.__b(t);
      var p = t.type,
        f = t.props;
      if ("function" == typeof p) {
        var d;
        if (p === n.Fragment) d = f.children;
        else {
          d =
            p.prototype && "function" == typeof p.prototype.render
              ? (function (t, e) {
                  var r = t.type,
                    o = g(r, e),
                    i = new r(t.props, o);
                  (t.__c = i),
                    (i.__v = t),
                    (i.__d = !0),
                    (i.props = t.props),
                    null == i.state && (i.state = {}),
                    null == i.__s && (i.__s = i.state),
                    (i.context = o),
                    r.getDerivedStateFromProps
                      ? (i.state = E(
                          {},
                          i.state,
                          r.getDerivedStateFromProps(i.props, i.state)
                        ))
                      : i.componentWillMount &&
                        (i.componentWillMount(),
                        (i.state = i.__s !== i.state ? i.__s : i.state));
                  var a = n.options.__r;
                  return a && a(t), i.render(i.props, i.state, i.context);
                })(t, e)
              : (function (t, e) {
                  var r,
                    o = h(t, e),
                    i = g(t.type, e);
                  t.__c = o;
                  for (var a = n.options.__r, l = 0; o.__d && l++ < 25; )
                    (o.__d = !1), a && a(t), (r = t.type.call(o, t.props, i));
                  return r;
                })(t, e);
          var y = t.__c;
          y.getChildContext && (e = E({}, e, y.getChildContext()));
        }
        var v = C(
          (d =
            null != d && d.type === n.Fragment && null == d.key
              ? d.props.children
              : d),
          e,
          r,
          o,
          t
        );
        return (
          n.options.diffed && n.options.diffed(t),
          (t.__ = void 0),
          n.options.unmount && n.options.unmount(t),
          v
        );
      }
      var m,
        b,
        x = "<";
      if (((x += p), f))
        for (var w in ((m = f.children), f)) {
          var _ = f[w];
          if (
            !(
              "key" === w ||
              "ref" === w ||
              "__self" === w ||
              "__source" === w ||
              "children" === w ||
              ("className" === w && "class" in f) ||
              ("htmlFor" === w && "for" in f) ||
              a.test(w)
            )
          )
            if (((_ = A((w = S(w, r)), _)), "dangerouslySetInnerHTML" === w))
              b = _ && _.__html;
            else if ("textarea" === p && "value" === w) m = _;
            else if ((_ || 0 === _ || "" === _) && "function" != typeof _) {
              if (!0 === _ || "" === _) {
                (_ = w), (x = x + " " + w);
                continue;
              }
              if ("value" === w) {
                if ("select" === p) {
                  o = _;
                  continue;
                }
                "option" !== p ||
                  o != _ ||
                  "selected" in f ||
                  (x += " selected");
              }
              x = x + " " + w + '="' + s(_) + '"';
            }
        }
      var O = x;
      if (((x += ">"), a.test(p)))
        throw new Error(p + " is not a valid HTML tag name in " + x);
      var L = "",
        P = !1;
      if (b) (L += b), (P = !0);
      else if ("string" == typeof m) (L += s(m)), (P = !0);
      else if (k(m)) {
        t.__k = m;
        for (var T = 0; T < m.length; T++) {
          var D = m[T];
          if (((m[T] = j(D)), null != D && !1 !== D)) {
            var M = C(D, e, "svg" === p || ("foreignObject" !== p && r), o, t);
            M && ((L += M), (P = !0));
          }
        }
      } else if (null != m && !1 !== m && !0 !== m) {
        t.__k = [j(m)];
        var N = C(m, e, "svg" === p || ("foreignObject" !== p && r), o, t);
        N && ((L += N), (P = !0));
      }
      if (
        (n.options.diffed && n.options.diffed(t),
        (t.__ = void 0),
        n.options.unmount && n.options.unmount(t),
        P)
      )
        x += L;
      else if (i.test(p)) return O + " />";
      return x + "</" + p + ">";
    }
    O.shallowRender = function (t, e) {
      return O(t, e, w);
    };
    const L = O;
    var P = r(188);
    function T(t) {
      return (
        (T =
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
        T(t)
      );
    }
    function D() {
      D = function () {
        return t;
      };
      var t = {},
        e = Object.prototype,
        r = e.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        l = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (t) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function s(t, e, r, o) {
        var i = e && e.prototype instanceof f ? e : f,
          a = Object.create(i.prototype),
          l = new S(o || []);
        return (
          n(a, "_invoke", {
            value: w(t, r, l),
          }),
          a
        );
      }
      function u(t, e, r) {
        try {
          return {
            type: "normal",
            arg: t.call(e, r),
          };
        } catch (t) {
          return {
            type: "throw",
            arg: t,
          };
        }
      }
      t.wrap = s;
      var p = {};
      function f() {}
      function d() {}
      function y() {}
      var v = {};
      c(v, i, function () {
        return this;
      });
      var m = Object.getPrototypeOf,
        h = m && m(m(A([])));
      h && h !== e && r.call(h, i) && (v = h);
      var g = (y.prototype = f.prototype = Object.create(v));
      function b(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function x(t, e) {
        function o(n, i, a, l) {
          var c = u(t[n], t, i);
          if ("throw" !== c.type) {
            var s = c.arg,
              p = s.value;
            return p && "object" == T(p) && r.call(p, "__await")
              ? e.resolve(p.__await).then(
                  function (t) {
                    o("next", t, a, l);
                  },
                  function (t) {
                    o("throw", t, a, l);
                  }
                )
              : e.resolve(p).then(
                  function (t) {
                    (s.value = t), a(s);
                  },
                  function (t) {
                    return o("throw", t, a, l);
                  }
                );
          }
          l(c.arg);
        }
        var i;
        n(this, "_invoke", {
          value: function (t, r) {
            function n() {
              return new e(function (e, n) {
                o(t, r, e, n);
              });
            }
            return (i = i ? i.then(n, n) : n());
          },
        });
      }
      function w(t, e, r) {
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
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var l = _(a, r);
              if (l) {
                if (l === p) continue;
                return l;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var c = u(t, e, r);
            if ("normal" === c.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), c.arg === p))
                continue;
              return {
                value: c.arg,
                done: r.done,
              };
            }
            "throw" === c.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
          }
        };
      }
      function _(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              _(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            p
          );
        var o = u(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), p;
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              p)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            p);
      }
      function O(t) {
        var e = {
          tryLoc: t[0],
        };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function j(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
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
      function A(t) {
        if (t || "" === t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(T(t) + " is not iterable");
      }
      return (
        (d.prototype = y),
        n(g, "constructor", {
          value: y,
          configurable: !0,
        }),
        n(y, "constructor", {
          value: d,
          configurable: !0,
        }),
        (d.displayName = c(y, l, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === d || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), c(t, l, "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return {
            __await: t,
          };
        }),
        b(x.prototype),
        c(x.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = x),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new x(s(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        b(g),
        c(g, l, "Generator"),
        c(g, i, function () {
          return this;
        }),
        c(g, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return (t.value = n), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = A),
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
              this.tryEntries.forEach(j),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
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
            function n(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var l = r.call(i, "catchLoc"),
                  c = r.call(i, "finallyLoc");
                if (l && c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (l) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
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
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
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
              p
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), j(r), p;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  j(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = {
                iterator: A(t),
                resultName: e,
                nextLoc: r,
              }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        t
      );
    }
    function M(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function N(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? M(Object(r), !0).forEach(function (e) {
              F(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : M(Object(r)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(r, e)
              );
            });
      }
      return t;
    }
    function F(t, e, r) {
      return (
        (e = $(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }
    function I(t, e, r, n, o, i, a) {
      try {
        var l = t[i](a),
          c = l.value;
      } catch (t) {
        return void r(t);
      }
      l.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function H(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (n, o) {
          var i = t.apply(e, r);
          function a(t) {
            I(i, n, o, a, l, "next", t);
          }
          function l(t) {
            I(i, n, o, a, l, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Z(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, $(n.key), n);
      }
    }
    function $(t) {
      var e = (function (t, e) {
        if ("object" !== T(t) || null === t) return t;
        var r = t[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(t, "string");
          if ("object" !== T(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      })(t);
      return "symbol" === T(e) ? e : String(e);
    }
    var U = (function () {
      function t(e) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this._provider = e);
      }
      var e, r, o;
      return (
        (e = t),
        (r = [
          {
            key: "render",
            value: function (t, e) {
              var r = this;
              return (function () {
                var o = H(
                  D().mark(function o(i) {
                    var a, l, c;
                    return D().wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            if (t) {
                              o.next = 2;
                              break;
                            }
                            throw new Error("Component is not defined");
                          case 2:
                            if (i) {
                              o.next = 4;
                              break;
                            }
                            throw new Error("Root element is not defined");
                          case 4:
                            return (
                              (o.next = 6),
                              null === (l = t.getInitialData) || void 0 === l
                                ? void 0
                                : l.call(t, e)
                            );
                          case 6:
                            if (
                              ((o.t1 = a = o.sent),
                              (o.t0 = null !== o.t1),
                              !o.t0)
                            ) {
                              o.next = 10;
                              break;
                            }
                            o.t0 = void 0 !== a;
                          case 10:
                            if (!o.t0) {
                              o.next = 14;
                              break;
                            }
                            (o.t2 = a), (o.next = 15);
                            break;
                          case 14:
                            o.t2 = {};
                          case 15:
                            (c = o.t2),
                              (0, n.render)(
                                (0, P.jsx)(
                                  r._provider.type,
                                  N(
                                    N({}, r._provider.props),
                                    {},
                                    {
                                      children: (0, P.jsx)(
                                        t,
                                        N(
                                          N({}, e),
                                          {},
                                          {
                                            initialData: c,
                                          }
                                        )
                                      ),
                                    }
                                  )
                                ),
                                i
                              );
                          case 17:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  })
                );
                return function (t) {
                  return o.apply(this, arguments);
                };
              })();
            },
          },
          {
            key: "toString",
            value:
              ((o = H(
                D().mark(function t(e, r, n) {
                  var o, i, a;
                  return D().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e) {
                              t.next = 2;
                              break;
                            }
                            throw new Error("Component is not defined");
                          case 2:
                            return (
                              (t.next = 4),
                              null === (i = e.getInitialData) || void 0 === i
                                ? void 0
                                : i.call(e, r)
                            );
                          case 4:
                            if (
                              ((t.t1 = o = t.sent),
                              (t.t0 = null !== t.t1),
                              !t.t0)
                            ) {
                              t.next = 8;
                              break;
                            }
                            t.t0 = void 0 !== o;
                          case 8:
                            if (!t.t0) {
                              t.next = 12;
                              break;
                            }
                            (t.t2 = o), (t.next = 13);
                            break;
                          case 12:
                            t.t2 = {};
                          case 13:
                            return (
                              (a = t.t2),
                              t.abrupt(
                                "return",
                                L(
                                  (0, P.jsx)(
                                    this._provider.type,
                                    N(
                                      N({}, this._provider.props),
                                      {},
                                      {
                                        children: (0, P.jsx)(
                                          e,
                                          N(
                                            N({}, r),
                                            {},
                                            {
                                              initialData: a,
                                            }
                                          )
                                        ),
                                      }
                                    )
                                  ),
                                  {},
                                  N({}, n)
                                )
                              )
                            );
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function (t, e, r) {
                return o.apply(this, arguments);
              }),
          },
        ]),
        r && Z(e.prototype, r),
        Object.defineProperty(e, "prototype", {
          writable: !1,
        }),
        t
      );
    })();
  },
  80: (t, e, r) => {
    r.d(e, {
      Z: () => l,
    });
    var n = r(933),
      o = r.n(n),
      i = r(476),
      a = r.n(i)()(o());
    a.push([
      t.id,
      "/**\n * Do not edit directly\n * Generated on Fri, 14 Jul 2023 19:01:45 GMT\n */\n\n.elsie-base-design {\n  --color-brand-500: #454545; /* Brand buttons default - AAA */\n  --color-brand-600: #383838; /* Brand buttons on hover - AAA */\n  --color-brand-700: #2b2b2b; /* Brand buttons selected */\n  --color-neutral-50: #ffffff; /* Lightest surface / Text & components On Dark surface - AAA */\n  --color-neutral-100: #fafafa; /* Light surface - AAA */\n  --color-neutral-200: #f5f5f5; /* Light surface - AAA */\n  --color-neutral-300: #e8e8e8; /* Disabled surfaces - AAA */\n  --color-neutral-400: #d6d6d6; /* Ornamental elements (ie. Divider) */\n  --color-neutral-500: #b8b8b8; /* Disabled text */\n  --color-neutral-600: #8f8f8f; /* Component borders (ie. Text field border) - AA Large text */\n  --color-neutral-700: #666666; /* Secondary text - AAA */\n  --color-neutral-800: #3d3d3d; /* Default text - AAA */\n  --color-neutral-900: #292929; /* Default text on hover - AAA */\n  --color-positive-200: #eff5ef; /* Semantic positive surface - AA Large text */\n  --color-positive-500: #7fb078; /* Semantic positive surface */\n  --color-positive-800: #53824c; /* Semantic Positive text - On Light AA */\n  --color-informational-200: #eeeffb; /* Semantic informational surface - AA Large text */\n  --color-informational-500: #6978d9; /* Semantic informational surface */\n  --color-informational-800: #5d6dd6; /* Semantic informational text, Highlights - On Light AA */\n  --color-warning-200: #fdf3e9; /* Semantic warning surface - AA Large text */\n  --color-warning-500: #e79f5c; /* Semantic warning surface */\n  --color-warning-800: #cc7a2e; /* Semantic warning text - On Light AA */\n  --color-alert-200: #ffebeb; /* Semantic alert surface - AA Large text */\n  --color-alert-500: #db7070; /* Semantic alert surface */\n  --color-alert-800: #c35050; /* Semantic alert text - On light AA */\n  --color-opacity-16: rgba(255, 255, 255, 0.16);\n  --color-opacity-24: rgba(255, 255, 255, 0.24);\n  --grid-1-columns: 4;\n  --grid-1-margins: 0;\n  --grid-1-gutters: 16px;\n  --grid-2-columns: 12;\n  --grid-2-margins: 0;\n  --grid-2-gutters: 16px;\n  --grid-3-columns: 12;\n  --grid-3-margins: 0;\n  --grid-3-gutters: 24px;\n  --grid-4-columns: 12;\n  --grid-4-margins: 0;\n  --grid-4-gutters: 24px;\n  --grid-5-columns: 12;\n  --grid-5-margins: 0;\n  --grid-5-gutters: 24px;\n  --shape-border-radius-1: 3px;\n  --shape-border-radius-2: 8px;\n  --shape-border-radius-3: 24px;\n  --shape-border-width-1: 1px;\n  --shape-border-width-2: 1.5px;\n  --shape-border-width-3: 2px;\n  --shape-border-width-4: 4px;\n  --shape-shadow-1: 0 0 16px 0 rgba(0, 0, 0, 0.16); /* Elevated panels (ie. Page side panel, Mobile bottom bar) */\n  --shape-shadow-2: 0 2px 16px 0 rgba(0, 0, 0, 0.16); /* Elevated dialogs (ie. Modal) */\n  --shape-shadow-3: 0 2px 3px 0 rgba(0, 0, 0, 0.16); /* Elevated container (ie. Card) */\n  --shape-icon-stroke-1: 1px;\n  --shape-icon-stroke-2: 1.5px;\n  --shape-icon-stroke-3: 2px;\n  --shape-icon-stroke-4: 4px;\n  --spacing-xxsmall: 4px;\n  --spacing-xsmall: 8px;\n  --spacing-small: 16px;\n  --spacing-medium: 24px;\n  --spacing-big: 32px;\n  --spacing-xbig: 40px;\n  --spacing-xxbig: 48px;\n  --spacing-large: 64px;\n  --spacing-xlarge: 72px;\n  --spacing-xxlarge: 96px;\n  --spacing-huge: 120px;\n  --spacing-xhuge: 144px;\n  --spacing-xxhuge: 192px;\n  --type-base-font-family: system-ui, sans-serif;\n  --type-display-1-font: normal normal 300 60px/72px\n    var(--type-base-font-family); /* Hero title */\n  --type-display-1-letter-spacing: 0.04em;\n  --type-display-2-font: normal normal 300 48px/56px\n    var(--type-base-font-family); /* Banner title */\n  --type-display-2-letter-spacing: 0.04em;\n  --type-display-3-font: normal normal 300 34px/40px\n    var(--type-base-font-family); /* Desktop & tablet section title */\n  --type-display-3-letter-spacing: 0.04em;\n  --type-headline-1-font: normal normal 400 24px/32px\n    var(--type-base-font-family); /* Desktop & tablet page title */\n  --type-headline-1-letter-spacing: 0.04em;\n  --type-headline-2-default-font: normal normal 300 20px/24px\n    var(--type-base-font-family); /* Rail title */\n  --type-headline-2-default-letter-spacing: 0.04em;\n  --type-headline-2-strong-font: normal normal 400 20px/24px\n    var(--type-base-font-family); /* Mobile page and section title */\n  --type-headline-2-strong-letter-spacing: 0.04em;\n  --type-body-1-default-font: normal normal 300 16px/24px\n    var(--type-base-font-family); /* Normal text paragraph */\n  --type-body-1-default-letter-spacing: 0.04em;\n  --type-body-1-strong-font: normal normal 400 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing: 0.04em;\n  --type-body-1-emphasized-font: normal normal 700 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing: 0.04em;\n  --type-body-2-default-font: normal normal 300 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-default-letter-spacing: 0.04em;\n  --type-body-2-strong-font: normal normal 400 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing: 0.04em;\n  --type-body-2-emphasized-font: normal normal 700 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing: 0.04em;\n  --type-button-1-font: normal normal 400 20px/26px var(--type-base-font-family); /* Primary button text */\n  --type-button-1-letter-spacing: 0.08em;\n  --type-button-2-font: normal normal 400 16px/24px var(--type-base-font-family); /* Small buttons */\n  --type-button-2-letter-spacing: 0.08em;\n  --type-details-caption-1-font: normal normal 400 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing: 0.08em;\n  --type-details-caption-2-font: normal normal 300 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing: 0.08em;\n  --type-details-overline-font: normal normal 700 12px/20px\n    var(--type-base-font-family);\n  --type-details-overline-letter-spacing: 0.16em;\n}\n",
      "",
    ]);
    const l = a;
  },
  763: (t, e, r) => {
    r.d(e, {
      Z: () => l,
    });
    var n = r(933),
      o = r.n(n),
      i = r(476),
      a = r.n(i)()(o());
    a.push([
      t.id,
      ".elsie-base-design a {\n  --textColor: var(--color-brand-500);\n  --textFont: var(--type-body-1-strong-font)\n  --textLetterSpacing: var(--type-body-1-strong-letter-spacing);\n  color: var(--textColor);\n  font: var(--textFont);\n  letter-spacing: var(--textLetterSpacing);\n  text-decoration: none;\n}\n\n.elsie-base-design a:hover {\n  --textColor: var(--color-brand-700);\n  text-decoration: solid underline var(--textColor);\n  text-underline-offset: 6px;\n}\n\n.elsie-base-design a:focus-visible {\n  outline: solid var(--shape-border-width-4) var(--color-neutral-400);\n  border: var(--shape-border-width-1) solid var(--color-neutral-800); \n  border-radius: var(--shape-border-radius-1);\n}\n",
      "",
    ]);
    const l = a;
  },
  476: (t) => {
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var r = "",
              n = void 0 !== e[5];
            return (
              e[4] && (r += "@supports (".concat(e[4], ") {")),
              e[2] && (r += "@media ".concat(e[2], " {")),
              n &&
                (r += "@layer".concat(
                  e[5].length > 0 ? " ".concat(e[5]) : "",
                  " {"
                )),
              (r += t(e)),
              n && (r += "}"),
              e[2] && (r += "}"),
              e[4] && (r += "}"),
              r
            );
          }).join("");
        }),
        (e.i = function (t, r, n, o, i) {
          "string" == typeof t && (t = [[null, t, void 0]]);
          var a = {};
          if (n)
            for (var l = 0; l < this.length; l++) {
              var c = this[l][0];
              null != c && (a[c] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var u = [].concat(t[s]);
            (n && a[u[0]]) ||
              (void 0 !== i &&
                (void 0 === u[5] ||
                  (u[1] = "@layer"
                    .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                    .concat(u[1], "}")),
                (u[5] = i)),
              r &&
                (u[2]
                  ? ((u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")),
                    (u[2] = r))
                  : (u[2] = r)),
              o &&
                (u[4]
                  ? ((u[1] = "@supports ("
                      .concat(u[4], ") {")
                      .concat(u[1], "}")),
                    (u[4] = o))
                  : (u[4] = "".concat(o))),
              e.push(u));
          }
        }),
        e
      );
    };
  },
  933: (t) => {
    t.exports = function (t) {
      return t[1];
    };
  },
  857: (t) => {
    var e = function (t) {
        return (
          (function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
          !(function (t) {
            var e = Object.prototype.toString.call(t);
            return (
              "[object RegExp]" === e ||
              "[object Date]" === e ||
              (function (t) {
                return t.$$typeof === r;
              })(t)
            );
          })(t)
        );
      },
      r =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
    function n(t, e) {
      return !1 !== e.clone && e.isMergeableObject(t)
        ? l(((r = t), Array.isArray(r) ? [] : {}), t, e)
        : t;
      var r;
    }
    function o(t, e, r) {
      return t.concat(e).map(function (t) {
        return n(t, r);
      });
    }
    function i(t) {
      return Object.keys(t).concat(
        (function (t) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.propertyIsEnumerable.call(t, e);
              })
            : [];
        })(t)
      );
    }
    function a(t, e) {
      try {
        return e in t;
      } catch (t) {
        return !1;
      }
    }
    function l(t, r, c) {
      ((c = c || {}).arrayMerge = c.arrayMerge || o),
        (c.isMergeableObject = c.isMergeableObject || e),
        (c.cloneUnlessOtherwiseSpecified = n);
      var s = Array.isArray(r);
      return s === Array.isArray(t)
        ? s
          ? c.arrayMerge(t, r, c)
          : (function (t, e, r) {
              var o = {};
              return (
                r.isMergeableObject(t) &&
                  i(t).forEach(function (e) {
                    o[e] = n(t[e], r);
                  }),
                i(e).forEach(function (i) {
                  (function (t, e) {
                    return (
                      a(t, e) &&
                      !(
                        Object.hasOwnProperty.call(t, e) &&
                        Object.propertyIsEnumerable.call(t, e)
                      )
                    );
                  })(t, i) ||
                    (a(t, i) && r.isMergeableObject(e[i])
                      ? (o[i] = (function (t, e) {
                          if (!e.customMerge) return l;
                          var r = e.customMerge(t);
                          return "function" == typeof r ? r : l;
                        })(i, r)(t[i], e[i], r))
                      : (o[i] = n(e[i], r)));
                }),
                o
              );
            })(t, r, c)
        : n(r, c);
    }
    l.all = function (t, e) {
      if (!Array.isArray(t))
        throw new Error("first argument should be an array");
      return t.reduce(function (t, r) {
        return l(t, r, e);
      }, {});
    };
    var c = l;
    t.exports = c;
  },
  152: function (t) {
    t.exports = function (t, e, r, n, o) {
      for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
        t = t ? t[e[n]] : o;
      return t === o ? r : t;
    };
  },
  892: (t) => {
    var e = [];
    function r(t) {
      for (var r = -1, n = 0; n < e.length; n++)
        if (e[n].identifier === t) {
          r = n;
          break;
        }
      return r;
    }
    function n(t, n) {
      for (var i = {}, a = [], l = 0; l < t.length; l++) {
        var c = t[l],
          s = n.base ? c[0] + n.base : c[0],
          u = i[s] || 0,
          p = "".concat(s, " ").concat(u);
        i[s] = u + 1;
        var f = r(p),
          d = {
            css: c[1],
            media: c[2],
            sourceMap: c[3],
            supports: c[4],
            layer: c[5],
          };
        if (-1 !== f) e[f].references++, e[f].updater(d);
        else {
          var y = o(d, n);
          (n.byIndex = l),
            e.splice(l, 0, {
              identifier: p,
              updater: y,
              references: 1,
            });
        }
        a.push(p);
      }
      return a;
    }
    function o(t, e) {
      var r = e.domAPI(e);
      return (
        r.update(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap &&
              e.supports === t.supports &&
              e.layer === t.layer
            )
              return;
            r.update((t = e));
          } else r.remove();
        }
      );
    }
    t.exports = function (t, o) {
      var i = n((t = t || []), (o = o || {}));
      return function (t) {
        t = t || [];
        for (var a = 0; a < i.length; a++) {
          var l = r(i[a]);
          e[l].references--;
        }
        for (var c = n(t, o), s = 0; s < i.length; s++) {
          var u = r(i[s]);
          0 === e[u].references && (e[u].updater(), e.splice(u, 1));
        }
        i = c;
      };
    };
  },
  311: (t) => {
    var e = {};
    t.exports = function (t, r) {
      var n = (function (t) {
        if (void 0 === e[t]) {
          var r = document.querySelector(t);
          if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
            try {
              r = r.contentDocument.head;
            } catch (t) {
              r = null;
            }
          e[t] = r;
        }
        return e[t];
      })(t);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
        );
      n.appendChild(r);
    };
  },
  60: (t) => {
    t.exports = function (t) {
      var e = document.createElement("style");
      return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
    };
  },
  192: (t, e, r) => {
    t.exports = function (t) {
      var e = r.nc;
      e && t.setAttribute("nonce", e);
    };
  },
  760: (t) => {
    t.exports = function (t) {
      if ("undefined" == typeof document)
        return {
          update: function () {},
          remove: function () {},
        };
      var e = t.insertStyleElement(t);
      return {
        update: function (r) {
          !(function (t, e, r) {
            var n = "";
            r.supports && (n += "@supports (".concat(r.supports, ") {")),
              r.media && (n += "@media ".concat(r.media, " {"));
            var o = void 0 !== r.layer;
            o &&
              (n += "@layer".concat(
                r.layer.length > 0 ? " ".concat(r.layer) : "",
                " {"
              )),
              (n += r.css),
              o && (n += "}"),
              r.media && (n += "}"),
              r.supports && (n += "}");
            var i = r.sourceMap;
            i &&
              "undefined" != typeof btoa &&
              (n +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  " */"
                )),
              e.styleTagTransform(n, t, e.options);
          })(e, t, r);
        },
        remove: function () {
          !(function (t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
          })(e);
        },
      };
    };
  },
  865: (t) => {
    t.exports = function (t, e) {
      if (e.styleSheet) e.styleSheet.cssText = t;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(t));
      }
    };
  },
  188: (t, e, r) => {
    r(853);
    var n = r(142);
    r.o(n, "jsx") &&
      r.d(e, {
        jsx: function () {
          return n.jsx;
        },
      });
  },
};

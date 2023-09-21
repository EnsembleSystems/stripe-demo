/*! For license information please see render.js.LICENSE.txt */
import * as e from "@dropins/elsie/event-bus.js";
import * as t from "@dropins/elsie/preact-compat.js";
import * as r from "@dropins/elsie/preact-hooks.js";
import * as n from "@dropins/elsie/preact-jsx-runtime.js";
import * as o from "@dropins/elsie/preact.js";
export const id = 70;
export const ids = [70];
export const modules = {
  4597: (e, t, r) => {
    r.d(t, {
      s: () => we,
    });
    var n = r(3474),
      o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
      a =
        /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
      i = /[\s\n\\/='"\0<>]/,
      l = /^xlink:?./,
      s = /["&<]/;
    function c(e) {
      if (!1 === s.test((e += ""))) return e;
      for (var t = 0, r = 0, n = "", o = ""; r < e.length; r++) {
        switch (e.charCodeAt(r)) {
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
        r !== t && (n += e.slice(t, r)), (n += o), (t = r + 1);
      }
      return r !== t && (n += e.slice(t, r)), n;
    }
    var u = function (e, t) {
        return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
      },
      f = function (e, t, r) {
        return (
          String(e).length > (t || 40) ||
          (!r && -1 !== String(e).indexOf("\n")) ||
          -1 !== String(e).indexOf("<")
        );
      },
      p = {},
      d = /([A-Z])/g;
    function y(e) {
      var t = "";
      for (var r in e) {
        var n = e[r];
        null != n &&
          "" !== n &&
          (t && (t += " "),
          (t +=
            "-" == r[0]
              ? r
              : p[r] || (p[r] = r.replace(d, "-$1").toLowerCase())),
          (t =
            "number" == typeof n && !1 === o.test(r)
              ? t + ": " + n + "px;"
              : t + ": " + n + ";"));
      }
      return t || void 0;
    }
    function m(e, t) {
      return (
        Array.isArray(t) ? t.reduce(m, e) : null != t && !1 !== t && e.push(t),
        e
      );
    }
    function h() {
      this.__d = !0;
    }
    function v(e, t) {
      return {
        __v: e,
        context: t,
        props: e.props,
        setState: h,
        forceUpdate: h,
        __d: !0,
        __h: [],
      };
    }
    function g(e, t) {
      var r = e.contextType,
        n = r && t[r.__c];
      return null != r ? (n ? n.props.value : r.__) : t;
    }
    var b = [];
    function x(e, t, r, o, s, p) {
      if (null == e || "boolean" == typeof e) return "";
      if ("object" != typeof e) return "function" == typeof e ? "" : c(e);
      var d = r.pretty,
        h = d && "string" == typeof d ? d : "\t";
      if (Array.isArray(e)) {
        for (var _ = "", w = 0; w < e.length; w++)
          d && w > 0 && (_ += "\n"), (_ += x(e[w], t, r, o, s, p));
        return _;
      }
      if (void 0 !== e.constructor) return "";
      var O,
        S = e.type,
        j = e.props,
        A = !1;
      if ("function" == typeof S) {
        if (((A = !0), !r.shallow || (!o && !1 !== r.renderRootComponent))) {
          if (S === n.Fragment) {
            var E = [];
            return (
              m(E, e.props.children),
              x(E, t, r, !1 !== r.shallowHighOrder, s, p)
            );
          }
          var k,
            L = (e.__c = v(e, t));
          n.options.__b && n.options.__b(e);
          var P = n.options.__r;
          if (S.prototype && "function" == typeof S.prototype.render) {
            var C = g(S, t);
            ((L = e.__c = new S(j, C)).__v = e),
              (L._dirty = L.__d = !0),
              (L.props = j),
              null == L.state && (L.state = {}),
              null == L._nextState &&
                null == L.__s &&
                (L._nextState = L.__s = L.state),
              (L.context = C),
              S.getDerivedStateFromProps
                ? (L.state = Object.assign(
                    {},
                    L.state,
                    S.getDerivedStateFromProps(L.props, L.state)
                  ))
                : L.componentWillMount &&
                  (L.componentWillMount(),
                  (L.state =
                    L._nextState !== L.state
                      ? L._nextState
                      : L.__s !== L.state
                      ? L.__s
                      : L.state)),
              P && P(e),
              (k = L.render(L.props, L.state, L.context));
          } else
            for (var D = g(S, t), M = 0; L.__d && M++ < 25; )
              (L.__d = !1), P && P(e), (k = S.call(e.__c, j, D));
          return (
            L.getChildContext &&
              (t = Object.assign({}, t, L.getChildContext())),
            n.options.diffed && n.options.diffed(e),
            x(k, t, r, !1 !== r.shallowHighOrder, s, p)
          );
        }
        S =
          (O = S).displayName ||
          (O !== Function && O.name) ||
          (function (e) {
            var t = (Function.prototype.toString
              .call(e)
              .match(/^\s*function\s+([^( ]+)/) || "")[1];
            if (!t) {
              for (var r = -1, n = b.length; n--; )
                if (b[n] === e) {
                  r = n;
                  break;
                }
              r < 0 && (r = b.push(e) - 1), (t = "UnnamedComponent" + r);
            }
            return t;
          })(O);
      }
      var F,
        T,
        I = "<" + S;
      if (j) {
        var N = Object.keys(j);
        r && !0 === r.sortAttributes && N.sort();
        for (var R = 0; R < N.length; R++) {
          var H = N[R],
            Z = j[H];
          if ("children" !== H) {
            if (
              !i.test(H) &&
              ((r && r.allAttributes) ||
                ("key" !== H &&
                  "ref" !== H &&
                  "__self" !== H &&
                  "__source" !== H))
            ) {
              if ("defaultValue" === H) H = "value";
              else if ("defaultChecked" === H) H = "checked";
              else if ("defaultSelected" === H) H = "selected";
              else if ("className" === H) {
                if (void 0 !== j.class) continue;
                H = "class";
              } else
                s &&
                  l.test(H) &&
                  (H = H.toLowerCase().replace(/^xlink:?/, "xlink:"));
              if ("htmlFor" === H) {
                if (j.for) continue;
                H = "for";
              }
              "style" === H && Z && "object" == typeof Z && (Z = y(Z)),
                "a" === H[0] &&
                  "r" === H[1] &&
                  "boolean" == typeof Z &&
                  (Z = String(Z));
              var G = r.attributeHook && r.attributeHook(H, Z, t, r, A);
              if (G || "" === G) I += G;
              else if ("dangerouslySetInnerHTML" === H) T = Z && Z.__html;
              else if ("textarea" === S && "value" === H) F = Z;
              else if ((Z || 0 === Z || "" === Z) && "function" != typeof Z) {
                if (!((!0 !== Z && "" !== Z) || ((Z = H), r && r.xml))) {
                  I = I + " " + H;
                  continue;
                }
                if ("value" === H) {
                  if ("select" === S) {
                    p = Z;
                    continue;
                  }
                  "option" === S &&
                    p == Z &&
                    void 0 === j.selected &&
                    (I += " selected");
                }
                I = I + " " + H + '="' + c(Z) + '"';
              }
            }
          } else F = Z;
        }
      }
      if (d) {
        var U = I.replace(/\n\s*/, " ");
        U === I || ~U.indexOf("\n")
          ? d && ~I.indexOf("\n") && (I += "\n")
          : (I = U);
      }
      if (((I += ">"), i.test(S)))
        throw new Error(S + " is not a valid HTML tag name in " + I);
      var $,
        B = a.test(S) || (r.voidElements && r.voidElements.test(S)),
        V = [];
      if (T) d && f(T) && (T = "\n" + h + u(T, h)), (I += T);
      else if (null != F && m(($ = []), F).length) {
        for (var z = d && ~I.indexOf("\n"), q = !1, J = 0; J < $.length; J++) {
          var Q = $[J];
          if (null != Q && !1 !== Q) {
            var W = x(
              Q,
              t,
              r,
              !0,
              "svg" === S || ("foreignObject" !== S && s),
              p
            );
            if ((d && !z && f(W) && (z = !0), W))
              if (d) {
                var Y = W.length > 0 && "<" != W[0];
                q && Y ? (V[V.length - 1] += W) : V.push(W), (q = Y);
              } else V.push(W);
          }
        }
        if (d && z) for (var K = V.length; K--; ) V[K] = "\n" + h + u(V[K], h);
      }
      if (V.length || T) I += V.join("");
      else if (r && r.xml) return I.substring(0, I.length - 1) + " />";
      return (
        !B || $ || T
          ? (d && ~I.indexOf("\n") && (I += "\n"), (I = I + "</" + S + ">"))
          : (I = I.replace(/>$/, " />")),
        I
      );
    }
    var _ = {
      shallow: !0,
    };
    O.render = O;
    var w = [];
    function O(e, t, r) {
      t = t || {};
      var o = n.options.__s;
      n.options.__s = !0;
      var a,
        i = (0, n.h)(n.Fragment, null);
      return (
        (i.__k = [e]),
        (a =
          r &&
          (r.pretty ||
            r.voidElements ||
            r.sortAttributes ||
            r.shallow ||
            r.allAttributes ||
            r.xml ||
            r.attributeHook)
            ? x(e, t, r)
            : L(e, t, !1, void 0, i)),
        n.options.__c && n.options.__c(e, w),
        (n.options.__s = o),
        (w.length = 0),
        a
      );
    }
    function S(e) {
      return null == e || "boolean" == typeof e
        ? null
        : "string" == typeof e || "number" == typeof e || "bigint" == typeof e
        ? (0, n.h)(null, null, e)
        : e;
    }
    function j(e, t) {
      return "className" === e
        ? "class"
        : "htmlFor" === e
        ? "for"
        : "defaultValue" === e
        ? "value"
        : "defaultChecked" === e
        ? "checked"
        : "defaultSelected" === e
        ? "selected"
        : t && l.test(e)
        ? e.toLowerCase().replace(/^xlink:?/, "xlink:")
        : e;
    }
    function A(e, t) {
      return "style" === e && null != t && "object" == typeof t
        ? y(t)
        : "a" === e[0] && "r" === e[1] && "boolean" == typeof t
        ? String(t)
        : t;
    }
    var E = Array.isArray,
      k = Object.assign;
    function L(e, t, r, o, l) {
      if (null == e || !0 === e || !1 === e || "" === e) return "";
      if ("object" != typeof e) return "function" == typeof e ? "" : c(e);
      if (E(e)) {
        var s = "";
        l.__k = e;
        for (var u = 0; u < e.length; u++)
          (s += L(e[u], t, r, o, l)), (e[u] = S(e[u]));
        return s;
      }
      if (void 0 !== e.constructor) return "";
      (e.__ = l), n.options.__b && n.options.__b(e);
      var f = e.type,
        p = e.props;
      if ("function" == typeof f) {
        var d;
        if (f === n.Fragment) d = p.children;
        else {
          d =
            f.prototype && "function" == typeof f.prototype.render
              ? (function (e, t) {
                  var r = e.type,
                    o = g(r, t),
                    a = new r(e.props, o);
                  (e.__c = a),
                    (a.__v = e),
                    (a.__d = !0),
                    (a.props = e.props),
                    null == a.state && (a.state = {}),
                    null == a.__s && (a.__s = a.state),
                    (a.context = o),
                    r.getDerivedStateFromProps
                      ? (a.state = k(
                          {},
                          a.state,
                          r.getDerivedStateFromProps(a.props, a.state)
                        ))
                      : a.componentWillMount &&
                        (a.componentWillMount(),
                        (a.state = a.__s !== a.state ? a.__s : a.state));
                  var i = n.options.__r;
                  return i && i(e), a.render(a.props, a.state, a.context);
                })(e, t)
              : (function (e, t) {
                  var r,
                    o = v(e, t),
                    a = g(e.type, t);
                  e.__c = o;
                  for (var i = n.options.__r, l = 0; o.__d && l++ < 25; )
                    (o.__d = !1), i && i(e), (r = e.type.call(o, e.props, a));
                  return r;
                })(e, t);
          var y = e.__c;
          y.getChildContext && (t = k({}, t, y.getChildContext()));
        }
        var m = L(
          (d =
            null != d && d.type === n.Fragment && null == d.key
              ? d.props.children
              : d),
          t,
          r,
          o,
          e
        );
        return (
          n.options.diffed && n.options.diffed(e),
          (e.__ = void 0),
          n.options.unmount && n.options.unmount(e),
          m
        );
      }
      var h,
        b,
        x = "<";
      if (((x += f), p))
        for (var _ in ((h = p.children), p)) {
          var w = p[_];
          if (
            !(
              "key" === _ ||
              "ref" === _ ||
              "__self" === _ ||
              "__source" === _ ||
              "children" === _ ||
              ("className" === _ && "class" in p) ||
              ("htmlFor" === _ && "for" in p) ||
              i.test(_)
            )
          )
            if (((w = A((_ = j(_, r)), w)), "dangerouslySetInnerHTML" === _))
              b = w && w.__html;
            else if ("textarea" === f && "value" === _) h = w;
            else if ((w || 0 === w || "" === w) && "function" != typeof w) {
              if (!0 === w || "" === w) {
                (w = _), (x = x + " " + _);
                continue;
              }
              if ("value" === _) {
                if ("select" === f) {
                  o = w;
                  continue;
                }
                "option" !== f ||
                  o != w ||
                  "selected" in p ||
                  (x += " selected");
              }
              x = x + " " + _ + '="' + c(w) + '"';
            }
        }
      var O = x;
      if (((x += ">"), i.test(f)))
        throw new Error(f + " is not a valid HTML tag name in " + x);
      var P = "",
        C = !1;
      if (b) (P += b), (C = !0);
      else if ("string" == typeof h) (P += c(h)), (C = !0);
      else if (E(h)) {
        e.__k = h;
        for (var D = 0; D < h.length; D++) {
          var M = h[D];
          if (((h[D] = S(M)), null != M && !1 !== M)) {
            var F = L(M, t, "svg" === f || ("foreignObject" !== f && r), o, e);
            F && ((P += F), (C = !0));
          }
        }
      } else if (null != h && !1 !== h && !0 !== h) {
        e.__k = [S(h)];
        var T = L(h, t, "svg" === f || ("foreignObject" !== f && r), o, e);
        T && ((P += T), (C = !0));
      }
      if (
        (n.options.diffed && n.options.diffed(e),
        (e.__ = void 0),
        n.options.unmount && n.options.unmount(e),
        C)
      )
        x += P;
      else if (a.test(f)) return O + " />";
      return x + "</" + f + ">";
    }
    O.shallowRender = function (e, t) {
      return O(e, t, _);
    };
    const P = O;
    var C = r(7188);
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
    function M() {
      M = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        r = t.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        o = "function" == typeof Symbol ? Symbol : {},
        a = o.iterator || "@@iterator",
        i = o.asyncIterator || "@@asyncIterator",
        l = o.toStringTag || "@@toStringTag";
      function s(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (e) {
        s = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function c(e, t, r, o) {
        var a = t && t.prototype instanceof p ? t : p,
          i = Object.create(a.prototype),
          l = new j(o || []);
        return (
          n(i, "_invoke", {
            value: _(e, r, l),
          }),
          i
        );
      }
      function u(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r),
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e,
          };
        }
      }
      e.wrap = c;
      var f = {};
      function p() {}
      function d() {}
      function y() {}
      var m = {};
      s(m, a, function () {
        return this;
      });
      var h = Object.getPrototypeOf,
        v = h && h(h(A([])));
      v && v !== t && r.call(v, a) && (m = v);
      var g = (y.prototype = p.prototype = Object.create(m));
      function b(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function x(e, t) {
        function o(n, a, i, l) {
          var s = u(e[n], e, a);
          if ("throw" !== s.type) {
            var c = s.arg,
              f = c.value;
            return f && "object" == D(f) && r.call(f, "__await")
              ? t.resolve(f.__await).then(
                  function (e) {
                    o("next", e, i, l);
                  },
                  function (e) {
                    o("throw", e, i, l);
                  }
                )
              : t.resolve(f).then(
                  function (e) {
                    (c.value = e), i(c);
                  },
                  function (e) {
                    return o("throw", e, i, l);
                  }
                );
          }
          l(s.arg);
        }
        var a;
        n(this, "_invoke", {
          value: function (e, r) {
            function n() {
              return new t(function (t, n) {
                o(e, r, t, n);
              });
            }
            return (a = a ? a.then(n, n) : n());
          },
        });
      }
      function _(e, t, r) {
        var n = "suspendedStart";
        return function (o, a) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw a;
            return {
              value: void 0,
              done: !0,
            };
          }
          for (r.method = o, r.arg = a; ; ) {
            var i = r.delegate;
            if (i) {
              var l = w(i, r);
              if (l) {
                if (l === f) continue;
                return l;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var s = u(e, t, r);
            if ("normal" === s.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), s.arg === f))
                continue;
              return {
                value: s.arg,
                done: r.done,
              };
            }
            "throw" === s.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
          }
        };
      }
      function w(e, t) {
        var r = t.method,
          n = e.iterator[r];
        if (void 0 === n)
          return (
            (t.delegate = null),
            ("throw" === r &&
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              w(e, t),
              "throw" === t.method)) ||
              ("return" !== r &&
                ((t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            f
          );
        var o = u(n, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), f;
        var a = o.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            f);
      }
      function O(e) {
        var t = {
          tryLoc: e[0],
        };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function j(e) {
        (this.tryEntries = [
          {
            tryLoc: "root",
          },
        ]),
          e.forEach(O, this),
          this.reset(!0);
      }
      function A(e) {
        if (e) {
          var t = e[a];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              o = function t() {
                for (; ++n < e.length; )
                  if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return {
          next: E,
        };
      }
      function E() {
        return {
          value: void 0,
          done: !0,
        };
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
        (d.displayName = s(y, l, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, y)
              : ((e.__proto__ = y), s(e, l, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return {
            __await: e,
          };
        }),
        b(x.prototype),
        s(x.prototype, i, function () {
          return this;
        }),
        (e.AsyncIterator = x),
        (e.async = function (t, r, n, o, a) {
          void 0 === a && (a = Promise);
          var i = new x(c(t, r, n, o), a);
          return e.isGeneratorFunction(r)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        b(g),
        s(g, l, "Generator"),
        s(g, a, function () {
          return this;
        }),
        s(g, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = Object(e),
            r = [];
          for (var n in t) r.push(n);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in t) return (e.value = n), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (e.values = A),
        (j.prototype = {
          constructor: j,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  r.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(r, n) {
              return (
                (i.type = "throw"),
                (i.arg = e),
                (t.next = r),
                n && ((t.method = "next"), (t.arg = void 0)),
                !!n
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                i = a.completion;
              if ("root" === a.tryLoc) return n("end");
              if (a.tryLoc <= this.prev) {
                var l = r.call(a, "catchLoc"),
                  s = r.call(a, "finallyLoc");
                if (l && s) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                } else if (l) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (
                o.tryLoc <= this.prev &&
                r.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var a = o;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var i = a ? a.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), f)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), S(r), f;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  S(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = {
                iterator: A(e),
                resultName: t,
                nextLoc: r,
              }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          },
        }),
        e
      );
    }
    function F(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? F(Object(r), !0).forEach(function (t) {
              I(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : F(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function I(e, t, r) {
      return (
        (t = Z(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function N(e, t, r, n, o, a, i) {
      try {
        var l = e[a](i),
          s = l.value;
      } catch (e) {
        return void r(e);
      }
      l.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    function R(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, o) {
          var a = e.apply(t, r);
          function i(e) {
            N(a, n, o, i, l, "next", e);
          }
          function l(e) {
            N(a, n, o, i, l, "throw", e);
          }
          i(void 0);
        });
      };
    }
    function H(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, Z(n.key), n);
      }
    }
    function Z(e) {
      var t = (function (e, t) {
        if ("object" !== D(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var n = r.call(e, "string");
          if ("object" !== D(n)) return n;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      })(e);
      return "symbol" === D(t) ? t : String(t);
    }
    var G = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._provider = t);
        }
        var t, r, o;
        return (
          (t = e),
          (r = [
            {
              key: "render",
              value: function (e, t) {
                var r = this;
                return (function () {
                  var o = R(
                    M().mark(function o(a) {
                      var i, l, s;
                      return M().wrap(function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (e) {
                                o.next = 2;
                                break;
                              }
                              throw new Error("Component is not defined");
                            case 2:
                              if (a) {
                                o.next = 4;
                                break;
                              }
                              throw new Error("Root element is not defined");
                            case 4:
                              return (
                                (o.next = 6),
                                null === (l = e.getInitialData) || void 0 === l
                                  ? void 0
                                  : l.call(e, t)
                              );
                            case 6:
                              if (
                                ((o.t1 = i = o.sent),
                                (o.t0 = null !== o.t1),
                                !o.t0)
                              ) {
                                o.next = 10;
                                break;
                              }
                              o.t0 = void 0 !== i;
                            case 10:
                              if (!o.t0) {
                                o.next = 14;
                                break;
                              }
                              (o.t2 = i), (o.next = 15);
                              break;
                            case 14:
                              o.t2 = {};
                            case 15:
                              (s = o.t2),
                                (0, n.render)(
                                  (0, C.jsx)(
                                    r._provider.type,
                                    T(
                                      T({}, r._provider.props),
                                      {},
                                      {
                                        children: (0, C.jsx)(
                                          e,
                                          T(
                                            T({}, t),
                                            {},
                                            {
                                              initialData: s,
                                            }
                                          )
                                        ),
                                      }
                                    )
                                  ),
                                  a
                                );
                            case 17:
                            case "end":
                              return o.stop();
                          }
                      }, o);
                    })
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })();
              },
            },
            {
              key: "toString",
              value:
                ((o = R(
                  M().mark(function e(t, r, n) {
                    var o, a, i;
                    return M().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t) {
                                e.next = 2;
                                break;
                              }
                              throw new Error("Component is not defined");
                            case 2:
                              return (
                                (e.next = 4),
                                null === (a = t.getInitialData) || void 0 === a
                                  ? void 0
                                  : a.call(t, r)
                              );
                            case 4:
                              if (
                                ((e.t1 = o = e.sent),
                                (e.t0 = null !== e.t1),
                                !e.t0)
                              ) {
                                e.next = 8;
                                break;
                              }
                              e.t0 = void 0 !== o;
                            case 8:
                              if (!e.t0) {
                                e.next = 12;
                                break;
                              }
                              (e.t2 = o), (e.next = 13);
                              break;
                            case 12:
                              e.t2 = {};
                            case 13:
                              return (
                                (i = e.t2),
                                e.abrupt(
                                  "return",
                                  P(
                                    (0, C.jsx)(
                                      this._provider.type,
                                      T(
                                        T({}, this._provider.props),
                                        {},
                                        {
                                          children: (0, C.jsx)(
                                            t,
                                            T(
                                              T({}, r),
                                              {},
                                              {
                                                initialData: i,
                                              }
                                            )
                                          ),
                                        }
                                      )
                                    ),
                                    {},
                                    T({}, n)
                                  )
                                )
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e, t, r) {
                  return o.apply(this, arguments);
                }),
            },
          ]),
          r && H(t.prototype, r),
          Object.defineProperty(t, "prototype", {
            writable: !1,
          }),
          e
        );
      })(),
      U = r(1857),
      $ = r.n(U),
      B = r(5587);
    const V = JSON.parse(
        '{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"}}}'
      ),
      z = JSON.parse(
        '{"Elsie":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Diminuer la quantité","increaseLabel":"Augmenter la quantité","label":"Quantité"}}}'
      );
    var q = r(9724),
      J = {
        default: V,
        en_US: V,
        fr_FR: z,
      },
      Q = r(1892),
      W = r.n(Q),
      Y = r(5760),
      K = r.n(Y),
      X = r(8311),
      ee = r.n(X),
      te = r(8192),
      re = r.n(te),
      ne = r(8060),
      oe = r.n(ne),
      ae = r(4865),
      ie = r.n(ae),
      le = r(2080),
      se = {};
    (se.styleTagTransform = ie()),
      (se.setAttributes = re()),
      (se.insert = ee().bind(null, "head")),
      (se.domAPI = K()),
      (se.insertStyleElement = oe()),
      W()(le.Z, se),
      le.Z && le.Z.locals && le.Z.locals;
    var ce = r(4763),
      ue = {};
    function fe(e) {
      return (
        (fe =
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
        fe(e)
      );
    }
    (ue.styleTagTransform = ie()),
      (ue.setAttributes = re()),
      (ue.insert = ee().bind(null, "head")),
      (ue.domAPI = K()),
      (ue.insertStyleElement = oe()),
      W()(ce.Z, ue),
      ce.Z && ce.Z.locals && ce.Z.locals;
    var pe = ["lang", "langDefinitions", "className", "children"];
    function de(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? de(Object(r), !0).forEach(function (t) {
              me(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : de(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function me(e, t, r) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" !== fe(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" !== fe(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e);
          return "symbol" === fe(t) ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    var he = function (e) {
        var t,
          r = e.lang,
          n = void 0 === r ? "en_US" : r,
          o = e.langDefinitions,
          a = void 0 === o ? {} : o,
          i = e.className,
          l = e.children,
          s = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          })(e, pe),
          c = $()(a.default, null !== (t = a[n]) && void 0 !== t ? t : {}),
          u = $()(
            (function (e) {
              return $()(J.default, J[e] || {});
            })(n),
            c
          );
        return (0, C.jsx)(q.Pj, {
          definition: u,
          children: (0, C.jsx)(
            "div",
            ye(
              ye({}, s),
              {},
              {
                className: (0, B.S)(["elsie-base-design", i]),
                children: l,
              }
            )
          ),
        });
      },
      ve = r(6765),
      ge = r(5437);
    function be(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var xe = {
        default: r(7770),
      },
      _e = function (e) {
        var t = e.children,
          r = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    a,
                    i,
                    l = [],
                    s = !0,
                    c = !1;
                  try {
                    if (((a = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      s = !1;
                    } else
                      for (
                        ;
                        !(s = (n = a.call(r)).done) &&
                        (l.push(n.value), l.length !== t);
                        s = !0
                      );
                  } catch (e) {
                    (c = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !s &&
                        null != r.return &&
                        ((i = r.return()), Object(i) !== i)
                      )
                        return;
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return l;
                }
              })(e, t) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return be(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? be(e, t)
                      : void 0
                  );
                }
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, ge.useState)("en_US"), 2),
          n = r[0],
          o = r[1];
        return (
          (0, ge.useEffect)(function () {
            var e = ve.events.on(
              "locale",
              function (e) {
                o(e);
              },
              {
                eager: !0,
              }
            );
            return function () {
              e.off();
            };
          }, []),
          (0, C.jsx)(he, {
            lang: n,
            langDefinitions: xe,
            children: t,
          })
        );
      },
      we = new G((0, C.jsx)(_e, {}));
  },
  2080: (e, t, r) => {
    r.d(t, {
      Z: () => l,
    });
    var n = r(4933),
      o = r.n(n),
      a = r(3476),
      i = r.n(a)()(o());
    i.push([
      e.id,
      "/**\n * Do not edit directly\n * Generated on Fri, 14 Jul 2023 19:01:45 GMT\n */\n\n.elsie-base-design {\n  --color-brand-500: #454545; /* Brand buttons default - AAA */\n  --color-brand-600: #383838; /* Brand buttons on hover - AAA */\n  --color-brand-700: #2b2b2b; /* Brand buttons selected */\n  --color-neutral-50: #ffffff; /* Lightest surface / Text & components On Dark surface - AAA */\n  --color-neutral-100: #fafafa; /* Light surface - AAA */\n  --color-neutral-200: #f5f5f5; /* Light surface - AAA */\n  --color-neutral-300: #e8e8e8; /* Disabled surfaces - AAA */\n  --color-neutral-400: #d6d6d6; /* Ornamental elements (ie. Divider) */\n  --color-neutral-500: #b8b8b8; /* Disabled text */\n  --color-neutral-600: #8f8f8f; /* Component borders (ie. Text field border) - AA Large text */\n  --color-neutral-700: #666666; /* Secondary text - AAA */\n  --color-neutral-800: #3d3d3d; /* Default text - AAA */\n  --color-neutral-900: #292929; /* Default text on hover - AAA */\n  --color-positive-200: #eff5ef; /* Semantic positive surface - AA Large text */\n  --color-positive-500: #7fb078; /* Semantic positive surface */\n  --color-positive-800: #53824c; /* Semantic Positive text - On Light AA */\n  --color-informational-200: #eeeffb; /* Semantic informational surface - AA Large text */\n  --color-informational-500: #6978d9; /* Semantic informational surface */\n  --color-informational-800: #5d6dd6; /* Semantic informational text, Highlights - On Light AA */\n  --color-warning-200: #fdf3e9; /* Semantic warning surface - AA Large text */\n  --color-warning-500: #e79f5c; /* Semantic warning surface */\n  --color-warning-800: #cc7a2e; /* Semantic warning text - On Light AA */\n  --color-alert-200: #ffebeb; /* Semantic alert surface - AA Large text */\n  --color-alert-500: #db7070; /* Semantic alert surface */\n  --color-alert-800: #c35050; /* Semantic alert text - On light AA */\n  --color-opacity-16: rgba(255, 255, 255, 0.16);\n  --color-opacity-24: rgba(255, 255, 255, 0.24);\n  --grid-1-columns: 4;\n  --grid-1-margins: 0;\n  --grid-1-gutters: 16px;\n  --grid-2-columns: 12;\n  --grid-2-margins: 0;\n  --grid-2-gutters: 16px;\n  --grid-3-columns: 12;\n  --grid-3-margins: 0;\n  --grid-3-gutters: 24px;\n  --grid-4-columns: 12;\n  --grid-4-margins: 0;\n  --grid-4-gutters: 24px;\n  --grid-5-columns: 12;\n  --grid-5-margins: 0;\n  --grid-5-gutters: 24px;\n  --shape-border-radius-1: 3px;\n  --shape-border-radius-2: 8px;\n  --shape-border-radius-3: 24px;\n  --shape-border-width-1: 1px;\n  --shape-border-width-2: 1.5px;\n  --shape-border-width-3: 2px;\n  --shape-border-width-4: 4px;\n  --shape-shadow-1: 0 0 16px 0 rgba(0, 0, 0, 0.16); /* Elevated panels (ie. Page side panel, Mobile bottom bar) */\n  --shape-shadow-2: 0 2px 16px 0 rgba(0, 0, 0, 0.16); /* Elevated dialogs (ie. Modal) */\n  --shape-shadow-3: 0 2px 3px 0 rgba(0, 0, 0, 0.16); /* Elevated container (ie. Card) */\n  --shape-icon-stroke-1: 1px;\n  --shape-icon-stroke-2: 1.5px;\n  --shape-icon-stroke-3: 2px;\n  --shape-icon-stroke-4: 4px;\n  --spacing-xxsmall: 4px;\n  --spacing-xsmall: 8px;\n  --spacing-small: 16px;\n  --spacing-medium: 24px;\n  --spacing-big: 32px;\n  --spacing-xbig: 40px;\n  --spacing-xxbig: 48px;\n  --spacing-large: 64px;\n  --spacing-xlarge: 72px;\n  --spacing-xxlarge: 96px;\n  --spacing-huge: 120px;\n  --spacing-xhuge: 144px;\n  --spacing-xxhuge: 192px;\n  --type-base-font-family: system-ui, sans-serif;\n  --type-display-1-font: normal normal 300 60px/72px\n    var(--type-base-font-family); /* Hero title */\n  --type-display-1-letter-spacing: 0.04em;\n  --type-display-2-font: normal normal 300 48px/56px\n    var(--type-base-font-family); /* Banner title */\n  --type-display-2-letter-spacing: 0.04em;\n  --type-display-3-font: normal normal 300 34px/40px\n    var(--type-base-font-family); /* Desktop & tablet section title */\n  --type-display-3-letter-spacing: 0.04em;\n  --type-headline-1-font: normal normal 400 24px/32px\n    var(--type-base-font-family); /* Desktop & tablet page title */\n  --type-headline-1-letter-spacing: 0.04em;\n  --type-headline-2-default-font: normal normal 300 20px/24px\n    var(--type-base-font-family); /* Rail title */\n  --type-headline-2-default-letter-spacing: 0.04em;\n  --type-headline-2-strong-font: normal normal 400 20px/24px\n    var(--type-base-font-family); /* Mobile page and section title */\n  --type-headline-2-strong-letter-spacing: 0.04em;\n  --type-body-1-default-font: normal normal 300 16px/24px\n    var(--type-base-font-family); /* Normal text paragraph */\n  --type-body-1-default-letter-spacing: 0.04em;\n  --type-body-1-strong-font: normal normal 400 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing: 0.04em;\n  --type-body-1-emphasized-font: normal normal 700 16px/24px\n    var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing: 0.04em;\n  --type-body-2-default-font: normal normal 300 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-default-letter-spacing: 0.04em;\n  --type-body-2-strong-font: normal normal 400 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing: 0.04em;\n  --type-body-2-emphasized-font: normal normal 700 14px/20px\n    var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing: 0.04em;\n  --type-button-1-font: normal normal 400 20px/26px var(--type-base-font-family); /* Primary button text */\n  --type-button-1-letter-spacing: 0.08em;\n  --type-button-2-font: normal normal 400 16px/24px var(--type-base-font-family); /* Small buttons */\n  --type-button-2-letter-spacing: 0.08em;\n  --type-details-caption-1-font: normal normal 400 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing: 0.08em;\n  --type-details-caption-2-font: normal normal 300 12px/16px\n    var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing: 0.08em;\n  --type-details-overline-font: normal normal 700 12px/20px\n    var(--type-base-font-family);\n  --type-details-overline-letter-spacing: 0.16em;\n}\n",
      "",
    ]);
    const l = i;
  },
  4763: (e, t, r) => {
    r.d(t, {
      Z: () => l,
    });
    var n = r(4933),
      o = r.n(n),
      a = r(3476),
      i = r.n(a)()(o());
    i.push([
      e.id,
      ".elsie-base-design a {\n  --textColor: var(--color-brand-500);\n  --textFont: var(--type-body-1-strong-font)\n  --textLetterSpacing: var(--type-body-1-strong-letter-spacing);\n  color: var(--textColor);\n  font: var(--textFont);\n  letter-spacing: var(--textLetterSpacing);\n  text-decoration: none;\n}\n\n.elsie-base-design a:hover {\n  --textColor: var(--color-brand-700);\n  text-decoration: solid underline var(--textColor);\n  text-underline-offset: 6px;\n}\n\n.elsie-base-design a:focus-visible {\n  outline: solid var(--shape-border-width-4) var(--color-neutral-400);\n  border: var(--shape-border-width-1) solid var(--color-neutral-800); \n  border-radius: var(--shape-border-radius-1);\n}\n",
      "",
    ]);
    const l = i;
  },
  1857: (e) => {
    var t = function (e) {
        return (
          (function (e) {
            return !!e && "object" == typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === r;
              })(e)
            );
          })(e)
        );
      },
      r =
        "function" == typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
    function n(e, t) {
      return !1 !== t.clone && t.isMergeableObject(e)
        ? l(((r = e), Array.isArray(r) ? [] : {}), e, t)
        : e;
      var r;
    }
    function o(e, t, r) {
      return e.concat(t).map(function (e) {
        return n(e, r);
      });
    }
    function a(e) {
      return Object.keys(e).concat(
        (function (e) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.propertyIsEnumerable.call(e, t);
              })
            : [];
        })(e)
      );
    }
    function i(e, t) {
      try {
        return t in e;
      } catch (e) {
        return !1;
      }
    }
    function l(e, r, s) {
      ((s = s || {}).arrayMerge = s.arrayMerge || o),
        (s.isMergeableObject = s.isMergeableObject || t),
        (s.cloneUnlessOtherwiseSpecified = n);
      var c = Array.isArray(r);
      return c === Array.isArray(e)
        ? c
          ? s.arrayMerge(e, r, s)
          : (function (e, t, r) {
              var o = {};
              return (
                r.isMergeableObject(e) &&
                  a(e).forEach(function (t) {
                    o[t] = n(e[t], r);
                  }),
                a(t).forEach(function (a) {
                  (function (e, t) {
                    return (
                      i(e, t) &&
                      !(
                        Object.hasOwnProperty.call(e, t) &&
                        Object.propertyIsEnumerable.call(e, t)
                      )
                    );
                  })(e, a) ||
                    (i(e, a) && r.isMergeableObject(t[a])
                      ? (o[a] = (function (e, t) {
                          if (!t.customMerge) return l;
                          var r = t.customMerge(e);
                          return "function" == typeof r ? r : l;
                        })(a, r)(e[a], t[a], r))
                      : (o[a] = n(t[a], r)));
                }),
                o
              );
            })(e, r, s)
        : n(r, s);
    }
    l.all = function (e, t) {
      if (!Array.isArray(e))
        throw new Error("first argument should be an array");
      return e.reduce(function (e, r) {
        return l(e, r, t);
      }, {});
    };
    var s = l;
    e.exports = s;
  },
  6765: (t, r, n) => {
    var o, a;
    t.exports =
      ((o = {
        events: () => e.events,
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
  5437: (e, t, n) => {
    var o, a;
    e.exports =
      ((o = {
        useCallback: () => r.useCallback,
        useContext: () => r.useContext,
        useDebugValue: () => r.useDebugValue,
        useEffect: () => r.useEffect,
        useId: () => r.useId,
        useImperativeHandle: () => r.useImperativeHandle,
        useLayoutEffect: () => r.useLayoutEffect,
        useMemo: () => r.useMemo,
        useReducer: () => r.useReducer,
        useRef: () => r.useRef,
        useState: () => r.useState,
      }),
      (a = {}),
      n.d(a, o),
      a);
  },
  4142: (e, t, r) => {
    var o, a;
    e.exports =
      ((o = {
        Fragment: () => n.Fragment,
        jsx: () => n.jsx,
        jsxs: () => n.jsxs,
      }),
      (a = {}),
      r.d(a, o),
      a);
  },
  3474: (e, t, r) => {
    var n, a;
    e.exports =
      ((n = {
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
      r.d(a, n),
      a);
  },
  7770: (e) => {
    e.exports = JSON.parse(
      '{"Checkout":{"title":"Checkout","LoginForm":{"title":"Contact details","account":"Already have an account?","ariaLabel":"Email","invalidEmailError":"Please enter a valid email address.","missingEmailError":"Enter an email address.","emailExists":"It looks like you already have an account. Sign in for a faster checkout.","floatingLabel":"Email *","placeholder":"Enter your email address","signIn":"Sign in"},"ShippingMethods":{"title":"Shipping options","emptyState":"This order can\'t be shipped to the address provided. Please review the address details you entered and make sure they\'re correct."},"ShippingAddress":{"title":"Delivery"},"ShippingForm":{"Validity":{"BadInput":"Provide a valid {fieldLabel}.","PatternMismatch":"Ensure you have entered a correct {fieldLabel} format.","RangeOverflow":"Choose a valid {date} within the allowed range.","RangeUnderflow":"Choose a valid {date} within the allowed range.","TooLong":"This entry is too long. Keep it under {maxlength} characters.","TooShort":"Use at least {minlength} characters.","TypeMismatch":"Enter a valid {fieldLabel}.","ValueMissing":"Enter a {fieldLabel}, this field is required."}},"BillToShippingAddress":{"title":"Bill to shipping address"},"PaymentMethods":{"title":"Payment","emptyState":"No payment methods available"},"OrderSummary":{"title":"Order summary","subtotal":"Subtotal","shipping":"Shipping","freeShipping":"Free shipping","tax":"Tax","total":"Total"},"PlaceOrder":{"button":"Place Order"}}}'
    );
  },
};
import a from "./runtime.js";
import * as i from "./757.js";
a.C(i);
import * as l from "./render.js";
a.C(l);
var s = (4597, a((a.s = 4597))).s;
export { s as render };

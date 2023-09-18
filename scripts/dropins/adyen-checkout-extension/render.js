import * as e from "@dropins/elsie/event-bus.js";
import * as t from "@dropins/elsie/preact-compat.js";
import * as r from "@dropins/elsie/preact-hooks.js";
import * as n from "@dropins/elsie/preact-jsx-runtime.js";
import * as o from "@dropins/elsie/preact.js";
export const id = 70;
export const ids = [70];
export const modules = {
  560: (e, t, r) => {
    r.d(t, {
      s: () => c,
    });
    var n = r(516),
      o = r(437),
      s = r(699),
      a = r(765),
      i = r(188);
    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    a.events.enableLogger(!0);
    var u = {
        default: r(770),
      },
      f = function (e) {
        var t,
          r,
          n = e.children,
          f =
            ((t = (0, o.useState)("en_US")),
            (r = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(t) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    s,
                    a,
                    i = [],
                    l = !0,
                    u = !1;
                  try {
                    if (((s = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (n = s.call(r)).done) &&
                        (i.push(n.value), i.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (u = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return i;
                }
              })(t, r) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return l(e, t);
                  var r = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? l(e, t)
                      : void 0
                  );
                }
              })(t, r) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          c = f[0],
          p = f[1];
        return (
          (0, o.useEffect)(function () {
            var e = a.events.on(
              "locale",
              function (e) {
                p(e);
              },
              {
                eager: !0,
              }
            );
            return function () {
              e.off();
            };
          }, []),
          (0, i.jsx)(s.J, {
            lang: c,
            langDefinitions: u,
            children: n,
          })
        );
      },
      c = new n.H((0, i.jsx)(f, {}));
  },
  765: (t, r, n) => {
    var o, s;
    t.exports =
      ((o = {
        events: () => e.events,
      }),
      (s = {}),
      n.d(s, o),
      s);
  },
  853: (e, r, n) => {
    var o, s;
    e.exports =
      ((o = {
        useEffect: () => t.useEffect,
        useState: () => t.useState,
      }),
      (s = {}),
      n.d(s, o),
      s);
  },
  437: (e, t, n) => {
    var o, s;
    e.exports =
      ((o = {
        useContext: () => r.useContext,
        useEffect: () => r.useEffect,
        useState: () => r.useState,
      }),
      (s = {}),
      n.d(s, o),
      s);
  },
  142: (e, t, r) => {
    var o, s;
    e.exports =
      ((o = {
        jsx: () => n.jsx,
      }),
      (s = {}),
      r.d(s, o),
      s);
  },
  474: (e, t, r) => {
    var n, s;
    e.exports =
      ((n = {
        Component: () => o.Component,
        Fragment: () => o.Fragment,
        cloneElement: () => o.cloneElement,
        createContext: () => o.createContext,
        h: () => o.h,
        options: () => o.options,
        render: () => o.render,
      }),
      (s = {}),
      r.d(s, n),
      s);
  },
  770: (e) => {
    e.exports = {
      "": {},
    };
  },
};
import s from "./runtime.js";
import * as a from "./289.js";
s.C(a);
import * as i from "./render.js";
s.C(i);
var l = (560, s((s.s = 560))).s;
export { l as render };

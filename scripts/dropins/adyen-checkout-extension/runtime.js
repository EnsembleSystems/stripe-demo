var r = {},
  e = {};
function o(t) {
  var a = e[t];
  if (void 0 !== a) return a.exports;
  var n = (e[t] = {
    id: t,
    exports: {},
  });
  return r[t].call(n.exports, n, n.exports, o), n.exports;
}
(o.m = r),
  (o.n = (r) => {
    var e = r && r.__esModule ? () => r.default : () => r;
    return (
      o.d(e, {
        a: e,
      }),
      e
    );
  }),
  (o.d = (r, e) => {
    for (var t in e)
      o.o(e, t) &&
        !o.o(r, t) &&
        Object.defineProperty(r, t, {
          enumerable: !0,
          get: e[t],
        });
  }),
  (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e));
export default o;
(() => {
  o.b = new URL("./", import.meta.url);
  var r = {
    666: 0,
  };
  o.C = (e) => {
    var t,
      a,
      { ids: n, modules: d, runtime: i } = e,
      l = 0;
    for (t in d) o.o(d, t) && (o.m[t] = d[t]);
    for (i && i(o); l < n.length; l++)
      (a = n[l]), o.o(r, a) && r[a] && r[a][0](), (r[n[l]] = 0);
  };
})(),
  (o.nc = void 0);

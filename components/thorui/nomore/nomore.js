(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/thorui/nomore/nomore"], {
    "080d": function(n, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        name: "tuiNomore",
        props: {
          visible: {
            type: Boolean,
            default: !1
          },
          bgcolor: {
            type: String,
            default: "#fafafa"
          },
          isDot: {
            type: Boolean,
            default: !1
          },
          text: {
            type: String,
            default: "没有更多了"
          }
        },
        data: function() {
          return {
            dotText: "●"
          }
        }
      };
      t.default = e
    },
    "3f41": function(n, t, o) {},
    "3f59": function(n, t, o) {
      "use strict";
      o.d(t, "b", (function() {
        return e
      })), o.d(t, "c", (function() {
        return r
      })), o.d(t, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    "567d": function(n, t, o) {
      "use strict";
      var e = o("3f41");
      o.n(e).a
    },
    f371: function(n, t, o) {
      "use strict";
      o.r(t);
      var e = o("3f59"),
        r = o("fba7");
      for (var u in r)["default"].indexOf(u) < 0 && function(n) {
        o.d(t, n, (function() {
          return r[n]
        }))
      }(u);
      o("567d");
      var a = o("828b"),
        f = Object(a.a)(r.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      t.default = f.exports
    },
    fba7: function(n, t, o) {
      "use strict";
      o.r(t);
      var e = o("080d"),
        r = o.n(e);
      for (var u in e)["default"].indexOf(u) < 0 && function(n) {
        o.d(t, n, (function() {
          return e[n]
        }))
      }(u);
      t.default = r.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/thorui/nomore/nomore-create-component", {
    "components/thorui/nomore/nomore-create-component": function(n, t, o) {
      o("df3c").createComponent(o("f371"))
    }
  },
  [
    ["components/thorui/nomore/nomore-create-component"]
  ]
]);
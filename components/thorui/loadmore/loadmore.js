(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/thorui/loadmore/loadmore"], {
    "0251": function(e, t, o) {
      "use strict";
      o.r(t);
      var n = o("bc82"),
        a = o("b18a");
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        o.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      o("42bd");
      var u = o("828b"),
        c = Object(u.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = c.exports
    },
    "42bd": function(e, t, o) {
      "use strict";
      var n = o("5207");
      o.n(n).a
    },
    5207: function(e, t, o) {},
    b18a: function(e, t, o) {
      "use strict";
      o.r(t);
      var n = o("e001"),
        a = o.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(e) {
        o.d(t, e, (function() {
          return n[e]
        }))
      }(r);
      t.default = a.a
    },
    bc82: function(e, t, o) {
      "use strict";
      o.d(t, "b", (function() {
        return n
      })), o.d(t, "c", (function() {
        return a
      })), o.d(t, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    e001: function(e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        name: "tuiLoadmore",
        props: {
          text: {
            type: String,
            default: "正在加载..."
          },
          visible: {
            type: Boolean,
            default: !1
          },
          index: {
            type: Number,
            default: 1
          },
          type: {
            type: String,
            default: ""
          }
        }
      };
      t.default = n
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/thorui/loadmore/loadmore-create-component", {
    "components/thorui/loadmore/loadmore-create-component": function(e, t, o) {
      o("df3c").createComponent(o("0251"))
    }
  },
  [
    ["components/thorui/loadmore/loadmore-create-component"]
  ]
]);
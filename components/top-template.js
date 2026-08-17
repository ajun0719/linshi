(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/top-template"], {
    "2f17": function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        props: {
          currentAddress: {
            type: String,
            default: function() {
              return ""
            }
          },
          isShowXiala: {
            type: Boolean,
            default: function() {
              return !1
            }
          },
          userInfo: {
            type: Object,
            default: function() {
              return null
            }
          }
        },
        data: function() {
          return {}
        },
        onLoad: function() {},
        methods: {
          addressChangeClick: function() {
            this.$emit("addressChangeClick")
          },
          imgHeaderClick: function() {
            this.$emit("imgHeaderClick")
          }
        }
      };
      n.default = o
    },
    "4c64": function(t, n, e) {},
    "55db": function(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("dbc4"),
        c = e("f7cf");
      for (var u in c)["default"].indexOf(u) < 0 && function(t) {
        e.d(n, t, (function() {
          return c[t]
        }))
      }(u);
      e("c813");
      var a = e("828b"),
        r = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = r.exports
    },
    c813: function(t, n, e) {
      "use strict";
      var o = e("4c64");
      e.n(o).a
    },
    dbc4: function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return c
      })), e.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    f7cf: function(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("2f17"),
        c = e.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(u);
      n.default = c.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/top-template-create-component", {
    "components/top-template-create-component": function(t, n, e) {
      e("df3c").createComponent(e("55db"))
    }
  },
  [
    ["components/top-template-create-component"]
  ]
]);
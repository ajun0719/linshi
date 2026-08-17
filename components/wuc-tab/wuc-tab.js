(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/wuc-tab/wuc-tab"], {
    "0183": function(t, n, e) {},
    "43f3": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return u
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {}));
      var u = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "61fd": function(t, n, e) {
      "use strict";
      var u = e("0183");
      e.n(u).a
    },
    "726a": function(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("43f3"),
        a = e("d14a");
      for (var c in a)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(c);
      e("61fd");
      var o = e("828b"),
        r = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
      n.default = r.exports
    },
    b3fb: function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        name: "wuc-tab",
        data: function() {
          return {}
        },
        props: {
          tabList: {
            type: Array,
            default: function() {
              return []
            }
          },
          tabCur: {
            type: Number,
            default: function() {
              return 0
            }
          },
          tabClass: {
            type: String,
            default: function() {
              return ""
            }
          },
          tabStyle: {
            type: String,
            default: function() {
              return ""
            }
          },
          textFlex: {
            type: Boolean,
            default: function() {
              return !1
            }
          },
          selectClass: {
            type: String,
            default: function() {
              return "text-blue"
            }
          }
        },
        mounted: function() {},
        methods: {
          tabSelect: function(t, n, e) {
            if (this.tabCur === t) return !1;
            this.$emit("update:tabCur", t), this.$emit("change", t, n)
          }
        },
        computed: {
          scrollLeft: function() {
            return 60 * (this.tabCur - 1)
          }
        }
      };
      n.default = u
    },
    d14a: function(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("b3fb"),
        a = e.n(u);
      for (var c in u)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return u[t]
        }))
      }(c);
      n.default = a.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/wuc-tab/wuc-tab-create-component", {
    "components/wuc-tab/wuc-tab-create-component": function(t, n, e) {
      e("df3c").createComponent(e("726a"))
    }
  },
  [
    ["components/wuc-tab/wuc-tab-create-component"]
  ]
]);
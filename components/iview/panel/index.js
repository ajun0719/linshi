(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/iview/panel/index"], {
    "01c8": function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("839e"),
        a = t.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return o[e]
        }))
      }(c);
      n.default = a.a
    },
    "6f72": function(e, n, t) {
      "use strict";
      var o = t("700b");
      t.n(o).a
    },
    "700b": function(e, n, t) {},
    "839e": function(e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = {
        data: function() {
          return {}
        },
        components: {},
        props: {
          title: {
            type: String,
            default: ""
          },
          hideTop: {
            type: Boolean,
            default: !1
          },
          hideBorder: {
            type: Boolean,
            default: !1
          }
        },
        externalClasses: ["i-class"],
        methods: {}
      };
      n.default = o
    },
    9808: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t("ac35"),
        a = t("01c8");
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        t.d(n, e, (function() {
          return a[e]
        }))
      }(c);
      t("6f72");
      var i = t("828b"),
        u = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      n.default = u.exports
    },
    ac35: function(e, n, t) {
      "use strict";
      t.d(n, "b", (function() {
        return o
      })), t.d(n, "c", (function() {
        return a
      })), t.d(n, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/iview/panel/index-create-component", {
    "components/iview/panel/index-create-component": function(e, n, t) {
      t("df3c").createComponent(t("9808"))
    }
  },
  [
    ["components/iview/panel/index-create-component"]
  ]
]);
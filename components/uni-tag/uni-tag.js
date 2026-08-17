(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/uni-tag/uni-tag"], {
    1330: function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        name: "UniTag",
        props: {
          type: {
            type: String,
            default: "default"
          },
          size: {
            type: String,
            default: "normal"
          },
          text: {
            type: String,
            default: ""
          },
          disabled: {
            type: [Boolean, String],
            default: !1
          },
          inverted: {
            type: [Boolean, String],
            default: !1
          },
          circle: {
            type: [Boolean, String],
            default: !1
          },
          mark: {
            type: [Boolean, String],
            default: !1
          }
        },
        methods: {
          onClick: function() {
            !0 !== this.disabled && "true" !== this.disabled && this.$emit("click")
          }
        }
      };
      n.default = a
    },
    "7a0f": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("c030"),
        o = e("ea0b");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      e("f346");
      var u = e("828b"),
        c = Object(u.a)(o.default, a.b, a.c, !1, null, "72e5620e", null, !1, a.a, void 0);
      n.default = c.exports
    },
    c030: function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return o
      })), e.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    ea0b: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("1330"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      n.default = o.a
    },
    f346: function(t, n, e) {
      "use strict";
      var a = e("f565");
      e.n(a).a
    },
    f565: function(t, n, e) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/uni-tag/uni-tag-create-component", {
    "components/uni-tag/uni-tag-create-component": function(t, n, e) {
      e("df3c").createComponent(e("7a0f"))
    }
  },
  [
    ["components/uni-tag/uni-tag-create-component"]
  ]
]);
(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/iview/switch/index"], {
    1299: function(e, t, n) {},
    "415d": function(e, t, n) {
      "use strict";
      var o = n("1299");
      n.n(o).a
    },
    "6e70": function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("dacd"),
        i = n.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      t.default = i.a
    },
    "805e": function(e, t, n) {
      "use strict";
      t.a = function(e) {
        e.options.wxsCallMethods || (e.options.wxsCallMethods = [])
      }
    },
    "964c": function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("fef6"),
        i = n("6e70");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      n("415d");
      var c = n("828b"),
        u = n("805e"),
        s = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      "function" == typeof u.a && Object(u.a)(s), t.default = s.exports
    },
    dacd: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = {
        data: function() {
          return {}
        },
        components: {},
        props: {
          value: {
            type: Boolean,
            default: !1
          },
          size: {
            type: String,
            default: "default"
          },
          disabled: {
            type: Boolean,
            default: !1
          },
          name: {
            type: String,
            default: ""
          }
        },
        externalClasses: ["i-class"],
        options: {
          multipleSlots: !0
        },
        methods: {
          toggle: function() {
            if (!this.disabled) {
              var e = !this.value;
              this.$emit("change", {
                value: e
              })
            }
          }
        }
      };
      t.default = o
    },
    fef6: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return i
      })), n.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/iview/switch/index-create-component", {
    "components/iview/switch/index-create-component": function(e, t, n) {
      n("df3c").createComponent(n("964c"))
    }
  },
  [
    ["components/iview/switch/index-create-component"]
  ]
]);
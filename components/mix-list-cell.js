(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/mix-list-cell"], {
    3607: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        data: function() {
          return {}
        },
        props: {
          icon: {
            type: String,
            default: ""
          },
          title: {
            type: String,
            default: "标题"
          },
          tips: {
            type: String,
            default: ""
          },
          navigateType: {
            type: String,
            default: "right"
          },
          border: {
            type: String,
            default: "b-b"
          },
          hoverClass: {
            type: String,
            default: "cell-hover"
          },
          iconColor: {
            type: String,
            default: "#333"
          },
          iconSize: {
            type: Number,
            default: 50
          },
          tipsColor: {
            type: String,
            default: "#606266"
          },
          otherTitle: {
            type: String,
            default: ""
          },
          otherColor: {
            type: String,
            default: "#606266"
          }
        },
        mounted: function() {
          console.log("otherColor" + this.otherColor), console.log("otherTitle" + this.otherTitle)
        },
        methods: {
          eventClick: function() {
            this.$emit("eventClick")
          }
        }
      };
      e.default = o
    },
    "695d": function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "9c96": function(t, e, n) {},
    d519: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("695d"),
        i = n("f674");
      for (var l in i)["default"].indexOf(l) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(l);
      n("f281");
      var r = n("828b"),
        c = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = c.exports
    },
    f281: function(t, e, n) {
      "use strict";
      var o = n("9c96");
      n.n(o).a
    },
    f674: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("3607"),
        i = n.n(o);
      for (var l in o)["default"].indexOf(l) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(l);
      e.default = i.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/mix-list-cell-create-component", {
    "components/mix-list-cell-create-component": function(t, e, n) {
      n("df3c").createComponent(n("d519"))
    }
  },
  [
    ["components/mix-list-cell-create-component"]
  ]
]);
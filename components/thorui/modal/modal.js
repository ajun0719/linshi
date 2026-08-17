(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/thorui/modal/modal"], {
    "0a9e": function(t, e, n) {},
    "13c2": function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.custom ? null : t.button.length),
            n = t.custom ? null : t.__map(t.button, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                g1: t.button.length,
                g2: t.button.length
              }
            }));
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              l0: n
            }
          })
        },
        a = []
    },
    "7cbe": function(t, e, n) {
      "use strict";
      var o = n("0a9e");
      n.n(o).a
    },
    "8f23": function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var o = {
        name: "tuiModal",
        props: {
          show: {
            type: Boolean,
            default: !1
          },
          width: {
            type: String,
            default: "84%"
          },
          padding: {
            type: String,
            default: "40rpx 64rpx"
          },
          radius: {
            type: String,
            default: "24rpx"
          },
          title: {
            type: String,
            default: ""
          },
          content: {
            type: String,
            default: ""
          },
          color: {
            type: String,
            default: "#999"
          },
          size: {
            type: Number,
            default: 28
          },
          shape: {
            type: String,
            default: "square"
          },
          button: {
            type: Array,
            default: function() {
              return [{
                text: "取消",
                type: "red",
                plain: !0
              }, {
                text: "确定",
                type: "red",
                plain: !1
              }]
            }
          },
          maskClosable: {
            type: Boolean,
            default: !0
          },
          custom: {
            type: Boolean,
            default: !1
          },
          fadein: {
            type: Boolean,
            default: !1
          }
        },
        data: function() {
          return {}
        },
        methods: {
          handleClick: function(t) {
            if (this.show) {
              var e = t.currentTarget.dataset;
              this.$emit("click", {
                index: Number(e.index)
              })
            }
          },
          handleClickCancel: function() {
            this.maskClosable && this.$emit("cancel")
          }
        }
      };
      e.default = o
    },
    "9add": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("13c2"),
        a = n("b08d");
      for (var u in a)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(u);
      n("7cbe");
      var l = n("828b"),
        r = Object(l.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = r.exports
    },
    b08d: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("8f23"),
        a = n.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(u);
      e.default = a.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/thorui/modal/modal-create-component", {
    "components/thorui/modal/modal-create-component": function(t, e, n) {
      n("df3c").createComponent(n("9add"))
    }
  },
  [
    ["components/thorui/modal/modal-create-component"]
  ]
]);
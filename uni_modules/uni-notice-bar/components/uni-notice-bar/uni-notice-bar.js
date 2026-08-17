(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar"], {
    "2ddc": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("7795"),
        i = n("345d");
      for (var c in i)["default"].indexOf(c) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(c);
      n("ce14");
      var a = n("828b"),
        u = Object(a.a)(i.default, o.b, o.c, !1, null, "a6c0e920", null, !1, o.a, void 0);
      e.default = u.exports
    },
    "345d": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("938b"),
        i = n.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(c);
      e.default = i.a
    },
    7795: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return c
      })), n.d(e, "a", (function() {
        return o
      }));
      var o = {
          uniIcons: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null, "7f32"))
          }
        },
        i = function() {
          this.$createElement;
          var t = (this._self._c, this.show && this.isShowGetMore ? this.moreText.length : null);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        c = []
    },
    "938b": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          name: "UniNoticeBar",
          emits: ["click", "getmore", "close"],
          props: {
            text: {
              type: String,
              default: ""
            },
            moreText: {
              type: String,
              default: ""
            },
            backgroundColor: {
              type: String,
              default: "#FFF9EA"
            },
            speed: {
              type: Number,
              default: 100
            },
            color: {
              type: String,
              default: "#FF9A43"
            },
            fontSize: {
              type: Number,
              default: 14
            },
            moreColor: {
              type: String,
              default: "#FF9A43"
            },
            single: {
              type: [Boolean, String],
              default: !1
            },
            scrollable: {
              type: [Boolean, String],
              default: !1
            },
            showIcon: {
              type: [Boolean, String],
              default: !1
            },
            showGetMore: {
              type: [Boolean, String],
              default: !1
            },
            showClose: {
              type: [Boolean, String],
              default: !1
            },
            taojian: {
              type: [Boolean, String],
              default: !0
            }
          },
          data: function() {
            return {
              textWidth: 0,
              boxWidth: 0,
              wrapWidth: "",
              webviewHide: !1,
              elId: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
              elIdBox: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
              show: !0,
              animationDuration: "none",
              animationPlayState: "paused",
              animationDelay: "0s"
            }
          },
          computed: {
            isShowGetMore: function() {
              return !0 === this.showGetMore || "true" === this.showGetMore
            },
            isShowClose: function() {
              return !(!0 !== this.showClose && "true" !== this.showClose || !1 !== this.showGetMore && "false" !== this.showGetMore)
            }
          },
          mounted: function() {
            var t = this;
            this.$nextTick((function() {
              t.initSize()
            }))
          },
          methods: {
            initSize: function() {
              var e = this;
              if (this.scrollable) {
                var n = [],
                  o = new Promise((function(n, o) {
                    t.createSelectorQuery().in(e).select("#".concat(e.elId)).boundingClientRect().exec((function(t) {
                      e.textWidth = t[0].width, n()
                    }))
                  })),
                  i = new Promise((function(n, o) {
                    t.createSelectorQuery().in(e).select("#".concat(e.elIdBox)).boundingClientRect().exec((function(t) {
                      e.boxWidth = t[0].width, n()
                    }))
                  }));
                n.push(o), n.push(i), Promise.all(n).then((function() {
                  e.animationDuration = "".concat(e.textWidth / e.speed, "s"), e.animationDelay = "-".concat(e.boxWidth / e.speed, "s"), setTimeout((function() {
                    e.animationPlayState = "running"
                  }), 1e3)
                }))
              }
            },
            loopAnimation: function() {},
            clickMore: function() {
              this.$emit("getmore")
            },
            close: function() {
              this.show = !1, this.$emit("close")
            },
            onClick: function() {
              this.$emit("click")
            }
          }
        };
        e.default = n
      }).call(this, n("df3c").default)
    },
    "9eed": function(t, e, n) {},
    ce14: function(t, e, n) {
      "use strict";
      var o = n("9eed");
      n.n(o).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component", {
    "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component": function(t, e, n) {
      n("df3c").createComponent(n("2ddc"))
    }
  },
  [
    ["uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar-create-component"]
  ]
]);
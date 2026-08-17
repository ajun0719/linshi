(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/iview/notice-bar/index"], {
    2139: function(t, n, i) {},
    "438e": function(t, n, i) {
      "use strict";
      i.d(n, "b", (function() {
        return e
      })), i.d(n, "c", (function() {
        return o
      })), i.d(n, "a", (function() {}));
      var e = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "46d4": function(t, n, i) {
      "use strict";
      i.r(n);
      var e = i("438e"),
        o = i("4b73");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        i.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      i("c5f3");
      var r = i("828b"),
        c = Object(r.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
      n.default = c.exports
    },
    "4b73": function(t, n, i) {
      "use strict";
      i.r(n);
      var e = i("bf76"),
        o = i.n(e);
      for (var a in e)["default"].indexOf(a) < 0 && function(t) {
        i.d(n, t, (function() {
          return e[t]
        }))
      }(a);
      n.default = o.a
    },
    bf76: function(t, n, i) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              show: !0,
              wrapWidth: 0,
              width: 0,
              duration: 0,
              animation: null,
              timer: null,
              animationData: ""
            }
          },
          components: {
            iIcon: function() {
              i.e("components/iview/icon/index").then(function() {
                return resolve(i("ca46"))
              }.bind(null, i)).catch(i.oe)
            }
          },
          props: {
            closable: {
              type: Boolean,
              default: !1
            },
            icon: {
              type: String,
              default: ""
            },
            loop: {
              type: Boolean,
              default: !1
            },
            backgroundcolor: {
              type: String,
              default: "#fefcec"
            },
            color: {
              type: String,
              default: "#f76a24"
            },
            speed: {
              type: Number,
              default: 1e3
            }
          },
          externalClasses: ["i-class"],
          destroyed: function() {
            this.destroyTimer()
          },
          mounted: function() {
            this.loop && this.initAnimation()
          },
          methods: {
            initAnimation: function() {
              var n = this;
              t.createSelectorQuery().in(this).select(".i-noticebar-content-wrap").boundingClientRect((function(i) {
                t.createSelectorQuery().in(n).select(".i-noticebar-content").boundingClientRect((function(e) {
                  var o = e.width / 40 * n.speed;
                  n.animation = t.createAnimation({
                    duration: o,
                    timingFunction: "linear"
                  }), n.wrapWidth = i.width, n.width = e.width, n.duration = o, n.startAnimation()
                })).exec()
              })).exec()
            },
            startAnimation: function() {
              var t = this;
              if (0 !== this.animation.option.transition.duration) {
                this.animation.option.transition.duration = 0;
                var n = this.animation.translateX(this.wrapWidth).step();
                this.animationData = n.export()
              }
              this.animation.option.transition.duration = this.duration;
              var i = this.animation.translateX(-this.width).step();
              setTimeout((function() {
                t.animationData = i.export()
              }), 100), this.timer = setTimeout((function() {
                t.startAnimation()
              }), this.duration)
            },
            destroyTimer: function() {
              this.timer && clearTimeout(this.timer)
            },
            handleClose: function() {
              this.destroyTimer(), this.show = !1, this.timer = null
            }
          }
        };
        n.default = e
      }).call(this, i("3223").default)
    },
    c5f3: function(t, n, i) {
      "use strict";
      var e = i("2139");
      i.n(e).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/iview/notice-bar/index-create-component", {
    "components/iview/notice-bar/index-create-component": function(t, n, i) {
      i("df3c").createComponent(i("46d4"))
    }
  },
  [
    ["components/iview/notice-bar/index-create-component"]
  ]
]);
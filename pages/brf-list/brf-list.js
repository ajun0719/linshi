(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/brf-list/brf-list"], {
    "388b": function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("4fa7"),
        o = e.n(i);
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(s);
      n.default = o.a
    },
    "3b25": function(t, n, e) {
      "use strict";
      var i = e("fecb");
      e.n(i).a
    },
    "4fa7": function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var i = getApp(),
          o = {
            data: function() {
              return {
                isShow: !1,
                loadding: !1,
                pullUpOn: !0,
                isFinish: !1,
                skeletonShow: !1,
                page: 1,
                hostUrl: i.globalData.officalIp,
                brfList: [],
                params: {},
                getRes: {},
                userInfo: {}
              }
            },
            components: {
              tuiLoadmore: function() {
                e.e("components/thorui/loadmore/loadmore").then(function() {
                  return resolve(e("0251"))
                }.bind(null, e)).catch(e.oe)
              },
              tuiNomore: function() {
                e.e("components/thorui/nomore/nomore").then(function() {
                  return resolve(e("f371"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            onLoad: function() {
              var t = this;
              this.$bus.$on("upParams", (function(n) {
                t.params = n || {}, t.initSkeData()
              }))
            },
            onShow: function() {
              this.userInfo = t.getStorageSync("userInfo"), Object.keys(this.userInfo).length > 0 ? this.getBrfList() : this.isFinish = !0
            },
            onReachBottom: function() {
              this.pullUpOn && !this.skeletonShow && (this.loadding = !0, this.getBrfList())
            },
            onShareAppMessage: function() {
              return {
                title: "",
                path: "pages/brf-list/brf-list",
                success: function() {},
                fail: function() {}
              }
            },
            methods: {
              empowerPhone: function() {
                this.$newUtil.appIsPhoneLogin()
              },
              initSkeData: function() {
                if (i.globalData.user_userid && i.globalData.user_unionid) {
                  for (var n = 0; n < 6; n++) this.brfList.push({
                    AddressAll: "--------------------",
                    Describe: "--------------------",
                    CreateTime: "-----------------"
                  });
                  this.page = 1, this.skeletonShow = !0, this.pullUpOn = !0, this.getBrfList()
                } else t.navigateTo({
                  url: "/pages/authorize/index"
                })
              },
              getBrfList: function() {
                var t = this,
                  n = {
                    openId: i.globalData.user_unionid,
                    userId: i.globalData.user_userid,
                    page: this.page,
                    rows: 10
                  };
                this.isFinish = !1, this.$api.brfList(n).then((function(n) {
                  if (t.loadding = !1, 1 == n.status) {
                    var e = n.data;
                    t.isFinish = !0, e ? (e.length < 10 && t.page > 1 && (t.pullUpOn = !1), 1 == t.page && (t.brfList = [], t.skeletonShow = !1), t.brfList = t.brfList.concat(e), t.page += 1) : 1 == t.page ? (t.skeletonShow = !1, t.brfList = []) : t.pullUpOn = !1
                  } else t.skeletonShow = !1
                }))
              },
              itemClick: function(n) {
                1 == this.$newUtil.appIsPhoneLogin().status && t.navigateTo({
                  url: "../brf-message/index?brfId=".concat(n)
                })
              }
            }
          };
        n.default = o
      }).call(this, e("df3c").default)
    },
    "6b7c": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return o
      })), e.d(n, "a", (function() {}));
      var i = function() {
          this.$createElement;
          var t = (this._self._c, 0 == this.brfList.length && this.isFinish);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        o = []
    },
    "7b10": function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("6b7c"),
        o = e("388b");
      for (var s in o)["default"].indexOf(s) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(s);
      e("3b25");
      var a = e("828b"),
        r = Object(a.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      n.default = r.exports
    },
    e634: function(t, n, e) {
      "use strict";
      (function(t, n) {
        var i = e("47a9");
        e("4aa9"), e("26e8"), i(e("3240"));
        var o = i(e("7b10"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    fecb: function(t, n, e) {}
  },
  [
    ["e634", "common/runtime", "common/vendor"]
  ]
]);
(global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/main"], {
    "381a": function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("affa"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      t.default = a.a
    },
    "8c49": function(e, t, n) {
      "use strict";
      var o = n("c961");
      n.n(o).a
    },
    "8f51": function(e, t, n) {
      "use strict";
      (function(e, t, o) {
        var a = n("47a9"),
          i = a(n("7ca3"));
        n("4aa9"), n("26e8");
        var r = a(n("3240")),
          c = a(n("e144")),
          u = a(n("067a")),
          l = a(n("37a4")),
          s = a(n("fffa"));

        function f(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = n, r.default.config.productionTip = !1, r.default.component("wucTab", (function() {
          n.e("components/wuc-tab/wuc-tab").then(function() {
            return resolve(n("726a"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("tuiActionsheet", (function() {
          n.e("components/thorui/actionsheet/actionsheet").then(function() {
            return resolve(n("aa46"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("tui-modal", (function() {
          n.e("components/thorui/modal/modal").then(function() {
            return resolve(n("9add"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("addressView", (function() {
          n.e("components/address-template").then(function() {
            return resolve(n("0dd4"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("tui-skeleton", (function() {
          Promise.all([n.e("common/vendor"), n.e("components/thorui/tui-skeleton/tui-skeleton")]).then(function() {
            return resolve(n("c97c"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-input", (function() {
          n.e("components/iview/input/index").then(function() {
            return resolve(n("cb86"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-cell-group", (function() {
          n.e("components/iview/cell-group/index").then(function() {
            return resolve(n("3306"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-cell", (function() {
          n.e("components/iview/cell/index").then(function() {
            return resolve(n("8b91"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-panel", (function() {
          n.e("components/iview/panel/index").then(function() {
            return resolve(n("9808"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-icon", (function() {
          n.e("components/iview/icon/index").then(function() {
            return resolve(n("ca46"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-switch", (function() {
          n.e("components/iview/switch/index").then(function() {
            return resolve(n("964c"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.component("i-notice-bar", (function() {
          n.e("components/iview/notice-bar/index").then(function() {
            return resolve(n("46d4"))
          }.bind(null, n)).catch(n.oe)
        })), r.default.mixin({
          methods: {
            setData: function(e, t) {
              var n, o, a = this,
                i = [];
              Object.keys(e).forEach((function(t) {
                i = t.split("."), n = e[t], o = a.$data, i.forEach((function(e, t) {
                  t + 1 == i.length ? a.$set(o, e, n) : o[e] || a.$set(o, e, {}), o = o[e]
                }))
              })), t && t()
            }
          }
        }), r.default.prototype.$newUtil = s.default, r.default.prototype.$api = u.default, r.default.prototype.$app = getApp(), r.default.prototype.$toast = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          !1 !== Boolean(e) && t.showToast({
            title: e,
            duration: o,
            mask: a,
            icon: n
          })
        }, r.default.prototype.$toast2 = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "上线中",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none",
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1500,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          !1 !== Boolean(e) && t.showToast({
            title: e,
            duration: o,
            mask: a,
            icon: n
          })
        }, r.default.prototype.$modalToast = function(e, n) {
          var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "确定",
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "提示";
          t.showModal({
            title: i,
            content: e,
            showCancel: o,
            confirmText: a,
            success: n,
            fail: function() {},
            complete: function() {}
          })
        }, r.default.prototype.$bus = new r.default, c.default.mpType = "app", o(new r.default(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? f(Object(n), !0).forEach((function(t) {
              (0, i.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }({
          store: l.default
        }, c.default))).$mount()
      }).call(this, n("3223").default, n("df3c").default, n("df3c").createApp)
    },
    affa: function(e, t, n) {
      "use strict";
      (function(e, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = {
          globalData: {
            user_unionid: null,
            user_openid: null,
            user_userid: null,
            user_token: null,
            fxd_token: null,
            user_sessionkey: null,
            userInfo: null,
            locationText: "点击获取当前位置",
            gpsAddress: "",
            locationGpsText: null,
            isShowHfSuc: 0,
            hfText: "",
            officalIp: "",
            PABYData: {},
            routerUrl: ""
          },
          onLaunch: function(t) {
            this.checkVersion(), this.globalData.officalIp = "https://shequpingtai.ximatech.cn", e.setStorageSync("root_type", "35"), console.log("是否存在" + e.getStorageSync("Instruction")), "" === e.getStorageSync("Instruction") && (console.log("是否存在进来"), e.setStorageSync("Instruction", !0)), e.setStorageSync("xz_baseUrl", this.globalData.officalIp)
          },
          onShow: function(t) {
            n.getNetworkType({
              success: function(e) {
                console.log("是否开启网络代理" + e.hasSystemProxy)
              }
            }), "helper-package/SafetyPayment" == t.path && t.referrerInfo.extraData && (e.setStorageSync("detection", 0), this.globalData.PABYData = t.referrerInfo.extraData, console.log("白云小程序的参数" + JSON.stringify(this.globalData.PABYData))), this.fenxiang()
          },
          methods: {
            checkVersion: function() {
              if (e.canIUse("getUpdateManager")) {
                var t = e.getUpdateManager();
                t.onCheckForUpdate((function(n) {
                  n.hasUpdate && (t.onUpdateReady((function() {
                    e.showModal({
                      title: "更新提示",
                      content: "新版本已经准备好，是否重启小程序？",
                      success: function(e) {
                        e.confirm && t.applyUpdate()
                      }
                    })
                  })), t.onUpdateFailed((function() {
                    e.showModal({
                      title: "已经有新版本了",
                      content: "新版本已经上线啦,请您删除当前小程序，重新搜索打开"
                    })
                  })))
                }))
              } else e.showModal({
                title: "提示",
                content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
              })
            },
            refresh: function() {
              var e = getCurrentPages();
              (e[e.length - 1], e[e.length - 2]).$vm.refresh()
            },
            refresh2: function() {
              var e = getCurrentPages();
              (e[e.length - 1], e[e.length - 3]).$vm.refresh()
            },
            appIsLoginByQr: function() {
              return new Promise((function(t, n) {
                var o = e.getStorageSync("userID"),
                  a = e.getStorageSync("openid");
                if (o && a) t(i = {
                  status: 1
                });
                else {
                  var i = {
                    status: 0
                  };
                  e.showModal({
                    title: "温馨提示",
                    content: "请先进行登录",
                    showCancel: !1,
                    confirmText: "去登录",
                    confirmColor: "#1E90FF",
                    success: function(t) {
                      e.navigateTo({
                        url: "/pages/authorize/index"
                      })
                    }
                  }), t(i)
                }
              }))
            },
            appIsLogin: function() {
              var t = this;
              return new Promise((function(n, o) {
                if (t.globalData.user_userid && t.globalData.user_unionid) n(a = {
                  status: 1
                });
                else {
                  var a = {
                    status: 0
                  };
                  e.showModal({
                    title: "温馨提示",
                    content: "请先进行登录",
                    showCancel: !1,
                    confirmText: "去登录",
                    confirmColor: "#1E90FF",
                    success: function(t) {
                      e.navigateTo({
                        url: "/pages/authorize/index"
                      })
                    }
                  }), n(a)
                }
              }))
            },
            appRelogin: function() {
              e.removeStorageSync("userID"), this.userInfo = null, this.user_userid = null, e.redirectTo({
                url: "../login/index"
              })
            },
            payForOrderConfirm: function(t) {
              return new Promise((function(n, o) {
                e.requestPayment({
                  timeStamp: t.timeStamp,
                  nonceStr: t.nonceStr,
                  package: t.package,
                  signType: t.signType,
                  paySign: t.paySign,
                  complete: function(e) {
                    n(e)
                  }
                })
              }))
            },
            fenxiang: function() {
              var e = Page;
              Page = function(t) {
                var o = "";
                return n.onAppRoute((function(e) {
                  var t = getCurrentPages(),
                    n = t[t.length - 1];
                  o = n.route
                })), t = Object.assign({
                  onShareAppMessage: function() {
                    return {
                      title: "测试分享title",
                      path: o,
                      imageUrl: ""
                    }
                  }
                }, t), e(t)
              }
            },
            onshare: function() {
              var e = {};
              return routerUrl.includes(this.routerUrl) || (e = {
                title: "自定义全局分享",
                imageUrl: n.getStorageSync("shareUrl")
              }), e
            }
          }
        };
        t.default = o
      }).call(this, n("df3c").default, n("3223").default)
    },
    c961: function(e, t, n) {},
    e144: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("381a");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      n("8c49");
      var i = n("828b"),
        r = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t.default = r.exports
    }
  },
  [
    ["8f51", "common/runtime", "common/vendor"]
  ]
]);
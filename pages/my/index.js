(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my/index"], {
    "0997": function(t, e, n) {},
    "146b": function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("7212"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    7212: function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = getApp(),
          o = {
            data: function() {
              return {
                userInfo: {},
                isLogin: "",
                belTestPer: !1,
                managerValue: "",
                doorList: [],
                isAuthenText: "",
                isShowFloatBtn: !1,
                textCount: "",
                subName: "折叠列表",
                subList: [{
                  title: "项目管理",
                  thumb: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                }, {
                  title: "项目收费",
                  thumb: "https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"
                }],
                showFlag: !0,
                unionid_Encrypt: "",
                userID: "",
                integral: "(0)",
                otherColor: "#63c39b",
                preventFlag: !1
              }
            },
            components: {
              listCell: function() {
                n.e("components/mix-list-cell").then(function() {
                  return resolve(n("d519"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            onLoad: function() {},
            onShow: function() {
              this.unionid_Encrypt = t.getStorageSync("unionid"), this.userID = t.getStorageSync("userID"), this.isLogin = this.unionid_Encrypt && this.userID, this.getUserInfo(), this.isLogin && this.getMessageCount(), t.getStorageSync("unionid") && t.getStorageSync("userID") && this.UserGetIntegral()
            },
            methods: {
              getPhoneNumber: function(e) {
                if (!this.preventFlag && (this.preventFlag = !0, "getPhoneNumber:ok" == e.detail.errMsg)) {
                  t.showLoading({
                    title: "加载中..."
                  });
                  var n = {
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                    sessionEncrypt: t.getStorageSync("session_key"),
                    unionid_Encrypt: t.getStorageSync("unionid"),
                    source: t.getStorageSync("root_type")
                  };
                  this.decodePhoneNum(n)
                }
              },
              decodePhoneNum: function(e) {
                var n = this;
                return new Promise((function(o, a) {
                  n.$api.getUserMob(e).then((function(e) {
                    if (t.hideLoading(), 1 == e.status) {
                      var a = e.data;
                      t.setStorageSync("userID", a.userid), t.setStorageSync("fxd_token", a.token), i.globalData.user_userid = a.userid, i.globalData.fxd_token = a.token;
                      var s = {
                        status: e.status,
                        userId: a.userid
                      };
                      o(s), n.getUserInfo()
                    } else {
                      var u = {
                        status: e.status
                      };
                      o(u)
                    }
                    n.preventFlag = !1
                  })).catch((function() {
                    n.preventFlag = !1
                  }))
                }))
              },
              buletoothSetClick: function() {
                1 == this.$newUtil.appIsLogin().status && t.navigateTo({
                  url: "/pages/my-keybag/newindex"
                })
              },
              buletoothSetClick1: function() {
                t.navigateTo({
                  url: "/repair/Bluetooth_initialization"
                })
              },
              my_login: function() {
                console.log("出发没"), t.navigateTo({
                  url: "/pages/authorize/index"
                })
              },
              lianjie: function() {
                t.navigateTo({
                  url: "../../helper-package/ceshi"
                })
              },
              UserGetIntegral: function() {
                var e = this,
                  n = {
                    unionid_Encrypt: t.getStorageSync("openid"),
                    userID: t.getStorageSync("userID")
                  };
                this.$api.UserGetIntegral(n).then((function(t) {
                  e.integral = "(" + t.data + ")"
                })).catch((function(t) {}))
              },
              updateAccount: function() {
                this.unionid_Encrypt && this.userID ? 1 == this.$newUtil.appIsPhoneLogin().status && t.navigateTo({
                  url: "../update-header/index"
                }) : t.navigateTo({
                  url: "../authorize/index"
                })
              },
              getUserInfo: function() {
                var e = this,
                  n = this;
                if (this.unionid_Encrypt && this.userID) {
                  var o = {
                    unionid_Encrypt: t.getStorageSync("unionid"),
                    userID: t.getStorageSync("userID")
                  };
                  this.$api.getUserInfoByUnionId(o).then((function(t) {
                    if (1 == t.status) {
                      i.globalData.userInfo = t.data;
                      var o = t.data.FRBleTestUser;
                      o && (o.indexOf(t.data.UserMob) >= 0 ? n.belTestPer = !0 : n.belTestPer = !1), n.userInfo = i.globalData.userInfo, n.isLogin = e.unionid_Encrypt && e.userID
                    }
                  }))
                }
              },
              startMyPromoCode: function(e) {
                1 == this.$newUtil.appIsLogin().status && t.navigateTo({
                  url: "../my-promo-code/index"
                })
              },
              getMessageCount: function() {
                var e = {
                  unionid_Encrypt: t.getStorageSync("unionid"),
                  userID: t.getStorageSync("userID"),
                  isRead: !1
                };
                this.$api.getMsgListCount(e).then((function(t) {
                  1 == t.status && t.data > 0 && t.data
                }))
              },
              OnIntegral: function() {
                t.navigateTo({
                  url: "../../helper-package/integralList"
                })
              },
              OnAboutUs: function() {
                t.navigateTo({
                  url: "../../helper-package/AboutUs"
                })
              },
              OnDefault: function() {
                t.showActionSheet({
                  itemList: ["社区服务", "房屋管理"],
                  success: function(e) {
                    var n = "";
                    "0" == e.tapIndex ? n = "社区服务" : "1" == e.tapIndex && (n = "房屋管理"), t.setStorageSync("tapIndex", e.tapIndex), t.showToast({
                      title: '"' + n + '"已经被设置为默认页',
                      icon: "none"
                    })
                  },
                  fail: function(t) {
                    console.log(t.errMsg)
                  }
                })
              },
              Onscan: function() {
                t.scanCode({
                  success: function(e) {
                    var n = e.result.split(":")[1],
                      i = e.result.split(":")[0];
                    "number" != i && "suite" != i && "person" != i || "" == n ? t.showModal({
                      title: "二维码参数有误请重新扫码",
                      content: e.result,
                      showCancel: !1
                    }) : t.navigateTo({
                      url: "../../helper-package/BQCdetail?id=603004325613&QrType=" + i
                    })
                  }
                })
              }
            }
          };
        e.default = o
      }).call(this, n("df3c").default)
    },
    a303: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("eea4"),
        o = n("146b");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("e6a2");
      var s = n("828b"),
        u = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      e.default = u.exports
    },
    da5a: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var i = n("47a9");
        n("4aa9"), n("26e8"), i(n("3240"));
        var o = i(n("a303"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    e6a2: function(t, e, n) {
      "use strict";
      var i = n("0997");
      n.n(i).a
    },
    eea4: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          uniIcons: function() {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null, "7f32"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    }
  },
  [
    ["da5a", "common/runtime", "common/vendor"]
  ]
]);
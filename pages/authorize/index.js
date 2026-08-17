(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/authorize/index"], {
    "17bb": function(e, t, n) {
      "use strict";
      var a = n("1ad1");
      n.n(a).a
    },
    "1ad1": function(e, t, n) {},
    "36aa": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("6212"),
        o = n("7b9b");
      for (var s in o)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(s);
      n("17bb");
      var i = n("828b"),
        r = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = r.exports
    },
    6212: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    "7b9b": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("882e"),
        o = n.n(a);
      for (var s in a)["default"].indexOf(s) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(s);
      t.default = o.a
    },
    "882e": function(e, t, n) {
      "use strict";
      (function(e, a) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = o(n("7eb4")),
          i = o(n("ee10")),
          r = o(n("3b2d")),
          u = getApp(),
          c = {
            data: function() {
              return {
                canIUse: e.canIUse("button.open-type.getUserInfo"),
                isGetUseInfoAuthorize: !1,
                userData: "",
                isShowPhone: "-1"
              }
            },
            props: {},
            onLoad: function(e) {
              console.log("状态" + (0, r.default)(e.isShowPhone)), void 0 !== e.isShowPhone && (this.isShowPhone = e.isShowPhone)
            },
            methods: {
              getUserInfoClick: function(t) {
                var n = this;
                e.getUserProfile({
                  desc: "获取微信用户信息",
                  success: function(t) {
                    n.userData = t, console.log("获取用户信息" + JSON.stringify(t)), e.showLoading({
                      title: "加载中",
                      mask: !1
                    }), n.checkLogin()
                  },
                  fail: function(e) {
                    console.log("异常信息" + JSON.stringify(e))
                  }
                })
              },
              checkLogin: function() {
                var e = this;
                return (0, i.default)(s.default.mark((function t() {
                  var n, a;
                  return s.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.getSessionKey();
                      case 2:
                        return n = t.sent, console.log("ObjCode" + JSON.stringify(n)), t.next = 6, e.getOpenIdbyCode(n);
                      case 6:
                        return a = t.sent, console.log("ObjStatus" + JSON.stringify(a)), t.next = 10, e.getUserParms(a);
                      case 10:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              getSessionKey: function() {
                var t = this;
                return new Promise((function(n, a) {
                  e.login({
                    success: function(a) {
                      if (console.log("第一步"), a.code) {
                        var o = {
                          code: a.code,
                          source: e.getStorageSync("root_type")
                        };
                        n(o)
                      } else t.$modalToast("wxlogin返回code为空"), n(res)
                    }
                  })
                }))
              },
              getOpenIdbyCode: function(t) {
                var n = this;
                return new Promise((function(a, o) {
                  n.$api.wxLogin(t).then((function(t) {
                    if (console.log("第二步"), 1 == t.status) {
                      var n = t.data;
                      u.globalData.user_openid = n.openid, u.globalData.user_sessionkey = n.session_key, u.globalData.unionid = n.unionid, e.setStorageSync("openid", n.openid), e.setStorageSync("session_key", n.session_key), e.setStorageSync("userOpenid", n.openid), t = {
                        status: 1,
                        source: e.getStorageSync("root_type")
                      }, a(t)
                    } else t = {
                      status: 500,
                      errMsg: t.msg ? t.msg : "获取openId失败"
                    }, a(t)
                  }))
                }))
              },
              getUserParms: function(t) {
                var n = this;
                return console.log("登录数据" + JSON.stringify(t)), new Promise((function(t, a) {
                  var o = {
                    rawData: n.userData.rawData,
                    signature: 2,
                    encryptedData: n.userData.encryptedData,
                    sessionEncrypt: u.globalData.user_sessionkey,
                    iv: n.userData.iv,
                    openId: u.globalData.user_openid,
                    unionId: u.globalData.unionid,
                    source: e.getStorageSync("root_type")
                  };
                  n.$api.getUnionId(o).then((function(a) {
                    if (1 == a.status) e.setStorageSync("unionid", a.data), e.setStorageSync("unionid", a.data), u.globalData.user_unionid = a.data.unionid_Encrypt, n.$store.commit("setUnionid", a.data.unionid_Encrypt), n.$store.commit("setUserID", a.data.userid), u.globalData.userInfo = a.data, u.globalData.user_userid = a.data.userid, u.globalData.fxd_token = a.data.Token, e.setStorageSync("unionid", a.data.unionid_Encrypt), e.setStorageSync("userID", a.data.userid), e.setStorageSync("fxd_token", a.data.Token), e.setStorageSync("userInfo", a.data), 200 == a.status && e.showToast({
                      title: "点击完成授权"
                    }), t({
                      status: 200
                    }), "2" !== n.isShowPhone || "" != a.data.UserMob && null != a.data.UserMob ? e.navigateBack({
                      delta: -1
                    }) : n.isGetUseInfoAuthorize = !0;
                    else {
                      var o = {
                        status: 500,
                        errorMsg: a.msg
                      };
                      t(o)
                    }
                  }))
                }))
              },
              getPhoneNumber: function(t) {
                var n = this;
                "getPhoneNumber:ok" == t.detail.errMsg ? (e.showLoading({
                  title: "加载中"
                }), this.getSessionKey().then((function(a) {
                  if (a.code) {
                    var o = {
                      encryptedData: t.detail.encryptedData,
                      iv: t.detail.iv,
                      sessionEncrypt: u.globalData.user_sessionkey,
                      unionid_Encrypt: u.globalData.user_openid,
                      source: e.getStorageSync("root_type")
                    };
                    return n.decodePhoneNum(o)
                  }
                  e.hideLoading()
                })).then((function() {
                  n.saveUserInfo()
                }))) : a.redirectTo({
                  url: "pages/switch-phone/index?isForUserLogin=true"
                })
              },
              decodePhoneNum: function(t) {
                var n = this;
                return new Promise((function(a, o) {
                  n.$api.getUserMob(t).then((function(t) {
                    if (e.hideLoading(), 1 == t.status) {
                      var n = t.data;
                      e.setStorageSync("userID", n.userid), e.setStorageSync("fxd_token", n.token), u.globalData.user_userid = n.userid, u.globalData.fxd_token = n.token;
                      var o = {
                        status: t.status,
                        userId: n.userid
                      };
                      a(o)
                    } else {
                      var s = {
                        status: t.status
                      };
                      a(s)
                    }
                  }))
                }))
              },
              saveUserInfo: function() {
                var t = {
                  unionid_Encrypt: u.globalData.user_unionid,
                  userID: u.globalData.user_userid
                };
                this.$api.getUserInfoByUnionId(t).then((function(t) {
                  1 == t.status && (u.globalData.userInfo = t.data, e.setStorageSync("userInfo", t.data), getCurrentPages().length >= 2 ? e.navigateBack({
                    delta: -1
                  }) : e.switchTab({
                    url: "../my/index"
                  }))
                }))
              },
              OnRefuse: function() {
                e.navigateBack({
                  delta: -1
                })
              }
            }
          };
        t.default = c
      }).call(this, n("df3c").default, n("3223").default)
    },
    e2e0: function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("4aa9"), n("26e8"), a(n("3240"));
        var o = a(n("36aa"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["e2e0", "common/runtime", "common/vendor"]
  ]
]);
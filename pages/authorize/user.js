(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/authorize/user"], {
    2233: function(e, t, n) {},
    "3ad7": function(e, t, n) {
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
    "9e00": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("3ad7"),
        o = n("d611");
      for (var r in o)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(r);
      n("a2d8");
      var s = n("828b"),
        i = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = i.exports
    },
    a2d8: function(e, t, n) {
      "use strict";
      var a = n("2233");
      n.n(a).a
    },
    c836: function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("4aa9"), n("26e8"), a(n("3240"));
        var o = a(n("9e00"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    c9d4: function(e, t, n) {
      "use strict";
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = a(n("7eb4")),
          r = a(n("ee10")),
          s = getApp(),
          i = {
            data: function() {
              return {
                canIUse: e.canIUse("button.open-type.getUserInfo"),
                userData: "",
                preventFlag: !1
              }
            },
            props: {},
            onLoad: function(e) {},
            methods: {
              getUserInfoClick: function(t) {
                var n = this;
                this.preventFlag || (this.preventFlag = !0, e.getUserProfile({
                  desc: "获取微信用户信息",
                  success: function(t) {
                    n.userData = t, console.log("获取用户信息" + JSON.stringify(t)), e.showLoading({
                      title: "加载中",
                      mask: !1
                    }), n.checkLogin()
                  },
                  fail: function(e) {
                    n.preventFlag = !1
                  }
                }))
              },
              checkLogin: function() {
                var e = this;
                return (0, r.default)(o.default.mark((function t() {
                  var n, a;
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return t.next = 2, e.getSessionKey();
                      case 2:
                        return n = t.sent, t.next = 5, e.getOpenIdbyCode(n);
                      case 5:
                        return a = t.sent, t.next = 8, e.getUserParms(a);
                      case 8:
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
                      if (a.code) {
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
                  n.preventFlag = !0, n.$api.wxLogin(t).then((function(t) {
                    if (1 == t.status) {
                      var o = t.data;
                      s.globalData.user_openid = o.openid, s.globalData.user_sessionkey = o.session_key, s.globalData.unionid = o.unionid, n.$store.commit("setUnionid", o.unionid), e.setStorageSync("unionid", o.unionid), e.setStorageSync("openid", o.openid), e.setStorageSync("session_key", o.session_key), t = {
                        status: 1,
                        source: e.getStorageSync("root_type")
                      }, a(t), n.preventFlag = !1
                    } else t = {
                      status: 500,
                      errMsg: t.msg ? t.msg : "获取openId失败"
                    }, a(t), n.preventFlag = !1
                  })).catch((function() {
                    n.preventFlag = !1
                  }))
                }))
              },
              getUserParms: function() {
                var t = this;
                return new Promise((function(n, a) {
                  t.preventFlag = !0;
                  var o = {
                    rawData: t.userData.rawData,
                    signature: 2,
                    encryptedData: t.userData.encryptedData,
                    sessionEncrypt: e.getStorageSync("session_key"),
                    iv: t.userData.iv,
                    openId: s.globalData.user_openid,
                    unionId: s.globalData.unionid,
                    source: e.getStorageSync("root_type")
                  };
                  t.$api.getUnionId(o).then((function(a) {
                    if (1 == a.status) e.setStorageSync("unionid", a.data), s.globalData.user_unionid = a.data.unionid_Encrypt, s.globalData.userInfo = a.data, s.globalData.user_userid = a.data.userid, s.globalData.fxd_token = a.data.Token, t.$store.commit("setUnionid", a.data.unionid_Encrypt), t.$store.commit("setUserID", a.data.userid), e.setStorageSync("unionid", a.data.unionid_Encrypt), e.setStorageSync("userID", a.data.userid), e.setStorageSync("fxd_token", a.data.Token), e.setStorageSync("userInfo", a.data), 200 == a.status && e.showToast({
                      title: "点击完成授权"
                    }), n({
                      status: 200
                    }), "" == a.data.UserMob || null == a.data.UserMob ? e.navigateTo({
                      url: "/pages/authorize/phone?isGetUseInfoAuthorize=" + !0
                    }) : e.navigateBack({
                      delta: -1
                    }), t.preventFlag = !1;
                    else {
                      var o = {
                        status: 500,
                        errorMsg: a.msg
                      };
                      n(o), t.preventFlag = !1
                    }
                  })).catch((function() {
                    t.preventFlag = !1
                  }))
                }))
              },
              saveUserInfo: function() {
                var t = this;
                this.preventFlag = !0;
                var n = {
                  unionid_Encrypt: s.globalData.user_unionid,
                  userID: s.globalData.user_userid
                };
                this.$api.getUserInfoByUnionId(n).then((function(n) {
                  1 == n.status && (s.globalData.userInfo = n.data, e.setStorageSync("userInfo", n.data), e.navigateBack({
                    delta: -1
                  })), t.preventFlag = !1
                })).catch((function() {
                  t.preventFlag = !1
                }))
              }
            }
          };
        t.default = i
      }).call(this, n("df3c").default)
    },
    d611: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("c9d4"),
        o = n.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(r);
      t.default = o.a
    }
  },
  [
    ["c836", "common/runtime", "common/vendor"]
  ]
]);
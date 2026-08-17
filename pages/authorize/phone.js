(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/authorize/phone"], {
    "2dd3": function(e, t, n) {
      "use strict";
      (function(e, n) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = getApp(),
          a = {
            data: function() {
              return {
                canIUse: e.canIUse("button.open-type.getUserInfo"),
                userData: "",
                preventFlag: !1,
                isGetUseInfoAuthorize: !1
              }
            },
            props: {},
            onLoad: function(e) {
              void 0 !== e.isGetUseInfoAuthorize && (this.isGetUseInfoAuthorize = Boolean(e.isGetUseInfoAuthorize))
            },
            onShow: function() {},
            methods: {
              checkSession: function() {
                n.checkSession({
                  success: function() {
                    console.log("checkSession未过期")
                  },
                  fail: function() {
                    console.log("checkSession过期"), this.getSessionKey()
                  }
                })
              },
              getSessionKey: function() {
                var t = this;
                e.login({
                  success: function(n) {
                    if (n.code) {
                      var o = {
                        code: n.code,
                        source: e.getStorageSync("root_type")
                      };
                      t.getOpenIdbyCode(o)
                    } else t.$modalToast("wxlogin返回code为空")
                  }
                })
              },
              getOpenIdbyCode: function(t) {
                this.$api.wxLogin(t).then((function(t) {
                  if (1 == t.status) {
                    var n = t.data;
                    n = t.data, o.globalData.user_openid = n.openid, o.globalData.user_sessionkey = n.session_key, o.globalData.user_unionid = n.unionid, e.setStorageSync("unionid", n.unionid), e.setStorageSync("openid", n.openid), e.setStorageSync("session_key", n.session_key)
                  }
                }))
              },
              getPhoneNumber: function(t) {
                if (!this.preventFlag)
                  if (this.preventFlag = !0, "getPhoneNumber:ok" == t.detail.errMsg) {
                    e.showLoading({
                      title: "加载中..."
                    });
                    var o = {
                      encryptedData: t.detail.encryptedData,
                      iv: t.detail.iv,
                      sessionEncrypt: e.getStorageSync("session_key"),
                      unionid_Encrypt: e.getStorageSync("unionid"),
                      source: e.getStorageSync("root_type")
                    };
                    this.decodePhoneNum(o)
                  } else n.redirectTo({
                    url: "pages/switch-phone/index?isForUserLogin=true"
                  }), this.preventFlag = !1
              },
              decodePhoneNum: function(t) {
                var n = this;
                return new Promise((function(a, i) {
                  n.$api.getUserMob(t).then((function(t) {
                    if (e.hideLoading(), 1 == t.status) {
                      var i = t.data;
                      e.setStorageSync("userID", i.userid), e.setStorageSync("fxd_token", i.token), o.globalData.user_userid = i.userid, o.globalData.fxd_token = i.token;
                      var s = {
                        status: t.status,
                        userId: i.userid
                      };
                      a(s), n.saveUserInfo()
                    } else {
                      var r = {
                        status: t.status
                      };
                      a(r)
                    }
                    n.preventFlag = !1
                  })).catch((function() {
                    n.preventFlag = !1
                  }))
                }))
              },
              saveUserInfo: function() {
                var t = this,
                  n = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID")
                  };
                this.$api.getUserInfoByUnionId(n).then((function(n) {
                  1 == n.status && (o.globalData.userInfo = n.data, e.setStorageSync("userInfo", n.data), t.isGetUseInfoAuthorize ? e.navigateBack({
                    delta: 2
                  }) : e.navigateBack({
                    delta: -1
                  })), t.preventFlag = !1
                })).catch((function() {
                  t.preventFlag = !1
                }))
              },
              OnRefuse: function() {
                e.navigateBack({
                  delta: -1
                })
              }
            }
          };
        t.default = a
      }).call(this, n("df3c").default, n("3223").default)
    },
    5665: function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("927b"),
        a = n("6f26");
      for (var i in a)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(i);
      n("a07f");
      var s = n("828b"),
        r = Object(s.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      t.default = r.exports
    },
    "6f26": function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n("2dd3"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(i);
      t.default = a.a
    },
    "76b7": function(e, t, n) {
      "use strict";
      (function(e, t) {
        var o = n("47a9");
        n("4aa9"), n("26e8"), o(n("3240"));
        var a = o(n("5665"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "927b": function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    a07f: function(e, t, n) {
      "use strict";
      var o = n("a443");
      n.n(o).a
    },
    a443: function(e, t, n) {}
  },
  [
    ["76b7", "common/runtime", "common/vendor"]
  ]
]);
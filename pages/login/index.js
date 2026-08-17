(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/login/index"], {
    "25af": function(n, e, t) {
      "use strict";
      var o = t("df59");
      t.n(o).a
    },
    2663: function(n, e, t) {
      "use strict";
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return i
      })), t.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "2d80": function(n, e, t) {
      "use strict";
      t.r(e);
      var o = t("2663"),
        i = t("8e9f");
      for (var a in i)["default"].indexOf(a) < 0 && function(n) {
        t.d(e, n, (function() {
          return i[n]
        }))
      }(a);
      t("25af");
      var s = t("828b"),
        u = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = u.exports
    },
    "581ab": function(n, e, t) {
      "use strict";
      (function(n, e) {
        var o = t("47a9");
        t("4aa9"), t("26e8"), o(t("3240"));
        var i = o(t("2d80"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "8e9f": function(n, e, t) {
      "use strict";
      t.r(e);
      var o = t("e003"),
        i = t.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(a);
      e.default = i.a
    },
    df59: function(n, e, t) {},
    e003: function(n, e, t) {
      "use strict";
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var t = getApp(),
          o = {
            data: function() {
              return {
                isCheckXy: !1,
                isLoading: !0,
                disabled: !1,
                loginInfo: {
                  phone: null,
                  code: null
                },
                codeText: "获取验证码",
                isSendCode: !1,
                second: 60
              }
            },
            onLoad: function(n) {
              n.getPhoneFail ? this.isLoading = !1 : this.loginJudge(n)
            },
            methods: {
              sendCodeClick: function() {
                var n = this;
                this.isSendCode = !0, setInterval((function() {
                  --n.second
                }), 1e3), setTimeout((function() {
                  clearInterval(), n.isSendCode = !1
                }), 6e4)
              },
              userNameInput: function(n) {
                this.loginInfo.phone = n.detail.value
              },
              codeInput: function(n) {
                console.log(n), this.loginInfo.code = n.detail.value
              },
              loginJudge: function(e) {
                console.log("loginJudge", e), this.getUserStorage().then((function(o) {
                  if (t.globalData.user_unionid && t.globalData.user_userid)
                    if (e.returnURL) {
                      var i = decodeURIComponent(e.returnURL);
                      n.navigateTo({
                        url: i
                      })
                    } else n.switchTab({
                      url: "../home/index"
                    });
                  else n.switchTab({
                    url: "../home/index"
                  })
                }))
              },
              login_GetCode: function() {
                var e = this;
                if (!this.disabled) {
                  var o = null;
                  if (this.isCheckXy ? this.loginInfo.phone ? 11 == this.loginInfo.phone.trim().length && /^1[3|4|5|6|7|8|9]\d{9}$/.test(this.loginInfo.phone) || (o = "手机号格式不正确") : o = "手机号码不能为空" : o = "请勾选用户协议", null == o) {
                    n.showLoading({
                      title: "获取中",
                      mask: !0
                    });
                    var i = {
                      phone: this.loginInfo.phone,
                      unionid_Encrypt: t.globalData.user_unionid
                    };
                    this.$api.getSmsCode(i).then((function(t) {
                      1 == t.status ? (e.$toast("短信已发送"), e.sendCodeClick()) : 10002 == t.status && n.redirectTo({
                        url: "../authorize/index"
                      })
                    }))
                  } else this.$modalToast(o)
                }
              },
              login_Submit: function() {
                var e = this,
                  o = null;
                if (this.isCheckXy ? "" == this.loginInfo.phone || null == this.loginInfo.phone ? o = "手机号码不能为空" : 11 == this.loginInfo.phone.trim().length && /^1[3|4|5|6|7|8|9]\d{9}$/.test(this.loginInfo.phone) ? null != this.loginInfo.code && "" != this.loginInfo.code && 6 == this.loginInfo.code.trim().length || (o = "请输入6位数字的验证码") : o = "手机号格式不正确" : o = "请勾选用户协议", null == o) {
                  n.showLoading({
                    title: "登录中",
                    mask: !0
                  });
                  var i = this.loginInfo;
                  i.unionid_Encrypt = t.globalData.user_unionid, i.source = 21, this.$api.login(i).then((function(o) {
                    if (1 == o.status) {
                      var i = o.data;
                      n.setStorageSync("userID", i.userid), n.setStorageSync("fxd_token", i.token), t.globalData.user_userid = i.userid, t.globalData.fxd_token = i.token;
                      var a = {
                        unionid_Encrypt: t.globalData.user_unionid,
                        userID: i.userid
                      };
                      e.$api.getUserInfoByUnionId(a).then((function(e) {
                        1 == e.status && (getApp().globalData.userInfo = e.entity, getCurrentPages().length >= 2 ? n.navigateBack({
                          delta: -1
                        }) : n.switchTab({
                          url: "../my/index"
                        }))
                      }))
                    } else 10002 == o.status && n.redirectTo({
                      url: "../authorize/index"
                    })
                  }))
                } else this.$modalToast(o)
              },
              getUserStorage: function() {
                var e = this;
                return new Promise((function(o, i) {
                  var a, s, u, l, r;
                  s = n.getStorageSync("unionid"), u = n.getStorageSync("openid"), l = n.getStorageSync("session_key"), a = n.getStorageSync("userID"), r = n.getStorageSync("fxd_token"), t.globalData.user_sessionkey = l, t.globalData.user_unionid = s, t.globalData.user_openid = u, t.globalData.user_userid = a, t.globalData.fxd_token = r, u && r && a && e.getUserInfoReq(), o(1)
                }))
              },
              getUserInfoReq: function() {
                if (t.globalData.user_unionid && t.globalData.user_userid) {
                  var n = {
                    unionid_Encrypt: t.globalData.user_unionid,
                    userID: t.globalData.user_userid
                  };
                  this.$api.getUserInfoByUnionId(n).then((function(n) {
                    1 == n.status && (t.globalData.userInfo = n.data)
                  }))
                }
              },
              chooseXy: function(n) {
                this.isCheckXy = 1 == n.detail.value.length
              }
            }
          };
        e.default = o
      }).call(this, t("df3c").default)
    }
  },
  [
    ["581ab", "common/runtime", "common/vendor"]
  ]
]);
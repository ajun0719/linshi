(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/switch-userphone/index"], {
    "254e": function(t, e, n) {},
    2751: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var i = n("47a9");
        n("4aa9"), n("26e8"), i(n("3240"));
        var o = i(n("3904"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    3904: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("db89"),
        o = n("5531");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("e6f0");
      var s = n("828b"),
        u = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      e.default = u.exports
    },
    5531: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("973f"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = o.a
    },
    "973f": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = getApp(),
          i = {
            data: function() {
              return {
                phone: "",
                code: "",
                disabled: !1,
                codeText: "获取验证码",
                isSendCode: !1,
                second: 60,
                mode: 0
              }
            },
            onLoad: function(e) {
              e.mode ? (this.mode = e.mode, t.setNavigationBarTitle({
                title: "绑定手机"
              })) : t.setNavigationBarTitle({
                title: "切换手机"
              })
            },
            onReady: function() {},
            onShow: function() {},
            methods: {
              userPhoneInput: function(t) {
                this.phone = t.detail.value
              },
              codeInput: function(t) {
                this.code = t.detail.value
              },
              sendCodeClick: function() {
                var t = this;
                this.isSendCode = !0, setInterval((function() {
                  --t.second
                }), 1e3), setTimeout((function() {
                  clearInterval(), t.isSendCode = !1
                }), 6e4)
              },
              login_GetCode: function() {
                var e = this;
                if (!this.disabled) {
                  var i = null;
                  if (this.phone ? 11 == this.phone.trim().length && /^1[3|4|5|6|7|8|9]\d{9}$/.test(this.phone) || (i = "手机号格式不正确") : i = "手机号码不能为空", null == i) {
                    t.showLoading({
                      title: "获取中",
                      mask: !0
                    });
                    var o = {
                      phone: this.phone,
                      unionid_Encrypt: n.globalData.user_unionid
                    };
                    this.$api.getSmsCode(o).then((function(t) {
                      1 == t.status && (e.$toast("短信已发送"), e.sendCodeClick(), e.disabled = !0, e.getCoreStatus = "disabled")
                    }))
                  } else this.$modalToast(i)
                }
              },
              changePhoneClick: function() {
                var e = null,
                  i = this;
                if ("" == this.phone || null == this.phone ? e = "手机号码不能为空" : 11 == this.phone.trim().length && /^1[3|4|5|6|7|8|9]\d{9}$/.test(this.phone) ? null != this.code && "" != this.code && 6 == this.code.trim().length || (e = "请输入6位数字的验证码") : e = "手机号格式不正确", null == e) {
                  var o = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid,
                    newusermob: this.phone,
                    code: this.code,
                    source: t.getStorageSync("root_type")
                  };
                  t.showLoading({
                    title: "切换账号中",
                    mask: !0
                  }), this.$api.updateBindUserMob(o).then((function(e) {
                    if (1 == e.status) {
                      t.setStorageSync("userID", e.data.userid), t.setStorageSync("fxd_token", e.data.token), n.globalData.fxd_token = e.data.token, n.globalData.user_userid = e.data.userid;
                      var o = {
                        unionid_Encrypt: n.globalData.user_unionid,
                        userID: e.data.userid
                      };
                      i.$api.getUserInfoByUnionId(o).then((function(e) {
                        1 == e.status && (getApp().globalData.userInfo = e.entity, i.$toast("切换成功"), setTimeout((function() {
                          t.navigateBack({
                            delta: 1
                          })
                        }), 1e3))
                      }))
                    }
                  }))
                } else this.$modalToast(e)
              }
            }
          };
        e.default = i
      }).call(this, n("df3c").default)
    },
    db89: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return o
      })), n.d(e, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    },
    e6f0: function(t, e, n) {
      "use strict";
      var i = n("254e");
      n.n(i).a
    }
  },
  [
    ["2751", "common/runtime", "common/vendor"]
  ]
]);
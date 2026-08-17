(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/message/index"], {
    "03aa": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("6ea2"),
        s = n("da38");
      for (var i in s)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return s[t]
        }))
      }(i);
      n("224e");
      var o = n("828b"),
        u = Object(o.a)(s.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      e.default = u.exports
    },
    "224e": function(t, e, n) {
      "use strict";
      var a = n("b50e");
      n.n(a).a
    },
    "6ea2": function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return s
      })), n.d(e, "a", (function() {}));
      var a = function() {
          this.$createElement;
          var t = (this._self._c, this.messageList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        s = []
    },
    a39c: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var a = n("47a9");
        n("4aa9"), n("26e8"), a(n("3240"));
        var s = a(n("03aa"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(s.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    b50e: function(t, e, n) {},
    da38: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("eef2"),
        s = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      e.default = s.a
    },
    eef2: function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0, n("f591");
        var a = getApp(),
          s = {
            data: function() {
              return {
                messageList: [],
                messageId: null,
                locationIconisShow: !0,
                locationText: "",
                userInfo: "",
                currentAddress: ""
              }
            },
            components: {
              topView: function() {
                n.e("components/top-template").then(function() {
                  return resolve(n("55db"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            onLoad: function(t) {},
            onReady: function() {},
            onShow: function() {
              this.getMessageList()
            },
            onHide: function() {},
            methods: {
              getMessageList: function() {
                if (null != a.globalData.user_userid && null != a.globalData.user_unionid) {
                  var t = this,
                    e = {
                      unionid_Encrypt: a.globalData.user_unionid,
                      userID: a.globalData.user_userid
                    };
                  this.$api.getNotifyList(e).then((function(e) {
                    if (1 == e.status) {
                      var n = e.data;
                      t.messageList = n.data
                    }
                  }))
                }
              },
              changeMsgStatusRequest: function(t, e) {
                var n = this;
                if (1 == n.$newUtil.appIsLogin().status) {
                  var s = {
                    unionid_Encrypt: a.globalData.user_unionid,
                    userID: a.globalData.user_userid,
                    id: t,
                    operateType: e
                  };
                  getApp().globalData.officalIp, n.$api.upNotifyStatus(s).then((function(t) {
                    1 == t.status && 3 == e && n.getMessageList()
                  }))
                }
              },
              imgHeaderClick: function() {
                1 == this.$newUtil.appIsPhoneLogin().status && t.switchTab({
                  url: "/pages/my/index"
                })
              },
              startForMessage: function(e) {
                var n = this.messageList[e.currentTarget.dataset.index].RequestUrl;
                console.log("startForMessage", n), this.changeMsgStatusRequest(this.messageList[e.currentTarget.dataset.index].ID, 1), 0 != n.indexOf("/") && (n = "/" + n), t.navigateTo({
                  url: n
                })
              },
              delMessage: function(e) {
                var n = this;
                console.log("delMessage", e), this.messageId = this.messageList[e.currentTarget.dataset.index].ID, t.showModal({
                  title: "提示",
                  content: "是否删除该条消息",
                  showCancel: !0,
                  success: function(t) {
                    t.confirm && n.changeMsgStatusRequest(n.messageId, 3)
                  }
                })
              },
              refresh: function() {}
            }
          };
        e.default = s
      }).call(this, n("df3c").default)
    }
  },
  [
    ["a39c", "common/runtime", "common/vendor"]
  ]
]);
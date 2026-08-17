(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/brake-order-confirm/index"], {
    "0341": function(t, a, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0, e("c6ff");
        var n = getApp(),
          i = {
            data: function() {
              return {
                orderData: null,
                isCanClick: !0,
                token: "",
                mode: 0
              }
            },
            onLoad: function(t) {
              if (console.log("payBlueTooth", t), t.mode && (this.mode = t.mode), t.orderData) {
                var a = JSON.parse(t.orderData);
                this.orderData = a, this.token = a.Token
              }
            },
            onReady: function() {},
            onShow: function() {},
            onUnload: function() {},
            methods: {
              getJsPayParms: function() {
                if (this.isCanClick && "1" != this.mode) {
                  this.isCanClick = !1;
                  var a = this,
                    e = {
                      userId: n.globalData.user_userid,
                      parkId: this.orderData.ParkId,
                      openId: n.globalData.user_openid,
                      appId: "wx83ceea02b48904a9",
                      orderId: this.orderData.OrderId,
                      token: this.token,
                      type: 1
                    };
                  t.showLoading({
                    title: "发起支付中...",
                    mask: !0
                  }), this.$api.getWxJsApiPayParamFromTL(e).then((function(e) {
                    if (1 == e.status) {
                      var n = e.data;
                      a.token = n.token, a.payConfirm(n)
                    } else 30001 == e.status ? (a.isCanClick = !0, t.navigateTo({
                      url: "/pages/pay-check/index?costid=" + a.orderData.OrderId
                    }), t.hideLoading()) : (a.isCanClick = !0, a.$modalToast(e.msg))
                  }))
                }
              },
              payConfirm: function(a) {
                t.requestPayment({
                  timeStamp: a.timeStamp,
                  nonceStr: a.nonceStr,
                  package: a.package,
                  signType: a.signType,
                  paySign: a.paySign,
                  fail: function() {
                    t.showModal({
                      title: "取消支付",
                      showCancel: !1,
                      success: function() {}
                    })
                  },
                  success: function(a) {
                    t.redirectTo({
                      url: "/pages/brake-scan-result/index?type=1"
                    })
                  }
                })
              },
              queryOrder: function() {
                t.hideLoading();
                var a = this,
                  e = {
                    orderId: a.orderData.OrderId,
                    appId: "wx83ceea02b48904a9",
                    openId: n.globalData.user_openid
                  };
                t.showLoading({
                  title: "支付结果确认中",
                  mask: !0
                }), this.$api.queryorderFromTL(e).then((function(t) {
                  if (1 == t.status) a.sendpaynotify();
                  else {
                    a.isCanClick = !0;
                    var e = t.msg ? t.msg : "取消支付";
                    a.$modalToast(e)
                  }
                }))
              },
              sendpaynotify: function() {
                var a = this,
                  e = {
                    orderId: this.orderData.OrderId,
                    openId: n.globalData.user_openid,
                    gateId: this.orderData.GateId
                  };
                this.$api.sendpaynotify(e).then((function(e) {
                  a.isCanClick = !0, 1 == e.status && (t.redirectTo({
                    url: "/pages/brake-scan-result/index?type=1"
                  }), t.hideLoading())
                }))
              },
              verifyPay: function() {
                this.isCanClick = !0, this.confirmPay()
              }
            }
          };
        a.default = i
      }).call(this, e("df3c").default)
    },
    "26a9": function(t, a, e) {
      "use strict";
      e.d(a, "b", (function() {
        return n
      })), e.d(a, "c", (function() {
        return i
      })), e.d(a, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    6136: function(t, a, e) {
      "use strict";
      var n = e("aedc");
      e.n(n).a
    },
    "963f": function(t, a, e) {
      "use strict";
      a.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    a1d0: function(t, a, e) {
      "use strict";
      (function(t, a) {
        var n = e("47a9");
        e("4aa9"), e("26e8"), n(e("3240"));
        var i = n(e("cf63"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, a(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    aedc: function(t, a, e) {},
    c395: function(t, a, e) {
      "use strict";
      e.r(a);
      var n = e("0341"),
        i = e.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        e.d(a, t, (function() {
          return n[t]
        }))
      }(o);
      a.default = i.a
    },
    cf63: function(t, a, e) {
      "use strict";
      e.r(a);
      var n = e("26a9"),
        i = e("c395");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        e.d(a, t, (function() {
          return i[t]
        }))
      }(o);
      e("6136");
      var r = e("828b"),
        s = e("963f"),
        d = Object(r.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      "function" == typeof s.a && Object(s.a)(d), a.default = d.exports
    }
  },
  [
    ["a1d0", "common/runtime", "common/vendor"]
  ]
]);
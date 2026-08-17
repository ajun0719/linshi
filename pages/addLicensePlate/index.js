(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/addLicensePlate/index"], {
    "0d74": function(e, t, n) {
      "use strict";
      (function(e) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var s = i(n("af34")),
          a = getApp(),
          o = {
            data: function() {
              return {
                isDefault: !1,
                result: [],
                isCityKeyboard: !0,
                numLen: 7,
                idx: 0,
                parkId: "",
                isCanPay: !0,
                orderId: "",
                mode: 0,
                sign: ""
              }
            },
            components: {
              softKeyboard: function() {
                n.e("components/softKeyboard/softKeyboard").then(function() {
                  return resolve(n("5552"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            onReady: function(e) {
              this.softKeyboard = this.selectComponent("#softKeyboard")
            },
            onLoad: function(e) {
              console.log("options", e), e.parkId && (this.parkId = e.parkId), this.mode = e.mode, "2" == this.mode && e.sign && (this.sign = decodeURIComponent(e.sign))
            },
            methods: {
              checkboxChange: function(e) {
                console.log("checkboxChange", e);
                var t = !!e.detail.value.length;
                this.numLen = t ? 8 : 7, 7 === this.result.length && (this.idx = this.numLen - 1, this.isCanPay = !this.isDefault), 8 !== this.result.length || t || (this.result = (0, s.default)(this.result.slice(0, 7)), this.idx = this.numLen - 1), this.isDefault = t
              },
              handleKeyClickFun: function(e) {
                console.log("handleKeyClickFunxx", e);
                var t = e.val,
                  n = t.val;
                t.disabled || this.result.length >= this.numLen || (this.result.push(n), this.isCityKeyboard = !(this.result.length >= 1), this.idx = this.result.length >= this.numLen ? this.numLen - 1 : this.result.length, this.isCanPayChange())
              },
              handleDeleteClickFun: function(e) {
                this.result.pop(), this.isCityKeyboard = !(this.result.length >= 1), this.idx = this.result.length >= this.numLen ? this.numLen - 1 : this.result.length, this.isCanPayChange()
              },
              handleToggleClickFun: function(e) {
                console.log("handleToggleClickFunxx", e);
                var t = e.val;
                this.isCityKeyboard = "ABC" !== t
              },
              isCanPayChange: function() {
                this.isDefault ? 8 == this.result.length ? this.isCanPay = !1 : this.isCanPay = !0 : 7 == this.result.length ? this.isCanPay = !1 : this.isCanPay = !0
              },
              confirmClick: function() {
                "2" == this.mode ? this.useCoupons() : this.getPay()
              },
              getPay: function() {
                for (var t = this, n = "", i = 0; i < this.result.length; i++) n += this.result[i];
                var s = {
                  parkId: this.parkId,
                  openId: a.globalData.user_openid,
                  plateNumber: n
                };
                e.showLoading({
                  title: "发起支付中...",
                  mask: !0
                }), this.$api.getpayorder(s).then((function(n) {
                  if (1 == n.status) {
                    var i = n.data;
                    if (i)
                      if (0 == i.Balance) e.redirectTo({
                        url: "/pages/brake-scan-result/index?type=1"
                      });
                      else {
                        var s = JSON.stringify(i);
                        e.hideLoading(), e.redirectTo({
                          url: "/pages/brake-order-confirm/index?orderData=" + s
                        })
                      }
                  } else if (2 == n.status) {
                    var a = n.data;
                    if (a) {
                      a.errTip = n.msg;
                      var o = JSON.stringify(a);
                      e.hideLoading(), e.redirectTo({
                        url: "/pages/brake-order-confirm/index?orderData=" + o + "&mode=1"
                      })
                    }
                  } else t.$modalToast(n.msg)
                }))
              },
              sendpaynotify: function(t) {
                var n = {
                  orderId: t.OrderId,
                  openId: a.globalData.user_openid,
                  gateId: t.GateId
                };
                this.$api.sendpaynotify(n).then((function(t) {
                  1 == t.status && (e.redirectTo({
                    url: "/pages/brake-scan-result/index?type=1"
                  }), e.hideLoading())
                }))
              },
              useCoupons: function() {
                for (var t = "", n = 0; n < this.result.length; n++) t += this.result[n];
                var i = {
                  openId: a.globalData.user_openid,
                  plateNumber: t,
                  sign: this.sign
                };
                e.showLoading({
                  title: "优惠券使用中",
                  mask: !0
                }), console.log("useCoupons", i), this.$api.useCoupons(i).then((function(t) {
                  1 == t.status && e.redirectTo({
                    url: "/pages/brake-scan-result/index?type=2&resultText=" + t.msg
                  })
                }))
              },
              verifyPay: function() {
                this.confirmPay()
              }
            }
          };
        t.default = o
      }).call(this, n("df3c").default)
    },
    3181: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return s
      })), n.d(t, "c", (function() {
        return a
      })), n.d(t, "a", (function() {
        return i
      }));
      var i = {
          softKeyboard: function() {
            return n.e("components/softKeyboard/softKeyboard").then(n.bind(null, "5552"))
          }
        },
        s = function() {
          this.$createElement;
          this._self._c
        },
        a = []
    },
    "468d": function(e, t, n) {
      "use strict";
      var i = n("4fef");
      n.n(i).a
    },
    "4fef": function(e, t, n) {},
    "5f9f": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("3181"),
        s = n("734b");
      for (var a in s)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return s[e]
        }))
      }(a);
      n("468d");
      var o = n("828b"),
        r = Object(o.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = r.exports
    },
    "734b": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("0d74"),
        s = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      t.default = s.a
    },
    "8c86": function(e, t, n) {
      "use strict";
      (function(e, t) {
        var i = n("47a9");
        n("4aa9"), n("26e8"), i(n("3240"));
        var s = i(n("5f9f"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(s.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["8c86", "common/runtime", "common/vendor"]
  ]
]);
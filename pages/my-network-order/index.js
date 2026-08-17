(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-network-order/index"], {
    "4ad5": function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("7dcc"),
        n = a("ac0e");
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      a("6e69");
      var o = a("828b"),
        r = a("646c"),
        u = Object(o.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      "function" == typeof r.a && Object(r.a)(u), e.default = u.exports
    },
    "61ef": function(t, e, a) {
      "use strict";
      (function(t, e) {
        var i = a("47a9");
        a("4aa9"), a("26e8"), i(a("3240"));
        var n = i(a("4ad5"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "646c": function(t, e, a) {
      "use strict";
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    "6e69": function(t, e, a) {
      "use strict";
      var i = a("8c42");
      a.n(i).a
    },
    "7dcc": function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return n
      })), a.d(e, "c", (function() {
        return s
      })), a.d(e, "a", (function() {
        return i
      }));
      var i = {
          wucTab: function() {
            return a.e("components/wuc-tab/wuc-tab").then(a.bind(null, "726a"))
          }
        },
        n = function() {
          this.$createElement;
          var t = (this._self._c, 0 == this.mealList.length && this.isFinish);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        s = []
    },
    "8c42": function(t, e, a) {},
    ac0e: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("bdde"),
        n = a.n(i);
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      e.default = n.a
    },
    bdde: function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = getApp(),
          i = {
            data: function() {
              return {
                mealList: [],
                currentOrderNum: "",
                payStatus: -1,
                isCanClick: !0,
                tabTxt: ["服务类型"],
                tab: [!0],
                page: 1,
                TabCur: 0,
                tabList: [{
                  key: "-1",
                  name: "全部订单"
                }, {
                  key: "0",
                  name: "待付款"
                }, {
                  key: "1",
                  name: "已付款"
                }],
                isFinish: !1,
                meal_type: "",
                key: "",
                index: "",
                orderId: ""
              }
            },
            onLoad: function(t) {
              this.getMealList()
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onReachBottom: function() {
              this.getMealList()
            },
            methods: {
              refresh: function() {
                this.page = 1, this.mealList = [], this.getMealList()
              },
              getMealList: function(e) {
                this.isFinish = !1;
                var i = this,
                  n = {
                    openId: a.globalData.user_openid,
                    userID: a.globalData.user_userid,
                    page: this.page,
                    rows: 10,
                    payStatus: this.payStatus
                  };
                t.showLoading({
                  title: "加载中...",
                  mask: !0
                }), this.$api.getNetOrderlist(n).then((function(t) {
                  if (1 == t.status) {
                    var e = t.data;
                    e ? (i.mealList = i.mealList.concat(e), i.page += 1, i.isFinish = !0) : 1 == i.page && (i.isFinish = !0, i.mealList = [])
                  }
                }))
              },
              tabChange: function(t, e) {
                this.tabCur = t, this.payStatus = e, this.page = 1, this.mealList = [], this.getMealList()
              },
              confirmPay: function(t) {
                this.orderId = this.mealList[t.currentTarget.dataset.index].OrderId, this.confirmPayReq()
              },
              confirmPayReq: function() {
                var e = this;
                if (this.isCanClick) {
                  this.isCanClick = !1;
                  var i = {
                    appId: "wx83ceea02b48904a9",
                    openId: a.globalData.user_openid,
                    userID: a.globalData.user_userid,
                    orderId: this.orderId,
                    type: 1
                  };
                  t.showLoading({
                    title: "发起支付中...",
                    mask: !0
                  }), this.$api.jsapipayparamfromtl(i).then((function(a) {
                    if (1 == a.status) {
                      var i = a.data;
                      e.payConfirm(i)
                    } else 30001 == a.status ? (e.isCanClick = !0, t.navigateTo({
                      url: "/pages/pay-check/index?costid=" + e.orderId
                    })) : (e.isCanClick = !0, t.showModal({
                      title: "提示",
                      content: a.msg,
                      showCancel: !1
                    }))
                  }))
                }
              },
              payConfirm: function(t) {
                var e = this;
                a.payForOrderConfirm(t).then((function(a) {
                  console.log("payForOrderConfirm", a), e.queryOrder(t.orderId)
                }))
              },
              queryOrder: function(e) {
                var i = this,
                  n = {
                    appId: "wx83ceea02b48904a9",
                    openId: a.globalData.user_openid,
                    userID: a.globalData.user_userid,
                    orderId: e
                  };
                t.hideLoading(), t.showLoading({
                  title: "支付结果确认中",
                  mask: !0
                }), this.$api.queryorderfromtl(n).then((function(e) {
                  if (i.isCanClick = !0, 1 == e.status) i.refresh(), t.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  });
                  else {
                    var a = e.msg;
                    0 == e.status && (a = "支付取消"), i.$modalToast(a)
                  }
                }))
              },
              verifyPay: function() {
                this.isCanClick = !0, this.confirmPayReq()
              },
              itemClick: function(e) {
                t.navigateTo({
                  url: "/pages/my-network-detail/index?orderId=" + this.mealList[e.currentTarget.dataset.postition].OrderId
                })
              }
            }
          };
        e.default = i
      }).call(this, a("df3c").default)
    }
  },
  [
    ["61ef", "common/runtime", "common/vendor"]
  ]
]);
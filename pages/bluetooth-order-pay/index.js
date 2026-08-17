(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/bluetooth-order-pay/index"], {
    "1c58": function(e, t, a) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = a("c6ff"),
          n = getApp(),
          s = {
            data: function() {
              return {
                orderData: null,
                endtime: "",
                isFace: "0",
                isCanClick: !0,
                personid: "",
                costtype: "",
                zengsongremark: "",
                islaqi: "",
                costsettype: ""
              }
            },
            onLoad: function(t) {
              if (console.log("参数" + JSON.stringify(t)), t.orderData) {
                var a = JSON.parse(t.orderData);
                this.orderData = a, this.isFace = t.isFace, console.log("名称" + t.CostSetName);
                var s = "";
                switch (this.isFace) {
                  case "0":
                    s = "确认支付-蓝牙门禁";
                    break;
                  case "1":
                    s = "确认支付-人脸门禁";
                    break;
                  case "2":
                    s = void 0 !== t.CostSetName ? "确认支付-" + t.CostSetName : "确认支付-套费缴纳";
                    break;
                  case "3":
                    s = "确认支付-外部门禁";
                    break;
                  case "4":
                    s = "确认支付-KS门禁";
                    break;
                  case "5":
                    s = "确认支付-YZ门禁";
                    break;
                  case "6":
                    s = "确认支付-蓝牙门禁B";
                    break;
                  case "7":
                    s = "确认支付-人脸门禁B"
                }
                e.setNavigationBarTitle({
                  title: s
                }), a.endtime && (this.endtime = i.formatTimeTwo(a.endtime)), n.refresh()
              }
              t.zengsongremark && (this.zengsongremark = t.zengsongremark), this.personid = t.personid, this.islaqi = t.islaqi, this.costsettype = t.costsettype, t.costtype && (this.costtype = t.costtype, console.log("栋费" + this.costtype)), console.log("costsettype", this.costsettype), console.log("costtype", this.costtype)
            },
            onShareAppMessage: function() {
              return console.log(this.personid), {
                title: "发送给住户支付",
                path: "helper-package/registerDetail?personid=" + this.personid + "&tabKey=101"
              }
            },
            methods: {
              dingyue: function() {
                var t = this;
                e.requestSubscribeMessage({
                  tmplIds: ["JSUatZAocufyVTVY5vxV6GEk16RnWqdRAY0UQcZnCKg"],
                  success: function(a) {
                    e.showLoading({
                      title: "加载中...",
                      mask: !0
                    }), console.log("订阅" + JSON.stringify(a));
                    var i = [];
                    for (var n in a) "accept" == a[n] && "JSUatZAocufyVTVY5vxV6GEk16RnWqdRAY0UQcZnCKg" == n ? i.push(100) : "accept" == a[n] && "jyXwkgZRitfr1A0rROJRznC48na2YoY80zLY1LwT5Ug" == n ? i.push(101) : "reject" == a[n] && console.log("订阅失败" + a[n]), console.log("通知" + JSON.stringify(i));
                    if (i.length > 0) {
                      var s = {
                        unionid_Encrypt: e.getStorageSync("unionid"),
                        userID: e.getStorageSync("userID"),
                        sublist: i
                      };
                      t.$api.AddMsgSub(s, 1).then((function(t) {
                        e.hideLoading(), e.navigateBack({
                          delta: 1
                        })
                      })).catch((function() {
                        e.navigateBack({
                          delta: 1
                        }), e.hideLoading()
                      }))
                    } else e.hideLoading(), e.navigateBack({
                      delta: 1
                    })
                  }
                })
              },
              confirmPay: function() {
                var t = this;
                if (this.isCanClick) {
                  this.isCanClick = !1;
                  var a = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID"),
                    costId: this.orderData.costid
                  };
                  e.showLoading({
                    title: "发起支付中...",
                    mask: !0
                  });
                  var i = this.getInterfacePrefix() + "ToPay";
                  this.$api.toPay(i, a).then((function(a) {
                    if (1 == a.status) {
                      var i = a.data;
                      t.payConfirm(i.payInfo, i.orderNum)
                    } else 30001 == a.status ? (t.isCanClick = !0, e.navigateTo({
                      url: "/pages/pay-check/index?costid=" + t.orderData.costid
                    })) : (t.isCanClick = !0, e.hideLoading())
                  }))
                }
              },
              payConfirm: function(e, t) {
                var a = this;
                n.payForOrderConfirm(e).then((function(e) {
                  console.log("正在支付"), a.queryOrder(t)
                }))
              },
              queryOrder: function(t) {
                var a = this,
                  i = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid,
                    ordernum: t,
                    costId: this.orderData.costid
                  };
                e.hideLoading(), e.showLoading({
                  title: "支付结果确认中",
                  mask: !0
                });
                var s = this.getInterfacePrefix() + "QueryOrder";
                this.$api.queryOrder(s, i).then((function(t) {
                  if (e.hideLoading(), a.isCanClick = !0, 1 == t.status) console.log("查询订单"), "2" == a.isFace ? (e.navigateBack({
                    delta: 1
                  }), n.globalData.isShowHfSuc = 1, n.globalData.hfText = t.msg, n.refresh(), n.refresh2()) : (e.geetStorageSync("DY"), a.$modalToast(t.msg, (function(t) {
                    e.getStorageSync("DY") ? a.dingyue() : e.navigateBack({
                      delta: 1
                    })
                  })), n.refresh());
                  else {
                    var i = t.msg;
                    0 == t.status && (i = "支付取消"), a.$modalToast(i, (function(t) {
                      e.navigateBack({
                        delta: 1
                      })
                    }))
                  }
                }))
              },
              verifyPay: function() {
                this.isCanClick = !0, this.confirmPay()
              },
              getInterfacePrefix: function() {
                var e = "";
                switch (this.isFace) {
                  case "0":
                    e = "/APIToICCard/";
                    break;
                  case "1":
                    e = "/APIToICface/";
                    break;
                  case "2":
                    e = "/APIToCostToSuite/";
                    break;
                  case "3":
                    e = "/APIToICOther/";
                    break;
                  case "4":
                    e = "/apitoksscard/";
                    break;
                  case "5":
                    e = "/apitoyzcard/";
                    break;
                  case "6":
                    e = "/apitoyzblecard/";
                    break;
                  case "7":
                    e = "/APIToFace2Card/"
                }
                return e
              }
            }
          };
        t.default = s
      }).call(this, a("df3c").default)
    },
    "235a": function(e, t, a) {
      "use strict";
      (function(e, t) {
        var i = a("47a9");
        a("4aa9"), a("26e8"), i(a("3240"));
        var n = i(a("32ca"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "32ca": function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a("c9d5"),
        n = a("dbeb");
      for (var s in n)["default"].indexOf(s) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(s);
      a("fd6a");
      var o = a("828b"),
        r = a("730c"),
        c = Object(o.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      "function" == typeof r.a && Object(r.a)(c), t.default = c.exports
    },
    "730c": function(e, t, a) {
      "use strict";
      t.a = function(e) {
        e.options.wxsCallMethods || (e.options.wxsCallMethods = [])
      }
    },
    c9d5: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return i
      })), a.d(t, "c", (function() {
        return n
      })), a.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        n = []
    },
    d5e7: function(e, t, a) {},
    dbeb: function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a("1c58"),
        n = a.n(i);
      for (var s in i)["default"].indexOf(s) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(s);
      t.default = n.a
    },
    fd6a: function(e, t, a) {
      "use strict";
      var i = a("d5e7");
      a.n(i).a
    }
  },
  [
    ["235a", "common/runtime", "common/vendor"]
  ]
]);
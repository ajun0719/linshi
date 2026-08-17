(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/bluetooth-order-pay/huIndex"], {
    "0069": function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return n
      })), a.d(e, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        n = []
    },
    "080a": function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = a("c6ff"),
          n = getApp(),
          o = {
            data: function() {
              return {
                orderData: null,
                endtime: "",
                isFace: "0",
                isCanClick: !0,
                costtype: "",
                costid: "",
                msg: "",
                status: "",
                buttonflag: "0"
              }
            },
            onLoad: function(e) {
              if (console.log("options.buttonflag" + JSON.stringify(e)), e.costid) {
                this.costid = e.costid, this.isFace = e.isFace, e.buttonflag && (this.buttonflag = e.buttonflag), console.log("buttonflag" + this.buttonflag);
                var a = "";
                switch (this.isFace) {
                  case "0":
                    a = "确认支付-蓝牙门禁";
                    break;
                  case "1":
                    a = "确认支付-人脸门禁";
                    break;
                  case "2":
                    a = void 0 !== e.CostSetName ? "确认支付-" + e.CostSetName : "确认支付-户费缴纳";
                    break;
                  case "3":
                    a = "确认支付-外部门禁";
                    break;
                  case "4":
                    a = "确认支付-KS门禁";
                    break;
                  case "5":
                    a = "确认支付-YZ门禁";
                    break;
                  case "6":
                    a = "确认支付-蓝牙门禁B";
                    break;
                  case "7":
                    a = "确认支付-人脸门禁B"
                }
                t.setNavigationBarTitle({
                  title: a
                }), e.endtime && (this.endtime = i.formatTimeTwo(e.endtime))
              }
              e.costtype && (this.costtype = e.costtype)
            },
            onShow: function() {
              this.costid && this.getdetail()
            },
            onShareAppMessage: function() {
              return console.log("出发没"), {
                title: "发送给住户支付",
                url: "/pages/bluetooth-order-pay/huIndex?costid=" + this.costid + "&isFace=2&CostSetName=" + this.CostSetName + "&costtype=" + this.costtype + "&buttonflag=1"
              }
            },
            methods: {
              getdetail: function() {
                var e = this,
                  a = {
                    unionid_Encrypt: t.getStorageSync("unionid"),
                    userID: t.getStorageSync("userID"),
                    costId: this.costid
                  };
                t.showLoading({
                  title: "加载中",
                  mask: !0
                }), console.log("请求参数" + JSON.stringify(a)), this.$api.GetSinglebyCostIDToShare(a).then((function(a) {
                  console.log("返回参数" + JSON.stringify(a)), 1 == a.status ? e.orderData = a.data : 601 == a.status && (e.orderData = a.data, e.msg = a.msg, e.status = a.status), t.hideLoading()
                }))
              },
              dingyue: function() {
                var e = this;
                t.requestSubscribeMessage({
                  tmplIds: ["JSUatZAocufyVTVY5vxV6GEk16RnWqdRAY0UQcZnCKg"],
                  success: function(a) {
                    t.showLoading({
                      title: "加载中...",
                      mask: !0
                    }), console.log("订阅" + JSON.stringify(a));
                    var i = [];
                    for (var n in a) "accept" == a[n] && "JSUatZAocufyVTVY5vxV6GEk16RnWqdRAY0UQcZnCKg" == n ? i.push(100) : "accept" == a[n] && "jyXwkgZRitfr1A0rROJRznC48na2YoY80zLY1LwT5Ug" == n ? i.push(101) : "reject" == a[n] && console.log("订阅失败" + a[n]), console.log("通知" + JSON.stringify(i));
                    if (i.length > 0) {
                      var o = {
                        unionid_Encrypt: t.getStorageSync("unionid"),
                        userID: t.getStorageSync("userID"),
                        sublist: i
                      };
                      e.$api.AddMsgSub(o, 1).then((function(e) {
                        t.hideLoading(), t.navigateBack({
                          delta: 1
                        })
                      })).catch((function() {
                        t.navigateBack({
                          delta: 1
                        }), t.hideLoading()
                      }))
                    } else t.hideLoading(), t.navigateBack({
                      delta: 1
                    })
                  }
                })
              },
              confirmPay: function() {
                var e = this;
                if (this.isCanClick) {
                  this.isCanClick = !1;
                  var a = {
                    unionid_Encrypt: t.getStorageSync("unionid"),
                    userID: t.getStorageSync("userID"),
                    costId: this.costid
                  };
                  t.showLoading({
                    title: "发起支付中...",
                    mask: !0
                  });
                  var i = this.getInterfacePrefix() + "ToPay";
                  this.$api.toPay(i, a).then((function(a) {
                    if (1 == a.status) {
                      var i = a.data;
                      e.payConfirm(i.payInfo, i.orderNum)
                    } else 30001 == a.status ? (e.isCanClick = !0, t.navigateTo({
                      url: "/pages/pay-check/index?costid=" + e.costid
                    })) : (e.isCanClick = !0, t.hideLoading())
                  }))
                }
              },
              payConfirm: function(t, e) {
                var a = this;
                n.payForOrderConfirm(t).then((function(t) {
                  console.log("正在支付"), a.queryOrder(e)
                }))
              },
              queryOrder: function(e) {
                var a = this,
                  i = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid,
                    ordernum: e,
                    costId: this.costid
                  };
                t.hideLoading(), t.showLoading({
                  title: "支付结果确认中",
                  mask: !0
                });
                var o = this.getInterfacePrefix() + "QueryOrder";
                console.log("地址" + o), this.$api.queryOrder(o, i).then((function(e) {
                  if (t.hideLoading(), a.isCanClick = !0, 1 == e.status) console.log("查询订单"), "2" == a.isFace ? (t.navigateBack({
                    delta: 1
                  }), n.globalData.isShowHfSuc = 1, n.globalData.hfText = e.msg, n.refresh(), n.refresh2()) : (t.geetStorageSync("DY"), a.$modalToast(e.msg, (function(e) {
                    t.getStorageSync("DY") ? a.dingyue() : t.navigateBack({
                      delta: 1
                    })
                  })), n.refresh());
                  else {
                    var i = e.msg;
                    0 == e.status && (i = "支付取消"), a.$modalToast(i, (function(e) {
                      t.navigateBack({
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
                var t = "";
                switch (this.isFace) {
                  case "0":
                    t = "/APIToICCard/";
                    break;
                  case "1":
                    t = "/APIToICface/";
                    break;
                  case "2":
                    t = "/APIToCostToSuite/";
                    break;
                  case "3":
                    t = "/APIToICOther/";
                    break;
                  case "4":
                    t = "/apitoksscard/";
                    break;
                  case "5":
                    t = "/apitoyzcard/";
                    break;
                  case "6":
                    t = "/apitoyzblecard/";
                    break;
                  case "7":
                    t = "/APIToFace2Card/"
                }
                return t
              }
            }
          };
        e.default = o
      }).call(this, a("df3c").default)
    },
    2774: function(t, e, a) {
      "use strict";
      (function(t, e) {
        var i = a("47a9");
        a("4aa9"), a("26e8"), i(a("3240"));
        var n = i(a("5449"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "4a2c": function(t, e, a) {
      "use strict";
      var i = a("dcc2");
      a.n(i).a
    },
    5449: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("0069"),
        n = a("e039");
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(o);
      a("4a2c");
      var s = a("828b"),
        c = a("bfd0"),
        r = Object(s.a)(n.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      "function" == typeof c.a && Object(c.a)(r), e.default = r.exports
    },
    bfd0: function(t, e, a) {
      "use strict";
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    dcc2: function(t, e, a) {},
    e039: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("080a"),
        n = a.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      e.default = n.a
    }
  },
  [
    ["2774", "common/runtime", "common/vendor"]
  ]
]);
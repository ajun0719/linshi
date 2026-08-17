(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/network-confirm-input/index"], {
    "0b6d": function(e, a, t) {
      "use strict";
      (function(e) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var r = getApp(),
          i = {
            data: function() {
              return {
                mealId: "",
                isCardImgOneAdd: 0,
                isCardImgTwoAdd: 0,
                buildArray: [],
                buildObjArray: [],
                buildIndex: -1,
                buildId: "",
                buildText: "",
                areaArray: [],
                areaObjArray: [],
                areaIndex: -1,
                areaId: "",
                addOrderParms: {},
                cardImgOne: "",
                cardImgTwo: "",
                ispId: "",
                isCanClick: !0,
                orderId: "",
                expander: "",
                list: [],
                value: "",
                loading: !0
              }
            },
            components: {
              lbPicker: function() {
                t.e("components/lb-picker/index").then(function() {
                  return resolve(t("c62d"))
                }.bind(null, t)).catch(t.oe)
              }
            },
            onLoad: function(e) {
              e.mealId && e.ispId && (this.mealId = e.mealId, this.ispId = e.ispId), e.expander && (this.expander = e.expander), this.getSelectedData(1)
            },
            methods: {
              addressAllInput: function(e) {
                this.addOrderParms.addressAll = e.detail.value
              },
              personNameInput: function(e) {
                this.addOrderParms.personName = e.detail.value
              },
              personPhoneInput: function(e) {
                this.addOrderParms.personPhone = e.detail.value
              },
              personCardNumInput: function(e) {
                this.addOrderParms.personCardNum = e.detail.value
              },
              remarkInput: function(e) {
                this.addOrderParms.remark = e.detail.value
              },
              areaPicker: function(e) {
                this.areaIndex != e.detail.value && (this.areaIndex = e.detail.value, this.areaId = this.areaObjArray[e.detail.value].id, this.buildId = "", this.buildIndex = -1, this.buildArray = [])
              },
              buildPicker: function(e) {
                this.buildIndex != e.detail.value && (this.buildIndex = e.detail.value, this.buildId = this.buildObjArray[e.detail.value].id)
              },
              getSelectedData: function(e) {
                var a = this;
                if (1 == e) {
                  var t = {
                    packageId: this.mealId,
                    hasAll: 0
                  };
                  this.$api.getCommunitylist(t).then((function(t) {
                    if (1 == t.status && 1 == e) {
                      for (var r = 0; r < t.data.length; r++) a.areaArray.push(t.data[r].text);
                      a.areaObjArray = t.data
                    }
                  }))
                }
                if (2 == e) {
                  var r = {
                    communityId: this.areaId,
                    hasAll: 0
                  };
                  this.$api.getNumberlist(r).then((function(e) {
                    if (1 == e.status) {
                      for (var t = 0; t < e.data.length; t++) a.buildArray.push(e.data[t].text);
                      a.buildObjArray = e.data
                    }
                  }))
                }
              },
              getNumber: function() {
                var a = this,
                  t = {
                    communityId: this.areaId,
                    hasAll: 0,
                    numberName: this.buildText
                  };
                e.showLoading({
                  title: "加载中"
                }), this.loading = !0, this.$api.getNumberlist(t).then((function(t) {
                  if (e.hideLoading(), 1 == t.status) {
                    for (var r = [], i = 0; i < t.data.length; i++) r.push({
                      label: t.data[i].text,
                      value: t.data[i].id
                    });
                    a.list = r, a.loading = !1
                  }
                }))
              },
              save: function() {
                var a = this,
                  t = this;
                if (this.isCanClick) {
                  this.isCanClick = !1;
                  var i = null;
                  if (this.areaId && -1 != this.areaId ? this.buildId && -1 != this.buildId ? this.addOrderParms.addressAll ? this.addOrderParms.personName ? this.addOrderParms.personPhone ? this.addOrderParms.personCardNum ? this.cardImgOne ? this.cardImgTwo || (i = "身份证反面照不能为空") : i = "身份证正面照不能为空" : i = "请输入身份证号码" : i = "请输入用户手机" : i = "请输入用户姓名" : i = "请输入详细地址" : i = "请点击搜索选择楼栋地址" : i = "请输入选择区域", null != i) return this.isCanClick = !0, void t.$modalToast(i);
                  e.showLoading({
                    title: "确认下单中...",
                    mask: !0
                  });
                  var d = {
                    openId: r.globalData.user_openid,
                    userID: r.globalData.user_userid,
                    packageId: t.mealId,
                    operatorId: t.ispId,
                    communityId: t.areaId,
                    numberId: t.buildId,
                    allAddress: t.addOrderParms.addressAll,
                    userName: t.addOrderParms.personName,
                    mobile: t.addOrderParms.personPhone,
                    idCard: t.addOrderParms.personCardNum,
                    remark: t.addOrderParms.remark,
                    expander: this.expander
                  };
                  this.$api.createNetorder(d).then((function(r) {
                    if (1 == r.status) {
                      var i = r.data;
                      t.orderId = i, i && t.uploadImg(1, !1)
                    } else if (2 == r.status) {
                      var d = r.data;
                      t.orderId = d, r.data && t.uploadImg(1, !0)
                    } else e.showModal({
                      title: "提示",
                      content: r.msg,
                      showCancel: !1
                    }), a.isCanClick = !0
                  }))
                }
              },
              uploadImg: function(a, t) {
                var i = this,
                  d = null;
                if (1 == a ? d = i.cardImgOne : 2 == a && (d = i.cardImgTwo), "" != d) {
                  var n = {
                    unionid_Encrypt: r.globalData.user_unionid,
                    userID: r.globalData.user_userid,
                    upLoadType: 70,
                    keyid: i.orderId
                  };
                  this.$api.uploadImgNet("/ApiToImage/UpLoadImgurl", [d], n).then((function(r) {
                    var d = JSON.parse(r[0]);
                    1 == d.status ? 1 == a ? i.uploadImg(2, t) : 2 == a && (t ? e.showModal({
                      title: "提示",
                      content: "下单成功",
                      showCancel: !1,
                      success: function(a) {
                        e.redirectTo({
                          url: "/pages/my-network-order/index"
                        })
                      }
                    }) : i.confirmPay()) : (i.isCanClick = !0, i.$modalToast(d.msg))
                  }))
                } else i.$modalToast("图片不能为空")
              },
              chooseCardImgOne: function() {
                var a = this;
                e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["camera", "album"],
                  success: function(e) {
                    var t = e.tempFilePaths[0];
                    a.isCardImgOneAdd = 1, a.cardImgOne = t
                  }
                })
              },
              chooseCardImgTwo: function() {
                var a = this;
                e.chooseImage({
                  count: 1,
                  sizeType: ["compressed"],
                  sourceType: ["camera", "album"],
                  success: function(e) {
                    a.cardImgTwo = e.tempFilePaths[0], a.isCardImgTwoAdd = 1
                  }
                })
              },
              previewCardImgOne: function(a) {
                e.previewImage({
                  current: 0,
                  urls: [this.cardImgOne]
                })
              },
              previewCardImgTwo: function(a) {
                e.previewImage({
                  current: 0,
                  urls: [this.cardImgTwo]
                })
              },
              deleteFun: function(e) {
                this.cardImgOne = "", this.isCardImgOneAdd = 0
              },
              deleteIcCard: function(e) {
                this.cardImgTwo = "", this.isCardImgTwoAdd = 0
              },
              numberChange: function(e) {
                this.buildId = "", this.buildText = e.detail.value
              },
              confirmPay: function() {
                e.showLoading({
                  title: "发起支付中...",
                  mask: !0
                });
                var a = this,
                  t = {
                    appId: "wx83ceea02b48904a9",
                    openId: r.globalData.user_openid,
                    userID: r.globalData.user_userid,
                    orderId: a.orderId,
                    type: 1
                  };
                this.$api.jsapipayparamfromtl(t).then((function(t) {
                  if (1 == t.status) {
                    var r = t.data;
                    a.payConfirm(r)
                  } else 30001 == t.status ? (a.isCanClick = !0, e.navigateTo({
                    url: "/pages/pay-check/index?costid=" + a.orderId
                  })) : (a.isCanClick = !0, e.showModal({
                    title: "提示",
                    content: t.msg,
                    showCancel: !1
                  }))
                }))
              },
              payConfirm: function(e) {
                var a = this;
                r.payForOrderConfirm(e).then((function(t) {
                  a.queryOrder(e.orderId)
                }))
              },
              queryOrder: function(a) {
                var t = this,
                  i = {
                    appId: "wx83ceea02b48904a9",
                    openId: r.globalData.user_openid,
                    userID: r.globalData.user_userid,
                    orderId: a
                  };
                e.showLoading({
                  title: "支付结果确认中",
                  mask: !0
                }), this.$api.queryorderfromtl(i).then((function(a) {
                  if (1 == a.status) t.isCanClick = !0, e.showModal({
                    title: "提示",
                    content: a.msg,
                    showCancel: !1,
                    success: function(a) {
                      e.redirectTo({
                        url: "/pages/my-network-order/index"
                      })
                    }
                  });
                  else {
                    t.isCanClick = !0;
                    var r = a.msg;
                    0 == a.status && (r = "支付取消"), e.showModal({
                      title: "提示",
                      content: r,
                      showCancel: !1,
                      success: function(a) {
                        e.redirectTo({
                          url: "/pages/my-network-order/index"
                        })
                      }
                    })
                  }
                }))
              },
              verifyPay: function() {
                this.isCanClick = !1, this.confirmPay()
              },
              searchClick: function(e) {
                this.$refs[e].show()
              },
              handleChange: function(e) {},
              handleConfirm: function(e) {
                this.buildText = e.item.label, this.buildId = e.item.value
              },
              handleCancel: function(e) {}
            }
          };
        a.default = i
      }).call(this, t("df3c").default)
    },
    "56db": function(e, a, t) {
      "use strict";
      t.r(a);
      var r = t("0b6d"),
        i = t.n(r);
      for (var d in r)["default"].indexOf(d) < 0 && function(e) {
        t.d(a, e, (function() {
          return r[e]
        }))
      }(d);
      a.default = i.a
    },
    "59f0": function(e, a, t) {
      "use strict";
      var r = t("9de9");
      t.n(r).a
    },
    "9de9": function(e, a, t) {},
    "9fa3": function(e, a, t) {
      "use strict";
      t.r(a);
      var r = t("e761"),
        i = t("56db");
      for (var d in i)["default"].indexOf(d) < 0 && function(e) {
        t.d(a, e, (function() {
          return i[e]
        }))
      }(d);
      t("59f0");
      var n = t("828b"),
        s = Object(n.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      a.default = s.exports
    },
    e1f54: function(e, a, t) {
      "use strict";
      (function(e, a) {
        var r = t("47a9");
        t("4aa9"), t("26e8"), r(t("3240"));
        var i = r(t("9fa3"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, a(i.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    e761: function(e, a, t) {
      "use strict";
      t.d(a, "b", (function() {
        return r
      })), t.d(a, "c", (function() {
        return i
      })), t.d(a, "a", (function() {}));
      var r = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    }
  },
  [
    ["e1f54", "common/runtime", "common/vendor"]
  ]
]);
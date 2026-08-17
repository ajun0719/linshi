(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-promo-code/index"], {
    "078e": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = getApp(),
          o = {
            data: function() {
              return {
                mypromocodeImg: null,
                reGetCode: !0,
                proofData: {},
                userInfo: "",
                indicatorDots: !1,
                autoplay: !1,
                interval: 2e3,
                duration: 500,
                circular: !0,
                height: 0,
                showFlag: !1,
                animationData: "",
                jiantouAnimation: "",
                isNotYet: !1,
                current: 0,
                arrowFlag: !1,
                VoucherList: []
              }
            },
            onLoad: function(t) {
              this.getHeight(), this.getMyQrCode(), this.userInfo = getApp().globalData.userInfo, this.getHeight()
            },
            onReady: function() {},
            onShow: function() {},
            methods: {
              onSlider: function(t) {
                this.current = t.detail.current
              },
              onLeft: function() {
                var t = this.VoucherList.length - 1,
                  e = this.current;
                this.current = e - 1 >= 0 ? e - 1 : t
              },
              onRight: function() {
                var t = this.VoucherList.length - 1,
                  e = this.current;
                e < t ? this.current = e + 1 : e == t && (this.current = 0)
              },
              getHeight: function() {
                var e = this;
                t.createSelectorQuery().select(".main-view").boundingClientRect((function(t) {
                  e.height = t.height + "px"
                })).exec()
              },
              getMyQrCode: function() {
                var e = this,
                  o = this,
                  i = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid
                  };
                t.showLoading({
                  title: "加载中",
                  mask: !0
                }), this.$api.getMyQrCode(i).then((function(t) {
                  if (1 == t.status) {
                    if (t.data) {
                      for (var n = t.data.personlist, i = 0; i < n.length; i++) n[i].qrcode = "data:image/png;base64," + t.data.qrcode;
                      e.VoucherList = n, 0 == e.VoucherList.length ? (e.isNotYet = !0, e.showFlag = !1) : e.VoucherList.length
                    }
                  } else 40001 == t.status ? o.reGetCode ? (o.getMyQrCode(), o.reGetCode = !1) : o.$modalToast("获取二维码失败") : o.$modalToast(t.msg)
                }))
              },
              openConfirm: function() {
                var e = this;
                t.showModal({
                  content: "检测到您没打开丰享岛的保存图片视频权限，是否去设置打开？",
                  confirmText: "确认",
                  cancelText: "取消",
                  success: function(n) {
                    console.log(n), n.confirm && t.openSetting({
                      success: function(t) {
                        e.downLoadImg()
                      }
                    })
                  }
                })
              },
              preView: function() {
                t.previewImage({
                  count: 1,
                  urls: [this.proofData.qrcode]
                })
              }
            }
          };
        e.default = o
      }).call(this, n("df3c").default)
    },
    7944: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("078e"),
        i = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(r);
      e.default = i.a
    },
    9797: function(t, e, n) {
      "use strict";
      var o = n("e7eb");
      n.n(o).a
    },
    acc0: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var o = n("47a9");
        n("4aa9"), n("26e8"), o(n("3240"));
        var i = o(n("ba8a"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    ba8a: function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("f367"),
        i = n("7944");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      n("9797");
      var a = n("828b"),
        u = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = u.exports
    },
    e7eb: function(t, e, n) {},
    f367: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {}));
      var o = function() {
          var t = this,
            e = (t.$createElement, t._self._c, t.VoucherList.length),
            n = t.VoucherList.length,
            o = t.VoucherList.length,
            i = o > 0 ? t.__map(t.VoucherList, (function(e, n) {
              return {
                $orig: t.__get_orig(e),
                g3: t.VoucherList.length
              }
            })) : null,
            r = o > 0 ? null : 0 == t.VoucherList.length && t.isNotYet;
          t.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: n,
              g2: o,
              l0: i,
              g4: r
            }
          })
        },
        i = []
    }
  },
  [
    ["acc0", "common/runtime", "common/vendor"]
  ]
]);
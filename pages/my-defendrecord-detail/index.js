(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-defendrecord-detail/index"], {
    "194b": function(e, t, a) {},
    "3f25": function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("92d4"),
        n = a.n(r);
      for (var i in r)["default"].indexOf(i) < 0 && function(e) {
        a.d(t, e, (function() {
          return r[e]
        }))
      }(i);
      t.default = n.a
    },
    "3f57": function(e, t, a) {
      "use strict";
      t.a = function(e) {
        e.options.wxsCallMethods || (e.options.wxsCallMethods = [])
      }
    },
    "92d4": function(e, t, a) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = getApp(),
          r = {
            data: function() {
              return {
                recordOrderDetailData: {},
                tagsData: [],
                contactRoles: [],
                accessBarrierTags: [],
                accessBarrierImages: [],
                feedBackImage: [],
                disEdit: !0,
                orderStatusText: "",
                handleType: 0,
                isgzh: 0,
                recordid: "",
                isHandelWorker: !1,
                chooseImageCount: 9,
                feedbackRemark: "",
                isEdit: "",
                isAccImgAdd: !1,
                isfeedBackImgAdd: ""
              }
            },
            onLoad: function(e) {
              this.isgzh = e.isgzh, this.recordid = e.recordid, this.getRecordByPoser()
            },
            onUnload: function() {
              1 == this.isgzh && e.switchTab({
                url: "../home/index"
              })
            },
            onReady: function() {},
            onShow: function() {},
            methods: {
              feedbackRemarkInput: function(e) {
                this.feedbackRemark = e.detail.value
              },
              getRecordByPoser: function() {
                var t = this,
                  r = {
                    unionid_Encrypt: a.globalData.user_unionid,
                    userID: a.globalData.user_userid,
                    recordid: this.recordid
                  };
                this.$api.getRecordByStaff(r).then((function(a) {
                  if (1 == a.status) {
                    var r = a.data;
                    if (r) {
                      var n = "";
                      1 == r.OrderStatus ? n = "已完成" : 2 == r.OrderStatus ? n = "正在处理" : 3 == r.OrderStatus ? n = "未接单" : 4 == r.OrderStatus && (n = "已取消"), t.recordOrderDetailData = r, t.orderStatusText = n, t.isHandelWorker = 2 == r.OrderStatus, t.isEdit = 2 != r.OrderStatus, t.feedbackRemark = r.FeedbackRemark, 3 == r.OrderStatus ? t.handleOrderReq(2) : (t.getamSelectedData("MJWHRecord_Tags"), t.getamSelectedData("MJWHRecord_ContactRole"), t.getImgList(10003), 1 == r.OrderStatus && t.getImgList(10005))
                    } else e.showModal({
                      title: "提示",
                      content: a.msg,
                      showCancel: !1
                    })
                  }
                }))
              },
              getamSelectedData: function(e) {
                var t = this,
                  r = {
                    unionid_Encrypt: a.globalData.user_unionid,
                    userID: a.globalData.user_userid,
                    dicName: e
                  };
                this.$api.getDicList(r).then((function(a) {
                  if (1 == a.status)
                    if ("MJWHRecord_Tags" == e)
                      for (var r = t.recordOrderDetailData.Tags.split("|"), n = 0; n < a.data.length; n++) {
                        for (var i = {
                            text: a.data[n].text,
                            checked: !1
                          }, o = 0; o < r.length; o++) i.text == r[o] && (i.checked = !0, t.tagsData.push(r[o]));
                        t.accessBarrierTags.push(i)
                      } else if ("MJWHRecord_ContactRole" == e)
                        for (n = 0; n < a.data.length; n++) {
                          var d = {
                            id: a.data[n].id,
                            text: a.data[n].text,
                            checked: !1
                          };
                          t.recordOrderDetailData.ContactRole == a.data[n].id && (d.checked = !0), t.contactRoles.push(d)
                        }
                }))
              },
              handleOrderReq: function(t) {
                var r = this;
                1 == t && e.showLoading({
                  title: "处理中",
                  mask: !0
                });
                var n = {
                  unionid_Encrypt: a.globalData.user_unionid,
                  userID: a.globalData.user_userid,
                  status: t,
                  recordid: this.recordid,
                  feedbackRemark: this.feedbackRemark
                };
                this.$api.upReStatusByStaff(n).then((function(e) {
                  1 == e.status && (1 == t ? r.uploadImg() : (a.refresh(), r.getRecordByPoser()))
                }))
              },
              getImgList: function(e) {
                var t = this,
                  r = {
                    unionid_Encrypt: a.globalData.user_unionid,
                    userID: a.globalData.user_userid,
                    upLoadType: e,
                    keyid: this.recordOrderDetailData.MJWHRecordID
                  };
                getApp().globalData.officalIp, this.$api.getImgList(r).then((function(a) {
                  if (1 == a.status)
                    if (10003 == e) {
                      for (var r = 0; r < a.data.length; r++) t.accessBarrierImages.push(a.data[r].ImgPath);
                      t.isAccImgAdd = !0
                    } else if (10005 == e) {
                    for (r = 0; r < a.data.length; r++) t.feedBackImage.push(a.data[r].ImgPath);
                    t.isfeedBackImgAdd = 1 == t.recordOrderDetailData.OrderStatus
                  }
                }))
              },
              uploadImg: function() {
                var t, r = this;
                if (0 == (t = this.feedBackImage).length) return r.$toast("操作成功"), a.refresh(), void setTimeout((function() {
                  e.navigateBack({
                    delta: 1
                  })
                }), 200);
                for (var n = [], i = 0; i < t.length; i++) n[i] = new Promise((function(n, o) {
                  e.uploadFile({
                    url: getApp().globalData.officalIp + "/ApiToImage/UpLoadImgurl",
                    filePath: t[i],
                    name: "file",
                    header: {
                      token: a.globalData.fxd_token
                    },
                    formData: {
                      unionid_Encrypt: a.globalData.user_unionid,
                      userID: a.globalData.user_userid,
                      upLoadType: 10005,
                      keyid: r.recordid
                    },
                    success: function(e) {
                      n(e)
                    },
                    fail: function(e) {}
                  })
                }));
                Promise.all(n).then((function(t) {
                  r.$toast("操作成功"), a.refresh(), setTimeout((function() {
                    e.navigateBack({
                      delta: 1
                    })
                  }), 200)
                }))
              },
              upFeedBackImg: function() {
                var t = this;
                e.chooseImage({
                  count: this.chooseImageCount,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(e) {
                    var a = e.tempFilePaths,
                      r = t.feedBackImage.concat(a);
                    t.chooseImageCount = 9 - r.length, t.feedBackImage = fblsit, t.isfeedBackImgAdd = !(r.length < 9)
                  }
                })
              },
              previewImage: function(t) {
                var a = t.target.dataset.src;
                e.previewImage({
                  current: a,
                  urls: this.accessBarrierImages
                })
              },
              previewFbImage: function(t) {
                var a = t.target.dataset.src;
                e.previewImage({
                  current: a,
                  urls: this.feedBackImage
                })
              },
              deleteFun: function(e) {
                var t = e.currentTarget.dataset.index;
                this.feedBackImage.splice(t, 1), this.chooseImageCount = this.chooseImageCount - 1, this.isfeedBackImgAdd = !1
              },
              handleOrderSuccess: function() {
                var t = this;
                e.showModal({
                  title: "提示",
                  content: "是否已经处理完成？",
                  showCancel: !0,
                  success: function(e) {
                    e.confirm && t.handleOrderReq(1)
                  }
                })
              },
              makeWorkerPhone: function() {
                this.recordOrderDetailData.UserMob && this.makePhone(this.recordOrderDetailData.UserMob)
              },
              makeContactPhone: function() {
                this.recordOrderDetailData.ContactTel && this.makePhone(this.recordOrderDetailData.ContactTel)
              },
              makeLandlordPhone: function() {
                this.recordOrderDetailData.LandlordPhone && this.makePhone(this.recordOrderDetailData.LandlordPhone)
              },
              makePhone: function(t) {
                e.makePhoneCall({
                  phoneNumber: t + "",
                  success: function(e) {},
                  fail: function(e) {},
                  complete: function(e) {}
                })
              }
            }
          };
        t.default = r
      }).call(this, a("df3c").default)
    },
    a3c0: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("f9de"),
        n = a("3f25");
      for (var i in n)["default"].indexOf(i) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(i);
      a("bca0");
      var o = a("828b"),
        d = a("3f57"),
        s = Object(o.a)(n.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      "function" == typeof d.a && Object(d.a)(s), t.default = s.exports
    },
    a5f2: function(e, t, a) {
      "use strict";
      (function(e, t) {
        var r = a("47a9");
        a("4aa9"), a("26e8"), r(a("3240"));
        var n = r(a("a3c0"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    bca0: function(e, t, a) {
      "use strict";
      var r = a("194b");
      a.n(r).a
    },
    f9de: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return n
      })), a.d(t, "c", (function() {
        return i
      })), a.d(t, "a", (function() {
        return r
      }));
      var r = {
          uniTag: function() {
            return a.e("components/uni-tag/uni-tag").then(a.bind(null, "7a0f"))
          }
        },
        n = function() {
          var e = this,
            t = (e.$createElement, e._self._c, e.recordOrderDetailData ? e.accessBarrierImages.length : null),
            a = e.recordOrderDetailData && 3 != e.recordOrderDetailData.OrderStatus && 4 != e.recordOrderDetailData.OrderStatus ? 1 != e.recordOrderDetailData.OrderStatus || e.feedBackImage.length > 0 : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              g0: t,
              g1: a
            }
          })
        },
        i = []
    }
  },
  [
    ["a5f2", "common/runtime", "common/vendor"]
  ]
]);
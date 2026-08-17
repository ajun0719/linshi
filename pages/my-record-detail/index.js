(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-record-detail/index"], {
    1057: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return i
      })), a.d(t, "c", (function() {
        return n
      })), a.d(t, "a", (function() {
        return r
      }));
      var r = {
          uniTag: function() {
            return a.e("components/uni-tag/uni-tag").then(a.bind(null, "7a0f"))
          }
        },
        i = function() {
          this.$createElement;
          var e = (this._self._c, this.recordData ? this.accessBarrierImages.length : null),
            t = this.recordData && 1 == this.recordData.OrderStatus ? this.feedBackImage.length : null;
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: e,
              g1: t
            }
          })
        },
        n = []
    },
    2983: function(e, t, a) {},
    "5d2e": function(e, t, a) {
      "use strict";
      (function(e, t) {
        var r = a("47a9");
        a("4aa9"), a("26e8"), r(a("3240"));
        var i = r(a("7799"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    "71db": function(e, t, a) {
      "use strict";
      var r = a("2983");
      a.n(r).a
    },
    7799: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("1057"),
        i = a("b0dd");
      for (var n in i)["default"].indexOf(n) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(n);
      a("71db");
      var s = a("828b"),
        o = Object(s.a)(i.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
      t.default = o.exports
    },
    ab1d: function(e, t, a) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a("f591"),
          i = getApp(),
          n = {
            data: function() {
              return {
                isGroupType: 2,
                recordData: {},
                recordId: "",
                groupArray: [],
                groupTypeArray: [],
                companyId: -1,
                groupId: -1,
                position: "left",
                checked: !1,
                accessBarrierTags: [],
                tagsData: [],
                contactRoles: [],
                feedBackImage: [],
                accessBarrierImages: [],
                chooseImageCount: 9,
                accessBarrierImageDels: [],
                accessBarrierImageDatas: [],
                isUpdateCp: !0,
                isEdit: !0,
                orderStatusText: "",
                isgzh: 0,
                locationText: null,
                isFinish: !1,
                chooseImageLiCount: "",
                isAccImgAdd: ""
              }
            },
            onLoad: function(e) {
              console.log("accDetail", e.isgzh), this.recordId = e.recordid, this.isgzh = e.isgzh, this.getRecordSingle()
            },
            onReady: function() {},
            onShow: function() {},
            onUnload: function() {
              1 == this.isgzh && e.switchTab({
                url: "../home/index"
              })
            },
            methods: {
              getLocationData: function() {
                if (!this.isEdit) {
                  var e = this;
                  r.getLocationData().then((function(t) {
                    if (1 == t.status) {
                      console.log("getLocationDataClick", t.address);
                      var a = e.recordData;
                      a.GpsAddress = t.address, a.GpsPoint = t.latitude + "," + t.longitude, e.recordData = a, e.isUpdateCp = !1
                    }
                  }))
                }
              },
              getamSelectedData: function(e) {
                var t = this,
                  a = {
                    unionid_Encrypt: i.globalData.user_unionid,
                    userID: i.globalData.user_userid,
                    dicName: e
                  };
                this.$api.getDicList(a).then((function(a) {
                  if (1 == a.status)
                    if ("MJWHRecord_Tags" == e) {
                      for (var r = t.recordData.Tags.split("|"), i = 0; i < a.data.length; i++) {
                        for (var n = {
                            text: a.data[i].text,
                            checked: !1
                          }, s = 0; s < r.length; s++) n.text == r[s] && (n.checked = !0, t.tagsData.push(r[s]));
                        t.accessBarrierTags.push(n)
                      }
                      console.log("accessBarrierTags", t.accessBarrierTags)
                    } else if ("MJWHRecord_ContactRole" == e)
                    for (i = 0; i < a.data.length; i++) {
                      var o = {
                        id: a.data[i].id,
                        text: a.data[i].text,
                        checked: !1
                      };
                      t.recordData.ContactRole == a.data[i].id && (o.checked = !0), t.contactRoles.push(o)
                    }
                }))
              },
              getRecordSingle: function() {
                var t = this,
                  a = {
                    unionid_Encrypt: i.globalData.user_unionid,
                    userID: i.globalData.user_userid,
                    recordid: this.recordId,
                    operateType: 2
                  };
                e.showLoading({
                  title: "加载中...",
                  mask: !0
                }), this.$api.getMyRecordList(a).then((function(e) {
                  if (t.isFinish = !0, 1 == e.status) {
                    var a = e.data;
                    if (a) {
                      var r = "";
                      1 == a.OrderStatus ? r = "处理完成" : 2 == a.OrderStatus ? r = "正在处理" : 3 == a.OrderStatus ? r = "未处理" : 4 == a.OrderStatus && (r = "已取消"), t.recordData = a, t.orderStatusText = r, t.getImgList(10003), 1 == a.OrderStatus && t.getImgList(10005), t.getamSelectedData("MJWHRecord_Tags"), t.getamSelectedData("MJWHRecord_ContactRole")
                    } else t.recordData = ""
                  }
                }))
              },
              cancenOrderReq: function() {
                var t = this;
                e.showLoading({
                  title: "取消中...",
                  mask: !0
                });
                var a = {
                  unionid_Encrypt: i.globalData.user_unionid,
                  userID: i.globalData.user_userid,
                  recordid: this.recordId
                };
                this.$api.cancelRecord(a).then((function(a) {
                  1 == a.status && (t.$modalToast("故障单已被取消"), i.refresh(), setTimeout((function() {
                    e.navigateBack({
                      delta: 1
                    })
                  }), 200))
                }))
              },
              getImgList: function(e) {
                var t = this,
                  a = {
                    unionid_Encrypt: i.globalData.user_unionid,
                    userID: i.globalData.user_userid,
                    upLoadType: e,
                    keyid: this.recordId
                  };
                this.$api.getImgList(a).then((function(a) {
                  if (1 == a.status)
                    if (10005 == e)
                      for (var r = 0; r < a.data.length; r++) t.feedBackImage.push(a.data[r].ImgPath);
                    else if (10003 == e) {
                    var i = 9;
                    for (i -= a.data.length, r = 0; r < a.data.length; r++) t.accessBarrierImages.push(a.data[r].ImgPath);
                    t.accessBarrierImageDatas = a.data, t.chooseImageLiCount = i, t.isAccImgAdd = !(i < 9 && i >= 0 && !t.isEdit)
                  }
                }))
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
              cancelOrder: function() {
                var t = this;
                e.showModal({
                  title: "提示",
                  content: "是否取消该故障单？",
                  showCancel: !0,
                  success: function(e) {
                    e.confirm && t.cancenOrderReq()
                  }
                })
              },
              makeWorkerPhone: function() {
                this.recordData.UserMob && this.makePhone(this.recordData.UserMob)
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
        t.default = n
      }).call(this, a("df3c").default)
    },
    b0dd: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a("ab1d"),
        i = a.n(r);
      for (var n in r)["default"].indexOf(n) < 0 && function(e) {
        a.d(t, e, (function() {
          return r[e]
        }))
      }(n);
      t.default = i.a
    }
  },
  [
    ["5d2e", "common/runtime", "common/vendor"]
  ]
]);
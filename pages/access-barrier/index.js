(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/access-barrier/index"], {
    "019a": function(t, a, e) {
      "use strict";
      e.r(a);
      var s = e("8d78"),
        i = e("68a9");
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return i[t]
        }))
      }(r);
      e("e1a9");
      var n = e("828b"),
        c = Object(n.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
      a.default = c.exports
    },
    "301e": function(t, a, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var s = getApp(),
          i = e("f591"),
          r = {
            data: function() {
              return {
                oneChecked: !1,
                visible2: !1,
                isGroupType: 2,
                areaArray: [],
                areaObjectArray: [],
                townArray: [],
                townObjectArray: [],
                communityArray: [],
                communityObjectArray: [],
                groupArray: [],
                groupTypeArray: [],
                countyID: -1,
                townID: -1,
                communityID: -1,
                ishowCmu: !0,
                position: "left",
                checked: !1,
                accessBarrierTags: [],
                tagsData: [],
                contactRoles: [],
                accessBarrierData: {},
                accessBarrierImage: [],
                chooseImageCount: 9,
                locationGpsText: null,
                locationText: "",
                areaIndex: "",
                townIndex: "",
                communityIndex: "",
                isAccImgAdd: ""
              }
            },
            onLoad: function(t) {
              this.init(t)
            },
            onReady: function() {},
            onShow: function() {},
            methods: {
              init: function(t) {
                if (t.townid & t.countyid & t.communityid) {
                  if (this.countyID = t.countyid, this.townID = t.townid, this.communityID = t.communityid, t.address) {
                    var a = this.accessBarrierData;
                    a.addressAll = t.address, this.accessBarrierData = a
                  }
                  this.getAddressSelectedData(1), this.getAddressSelectedData(2), this.getAddressSelectedData(3)
                } else this.getAddressSelectedData(1);
                if (s.globalData.userInfo.IsAuthen && 1 == s.globalData.userInfo.IsAuthen) {
                  var e = this.accessBarrierData;
                  e.contact = s.globalData.userInfo.Name, e.contactTel = s.globalData.userInfo.UserMob, this.accessBarrierData = e
                }
                this.getamSelectedData("MJWHRecord_Tags"), this.getamSelectedData("MJWHRecord_ContactRole"), this.getLocationAddress()
              },
              getLocationAddress: function() {
                var t = this;
                i.getLocationData().then((function(a) {
                  1 == a.status && (t.locationGpsText = a.latitude + "," + a.longitude, t.locationText = a.address)
                }))
              },
              addressNameInput: function(t) {
                var a = this.accessBarrierData;
                a.addressAll = t.detail.value, this.accessBarrierData = a
              },
              personNameInput: function(t) {
                var a = this.accessBarrierData;
                a.contact = t.detail.value, this.accessBarrierData = a
              },
              personPhoneInput: function(t) {
                var a = this.accessBarrierData;
                a.contactTel = t.detail.value, this.accessBarrierData = a
              },
              landlordPhoneInput: function(t) {
                var a = this.accessBarrierData;
                a.landlordPhone = t.detail.value, this.accessBarrierData = a
              },
              falutMessageInput: function(t) {
                var a = this.accessBarrierData;
                a.describe = t.detail.value, this.accessBarrierData = a
              },
              remarkInput: function(t) {
                var a = this.accessBarrierData;
                a.remark = t.detail.value, this.accessBarrierData = a
              },
              areaPickerChange: function(t) {
                console.log("areaPickerChange发送选择改变，携带值为", t + "---" + this.areaIndex), this.areaIndex != t && (this.areaIndex = t, this.countyID = this.areaObjectArray[t].id, this.townID = -1, this.communityID = -1, this.townArray = [], this.townObjectArray = [], this.communityArray = [], this.communityObjectArray = [], this.townIndex = null, this.communityIndex = null, this.getAddressSelectedData(2))
              },
              townPickerChange: function(t) {
                console.log("picker发送选择改变，携带值为", t), this.townIndex != t && (this.townIndex = t, this.townID = this.townObjectArray[t].id, this.communityID = -1, this.communityArray = [], this.communityObjectArray = []), this.getAddressSelectedData(3)
              },
              communityPickerChange: function(t) {
                this.communityIndex = t, this.communityID = this.communityObjectArray[t].id
              },
              getAddressSelectedData: function(t) {
                var a = this,
                  e = {
                    unionid_Encrypt: s.globalData.user_unionid,
                    userID: s.globalData.user_userid,
                    addrLevel: 5
                  },
                  i = {
                    unionid_Encrypt: s.globalData.user_unionid,
                    userID: s.globalData.user_userid,
                    addrLevel: 10,
                    countyID: this.countyID
                  },
                  r = {
                    unionid_Encrypt: s.globalData.user_unionid,
                    userID: s.globalData.user_userid,
                    addrLevel: 30,
                    countyID: this.countyID,
                    townID: this.townID
                  };
                switch (t) {
                  case 1:
                    this.$api.getAddressList(e).then((function(t) {
                      if (1 == t.status) {
                        for (var e = 0; e < t.data.length; e++)
                          if (a.areaArray.push(t.data[e].text), -1 != a.countyID && a.countyID == t.data[e].id) {
                            a.areaIndex = e;
                            break
                          } a.areaObjectArray = t.data
                      }
                    }));
                    break;
                  case 2:
                    this.$api.getAddressList(i).then((function(t) {
                      if (1 == t.status) {
                        for (var e = 0; e < t.data.length; e++) a.townArray.push(t.data[e].text), -1 != a.townID && a.townID == t.data[e].id && (a.townIndex = e);
                        a.townObjectArray = t.data
                      }
                    }));
                    break;
                  case 3:
                    this.$api.getAddressList(r).then((function(t) {
                      if (1 == t.status) {
                        for (var e = 0; e < t.data.length; e++) a.communityArray.push(t.data[e].text), "" != a.communityID && a.communityID == t.data[e].id && (a.communityIndex = e);
                        a.communityObjectArray = t.data
                      }
                    }))
                }
              },
              getamSelectedData: function(t) {
                var a = this,
                  e = {
                    unionid_Encrypt: s.globalData.user_unionid,
                    userID: s.globalData.user_userid,
                    dicName: t
                  };
                this.$api.getDicList(e).then((function(e) {
                  if (1 == e.status)
                    if ("MJWHRecord_Tags" == t)
                      for (var s = 0; s < e.data.length; s++) {
                        var i = {
                          text: e.data[s].text,
                          checked: !1
                        };
                        a.accessBarrierTags.push(i)
                      } else "MJWHRecord_ContactRole" == t && (a.contactRoles = e.data)
                }))
              },
              sumbitAmData: function() {
                var a = this;
                console.log(this.townID);
                var e = null;
                if (this.countyID && -1 != this.countyID ? this.townID && -1 != this.townID ? this.communityID && -1 != this.communityID ? this.accessBarrierData.addressAll ? this.accessBarrierData.contact ? this.accessBarrierData.contactTel ? this.accessBarrierData.contactRole ? 0 == this.tagsData.length && (e = "请选择故障") : e = "请选择居住类别" : e = "请输入联系人电话" : e = "请输入联系人" : e = "请输入详细地址" : e = "请选择社区" : e = "请选择街镇" : e = "请选择区/县", null == e) {
                  for (var i = "", r = 0; r < this.tagsData.length; r++) r != this.tagsData.length - 1 ? i = i + this.tagsData[r] + "|" : i += this.tagsData[r];
                  var n = {
                    unionid_Encrypt: s.globalData.user_unionid,
                    userID: s.globalData.user_userid,
                    communityid: this.communityID,
                    addressAll: this.accessBarrierData.addressAll,
                    contact: this.accessBarrierData.contact,
                    contactTel: this.accessBarrierData.contactTel,
                    describe: this.accessBarrierData.describe,
                    contactRole: this.accessBarrierData.contactRole,
                    landlordPhone: this.accessBarrierData.landlordPhone,
                    tags: i,
                    gpsAddress: this.locationText,
                    gpsPoint: this.locationGpsText
                  };
                  t.showLoading({
                    title: "提交资料中",
                    mask: !0
                  }), this.$api.reportFault(n).then((function(t) {
                    1 == t.status && a.uploadImg(t.data.MJWHRecordID)
                  }))
                } else this.$modalToast(e)
              },
              uploadImg: function(a) {
                var e = this,
                  i = this.accessBarrierImage;
                if (0 == i.length) return e.$toast("提交成功"), void setTimeout((function() {
                  t.redirectTo({
                    url: "/pages/my-record-detail/index?recordid=" + a
                  })
                }), 200);
                var r = {
                  unionid_Encrypt: s.globalData.user_unionid,
                  userID: s.globalData.user_userid,
                  upLoadType: 10003,
                  keyid: a
                };
                this.$api.uploadImgNet("/ApiToImage/UpLoadImgurl", i, r).then((function(s) {
                  e.$toast("提交成功"), setTimeout((function() {
                    t.redirectTo({
                      url: "/pages/my-record-detail/index?recordid=" + a
                    })
                  }), 200)
                }))
              },
              uploadaccessImg: function() {
                var a = this;
                t.chooseImage({
                  count: this.chooseImageCount,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(t) {
                    var e = t.tempFilePaths,
                      s = a.accessBarrierImage.concat(e);
                    a.chooseImageCount = 9 - s.length, a.accessBarrierImage = s, a.isAccImgAdd = !(s.length < 9), a.chooseImageCount = a.chooseImageCount
                  }
                })
              },
              previewImage: function(a) {
                var e = a.target.dataset.src;
                t.previewImage({
                  current: e,
                  urls: this.accessBarrierImage
                })
              },
              deleteFun: function(t) {
                var a = t.currentTarget.dataset.index,
                  e = this.accessBarrierImage;
                e.splice(a, 1), this.chooseImageCount = this.chooseImageCount - 1, this.accessBarrierImage = e, this.isAccImgAdd = !1
              },
              onOneChange: function(t, a) {
                var e = this.tagsData;
                if (this.accessBarrierTags[t].checked = !this.accessBarrierTags[t].checked, this.accessBarrierTags[t].checked) this.tagsData.push(a);
                else
                  for (var s = 0; s < e.length; s++) e[s] == a && this.tagsData.splice(s, 1);
                console.log("tagsData", e)
              },
              radioChange: function(t) {
                console.log("radioChange", t);
                var a = this.accessBarrierData;
                a.contactRole = t.detail.value, this.accessBarrierData = a
              },
              save: function() {
                this.sumbitAmData()
              }
            }
          };
        a.default = r
      }).call(this, e("df3c").default)
    },
    "68a9": function(t, a, e) {
      "use strict";
      e.r(a);
      var s = e("301e"),
        i = e.n(s);
      for (var r in s)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return s[t]
        }))
      }(r);
      a.default = i.a
    },
    "8a45": function(t, a, e) {
      "use strict";
      (function(t, a) {
        var s = e("47a9");
        e("4aa9"), e("26e8"), s(e("3240"));
        var i = s(e("019a"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, a(i.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    "8d78": function(t, a, e) {
      "use strict";
      e.d(a, "b", (function() {
        return i
      })), e.d(a, "c", (function() {
        return r
      })), e.d(a, "a", (function() {
        return s
      }));
      var s = {
          uniTag: function() {
            return e.e("components/uni-tag/uni-tag").then(e.bind(null, "7a0f"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    e1a9: function(t, a, e) {
      "use strict";
      var s = e("f831");
      e.n(s).a
    },
    f831: function(t, a, e) {}
  },
  [
    ["8a45", "common/runtime", "common/vendor"]
  ]
]);
(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/brf-message/index"], {
    "683a": function(t, a, e) {
      "use strict";
      var i = e("9416");
      e.n(i).a
    },
    "8b5c": function(t, a, e) {
      "use strict";
      (function(t, a) {
        var i = e("47a9");
        e("4aa9"), e("26e8"), i(e("3240"));
        var s = i(e("f1fd"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, a(s.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    9416: function(t, a, e) {},
    "98b8": function(t, a, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var i = getApp(),
          s = {
            data: function() {
              return {
                brfId: "",
                brfData: {
                  HandleStatus: -1,
                  CommunityID: ""
                },
                titleName: "",
                value: "",
                cmuAry: {
                  index: -1,
                  list: []
                },
                operatorsAry: {
                  index: -1,
                  list: []
                },
                tagsAry: [],
                brfImgList: [],
                brfDelImgIds: [],
                brfImgCount: 6,
                brfImgAdd: !0,
                loading: !0,
                tagsData: [],
                imgObjList: []
              }
            },
            components: {
              fxdPicker: function() {
                e.e("components/right-picker").then(function() {
                  return resolve(e("b923"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            onLoad: function(t) {
              console.log("onLoad", t), this.brfId = t.brfId, this.titleName = this.brfId ? "故障信息" : "故障填写", this.brfId ? this.getBrfMessage() : this.getBrfColList()
            },
            methods: {
              getBrfMessage: function() {
                var a = this;
                t.showLoading({
                  title: "加载中"
                });
                var e = {
                  openId: i.globalData.user_unionid,
                  userId: i.globalData.user_userid,
                  id: this.brfId
                };
                this.$api.brfDetail(e).then((function(e) {
                  1 == e.status && (a.brfData = e.data, a.getImg(), a.getBrfColList(), a.getOperList(e.data.CommunityName), a.tagsAry = a.brfData.TagList, a.tagsData = a.brfData.Tags.split(","), t.hideLoading())
                }))
              },
              getBrfColList: function() {
                var t = this,
                  a = {
                    openId: i.globalData.user_unionid,
                    userId: i.globalData.user_userid
                  };
                this.$api.brfColList(a).then((function(a) {
                  if (1 == a.status) {
                    var e = a.data;
                    if (e.CommunityList.length > 0 && (t.cmuAry.list = e.CommunityList, t.brfData.CommunityID))
                      for (var i = 0; i < e.CommunityList.length; i++)
                        if (e.CommunityList[i].id == t.brfData.CommunityID) {
                          t.cmuAry.index = i;
                          break
                        } t.brfId || e.TagList.length > 0 && (t.tagsAry = e.TagList)
                  }
                }))
              },
              getOperList: function(t) {
                var a = this,
                  e = {
                    hasAll: -1,
                    communityName: t
                  };
                this.$api.operList(e).then((function(t) {
                  if (1 == t.status) {
                    if (a.operatorsAry = {
                        list: t.data,
                        index: -1
                      }, a.brfData.Operator)
                      for (var e = 0; e < t.data.length; e++)
                        if (t.data[e].id == a.brfData.Operator) {
                          a.operatorsAry.index = e;
                          break
                        } a.$forceUpdate()
                  }
                }))
              },
              getImg: function() {
                var t = this,
                  a = {
                    openId: i.globalData.user_unionid,
                    userId: i.globalData.user_userid,
                    upLoadType: 200,
                    keyid: this.brfId
                  };
                this.$api.getImgList(a).then((function(a) {
                  if (1 == a.status) {
                    for (var e = 0; e < a.data.length; e++) t.brfImgList.push(a.data[e].ImgPath);
                    t.imgObjList = a.data, t.brfImgAdd = t.brfImgCount <= 6 && t.brfImgCount > 0
                  }
                }))
              },
              inputChange: function(t) {
                console.log("inputChange", t);
                var a = t.currentTarget.dataset.str,
                  e = t.detail.value;
                switch (a) {
                  case "addressAll":
                    this.brfData.AddressAll = e;
                    break;
                  case "cusName":
                    this.brfData.CusName = e;
                    break;
                  case "cusMob":
                    this.brfData.CusMob = e;
                    break;
                  case "cusPaperNum":
                    this.brfData.CusPaperNum = e;
                    break;
                  case "wbAccount":
                    this.brfData.WbAccount = e;
                    break;
                  case "desc":
                    this.brfData.Describe = e
                }
              },
              operPicker: function(t) {
                var a = t.detail.value;
                this.operatorsAry.index = a;
                var e = this.operatorsAry.list[a].id;
                this.brfData.Operator = e
              },
              pickerchange: function(t, a, e) {
                console.log("pickerchange", a + "---" + e);
                var i = t.currentTarget.dataset.pickstr;
                switch (this.brfData[i] = a, i) {
                  case "CommunityID":
                    this.brfData.Operator = "", this.getOperList(e)
                }
              },
              uploadaccessImg: function(a) {
                var e = this,
                  i = this.brfImgCount;
                t.chooseImage({
                  count: i,
                  sizeType: ["compressed"],
                  sourceType: ["album", "camera"],
                  success: function(t) {
                    var a = t.tempFilePaths,
                      i = e.brfImgList.concat(a),
                      s = e.imgObjList.concat(a);
                    e.imgObjList = s, e.brfImgList = i, e.brfImgCount = 6 - i.length, e.btfImgAdd = !(i.length < 6)
                  }
                })
              },
              previewImage: function(a) {
                var e = a.target.dataset.src;
                t.previewImage({
                  current: e,
                  urls: this.brfImgList
                })
              },
              deleteFun: function(t) {
                console.log("deleteFun", t);
                var a = t.currentTarget.dataset.index;
                this.brfImgCount = this.brfImgCount + 1, null != this.imgObjList[a].ID && this.brfDelImgIds.push(this.imgObjList[a].ID), this.brfImgList.splice(a, 1), this.imgObjList.splice(a, 1), this.brfImgAdd = !0
              },
              onOneChange: function(t, a) {
                var e = this.tagsData;
                if ("true" == this.tagsAry[t].selected ? this.tagsAry[t].selected = "false" : this.tagsAry[t].selected = "true", "true" == this.tagsAry[t].selected) this.tagsData.push(a);
                else
                  for (var i = 0; i < e.length; i++) e[i] == a && this.tagsData.splice(i, 1);
                console.log("tagsData", e)
              },
              uploadImg: function(a, e, s) {
                var r = this,
                  n = [];
                if (t.showLoading({
                    title: "提交图片中"
                  }), this.imgObjList.forEach((function(t) {
                    null == t.ID && n.push(t)
                  })), 0 == n.length) return this.$bus.$emit("upParams", {}), void this.$modalToast(s, (function(a) {
                  t.navigateBack({
                    delta: -1
                  })
                }));
                var o = {
                  unionid_Encrypt: i.globalData.user_unionid,
                  userID: i.globalData.user_userid,
                  upLoadType: e,
                  keyid: a
                };
                this.$api.uploadImgNet("/ApiToImage/UpLoadImgurl", n, o).then((function(a) {
                  r.$bus.$emit("upParams", {}), r.$modalToast(s, (function(a) {
                    t.navigateBack({
                      delta: -1
                    })
                  }))
                }))
              },
              saveClick: function() {
                var a = this,
                  e = null;
                if (console.log("brfdata", this.brfData), this.brfData.CommunityID ? this.brfData.Operator ? this.brfData.AddressAll ? this.brfData.CusName ? this.brfData.Describe || (e = "请填写故障描述") : e = "请填写机主姓名" : e = "请填写报装地址" : e = "请选择运营商" : e = "请选择所属社区", e) this.$modalToast(e);
                else {
                  t.showLoading({
                    title: this.brfId ? "修改中" : "添加中"
                  });
                  var s = "",
                    r = "";
                  this.tagsData.forEach((function(t, e) {
                    s += t, e != a.tagsData.length - 1 && (s += ",")
                  })), this.brfDelImgIds.forEach((function(t, e) {
                    r += t, e != a.brfDelImgIds.length - 1 && (r += ",")
                  })), console.log("delImgs", r);
                  var n = {
                      openId: i.globalData.user_unionid,
                      userId: i.globalData.user_userid,
                      id: this.brfId,
                      communityId: this.brfData.CommunityID,
                      operators: this.brfData.Operator,
                      addressAll: this.brfData.AddressAll,
                      cusName: this.brfData.CusName,
                      cusMob: this.brfData.CusMob,
                      cusPaperNum: this.brfData.CusPaperNum,
                      wbAccount: this.brfData.WbAccount,
                      describe: this.brfData.Describe,
                      delImgId: r,
                      tags: s
                    },
                    o = "/apitonetworkfault/add";
                  this.brfId && (o = "/apitonetworkfault/update"), this.$api.upAddBrf(o, n).then((function(t) {
                    if (1 == t.status) {
                      var e = t.data;
                      a.uploadImg(e, 200, t.msg)
                    }
                  }))
                }
              },
              cancelClick: function() {
                var t = this;
                this.$modalToast("是否撤销该故障单?", (function(a) {
                  a.confirm && t.cancelReq()
                }), !0)
              },
              cancelReq: function() {
                var a = this;
                t.showLoading({
                  title: "撤销中..."
                });
                var e = {
                  openId: i.globalData.user_unionid,
                  userId: i.globalData.user_userid,
                  id: this.brfId
                };
                this.$api.brfCancel(e).then((function(e) {
                  1 == e.status && (a.$bus.$emit("upParams", {}), a.$modalToast(e.msg, (function(a) {
                    t.navigateBack({
                      delta: -1
                    })
                  })))
                }))
              }
            }
          };
        a.default = s
      }).call(this, e("df3c").default)
    },
    b45b: function(t, a, e) {
      "use strict";
      e.r(a);
      var i = e("98b8"),
        s = e.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return i[t]
        }))
      }(r);
      a.default = s.a
    },
    e2c8: function(t, a, e) {
      "use strict";
      e.d(a, "b", (function() {
        return s
      })), e.d(a, "c", (function() {
        return r
      })), e.d(a, "a", (function() {
        return i
      }));
      var i = {
          uniTag: function() {
            return e.e("components/uni-tag/uni-tag").then(e.bind(null, "7a0f"))
          }
        },
        s = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    f1fd: function(t, a, e) {
      "use strict";
      e.r(a);
      var i = e("e2c8"),
        s = e("b45b");
      for (var r in s)["default"].indexOf(r) < 0 && function(t) {
        e.d(a, t, (function() {
          return s[t]
        }))
      }(r);
      e("683a");
      var n = e("828b"),
        o = Object(n.a)(s.default, i.b, i.c, !1, null, "41bf1449", null, !1, i.a, void 0);
      a.default = o.exports
    }
  },
  [
    ["8b5c", "common/runtime", "common/vendor"]
  ]
]);
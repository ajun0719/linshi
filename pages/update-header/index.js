(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/update-header/index"], {
    "0590": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("e013"),
        o = n.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(u);
      t.default = o.a
    },
    "18f0": function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("4aa9"), n("26e8"), a(n("3240"));
        var o = a(n("ddcf"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    4528: function(e, t, n) {},
    64476: function(e, t, n) {
      "use strict";
      var a = n("4528");
      n.n(a).a
    },
    ddcf: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("fbe0"),
        o = n("0590");
      for (var u in o)["default"].indexOf(u) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(u);
      n("64476");
      var r = n("828b"),
        i = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      t.default = i.exports
    },
    e013: function(e, t, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, getApp();
        var n = {
          data: function() {
            return {
              authenText: "",
              userInfo: "",
              isAuthenText: ""
            }
          },
          onLoad: function(e) {},
          onShow: function() {
            this.getUserInfo()
          },
          onUnload: function() {},
          onShareAppMessage: function() {},
          methods: {
            init: function() {
              this.userInfo = getApp().globalData.userInfo
            },
            OnChooseAvatar: function(t) {
              var n = this,
                a = {
                  unionid_Encrypt: e.getStorageSync("unionid"),
                  userID: e.getStorageSync("userID"),
                  upLoadType: 1e4
                };
              console.log("图片" + JSON.stringify(t.target)), this.$api.uploadImgNet("/ApiToImage/UpLoadImgurl", [t.target.avatarUrl], a).then((function(t) {
                e.showToast({
                  title: "上传成功",
                  duration: 2e3
                }), n.getUserInfo()
              }))
            },
            getUserInfo: function() {
              var t = this,
                n = {
                  unionid_Encrypt: e.getStorageSync("unionid"),
                  userID: e.getStorageSync("userID")
                };
              this.$api.getUserInfoByUnionId(n).then((function(n) {
                1 == n.status && (getApp().globalData.userInfo = n.data, t.userInfo = getApp().globalData.userInfo, e.setStorageSync("userInfo", t.userInfo))
              }))
            },
            uploadHeadImg: function() {
              var t = this;
              e.chooseImage({
                count: 1,
                sizeType: ["compressed"],
                sourceType: ["album", "camera"],
                success: function(n) {
                  var a = n.tempFilePaths,
                    o = {
                      unionid_Encrypt: e.getStorageSync("unionid"),
                      userID: e.getStorageSync("userID"),
                      upLoadType: 1e4
                    };
                  t.$api.uploadImgNet("/ApiToImage/UpLoadImgurl", a, o).then((function(e) {
                    var n = JSON.parse(e);
                    console.log("resdata", n);
                    var a = getApp().globalData.officalIp + n.data.fileName;
                    getApp().globalData.userInfo.Headimgurl = a, t.getUserInfo()
                  }))
                }
              })
            },
            refresh: function() {
              this.init()
            },
            updateUserName: function() {
              e.navigateTo({
                url: "../username/index"
              })
            }
          }
        };
        t.default = n
      }).call(this, n("df3c").default)
    },
    fbe0: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        o = []
    }
  },
  [
    ["18f0", "common/runtime", "common/vendor"]
  ]
]);
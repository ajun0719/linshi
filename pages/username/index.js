(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/username/index"], {
    "0314": function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return n
      })), a.d(t, "c", (function() {
        return i
      })), a.d(t, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        i = []
    },
    "382f": function(e, t, a) {},
    6257: function(e, t, a) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = getApp(),
          n = {
            data: function() {
              return {
                userName: "",
                isSave: !0
              }
            },
            onLoad: function(e) {
              this.userName = a.globalData.userInfo.NickName ? a.globalData.userInfo.NickName : ""
            },
            methods: {
              formSubmit: function(e) {
                this.userName = e.detail.value.nickname, console.log("this.nickname" + this.nickname), this.updateUsername()
              },
              userNameInput: function(e) {
                this.userName = e.detail.value, this.isSave = !1
              },
              updateUsername: function() {
                var t = this;
                if ("" == this.userName) this.$modalToast("请输入您的昵称");
                else {
                  e.showLoading({
                    title: "修改昵称中",
                    mask: !0
                  });
                  var a = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID"),
                    newName: this.userName
                  };
                  this.$api.updateNickName(a).then((function(a) {
                    1 == a.status && (getApp().globalData.userInfo.NickName = t.userName, t.$toast("修改成功"), e.navigateBack({
                      delta: -1
                    }))
                  }))
                }
              }
            }
          };
        t.default = n
      }).call(this, a("df3c").default)
    },
    6684: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("0314"),
        i = a("dff5");
      for (var u in i)["default"].indexOf(u) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(u);
      a("8c14");
      var s = a("828b"),
        o = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = o.exports
    },
    "8c14": function(e, t, a) {
      "use strict";
      var n = a("382f");
      a.n(n).a
    },
    b309: function(e, t, a) {
      "use strict";
      (function(e, t) {
        var n = a("47a9");
        a("4aa9"), a("26e8"), n(a("3240"));
        var i = n(a("6684"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
      }).call(this, a("3223").default, a("df3c").createPage)
    },
    dff5: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("6257"),
        i = a.n(n);
      for (var u in n)["default"].indexOf(u) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(u);
      t.default = i.a
    }
  },
  [
    ["b309", "common/runtime", "common/vendor"]
  ]
]);
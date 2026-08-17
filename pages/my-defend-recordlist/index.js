(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-defend-recordlist/index"], {
    "052e": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("72ef"),
        o = n.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      e.default = o.a
    },
    "72ef": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = getApp(),
          a = {
            data: function() {
              return {
                recordList: [],
                page: 1,
                TabCur: 0,
                tabList: [{
                  key: "-1",
                  name: "全部订单"
                }, {
                  key: "1",
                  name: "已完成"
                }, {
                  key: "2",
                  name: "处理中"
                }, {
                  key: "3",
                  name: "未处理"
                }, {
                  key: "4",
                  name: "已取消"
                }],
                orderStatus: -1,
                key: "",
                index: ""
              }
            },
            onLoad: function(t) {
              this.getRecordByStaff()
            },
            onReady: function() {},
            onShow: function() {},
            onReachBottom: function() {
              this.getRecordByStaff(), console.log("onReachBottom", this.page)
            },
            methods: {
              getRecordByStaff: function() {
                var e = this,
                  a = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid,
                    page: this.page,
                    pagesize: 10,
                    orderStatus: this.orderStatus
                  };
                t.showLoading({
                  title: "加载中...",
                  mask: !0
                }), this.$api.getRecordByStaff(a).then((function(t) {
                  if (1 == t.status) {
                    var n = t.data;
                    n ? (e.recordList = e.recordList.concat(n), e.page += 1) : 1 == e.page && (e.recordList = [])
                  }
                }))
              },
              tabChange: function(t, e) {
                this.orderStatus = e, this.page = 1, this.recordList = [], this.getRecordByStaff()
              },
              refresh: function() {
                this.recordList = [], this.page = 1, this.getRecordByStaff()
              },
              startForAmDetail: function(e) {
                t.navigateTo({
                  url: "/pages/my-defendrecord-detail/index?&isgzh=0&recordid=" + this.recordList[e.currentTarget.dataset.index].MJWHRecordID
                })
              }
            }
          };
        e.default = a
      }).call(this, n("df3c").default)
    },
    8352: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("d0f0"),
        o = n("052e");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(i);
      n("b736");
      var r = n("828b"),
        c = n("f04d"),
        s = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      "function" == typeof c.a && Object(c.a)(s), e.default = s.exports
    },
    b736: function(t, e, n) {
      "use strict";
      var a = n("d0e5");
      n.n(a).a
    },
    d0e5: function(t, e, n) {},
    d0f0: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {
        return a
      }));
      var a = {
          wucTab: function() {
            return n.e("components/wuc-tab/wuc-tab").then(n.bind(null, "726a"))
          }
        },
        o = function() {
          this.$createElement;
          var t = (this._self._c, this.recordList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        i = []
    },
    f04d: function(t, e, n) {
      "use strict";
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    f683: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var a = n("47a9");
        n("4aa9"), n("26e8"), a(n("3240"));
        var o = a(n("8352"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    }
  },
  [
    ["f683", "common/runtime", "common/vendor"]
  ]
]);
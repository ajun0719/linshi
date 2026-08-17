(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-record-list/index"], {
    "025d": function(t, e, n) {
      "use strict";
      var i = n("8551");
      n.n(i).a
    },
    6285: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          wucTab: function() {
            return n.e("components/wuc-tab/wuc-tab").then(n.bind(null, "726a"))
          }
        },
        a = function() {
          this.$createElement;
          var t = (this._self._c, this.recordList.length);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: t
            }
          })
        },
        r = []
    },
    7096: function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = getApp(),
          i = {
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
              this.getMyRecordList()
            },
            onReady: function() {},
            onShow: function() {},
            onReachBottom: function() {
              this.getMyRecordList()
            },
            methods: {
              getMyRecordList: function() {
                var t = this,
                  e = {
                    unionid_Encrypt: n.globalData.user_unionid,
                    userID: n.globalData.user_userid,
                    page: this.page,
                    pagesize: 10,
                    orderStatus: this.orderStatus
                  };
                this.$api.getMyRecordList(e).then((function(e) {
                  if (1 == e.status) {
                    var n = e.data;
                    n ? (t.recordList = t.recordList.concat(n), t.page += 1) : 1 == t.page && (t.recordList = [])
                  }
                }))
              },
              refresh: function() {
                this.recordList = [], this.page = 1, this.getMyRecordList()
              },
              tabChange: function(t, e) {
                this.TabCur = t, this.orderStatus = e, this.page = 1, this.recordList = [], this.getMyRecordList()
              },
              startForAmDetail: function(e) {
                t.navigateTo({
                  url: "/pages/my-record-detail/index?&isgzh=0&recordid=" + this.recordList[e.currentTarget.dataset.index].MJWHRecordID
                })
              }
            }
          };
        e.default = i
      }).call(this, n("df3c").default)
    },
    8551: function(t, e, n) {},
    "8f5c": function(t, e, n) {
      "use strict";
      (function(t, e) {
        var i = n("47a9");
        n("4aa9"), n("26e8"), i(n("3240"));
        var a = i(n("ed1f"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    "9f00": function(t, e, n) {
      "use strict";
      e.a = function(t) {
        t.options.wxsCallMethods || (t.options.wxsCallMethods = [])
      }
    },
    ed1f: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("6285"),
        a = n("ffb6");
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(r);
      n("025d");
      var o = n("828b"),
        c = n("9f00"),
        s = Object(o.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      "function" == typeof c.a && Object(c.a)(s), e.default = s.exports
    },
    ffb6: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("7096"),
        a = n.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(r);
      e.default = a.a
    }
  },
  [
    ["8f5c", "common/runtime", "common/vendor"]
  ]
]);
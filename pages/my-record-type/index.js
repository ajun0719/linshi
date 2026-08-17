(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-record-type/index"], {
    "0167": function(n, e, t) {
      "use strict";
      (function(n, e) {
        var o = t("47a9");
        t("4aa9"), t("26e8"), o(t("3240"));
        var c = o(t("d924"));
        n.__webpack_require_UNI_MP_PLUGIN__ = t, e(c.default)
      }).call(this, t("3223").default, t("df3c").createPage)
    },
    "609e": function(n, e, t) {
      "use strict";
      (function(n) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          data: function() {
            return {}
          },
          components: {
            listCell: function() {
              t.e("components/mix-list-cell").then(function() {
                return resolve(t("d519"))
              }.bind(null, t)).catch(t.oe)
            }
          },
          onLoad: function(n) {},
          onReady: function() {},
          onShow: function() {},
          onHide: function() {},
          onUnload: function() {},
          onPullDownRefresh: function() {},
          onReachBottom: function() {},
          methods: {
            startMyRecord: function(e) {
              n.navigateTo({
                url: "/pages/my-record-list/index"
              })
            },
            startMyDefendRecord: function() {
              n.navigateTo({
                url: "/pages/my-defend-recordlist/index"
              })
            }
          }
        };
        e.default = o
      }).call(this, t("df3c").default)
    },
    b1b1: function(n, e, t) {
      "use strict";
      t.r(e);
      var o = t("609e"),
        c = t.n(o);
      for (var u in o)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return o[n]
        }))
      }(u);
      e.default = c.a
    },
    ceb4: function(n, e, t) {
      "use strict";
      t.d(e, "b", (function() {
        return o
      })), t.d(e, "c", (function() {
        return c
      })), t.d(e, "a", (function() {}));
      var o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    d924: function(n, e, t) {
      "use strict";
      t.r(e);
      var o = t("ceb4"),
        c = t("b1b1");
      for (var u in c)["default"].indexOf(u) < 0 && function(n) {
        t.d(e, n, (function() {
          return c[n]
        }))
      }(u);
      var i = t("828b"),
        a = Object(i.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
      e.default = a.exports
    }
  },
  [
    ["0167", "common/runtime", "common/vendor"]
  ]
]);
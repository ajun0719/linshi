(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/brake-scan-result/index"], {
    "06ba": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("eb68"),
        u = e("ff75");
      for (var c in u)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return u[t]
        }))
      }(c);
      e("d54b");
      var i = e("828b"),
        o = Object(i.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
      n.default = o.exports
    },
    "916a": function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              tvResult: ""
            }
          },
          onLoad: function(t) {
            var n = "";
            0 == t.type ? n = "车闸已打开" : 1 == t.type ? n = "支付成功" : 2 == t.type && (n = t.resultText ? t.resultText : "优惠券使用成功,出场时即可自动扣减"), this.tvResult = n
          },
          onReady: function() {},
          onShow: function() {},
          onHide: function() {},
          methods: {
            confrim: function() {
              t.navigateBack({
                delta: 1
              })
            }
          }
        };
        n.default = e
      }).call(this, e("df3c").default)
    },
    a0a1: function(t, n, e) {},
    d54b: function(t, n, e) {
      "use strict";
      var a = e("a0a1");
      e.n(a).a
    },
    d66c: function(t, n, e) {
      "use strict";
      (function(t, n) {
        var a = e("47a9");
        e("4aa9"), e("26e8"), a(e("3240"));
        var u = a(e("06ba"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(u.default)
      }).call(this, e("3223").default, e("df3c").createPage)
    },
    eb68: function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return u
      })), e.d(n, "a", (function() {}));
      var a = function() {
          this.$createElement;
          this._self._c
        },
        u = []
    },
    ff75: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("916a"),
        u = e.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(c);
      n.default = u.a
    }
  },
  [
    ["d66c", "common/runtime", "common/vendor"]
  ]
]);
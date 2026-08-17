(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/housing_list_box/housing_list_box"], {
    "18bf": function(n, o, e) {
      "use strict";
      e.d(o, "b", (function() {
        return i
      })), e.d(o, "c", (function() {
        return c
      })), e.d(o, "a", (function() {
        return t
      }));
      var t = {
          uniIcons: function() {
            return Promise.all([e.e("common/vendor"), e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null, "7f32"))
          }
        },
        i = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "402c": function(n, o, e) {
      "use strict";
      (function(n) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        var e = {
          props: {
            housing_lists: {
              type: Array
            }
          },
          data: function() {
            return {
              img_url: n.getStorageSync("xz_baseUrl") + "/"
            }
          },
          methods: {
            onRoomDetails: function(o) {
              n.navigateTo({
                url: "/helper-package/housing_resource_details?CZWResourcesID=".concat(o),
                fail: function(n) {
                  console.log(n)
                }
              })
            },
            imageError: function(n) {
              console.error("image发生error事件，携带值为" + n.detail.errMsg), console.log(n)
            }
          }
        };
        o.default = e
      }).call(this, e("df3c").default)
    },
    "94f6": function(n, o, e) {
      "use strict";
      var t = e("f9af");
      e.n(t).a
    },
    ce45: function(n, o, e) {
      "use strict";
      e.r(o);
      var t = e("402c"),
        i = e.n(t);
      for (var c in t)["default"].indexOf(c) < 0 && function(n) {
        e.d(o, n, (function() {
          return t[n]
        }))
      }(c);
      o.default = i.a
    },
    ee3e: function(n, o, e) {
      "use strict";
      e.r(o);
      var t = e("18bf"),
        i = e("ce45");
      for (var c in i)["default"].indexOf(c) < 0 && function(n) {
        e.d(o, n, (function() {
          return i[n]
        }))
      }(c);
      e("94f6");
      var u = e("828b"),
        s = Object(u.a)(i.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
      o.default = s.exports
    },
    f9af: function(n, o, e) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/housing_list_box/housing_list_box-create-component", {
    "components/housing_list_box/housing_list_box-create-component": function(n, o, e) {
      e("df3c").createComponent(e("ee3e"))
    }
  },
  [
    ["components/housing_list_box/housing_list_box-create-component"]
  ]
]);
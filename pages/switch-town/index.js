(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/switch-town/index"], {
    "14b4": function(t, e, n) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = n("f591"),
          r = getApp(),
          a = {
            data: function() {
              return {
                sideBarLetterList: [],
                winHeight: 0,
                cityList: [],
                showChosenLetterToast: !1,
                scrollTop: 0,
                scrollTopId: "",
                city: "",
                currentCityCode: "",
                inputName: "",
                completeList: [],
                county: "",
                town: "",
                showCountyPicker: !1,
                auto: !0,
                currentTownId: "",
                currentAddress: ""
              }
            },
            onLoad: function(e) {
              var n = t.getSystemInfoSync();
              this.winHeight = n.windowHeight, e.currentTownId && e.currentAddress && (this.currentTownId = e.currentTownId, this.currentAddress = e.currentAddress), this.getTownList()
            },
            methods: {
              getLocationDataClick: function() {
                var e = this;
                i.getLocationData().then((function(n) {
                  if (1 == n.status && e.currentTownId != n.townId) {
                    var i = getCurrentPages(),
                      a = i[i.length - 2];
                    n.cityDistrictTown, t.setStorageSync("currentTownId", n.cityDistrictTown), t.setStorageSync("currentAddress", n.townId), a.$vm.currentAddress = n.cityDistrictTown, a.$vm.currentTownId = n.townId, r.globalData.locationText = n.cityDistrictTown, a.$vm.refresh()
                  }
                }))
              },
              chooseCity: function(e) {
                var n = e.currentTarget.dataset.qu,
                  i = e.currentTarget.dataset.town,
                  a = getCurrentPages(),
                  c = a[a.length - 2],
                  o = this.cityList[n].itemlist[i].itemname;
                t.setStorageSync("CountyName", this.cityList[n].parentname), t.setStorageSync("currentTownId", this.cityList[n].itemlist[i].itemcode), t.setStorageSync("currentAddress", o), c.$vm.currentAddress = o, c.$vm.currentTownId = this.cityList[n].itemlist[i].itemcode, r.globalData.locationText = o, c.$vm.refresh(), t.navigateBack({
                  delta: 1
                })
              },
              reGetLocation: function() {
                var e = this.city,
                  n = this.county;
                appInstance.globalData.defaultCity = e, appInstance.globalData.defaultCounty = n, t.switchTab({
                  url: getIndexUrl()
                })
              },
              getTownList: function() {
                var e = this,
                  n = {
                    unionid_Encrypt: t.getStorageSync("unionid"),
                    userID: t.getStorageSync("userID")
                  };
                t.showLoading({
                  title: "加载中"
                }), this.$api.GetLocalPositionRelSelectList(n).then((function(t) {
                  if (1 == t.status) {
                    var n = t.data;
                    n ? e.cityList = n : 1 == that.page && (that.cityList = [])
                  }
                }))
              }
            }
          };
        e.default = a
      }).call(this, n("df3c").default)
    },
    "6bdc": function(t, e, n) {},
    "6d7b": function(t, e, n) {
      "use strict";
      var i = n("6bdc");
      n.n(i).a
    },
    7865: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var i = n("47a9");
        n("4aa9"), n("26e8"), i(n("3240"));
        var r = i(n("fe88"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
      }).call(this, n("3223").default, n("df3c").createPage)
    },
    ad86: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return i
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        r = []
    },
    e596: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("14b4"),
        r = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e.default = r.a
    },
    fe88: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ad86"),
        r = n("e596");
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(a);
      n("6d7b");
      var c = n("828b"),
        o = Object(c.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      e.default = o.exports
    }
  },
  [
    ["7865", "common/runtime", "common/vendor"]
  ]
]);
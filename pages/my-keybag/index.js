(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/my-keybag/index"], {
    4348: function(e, t, i) {
      "use strict";
      t.a = function(e) {
        e.options.wxsCallMethods || (e.options.wxsCallMethods = [])
      }
    },
    "4d65": function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("ee3f"),
        s = i("cd0f");
      for (var o in s)["default"].indexOf(o) < 0 && function(e) {
        i.d(t, e, (function() {
          return s[e]
        }))
      }(o);
      i("aa8f");
      var c = i("828b"),
        a = i("4348"),
        r = Object(c.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      "function" == typeof a.a && Object(a.a)(r), t.default = r.exports
    },
    "586f": function(e, t, i) {
      "use strict";
      (function(e, t) {
        var n = i("47a9");
        i("4aa9"), i("26e8"), n(i("3240"));
        var s = n(i("4d65"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(s.default)
      }).call(this, i("3223").default, i("df3c").createPage)
    },
    6975: function(e, t, i) {
      "use strict";
      (function(e, n) {
        var s = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = s(i("af34")),
          c = (getApp(), i("c6ff")),
          a = {
            data: function() {
              return {
                devicesList: [],
                doorList: [],
                deviceId: "",
                blueToothName: "",
                services: {},
                characteristics: {},
                connected: !1,
                searching: !1,
                currentData: "",
                currentIndex: -1,
                retry: 0,
                mask: !0,
                isFound: !1,
                searchBleTimeout: null,
                valueForble: "",
                visible: !1,
                sn: "",
                llmm: null,
                isFinish: !1,
                success: "",
                timeData: "",
                sendTag: 0,
                pointname: "",
                userInfo: {},
                LockType: "",
                SignStr: "",
                parms: {
                  page: 1,
                  rows: 20
                },
                opening: !0,
                ladingFlag: !0,
                NotFlag: !1,
                showPrivacy: !1,
                listenerID: "",
                listener: !0,
                weakNetFlag: !0,
                listenerDoorList: [],
                writeFlag2: 0,
                receiveText: "",
                servicesList: [],
                servicesCount: 0,
                serviceId: "",
                characteristicsId: "",
                hcData: ""
              }
            },
            onLoad: function(e) {},
            onShow: function() {
              e.redirectTo({
                url: "/pages/my-keybag/mobile_open_door"
              })
            },
            onUnload: function() {
              n.offNetworkStatusChange(this.listenerID), this.searchBleTimeout && clearTimeout(this.searchBleTimeout), e.stopBluetoothDevicesDiscovery({
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
              }), this.deviceId && e.closeBLEConnection({
                deviceId: this.deviceId,
                success: function(e) {},
                fail: function(e) {},
                complete: function(e) {}
              })
            },
            onShareAppMessage: function() {
              return {
                title: "",
                path: "pages/my-keybag/index"
              }
            },
            onHide: function() {},
            onReachBottom: function() {
              this.listener && this.getDoorList()
            },
            methods: {
              empowerPhone: function() {
                this.$newUtil.appIsPhoneLogin(), this.ladingFlag = !0
              },
              keyInput: function(e) {
                this.pointname = e.detail.value
              },
              searchKey: function(t) {
                this.listener ? (this.doorList = [], this.parms.page = 1, this.getDoorList()) : e.showModal({
                  title: "离线数据,不支持搜索",
                  showCancel: !1
                })
              },
              getDoorList: function() {
                var t = this;
                e.showLoading({
                  title: "加载中...",
                  mask: !0
                }), this.parms.unionid_Encrypt = e.getStorageSync("unionid"), this.parms.userID = e.getStorageSync("userID"), this.parms.pointname = this.pointname, this.isFinish = !1, this.$api.getPassPowerList(this.parms).then((function(i) {
                  if (t.isFinish = !0, 1 == i.status) {
                    t.doorList = t.doorList.concat(i.data), t.parms.page = i.data.length > 0 ? t.parms.page + 1 : t.parms.page, t.page = i.data.length > 0 ? t.parms.page + 1 : t.parms.page, t.NotFlag = t.doorList.length > 0 && 0 === i.data.length, t.isFinish = !(t.doorList.length > 0);
                    for (var n = t.doorList, s = 0; s < n.length; s++) {
                      var o = n[s].EndTime ? t.$newUtil.getDAY(n[s].EndTime).day : "";
                      n[s].day = o, n[s].pdtime = t.$newUtil.getDAY(n[s].EndTime).pdtime
                    }
                    t.doorList = n, e.setStorageSync("doorLists", JSON.stringify(t.doorList))
                  } else e.hideLoading(), e.getStorageSync("doorLists") && (e.showModal({
                    title: "提示",
                    content: "当前网络信号弱,临时使用离线数据!",
                    showCancel: !1
                  }), t.listener = !1, t.isFinish = !0, t.doorList = JSON.parse(e.getStorageSync("doorLists")), t.listenerDoorList = e.getStorageSync("LDoorList"))
                })).catch((function(i) {
                  e.hideLoading(), e.getStorageSync("doorLists") && Object.keys(i).length > 0 && (e.showModal({
                    title: "提示",
                    content: "当前网络信异常,临时使用离线数据。",
                    showCancel: !1
                  }), t.listener = !1, t.isFinish = !0, t.doorList = JSON.parse(e.getStorageSync("doorLists")), t.listenerDoorList = e.getStorageSync("LDoorList"))
                }))
              },
              processOpendoorCmd: function(t) {
                var i = this,
                  n = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID"),
                    lockSN: this.doorList[this.currentIndex].SN,
                    cmdStr: t,
                    SignStr: this.SignStr,
                    lockType: this.LockType
                  };
                this.$api.processOpendoorCmd(n).then((function(t) {
                  if (console.log("调用解析接口"), 1 == t.status)
                    if (t.data)
                      if (i.retry = ++i.retry, 3 == i.retry) e.hideLoading(), i.isOpening(!1), i.retry = 0, i.valueForble = "", e.showModal({
                        title: "提示",
                        content: "开门失败",
                        showCancel: !1,
                        success: function(e) {
                          i.closeConnect()
                        }
                      });
                      else {
                        i.sendTag = 1, i.currentData = t.data;
                        var n = i.listenerDoorList;
                        if (0 === n.length) i.listenerDoorList = [{
                          SN: i.doorList[i.currentIndex].SN,
                          currentData: t.data,
                          deviceId: i.deviceId
                        }], e.setStorageSync("LDoorList", i.listenerDoorList);
                        else if (n.length > 0) {
                          i.listenerDoorList = i.listenerDoorList.concat([{
                            SN: i.doorList[i.currentIndex].SN,
                            currentData: t.data,
                            deviceId: i.deviceId
                          }]);
                          for (var s = i.listenerDoorList, c = 0; c < s.length; c++) s[c].SN === i.doorList[i.currentIndex].SN && (s[c].currentData = t.data, s[c].deviceId = i.deviceId);
                          var a = (0, o.default)(new Map(s.map((function(e) {
                            return [e.SN, e]
                          }))).values());
                          i.listenerDoorList = a, e.setStorageSync("LDoorList", a)
                        }
                        i.sendData()
                      }
                  else {
                    e.hideLoading(), i.isOpening(!1), i.retry = 0, i.valueForble = "", i.closeConnect(), e.showModal({
                      title: "提示",
                      content: t.msg,
                      showCancel: !1
                    }), i.currentData = i.hcData;
                    var r = i.listenerDoorList;
                    if (0 === r.length) i.listenerDoorList = [{
                      SN: i.doorList[i.currentIndex].SN,
                      currentData: i.currentData,
                      deviceId: i.deviceId
                    }], e.setStorageSync("LDoorList", i.listenerDoorList);
                    else if (r.length > 0) {
                      i.listenerDoorList = i.listenerDoorList.concat([{
                        SN: i.doorList[i.currentIndex].SN,
                        currentData: i.currentData,
                        deviceId: i.deviceId
                      }]);
                      for (var l = i.listenerDoorList, d = 0; d < l.length; d++) l[d].SN === i.doorList[i.currentIndex].SN && (l[d].currentData = i.currentData, l[d].deviceId = i.deviceId);
                      var u = (0, o.default)(new Map(l.map((function(e) {
                        return [e.SN, e]
                      }))).values());
                      i.listenerDoorList = u, e.setStorageSync("LDoorList", u)
                    }
                  } else e.hideLoading(), i.retry = 0, i.valueForble = "", i.isOpening(!1)
                }))
              },
              openRenlianClick: function(t) {
                var i = this,
                  n = t.currentTarget.dataset.index,
                  s = t.currentTarget.dataset.item;
                e.showLoading({
                  title: "正在开门...",
                  mask: !0
                }), this.currentIndex = n, this.isOpening(!0);
                var o = {
                  unionid_Encrypt: e.getStorageSync("unionid"),
                  userID: e.getStorageSync("userID"),
                  lockSN: s.SN,
                  cmdStr: s.Cmd,
                  SignStr: s.SignStr,
                  lockType: s.LockType
                };
                this.$api.processOpendoorCmd(o).then((function(t) {
                  if (1 == t.status) {
                    var n = i;
                    e.showModal({
                      title: "提示",
                      content: t.msg,
                      showCancel: !1,
                      success: function() {
                        n.isOpening(!1)
                      }
                    })
                  } else e.hideLoading(), i.isOpening(!1)
                }))
              },
              closeConnect: function() {
                var t = this;
                this.searchBleTimeout && clearTimeout(this.searchBleTimeout), n.offBLECharacteristicValueChange(), e.closeBLEConnection({
                  deviceId: t.deviceId,
                  success: function(e) {
                    t.resetData()
                  },
                  fail: function(e) {},
                  complete: function(e) {}
                })
              },
              resetData: function() {
                this.retry = 0, this.valueForble = "", this.deviceId = "", this.currentIndex = -1, this.currentData = "", this.connected = !1, this.services = {}, this.characteristics = {}, this.blueToothName = "", this.searching = !1, this.writeFlag2 = 0
              },
              initBlue: function() {
                var t = this;
                e.onBluetoothDeviceFound((function(i) {
                  for (var n = 0; n < i.devices.length; n++) i.devices[n].name == t.blueToothName && (t.deviceId = i.devices[n].deviceId, t.isFound = !0, e.stopBluetoothDevicesDiscovery({
                    success: function(e) {
                      t.searching = !1
                    }
                  }), t.connect())
                }))
              },
              search: function() {
                var t = this;
                t.searching ? (t.isOpening(!1), e.stopBluetoothDevicesDiscovery({
                  success: function(e) {
                    t.searching = !1
                  }
                })) : e.closeBluetoothAdapter({
                  complete: function(i) {
                    e.openBluetoothAdapter({
                      success: function(i) {
                        t.searchBleTimeout = setTimeout((function() {
                          t.isFound || (t.isOpening(!1), e.stopBluetoothDevicesDiscovery({
                            success: function(t) {
                              e.hideLoading(), e.showModal({
                                title: "提示",
                                content: "开门失败，为保证开门正常，请您开启GPS定位与手机蓝牙后重试",
                                showCancel: !1
                              })
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                          }))
                        }), 1e4), e.showLoading({
                          title: "正在开门中",
                          mask: t.mask
                        }), e.startBluetoothDevicesDiscovery({
                          allowDuplicatesKey: !1,
                          success: function(e) {
                            t.initBlue(), t.searching = !0, t.deviceId = ""
                          }
                        })
                      },
                      fail: function(i) {
                        t.isOpening(!1), 3 === i.errno ? n.showModal({
                          title: "需开启系统权限",
                          content: "蓝牙初始化异常" + JSON.stringify(i) + "。请进入【设置】>【应用管理】>【微信】>【其他权限】中开启“附近设备”权限",
                          confirmText: "前往设置",
                          success: function(e) {}
                        }) : e.showModal({
                          title: "提示",
                          content: "请检查手机蓝牙是否打开" + JSON.stringify(i),
                          showCancel: !1,
                          success: function(e) {
                            t.searching = !1
                          }
                        })
                      }
                    })
                  }
                })
              },
              connect: function() {
                var t = this;
                e.stopBluetoothDevicesDiscovery({
                  success: function(e) {
                    t.searching = !1
                  }
                }), e.createBLEConnection({
                  deviceId: t.deviceId,
                  timeout: 1e4,
                  success: function(e) {
                    t.searching = !0, t.connected = !0, t.notifyBluetooth()
                  },
                  fail: function(i) {
                    t.isOpening(!1), e.hideLoading(), e.showModal({
                      title: "提示",
                      content: "连接门锁设备失败",
                      showCancel: !1,
                      success: function(e) {
                        t.resetData()
                      }
                    })
                  }
                })
              },
              sendData: function() {
                var t = this;
                this.connected ? t.writeValue() : e.createBLEConnection({
                  deviceId: t.deviceId,
                  timeout: 1e4,
                  success: function(e) {
                    t.notifyBluetooth()
                  },
                  fail: function(i) {
                    t.isOpening(!1), e.hideLoading(), e.showModal({
                      title: "提示",
                      content: "连接门锁设备失败,请重试",
                      showCancel: !1,
                      success: function(e) {
                        t.resetData()
                      }
                    }), console.log("二次连接失败", i)
                  }
                })
              },
              writeValue: function() {
                var t = this;
                if (t.connected) {
                  var i = null,
                    n = null;
                  if (t.listener) i = t.currentData, n = 0 == t.sendTag ? t.timeData : t.doorList[t.currentIndex].currentData ? t.doorList[t.currentIndex].currentData : i, t.hcData = n;
                  else {
                    for (var s = t.listenerDoorList, o = 0; o < s.length; o++)
                      if (t.deviceId === s[o].deviceId) {
                        i = s[o].currentData;
                        break
                      } n = 0 == t.sendTag ? t.timeData : i
                  }
                  console.log("下发的次数" + t.sendTag), console.log("下发的的数据" + n);
                  var a = c.string2buffer(n);
                  e.writeBLECharacteristicValue({
                    deviceId: t.deviceId,
                    serviceId: t.serviceId,
                    characteristicId: t.characteristicsId,
                    value: a,
                    success: function(i) {
                      1 != t.sendTag || t.listener || (e.hideLoading(), t.isOpening(!1), t.retry = 0, t.valueForble = "", t.closeConnect(), e.showModal({
                        title: "提示",
                        content: "开门成功。",
                        showCancel: !1
                      }))
                    },
                    fail: function(i) {
                      e.hideLoading(), t.isOpening(!1), e.showModal({
                        title: "提示",
                        content: "开门失败，请重试",
                        showCancel: !1,
                        success: function(e) {
                          t.resetData()
                        }
                      })
                    }
                  })
                } else t.isOpening(!1), e.showModal({
                  title: "提示",
                  content: "开门失败,请重试",
                  showCancel: !1,
                  success: function(e) {
                    t.searching = !1, t.resetData()
                  }
                })
              },
              notifyBluetooth: function() {
                var t = this;
                t.servicesCount = 0, e.getBLEDeviceServices({
                  deviceId: t.deviceId,
                  success: function(i) {
                    var n = i.services;
                    t.services = i.services, console.log("设备服务" + JSON.stringify(t.services));
                    for (var s = function(i) {
                        var s = n[i].uuid.split("-")[0];
                        if ("0000FFE0" !== s) return console.log("uuid" + s), t.servicesCount += 1, t.servicesCount === n.length && e.showModal({
                          title: "提示",
                          content: "没有找到指定的服务值",
                          showCancel: !1
                        }), "continue";
                        t.serviceId = n[i].uuid, e.getBLEDeviceCharacteristics({
                          deviceId: t.deviceId,
                          serviceId: t.serviceId,
                          success: function(s) {
                            t.characteristics = s.characteristics;
                            for (var o = s.characteristics, c = 0; c < o.length; c++) {
                              "0000FFE1" === o[c].uuid.split("-")[0] && (t.characteristicsId = o[c].uuid, e.notifyBLECharacteristicValueChange({
                                state: !0,
                                deviceId: t.deviceId,
                                serviceId: n[i].uuid,
                                characteristicId: o[c].uuid,
                                success: function(e) {
                                  console.log("启用notify成功")
                                }
                              }), console.log("执行顺2"), t.writeValue())
                            }
                          }
                        })
                      }, o = 0; o < n.length; o++) s(o)
                  }
                }), e.onBLEConnectionStateChange((function(e) {
                  console.log("执行顺1"), e.connected || console.log("蓝牙断开"), t.connected = e.connected
                })), e.onBLECharacteristicValueChange((function(i) {
                  if (console.log("监听值" + JSON.stringify(i)), console.log("监听值" + JSON.stringify(i.value)), console.log("监听值" + c.ab2hex(i.value)), console.log("3执行顺" + t.writeFlag2), 0 == t.sendTag) console.log("3-1执行顺"), t.sendTag = 1, t.writeValue();
                  else {
                    t.sendTag = 1;
                    var n = c.ab2hex(i.value);
                    t.receiveText = n, n.indexOf("b6") >= 0 && n.indexOf("6b") >= 0 ? t.listener ? t.doorList[t.currentIndex].currentData ? (t.writeFlag2 += 1, t.writeFlag2 < 1 && t.sendData(), t.writeFlag2 >= 1 && (t.isOpening(!1), e.hideLoading(), e.showModal({
                      title: "提示",
                      content: "开门成功",
                      showCancel: !1
                    })), console.log("执行顺10")) : (console.log("执行顺4"), t.processOpendoorCmd(n)) : t.listener && !t.weakNetFlag || (console.log("执行顺5" + t.writeFlag2), t.writeFlag2 += 1, t.writeFlag2 < 1 && t.sendData(), t.writeFlag2 >= 1 && (t.isOpening(!1), e.hideLoading())) : n.indexOf("b6") >= 0 ? t.valueForble = n.substring(n.indexOf("b"), n.length) : n.indexOf("6b") >= 0 && (t.valueForble += n, 40 == t.valueForble.length && (t.listener ? (console.log("执行顺6"), t.processOpendoorCmd(t.valueForble)) : t.listener && !t.weakNetFlag || (console.log("执行顺7"), t.writeFlag2 += 1, t.writeFlag2 < 1 && t.sendData(), t.writeFlag2 >= 1 && (t.isOpening(!1), e.hideLoading()))))
                  }
                }))
              },
              openDoorClick: function(t) {
                var i = this,
                  n = t.currentTarget.dataset.index;
                i.doorList[n].pdtime < 7 ? e.showModal({
                  title: "提示",
                  content: "您的门禁即将到期，为了不影响您的出入，请及时续期！",
                  showCancel: !1,
                  success: function(e) {
                    i.kaimen(n)
                  }
                }) : i.kaimen(n)
              },
              kaimen: function(e) {
                this.searchBleTimeout && clearTimeout(this.searchBleTimeout);
                var t = this.doorList[e].Cmd.split("|");
                if (t) {
                  this.isFound = !1, this.searching = !1;
                  var i = this.doorList[e].BleName;
                  this.currentIndex = e, this.timeData = t[0], this.currentData = t[1], this.blueToothName = i, this.SignStr = this.doorList[e].SignStr, this.LockType = this.doorList[e].LockType, this.sendTag = 0, this.isOpening(!0), this.search()
                } else this.$modalToast("门禁授权已过期")
              },
              isOpening: function(e) {
                this.doorList[this.currentIndex].opening = e, this.$set(this.doorList, this.currentIndex, this.doorList[this.currentIndex])
              },
              showLlmm: function(e) {
                var t = e.currentTarget.dataset.item;
                this.sn = t.SN, this.SignStr = t.SignStr, this.LockType = t.LockType, this.llmm = "", this.createLlmm()
              },
              cancelLlmm: function(e) {
                this.visible = !1
              },
              copyLlmm: function() {
                e.setClipboardData({
                  data: this.llmm,
                  success: function(t) {
                    e.getClipboardData({
                      success: function(e) {}
                    })
                  }
                })
              },
              createLlmm: function(t) {
                var i = this,
                  n = this,
                  s = null;
                if (this.sn || (s = "SN码不能为空"), null == s) {
                  var o = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID"),
                    sn: this.sn,
                    SignStr: this.SignStr,
                    lockType: this.LockType
                  };
                  e.showLoading({
                    title: "正在生成临时密码",
                    mask: !0
                  }), this.$api.createTempPW(o).then((function(t) {
                    1 == t.status && (e.hideLoading(), n.visible = !0, 1 === i.LockType ? i.llmm = t.data + "#" : 2 === i.LockType && (i.llmm = t.data))
                  }))
                } else this.$modalToast(s)
              }
            }
          };
        t.default = a
      }).call(this, i("df3c").default, i("3223").default)
    },
    "784a": function(e, t, i) {},
    aa8f: function(e, t, i) {
      "use strict";
      var n = i("784a");
      i.n(n).a
    },
    cd0f: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("6975"),
        s = i.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      t.default = s.a
    },
    ee3f: function(e, t, i) {
      "use strict";
      i.d(t, "b", (function() {
        return n
      })), i.d(t, "c", (function() {
        return s
      })), i.d(t, "a", (function() {}));
      var n = function() {
          this.$createElement;
          var e = (this._self._c, 0 == this.doorList.length && this.isFinish);
          this.$mp.data = Object.assign({}, {
            $root: {
              g0: e
            }
          })
        },
        s = []
    }
  },
  [
    ["586f", "common/runtime", "common/vendor"]
  ]
]);
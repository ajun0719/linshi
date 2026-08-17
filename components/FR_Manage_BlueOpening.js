(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/FR_Manage_BlueOpening"], {
    "249f": function(e, t, i) {
      "use strict";
      (function(e, n) {
        var c = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = c(i("c6ff")),
          a = {
            name: "FR_BlueOpeningDoor",
            data: function() {
              return {
                searchBleTimeout: null,
                timeData: "",
                searchFlag: !1,
                connectFlag: !1,
                blueToothName: "",
                SignStr: "",
                deviceId: "",
                connected: !1,
                servicesCount: 0,
                serviceId: "",
                valueForble: "",
                networkFlag: !0,
                visible: !1,
                llmm: "",
                opening: !1,
                buttomFlag: !0
              }
            },
            props: {
              item: {
                type: Object,
                default: {}
              },
              index: {
                type: Number,
                default: -1
              }
            },
            mounted: function() {
              var t = this;
              e.getNetworkType({
                success: function(e) {
                  var i = e.networkType,
                    n = e.weakNet;
                  t.networkFlag = "2g" != i && "3g" != i && "none" != i && !n
                }
              })
            },
            methods: {
              openDoor_FR: function() {
                var t = this;
                e.getNetworkType({
                  success: function(e) {
                    var i = e.networkType,
                      n = e.weakNet;
                    t.networkFlag = "2g" != i && "3g" != i && "none" != i && !n, t.qunaxian()
                  }
                })
              },
              qunaxian: function() {
                var t = this;
                this.$newUtil.JudgmentSystemInfo(t.networkFlag).then((function(i) {
                  1 == i ? t.requestBluetoothAuth() : 2 == i ? t.$newUtil.handleReject() : 3 == i ? t.item.pdtime < 7 ? n.showModal({
                    title: "提示",
                    content: "您的门禁即将到期，为了不影响您的出入，请及时续期！",
                    showCancel: !1,
                    success: function(e) {
                      t.kaimen()
                    }
                  }) : t.kaimen() : 4 == i && (e.getNetworkType({
                    success: function(e) {
                      var t = e.networkType,
                        i = e.weakNet;
                      ("2g" == t || "3g" == t || "none" == t || i) && n.showLoading({
                        title: "加载中...",
                        mask: !0
                      })
                    }
                  }), t.kaimen())
                }))
              },
              requestBluetoothAuth: function() {
                var t = this;
                e.authorize({
                  scope: "scope.bluetooth",
                  success: function() {
                    console.log("授权成功"), t.kaimen()
                  },
                  fail: function() {
                    console.log("用户拒绝授权"), t.$newUtil.handleReject()
                  }
                })
              },
              kaimen: function() {
                if (this.searchBleTimeout && clearTimeout(this.searchBleTimeout), this.item.Cmd) {
                  this.searchFlag = !1, this.connectFlag = !1;
                  var e = this.item.BleName;
                  this.opening || this.buttomFlag && (this.opening = !0, this.buttomFlag = !1, this.blueToothName = e, this.SignStr = this.item.SignStr, this.$emit("updataFR", {
                    flag: !0,
                    index: this.index,
                    cmd: "",
                    deviceId: this.deviceId
                  }), this.search())
                } else this.$modalToast("门禁授权已过期")
              },
              search: function() {
                var t = this;
                t.searchFlag ? (this.$emit("updataFR", {
                  flag: !1,
                  index: this.index,
                  cmd: "",
                  deviceId: this.deviceId
                }), n.stopBluetoothDevicesDiscovery({
                  success: function(e) {
                    t.searchFlag = !1
                  }
                })) : n.closeBluetoothAdapter({
                  complete: function(i) {
                    n.openBluetoothAdapter({
                      success: function(e) {
                        t.searchBleTimeout = setTimeout((function() {
                          t.connectFlag || (t.$emit("updataFR", {
                            flag: !1,
                            index: t.index,
                            cmd: "",
                            deviceId: t.deviceId
                          }), t.opening = !1, t.buttomFlag = !0, n.stopBluetoothDevicesDiscovery({
                            success: function(e) {
                              n.hideLoading(), n.showModal({
                                title: "提示",
                                content: '没有搜索到蓝牙设备，请靠近设备后再尝试点击"开门"按钮！',
                                showCancel: !1
                              })
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                          }))
                        }), 1e4), n.showLoading({
                          title: "正在搜索蓝牙...",
                          mask: !0
                        }), n.startBluetoothDevicesDiscovery({
                          allowDuplicatesKey: !1,
                          success: function(e) {
                            t.initBlue(), t.searchFlag = !0, t.deviceId = ""
                          }
                        })
                      },
                      fail: function(i) {
                        t.buttomFlag = !0, t.opening = !1, t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        }), 3 === i.errno ? e.showModal({
                          title: "需开启系统权限",
                          content: "蓝牙初始化异常" + JSON.stringify(i) + "。请进入【设置】>【应用管理】>【微信】>【其他权限】中开启“附近设备”权限",
                          confirmText: "前往设置"
                        }) : n.showModal({
                          title: "提示",
                          content: "请检查手机蓝牙是否打开" + JSON.stringify(i),
                          showCancel: !1,
                          success: function(e) {
                            t.searchFlag = !1
                          }
                        })
                      }
                    })
                  }
                })
              },
              initBlue: function() {
                var e = this,
                  t = !0;
                n.onBluetoothDeviceFound((function(i) {
                  for (var c = 0; c < i.devices.length; c++) i.devices[c].name == e.blueToothName && t && (e.deviceId = i.devices[c].deviceId, e.connectFlag = !0, n.stopBluetoothDevicesDiscovery({
                    success: function(t) {
                      e.searchFlag = !1
                    }
                  }), t = !1, e.connect())
                }))
              },
              connect: function() {
                var e = this;
                n.stopBluetoothDevicesDiscovery({
                  success: function(t) {
                    e.searchFlag = !1
                  }
                }), n.createBLEConnection({
                  deviceId: e.deviceId,
                  timeout: 1e4,
                  success: function(t) {
                    e.connected = !0, n.hideLoading(), n.showLoading({
                      title: "正在开门中...",
                      mask: !0
                    }), e.notifyBluetooth()
                  },
                  fail: function(t) {
                    e.$emit("updataFR", {
                      flag: !1,
                      index: e.index,
                      cmd: "",
                      deviceId: e.deviceId
                    }), e.buttomFlag = !0, e.opening = !1, n.hideLoading(), n.showModal({
                      title: "提示",
                      content: "连接门锁设备失败" + JSON.stringify(t),
                      showCancel: !1,
                      success: function(t) {
                        e.resetData()
                      }
                    })
                  }
                })
              },
              notifyBluetooth: function() {
                var e = this;
                e.servicesCount = 0, n.getBLEDeviceServices({
                  deviceId: e.deviceId,
                  success: function(t) {
                    for (var i = t.services, c = function(t) {
                        var c = i[t].uuid.split("-")[0];
                        return "0000FFE0" == c ? (e.serviceId = i[t].uuid, n.getBLEDeviceCharacteristics({
                          deviceId: e.deviceId,
                          serviceId: e.serviceId,
                          success: function(c) {
                            e.characteristics = c.characteristics;
                            for (var o = c.characteristics, a = 0; a < o.length; a++) {
                              "0000FFE1" === o[a].uuid.split("-")[0] && (e.characteristicsId = o[a].uuid, n.notifyBLECharacteristicValueChange({
                                state: !0,
                                deviceId: e.deviceId,
                                serviceId: i[t].uuid,
                                characteristicId: o[a].uuid,
                                success: function(t) {
                                  console.log("启用notify成功" + e.item.Cmd), e.writeValue(e.item.Cmd)
                                }
                              }))
                            }
                          }
                        }), "break") : "0000FFE0" != c ? (e.servicesCount += 1, e.servicesCount === i.length && (e.$emit("updataFR", {
                          flag: !1,
                          index: e.index,
                          cmd: "",
                          deviceId: e.deviceId
                        }), n.showModal({
                          title: "提示",
                          content: "没有找到指定的服务值",
                          showCancel: !1
                        })), "continue") : void 0
                      }, o = 0; o < i.length; o++) {
                      if ("break" === c(o)) break
                    }
                  }
                }), n.onBLEConnectionStateChange((function(t) {
                  t.connected || (console.log("蓝牙断开"), e.closeConnect()), e.connected = t.connected
                })), n.onBLECharacteristicValueChange((function(t) {
                  var i = o.default.ab2hex(t.value);
                  e.receiveText = i, i.length > 0 ? i.indexOf("b6") >= 0 && i.indexOf("6b") >= 0 ? (console.log("网络状态", e.networkFlag, e.timeData), e.networkFlag && !e.timeData ? e.processOpendoorCmd(i) : e.networkFlag && e.timeData ? (e.timeData = "", e.closeConnect()) : e.networkFlag || (n.showModal({
                    title: "提示",
                    content: "开门指令已下发！",
                    showCancel: !1
                  }), e.closeConnect())) : i.indexOf("b6") >= 0 ? e.valueForble = i.substring(i.indexOf("b"), i.length) : i.indexOf("6b") >= 0 && (e.valueForble += i, 40 == e.valueForble.length && (e.networkFlag && !e.timeData ? e.processOpendoorCmd(i) : e.networkFlag && e.timeData ? (e.timeData = "", e.closeConnect()) : e.networkFlag || (n.showModal({
                    title: "提示",
                    content: "开门指令已下发！",
                    showCancel: !1
                  }), console.log("无网络"), e.closeConnect()))) : (n.showModal({
                    title: "提示",
                    content: "蓝牙下发数据失败",
                    showCancel: !1
                  }), n.hideLoading(), e.closeConnect())
                }))
              },
              writeValue: function(e) {
                var t = this;
                if (console.log("写入数据" + JSON.stringify({
                    deviceId: t.deviceId,
                    serviceId: t.serviceId,
                    characteristicId: t.characteristicsId,
                    data: e
                  })), t.connected) {
                  var i = o.default.string2buffer(e);
                  n.writeBLECharacteristicValue({
                    deviceId: t.deviceId,
                    serviceId: t.serviceId,
                    characteristicId: t.characteristicsId,
                    value: i,
                    success: function(e) {},
                    fail: function(e) {
                      n.hideLoading(), t.$emit("updataFR", {
                        flag: !1,
                        index: t.index,
                        cmd: "",
                        deviceId: t.deviceId
                      }), n.showModal({
                        title: "提示",
                        content: "开门失败，请重试" + JSON.stringify(e),
                        showCancel: !1,
                        success: function(e) {
                          t.closeConnect()
                        }
                      })
                    }
                  })
                } else t.$emit("updataFR", {
                  flag: !1,
                  index: t.index,
                  cmd: "",
                  deviceId: t.deviceId
                }), n.showModal({
                  title: "提示",
                  content: "开门失败,请重试",
                  showCancel: !1,
                  success: function(e) {
                    t.searching = !1, t.resetData()
                  }
                })
              },
              processOpendoorCmd: function(e) {
                var t = this,
                  i = {
                    unionid_Encrypt: n.getStorageSync("unionid"),
                    userID: n.getStorageSync("userID"),
                    lockSN: t.item.SN,
                    cmdStr: e,
                    SignStr: this.SignStr,
                    lockType: this.item.LockType,
                    VType: -1
                  };
                this.$api.ProcessOpendoorCmd2(i).then((function(e) {
                  1 == e.status ? 1 === e.data.handle ? (t.timeData = e.data.cmd, t.writeValue(e.data.cmd), t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }), t.valueForble = "", n.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1,
                    success: function() {
                      t.opening = !1, t.buttomFlag = !0, t.$emit("updataCacheList")
                    }
                  })) : 0 === e.data.handle ? (t.opening = !1, t.$emit("updataFR", {
                    flag: !0,
                    index: t.index,
                    cmd: e.data.cmd,
                    deviceId: t.deviceId
                  }), t.item.Cmd = e.data.cmd, t.writeValue(e.data.cmd)) : 2 === e.data.handle && (n.hideLoading(), t.opening = !1, n.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  }), t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }), t.closeConnect()) : (t.opening = !1, n.hideLoading(), t.valueForble = "", t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }))
                })).catch((function() {
                  n.hideLoading(), t.closeConnect(), t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  })
                }))
              },
              closeConnect: function() {
                var t = this;
                this.searchBleTimeout && clearTimeout(this.searchBleTimeout), n.hideLoading(), e.offBLECharacteristicValueChange(), n.closeBLEConnection({
                  deviceId: t.deviceId,
                  success: function(e) {
                    t.resetData()
                  },
                  fail: function(e) {},
                  complete: function(e) {}
                })
              },
              resetData: function() {
                this.$emit("updataFR", {
                  flag: !1,
                  index: this.index,
                  cmd: "",
                  deviceId: this.deviceId
                }), setTimeout((function() {
                  n.closeBluetoothAdapter({
                    success: function() {
                      console.log("蓝牙适配器已关闭")
                    }
                  })
                }), 400), this.buttomFlag = !0, this.opening = !1, this.deviceId = "", this.connected = !1, this.blueToothName = "", this.searchFlag = !1, this.services = {}, this.characteristics = {}, this.timeData = ""
              },
              showLlmm: function(e) {
                this.sn = this.item.SN, this.SignStr = this.SignStr, this.LockType = this.item.LockType, this.llmm = "", this.createLlmm()
              },
              cancelLlmm: function(e) {
                this.visible = !1
              },
              copyLlmm: function() {
                var e = this;
                n.setClipboardData({
                  data: e.llmm,
                  success: function(t) {
                    n.getClipboardData({
                      success: function(t) {
                        e.visible = !1
                      }
                    })
                  }
                })
              },
              createLlmm: function() {
                var e = this;
                if (this.item.Cmd) {
                  var t = null;
                  if (this.item.SN || (t = "SN码不能为空"), null == t) {
                    var i = {
                      unionid_Encrypt: n.getStorageSync("unionid"),
                      userID: n.getStorageSync("userID"),
                      sn: this.item.SN,
                      SignStr: this.item.SignStr,
                      lockType: this.item.LockType
                    };
                    n.showLoading({
                      title: "正在生成临时密码",
                      mask: !0
                    }), this.$api.CreateTempPW2(i).then((function(t) {
                      1 == t.status && (n.hideLoading(), e.visible = !0, e.llmm = t.data + "#")
                    }))
                  } else this.$modalToast(t)
                }
              }
            }
          };
        t.default = a
      }).call(this, i("3223").default, i("df3c").default)
    },
    3993: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("cc62"),
        c = i("3f26");
      for (var o in c)["default"].indexOf(o) < 0 && function(e) {
        i.d(t, e, (function() {
          return c[e]
        }))
      }(o);
      i("66b3");
      var a = i("828b"),
        s = Object(a.a)(c.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = s.exports
    },
    "3f26": function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("249f"),
        c = i.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      t.default = c.a
    },
    "59ed": function(e, t, i) {},
    "66b3": function(e, t, i) {
      "use strict";
      var n = i("59ed");
      i.n(n).a
    },
    cc62: function(e, t, i) {
      "use strict";
      i.d(t, "b", (function() {
        return n
      })), i.d(t, "c", (function() {
        return c
      })), i.d(t, "a", (function() {}));
      var n = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/FR_Manage_BlueOpening-create-component", {
    "components/FR_Manage_BlueOpening-create-component": function(e, t, i) {
      i("df3c").createComponent(i("3993"))
    }
  },
  [
    ["components/FR_Manage_BlueOpening-create-component"]
  ]
]);
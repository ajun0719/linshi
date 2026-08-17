(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/YZ_Manage_Blue_Face_3"], {
    "0f4c": function(e, t, n) {
      "use strict";
      var i = n("bc97");
      n.n(i).a
    },
    "14b6": function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return i
      })), n.d(t, "c", (function() {
        return c
      })), n.d(t, "a", (function() {}));
      var i = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "5d55": function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("14b6"),
        c = n("a951");
      for (var o in c)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return c[e]
        }))
      }(o);
      n("0f4c");
      var a = n("828b"),
        s = Object(a.a)(c.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = s.exports
    },
    a951: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("df4e"),
        c = n.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t.default = c.a
    },
    bc97: function(e, t, n) {},
    df4e: function(e, t, n) {
      "use strict";
      (function(e, i) {
        var c = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = c(n("c6ff")),
          a = {
            name: "YZ_Manage_Blue_Face_3",
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
                serviceId: "",
                valueForble: "",
                networkFlag: !0,
                visible: !1,
                llmm: "",
                buttomFlag: !0,
                TwoSearchBlueN: 1,
                searchSetInterval: null,
                openBluetooth: !1,
                YZMima: "",
                OpenFlag: !0,
                OpenType: -1,
                Exception: "",
                opening: !1
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
                  var n = e.networkType,
                    i = e.weakNet;
                  t.networkFlag = "2g" != n && "3g" != n && "none" != n && !i
                }
              })
            },
            methods: {
              openDoor_FR: function() {
                var t = this;
                e.getNetworkType({
                  success: function(e) {
                    var n = e.networkType,
                      i = e.weakNet;
                    t.networkFlag = "2g" != n && "3g" != n && "none" != n && !i, t.qunaxian()
                  }
                })
              },
              qunaxian: function() {
                var t = this;
                this.$newUtil.JudgmentSystemInfo(t.networkFlag).then((function(n) {
                  1 == n ? t.requestBluetoothAuth() : 2 == n ? t.$newUtil.handleReject() : 3 == n ? t.item.pdtime < 7 ? i.showModal({
                    title: "提示",
                    content: "您的门禁即将到期，为了不影响您的出入，请及时续期！",
                    showCancel: !1,
                    success: function(e) {
                      t.kaimen_FR()
                    }
                  }) : t.kaimen_FR() : 4 == n && (e.getNetworkType({
                    success: function(e) {
                      var t = e.networkType,
                        n = e.weakNet;
                      ("2g" == t || "3g" == t || "none" == t || n) && i.showLoading({
                        title: "加载中...",
                        mask: !0
                      })
                    }
                  }), t.kaimen_FR())
                }))
              },
              requestBluetoothAuth: function() {
                var t = this;
                e.authorize({
                  scope: "scope.bluetooth",
                  success: function() {
                    t.kaimen_FR()
                  },
                  fail: function() {
                    t.$newUtil.handleReject()
                  }
                })
              },
              kaimen_FR: function() {
                if (this.searchBleTimeout && clearTimeout(this.searchBleTimeout), this.searchSetInterval && clearInterval(this.searchSetInterval), this.$emit("dingshi", this.searchBleTimeout, this.searchSetInterval), this.item.Cmd) {
                  if (!this.opening && this.buttomFlag) {
                    this.buttomFlag = !1, this.connectFlag = !1;
                    var e = this.item.BleName;
                    this.blueToothName = e, this.SignStr = this.item.SignStr, this.$emit("updataFR", {
                      flag: !0,
                      index: this.index,
                      cmd: "",
                      deviceId: this.deviceId
                    }), this.opening = !0, this.search()
                  }
                } else this.$modalToast("门禁授权已过期")
              },
              search: function() {
                var t = this;
                i.closeBluetoothAdapter({
                  complete: function(n) {
                    i.openBluetoothAdapter({
                      success: function(e) {
                        i.hideLoading(), t.searchBleTimeout = setTimeout((function() {
                          t.connectFlag || (t.$emit("updataFR", {
                            flag: !1,
                            index: t.index,
                            cmd: "",
                            deviceId: t.deviceId
                          }), t.opening = !1, i.stopBluetoothDevicesDiscovery({
                            success: function(e) {
                              t.$emit("updataFR", {
                                flag: !1,
                                index: t.index,
                                cmd: "",
                                deviceId: t.deviceId
                              }), t.opening = !1, t.buttomFlag = !0, i.hideLoading(), i.showModal({
                                title: "提示",
                                content: '没有搜索到蓝牙设备，请靠近设备后再尝试点击"开门"按钮！',
                                showCancel: !1
                              })
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                          }))
                        }), 1e4), t.$emit("dingshi", t.searchBleTimeout, t.searchSetInterval), i.showLoading({
                          title: "正在搜索蓝牙...",
                          mask: !0
                        }), i.startBluetoothDevicesDiscovery({
                          allowDuplicatesKey: !1,
                          success: function(e) {
                            t.initBlue(), t.deviceId = ""
                          },
                          fail: function(e) {
                            i.hideLoading(), i.showLoading({
                              title: "再次搜索蓝牙...",
                              mask: !0
                            });
                            var n = 1;
                            t.TwoSearchBlue(n), t.searchSetInterval = setInterval((function() {
                              n++, t.TwoSearchBlue(n)
                            }), 2e3)
                          }
                        })
                      },
                      fail: function(n) {
                        i.hideLoading(), t.buttomFlag = !0, t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        }), t.opening = !1, 3 === n.errno ? e.showModal({
                          title: "需开启系统权限",
                          content: "蓝牙初始化异常" + JSON.stringify(n) + "。请进入【设置】>【应用管理】>【微信】>【其他权限】中开启“附近设备”权限",
                          confirmText: "前往设置"
                        }) : 108 === n.errno ? i.showModal({
                          title: "提示",
                          content: "离线状态不可用！原因是：还没授权小程序使用蓝牙，而这个授权过程需要网络。" + JSON.stringify(n),
                          showCancel: !1,
                          success: function(e) {}
                        }) : i.showModal({
                          title: "提示",
                          content: "请检查手机蓝牙是否打开" + JSON.stringify(n),
                          showCancel: !1,
                          success: function(e) {}
                        })
                      }
                    })
                  }
                })
              },
              TwoSearchBlue: function(e) {
                var t = this;
                t.connectFlag = !0, t.searchBleTimeout && (clearTimeout(t.searchBleTimeout), t.$emit("dingshi", t.searchBleTimeout, t.searchSetInterval)), i.stopBluetoothDevicesDiscovery({
                  success: function(n) {
                    i.startBluetoothDevicesDiscovery({
                      allowDuplicatesKey: !1,
                      success: function(e) {
                        t.searchSetInterval && clearInterval(t.searchSetInterval), t.initBlue(), t.deviceId = ""
                      },
                      fail: function(n) {
                        8 == e && (t.searchSetInterval && clearInterval(t.searchSetInterval), i.hideLoading(), t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        }), t.opening = !1, t.buttomFlag = !0, t.$refs.popup.open(), t.OpenType = 1, t.Exception = "搜索蓝牙异常" + JSON.stringify(n))
                      }
                    })
                  }
                })
              },
              initBlue: function() {
                var e = this,
                  t = !0;
                i.onBluetoothDeviceFound((function(n) {
                  for (var c = 0; c < n.devices.length; c++) n.devices[c].name == e.blueToothName && t && (e.deviceId = n.devices[c].deviceId, e.connectFlag = !0, i.stopBluetoothDevicesDiscovery({
                    success: function(e) {}
                  }), t = !1, e.connect())
                }))
              },
              connect: function() {
                var e = this;
                i.stopBluetoothDevicesDiscovery({
                  success: function(e) {}
                }), i.hideLoading(), i.showLoading({
                  title: "正在连接设备...",
                  mask: !0
                }), i.createBLEConnection({
                  deviceId: e.deviceId,
                  timeout: 1e4,
                  success: function(t) {
                    e.connected = !0, i.hideLoading(), i.showLoading({
                      title: "正在开门中...",
                      mask: !0
                    }), e.notifyBluetooth()
                  },
                  fail: function(t) {
                    i.hideLoading(), i.showLoading({
                      title: "再次连接设备...",
                      mask: !0
                    }), e.zaiciCreateBLE()
                  }
                })
              },
              zaiciCreateBLE: function() {
                var e = this;
                i.createBLEConnection({
                  deviceId: e.deviceId,
                  timeout: 1e4,
                  success: function(t) {
                    e.connected = !0, i.hideLoading(), i.showLoading({
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
                    }), e.opening = !1, i.hideLoading(), e.buttomFlag = !0, i.showModal({
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
                i.getBLEDeviceServices({
                  deviceId: e.deviceId,
                  success: function(t) {
                    t.services, e.serviceId = t.services[0].uuid, i.getBLEDeviceCharacteristics({
                      deviceId: e.deviceId,
                      serviceId: t.services[0].uuid,
                      success: function(n) {
                        e.characteristicsId = n.characteristics[0].uuid, i.notifyBLECharacteristicValueChange({
                          state: !0,
                          deviceId: e.deviceId,
                          serviceId: t.services[0].uuid,
                          characteristicId: n.characteristics[0].uuid,
                          success: function(t) {
                            console.log("启用notify成功"), e.writeValue(e.item.Cmd)
                          },
                          fail: function(e) {
                            console.log("特征值" + JSON.stringify(e))
                          }
                        })
                      }
                    })
                  }
                }), i.onBLEConnectionStateChange((function(t) {
                  t.connected || e.closeConnect(), e.connected = t.connected
                })), i.onBLECharacteristicValueChange((function(t) {
                  var n = o.default.ab2hex(t.value);
                  e.receiveText = n, n.length > 0 ? n.indexOf("b6") >= 0 && n.indexOf("6b") >= 0 ? e.networkFlag && !e.timeData ? e.processOpendoorCmd(n) : e.networkFlag && e.timeData ? (e.timeData = "", e.closeConnect()) : e.networkFlag || (i.showModal({
                    title: "提示",
                    content: "开门指令已下发！",
                    showCancel: !1
                  }), e.closeConnect()) : n.indexOf("b6") >= 0 ? e.valueForble = n.substring(n.indexOf("b"), n.length) : n.indexOf("6b") >= 0 && (e.valueForble += n, 40 == e.valueForble.length && (e.networkFlag && !e.timeData ? e.processOpendoorCmd(n) : e.networkFlag && e.timeData ? (e.timeData = "", e.closeConnect()) : e.networkFlag || (e.closeConnect(), i.showModal({
                    title: "提示",
                    content: "开门指令已下发！",
                    showCancel: !1
                  })))) : (e.closeConnect(), e.$refs.popup.open(), e.OpenType = 3)
                }))
              },
              writeValue: function(e) {
                var t = this,
                  n = o.default.string2buffer(e);
                t.connected ? i.writeBLECharacteristicValue({
                  deviceId: t.deviceId,
                  serviceId: t.serviceId,
                  characteristicId: t.characteristicsId,
                  value: n,
                  success: function(e) {},
                  fail: function(e) {
                    t.closeConnect(), t.$emit("updataFR", {
                      flag: !1,
                      index: t.index,
                      cmd: "",
                      deviceId: t.deviceId
                    }), t.opening = !1, t.$refs.popup.open(), t.OpenType = 2, t.Exception = "开门失败，请重试" + JSON.stringify(e)
                  }
                }) : i.showModal({
                  title: "提示",
                  content: "开门失败,请重试",
                  showCancel: !1,
                  success: function(e) {
                    t.searching = !1, t.closeConnect()
                  }
                })
              },
              processOpendoorCmd: function(e) {
                var t = this,
                  n = {
                    unionid_Encrypt: i.getStorageSync("unionid"),
                    userID: i.getStorageSync("userID"),
                    lockSN: t.item.SN,
                    cmdStr: e,
                    SignStr: this.SignStr,
                    lockType: this.item.LockType,
                    VType: -1
                  };
                this.$api.ProcessOpendoorCmd2(n).then((function(e) {
                  console.log("接口返回的数据" + JSON.stringify(e)), 1 == e.status ? 1 === e.data.handle ? (t.timeData = e.data.cmd, t.writeValue(e.data.cmd), t.valueForble = "", i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1,
                    success: function() {
                      t.$emit("updataCacheList"), t.$emit("updataFR", {
                        flag: !1,
                        index: t.index,
                        cmd: "",
                        deviceId: t.deviceId
                      }), t.opening = !1, t.buttomFlag = !0
                    }
                  }), i.hideLoading()) : 0 === e.data.handle ? (t.$emit("updataFR", {
                    flag: !0,
                    index: t.index,
                    cmd: e.data.cmd,
                    deviceId: t.deviceId
                  }), t.opening = !1, t.item.Cmd = e.data.cmd, t.writeValue(e.data.cmd)) : 2 === e.data.handle && (t.closeConnect(), i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  }), t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }), t.opening = !1) : (t.closeConnect(), t.valueForble = "", t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }), t.opening = !1)
                })).catch((function() {
                  t.closeConnect(), t.valueForble = ""
                }))
              },
              closeConnect: function() {
                var t = this;
                this.searchBleTimeout && (clearTimeout(this.searchBleTimeout), t.$emit("dingshi", t.searchBleTimeout, t.searchSetInterval)), i.hideLoading(), e.offBLECharacteristicValueChange(), i.closeBLEConnection({
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
                  i.closeBluetoothAdapter({
                    success: function() {
                      console.log("蓝牙适配器已关闭")
                    }
                  })
                }), 400), this.opening = !1, this.buttomFlag = !0, this.deviceId = "", this.connected = !1, this.blueToothName = "", this.timeData = "", this.OpenType = -1, this.Exception = null
              },
              OnColse: function() {
                this.$refs.popup.close(), this.OpenType = -1
              },
              showLlmm: function() {
                this.$refs.popup.close(), this.sn = this.item.SN, this.LockType = this.item.LockType, this.llmm = "", this.createLlmm(this.item.SN, this.item.SignStr, this.item.LockType)
              },
              cancelLlmm: function(e) {
                this.visible = !1
              },
              copyLlmm: function() {
                var e = this;
                this.$newUtil.copyLSMM(this.llmm).then((function(t) {
                  e.visible = !1
                }))
              },
              createLlmm: function(e, t, n) {
                var c = this;
                if (this.item.Cmd) {
                  var o = null;
                  if (e || (o = "SN码不能为空"), null == o) {
                    var a = {
                      unionid_Encrypt: i.getStorageSync("unionid"),
                      userID: i.getStorageSync("userID"),
                      sn: e,
                      SignStr: t,
                      lockType: n
                    };
                    i.showLoading({
                      title: "正在生成临时密码",
                      mask: !0
                    }), this.$api.CreateTempPW2(a).then((function(e) {
                      1 == e.status && (i.hideLoading(), c.visible = !0, c.llmm = e.data + "#")
                    }))
                  } else this.$modalToast(o)
                }
              }
            }
          };
        t.default = a
      }).call(this, n("3223").default, n("df3c").default)
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/YZ_Manage_Blue_Face_3-create-component", {
    "components/YZ_Manage_Blue_Face_3-create-component": function(e, t, n) {
      n("df3c").createComponent(n("5d55"))
    }
  },
  [
    ["components/YZ_Manage_Blue_Face_3-create-component"]
  ]
]);
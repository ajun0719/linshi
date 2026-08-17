(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/FR_BlueOpeningDoor"], {
    "0177": function(e, t, n) {},
    "1faf": function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return o
      })), n.d(t, "c", (function() {
        return c
      })), n.d(t, "a", (function() {
        return i
      }));
      var i = {
          uniPopup: function() {
            return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null, "df3e"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    4004: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("1faf"),
        o = n("b2ca");
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(c);
      n("c03c");
      var s = n("828b"),
        a = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
      t.default = a.exports
    },
    "806d": function(e, t, n) {
      "use strict";
      (function(e, i) {
        var o = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var c = o(n("c6ff")),
          s = {
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
                serviceId: "",
                valueForble: "",
                networkFlag: !0,
                visible: !1,
                llmm: "",
                longllmm: "",
                buttomFlag: !0,
                TwoSearchBlueN: 1,
                searchSetInterval: null,
                openBluetooth: !1,
                YZMima: "",
                OpenFlag: !0,
                OpenType: -1,
                Exception: "",
                opening: !1,
                writeType: "write"
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
              },
              cd: {
                type: Number,
                default: 0
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
                      ("2g" == t || "3g" == t || "none" == t || n) && (console.log("离线"), i.showLoading({
                        title: "加载中...",
                        mask: !0
                      }))
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
                    }), this.opening = !0, this.OpenType = -1, this.search(), console.log("离线1")
                  }
                } else this.$modalToast("门禁授权已过期")
              },
              search: function() {
                var t = this;
                i.closeBluetoothAdapter({
                  complete: function(n) {
                    e.getBluetoothDevices({
                      success: function(e) {
                        console.log("获取到的设备" + JSON.stringify(e))
                      },
                      fail: function(e) {
                        console.log("获取到的设备" + JSON.stringify(e))
                      }
                    }), i.openBluetoothAdapter({
                      success: function(e) {
                        i.hideLoading(), t.searchBleTimeout = setTimeout((function() {
                          t.connectFlag || (t.opening = !1, i.stopBluetoothDevicesDiscovery({
                            success: function(e) {
                              t.opening = !1, t.buttomFlag = !0, i.hideLoading(), i.showModal({
                                title: "提示",
                                content: '没有搜索到蓝牙设备，请靠近设备后再尝试点击"开门"按钮！',
                                showCancel: !1
                              })
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                          }), t.$emit("updataFR", {
                            flag: !1,
                            index: t.index,
                            cmd: "",
                            deviceId: t.deviceId
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
                            if (i.hideLoading(), 1509008 === e.errno) t.connectFlag = !0, t.opening = !1, t.buttomFlag = !0, i.showModal({
                              title: "需开启系统权限",
                              content: "位置信息异常" + JSON.stringify(e) + "。请进入【设置】>【应用管理】>【微信】>【权限】中开启“位置信息”权限",
                              confirmText: "前往设置"
                            });
                            else {
                              i.showLoading({
                                title: "再次搜索蓝牙...",
                                mask: !0
                              });
                              var n = 1;
                              t.TwoSearchBlue(n), t.searchSetInterval = setInterval((function() {
                                n++, t.TwoSearchBlue(n)
                              }), 2e3)
                            }
                          }
                        })
                      },
                      fail: function(n) {
                        i.hideLoading(), t.buttomFlag = !0, t.opening = !1, t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        }), 3 === n.errno ? e.showModal({
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
                        8 == e && (t.searchSetInterval && clearInterval(t.searchSetInterval), i.hideLoading(), t.opening = !1, t.buttomFlag = !0, t.$refs.popup.open(), t.OpenType = 1, t.Exception = "搜索蓝牙异常" + JSON.stringify(n), t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        }))
                      }
                    })
                  }
                })
              },
              initBlue: function() {
                var e = this,
                  t = !0;
                i.onBluetoothDeviceFound((function(n) {
                  for (var o = 0; o < n.devices.length; o++) n.devices[o].name == e.blueToothName && t && (e.deviceId = n.devices[o].deviceId, e.connectFlag = !0, i.stopBluetoothDevicesDiscovery({
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
                    e.opening = !1, i.hideLoading(), e.buttomFlag = !0, i.showModal({
                      title: "提示",
                      content: "连接门锁设备失败" + JSON.stringify(t),
                      showCancel: !1,
                      success: function(t) {
                        e.resetData()
                      }
                    }), e.$emit("updataFR", {
                      flag: !1,
                      index: e.index,
                      cmd: "",
                      deviceId: e.deviceId
                    })
                  }
                })
              },
              notifyBluetooth: function() {
                var e = this;
                i.getBLEDeviceServices({
                  deviceId: e.deviceId,
                  success: function(t) {
                    for (var n = t.services, o = 0, c = [], s = function(t) {
                        var s = null;
                        if ("0000FFE0" == n[t].uuid.split("-")[0] ? s = n[t].uuid.split("-")[0] : "0000FFE0" == n[t].uuid.substring(0, 8) && (s = n[t].uuid.substring(0, 8)), c = c.concat([s]), "0000FFE0" == s) return e.serviceId = n[t].uuid, i.getBLEDeviceCharacteristics({
                          deviceId: e.deviceId,
                          serviceId: e.serviceId,
                          success: function(o) {
                            e.characteristics = o.characteristics;
                            var c = o.characteristics;
                            console.log("特征值" + JSON.stringify(c));
                            for (var s = 0; s < c.length; s++) {
                              "0000FFE1" === c[s].uuid.split("-")[0] && (e.characteristicsId = c[s].uuid, i.notifyBLECharacteristicValueChange({
                                state: !0,
                                deviceId: e.deviceId,
                                serviceId: n[t].uuid,
                                characteristicId: c[s].uuid,
                                success: function(t) {
                                  console.log("开启监听"), setTimeout((function() {
                                    console.log("下发开门指令" + e.item.Cmd), e.writeValue(e.item.Cmd)
                                  }), 200)
                                }
                              }))
                            }
                          }
                        }), "break";
                        "0000FFE0" != s && ((o += 1) === n.length && (e.closeConnect(), i.showModal({
                          title: "提示",
                          content: "没有找到指定的服务值" + JSON.stringify(c) + "服务值" + JSON.stringify(n),
                          showCancel: !1
                        })))
                      }, a = 0; a < n.length; a++) {
                      if ("break" === s(a)) break
                    }
                  }
                }), i.onBLEConnectionStateChange((function(t) {
                  t.connected || (console.log("关闭蓝牙"), e.closeConnect()), e.connected = t.connected
                })), i.onBLECharacteristicValueChange((function(t) {
                  console.log("监听");
                  var n = c.default.ab2hex(t.value);
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
                var t = this;
                console.log("写入数据" + JSON.stringify({
                  deviceId: t.deviceId,
                  serviceId: t.serviceId,
                  characteristicId: t.characteristicsId,
                  data: e
                }));
                var n = c.default.string2buffer(e);
                t.connected ? i.writeBLECharacteristicValue({
                  deviceId: t.deviceId,
                  serviceId: t.serviceId,
                  characteristicId: t.characteristicsId,
                  value: n,
                  success: function(e) {},
                  fail: function(e) {
                    t.closeConnect(), t.opening = !1, t.$refs.popup.open(), t.OpenType = 2, t.Exception = "开门失败，请重试" + JSON.stringify(e), t.$emit("updataFR", {
                      flag: !1,
                      index: t.index,
                      cmd: "",
                      deviceId: t.deviceId
                    })
                  }
                }) : i.showModal({
                  title: "提示",
                  content: "蓝牙异常关闭,请重试",
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
                this.$api.processOpendoorCmd(n).then((function(e) {
                  console.log("接口返回的数据" + JSON.stringify(e)), 1 == e.status ? 1 === e.data.handle ? (console.log("接口返回1"), t.timeData = e.data.cmd, t.writeValue(e.data.cmd), i.hideLoading(), t.valueForble = "", i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1,
                    success: function() {
                      t.dingyue(), t.$emit("updataCacheList"), t.timeData, t.opening = !1, t.buttomFlag = !0, t.$emit("updataFR", {
                        flag: !1,
                        index: t.index,
                        cmd: "",
                        deviceId: t.deviceId
                      })
                    }
                  })) : "E2" == e.msg ? (console.log("接口返回E2"), t.writeValue(e.data.cmd), t.$emit("updataFR", {
                    flag: !0,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  })) : "8F" == e.msg ? (t.opening = !1, t.item.Cmd = e.data.cmd, console.log("新的开门指令" + t.item.Cmd), t.writeValue(e.data.cmd), t.$emit("updataFR", {
                    flag: !0,
                    index: t.index,
                    cmd: t.item.Cmd,
                    deviceId: t.deviceId
                  })) : !e.msg || e.msg ? (console.log("下发其它指令"), e.data.cmd ? t.writeValue(e.data.cmd) : (t.closeConnect(), i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  })), t.$emit("updataFR", {
                    flag: !0,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  })) : 2 === e.data.handle ? (console.log("接口返回E3"), t.closeConnect(), i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  }), t.opening = !1, t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  })) : (console.log("接口返回E5"), t.closeConnect(), i.showModal({
                    title: "提示",
                    content: e.msg,
                    showCancel: !1
                  }), t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  })) : (t.closeConnect(), t.valueForble = "", t.opening = !1, t.$emit("updataFR", {
                    flag: !1,
                    index: t.index,
                    cmd: "",
                    deviceId: t.deviceId
                  }))
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
                setTimeout((function() {
                  i.closeBluetoothAdapter({
                    success: function() {
                      console.log("蓝牙适配器已关闭")
                    }
                  })
                }), 400), this.opening = !1, this.buttomFlag = !0, this.deviceId = "", this.connected = !1, this.blueToothName = "", this.services = {}, this.characteristics = {}, this.timeData = "", this.Exception = null, this.$emit("updataFR", {
                  flag: !1,
                  index: this.index,
                  cmd: "",
                  deviceId: this.deviceId
                })
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
              copyLlmm1: function() {
                var e = this;
                this.$newUtil.copyLSMM(this.longllmm).then((function(t) {
                  e.visible = !1
                }))
              },
              createLlmm: function(e, t, n) {
                var o = this;
                if (this.item.Cmd) {
                  var c = null;
                  if (e || (c = "SN码不能为空"), null == c) {
                    var s = {
                      unionid_Encrypt: i.getStorageSync("unionid"),
                      userID: i.getStorageSync("userID"),
                      sn: e,
                      SignStr: t,
                      lockType: n
                    };
                    i.showLoading({
                      title: "正在生成临时密码",
                      mask: !0
                    }), this.$api.createTempPW(s).then((function(e) {
                      if (1 == e.status) {
                        i.hideLoading();
                        var t = e.data.split("|");
                        o.visible = !0, o.llmm = t[0] + "#", o.longllmm = t[1] + "#"
                      }
                    }))
                  } else this.$modalToast(c)
                }
              },
              dingyue: function() {
                var e = this;
                i.requestSubscribeMessage({
                  tmplIds: ["jyXwkgZRitfr1A0rROJRznC48na2YoY80zLY1LwT5Ug"],
                  success: function(t) {
                    i.showLoading({
                      title: "加载中...",
                      mask: !0
                    });
                    var n = [];
                    for (var o in t) "accept" == t[o] && "JSUatZAocufyVTVY5vxV6GEk16RnWqdRAY0UQcZnCKg" == o ? n.push(100) : "accept" == t[o] && "jyXwkgZRitfr1A0rROJRznC48na2YoY80zLY1LwT5Ug" == o ? n.push(101) : "reject" == t[o] && console.log("订阅失败" + t[o]);
                    if (n.length > 0) {
                      var c = {
                        unionid_Encrypt: i.getStorageSync("unionid"),
                        userID: i.getStorageSync("userID"),
                        sublist: n
                      };
                      e.$api.AddMsgSub(c, 1).then((function(e) {
                        i.hideLoading()
                      })).catch((function() {
                        i.hideLoading()
                      }))
                    } else i.hideLoading()
                  }
                })
              }
            }
          };
        t.default = s
      }).call(this, n("3223").default, n("df3c").default)
    },
    b2ca: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n("806d"),
        o = n.n(i);
      for (var c in i)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return i[e]
        }))
      }(c);
      t.default = o.a
    },
    c03c: function(e, t, n) {
      "use strict";
      var i = n("0177");
      n.n(i).a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/FR_BlueOpeningDoor-create-component", {
    "components/FR_BlueOpeningDoor-create-component": function(e, t, n) {
      n("df3c").createComponent(n("4004"))
    }
  },
  [
    ["components/FR_BlueOpeningDoor-create-component"]
  ]
]);
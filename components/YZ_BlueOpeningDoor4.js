(global.webpackJsonp = global.webpackJsonp || []).push([
  ["components/YZ_BlueOpeningDoor4"], {
    5864: function(e, t, i) {
      "use strict";
      i.d(t, "b", (function() {
        return o
      })), i.d(t, "c", (function() {
        return c
      })), i.d(t, "a", (function() {
        return n
      }));
      var n = {
          uniPopup: function() {
            return i.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(i.bind(null, "df3e"))
          }
        },
        o = function() {
          this.$createElement;
          this._self._c
        },
        c = []
    },
    "842b": function(e, t, i) {
      "use strict";
      (function(e, n) {
        var o = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var c = o(i("c6ff")),
          a = {
            name: "YZ_BlueOpeningDoor4",
            data: function() {
              return {
                llmm: "",
                visible: !1,
                searchBleTimeout: null,
                timeData: "",
                searchFlag: !1,
                connectFlag: !1,
                SignStr: "",
                deviceId: "",
                connected: !1,
                serviceId: "",
                valueForble: "",
                networkFlag: !0,
                currentData: "",
                writeAmount: 0,
                services: {},
                YZBreakFlag: !1,
                YZnotifyID: "",
                characteristicsId: "",
                VType: -1,
                LockType1: "",
                DeviceFoundFlag: !0,
                servicesCount: 0,
                opening: !1,
                blueToothName: "",
                searchSetInterval: null,
                OpenType: -1,
                Exception: "",
                buttomFlag: !0,
                currentData1: ""
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
                  var i = e.networkType,
                    n = e.weakNet;
                  console.log("网络状态", JSON.stringify(e)), t.networkFlag = "2g" != i && "3g" != i && "none" != i && !n
                }
              })
            },
            methods: {
              openDoor_YZ: function(t) {
                console.log("开门事件", this.$newUtil.getCurrentTime());
                var i = this;
                e.getNetworkType({
                  success: function(e) {
                    var t = e.networkType,
                      n = e.weakNet;
                    console.log("网络状态", JSON.stringify(e)), i.networkFlag = "2g" != t && "3g" != t && "none" != t && !n, i.qunaxian()
                  }
                })
              },
              qunaxian: function() {
                var t = this;
                this.$newUtil.JudgmentSystemInfo(t.networkFlag).then((function(i) {
                  1 == i ? t.requestBluetoothAuth() : 2 == i ? t.$newUtil.handleReject() : 3 == i ? t.item.pdtime < 7 ? e.showModal({
                    title: "提示",
                    content: "您的门禁即将到期，为了不影响您的出入，请及时续期！",
                    showCancel: !1,
                    success: function(e) {
                      t.kaimen_FR()
                    }
                  }) : t.kaimen_FR() : 4 == i && (n.getNetworkType({
                    success: function(t) {
                      var i = t.networkType,
                        n = t.weakNet;
                      ("2g" == i || "3g" == i || "none" == i || n) && e.showLoading({
                        title: "加载中...",
                        mask: !0
                      })
                    }
                  }), t.kaimen_FR())
                }))
              },
              requestBluetoothAuth: function() {
                var e = this;
                n.authorize({
                  scope: "scope.bluetooth",
                  success: function() {
                    e.kaimen_FR()
                  },
                  fail: function() {
                    e.$newUtil.handleReject()
                  }
                })
              },
              kaimen_FR: function() {
                this.searchBleTimeout && clearTimeout(this.searchBleTimeout);
                var e = this.item.Cmd.split("|");
                e ? this.opening || this.buttomFlag && (this.currentData1 = "", this.opening = !0, this.buttomFlag = !1, this.connectFlag = !1, this.YZConnCmdValue = e[0], this.timeData = e[1], this.blueToothName = this.item.BleName, this.DeviceFoundFlag = !0, this.connectFlag = !1, this.searchFlag = !1, this.writeAmount = 0, this.SignStr = this.item.SignStr, this.$emit("updataFR", {
                  flag: !0,
                  index: this.index,
                  cmd: "",
                  deviceId: this.deviceId
                }), this.search()) : this.$modalToast("门禁授权已过期")
              },
              search: function() {
                var t = this;
                e.closeBluetoothAdapter({
                  complete: function(i) {
                    e.openBluetoothAdapter({
                      success: function(i) {
                        t.searchBleTimeout = setTimeout((function() {
                          t.connectFlag || (t.opening = !1, t.buttomFlag = !0, e.stopBluetoothDevicesDiscovery({
                            success: function(i) {
                              t.opening = !1, e.hideLoading(), e.showModal({
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
                        }), 1e4), e.showLoading({
                          title: "正在搜索蓝牙...",
                          mask: !0
                        }), console.log("开始搜索蓝牙", t.$newUtil.getCurrentTime()), e.startBluetoothDevicesDiscovery({
                          allowDuplicatesKey: !1,
                          success: function(e) {
                            t.initBlue(), t.searchFlag = !0, t.deviceId = ""
                          },
                          fail: function(i) {
                            t.buttomFlag = !0, e.hideLoading(), e.showLoading({
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
                      fail: function(i) {
                        t.opening = !1, 3 === i.errno ? n.showModal({
                          title: "需开启系统权限",
                          content: "蓝牙初始化异常" + JSON.stringify(i) + "。请进入【设置】>【应用管理】>【微信】>【其他权限】中开启“附近设备”权限",
                          confirmText: "前往设置"
                        }) : e.showModal({
                          title: "提示",
                          content: "请检查手机蓝牙是否打开" + JSON.stringify(i),
                          showCancel: !1,
                          success: function(e) {
                            t.searchFlag = !1
                          }
                        }), t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        })
                      }
                    })
                  }
                })
              },
              TwoSearchBlue: function(t) {
                var i = this;
                i.connectFlag = !0, i.searchBleTimeout && clearTimeout(i.searchBleTimeout), e.stopBluetoothDevicesDiscovery({
                  success: function(n) {
                    e.startBluetoothDevicesDiscovery({
                      allowDuplicatesKey: !1,
                      success: function(e) {
                        i.searchSetInterval && clearInterval(i.searchSetInterval), i.initBlue(), i.deviceId = ""
                      },
                      fail: function(n) {
                        8 == t && (i.searchSetInterval && clearInterval(i.searchSetInterval), e.hideLoading(), i.opening = !1, i.buttomFlag = !0, i.$refs.popup.open(), i.OpenType = 1, i.Exception = "搜索蓝牙异常" + JSON.stringify(n), i.$emit("updataFR", {
                          flag: !1,
                          index: i.index,
                          cmd: "",
                          deviceId: i.deviceId
                        }))
                      }
                    })
                  }
                })
              },
              initBlue: function() {
                var t = this,
                  i = !0;
                e.onBluetoothDeviceFound((function(n) {
                  var o = n.devices;
                  if (i)
                    for (var c = 0; c < o.length; c++)
                      if (8 == o[c].name.length && o[c].name == t.blueToothName && i) {
                        t.connectFlag = !0, t.deviceId = o[c].deviceId, e.stopBluetoothDevicesDiscovery({
                          success: function(e) {
                            t.searchFlag = !1
                          }
                        }), t.DeviceFoundFlag && t.connect(), i = !1, t.DeviceFoundFlag = !1;
                        break
                      }
                }))
              },
              connect: function() {
                var t = this;
                e.stopBluetoothDevicesDiscovery({
                  success: function(e) {
                    t.searchFlag = !1
                  }
                }), console.log("连接蓝牙设备", t.$newUtil.getCurrentTime()), e.createBLEConnection({
                  deviceId: t.deviceId,
                  success: function(i) {
                    t.connected = !0, e.hideLoading(), e.showLoading({
                      title: "正在连接设备...",
                      mask: !0
                    }), t.notifyBluetooth()
                  },
                  fail: function(i) {
                    e.hideLoading(), e.showLoading({
                      title: "再次连接设备...",
                      mask: !0
                    }), t.zaiciCreateBLE()
                  }
                })
              },
              zaiciCreateBLE: function() {
                var t = this;
                e.createBLEConnection({
                  deviceId: t.deviceId,
                  timeout: 1e4,
                  success: function(i) {
                    t.connected = !0, e.hideLoading(), e.showLoading({
                      title: "正在开门中...",
                      mask: !0
                    }), console.log("是否多次获取蓝牙特征值"), t.notifyBluetooth()
                  },
                  fail: function(i) {
                    t.opening = !1, e.hideLoading(), t.buttomFlag = !0, e.showModal({
                      title: "提示",
                      content: "连接门锁设备失败" + JSON.stringify(i),
                      showCancel: !1,
                      success: function(e) {
                        t.resetData()
                      }
                    }), t.$emit("updataFR", {
                      flag: !1,
                      index: t.index,
                      cmd: "",
                      deviceId: t.deviceId
                    })
                  }
                })
              },
              notifyBluetooth: function() {
                var t = this;
                console.log("设备id" + t.deviceId), e.getBLEDeviceServices({
                  deviceId: t.deviceId,
                  success: function(e) {
                    var i = e.services;
                    console.log("所有服务值", JSON.stringify(i), t.$newUtil.getCurrentTime()), t.tzzhi(i, 0)
                  }
                }), e.onBLEConnectionStateChange((function(e) {
                  e.connected || (console.log("蓝牙断开"), t.closeConnect()), t.connected = e.connected
                })), e.onBLECharacteristicValueChange((function(i) {
                  console.log("监听蓝牙返回的数据时间", t.$newUtil.getCurrentTime()), console.log("特征值" + i.value), console.log("3执行顺" + t.writeAmount);
                  var n = c.default.ab2hex(i.value);
                  if (t.receiveText = n, console.log("监听值" + n), n.length > 0)
                    if (1 === t.writeAmount) {
                      console.log("第二次下发指令", t.timeData);
                      var o = t.YZConnCmdValue.slice(0, 2),
                        a = o + "01",
                        s = o + "0100";
                      if (o + "0000" == n || o + "00" == n || "2100" == n || "210000" == n) {
                        e.showModal({
                          title: "提示",
                          content: "蓝牙秘钥验证失败！",
                          showCancel: !1
                        });
                        var l = this.item.Cmd.split("|");
                        t.writeValue(l[1])
                      } else a != n && s != n && "2101" != n && "210100" != n || t.writeValue(t.timeData)
                    } else 2 === t.writeAmount && t.networkFlag ? t.processOpendoorCmd(n) : 2 !== t.writeAmount || t.networkFlag ? 3 == t.writeAmount && t.networkFlag ? (console.log("进来没3", t.currentData), t.writeValue(t.currentData)) : 4 == t.writeAmount && t.networkFlag ? (console.log("进来没4", t.currentData1), t.writeValue(t.currentData1)) : 5 == t.writeAmount && t.networkFlag && (console.log("进来没5", t.currentData1), t.processOpendoorCmd(n)) : (console.log("没有网络第三次下发指令", n), e.hideLoading(), t.retry = 0, t.valueForble = "", t.closeConnect(), e.showModal({
                      title: "提示",
                      content: "指令已经下发！",
                      showCancel: !1,
                      success: function() {
                        t.opening = !1, t.$emit("updataFR", {
                          flag: !1,
                          index: t.index,
                          cmd: "",
                          deviceId: t.deviceId
                        })
                      }
                    }));
                  else e.hideLoading(), t.$refs.popup.open(), t.OpenType = 3, t.closeConnect(), t.$emit("updataList")
                }))
              },
              tzzhi: function(e, t) {
                console.log("长度", e.length, t), t <= e.length - 1 && this.writeBLEData(e[t].uuid, e, t)
              },
              writeBLEData: function(t, i, n) {
                var o = this,
                  c = 0,
                  a = !1;
                e.getBLEDeviceCharacteristics({
                  deviceId: o.deviceId,
                  serviceId: t,
                  success: function(t) {
                    for (var s = t.characteristics, l = 0; l < s.length; l++) {
                      if (console.log("循环次数", l), s[l].properties.notify && (o.YZnotifyID = s[l].uuid), s[l].properties.write && (o.characteristicsId = s[l].uuid), o.YZnotifyID && o.characteristicsId) {
                        console.log("相等", o.YZnotifyID, o.characteristicsId, c, a), o.serviceId = i[n].uuid, a = !0, e.notifyBLECharacteristicValueChange({
                          state: !0,
                          deviceId: o.deviceId,
                          serviceId: o.serviceId,
                          characteristicId: o.YZnotifyID,
                          success: function(t) {
                            e.hideLoading(), e.showLoading({
                              title: "正在开门中...",
                              mask: !0
                            }), console.log("启用notify成功", o.YZConnCmdValue, o.$newUtil.getCurrentTime()), o.writeValue(o.YZConnCmdValue)
                          },
                          fail: function(t) {
                            e.hideLoading(), o.closeConnect(), o.$modalToast("启用失败，请重试" + JSON.stringify(t))
                          }
                        });
                        break
                      }
                      console.log("不相等", s, n + 1, c, a), c != s.length - 1 || a || o.tzzhi(i, n + 1), c += 1, a = !1
                    }
                  }
                })
              },
              writeValue: function(t) {
                console.log("下发蓝牙数据", this.$newUtil.getCurrentTime());
                var i = this;
                if (console.log("写入数据" + JSON.stringify({
                    deviceId: i.deviceId,
                    serviceId: i.serviceId,
                    characteristicId: i.characteristicsId,
                    data: t
                  })), i.connected) {
                  var n = c.default.string2buffer(t);
                  e.writeBLECharacteristicValue({
                    deviceId: i.deviceId,
                    serviceId: i.serviceId,
                    characteristicId: i.characteristicsId,
                    value: n,
                    success: function(e) {
                      i.writeAmount += 1
                    },
                    fail: function(t) {
                      e.hideLoading(), i.opening = !1, i.$refs.popup.open(), i.OpenType = 2, i.Exception = "开门失败，请重试" + JSON.stringify(t), i.$emit("updataFR", {
                        flag: !1,
                        index: i.index,
                        cmd: "",
                        deviceId: i.deviceId
                      })
                    }
                  })
                } else i.opening = !1, e.showModal({
                  title: "提示",
                  content: "开门失败,请重试",
                  showCancel: !1,
                  success: function(e) {
                    i.searchFlag = !1, i.resetData()
                  }
                }), i.buttomFlag = !0, i.$emit("updataFR", {
                  flag: !1,
                  index: i.index,
                  cmd: "",
                  deviceId: i.deviceId
                })
              },
              processOpendoorCmd: function(t) {
                var i = this,
                  n = {
                    unionid_Encrypt: e.getStorageSync("unionid"),
                    userID: e.getStorageSync("userID"),
                    lockSN: this.item.SN,
                    cmdStr: t,
                    SignStr: this.SignStr,
                    lockType: this.LockType1 ? this.LockType1 : 4,
                    VType: -1 == this.VType ? -1 : this.VType
                  };
                console.log("请求参数" + JSON.stringify(n)), this.$api.processOpendoorCmd(n).then((function(t) {
                  if (console.log("接口的数据" + JSON.stringify(t)), 1 == t.status) t.data ? (i.retry = ++i.retry, 4 == i.retry ? (e.hideLoading(), i.opening = !1, i.retry = 0, i.valueForble = "", e.showModal({
                    title: "提示",
                    content: "开门失败",
                    showCancel: !1,
                    success: function(e) {
                      i.closeConnect()
                    }
                  })) : (i.opening = !1, i.currentData = t.data, i.$emit("updataCacheList"), i.writeAmount = 1, i.sendData()), i.$emit("updataFR", {
                    flag: !1,
                    index: i.index,
                    cmd: "",
                    deviceId: i.deviceId
                  })) : (e.hideLoading(), i.retry = 0, i.valueForble = "", i.closeConnect(), e.showModal({
                    title: "提示",
                    content: t.msg,
                    showCancel: !1,
                    success: function() {
                      i.$emit("updataCacheList")
                    }
                  }));
                  else if (300 == t.status) {
                    i.YZstatus = t.status;
                    var n = t.data.Cmd.split("|");
                    i.currentData1 = n[2], i.currentData = n[1], i.timeData = n[0], i.SignStr = t.data.SignStr, i.VType = t.data.VType, i.LockType1 = t.data.LockType, i.opening = !0, i.$emit("updataCacheList"), i.sendData(), i.$emit("updataFR", {
                      flag: !0,
                      index: i.index,
                      cmd: "",
                      deviceId: i.deviceId
                    })
                  } else 303 == t.status ? (i.writeAmount = 4, i.currentData = "", i.writeValue(t.data)) : (e.hideLoading(), i.retry = 0, i.valueForble = "", i.$emit("updataFR", {
                    flag: !1,
                    index: i.index,
                    cmd: "",
                    deviceId: i.deviceId
                  }), i.opening = !1, i.closeConnect())
                })).catch((function() {
                  e.hideLoading(), i.closeConnect(), i.opening = !1, i.$emit("updataFR", {
                    flag: !1,
                    index: i.index,
                    cmd: "",
                    deviceId: i.deviceId
                  })
                }))
              },
              sendData: function(t) {
                var i = this;
                this.connected ? (console.log("重新下发"), i.writeValue(i.timeData)) : e.createBLEConnection({
                  deviceId: i.deviceId,
                  success: function(e) {
                    i.notifyBluetooth()
                  },
                  fail: function(t) {
                    i.opening = !1, e.hideLoading(), e.showModal({
                      title: "提示",
                      content: "连接门锁设备失败,请重试",
                      showCancel: !1,
                      success: function(e) {
                        i.resetData()
                      }
                    }), i.$emit("updataFR", {
                      flag: !1,
                      index: i.index,
                      cmd: "",
                      deviceId: i.deviceId
                    })
                  }
                })
              },
              closeConnect: function() {
                var t = this;
                this.searchBleTimeout && clearTimeout(this.searchBleTimeout), e.hideLoading(), e.offBLECharacteristicValueChange(), e.closeBLEConnection({
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
                  e.closeBluetoothAdapter({
                    success: function() {
                      console.log("蓝牙适配器已关闭")
                    }
                  })
                }), 400), this.YZnotifyID = "", this.characteristicsId = "", this.buttomFlag = !0, this.opening = !1, this.retry = 0, this.valueForble = "", this.deviceId = "", this.currentData = "", this.currentData1 = "", this.connected = !1, this.characteristics = {}, this.searchFlag = !1, this.timeData = "", this.writeAmount = 0, this.YZBreakFlag = !1, this.VType = -1, this.LockType1 = "", this.servicesCount = 0, this.$emit("updataFR", {
                  flag: !1,
                  index: this.index,
                  cmd: "",
                  deviceId: this.deviceId
                })
              },
              showLlmm: function(e) {
                this.sn = this.item.SN, this.SignStr = this.SignStr, this.LockType = this.item.LockType, this.llmm = "", this.createLlmm()
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
              createLlmm: function() {
                var t = this;
                if (this.item.Cmd) {
                  var i = null;
                  if (this.item.SN || (i = "SN码不能为空"), null == i) {
                    var n = {
                      unionid_Encrypt: e.getStorageSync("unionid"),
                      userID: e.getStorageSync("userID"),
                      sn: this.item.SN,
                      SignStr: this.item.SignStr,
                      lockType: this.item.LockType
                    };
                    console.log("参数" + JSON.stringify(n)), e.showLoading({
                      title: "正在生成临时密码",
                      mask: !0
                    }), this.$api.createTempPW(n).then((function(i) {
                      1 == i.status && (e.hideLoading(), t.visible = !0, t.llmm = i.data + "#")
                    }))
                  } else this.$modalToast(i)
                }
              },
              OnColse: function() {
                this.$refs.popup.close(), this.OpenType = -1
              }
            }
          };
        t.default = a
      }).call(this, i("df3c").default, i("3223").default)
    },
    b57d: function(e, t, i) {
      "use strict";
      var n = i("d77a");
      i.n(n).a
    },
    c185: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("5864"),
        o = i("d82f");
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        i.d(t, e, (function() {
          return o[e]
        }))
      }(c);
      i("b57d");
      var a = i("828b"),
        s = Object(a.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
      t.default = s.exports
    },
    d77a: function(e, t, i) {},
    d82f: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("842b"),
        o = i.n(n);
      for (var c in n)["default"].indexOf(c) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(c);
      t.default = o.a
    }
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/YZ_BlueOpeningDoor4-create-component", {
    "components/YZ_BlueOpeningDoor4-create-component": function(e, t, i) {
      i("df3c").createComponent(i("c185"))
    }
  },
  [
    ["components/YZ_BlueOpeningDoor4-create-component"]
  ]
]);
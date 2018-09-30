//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array:['身份证号','病例编号'],
    index:0,

    province: ['省/直辖市','四川','北京'],
    pro:0,

    city: ['市', '成都', '绵阳'],
    citys:0,

    contry: ['区/县', '武侯区', '锦江区'],
    con:0,
  },
  //身份证
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  // 省选择器
  bindProvincerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pro: e.detail.value
    })
  },
  //市选择器
  bindCityChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      citys: e.detail.value
    })
  },
  //区/县选择器
  bindContryChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      con: e.detail.value
    })
  },
  sure:function(){
    wx.navigateTo({
      url: '../project_list/project_list',
    })
  },
  onLoad: function () {

  },

})

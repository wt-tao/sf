// pages/User/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['身份证号', '病例编号'],
    index: 0,

    province: ['省/直辖市', '四川', '北京'],
    pro: 0,

    city: ['市', '成都', '绵阳'],
    citys: 0,

    contry: ['区/县', '武侯区', '锦江区'],
    con: 0,
    s1:false,
    s2:true,

    s3: false,
    s4: true,

    s5: false,
    s6: true,
  },

  s1:function(){
    this.setData({
      s1: true,
      s2: false,
    })
  },
  s3: function () {
    this.setData({
      s3: true,
      s4: false,
    })
  },
  s5: function () {
    this.setData({
      s5: true,
      s6: false,
    })
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
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
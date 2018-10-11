// pages/CRO_main/CRO_main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  CRO_Patient:function(){
    wx.reLaunch({
      url: '../CRO_patient/CRO_patient',
    })
  },
  CRO_follow_up: function () {
    wx.reLaunch({
      url: '../CRO_follow_up/CRO_follow_up',
    })
  },
  CRO_typical: function () {
    wx.reLaunch({
      url: '../CRO_typical/CRO_typical',
    })
  },

  sf_remind:function(){
    wx.navigateTo({
      url: 'sf_remind/sf_remind',
    })
  },
  sjUpload_remind: function () {
    wx.navigateTo({
      url: 'sjUpload_remind/sjUpload_remind',
    })
  },
  LeakyFill_remind: function () {
    wx.navigateTo({
      url: 'LeakyFill_remind/LeakyFill_remind',
    })
  },
  active_remind: function () {
    wx.navigateTo({
      url: 'active_remind/active_remind',
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
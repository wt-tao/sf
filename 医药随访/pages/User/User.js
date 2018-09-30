// pages/User/User.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //积分
  integral:function(){
    wx.navigateTo({
      url: '../User/integral/integral',
    })
  },
  // 签到
  sign_in: function () {
    wx.navigateTo({
      url: '../User/sign_in/sign_in',
    })
  },
  //提醒
  remind: function () {
    wx.navigateTo({
      url: '../User/remind/remind',
    })
  },
  //报告
  presentation: function () {
    wx.navigateTo({
      url: '../User/presentation/presentation',
    })
  },
  // 活动
  activity: function () {
    wx.navigateTo({
      url: '../User/activity/activity',
    })
  },
  // 留言
  leaving_message: function () {
    wx.navigateTo({
      url: '../User/leaving_message/leaving_message',
    })
  },
  // 个人信息
  information: function () {
    wx.navigateTo({
      url: '../User/information/information',
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
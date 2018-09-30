// pages/follow-up_project/follow-up_project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: false,
    s2: true,
  },
  qxgx:function(){
    this.setData({
      s1: true,
      s2: false,
    })
  },
  gx: function () {
    this.setData({
      s1: false,
      s2: true,
    })
  },
  Choose_hospital:function(){
    wx.navigateTo({
      url: '../Choose_hospital/Choose_hospital',
    })
  },
  Selection_section: function () {
    wx.navigateTo({
      url: '../Selection_section/Selection_section',
    })
  },
  agree:function(){
    wx.navigateTo({
      url: '../agree/agree',
    })
  },
  sure:function(){
    wx.reLaunch({
      url: '../main/main',
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
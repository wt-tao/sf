// pages/CRO_patient/eliminate/eliminate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: true, s2: true, s3: true, s4: true, s5: true,
  },
  s1:function(){
    this.setData({
      s1:!this.data.s1
    })
  },
  s2: function () {
    this.setData({
      s2: !this.data.s2
    })
  },
  s3: function () {
    this.setData({
      s3: !this.data.s3
    })
  },
  s4: function () {
    this.setData({
      s4: !this.data.s4
    })
  },
  s5: function () {
    this.setData({
      s5: !this.data.s5
    })
  },

  button:function(){
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
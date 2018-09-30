// pages/research_list/Anderson_rating_scale/Anderson_rating_scale.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:['1','2','3','4','5','6','7','8','9','10'],
      s1:false,s2:true,
  },
  n1:function(e){
      // console.log(e)
      this.setData({
        ids: e.currentTarget.id
      })
  },
  n2: function (e) {
    // console.log(e)
    this.setData({
      ids1: e.currentTarget.id
    })
  },
  n3: function (e) {
    // console.log(e)
    this.setData({
      ids2: e.currentTarget.id
    })
  },
  n4: function (e) {
    // console.log(e)
    this.setData({
      ids3: e.currentTarget.id
    })
  },
  n5: function (e) {
    // console.log(e)
    this.setData({
      ids4: e.currentTarget.id
    })
  },
  n6: function (e) {
    // console.log(e)
    this.setData({
      ids5: e.currentTarget.id
    })
  },
  n7: function (e) {
    // console.log(e)
    this.setData({
      ids6: e.currentTarget.id
    })
  },
  n8: function (e) {
    // console.log(e)
    this.setData({
      ids7: e.currentTarget.id
    })
  },
  n9: function (e) {
    // console.log(e)
    this.setData({
      ids8: e.currentTarget.id
    })
  },
  n10: function (e) {
    // console.log(e)
    this.setData({
      ids9: e.currentTarget.id
    })
  },
  n11: function (e) {
    // console.log(e)
    this.setData({
      ids10: e.currentTarget.id
    })
  },
  n12: function (e) {
    // console.log(e)
    this.setData({
      ids11: e.currentTarget.id
    })
  },
  n13: function (e) {
    // console.log(e)
    this.setData({
      ids12: e.currentTarget.id
    })
  },
  // 表二
  n21: function (e) {
    // console.log(e)
    this.setData({
      ids20: e.currentTarget.id
    })
  },
  n22: function (e) {
    // console.log(e)
    this.setData({
      ids21: e.currentTarget.id
    })
  },
  n23: function (e) {
    // console.log(e)
    this.setData({
      ids22: e.currentTarget.id
    })
  },
  n24: function (e) {
    // console.log(e)
    this.setData({
      ids23: e.currentTarget.id
    })
  },
  n25: function (e) {
    // console.log(e)
    this.setData({
      ids24: e.currentTarget.id
    })
  },
  n26: function (e) {
    // console.log(e)
    this.setData({
      ids25: e.currentTarget.id
    })
  },
  // 表三
  n31: function (e) {
    // console.log(e)
    this.setData({
      ids30: e.currentTarget.id
    })
  },
  n32: function (e) {
    // console.log(e)
    this.setData({
      ids31: e.currentTarget.id
    })
  },
  n33: function (e) {
    // console.log(e)
    this.setData({
      ids32: e.currentTarget.id
    })
  },
  sec: function () {
    this.setData({
      s1: true,
      s2: false
    })
  },
  submin: function () {
    wx.navigateBack({
      delta: 1
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
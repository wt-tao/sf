// pages/research_list/Use_of_retrogradation/Use_of_retrogradation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: false, s2: true, s3:true,
    ip: false, ip1:true,
    list: [{ id: 1, text: '持续' }, { id: 2, text: '间断' }, { id: 3, text: '偶尔' },],
  },

  list_xz: function (e) {
    this.setData({
      ids: e.currentTarget.id
    })
  },
  list_xz1: function (e) {
    this.setData({
      ids1: e.currentTarget.id
    })
  },
  list_xz2: function (e) {
    this.setData({
      ids2: e.currentTarget.id
    })
  },
  fly: function () {
    var s3 = this.data.s3
    var s31=!s3
    console.log('s31', s31)
    if(s31==false){
      this.setData({
        ip: true, ip1: false
      })
    }
    else{
      this.setData({
        ip: false, ip1: true
      })
    }
    this.setData({
      s3: s31
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
// pages/CRO_patient/name_detail/name_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur:0,
    currentTab: 0,
    sort:true,
  },
  sort:function(){
    this.setData({
      sort: false,
    })
  },
  del:function() {
    this.setData({
      sort: true,
    })
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  curs:function(e){
    var id = e.currentTarget.id
      this.setData({
        cur:id
      })
  },

  eliminate:function(){
      wx.navigateTo({
        url: '../eliminate/eliminate',
      })
  },
  new_push: function () {
    wx.navigateTo({
      url: '../new_push/new_push',
    })
  },
  suspension: function () {
    wx.navigateTo({
      url: '../suspension/suspension',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
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
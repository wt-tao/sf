// pages/project_list/project_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: false,
    tit:'典型病例'
  },
  del: function () {
    this.setData({
      sort: false,
    })
  },
  ewm: function () {
    this.setData({
      sort: true,
    })
  },
  sure:function(){
      wx.navigateTo({
        url: '../follow-up_project/follow-up_project',
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
// pages/CRO_main/LeakyFill_remind/LeakyFill_remind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    name: [{ id: 1, name: '王凌云' }, { id: 2, name: '董虎秋' }]
  },
  name_tx: function (e) {
    console.log(e)
    wx.navigateTo({
      url: 'LeakyFill_tx/LeakyFill_tx?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name,
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
// pages/User/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid:1,
    s1:false,
    s2:true
  },
  // 切换选项
  swin:function(e){
    // console.log(e)
    this.setData({
      sid: e.currentTarget.dataset.s_id
    })
    if (e.currentTarget.dataset.s_id==1){
      this.setData({
        s1: false,
        s2: true,
      })
    }
    else{
      this.setData({
        s1: true,
        s2: false,
      })
    }
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
// pages/agree/agree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1:false,
    s2:true,
    s4: false,
    s3: true,
    tempFilePaths:[],
  },

  flys:function(){
      this.setData({
        s1: false,
        s2: true,
        s4: false,
        s3: true,
      })
  },
  fly: function () {
    this.setData({
      s1: true,
      s2: false,
      s4: true,
      s3: false,
    })
  },
  sure:function(){
    wx.navigateBack({
      delta:1
    })
  },
  img: function () {
    var that = this
    var tempFilePaths1 = this.data.tempFilePaths
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        tempFilePaths1.push(res.tempFilePaths)
        console.log('tempFilePaths1', tempFilePaths1)
        that.setData({
          tempFilePaths: tempFilePaths1,
        })
      }
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
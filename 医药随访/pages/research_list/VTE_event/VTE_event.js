// pages/research_list/VTE_event/VTE_event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: false,
    s2: true,
    s3: true,
    tempFilePaths: [],

    situation: [{ 'id': 1, 'name': '肺栓塞' }, { 'id': 2, 'name': '心梗' }, { 'id': 3, 'name': '脑梗' }, { 'id': 4, 'name': '下肢深静脉血栓' }, { 'id': 5, 'name': '情况不明' },],
  },
  de: function (e) {
    this.setData({
      ids: e.currentTarget.id
    })
  },
  fly: function () {
    this.setData({
      s3: !this.data.s3
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  sec: function () {
    this.setData({
      s1: true,
      s2: false
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
  submin: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  upload: function () {
    wx.navigateTo({
      url: '../Diagnosis/upload/upload',
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
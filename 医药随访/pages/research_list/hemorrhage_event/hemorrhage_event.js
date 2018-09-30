// pages/research_list/hemorrhage_event/hemorrhage_event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: false,
    s2: true,
    degree: [{ 'id': 1, 'name': '轻(1)' }, { 'id': 2, 'name': '中(2)' }, { 'id': 3, 'name': '重(3)' }],
    handle: [{ 'id': 1, 'name': '否' }, { 'id': 2, 'name': '对症处理' }, { 'id': 3, 'name': '需住院治疗' }, { 'id': 4, 'name': '其他' }],
    measures: [{ 'id': 1, 'name': '无' }, { 'id': 2, 'name': '减少次数' }, { 'id': 3, 'name': '短暂停用' }, { 'id': 4, 'name': '永久停用' }],
  },
  de: function (e) {
    this.setData({
      ids: e.currentTarget.id
    })
  },
  de1: function (e) {
    this.setData({
      ids1: e.currentTarget.id
    })
  },
  de2: function (e) {
    this.setData({
      ids2: e.currentTarget.id
    })
  },
  cl: function (e) {
    this.setData({
      cls: e.currentTarget.id
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
  bindDate1Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
  bindDate2Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  // 不良反应时间
  bindDates1Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dates1: e.detail.value
    })
  },
  bindDates2Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dates2: e.detail.value
    })
  },
  bindDates3Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dates3: e.detail.value
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
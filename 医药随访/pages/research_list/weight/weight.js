// pages/research_list/weight/weight.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: [{ 'id': 1, "name": '健身' }, { 'id': 2, "name": '骑车' }, { 'id': 3, "name": '跳舞' }, { 'id': 4, "name": '太极' }, { 'id': 5, "name": '瑜伽' },],
    frequency:[{ 'id': 1, "name": '无' }, { 'id': 2, "name": '小于2次' }, { 'id': 3, "name": '2~3次' }, { 'id': 4, "name": '四次及以上' }],
    yd: [{ 'id': 1, "name": '无' }, { 'id': 2, "name": '有' }],
    cd: [{ 'id': 1, "name": '无(0)' }, { 'id': 2, "name": '轻(1)' }, { 'id': 3, "name": '中(2)' }, { 'id': 4, "name": '重(3)' }, { 'id': 5, "name": '极重(4)' },],
    my: [{ 'id': 1, "name": '很满意(0)' }, { 'id': 2, "name": '满意(1)' }, { 'id': 3, "name": '一般(2)' }, { 'id': 4, "name": '不满意(3)' }, { 'id': 5, "name": '很不满意(4)' },],
    gr: [{ 'id': 1, "name": '没有(0)' }, { 'id': 2, "name": '轻微(1)' }, { 'id': 3, "name": '有些(2)' }, { 'id': 4, "name": '较多(3)' }, { 'id': 5, "name": '很多干扰(4)' },],
    sh: [{ 'id': 1, "name": '没有(0)' }, { 'id': 2, "name": '一点(1)' }, { 'id': 3, "name": '有些(2)' }, { 'id': 4, "name": '较多(3)' }, { 'id': 5, "name": '很多(4)' },],
    s1: false, s2: true,
  },
  // 方式
  mode:function(e){
    console.log(e)
    this.setData({
      ids: e.currentTarget.id
    })
  },
  // 损害程度
  sh: function (e) {
    console.log(e)
    this.setData({
      sh1: e.currentTarget.id
    })
  },
  // 焦虑
  jv: function (e) {
    console.log(e)
    this.setData({
      jv: e.currentTarget.id
    })
  },
  // 干扰程度
  gr: function (e) {
    console.log(e)
    this.setData({
      gr1: e.currentTarget.id
    })
  },
  // 睡眠满意度
  my: function (e) {
    console.log(e)
    this.setData({
      my1: e.currentTarget.id
    })
  },
  // 程度A
  cd1: function (e) {
    console.log(e)
    this.setData({
      cd1: e.currentTarget.id
    })
  },
  // 程度B
  cd2: function (e) {
    console.log(e)
    this.setData({
      cd2: e.currentTarget.id
    })
  },
  // 程度C
  cd3: function (e) {
    console.log(e)
    this.setData({
      cd3: e.currentTarget.id
    })
  },
  // 频率
  modes: function (e) {
    console.log(e)
    this.setData({
      ids1: e.currentTarget.id
    })
  },
  // 运动安排
  yd: function (e) {
    console.log(e)
    this.setData({
      yds: e.currentTarget.id
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
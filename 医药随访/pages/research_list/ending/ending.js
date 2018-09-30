// pages/research_list/ending/ending.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: false,
    s2: true,
    s3:false,
    s4: false,
    s5: false,

    h1: true, h2: false,
    tempFilePaths: [],

    dei: [{ 'id': 1, 'name': '因复发转移而死亡' }, { 'id': 2, 'name': '因VTE而死亡' }, { 'id': 3, 'name': '其他原因死亡' }],
    position: [{ 'id': 1, 'name': '脑' }, { 'id': 2, 'name': '双肺' }, { 'id': 3, 'name': '盆腔种植转移' }, { 'id': 4, 'name': '其他部位' }],
  },
  // 死亡原因
  de:function(e){
      this.setData({
        ids: e.currentTarget.id
      })
  },
  // 转移部位
  des: function (e) {
    this.setData({
      idp: e.currentTarget.id
    })
  },
  // D2肿瘤是否复发
  fly: function () {
    this.setData({
        s3: !this.data.s3
    })
  },
  // D1生存结局
  flys: function () {
    var s4 = !this.data.s4
    if(s4==false){
      this.setData({
        h1: true, h2: false,
      })
    }
    else{
      this.setData({
        h1: false, h2: true,
      })
    }
    this.setData({
      s4: s4
    })
  },
  // D3是否复发新增转移
  fly5: function () {
    var s5 = this.data.s5
    this.setData({
      s5: !s5
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDatesChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dates: e.detail.value
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
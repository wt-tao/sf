// pages/Typical_case/Typical_case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1: true,
    province: ['省/直辖市', '四川', '北京'],
    pro: 0,

    city: ['市', '成都', '绵阳'],
    citys: 0,

    contry: ['区/县', '武侯区', '锦江区'],
    con: 0,
    year: ['2018', '2017', '2016', '2015', '2014', '2013'],

    month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',],

    day: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    tempFilePaths: [],
    s4:false,
  },
  s4:function(){
    var s4=!this.data.s4
    this.setData({
      s4:s4
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
  fly: function () {
    var s1 = this.data.s1
    var s2 = !this.data.s1
    this.setData({
      s1: s2
    })
  },
  bindYearsChange: function (e) {
    this.setData({
      years1: e.detail.value
    })
  },
  bindMonthsChange: function (e) {
    this.setData({
      mon1: e.detail.value
    })
  },
  bindDaysChange: function (e) {
    this.setData({
      days1: e.detail.value
    })
  },
  // 省选择器
  bindProvincerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pro: e.detail.value
    })
  },
  //市选择器
  bindCityChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      citys: e.detail.value
    })
  },
  //区/县选择器
  bindContryChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      con: e.detail.value
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
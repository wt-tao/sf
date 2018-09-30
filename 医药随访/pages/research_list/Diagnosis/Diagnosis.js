// pages/research_list/Diagnosis/Diagnosis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: [{ 'id': 1, 'number': 'Ⅱa' }, { 'id': 2, 'number': 'Ⅱb' }, { 'id': 3, 'number': 'Ⅲa' }, { 'id': 4, 'number': 'Ⅲb' }, { 'id': 5, 'number': 'Ⅰa' }, { 'id': 4, 'number': 'Ⅰb' } ,{ 'id': 4, 'number': 'Ⅳ' } ,{ 'id': 4, 'number': '其他' }],
    degree: [{ 'id': 1, 'number': '高分化' }, { 'id': 2, 'number': '中分化' }, { 'id': 3, 'number': '低分化' }, { 'id': 4, 'number': '未分化' }, { 'id': 5, 'number': '不清楚' }],
    year:['2018','2017','2016','2015','2014','2013'],
   
    month:['1','2','3','4','5','6','7','8','9','10','11','12',],
 
    day:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],

    s1: false,
    s2:true,

    s3:true,
    s4:true,
     s5: true,
    s6: true,
    s7: true,
    s8: true,
    s9: true,
    s10: true,
    tempFilePaths:[],
  },
  bindYearChange:function(e){
    this.setData({
      years: e.detail.value
    })
  },
  bindMonthChange: function (e) {
    this.setData({
      mon: e.detail.value
    })
  },
  bindDayChange: function (e) {
    this.setData({
      days: e.detail.value
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
  // 结节
  s10: function () {
    if (this.data.s9 == false) {
      this.setData({
        s9: !this.data.s9
      })
    }
    this.setData({
      s10: !this.data.s10
    })
  },
  s9: function () {
    if (this.data.s10 == false) {
      this.setData({
        s10: !this.data.s10
      })
    }
    this.setData({
      s9: !this.data.s9
    })
  },
  // 微血管
  s8: function () {
    if (this.data.s7 == false) {
      this.setData({
        s7: !this.data.s7
      })
    }
    this.setData({
      s8: !this.data.s8
    })
  },
  s7: function () {
    if (this.data.s8 == false) {
      this.setData({
        s8: !this.data.s8
      })
    }
    this.setData({
      s7: !this.data.s7
    })
  },
  // 肿瘤位置
  s4:function(){
    if(this.data.s3==false){
      this.setData({
        s3: !this.data.s3
      })
    }
    this.setData({
      s4:!this.data.s4
    })
  },
  s3: function () {
    if (this.data.s4 == false) {
      this.setData({
        s4: !this.data.s4
      })
    }
    this.setData({
      s3: !this.data.s3
    })
  },
  // 包膜
  s6: function () {
    if (this.data.s5 == false) {
      this.setData({
        s5: !this.data.s5
      })
    }
    this.setData({
      s6: !this.data.s6
    })
  },
  s5: function () {
    if (this.data.s6 == false) {
      this.setData({
        s6: !this.data.s6
      })
    }
    this.setData({
      s5: !this.data.s5
    })
  },
  // 选择分期
  secect:function(e){
    console.log(e)
    var ids=e.currentTarget.id
    this.setData({
      ids:ids
    })
  },
  // 选择分化程度
  secects: function (e) {
    console.log(e)
    var ids = e.currentTarget.id
    this.setData({
      ide: ids
    })
  },
  sec: function () {
    this.setData({
      s1: true,
      s2: false
    })
  },
  img:function(){
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
  submin:function(){
      wx.navigateBack({
        delta:1
      })
  },
  upload:function(){
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
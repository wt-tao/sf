// pages/research_list/QLQ_life/QLQ_life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1:false,
    s2:true,
    tous:1,
    if1:false,
    if2:true,

    f1:false,
    list: [{ id: 1, text: "没有" }, { id: 2, text: "有一点" }, { id: 3, text: "有一些" }, { id: 4, text: "非常多" },],
    list2: [{ id: 1, text: "没有" }, { id: 2, text: "有点" }, { id: 3, text: "相当" }, { id: 4, text: "非常" },],
    list1: [{ id: 1, text: "非常差" }, { id: 2, text: "" }, { id: 3, text: "" }, { id: 4, text: "" }, { id: 5, text: "" }, { id: 6, text: "" }, { id: 7, text: "非常好" }]
  },
  sec:function(){
    this.setData({
      s1: true,
      s2: false
    })
  },
  del:function(){
    wx.navigateBack({
      delta:1
    })
  },
  // 13量表
  del1: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  fly:function(){
    // console.log()
    this.setData({
      f1:!this.data.f1
    })
  },
  touq:function(e){
    this.setData({
      tous: e.currentTarget.id
    })
    if (e.currentTarget.id==1){
      this.setData({
        if1: false,
        if2: true,
      })
    }else{
      this.setData({
        if1: true,
        if2: false,
      })
    }
  },



  list1:function(e){
    this.setData({
      ids1: e.currentTarget.id
    })
  },
  list2: function (e) {
    this.setData({
      ids2: e.currentTarget.id
    })
  },
   list3: function (e) {
    this.setData({
      ids3: e.currentTarget.id
    })
  },
  list4: function (e) {
    this.setData({
      ids4: e.currentTarget.id
    })
  },
  list5: function (e) {
    this.setData({
      ids5: e.currentTarget.id
    })
  },
  list6: function (e) {
    this.setData({
      ids6: e.currentTarget.id
    })
  },
  list7: function (e) {
    this.setData({
      ids7: e.currentTarget.id
    })
  },
  list8: function (e) {
    this.setData({
      ids8: e.currentTarget.id
    })
  },
  list9: function (e) {
    this.setData({
      ids9: e.currentTarget.id
    })
  },
  list10: function (e) {
    this.setData({
      ids10: e.currentTarget.id
    })
  },
  list11: function (e) {
    this.setData({
      ids11: e.currentTarget.id
    })
  },
  list12: function (e) {
    this.setData({
      ids12: e.currentTarget.id
    })
  },
  list13: function (e) {
    this.setData({
      ids13: e.currentTarget.id
    })
  },
  list14: function (e) {
    this.setData({
      ids14: e.currentTarget.id
    })
  },
  list15: function (e) {
    this.setData({
      ids15: e.currentTarget.id
    })
  },
  list16: function (e) {
    this.setData({
      ids16: e.currentTarget.id
    })
  },
  list17: function (e) {
    this.setData({
      ids17: e.currentTarget.id
    })
  },
  list18: function (e) {
    this.setData({
      ids18: e.currentTarget.id
    })
  },
  list19: function (e) {
    this.setData({
      ids19: e.currentTarget.id
    })
  },
  list20: function (e) {
    this.setData({
      ids20: e.currentTarget.id
    })
  },
  list21: function (e) {
    this.setData({
      ids21: e.currentTarget.id
    })
  },
  list22: function (e) {
    this.setData({
      ids22: e.currentTarget.id
    })
  },
  list23: function (e) {
    this.setData({
      ids23: e.currentTarget.id
    })
  },
  list24: function (e) {
    this.setData({
      ids24: e.currentTarget.id
    })
  },
  list25: function (e) {
    this.setData({
      ids25: e.currentTarget.id
    })
  },
  list26: function (e) {
    this.setData({
      ids26: e.currentTarget.id
    })
  },
  list27: function (e) {
    this.setData({
      ids27: e.currentTarget.id
    })
  },
  list28: function (e) {
    this.setData({
      ids28: e.currentTarget.id
    })
  },
  list29: function (e) {
    this.setData({
      ids29: e.currentTarget.id
    })
  },
  list30: function (e) {
    this.setData({
      ids30: e.currentTarget.id
    })
  },





  list31: function (e) {
    this.setData({
      ids31: e.currentTarget.id
    })
  },
  list32: function (e) {
    this.setData({
      ids32: e.currentTarget.id
    })
  },
  list33: function (e) {
    this.setData({
      ids33: e.currentTarget.id
    })
  },
  list34: function (e) {
    this.setData({
      ids34: e.currentTarget.id
    })
  },
  list35: function (e) {
    this.setData({
      ids35: e.currentTarget.id
    })
  },
  list36: function (e) {
    this.setData({
      ids36: e.currentTarget.id
    })
  },
  list37: function (e) {
    this.setData({
      ids37: e.currentTarget.id
    })
  },
  list38: function (e) {
    this.setData({
      ids38: e.currentTarget.id
    })
  },
  list39: function (e) {
    this.setData({
      ids39: e.currentTarget.id
    })
  },
  list40: function (e) {
    this.setData({
      ids40: e.currentTarget.id
    })
  },
  list41: function (e) {
    this.setData({
      ids41: e.currentTarget.id
    })
  },
  list42: function (e) {
    this.setData({
      ids42: e.currentTarget.id
    })
  },
  list43: function (e) {
    this.setData({
      ids43: e.currentTarget.id
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
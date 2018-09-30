// pages/research_list/research_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  summary: function () {
    wx.navigateTo({
      url: '../research_list/summary/summary',
    })
  },
  hemorrhage_event: function () {
    wx.navigateTo({
      url: '../research_list/hemorrhage_event/hemorrhage_event',
    })
  },
  VTE_event: function () {
    wx.navigateTo({
      url: '../research_list/VTE_event/VTE_event',
    })
  },
  ending: function () {
    wx.navigateTo({
      url: '../research_list/ending/ending',
    })
  },
  CT_review: function () {
    wx.navigateTo({
      url: '../research_list/CT_review/CT_review',
    })
  },
  General_information:function(){
    wx.navigateTo({
      url: '../research_list/General_information/General_information',
    })
  },
  case: function () {
    wx.navigateTo({
      url: '../research_list/case/case',
    })
  },
  Diagnosis:function() {
    wx.navigateTo({
      url: '../research_list/Diagnosis/Diagnosis',
    })
  },
  Treatment_plan: function () {
    wx.navigateTo({
      url: '../research_list/Treatment_plan/Treatment_plan',
    })
  },
  Inspection_project: function () {
    wx.navigateTo({
      url: '../research_list/Inspection_project/Inspection_project',
    })
  },
  weight: function () {
    wx.navigateTo({
      url: '../research_list/weight/weight',
    })
  },
  Anderson_rating_scale: function () {
    wx.navigateTo({
      url: '../research_list/Anderson_rating_scale/Anderson_rating_scale',
    })
  },
  Use_of_retrogradation: function () {
    wx.navigateTo({
      url: '../research_list/Use_of_retrogradation/Use_of_retrogradation',
    })
  },
  Use_of_anticoagulants: function () {
    wx.navigateTo({
      url: '../research_list/Use_of_anticoagulants/Use_of_anticoagulants',
    })
  },
  Photograph_and_upload: function () {
    wx.navigateTo({
      url: '../research_list/Photograph_and_upload/Photograph_and_upload',
    })
  },
  CRO_Check: function () {
    wx.navigateTo({
      url: '../research_list/CRO_Check/CRO_Check',
    })
  },
  Management_verification: function () {
    wx.navigateTo({
      url: '../research_list/Management_verification/Management_verification',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id=options.id
    wx.setNavigationBarTitle({
      title: options.title,
    })
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
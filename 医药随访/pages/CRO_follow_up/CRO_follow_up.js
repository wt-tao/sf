// pages/CRO_follow_up/CRO_follow_up.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ id: 1, name: "王良银", card: 'wly20180808' }, { id: 2, name: "曹寅", card: 'wly20180808' },],
    array:['进行中的患者','已结束随访患者'],
    index:0,
    s1:false,
    s2:true,
  },
  CRO_Patient: function () {
    wx.reLaunch({
      url: '../CRO_patient/CRO_patient',
    })
  },
  CRO_main: function () {
    wx.reLaunch({
      url: '../CRO_main/CRO_main',
    })
  },
  CRO_typical: function () {
    wx.reLaunch({
      url: '../CRO_typical/CRO_typical',
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      s1:!this.data.s1,
      index: e.detail.value
    })
    if (e.detail.value==1){
      wx.showToast({
        title: '加载中...',
        icon:'loading',
        duration:2000,
      })
      this.setData({
        s1:true,
        s2:false
      })
    }
    else{
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 2000,
      })
      this.setData({
        s1: false,
        s2: true,
      })
    }
  },
  name_details:function(){
    wx.navigateTo({
      url: 'name_details/name_details',
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
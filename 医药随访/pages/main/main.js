// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  number:'2',
  numbers:'1',
    title:'爱的发声大师傅矮冬瓜阿斯蒂芬阿萨德阿萨德水电',
    sort: false,
  },
    del:function(){
      this.setData({
        sort: false,
      })
    },
  ewm:function(){
    this.setData({
      sort: true,
    })
  },
  research_list:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../research_list/research_list?id=' + e.currentTarget.id + '&title=' + e.currentTarget.dataset.title,
    })
  },
  Typical_case: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../Typical_case/Typical_case',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(this.data.number.length)
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
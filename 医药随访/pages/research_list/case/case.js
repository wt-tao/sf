// pages/research_list/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    c1:true,
    c2: true,
    c3: true,
    c4: true,
    c5: true,
    c6: true,
    c7: true,
    c8: true,
    c9: true,
    s1:true,
    s4:true,
    s6: true,
  },
  // 第三行
  c9: function () {
    var c7 = this.data.c7
    var c8 = this.data.c8
    var c9 = this.data.c9
    if (c7 == false) {
      this.setData({
        c7: true,
      })
    }
    if (c8 == false) {
      this.setData({
        c8: true,
      })
    }
    this.setData({
      c9: !c9
    })
  },
  c8: function () {
    var c7 = this.data.c7
    var c8 = this.data.c8
    var c9 = this.data.c9
    if (c9 == false) {
      this.setData({
        c9: true,
      })
    }
    if (c7 == false) {
      this.setData({
        c7: true,
      })
    }
    this.setData({
      c8: !c8
    })
  },
  c7: function () {
    var c7 = this.data.c7
    var c8 = this.data.c8
    var c9 = this.data.c9
    if (c9 == false) {
      this.setData({
        c9: true,
      })
    }
    if (c8 == false) {
      this.setData({
        c8: true,
      })
    }
    this.setData({
      c7: !c7,
    })
  },
  // 第二行
  c6: function () {
    var c5 = this.data.c5
    var c4 = this.data.c4
    var c6 = this.data.c6
    if (c4 == false) {
      this.setData({
        c4: true,
      })
    }
    if (c5 == false) {
      this.setData({
        c5: true,
      })
    }
    this.setData({
      c6: !c6
    })
  },
  c5: function () {
    var c5 = this.data.c5
    var c4 = this.data.c4
    var c6 = this.data.c6
    if (c4 == false) {
      this.setData({
        c4: true,
      })
    }
    if (c6 == false) {
      this.setData({
        c6: true,
      })
    }
    this.setData({
      c5: !c5
    })
  },
  c4: function () {
    var c5 = this.data.c5
    var c4 = this.data.c4
    var c6 = this.data.c6
    if (c5 == false) {
      this.setData({
        c5: true,
      })
    }
    if (c6 == false) {
      this.setData({
        c6: true,
      })
    }
    this.setData({
      c4: !c4,
    })
  },
  // 第一行
  c3: function () {
    var c3 = this.data.c3
    var c2 = this.data.c2
    var c1 = this.data.c1
    if (c1 == false) {
      this.setData({
        c1: true,
      })
    }
    if (c2 == false) {
      this.setData({
        c2: true,
      })
    }
    this.setData({
      c3: !c3
    })
  },
  c2:function(){
    var c3 = this.data.c3
    var c2 = this.data.c2
    var c1=this.data.c1
    if(c1==false){
      this.setData({
        c1:true,
      })
    }
    if (c3 == false) {
      this.setData({
        c3: true,
      })
    }
    this.setData({
      c2: !c2
    })
  },
  c1: function () {
    var c3 = this.data.c3
    var c1 = this.data.c1
    var c2 = this.data.c2
    if (c3 == false) {
      this.setData({
        c3: true,
      })
    }
    if (c2 == false) {
      this.setData({
        c2: true,
      })
    }
    this.setData({
      c1: !c1,
    })
  },
  sec: function () {
    this.setData({
      s2:true,
      s3:true,
      s4: false,
      s5: true,
      s6: false,
    })
  },
  submin: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  fly:function(){
    var s1=this.data.s1
    var s2 = !this.data.s1
    if(s2==false){
      this.setData({
        s4: false,
        s3:false,
        s6:true
      })
    }
    else{
      this.setData({
        s3: true,
        s6: false
      })
    }
    this.setData({
      s1:s2
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
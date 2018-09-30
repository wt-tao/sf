// pages/User/leaving_message/leaving/leaving.js
let Mcaptcha = require('../../../../utils/mcaptcha.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  huan:function(){
    this.onReady()
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
    var that = this; var num = that.getRanNum();   
    // console.log(num)    
    this.setData({      num: num    })    
    new Mcaptcha({      el: 'canvas',      width: 80,
    //对图形的宽高进行控制      
    height: 30,     
     code: num    
     });  
     },  
     getRanNum: function () {    
       var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    
       var pwd = '';    
       for (var i = 0; i < 4; i++) {      
         if (Math.random() < 48) {        
           pwd += chars.charAt(Math.random() * 48 - 1);      
           }    
           }   
            return pwd;  
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that = this
    this.setData({
      mid: options.id
    })
    
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      method:"GET",
      header:{
        "Content-Type": "json"
      },
      // 回调函数
      success:function(res){
        console.log(res)
        that.setData({
          movie:res.data
        }),
        wx.setNavigationBarTitle({
          title: res.data.title + " " + res.data.rating.average,
        })
        wx.hideNavigationBarLoading()
      },
      fail:function(){

      },
      complete:function(){
        
      }
    })

    //
    wx.showNavigationBarLoading()
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
    return{
      title: "向你推荐：" + this.data.movie.title + " " + this.data.movie.rating.average
    }
  }
 
})
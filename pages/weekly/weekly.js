Page({

  /**
   * 页面的初始数据
   */
  data: {
    weeklyMovieList: [{
      id: 1292720,
      name:"阿甘正传",
      comment:"最有的人是在看电影，有的人是在讲人生",
      imagePath:"/images/m1.jpg",
      isHighlyRecommond:true
    },{
      id: 1292722,
      name: "泰坦尼克号",
      comment: "失去的才是永恒的",
      imagePath: "/images/m2.jpg",
      isHighlyRecommond: true
    }, {
      id: 1295644,
      name: "这个杀手不太冷",
      comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
      imagePath: "/images/m3.jpg",
      isHighlyRecommond: false
    }],
    currentIndex:0
  },

  f0: function(event){
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f1: function(event){
    var movieId = event.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.weeklyMovieList.length-1
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
    return{
      title:"每周推荐"
    }
  }
  
})
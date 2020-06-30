// pages/zhihu/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
      {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      }, {
        name: 'aa',
        content: 'bb'
      },
    ],
    isActive: 0,
  },

  setActive: function(e) {
    var _this = this;
    if (this.data.isActive != e.currentTarget.dataset.index) {
      _this.setData( {
          isActive: e.currentTarget.dataset.index
      })
    }
  },

  stopTouchMove: function(e) {
    return false;
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
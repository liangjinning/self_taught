// pages/zhihu/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areay: [
      {'title': '李三的故事会1','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 123},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
      {'title': '李三的故事会','userName': '李三', 'userTip': '超级牛皮的XXXXXX','userInfo': '今天我要给大家讲一个故事，这个故事就是巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉', 'zan': 12, 'comment': 12},
    ],
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
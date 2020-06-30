// pages/zhihu/home/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
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
   * 组件的方法列表
   */
  methods: {

  }
})

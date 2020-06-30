// pages/zhihu/home/hotBot/hotBot.js
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
    title: [
      '全站',
      '视频',
      '科学',
      '数码',
      '体育',
      '时尚',
      '影视',
    ],
    isRotate: false,
    isTitle: '全站',
    aa:[     //放三个，要自己加上去。
      {   
          time:7,
          nickName:"猪***能",
          reward:"2"
      },
      {   
          time:12,
          nickName: "画**",
          reward: "2"
      },
      {
          time:14,
          nickName: "wang**",
          reward: "2"
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setRotate: function(e) {
      console.log(this.data.isRotate)
      this.setData({
        isRotate: !this.data.isRotate
      })
    },

    setTitle: function(e) {
      var _this = this;
      if (this.data.isTitle != e.target.dataset.title) {
        this.setData({
          isTitle: e.target.dataset.title
        })
      }
    },
  }
})

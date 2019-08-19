import request from '../../utils/request.js';
Page({

  data: {
    // 轮播图
    detail:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id
    request({
      url:'/goods/detail',
      data:{
        goods_id : id
      }
    }).then(res=>{
      const message = res.data.message
      this.setData({
        detail:message
      })
      console.log(this.data.detail)
    })
  },

  
})
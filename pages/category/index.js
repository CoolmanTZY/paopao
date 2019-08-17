import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧导航栏的数据
    categoriesList:[],
    // 导航栏样式的添加
    active:0,
    // 右侧内容
  },
  // 点击左侧时切换样式
  handleClick(e){
    const { index } = e.currentTarget.dataset;
    this.setData({
      active:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url: "/categories"
    }).then(res=>{
      const { message } = res.data
      this.setData({
        categoriesList:message
      })
      console.log(this.data.categoriesList)
    })
  },
})
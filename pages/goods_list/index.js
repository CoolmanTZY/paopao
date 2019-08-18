import request from '../../utils/request.js';
Page({

  data: {
    // tab
    current:0,
    tabList: ['综合', '销量', '价格'],
    // shopping
    goods:[], //所以商品
    pagenum:1,
    pagesize:11,
    keyword:'',  //接收的参数
    // 数量条件
    add:true
    
  },
  // tab栏
  switcher(e){
    const {index} = e.currentTarget.dataset
    this.setData({
      current:index
    })
  },

  // 页面列表数据
  getShop(){
    const { keyword, pagenum, pagesize} = this.data
    request({
      url: '/goods/search',
      data: {
        query:keyword,
        pagenum,
        pagesize
      }
    }).then(res=>{
      const {goods} = res.data.message
      console.log(goods)
      this.setData({
        goods
      })
      // 如果数量的长度小于 10 则说明已经加载完毕(无商品)
      if(goods.lenth<this.data.pagesize){
        this.setData({
          add:false
        })
      }
      // 循环所以商品 添加浮点数
      const newgoods = goods.map(v=>{
        v.goods_price = Number(v.goods_price).toFixed(2);
        return v
      })
      // 合并新旧数组
      this.setData({
        goods:[...this.data.goods,...newgoods]
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keyword:options.keyword
    })
    this.getShop()
  },

  onReachBottom:function(){
   if(!this.data.add){
     return
   }
    this.setData({
      pagenum:this.data.pagenum+1
    })
    this.getShop()
  }
})
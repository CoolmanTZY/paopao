import request from "../../utils/request.js";
Page({
  data: {
    // 轮播图数据
    imgUrls: [],
    // 导航栏数据
    catitems:[],
    // 楼层数据
    floordata:[]
  },
  onLoad() {
    request({
      url:"/home/swiperdata"
    }).then(res => {
      const { message } = res.data
      this.setData({
        imgUrls: message
      })
    }),
    
    request({
      url:'/home/catitems',
    }).then(res=>{
      const {message} = res.data
      this.setData({
        catitems:message
      })
    }),

    // 楼层数据
    request({
      url:'/home/floordata'
    }).then(res=>{
      const {message} = res.data
      this.setData({
        floordata:message
      })
    })
  },

})
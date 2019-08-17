//app.js
import request from "./utils/request.js";
App({
  
  onLaunch: function () {
    // 初始化request 的基准路径
    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1";
  }
})
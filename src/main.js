//首先導入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

//導入初始化默認樣式
import 'normalize.css';
//自己寫的全局樣式
import './less/index.css';


//啟動vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);
// Vue.use(normalize);

//導入自己寫的東西
import App from './component/App.vue';
import Register from "./component/register/Register.vue";
import Login from "./component/login/Login.vue";



//導入路由器
import routerConfig from './router/index.js';
import beforeEach from "./router/beforeEach.js";
//導入axios
import axios from 'axios';
axios.defaults.withCredentials=true;
axios.defaults.baseURL = 'http://localhost:8899'; // 一配置, 以后所有的请求就会自动使用这个域名 
Vue.prototype.$http = axios;
//導入api文件
import api from "./js/api-config.js";
Vue.prototype.$api = api;

//把跟組件渲染到指定視圖 
new Vue({
  el: "#app",
  render: function (createElement) {
    return createElement(App);
  },
  router: new VueRouter(routerConfig),

})
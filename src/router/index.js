//該文件對外導出路由配置
 import Login from '../component/login/login.vue';
 import Register from "../component/register/Register.vue";

 export default{
   routes:[
     {name:'login',path:'/login',component:Login},
     {name:'register',path:'/register',component:Register}
   ]
 }

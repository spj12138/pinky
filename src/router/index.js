//該文件對外導出路由配置
 import Login from '../component/login/Login.vue';
 import Admin from '../component/admin/Admin.vue';

 export default{
   routes:[
     {name:'login',path:'/login',component:Login},
      {name:'admin',path:'/admin',component:Admin}
   ]
 }

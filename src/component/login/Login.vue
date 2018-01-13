<template>
  <div><a href="#">{{msg}}登錄頁面</a></div>
</template>

 <script>
   export default{
     data() {
          return {
            msg: '傻逼',
          }
        },
        
       created() {
           this.$http.get(this.$api.islogin).then(res => {

        })
     }
  }

   
 </script>

 <style>
   div{
     font-size: 520px;
   }
 </style>

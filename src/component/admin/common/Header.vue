<template>
      
     <el-dropdown class="header">
         <span class="el-dropdown-link">
            <span>hello{{uname}}</span>
            <i class="el-icon-arrow-down el-icon-right"></i>
         </span>
          
         <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>modif</el-dropdown-item>
              <el-dropdown-item>logout</el-dropdown-item>
         </el-dropdown-menu>

     </el-dropdown>
      
</template>

<script>f
  export default{
     data() {
          return {
            uname:"管理員" 
           
          };
        },
      
  }

</script>


<style scoped>
   .header{
      display: block;
      text-align: right;
      line-height: 60px;
   }

</style>
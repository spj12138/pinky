<template>
  <el-container class="admin">
      <!-- 右側 -->
    <el-aside width="200px">
        <Aside> </Aside>
    </el-aside>

     
    <el-container>
        <!-- 右側頭部 -->
         <el-header>
             <Header></Header>
         </el-header>

       <!-- 右側主體 -->
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
    import Aside from "./common/Aside.vue";
    import  Header from "./common/Header.vue";

    export default{
      components: {
        Header,
        Aside
      }
    }
</script>



<style scoped>
  .admin {
    height: 100%;
  }
   .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

</style>
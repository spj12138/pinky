<template>
  
  <div class="box">
      <el-menu default-active="2" class="el-menu-vertical-demo el-aside " >
        <h3>斯,斯,斯內克</h3>
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="2" >
          <template slot="title">
            <i class="el-icon-loading"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航三</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
  </div> 
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .box{
    /* width: 201px; */
    background-color: #D3DCE6;
    height: 100%;
   
  }

  .el-aside{
    background-color: #D3DCE6;
  }
  h3 {
    line-height: 80px;
    font-size: 28px;
    text-align: center;
  }
 
</style>
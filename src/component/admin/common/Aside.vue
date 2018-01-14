<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组二</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组三</template>
      </el-menu-item-group>
    </el-submenu>


    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组二</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组三</template>
      </el-menu-item-group>
    </el-submenu>


    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组二</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组三</template>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>

</template>

<script>
  export default {
     data () {
       return {
         
       }
     }
  }

</script>

<style scoped>
  
</style>
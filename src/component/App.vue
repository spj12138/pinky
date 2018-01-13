<template>
  <div> {{msg}}world
    <router-view></router-view>
    <el-button type="text" @click="open2">点击打开</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '亂來的'
      }
    },
    methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>


<style>
  div {
    color: rgb(0, 255, 42);
    font-size: 40PX;
  }
</style>
<template>
    <div> {{msg}}world
      <router-view></router-view>
    </div>    
</template>

<script>
    export default{
      data () {
        return {
          msg:'亂來的'
        }
      }
    }
</script>


<style>
  div{
    color: rgb(0, 255, 42);
    font-size: 120PX;
  }
</style>
<template>
  <div id="app">
    <!--<img src="./assets/logo.png" alt="">-->
    <el-row>
      <MyHeader/>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/my_header.vue'
  export default {
    name: 'app',
    components: {
      MyHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #abcabc;
    height: 100%;
  }
</style>

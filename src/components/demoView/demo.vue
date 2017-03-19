
<template>
    <div class="name">
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
      <div v-for="item in items">{{item.test}}</div>
    </div>
</template>
<style>
  .name{
    background: #42b983;
  }
</style>


<script>
  import {mapState} from 'vuex';

  export default {
    name: 'demo',
    /*data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },*/
    computed: {
      ...mapState({
        items: state => state.test.items
      })
    }
  }
</script>

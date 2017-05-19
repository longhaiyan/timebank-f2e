<template>
    <div>
        <div class="my-task-sub j-task">
            <el-button type="text" class="j-nav-new">最新任务</el-button>
            <el-button type="text" class="j-nav-hot ">最热任务</el-button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  export default{
    name: 'task',
    methods:{
      init(){
        if(document.querySelector('.j-my-new-task-list')){
          document.querySelector('.j-nav-hot').className = document.querySelector('.j-nav-hot').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-new').className += ' activeTask '
        }else if(document.querySelector('.j-my-hot-task-list')){
          document.querySelector('.j-nav-new').className = document.querySelector('.j-nav-new').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-hot').className += ' activeTask '
        }
      }
    },
    mounted(){
      this.init()
    }
  }
</script>
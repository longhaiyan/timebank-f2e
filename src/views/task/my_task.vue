<template>
    <div>
        <div class="my-task-sub j-task">
            <el-button type="text">最新任务</el-button>
            <el-button type="text">最热任务</el-button>
            <el-button type="text">生活任务</el-button>
            <el-button type="text">技能任务</el-button>
            <el-button type="text">其它任务</el-button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  export default{
    name: 'task',
    methods:{

    }
  }
</script>
<template>
    <div>
        <div class="my-task-sub j-task">
            <el-button type="text" class="j-nav-new">
                <router-link to="/task/new" class="logo">
                    发布中
                </router-link>
            </el-button>
            <el-button type="text" class="j-nav-receive">
                <router-link to="/task/receive" class="logo">
                    已接单
                </router-link>
            </el-button>
            <el-button type="text" class="j-nav-finish">
                <router-link to="/task/finish" class="logo">
                    已完成
                </router-link>
            </el-button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  export default{
    name: 'task',
    methods:{

    },
    mounted(){
    }
  }
</script>
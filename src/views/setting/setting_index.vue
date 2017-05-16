<template>
    <div>
        <el-row class="my-setting">
            <el-col :sm="4">
                <el-menu :router="true" :default-active="settingNav||'info'" class="el-menu-vertical-demo">
                    <el-menu-item index="info"><i class="el-icon-edit"></i>我的个人信息</el-menu-item>
                    <el-menu-item index="private"><i class="el-icon-setting"></i>我的隐私设置</el-menu-item>
                    <el-menu-item index="publish_task"><i class="el-icon-document"></i>我发布的任务</el-menu-item>
                    <el-menu-item index="get_task"><i class="el-icon-menu"></i>我接受的任务</el-menu-item>
                    <el-menu-item index="community"><i class="el-icon-date"></i>我发布的帖子</el-menu-item>
                    <el-menu-item index="confirm"><i class="el-icon-warning"></i>实名认证</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :sm="20">
                <div class="my-setting-r">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  export default{
    name: 'settingIndex',
    computed:{
      ...mapState({
        settingNav:state=>state.myGlobal.settingNav
      })
    }
  }
</script>
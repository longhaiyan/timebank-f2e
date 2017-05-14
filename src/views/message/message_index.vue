<template>
    <div>
        <el-row class="my-setting my-message">
            <el-col :sm="4">
                <el-menu :router="true" default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item index="personal"><i class="el-icon-document"></i>私信</el-menu-item>
                    <el-menu-item index="system"><i class="el-icon-menu"></i>系统消息</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :sm="20">
                <div class="my-setting-r">
                    <router-view ></router-view>
                </div>
            </el-col>
        </el-row>

    </div>
</template>
<script>
  export default{
    name:'messageIndex'
  }
</script>
<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">系统消息</h4>
        </div>
        <div class="setting-r-bd my-message-system">
            <div class="system-box" v-for="item in 3" key>
                <div class="my-space-Between">
                    <p>欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行欢迎注册时间银行</p>
                    <span style="width: 150px;flex-shrink:0;margin-left: 50px;">2017.05.01  19:00</span>
                </div>
                <div style="text-align: right">
                    <el-button type="text">删除</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name:'messageSystem'
  }
</script>
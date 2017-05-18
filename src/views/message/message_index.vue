<template>
    <div>
        <el-row class="my-setting my-message">
            <el-col :sm="4" class="my-message-nav">
                <el-menu :router="true" :default-active="messageNav||'personal'" class="el-menu-vertical-demo">
                    <el-menu-item index="personal"><i class="el-icon-document"></i>
                        <el-badge v-if="msgList" :value="msgList.userMsgUnlookCount" :max="99" class="item">
                            私信
                        </el-badge>
                        <template v-else>
                            私信
                        </template>
                    </el-menu-item>
                    <el-menu-item index="system"><i class="el-icon-menu"></i>
                        <el-badge v-if="msgList&&msgList.sysMsgUnlook" :value="msgList.sysMsgUnlook.msgCount" :max="99" class="item">
                            系统消息
                        </el-badge>
                        <template v-else>
                            系统消息
                        </template>
                    </el-menu-item>
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
  import {mapState} from 'vuex'
  export default{
    name: 'messageIndex',
    computed: {
      ...mapState({
        messageNav: state => state.myGlobal.messageNav,
        msgList: state => state.message.msgList
      })
    }

  }
</script>
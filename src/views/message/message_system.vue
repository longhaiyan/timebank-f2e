<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">系统消息</h4>
        </div>
        <div v-if="msgList" class="setting-r-bd my-message-system">
            <template v-if="msgList.sysMsgUnlook&&msgList.sysMsgUnlook.messages">
                <div class="system-box"  v-for="item in msgList.sysMsgUnlook.messages" key>
                    <div class="my-space-Between">
                        <p><el-tag type="warning">新消息</el-tag>{{item.message}}</p>
                        <span style="width: 90px;flex-shrink:0;margin-left: 50px;">{{item.time}}</span>
                    </div>
                </div>
            </template>
            <template v-if="msgList.sysMsgViewed&&msgList.sysMsgViewed.messages">
                <div class="system-box"  v-for="item in msgList.sysMsgViewed.messages" key>
                    <div class="my-space-Between">
                        <p>{{item.message}}</p>
                        <span style="width: 90px;flex-shrink:0;margin-left: 50px;">{{item.time}}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
  import * as GlobalType from '@/store/global/types'
  import * as MessageType from '@/store/message/types'
  import {mapActions,mapState} from 'vuex'

  export default{
    name:'messageSystem',
    data(){
      return {

      }
    },
    computed:{
      /*...mapState({
        systemList: state=>state.message.systemList,
        systemError: state=>state.message.systemError,
        systemStep: state=>state.message.systemStep,
      })*/
      ...mapState({
        msgList: state=>state.message.msgList,
        msgError: state=>state.message.msgError,
        msgStep: state=>state.message.msgStep,
      })

    },
    methods:{
      ...mapActions({
        messageNav: GlobalType.A_MESSAGE_NAV,
        readMsg:MessageType.A_MESSAGE_READ,
      }),
      init(){
        this.messageNav({name:'system'})
        if(this.msgStep === 'error'){
          this.$message.warning(this.msgError)
        }
      }
    },
    mounted(){
      this.init()
      this.readMsg({userId:1})
    },
  }
</script>
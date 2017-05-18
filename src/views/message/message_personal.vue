<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">私信</h4>
        </div>
        <el-collapse v-if="msgList" @change="collapseChange" accordion
                     class="personal-collapse-boxes">
            <template v-if="msgList.userMsgUnlook" v-for="(item,index) in msgList.userMsgUnlook">
                <el-collapse-item v-if="item.user"  :name="item.user.userId" key>
                    <template slot="title">
                        <img v-if="!item.user.avatarId"
                             src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                        <img v-else
                             :src="'http://bank.longhaiyan.cn/picture/show?id='+item.user.avatarId" alt="">

                        <p>{{item.user.userName}}</p>
                        <el-badge  :value="item.msgCount" :max="99" class="item">
                        </el-badge>
                    </template>
                    <template v-if="userMsg&&userMsg.data&&userMsg.selfId" v-for="item in userMsg.data">
                        <div class="time">{{item.createTime}}</div>
                        <div v-if="item.senderInfo.userId === userMsg.selfId" class="box right">
                            <p>{{item.message}}</p><span>：我</span>
                        </div>
                        <div v-else class="box"><span>对方：</span>
                            <p>{{item.message}}</p>
                        </div>
                    </template>

                </el-collapse-item>
            </template>
            <template v-if="msgList.userMsgViewed" v-for="(item,index) in msgList.userMsgViewed">
                <el-collapse-item v-if="item.user"  :name="item.user.userId" key>
                    <template slot="title">
                        <img v-if="!item.user.avatarId"
                             src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                        <img v-else
                             :src="'http://bank.longhaiyan.cn/picture/show?id='+item.user.avatarId" alt="">

                        <p>{{item.user.userName}}</p>
                    </template>
                    <template v-if="userMsg&&userMsg.data&&userMsg.selfId" v-for="item in userMsg.data">
                        <div class="time">{{item.createTime}}</div>
                        <div v-if="item.senderInfo.userId === userMsg.selfId" class="box right">
                            <p>{{item.message}}</p><span>：我</span>
                        </div>
                        <div v-else class="box"><span>对方：</span>
                            <p>{{item.message}}</p>
                        </div>
                    </template>

                </el-collapse-item>
            </template>
        </el-collapse>
        <!--<div class="setting-r-bd my-message-personal">
            <div class="personal-box ">
                <img src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                <div style="width: 100%;">
                    <div class="my-space-Between personal-box-user">
                        <span>longhaiyan</span>
                        <i>2017.05.01  18:00</i>
                    </div>
                    <div class="my-space-Between personal-box-info">
                        <p>啦啦啦啦啦啦</p>
                        <div style="width: 100px;flex-shrink:0;margin-left: 50px;">
                            <el-button type="text">回复</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-box ">
                <img src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                <div style="width: 100%;">
                    <div class="my-space-Between personal-box-user">
                        <span>longhaiyan</span>
                        <i>2017.05.01  18:00</i>
                    </div>
                    <div class="my-space-Between personal-box-info">
                        <p>啦啦啦啦啦啦</p>
                        <div style="width: 100px;flex-shrink:0;margin-left: 50px;">
                            <el-button type="text">已回复</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </div>
                    <p class="personal-box-answer"><span>回复：</span>对呀</p>
                </div>
            </div>
        </div>-->
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import * as MessageType from '@/store/message/types'

  export default{
    name: 'messagePersonal',
    data(){
      return {
        data: [
          {'a': 1},
          {'a': 1},
          {'a': 1}
        ],
      }
    },
    computed: {
      ...mapState({
        msgList: state => state.message.msgList,
        msgError: state => state.message.msgError,
        msgStep: state => state.message.msgStep,
        userMsg: state => state.message.userMsg,
        userStep: state => state.message.userStep,
        userError: state => state.message.userError,
      })
    },
    methods: {
      ...mapActions({
        messageNav: GlobalType.A_MESSAGE_NAV,
        getUserMsg: MessageType.A_USER_MESSAGE,
        readMsg:MessageType.A_MESSAGE_READ,
      }),
      collapseChange(activeNames){
        let self =this
        console.log("改变", activeNames)
        if (activeNames) {
          this.getUserMsg({userId: activeNames}).then(() => {
            console.log("该条用户消息内容", this.userMsg)
            if(self.userStep !== 'error'){
              console.log("这条消息已经被查看")
              self.readMsg({userId:activeNames}).then(()=>{

              })
            }else{
              self.$message.error(self.userError)
            }
          })
        }
      },
      init(){
        this.messageNav({name: 'personal'})
        if (this.msgStep === 'error') {
          this.$message.warning(this.msgError)
        }
      },
        /*getUserMsg(id){
         this.userMsg({userId:id})
         }*/

    },
    mounted(){
      this.init()
      console.log("私信 msgList", this.msgList)
    }
  }
</script>
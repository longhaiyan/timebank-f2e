<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">私信</h4>
        </div>
        <el-collapse v-if="msgList" @change="collapseChange" accordion
                     class="personal-collapse-boxes">
            <template v-if="msgList.userMsgUnlook" v-for="(item,index) in msgList.userMsgUnlook">
                <el-collapse-item v-if="item.user" :name="item.user.userId" key>
                    <template slot="title">
                        <img v-if="!item.user.avatarId"
                             src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                        <img v-else
                             :src="'http://bank.longhaiyan.cn/picture/show?id='+item.user.avatarId" alt="">

                        <p>{{item.user.userName}}</p>
                        <el-badge :value="item.msgCount" :max="99" class="item">
                        </el-badge>
                    </template>
                    <template v-if="userMsg&&userMsg.data&&userMsg.selfId" v-for="(subitem,index) in userMsg.data">
                        <div class="time">{{subitem.createTime}}</div>
                        <div v-if="subitem.senderInfo.userId === userMsg.selfId" class="box right">
                            <p>{{subitem.message}}</p><span>：我</span>
                        </div>

                        <div v-else class="box"><span>{{item.user.userName}}：</span>
                            <p>{{subitem.message}}</p>
                        </div>
                        <!--<template v-if="index+1 ===  userMsg.data.length" v-for="(answer,subindex) in answerVal">
                            <div v-if="subindex === 0" class="time">刚刚</div>
                            <div  class="box right">
                                <p>{{answer}}</p><span>：我</span>
                            </div>
                        </template>-->
                    </template>
                    <el-input :maxlength=200 placeholder="请输入内容" v-model="answer">
                        <el-button type="primary" slot="append" @click="onAnswer(item.user.userId)">回复</el-button>
                    </el-input>

                </el-collapse-item>
            </template>
            <template v-if="msgList.userMsgViewed" v-for="(item,index) in msgList.userMsgViewed">
                <el-collapse-item v-if="item.user" :name="item.user.userId" key>
                    <template slot="title">
                        <img v-if="!item.user.avatarId"
                             src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                        <img v-else
                             :src="'http://bank.longhaiyan.cn/picture/show?id='+item.user.avatarId" alt="">

                        <p>{{item.user.userName}}</p>
                    </template>
                    <template v-if="userMsg&&userMsg.data&&userMsg.selfId" v-for="(subitem,index) in userMsg.data">
                        <div class="time">{{subitem.createTime}}</div>
                        <div v-if="subitem.senderInfo.userId === userMsg.selfId" class="box right">
                            <p>{{subitem.message}}</p><span>：我</span>
                        </div>

                        <div v-else class="box"><span>{{item.user.userName}}：</span>
                            <p>{{subitem.message}}</p>
                        </div>
                        <!--<template v-if="index+1 ===  userMsg.data.length" v-for="(answer,subindex) in answerVal">
                            <div v-if="subindex === 0" class="time">刚刚</div>
                            <div  class="box right">
                                <p>{{answer}}</p><span>：我</span>
                            </div>
                        </template>-->
                    </template>
                    <el-input :maxlength=200 placeholder="请输入内容" v-model="answer">
                        <el-button type="primary" slot="append" @click="onAnswer(item.user.userId)">回复</el-button>
                    </el-input>

                </el-collapse-item>
            </template>
            <!--
                        <template v-if="msgList.userMsgViewed" v-for="(item,index) in msgList.userMsgViewed">
                            <el-collapse-item v-if="item.user"  :name="item.user.userId" key>
                                <template slot="title">
                                    <img v-if="!item.user.avatarId"
                                         src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                                    <img v-else
                                         :src="'http://bank.longhaiyan.cn/picture/show?id='+item.user.avatarId" alt="">

                                    <p>{{item.user.userName}}</p>
                                </template>
                                <template v-if="userMsg&&userMsg.data&&userMsg.selfId" v-for="subitem in userMsg.data">
                                    <div class="time">{{item.createTime}}</div>
                                    <div v-if="subitem.senderInfo.userId === userMsg.selfId" class="box right">
                                        <p>{{subitem.message}}</p><span>：我</span>
                                    </div>
                                    <div v-else class="box"><span>{{item.user.userName}}：</span>
                                        <p>{{subitem.message}}</p>
                                    </div>
                                </template>
                                <el-input :maxlength=200 placeholder="请输入内容" v-model="answer">
                                    <el-button type="primary" slot="append" @click="onAnswer(item.user.userId)">回复</el-button>
                                </el-input>

                            </el-collapse-item>
                        </template>
            -->
        </el-collapse>
        <div v-else style="text-align: center;">
            <i class="el-icon-warning"></i>无举报记录

        </div>

    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import * as ZoneType from '@/store/zone/types'
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
        answer: '',
        answerVal: [],
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
        sendStep: state => state.zone.sendStep,
        sendErrorMsg: state => state.zone.sendErrorMsg,
      })
    },
    methods: {
      ...mapActions({
        messageNav: GlobalType.A_MESSAGE_NAV,
        getUserMsg: MessageType.A_USER_MESSAGE,
        readMsg: MessageType.A_MESSAGE_READ,
        sendMsg: ZoneType.A_SEND_MSG,

      }),
      collapseChange(activeNames){
        let self = this
        console.log("改变", activeNames)
        if (activeNames) {
          this.getUserMsg({userId: activeNames}).then(() => {
            console.log("该条用户消息内容", this.userMsg)
            if (self.userStep !== 'error') {
              console.log("这条消息已经被查看")
              self.readMsg({userId: activeNames}).then(() => {

              })
            } else {
              self.$message.error(self.userError)
            }
          })
        }
      },
      onAnswer(id){
        let self = this
        console.log("id", id)
        this.answerVal.push(this.answer)
        self.sendMsg({
          name: self.answer,
          id: id,
        }).then(() => {
          if (self.sendStep === 'error') {
            self.$message.error(self.sendErrorMsg)
            return
          } else {
            self.answer = ''
            self.collapseChange(id)
            self.$message({
              type: 'success',
              message: '发送成功'
            })
          }
        }).catch(() => {
          self.$message.error(self.sendErrorMsg)
        })
        console.log(this.answerVal)
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
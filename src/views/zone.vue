<template>
    <div class="my-zone j-my-zone">
        <div class="my-zone-hd">
            <div class="my-zone_avatar">
                <img src="" alt="">
            </div>
            <div class="zone-user">
                <div class="zone-user-hd">
                    <h4 class="my-title_two">{{homeInfo.userName}}</h4>
                    <div v-if="homeInfo.userType === 0" class="item">
                        <el-tag type="danger">未认证</el-tag>
                    </div>
                    <div v-if="homeInfo.userType === 1" class="item">
                        <el-tag type="success">学生</el-tag>
                    </div>
                    <div v-if="homeInfo.userType === 2" class="item">
                        <el-tag type="success">教师</el-tag>
                    </div>
                    <div v-if="homeInfo.userType === 3" class="item">
                        <el-tag type="warning">学生认证中</el-tag>
                    </div>
                    <div v-if="homeInfo.userType === 4" class="item">
                        <el-tag type="warning">教师认证中</el-tag>
                    </div>
                    <div v-if="homeInfo.userType === 5" class="item">
                        <el-tag type="danger">认证失败</el-tag>
                    </div>
                    <p class="my-ellipsis">{{homeInfo.description}}</p>
                </div>
                <div class="zone-user-bd">
                    <div class="my-space-Between">
                        <div>


                            <div v-if="homeInfo.userType === 1 || homeInfo.userType === 2" class="item">
                                真实姓名：{{homeInfo.student.name}}


                            </div>
                            <div v-else-if="homeInfo.userType === 2" class="item">认证信息：实名认证教师</div>
                            <div v-if="homeInfo.userType === 1 && homeInfo.student" class="item">
                                学院专业班级：{{homeInfo.student.dept}}{{homeInfo.student.major}}


                            </div>
                            <div v-else-if="homeInfo.userType === 2 && homeInfo.teacher" class="item">
                                职务：{{homeInfo.student.dept}}


                            </div>
                            <div v-if="homeInfo.sex === 2" class="item">性别：女</div>
                            <div v-else-if="homeInfo.sex === 1" class="item">性别：男</div>
                            <div v-else class="item">性别：未知</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="display: flex;align-items: center;">
                                <span class="my-fl">信用等级：</span>
                                <el-rate class="my-fl"
                                         v-model="value"
                                         disabled
                                         show-text
                                         text-color="#ff9900"
                                         text-template="{value}">
                                </el-rate>
                            </div>
                            <el-button type="primary" style="margin-top: 15px;" @click="onSendMsg">
                                私信

                                <template v-if="homeInfo.sex === 0">TA</template>
                                <template v-if="homeInfo.sex === 1">他</template>
                                <template v-if="homeInfo.sex === 2">她</template>
                            </el-button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="my-zone-bd">
                <el-tabs type="border-card" v-model="activeCart" @tab-click="handleClick">
                    <el-tab-pane name="publish_task">
                        <span slot="label"><i class="el-icon-document"></i> 发布的任务</span>
                        <el-button type="primary" style="margin-left: 50px;">全部</el-button>
                        <el-button>发布中</el-button>
                        <el-button>已结束</el-button>
                        <div class="task-boxes">
                            <div class="task-box" v-for="(item,index) in infoData">
                                <div class="task-box-border">
                                    <span class="order">{{index + 1}}</span>
                                    <infoBox :data="item" :visible="true" key></infoBox>
                                    <!--<div class="btn-group">
                                        <el-button>确认中</el-button>
                                        <el-button>确认中</el-button>
                                    </div>-->
                                    <!--<el-button-group class="btn-group">
                                        <el-button type="primary">上一页</el-button>
                                        <el-button type="primary">下一页</el-button>
                                    </el-button-group>-->
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="get_task">
                        <span slot="label"><i class="el-icon-menu"></i> 接受的任务</span>
                        <div class="task-boxes">
                            <div class="task-box" v-for="(item,index) in infoData">
                                <div class="task-box-border">
                                    <span class="order">{{index + 1}}</span>
                                    <infoBox :data="item" key></infoBox>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="topic">
                        <span slot="label"><i class="el-icon-date"></i> 发布的帖子</span>
                        <div class="topic-boxes">
                            <topicBox v-for="item in 6" key></topicBox>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="warn">
                        <span slot="label"><i class="el-icon-warning"></i> 举报记录</span>
                        <div class="task-boxes">
                            <div class="task-box" v-for="(item,index) in infoData">
                                <div class="task-box-border">
                                    <span class="order">{{index + 1}}</span>
                                    <infoBox :data="item" key></infoBox>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>

        </div>
        <MyModal class="my-login-box" :data="msgData" :step="msgDialogStep" style="text-align: left">
            <el-form :model="msgFormData" ref="msgForm" :rules="msgRules">
                <el-form-item prop="detail">
                    <el-input type="textarea"
                              placeholder="请输入私信内容"
                              v-model="msgFormData.detail">
                    </el-input>
                </el-form-item>
            </el-form>
        </MyModal>
    </div>
</template>
<script>
  import {mapActions, mapState} from  'vuex'
  import * as ZoneType from '@/store/zone/types'
  import infoBox from '@/components/info_box'
  import topicBox from '@/components/topic_box'
  import MyModal from  '@/components/my_modal.vue'
  export default{
    name: 'zone',
    data(){
      return {
        value: 4.5,
        msgDialogVisible: true,
        activeCart:'publish_task',
        userId: this.$route.query.userId || '',
        infoData: [
          {
            taskId: 12,
            title: '帮忙取快递lalal',
            money: 0.5,
            address: '南村教育超市la',
            endTime: '2017-05-02 17：00',
            time: '2017-05-02 12：00'
          },
          {
            taskId: 13,
            title: '帮忙取快递lalal',
            money: 0.5,
            address: '南村教育超市la',
            endTime: '2017-05-02 17：00',
            time: '2017-05-02 12：00'
          },
          {
            taskId: 14,
            title: '帮忙取快递lalal',
            money: 0.5,
            address: '南村教育超市la',
            endTime: '2017-05-02 17：00',
            time: '2017-05-02 12：00'
          },

        ],
        msgDialogStep: '',
        msgFormData: {
          detail: ''
        },
        msgRules: {
          detail: {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        },
        msgData: {
          size: 'small',
          confirmButtonText: '确认发送',
          title: '私信',
          visible: false
        }
      }
    },
    computed: {
      ...mapState({
        homeInfo: state => state.zone.homeInfo,
        infoStep: state => state.zone.infoStep,
        infoErrorMsg: state => state.zone.infoErrorMsg,
        sendStep: state => state.zone.sendStep,
        sendErrorMsg: state => state.zone.sendErrorMsg,
        mineTask: state => state.zone.mineTask,
        getTask: state => state.zone.getTask,
        mineTopic: state => state.zone.mineTopic,
        mainWarn: state => state.zone.mainWarn,
      })
    },
    methods: {
      ...mapActions({
//        getZoneInfo: ZoneType.A_ZONE_INFO,
        sendMsg: ZoneType.A_SEND_MSG,
        getMineTask: ZoneType.A_MINE_PUBLISH,
        getPublishTask: ZoneType.A_GET_PUBLISH,
        getMineTopic: ZoneType.A_MINE_TOPIC,
        getMineWarn: ZoneType.A_MINE_WARN,
      }),
      onSendMsg(){
        let self = this
        console.log("click")
        this.openModal(this.msgData, {
          beforeConfirm(next){
            console.log("beforeConfirm")
            self.$refs.msgForm.validate(value => {
              if (value) {
                console.log("发送")
                self.sendMsg({
                  name: self.msgFormData.detail,
                  id: parseInt(self.userId),
                }).then(() => {
                  if (self.sendStep === 'error') {
                    self.$message.error(self.sendErrorMsg)
                    return
                  } else {
                    self.$message({
                      type: 'success',
                      message: '发送成功'
                    })
                    return next()
                  }
                })
              }
            })
          },
          beforeCancel(next) {
            return next()
              /*self.topicPublishHide().then(() => {
               return next()
               })*/
          }
        })
      },
      openModal(obj, ops) {
        obj.visible = true
        for (var i in ops) {
          if (typeof ops[i] === 'function') {
            obj[i] = ops[i]
          }
        }
      },
      handleClick(tab, event) {
        console.log("table被点击", tab.name, event);
        if(tab.name === 'publish_task'){
          this.getMineTask()
        }else if(tab.name === 'get_task'){
          this.getPublishTask()
        }else if(tab.name === 'topic'){
          this.getMineTopic()
        }else if(tab.name === 'warn'){
          this.getMineWarn()
        }else{
          console.log("tab 的name错误")
        }
      }
    },
    /*beforeCreate(){
      console.log(-3)
      console.log('infoStep', this.infoStep)
    },
    created(){
      console.log(-2)
      console.log('infoStep', this.infoStep)
    },
    beforeMount(){
      console.log(-1)
      console.log('infoStep', this.infoStep)
    },*/
    mounted(){
      console.log("mounted")
      console.log('infoStep', this.infoStep)

    },
    /*beforeUpdate(){
      console.log("beforeUpdate")
      console.log('infoStep', this.infoStep)
      if (this.infoStep === 'error') {
        this.$message.error(this.infoErrorMsg)
      }
    },*/
      /*updated(){
       console.log("2")
       console.log('infoStep',this.infoStep)
       },*/
      /*activated(){
       console.log(3)
       },
       deactivated(){
       console.log(4)
       },
       beforeDestroy(){
       console.log(5)
       },
       destroyed(){
       console.log(6)
       },
       */
    components: {
      infoBox,
      topicBox,
      MyModal
    }
  }
</script>
<template>
    <div class="my-intro" v-if="myTaskCon">
        <div class="my-space-Between">
            <h4 class="my-intro-hd">{{myTaskCon.title}}</h4>
            <el-button type="primary" @click="onPublish">我也要发布任务</el-button>

        </div>
        <div class="my-intro-bd">
            <p v-if="myTaskCon.senderInfo"><i>发布人：</i>{{myTaskCon.senderInfo.name}}</p>
            <p><i>奖励时间币：</i>{{myTaskCon.money}}</p>
            <p><i>截止时间：</i>{{myTaskCon.deadTime}}</p>
            <p v-if="myTaskCon.serviceTime"><i>服务时间：</i>{{myTaskCon.serviceTime}}</p>
            <p><i>任务描述：</i>{{myTaskCon.description}}</p>
            <p v-if="myTaskCon.personal"><i>隐私信息：</i>{{myTaskCon.personal}}</p>
            <p v-if="myTaskCon.demand"><i>承接要求：</i>{{myTaskCon.demand}}</p>
            <p v-if="myTaskCon.remark"><i>备注：</i>{{myTaskCon.remark}}</p>
            <div class="my-space-Between" style="height: 17px;margin-bottom: 14px;">
                <p><i>地点：</i>{{myTaskCon.address}}</p>
                <p>{{myTaskCon.createTime}}</p>
            </div>
            <div class="info-box_tags" v-if="myTaskCon.tags">
                <el-tag style="margin-right: 10px;" color="#6992cc" v-for="item in myTaskCon.tags" key>{{item.name}}
                </el-tag>
            </div>
            <div v-else>
                <el-tag type="gray">无标签</el-tag>
            </div>
        </div>
        <div class="intro-warn">
            <span>
                <template v-if="myTaskCon.status">
                    任务状态：{{myTaskCon.status}}
                </template>
                <template v-else>
                    任务状态：正在发布中
                </template>
            </span>
            <span>已有 0 人举报</span></div>
        <div class="btn-group">
            <el-button type="primary" v-if="myTaskCon.stu === 1" @click="getFormVisible=true">我要接受任务</el-button>
            <el-button @click="onWarn">我要举报</el-button>
        </div>
        <el-dialog title="确定接受这条任务?" v-model="getFormVisible">
            <p>接受任务的话，请对任务的主人说几句话吧</p>
            <el-form :model="getForm" ref="getForm" :rules="getRules">
                <el-form-item prop="value">
                    <el-input v-model="getForm.value"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelAccept">取 消</el-button>
                <el-button type="primary" @click="onAccept">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as IntroType from '@/store/intro/types'
  import * as GlobalType from '@/store/global/types'

  export default{
    name: 'intro',
    data(){
      return {
        taskId: this.$route.query.taskId || '',
        getForm: {
          value: ''
        },
        getRules: {
          value: {
            required: true,
            message: '不能为空',
            trigger: 'blur'
          }
        },
        getFormVisible: false,
        /*myTaskCon:{},
        myTaskFinish:{}*/
      }
    },
    computed: {
      ...mapState({
        taskInfo: state => state.intro.taskInfo,
        acceptStep: state => state.intro.acceptStep,
        acceptErrorMsg: state => state.intro.acceptErrorMsg,
        warnStep: state => state.intro.warnStep,
        warnErrorMsg: state => state.intro.warnErrorMsg,
      }),
      myTaskCon:function() {
        console.log("this.taskInfo.data",this.taskInfo.data)
//        return Object.assign(this.myTaskCon,this.taskInfo.data)
        return this.taskInfo.data
      },
      myTaskFinish:function() {
        console.log("this.taskInfo.taskFinish",this.taskInfo.taskFinish)
//        return Object.assign(this.myTaskFinish,this.taskInfo.finishInfo)
        return this.taskInfo.taskFinish

      }
    },
    watch:{
      /*taskInfo:function() {
        console.log("watch taskInfo",this.taskInfo)
        Object.assign(this.myTaskCon,this.taskInfo.data)
        console.log("this.myTaskCon",this.myTaskCon)
        Object.assign(this.myTaskFinish,this.taskInfo.finishInfo)
        console.log("this.myTaskFinish",this.myTaskFinish)
      }*/
    },
    methods: {
      ...mapActions({
        acceptTask: IntroType.A_ACCEPT_TASK,
        warnTask: IntroType.A_WARN_TASK,
        startMain: IntroType.A_START_MAIN,
        publishShow: GlobalType.A_PUBLISH_SHOW,


      }),
      onPublish() {
        this.publishShow()
      },
      onWarn: function() {
        let self = this
          /*if(this.getForm.value.trim){

           }*/
        this.$confirm('确定举报这条任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.warnTask({taskId: self.taskId}).then(() => {
            if (self.warnStep !== 'error') {
              self.$message({
                type: 'success',
                message: '举报成功!'
              });
            } else {
              self.$message.error(self.warnErrorMsg)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消举报'
          });
        });

      },
      onAccept(){
        let self = this
        this.$refs.getForm.validate((valid) => {
          if (valid) {
            this.getFormVisible = false
            self.acceptTask({id: self.taskId, value: self.getForm.value}).then(() => {
              if (self.acceptStep !== 'error') {
                self.startMain({taskId: self.taskId})
                self.$message({
                  type: 'success',
                  message: '接受成功，请查看详情，并尽快完成任务!'
                });
              } else {
                self.$message.error(self.acceptErrorMsg)
              }
            })
          }
        });

          /* this.$prompt('接受任务的话，请对任务的主人说几句话吧', '确定接受这条任务?', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           inputPattern: /[\s,\S]+/g,
           inputErrorMessage: '内容不能为空'
           }).then(({ value }) => {
           self.acceptTask({taskId:self.taskId,value:value}).then(()=>{
           if(self.acceptStep !== 'error'){
           self.$message({
           type: 'success',
           message: '接受成功，请尽快完成任务!'
           });
           }else{
           self.$message.error(self.acceptErrorMsg)
           }
           })
           }).catch(() => {
           this.$message({
           type: 'info',
           message: '已取消接受任务'
           });
           });*/

          /*this.$confirm('确定接受这条任务?', '确认', {
           confirmButtonText: '确定',
           cancelButtonText: '取消',
           type: 'warning'
           }).then(() => {
           self.acceptTask({taskId: self.taskId}).then(() => {
           if (self.acceptStep !== 'error') {
           self.$message({
           type: 'success',
           message: '接受成功，请尽快完成任务!'
           });
           } else {
           self.$message.error(self.acceptErrorMsg)
           }
           })
           }).catch(() => {
           this.$message({
           type: 'info',
           message: '已取消接受任务'
           });
           });*/
      },
      cancelAccept(){
        this.getFormVisible = false
        this.$message("取消接受任务")
      }
    },
    mounted(){
      console.log("dfsaf", this.taskInfo)
    }
  }
</script>
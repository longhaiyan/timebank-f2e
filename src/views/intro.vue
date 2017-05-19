<template>
    <div class="my-intro" v-if="taskInfo">
        <div class="my-space-Between">
            <h4 class="my-intro-hd">{{taskInfo.title}}</h4>
            <el-button type="primary" @click="onPublish">我也要发布任务</el-button>

        </div>
        <div class="my-intro-bd">
            <p><i>发布人：</i>{{taskInfo.name}}</p>
            <p><i>奖励时间币：</i>{{taskInfo.money}}</p>
            <p><i>截止时间：</i>{{taskInfo.deadTime}}</p>
            <p><i>任务描述：</i>{{taskInfo.description}}</p>
            <p v-if="taskInfo.serviceTime"><i>所需时间：</i>{{taskInfo.serviceTime}}</p>
            <p v-if="taskInfo.demand"><i>承接要求：</i>{{taskInfo.demand}}</p>
            <p v-if="taskInfo.remark"><i>备注：</i>{{taskInfo.remark}}</p>
            <div class="my-space-Between">
                <p><i>地点：</i>{{taskInfo.address}}</p>
                <p>没有发布时间</p>
            </div>
            <div class="info-box_tags" v-if="taskInfo.tags" >
                <el-tag style="margin-right: 10px;" color="#6992cc" v-for="item in taskInfo.tags" key>{{item.name}}</el-tag>
            </div>
            <div v-else>
                <el-tag type="gray">无标签</el-tag>
            </div>
        </div>
        <div class="intro-warn"><span>任务状态：发布中</span><span>已有 0 人举报</span></div>
        <div class="btn-group">
            <el-button type="primary" @click="onAccept">我要接受任务</el-button>
            <el-button type="danger" @click="onWarn">我要举报</el-button>
        </div>
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
        taskId: this.$route.query.taskId || ''
      }
    },
    computed:{
      ...mapState({
        taskInfo:state=>state.intro.taskInfo,
        acceptStep:state=>state.intro.acceptStep,
        acceptErrorMsg:state=>state.intro.acceptErrorMsg,
        warnStep:state=>state.intro.warnStep,
        warnErrorMsg:state=>state.intro.warnErrorMsg,
      })
    },
    methods: {
      ...mapActions({
        acceptTask:IntroType.A_ACCEPT_TASK,
        warnTask:IntroType.A_WARN_TASK,
        publishShow: GlobalType.A_PUBLISH_SHOW,

      }),
      onPublish() {
        this.publishShow()
      },
      onWarn: function() {
        let self = this
        this.$confirm('确定举报这条任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          self.warnTask({taskId:self.taskId}).then(()=>{
            if(self.warnStep !== 'error'){
              self.$message({
                type: 'success',
                message: '举报成功!'
              });
            }else{
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

        this.$prompt('接受任务的话，请对任务的主人说几句话吧', '确定接受这条任务?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\s,\S]+g/,
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
        });

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
      }
    },
    mounted(){
      console.log("dfsaf",this.taskInfo)
    }
  }
</script>
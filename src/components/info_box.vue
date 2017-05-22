<template>
    <div class="my-info-box" v-if="data&&data.taskInfo" @click="goTaskInfo(data.taskInfo.taskId)">
        <div class="info-box-hd ">
            <h4 class="info-box_title my-ellipsis">
                {{data.taskInfo.title}}
            </h4>
            <p>查看详情</p>
        </div>
        <p class="info-box_info">时间币：{{data.taskInfo.money}}枚</p>
        <div class="my-space-Between">
            <p class="info-box_info">地点：{{data.taskInfo.address}}</p>
            <el-button-group v-if="visible&&data.taskInfo.stu ===4 " class="btn-group">
                <!--<el-button type="primary">撤回</el-button>-->
                <el-button type="primary" @click.stop="ok">已完成</el-button>
                <el-button type="primary">删除</el-button>
            </el-button-group>
        </div>
        <p class="info-box_info">时间：{{data.taskInfo.deadTime}} 前完成</p>
        <div class="my-space-Between">
            <div class="info-box_tags my-ellipsis" v-if="data.taskInfo.tags">
                <el-tag color="#6992cc" v-for="item in data.taskInfo.tags" key>{{item.name}}</el-tag>
            </div>
            <div v-else>
                <el-tag type="gray">无标签</el-tag>
            </div>
            <span class="info-box_info info-box_time">{{data.time}}</span>
        </div>
        <p class="info-box_info">状态：{{data.taskInfo.status}}</p>
        <p v-if="data.taskFinish" class="info-box_info">接单用户：{{data.taskFinish.taker.userName}}</p>

    </div>
</template>
<script>
  import {mapActions, mapState} from  'vuex'
  import * as ZoneType from '@/store/zone/types'
  export default{
    name: 'infoBox',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      data: {
        type: Object,
        default(){
          return {
            taskInfo: {
              senderInfo: {
                id: 1,
                avatarId: 0,
                name: "高育良",
                userName: "timebank"
              },
              finisherInfo: {
                id: 2,
                avatarId: 5,
                name: "龙海燕",
                userName: "long"
              },
              taskId: 1,
              title: "标题",
              description: "任务详情",
              remark: "备注",
              demand: "要求",
              urgent: 1,
              urgentMoney: 5,
              serviceTime: "服务时间",
              deadTime: "2017-05-23 08:44:32",
              address: "服务地点",
              personal: "隐私信息",
              money: 10,
              tagIds: null,
              tags: [
                {
                  id: 1,
                  name: "测试",
                  createTime: "2017-05-22 08:45:43",
                  modifyTime: "2017-05-22 08:45:43"
                }
              ],
              status: "已接单,进行中",
              stu: 4
            },
            taskFinish: {
              finishId: 1,
              finishTime: null,
              remark: "",
              createTime: "2017-05-22 08:45:43",
              stu: 4,
              status: "已接单,进行中",
              taskId: 1,
              sender: {
                id: 1,
                avatarId: 0,
                name: "高育良",
                userName: "timebank"
              },
              taker: {
                id: 2,
                avatarId: 5,
                name: "龙海燕",
                userName: "long"
              }
            }
          }
        }
      }

    },
    computed: {
      ...mapState({
        mineUpdateStep: state => state.zone.mineUpdateStep,
        mineUpdateError: state => state.zone.mineUpdateError,
      })
    },
    methods: {
      ...mapActions({
       updateMinePublish : ZoneType.A_UPDATE_MINE_PUBLISH,
      }),
      ok(){

        let self = this
        this.$confirm('是否确认任务已完成?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log("taskId",)
          self.updateMinePublish({taskId:self.data.taskInfo.taskId}).then(()=>{
            if(self.mineUpdateStep === 'error'){
              self.$message.error(self.mineUpdateStep)
            }else{
              self.$message.success("确认成功")
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消确认'
          });
        });
      },
      goTaskInfo(taskId) {
        this.GM_routerPush({
          path: '/intro',
          query: {
            taskId: taskId
          }
        })
      }
    }
  }
</script>

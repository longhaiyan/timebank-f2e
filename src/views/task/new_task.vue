<template>
    <div>
        <div class="my-new-task-list j-my-new-task-list">
            <el-row v-if="newTaskInfo&&newTaskInfo.data" :gutter="10" style="padding: 0 40px;">
                <el-col :sm="12" v-for="item in newTaskInfo.data" key>
                    <div  class="my-info-box" @click="goTaskInfo(item.taskId)">
                        <div class="info-box-hd">
                            <h4 class="info-box_title">
                                {{item.title}}
            </h4>
                            <p>查看详情</p>
                        </div>
                        <p class="info-box_info">时间币：{{item.money}}枚</p>
                        <p class="info-box_info">地点：{{item.address}}</p>
                        <p class="info-box_info">时间：{{item.deadTime}} 前完成</p>
                        <div class="my-space-Between">
                            <div class="info-box_tags" v-if="item.tags">
                                <el-tag color="rgba(48, 101, 181, 0.67);" v-for="tag in item.tags" key>{{tag.name}}
                                </el-tag>
                            </div>
                            <div v-else>
                                <el-tag type="gray">无标签</el-tag>
                            </div>
                            <span class="info-box_info">{{item.time}}</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div v-else class="no-task">
                <i class="el-icon-warning"></i>{{newTaskError}}

            </div>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'

  export default{
    name: 'taskList',
    data(){
      return {
          /*infoData: [
           {
           taskId: 12,
           name: '帮忙取快递lalal',
           money: 0.5,
           address: '南村教育超市la',
           endTime: '2017-05-02 17：00',
           createTime: '2017-05-02 12：00'
           },
           {
           taskId: 13,
           name: '帮忙取快递lalal',
           money: 0.5,
           address: '南村教育超市la',
           endTime: '2017-05-02 17：00',
           createTime: '2017-05-02 12：00'
           },
           {
           taskId: 14,
           name: '帮忙取快递lalal',
           money: 0.5,
           address: '南村教育超市la',
           endTime: '2017-05-02 17：00',
           createTime: '2017-05-02 12：00'
           },

           ]*/
      }
    },
    computed: {
      ...mapState({
        newTaskInfo: state => state.task.newTaskInfo,
        newTaskError: state => state.task.newTaskError,
      })
    },
    methods: {
      goTaskInfo(taskId) {
        this.GM_routerPush({
          path: '/intro',
          query: {
            taskId: taskId
          }
        })
      },
      init(){
        if(document.querySelector('.j-my-new-task-list')){
          console.log('1')
          document.querySelector('.j-nav-finish').className = document.querySelector('.j-nav-finish').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-receive').className = document.querySelector('.j-nav-receive').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-new').className += ' activeTask '
        }else if(document.querySelector('.j-my-receive-task-list')){
          console.log('2')

          document.querySelector('.j-nav-new').className = document.querySelector('.j-nav-new').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-finish').className = document.querySelector('.j-nav-finish').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-receive').className += ' activeTask '
        }else if(document.querySelector('.j-my-finish-task-list')){
          console.log('3')

          document.querySelector('.j-nav-new').className = document.querySelector('.j-nav-new').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-receive').className = document.querySelector('.j-nav-receive').className.replace(( /(?:^|\s)activeTask(?!\S)/), '')
          document.querySelector('.j-nav-finish').className += ' activeTask '
        }
      }
    },
    mounted(){
      this.init()
      console.log("newTaskInfo", self.newTaskInfo)
    },
    components: {

    }
  }
</script>
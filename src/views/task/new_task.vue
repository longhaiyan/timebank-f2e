<template>
    <div>
        <div class="my-new-task-list j-my-new-task-list">
            <el-row v-if="newTaskInfo&&newTaskInfo.data" :gutter="10" style="padding: 0 40px;">
                <el-col :sm="12" v-for="item in newTaskInfo.data" key>
                    <infoBox :data="item"></infoBox>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import infoBox from '@/components/info_box'

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
    computed:{
      ...mapState({
        newTaskInfo:state=>state.task.newTaskInfo
      })
    },
    methods: {},
    mounted(){
      console.log("newTaskInfo",self.newTaskInfo)
    },
    components: {
      infoBox,
    }
  }
</script>
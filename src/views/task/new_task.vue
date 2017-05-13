<template>
    <div>
        <el-row :gutter="10" style="padding: 0 40px;">
            <el-col :sm="12" v-for="item in infoData"  key>
                <infoBox :data="item"></infoBox>
            </el-col>
        </el-row>
        <div class="my-task-list">
            任务分类列表
        </div>
    </div>
</template>
<script>
  import infoBox from '@/components/info_box'

  export default{
    name: 'taskList',
    data(){
      return{
        infoData: [
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

        ]
      }
    },
    methods:{

    },
    components: {
      infoBox
    }
  }
</script>
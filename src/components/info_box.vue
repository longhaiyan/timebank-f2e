<template>
    <div class="my-info-box" @click="goTaskInfo(data.taskId)">
        <div class="info-box-hd">
            <h4 class="info-box_title">
                {{data.name}}
            </h4>
            <p>查看详情</p>
        </div>
        <p class="info-box_info">时间币：{{data.money}}枚</p>
        <p class="info-box_info">地点：{{data.address}}</p>
        <div class="my-space-Between">
            <p class="info-box_info">时间：{{data.endTime}} 前完成</p>
            <span class="info-box_info">{{data.createTime}}</span>
        </div>

    </div>
</template>
<script>
  export default{
    name: 'infoBox',
    props: {
      data: {
        type: Object,
        default(){
          return {
            taskId:0,
            name: '帮忙取快递',
            money:0.5,
            address:'南村教育超市',
            endTime:'2017-05-02 17：00',
            createTime:'2017-05-02 12：00'

          }
        }
      }

    },
    methods:{
      goTaskInfo:function(taskId) {
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

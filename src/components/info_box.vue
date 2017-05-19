<template>
    <div class="my-info-box" @click="goTaskInfo(data.taskId)">
        <div class="info-box-hd ">
            <h4 class="info-box_title my-ellipsis">
                {{data.title}}
            </h4>
            <p>查看详情</p>
        </div>
        <p class="info-box_info">时间币：{{data.money}}枚</p>
        <div class="my-space-Between">
            <p class="info-box_info">地点：{{data.address}}</p>
            <el-button-group v-if="visible" class="btn-group">
                <!--<el-button type="primary">撤回</el-button>-->
                <el-button type="primary">已完成</el-button>
                <el-button type="primary">删除</el-button>
            </el-button-group>
        </div>
        <p class="info-box_info">时间：{{data.deadTime}} 前完成</p>
        <div class="my-space-Between">
            <div class="info-box_tags my-ellipsis" v-if="data.tags" >
                <el-tag color="#6992cc" v-for="item in data.tags" key>{{item.name}}</el-tag>
            </div>
            <div v-else>
                <el-tag type="gray">无标签</el-tag>
            </div>
            <span class="info-box_info info-box_time">{{data.time}}</span>
        </div>


    </div>
</template>
<script>
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
            taskId:0,
            title: '帮忙取快递',
            money:1,
            address:'南村教育超市',
            deadTime:"2017-05-23 18:49:09",
            createTime:'2017-05-18 18:49:52',
            time: "15小时前",
            tags: [
              {
                id: 1,
                name: "tag",
                createTime: "2017-05-18 18:09:48",
                modifyTime: "2017-05-18 18:09:48"
              }
            ],
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

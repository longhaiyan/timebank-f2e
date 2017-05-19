<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">我接受的任务</h4>
        </div>
        <div class="setting-r-bd my-setting-get-task">
            <div class="my-info-box" @click="goTaskInfo(data.taskId)">
                <div class="info-box-hd ">
                    <h4 class="info-box_title my-ellipsis">
                        {{data.name}}
            </h4>
                    <p>查看详情</p>
                </div>
                <div class="">

                    <p class="info-box_info">时间币：{{data.money}}枚</p>
                    <p class="info-box_info">地点：{{data.address}}</p>

                </div>
                <div class="my-space-Between">
                    <p class="info-box_info">时间：{{data.endTime}} 前完成</p>
                    <span class="info-box_info">{{data.createTime}}</span>
                </div>
                <div class="my-space-Between">
                    <p class="info-box_info">状态：已被接单</p>
                    <div>
                        <el-button type="primary">
                            确认完成

                        </el-button>
                    </div>
                </div>

            </div>
            <div class="my-info-box" @click="goTaskInfo(data.taskId)">
                <div class="info-box-hd ">
                    <h4 class="info-box_title my-ellipsis">
                        {{data.name}}
            </h4>
                    <p>查看详情</p>
                </div>
                <div class="">

                    <p class="info-box_info">时间币：{{data.money}}枚</p>
                    <p class="info-box_info">地点：{{data.address}}</p>

                </div>
                <div class="my-space-Between">
                    <p class="info-box_info">时间：{{data.endTime}} 前完成</p>
                    <span class="info-box_info">{{data.createTime}}</span>
                </div>
                <div class="my-space-Between">
                    <p class="info-box_info">状态：已被接单</p>
                    <div>
                        <el-button type="primary">
                            完成
                        </el-button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  export default{
    name: 'settingGetTask',
    data(){
      return{
        data: {
          taskId: 0,
          name: '帮忙取快递',
          money: 0.5,
          address: '南村教育超市',
          endTime: '2017-05-02 17：00',
          createTime: '2017-05-02 12：00'
        }

      }
    },
    methods:{
      ...mapActions({
        settingNav: GlobalType.A_SETTING_NAV,
      }),
      goTaskInfo(){
        this.GM_routerPush({
          path: '/intro',
          query: {
            taskId: data.taskId
          }
        })
      }
    },
    mounted(){
      this.settingNav({name:'get_task'})
    },

  }
</script>
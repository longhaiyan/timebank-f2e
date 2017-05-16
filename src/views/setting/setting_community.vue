<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">我发布的帖子</h4>
        </div>
        <div class="setting-r-bd my-setting-community">
            <div class="my-topic-box" v-for="item in 3" @click="goCommunityInfo(data.communityId)">
                <div class="my-space-Between topic-box-detail">
                    <p class="my-ellipsis"><i v-if="data.type" class="el-icon-warning"></i>{{data.detail}}</p>
                    <span>{{data.createTime}}</span>
                </div>
                <img v-if="data.picId" class="topic-box-img"
                     :src="'http://bank.longhaiyan.cn/picture/show?id='+data.picId" alt="">
                <div class="my-space-Between">
                    <div class="topic-box_user">
                        <img src="http://bank.longhaiyan.cn/img/user.jpeg" alt="" class="avatar">
                        {{data.userName}}

                    </div>
                    <div>
                        <el-button type="warning">删除</el-button>
                        <span>{{data.messageCount}} 条评论</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import topicBox from '@/components/topic_box'
  export default{
    name: 'settingCommunity',
    data(){
      return {
        data: {
          communityId: 0,
          type: '',
          picId: '',
          detail: '请各位同学多提一些宝贵意见，我们一定会 悉心听取，把我们的时间银行办的越来越好哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈',
          userName: 'long',
          messageCount: 110,
          createTime: '2017-05-02 12：00'
        }
      }
    },
    methods: {
      ...mapActions({
        settingNav: GlobalType.A_SETTING_NAV,

      }),
      goCommunityInfo: function(communityId) {
        this.GM_routerPush({
          path: '/info',
          query: {
            communityId: communityId
          }
        })
      }
    },
    mounted(){
      this.settingNav({name:'community'})
    },
    components: {
      topicBox,
    }
  }
</script>
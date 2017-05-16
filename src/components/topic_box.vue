<template>
    <div class="my-topic-box" @click="goCommunityInfo(data.communityId)">
        <div class="my-space-Between topic-box-detail">
            <p class="my-ellipsis"><i v-if="data.type" class="el-icon-warning"></i>{{data.detail}}</p>
            <span>{{data.createTime}}</span>
        </div>
        <img v-if="data.picId" class="topic-box-img" :src="'http://bank.longhaiyan.cn/picture/show?id='+data.picId" alt="">
        <div class="my-space-Between">
            <div class="topic-box_user">
                <img src="http://bank.longhaiyan.cn/img/user.jpeg" alt="" class="avatar">
                {{data.userName}}
            </div>
            <span>{{data.messageCount}} 条评论</span>
        </div>
    </div>
</template>
<script>
    export default{
      name:'topicBox',
      props: {
        data: {
          type: Object,
          default(){
            return {
              communityId:0,
              type:'',
              picId:'',
              detail: '请各位同学多提一些宝贵意见，我们一定会 悉心听取，把我们的时间银行办的越来越好哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈',
              userName:'long',
              messageCount:110,
              createTime:'2017-05-02 12：00'

            }
          }
        }

      },
      methods:{
        goCommunityInfo:function(communityId) {
          this.GM_routerPush({
            path: '/info',
            query: {
              communityId: communityId
            }
          })
        }
      }
    }
</script>
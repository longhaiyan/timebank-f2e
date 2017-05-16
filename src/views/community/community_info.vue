<template>
    <div class="my-community-info j-community">
        <div style="text-align: right">
            <el-button type="warning">
                <i class="el-icon-warning"></i>点我举报

            </el-button>
        </div>
        <div class="community-info-hd">
            <topicBox></topicBox>
        </div>

        <div style="text-align: center">
            <el-button type="primary" >
                发表评论
            </el-button>
        </div>

        <div class="community-info-bd">
            <div class="discuss">
                <div class="discuss-user">
                    <img class="avatar" src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                    <span class="user-name">long</span><span class="send-time">2017-04-10 12:33</span>
                </div>
                <p class="discuss-info">又红又专</p>
            </div>
            <div class="discuss discuss-mine">
                <div class="discuss-user">
                    <span class="send-time">2017-04-10 12:33</span><span class="user-name">longhaiyan</span>
                    <img class="avatar" src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                </div>
                <p class="discuss-info">@long 真的又红又专</p>
            </div>
        </div>


    </div>
</template>
<script>

  import topicBox from '@/components/topic_box'

  export default{
    name: 'communityInfo',
    methods:{

    },
    components: {
      topicBox
    }
  }
</script>
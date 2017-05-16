<template>
    <div class="my-community-index j-community">
        <div class="my-space-Between community-index-hd">
            <div>
                <h3>讨论区</h3>
                <el-button type="primary">最新</el-button>
                <el-button>最热</el-button>
            </div>
            <el-button type="primary" @click="onTopicPublish">我也要发帖子</el-button>
        </div>
        <el-row :gutter="70">
            <el-col :sm="17">
                <topicBox v-for="item in 6" key></topicBox>
            </el-col>
            <el-col :sm="7">
                注意事项

            </el-col>
        </el-row>

    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import topicBox from '@/components/topic_box'

  export default{
    name: 'communityIndex',

    methods:{
      ...mapActions({
        topicPublishShow: GlobalType.A_TOPIC_PUBLISH_SHOW,
      }),
      onTopicPublish(){
        this.topicPublishShow()
      }
    },
    components: {
      topicBox
    }

  }
</script>
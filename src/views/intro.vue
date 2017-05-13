<template>
    <div class="my-intro">
        <div class="my-space-Between">
            <h4 class="my-intro-hd">帮忙取快递呀</h4>
            <el-button type="primary" @click="onPublish">我也要发布任务</el-button>

        </div>
        <div class="my-intro-bd">
            <p><i>发布人：</i>龙**</p>
            <p><i>奖励金币：</i>0.5枚</p>
            <p><i>截止时间：</i>2017.5.2    12：23</p>
            <p><i>任务描述：</i>请帮忙去南村取一下快递，任务接受成功后，取货短信我会以短信的形式发给你，最好是7号楼的女生，这样可以帮忙送到寝室，当然，如果只能帮忙送到楼下，也是可以接受的，谢谢啦</p>
            <p><i>承接要求：</i>无</p>
            <p><i>发布时间：</i>2017.5.1    12：23</p>
        </div>
        <div class="intro-warn"><span>任务状态：发布中</span><span>已有 0 人举报</span></div>
        <div class="btn-group">
            <el-button type="primary">我要接受任务</el-button>
            <el-button type="danger" @click="onWarn">我要举报</el-button>
        </div>
    </div>
</template>
<script>
  export default{
    name: 'intro',
    methods:{
      onPublish:function() {
        
      },
      onWarn:function() {
        this.$confirm('确定举报这条任务?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '举报成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消举报'
          });
        });

      }
    }
  }
</script>
<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">私信</h4>
        </div>
        <div class="setting-r-bd my-message-personal">
            <div class="personal-box ">
                <img src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                <div style="width: 100%;">
                    <div class="my-space-Between personal-box-user">
                        <span>longhaiyan</span>
                        <i>2017.05.01  18:00</i>
                    </div>
                    <div class="my-space-Between personal-box-info">
                        <p>啦啦啦啦啦啦</p>
                        <div style="width: 100px;flex-shrink:0;margin-left: 50px;">
                            <el-button type="text">回复</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-box ">
                <img src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                <div style="width: 100%;">
                    <div class="my-space-Between personal-box-user">
                        <span>longhaiyan</span>
                        <i>2017.05.01  18:00</i>
                    </div>
                    <div class="my-space-Between personal-box-info">
                        <p>啦啦啦啦啦啦</p>
                        <div style="width: 100px;flex-shrink:0;margin-left: 50px;">
                            <el-button type="text">已回复</el-button>
                            <el-button type="text">删除</el-button>
                        </div>
                    </div>
                    <p class="personal-box-answer"><span>回复：</span>对呀</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name:'messagePersonal'
  }
</script>
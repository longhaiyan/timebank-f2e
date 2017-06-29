<template>
    <div class="index j-index">
        <div class="my-swiper">
            <swiper class="my-swiper-container" :options="swiperOption">
                <swiperSlide v-for="slide in swiperSlides" key>
                    <div class="my-swiper-box" v-bind:style="{backgroundImage: 'url(' + slide.img + ')'}"></div>
                </swiperSlide>
                <!--<div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <section class="show-banners">
            <el-row :gutter="70" style="padding: 0 17px;">
                <el-col :sm="17">
                    <div class="show-banner">
                        <div class="show-banner-hd my-space-Between">
                            <h3 class="show-banner_title">最新任务</h3>
                            <router-link to="/task/new" class="show-banner_more">更多<i class="el-icon-d-arrow-right"></i>
                            </router-link>
                        </div>
                        <template v-if="newTaskInfo&&newTaskInfo.data">
                            <div v-if="index <5" v-for="(item,index) in newTaskInfo.data" key>
                                <div class="my-info-box" @click="goTaskInfo(item.taskId)">
                                    <div class="info-box-hd">
                                        <h4 class="info-box_title">
                                            {{item.title}}
            </h4>
                                        <p>查看详情</p>
                                    </div>
                                    <p class="info-box_info">时间币：{{item.money}}枚</p>
                                    <p class="info-box_info">地点：{{item.address}}</p>
                                    <p class="info-box_info">时间：{{item.deadTime}} 前完成</p>
                                    <div class="my-space-Between">
                                        <div class="info-box_tags" v-if="item.tags">
                                            <el-tag color="rgba(48, 101, 181, 0.67);" v-for="tag in item.tags" key>
                                                {{tag.name}}

                                            </el-tag>
                                        </div>
                                        <div v-else>
                                            <el-tag type="gray">无标签</el-tag>
                                        </div>
                                        <span class="info-box_info">{{item.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div v-else class="no-task">
                            <i class="el-icon-warning"></i>没有新任务哦，快来发一条吧
                        </div>
                    </div>
                    <!--<div class="show-banner">
                        <div class="show-banner-hd my-space-Between">
                            <h3 class="show-banner_title">最热任务</h3>
                            <router-link to="/" class="show-banner_more">更多<i class="el-icon-d-arrow-right"></i>
                            </router-link>
                        </div>
                        <infoBox v-for="item in indexInfoData" :data="item" key></infoBox>
                    </div>-->

                </el-col>
                <el-col :sm="7">
                    <div class="add-task">
                        <el-button type="primary" @click="onPublish">我也要发布任务</el-button>
                    </div>
                    <div class="show-users">
                        <h3 class="show-users_title">本周活跃用户Top 5</h3>
                        <ul class="user-liat" v-if="userList&&userList.data">
                            <li v-if="index<5" v-for="(item,index) in userList.data" key @click="goZone(item.id)"
                                class="my-space-Between">
                                <img v-if="!item.avatarId"
                                     src="http://bank.longhaiyan.cn/img/user.jpeg" alt="">
                                <img v-else
                                     :src="'http://bank.longhaiyan.cn/picture/show?id='+item.avatarId" alt="">
                                <span>{{item.userName}}</span>
                            </li>
                        </ul>
                        <div v-else class="no-task">
                            <i class="el-icon-warning"></i>天呐，居然一个用户都没有
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="friends">
                <h4 class="friends-hd">友情链接</h4>
                <el-row class="friends-bd" :gutter="70">
                    <el-col :sm="8">
                        <a href="http://www.hfut.edu.cn/ch/" target="_blank">
                            合肥工业大学
                        </a>

                    </el-col>
                    <el-col :sm="8">
                        <a href="http://som.hfut.edu.cn/glxy/index.htm" target="">
                            合肥工业大学管理学院
                        </a>
                        </el-col>
                    <el-col :sm="8">
                        <a href="http://www.hfut.edu.cn/ch/" target="_blank">合肥工业大学宣城校区</a></el-col>
                    <el-col :sm="8">
                        <a href="http://online.hfut.edu.cn/" target="_blank">
                            工大学子
                        </a>
                        </el-col>
                    <el-col :sm="8">
                        <a href="http://newmly.hfutonline.net/" target="_blank">
                            明理苑大学生网络文化工作室
                        </a>
                        </el-col>
                    <el-col :sm="8"></el-col>
                </el-row>
            </div>
        </section>
    </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {mapActions, mapState} from 'vuex'
  import infoBox from '@/components/info_box'
  import * as GlobalType from '@/store/global/types'
  export default {
    name: 'index',
    data() {
      return {
        swiperOption: {
          autoplay: 7000,
          loop: true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          //        mousewheelControl : true,
          observeParents: true,
          //                    effect: 'fade',
          width: window.innerWidth,
          height: window.innerHeight,
            /*nextButton: '.swiper-button-next',
             prevButton: '.swiper-button-prev'*/

        },
        swiperSlides: [{
          img: 'http://bank.longhaiyan.cn/img/test.jpg'
        }, {
          img: 'http://bank.longhaiyan.cn/img/test1.png'
        }],
          /*indexInfoData: [
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

           ]*/
      }
    },
    computed: {
      ...mapState({
        newTaskInfo: state => state.task.newTaskInfo,
        userList: state => state.myIndex.userList
      })
    },
    methods: {
      ...mapActions({
        publishShow: GlobalType.A_PUBLISH_SHOW,
      }),
      onPublish: function() {
        if(window.initState.isLogin){
          this.publishShow()
        }else{
          this.$message.warning('请先登录后再发布任务')
        }

      },
      goZone: function(id) {
        event.stopPropagation()
        if (id&&window.initState.isLogin) {
          this.GM_routerPush({
            path: '/zone',
            query: {
              userId: id
            }
          })
        }else{
          this.$message.warning('请先登录')
        }
      },
      goTaskInfo(taskId) {
        this.GM_routerPush({
          path: '/intro',
          query: {
            taskId: taskId
          }
        })
      }
    },
    components: {
      swiper,
      swiperSlide,
      infoBox
    }
  }
</script>


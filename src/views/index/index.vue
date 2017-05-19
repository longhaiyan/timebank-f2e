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
                            <router-link to="/" class="show-banner_more">更多<i class="el-icon-d-arrow-right"></i>
                            </router-link>
                        </div>
                        <infoBox v-for="item in indexInfoData" :data="item" key></infoBox>
                    </div>
                    <div class="show-banner">
                        <div class="show-banner-hd my-space-Between">
                            <h3 class="show-banner_title">最热任务</h3>
                            <router-link to="/" class="show-banner_more">更多<i class="el-icon-d-arrow-right"></i>
                            </router-link>
                        </div>
                        <infoBox v-for="item in indexInfoData" :data="item" key></infoBox>
                    </div>

                </el-col>
                <el-col :sm="7">
                    <div class="add-task">
                        <el-button type="primary" @click="onPublish">我也要发布任务</el-button>
                    </div>
                    <div class="show-users">
                        <h3 class="show-users_title">本周活跃用户Top 5</h3>
                        <ul class="user-liat">
                            <li v-for="index in 5" key @click="goZone(index)" class="my-space-Between">
                                <img src="http://bank.longhaiyan.cn/img/user.jpeg"
                                     alt="">
                                <span>lalal</span>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <div class="friends">
                <h4 class="friends-hd">友情链接</h4>
                <el-row class="friends-bd" :gutter="70">
                    <el-col :sm="8">
                        合肥工业大学



                    </el-col>
                    <el-col :sm="8">合肥工业大学管理学院</el-col>
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
          img: 'http://bank.longhaiyan.cn/img/test.png'
        }, {
          img: 'http://bank.longhaiyan.cn/img/test1.jpg'
        }],
        indexInfoData: [
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

        ]
      }
    },
    computed:{
      ...mapState({
        indexInfo:state=>state.myIndex.indexInfo
      })
    },
    methods: {
      ...mapActions({
        publishShow: GlobalType.A_PUBLISH_SHOW,
      }),
      onPublish: function() {
        this.publishShow()
      },
      goZone:function (id) {
        event.stopPropagation()
        if(id){
          this.GM_routerPush({
            path: '/zone',
            query: {
              userId: id
            }
          })
        }
      },
    },
    components: {
      swiper,
      swiperSlide,
      infoBox
    }
  }
</script>


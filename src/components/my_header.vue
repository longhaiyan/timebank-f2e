<template>
    <div>
        <el-menu :router="true" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/">
                首页
            </el-menu-item>
            <el-submenu index="/task/new">
                <template slot="title">
                    全部任务
                </template>
                <el-menu-item index="/task/new">
                    发布中

                </el-menu-item>
                <el-menu-item index="/task/receive">
                    进行中

                </el-menu-item>
                <el-menu-item index="/task/finish">
                    已完成
                </el-menu-item>

            </el-submenu>
            <el-menu-item index="/community">
                社区

            </el-menu-item>
            <el-menu-item index="/complain">
                投诉

            </el-menu-item>
            <el-menu-item index="/about" class="header-intro">
                关于我们

            </el-menu-item>


            <!--<el-submenu index="7" class="userInfoBox" v-else>
                <template slot="title" style="">
                    <img src="http://bank.longhaiyan.cn/img/userImg.jpeg" alt=""
                         style="width: 40px;height: 40px;border-radius: 100%;">
                    <span>{{userBaseInfo.userName}}</span>
                </template>
                <el-menu-item index="7-1">选项1</el-menu-item>
                <el-menu-item index="7-2">选项2</el-menu-item>
                <el-menu-item index="7-3">选项3</el-menu-item>
            </el-submenu>-->
            <el-menu-item v-if="!userBaseInfo||!userBaseInfo.userName" index="/">
                <el-button type="text" @click="onLogin">登录</el-button>
                <span>/</span>
                <el-button type="text" @click="onRegister">注册</el-button>
            </el-menu-item>
            <el-submenu v-else index="" class="userInfoBox">
                <template slot="title" style="">
                    <img v-if="!userBaseInfo.avatarId" src="http://bank.longhaiyan.cn/img/user.jpeg" alt=""
                         style="width: 40px;height: 40px;border-radius: 100%;">
                    <img v-else :src="'http://bank.longhaiyan.cn/picture/show?id='+userBaseInfo.avatarId" alt=""
                         style="width: 40px;height: 40px;border-radius: 100%;">

                    <span>{{userBaseInfo.userName}}</span>
                </template>
                <el-menu-item index="" @click="goZone">
                    个人主页

                </el-menu-item>
                <el-menu-item index="/setting/info">
                    我的设置

                </el-menu-item>
                <el-menu-item index="/message/system">
                    <el-badge :value="unreadMsg" :max="99" class="item">
                        我的消息

                    </el-badge>
                </el-menu-item>
                <el-menu-item index="/account">
                   我的账户
                </el-menu-item>
                <el-menu-item index="" @click="onPublish">
                    发布任务

                </el-menu-item>
                <el-menu-item index="/" @click="onLoginOut">
                    退出登录

                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import store from '@/store'
  import MyModal from  './my_modal.vue'
  import * as GlobalType from '@/store/global/types'
  export default {
    name: "header",
    data() {
      return {
        activeIndex: '1',
        //        localUserName: ''
          /*loginForm: {
           userName: "",
           pwd: ""
           },
           loginData: {
           visible: false,
           size: 'tiny',
           confirmButtonText: '确认登录',
           title:'登录'
           },
           loginRules:{
           userName:{
           /!*required: true,
           message: '请输入用户名',
           trigger: 'blur'*!/
           required: true,
           validator: this.checkUserName,
           trigger: 'blur'
           },
           pwd:{
           required: true,
           message: '请输入密码',
           trigger: 'blur'
           /!*require: true,
           validator: this.checkPwd,
           trigger: 'blur'*!/
           }
           }*/
      };
    },
    computed: {
      ...mapState({
        loginErrorMsg: state => state.myGlobal.loginErrorMsg,
        //        userName: state => state.myGlobal.username,
        userBaseInfo: state => state.myGlobal.userBaseInfo,
        unreadMsg: state => state.myGlobal.unreadMsg,
      })
    },
    watch: {
        /*userBaseInfo: function() {
         this.isLogin()
         }*/
      unreadMsg: function() {
        let self = this
        const ele = this.$createElement;
        if(self.unreadMsg){
          this.$notify({
            title: '未读消息提醒',
            message: ele('i', {style: 'color: #F7BA2A'}, "您有 " + self.unreadMsg + " 条未读消息"),
            duration: 2000
          });
        }
      }
    },
    methods: {
      ...mapActions({
        loginShow: GlobalType.A_LOGIN_SHOW,
        registerShow: GlobalType.A_REGISTER_SHOW,
        publishShow: GlobalType.A_PUBLISH_SHOW,
        getBaseUserInfo: GlobalType.A_USER_BASE_INFO,
        liveOpen: GlobalType.A_LIVE_OPEN,
        loginOut: GlobalType.A_USER_LOGIN_OUT,

      }),
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      onLogin(){
        this.loginShow()
      },
      onRegister(){
        console.log('header onRegister')
        this.registerShow()
      },
      // 打开modal，传入一些回调函数
      openModal(obj, ops) {
        obj.visible = true
        for (var i in ops) {
          if (typeof ops[i] === 'function') {
            obj[i] = ops[i]
          }
        }
      },
      checkUserName(rule, value, callback){
        if (typeof value === 'undefined' || value === '') {
          return callback(new Error('请输入用户名'))
        }
        return callback()
      },
      checkPwd(rule, value, callback){
        if (typeof value === 'undefined') {
          return callback(new Error('请输入密码'))
        }
        return callback()
      },
      showMessage() {
        this.$message.error(this.loginErrorMsg)
      },
        /*isLogin(){
         console.log("chufa islogin", this.userName)
         if (this.userName) {
         console.log("xiugai ")
         this.localUserName = this.userName
         }
         },*/
      onPublish() {
        this.publishShow()
      },
      setNavActiveIndex(){
        if (document.querySelector('.j-index')) {
          this.activeIndex = "/"
        } else if (document.querySelector('.j-task')) {
          this.activeIndex = "/task/new"
        } else if (document.querySelector('.j-community')) {
          this.activeIndex = "/community"
        } else if (document.querySelector('.j-complain')) {
          this.activeIndex = "/complain"
        } else if (document.querySelector('.j-about')) {
          this.activeIndex = "/about"
        } else {
          this.activeIndex = "/"
        }
      },
      goZone: function() {
        event.stopPropagation()
        console.log("goZone")
        console.log("userBaseInfo", this.userBaseInfo)
        if (this.userBaseInfo && this.userBaseInfo.userId) {
          this.GM_routerPush({
            path: '/zone',
            query: {
              userId: this.userBaseInfo.userId
            }
          })
        }
      },
      init(){
        let self = this
        if (window.initState.isLogin) {
          console.log("自动登录")
          this.getBaseUserInfo().then(()=>{
            window.initState.userId = self.userBaseInfo.userId
            window.initState.isLogin = true
            console.log("获取用户初始化ID 成功",window.initState.userId)
          })
        }
        this.setNavActiveIndex()
        this.liveOpen()
      },
      onLoginOut(){
        let self = this
        this.loginOut().then(() => {
          self.userBaseInfo.userName = ''
          window.initState.isLogin = false
          self.$message({
            type: 'success',
            message: '注销成功'
          })
          this.GM_routerPush({
            path: '/',
          })

        }, () => {
          self.$message({
            type: 'error',
            message: '注销失败'
          })
        })
      },

    },
    mounted(){
      this.init()
    },
    components: {
      MyModal
    }
  }
</script>

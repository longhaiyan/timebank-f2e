<template>
    <div id="app">
        <el-row class="header">
            <el-col :sm="8" class="my-space-Between">
                <router-link to="/" class="logo">
                    <img src="http://bank.longhaiyan.cn/img/logo.png" alt=""> 时间银行
                </router-link>
                <i v-if="moreIconVisible" @click="onShowMenu" class="el-icon-more my-menu-more"></i>
                <div class="phone-login" v-else style="margin-right: 24px;">
                    <el-button type="text" @click="onLoginShow">登录</el-button>
                    <span>/</span>
                    <el-button type="text" @click="onRegisterShow">注册</el-button>
                </div>

            </el-col>
            <el-col :sm="16" class="my_header j-my_header my_header_hide">
                <MyHeader/>
            </el-col>
        </el-row>
        <!--<img src="./assets/logo.png" alt="">-->
        <el-row class="container">
            <router-view></router-view>
        </el-row>
        <el-row>
            <MyFooter/>
        </el-row>

        <!--登录弹窗-->
        <MyModal class="my-login-box" :data="loginData" :step="loginDialogStep" style="text-align: left">
            <el-form :model="loginFormData" ref="loginForm" :rules="loginRules" label-width="100px">
                <el-form-item label="用户名：" prop="name">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="loginFormData.name">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password"
                              placeholder="请输入密码"
                              v-model="loginFormData.password">
                    </el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input style="width: 120px;"
                              v-model="loginFormData.code">
                    </el-input>
                    <img src="http://bank.longhaiyan.cn/kaptcha-image"
                         style="width: 110px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
                <el-form-item>
                    <el-button type="text" @click="toRegister">还没有账号，赶紧戳我去注册吧</el-button>
                </el-form-item>
            </el-form>
        </MyModal>
        <!--注册弹窗-->
        <MyModal class="my-login-box" :data="registerData" :step="registerDialogStep" style="text-align: left">
            <el-form :model="registerFormData" ref="registerForm" :rules="registerRules" label-width="100px">
                <el-form-item label="邮箱：" prop="email">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="registerFormData.email">
                    </el-input>
                </el-form-item>
                <el-form-item label="用户名：" prop="userName">
                    <el-input
                            placeholder="请输入用户名"
                            v-model="registerFormData.userName">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password"
                              placeholder="请输入密码"
                              v-model="registerFormData.password">
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="checkPassword">
                    <el-input type="password"
                              placeholder="请确认密码"
                              v-model="registerFormData.checkPassword">
                    </el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input style="width: 120px;"
                              v-model="registerFormData.code">
                    </el-input>
                    <img @click="getKaptchaImg" src="http://bank.longhaiyan.cn/kaptcha-image"
                         style="width: 110px;height: 40px;vertical-align: middle;" alt="">
                </el-form-item>
                <el-form-item prop="checkRegister">
                    <el-checkbox v-model="registerFormData.checkRegister">我接受相关规定</el-checkbox>
                    <div @click="onShowAbout">点我阅读相关规定</div>
                </el-form-item>

            </el-form>
        </MyModal>
        <!--发布任务弹窗-->
        <MyModal class="my-publish-box j-my-publish-box" :data="publishData" :step="publishDialogStep"
                 style="text-align: left">
            <el-form :model="publishFormData" :rules="publishRules" ref="publishForm" label-width="130px">
                <el-steps :space="200" :active="stepActive" finish-status="success">
                    <el-step title="第一步" description="填写主要信息"></el-step>
                    <el-step title="第二步" description="填写附加信息"></el-step>
                    <el-step title="第三步" description="发布"></el-step>
                </el-steps>
                <el-tabs v-model="panelActive">
                    <el-tab-pane label="用户管理" name="1">
                        <el-form-item label="主题：" prop="name">
                            <el-input
                                    placeholder="请简要概括任务信息，如取快递"
                                    v-model="publishFormData.name">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="详细描述：" prop="description">
                            <el-input type="textarea"
                                      placeholder="请详细描述您的任务内容"
                                      v-model="publishFormData.description">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="要求：">
                            <el-input
                                    placeholder="请说明您的要求"
                                    v-model="publishFormData.demand">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="备注：" prop="remark">
                            <el-input
                                    placeholder=""
                                    v-model="publishFormData.remark">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="隐私信息：" prop="personal">
                            <el-input
                                    type="textarea"
                                    placeholder="此项只有您和接单人可见，例如：快递单号是12345"
                                    v-model="publishFormData.personal">
                            </el-input>
                        </el-form-item>

                        <div class="btn-group">
                            <el-button type="primary" @click="firstNext">下一步</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理" name="2">
                        <el-form-item label="标签：" prop="tagIds">
                            <el-select
                                    v-model="publishFormData.tagIds"
                                    multiple
                                    filterable
                                    allow-create
                                    placeholder="请选择任务标签"
                            >
                                <el-option
                                        v-for="item in tagList"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="截止时间：" prop="deadTime">
                            <el-date-picker
                                    type="datetime"
                                    v-model="publishFormData.deadTime"
                                    placeholder="选择任务截止日期时间"
                                    :picker-options="pickerOptions0"
                            >
                            </el-date-picker>
                        </el-form-item>


                        <el-form-item label="服务地点：" prop="address">
                            <el-input
                                    placeholder=""
                                    v-model="publishFormData.address">
                            </el-input>
                        </el-form-item>

                        <el-form-item label="服务时间：" prop="serviceTime">
                            <el-input
                                    placeholder="例如：周六下午3-5点，预计2小时"
                                    v-model="publishFormData.serviceTime">
                            </el-input>
                        </el-form-item>

                        <div class="btn-group">
                            <el-button type="primary" @click="secondPrv">上一步</el-button>
                            <el-button type="primary" @click="secondNext">下一步</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="角色管理" name="3">
                        <!--<el-form-item label="验证码" prop="code">
                            <el-input style="width: 120px;"
                                      v-model="publishFormData.code">
                            </el-input>
                            <img @click="getKaptchaImg" src="http://bank.longhaiyan.cn/kaptcha-image"
                                 style="width: 120px;height: 40px;vertical-align: middle;" alt="">
                        </el-form-item>-->
                        <el-form-item label="酬金：" prop="money">
                            <el-input-number v-model="publishFormData.money" :step="5"></el-input-number>
                        </el-form-item>
                        <el-form-item label="我爱公益：">
                            <!--<el-radio-group v-model="publishFormData.urgent">
                                <el-radio label="0">不加急</el-radio>
                                <el-radio label="1">加急</el-radio>
                            </el-radio-group>-->
                            <el-checkbox v-model="publishFormData.urgent"><span v-if="!publishFormData.urgent"
                                                                                style="font-size: 13px;color: #999;">我们将根据您的资助优先推送您的任务信息</span>
                            </el-checkbox>

                        </el-form-item>

                        <el-form-item label="" prop="urgentMoney">
                            <el-input-number v-if="publishFormData.urgent" v-model="publishFormData.urgentMoney"
                                             :step="5"></el-input-number>

                        </el-form-item>


                        <div class="btn-group">
                            <el-button type="primary" @click="firstNext">上一步</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </MyModal>
        <!--发布帖子弹窗-->
        <MyModal class="my-login-box" :data="topicPublishData" :step="topicPublishDialogStep" style="text-align: left">
            <el-form :model="topicPublishFormData" ref="topicPublishForm" :rules="topicPublishRules"
                     label-width="100px">
                <el-form-item label="帖子详情：" prop="detail">
                    <el-input type="textarea"
                              placeholder="请输入输入帖子内容"
                              v-model="topicPublishFormData.detail">
                    </el-input>
                </el-form-item>
                <el-form-item label="帖子图片：">
                    <el-upload
                            class="avatar-uploader"
                            action="http://bank.longhaiyan.cn/picture/upload/project"
                            name="uploadFile"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                    >
                        <img v-if="topicPublishFormData.imgUrl" :src="topicPublishData.imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </el-form>
        </MyModal>


    </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import MyHeader from './components/my_header.vue'
  import MyFooter from './components/my_footer.vue'
  import MyModal from  '@/components/my_modal.vue'
  import * as MyIndexType from '@/store/my_index/types'
  import * as TaskType from '@/store/task/types'
  import * as ZoneType from '@/store/zone/types'

  export default {
    name: 'app',
    data(){
      return {
        moreIconVisible: false,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        active: 0,
        loginForm: {
          userName: "",
          password: "",
          code: ""
        },
        registerForm: {
          email: "",
          userName: "",
          password: "",
          checkPassword: "",
          code: "",
          checkRegister:false

        },
        loginData: {
          //                    visible: false,
          size: 'small',
          confirmButtonText: '确认登录',
          title: '登录',
        },
        registerData: {
          size: 'small',
          confirmButtonText: '确认注册',
          title: '注册',
          checkRegister:false

        },
        publishData: {
          size: 'small',
          confirmButtonText: '确认发布',
          title: '发布任务',
          deadTime: new Date(),
          urgent: false,
          money: "0",
          tagIds: [],
          urgentMoney: "0",
        },
        topicPublishData: {
          size: 'small',
          confirmButtonText: '确认发布',
          title: '发帖子',
          imgUrl: '',
          picId: ''
        },

        loginRules: {
          name: {
              /*required: true,
               message: '请输入用户名',
               trigger: 'blur'*/
            required: true,
            validator: this.checkUserName,
            trigger: 'blur'
          },
          password: {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
              /*require: true,
               validator: this.checkPwd,
               trigger: 'blur'*/
          },
          code: {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          }
        },
        registerRules: {
          userName: {
            required: true,
            validator: this.checkUserName,
            trigger: 'blur'
          },
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          password: {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          checkPassword: {
            required: true,
            validator: this.confirmCheckPassword,
            trigger: 'blur'
          },
          code: {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          },
//          checkRegister:{
//            required: true,
//            message: '请先确认已阅读注册要求',
//            trigger: 'blur'
//          }
        },
        publishRules: {
          name: {
            required: true,
            message: '请输入任务简介',
            trigger: 'blur'
          },
          description: {
            required: true,
            message: '请输入任务详情',
            trigger: 'blur'
          },
          money: {
            required: true,
            validator: this.checkMoney,
            trigger: 'blur,change'
          },
          urgentMoney: {
            required: true,
            validator: this.checkUrgentMoney,
            trigger: 'blur,change'
          },
          tagIds: {
            required: true,
            validator: this.checkTag,
            //            message: '请选择任务标签',
            trigger: 'blur,change'
          },
          address: {
            required: true,
            message: '请输入地点',
            trigger: 'blur'
          },
          deadTime: {
            required: true,
            validator: this.checkDeadTime,
            //            message: '请选择任务截止时间',

            trigger: 'blur,change'
          }

            /*money: {
             required: true,
             message: '请输入要花费的时间币',
             trigger: 'blur'
             },*/

        },
        topicPublishRules: {
          detail: {
            required: true,
            message: '请输入帖子内容',
            trigger: 'blur'
          },
        },
        stepActive: 0,
        panelActive: '1',
        zoneUserId: this.$route.query.userId || '',

      }
    },
    computed: {
      ...mapState({
        loginDialogStep: state => state.myGlobal.loginDialogStep,
        registerDialogStep: state => state.myGlobal.registerDialogStep,
        publishDialogStep: state => state.myGlobal.publishDialogStep,
        topicPublishDialogStep: state => state.myGlobal.topicPublishDialogStep,
        loginErrorMsg: state => state.myGlobal.loginErrorMsg,
        registerErrorMsg: state => state.myGlobal.registerErrorMsg,
        publishErrorMsg: state => state.myGlobal.publishErrorMsg,
        topicPublishErrorMsg: state => state.myGlobal.topicPublishErrorMsg,
        loginDialogVisible: state => state.myGlobal.loginDialogVisible,
        registerDialogVisible: state => state.myGlobal.registerDialogVisible,
        publishDialogVisible: state => state.myGlobal.publishDialogVisible,
        topicPublishDialogVisible: state => state.myGlobal.topicPublishDialogVisible,
        tagList: state => state.myMap.tagList,
          /*tagErrorMsg: state => state.myMap.tagErrorMsg,
           tagStep: state => state.myMap.tagStep,*/
      }),
      loginFormData(){
        return Object.assign(this.loginData, {visible: this.loginDialogVisible})
      },
      registerFormData(){
        return Object.assign(this.registerData, {visible: this.registerDialogVisible})
      },
      publishFormData(){
        return Object.assign(this.publishData, {visible: this.publishDialogVisible})
      },
      topicPublishFormData(){
        return Object.assign(this.topicPublishData, {visible: this.topicPublishDialogVisible})
      },

    },
    watch: {
      loginDialogVisible: function() {
        console.log('loginDialogVisible 的值改变了', this.loginDialogVisible)
        if (this.loginDialogVisible) {
          this.onLogin()
        }
      },
      registerDialogVisible: function() {
        console.log('registerDialogVisible 的值改变了', this.registerDialogVisible)
        if (this.registerDialogVisible) {
          this.onRegister()
        }
      },
      publishDialogVisible: function() {
        console.log('publishDialogVisible 的值改变了', this.publishDialogVisible)
        if (this.publishDialogVisible) {
          this.onPublish()
        }
      },
      topicPublishDialogVisible: function() {
        console.log('topicPublishDialogVisible 的值改变了', this.topicPublishDialogVisible)
        if (this.topicPublishDialogVisible) {
          this.onTopicPublish()
        }
      },

    },
    methods: {
      ...mapActions({
        userLogin: GlobalType.A_USER_LOGIN,
        userRegister: GlobalType.A_USER_REGISTER,
        taskPublish: GlobalType.A_TASK_PUBLISH,
        topicPublish: GlobalType.A_TOPIC_PUBLISH,
        loginHide: GlobalType.A_LOGIN_HIDE,
        registerHide: GlobalType.A_REGISTER_HIDE,
        publishHide: GlobalType.A_PUBLISH_HIDE,
        topicPublishHide: GlobalType.A_TOPIC_PUBLISH_HIDE,
        registerShow: GlobalType.A_REGISTER_SHOW,
        indexStartMain: MyIndexType.A_START_MAIN,
        newTaskStartMain: TaskType.A_NEW_START_MAIN,
        getZoneInfo: ZoneType.A_ZONE_INFO,
        loginShow: GlobalType.A_LOGIN_SHOW,

      }),
      onLogin(){
        let self = this
        this.openModal(this.loginFormData, {
          beforeConfirm(next){
            self.$refs.loginForm.validate(value => {
              if (value) {
                self.userLogin({
                  name: self.loginFormData.name,
                  password: self.loginFormData.password,
                  code: self.loginFormData.code
                }).then(() => {
                  if (self.loginDialogStep === 'error') {
                    self.showMessage(self.loginErrorMsg)
                    return
                  } else {
                    window.initState.isLogin = true
                    self.moreIconVisible = true
                    self.$message({
                      type: 'success',
                      message: '登录成功'
                    })
                    return next()
                  }
                })
              }
            })
          },
          beforeCancel(next) {
            console.log("beforeCancel")
            self.loginHide().then(() => {
              return next()
            })
          }
        })
      },
      onLoginShow(){
        this.loginShow()
      },
      onRegister(){
        let self = this
        this.openModal(this.registerFormData, {
          beforeConfirm(next){
            console.log("beforeConfirm",self.registerFormData)
            self.$refs.registerForm.validate(value => {
//              console.log("self.registerFormData.checkRegister",self.registerFormData.checkRegister,self.registerFormData,self.registerFormData.email)
              if (value) {
                if(self.registerFormData.checkRegister){
                  self.userRegister({
                    email: self.registerFormData.email,
                    userName: self.registerFormData.userName,
                    password: self.registerFormData.password,
                    code: self.registerFormData.code
                  }).then(() => {
                    if (self.registerDialogStep === 'error') {
                      self.showMessage(self.registerErrorMsg)
                      return
                    } else {
                      const ele = self.$createElement;
                      window.initState.isLogin = true
                      self.$notify({
                        title: '注册并登录成功',
                        message: ele('span', {style: 'color: #e08080'}, '只有实名认证的用户可以发布或接受任务，请先实名认证，本系统暂时只支持本校学生和教师实名认证'),
                        duration: 0
                      });
                      self.GM_routerPush({
                        path: '/setting/confirm',
                      })
                      self.moreIconVisible = true
                      return next()
                    }
                  })
                }else{
                  self.$message.warning('请确认接受相关规定')
                }
              }
            })
          },
          beforeCancel(next) {
            self.registerHide().then(() => {
              return next()
            })
          }
        })

      },
      onRegisterShow(){
        this.registerShow()
      },
      onShowAbout(){
        this.registerHide()
        this.GM_routerPush({
          path: '/about',
        })

      },
      onPublish(){
        let self = this
        this.openModal(this.publishFormData, {
          beforeConfirm(next){
            console.log("beforeConfirm")
            self.$refs.publishForm.validate(value => {
              console.log("未通过表单验证")
              if (value) {
                console.log("为发布准备数据")
                let rlt = {}
                for (let key in self.publishFormData) {
                  let tval
                  if (/tagIds/.test(key)) {
                    tval = self.publishFormData[key].join(',')
                  }
                  rlt[key] = tval
                }
                console.log('rlt[key]', rlt.tagIds)
                let urgentMoneyValue = 0
                let urgentValue = 0
                if (self.publishFormData.urgent) {
                  urgentMoneyValue = parseInt(self.publishFormData.urgentMoney)
                }
                if (self.publishFormData.urgent) {
                  urgentValue = 1
                }
                console.log("urgentMoneyValue", urgentMoneyValue)
                console.log("开始发布")
                self.taskPublish({
                  title: self.publishFormData.name, /*主题*/
                  description: self.publishFormData.description, /*描述*/
                  money: parseInt(self.publishFormData.money),//钱
                  demand: self.publishFormData.demand || '', /*承接要求*/
                  urgent: urgentValue,//是否加急
                  remark: self.publishFormData.remark || '',//备注
                  urgentMoney: urgentMoneyValue,//加急的钱数
                  serviceTime: self.publishFormData.serviceTime || '',//服务时间
                  deadTime: self.publishFormData.deadTime,//截止时间
                  address: self.publishFormData.address,//服务地点
                  personal: self.publishFormData.personal || '',//完成任务必要的隐藏信息
                  tagIds: rlt.tagIds || ''//标签id拼接
                }).then(() => {
                  if (self.publishDialogStep === 'error') {
                    self.showMessage(self.publishErrorMsg)
                    return
                  } else {
                    if (document.querySelector('.j-my-new-task-list')) {
                      console.log("刷新newtask页面 实现")
                      self.newTaskStartMain()
                    } else if (document.querySelector('.j-index')) {
                      console.log("刷新index页面 实现")
                      self.indexStartMain()
                    } else if (document.querySelector('.j-my-zone')) {
                      console.log("刷新zone页面 实现")
                      self.getZoneInfo({userId: self.zoneUserId})
                    }
                    self.$message({
                      type: 'success',
                      message: '发布成功'
                    })
                    return next()
                  }
                })
              }
            })
          },
          beforeCancel(next) {
            self.publishHide().then(() => {
              return next()
            })
          }
        })

      },
      onTopicPublish(){
        let self = this
        this.openModal(this.topicPublishFormData, {
          beforeConfirm(next){
            console.log("beforeConfirm")
            self.$refs.topicPublishForm.validate(value => {
              if (value) {
                self.topicPublish({
                  detail: self.topicPublishFormData.detail,
                  picId: self.topicPublishFormData.picId,
                }).then(() => {
                  if (self.topicPublishDialogStep === 'error') {
                    self.showMessage(self.topicPublishErrorMsg)
                    return
                  } else {
                    self.$message({
                      type: 'success',
                      message: '发布成功'
                    })
                    return next()
                  }
                })
              }
            })
          },
          beforeCancel(next) {
            self.topicPublishHide().then(() => {
              return next()
            })
          }
        })

      },

      // 打开modal，传入一些回调函数
      openModal(obj, ops) {
        //                obj.visible = true
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
      confirmCheckPassword(rule, value, callback){
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerFormData.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      },
      showMessage(msg) {
        this.$message.error(msg)
      },
      //            检测屏幕滚动事件
      getScroll(){
        window.onscroll = function() {
          let hasActive = document.querySelector('.header').className.match(/(?:^|\s)header-active(?!\S)/)
          let top = document.querySelector('body').scrollTop
          if (top > 0 && !hasActive) {
            document.querySelector('.header').className += ' header-active '
          }
          if (top == 0) {
            document.querySelector('.header').className = document.querySelector('.header').className.replace(( /(?:^|\s)header-active(?!\S)/), '')
          }
        }
      },
      toRegister(){
        this.loginHide()
        this.registerShow()
      },
      getKaptchaImg(event){
        event.target.src = "http://bank.longhaiyan.cn/kaptcha-image?v=" + new Date()
      },
      handleAvatarSuccess: function(res, file, fileList) {
        if (res.success) {
          this.topicPublishFormData.imgUrl = 'http://bank.longhaiyan.cn/picture/show?id=' + res.vars.data.id
          this.topicPublishFormData.picId = res.vars.data.id
        } else {
          this.$message.error("上传失败")
        }
      },
      firstNext(){
        this.stepActive = 1
        this.panelActive = '2'
        //        document.querySelector('.j-my-publish-box').className = document.querySelector('.j-my-publish-box').className.replace(( /(?:^|\s)my-publish-box-show(?!\S)/), '')

      },
      secondPrv(){
        this.stepActive = 0
        this.panelActive = '1'
      },
      secondNext(){
        this.stepActive = 2
        this.panelActive = '3'
        document.querySelector('.j-my-publish-box').className += ' my-publish-box-show '
      },
      checkMoney(rule, value, callback){
        if (parseInt(value) < 1) {
          return callback(new Error('请输入大于1的整数'))
        }
        return callback()
      },
      checkUrgentMoney(rule, value, callback){
        let self = this
        if (self.publishFormData.urgent && value === '') {
          return callback(new Error('请输入时间币金额'))
        } else if (self.publishFormData.urgent && parseInt(value) < 1) {
          return callback(new Error('请输入大于1的整数'))
        }
        return callback()
      },
      checkTag(rule, value, callback){
        console.log("checkTag value", value)
        if (value === '' || value.length === 0) {
          return callback(new Error('请选择至少一个标签'))
        }
        return callback()
      },
      checkDeadTime(rule, value, callback){
        console.log("checkDeadtime value", value)
        if (value === '' || value === undefined) {
          return callback(new Error('请选择任务截止时间'))
        }
        return callback()
      },
      onShowMenu(){
        if (document.querySelector('.my_header_hide')) {
          document.querySelector('.j-my_header').className = document.querySelector('.j-my_header').className.replace(( /(?:^|\s)my_header_hide(?!\S)/), '')
          document.querySelector('.j-my_header').className += ' my_header_phone_show'
        } else {
          document.querySelector('.j-my_header').className += ' my_header_hide'
          document.querySelector('.j-my_header').className = document.querySelector('.j-my_header').className.replace(( /(?:^|\s)my_header_phone_show(?!\S)/), '')
        }

      }

    },
    mounted() {
      this.getScroll()
    },
    components: {
      MyHeader,
      MyFooter,
      MyModal
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*background: #abcabc;*/
        /*height: 100%;*/
    }

    .my-login-box .el-dialog {
        min-width: 300px;
    }
</style>

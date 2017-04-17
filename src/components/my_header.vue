<template>
    <div>
        <!--<MyModal :data="loginData" :step="dialogStep" style="text-align: left">
            <el-form :model="loginForm" ref="loginForm" :rules="loginRules" label-width="100px">
                <el-form-item label="用户名：" prop="userName">
                    <el-input
                            placeholder="用户名"
                            v-model="loginForm.userName">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="pwd">
                    <el-input type="password"
                            placeholder="密码"
                            v-model="loginForm.pwd">
                    </el-input>
                </el-form-item>
            </el-form>
        </MyModal>-->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/Hello/demo">demo页</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <router-link to="/">index页</router-link>
                </template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="!localUserName" index="3">
                <el-button type="text" @click="onLogin">请登录</el-button>
            </el-menu-item>
            <el-submenu index="4" class="userInfoBox" v-else>
                    <template slot="title" style="" >
                        <img src="static/img/userImg.jpeg" alt="" style="width: 40px;height: 40px;border-radius: 100%;">
                        <span>{{localUserName}}</span>
                    </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
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
                localUserName: ''
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
                dialogStep: state => state.myGlobal.dialogStep,
                loginErrorMsg: state => state.myGlobal.loginErrorMsg,
                loginDialogVisible: state => state.myGlobal.loginDialogVisible,
                userName: state => state.myGlobal.username,
            })
        },
        watch: {
            userName: function() {
                console.log("出发 islogin")
                this.isLogin()
            }
        },
        methods: {
            ...mapActions({
                userLogin: GlobalType.A_USER_LOGIN,
                loginShow: GlobalType.A_LOGIN_SHOW
            }),
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            onLogin(){
                this.loginShow()
                //                let self = this
                /*this.openModal(this.loginData, {
                 beforeConfirm(next){
                 console.log("beforeConfirm")
                 self.$refs.loginForm.validate(value => {
                 if(value){
                 console.log('dialogStep',self.dialogStep)
                 console.log('loginForm',self.loginForm)
                 self.userLogin({
                 userName:self.loginForm.userName,
                 pwd:self.loginForm.pwd
                 }).then(()=>{
                 if(self.dialogStep === 'error'){
                 self.showMessage()
                 return
                 }
                 self.$refs.loginForm.resetFields()
                 return next()
                 })
                 }
                 })
                 },
                 beforeCancel(next) {
                 console.log("beforeCancel")
                 return next()
                 }
                 })*/
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
            isLogin(){
                if (this.userName) {
                    console.log("xiugai ")
                    this.localUserName = this.userName
                }
            }
        },
        components: {
            MyModal
        }
    }
</script>

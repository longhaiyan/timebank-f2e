<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <!--<h4 class="my-title_two">实名认证 <el-tag type="warning">等待认证中</el-tag></h4>-->
            <h4 class="my-title_two">
                实名认证

                <el-tag v-if="!userBaseInfo.userType" type="danger">未认证</el-tag>
                <el-tag v-if="userBaseInfo.userType === 1" type="success">已认证为学生</el-tag>
                <el-tag v-if="userBaseInfo.userType === 2" type="success">已认证为教师</el-tag>
                <el-tag v-if="!userBaseInfo.userType === 3" type="danger">学生正在认证中</el-tag>
                <el-tag v-if="!userBaseInfo.userType === 4" type="danger">教师正在认证中</el-tag>
            </h4>
        </div>
        <div class="setting-r-bd my-setting-info">
            <template v-if="userBaseInfo.userType">
                <el-row :gutter="20" class="my-setting-info-confirmed">
                    <el-col :sm="4" class="hd">
                        真实姓名：

                    </el-col>
                    <el-col :sm="19" class="bd">
                        {{userBaseInfo.student.name||userBaseInfo.teacher.name}}
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="my-setting-info-confirmed">
                    <el-col :sm="4" class="hd">
                        用户类型：

                    </el-col>
                    <el-col :sm="19" class="bd">
                        <template v-if="userBaseInfo.userType === 1 || userBaseInfo.userType === 3">
                            学生
                        </template>
                        <template v-if="userBaseInfo.userType === 2 || userBaseInfo.userType === 4">
                            教师
                        </template>
                    </el-col>
                </el-row>
                <el-row :gutter="20" class="my-setting-info-confirmed">
                    <el-col :sm="4" class="hd">
                        学号：

                    </el-col>
                    <el-col :sm="19" class="bd">
                        {{userBaseInfo.student.sno||userBaseInfo.teacher.sno}}

                    </el-col>
                </el-row>
                <el-row :gutter="20" class="my-setting-info-confirmed">
                    <el-col :sm="4" class="hd">
                        学院：

                    </el-col>
                    <el-col :sm="19" class="bd">
                        {{userBaseInfo.student.dept||userBaseInfo.teacher.dept}}

                    </el-col>
                </el-row>
                <el-row v-if="userBaseInfo.student" :gutter="20" class="my-setting-info-confirmed">
                    <el-col :sm="4" class="hd">
                        专业班级：

                    </el-col>
                    <el-col :sm="19" class="bd">
                        {{userBaseInfo.student.major}}

                    </el-col>
                </el-row>

            </template>
            <template v-if="!userBaseInfo.userType">
                <el-row :gutter="50" >
                    <el-col :sm="15">
                        <el-form :model="userInfoData" ref="localData" :rules="localDataRules" label-width="120px">
                            <div class="form-body">
                                <el-form-item label="真实姓名：" prop="name">
                                    <el-input v-model="userInfoData.name" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="我是：" prop="type">
                                    <el-radio-group v-model="userInfoData.type">
                                        <el-radio label="1">学生</el-radio>
                                        <el-radio label="2">老师</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item :label="parseInt(userInfoData.type) === 1?'学号':'教师号'" prop="no">
                                    <el-input
                                            :placeholder="parseInt(userInfoData.type) === 1?'请输入学号':'请输入教师号'"
                                            v-model.number="userInfoData.no">
                                    </el-input>
                                </el-form-item>
                                <el-form-item :label="parseInt(userInfoData.type) === 1?'学院':'职务'" prop="dept">
                                    <el-input
                                            :placeholder="parseInt(userInfoData.type) === 1?'请输入学院':'请输入职务'"
                                            v-model="userInfoData.dept">
                                    </el-input>
                                </el-form-item>
                                <el-form-item v-if="parseInt(userInfoData.type) === 1" label="专业班级：" prop="major">
                                    <el-input
                                            placeholder="请输入专业班级"
                                            v-model="userInfoData.major">
                                    </el-input>
                                </el-form-item>
                            </div>
                        </el-form>
                    </el-col>
                    <el-col :sm="5">
                        <h3>上传身份证附件：</h3>
                        <el-upload
                                class="avatar-uploader"
                                action="http://bank.longhaiyan.cn/picture/upload/project"
                                name="uploadFile"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :on-error="handleAvatarError"
                        >
                            <!--<img style="width:200px;height: 200px;display: block;" v-if="!avatarId" class="avatar"
                                 src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                            <img v-else style="width:200px;height: 200px;display: block;"
                                 :src="'http://bbs.chenxubiao.cn/picture/show?id='+avatarId" alt="">-->
                            <img v-if="userInfoData.imageUrl" :src="userInfoData.imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <span></span>
                    </el-col>
                </el-row>
                <div class="form-footer" style="text-align: center">
                    <el-button type="primary" @click="onSubmit">确认</el-button>
                    <el-button @click="">取消</el-button>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as SettingConfirmType from '@/store/setting_confirm/types'
  import * as GlobalType from '@/store/global/types'

  export default{
    name: 'settingConfirm',
    data(){
      return {
        userInfoData: {
          name: '',
          no: '',
          type: "1",
          dept: '',
          major: '',
          imageUrl: "",
          attachment: '0',
        },
        localDataRules: {
          name: {
            required: true,
            message: '请填写真实姓名',
            trigger: 'blur'
          },
          type: {
            required: true,
            message: '请选择身份',
            trigger: 'blur'
          },
          dept: {
            required: true,
            validator: this.checkDept,
            trigger: 'blur'
          },
          major: {
            validator: this.checkMajor,
            trigger: 'blur'
          },
          no: {
            required: true,
            validator: this.checkNo,
            trigger: 'blur'
          },

        }
      }
    },
    computed: {
      ...mapState({
        confirmErrorMsg: state => state.settingConfirm.confirmErrorMsg,
        confirmStep: state => state.settingConfirm.confirmStep,
        userBaseInfo: state => state.myGlobal.userBaseInfo,
      })
    },
    methods: {
      ...mapActions({
        confirmUpdate: SettingConfirmType.A_CONFIRM_UPDATE,
        settingNav: GlobalType.A_SETTING_NAV,
      }),
      onSubmit(){
        let self = this
        this.$refs.localData.validate(value => {
          if (value) {
            if (self.userInfoData.attachment) {
              self.confirmUpdate({
                name: self.userInfoData.name,
                no: parseInt(self.userInfoData.no),
                type: parseInt(self.userInfoData.type),
                dept: self.userInfoData.dept,
                major: self.userInfoData.major,
                attachment: self.userInfoData.attachment,
              }).then(() => {
                if (self.confirmStep === 'error') {
                  self.$message.error(self.confirmErrorMsg)
                  return
                } else {
                  self.$message({
                    type: 'success',
                    message: '申请实名认证提交成功'
                  })
                }
              })
            } else {
              self.$message({
                type: 'warning',
                message: "上传证件照"
              })
            }

          }
        })
      },
      handleAvatarSuccess: function(res, file, fileList) {
        if (res.success) {
          this.userInfoData.imageUrl = "http://bank.longhaiyan.cn/picture/show?id=" + res.vars.data.id
          this.userInfoData.attachment = res.vars.data.id
        } else {
          this.$message.error("上传失败")
        }
      },
      handleAvatarError(){

      },
      checkDept(rule, value, callback){
        if (parseInt(this.userInfoData.type) === 1 && value === '') {
          return callback(new Error('请填写学院'))
        } else if (parseInt(this.userInfoData.type) > 1 && value === '') {
          return callback(new Error('请填写职位'))
        }
        return callback()
      },
      checkMajor(rule, value, callback){
        if (parseInt(this.userInfoData.type) === 1 && value === '') {
          return callback(new Error('请填写专业班级'))
        }
        return callback()
      },
      checkNo(rule, value, callback){
        if (parseInt(this.userInfoData.type) === 1 && value === '') {
          return callback(new Error('请输入学号'))
        } else if (parseInt(this.userInfoData.type) > 1 && value === '') {
          return callback(new Error('请输入教师号'))
        } else if (!Number.isInteger(value)) {
          return callback(new Error('请输入整数'))
        }
        return callback()
      },
    },
    mounted(){
      this.settingNav({name: 'confirm'})
    }

  }
</script>
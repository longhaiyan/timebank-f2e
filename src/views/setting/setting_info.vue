<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">个人信息完善</h4>
        </div>
        <div class="setting-r-bd my-setting-info">
            <el-row :gutter="50">
                <el-col :sm="15">
                    <el-form :model="localData" ref="localData" :rules="localDataRules"  label-width="120px">
                        <div class="form-body">
                            <el-form-item label="昵称：" prop="userName">
                                <el-input v-model="localData.userName" placeholder="请输入昵称"></el-input>
                            </el-form-item>
                            <el-form-item label="性别：" prop="sex">
                                <el-select v-model="localData.sex">
                                    <el-option v-for="(value, key, index) in sexMap" :label="value" key
                                               :value=index></el-option>
                                </el-select>
                            </el-form-item>
                            <!--<el-form-item label="个人介绍：">
                                <el-input v-model="localData.description" placeholder="请输入个人介绍"></el-input>
                            </el-form-item>-->
                            <!--<el-form-item label="我喜欢的分类：" prop="hobby">
                                <el-select v-model="localData.hobby" multiple placeholder="请选择">
                                    <el-option v-for="item in categories" :label="item.name" key
                                               :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>-->
                            <el-form-item label="联系电话：" prop="cellphone">
                                <el-input v-model.number="localData.cellphone" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item label="个人简介：" prop="description">
                                <el-input type="textarea" v-model="localData.description" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-col>
                <el-col :sm="5">
                    <h3>头像</h3>
                    <el-upload
                            class="avatar-uploader"
                            action="http://bank.longhaiyan.cn/picture/upload/profile"
                            name="uploadFile"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                    >
                        <!--<img style="width:200px;height: 200px;display: block;" v-if="!avatarId" class="avatar"
                             src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                        <img v-else style="width:200px;height: 200px;display: block;"
                             :src="'http://bbs.chenxubiao.cn/picture/show?id='+avatarId" alt="">-->
                        <img style="width:200px;height: 200px;display: block;" v-if="!localData.avatarId"
                             class="avatar"
                             src="http://bank.longhaiyan.cn/img/userpic.png" alt="">
                        <img v-else style="width:200px;height: 200px;display: block;"
                             :src="'http://bbs.chenxubiao.cn/picture/show?id='+localData.avatarId" alt="">
                    </el-upload>
                    <span>点击图片，更换头像</span>
                </el-col>
            </el-row>
            <div class="form-footer" style="text-align: center">
                <el-button type="primary" @click="onSubmit">确认</el-button>
                <el-button @click="">取消</el-button>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  import * as SettingInfoType from '@/store/setting_info/types'

  export default{
    name: 'settingInfo',
    data(){
      return {
        userInfoData: {
          userId: '',
          avatarId: 1,
          userName: '',
          cellphone: '',
          sex: '',
          description: '',
        },
        sexMap: {
          '0': '未知',
          '1': '男',
          '2': '女'
        },
        localDataRules:{
          userName:{
            required: true,
            message: "请填写昵称",
            trigger: 'blur'
          },
          cellphone:{
            required: true,
//            validator: this.checkPhone,
            message: "请输入正确的联系方式",
            trigger: 'blur'
          },
        }
      }
    },
    computed:{
      ...mapState({
        userBaseInfo:state=>state.myGlobal.userBaseInfo,
        updateInfoErrorMsg:state=>state.settingInfo.updateInfoErrorMsg,
        updateInfoStep:state=>state.settingInfo.updateInfoStep,
      }),
      localData(){
        console.log("localData",this.userBaseInfo)
        return Object.assign(this.userInfoData,this.userBaseInfo)
      }
    },
    methods: {
      ...mapActions({
        infoUpdate:SettingInfoType.A_INFO_UPDATE,
        getUserBseInfo:GlobalType.A_USER_BASE_INFO,
        settingNav: GlobalType.A_SETTING_NAV,

      }),
      handleAvatarSuccess: function (res, file, fileList) {
        if (res.success) {
          this.localData.avatarId = res.vars.data.id
        } else {
          this.$message.error("上传失败")
        }
      },
      onSubmit(){
        let self = this
        this.$refs.localData.validate(value => {
          if (value) {
            self.infoUpdate({
              userName:self.localData.userName,
              cellphone:self.localData.cellphone,
              sex:parseInt(self.localData.sex),
              description:self.localData.description,
              avatarId:parseInt(self.localData.avatarId),
            }).then(() => {
              if (self.updateInfoStep === 'error') {
                self.$message.error(self.updateInfoErrorMsg)
                return
              } else {
                self.getUserBseInfo()
                self.$message({
                  type: 'success',
                  message: '修改成功'
                })
              }
            })
          }
        })
      },
      /*checkPhone(rule, value, callback){
        let self = this
        console.log("value",value)
        console.log("value",parseInt(self.localData.cellphone).toString().length)
        if (parseInt(self.localData.cellphone).toString().length !== 11 || value === '') {
          return callback(new Error('请选输入正确的联系方式'))
        }
        return callback()
      },*/
    },
    mounted(){
      this.settingNav({name:'info'})
    },

  }
</script>
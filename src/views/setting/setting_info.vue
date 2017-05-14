<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">个人信息完善</h4>
        </div>
        <div class="setting-r-bd my-setting-info">
            <el-row :gutter="50">
                <el-col :sm="15">
                    <el-form :model="userInfoData" ref="localData" label-width="120px">
                        <div class="form-body">
                            <el-form-item label="真实姓名：" prop="userName">
                                <el-input v-model="userInfoData.userName" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item label="昵称：" prop="userName">
                                <el-input v-model="userInfoData.userName" placeholder="请输入昵称"></el-input>
                            </el-form-item>
                            <el-form-item label="性别：" prop="sex">
                                <el-select v-model="userInfoData.sex">
                                    <el-option v-for="(value, key, index) in sexMap" :label="value" key
                                               :value=index></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="出生日期：" prop="birthday">
                                <el-date-picker type="date" default-value="userInfoData.birthday"
                                                v-model="userInfoData.birthday" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="我是：">
                                <el-radio-group @change="radioChange" v-model="userInfoData.auth">
                                    <el-radio label=0>学生</el-radio>
                                    <el-radio label=1>老师</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item v-if="parseInt(userInfoData.auth) === 0" label="学院：" prop="school">
                                <el-input
                                        placeholder="请输入学院"
                                        v-model="userInfoData.school">
                                </el-input>
                            </el-form-item>
                            <el-form-item v-if="parseInt(userInfoData.auth) === 0" label="专业：" prop="major">
                                <el-input
                                        placeholder="请输入专业"
                                        v-model="userInfoData.major">
                                </el-input>
                            </el-form-item>
                            <el-form-item v-if="parseInt(userInfoData.auth) === 0" label="班级：" prop="grade">
                                <el-input
                                        placeholder="请输入班级"
                                        v-model="userInfoData.grade">
                                </el-input>
                            </el-form-item>
                            <el-form-item v-if="parseInt(userInfoData.auth) === 0" label="入学年份：" prop="year">
                                <el-input
                                        placeholder="请输入入学年份"
                                        v-model="userInfoData.year">
                                </el-input>
                            </el-form-item>

                            <el-form-item v-if="parseInt(userInfoData.auth) > 0" label="教师号：" prop="tno">
                                <el-input
                                        placeholder="请输入入学年份"
                                        v-model="userInfoData.tno">
                                </el-input>
                            </el-form-item>
                            <el-form-item v-if="parseInt(userInfoData.auth) > 0" label="职务：" prop="job">
                                <el-input
                                        placeholder="请输入入学年份"
                                        v-model="userInfoData.job">
                                </el-input>
                            </el-form-item>




                            <!--<el-form-item label="个人介绍：">
                                <el-input v-model="userInfoData.description" placeholder="请输入个人介绍"></el-input>
                            </el-form-item>-->
                            <!--<el-form-item label="我喜欢的分类：" prop="hobby">
                                <el-select v-model="userInfoData.hobby" multiple placeholder="请选择">
                                    <el-option v-for="item in categories" :label="item.name" key
                                               :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>-->
                            <el-form-item label="联系电话：" prop="cameraNames">
                                <el-input v-model="userInfoData.cameraNames" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item label="特长：" prop="lensNames">
                                <el-input v-model="userInfoData.lensNames" placeholder=""></el-input>
                            </el-form-item>
                            <el-form-item label="个人简介：" prop="description">
                                <el-input type="textarea" v-model="userInfoData.description" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                    </el-form>
                </el-col>
                <el-col :sm="5">
                    <h3>头像</h3>
                    <el-upload
                            class="avatar-uploader"
                            action="http://bbs.chenxubiao.cn/picture/upload/profile"
                            name="uploadFile"
                            :show-file-list="false"
                            :on-progress="handleAvatarProgress"
                            :on-success="handleAvatarSuccess"
                    >
                        <!--<img style="width:200px;height: 200px;display: block;" v-if="!avatarId" class="avatar"
                             src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                        <img v-else style="width:200px;height: 200px;display: block;"
                             :src="'http://bbs.chenxubiao.cn/picture/show?id='+avatarId" alt="">-->
                        <img style="width:200px;height: 200px;display: block;" v-if="!userInfoData.avatarId" class="avatar"
                             src="http://bbs.chenxubiao.cn/img/userpic.png" alt="">
                        <img v-else style="width:200px;height: 200px;display: block;"
                             :src="'http://bbs.chenxubiao.cn/picture/show?id='+userInfoData.avatarId" alt="">
                    </el-upload>
                    <span>点击图片，更换头像</span>
                </el-col>
            </el-row>
            <div class="form-footer" style="text-align: center">
                <el-button type="primary" @click="">确认</el-button>
                <el-button @click="">取消</el-button>
            </div>
        </div>
    </div>
</template>
<script>
  export default{
    name: 'settingInfo',
    data(){
      return {
        userInfoData: {
          userId: '',
          avatarId: '',
          backgroundId: '',
          userName: '',
          email: '',
          cellphone: '',
          sex: '',
          birthday: '',
          description:'',
          desc: '',
          cameraNames: '',
          errorMessage: '无',
          categoryIds: [],
          hobby: [],
          auth:"0",
          school:'',
          major:'',
          year:'',
          grade:'',
          tno:'',
          job:''
        },
        sexMap:{
          '0':'未知',
          '1':'男',
          '2':'女'
        }
      }
    },
    methods:{
      handleAvatarProgress(){

      },
      handleAvatarSuccess(){

      },
      radioChange(){

      }
    }

  }
</script>
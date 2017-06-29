<template>
    <div class="my-complain j-complain">
        <h4 class="my-complain-hd my-title_two">您好，这里是投诉区，请填写以下表单，说明要投诉的事情，我们的工作人员将会在3工作日内与您沟通处理</h4>
        <el-row class="my-complain-bd">
            <el-col :sm="12" style="text-align: center">
                <el-form :model="complainFormData" ref="complainForm" :rules="complainRules" label-width="130px">
                    <el-form-item label="您的真实姓名：" prop="userName">
                        <el-input
                                placeholder="请输入您的真实姓名"
                                v-model="complainFormData.userName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="您的联系方式：" prop="phone">
                        <el-input
                                placeholder="请输入您的电话号码"
                                v-model="complainFormData.phone">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="被投诉用户名：" prop="userName1">
                        <el-input
                                placeholder="请输入被投诉用户名"
                                v-model="complainFormData.userName1">
                        </el-input>
                    </el-form-item>

                    <el-form-item label="详情：" prop="des">
                        <el-input type="textarea"
                                  placeholder="请输入您的投诉原因"
                                  v-model="complainFormData.des"
                        >
                        </el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default{
      name:'complain',
      data(){
        return {
          complainFormData:{
            phone:'',
            userName:'',
            userName1:'',
            des:''
          },
          complainRules:{
            userName: {
              required: true,
              message: '请输入您的真实姓名',
              trigger: 'blur'
            },
            phone: {
              required: true,
              message: '请输入您的电话号码',
              trigger: 'blur'
            },
            userName1: {
              required: true,
              message: '请输入您的用户名',
              trigger: 'blur'
            },
            des: {
              required: true,
              message: '请输入您的投诉原因',
              trigger: 'blur'
            },

          }
        }
      },
      methods:{
        onSubmit(){
          let self = this
          if(window.initState.isLogin){
            self.$refs.complainForm.validate(value => {
              if(value){
                self.$message.success('提交成功，谢谢反馈')
              }
            })
          }else{
            this.$message.waning("请先登录")
          }

        }
      }
    }
</script>
<style>
    .el-table .info-row {
        background: #e2f0e4;
    }
    .el-table .positive-row {
        background: rgba(201, 229, 245, 0.38);
    }
</style>
<template>
    <div class="my-account">
        <h3>账户出入帐记录</h3>
        <p>当前余额：{{accountInfo.balance}}枚时间币</p>
        <el-table
                :data="accountInfo.data"

                style="width: 100%"
                :row-class-name="tableRowClassName"
        >
            <el-table-column
                    align="center"
                    type="index"
                    label="序号"
                    width="80"
            >
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="type"
                    label="类型"
                    width="80"
                    :formatter="typeFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="money"
                    label="时间币(枚)"
                    width="120"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="type"
                    label="类别"
                    width="140"
                    :formatter="introFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="message"
                    label="详情">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="createTime"
                    label="时间"
                    width="180"
            >
            </el-table-column>

        </el-table>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
      name:'Account',
      data(){
        return {
          tableData: [{
            type:2,
            money:10,
            createTime:'2017-05-29 19:09:05',
            message: '上海市普陀区金沙江路 1518 弄'
          }]
        }
      },
      computed:{
        ...mapState({
          accountInfo:state=>state.myGlobal.accountInfo,
        })
      },
      methods:{
        tableRowClassName(row, index) {
          if (row.type === 1 || row.type === 2 ||row.type === 5 ||row.type === 6 ) {
            return 'info-row';
          } else if (row.type === 3 ||row.type === 6) {
            return 'positive-row';
          }
          return '';
        },
        typeFormatter(row){
          switch (row.type) {
            case 1:
            case 2:
            case 5:
            case 6:
              return '增加'
            case 3:
            case 4:
              return '扣除'
            default:
              return '未知'
          }
        },
        introFormatter(row){
          switch (row.type) {
            case 1:
              return '注册奖励'
            case 2:
              return '登录奖励'
            case 3:
              return '需求发布'
            case 4:
              return '公益资助'
            case 5:
              return '需求完成'
            case 6:
              return '取消任务收入'
            default:
              return '未知'
          }
        }
      }
    }
</script>
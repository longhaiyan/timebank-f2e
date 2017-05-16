<template>
    <div class="my-setting-r">
        <div class="setting-r-hd">
            <h4 class="my-title_two">隐私设置</h4>
        </div>
        <div class="setting-r-bd my-setting-private">
            <div class="my-space-Between private-item">
                <p>1. 真实姓名是否可见？</p>
                <el-switch
                        v-model="value1"
                        on-color="#13ce66"
                        off-color="#ff4949"
                        on-value="100"
                        off-value="0"
                        on-text="是"
                        off-text="否"
                >
                </el-switch>
            </div>
            <div class="my-space-Between private-item">
                <p>2. 性别是否可见？</p>
                <el-switch
                        v-model="value2"
                        on-color="#13ce66"
                        off-color="#ff4949"
                        on-value="100"
                        off-value="0"
                        on-text="是"
                        off-text="否"
                >
                </el-switch>
            </div>
            <div class="my-space-Between private-item">
                <p>3. 学院班级是否可见？</p>
                <el-switch
                        v-model="value3"
                        on-color="#13ce66"
                        off-color="#ff4949"
                        on-value="100"
                        off-value="0"
                        on-text="是"
                        off-text="否"
                >
                </el-switch>
            </div>
            <div class="my-space-Between private-item">
                <p>4. 联系电话是否可见？</p>
                <el-switch
                        v-model="value4"
                        on-color="#13ce66"
                        off-color="#ff4949"
                        on-value="100"
                        off-value="0"
                        on-text="是"
                        off-text="否"
                >
                </el-switch>
            </div>

        </div>
    </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import * as GlobalType from '@/store/global/types'
  export default{
    name: 'settingPrivate',
    data(){
      return {
        value1: false,
        value2: false,
        value3: false,
        value4: false,
      }
    },
    methods: {
      ...mapActions({
        settingNav: GlobalType.A_SETTING_NAV,

      }),
    },
    mounted(){
      this.settingNav({name:'private'})
    },

  }
</script>
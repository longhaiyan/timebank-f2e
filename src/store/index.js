/**
 * Created by longhaiyan on 17/3/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import test from './test'
import myGlobal from './global'
import myIndex from './my_index'
import settingConfirm from './setting_confirm'
import settingInfo from './setting_info'
import message from './message'
import zone from './zone'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    test,
    myGlobal,
    myIndex,
    settingConfirm,
    settingInfo,
    message,
    zone
  }
})

export default store


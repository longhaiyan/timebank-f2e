
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
    console.log('setting_info装载用户数据')
    dispatch(GlobalType.A_USER_BASE_INFO).then(()=>{
      console.log('setting_info装载用户数据成功')
    })
  },

  [Type.A_INFO_UPDATE]:({commit,state,dispatch},payload)=>{
    console.log("用户信息完善 payload",payload)
    return apiTools.post(api.update,payload,rsp=>{
      commit(Type.M_UPDATE_INFO_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_UPDATE_INFO_ERROR,msg)
    })
  }

}

export default actions

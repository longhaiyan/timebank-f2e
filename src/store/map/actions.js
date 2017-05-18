
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
    /*console.log('setting_info装载用户数据')
    dispatch(GlobalType.A_USER_BASE_INFO).then(()=>{
      console.log('setting_info装载用户数据成功')
    })*/
  },
  [Type.A_TAG_MAP]:({commit,state,dispatch},payload)=>{
    console.log("装载tag列表",payload)
    return apiTools.req(api.tag,payload,rsp=>{
      commit(Type.M_TAG_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_TAG_ERROR,msg)
    })
  },


}

export default actions

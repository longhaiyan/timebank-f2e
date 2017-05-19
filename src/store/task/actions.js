
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_NEW_START_MAIN]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.newTask,payload,rsp=>{
      commit(Type.M_NEW_SUCCESS,rsp)
    },msg=>{
      console.log("获取最新任务失败",msg)
    })
  },
  [Type.A_HOT_START_MAIN]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.hotTask,payload,rsp=>{
      commit(Type.M_HOT_SUCCESS,rsp)
    },msg=>{
      console.log("获取热门任务失败",msg)
    })
  },

  /*[Type.A_ZONE_INFO]:({commit,state,dispatch},payload)=>{
    console.log("获取当前主页信息",payload)
    return apiTools.req(api.userInfo,payload,rsp=>{
      commit(Type.M_ZONE_INFO_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_ZONE_INFO_ERROR,msg)
    })
  },
  [Type.A_SEND_MSG]:({commit,state,dispatch},payload)=>{
    console.log("发送私信内容",payload)
    return apiTools.post(api.send,payload,rsp=>{
      commit(Type.M_SEND_MSG_SUCCESS,rsp)
    },msg=>{
      commit(Type.M_SEND_MSG_ERROR,msg)
    })
  }*/


}

export default actions


import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
    dispatch(Type.A_ZONE_INFO,{userId:payload.userId})
  },
  [Type.A_ZONE_INFO]:({commit,state,dispatch},payload)=>{
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
  },
  [Type.A_MINE_PUBLISH]:({commit,state,dispatch},payload)=>{
    return apiTools.post(api.info,payload,rsp=>{
      commit(Type.M_MINE_PUBLISH,rsp)
    },msg=>{
      console.log("获取我发布的任务信息失败",msg)
    })
  },
  [Type.A_GET_PUBLISH]:({commit,state,dispatch},payload)=>{
    return apiTools.post(api.info,payload,rsp=>{
      commit(Type.M_GET_PUBLISH,rsp)
    },msg=>{
      console.log("获取我接受的任务信息失败",msg)
    })
  },
  [Type.A_MINE_TOPIC]:({commit,state,dispatch},payload)=>{
    return apiTools.post(api.info,payload,rsp=>{
      commit(Type.M_MINE_TOPIC,rsp)
    },msg=>{
      console.log("获取我发布的帖子信息失败",msg)
    })
  },
  [Type.A_MINE_WARN]:({commit,state,dispatch},payload)=>{
    return apiTools.post(api.info,payload,rsp=>{
      commit(Type.M_MINE_WARN,rsp)
    },msg=>{
      console.log("获取我的举报历史失败",msg)
    })
  },






}

export default actions

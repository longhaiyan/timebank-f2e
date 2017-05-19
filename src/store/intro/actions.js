
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_START_MAIN]: ({commit, state, dispatch}, payload) => {
    console.log("获取任务详情 payload",payload)
    return apiTools.req(api.taskInfo,{taskId:payload.taskId},rsp=>{
      commit(Type.M_INTRO_SUCCESS,rsp)
    },msg=>{
      console.log("获取任务详情失败",msg)
    })
  },
  [Type.A_ACCEPT_TASK]: ({commit, state, dispatch}, payload) => {
    console.log("接受任务 payload",payload)
    return apiTools.req(api.taskInfo,{taskId:payload.taskId},rsp=>{
      commit(Type.M_ACCEPT_SUCCESS,rsp)
    },msg=>{
      console.log("接受任务失败",msg)
      commit(Type.M_ACCEPT_ERROR,msg)
    })
  },
  [Type.A_WARN_TASK]: ({commit, state, dispatch}, payload) => {
    console.log("举报任务 payload",payload)
    return apiTools.req(api.taskInfo,{taskId:payload.taskId},rsp=>{
      commit(Type.M_WARN_SUCCESS,rsp)
    },msg=>{
      console.log("举报任务失败",msg)
      commit(Type.M_WARN_ERROR,msg)
    })
  },


}

export default actions

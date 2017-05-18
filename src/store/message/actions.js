import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as GlobalType from '@/store/global/types'

const actions = {
  [Type.A_PERSONAL_START_MAIN]: ({commit, state, dispatch}, payload) => {
    console.log("装载私信消息内容")
    /*return apiTools.req(api.personalMsg, payload, rsp => {
      commit(Type.A_PERSONAL_GET_SUCCESS, rsp)
    }, msg => {
      commit(Type.A_PERSONAL_GET_ERROR, msg)
    })*/
    dispatch(Type.A_SYSTEM_START_MAIN,payload)
  },
  [Type.A_SYSTEM_START_MAIN]: ({commit, state, dispatch}, payload) => {
    console.log("装载消息内容")
    return apiTools.req(api.massage, payload, rsp => {
      commit(Type.A_LIST_GET_SUCCESS, rsp)
    }, msg => {
      commit(Type.A_LIST_GET_ERROR, msg)
    })
  },
  [Type.A_MESSAGE_READ]: ({commit, state, dispatch}, payload) => {
    console.log("消息已读 payload", payload)
     return apiTools.post(api.update, payload, rsp => {
     commit(Type.M_MESSAGE_READ_SUCCESS, payload)
     }, msg => {
     commit(Type.M_MESSAGE_READ_ERROR, msg)
     })
  },
  [Type.A_USER_MESSAGE]: ({commit, state, dispatch}, payload) => {
    console.log("获取单个用户消息 payload", payload)
     return apiTools.req(api.userMsg, payload, rsp => {
     commit(Type.A_USER_MESSAGE_SUCCESS, rsp)
     }, msg => {
     commit(Type.A_USER_MESSAGE_ERROR, msg)
     })
  },



}

export default actions

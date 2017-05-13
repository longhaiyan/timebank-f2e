/**
 * Created by longhaiyan on 17/3/30.
 */

import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {
  // 登录弹窗
  [Type.A_USER_LOGIN]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_LOGIN_SUBMITTING)

    return apiTools.post(api.login, payload, rsp => {
      console.log("用户登录成功", payload)
      commit(Type.M_LOGIN_ONLOAD, rsp)

    }, msg => {
      commit(Type.M_LOGIN_ERROR, msg)
      console.log("用户登录失败")
    })
  },
  [Type.A_LOGIN_SHOW]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_LOGIN_SHOW)
  },
  [Type.A_LOGIN_HIDE]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_LOGIN_HIDE)
  },

  // 注册弹窗
  [Type.A_USER_REGISTER]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_REGISTER_SUBMITTING)

    return apiTools.post(api.register, payload, rsp => {
      console.log("用户注册成功", payload)
      commit(Type.M_REGISTER_ONLOAD, rsp)

    }, msg => {
      commit(Type.M_REGISTER_ERROR, msg)
      console.log("用户注册失败")
    })
  },
  [Type.A_REGISTER_SHOW]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_REGISTER_SHOW)
  },
  [Type.A_REGISTER_HIDE]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_REGISTER_HIDE)
  },

  [Type.A_GET_CHECK_CODE]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.getCode, payload, rsp => {
      commit(Type.M_GET_CHECK_CODE, rsp)
    }, msg => {
      console.log("获取验证码失败")
    })
  },

  // 发布弹窗
  [Type.A_TASK_PUBLISH]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_PUBLISH_SUBMITTING)

    return apiTools.post(api.publish,payload,rsp => {
      console.log("发布成功",payload)
      commit(Type.M_PUBLISH_ONLOAD,rsp)

    },msg=> {
      commit(Type.M_PUBLISH_ERROR,msg)
      console.log("发布失败")
    })
  },
  [Type.A_PUBLISH_SHOW]:({commit,state,dispatch},payload) =>{
    commit(Type.M_PUBLISH_SHOW)
  },
  [Type.A_PUBLISH_HIDE]:({commit,state,dispatch},payload) =>{
    commit(Type.M_PUBLISH_HIDE)
  },

  // 发帖子弹窗
  [Type.A_TOPIC_PUBLISH]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_TOPIC_PUBLISH_SUBMITTING)

    return apiTools.post(api.topicPublish,payload,rsp => {
      console.log("帖子发布成功",payload)
      commit(Type.M_TOPIC_PUBLISH_ONLOAD,rsp)
    },msg=> {
      commit(Type.M_TOPIC_PUBLISH_ERROR,msg)
      console.log("帖子发布失败")
    })
  },
  [Type.A_TOPIC_PUBLISH_SHOW]:({commit,state,dispatch},payload) =>{
    commit(Type.M_TOPIC_PUBLISH_SHOW)
  },
  [Type.A_TOPIC_PUBLISH_HIDE]:({commit,state,dispatch},payload) =>{
    console.log("A_TOPIC_PUBLISH_HIDE")
    commit(Type.M_TOPIC_PUBLISH_HIDE)
  },

}

export default actions

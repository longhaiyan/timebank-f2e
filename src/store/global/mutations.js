/**
 * Created by longhaiyan on 17/3/30.
 */
import * as Type from './types'

export default {
  // 登录弹窗状态
  /*[Type.M_LOGIN_LOADING]: (state, payload) => {
   console.log('M_LOGIN_LOADING', payload)
   },*/
  [Type.M_LOGIN_SUBMITTING]: (state, payload) => {
    console.log('M_LOGIN_SUBMITTING state', state)
    Object.assign(state, {
      loginDialogStep: 'submitting'
    })
    console.log('state.loginDialogStep', state.loginDialogStep)
  },
  [Type.M_USER_INFO_SUCCESS]: (state, payload) => {
    console.log('payload', payload)
    Object.assign(state, {
      loginDialogStep: 'onload',
      userBaseInfo: payload.data
    })
    console.log('M_LOGIN_ONLOAD 要回显用户信息', state)
  },
  [Type.M_USER_INFO_ERROR]: (state, payload) => {
    console.log('M_LOGIN_ERROR', payload)
    Object.assign(state, {
      loginDialogStep: 'error',
      loginErrorMsg: payload.message
    })
  },
  [Type.M_LOGIN_SHOW]: (state, payload) => {
    console.log('M_LOGIN_SHOW', payload)
    Object.assign(state, {
      loginDialogVisible: true
    })
    console.log('M_LOGIN_SHOW loginDialogVisible', state.loginDialogVisible)
  },
  [Type.M_LOGIN_HIDE]: (state, payload) => {
    console.log('M_LOGIN_HIDE', payload)
    Object.assign(state, {
      loginDialogVisible: false
    })
    console.log('M_LOGIN_HIDE loginDialogVisible', state.loginDialogVisible)
  },

  // 注册弹窗状态
  [Type.M_REGISTER_SUBMITTING]: (state, payload) => {
    console.log('M_REGISTER_SUBMITTING state', state)
    Object.assign(state, {
      registerDialogStep: 'submitting'
    })
    console.log('state.loginDialogStep', state.loginDialogStep)
  },
  [Type.M_REGISTER_ONLOAD]: (state, payload) => {
    console.log('payload', payload)
    Object.assign(state, {
      registerDialogStep: 'onload',
      userBaseInfo:payload.data
      // username: payload.data.userName
    })
    console.log('M_REGISTER_ONLOAD 要回显用户信息', state)
  },
  [Type.M_REGISTER_ERROR]: (state, payload) => {
    console.log('M_REGISTER_ERROR', payload)
    Object.assign(state, {
      registerDialogStep: 'error',
      registerErrorMsg: payload.message
    })
  },
  [Type.M_REGISTER_SHOW]: (state, payload) => {
    console.log('M_REGISTER_SHOW', payload)
    Object.assign(state, {
      registerDialogVisible: true
    })
    console.log('M_REGISTER_SHOW registerDialogVisible', state.registerDialogVisible)
  },
  [Type.M_REGISTER_HIDE]: (state, payload) => {
    console.log('M_REGISTER_HIDE', payload)
    Object.assign(state, {
      registerDialogVisible: false
    })
    console.log('M_REGISTER_HIDE registerDialogVisible', state.registerDialogVisible)
  },

  /*[Type.M_GET_CHECK_CODE]: (state, payload) => {
    console.log("M_GET_CHECK_CODE")
    Object.assign(state, {
      code: payload.code
    })
    console.log('M_GET_CHECK_CODE checkCode', state.code)

  },*/

  // 发布弹窗状态
  [Type.M_PUBLISH_SUBMITTING]: (state, payload) => {
    console.log('M_PUBLISH_SUBMITTING state', state)
    Object.assign(state, {
      publishDialogStep: 'submitting'
    })
    console.log('state.loginDialogStep', state.publishDialogStep)
  },
  [Type.M_PUBLISH_ONLOAD]: (state, payload) => {
    console.log('payload', payload)
    Object.assign(state, {
      publishDialogStep: 'onload'
    })
  },
  [Type.M_PUBLISH_ERROR]: (state, payload) => {
    console.log('M_PUBLISH_ERROR', payload)
    Object.assign(state, {
      publishDialogStep: 'error',
      publishErrorMsg: payload.message
    })
  },
  [Type.M_PUBLISH_SHOW]: (state, payload) =>{
    console.log('M_PUBLISH_SHOW', payload)
    Object.assign(state, {
      publishDialogVisible: true
    })
    console.log('M_PUBLISH_SHOW publishDialogVisible',state.publishDialogVisible)
  },
  [Type.M_PUBLISH_HIDE]: (state, payload) =>{
    console.log('M_PUBLISH_HIDE', payload)
    Object.assign(state, {
      publishDialogVisible: false
    })
    console.log('M_PUBLISH_HIDE publishDialogVisible',state.publishDialogVisible)
  },

  // 帖子发布弹窗状态
  [Type.M_TOPIC_PUBLISH_SUBMITTING]: (state, payload) => {
    console.log('M_TOPIC_PUBLISH_SUBMITTING state', state)
    Object.assign(state, {
      topicPublishDialogStep: 'submitting'
    })
    console.log('state.loginDialogStep', state.topicPublishDialogStep)
  },
  [Type.M_TOPIC_PUBLISH_ONLOAD]: (state, payload) => {
    console.log('payload', payload)
    Object.assign(state, {
      topicPublishDialogStep: 'onload'
    })
  },
  [Type.M_TOPIC_PUBLISH_ERROR]: (state, payload) => {
    console.log('M_TOPIC_PUBLISH_ERROR', payload)
    Object.assign(state, {
      topicPublishDialogStep: 'error',
      topicPublishErrorMsg: payload.message
    })
  },
  [Type.M_TOPIC_PUBLISH_SHOW]: (state, payload) =>{
    console.log('M_TOPIC_PUBLISH_SHOW', payload)
    Object.assign(state, {
      topicPublishDialogVisible: true
    })
    console.log('M_TOPIC_PUBLISH_SHOW publishDialogVisible',state.topicPublishDialogVisible)
  },
  [Type.M_TOPIC_PUBLISH_HIDE]: (state, payload) =>{
    console.log('M_TOPIC_PUBLISH_HIDE', payload)
    Object.assign(state, {
      topicPublishDialogVisible: false
    })
    console.log('M_TOPIC_PUBLISH_HIDE publishDialogVisible',state.topicPublishDialogVisible)
  },
  [Type.M_SETTING_NAV]:(state, payload) =>{
    Object.assign(state, {
      settingNav: payload.name
    })
  },
  [Type.M_MESSAGE_NAV]:(state, payload) =>{
    Object.assign(state, {
      messageNav: payload.name
    })
  },
  [Type.M_LIVE_MESSAGE_COUNT]:(state,payload)=>{

    Object.assign(state,{
      unreadMsg:payload.data
    })
  }

}
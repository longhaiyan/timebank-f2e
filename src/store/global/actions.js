/**
 * Created by longhaiyan on 17/3/30.
 */

import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
import * as MapType from '@/store/map/types'

const actions = {
  // 登录弹窗
  [Type.A_USER_LOGIN]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_LOGIN_SUBMITTING)

    return apiTools.post(api.login, payload, rsp => {
      console.log("用户登录成功", payload)
      commit(Type.M_USER_INFO_SUCCESS, rsp)

    }, msg => {
      commit(Type.M_USER_INFO_ERROR, msg)
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

  /*[Type.A_GET_CHECK_CODE]: ({commit, state, dispatch}, payload) => {
   return apiTools.req(api.getCode, payload, rsp => {
   commit(Type.M_GET_CHECK_CODE, rsp)
   }, msg => {
   console.log("获取验证码失败")
   })
   },*/

  // 发布弹窗
  [Type.A_TASK_PUBLISH]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_PUBLISH_SUBMITTING)

    console.log("发布 payload", payload)
    return apiTools.post(api.publish, payload, rsp => {
      commit(Type.M_PUBLISH_ONLOAD, rsp)
    }, msg => {
      commit(Type.M_PUBLISH_ERROR, msg)
      console.log("发布失败")
    })
  },
  [Type.A_PUBLISH_SHOW]: ({commit, state, dispatch}, payload) => {
    console.log("发布任务前先装载标签数据")
    dispatch(MapType.A_TAG_MAP).then(()=>{
      commit(Type.M_PUBLISH_SHOW)
    })
  },
  [Type.A_PUBLISH_HIDE]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_PUBLISH_HIDE)
  },

  // 发帖子弹窗
  [Type.A_TOPIC_PUBLISH]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_TOPIC_PUBLISH_SUBMITTING)

    return apiTools.post(api.topicPublish, payload, rsp => {
      console.log("帖子发布成功", payload)
      commit(Type.M_TOPIC_PUBLISH_ONLOAD, rsp)
    }, msg => {
      commit(Type.M_TOPIC_PUBLISH_ERROR, msg)
      console.log("帖子发布失败")
    })
  },
  [Type.A_TOPIC_PUBLISH_SHOW]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_TOPIC_PUBLISH_SHOW)
  },
  [Type.A_TOPIC_PUBLISH_HIDE]: ({commit, state, dispatch}, payload) => {
    console.log("A_TOPIC_PUBLISH_HIDE")
    commit(Type.M_TOPIC_PUBLISH_HIDE)
  },

  // 自动登录
  [Type.A_USER_BASE_INFO]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.baseInfo, payload, rsp => {
      console.log("获取用户基本信息成功")
      commit(Type.M_USER_INFO_SUCCESS, rsp)
    }, msg => {
      console.log('获取用户基本信息失败', msg)
    })
  },

  // 个人设置页的导航条状态配置
  [Type.A_SETTING_NAV]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_SETTING_NAV, payload)
  },
  // 消息导航条
  [Type.A_MESSAGE_NAV]: ({commit, state, dispatch}, payload) => {
    commit(Type.M_MESSAGE_NAV, payload)
  },

  [Type.A_LIVE_OPEN]: ({commit, state, dispatch}, payload) => {
    console.log('开启心跳')
    dispatch(Type.A_LIVE_MESSAGE_COUNT)
    /*setInterval(function() {
      console.log("dong")
      dispatch(Type.A_LIVE_MESSAGE_COUNT)
    }, 3000)*/
  },
  [Type.A_LIVE_MESSAGE_COUNT]: ({commit, state, dispatch}, payload) => {
    return apiTools.req(api.unread, payload, rsp => {
      console.log("A获取未读消息数成功", rsp)
      if(!(rsp.data&&parseInt(rsp.data) === parseInt(state.unreadMsg))){
        console.log("有新增未读新消息")
        commit(Type.M_LIVE_MESSAGE_COUNT, rsp)
      }
    }, msg => {
      console.log('A获取未读消息数成功', msg)
    })
  }

}

export default actions

/**
 * Created by longhaiyan on 17/3/30.
 */

import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'


const actions ={
    [Type.A_USER_LOGIN]: ({commit, state, dispatch}, payload) => {
        commit(Type.M_LOGIN_SUBMITTING)

        return apiTools.post(api.login,payload,rsp => {
            console.log("用户登录成功",payload)
            commit(Type.M_LOGIN_ONLOAD,rsp)

        },msg=> {
            commit(Type.M_LOGIN_ERROR,msg)
            console.log("用户登录失败")
        })
    },
    [Type.A_LOGIN_SHOW]:({commit, state, dispatch}, payload) =>{
        commit(Type.M_LOGIN_SHOW)
    },
    [Type.A_REGISTER_SHOW]:({commit,state,dispatch},payload) =>{
        commit(Type.M_REDISTER_SHOW)
    },
    [Type.A_LOGIN_HIDE]:({commit, state, dispatch}, payload) =>{
        commit(Type.M_LOGIN_HIDE)
    },
    [Type.A_GET_CHECK_CODE]: ({commit,state,dispatch}, payload) =>{
        return apiTools.req(api.getCode, payload, rsp => {
            commit(Type.M_GET_CHECK_CODE, rsp)
        }, msg => {
            console.log("获取验证码失败")
        })
    }
}

export default actions

/**
 * Created by longhaiyan on 17/3/30.
 */
import * as Type from './types'

export default {
    [Type.M_LOGIN_LOADING]: (state, payload) => {
        console.log('M_LOGIN_LOADING', payload)
    },
    [Type.M_LOGIN_SUBMITTING]: (state, payload) => {
        console.log('M_LOGIN_SUBMITTING state', state)
        Object.assign(state, {
            dialogStep: 'submitting'
        })
        console.log('state.dialogStep', state.dialogStep)
    },
    [Type.M_LOGIN_ONLOAD]: (state, payload) => {
        console.log('M_LOGIN_ONLOAD 要回显用户信息', payload)
        Object.assign(state, {
            dialogStep: 'onload',
            username: payload.userName
        })
    },
    [Type.M_LOGIN_ERROR]: (state, payload) => {
        console.log('M_LOGIN_ERROR', payload)
        Object.assign(state, {
            dialogStep: 'error',
            loginErrorMsg: payload.message
        })
    },
    [Type.M_LOGIN_SHOW]: (state, payload) =>{
        console.log('M_LOGIN_SHOW', payload)
        Object.assign(state, {
            loginDialogVisible: true
        })
        console.log('M_LOGIN_SHOW loginDialogVisible',state.loginDialogVisible)
    },
    [Type.M_LOGIN_HIDE]: (state, payload) =>{
        console.log('M_LOGIN_HIDE', payload)
        Object.assign(state, {
            loginDialogVisible: false
        })
        console.log('M_LOGIN_HIDE loginDialogVisible',state.loginDialogVisible)
    },
    [Type.M_GET_CHECK_CODE]:(state,payload) => {
        console.log("M_GET_CHECK_CODE")
        Object.assign(state, {
            code: payload.code
        })
        console.log('M_GET_CHECK_CODE checkCode',state.code)

    }

}
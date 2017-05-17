
import * as Type from './types'

export default {
  [Type.M_MESSAGE_READ_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      readMsgStep:'success'
    })
  },
  [Type.M_MESSAGE_READ_ERROR]:(state,payload)=>{
    Object.assign(state,{
      readMsgStep:'error',
      // updateInfoErrorMsg:payload
    })
    console.log("消息已读失败 state",payload)

  },
  /*[Type.A_PERSONAL_GET_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      personalStep:'success',
      personalList:payload.data
    })
  },
  [Type.A_PERSONAL_GET_ERROR]:(state,payload)=>{
    Object.assign(state,{
      personalStep:'error',
      personalError:payload.message
    })
  },
  [Type.A_SYSTEM_GET_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      systemStep:'success',
      systemList:payload.data
    })
  },
  [Type.A_SYSTEM_GET_ERROR]:(state,payload)=>{
    Object.assign(state,{
      systemStep:'error',
      systemError:payload.message
    })
  },*/
  [Type.A_LIST_GET_SUCCESS]: (state, payload) => {
    Object.assign(state, {
      msgStep: 'success',
      msgList: payload
    })
    console.log("ok")
  },
  [Type.A_LIST_GET_ERROR]: (state, payload) => {
    Object.assign(state, {
      msgStep: 'error',
      msgError: payload.message
    })
  },


}

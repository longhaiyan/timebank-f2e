import * as Type from './types'

export default {
  [Type.M_MESSAGE_READ_SUCCESS]: (state, payload) => {
    console.log("M_MESSAGE_READ_SUCCESS payload", payload)
    let target = null
    if(state.msgList&&state.msgList.userMsgUnlook){
      target = state.msgList.userMsgUnlook.filter((item,index) => {
        // 找到匹配id的数据
        console.log('index',index)
        if (item.user&&item.user.userId === payload.userId) {
          state.msgList.userMsgUnlookCount -= state.msgList.userMsgUnlook[index].msgCount
          state.msgList.userMsgUnlook[index].msgCount = 0
          return true
        }
      })
    }
    console.log("fdsfsf",state)
    // state.msgList.userMsgUnlook
    console.log('target',target)
    Object.assign(state, {
      readMsgStep: 'success',
    })
  },
  [Type.M_MESSAGE_READ_ERROR]: (state, payload) => {
    Object.assign(state, {
      readMsgStep: 'error',
      // updateInfoErrorMsg:payload
    })
    console.log("消息已读失败 state", payload)

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
    console.log("ok state", state)
  },
  [Type.A_LIST_GET_ERROR]: (state, payload) => {
    Object.assign(state, {
      msgStep: 'error',
      msgError: payload.message
    })
  },
  [Type.A_USER_MESSAGE_SUCCESS]: (state, payload) => {
    Object.assign(state, {
      userStep: 'success',
      userMsg: payload
    })
  },
  [Type.A_USER_MESSAGE_ERROR]: (state, payload) => {
    Object.assign(state, {
      userStep: 'error',
      userError: payload.message
    })
  },

}

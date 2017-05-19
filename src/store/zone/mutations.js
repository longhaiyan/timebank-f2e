
import * as Type from './types'

export default {
  [Type.M_ZONE_INFO_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      infoStep:'success',
      homeInfo:payload.data
    })
    console.log("获取当前主页信息成功 state",state)
  },
  [Type.M_ZONE_INFO_ERROR]:(state,payload)=>{
    Object.assign(state,{
      infoStep:'error',
      infoErrorMsg:payload.message
    })
  },
  [Type.M_SEND_MSG_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      sendStep:'success',
    })
  },
  [Type.M_SEND_MSG_ERROR]:(state,payload)=>{
    Object.assign(state,{
      sendStep:'error',
      sendErrorMsg:payload.message
    })
  },
  [Type.M_MINE_PUBLISH]:(state,payload)=>{
    Object.assign(state,{
      mineTask:payload.data
    })
  },
  [Type.M_GET_PUBLISH]:(state,payload)=>{
    Object.assign(state,{
      getTask:payload.data
    })
  },
  [Type.M_MINE_TOPIC]:(state,payload)=>{
    Object.assign(state,{
      mineTopic:payload.data
    })
  },
  [Type.M_MINE_WARN]:(state,payload)=>{
    Object.assign(state,{
      mainWarn:payload.data
    })
  },




}

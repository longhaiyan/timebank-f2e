
import * as Type from './types'

export default {
  [Type.M_ZONE_INFO_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      infoStep:'success',
      homeInfo:payload.data
    })
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



}

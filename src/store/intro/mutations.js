
import * as Type from './types'

export default {
  [Type.M_INTRO_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      taskInfo:payload.data
    })
    console.log("获取task详情 state",state)
  },
  [Type.M_ACCEPT_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      acceptStep:'success'
    })
  },
  [Type.M_ACCEPT_ERROR]:(state,payload)=>{
    Object.assign(state,{
      acceptStep:'error',
      acceptErrorMsg:payload.message
    })
  },
  [Type.M_WARN_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      warnStep:'success'
    })
  },
  [Type.M_WARN_ERROR]:(state,payload)=>{
    Object.assign(state,{
      warnStep:'error',
      warnErrorMsg:payload.message
    })
  },


}


import * as Type from './types'

export default {
  [Type.M_TAG_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      tagStep:'success',
      tagList:payload.data
    })
    console.log("获取tag state",state)
  },
  [Type.M_TAG_ERROR]:(state,payload)=>{
    Object.assign(state,{
      tagStep:'error',
      tagErrorMsg:payload.message
    })
    console.log("获取tag失败 state",state)

  },
}

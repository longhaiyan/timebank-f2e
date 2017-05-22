
import * as Type from './types'

export default {
  [Type.M_NEW_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      newTaskInfo:payload
    })
  },
  [Type.M_NEW_ERROR]:(state,payload)=>{
    Object.assign(state,{
      newTaskError:payload.message
    })
  },
  [Type.M_HOT_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      hotTaskInfo:payload
    })
  },
}


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
  [Type.M_RECEIVE_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      receiveTaskInfo:payload
    })
  },
  [Type.M_RECEIVE_ERROR]:(state,payload)=>{
    Object.assign(state,{
      receiveTaskError:payload.message
    })
  },
  [Type.M_FINISH_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      finishTaskInfo:payload
    })
  },
  [Type.M_FINISH_ERROR]:(state,payload)=>{
    Object.assign(state,{
      finishTaskError:payload.message
    })
  },

}

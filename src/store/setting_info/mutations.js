
import * as Type from './types'

export default {
  [Type.M_UPDATE_INFO_SUCCESS]:(state,payload)=>{
    Object.assign(state,{
      updateInfoStep:'success'
    })
  },
  [Type.M_UPDATE_INFO_ERROR]:(state,payload)=>{
    console.log("完善用户信息失败 payload",payload)
    Object.assign(state,{
      updateInfoStep:'error',
      updateInfoErrorMsg:payload
    })
    console.log("完善用户信息失败 state",state)

  },

}

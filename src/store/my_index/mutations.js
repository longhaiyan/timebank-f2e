/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'


export  default {
  [Type.M_START_RECEIVED]: (state, payload) => {
    Object.assign(state, {
      userList:payload
    })
    console.log("获取首页数据成功",state)
  },
}
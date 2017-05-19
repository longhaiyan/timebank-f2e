/**
 * Created by longhaiyan on 17/4/8.
 */
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'
const actions = {
  [Type.A_START_MAIN]: ({commit,state, dispatch},payload) => {
    return apiTools.req(api.index_msg,payload, rsp=>{
      commit(Type.M_START_RECEIVED, rsp)
    })
  },


}
export default actions

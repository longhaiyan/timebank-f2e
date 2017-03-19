
import * as Type from './types'
import api from './api'
import * as apiTools from '../../utils/api'

const actions = {

  [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, data) => {
    commit(Type.M_LIST_LOADING)
    console.log('A_LIST_REQUEST');
    apiTools.req(api.list, data, rsp => {
      // rsp = {id:10,name:"hello"}
      console.log('成功',rsp);
    }, msg => {
      console.log('失败',msg)
    })
  }

}

export default actions

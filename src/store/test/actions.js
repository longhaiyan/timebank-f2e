
import * as Type from './types'
// import api from './api'
// import * as apiTools from 'utils/api'

const actions = {

  [Type.A_LIST_REQUEST]: ({commit, state, dispatch}, data) => {
    commit(Type.M_LIST_LOADING)
    console.log('A_LIST_REQUEST');
  }

}

export default actions

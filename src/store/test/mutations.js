
import * as Type from './types'

export default {
  [Type.M_LIST_LOADING]: (state, payload) => {
    Object.assign(state, {
      itemsStep: 'loading',
      items: []
    })
  },
  [Type.M_LIST_RECEIVED]: (state, payload) => {
    Object.assign(state, payload, {
      itemsStep: 'onload'
    })
  },
  [Type.M_LIST_ERROR]: (state, payload) => {
    Object.assign(state, {
      itemsStep: 'error',
      errorMessage: payload.errorMessage
    })
  }
}

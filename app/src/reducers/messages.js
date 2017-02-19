import * as types from '../actions/action-types'

const initalState = {
  messages: undefined,
  loaded: false
}

const messages = (state = initalState, action = {}) => {
  switch(action.type) {
    case types.RECIVE_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
        loaded: true
      }
    default:
      return state
  }
}

export default messages

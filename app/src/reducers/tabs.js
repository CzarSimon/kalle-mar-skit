import * as types from '../actions/action-types'

const initalState = {
  selected: 'chart'
}

const tabs = (state = initalState, action = {}) => {
  switch(action.type) {
    case types.SELECT_TAB:
      return {
        ...state,
        selected: action.payload.tab
      }
    default:
      return state
  }
}

export default tabs

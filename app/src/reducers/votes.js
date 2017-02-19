import * as types from '../actions/action-types'

const initalState = {
  results: undefined,
  usersVote: undefined,
  loaded: false
}

const votes = (state = initalState, action = {}) => {
  switch(action.type) {
    case types.POST_VOTE:
      return {
        ...state,
        usersVote: action.payload.vote
      }
    case types.RECIVE_RESULTS:
      return {
        ...state,
        results: action.payload.results,
        loaded: true
      }
    default:
      return state
  }
}

export default votes

import * as types from './action-types'
import { createAction } from 'redux-actions'
import { createHttpObject } from '../methods/helper-methods'


export const reciveResults = createAction(
  types.RECIVE_RESULTS, results => ({ results })
)


export const fetchResults = () => {
  return dispatch => {
    return fetch('http://kallemårskit.org/vote-count')
    .then(res => res.json())
    .then(res => dispatch(reciveResults(res)))
  }
}


export const postVote = vote => {
  const httpObject = createHttpObject('POST', { vote })
  return dispatch => {
    return fetch('http://kallemårskit.org/vote', httpObject)
    .then(res => res.json())
    .then(res => {
      dispatch(fetchResults())
    })
  }
}

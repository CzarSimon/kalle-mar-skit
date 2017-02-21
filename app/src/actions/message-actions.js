import * as types from './action-types'
import { createAction } from 'redux-actions'


export const reciveMessages = createAction(
  types.RECIVE_MESSAGES, messages => ({ messages })
)


export const fetchMessages = () => {
  return dispatch => {
    return fetch('http://kallemårskit.org/messages')
    .then(res => res.json())
    .then(messages => dispatch(reciveMessages(messages)))
  }
}

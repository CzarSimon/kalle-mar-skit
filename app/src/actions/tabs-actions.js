import * as types from './action-types'
import { createAction } from 'redux-actions'

export const selectTab = createAction(types.SELECT_TAB, tab => ({ tab }))

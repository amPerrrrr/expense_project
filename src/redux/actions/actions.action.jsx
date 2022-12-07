import { createAction } from 'redux-actions'
import * as types from './types.action'

export const getAllCategories = createAction(types.GET_ALL_CATEGORIES_REQUEST)

import { all } from 'redux-saga/effects'

import GetAllCategories from './GetAllCategories.saga'

export default function* rootSaga() {
    yield all([
        GetAllCategories()
    ])
  }
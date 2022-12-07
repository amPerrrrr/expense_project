import { put, takeEvery, call } from "redux-saga/effects";
import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILED,
  CLEAR_ALL_CATEGORIES,
} from "../actions";
import * as api from "../../Service/Api_Service";
import axios from "axios";
import { getIP_TTA } from '../../Service/Ip'

const checkParameter = (params, data) => {
  if (data) {
    return params + data;
  } else {
    return "";
  }
};

function categoriesFetch(payload) {
  const url = `${getIP_TTA()}api/expense_catagorie/?page_number=${payload.page}&page_size=${payload.limit}`;
  const getExpenseCategories = api.GET_DYNAMIC_URL(url);
  return axios(getExpenseCategories)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

function* handleGetCategories({ payload }) {
  if (payload.clear) {
    yield put({
      type: CLEAR_ALL_CATEGORIES,
    });
  } else {
    try {
      const responseCategories = yield call(categoriesFetch, payload);
      yield put({
        type: GET_ALL_CATEGORIES_SUCCESS,
        categories: responseCategories,
        // categories: responseCategories.items,
        totalCount: responseCategories.total_count,
        totalPage: responseCategories.total_page,
      });
    } catch (err) {
      yield put({
        type: GET_ALL_CATEGORIES_FAILED,
        error: err.response.data.detail,
        statusCode: err.response.status,
      });
    }
  }
}

function* Categories() {
  yield takeEvery(GET_ALL_CATEGORIES_REQUEST, handleGetCategories);
}

export default Categories;

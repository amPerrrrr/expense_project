import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { apiMiddleware } from "redux-api-middleware";
import rootSaga from "../saga";
import reducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const middleWare =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(apiMiddleware, sagaMiddleware)
    : composeWithDevTools(applyMiddleware(apiMiddleware, sagaMiddleware));

const store = createStore(reducer, middleWare);
export default store;

sagaMiddleware.run(rootSaga);

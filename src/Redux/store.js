import { createStore, applyMiddleware } from "redux";
// import { compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./Reducers/index.js";
import rootSaga from "./Sagas/index.js";

const sagaMiddleware = createSagaMiddleware();
// const store = 
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window.devToolsExtension && window.devToolsExtension()
//   )(createStore)(rootReducer)

const store= createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;

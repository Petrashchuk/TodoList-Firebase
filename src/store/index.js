import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./sagas";
import reducers from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(RootSaga)
export default store
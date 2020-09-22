import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {hot} from 'react-hot-loader';
import {createBrowserHistory} from 'history';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'sagas';
import reducers from "./reducers";

const appCombineReducers = combineReducers({
  ...reducers,
  router: routerReducer
});

hot(module)(appCombineReducers);
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory({basename: '/'});
const historyMiddleware = routerMiddleware(history);
const store = createStore(
  appCombineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, historyMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
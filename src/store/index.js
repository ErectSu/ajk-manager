import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app';
import { routerMiddleware } from 'react-router-redux';

let createHistory = require('history').createHashHistory;
let history = createHistory();   // 初始化history
let routerWare = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, routerWare)
));

export default store;

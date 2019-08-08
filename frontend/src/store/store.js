import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from '../reducers/index.js';
import { createBrowserHistory } from "history";


const defaultState = {};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;


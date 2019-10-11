import {createStore, compose, applyMiddleware} from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from '../reducers/index.js';
import {createBrowserHistory} from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import data from "./data"


const defaultState = data

const store = createStore(rootReducer, defaultState,composeWithDevTools(applyMiddleware()),);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;


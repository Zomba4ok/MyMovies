import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import MainPageComponent from "./components/mainPage/mainPageComponent"
import './index.css';
import store, { history } from "./store/store";
import { Provider } from "react-redux";
import {Router, Route} from "react-router";
import BaseFrameComponent from "./components/baseFrame/baseFrameComponent"


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
  document.getElementById('root')
);

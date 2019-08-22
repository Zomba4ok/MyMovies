import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from '../reducers/index.js';
import { createBrowserHistory } from "history";
import img1 from "../img1.jpg";
import img from "../img.jpg";


const defaultState = {
    mainPageReducer: {
        news: [],
        films: [
            {poster: img1},
            {poster: img},
            {poster: img},
            {poster: img1},
            {poster: img},
            {poster: img1},
            {poster: img},
            {poster: img1},
            {poster: img},
            {poster: img1}],
        searching: {
            categories: [
                {name: "ggggg"},
                {name: "gggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},],
            genres: [
                {name: "gggasgg"},
                {name: "gggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "gggafgg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "gggggasf"},
                {name: "ggggg"},
                {name: "ggggg"},],
            producers: [
                {name: "ggggg"},
                {name: "gggg"},
                {name: "gggghgsgg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggfghdfggg"},
                {name: "ggggg"},
                {name: "ggfghggg"},
                {name: "ggggg"},
                {name: "ggggg"},
                {name: "ggggg"},],
        }
    },
    baseFrameReducer: {
        user: {
            isAuthenticated: true,
            username: "Zomba4ok",
            avatar: img
        }
    }
}


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;


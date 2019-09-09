import {createStore, compose, applyMiddleware} from "redux";
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from '../reducers/index.js';
import {createBrowserHistory} from "history";
import img1 from "../img1.jpg";
import img from "../img.jpg";
import arrowLeftNormal from "../arrowLeftNormal.png"
import arrowRightNormal from "../arrowRightNormal.png"


const defaultState = {
    slideMenuReducer: {
        showProp: true
    },
    filmPageReducer: {
        film: {
            name: 'Inception',
            poster: img,
            description: 'gadjsgdas;ljd;kasgj',
            age_rate: '21',
            average_rate: 4.2,
            producer: 'gdsgasdgs',
            duration: 152,
            premiere: 12 - 12 - 2021,
            film_file: img1,
            film_company: 'asfasf',
            images: [
                {image_file: img1},
                {image_file: img},
                {image_file: img},
                {image_file: img1},
                {image_file: img},
                {image_file: img},
                {image_file: img1},
                {image_file: img},
                {image_file: img1}]
        }
    },
    mainPageReducer: {
        slideButtons: {left: arrowLeftNormal, right: arrowRightNormal},
        searchDivStyle: {display: "none"},
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
        isUserMenuOpen : false,
        user: {
            isAuthenticated: true,
            username: "Zomba4ok",
            avatar: img,
            notifications: 999
        }
    },
    newsReducer: {
        news: [
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            },
            {
                title: 'sgasd',
                mainImage: img1,
                images: [img1, img, img],
                description: 'afkjdhsfkjdhas asdkjfh aksjh dkshfaf das fkahkl hf asdfafsfa',
                context: 'asfas'
            }
        ]
    }
}


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;


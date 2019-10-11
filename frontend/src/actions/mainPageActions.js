import {
    SHOW_HIDDEN_SLIDE,
    HIDE_HIDDEN_SLIDE,
    SHOW_NEWS_LIST,
    HIDE_NEWS_LIST
} from "./actionTypes";

export const showHiddenSlide = (film_id) => ({
    type: SHOW_HIDDEN_SLIDE,
    payload: {
        film_id: film_id,
        is_hide: false
    }
})

export const hideHiddenSlide = (film_id) => ({
    type: HIDE_HIDDEN_SLIDE,
    payload: {
        film_id: film_id,
        is_hide: true
    }
})

export const showNewsList = (newsList) => ({
    type: SHOW_NEWS_LIST,
    payload: {
        news_list: newsList,
        show_news_list: true
    }
})

export const hideNewsList = () => ({
    type: HIDE_NEWS_LIST,
    payload: false
})


import {
    SLIDE_LEFT,
    SLIDE_RIGHT,
    SHOW_NEWS_LIST,
    HIDE_NEWS_LIST,
    SHOW_HIDDEN_SLIDE,
    HIDE_HIDDEN_SLIDE,
} from "../actions/actionTypes";
import React from "react";

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEWS_LIST: {
            return {
                ...state,
                news: {
                    ...state.news,
                    shown_news_group: {
                        news_list: action.payload.news_list,
                        show_news_list: action.payload.show_news_list
                    }

                }
            }
        }
        case HIDE_NEWS_LIST: {
            return {
                ...state,
                news: {
                    ...state.news,
                    shown_news_group: {
                        show_news_list: action.payload
                    }
                }
            }
        }
        case SHOW_HIDDEN_SLIDE: {
            return {
                ...state,
                animation_attributes: {
                    ...state.animation_attributes,
                    slide_menu: Array.from(Array(8), (_, x) => (
                        (x == action.film_id) ? {
                                film_id: x,
                                isHide: false
                            } :
                            {
                                film_id: x,
                                isHide: true
                            }
                    ))
                }
            }
        }
        case HIDE_HIDDEN_SLIDE: {
            return {
                ...state,
                animation_attributes: {
                    ...state.animation_attributes,
                    slide_menu: Array.from(Array(8), (_, x) => (
                        {
                            film_id: x,
                            isHide: true
                        }
                    ))
                }
            }
        }
        default: {
            return state
        }
    }
}
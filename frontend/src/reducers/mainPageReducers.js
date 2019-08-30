import {
    CHANGE_SEARCH_DIV_STYLE,
    SLIDE_LEFT,
    SLIDE_RIGHT
} from "../actions/actionTypes";
import React from "react";

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case SLIDE_LEFT: {
            return {
                ...state,
                films: action.payload,
            }
        }
        case SLIDE_RIGHT: {
            return {
                ...state,
                films: action.payload
            }
        }
        case CHANGE_SEARCH_DIV_STYLE: {
            return {
                ...state,
                searchDivStyle: action.payload
            }
        }
        default: {
            return state
        }
    }
}
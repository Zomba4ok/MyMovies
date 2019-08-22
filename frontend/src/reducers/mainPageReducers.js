import { SLIDE_LEFT, SLIDE_RIGHT } from "../actions/actionTypes";
import img1 from "../img1.jpg";
import img from "../img.jpg";
import MainPageComponent from "../components/mainPage/mainPageComponent";
import React from "react";

const initialState = {

}

export default (state=initialState, action) => {
    switch (action.type) {
        case SLIDE_LEFT: {
            return {
                ...state,
                films: action.payload
            }
        }
        case SLIDE_RIGHT: {
            return {
                ...state,
                films: action.payload
            }
        }
        default: {
            return state
        }
    }
}
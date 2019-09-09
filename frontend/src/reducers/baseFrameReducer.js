import React from "react";
import {OPEN_MODAL, CLOSE_MODAL} from "../actions/actionTypes";


const initialState = {}

export default (state=initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return {
                ...state,
                isUserMenuOpen: action.payload
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isUserMenuOpen: action.payload
            }
        }
        default: {
            return state
        }
    }

}
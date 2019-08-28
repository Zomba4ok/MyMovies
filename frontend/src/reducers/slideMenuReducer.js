import React from "react";
import {REVERT_SHOW_PROP} from "../actions/actionTypes";

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case REVERT_SHOW_PROP: {
            return {
                ...state,
                 showProp: action.payload
            }
        }

        default: {
            return state
        }
    }
}
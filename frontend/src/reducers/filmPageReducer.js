import React from "react";
import { RATE_FILM, OPEN_MODAL } from "../actions/actionTypes";

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case RATE_FILM: {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}
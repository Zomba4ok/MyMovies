import React from "react";
import {RATE_FILM, OPEN_MODAL, CLOSE_MODAL} from "./actionTypes";


export const rateFilm = (id, rating) => ({
    type: RATE_FILM,
    payload: false
})

export const openModal = () => ({
    type: OPEN_MODAL,
    payload: true
})

export const closeModal = () => ({

})
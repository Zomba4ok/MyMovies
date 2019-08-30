import React from "react";
import {RATE_FILM, OPEN_MODAL, CLOSE_MODAL} from "./actionTypes";


export const rateFilm = (id, rating) => ({
    type: RATE_FILM,
    payload: rating
})

export const openModal = (item) => ({
    type: OPEN_MODAL,
    payload: item
})

export const closeModal = () => ({

})
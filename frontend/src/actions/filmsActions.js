import React from "react";
import {RATE_FILM, OPEN_MODAL, CLOSE_MODAL} from "./actionTypes";


export const rateFilm = (id, rating) => ({
    type: RATE_FILM,
    payload: rating
})

export const openModal = (image) => ({
    type: OPEN_MODAL,
    payload: image
})

export const closeModal = () => ({

})
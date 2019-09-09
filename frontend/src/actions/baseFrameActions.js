import React from "react";
import {OPEN_MODAL, CLOSE_MODAL} from "./actionTypes";


export const openModal = () => ({
    type: OPEN_MODAL,
    payload: true
})

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: false
})
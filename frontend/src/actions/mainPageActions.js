import { SLIDE_LEFT, SLIDE_RIGHT } from "./actionTypes";

export const slideLeft = (topFilms) => ({
    type: SLIDE_LEFT,
    topFilms: topFilms.concat(topFilms.slice(0,1))
})

export const slideRight = (topFilms) => ({
    type : SLIDE_RIGHT,
    topFilms: topFilms.concat(topFilms.slice(0,topFilms.length))
})
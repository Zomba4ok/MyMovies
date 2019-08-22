import { SLIDE_LEFT, SLIDE_RIGHT } from "./actionTypes";

export const slideLeft = (films) => ({
    type: SLIDE_LEFT,
    payload: films.concat(films.splice(0,1))

})

export const slideRight = (films) => ({
    type : SLIDE_RIGHT,
    payload: films.concat(films.splice(0, films.length-1))
})
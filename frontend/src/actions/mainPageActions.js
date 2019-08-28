import {SLIDE_LEFT, SLIDE_RIGHT, CHANGE_SEARCH_DIV_STYLE, REVERT_SHOW_PROP} from "./actionTypes";

export const slideLeft = (films) => ({
    type: SLIDE_LEFT,
    payload: films.concat(films.splice(0, 1))

})

export const slideRight = (films) => ({
    type: SLIDE_RIGHT,
    payload: films.concat(films.splice(0, films.length - 1))
})

export const changeSearchDivStyle = (searchDivStyle) => ({
    type: CHANGE_SEARCH_DIV_STYLE,
    payload: (searchDivStyle.display == "none") ? {...searchDivStyle, display: "flex"} : {...searchDivStyle, display: "none"}
})
export const revertShowProp = (showProp) => ({
    type: REVERT_SHOW_PROP,
    payload: !showProp
})


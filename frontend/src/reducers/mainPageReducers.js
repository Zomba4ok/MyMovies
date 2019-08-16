import { SLIDE_LEFT, SLIDE_RIGHT } from "../actions/actionTypes";

export default (state, action) => {
    switch (action.type) {
        case SLIDE_LEFT: {
            return {
                films: action.topFilms
            }
        }
        case SLIDE_RIGHT: {
            return {
                films: action.topFilms
            }
        }
    }
}
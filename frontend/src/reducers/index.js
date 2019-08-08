import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//import

const rootReducer = combineReducers({
    routing: routerReducer,
});

export default rootReducer;
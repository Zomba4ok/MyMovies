import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import mainPageReducers from "./mainPageReducers";

//import

const rootReducer = combineReducers({
    routing: routerReducer,
    mainPage: mainPageReducers,
});

export default rootReducer;
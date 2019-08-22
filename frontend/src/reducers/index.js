import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import mainPageReducer from "./mainPageReducers";
import baseFrameReducer from "./baseFrameReducer";

//import

const rootReducer = combineReducers({
    routing: routerReducer,
    mainPageReducer,
    baseFrameReducer
});

export default rootReducer;
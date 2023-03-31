import {combineReducers} from "redux";
import {dataReducer} from "./dataReducer";
import {viewReducer} from "./viewReducer";
import {uiReducer} from "./uiReducer";


export const rootReducer = combineReducers({
    data: dataReducer,
    view: viewReducer,
    ui: uiReducer
})
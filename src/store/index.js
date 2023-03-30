import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

/*
createStore is deprecated
предлагается использовать configureStore из "@reduxjs/toolkit",
но в задаче условие использовать "redux"
в данной задаче не принципиально
*/
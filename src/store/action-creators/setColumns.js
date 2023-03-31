import {ViewActionsTypes} from "../reducers/viewReducer";

export const setColumns = (value) => {
    return (dispatch) => {
        dispatch({type: ViewActionsTypes.SET_VIEW_COLUMNS, value})
    }
}
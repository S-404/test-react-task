import {uiActionsTypes} from "../reducers/uiReducer";


export const setDrawerIsOpen = (value) => {
    return (dispatch) => {
        dispatch({type: uiActionsTypes.SET_DRAWER_IS_OPEN, value})
    }
}
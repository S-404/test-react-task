import {ViewActionsTypes} from "../reducers/viewReducer";

export const setColorFilter = ({key, enabled}) => {
    return (dispatch) => {
        dispatch({type: ViewActionsTypes.SET_COLOR_FILTERS, value: {key, enabled}})

    }
}

export const setFormFilter = ({key, enabled}) => {
    return (dispatch) => {
        dispatch({type: ViewActionsTypes.SET_FORM_FILTERS, value: {key, enabled}})
    }
}

export const setDarkFilter = (value) => {
    return (dispatch) => {
        dispatch({type: ViewActionsTypes.SET_DARK_FILTERS, value})

    }
}

import {DataActionsTypes} from "../action-creators/fetchData";


const dataState = {
    data: [],
    loading: false,
    error: null
}

export const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DataActionsTypes.FETCH_DATA:
            return {...state, loading: true, error: null, data: []}
        case DataActionsTypes.FETCH_DATA_SUCCESS:
            return {...state, loading: false, error: null, data: action.value}
        case DataActionsTypes.FETCH_DATA_ERROR:
            return {...state, loading: false, error: action.value, data: []}
        default:
            return state
    }
}
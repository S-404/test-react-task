import DataService from "../../services/dataService";
import axios from "axios";

export const DataActionsTypes = {
    FETCH_DATA: 'FETCH_DATA',
    FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR: 'FETCH_DATA_ERROR'
}

export const fetchData = ({colorFilter, darkFilter, formFilter}) => {
    return async (dispatch) => {
        try {
            dispatch({type: DataActionsTypes.FETCH_DATA})
            const res = await DataService.getFilteredData({colorFilter, darkFilter, formFilter})
            dispatch({type: DataActionsTypes.FETCH_DATA_SUCCESS, value: res.data})
        } catch (err) {
            let errMsg
            if (axios.isAxiosError(err)) {
                errMsg = err?.response?.data?.message
            }
            let message = errMsg ? errMsg : "connection failed"
            dispatch({
                type: DataActionsTypes.FETCH_DATA_ERROR,
                value: message
            })

        }
    }
}
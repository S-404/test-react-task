import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {dataActions} from "../store/action-creators";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
            ...dataActions,
        },
        dispatch)
}
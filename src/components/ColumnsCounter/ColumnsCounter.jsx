import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const ColumnsCounter = () => {

    const {viewColumns} = useSelector(state => state.view)
    const {setColumns} = useActions()

    const inputChangedHandler = (e) => {
        setColumns(e.target.value)
    }

    return (
        <div className={`menu-item column-counter`}>
            <label>колонок</label>
            <input
                type='number'
                onChange={inputChangedHandler}
                value={viewColumns}
            />

        </div>
    );
};

export default ColumnsCounter;
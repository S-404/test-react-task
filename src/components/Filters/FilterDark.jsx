import React from 'react';
import Radio from "../UI/Radio/Radio";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const FilterDark = () => {

    const {darkFilters} = useSelector(state => state.view)
    const {setDarkFilter} = useActions()

    const darkFiltersGroup = [
        {title: "все", value: "all"},
        {title: "темные", value: "dark"},
        {title: "светлые", value: "light"},
    ]

    const onChangeRadioHandler = (value) => {
        setDarkFilter(value)
    }
    return (
        <div className={`menu-item filter-dark`}>
            <Radio
                value={darkFilters}
                onChange={onChangeRadioHandler}
                items={darkFiltersGroup}
            />
        </div>
    );
};

export default FilterDark;
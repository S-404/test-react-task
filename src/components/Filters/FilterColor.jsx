import React from 'react';
import Checkbox from "../UI/Checkbox/Checkbox";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";

const FilterColor = () => {

    const {colorFilters} = useSelector(state => state.view)
    const {setColorFilter} = useActions()

    const colorFiltersGroup = [
        {title: "красные", alias: "red"},
        {title: "зеленые", alias: "green"},
        {title: "синие", alias: "blue"},
        {title: "желтые", alias: "yellow"},
    ]

    const checkboxHandler = ({color, value}) => {
        setColorFilter({key: color, enabled: value})
    }

    return (
        <div className={`menu-item filter-color`}>
            {colorFiltersGroup.map(item => (
                <Checkbox
                    checked={!!colorFilters[item.alias]}
                    onChange={checkboxHandler}
                    key={`colorFilterItem_${item.alias}`}
                    color={item.alias}
                    text={item.title}
                />
            ))}
        </div>
    );
};

export default FilterColor;
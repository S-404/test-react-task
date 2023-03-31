import React from 'react';
import {useSelector} from "react-redux";
import Checkbox from "../UI/Checkbox/Checkbox";
import {useActions} from "../../hooks/useActions";

const FilterForm = () => {

    const {formFilters} = useSelector(state => state.view)
    const {setFormFilter} = useActions()

    const formFiltersGroup = [
        {title: "круги", alias: "circle"},
        {title: "квадраты", alias: "square"},
    ]

    const checkboxHandler = ({color, value}) => {
        setFormFilter({key: color, enabled: value})
    }

    return (
        <div className={`menu-item filter-form`}>
            {formFiltersGroup.map(item => (
                <Checkbox
                    checked={!!formFilters[item.alias]}
                    onChange={checkboxHandler}
                    key={`colorFilterItem_${item.alias}`}
                    text={item.title}
                    color={item.alias}
                />
            ))}
        </div>
    );
};

export default FilterForm;
import React from 'react';
import FilterDark from "../Filters/FilterDark";
import FilterColor from "../Filters/FilterColor";
import ColumnsCounter from "../ColumnsCounter/ColumnsCounter";
import './drawerItems.scss'

const DrawerItems = () => {

    return (
        <div className='drawer-menu'>
            <FilterColor/>
            <FilterDark/>
            <ColumnsCounter/>
        </div>
    );
};

export default DrawerItems;
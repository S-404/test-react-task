import React from 'react';
import Drawer from "../Drawer/Drawer";
import BurgerButton from "../Button/BurgerButton";
import DrawerItems from "../../DrawerItems/DrawerItems";
import FilterForm from "../../Filters/FilterForm";
import {useSelector} from "react-redux";
import {useActions} from "../../../hooks/useActions";
import './appBar.scss'

const AppBar = () => {

    const {drawerIsOpen} = useSelector(state => state.ui)
    const {setDrawerIsOpen} = useActions()

    return (
        <div className='appBar'>
            <div className='drawer-menu'>

                <BurgerButton
                    onClick={() => setDrawerIsOpen(!drawerIsOpen)}
                />

                <Drawer
                    isOpen={drawerIsOpen}
                    setIsOpen={() => setDrawerIsOpen(false)}
                >
                    <DrawerItems/>
                </Drawer>
            </div>

            <FilterForm/>


        </div>
    );
};

export default AppBar;
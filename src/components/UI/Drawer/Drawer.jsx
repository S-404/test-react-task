import React from 'react';
import classes from './drawer.module.css'

const Drawer = ({isOpen, setIsOpen, children, ...props}) => {
    return (
        <div className={isOpen ? classes.drawer_opened : classes.drawer} {...props}>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
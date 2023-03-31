import React from 'react';
import classes from "./burgerButton.module.scss";
const BurgerButton = ({...props}) => {
    return (
        <div {...props} className={classes.burgerButton}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default BurgerButton;
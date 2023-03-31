import React from 'react';
import classes from './checkbox.module.css'

const Checkbox = ({text, color, onChange, ...props}) => {

    const defineModifier = (color) => {
        switch (color) {
            case 'red':
                return classes.checkbox__button_red
            case 'green':
                return classes.checkbox__button_green
            case 'blue':
                return classes.checkbox__button_blue
            case 'yellow':
                return classes.checkbox__button_yellow
            default:
                return ''
        }
    }

    const checkboxHandler = (e) => {
        onChange({color, value: e.target.checked})
    }

    return (
        <div className={classes.checkbox}>
            <input type="checkbox"
                   className={`${classes.checkbox__button} ${defineModifier(color)}`}
                   onChange={checkboxHandler}
                   {...props}
            />
            <label className={classes.checkbox__label}>{text}</label>
        </div>
    );
};

export default Checkbox;
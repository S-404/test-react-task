import React from 'react';
import classes from './radio.module.css'

const Radio = ({items, value, onChange, ...props}) => {

    function changeValue(e) {
        onChange(e.target.value);
    }

    return (
        <div className={classes.radioButton} {...props}>
            {items.map(item => (
                <div
                    key={`radio_item${item.value}`}
                >
                    <input
                        type="radio"
                        name="radio"
                        value={item.value}
                        checked={value === item.value}
                        onChange={changeValue}
                    />
                    <label>{item.title}</label>
                </div>

            ))}
        </div>
    );
};

export default Radio;
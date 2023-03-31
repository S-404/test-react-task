import React from 'react';
import './shape.scss'

const Shape = ({form, color, dark}) => {
    return (
        <div className={`shape shape_${form} shape_${color} ${dark ? 'shape_dark' : ''}`}/>
    );
};

export default Shape;
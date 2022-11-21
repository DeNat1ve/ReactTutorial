import React from 'react';
import classes from './CustomButtons.module.css'

const CustomButtons = ({ children, ...props }) => {
    return (
        <button className={classes.customBt} {...props}>
            {children}
        </button>
    );
};

export default CustomButtons;
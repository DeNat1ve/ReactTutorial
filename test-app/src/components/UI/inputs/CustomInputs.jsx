import React from 'react';
import classes from './CustomInputs.module.css'

const CustomInputs = (props) => {
    return (
        <input className={classes.customInput} {...props} />
    );
};

export default CustomInputs;
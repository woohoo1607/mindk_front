import React from 'react';
import { TextField } from '@material-ui/core';

import styles from "./FormsConrols.module.css"

export const Input = ({input, meta, ...props}) => {

    return (
        <div className={styles.formControl + " " + (meta.touched && meta.error ? styles.error : "")}>
            <input {...input} {...props} />
            { meta.touched && meta.error && <span> ! </span>}
        </div>
    );
};

export const renderTextField = ({label, input, meta: {touched, invalid, error}, ...props}) => {
    return <TextField label={label}
                      placeholder={label}
                      error={touched && invalid}
                      helperText={touched && error}
                      {...input}
                      {...props}
            />
};

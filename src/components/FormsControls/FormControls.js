import React from 'react';

import styles from "./FormsConrols.module.css"

export const Input = ({input, meta, ...props}) => {

    return (
        <div className={styles.formControl + " " + (meta.touched && meta.error ? styles.error : "")}>
            <input {...input} {...props} />
            { meta.touched && meta.error && <span> ! </span>}
        </div>
    );
};

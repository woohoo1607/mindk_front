import React from "react";

import "./Button.css";

const Button = (props) => {
    let style = {
        height: props.height,
        width: props.width,
        color: props.color,
        backgroundColor: props["background-color"],
        border: props.border,
        fontSize: props.fontSize,
        cursor: "pointer",
    };
    return (
        <button style={style} onClick={props.click}>
            {props.title}
        </button>
    )
};
export default Button;

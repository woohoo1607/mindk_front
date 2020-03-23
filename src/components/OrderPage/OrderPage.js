import React from "react";
import "./OrderPage.css";

const OrderPage = (props) => {
    console.log(props);
    return (
        <div>
            {props.address}
        </div>
    )
};

export default OrderPage;

import React from "react";

import CreateOrderForm from "./CheckoutForm/CheckoutForm";
import "./styles.css";

const Checkout = ({user, isAuth}) => {
    console.log(user);
    const submit = (data) => {
        console.log(data);
    };

    let initial = {
        first_name: user.first_name,
        second_name: user.second_name,
        email: user.email,
        mobile_phone: user.mobile_phone
    };

    return (
        <div className="center">
            <CreateOrderForm onSubmit={submit} isAuth={isAuth} initialValues={initial}/>
        </div>
    )
};

export default Checkout;

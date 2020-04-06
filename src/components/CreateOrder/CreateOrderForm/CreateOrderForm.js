import React from 'react';
import {reduxForm, Field} from "redux-form";

const CreateOrderForm = () => {
    return (
        <form>

        </form>
    )
};

export default reduxForm({form:'orderForm'})(CreateOrderForm);

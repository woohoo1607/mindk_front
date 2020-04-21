import React from 'react';
import {reduxForm, Field} from "redux-form";

import {renderTextArea, renderTextField} from "../../FormsControls/FormControls";
import {email, requiredField, number, maxLength10} from "../../../validators/validators";


const CheckoutForm = ({handleSubmit, isAuth}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="checkout-field">
                <Field name="first_name" component={renderTextField} label="Имя" type="text" validate={[requiredField]}/>
            </div>
            <div className="checkout-field">
                <Field name="second_name" component={renderTextField} label="Фамилия" type="text" validate={[requiredField]}/>
            </div>
            <div className="checkout-field">
                <Field name="email" component={renderTextField} label="Email" type="email" validate={[requiredField, email]}/>
            </div>
            <div className="checkout-field">
                <Field name="mobile_phone" component={renderTextField} label="Мобильный телефон" type="text" validate={[requiredField, number, maxLength10]}/>
            </div>
            {!isAuth && <>
            <div className="checkout-field">
                <Field name="login" component={renderTextField} label="Login" type="text" validate={[requiredField]}/>
            </div>
            <div className="checkout-field">
                <Field name="password" component={renderTextField} label="Пароль" type="password" validate={[requiredField]}/>
            </div>
            </>
            }
            <div className="checkout-field">
                <Field name="address" component={renderTextField} label="Адрес" type="text" validate={[requiredField]}/>
            </div>
            <div className="checkout-field">
                <Field name="comments" component={renderTextArea} label="Коментарий к заказу" type="text"/>
            </div>
            <div>
                <button type="submit">Оформить заказ</button>
            </div>
        </form>
    )
};

export default reduxForm({form:'checkoutForm'})(CheckoutForm);

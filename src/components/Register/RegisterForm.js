import React from 'react';
import {reduxForm, Field} from "redux-form";
import ReCAPTCHA from "react-google-recaptcha";

import {renderTextField} from "../FormsControls/FormControls";
import {email, requiredField, number, maxLength10, minLength10} from "../../validators/validators";

const RegisterForm = ({handleSubmit, onChangeCaptcha, siteKey, disabled}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="register-field">
                <Field name="first_name" component={renderTextField} label="Имя" type="text" validate={[requiredField]}/>
            </div>
            <div className="register-field">
                <Field name="second_name" component={renderTextField} label="Фамилия" type="text" validate={[requiredField]}/>
            </div>
            <div className="register-field">
                <Field name="email" component={renderTextField} label="Email" type="email" validate={[requiredField, email]}/>
            </div>
            <div className="register-field">
                <Field name="mobile_phone" component={renderTextField} label="Мобильный телефон" type="text" validate={[requiredField, number, maxLength10, minLength10]}/>
            </div>
            <div className="register-field">
                <Field name="login" component={renderTextField} label="Login" type="text" validate={[requiredField]}/>
            </div>
            <div className="register-field">
                <Field name="pass" component={renderTextField} label="Пароль" type="password" validate={[requiredField]}/>
            </div>
            <div className="register-captcha">
                <ReCAPTCHA sitekey={siteKey}
                           onChange={onChangeCaptcha}
                />
            </div>
            <div className="submit-register">
                <button type="submit" disabled={disabled} >Зарегистрироваться</button>
            </div>
        </form>
    )
};

export default reduxForm({form:'registerForm'})(RegisterForm);

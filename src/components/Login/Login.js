import React from "react";
import {NavLink} from "react-router-dom";
import {reduxForm, Field} from "redux-form";

import {renderTextField} from "../FormsControls/FormControls";
import {requiredField} from "../../validators/validators";
import Fetching from "../Fetching/Fetching";
import "./Login.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <Field name="username" component={renderTextField} label="username" type="text" validate={[requiredField]}/>
            </div>
            <div className="inputContainer">
                <Field name="password" component={renderTextField} label="password" type="password" validate={[requiredField]}/>
            </div>
            <button type="submit" className="login-btn" disabled={props.isFetching}>Log In</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form:'loginForm'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.username, formData.password);
    };

    return (
        <div className="center">
            <div className="login">
                <h2>Вход</h2>
                <p className="login-error">{props.msgUserError}</p>
                <LoginReduxForm onSubmit={onSubmit} isFetching={props.isFetching}/>
                {props.isFetching && <Fetching />}
                <span>Нет аккаунта? <NavLink to='/register'>Зарегистрируйся</NavLink></span>
            </div>
        </div>
    )
};

export default Login;

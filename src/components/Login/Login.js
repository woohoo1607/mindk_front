import React from "react";
import {reduxForm, Field} from "redux-form";

import {Input, renderTextField} from "../FormsControls/FormControls";
import "./Login.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <Field name="username" component={renderTextField} label="username"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">password</p>
                <Field name="password" component={renderTextField} label="password" type="password"/>
            </div>
            <button type="submit">Log In</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form:'loginForm'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.username, formData.password);
    };
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;

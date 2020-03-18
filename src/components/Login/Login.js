import React from "react";
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import "./Login.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <p className="inputName">username</p>
                <Field name="username" component={Input} placeholder="username"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">password</p>
                <Field name="password" component={Input} placeholder="password" type="password"/>
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

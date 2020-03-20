import React from "react";
import {reduxForm, Field} from "redux-form";
import {Input} from "../FormsControls/FormControls";
import "./Profile.css";

const ProfileDataEditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <p className="inputName">Имя</p>
                <Field name="first_name" component={Input} placeholder="Имя"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">Фамилия</p>
                <Field name="second_name" component={Input} placeholder="Фамилия"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">Телефон</p>
                <Field name="mobile_phone" component={Input} placeholder="Номер телефона"/>
            </div>
            <div className="inputContainer">
                <p className="inputName">Email</p>
                <Field name="email" component={Input} placeholder="email"/>
            </div>
            <button type="submit">Сохранить</button>
        </form>
    )
};

const ProfileDataEditReduxForm = reduxForm({form:'loginForm'})(ProfileDataEditForm);

const ProfileDataEdit = (props) => {
    let initial = {
        first_name: props.first_name,
        second_name: props.second_name,
        mobile_phone: props.mobile_phone,
        email: props.email,
    };
    console.log(initial);
    const onSubmit = (formData) => {
        console.log(formData);
    };
    return (
        <div className="profile-data">
            <h2>Мои данные</h2>
            <ProfileDataEditReduxForm onSubmit={onSubmit} initialValues={initial}/>
        </div>
    )
};

export default ProfileDataEdit;

import React from "react";
import {reduxForm, Field} from "redux-form";

import {renderTextField} from "../FormsControls/FormControls";
import {email, requiredField} from "../../validators/validators";
import Fetching from "../Fetching/Fetching";

const ProfileDataEditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="inputContainer">
                <Field name="first_name" component={renderTextField} label="Имя" validate={[requiredField]}/>
            </div>
            <div className="inputContainer">
                <Field name="second_name" component={renderTextField} label="Фамилия" validate={[requiredField]}/>
            </div>
            <div className="inputContainer">
                <Field name="mobile_phone" component={renderTextField} label="Номер телефона" validate={[requiredField]}/>
            </div>
            <div className="inputContainer">
                <Field name="email" component={renderTextField} label="email" validate={[requiredField, email]}/>
            </div>
            <div className="submit-update-data">
                <button type="submit">Сохранить</button>
            </div>
        </form>
    )
};

const ProfileDataEditReduxForm = reduxForm({form:'loginForm'})(ProfileDataEditForm);

const ProfileDataEdit = ({isUserError, msgUserError, updateUser, isFetching, ...props}) => {
    let initial = {
        first_name: props.first_name,
        second_name: props.second_name,
        mobile_phone: props.mobile_phone,
        email: props.email,
    };
    const onSubmit = (formData) => {
        updateUser(formData);
    };
    return (
        <div className="profile-data">
            <h2>Мои данные</h2>
            {isUserError && <p className="register-error">{msgUserError}</p>}
            {isFetching && <Fetching />}
            <ProfileDataEditReduxForm onSubmit={onSubmit} initialValues={initial}/>
        </div>
    )
};

export default ProfileDataEdit;

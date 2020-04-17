import React from "react";


import Fetching from "../Fetching/Fetching";
import RegisterForm from "./RegisterForm";
import "./styles.css";

const Register = ({register, isUserError, msgUserError, isFetching}) => {
    const submit = (data) => {
        data.isadmin = false;
        register(data);
    }
    return (
        <div className="center">
            {isFetching && <Fetching />}
            <div className="register">
                <h2>Регистрация</h2>
                {isUserError && <p className="register-error">{msgUserError}</p>}
                <RegisterForm onSubmit={submit} />
            </div>
        </div>
    )
}

export default Register;

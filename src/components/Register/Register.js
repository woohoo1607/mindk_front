import React, {useState} from "react";

import Fetching from "../Fetching/Fetching";
import RegisterForm from "./RegisterForm";
import "./styles.css";

const siteKey = "6LcSQewUAAAAAKGbAQlyG7hZcx9BC441U6AI-kY_";

const Register = ({register, isUserError, msgUserError, isFetching}) => {
    const [isCaptcha, setIsCaptcha] = useState(false);

    const submit = (data) => {
        if (isCaptcha) {
            data.isadmin = false;
            register(data);
        }
    };
    const onChangeCaptcha = (value) => {
        setIsCaptcha(true);
    }
    return (
        <div className="center">
            {isFetching && <Fetching />}
            <div className="register">
                <h2>Регистрация</h2>
                {isUserError && <p className="register-error">{msgUserError}</p>}
                <RegisterForm onSubmit={submit} onChangeCaptcha={onChangeCaptcha} siteKey={siteKey} disabled={!isCaptcha}/>
            </div>
        </div>
    )
}

export default Register;

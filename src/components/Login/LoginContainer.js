import React from "react";
import {connect} from "react-redux";

import Login from "./Login";
import {signIn} from "../../reducers/userReducer";
import {getUserSelector, isAuthSelector} from "../../selectors/user-selectors";

const LoginContainer = (props) => {
    const logIn = async (username, password) => {
        props.signIn(username, password);
    };
    return (
        <Login {...props}
               logIn={logIn}

        />
    )
};


let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
    }
};

export default connect(mapStateToProps, {signIn})(LoginContainer);

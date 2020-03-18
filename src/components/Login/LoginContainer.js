import React, {useEffect} from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {signIn} from "../../reducers/userReducer";
import {getUserSelector, isAuthSelector} from "../../reducers/user-selectors";

const LoginContainer = (props) => {
    const logIn = async (username, password) => {
        let res = await props.signIn(username, password);
        console.log(props.user);
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

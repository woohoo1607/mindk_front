import React, {useEffect} from "react";
import {connect} from "react-redux";

import Login from "./Login";
import {resetUserError, signIn} from "../../reducers/userReducer";
import {
    getIsFetchingUserSelector, getMsgUserErrorSelector,
    getUserSelector,
    isAuthSelector,
    isUserErrorSelector
} from "../../selectors/user-selectors";
import {Redirect} from "react-router-dom";

const LoginContainer = (props) => {

    useEffect(()=> {

        return function clear() {
            props.resetUserError();
        }
    }, []);

    const logIn = (username, password) => {
        props.signIn(username, password);
    };
    return (
        <>
            {props.isAuth && <Redirect to='/' />}
            <Login {...props}
                   logIn={logIn}

            />
        </>
    )
};


let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
        isFetching: getIsFetchingUserSelector(state),
        isUserError: isUserErrorSelector(state),
        msgUserError: getMsgUserErrorSelector(state),
    }
};

export default connect(mapStateToProps, {signIn, resetUserError})(LoginContainer);

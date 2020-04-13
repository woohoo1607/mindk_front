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

const LoginContainer = (props) => {

    useEffect(()=> {

        return function clear() {
            props.resetUserError();
        }
    }, []);

    const logIn = async (username, password) => {
        let isLogin = props.signIn(username, password);
        if (!isLogin) {

        }
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
        isFetching: getIsFetchingUserSelector(state),
        isUserError: isUserErrorSelector(state),
        msgUserError: getMsgUserErrorSelector(state),
    }
};

export default connect(mapStateToProps, {signIn, resetUserError})(LoginContainer);

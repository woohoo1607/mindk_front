import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

import Register from "./Register";
import {
    getIsFetchingUserSelector,
    getMsgUserErrorSelector,
    isAuthSelector,
    isUserErrorSelector
} from "../../selectors/user-selectors";
import {createUser, signIn, resetUserError} from "../../reducers/userReducer";

const RegisterContainer = (props) => {

    useEffect(()=> {

        return function clear() {
            props.resetUserError();
        }
    }, []);

    const register = async (userData) => {
        let isRegistered = await props.createUser(userData);
        if (isRegistered) {
            props.signIn(userData.login, userData.pass);
        }
    }
    return (
        <>
            {props.isAuth && <Redirect to='/profile' />}
            <Register register={register}
                      isUserError={props.isUserError}
                      msgUserError={props.msgUserError}
                      isFetching={props.isFetching}
            />
        </>
    )
};

let mapStateToProps = (state) => {
    return {
        isAuth: isAuthSelector(state),
        isFetching: getIsFetchingUserSelector(state),
        isUserError: isUserErrorSelector(state),
        msgUserError: getMsgUserErrorSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {createUser, resetUserError, signIn}),
    withRouter,
)(RegisterContainer);

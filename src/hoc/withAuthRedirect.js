import React from "react";
import {getIsWasRequestGetMeSelector, isAuthSelector} from "../selectors/user-selectors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: isAuthSelector(state),
    isWasRequestGetMe: getIsWasRequestGetMeSelector(state),
});

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return (
            <>
                {!props.isAuth && props.isWasRequestGetMe && <Redirect to='/login' />}
                {props.isAuth && <Component {...props} />}
            </>
        )
    };
    let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectAuthRedirectComponent
};

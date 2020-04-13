import React from "react";
import {isAuthSelector} from "../selectors/user-selectors";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: isAuthSelector(state),
});

export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return (
            <>
                {!props.isAuth && <Redirect to='/' />}
                {props.isAuth && <Component {...props} />}
            </>
        )
    };
    let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectAuthRedirectComponent
};

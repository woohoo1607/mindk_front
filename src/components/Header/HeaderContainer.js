import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Header from './Header';
import {getUserSelector, isAuthSelector} from "../../selectors/user-selectors";
import {getMe} from "../../reducers/userReducer";

const HeaderContainer = (props) => {
    useEffect( ()=> {
        props.getMe()
    }, [props.user.token]);
    return (
        <div>
            <Header user={props.user}
                    isAuth={props.isAuth}
            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
    }
};

export default connect(mapStateToProps, {getMe})(HeaderContainer);

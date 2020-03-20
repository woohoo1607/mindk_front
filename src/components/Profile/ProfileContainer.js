import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUserSelector, isAuthSelector} from "../../reducers/user-selectors";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";
import {signOut} from "../../reducers/userReducer";

const ProfileContainer = (props) => {

    return (
        <div className="center">
            <Profile user={props.user}
                     signOut={props.signOut}

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
export default connect(mapStateToProps, {getProduct, signOut})(withRouter(ProfileContainer));

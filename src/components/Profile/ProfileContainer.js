import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUserSelector, isAuthSelector} from "../../reducers/user-selectors";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";

const ProfileContainer = (props) => {

    return (
        <div className="center">
            <Profile user={props.user}

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
export default connect(mapStateToProps, {getProduct})(withRouter(ProfileContainer));

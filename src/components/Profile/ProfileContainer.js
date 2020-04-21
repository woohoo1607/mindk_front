import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from './Profile';
import {
    getIsFetchingUserSelector, getMsgUserErrorSelector,
    getUserSelector,
    isAuthSelector,
    isUserErrorSelector
} from "../../selectors/user-selectors";
import {getProduct} from "../../reducers/productsReducer";
import {resetUserError, signOut, updateUserData} from "../../reducers/userReducer";
import {getOrderSelector, getOrdersListSelector} from "../../selectors/orders-selectors";
import {getOrdersList} from "../../reducers/ordersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Fetching from "../Fetching/Fetching";


const ProfileContainer = (props) => {
    useEffect( ()=> {
        props.getOrdersList();

        return function () {
            props.resetUserError();
        }
    }, []);

    const updateUser = (user) => {
        props.updateUserData(user);
    };

    return (
        <div className="center">
            {props.isFetching && <Fetching/>}
            {!props.isFetching &&
                <Profile user={props.user}
                         signOut={props.signOut}
                         ordersList={props.ordersList}
                         order={props.order}
                         isUserError={props.isUserError}
                         msgUserError={props.msgUserError}
                         updateUser={updateUser}
                         isFetching={props.isFetching}

                />
            }
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
        ordersList: getOrdersListSelector(state),
        order: getOrderSelector(state),
        isFetching: getIsFetchingUserSelector(state),
        isUserError: isUserErrorSelector(state),
        msgUserError: getMsgUserErrorSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {getProduct, signOut, getOrdersList, updateUserData, resetUserError}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

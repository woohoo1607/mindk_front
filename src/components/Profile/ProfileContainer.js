import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from './Profile';
import {getIsFetchingUserSelector, getUserSelector, isAuthSelector} from "../../selectors/user-selectors";
import {getProduct} from "../../reducers/productsReducer";
import {signOut} from "../../reducers/userReducer";
import {getOrderSelector, getOrdersListSelector} from "../../selectors/orders-selectors";
import {getOrdersList} from "../../reducers/ordersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Fetching from "../Fetching/Fetching";


const ProfileContainer = (props) => {
    useEffect( ()=> {
        props.getOrdersList()
    }, [props.user.token]);

    return (
        <div className="center">
            {props.isFetching && <Fetching/>}
            {!props.isFetching &&
                <Profile user={props.user}
                         signOut={props.signOut}
                         ordersList={props.ordersList}
                        order={props.order}
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
    }
};

export default compose(
    connect(mapStateToProps, {getProduct, signOut, getOrdersList}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

import React, {useEffect} from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUserSelector, isAuthSelector} from "../../reducers/user-selectors";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";
import {signOut} from "../../reducers/userReducer";
import {getOrderSelector, getOrdersListSelector} from "../../reducers/orders-selectors";
import {getOrdersList} from "../../reducers/ordersReducer";

const ProfileContainer = (props) => {
    useEffect( ()=> {
        props.getOrdersList()
    }, [props.user.token]);
    /*props.getOrdersList();*/

    return (
        <div className="center">
            <Profile user={props.user}
                     signOut={props.signOut}
                     ordersList={props.ordersList}
                     order={props.order}

            />
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
        isAuth: isAuthSelector(state),
        ordersList: getOrdersListSelector(state),
        order: getOrderSelector(state),
    }
};
export default connect(mapStateToProps, {getProduct, signOut, getOrdersList})(withRouter(ProfileContainer));

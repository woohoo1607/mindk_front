import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

import OrderPage from "./OrderPage";
import {
    geIsOrdersErrorSelector,
    getIsFetchingSelector,
    getMsgOrdersErrorSelector,
    getOrderSelector, getStatusErrorSelector
} from "../../selectors/orders-selectors";
import {getOrder, resetOrdersError} from "../../reducers/ordersReducer";
import {getUserSelector} from "../../selectors/user-selectors";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Fetching from "../Fetching/Fetching";

const OrderPageContainer = (props) => {
    useEffect( ()=> {
        props.getOrder(props.match.params.id)
    }, [props.match.params.id]);

    useEffect(()=> {
        return function clear() {
            props.resetOrdersError();
        }
    }, []);

    const is404 = +props.statusError===404 ? true : false;
    const is403 = +props.statusError===403 ? true : false;

    return (
        <>
            {is404 && <Redirect to='/404' />}
            {is403 && <Redirect to='/404' />}
            {props.isFetching && <Fetching />}
            {!props.isFetching &&
                <OrderPage order={props.order}
                           user={props.user}
                           isFetching={props.isFetching}
                />
            }
        </>
    )
};

let mapStateToProps = (state) => {
    return {
        order: getOrderSelector(state),
        user: getUserSelector(state),
        isFetching: getIsFetchingSelector(state),
        msgOrdersError: getMsgOrdersErrorSelector(state),
        isOrdersError: geIsOrdersErrorSelector(state),
        statusError: getStatusErrorSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {getOrder, resetOrdersError}),
    withRouter,
    withAuthRedirect
)(OrderPageContainer);

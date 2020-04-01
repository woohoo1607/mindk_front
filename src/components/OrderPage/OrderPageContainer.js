import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import OrderPage from "./OrderPage";
import {getIsFetchingSelector, getOrderSelector} from "../../selectors/orders-selectors";
import {getOrder} from "../../reducers/ordersReducer";
import {getUserSelector} from "../../selectors/user-selectors";

const OrderPageContainer = (props) => {
    useEffect( ()=> {
        props.getOrder(props.match.params.id)
    }, [props.match.params.id]);
    return (
        <OrderPage order={props.order}
                   user={props.user}
                   isFetching={props.isFetching}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        order: getOrderSelector(state),
        user: getUserSelector(state),
        isFetching: getIsFetchingSelector(state),
    }
};

export default connect(mapStateToProps, {getOrder})(withRouter(OrderPageContainer));

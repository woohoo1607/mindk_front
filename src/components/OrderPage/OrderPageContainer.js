import React, {useEffect} from "react";
import OrderPage from "./OrderPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getOrderSelector} from "../../reducers/orders-selectors";
import {getOrder} from "../../reducers/ordersReducer";
import {getUserSelector} from "../../reducers/user-selectors";

const OrderPageContainer = (props) => {
    useEffect( ()=> {
        props.getOrder(props.match.params.id)
    }, [props.match.params.id]);
    return (
        <OrderPage order={props.order}
                   user={props.user}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        order: getOrderSelector(state),
        user: getUserSelector(state),
    }
};

export default connect(mapStateToProps, {getOrder})(withRouter(OrderPageContainer));

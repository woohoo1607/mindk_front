import React, {useEffect} from "react";
import OrderPage from "./OrderPage";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getOrderSelector} from "../../reducers/orders-selectors";
import {getOrder} from "../../reducers/ordersReducer";

const OrderPageContainer = (props) => {
    useEffect( ()=> {
        props.getOrder(props.match.params.id)
    }, [props.match.params.id]);
    return (
        <OrderPage {...props.orders}/>
    )
};

let mapStateToProps = (state) => {
    return {
        orders: getOrderSelector,
    }
};

export default connect(mapStateToProps, {getOrder})(withRouter(OrderPageContainer));

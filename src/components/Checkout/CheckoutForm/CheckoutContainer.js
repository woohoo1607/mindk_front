import React from "react";
import {connect} from "react-redux";

import Checkout from "../Checkout";
import {
    getIsFetchingCartSelector,
    getProductsCartDataSelector,
    getProductsCartSelector,
    getProductsCountCartSelector
} from "../../../selectors/cart-selectors";
import {getUserSelector, isAuthSelector} from "../../../selectors/user-selectors";
import {createOrder} from "../../../reducers/ordersReducer";


const CheckoutContainer = (props) => {

    const createNewOrder = (data) => {
        props.createOrder(data);
    };

    return (
        <Checkout user={props.user}
                  isAuth={props.isAuth}
                  createNewOrder={createNewOrder}

        />
    )
};

let mapStateToProps = (state) => {
    return {
        productsCart: getProductsCartSelector(state),
        productsCartData: getProductsCartDataSelector(state),
        countProductsCart: getProductsCountCartSelector(state),
        isFetching: getIsFetchingCartSelector(state),
        isAuth: isAuthSelector(state),
        user: getUserSelector(state),
    }
};

export default connect(mapStateToProps, {createOrder})(CheckoutContainer);

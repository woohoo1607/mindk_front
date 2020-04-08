import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Checkout from "../Checkout";
import {
    getIsFetchingCartSelector,
    getProductsCartDataSelector,
    getProductsCartSelector,
    getProductsCountCartSelector
} from "../../../selectors/cart-selectors";
import {getUserSelector, isAuthSelector} from "../../../selectors/user-selectors";
import {addProductCart, clearCart, createOrder, deleteProductCart} from "../../../reducers/cartReducer";
import {createUser, signIn} from "../../../reducers/userReducer";



const CheckoutContainer = (props) => {

    const createNewOrder = async (data) => {
        let isNewOrder = await props.createOrder(data);
        if (isNewOrder) {
            props.clearCart();
            props.history.push("/profile")
        }
    };

    const registerAndCreateNewOrder = async (user, order) => {
        let isRegister = await props.createUser(user);
        if (isRegister) {
            let isLogIn = await props.signIn(user.login, user.pass);
            if (isLogIn) {
                let isNewOrder = await props.createOrder(order);
                if (isNewOrder) {
                    props.clearCart();
                    props.history.push("/profile")
                }
            }

        }
    };

    const addCount = (id) => {
        props.addProductCart(id, 1);
    };

    const reduceCount = (id) => {
        props.addProductCart(id, -1);
    };

    const deleteProductCart = (id) => {
        props.deleteProductCart(id, props.productsCartData);
    };

    return (
        <Checkout user={props.user}
                  isAuth={props.isAuth}
                  createNewOrder={createNewOrder}
                  productsCartData={props.productsCartData}
                  productsCart={props.productsCart}
                  addCount={addCount}
                  reduceCount={reduceCount}
                  deleteProductCart={deleteProductCart}
                  registerAndCreateNewOrder={registerAndCreateNewOrder}
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

export default connect(mapStateToProps, {createOrder, addProductCart, deleteProductCart, clearCart, createUser, signIn})(withRouter(CheckoutContainer));

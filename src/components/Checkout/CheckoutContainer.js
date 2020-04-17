import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Checkout from "./Checkout";
import {
    getIsFetchingCartSelector, getMsgCartErrorSelector,
    getProductsCartDataSelector,
    getProductsCartSelector,
    getProductsCountCartSelector, isCartErrorSelector
} from "../../selectors/cart-selectors";
import {
    getMsgUserErrorSelector,
    getUserSelector,
    isAuthSelector,
    isUserErrorSelector
} from "../../selectors/user-selectors";
import {addProductCart, clearCart, createOrder, deleteProductCart, resetCartError} from "../../reducers/cartReducer";
import {createUser, resetUserError, signIn} from "../../reducers/userReducer";
import {callPopUp} from "../../reducers/popupReducer";

const CheckoutContainer = (props) => {

    useEffect(()=> {

        return function clear() {
            props.resetUserError();
            props.resetCartError();
        }
    }, []);

    let [isFetchingCheckout, setIsFetchingCheckout] = useState(false);

    const msgSuccess = "Ваш заказ успешно создан и передан на обработку";
    const createNewOrder = async (data) => {
        setIsFetchingCheckout(true);
        const isNewOrder = await props.createOrder(data);
        if (isNewOrder) {
            props.clearCart();
            setIsFetchingCheckout(false);
            setIsFetchingCheckout(false);
            props.history.push("/profile");
            props.callPopUp(msgSuccess);
        } else {
            setIsFetchingCheckout(false);
        }
    };

    const registerAndCreateNewOrder = async (user, order) => {
        setIsFetchingCheckout(true);
        const isRegister = await props.createUser(user);
        if (isRegister) {
            const isLogIn = await props.signIn(user.login, user.pass);
            if (isLogIn) {
                const isNewOrder = await props.createOrder(order);
                if (isNewOrder) {
                    props.clearCart();
                    setIsFetchingCheckout(false);
                    props.history.push("/profile");
                    props.callPopUp(msgSuccess);
                } else {
                    setIsFetchingCheckout(false);
                }
            } else {
                setIsFetchingCheckout(false);
            }
        } else {
            setIsFetchingCheckout(false);
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
              isUserError={props.isUserError}
              msgUserError={props.msgUserError}
              isCartError={props.isCartError}
              msgCartError={props.msgCartError}
              isFetchingCheckout={isFetchingCheckout}
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
        isUserError: isUserErrorSelector(state),
        msgUserError: getMsgUserErrorSelector(state),
        isCartError: isCartErrorSelector(state),
        msgCartError: getMsgCartErrorSelector(state),
    }
};

export default connect(mapStateToProps, {createOrder, addProductCart, deleteProductCart, clearCart, createUser, signIn, callPopUp, resetUserError, resetCartError})(withRouter(CheckoutContainer));

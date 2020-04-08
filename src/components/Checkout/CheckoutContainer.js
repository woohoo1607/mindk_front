import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Checkout from "./Checkout";
import {
    getIsFetchingCartSelector,
    getProductsCartDataSelector,
    getProductsCartSelector,
    getProductsCountCartSelector
} from "../../selectors/cart-selectors";
import {
    getMsgUserErrorSelector,
    getUserSelector,
    isAuthSelector,
    isUserErrorSelector
} from "../../selectors/user-selectors";
import {addProductCart, clearCart, createOrder, deleteProductCart} from "../../reducers/cartReducer";
import {createUser, resetUserError, signIn} from "../../reducers/userReducer";
import {callPopUp} from "../../reducers/popupReducer";



const CheckoutContainer = (props) => {

    useEffect(()=> {

        return function clear() {
            props.resetUserError();
        }
    }, []);

    let [isFetching, setIsFetching] = useState(false);

    const msgSuccess = "Ваш заказ успешно создан и передан на обработку";
    const createNewOrder = async (data) => {
        setIsFetching(true);
        let isNewOrder = await props.createOrder(data);
        console.log(isNewOrder);
        if (isNewOrder) {
            props.clearCart();
            setIsFetching(false);
            props.history.push("/profile");
            props.callPopUp(msgSuccess);
        }
        setIsFetching(false);
    };

    const registerAndCreateNewOrder = async (user, order) => {
        setIsFetching(true);
        let isRegister = await props.createUser(user);
        if (isRegister) {
            let isLogIn = await props.signIn(user.login, user.pass);
            if (isLogIn) {
                let isNewOrder = await props.createOrder(order);
                if (isNewOrder) {
                    props.clearCart();
                    setIsFetching(false);
                    props.history.push("/profile");
                    props.callPopUp(msgSuccess);
                }
            }
        }
        setIsFetching(false);
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
        <>
            {!isFetching && <Checkout user={props.user}
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
        />}
            {isFetching && <p>LOOOOOOOOOOOOOOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAADDDDDDDDDDDDDDDDDDDDDDDDIIIIIIIIIINNNNNNNNNNNNNNGGGGGGGGGGGGGG!!!!!!!!!!!!!!!!!!</p>}
        </>
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
    }
};

export default connect(mapStateToProps, {createOrder, addProductCart, deleteProductCart, clearCart, createUser, signIn, callPopUp, resetUserError})(withRouter(CheckoutContainer));

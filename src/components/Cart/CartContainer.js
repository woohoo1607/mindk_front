import React from "react";
import {connect} from "react-redux";

import Cart from "./Cart";
import {
    getProductsCountCartSelector,
    getIsFetchingCartSelector, getIsOpenCartSelector,
    getProductsCartSelector
} from "../../selectors/cart-selectors";
import {setIsOpen} from "../../reducers/cartReducer";


const CartContainer = (props) => {

    const closeCart = () => {
        props.setIsOpen(false);
    };

    return (
        <Cart productsCart={props.productsCart}
              isOpen={props.isOpen}
              onClose={closeCart}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        productsCart: getProductsCartSelector(state),
        countProductsCart: getProductsCountCartSelector(state),
        isFetching: getIsFetchingCartSelector(state),
        isOpen: getIsOpenCartSelector(state),
    }
};

export default connect(mapStateToProps, {setIsOpen})(CartContainer);

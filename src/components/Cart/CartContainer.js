import React from "react";
import {connect} from "react-redux";

import Cart from "./Cart";
import {
    getProductsCountCartSelector,
    getIsFetchingCartSelector, getIsOpenCartSelector,
    getProductsCartSelector, getProductsCartDataSelector
} from "../../selectors/cart-selectors";
import {addProductCart, setIsOpen} from "../../reducers/cartReducer";


const CartContainer = (props) => {

    const closeCart = () => {
        props.setIsOpen(false);
    };

    const addCount = (id) => {
        props.addProductCart(id, 1);
    };

    const reduceCount = (id) => {
        props.addProductCart(id, -1);
    };

    return (
        <Cart productsCart={props.productsCart}
              productsCartData={props.productsCartData}
              isOpen={props.isOpen}
              onClose={closeCart}
              isFetching={props.isFetching}
              addCount={addCount}
              reduceCount={reduceCount}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        productsCart: getProductsCartSelector(state),
        productsCartData: getProductsCartDataSelector(state),
        countProductsCart: getProductsCountCartSelector(state),
        isFetching: getIsFetchingCartSelector(state),
        isOpen: getIsOpenCartSelector(state),
    }
};

export default connect(mapStateToProps, {setIsOpen, addProductCart})(CartContainer);

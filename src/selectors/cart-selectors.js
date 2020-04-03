import {createSelector} from "reselect";

export const getProductsCartSelector = (state) => {
    return state.cart.productsCart
};

export const getProductsCartDataSelector = (state) => {
    return state.cart.productsCartData
};

export const getProductsCountCartSelector = (state) => {
    return state.cart.countProductsCart
};

export const getIsFetchingCartSelector = (state) => {
    return state.cart.isFetchingCart
};

export const getIsOpenCartSelector = (state) => {
    return state.cart.isOpen
};

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

export const isCartErrorSelector = (state) => {
    return state.cart.isCartError
};

export const getMsgCartErrorSelector = (state) => {
    return state.cart.msgCartError
};

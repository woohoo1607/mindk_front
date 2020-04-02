import {createSelector} from "reselect";

export const getProductsCartSelector = (state) => {
    return state.cart.productsCart
};

export const getProductsCountCartSelector = (state) => {
    return state.cart.countProductsCart
};

export const getIsFetchingCartSelector = (state) => {
    return state.cart.isFetching
};

export const getIsOpenCartSelector = (state) => {
    return state.cart.isOpen
};

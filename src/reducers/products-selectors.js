import {createSelector} from "reselect";

export const getProductsSelector = (state) => {
    return state.products.products
};

export const getProductSelector = (state) => {
    return state.products.product
};

export const getCurrentPageSelector = (state) => {
    return state.products.currentPage
};

export const getProductsCountSelector = (state) => {
    return state.products.count
};

export const getPageSizeSelector = (state) => {
    return state.products.pageSize
};

export const getCategoriesListSelector = (state) => {
    return state.products.categories
};

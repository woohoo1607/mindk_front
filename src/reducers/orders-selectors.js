import {createSelector} from "reselect";

export const getOrdersListSelector = (state) => {
    return state.orders.ordersList
};

export const getOrderSelector = (state) => {
    return state.orders.order
};

export const getIsFetchingSelector = (state) => {
    return state.orders.isFetching
};

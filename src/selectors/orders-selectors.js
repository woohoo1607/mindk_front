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

export const getMsgOrdersErrorSelector = (state) => {
    return state.orders.msgOrdersError
};

export const geIsOrdersErrorSelector = (state) => {
    return state.orders.isOrdersError
};

export const getStatusErrorSelector = (state) => {
    return state.orders.statusError
};

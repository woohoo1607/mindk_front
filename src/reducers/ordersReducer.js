import {ordersAPI} from "../api/api";

const SET_ORDERS_LIST = "SET_ORDERS_LIST";
const SET_ORDER_DATA = "SET_ORDER_DATA";
const IS_FETCHING = "IS_FETCHING";
const SET_MSG_ORDERS_ERROR = "SET_MSG_ORDERS_ERROR";
const SET_IS_ORDERS_ERROR = "SET_IS_ORDERS_ERROR";
const SET_STATUS_ERROR = "SET_STATUS_ERROR";

let initialState = {
    ordersList: [],
    order: {
        id: null,
        address: null,
        total_price: null,
        status: null,
        comments: null,
        date_start: null,
        date_end: null,
        products: []
    },
    isFetching: false,
    msgOrdersError: '',
    isOrdersError: false,
    statusError: '',
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS_LIST:
        {
            return {
                ...state,
                ordersList: [...action.ordersList]
            };
        }
        case SET_ORDER_DATA:
        {
            let data = {...action.order};
            data.products = [...action.order.products];
            delete data["id_users"];
            return {
                ...state,
                order: {...data}
            };
        }
        case IS_FETCHING:
        {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case SET_MSG_ORDERS_ERROR:
        {
            return {
                ...state,
                msgOrdersError: action.msgOrdersError
            };
        }
        case SET_IS_ORDERS_ERROR:
        {
            return {
                ...state,
                isOrdersError: action.isOrdersError
            };
        }
        case SET_STATUS_ERROR:
        {
            return {
                ...state,
                statusError: action.statusError
            };
        }
        default:
            return state;
    }
};

export const setOrdersList = (ordersList) =>
    ({type: SET_ORDERS_LIST, ordersList: ordersList});

export const setOrderData = (order) =>
    ({type: SET_ORDER_DATA, order: order});

export const setIsFetching = (isFetching) =>
    ({type: IS_FETCHING, isFetching: isFetching});

export const setMsgOrdersError = (msgOrdersError) =>
    ({type: SET_MSG_ORDERS_ERROR, msgOrdersError: msgOrdersError});

export const changeErrorOrdersStatus = (isOrdersError) =>
    ({type: SET_IS_ORDERS_ERROR, isOrdersError: isOrdersError});

export const setStatusError = (statusError) =>
    ({type: SET_STATUS_ERROR, statusError: statusError});

export const resetOrdersError = () => (dispatch) => {
    dispatch(changeErrorOrdersStatus(false));
    dispatch(setMsgOrdersError(''));
    dispatch(setStatusError(''));
};

export const createOrdersError = (msg, status) => (dispatch) => {
    dispatch(changeErrorOrdersStatus(true));
    dispatch(setMsgOrdersError(msg));
    dispatch(setStatusError(status));
};

export const getOrdersList = () => (dispatch) => {
    dispatch(setIsFetching(true));
    ordersAPI.getOrders()
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setOrdersList(res.data));
                dispatch(setIsFetching(false));
            }
            dispatch(setIsFetching(false));
        })
};
export const getOrder = (id) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(resetOrdersError());
    ordersAPI.getOrderById(id)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setOrderData(res.data));
                dispatch(setIsFetching(false));
            } else {
                dispatch(createOrdersError(res.message, res.status));
                dispatch(setIsFetching(false));
            }
        })
};

export default ordersReducer;

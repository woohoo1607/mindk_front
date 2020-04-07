import {ordersAPI} from "../api/api";

const SET_ORDERS_LIST = "SET_ORDERS_LIST";
const SET_ORDER_DATA = "SET_ORDER_DATA";
const IS_FETCHING = "IS_FETCHING";

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

export const getOrdersList = () => (dispatch) => {
    dispatch(setIsFetching(true));
    ordersAPI.getOrders()
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setOrdersList(res.data));
                dispatch(setIsFetching(false));
            }
        })
};
export const getOrder = (id) => (dispatch) => {
    dispatch(setIsFetching(true));
    ordersAPI.getOrderById(id)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setOrderData(res.data));
                dispatch(setIsFetching(false));
            }
        })
};

export const createOrder = (data) => (dispatch) => {
    dispatch(setIsFetching(true));
    console.log(data);
    dispatch(setIsFetching(false));
};

export default ordersReducer;

import {ordersAPI} from "../api/api";

const SET_ORDERS_LIST = "SET_ORDERS_LIST";
const SET_ORDER_DATA = "SET_ORDER_DATA";

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
    }
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
            return {
                ...state,
                order: action.order
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

export const getOrdersList = () => (dispatch) => {
    ordersAPI.getOrders()
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setOrdersList(res.data))
            }
        })
};

export default ordersReducer;

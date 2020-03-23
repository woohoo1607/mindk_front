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
            let data = {...action.order};
            data.products = [...action.order.products];
            delete data["id_users"];
            console.log(data);
            return {
                ...state,
                order: {...data}
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
export const getOrder = (id) => (dispatch) => {
    ordersAPI.getOrderById(id)
        .then(res=> {
            console.log(res);
            if (res.responseCode===0) {
                dispatch(setOrderData(res.data))
            }
        })
};

export default ordersReducer;

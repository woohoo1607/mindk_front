import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

import userReducer from "../reducers/userReducer"
import productsReducer from "../reducers/productsReducer";
import ordersReducer from "../reducers/ordersReducer";
import cartReducer from "../reducers/cartReducer";
import popupReducer from "../reducers/popupReducer";

let reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    orders: ordersReducer,
    cart: cartReducer,
    popup: popupReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

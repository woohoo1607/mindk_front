import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "../reducers/userReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import productsReducer from "../reducers/productsReducer";
import ordersReducer from "../reducers/ordersReducer";

let reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    orders: ordersReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

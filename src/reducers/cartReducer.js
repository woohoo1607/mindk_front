import {ordersAPI, productsAPI} from "../api/api";

const SET_PRODUCTS_CART = "SET_PRODUCTS_CART";
const SET_PRODUCTS_CART_DATA = "SET_PRODUCTS_CART_DATA";
const SET_COUNT_PRODUCTS_CART = "SET_COUNT_PRODUCTS_CART";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_OPEN = "SET_IS_OPEN";

let initialState = {
    productsCart: [],
    productsCartData: [],
    countProductsCart: 0,
    isFetchingCart: false,
    isOpen: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_CART:
        {
            return {
                ...state,
                productsCart: [...action.productsCart]
            };
        }
        case SET_PRODUCTS_CART_DATA:
        {
            return {
                ...state,
                productsCartData: [...action.productsCartData]
            };
        }
        case SET_COUNT_PRODUCTS_CART:
        {
            return {
                ...state,
                countProductsCart: action.countProductsCart
            };
        }
        case SET_IS_FETCHING:
        {
            return {
                ...state,
                isFetchingCart: action.isFetchingCart
            };
        }
        case SET_IS_OPEN:
        {
            return {
                ...state,
                isOpen: action.isOpen
            };
        }
        default:
            return state;
    }
};

export const setProductsCart = (productsCart) =>
    ({type: SET_PRODUCTS_CART, productsCart: productsCart});

export const setProductsCartData = (productsCartData) =>
    ({type: SET_PRODUCTS_CART_DATA, productsCartData: productsCartData});

export const setCountProductsCart = (countProductsCart) =>
    ({type: SET_COUNT_PRODUCTS_CART, countProductsCart: countProductsCart});

export const setIsFetchingCart = (isFetchingCart) =>
    ({type: SET_IS_FETCHING, isFetchingCart: isFetchingCart});

export const setIsOpen = (isOpen) =>
    ({type: SET_IS_OPEN, isOpen: isOpen});

export const getProductsCart = () => (dispatch) =>{
    dispatch(setIsFetchingCart(true));
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let ids = cartProducts.map(p=> p.id);
    dispatch(getProductsData(ids));
    dispatch(setProductsCart(cartProducts));
    dispatch(getCountProductsCart(cartProducts));
    dispatch(setIsFetchingCart(false));
};

export const getCountProductsCart = (cartProducts) => (dispatch) =>{
    dispatch(setIsFetchingCart(true));
    let count = cartProducts.reduce((sum, p) => sum+p.count, 0);
    dispatch(setCountProductsCart(count));
    dispatch(setIsFetchingCart(false));
};

export const addProductCart = (id, count) => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    let products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let index = products.findIndex(p=> p.id===id);
    if(index===-1) {
        products.push({id: id, count: count})
    } else {
        products[index].count= products[index].count+count;
    }
    localStorage.setItem("cartProducts", JSON.stringify(products));
    dispatch(getProductsCart());
    dispatch(setIsFetchingCart(false));
};

export const getProductsData = (ids) => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    let request = '?id='+ids.toString();
    productsAPI.getProducts(request)
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setProductsCartData(response.data));
                dispatch(setIsFetchingCart(false));
            }
        })
};

export const deleteProductCart = (id, productsCartData) => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    let products = JSON.parse(localStorage.getItem("cartProducts"));
    let index = products.findIndex(p=> p.id===id);
    let indexData = productsCartData.findIndex(p=> p.id===id);
    productsCartData.splice(indexData,1);
    dispatch(setProductsCartData(productsCartData));
    products.splice(index,1);
    localStorage.setItem("cartProducts", JSON.stringify(products));
    dispatch(getProductsCart());
    dispatch(setIsFetchingCart(false));
};

export const createOrder = (data) => (dispatch) => {
    dispatch(setIsFetchingCart(true));
   return ordersAPI.addOrder(data)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setIsFetchingCart(false));
                return true;
            } else {
                dispatch(setIsFetchingCart(false));
                return false
            }
        });
};

export const clearCart = () => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    localStorage.removeItem("cartProducts");
    dispatch(setProductsCartData([]));
    dispatch(setProductsCart([]));
    dispatch(setCountProductsCart(0));
    dispatch(setIsFetchingCart(false));
};


export default cartReducer;

import {ordersAPI, productsAPI} from "../api/api";
import { ProductCartType, ProductCartDataType } from "../types/types";
import {AppStateType} from "../store/store";
import {ThunkAction} from "redux-thunk";

const SET_PRODUCTS_CART = "SET_PRODUCTS_CART";
const SET_PRODUCTS_CART_DATA = "SET_PRODUCTS_CART_DATA";
const SET_COUNT_PRODUCTS_CART = "SET_COUNT_PRODUCTS_CART";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_OPEN = "SET_IS_OPEN";
const SET_IS_MSG_CART_ERROR = "SET_IS_MSG_CART_ERROR";
const SET_IS_CART_ERROR = "SET_IS_CART_ERROR";

let initialState = {
    productsCart: [] as Array<ProductCartType>,
    productsCartData: [] as Array<ProductCartDataType>,
    countProductsCart: 0,
    isFetchingCart: false,
    isOpen: false,
    isCartError: false,
    msgCartError: '',
};

type InitialStateType = typeof initialState

const cartReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
        case SET_IS_MSG_CART_ERROR:
        {
            return {
                ...state,
                msgCartError: action.msgCartError
            };
        }
        case SET_IS_CART_ERROR:
        {
            return {
                ...state,
                isCartError: action.isCartError
            };
        }
        default:
            return state;
    }
};

type ActionsType = SetProductsCartActionType | SetProductsCartDataActionType | SetCountProductsCartActionType
    | SetIsFetchingCartActionType | SetIsOpenActionType
    | SetMsgCartErrorActionType | ChangeCartErrorStatusActionType

type SetProductsCartActionType = {
    type: typeof SET_PRODUCTS_CART
    productsCart: Array<ProductCartType>
}
export const setProductsCart = (productsCart: Array<ProductCartType>):SetProductsCartActionType =>
    ({type: SET_PRODUCTS_CART, productsCart: productsCart});
type SetProductsCartDataActionType = {
    type: typeof SET_PRODUCTS_CART_DATA
    productsCartData: Array<ProductCartDataType>
}
export const setProductsCartData = (productsCartData: Array<ProductCartDataType>):SetProductsCartDataActionType =>
    ({type: SET_PRODUCTS_CART_DATA, productsCartData: productsCartData});
type SetCountProductsCartActionType = {
    type: typeof SET_COUNT_PRODUCTS_CART
    countProductsCart: number
}
export const setCountProductsCart = (countProductsCart: number):SetCountProductsCartActionType =>
    ({type: SET_COUNT_PRODUCTS_CART, countProductsCart: countProductsCart});
type SetIsFetchingCartActionType = {
    type: typeof SET_IS_FETCHING
    isFetchingCart: boolean
}
export const setIsFetchingCart = (isFetchingCart: boolean): SetIsFetchingCartActionType =>
    ({type: SET_IS_FETCHING, isFetchingCart: isFetchingCart});
type SetIsOpenActionType = {
    type: typeof SET_IS_OPEN
    isOpen: boolean
}
export const setIsOpen = (isOpen: boolean): SetIsOpenActionType =>
    ({type: SET_IS_OPEN, isOpen: isOpen});
type SetMsgCartErrorActionType = {
    type: typeof SET_IS_MSG_CART_ERROR
    msgCartError: string
}
export const setMsgCartError = (msgCartError: string): SetMsgCartErrorActionType =>
    ({type: SET_IS_MSG_CART_ERROR, msgCartError: msgCartError});
type ChangeCartErrorStatusActionType = {
    type: typeof SET_IS_CART_ERROR
    isCartError: boolean
}
export const changeCartErrorStatus = (isCartError: boolean): ChangeCartErrorStatusActionType =>
    ({type: SET_IS_CART_ERROR, isCartError: isCartError});

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const resetCartError = (): ThunkType => (dispatch) => {
    dispatch(changeCartErrorStatus(false));
    dispatch(setMsgCartError(''));
};

export const createCartError = (msg: string): ThunkType => (dispatch) => {
    dispatch(changeCartErrorStatus(true));
    dispatch(setMsgCartError(msg));
};

export const getProductsCart = (): ThunkType => (dispatch) =>{
    dispatch(setIsFetchingCart(true));
    //@ts-ignore
    let cartProducts: Array<ProductCartType> = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let ids = cartProducts.map(p=> p.id);
    if (ids.length>0) {
        dispatch(getProductsData(ids));
        dispatch(setProductsCart(cartProducts));
        dispatch(getCountProductsCart(cartProducts));
        dispatch(setIsFetchingCart(false));
    }
    if (ids.length===0) {
        dispatch(setProductsCart([]));
        dispatch(setCountProductsCart(0));
        dispatch(setIsFetchingCart(false));
    }
};

export const getCountProductsCart = (cartProducts: Array<ProductCartType>): ThunkType => (dispatch) =>{
    dispatch(setIsFetchingCart(true));
    let count = cartProducts.reduce((sum, p) => sum+p.count, 0);
    dispatch(setCountProductsCart(count));
    dispatch(setIsFetchingCart(false));
};

export const addProductCart = (id: number, count: number): ThunkType => (dispatch) => {
    dispatch(setIsFetchingCart(true));

    //@ts-ignore
    let products:Array<ProductCartType> = JSON.parse(localStorage.getItem("cartProducts")) || [];

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
//Promise<void>, AppStateType,
export const getProductsData = (ids:Array<number>): ThunkType => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    let request = '?id='+ids.toString();
    productsAPI.getProducts(request)
        //@ts-ignore
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(setProductsCartData(response.data));
                dispatch(setIsFetchingCart(false));
            }
        })
};

export const deleteProductCart = (id: number, productsCartData: Array<ProductCartDataType>): ThunkType => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    //@ts-ignore
    let products: Array<ProductCartType> = JSON.parse(localStorage.getItem("cartProducts"));
    let index = products.findIndex(p=> p.id===id);
    let indexData = productsCartData.findIndex(p=> p.id===id);
    productsCartData.splice(indexData,1);
    dispatch(setProductsCartData(productsCartData));
    products.splice(index,1);
    localStorage.setItem("cartProducts", JSON.stringify(products));
    dispatch(getProductsCart());
    dispatch(setIsFetchingCart(false));
};
//@ts-ignore
export const createOrder = (data): ThunkType => {
    return async (dispatch) => {
        dispatch(resetCartError());
        dispatch(setIsFetchingCart(true));

        let res = await ordersAPI.addOrder(data)

        if (res.responseCode===0) {
            dispatch(setIsFetchingCart(false));
            return true;
        } else {
            let msg = "Ошибка при создании заказа. Повторите попытку позже.";
            dispatch(createCartError(msg));
            dispatch(setIsFetchingCart(false));
            return false
        }
    };
}

export const clearCart = (): ThunkType => (dispatch) => {
    dispatch(setIsFetchingCart(true));
    localStorage.removeItem("cartProducts");
    dispatch(setProductsCartData([]));
    dispatch(setProductsCart([]));
    dispatch(setCountProductsCart(0));
    dispatch(setIsFetchingCart(false));
};


export default cartReducer;

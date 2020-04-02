const SET_PRODUCTS_CART = "SET_PRODUCTS_CART";
const SET_COUNT_PRODUCTS_CART = "SET_COUNT_PRODUCTS_CART";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_OPEN = "SET_IS_OPEN";

let initialState = {
    productsCart: [],
    countProductsCart: 0,
    isFetching: false,
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
                isFetching: action.isFetching
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

export const setCountProductsCart = (countProductsCart) =>
    ({type: SET_COUNT_PRODUCTS_CART, countProductsCart: countProductsCart});

export const setIsFetchingCart = (isFetching) =>
    ({type: SET_IS_FETCHING, isFetching: isFetching});

export const setIsOpen = (isOpen) =>
    ({type: SET_IS_OPEN, isOpen: isOpen});

export const getProductsCart = () => (dispatch) =>{
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    dispatch(setProductsCart(cartProducts));
    dispatch(getCountProductsCart(cartProducts));
};

export const getCountProductsCart = (cartProducts) => (dispatch) =>{
    let count = cartProducts.reduce((sum, p) => sum+p.count, 0);
    dispatch(setCountProductsCart(count));
};

export const addProductCart = (id, count) => (dispatch) => {
    let products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let index = products.findIndex(p=> p.id===id);
    if(index===-1) {
        products.push({id: id, count: count})
    } else {
        products[index].count= products[index].count+count;
    }
    localStorage.setItem("cartProducts", JSON.stringify(products));
    dispatch(getProductsCart());
};

export default cartReducer;

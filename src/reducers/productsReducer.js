import {productsAPI} from "../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_PRODUCT = "SET_PRODUCT";
const SET_COUNT = "SET_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    products: [],
    product: {},
    currentPage: 1,
    pageSize: 12,
    count: 0
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
        {
            return {
                ...state,
                products: [...action.products]
            };
        }
        case SET_PRODUCT:
        {
            return {
                ...state,
                product: {...action.product}
            };
        }
        case SET_COUNT:
        {
            return {
                ...state,
                count: +action.count
            };
        }
        case SET_CURRENT_PAGE:
        {
            return {
                ...state,
                currentPage: +action.currentPage
            };
        }
        default:
            return state;
    }
};

export const setProducts = (products) =>
    ({type: SET_PRODUCTS, products: products});

export const setProduct = (product) =>
    ({type: SET_PRODUCT, product: product});

export const setCount = (count) =>
    ({type: SET_COUNT, count: count});

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const getProducts = (page) => (dispatch) => {
    productsAPI.getProducts(page)
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setProducts(response.data));
                dispatch(setCount(response.count));
            }
        });
};

export const getProduct = (id) => (dispatch) => {
    productsAPI.getProduct(id)
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setProduct(response.data));
            }
        });
};

export default productsReducer;

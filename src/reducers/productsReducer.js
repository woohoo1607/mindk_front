import {categoriesAPI, productsAPI} from "../api/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const IS_FETCHING = "IS_FETCHING";
const SET_PRODUCT = "SET_PRODUCT";
const SET_COUNT = "SET_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_FILTERS_DATA = "SET_FILTERS_DATA";
const SET_MSG_PRODUCTS_ERROR = "SET_IS_MSG_PRODUCTS_ERROR";
const SET_IS_PRODUCTS_ERROR = "SET_IS_PRODUCTS_ERROR";
const SET_STATUS_ERROR = "SET_STATUS_ERROR";

let initialState = {
    products: [],
    product: {},
    currentPage: 1,
    pageSize: 12,
    count: 0,
    categories: [],
    filtersData: {},
    isFetching: false,
    msgProductsError: '',
    isProductsError: false,
    statusError: '',
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
        case IS_FETCHING:
        {
            return {
                ...state,
                isFetching: action.isFetching
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
        case SET_CATEGORIES:
        {
            return {
                ...state,
                categories: [...action.categories]
            };
        }
        case SET_FILTERS_DATA:
        {
            return {
                ...state,
                filtersData: {...action.filtersData}
            };
        }
        case SET_MSG_PRODUCTS_ERROR:
        {
            return {
                ...state,
                msgProductsError: action.msgProductsError
            };
        }
        case SET_IS_PRODUCTS_ERROR:
        {
            return {
                ...state,
                isProductsError: action.isProductsError
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

export const setProducts = (products) =>
    ({type: SET_PRODUCTS, products: products});

export const setProduct = (product) =>
    ({type: SET_PRODUCT, product: product});

export const setCount = (count) =>
    ({type: SET_COUNT, count: count});

export const setIsFetching = (isFetching) =>
    ({type: IS_FETCHING, isFetching: isFetching});

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage: currentPage});

export const setCategories = (categories) =>
    ({type: SET_CATEGORIES, categories: categories});

export const setFiltersData = (filtersData) =>
    ({type: SET_FILTERS_DATA, filtersData: filtersData});

export const setMsgProductsError = (msgProductsError) =>
    ({type: SET_MSG_PRODUCTS_ERROR, msgProductsError: msgProductsError});

export const changeErrorProductsStatus = (isProductsError) =>
    ({type: SET_IS_PRODUCTS_ERROR, isProductsError: isProductsError});

export const setStatusError = (statusError) =>
    ({type: SET_STATUS_ERROR, statusError: statusError});

export const resetProductsError = () => (dispatch) => {
    dispatch(changeErrorProductsStatus(false));
    dispatch(setMsgProductsError(''));
    dispatch(setStatusError(''));
};

export const createProductsError = (msg, status) => (dispatch) => {
    dispatch(changeErrorProductsStatus(true));
    dispatch(setMsgProductsError(msg));
    dispatch(setStatusError(status));
};

export const getProducts = (page) => (dispatch) => {
    dispatch(setIsFetching(true));
    productsAPI.getProducts(page)
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setProducts(response.data));
                dispatch(setFiltersData(response.filtersData));
                dispatch(setCount(response.count));
                dispatch(setIsFetching(false));
            }
        });
};

export const getProduct = (id) => (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(resetProductsError());
    productsAPI.getProduct(id)
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setProduct(response.data));
                dispatch(setIsFetching(false));
            } else {
                dispatch(createProductsError(response.message, response.status));
                dispatch(setIsFetching(false));
            }
        });
};

export const getCategoriesList = () => (dispatch) => {
    dispatch(setIsFetching(true));
    categoriesAPI.getCategories()
        .then(response => {
            if (response.responseCode ===0) {
                dispatch(setCategories(response.data));
                dispatch(setIsFetching(false));
            }
        });
};

export default productsReducer;

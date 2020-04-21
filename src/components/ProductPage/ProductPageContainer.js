import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

import ProductPage from "./ProductPage";
import {getProduct, resetProductsError} from "../../reducers/productsReducer";
import {
    geIsProductsErrorSelector, getIsFetchingSelector,
    getMsgProductsErrorSelector,
    getProductSelector,
    getProductsSelector, getStatusErrorSelector
} from "../../selectors/products-selectors";
import {addProductCart} from "../../reducers/cartReducer";
import Fetching from "../Fetching/Fetching";

const ProductPageContainer = (props) => {

    useEffect( ()=> {
        if (isNaN(+props.match.params.id)) {
            props.history.push("/404");
        } else {
            props.getProduct(props.match.params.id);
        }
        return function clear() {
            props.resetProductsError();
        }
    }, []);

    const is404 = +props.statusError===404 ? true : false;

    return (
        <>
            {is404 && <Redirect to='/404' />}
            {props.isFetching && <Fetching/>}
            {!props.isFetching && <ProductPage {...props} />}
        </>
    )
};


let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        product: getProductSelector(state),
        msgProductsError: getMsgProductsErrorSelector(state),
        isProductsError: geIsProductsErrorSelector(state),
        statusError: getStatusErrorSelector(state),
        isFetching: getIsFetchingSelector(state),
    }
};

export default connect(mapStateToProps, {getProduct, addProductCart, resetProductsError})(withRouter(ProductPageContainer));

import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

import ProductPage from "./ProductPage";
import {getProduct, resetProductsError} from "../../reducers/productsReducer";
import {
    geIsProductsErrorSelector,
    getMsgProductsErrorSelector,
    getProductSelector,
    getProductsSelector, getStatusErrorSelector
} from "../../selectors/products-selectors";
import {addProductCart} from "../../reducers/cartReducer";


const ProductPageContainer = (props) => {

    useEffect( ()=> {
        props.getProduct(props.match.params.id)
    }, [props.match.params.id]);

    useEffect(()=> {
        return function clear() {
            props.resetProductsError();
        }
    }, []);

    const is404 = +props.statusError===404 ? true : false;

    return (
        <>
            {is404 && <Redirect to='/404' />}
            <ProductPage {...props}
            />
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
    }
};

export default connect(mapStateToProps, {getProduct, addProductCart, resetProductsError})(withRouter(ProductPageContainer));

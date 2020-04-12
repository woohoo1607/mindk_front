import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import ProductPage from "./ProductPage";
import {getProduct} from "../../reducers/productsReducer";
import {
    getProductSelector,
    getProductsSelector
} from "../../selectors/products-selectors";
import {addProductCart} from "../../reducers/cartReducer";


const ProductPageContainer = (props) => {

    useEffect( ()=> {
        props.getProduct(props.match.params.id)
    }, [props.match.params.id]);

    return (
        <ProductPage {...props}
        />
    )
};


let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        product: getProductSelector(state),
    }
};

export default connect(mapStateToProps, {getProduct, addProductCart})(withRouter(ProductPageContainer));

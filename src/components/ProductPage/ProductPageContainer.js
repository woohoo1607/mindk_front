import React, {useEffect} from "react";
import ProductPage from "./ProductPage";
import {connect} from "react-redux";
import {getProduct} from "../../reducers/productsReducer";
import {withRouter} from "react-router-dom";
import {
    getProductSelector,
    getProductsSelector
} from "../../reducers/products-selectors";


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

export default connect(mapStateToProps, {getProduct})(withRouter(ProductPageContainer));

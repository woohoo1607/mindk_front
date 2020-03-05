import React, {useEffect} from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getProducts} from "../../reducers/productsReducer";
import {
    getCurrentPageSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../reducers/products-selectors";

const HomeContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.currentPage)
    }, [props.currentPage]);
    return (
        <Home {...props}/>
    )
};


let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        currentPage: getCurrentPageSelector(state),
        productsCount: getProductsCountSelector(state),
        pageSize: getPageSizeSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts})(HomeContainer);

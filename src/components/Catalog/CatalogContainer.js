import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {getProducts, setCurrentPage} from "../../reducers/productsReducer";
import Catalog from "./Catalog";
import {
    getCurrentPageSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../reducers/products-selectors";

const CatalogContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.currentPage)
    }, [props.currentPage]);

    return (
        <Catalog {...props}
                 setCurrentPage={props.setCurrentPage}
        />
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

export default connect(mapStateToProps, {getProducts, setCurrentPage})(withRouter(CatalogContainer));

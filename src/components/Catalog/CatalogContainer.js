import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {getCategoriesList, getProducts, setCurrentPage} from "../../reducers/productsReducer";
import Catalog from "./Catalog";
import {
    getCategoriesListSelector,
    getCurrentPageSelector, getFiltersDataSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../selectors/products-selectors";

const CatalogContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.location.search);
    }, [props.location.search]);

    useEffect( ()=> {
        if (props.categories.length===0) {
            props.getCategoriesList();
        }
    }, []);

    return (
        <Catalog {...props}
        />
    )
};

let mapStateToProps = (state) => {
    return {
        products: getProductsSelector(state),
        currentPage: getCurrentPageSelector(state),
        productsCount: getProductsCountSelector(state),
        pageSize: getPageSizeSelector(state),
        categories: getCategoriesListSelector(state),
        filtersData: getFiltersDataSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts, setCurrentPage, getCategoriesList})(withRouter(CatalogContainer));

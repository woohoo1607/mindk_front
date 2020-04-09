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
import {addProductCart} from "../../reducers/cartReducer";
import {changePageInSearch} from "../../helpers/changePageInSearch";

const CatalogContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.location.search);
    }, [props.location.search]);

    useEffect( ()=> {
        if (props.categories.length===0) {
            props.getCategoriesList();
        }
    }, []);

    const changePage = (page) => {
        if (props.location.search) {
            let search = changePageInSearch(props.location.search, page);
            props.history.push(props.location.pathname+search);
            props.setCurrentPage(page);
            window.scrollTo(0,0);
        }
    };

    return (
        <Catalog {...props}
                 changePage={changePage}
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

export default connect(mapStateToProps, {getProducts, setCurrentPage, getCategoriesList, addProductCart})(withRouter(CatalogContainer));

import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {getCategoriesList, getProducts, setCurrentPage} from "../../reducers/productsReducer";
import Catalog from "./Catalog";
import {
    getCategoriesListSelector,
    getCurrentPageSelector, getFiltersDataSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../selectors/products-selectors";
import {addProductCart} from "../../reducers/cartReducer";
import {changePageInSearch} from "../../helpers/changePageInSearch";
import {changeFilterInSearch} from "../../helpers/changeFilterInSearch";
import {getFiltersFromSearch} from "../../helpers/getFiltersFromSearch";
import {callPopUp} from "../../reducers/popupReducer";

const CatalogContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.location.search);

        return function () {
            props.setCurrentPage(1);
        }
    }, [props.location.search]);

    const changePage = (page) => {
        if (props.location.search) {
            let search = changePageInSearch(props.location.search, page);
            props.history.push(props.location.pathname+search);
            props.setCurrentPage(page);
            window.scrollTo(0,0);
        }
    };

    const applyFiltersInSearch = (filters) => {
        let search = changeFilterInSearch(props.location.search, filters);
        props.history.push(props.location.pathname+search);
    };

    let filtersFromSearch = getFiltersFromSearch(props.location.search);//преобразуем фильтры в строке url

    return (
        <Catalog {...props}
                 changePage={changePage}
                 applyFiltersInSearch={applyFiltersInSearch}
                 search={props.location.search}
                 filtersFromSearch={filtersFromSearch}
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
        isFetching: getIsFetchingSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts, setCurrentPage, getCategoriesList, addProductCart, callPopUp})(withRouter(CatalogContainer));

import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Home from "./Home";
import {getCategoriesList, getProducts} from "../../reducers/productsReducer";
import {
    getCategoriesListSelector,
    getCurrentPageSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../selectors/products-selectors";
import {addProductCart} from "../../reducers/cartReducer";

const HomeContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(`?page=1`);
        props.getCategoriesList();
    }, []);

    let categoriesMenu = props.categories.filter(c=> c.parent_id===null);

    const findChildren = (parentArr, arr) => {
        parentArr.map(main => {
            main.children = arr.filter(c=> c.parent_id===main.id);
            findChildren(main.children, arr);
        })
    };
    findChildren(categoriesMenu, props.categories);


    return (
        <Home {...props}
              categoriesMenu = {categoriesMenu}
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
        isFetching: getIsFetchingSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts, getCategoriesList, addProductCart})(withRouter(HomeContainer));

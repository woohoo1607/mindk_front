import React, {useEffect} from "react";
import {connect} from "react-redux";

import Home from "./Home";
import {getCategoriesList, getProducts, setCurrentPage} from "../../reducers/productsReducer";
import {
    getCategoriesListSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../selectors/products-selectors";

const HomeContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(`?page=${props.currentPage}`)
    }, [props.currentPage]);

    useEffect( ()=> {
        props.getCategoriesList()
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
              setCurrentPage={props.setCurrentPage}
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
    }
};

export default connect(mapStateToProps, {getProducts, setCurrentPage, getCategoriesList})(HomeContainer);

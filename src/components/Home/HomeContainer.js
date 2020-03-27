import React, {useEffect} from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getCategoriesList, getProducts, setCurrentPage} from "../../reducers/productsReducer";
import {
    getCategoriesListSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../reducers/products-selectors";

const HomeContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(`?page=${props.currentPage}`)
    }, [props.currentPage]);

    useEffect( ()=> {
        props.getCategoriesList()
    }, []);

    let categoriesMenu = props.categories.filter(c=> c.parent_id===null);
    categoriesMenu.map(mainCateg => {
        mainCateg.children = props.categories.filter(c=> c.parent_id===mainCateg.id);
        mainCateg.children.map(childCateg => {
            childCateg.children  = props.categories.filter(c=> c.parent_id===childCateg.id);
        });
    });

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

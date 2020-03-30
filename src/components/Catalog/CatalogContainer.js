import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import {getCategoriesList, getProducts, setCurrentPage} from "../../reducers/productsReducer";
import Catalog from "./Catalog";
import {
    getCategoriesListSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getProductsCountSelector,
    getProductsSelector
} from "../../reducers/products-selectors";

const CatalogContainer = (props) => {
    useEffect( ()=> {
        props.getProducts(props.location.search);
        createFilters(props.location.search);
    }, [props.location.search]);

    useEffect( ()=> {
        if (props.categories.length===0) {
            props.getCategoriesList();
        }
    }, []);

    let createFilters = (search) => {
        let filtersArr = [];
        let category = search.slice(1).split('&').map(a => a.split('=')).filter(a => a[0]==="category");
        let categoryId = category[0][1];
        const categoriesArrWithId = [
            {
                name: 'smartphones',
                ids: [2,7],
            },
            {
                name: 'tablets',
                ids: [4,23],
            },
            {
                name: 'laptop',
                ids: [3,8,9],
            },
            {
                name: 'PC',
                ids: [8,10],
            },
            {
                name: 'watches',
                ids: [5,22],
            },
        ];
        let categoryName = categoriesArrWithId.map(c => {
            let arr = c.ids.filter(id => id==categoryId);
            if (arr.length>0) {
                return c.name
            }
        }).filter(name=> name!==undefined);
        if (categoryName==='smartphones') {
            filtersArr = [
                {
                    name: 'Диагональ дисплея',
                    parameters: ["до 4\"", "от 4\" до 5\"", "от 5\" до 6\"", "более 6\""],
                },
                {
                    name: 'Основная камера',
                    parameters: ["до 8 Мп", "от 8 до 13 МП", "от 13 до 20 МП", "более 20 МП"],
                },
                {
                    name: 'Фронтальная камера',
                    parameters: ["до 5 Мп", "от 5 до 8 МП", "от 8 до 13 МП", "более 13 МП"],
                },
                {
                    name: 'Встроенная память',
                    parameters: ["16 Гб", "32 Гб", "64 Гб" ,"128 Гб" ,"256 Гб", "512 Гб"],
                },
                {
                    name: 'Оперативная память',
                    parameters: ["1 Гб", "2 Гб", "3 Гб", "4 Гб", "6 Гб", "8 Гб"],
                },

            ]
        }
    };

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
        categories: getCategoriesListSelector(state),
    }
};

export default connect(mapStateToProps, {getProducts, setCurrentPage, getCategoriesList})(withRouter(CatalogContainer));

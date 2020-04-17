import React from "react";
import ReactPaginate from "react-paginate";

import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";
import {addProductCart} from "../../reducers/cartReducer";

const Home = (props) => {
    return (
        <div className="center">
            <div className="home-container">
                <CategoriesMenu categories = {props.categoriesMenu}/>
                <section className="products-home-container">
                    {props.products.map(p=> <ProductCard key={p.id} product={p} addProductCart={props.addProductCart} isNew={true}/>)}
                </section>
            </div>
        </div>
    )
};

export default Home;

import React from "react";

import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import ProductCard from "../ProductCard/ProductCard";
import Fetching from "../Fetching/Fetching";
import AdCarousel from "../AdCarousel/AdCarousel";
import "./Home.css";

const Home = (props) => {
    return (
        <div className="center">
            <div className="home-container">
                <div className="menu-ad">
                    <CategoriesMenu categories = {props.categoriesMenu}/>
                    <AdCarousel history={props.history}/>
                </div>
                {props.isFetching && <Fetching />}
                {!props.isFetching &&
                <section className="products-home-container">
                    {props.products.map(p => <ProductCard key={p.id} product={p}
                                                          addProductCart={props.addProductCart} isNew={true}/>)}
                </section>
                }
            </div>
        </div>
    )
};

export default Home;

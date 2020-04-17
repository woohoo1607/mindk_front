import React from "react";

import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import ProductCard from "../ProductCard/ProductCard";
import Fetching from "../Fetching/Fetching";
import "./Home.css";

const Home = (props) => {
    return (
        <div className="center">
            <div className="home-container">
                <CategoriesMenu categories = {props.categoriesMenu}/>
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

import React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import {NavLink} from "react-router-dom";

const Home = (props) => {
    return (
        <div className="center">
            <section className="productsContainer">
                {props.products.map(p=> <NavLink to={`/products/${p.id}`} key={p.id}><ProductCard key={p.id} product={p}/></NavLink>)}
            </section>
        </div>
    )
};

export default Home;

import React from "react";
import "./Home.css";
import ProductCard from "../ProductCard/ProductCard";
import {NavLink} from "react-router-dom";
import ReactPaginate from "react-paginate";

const Home = (props) => {
    let totalPages = Math.ceil(props.productsCount/props.pageSize);
    return (
        <div className="center">
            <section className="productsContainer">
                {props.products.map(p=> <NavLink to={`/products/${p.id}`} key={p.id}><ProductCard key={p.id} product={p}/></NavLink>)}
            </section>
            <ReactPaginate pageCount={totalPages}
                           pageRangeDisplayed={3}
                           marginPagesDisplayed={3}
                           initialPage={props.currentPage-1}
                           onPageChange={(e)=>props.setCurrentPage(e.selected+1)}
            />
        </div>
    )
};

export default Home;

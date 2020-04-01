import React from "react";
import {NavLink} from "react-router-dom";
import ReactPaginate from "react-paginate";

import ProductCard from "../ProductCard/ProductCard";
import Filter from "./Filter/Filter";
import "./Catalog.css";

const Catalog = (props) => {
    let totalPages = Math.ceil(props.productsCount/props.pageSize);

    return (
        <div className="center">
            <Filter filtersData={props.filtersData}/>
            <section className="productsContainer">
                {props.products.map(p=> <NavLink to={`/products/${p.id}`} key={p.id}><ProductCard key={p.id} product={p}/></NavLink>)}
            </section>
            <ReactPaginate pageCount={totalPages}
                           pageRangeDisplayed={3}
                           marginPagesDisplayed={3}
                           initialPage={props.currentPage-1}
                           onPageChange={(e)=>props.setCurrentPage(e.selected+1)}
                           pageClassName={"paginatorLi"}
                           pageLinkClassName={"paginatorA"}
                           activeClassName={"activePaginatorLi"}
                           previousClassName={"prevPaginatorLi"}
                           nextClassName={"nextPaginatorLi"}
                           previousLinkClassName={"prevPaginatorA"}
                           nextLinkClassName={"nextPaginatorA"}
                           containerClassName={"paginator"}
                           previousLabel={""}
                           nextLabel={""}
                           activeLinkClassName={"activePaginatorA"}
                           breakClassName={"paginatorBreakLi"}
                           breakLinkClassName={"paginatorBreakA"}
            />

        </div>
    )
};

export default Catalog;

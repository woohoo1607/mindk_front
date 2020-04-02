import React from "react";
import ReactPaginate from "react-paginate";

import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = (props) => {
    let totalPages = Math.ceil(props.productsCount/props.pageSize);
    return (
        <div className="center">
            <div className="home-container">
                <CategoriesMenu categories = {props.categoriesMenu}/>
                <section className="products-home-container">
                    {props.products.map(p=> <ProductCard key={p.id} product={p}/>)}
                </section>
            </div>
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

export default Home;

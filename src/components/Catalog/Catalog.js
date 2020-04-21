import React from "react";
import ReactPaginate from "react-paginate";

import ProductCard from "../ProductCard/ProductCard";
import Filter from "./Filter/Filter";
import CatalogMainPage from "./CatalogMainPage";
import Fetching from "../Fetching/Fetching";
import "./Catalog.css";

const Catalog = (props) => {
    let isProducts = props.products.length ? true : false;
    let totalPages = Math.ceil(props.productsCount/props.pageSize);
    return (
        <div className="center">
            <div className="catalogContainer">
                {props.search &&
                    <>
                        <Filter filtersData={props.filtersData} applyFiltersInSearch={props.applyFiltersInSearch} search={props.search} filtersFromSearch={props.filtersFromSearch}/>
                        {props.isFetching && <Fetching />}
                        {!props.isFetching &&
                            <section className="productsContainer">
                                {props.products.map(p => <ProductCard key={p.id} product={p}
                                                                      addProductCart={props.addProductCart}/>)}
                            </section>
                        }
                    </>
                }
                {!props.search && <CatalogMainPage />}
            </div>
            {!isProducts && <div className="noProducts">Товары в данной категории еще не добавлены</div>}
            {props.search && !props.isFetching && isProducts &&
                <ReactPaginate pageCount={totalPages}
                               pageRangeDisplayed={3}
                               marginPagesDisplayed={3}
                               initialPage={props.currentPage - 1}
                               onPageChange={(e) => props.changePage(e.selected + 1)}
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
            }
        </div>
    )
};

export default Catalog;

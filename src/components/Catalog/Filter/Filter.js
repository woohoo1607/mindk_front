import React, {useEffect, useState} from "react";

import OneFilter from "./OneFilter";
import createFilters from "./createFilters";


const Filter = (props) => {
    let [filterSearch, setFilterSearch] = useState(props.filtersFromSearch || []);

    useEffect(()=> {
        props.applyFiltersInSearch(filterSearch);
    },[filterSearch]);

    //если в url пришли фильтры а в стейте их нет, то записать их в стейт
    console.log(props.filtersFromSearch);
    console.log(filterSearch);
    if (props.filtersFromSearch && !filterSearch.length) {
        console.log(props.filtersFromSearch);
        setFilterSearch(props.filtersFromSearch)
    }

    const changeFilter = (filterID, query) => {
        let filterIndex = filterSearch.findIndex(filters=>+filters[0]===+filterID);
        if (filterIndex!==-1 && query) {
            let newFilterSearch = [...filterSearch];
            newFilterSearch[filterIndex][1]=query;
            setFilterSearch([...newFilterSearch]);
        } else if (filterIndex===-1 && query) {
            setFilterSearch([...filterSearch, [filterID, query]])
        } else {
            let newFilterSearch = [...filterSearch];
            newFilterSearch.splice(filterIndex, 1);
            setFilterSearch(newFilterSearch);
        }
    };


    let filters = createFilters(props.filtersData.attributes, props.filtersData.values, props.filtersData.categoryName) || [];

    return (
        <div className="filter">
            {filters.map((filter, index) => <OneFilter key={index} filter={filter} filterSearch={filterSearch} changeFilter={changeFilter}/>)}
        </div>
    )
};

export default Filter;

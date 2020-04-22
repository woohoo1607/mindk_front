import React, {useEffect, useState} from "react";

import OneFilter from "./OneFilter";
import createFilters from "./createFilters";


const Filter = (props) => {
    let [filterSearch, setFilterSearch] = useState(props.filtersFromSearch || []);

    useEffect(()=> {
        props.applyFiltersInSearch(filterSearch);
    },[filterSearch]);

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
            if (filterIndex!==-1) {
                newFilterSearch.splice(filterIndex, 1);
            }
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

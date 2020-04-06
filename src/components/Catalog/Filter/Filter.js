import React from "react";

import OneFilter from "./OneFilter";
import createFilters from "./createFilters";


const Filter = (props) => {

    let filters = createFilters(props.filtersData.attributes, props.filtersData.values, props.filtersData.categoryName) || [];
    return (
        <div className="filter">
            {filters.map((filter, index) => <OneFilter key={index} filter={filter}/>)}
        </div>
    )
};

export default Filter;

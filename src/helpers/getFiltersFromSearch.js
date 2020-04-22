const FILTERS = "filters";

export const getFiltersFromSearch = (search) => {
    let searchArr = search.slice(1).split("&").map(query=>query.split("="));
    let isFilterFromSearch = searchArr.find(arr=>arr[0]===FILTERS);
    if (isFilterFromSearch) {
        let filterFromSearch = isFilterFromSearch[1].split(";").map(filter=>filter.split("_"));
        return filterFromSearch
    }
};

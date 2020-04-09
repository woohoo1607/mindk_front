const FILTERS = "filters";

export const changeFilterInSearch = (search, filters) => {
    let searchArr = search.slice(1).split("&").map(query=>query.split("="));
    let index = searchArr.findIndex(arr=>arr[0]===FILTERS);

    if (index===-1 && filters.length) {
        let filter = filters.map(filter=>filter.join("_")).join(";");
        searchArr.push([FILTERS, filter]);
    } else if (index!==-1 && filters.length) {
        let filter = filters.map(filter=>filter.join("_")).join(";");
        searchArr[index][1]=filter;
    } else if (index!==-1 && !filters.length) {
        searchArr.splice(index,1);
    }
    return "?"+searchArr.map(a=>a.join("=")).join("&");
};

const PAGE = "page";

export const changePageInSearch = (search, page) => {
    let searchArr = search.slice(1).split("&").map(query=>query.split("="));
    let index = searchArr.findIndex(arr=>arr[0]===PAGE);
    searchArr[index][1]=page;
    return "?"+searchArr.map(a=>a.join("=")).join("&");
};

import React from "react";
import {NavLink} from "react-router-dom";

const Paginator = (props) => {
    let totalPages = Math.ceil(props.productsCount/props.pageSize);
    let addPages = (start, end, acc) => {
        if(start>=end)
            return acc;
        acc.push(start);
        return addPages(start+1, end, acc);
    };
    let addPages2 = (start, end, acc) => {
        if(start>end)
            return acc;

        acc.push(start);
        return addPages2(start+1, end, acc);
    };

    let pages = [];
    if (props.currentPage - 3 <= 0) {
        if (props.currentPage + 3 < totalPages) {
            addPages(1, (props.currentPage + 3), pages);
            pages.push("...", totalPages);
        } else {
            addPages(1, totalPages, pages);
        }
    } else if (props.currentPage - 3 > 0) {
        pages.push(1, "...");
        if (props.currentPage + 2 > totalPages) {
            addPages2((totalPages-2), (totalPages), pages);
        } else {
            addPages((props.currentPage - 1), (props.currentPage+2), pages);
            pages.push("...", totalPages);
        }
    } else {
        addPages(1, (props.currentPage+5), pages);
        pages.push("...", totalPages);
    }
    return (
        <div>

        </div>
    )
};

export default Paginator;

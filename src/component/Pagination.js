import React from "react";
import { Link } from "react-router-dom";
import { last } from "lodash";

const Pagination = ({ onClick, paginations, params }) => {
  const lastPaginationItem = last(paginations);

  return (
    <nav
      className="pagination is-small"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {paginations.map((pagination, index) => {
          const isDisabled = pagination.page == params._page ? true : false;
          return (
            <li key={index}>
              <a
                className="pagination-link"
                onClick={!isDisabled ? onClick("_page", pagination.page) : null}
                disabled={isDisabled}
              >
                {pagination.rel}
              </a>
            </li>
          );
        })}
      </ul>
      <a className="pagination-next">Current Page : {params._page} of {lastPaginationItem && lastPaginationItem.page}</a>
    </nav>
  );
};

export default Pagination;

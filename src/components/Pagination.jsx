import React from "react";

const Pagination = ({ totalResidents, residentsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

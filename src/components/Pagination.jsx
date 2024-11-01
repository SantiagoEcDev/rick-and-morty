import React from "react";
import "./Pagination.css";

const Pagination = ({ charactersPerPage, totalCharacters, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`pagination__button ${currentPage === number ? "active" : ""}`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;

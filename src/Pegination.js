import React from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrev = () => setPage(page > 1 ? page - 1 : 1);
  const handleNext = () => setPage(page < totalPages ? page + 1 : totalPages);

  return (
    <div className="d-flex justify-content-between my-4">
      <button className="btn btn-secondary" onClick={handlePrev} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button className="btn btn-secondary" onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

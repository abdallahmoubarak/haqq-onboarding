import React from "react";

const Pagination = ({ page, setPage, pageMax }) => {
  return (
    <>
      <div className="pagination-container">
        {Array.from({ length: pageMax - 1 }, (_, i) => i + 1).map((pagi) => (
          <div
            key={pagi}
            onClick={() => pagi <= page && pagi > 2 && setPage(pagi)}
            className={`${pagi <= page && "active"} pagi-item`}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .pagination-container {
          display: flex;
          gap: 0.6rem;
          width: 100%;
        }
        .pagi-item {
          cursor: pointer;
          padding: 2px;
          background: lightgray;
          border-radius: 20rem;
          flex: 1 1;
        }
        .active {
          background: #650e3d;
        }
      `}</style>
    </>
  );
};

export default Pagination;

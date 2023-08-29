import React from "react";
import Button from "../../Button";

const ThankYou = ({ setPage }) => {
  return (
    <>
      <div className="thank-container">
        <img src="/img/img.webp" alt="" />
      </div>
      <div className="thank-btn-container">
        <Button title="Go to MyHAQQ" onClick={() => setPage(0)} />
      </div>
      <style jsx>{`
        .thank-container {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .thank-btn-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default ThankYou;

import React from "react";

const DatePicker = ({ placeholder, title, refprop }) => {
  return (
    <>
      <div className="input-container">
        {title && <div className="input-title">{title}</div>}
        <input type="date" placeholder={placeholder} ref={refprop} />
      </div>
      <style jsx>{`
        .input-container {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          border-radius: 2rem;
          border: 1px solid lightgray;
          outline-color: #650e3d;
          color: #650e3d;
          min-width: 8rem;
          flex: 1 1;
          background: white;
          position: relative;
        }
        .input-title {
          position: absolute;
          top: -0.6rem;
          background: white;
          padding: 0rem 0.3rem;
          font-size: 0.7rem;
          color: #650e3d;
        }
        input {
          padding: 0.6rem 0rem;
          border: none;
          outline: none;
          width: 100%;
          font-weight: bold;
        }
        input:focus::placeholder {
          color: #650e3d;
        }
        input::placeholder {
          color: #650e3d60;
        }
      `}</style>
    </>
  );
};

export default DatePicker;

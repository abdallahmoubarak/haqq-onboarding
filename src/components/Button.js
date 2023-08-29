import React from "react";

const Button = ({ onClick, toggle, title, maxWidth, minWidth }) => {
  return (
    <>
      <button onClick={onClick} className={toggle && "white-btn"}>
        {title}
      </button>
      <style jsx>{`
        button {
          padding: 0.6rem 1rem;
          border-radius: 2rem;
          border: 1px solid #650e3d;
          background: #650e3d;
          color: white;
          font-weight: bold;
          cursor: pointer;
          min-width: 10rem;
          max-width: ${maxWidth ? maxWidth : "100%"};
          white-space: nowrap;
        }
        button:hover {
          background: #650e3dde;
          color: white;
        }
        .white-btn {
          background: white;
          color: #650e3d;
        }
      `}</style>
    </>
  );
};

export default Button;

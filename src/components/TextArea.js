import React from "react";
const TextArea = ({ title }) => {
  return (
    <>
      <textarea placeholder={title} />
      <style jsx>{`
        textarea {
          padding: 0.6rem;
          border-radius: 1rem;
          border: 1px solid lightgray;
          outline-color: #650e3d;
          color: #650e3d;
          min-width: 8rem;
          flex: 1 1;
          background: white;
        }
        textarea:focus::placeholder {
          color: #650e3d;
        }
        textarea::placeholder {
          color: #650e3d60;
        }
      `}</style>
    </>
  );
};
export default TextArea;

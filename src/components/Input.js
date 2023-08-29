import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Input = ({
  placeholder,
  withEye,
  type,
  icon,
  title,
  refprop,
  onChange,
  value
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <div className="input-container">
        {icon && <div className="input-icon">{icon}</div>}
        {title && <div className="input-title">{title}</div>}
        <input
          type={type === "password" ? !showPass && "password" : type}
          placeholder={placeholder}
          ref={refprop}
          onChange={onChange}
          value={value}
        />
        {withEye && (
          <FaEye className="eye" onClick={() => setShowPass(!showPass)} />
        )}
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
        .input-icon {
          padding-right: 1rem;
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
        .eye {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Input;

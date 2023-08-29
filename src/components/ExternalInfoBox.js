import React from "react";
import { IoMdTrash } from "react-icons/io";

const ExternalInfoBox = ({ list, setList }) => {
  return (
    <>
      <div className="externalbox-container">
        {list.map((item, i) => (
          <div key={i} className="flex">
            <div>
              <div className="externalbox-title">{item.title}</div>
              <div className="externalbox-link">{item.link}</div>
              <div>{item.notes}</div>
            </div>
            <div
              className="trash"
              onClick={() => setList(list.filter((_, index) => index !== i))}
            >
              <IoMdTrash />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .externalbox-container {
          padding: 1rem;
          height: 100%;
        }
        .externalbox-title {
          font-weight: bold;
          color: #650e3d;
          font-size: 1.2rem;
        }
        .externalbox-link {
          font-weight: bold;
          color: #650e3d;
          font-size: 1.8rem;
        }
        .trash {
          font-size: 2rem;
          color: #650e3d;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ExternalInfoBox;

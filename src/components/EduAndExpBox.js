import React from "react";
import { IoMdTrash } from "react-icons/io";
import formatDate from "../utils/dateFormatChanger";

const EduAndExpBox = ({ list, setList }) => {
  return (
    <>
      <div className="eduAndExpBox-container">
        {list.map((item, i) => (
          <div key={i} className="flex">
            <div>
              <div className="eduAndExpBox-title">{item.title}</div>
              <div className="eduAndExpBox-subtitle">{item.subTitle}</div>
              <div>
                <span>{formatDate(item.start)}</span> -{" "}
                <span>{formatDate(item.end)}</span>
              </div>
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
        .eduAndExpBox-container {
          padding: 1rem;
          height: 100%;
        }
        .eduAndExpBox-title {
          font-weight: bold;
          color: #650e3d;
          font-size: 1.2rem;
        }
        .eduAndExpBox-subtitle {
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

export default EduAndExpBox;

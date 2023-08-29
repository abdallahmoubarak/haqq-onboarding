import React, { useState } from "react";
import ExternalInfoBox from "../../ExternalInfoBox";
import ExternalInfoForm from "../../ExternalInfoForm";

const PersonalExperience = () => {
  const [listOfExperience, setListOfExperience] = useState([]);

  return (
    <>
      <div className="external-info-container">
        <div className="box">
          <ExternalInfoForm setList={setListOfExperience} />
        </div>
        <div className="box">
          <ExternalInfoBox
            list={listOfExperience}
            setList={setListOfExperience}
          />
        </div>
      </div>

      <style jsx>{`
        .external-info-container {
          padding: 2rem 0rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .box {
          flex: 1 1 40%;
          min-width: 18rem;
        }
      `}</style>
    </>
  );
};

export default PersonalExperience;

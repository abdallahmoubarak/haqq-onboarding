import React, { useState } from "react";
import EduAndExpBox from "../../EduAndExpBox";
import EduAndExpForm from "../../EduAndExpForm";
import { useTranslation } from "react-i18next";

const PersonalExperience = () => {
  const { t } = useTranslation();
  const [listOfExperience, setListOfExperience] = useState([]);

  return (
    <>
      <div className="professional-exper-container">
        <div className="box">
          <EduAndExpForm
            title={t("firmName")}
            subTitle={t("position")}
            setList={setListOfExperience}
          />
        </div>
        <div className="box">
          <EduAndExpBox list={listOfExperience} setList={setListOfExperience} />
        </div>
      </div>

      <style jsx>{`
        .professional-exper-container {
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

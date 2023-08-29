import React, { useState } from "react";
import EduAndExpBox from "../../EduAndExpBox";
import EduAndExpForm from "../../EduAndExpForm";
import { useTranslation } from "react-i18next";

const Education = () => {
  const [listOfEducation, setListOfEducation] = useState([]);
  const { t } = useTranslation();
  return (
    <>
      <div className="professional-exper-container">
        <div className="box">
          <EduAndExpForm
            title={t("institution")}
            subTitle={t("degree")}
            setList={setListOfEducation}
          />
        </div>
        <div className="box">
          <EduAndExpBox list={listOfEducation} setList={setListOfEducation} />
        </div>
      </div>

      <style jsx>{`
        .professional-exper-container {
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

export default Education;

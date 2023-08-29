import React from "react";
import Combobox from "../../Combobox";
import { useTranslation } from "react-i18next";

const ProfessionalInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="professional-container">
        {professionalSectionItems.map((item, i) => (
          <div key={i} className="professional-section">
            <div className="professional-title">{item.title}</div>
            <Combobox
              options={["Criminal"]}
              placeholder={t("choosejurisdictions")}
              onSelect={(option) => console.log(option)}
            />
            <div></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .professional-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding-top: 2rem;
        }
        .professional-section {
          flex: 1 1 49%;
        }
        .professional-title {
          font-size: 1.2rem;
          padding: 1rem;
          color: #66023c;
        }
      `}</style>
    </>
  );
};
const professionalSectionItems = [
  { title: "Legal Consultant" },
  { title: "Lawyer" },
  { title: "Appellate Lawyer" },
  { title: "Cassation Lawyer" }
];

export default ProfessionalInfo;

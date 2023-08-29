import React from "react";
import { useTranslation } from "react-i18next";

const LangDropDown = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="lang">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
        </select>
      </div>
      <style jsx>{`
        .lang {
          height: 2rem;
        }
        select {
          border: none;
          outline: none;
          float: right;
          color: #650e3d;
        }
      `}</style>
    </>
  );
};

export default LangDropDown;

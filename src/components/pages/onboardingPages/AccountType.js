import React from "react";
import { useTranslation } from "react-i18next";

const AccountType = ({ setType, setPage }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="choices-container overflow-auto">
        <div
          className="choice-box"
          onClick={() => {
            setType("lawyer");
            setPage(1);
          }}
        >
          <img src="/img/lawyer.svg" alt="" />
          <div className="bold primary-color">{t("lawyer")}</div>
        </div>
        <div
          className="choice-box"
          onClick={() => {
            setType("client");
            setPage(1);
          }}
        >
          <img src="/img/client.svg" alt="" />
          <div className="bold primary-color">{t("client")}</div>
        </div>
      </div>
      <style jsx>{`
        .choices-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding: 2rem 0rem;
          padding-top: 5rem;
        }
        .choice-box {
          border: 1px solid #66023c;
          border-radius: 2rem;
          width: 10rem;
          height: 10rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: white;
        }
        .choice-box:hover {
          background: #66023c30;
        }
      `}</style>
    </>
  );
};
export default AccountType;

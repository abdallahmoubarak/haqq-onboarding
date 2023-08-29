import React from "react";
import LangDropDown from "./LangDropDown";

const OnboardingHeader = ({ title }) => {
  return (
    <>
      <div className="header-container">
        <div className="title-container">
          <div className="logo">
            <img src="./img/logo.svg" alt="" width={40} height={40} />
          </div>
          <div className="title">{title}</div>
        </div>
        <LangDropDown />
      </div>
      <div className="mobileTitle">{title}</div>

      <style jsx>{`
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
        }
        .title-container {
          display: flex;
          align-items: center;
          gap: 0rem 1rem;
          font-size: 1.6rem;
          color: #650e3d;
        }
        .mobileTitle {
          display: none;
        }
        @media only screen and (max-width: 600px) {
          .title {
            display: none;
          }
          .mobileTitle {
            font-size: 1.3rem;
            color: #650e3d;
            text-align: center;
            display: block;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default OnboardingHeader;

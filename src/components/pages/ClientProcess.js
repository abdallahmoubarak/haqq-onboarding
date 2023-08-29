import React from "react";
import OnboardingBtns from "../OnboardingBtns";
import OnboardingHeader from "../OnboardingHeader";
import PersonalInfo from "./onboardingPages/PersonalInfo";
import { useTranslation } from "react-i18next";

const ClientProcess = ({ onBoardingPages, page, setPage, type }) => {
  const { t } = useTranslation();

  return (
    <>
      <OnboardingHeader title={t("onBoardingHeaders.personalInfo")} />
      <div className="colored-line"></div>
      <PersonalInfo
        type={type}
        page={page}
        setPage={setPage}
        onBoardingPages={onBoardingPages}
        savebtn={true}
      />
      <OnboardingBtns page={page} setPage={setPage} savebtn={true} />
    </>
  );
};
export default ClientProcess;

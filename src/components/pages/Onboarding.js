import React, { useState } from "react";
import OnboardingHeader from "../OnboardingHeader";
import ClientProcess from "./ClientProcess";
import LawyerProcess from "./LawyerProcess";
import AccountType from "./onboardingPages/AccountType";
import EmailConfirmation from "./onboardingPages/EmailConfirmation";
import { useTranslation } from "react-i18next";

const Onboarding = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="onboarding-container">
        <div className="onboarding-form">
          {page === 0 && (
            <>
              <OnboardingHeader title={t("onBoardingHeaders.accountType")} />
              <div className="colored-line"></div>
              {emailVerified ? (
                <AccountType setPage={setPage} setType={setType} />
              ) : (
                <EmailConfirmation setEmailVerified={setEmailVerified} />
              )}
            </>
          )}
          {type === "lawyer" && <LawyerProcess page={page} setPage={setPage} />}
          {type === "client" && <ClientProcess page={page} setPage={setPage} />}
        </div>
      </div>
      <style jsx>{`
        .onboarding-container {
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
          width: 100vw;
          background: #650e3d;
          padding: 2rem;
        }
        .onboarding-form {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          min-height: 100%;
          max-height: 100%;
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .colored-line {
          height: 2px;
          width: 100%;
          background: #650e3d;
        }

        @media only screen and (max-width: 900px) {
          .onboarding-container {
            padding: 0rem;
            overflow-x: hidden;
          }
          .onboarding-form {
            border-radius: 0rem;
            height: fit-content;
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Onboarding;

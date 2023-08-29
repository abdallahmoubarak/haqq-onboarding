import React, { useState } from "react";
import OnboardingBtns from "../OnboardingBtns";
import OnboardingHeader from "../OnboardingHeader";
import Pagination from "../Pagination";
import ChooseExperience from "./onboardingPages/ChooseExperience";
import DigitizePractice from "./onboardingPages/DigitizePractice";
import EducationalHistory from "./onboardingPages/EducationHistory";
import ExternalInformation from "./onboardingPages/ExternalInformation";
import FirmInfo from "./onboardingPages/FirmInfo";
import PersonalInfo from "./onboardingPages/PersonalInfo";
import PersonalExperience from "./onboardingPages/ProfessionalExperience";
import ProfessionalInfo from "./onboardingPages/ProfessionalInfo";
import { useTranslation } from "react-i18next";
import { onBoardingPagesGenerator } from "../../utils/onBoardingPagesGenerator";
import { plansGenerator } from "../../utils/plansGenerator";
import ThankYou from "./onboardingPages/ThankYou";

const LawyerProcess = ({ page, setPage }) => {
  const [selectedPlan, setSelectedPlan] = useState({});
  const [isMonthly, setIsMonthly] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const { t } = useTranslation();
  const onBoardingPages = onBoardingPagesGenerator(t);
  const plans = plansGenerator(t);

  return (
    <>
      {page !== 0 && (
        <>
          {" "}
          <OnboardingHeader title={onBoardingPages[page]?.title} />
          <Pagination
            page={page}
            setPage={setPage}
            pageMax={onBoardingPages.length}
          />
        </>
      )}
      <div className="onboarding-text italic primary-color">
        {onBoardingPages[page].text}
      </div>
      <div className="onboarding-content">
        {page === 1 && (
          <ChooseExperience
            setPage={setPage}
            plans={plans}
            setSelectedPlan={setSelectedPlan}
            isMonthly={isMonthly}
            setIsMonthly={setIsMonthly}
          />
        )}
        {page === 2 && (
          <DigitizePractice
            selectedPlan={selectedPlan}
            isMonthly={isMonthly}
            setPage={setPage}
            paymentDone={paymentDone}
            setPaymentDone={setPaymentDone}
          />
        )}
        {page === 3 && (
          <PersonalInfo setPage={setPage} user={user} setUser={setUser} />
        )}
        {page === 4 && <FirmInfo />}
        {page === 5 && <ProfessionalInfo />}
        {page === 6 && <PersonalExperience />}
        {page === 7 && <EducationalHistory />}

        {page === 8 && <ExternalInformation />}
      </div>

      {page === 9 && <ThankYou setPage={setPage} />}

      <OnboardingBtns
        backbtn={
          paymentDone && page === 2 ? false : onBoardingPages[page].backbtn
        }
        savebtn={onBoardingPages[page].savebtn}
        nextbtn={onBoardingPages[page].nextbtn}
        saveNback={onBoardingPages[page].saveNback}
        onBoardingPages={onBoardingPages.length}
        setPage={setPage}
        page={page}
      />
      <style jsx>{`
        .onboarding-content {
          flex: 1 1;
          overflow: auto;
        }
        .onboarding-text {
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default LawyerProcess;

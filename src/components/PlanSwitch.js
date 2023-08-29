import React from "react";
import { useTranslation } from "react-i18next";

const PlanSwitch = ({ isMonthly, setIsMonthly }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="plan-switch-container"
        onClick={() => setIsMonthly(!isMonthly)}
      >
        <div className={`${!isMonthly && "plan-active"} plan-switch-item`}>
          {t("yearly")}
        </div>
        <div className={`${isMonthly && "plan-active"} plan-switch-item`}>
          {t("monthly")}
        </div>
      </div>
      <style jsx>{`
        .plan-switch-container {
          border: 1px solid #650e3d;
          display: flex;
          align-items: center;
          border-radius: 3rem;
          margin: auto;
          width: fit-content;
          color: #650e3d;
          cursor: pointer;
        }
        .plan-switch-item {
          padding: 0.6rem 1.6rem;
        }
        .plan-active {
          background: #650e3d;
          border-radius: 3rem;
          color: white;
        }
      `}</style>
    </>
  );
};

export default PlanSwitch;

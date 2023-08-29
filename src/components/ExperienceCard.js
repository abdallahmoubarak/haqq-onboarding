import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ plan, isMonthly, setPage, setSelectedPlan }) => {
  const [isOpen, setIsOpen] = useState(plan.open);
  const { t } = useTranslation();

  return (
    <>
      <div className="experience-card-container">
        <div
          key={plan.title}
          style={{ background: plan.background, color: plan.color }}
          className="experience-card"
        >
          <div className="experience-title">{plan.title}</div>
          <div className="experience-cost-container">
            <div className="experience-cost">
              <span>
                {isMonthly ? plan.cost : plan.discounted}
                {plan.cost !== t("plans.silver.cost") && " USD"}
              </span>
              {!isMonthly && plan.cost !== t("plans.silver.cost") && (
                <span className="experience-discounted">{plan.cost} USD</span>
              )}
            </div>
            <div className="experience-costDescription">
              {plan.costDescription}
            </div>
          </div>
          <div className="experience-subDescription">{plan.subDescription}</div>
          <div className="experience-btn-container">
            <button
              style={{ background: plan.buttonBack, color: plan.buttonColor }}
              className="button"
              onClick={() => {
                setSelectedPlan(plan);
                plan.cost === t("plans.silver.cost")
                  ? setPage((page) => page + 2)
                  : setPage((page) => page + 1);
              }}
            >
              {plan.buttonText}
            </button>
          </div>
          {isOpen ? (
            <>
              <div className="bold">{plan.descriptTitle}</div>
              <ul>
                {plan?.description?.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </>
          ) : (
            <div
              className={`arrow-icon ${isOpen ? "open" : ""} learn`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {t("learn")} <FaAngleDown />
            </div>
          )}
          {plan.popular}
        </div>

        {plan.popular && <div className="poplar">{t("mostpopular")}</div>}
      </div>
      <style jsx>{`
        .experience-card-container {
          background: #650e3d;
          border-radius: 2.1rem;
          display: flex;
          flex-direction: column;
          flex: 1 1 18rem;
          max-width: 24rem;
        }
        .experience-title {
          font-size: 2rem;
        }
        .experience-card {
          padding: 1.6rem;
          min-width: 18rem;
          border-radius: 2rem;
          height: 100%;
        }
        .experience-cost-container {
          padding: 1rem 0rem;
        }
        .experience-cost {
          font-size: 2rem;
          font-weight: bold;
          line-height: 2rem;
          display: flex;
          gap: 0.6rem;
        }
        .experience-discounted {
          font-size: 1.4rem;
          text-decoration: line-through;
        }
        .experience-subDescription {
          font-style: italic;
          font-size: 0.9rem;
        }
        .experience-costDescription {
          line-height: 1rem;
          font-weight: bold;
        }
        .experience-btn-container {
          padding: 1rem 0rem;
        }
        button {
          padding: 0.6rem 1rem;
          border-radius: 2rem;
          border: 1px solid #650e3d;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          min-width: 10rem;
        }
        button:hover {
          background: #650e3dde;
          color: white;
        }
        ul {
          padding-left: 1rem;
          padding-top: 1rem;
        }
        li {
          padding: 0.2rem;
        }
        .learn {
          cursor: pointer;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .poplar {
          text-align: center;
          color: #ffc107;
          font-weight: bold;
          padding: 0.3rem;
          font-size: 1.4rem;
        }
      `}</style>
    </>
  );
};

export default ExperienceCard;

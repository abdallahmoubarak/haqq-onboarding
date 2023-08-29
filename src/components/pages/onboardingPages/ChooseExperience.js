import React from "react";
import ExperienceCard from "../../ExperienceCard";
import PlanSwitch from "../../PlanSwitch";

const ChooseExperience = ({
  setPage,
  plans,
  setSelectedPlan,
  isMonthly,
  setIsMonthly
}) => {
  return (
    <>
      <div className="overflow-auto">
        <div className="switch-container ">
          <PlanSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </div>
        <div className="experiences-container">
          {plans.map((plan, i) => (
            <ExperienceCard
              key={i}
              plan={plan}
              setSelectedPlan={setSelectedPlan}
              isMonthly={isMonthly}
              setPage={setPage}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .switch-container {
          padding-top: 2rem;
        }
        .experiences-container {
          padding: 2rem 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          justify-content: space-evenly;
          overflow: auto;
        }
      `}</style>
    </>
  );
};

export default ChooseExperience;

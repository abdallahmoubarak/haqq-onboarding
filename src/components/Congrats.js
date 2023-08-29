import React from "react";
import Button from "./Button";

const Congrats = ({ setPage, selectedPlan }) => {
  return (
    <>
      <div className="congrats-form">
        <div className="congrats-container flex-column">
          <div className="congrats-title">Thank you for your purchase</div>

          <div
            className="subscription-card"
            style={{
              background: selectedPlan.background,
              color: selectedPlan.color
            }}
          >
            <div className="subscribed-title">You are now subscribed to </div>
            <div className="plan-title">{`MyHAQQ ${selectedPlan.title}`}</div>
            <div className="font-sm italic">Unlock your full potential.</div>
          </div>
        </div>
        <div className="congrats-btn-container">
          <Button
            title="Go to MyHAQQ"
            toggle={true}
            maxWidth={"12rem"}
            onClick={() => setPage((page) => page + 1)}
          />
          <Button
            title="Complete your profile"
            maxWidth={"12rem"}
            onClick={() => setPage((page) => page + 1)}
          />
        </div>
      </div>
      <style jsx>{`
        .congrats-form {
          max-width: 32rem;
          margin: auto;
        }
        .congrats-container {
          padding: 2rem;
        }
        .subscribed-title {
          font-size: 1.4rem;
          font-weight: bold;
        }
        .plan-title {
          font-size: 1.2rem;
        }
        .subscription-card {
          padding: 1rem;
          width: 100%;
          margin: auto;
          border-radius: 1rem;
        }
        .congrats-title {
          font-size: 1.8rem;
          color: #650e3d;
        }
        .congrats-btn-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </>
  );
};
export default Congrats;

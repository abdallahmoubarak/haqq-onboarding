import React from "react";
import Congrats from "../../Congrats";
import Input from "../../Input";
import PaymentCard from "../../PaymentCard";

const DigitizePractice = ({
  selectedPlan,
  isMonthly,
  setPaymentDone,
  paymentDone,
  setPage
}) => {
  const paying = () => {
    setPaymentDone(true);
    // setPage((page) => page + 1);
  };
  return (
    <>
      {paymentDone ? (
        <Congrats setPage={setPage} selectedPlan={selectedPlan} />
      ) : (
        <div className="payment-form">
          <div className="flex-column bank-info">
            <Input placeholder="Name On Card" type="number" />
            <Input
              placeholder="Card Number"
              type="number"
              icon={<img src="/img/visa.svg" alt="" height={12} />}
            />
            <div className="flex flex-wrap">
              <Input placeholder="YY/MM" type="number" />
              <Input placeholder="CVC" type="number" />
            </div>
            <div className="flex flex-wrap">
              <Input placeholder="City" />
              <Input placeholder="Zip/Postal Code" type="number" />
            </div>
            <Input placeholder="Address Line 1" />
            <Input placeholder="Address Line 2" />
          </div>
          <div
            style={{
              background: selectedPlan.background,
              color: selectedPlan.color
            }}
            className="payment-plan-card"
          >
            <PaymentCard
              selectedPlan={selectedPlan}
              isMonthly={isMonthly}
              paying={paying}
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .payment-form {
          display: flex;
          flex-wrap: wrap;
          align-items: start;
          gap: 1rem;
          padding: 1rem;
          padding-top: 2rem;
        }
        .bank-info {
          padding: 1rem;
          flex: 1 1 20rem;
        }
        .payment-plan-card {
          padding: 1rem;
          border-radius: 2rem;
          color: white;
          font-size: 1.3rem;
          flex: 1 1 20rem;
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
      `}</style>
    </>
  );
};

export default DigitizePractice;

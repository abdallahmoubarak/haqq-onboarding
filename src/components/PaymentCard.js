import React, { useEffect, useState } from "react";
import Input from "./Input";

const PaymentCard = ({ selectedPlan, isMonthly, paying }) => {
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [subTotal, setSubTotal] = useState();

  const numberOfUsersChange = (e) => {
    e.target.value < 1 ? setNumberOfUsers(1) : setNumberOfUsers(e.target.value);
  };
  useEffect(
    () =>
      setSubTotal(
        isMonthly
          ? selectedPlan.cost * numberOfUsers
          : selectedPlan.discounted * numberOfUsers * 12
      ),
    [numberOfUsers, isMonthly, selectedPlan]
  );

  return (
    <>
      <div>
        <div className="payment-card-header">
          <span>MyHAQQ {selectedPlan.title}</span>
          <span>
            {isMonthly ? selectedPlan.cost : selectedPlan.discounted} USD
          </span>
        </div>
        <div className="flex payment-section">
          <span className="payment-card-text">
            How many lawyers do you want to onboard to your firm?
          </span>
          <span className="payment-card-input">
            <Input
              placeholder="Number of users"
              type="number"
              onChange={numberOfUsersChange}
            />
          </span>
        </div>
        <div className="flex payment-section">
          <span className="payment-card-text">
            This Promo code is not valid
          </span>
          <span className="payment-card-input">
            <Input placeholder="Promo Code" />
          </span>
        </div>
        <div className="payment-sub-total bold flex">
          <div className="bold">Subtotal</div>
          <div>{subTotal} USD</div>
        </div>
        <div className="payment-sub-total bold flex">
          <div>
            <div className="bold">VAT</div>
            <div className="font-sm">country %</div>
          </div>
          <div>{subTotal * 0.11} USD</div>
        </div>
        <div className="payment-total bold flex">
          <div>
            <div className="font-sm bold">Total Due Now</div>
            <div className="line-height-2">
              {subTotal * 0.11 + subTotal} USD
            </div>
            <div className="font-sm">renewed 12/08</div>
          </div>
          <div>
            <button
              style={{
                background: selectedPlan.buttonBack,
                color: selectedPlan.buttonColor
              }}
              onClick={paying}
              className="button"
            >
              {selectedPlan.buttonText}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .payment-card-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          padding-bottom: 2rem;
          font-size: 1.6rem;
        }
        .payment-card-text {
          font-size: 0.8rem;
          flex: 1 1 80%;
        }
        .payment-card-input {
          flex: 1 1 20%;
        }
        .payment-section {
          border-bottom: 1px solid white;
          padding: 1rem 0rem;
        }
        .payment-sub-total {
          padding: 1rem 0rem;
          border-bottom: 1px solid white;
          justify-content: space-between;
        }
        .payment-total {
          padding: 1rem 0rem;
          justify-content: space-between;
        }
        .line-height-2 {
          line-height: 1.6rem;
        }
      `}</style>
    </>
  );
};
export default PaymentCard;

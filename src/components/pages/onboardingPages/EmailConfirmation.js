import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../Button";

const EmailConfirmation = ({ setEmailVerified }) => {
  useEffect(() => {
    setTimeout(() => setEmailVerified(true), 4000);
  }, [setEmailVerified]);
  const { t } = useTranslation();

  return (
    <>
      <div className="confirmation-container flex">
        <img src="/img/email.svg" alt="" />
        <div className="flex-column">
          <div className="email-confirmation-title">
            {t("emailVerification")}
          </div>
          <div>{t("emailVerificationSubTitle")}</div>
          <Button
            maxWidth={"12rem"}
            title={t("resendEmail")}
            onClick={() => {
              console.log("send email functionality");
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .confirmation-container {
          padding: 2rem;
        }
        .email-confirmation-title {
          font-size: 2rem;
          font-weight: bold;
          color: #650e3d;
        }
      `}</style>
    </>
  );
};

export default EmailConfirmation;

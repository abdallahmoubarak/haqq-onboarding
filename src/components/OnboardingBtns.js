import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OnboardingBtns = ({
  page,
  setPage,
  onBoardingPages,
  backbtn,
  savebtn,
  saveNback,
  nextbtn
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="ob-btn-container">
        {backbtn && (
          <Button
            toggle={true}
            title={t("back")}
            onClick={() => {
              page > 0 && setPage(page - 1);
            }}
          />
        )}
        {saveNback && <Button toggle={true} title={t("saveNback")} />}
        {nextbtn && (
          <Button
            title={t("next")}
            onClick={() => page < onBoardingPages && setPage(page + 1)}
          />
        )}
        {savebtn && <Button title={t("save")} onClick={() => navigate("/")} />}
      </div>
      <style jsx>{`
        .ob-btn-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          width: 100%;
          padding: ${(savebtn || backbtn || nextbtn || saveNback) && "1rem"}
            0rem;
        }
      `}</style>
    </>
  );
};
export default OnboardingBtns;

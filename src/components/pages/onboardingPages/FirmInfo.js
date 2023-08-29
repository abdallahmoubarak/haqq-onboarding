import React from "react";
import Input from "../../Input";
import TextArea from "../../TextArea";
import UploadFirmImg from "../../UploadFirmImg";
import { useTranslation } from "react-i18next";
import DatePicker from "../../DatePicker";

const FirmInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="firm-container flex">
        <div className="firm-img">
          <UploadFirmImg />
        </div>
        <div className="flex-column firm-form">
          <div className="flex flex-wrap">
            <Input placeholder={t("firmName")} />
            <Input placeholder={t("firmWeb")} />
            <DatePicker placeholder={t("year")} title={t("year")} />
          </div>

          <div className="flex flex-wrap">
            <Input placeholder={t("firmOwnerEmail")} />
            <div>
              <div className="font-sm">{t("firmEmailDescription")}</div>
            </div>
          </div>
          <TextArea title={t("about")} />
        </div>
      </div>

      <style jsx>{`
        .firm-container {
          padding: 2rem 0rem;
          gap: 1rem 3rem;
          flex-wrap: wrap;
        }
        .firm-img {
          width: 18rem;
          margin: auto;
        }
        .firm-form {
          flex: 1 1;
          min-width: 18rem;
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default FirmInfo;

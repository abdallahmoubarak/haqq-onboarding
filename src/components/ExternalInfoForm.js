import React, { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useTranslation } from "react-i18next";

const ExternalInfoForm = ({ setList }) => {
  const titleRef = useRef(null);
  const linkRef = useRef(null);
  const notesRef = useRef(null);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const addFormValues = () => {
    setMessage("");
    if (!!titleRef?.current?.value && !!linkRef?.current?.value) {
      setList((list) => [
        ...list,
        {
          title: titleRef?.current?.value,
          link: linkRef?.current?.value,
          notes: notesRef?.current?.value
        }
      ]);
      titleRef.current.value = "";
      linkRef.current.value = "";
      notesRef.current.value = "";
      return;
    }
    setMessage("* Make sure all values are set.");
  };

  return (
    <>
      <div className="flex-column flex-wrap external-info-form">
        <Input placeholder={t("title")} refprop={titleRef} />
        <Input placeholder={t("link")} refprop={linkRef} />
        <Input placeholder={t("notes")} refprop={notesRef} />
        <div className="message">{message}</div>
        <div className="pe-btn-experiance">
          <Button title={t("add")} toggle={true} onClick={addFormValues} />
        </div>
      </div>
      <style jsx>{`
        .external-info-form {
          flex: 1 1 50%;
        }
        .pe-btn-experiance {
          margin: auto;
        }
      `}</style>
    </>
  );
};
export default ExternalInfoForm;

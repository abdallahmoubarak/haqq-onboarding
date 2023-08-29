import React, { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import DatePicker from "./DatePicker";

const EduAndExpForm = ({ title, subTitle, setList }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const notesRef = useRef(null);
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const addFormValues = () => {
    setMessage("");
    if (
      !!titleRef?.current?.value &&
      !!subtitleRef?.current?.value &&
      !!startRef?.current?.value &&
      !!endRef?.current?.value
    ) {
      setList((list) => [
        ...list,
        {
          title: titleRef?.current?.value,
          subTitle: subtitleRef?.current?.value,
          start: startRef?.current?.value,
          end: endRef?.current?.value,
          notes: notesRef?.current?.value
        }
      ]);
      titleRef.current.value = "";
      subtitleRef.current.value = "";
      startRef.current.value = "";
      endRef.current.value = "";
      return;
    }
    setMessage(t("makeSure"));
  };

  return (
    <>
      <div className="flex-column flex-wrap professional-exper-form">
        <Input placeholder={title} refprop={titleRef} />
        <Input placeholder={subTitle} refprop={subtitleRef} />
        <div className="flex flex-wrap">
          <DatePicker
            placeholder={t("dateStart")}
            title={t("dateStart")}
            refprop={startRef}
          />
          <DatePicker
            placeholder={t("dateEnd")}
            title={t("dateEnd")}
            refprop={endRef}
          />
        </div>
        <Input placeholder={t("notes")} refprop={notesRef} />
        <div className="message">{message}</div>
        <div className="pe-btn-experiance">
          <Button title={t("add")} toggle={true} onClick={addFormValues} />
        </div>
      </div>
      <style jsx>{`
        .professional-exper-form {
          flex: 1 1 50%;
        }
        .pe-btn-experiance {
          margin: auto;
        }
      `}</style>
    </>
  );
};
export default EduAndExpForm;

import React, { useRef, useState } from "react";
import { generalValidator } from "../../../utils/generalValidator";
import Button from "../../Button";
import Combobox from "../../Combobox";
import Input from "../../Input";
import DatePicker from "../../DatePicker";
import UploadImg from "../../UploadImg";
import { useTranslation } from "react-i18next";

const PersonalInfo = ({ user, setPage, setUser }) => {
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState(user?.phone);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [title, setTitle] = useState(user?.title);
  const [nationality, setNationality] = useState(user?.nationality);
  const [location, setLocation] = useState(user?.location);
  const [gender, setGender] = useState(user?.gender);
  const [prefix, setPrefix] = useState(user?.prefix);
  const [message, setMessage] = useState(user?.message);
  const DOBRef = useRef();

  const { t } = useTranslation();

  const handleNextbtn = () => {
    setMessage("");
    const user = {
      firstName,
      lastName,
      dob: DOBRef.current.value,
      phone,
      title,
      nationality,
      location,
      gender,
      prefix
    };

    // const { valid, message: msg } = generalValidator(user);
    // if (!valid) return setMessage(msg);

    localStorage.setItem("user", JSON.stringify(user));
    setUser((prevUser) => ({ ...prevUser, ...user }));
    setPage((p) => p + 1);
  };

  return (
    <>
      <div className="personal-container flex">
        <div className="personal-img">
          <UploadImg />
        </div>
        <div className="flex-column personal-form">
          <div className="flex flex-wrap">
            <Combobox
              options={["Mr.", "Ms."]}
              onSelect={(option) => setTitle(option)}
              placeholder={t("title")}
            />
            <Input
              placeholder={t("firstName")}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              placeholder={t("middleName")}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <Input
              placeholder={t("lastName")}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap">
            <Combobox
              options={["Lebanese", "Turkesh"]}
              onSelect={(option) => setNationality(option)}
              placeholder={t("nationality")}
            />
            <Combobox
              options={["Beirut", "Jbeail"]}
              onSelect={(option) => setLocation(option)}
              placeholder={t("location")}
            />
            <DatePicker
              placeholder={t("dateOfBirth")}
              title={t("dateOfBirth")}
              refprop={DOBRef}
            />
            <Combobox
              options={["Male", "Female"]}
              onSelect={(option) => setGender(option)}
              placeholder={t("gender")}
            />
          </div>
          <div className="flex flex-wrap">
            <Combobox
              options={["+961", "+971"]}
              onSelect={(option) => setPrefix(option)}
              placeholder={t("prefix")}
              type="number"
            />
            <Input
              placeholder={t("phoneNumber")}
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="message text-center">{message}</div>
      <div className="personal-btn-container">
        <Button title={t("next")} onClick={handleNextbtn} />
      </div>

      <style jsx>{`
        .personal-container {
          gap: 1rem 3rem;
          flex-wrap: wrap;
          min-height: 100%;
        }
        .personal-img {
          width: 18rem;
          margin: auto;
        }
        .personal-form {
          flex: 1 1;
          min-width: 18rem;
          padding-top: 1rem;
        }
        .personal-btn-container {
          display: flex;
          justify-content: center;
          padding: 1rem 0rem;
        }
      `}</style>
    </>
  );
};

export default PersonalInfo;

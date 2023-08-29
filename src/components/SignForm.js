import React, { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import LangDropDown from "./LangDropDown";
import { signValidator } from "../utils/signValidator";
import { useTranslation } from "react-i18next";

export default function ({ setAuth }) {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const repassRef = useRef();
  const { t } = useTranslation();

  const handleSign = ({ signType }) => {
    setMessage("");
    const user = {
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      email: emailRef?.current?.value.toLowerCase().trim()
    };

    // const { valid, message: msg } = signValidator({
    //   signType,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   email: user.email,
    //   password: passRef?.current?.value,
    //   repass: repassRef?.current?.value,
    //   t
    // });

    // if (!valid) return setMessage("* " + msg);

    localStorage.setItem("user", JSON.stringify(user));
    setAuth(true);
  };

  return (
    <>
      <div className="sign-form">
        <LangDropDown />
        <div className="logo">
          <img src="./img/logo.svg" alt="" />
        </div>
        <div className="title">{isLogin ? t("login") : t("signup")}</div>
        <div className="input-form">
          {!isLogin && (
            <Input placeholder={t("firstName")} refprop={firstNameRef} />
          )}
          {!isLogin && (
            <Input placeholder={t("lastName")} refprop={lastNameRef} />
          )}
          <Input placeholder={t("email")} refprop={emailRef} />
          <Input
            placeholder={t("password")}
            type={"password"}
            withEye={true}
            refprop={passRef}
          />
          {!isLogin && (
            <Input
              placeholder={t("repass")}
              type={"password"}
              withEye={true}
              refprop={repassRef}
            />
          )}

          {isLogin && (
            <div className="forgot">
              {t("forgetPass")} <span> {t("resetPass")}</span>
            </div>
          )}
          <Button
            title={isLogin ? t("login") : t("signup")}
            onClick={() =>
              handleSign({ signType: isLogin ? "login" : "signup" })
            }
          />

          <div className="message">{message}</div>
          <div className="social-section" onClick={() => setAuth(true)}>
            <span className="icon">
              <FcGoogle />
            </span>
            <span className="icon">
              <FaApple />
            </span>
          </div>

          <div className="portion">
            <div className="portion-line"></div>
            <span className="portion-txt">
              {isLogin ? t("dontHaveAccount") : t("haveAccount")}
            </span>
          </div>
          <Button
            toggle={true}
            title={isLogin ? t("signup") : t("login")}
            onClick={() => setIsLogin(!isLogin)}
          />
        </div>
      </div>
      <style jsx>{`
        .sign-container {
          overflow: hidden;
          position: relative;
          flex: 1 1 40%;
          min-width: 20rem;
          padding: 1.6rem;
          overflow: auto;
        }
        .sign-form {
          background: white;
          width: 100%;
          height: 100%;
          padding: 1.6rem;
          overflow: auto;
        }
        .logo {
          width: 6rem;
          margin: auto;
          text-align: center;
        }
        .title {
          color: #650e3d;
          font-size: 2rem;
        }
        .input-form {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .forgot {
          text-align: center;
          font-size: 0.7rem;
          color: #650e3d;
        }
        .forgot span {
          text-decoration: underline;
          cursor: pointer;
        }
        .portion {
          text-align: center;
          background: white;
          text-size: 0.8rem;
          color: #650e3d;
          padding-top: 1rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portion-txt {
          position: absolute;
          white-space: nowrap;
          transform: translateY(-80%);
          background: white;
          padding: 0rem 1rem;
          color: #66023c;
        }
        .portion-line {
          position: absolute;
          width: 100%;
          background: #66023c;
          color: #66023c;
          border: 1px solid #66023c;
          height: 1px;
          margin-bottom: 2rem;
        }

        .social-section {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
        }
        .icon {
          font-size: 3rem;
          cursor: pointer;
        }

        @media only screen and (max-width: 900px) {
          .sign-container {
            flex: 1 1 60%;
          }
        }
        @media only screen and (max-width: 600px) {
          .sign-container {
            padding: 0rem;
          }
          .sign-form {
            height: 100vh;
          }
        }
      `}</style>
    </>
  );
}

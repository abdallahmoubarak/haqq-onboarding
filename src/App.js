import React, { useEffect, useState } from "react";
import Onboarding from "./components/pages/Onboarding";
import SignPage from "./components/pages/SignPage";
import "./styles.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";
import { useTranslation } from "react-i18next";

export default function App() {
  const [auth, setAuth] = useState(false);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const navigate = useNavigate();

  useEffect(() => {
    auth ? navigate("/onboarding") : navigate("/sign");
  }, [auth, navigate]);

  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/sign" element={<SignPage setAuth={setAuth} />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <style jsx>{`
        * {
          direction: ${currentLanguage === "ar" && "rtl"};
        }
      `}</style>
    </>
  );
}

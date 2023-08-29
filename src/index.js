import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

// Load translations
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";
import frTranslation from "./locales/fr.json";

i18n
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      ar: { translation: arTranslation }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

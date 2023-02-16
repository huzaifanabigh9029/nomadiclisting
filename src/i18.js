import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "../src/locales/en/translationEn.json";
import translationAr from "../src/locales/ar/translationAr.json";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

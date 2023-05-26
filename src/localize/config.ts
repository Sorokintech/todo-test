import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "./ru/translation.json";
import translationEN from "./en/translation.json";

// Adding language change to an app
export const resources = {
  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
};

i18next.use(initReactI18next).init({
  lng: "ru",
  debug: true,
  resources,
});

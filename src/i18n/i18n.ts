import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "@locales/en/common.json";
import localeEn from "@locales/en/en.json";

export const defaultNS = "translation";
export const resources = {
  en: {
    translation: localeEn,
    common: commonEn,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  ns: ["translation", "common"],
  fallbackNS: ["common"],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

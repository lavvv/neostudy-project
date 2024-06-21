import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEn from "@locales/en/common.json";
import localeEn from "@locales/en/en.json";

export const defaultNS = "translation";
export const fallbackNS = "common";
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
  defaultNS,
  fallbackNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

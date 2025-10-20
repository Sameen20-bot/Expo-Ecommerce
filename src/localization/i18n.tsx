import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";
import ur from "./ur.json";
import de from "./de.json";
import tr from "./tr.json";

const LANGUAGES = {
  en: {
    translation: en,
  },
  ur: {
    translation: ur,
  },
  ar: {
    translation: ar,
  },
  de: {
    translation: de,
  },
  tr: {
    translation: tr,
  },
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  lng: "en",
  fallbackLng: "en",
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

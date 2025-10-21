import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";
import ur from "./ur.json";
import de from "./de.json";
import tr from "./tr.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,

  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem("LANGUAGE");

      if (savedLanguage) {
        callback(savedLanguage);
        return;
      }
    } catch (error) {
      console.log("Error getting language: ", error);
    }

    callback("en");
  },

  cacheUserLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem("LANGUAGE", lang);
    } catch (error) {
      console.log("Error saving language: ", error);
    }
  },
};

i18n
  .use(LANGUAGE_DETECTOR as any)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
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

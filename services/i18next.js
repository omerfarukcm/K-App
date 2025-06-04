import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import tr from "../locales/tr.json";

export const languageResources = {
    en: {translation: en},
    ar: {translation: ar},
    tr: {translation: tr}
}

i18next.use(initReactI18next).init({
    compatibilityJSON: "v4",
    lng:"tr",
    fallback:"tr",
    resources: languageResources
})

export default i18next;
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../locales/ar.json";
import en from "../locales/en.json";
import tr from "../locales/tr.json";

const LANGUAGE_STORAGE_KEY = "@language_preference";

export const languageResources = {
    en: {translation: en},
    ar: {translation: ar},
    tr: {translation: tr}
}

// Kaydedilmiş dil tercihini yükle
const loadSavedLanguage = async () => {
    try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        return savedLanguage || "tr"; // Eğer kaydedilmiş dil yoksa varsayılan olarak Türkçe
    } catch (error) {
        console.error("Dil tercihi yüklenirken hata oluştu:", error);
        return "tr";
    }
};

// i18next'i başlat
const initI18next = async () => {
    const savedLanguage = await loadSavedLanguage();
    
    i18next.use(initReactI18next).init({
        compatibilityJSON: "v4",
        lng: savedLanguage,
        fallback: "tr",
        resources: languageResources
    });
};

// Dil değişikliğini kaydet
export const changeLanguage = async (language) => {
    try {
        await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
        await i18next.changeLanguage(language);
    } catch (error) {
        console.error("Dil tercihi kaydedilirken hata oluştu:", error);
    }
};

initI18next();

export default i18next;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const loadTranslations = async (language: string) => {
  try {
    const response = await fetch(`/locals/${language}.json`);
    return await response.json();
  } catch (error) {
    console.warn(`Failed to load translations for ${language}`, error);
    return {};
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_title: "Welcome to ",
        welcome_highlight: "Mantine",
        welcome_description_before_link: "This starter Vite project includes a minimal setup. If you want to learn more about Mantine + Vite integration, follow",
        welcome_link_text: "this guide",
        welcome_description_after_link: ". To get started edit pages/Home.page.tsx file."
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const supportedLanguages = ['ar', 'de', 'es', 'fa', 'he', 'ptbr', 'ur'];

supportedLanguages.forEach(async (lang) => {
  const translations = await loadTranslations(lang);
  const langCode = lang === 'ptbr' ? 'pt-BR' : lang;
  i18n.addResourceBundle(langCode, 'translation', translations);
});

export default i18n;

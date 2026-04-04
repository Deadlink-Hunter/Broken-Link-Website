import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locals/de.json';
import enTranslations from './locals/en.json';
import esTranslations from './locals/es.json';
import frTranslations from './locals/fr.json';
import heTranslations from './locals/he.json';
import itTranslations from './locals/it.json';
import nlTranslations from './locals/nl.json';
import ptBrTranslations from './locals/ptbr.json';
import turTranslations from './locals/tur.json';
import { syncDocumentLanguage } from './syncDocumentLanguage';

const savedLang = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    ptbr: {
      translation: ptBrTranslations,
    },
    de: {
      translation: deTranslations,
    },
    tur: {
      translation: turTranslations,
    },
    fr: {
      translation: frTranslations,
    },
    it: {
      translation: itTranslations,
    },
    nl: {
      translation: nlTranslations,
    },
    he: {
      translation: heTranslations,
    },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', syncDocumentLanguage);
syncDocumentLanguage(i18n.language);

export default i18n;

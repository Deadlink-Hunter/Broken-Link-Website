import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from '../public/locals/de.json';
import enTranslations from '../public/locals/en.json';
import esTranslations from '../public/locals/es.json';
import frTranslations from '../public/locals/fr.json';
import itTranslations from '../public/locals/it.json';
import nlTranslations from '../public/locals/nl.json';
import ptBrTranslations from '../public/locals/ptbr.json';
import turTranslations from '../public/locals/tur.json';

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
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

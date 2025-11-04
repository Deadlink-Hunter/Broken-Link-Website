import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslations from './locals/de.json';
import enTranslations from './locals/en.json';
import esTranslations from './locals/es.json';
import ptBrTranslations from './locals/ptbr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    'pt-BR': {
      translation: ptBrTranslations,
    },
    de: {
      translation: deTranslations,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

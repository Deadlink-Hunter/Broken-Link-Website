import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locals/en.json';
import esTranslations from './locals/es.json';
import ptBrTranslations from './locals/ptbr.json';
import hiTranslations from './locals/hi.json';

i18n
    .use(initReactI18next)
    .init({
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
        hi: {
            translation: hiTranslations,
        },
    },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import en from '../public/locals/en.json';

const res = await fetch("/locals/en.json");
const en = await res.json();


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

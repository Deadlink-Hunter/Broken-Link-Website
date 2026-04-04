import i18n from 'i18next';
import { DEFAULT_LANGUAGE_LABEL, SUPPORTED_LANGUAGES } from '@/constants/languages';

export const useLanguage = () => {
  const currentLanguageLabel =
    SUPPORTED_LANGUAGES.find((lang) => lang.value === i18n.language)?.label ||
    DEFAULT_LANGUAGE_LABEL;

  const handleLanguageChange = (label: string | null) => {
    if (!label) {
      return;
    }

    const selected = SUPPORTED_LANGUAGES.find((l) => l.label === label);
    if (selected) {
      i18n.changeLanguage(selected.value);
      localStorage.setItem('lang', selected.value);
    }
  };

  return {
    currentLanguageLabel,
    handleLanguageChange,
  };
};

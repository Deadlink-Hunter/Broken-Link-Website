import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'pt-BR', label: 'Português (BR)' },
    { value: 'hi', label: 'हिन्दी' },
  ];

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <Select
      label="Language"
      placeholder="Select language"
      data={languages}
      value={i18n.language}
      onChange={handleLanguageChange}
      size="sm"
      w={200}
    />
  );
}

import { ActionIcon, Group, Menu, Text } from '@mantine/core';
import { IconLanguage, IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  isRTL: boolean;
}

const languages: Language[] = [
  { code: 'en', name: 'English', isRTL: false },
  { code: 'ar', name: 'العربية', isRTL: true },
  { code: 'he', name: 'עברית', isRTL: true },
  { code: 'fa', name: 'فارسی', isRTL: true },
  { code: 'ur', name: 'اردو', isRTL: true },
  { code: 'es', name: 'Español', isRTL: false },
  { code: 'de', name: 'Deutsch', isRTL: false },
  { code: 'pt-BR', name: 'Português (BR)', isRTL: false },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const rtlLanguages = ['ar', 'he', 'heb', 'fa', 'ur'];
  const isCurrentRTL = rtlLanguages.includes(i18n.language);
  
  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <Group gap="xs">
      <ActionIcon variant="subtle" color="gray" size="lg">
        {isCurrentRTL ? (
          <IconTextDirectionRtl size={18} />
        ) : (
          <IconTextDirectionLtr size={18} />
        )}
      </ActionIcon>
      
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <ActionIcon variant="subtle" color="blue" size="lg">
            <IconLanguage size={18} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Select Language</Menu.Label>
          {languages.map((language) => (
            <Menu.Item
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              style={{
                backgroundColor: i18n.language === language.code ? 'var(--mantine-color-blue-light)' : undefined,
                textAlign: language.isRTL ? 'right' : 'left',
                direction: language.isRTL ? 'rtl' : 'ltr',
              }}
            >
              <Group justify="space-between" w="100%">
                <Text size="sm">{language.name}</Text>
                {language.isRTL && <IconTextDirectionRtl size={14} />}
              </Group>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

import { useState } from 'react';
import logo from '/logo.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { Burger } from '@mantine/core';
import {
  DEFAULT_LANGUAGE_LABEL,
  LANGUAGE_OPTIONS,
  SUPPORTED_LANGUAGES,
} from '@/constants/languages';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import { Select } from '../UI/Select/Select';
import NavbarLinks from './NavbarLinks';
import { mobileStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const { t } = useTranslation();
  const [displayLinks, setDisplayLinks] = useState(false);

  const currentLanguageLabel =
    SUPPORTED_LANGUAGES.find((lang) => lang.value === i18n.language)?.label ||
    DEFAULT_LANGUAGE_LABEL;

  const handleLanguageChange = (label: string | null) => {
    if (!label) {
      return;
    }
    const selected = SUPPORTED_LANGUAGES.find((l) => l.label === label)!;
    i18n.changeLanguage(selected.value);
    localStorage.setItem('lang', selected.value);
  };

  function handleDisplayLinks() {
    setDisplayLinks((prev) => !prev);
  }

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
          <Link labelStyle={styles.header} href='/' label={t('navbar.header')} />
        </div>
        <Burger
          style={styles.burger}
          size={18}
          opened={displayLinks}
          onClick={handleDisplayLinks}
        />
      </div>
      {displayLinks && (
        <div style={styles.linksContainer}>
          <NavbarLinks displayLinks={displayLinks} variant='mobile' />
          <Select
            aria-label='Language'
            data={LANGUAGE_OPTIONS}
            value={currentLanguageLabel}
            onChange={handleLanguageChange}
            allowDeselect={false}
            style={styles.languageSelect}
          />
          <ThemeToggle />
        </div>
      )}
      <Divider variant='muted' style={styles.navDivider} />
    </div>
  );
}

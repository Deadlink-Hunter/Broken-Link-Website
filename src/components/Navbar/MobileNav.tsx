import { useState } from 'react';
import { IconWorld } from '@tabler/icons-react';
import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';
import { Burger } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { LANGUAGE_OPTIONS } from '@/constants/languages';
import { theme } from '@/theme';
import { useLanguage } from '../Hooks/useLanguage';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import { Select } from '../UI/Select/Select';
import NavbarLinks from './NavbarLinks';
import { languageSelectProps, mobileStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const { t } = useTranslation();
  const [displayLinks, setDisplayLinks] = useState(false);
  const { currentLanguageLabel, handleLanguageChange } = useLanguage();

  function handleDisplayLinks() {
    setDisplayLinks((prev) => !prev);
  }

  const isScreenXS = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
          <Link labelStyle={styles.header(isScreenXS)} href='/' label={t('navbar.header')} />
        </div>
        <div style={styles.buttonContainer}>
          <Select
            aria-label='Language'
            data={LANGUAGE_OPTIONS}
            value={currentLanguageLabel}
            onChange={handleLanguageChange}
            leftSection={<IconWorld size={14} />}
            {...languageSelectProps}
          />
          <ThemeToggle />
          <Burger
            style={styles.burger}
            size={18}
            opened={displayLinks}
            onClick={handleDisplayLinks}
          />
        </div>
      </div>
      {displayLinks && (
        <div style={styles.linksContainer}>
          <NavbarLinks displayLinks={displayLinks} variant='mobile' />
        </div>
      )}
      <Divider variant='muted' style={styles.navDivider} />
    </div>
  );
}

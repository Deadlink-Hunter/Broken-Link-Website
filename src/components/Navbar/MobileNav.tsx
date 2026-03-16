import { useState } from 'react';
import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';
import { Burger } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import NavbarLinks from './NavbarLinks';
import { getMobileStyles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function MobileNav() {
  const { t } = useTranslation();
  const [displayLinks, setDisplayLinks] = useState(false);
  const isDark = useIsDark();
  const styles = getMobileStyles(isDark);

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
          <ThemeToggle />
        </div>
      )}
      <Divider variant='muted' style={styles.navDivider} />
    </div>
  );
}

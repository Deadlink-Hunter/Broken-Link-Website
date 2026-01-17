import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Burger } from '@mantine/core';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import NavbarLinks from './NavbarLinks';
import { mobileStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';
import { useLocation } from 'react-router-dom';

export default function MobileNav() {
  const { t } = useTranslation();
  const [displayLinks, setDisplayLinks] = useState(false);
  const location = useLocation()

  function handleDisplayLinks() {
    setDisplayLinks((prev) => !prev);
  }

  useEffect(() => {
    setDisplayLinks(false)
  }, [location.pathname])

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <img alt='Deadlink logo' style={styles.logoSize} src='/logo.svg' />
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
        </div>
      )}
      <Divider variant='muted' style={styles.navDivider} />
      <ThemeToggle />
    </div>
  );
}

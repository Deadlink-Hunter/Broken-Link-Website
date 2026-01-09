import { useState } from 'react';
// import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
import { Burger } from '@mantine/core';
import logo from '../../../public/logo.svg';
// import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
// import { Typography } from '../UI/Typography/Typography';
import NavbarLinks from './NavbarLinks';
import { mobileStyles as styles } from './styles';

export default function MobileNav() {
  const { t } = useTranslation();
  const [displayLinks, setDisplayLinks] = useState(false);

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
        </div>
      )}
      <Divider variant='muted' style={styles.navDivider} />
    </div>
  );
}

import { useState } from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import { Burger } from '@mantine/core';
import logo from '../../../public/logo.svg';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import { Typography } from '../UI/Typography/Typography';
import { NAVIGATION_LINKS } from './Navbar';
import { mobileStyles as styles } from './styles';

export default function MobileNav() {
  const [displayLinks, setDisplayLinks] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  function handleDisplayLinks() {
    setDisplayLinks((prev) => !prev);
  }

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
          <Link labelStyle={styles.header} href='/' label='Deadlink-Hunter' disableHover />
        </div>
        <Burger
          style={styles.burger}
          size={styles.burgerSize}
          opened={displayLinks}
          onClick={handleDisplayLinks}
        />
      </div>
      {displayLinks && (
        <div style={styles.linksContainer}>
          {NAVIGATION_LINKS.map((link) => {
            const isPathMatch = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                label={link.label}
                labelColor={styles.linkColor(isPathMatch)}
                labelStyle={styles.link}
                rootStyle={styles.linkContainer(isPathMatch)}
              />
            );
          })}
          <Divider variant={styles.dividerVariant} style={styles.linksDivider} />

          <div style={styles.buttonContainer}>
            <Button style={styles.button}>
              <IconBrandGithub color={styles.buttonIconColor} size={16} />
              <Typography size={styles.buttonTextSize} style={styles.buttonText}>
                View on GitHub
              </Typography>
            </Button>
          </div>
        </div>
      )}
      <Divider variant={styles.dividerVariant} style={styles.navDivider} />
    </div>
  );
}

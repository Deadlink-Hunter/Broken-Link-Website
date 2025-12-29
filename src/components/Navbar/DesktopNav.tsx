import { IconBrandGithub } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import logo from '../../../public/logo.svg';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import { NAVIGATION_LINKS } from './Navbar';
import { desktopStyles as styles } from './styles';

export default function DesktopNav() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.headerContainer}>
            <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
            <Link labelStyle={styles.header} href='/' label='Deadlink-Hunter' disableHover />
          </div>
          <div style={styles.linksContainer}>
            {NAVIGATION_LINKS.map((link) => {
              const isPathMatch = pathname === link.href;
              return (
                <Link
                  hoverColor={styles.linkHoverColor(isPathMatch)}
                  labelColor={styles.linkColor(isPathMatch)}
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  labelStyle={styles.linkStyle}
                />
              );
            })}
          </div>
          {/* TODO - add option for button hover effect */}
          <Button style={styles.button}>
            <IconBrandGithub style={styles.buttonIcon} size={18} />
            GitHub
          </Button>
        </div>
      </div>

      <Divider style={styles.divider} />
    </>
  );
}

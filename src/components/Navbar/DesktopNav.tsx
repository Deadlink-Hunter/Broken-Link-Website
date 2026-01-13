import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../UI/Button/Button';
import { Divider } from '../UI/Divider/Divider';
import { Link } from '../UI/Link/Link';
import NavbarLinks from './NavbarLinks';
import { desktopStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function DesktopNav() {
  const { t } = useTranslation();
  return (
    <>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.headerContainer}>
            <img alt='Deadlink logo' style={styles.logoSize} src='/logo.svg' />
            <Link labelStyle={styles.header} href='/' label={t('navbar.header')} disableHover />
          </div>
          <div style={styles.linksContainer}>
            <NavbarLinks variant='desktop' />
          </div>
          {/* TODO - add option for button hover effect */}
          <Button style={styles.button}>
            <IconBrandGithub style={styles.buttonIcon} size={18} />
            {t('navbar.github')}
          </Button>
          <ThemeToggle />
        </div>
      </div>

      <Divider style={styles.divider} />
    </>
  );
}

import { IconBrandGithub } from '@tabler/icons-react';
import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';
import { LinkButton, LinkTarget } from '../UI/Button/LinkButton';
import { Link } from '../UI/Link/Link';
import NavbarLinks from './NavbarLinks';
import { desktopStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function DesktopNav() {
  const { externalLinks } = useNavigationLinks();
  const { t } = useTranslation();
  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
        <Link labelStyle={styles.header} href='/' label={t('navbar.header')} disableHover />
      </div>
      <div style={styles.linksContainer}>
        <NavbarLinks variant='desktop' />
      </div>
      {/* TODO - add option for button hover effect */}
      <div style={styles.buttonContainers}>
        <LinkButton
          href={externalLinks.GITHUB.REPO}
          target={LinkTarget.Blank}
          style={styles.button}
          variant='primary'
        >
          <IconBrandGithub width={36} height={18} />
        </LinkButton>
        <ThemeToggle />
      </div>
    </div>
  );
}

import { IconBrandGithub, IconWorld } from '@tabler/icons-react';
import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';
import { LANGUAGE_OPTIONS } from '@/constants/languages';
import { useLanguage } from '../Hooks/useLanguage';
import { LinkButton, LinkTarget } from '../UI/Button/LinkButton';
import { Link } from '../UI/Link/Link';
import { Select } from '../UI/Select/Select';
import NavbarLinks from './NavbarLinks';
import { languageSelectProps, desktopStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function DesktopNav() {
  const { externalLinks } = useNavigationLinks();
  const { t } = useTranslation();
  const { currentLanguageLabel, handleLanguageChange } = useLanguage();

  return (
    <nav style={styles.container}>
      <div style={styles.headerContainer}>
        <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
        <Link labelStyle={styles.header} href='/' label={t('navbar.header')} disableHover />
      </div>
      <div style={styles.linksContainer}>
        <NavbarLinks variant='desktop' />
      </div>

      <div style={styles.buttonContainers}>
        <Select
          aria-label='Language'
          data={LANGUAGE_OPTIONS}
          value={currentLanguageLabel}
          onChange={handleLanguageChange}
          leftSection={<IconWorld size={14} />}
          {...languageSelectProps}
        />
        <ThemeToggle />
        <LinkButton
          href={externalLinks.GITHUB.REPO}
          target={LinkTarget.Blank}
          style={styles.button}
        >
          <IconBrandGithub width={30} size={18} />
        </LinkButton>
      </div>
    </nav>
  );
}

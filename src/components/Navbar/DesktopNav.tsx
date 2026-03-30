import { IconBrandGithub } from '@tabler/icons-react';
import logo from '/logo.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';
import {
  DEFAULT_LANGUAGE_LABEL,
  LANGUAGE_OPTIONS,
  SUPPORTED_LANGUAGES,
} from '@/constants/languages';
import { LinkButton, LinkTarget } from '../UI/Button/LinkButton';
import { Link } from '../UI/Link/Link';
import { Select } from '../UI/Select/Select';
import NavbarLinks from './NavbarLinks';
import { desktopStyles as styles } from './styles';
import { ThemeToggle } from './ThemeToggle';

export default function DesktopNav() {
  const { externalLinks } = useNavigationLinks();
  const { t } = useTranslation();

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

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <img alt='Deadlink logo' style={styles.logoSize} src={logo} />
        <Link labelStyle={styles.header} href='/' label={t('navbar.header')} disableHover />
      </div>
      <div style={styles.linksContainer}>
        <NavbarLinks variant='desktop' />
      </div>

      <div style={styles.buttonContainers}>
        <LinkButton
          href={externalLinks.GITHUB.REPO}
          target={LinkTarget.Blank}
          style={styles.button}
          variant='primary'
        >
          <IconBrandGithub width={36} height={18} />
        </LinkButton>

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
    </div>
  );
}

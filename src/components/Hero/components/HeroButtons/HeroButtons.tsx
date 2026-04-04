import { IconBrandGithub, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useNavigationLinks } from '@/components/Hooks/useNavigationLinks';
import { Button } from '@/components/UI/Button/Button';
import { LinkButton, LinkTarget } from '@/components/UI/Button/LinkButton';
import { ROUTES } from '@/constants/routes.consts';
import classes from './HeroButtons.module.css';

export const HeroButtons = () => {
  const { externalLinks } = useNavigationLinks();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScanButtonPressed = () => {
    navigate(ROUTES.SCANNER);
  };

  return (
    <div className={classes.buttons}>
      <Button
        onClick={handleScanButtonPressed}
        className={classes.startButton}
        leftSection={<IconSearch className={classes.buttonIcon} />}
      >
        {t('hero.buttons.startScanning')}
      </Button>
      <LinkButton
        href={externalLinks.GITHUB.REPO}
        target={LinkTarget.Blank}
        variant='white'
        className={classes.githubButton}
      >
        <IconBrandGithub className={classes.buttonIcon} />
        {t('hero.buttons.viewOnGitHub')}
      </LinkButton>
    </div>
  );
};

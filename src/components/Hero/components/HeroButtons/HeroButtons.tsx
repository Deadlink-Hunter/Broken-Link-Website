import { IconBrandGithub, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { ROUTES } from '@/constants/routes.consts';
import classes from './HeroButtons.module.css';

export const HeroButtons = () => {
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
      <Button variant='white' className={classes.githubButton}>
        <a href={HERO_CONSTANTS.GITHUB_URL} target='_blank' rel='noopener noreferrer'>
          <IconBrandGithub className={classes.buttonIcon} />
          {t('hero.buttons.viewOnGitHub')}
        </a>
      </Button>
    </div>
  );
};

import { Box } from '@mantine/core';
import { IconSearch, IconBrandGithub } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { ROUTES } from '@/constants/routes.consts';
import { CONSTANTS } from '@/constants';
import { heroStyles } from '../styles';

export const HeroButtons = () => {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate(`/${ROUTES.SCANNER}`);
  };

  const handleViewOnGithub = () => {
    window.open(CONSTANTS.HERO.URLS.GITHUB_REPO, '_blank');
  };

  return (
    <Box style={heroStyles.buttonsContainer}>
      <div style={heroStyles.buttonsDesktop}>
        <Button
          variant="primary"
          size="lg"
          leftSection={<IconSearch size={18} />}
          onClick={handleStartScanning}
          style={heroStyles.primaryButton}
        >
          {CONSTANTS.HERO.BUTTONS.START_SCANNING}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          leftSection={<IconBrandGithub size={18} />}
          onClick={handleViewOnGithub}
          style={heroStyles.outlineButton}
        >
          {CONSTANTS.HERO.BUTTONS.VIEW_ON_GITHUB}
        </Button>
      </div>

      <div style={heroStyles.buttonsMobile}>
        <Button
          variant="primary"
          size="lg"
          leftSection={<IconSearch size={18} />}
          onClick={handleStartScanning}
          style={heroStyles.primaryButton}
        >
          {CONSTANTS.HERO.BUTTONS.START_SCANNING}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          leftSection={<IconBrandGithub size={18} />}
          onClick={handleViewOnGithub}
          style={heroStyles.outlineButton}
        >
          {CONSTANTS.HERO.BUTTONS.VIEW_ON_GITHUB}
        </Button>
      </div>
    </Box>
  );
};

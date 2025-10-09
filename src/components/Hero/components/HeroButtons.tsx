import { Box, Group, Stack } from '@mantine/core';
import { IconSearch, IconBrandGithub } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/UI/Button/Button';
import { ROUTES } from '@/constants/routes.consts';
import { HERO_CONSTANTS } from '@/constants/hero.consts';
import { heroStyles } from '../styles';

export const HeroButtons = () => {
  const navigate = useNavigate();

  const handleStartScanning = () => {
    navigate(`/${ROUTES.SCANNER}`);
  };

  const handleViewOnGithub = () => {
    window.open(HERO_CONSTANTS.URLS.GITHUB_REPO, '_blank');
  };

  return (
    <Box style={heroStyles.buttonsContainer}>
      <Group style={heroStyles.buttonsDesktop}>
        <Button
          variant="primary"
          size="lg"
          leftSection={<IconSearch size={18} />}
          onClick={handleStartScanning}
          style={heroStyles.primaryButton}
        >
          {HERO_CONSTANTS.BUTTONS.START_SCANNING}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          leftSection={<IconBrandGithub size={18} />}
          onClick={handleViewOnGithub}
          style={heroStyles.outlineButton}
        >
          {HERO_CONSTANTS.BUTTONS.VIEW_ON_GITHUB}
        </Button>
      </Group>

      <Stack style={heroStyles.buttonsMobile}>
        <Button
          variant="primary"
          size="lg"
          leftSection={<IconSearch size={18} />}
          onClick={handleStartScanning}
          style={heroStyles.primaryButton}
        >
          {HERO_CONSTANTS.BUTTONS.START_SCANNING}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          leftSection={<IconBrandGithub size={18} />}
          onClick={handleViewOnGithub}
          style={heroStyles.outlineButton}
        >
          {HERO_CONSTANTS.BUTTONS.VIEW_ON_GITHUB}
        </Button>
      </Stack>
    </Box>
  );
};

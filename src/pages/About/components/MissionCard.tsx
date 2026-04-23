import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { largeParagraphStyle, LargeTitleStyle, missionCardStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { Card } from '@mantine/core'; 

interface MissionCardProps {
  title: string;
  description: string;
}

export const MissionCard = ({ title, description }: MissionCardProps) => {
  const isDark = useIsDark();
const { t } = useTranslation();
  return (
    <Card style={missionCardStyles}>
      <Typography variant='title' style={LargeTitleStyle}>
        {t('our_mission_card_title')}
      </Typography>
      <Typography variant='primary' style={largeParagraphStyle}>
        {t('our_mission_card_description')}
      </Typography>
    </Card>
  );

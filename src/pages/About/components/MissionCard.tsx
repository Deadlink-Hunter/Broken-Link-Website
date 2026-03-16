import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { getMissionCardStyles, getParagraphStyle, getTitleStyle } from './styles';

export const MissionCard = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();
  const missionCardStyles = getMissionCardStyles(isDark);
  const titleStyle = getTitleStyle(isDark);
  const paragraphStyle = getParagraphStyle(isDark);

  return (
    <Card style={missionCardStyles}>
      <Typography variant='primary' style={titleStyle}>
        {t('our_mission_card_title')}
      </Typography>
      <Typography variant='primary' style={paragraphStyle}>
        {t('our_mission_card_description')}
      </Typography>
    </Card>
  );
};

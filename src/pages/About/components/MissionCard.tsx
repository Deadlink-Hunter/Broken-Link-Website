import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { missionCardStyles, paragraphStyle, titleStyle } from './styles';

export const MissionCard = () => {
  const { t } = useTranslation();

  return (
    <Card style={missionCardStyles}>
      <Typography variant='title' style={titleStyle}>
        {t('our_mission_card_title')}
      </Typography>
      <Typography variant='primary' style={paragraphStyle}>
        {t('our_mission_card_description')}
      </Typography>
    </Card>
  );
};

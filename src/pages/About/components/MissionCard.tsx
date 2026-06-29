import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { missionCardStyles } from './styles';

interface MissionCardProps {
  title: string;
  description: string;
}

export const MissionCard = ({ title, description }: MissionCardProps) => {
  const isDark = useIsDark();
  const { t } = useTranslation();
  const styles = missionCardStyles(isDark);
  return (
    <Card style={styles.card}>
      <Typography variant='title' style={styles.title}>
        {t(title)}
      </Typography>
      <Typography variant='primary' style={styles.paragraph}>
        {t(description)}
      </Typography>
    </Card>
  );
};

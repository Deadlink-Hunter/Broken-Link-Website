import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { missionCardStyles, missionDescriptionStyle, missionTitleStyle } from './styles';

interface MissionCardProps {
  title: string;
  description: string;
}

export const MissionCard = ({ title, description }: MissionCardProps) => {
  const isDark = useIsDark();

  return (
    <Card style={missionCardStyles(isDark)}>
      <Typography style={missionTitleStyle(isDark)}>{title}</Typography>
      <Typography style={missionDescriptionStyle(isDark)}>{description}</Typography>
    </Card>
  );
};

import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { missionCardStyles } from './styles';

interface MissionCardProps {
  title: string;
  description: string;
}

export const MissionCard = ({ title, description }: MissionCardProps) => {
  const isDark = useIsDark();

  return (
    <div style={missionCardStyles(isDark)}>
      <Typography variant='title'>{title}</Typography>

      <Typography variant='primary'>{description}</Typography>
    </div>
  );
};

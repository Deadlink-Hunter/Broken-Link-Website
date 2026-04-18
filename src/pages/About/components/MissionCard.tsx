import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { missionCardStyles, missionDescriptionStyle, missionTitleStyle } from './styles';

interface MissionCardProps {
  title: string;
  description: string;
}

export const MissionCard = ({ title, description }: MissionCardProps) => {
  const isDark = useIsDark();

  return (
    <div style={missionCardStyles(isDark)}>
      <Typography variant="title" style={{ ...missionTitleStyle(isDark), color: undefined }}>
        {title}
      </Typography>
      
      <Typography variant="primary" style={{ ...missionDescriptionStyle(isDark), color: undefined }}>
        {description}
      </Typography>
    </div>
  );
};
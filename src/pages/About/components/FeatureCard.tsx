import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { Icon } from './Icon';
import { IconType } from './IconTypes';
import { featureCardStyles, paragraphStyle, titleStyle } from './styles';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const isDark = useIsDark();

  return (
    <div style={featureCardStyles(isDark)}>
      <Icon icon={icon} />
      <Typography variant='title' style={titleStyle}>
        {title}
      </Typography>
      <Typography style={paragraphStyle}>{description}</Typography>
    </div>
  );
};

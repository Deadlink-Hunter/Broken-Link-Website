import { Icon } from './Icon';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { featureCardStyles, titleStyle, paragraphStyle } from './styles';
import { IconType } from './IconTypes';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card style={featureCardStyles}>
      <Icon icon={icon} />
      <Typography variant="title" style={titleStyle}>
        {title}
      </Typography>
      <Typography style={paragraphStyle}>
        {description}
      </Typography>
    </Card>
  );
};
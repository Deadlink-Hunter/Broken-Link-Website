import { Card } from '@/components/UI/Card/Card';
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
  return (
    <Card style={featureCardStyles}>
      <Icon icon={icon} />
      <Typography variant='title' style={titleStyle}>
        {title}
      </Typography>
      <Typography variant='secondary' style={paragraphStyle}>
        {description}
      </Typography>
    </Card>
  );
};

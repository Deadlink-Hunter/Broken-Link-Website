import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { featureCardStyles, paragraphStyle, titleStyle } from './styles';
import { Icon, IconType } from './Icon';

export const FeatureCard = (
  {
    icon,
    title,
    description,
  }: {
    icon: IconType;
    title: string;
    description: string;
  }
) => {
  return (
    <Card style={featureCardStyles}>
      <Icon icon={icon} />
      <Typography variant="title" style={titleStyle}>
        {title}
      </Typography>
      <Typography variant="primary" style={paragraphStyle}>
        {description}
      </Typography>
    </Card>
  );
};

import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { Icon } from './Icon';
import { featureCardStyles, paragraphStyle, titleStyle } from './styles';

export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
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

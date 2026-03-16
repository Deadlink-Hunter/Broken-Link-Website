import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { Icon } from './Icon';
import { getFeatureCardStyles, getParagraphStyle, getTitleStyle } from './styles';

export const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const isDark = useIsDark();
  const featureCardStyles = getFeatureCardStyles(isDark);
  const titleStyle = getTitleStyle(isDark);
  const paragraphStyle = getParagraphStyle(isDark);

  return (
    <Card style={featureCardStyles}>
      <Icon icon={icon} />
      <Typography variant='primary' style={titleStyle}>
        {title}
      </Typography>
      <Typography variant='primary' style={paragraphStyle}>
        {description}
      </Typography>
    </Card>
  );
};

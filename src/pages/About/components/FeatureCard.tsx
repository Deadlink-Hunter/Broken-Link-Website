import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { Icon } from './Icon';
import { IconType } from './IconTypes';
import { featureCardStyles } from './styles';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const isDark = useIsDark();
  const style = featureCardStyles(isDark);
  return (
    <Card style={style.featureCard}>
      <Icon icon={icon} />
      <Typography variant='title' style={style.title}>
        {title}
      </Typography>
      <Typography variant='secondary' style={style.description}>
        {description}
      </Typography>
    </Card>
  );
};

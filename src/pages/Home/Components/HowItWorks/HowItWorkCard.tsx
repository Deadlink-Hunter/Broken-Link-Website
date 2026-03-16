import { CSSProperties, ReactNode } from 'react';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { getHowItWorksStyles } from './styles';

interface HowItWorkCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stepNumber: number;
  iconStyle: CSSProperties;
}

export const HowItWorkCard = ({
  title,
  description,
  icon,
  stepNumber,
  iconStyle,
}: HowItWorkCardProps) => {
  const isDark = useIsDark();
  const howItWorksStyles = getHowItWorksStyles(isDark);

  return (
    <Card style={howItWorksStyles.card}>
      <div style={howItWorksStyles.stepBadge}>{stepNumber}</div>
      <div style={iconStyle}>{icon}</div>
      <Typography variant='primary' style={howItWorksStyles.cardTitle}>
        {title}
      </Typography>
      <Typography variant='primary' style={howItWorksStyles.cardDescription}>
        {description}
      </Typography>
    </Card>
  );
};

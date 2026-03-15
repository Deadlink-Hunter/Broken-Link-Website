import { CSSProperties, ReactNode } from 'react';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

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
  return (
    <Card style={howItWorksStyles.card}>
      <div style={howItWorksStyles.stepBadge}>{stepNumber}</div>
      <div style={iconStyle}>{icon}</div>
      <Typography variant='title'>{title}</Typography>
      <Typography variant='description'>{description}</Typography>
    </Card>
  );
};

import { ReactNode } from 'react';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { cardIconWrapper, howItWorksStyles } from './styles';

interface HowItWorkCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stepNumber: number;
  iconFrom: string;
  iconTo: string;
}

export const HowItWorkCard = ({ title, description, icon, stepNumber, iconFrom, iconTo }: HowItWorkCardProps) => {
  return (
    <Card style={howItWorksStyles.card}>
      <div style={howItWorksStyles.stepBadge}>{stepNumber}</div>
      <div style={cardIconWrapper(iconFrom, iconTo)}>{icon}</div>
      <Typography variant='title'>{title}</Typography>
      <Typography variant='description'>{description}</Typography>
    </Card>
  );
};

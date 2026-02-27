import { ReactNode } from 'react';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { howItWorksStyles } from './styles';

interface HowItWorkCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const HowItWorkCard = ({ title, description, icon }: HowItWorkCardProps) => {
  return (
    <Card style={howItWorksStyles.card}>
      <div>{icon}</div>
      <Typography variant='title'>{title}</Typography>
      <Typography variant='description'>{description}</Typography>
    </Card>
  );
};

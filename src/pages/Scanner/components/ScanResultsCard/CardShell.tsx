import type { CSSProperties, ReactNode } from 'react';
import { IconAlertCircle } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { scanPageStyle } from '../styles';

interface CardShellProps {
  title: string;
  contentStyle: CSSProperties;
  children: ReactNode;
}

export const CardShell = ({ title, contentStyle, children }: CardShellProps) => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <Card withBorder style={scanPageStyle.scanCardStyle}>
      <div style={scanPageStyle.cardHeader}>
        <IconAlertCircle style={scanPageStyle.alertIcon} />
        <Typography style={scanPageStyle.cardTitle(isDark)}>{t(title)}</Typography>
      </div>
      <div style={contentStyle}>{children}</div>
    </Card>
  );
};

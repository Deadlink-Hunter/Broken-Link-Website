import { CSSProperties } from 'react';
import { theme } from '@/theme';

const colors = theme.colors;

export const pageWrapperStyle: CSSProperties = {
  width: '100%',
  maxWidth: '80rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6rem 1.5rem',
  margin: '0 auto',
};

export const centerGrid = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing['2xl'],
};

export const smallContainerStyle = {
  display: 'grid',
  maxWidth: 'max-content',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr',
};

export const bigContainerStyle = {
  display: 'grid',
  maxWidth: 'max-content',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr 1fr',
};

export const featureCardStyles = {
  backgroundColor: colors.primary[7],
  boxShadow: `0 1px 3px ${colors.primary[1]}`,
  padding: theme.spacing.lg,
  borderRadius: '0.5rem',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: theme.spacing.lg,
};

export const missionCardStyles: CSSProperties = {
  backgroundColor: colors.primary[7],
  padding: theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: theme.spacing.lg,
};

export const titleStyle = {
  color: colors.primary[1],
};
export const paragraphStyle = {
  color: colors.primary[2],
  gridColumnStart: 2,
};

export const iconStyle = {
  gridRowEnd: 'span 2',
};

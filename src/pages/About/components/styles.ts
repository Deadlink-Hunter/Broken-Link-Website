import { theme } from '@/theme';

const colors = theme.colors;

export const centerGrid = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

export const smallContainerStyle = {
  padding: theme.spacing.lg,
  display: 'grid',
  maxWidth: 'max-content',
  gap: theme.spacing.lg,
  gridTemplateColumns: '1fr',
};
export const bigContainerStyle = {
  padding: theme.spacing.lg,
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
  maxWidth: '40rem',
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

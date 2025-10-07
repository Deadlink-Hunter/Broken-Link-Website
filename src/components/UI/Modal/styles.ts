import { theme } from '@/theme';

const colors = theme.colors as Record<string, readonly string[]>;

export const modalVariants = {
  default: {
    borderRadius: theme.radius?.md || '8px',
  },
  large: {
    borderRadius: theme.radius?.lg || '12px',
    boxShadow: theme.shadows?.xl || '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  compact: {
    borderRadius: theme.radius?.sm || '6px',
  },
  success: {
    borderRadius: theme.radius?.md || '8px',
    borderTop: `4px solid ${colors.success?.[5] || theme.colors?.green?.[5] || '#10B981'}`,
  },
  warning: {
    borderRadius: theme.radius?.md || '8px', 
    borderTop: `4px solid ${colors.warning?.[5] || theme.colors?.yellow?.[5] || '#F59E0B'}`,
  },
  error: {
    borderRadius: theme.radius?.md || '8px',
    borderTop: `4px solid ${colors.error?.[5] || theme.colors?.red?.[5] || '#EF4444'}`,
  },
};

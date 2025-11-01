  import { theme } from '@/theme';
  import { CUSTOM_SIZES, TypographyVariant } from './types';

  const colors = theme.colors;

  export const typographyVariants: Record<string, TypographyVariant> = {
    primary: { color: colors.primary[5] },
    secondary: { color: colors.purple[5] },
    success: { color: colors.success[5] },
    warning: { color: colors.warning[5] },
    error: { color: colors.error[5] },
    title: { color: colors.primary[7], size: CUSTOM_SIZES.EXTRA_LARGE },
    subtitle: { color: colors.primary[6], size: CUSTOM_SIZES.LARGE },
  };

  export const footerStyles = {
    footer: {
      backgroundColor: colors.dark[7],
      color: colors.gray[0],
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.md,
      width: '100vw',
      boxSizing: 'border-box' as const,
    },
    deadlinkTitle: {
      color: colors.blue[3],
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: theme.spacing.sm,
    },
    description: {
      color: colors.gray[0],
      fontSize: '1rem',
      marginTop: theme.spacing.xs,
    },
    communityTitle: {
      color: colors.gray[0],
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: theme.spacing.xs,
    },
    communityLink: {
      color: colors.gray[0],
      fontSize: '1rem',
      marginBottom: theme.spacing.xs,
      textDecoration: 'underline',
    },
  };

import { theme } from '@/theme';

export const styles = {
  chartContainer: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.dark[6],
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colors.dark[4]}`,
  },
  chartTitle: {
    marginBottom: theme.spacing.md,
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.xl,
    fontWeight: 600,
  },
};
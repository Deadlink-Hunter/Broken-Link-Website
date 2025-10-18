import { theme } from '@/theme';

const colors = theme.colors;

export const containerStyle = {
    padding: theme.spacing.lg,
    display: 'inline-grid',
    maxWidth: 'max-content',
    gap: theme.spacing.lg
}

export const featureCardStyles = {
  // colors
    backgroundColor: colors.primary[7],
    boxShadow: `0 1px 3px ${colors.primary[1]}`,
    // layout
    padding: theme.spacing.lg,
    borderRadius: '0.5rem',
    display: "grid",
    gridTemplateColumns:"auto auto",
    gap: theme.spacing.lg,
    maxWidth: '40rem'
};

export const titleStyle = {
    color: colors.primary[1]
}
export const paragraphStyle = {
    color: colors.primary[2],
    gridColumnStart: 2
}

export const iconStyle = {
    colors: colors.cyan[4],
    style: {
        gridRowEnd: 'span 2'
    },
    size: 50
}
import { CSSProperties } from 'react';
import { theme } from '@/theme';

export const graphsStyles = {
  containerDisplay: (isMobileView: boolean): CSSProperties => ({
    display: 'flex',
    flexDirection: isMobileView ? 'column' : 'row',
    justifyContent: isMobileView ? undefined : 'center',
  }),
  cardStyles: (isMobileView: boolean): CSSProperties => ({
    width: isMobileView ? '90%' : '30%',
    margin: theme.spacing.lg,
  }),
  cardHeader: { color: theme.white, fontWeight: 'bold', fontSize: '1.4em', marginBottom: '1rem' },
};

export const pageContainer = {};

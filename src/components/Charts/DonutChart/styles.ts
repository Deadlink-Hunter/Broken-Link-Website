import { CSSProperties } from 'react';
import { CHART_COLORS, theme } from '@/theme';

export const chartStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as CSSProperties,
  paddingAngle: 4,
  thickness: 70,
  size: 250,
  strokeWidth: 1,
  strokeColor: theme.white,
  labelsContainer: { display: 'flex', gap: '1rem', paddingTop: '2rem' } as CSSProperties,
  labelsGap: 8,
  labelColor: (i: number) => ({
    borderRadius: '50%',
    backgroundColor: CHART_COLORS[i % CHART_COLORS.length],
  }),
  labelText: { color: theme.white },
};

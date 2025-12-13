import { CSSProperties } from 'react';
import { theme } from '@/theme';
import { CHART_COLORS } from '../data';

type StyleFunction =
  | ((...args: number[]) => CSSProperties)
  | ((...args: string[]) => CSSProperties);

interface StylesObject {
  [key: string]: CSSProperties | string | number | StyleFunction;
}

export const chartStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingAngle: 4,
  thickness: 70,
  size: 250,
  strokeWidth: 1,
  strokeColor: theme.white,
  labelsContainer: {
    display: 'flex',
    gap: '1rem',
    paddingTop: '2rem',
    marginTop: theme.spacing.md,
  },
  labelsGap: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  labelSize: 10,
  labelColor: (colorIndex: number) => ({
    borderRadius: '50%',
    backgroundColor: CHART_COLORS[colorIndex % CHART_COLORS.length],
    width: 10,
    height: 10,
  }),
  labelText: { color: theme.white },
} satisfies StylesObject;

import { rem } from '@mantine/core';
import { theme } from '@/theme';

type TextAnchor = 'middle' | 'inherit' | 'end' | 'start' | undefined;

export const chartStyles = {
  width: '90%',
  height: (isMobileView: boolean) => (isMobileView ? rem(240) : rem(300)),
  gridProps: {
    horizontal: false,
    vertical: false,
  },
  xAxisProps: {
    tick: {
      fill: theme.colors.cyan[9],
      fontSize: 16,
    },
    axisLine: {
      stroke: theme.colors.cyan[9],
      strokeWidth: 2,
    },
    textAnchor: 'middle' as TextAnchor,
    tickLine: { stroke: theme.colors.cyan[9], strokeWidth: 1 },
  },
  yAxisProps: {
    tick: {
      fill: theme.colors.cyan[9],
      fontSize: 16,
    },
    textAnchor: 'end' as TextAnchor,
    axisLine: { stroke: theme.colors.cyan[9], strokeWidth: 2 },
    tickLine: { stroke: theme.colors.cyan[9], strokeWidth: 1 },
  },
};

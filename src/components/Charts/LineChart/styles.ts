import { CSSProperties } from 'react';
import { rem } from '@mantine/core';

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
      fill: '#424D61',
      fontSize: 16,
    },
    axisLine: {
      stroke: '#424D61',
      strokeWidth: 2,
    },
    textAnchor: 'middle' as TextAnchor,
    tickLine: { stroke: '#424D61', strokeWidth: 1 },
  },
  yAxisProps: {
    tick: {
      fill: '#424D61',
      fontSize: 16,
    },
    textAnchor: 'end' as TextAnchor,
    axisLine: { stroke: '#424D61', strokeWidth: 2 },
    tickLine: { stroke: '#424D61', strokeWidth: 1 },
  },
};


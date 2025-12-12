import { theme } from '@/theme';

export enum ChartType {
  Line = 'line',
  Donut = 'donut',
}
export type CurveType = 'linear' | 'natural' | 'monotone' | 'step';

export interface LinePoint {
  values: Record<string, number>;
  curveType?: CurveType | undefined;
}

export interface LineData {
  xAxisKeys: string[];
  lineValues: LinePoint[];
}

export interface DonutData {
  name: string;
  value: number;
}

export interface ChartDataMap {
  [ChartType.Line]: LineData;
  [ChartType.Donut]: DonutData[];
}

export interface ChartProps<K extends ChartType> {
  type: K;
  data: ChartDataMap[K];
}

export interface DonutProps {
  data: DonutData[];
  withToolTip?: boolean;
}
export interface LineProps {
  data: LineData;
}
export const CHART_COLORS = [
  theme.colors.accentCyan[4],
  theme.colors.warning[2],
  theme.colors.success[3],
  theme.colors.accentPurple[3],
  theme.colors.error[3],
  theme.colors.primary[2],
] as const;

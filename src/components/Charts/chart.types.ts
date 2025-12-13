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
  withTooltip?: boolean;
}

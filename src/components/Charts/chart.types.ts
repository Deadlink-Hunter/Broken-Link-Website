export type ChartType = 'line' | 'donut';

export interface LinePoint {
  values: Record<string, number>;
  curveType?: 'linear' | 'monotone' | undefined;
}

export interface CustomLineData {
  dataKey: readonly string[];
  lineValues: readonly LinePoint[];
}

export interface DonutChartData {
  name: string;
  value: number;
}

export interface ChartDataMap {
  line: CustomLineData;
  donut: DonutChartData[];
}

export interface ChartProps<T extends ChartType> {
  type: T;
  data: ChartDataMap[T];
}

export interface DonutChartPropTypes {
  data: DonutChartData[];
}

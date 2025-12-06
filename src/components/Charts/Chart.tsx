import { ChartDataMap, ChartProps } from './chart.types';
import DonutChart from './DonutChart/DonutChart';
import LineChart from './LineChart/LineChart';

export default function Chart<K extends keyof ChartDataMap>({ type, data }: ChartProps<K>) {
  if (type === 'line') {
    return <LineChart data={data as ChartDataMap['line']} />;
  }
  if (type === 'donut') {
    return <DonutChart data={data as ChartDataMap['donut']} />;
  }

  return null;
}

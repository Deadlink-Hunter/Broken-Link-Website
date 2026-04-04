import { ChartProps, ChartType, DonutData, LineData } from './chart.types';
import DonutChart from './DonutChart/DonutChart';
import LineChart from './LineChart/LineChart';

export default function Chart<K extends ChartType>({ type, data }: ChartProps<K>) {
  if (type === ChartType.Line) {
    return <LineChart data={data as LineData} />;
  }
  if (type === ChartType.Donut) {
    return <DonutChart data={data as DonutData[]} />;
  }
}

import { LineChart as MantineLineChart, LineChartProps } from '@mantine/charts';
import { styles } from './LineChart.styles';

interface ChartSeries {
  name: string;
  color: string;
}

export interface CustomLineChartProps extends Omit<LineChartProps, 'data'> {
  data: Array<Record<string, any>>;
  title?: string;
  height?: number;
  dataKey: string;
  series: ChartSeries[];
}

export function LineChart({
  data,
  title,
  height = 300,
  dataKey,
  series,
  ...otherProps
}: CustomLineChartProps) {
  return (
    <div style={styles.chartContainer}>
      {title && <h3 style={styles.chartTitle}>{title}</h3>}
      <MantineLineChart
        h={height}
        data={data}
        dataKey={dataKey}
        series={series}
        curveType="linear"
        withLegend
        withTooltip
        withDots
        {...otherProps}
      />
    </div>
  );
}
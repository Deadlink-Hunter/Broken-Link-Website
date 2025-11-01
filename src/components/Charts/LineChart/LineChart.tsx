import { LineChart as MantineLineChart, LineChartProps } from '@mantine/charts';
import { styles } from './LineChart.styles';
import { Typography } from '@/components/UI/Typography/Typography';

interface ChartSeries {
  name: string;
  color: string;
}

interface CustomLineChartProps extends Omit<LineChartProps, 'data'> {
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
      {title && (
        <Typography variant="h3" style={styles.chartTitle}>
          {title}
        </Typography>
      )}
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
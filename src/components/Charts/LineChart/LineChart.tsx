import { LineChart as MantineLineChart, LineChartProps } from '@mantine/charts';
import { useMantineTheme } from '@mantine/core';
import { getStyles } from './LineChart.styles';

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
  const theme = useMantineTheme();
  const styles = getStyles(theme);

  return (
    <div style={styles.chartContainer}>
      {title && <div style={styles.chartTitle}>{title}</div>}
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
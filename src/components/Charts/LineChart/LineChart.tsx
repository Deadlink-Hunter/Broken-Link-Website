import { LineChart as MantineLineChart } from '@mantine/charts';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '@/theme';
import { CHART_COLORS, CurveType, LineProps } from '../chart.types';
import { chartStyles } from './styles';

export default function LineChart({ data }: LineProps) {
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const { xAxisKeys, lineValues } = data;

  const graphData = xAxisKeys.map((xAxisKey: string, index: number) => ({
    xAxisKey,
    ...lineValues[index].values,
  }));
  const seriesNames = Object.keys(lineValues[0].values);
  const series = seriesNames.map((name, i) => ({
    name,
    color: CHART_COLORS[i % CHART_COLORS.length],
    curveType: lineValues[0].curveType ?? ('linear' satisfies CurveType),
  }));
  return (
    <MantineLineChart
      h={chartStyles.height(isMobileView)}
      w={chartStyles.width}
      data={graphData}
      dataKey='xAxisKey'
      series={series}
      gridProps={chartStyles.gridProps}
      xAxisProps={chartStyles.xAxisProps}
      yAxisProps={chartStyles.yAxisProps}
      withTooltip={false}
    />
  );
}

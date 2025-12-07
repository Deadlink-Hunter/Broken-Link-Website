import { LineChart as MantineLineChart } from '@mantine/charts';
import { useViewportSize } from '@mantine/hooks';
import { CHART_COLORS } from '@/theme';
import { CustomLineData } from '../chart.types';
import { chartStyles } from './styles';

export default function LineChart({ data }: { data: CustomLineData }) {
  const { width } = useViewportSize();
  const isMobileView = width < 1024;

  const { dataKey, lineValues } = data;
  const graphData = dataKey.map((key, index) => ({
    key,
    ...lineValues[index].values,
  }));
  const seriesNames = Object.keys(lineValues[0].values);
  const series = seriesNames.map((name, i) => ({
    name,
    color: CHART_COLORS[i % CHART_COLORS.length],
    curveType: lineValues[0].curveType ?? 'linear',
  }));
  return (
    <MantineLineChart
      h={chartStyles.height(isMobileView)}
      w={chartStyles.width}
      data={graphData}
      dataKey='key'
      series={series}
      gridProps={chartStyles.gridProps}
      xAxisProps={chartStyles.xAxisProps}
      yAxisProps={chartStyles.yAxisProps}
      withTooltip={false}
    />
  );
}

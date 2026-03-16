import { DonutChart as MantineDonutChart } from '@mantine/charts';
import { Box } from '@mantine/core';
import { useIsDark } from '@/components/Hooks/useIsDark';
import { Typography } from '@/components/UI/Typography/Typography';
import { DonutProps } from '../chart.types';
import { CHART_COLORS } from '../data';
import { getChartStyles } from './styles';

export default function DountChart({ data, withToolTip = false }: DonutProps) {
  const isDark = useIsDark();
  const chartStyles = getChartStyles(isDark);

  const graphData = data.map((item, i) => ({
    ...item,
    color: CHART_COLORS[i % CHART_COLORS.length],
  }));
  return (
    <Box style={chartStyles.container}>
      <MantineDonutChart
        withTooltip={withToolTip}
        data={graphData}
        paddingAngle={chartStyles.paddingAngle as number}
        thickness={chartStyles.thickness as number}
        size={chartStyles.size as number}
        strokeWidth={chartStyles.strokeWidth as number}
        strokeColor={chartStyles.strokeColor as string}
      />
      <div style={chartStyles.labelsContainer as React.CSSProperties}>
        {graphData.map((item, i) => (
          <div key={item.name + i} style={chartStyles.labelsGap as React.CSSProperties}>
            <div style={chartStyles.labelColor(i) as React.CSSProperties} />
            <Typography style={chartStyles.labelText as React.CSSProperties}>
              {item.name}
            </Typography>
          </div>
        ))}
      </div>
    </Box>
  );
}

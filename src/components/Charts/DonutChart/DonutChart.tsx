import { DonutChart as MantineDonutChart } from '@mantine/charts';
import { Box, Group } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { CHART_COLORS } from '@/theme';
import { DonutChartPropTypes } from '../chart.types';
import { chartStyles } from './styles';

export default function DountChart({ data }: DonutChartPropTypes) {
  const graphData = data.map((item, i) => ({
    ...item,
    color: CHART_COLORS[i % CHART_COLORS.length],
  }));
  return (
    <Box style={chartStyles.container}>
      <MantineDonutChart
        withTooltip={false}
        data={graphData}
        paddingAngle={chartStyles.paddingAngle}
        thickness={chartStyles.thickness}
        size={chartStyles.size}
        strokeWidth={chartStyles.strokeWidth}
        strokeColor={chartStyles.strokeColor}
      />
      <Box style={chartStyles.labelsContainer} mt='md'>
        {graphData.map((item, i) => (
          <Group key={item.name} gap={chartStyles.labelsGap}>
            <Box w={10} h={10} style={chartStyles.labelColor(i)} />
            <Typography style={chartStyles.labelText}>{item.name}</Typography>
          </Group>
        ))}
      </Box>
    </Box>
  );
}

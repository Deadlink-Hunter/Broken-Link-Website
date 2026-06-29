import { DonutChart as MantineDonutChart } from '@mantine/charts';
import { Box } from '@mantine/core';
import { Typography } from '@/components/UI/Typography/Typography';
import { DonutProps } from '../chart.types';
import { CHART_ANIMATION_DURATION, DONUT_ANIMATION_BEGIN } from '../constants';
import { CHART_COLORS } from '../data';
import { chartStyles } from './styles';

export default function DonutChart({ data, withToolTip = false }: DonutProps) {
  const graphData = data.map((item, i) => ({
    ...item,
    color: CHART_COLORS[i % CHART_COLORS.length],
  }));

  return (
    <Box style={chartStyles.container}>
      <MantineDonutChart
        key={graphData.length}
        withTooltip={withToolTip}
        data={graphData}
        paddingAngle={chartStyles.paddingAngle}
        thickness={chartStyles.thickness}
        size={chartStyles.size}
        strokeWidth={chartStyles.strokeWidth}
        strokeColor={chartStyles.strokeColor}
        pieProps={{
          isAnimationActive: true,
          animationDuration: CHART_ANIMATION_DURATION,
          animationBegin: DONUT_ANIMATION_BEGIN,
          animationEasing: 'ease-out',
        }}
      />
      <div style={chartStyles.labelsContainer}>
        {graphData.map((item, i) => (
          <div key={item.name + i} style={chartStyles.labelsGap}>
            <div style={chartStyles.labelColor(i)} />
            <Typography style={chartStyles.labelText}>{item.name}</Typography>
          </div>
        ))}
      </div>
    </Box>
  );
}

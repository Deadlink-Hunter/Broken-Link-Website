import React, { CSSProperties } from 'react';
import { LineChartProps, LineChart as MantineLineChart } from '@mantine/charts';
import { ChartStyles } from './styles';
import { data as defaultData, series as defaultSeries } from './data';

interface SharedChartProps extends Omit<LineChartProps, 'style' | 'data' | 'series' | 'dataKey'> {
  style?: CSSProperties;
  variant?: keyof typeof ChartStyles;
  data?: any[];
  series?: Array<{ name: string; color: string }>;
  dataKey?: string;
}

export const LineChart = ({ 
  style = {}, 
  variant = 'default', 
  data = defaultData,
  series = defaultSeries,
  dataKey = 'date',
  ...props 
}: SharedChartProps) => {
  const variantStyle = ChartStyles[variant];

  return (
    <MantineLineChart 
      style={{ ...variantStyle, ...style }} 
      data={data}
      series={series}
      dataKey={dataKey}
      {...props} 
    />
  );
};

import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';
import { data as mockData, series as mockSeries } from './data';

const meta: Meta<typeof LineChart> = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    h: {
      control: { type: 'number', min: 200, max: 800, step: 50 },
      description: 'Height of the chart',
    },
    dataKey: {
      control: 'text',
      description: 'Key to use for x-axis data',
    },
    withLegend: {
      control: 'boolean',
      description: 'Show/hide legend',
    },
    variant: {
      control: 'select',
      options: ['default'],
      description: 'Chart styling variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLineChart: Story = {
  args: {
    h: 400,
    data: mockData,
    series: mockSeries,
    dataKey: 'date',
    withLegend: true,
  },
};

export const LineChartWithCustomHeight: Story = {
  args: {
    h: 600,
    data: mockData,
    series: mockSeries,
    dataKey: 'date',
    withLegend: true,
  },
};

export const LineChartWithoutLegend: Story = {
  args: {
    h: 400,
    data: mockData,
    series: mockSeries,
    dataKey: 'date',
    withLegend: false,
  },
};

export const LineChartCustomData: Story = {
  args: {
    h: 450,
    data: [
      { month: 'Jan', Sales: 100, Revenue: 80 },
      { month: 'Feb', Sales: 150, Revenue: 120 },
      { month: 'Mar', Sales: 200, Revenue: 180 },
    ],
    series: [
      { name: 'Sales', color: 'blue.6' },
      { name: 'Revenue', color: 'green.6' },
    ],
    dataKey: 'month',
    withLegend: true,
  },
};
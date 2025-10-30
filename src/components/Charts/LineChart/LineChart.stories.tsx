import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from './LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'Components/Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

const sampleData = [
  { month: 'Jan', scans: 45, broken: 12 },
  { month: 'Feb', scans: 67, broken: 8 },
  { month: 'Mar', scans: 89, broken: 15 },
  { month: 'Apr', scans: 123, broken: 6 },
  { month: 'May', scans: 156, broken: 22 },
  { month: 'Jun', scans: 201, broken: 9 },
];

export const Default: Story = {
  args: {
    title: 'Scan Activity Over Time',
    data: sampleData,
    dataKey: 'month',
    series: [
      { name: 'scans', color: 'cyan' },
      { name: 'broken', color: 'red' },
    ],
    height: 400,
  },
};

export const WithoutTitle: Story = {
  args: {
    data: sampleData,
    dataKey: 'month',
    series: [
      { name: 'scans', color: 'cyan' },
      { name: 'broken', color: 'red' },
    ],
    height: 300,
  },
};
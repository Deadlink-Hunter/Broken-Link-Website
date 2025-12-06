import { Box } from '@mantine/core';
import Chart from '@/components/Charts/Chart';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { Welcome } from '@/components/Welcome/Welcome';
import { ExploreToolkit } from './Components/ExploreToolkit';

const donutData = [
  { name: 'Chrome', value: 68 },
  { name: 'Firefox', value: 10 },
  { name: 'Safari', value: 9 },
  { name: 'Other', value: 3 },
];

const lineData = {
  dataKey: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  lineValues: [
    { values: { value: 48, value2: 10, value3: 40 }, curveType: 'linear' },
    { values: { value: 57, value2: 30, value3: 50 } },
    { values: { value: 94, value2: 40, value3: 60 }, curveType: 'linear' },
    { values: { value: 110, value2: 20, value3: 70 }, curveType: 'linear' },
    { values: { value: 165, value2: 15, value3: 40 } },
    { values: { value: 204, value2: 40, value3: 40 }, curveType: 'linear' },
  ],
} as const;

export function HomePage() {
  return (
    <>
      <Welcome />
      <Box display='flex'>
        <Card style={{ width: '40%', margin: '4rem' }}>
          <Typography
            style={{ color: 'white', fontWeight: 'bold', fontSize: '1.4em', marginBottom: '1rem' }}
          >
            Scan Activity Over Time
          </Typography>
          <Chart type='line' data={lineData} />
        </Card>

        <Card style={{ width: '40%', margin: '4rem' }}>
          <Typography
            style={{ color: 'white', fontWeight: 'bold', fontSize: '1.4em', marginBottom: '1rem' }}
          >
            Link Types Distribution
          </Typography>
          <Chart type='donut' data={donutData} />
        </Card>
      </Box>
      <ExploreToolkit />
      <ColorSchemeToggle />
    </>
  );
}

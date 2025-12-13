import { useMediaQuery } from '@mantine/hooks';
import Chart from '@/components/Charts/Chart';
import { ChartType, LineData } from '@/components/Charts/chart.types';
import { Card } from '@/components/UI/Card/Card';
import { Typography } from '@/components/UI/Typography/Typography';
import { theme } from '@/theme';
import { graphsStyles } from './styles';

// TODO - replace hardcoded data with data from the server
const donutData = [
  { name: 'Chrome', value: 68 },
  { name: 'Firefox', value: 10 },
  { name: 'Safari', value: 9 },
  { name: 'Other', value: 3 },
];

const lineData = {
  xAxisKeys: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  lineValues: [
    { values: { value: 48, value2: 10, value3: 40 }, curveType: 'linear' },
    { values: { value: 57, value2: 30, value3: 50 } },
    { values: { value: 94, value2: 40, value3: 60 }, curveType: 'linear' },
    { values: { value: 110, value2: 20, value3: 70 }, curveType: 'linear' },
    { values: { value: 165, value2: 15, value3: 40 } },
    { values: { value: 204, value2: 40, value3: 40 }, curveType: 'linear' },
  ],
} satisfies LineData;

export default function Charts() {
  const isMobileView = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  return (
    <div style={graphsStyles.containerDisplay(isMobileView)}>
      <Card style={graphsStyles.cardStyles(isMobileView)}>
        <Typography style={graphsStyles.cardHeader}>Scan Activity Over Time</Typography>
        <Chart type={ChartType.Line} data={lineData} />
      </Card>

      <Card style={graphsStyles.cardStyles(isMobileView)}>
        <Typography style={graphsStyles.cardHeader}>Link Types Distribution</Typography>
        <Chart type={ChartType.Donut} data={donutData} />
      </Card>
    </div>
  );
}

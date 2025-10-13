import { LineChart } from "@/components/Charts/LineChart/LineChart";

const StatisticsPage = () => {
  const data = [
    { date: '2024-01-01', Apples: 10, Oranges: 20, Tomatoes: 15 },
    { date: '2024-01-02', Apples: 15, Oranges: 25, Tomatoes: 20 },
    { date: '2024-01-03', Apples: 20, Oranges: 30, Tomatoes: 25 },
  ];

  const series = [
    { name: 'Apple', color: 'indigo.6' },
    { name: 'Oranges', color: 'blue.6' },
    { name: 'Tomatoes', color: 'teal.6' },
  ];

  return (
    <div>
      <p>Statistics Page</p>
      <LineChart 
        h={400}
        data={data} 
        series={series} 
      />
    </div>
  );
};

export default StatisticsPage;

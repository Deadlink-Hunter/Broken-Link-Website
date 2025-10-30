// import React from "react";
// import { Card, Text, Title, useMantineTheme } from "@mantine/core";
// import {
//   ResponsiveContainer,
//   LineChart as ReLineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// export type Series = {
//   name: string;
//   data: number[]; // same length as labels
// };

// export type LineChartProps = {
//   title?: string;
//   labels: string[]; // x-axis labels
//   series: Series[]; // one or more series
//   height?: number; // chart height in px
// };

// export default function LineChart({
//   title,
//   labels,
//   series,
//   height = 280,
// }: LineChartProps) {
//   const theme = useMantineTheme();

//   const data = labels.map((label, i) => {
//     const point: Record<string, any> = { x: label };
//     series.forEach((s) => {
//       point[s.name] = s.data[i] ?? 0;
//     });
//     return point;
//   });

//   const colors = [
//     theme.colors.blue?.[5] ?? "#22c1ff",
//     theme.colors.red?.[5] ?? "#ff6b6b",
//     theme.colors.green?.[5] ?? "#51cf66",
//     theme.colors.violet?.[5] ?? "#845ef7",
//   ];

//   return (
//     <Card shadow="sm" radius="md" p="md" sx={{ width: "100%" }}>
//       {title && <Title order={4} style={{ marginBottom: 12 }}>{title}</Title>}
//       <div style={{ width: "100%", height: height || 280 }}>
//         <ResponsiveContainer width="99%" height={height || 280}>
//           <ReLineChart data={data} margin={{ top: 8, right: 24, left: 8, bottom: 8 }}>
//             <CartesianGrid strokeDasharray="3 3" stroke={theme.colorScheme === "dark" ? "#2b2b2b" : "#f5f5f5"} />
//             <XAxis dataKey="x" tick={{ fontSize: 12 }} />
//             <YAxis tick={{ fontSize: 12 }} />
//             <Tooltip />
//             {series.map((s, idx) => (
//               <Line
//                 key={s.name}
//                 type="monotone"
//                 dataKey={s.name}
//                 stroke={colors[idx % colors.length]}
//                 strokeWidth={2}
//                 dot={{ r: 4 }}
//                 activeDot={{ r: 6 }}
//               />
//             ))}
//           </ReLineChart>
//         </ResponsiveContainer>
//       </div>
//       {!series.length && (
//         <Text size="sm" color="dimmed" style={{ marginTop: 12 }}>
//           No data available
//         </Text>
//       )}
//     </Card>
//   );
// }


import { LineChart as MantineLineChart, LineChartProps } from '@mantine/charts';
import { Box, Title } from '@mantine/core';
import classes from './LineChart.module.css';

interface CustomLineChartProps extends Omit<LineChartProps, 'data'> {
  data: Array<Record<string, any>>;
  title?: string;
  height?: number;
  dataKey: string;
  series: Array<{
    name: string;
    color: string;
  }>;
}

export function LineChart({ 
  data, 
  title, 
  height = 300,
  dataKey,
  series,
  ...otherProps 
}: CustomLineChartProps) {
  return (
    <Box className={classes.chartContainer}>
      {title && (
        <Title order={3} className={classes.chartTitle}>
          {title}
        </Title>
      )}
      <MantineLineChart
        h={height}
        data={data}
        dataKey={dataKey}
        series={series}
        curveType="linear"
        withLegend
        withTooltip
        withDots
        {...otherProps}
      />
    </Box>
  );
}
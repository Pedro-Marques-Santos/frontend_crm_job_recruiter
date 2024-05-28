import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { ChartWrapper, Container } from "./styles";

const data = [
  { name: "January", value: 123 },
  { name: "February", value: 456 },
  { name: "March", value: 789 },
  { name: "April", value: 101 },
  { name: "May", value: 0 },
  { name: "June", value: 0 },
  { name: "July", value: 415 },
  { name: "August", value: 0 },
  { name: "September", value: 321 },
  { name: "October", value: 0 },
  { name: "November", value: 665 },
  { name: "December", value: 888 },
];

export function Statistics() {
  return (
    <Container>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0064E1"
              fill="#8bb3e4"
              fillOpacity={1}
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Container>
  );
}

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Chart() {
  const data = [
    { name: "sunday", uv: 400, pv: 2400, amt: 2400 },
    { name: "monday", uv: 300, pv: 2400, amt: 2400 },
    { name: "thursday", uv: 200, pv: 2400, amt: 2400 },
    { name: "wednesday", uv: 100, pv: 2400, amt: 2400 },
    { name: "tuesday", uv: 150, pv: 2400, amt: 2400 },
    { name: "friday", uv: 250, pv: 2400, amt: 2400 },
    { name: "friday", uv: 300, pv: 2400, amt: 2400 },
    { name: "saturday", uv: 350, pv: 2400, amt: 2400 },
  ];
  return (
    <LineChart
      width={1150}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

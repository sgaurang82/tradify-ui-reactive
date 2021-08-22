import { InputLabel } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AllCharts = () => {
  const [chartData, setChartData] = useState<any | null>(null);
  useEffect(() => {
    axios
      .get(
        "https://cloud.iexapis.com/stable/stock/twtr/chart/10d?token=pk_458def83f0a5453396f377545831ab6a"
      )
      .then((res) => setChartData(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div style={{ height: "300px", width: "1000px" }}>
      <LineChart
        width={1000}
        height={250}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="low" stroke="#8884d8" />
        <Line type="monotone" dataKey="high" stroke="#8884d8" />
        <Line type="monotone" dataKey="close" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default AllCharts;

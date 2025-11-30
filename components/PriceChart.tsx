/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getCoinHistory } from "@/api/api";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import GlowCard from "./helpers/glowCard";

interface IPriceChartProps {
  uuid: string;
}

const PriceChart = ({ uuid }: IPriceChartProps) => {
  const [data, setData] = useState<{ price: number; timestamp: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const history = await getCoinHistory(uuid);

      const formatted = history
        .map((item: any) => ({
          price: Number(item.price),
          timestamp: new Date(item.timestamp * 1000).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
            }
          ),
        }))
        .filter((d: any) => !isNaN(d.price));

      const optimized = formatted.filter((_: any, i: any) => i % 4 === 0);

      setData(optimized.reverse());
    };

    fetchData();
  }, [uuid]);

  return (
    <div className="w-[98%] h-[250px] mt-8 border border-[#97672c] hover:border-[#efb76d] rounded-lg transition-colors duration-150 p-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="teal" stopOpacity={0.9} />
              <stop offset="100%" stopColor="red" stopOpacity={0.5} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#2a2a2a" strokeDasharray="3 3" />

          <XAxis dataKey="timestamp" interval={4} hide />

          <YAxis
            domain={["dataMin", "dataMax"]}
            tickFormatter={(v) =>
              v >= 1 ? `${v.toFixed(0)}$` : `${v.toPrecision(4)}$`
            }
            tick={{ fill: "#888", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />

          <Tooltip
            cursor={{ strokeWidth: 1 }}
            contentStyle={{
              backgroundColor: "#1e1e1e",
              border: "1px solid #333",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "bold",
            }}
            labelStyle={{ color: "#aaa" }}
            formatter={(value: number) => [`$${value.toFixed(4)}`, "Price"]}
          />

          <Line
            type="linear"
            dataKey="price"
            stroke="url(#colorPrice)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;

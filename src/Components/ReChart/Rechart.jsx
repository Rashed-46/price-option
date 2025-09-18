import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const resultData = [
  {
    id: 1,
    name: "Rafi",
    age: 16,
    class: "10",
    physics: 75,
    chemistry: 80,
    math: 85,
  },
  {
    id: 2,
    name: "Mitu",
    age: 15,
    class: "9",
    physics: 68,
    chemistry: 72,
    math: 63,
  },
  {
    id: 3,
    name: "Sajid",
    age: 17,
    class: "11",
    physics: 82,
    chemistry: 77,
    math: 79,
  },
  {
    id: 4,
    name: "Nabila",
    age: 16,
    class: "10",
    physics: 91,
    chemistry: 89,
    math: 93,
  },
  {
    id: 5,
    name: "Tanvir",
    age: 15,
    class: "9",
    physics: 55,
    chemistry: 58,
    math: 50,
  },
  {
    id: 6,
    name: "Anika",
    age: 17,
    class: "11",
    physics: 73,
    chemistry: 70,
    math: 76,
  },
  {
    id: 7,
    name: "Hasan",
    age: 16,
    class: "10",
    physics: 88,
    chemistry: 84,
    math: 90,
  },
  {
    id: 8,
    name: "Priya",
    age: 15,
    class: "9",
    physics: 60,
    chemistry: 65,
    math: 67,
  },
  {
    id: 9,
    name: "Jahid",
    age: 17,
    class: "11",
    physics: 95,
    chemistry: 92,
    math: 97,
  },
  {
    id: 10,
    name: "Fahim",
    age: 16,
    class: "10",
    physics: 78,
    chemistry: 74,
    math: 81,
  },
];

const Rechart = () => {
  return (
    <div>
      <LineChart width={500} height={400} data={resultData}>
        <Line dataKey="chemistry" stroke="purple"></Line>
        <Line dataKey="math" stroke="red"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </LineChart>
      <BarChart height={400} width={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar
          dataKey="math"
          barSize={40}
          fill="red"
          activeBar={{ fill: "green" }}
        ></Bar>
      </BarChart>
    </div>
  );
};

export default Rechart;

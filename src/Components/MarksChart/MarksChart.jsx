import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marksDataChart = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    return student;
  });

  return (
    <div>
      <BarChart height={300} width={500} data={marksDataChart}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="math" fill="violet" activeBar={{ fill: "green" }}></Bar>
        <Bar
          dataKey="chemistry"
          fill="red"
          activeBar={{ fill: "orange" }}
        ></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;

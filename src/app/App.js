import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const MyChart = () => {
  const handleLabelClick = (data, index, arg1, arg2) => {
    responseArr2.forEach((element) => {
      if (element.name == data.value) {
        //console.log(element.);
        window.open(element.value, "_blank");
      }
    });
  };

  const responseArr = [
    { name: "Google", percentage: 55, url: "https://www.google.com" },
    { name: "Facebook", percentage: 40, url: "https://www.facebook.com" },
    { name: "Amazon", percentage: 25, url: "https://www.amazon.com" },
    { name: "Microsoft", percentage: 30, url: "https://www.microsoft.com" }
  ];

  const responseArr2 = [
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/cybercom-app-55743.appspot.com/o/Option%2F_?alt=media&token=dc097c06-5e7a-4df1-bfd5-212bd44ac5c8",
      count: 2,
      percentage: "66.67",
      name: "A"
    },
    {
      value:
        "https://firebasestorage.googleapis.com/v0/b/cybercom-app-55743.appspot.com/o/Option%2F_?alt=media&token=8691e909-472d-4cc5-b09f-787cbda84076",
      count: 1,
      percentage: "33.33",
      name: "B"
    }
  ];

  return (
    <div>
      <BarChart width={600} height={300} data={responseArr2}>
        <XAxis
          dataKey="name"
          onClick={(responseArr2, index) => handleLabelClick(responseArr2)}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default MyChart;

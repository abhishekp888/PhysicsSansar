import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./ChartsOfNeetcss.css";
import AOS from "aos";
import { useEffect } from "react";

const ChartsOfJee = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [state, setState] = useState({
    options: {
      colors: "#9575DE",
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [5, 10, 15, 23, 44, 51],
      },
    ],
  });

  return (
    <div className="ChartsOfNeet">
      <div className="ChartsOfNeet_info">
        <p className="ChartsOfNeet_heading">
          Our Result in this many years of NEET
        </p>

        <p>
          In the past several years of the NEET examination, we have achieved
          remarkable results, reflecting our commitment to academic excellence
          and the success of our students.
        </p>
      </div>

      <div className="Chart">
        <Chart options={state.options} series={state.series} type="bar" />
      </div>
    </div>
  );
};

export default ChartsOfJee;

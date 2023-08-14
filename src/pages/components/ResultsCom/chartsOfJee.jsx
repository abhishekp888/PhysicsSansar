import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './chartsOfJee.css';
import AOS from 'aos';
import { useEffect } from 'react';


const ChartsOfJee = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  const [state, setState] = useState({
    options: {
     colors:'rgb(70,64,220)',
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [2018,2019,2020,2021,2022,2023]
      }
    },
    series: [
      {
        name: "series-1",
        data: [5,10,15,23,44,51]
      }
    ]
  })

  return (
    <div className="ChartsOfJee_main">
        <div className='ChartsOfJee_info'>
<p className='ChartsOfJee_heading'>
Our Result in this many years of JEE
</p>

<p>
The success stories of our JEE toppers and their admissions to renowned engineering institutes are a testament to the effectiveness of our teaching methodologies. </p>

        </div>

        <div className='Chart'>
        <Chart
                options={state.options}
                series={state.series}
                type="bar"
        />

        </div>

        </div>
  )
}

export default ChartsOfJee;

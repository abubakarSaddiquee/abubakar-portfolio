import React, { useState } from 'react'
import Charts from "react-apexcharts"
import './Chart.css'
const Donut = (props) => {
  
  const {series, title, colors} = props
  const [seriesd] = useState([23, 3,2])
  const [options] = useState({
    series: series.series,
    labels: series.labels,
    legend:{
      position: 'top'
    },
    colors: colors,
  })

  return <div className="donut">
    <div className="titlechart" >
      <h3>{title}</h3>
    </div>
    <Charts options={options}  series={seriesd} type={'donut'}/> 
  </div>
}
export default Donut
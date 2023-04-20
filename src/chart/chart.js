import React from "react";
import "./chart.css";
import Chartbar from "/Users/indianic/Desktop/first/src/chart/chartbar.js";

const Chart = (props) => {
  const datapointvalue = props.datapoints.map((datapoint) => datapoint.value);
  const totalmax = Math.max(...datapointvalue);
  console.log(props.datapoints);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

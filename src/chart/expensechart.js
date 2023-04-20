import React from "react";
import Chart from "/Users/indianic/Desktop/first/src/chart/chart.js";
const Expensechart = (props) => {
  const chartlist = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "api", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  // const [isvalid, setisvalid] = useState(true);
  for (const expense of props.exp) {
    const expenseMonth = expense.date.getMonth();
    chartlist[expenseMonth].value += +expense.amount;

    // if (chartlist[expenseMonth].value === undefined) {
    //   return setisvalid(true);
    // }
  }

  return <Chart datapoints={chartlist} />;
};
export default Expensechart;

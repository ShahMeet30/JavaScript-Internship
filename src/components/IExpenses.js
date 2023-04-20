import React, { useState } from "react";
import List from "/Users/indianic/Desktop/first/src/newcomponent/expenseslist.js";
import Card from "./card";
import ExpensesFilter from "/Users/indianic/Desktop/first/src/newcomponent/Filter.js";
import "./IExpenses.css";
import Expensechart from "/Users/indianic/Desktop/first/src/chart/expensechart.js";

function Price(props) {
  const [enterfilter, setenterfilter] = useState("");
  const expenseFilterhandler = (datahandler) => {
    // console.log("hello world");
    // console.log(datahandler);
    setenterfilter(datahandler);
  };
  const Filtereddata = props.items.filter((expenses) => {
    if (enterfilter === "") {
      return <List />;
    }
    return expenses.date.getFullYear().toString() === enterfilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onfilter={enterfilter}
        onchangeFilter={expenseFilterhandler}
      />
      <Expensechart exp={Filtereddata} />
      <List items={Filtereddata} />
    </Card>
  );
}
export default Price;

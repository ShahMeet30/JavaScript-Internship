import React, { useState } from "react";
import Edate from "./datemark";
import Card from "./card";
import "./product.css";

export default function Expenses(props) {
  const [title, setTitle] = useState(props.title);
  const [amountdata, setamountdata] = useState(props.amount);
  const [count, setcount] = useState(0);
  const clickme = () => {
    setTitle("processing...");
    console.log(title);
    // setTimeout(() => {
    //   setTitle("updated");
    // }, 5000);
    setcount(count + 1);
    if (count == 1) {
      setTitle("again");
    }
  };

  const amountHandler = () => {
    setamountdata("30000000");
  };
  return (
    <Card className="product">
      <Edate date={props.date} />
      <div className="price">
        <h2>{title}</h2>

        <div className="print">{amountdata}</div>
      </div>
      <button onClick={clickme}>change title</button>
      <button onClick={amountHandler}>amount change</button>
    </Card>
  );
}

import React, { useState } from "react";
import "./App.css";
import Price from "./components/IExpenses";
import Newform from "./newcomponent/form";
const Dummy_exp = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: "94.12",
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: "799.49", date: new Date(2020, 7, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: "294.67",
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: "450",
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [exp, setexp] = useState(Dummy_exp);
  const formhandler = (data) => {
    setexp((enter) => {
      return [data, ...enter];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "let's get started"),
  //   React.createElement(Price, { items: exp })
  // );
  return (
    <div>
      <Newform onsaveform={formhandler} />

      <div className="product">
        <Price items={exp} />
      </div>
    </div>
  );
};
export default App;

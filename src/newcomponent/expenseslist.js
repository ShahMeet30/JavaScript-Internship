import React from "react";
import "./expenseslist.css";
import Expenses from "/Users/indianic/Desktop/first/src/components/Product.js";

const List = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found</h2>;
  }

  return (
    <ul className="expenses-list">
      <li>
        {props.items.map((exps) => (
          <Expenses
            key={exps.id}
            title={exps.title}
            amount={exps.amount}
            date={exps.date}
          />
        ))}
      </li>
    </ul>
  );
};
export default List;

// import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "./eform.css";

const Eform = (props) => {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");
  const [enterDate, setenterDate] = useState("");
  const [isvalid, setisvalid] = useState(true);

  // const [enterInput, setenterInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleHandler = (event) => {
    setenterTitle(event.target.value);
  };
  const amountHandler = (event) => {
    // setenterInput({ ...enterInput, enterAmount: event.target.value });

    setenterAmount(event.target.value);
  };
  const dateHandler = (event) => {
    // setenterInput({ ...enterInput, enterDate: event.target.value });
    // if (event.target.value === undefined) {
    //   setisvalid(false);
    // }
    setenterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const eventlist = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    if (isNaN(enterDate) === false) {
      setisvalid(false);
      return;
    }
    props.onsaveEform(eventlist);
    setenterTitle("");
    setenterAmount("");
    setenterDate("");
    // if (eventlist.trim().length == 0) {
    //   setisvalid(false);
    // }
    //  else if (eventlist.trim().length > 0);
    // {
    //   setisvalid(true);
    // }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="Eform-controls">
        <div className="Eform-control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            placeholder="enter the title"
            onChange={titleHandler}
          />
        </div>
        <div className="Eform-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            placeholder="enter the amount"
            onChange={amountHandler}
          />
        </div>
        <div className="Eform-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="Eform-action">
        <button type="button" onClick={props.oncancel}>
          Cancel
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
export default Eform;

import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickhandler = () => {
    setTitle("updated!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item" name="adarsh">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickhandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;

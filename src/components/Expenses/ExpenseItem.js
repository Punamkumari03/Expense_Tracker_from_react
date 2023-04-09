import React from "react";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
const ExpenseItem = (props)=> {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        title={props.title}
        location={props.location}
      />
    </Card>
  );
}
export default ExpenseItem;

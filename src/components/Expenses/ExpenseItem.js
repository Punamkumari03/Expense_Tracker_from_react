import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
const ExpenseItem = (props)=> {
const [title,setTitle] = useState(props.title);
const [expense,setExpense] = useState(props.amount);

  const clickHandler = () =>{
    setTitle('Updated');
    setExpense('100$ ')
  console.log(title)
  console.log(expense)
  };
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={expense}
        title={title}
        location={props.location}
      />
      <button onClick={clickHandler}>edit Expense</button>
    </Card>
  );
}
export default ExpenseItem;

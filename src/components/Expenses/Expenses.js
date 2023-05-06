import React, { useState } from "react";
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props)=> {
  const [filterYear,setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear =>{
    setFilterYear(selectedYear);
  }
  return (
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
    {props.items.map((expense, index)=>(
      <ExpenseItem
      key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
    ))}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      /> */}
    </Card>
  );
}

export default Expenses;
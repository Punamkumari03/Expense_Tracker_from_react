import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseForm from "./components/Expenses/ExpenseForm";

const App=()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Patna",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Mumbai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Keral",
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
 
  // );

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
      {/* <ExpenseForm /> */}
    </div>
  );
}

export default App;

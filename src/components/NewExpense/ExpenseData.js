import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const ExpenseData = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
}
  
  const [btn , setBtn]= useState(false)
  const showData = ()=>{
    setBtn(true)
  }
if(btn === true){
  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
}

  return (
    <div>
      <button onClick={showData}>Add Expense</button>
    </div>
  )
}

export default ExpenseData

import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import ExpenseData from './ExpenseData'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> */}
      <ExpenseData/>
    </div>
  )
}

export default NewExpense

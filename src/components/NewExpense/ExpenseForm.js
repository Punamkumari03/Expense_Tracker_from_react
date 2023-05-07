import React, { useState } from 'react'
import './ExpenseForm.css';
import ExpenseData from './ExpenseData';

const ExpenseForm = (props) => {
   const[enteredTitle,setEnteredTitle] = useState('')
   const[enteredAmount,setEnteredAmount] = useState('')
   const[enteredDate,setEnteredDate] = useState('')
// const [userInput,setUserInput] = useState({
//    enteredTitle: '',
//    enteredAmount: '',
//    entereDate: ''
// })
const[cancelBtn,setCancelBtn] = useState(false)
const removeForm = () =>{
   setCancelBtn(true)
}
if(cancelBtn === true){
   return <ExpenseData/>
}
   const titleChangeHandler = (event)=>{
      setEnteredTitle(event.target.value)
      // setUserInput({
      //    ...userInput,
      //    enteredTitle: event.target.value,
      // })
   }
   const amountChangeHandler = (event)=>{
      setEnteredAmount(event.target.value)
      // setUserInput({
      //    ...userInput,
      //    enteredAmount: event.target.value,
      // })
      
   }
   const dateChangeHandler = (event)=>{
      setEnteredDate(event.target.value)
      // setUserInput({
      //    ...userInput,
      //    enteredDate: event.target.value,
      // })
   }
   const submitHandler = (event)=>{
event.preventDefault();
const expenseData={
   title: enteredTitle,
   amount:enteredAmount,
   date: new Date(enteredDate)
}
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('')
   }
  return (
   <form onSubmit={submitHandler}>
   {/* <ExpenseData/> */}
 <div className='new-expense__controls'>
 <div className='new-expense__controls'>
   <label>Title</label>
   <input 
   type='text'
   value={enteredTitle}
    onChange={titleChangeHandler}/>
 </div>
 <div className='new-expense__controls'>
   <label>Amount</label>
   <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
 </div>
 <div className='new-expense__controls'>
   <label>Date</label>
   <input 
   type='date' 
   value={enteredDate}
   
   min='2019-01-01' max="2022-12-31" onChange={dateChangeHandler}/>
 </div>
 </div>
 <div className='new-expense__actions'>
   <button type='submit'>Add Expense</button>
   <button onClick={removeForm}>Cancel</button>
 </div>
 </form>
  
  )
}

export default ExpenseForm

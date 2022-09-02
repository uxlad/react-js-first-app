import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }


    const [isEditing, setIsEditing] = useState(false);

    const editingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

 return (
    <div className='new-expense'>
        {!isEditing &&  <button onClick={editingHandler}> Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
 )

};

export default NewExpense;
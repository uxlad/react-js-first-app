import React, {useState} from 'react';
import Card from './Utilities/Card';
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import './Expenses.css'
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');
    // const [expenseData, setExpenseData] = useState(props.expenses);

    const getExpenseDate = selectedDate =>{
        setFilteredYear(selectedDate);
    }

    const filteredArr = props.expenses.filter(data => {  
        return data.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} getExpenseDateHandler = {getExpenseDate}/>
            <ExpensesChart expenses={filteredArr} />
            <ExpenseList items={filteredArr} />
        </Card>
    );
}

export default Expenses
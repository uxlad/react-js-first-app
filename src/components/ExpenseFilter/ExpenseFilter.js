import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = props => { //Component
    const onDateChange = event => {
        props.getExpenseDateHandler(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter By year</label>
                <select onChange={onDateChange} value={props.selected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
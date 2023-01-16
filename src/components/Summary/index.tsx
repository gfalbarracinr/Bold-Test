import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import Filter from '../Filter';
import './summary.css';
import useFilter from '../../context/useFilter';
const Summary = () => {
  const date = new Date();
  const {state} = useFilter();
  return (
    <article className='summary-container'>
      <ExpensesSummary
        date={date}
        filter={state.timeFilter}
        expenses={1560000.00}
      />
      <Filter 
        date={date}
        activeFilter={state.timeFilter}
      />
    </article>
  )
}

export default Summary
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import Filter from '../Filter';
import './summary.css';
import { FilterType } from '../../types';
const Summary = () => {
  const date = new Date();
  return (
    <article className='summary-container'>
      <ExpensesSummary
        date={date}
        filter={FilterType.MONTH}
        expenses={1560000.00}
      />
      <Filter date={date}/>
    </article>
  )
}

export default Summary
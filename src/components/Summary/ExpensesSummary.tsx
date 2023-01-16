import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai'
import './summary.css';
import { formatNumberToCurrency, getFilterText, getFilterTitle } from '../../util';
import { FilterType } from '../../types';
interface Props {
  filter: FilterType
  expenses: number,
  date: Date
}
const ExpensesSummary = ({filter, expenses, date}: Props) => {
  const filterText = getFilterText(filter, date);
  const filterTitle = getFilterTitle(filter, date);
  return (
    <article className='expenses-container'>
      <section className='title-container'>
        <h1 className='expenses-title'>{`Total de ventas de ${filterTitle}`} <AiOutlineInfoCircle/></h1>
      </section>
      <section className='expenses-description-contianer'>
        <h2 className='total-expenses'>{formatNumberToCurrency(expenses)}</h2>
        <p>{filterText}</p>
      </section>
    </article>

  )
}

export default ExpensesSummary
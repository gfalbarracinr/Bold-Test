import React, { useState } from 'react'
import './filter.css'
import useFilter from '../../context/useFilter'
import { ActionTypes, TransactionType } from '../../types';

const FilterModal = () => {
  const {state, dispatch} = useFilter();
  const [checkLinkFilter, setLinkFilter] = useState(state.transactionTypeFilter.includes(TransactionType.LINK))
  const [checkTerminalFilter, setTerminalFilter] = useState(state.transactionTypeFilter.includes(TransactionType.TERMINAL))
  const [checkAllFilter, setAllFilter] = useState(state.transactionTypeFilter.includes(TransactionType.TERMINAL) && state.transactionTypeFilter.includes(TransactionType.LINK))
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkAllFilter) {
      dispatch({type: ActionTypes.CHANGE_TRANSACTION_FILTER, payload: [TransactionType.LINK, TransactionType.TERMINAL]});
      return
    }
    const finalArray = [];
    if (checkLinkFilter) {
      finalArray.push(TransactionType.LINK);
    }
    if(checkTerminalFilter) {
      finalArray.push(TransactionType.TERMINAL);
    }
    dispatch({type: ActionTypes.CHANGE_TRANSACTION_FILTER, payload: finalArray});
  }
  return (
    <section className='filter-form-container'>
      <form className='filter-form' onSubmit={handleSubmit}>
        <label className='filter-form-input-container'>
          <input 
            className='filter-form-input' 
            type='checkbox' 
            name='filterByTerminal' 
            id='filterByTerminal' 
            checked={checkTerminalFilter} 
            onChange={() => setTerminalFilter((prev) => !prev)}
          />
          <p>Cobro con datafono</p>
        </label>
        <label className='filter-form-input-container'>
          <input 
            className='filter-form-input' 
            type='checkbox' 
            name='filterByLink' 
            id='filterByLink' 
            checked={checkLinkFilter}
            onChange={() => setLinkFilter((prev) => !prev)}
          />
          <p>Cobro con link de pago</p>
        </label>
        <label className='filter-form-input-container'>
          <input 
            className='filter-form-input'
            type='checkbox' 
            name='all' 
            id='all' 
            checked={checkAllFilter}
            onChange={() => setAllFilter((prev) => !prev)}
          />
          <p>Ver todos</p>
        </label>
        <button className='filter-form-button' type='submit'>Aplicar</button>
      </form>
    </section>
  )
}

export default FilterModal
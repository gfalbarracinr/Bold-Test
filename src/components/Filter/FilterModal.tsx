import React from 'react'
import './filter.css'

const FilterModal = () => {
  return (
    <section className='filter-form-container'>
      <form className='filter-form'>
        <label className='filter-form-input-container'>
          <input className='filter-form-input' type='checkbox' name='filterByTerminal'/>
          <p>Cobro con datafono</p>
        </label>
        <label className='filter-form-input-container'>
          <input className='filter-form-input' type='checkbox' name='filterByLink'/>
          <p>Cobro con link de pago</p>
        </label>
        <label className='filter-form-input-container'>
          <input className='filter-form-input' type='checkbox' name='all'/>
          <p>Ver todos</p>
        </label>
        <button className='filter-form-button' type='submit'>Aplicar</button>
      </form>
    </section>
  )
}

export default FilterModal
import React, { useState } from 'react'
import { FilterType } from '../../types'
import { getFilterTitle, toCapitalize } from '../../util'
import { GoSettings } from 'react-icons/go'
import './filter.css'
import FilterModal from './FilterModal'

interface Props {
  date: Date
}
const Filter = ({date}: Props) => {
  const [filterOptions, setFilterOptions] = useState(false);
  const toggleFilterOptions = () => {
    setFilterOptions((prevState) => !prevState);
  }
  return (
    <article className='filter'>
      <ul className='filter-container'>
        {
          Object.values(FilterType).map((filter) => (
            <li key={filter} className='filter-date-item'><button className='filter-button filter-date-button'>{toCapitalize(getFilterTitle(filter, date))}</button></li>
          ))
        }
      </ul>
      <section className='filter-type-container'>
        <button className={`filter-button filter-type ${filterOptions ? 'filter-top-border' : '' }`} onClick={toggleFilterOptions}>FILTRAR <GoSettings/></button>
      </section>
      { filterOptions && <FilterModal/>}
    </article>
  )
}

export default Filter
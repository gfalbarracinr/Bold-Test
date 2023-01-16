import React, { useState } from 'react'
import { ActionTypes, FilterType } from '../../types'
import { getFilterTitle, toCapitalize } from '../../util'
import { GoSettings } from 'react-icons/go'
import './filter.css'
import FilterModal from './FilterModal'
import useFilter from '../../context/useFilter'

interface Props {
  date: Date,
  activeFilter: FilterType
}
const Filter = ({date, activeFilter}: Props) => {
  console.log('active ', activeFilter)
  const [filterOptions, setFilterOptions] = useState(false);
  const {dispatch} = useFilter();
  const handleClick = (filter: FilterType) => {
    dispatch({type: ActionTypes.CHANGE_TIME_FILTER, payload: filter})
  }
  const toggleFilterOptions = () => {
    setFilterOptions((prevState) => !prevState);
  }
  return (
    <article className='filter'>
      <ul className='filter-container'>
        {
          Object.values(FilterType).map((filter) => (
            <li key={filter} className='filter-date-item'>
              <button 
                className={`filter-button filter-date-button ${filter === activeFilter ? 'filter-active' : ''}`}
                onClick={() => handleClick(filter)}
              >
                {toCapitalize(getFilterTitle(filter, date))}
              </button>
            </li>
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
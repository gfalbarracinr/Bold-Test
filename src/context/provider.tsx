import { PropsWithChildren, useReducer } from "react";
import { FilterType, State, TransactionType } from "../types";
import { FilterContext } from "./filterContext";
import filterReducer from "./reducer";

const getInitalTimeFilter = () : FilterType => {
  const timeFilter = window.localStorage.getItem('timeFilter');
  if (timeFilter) {
    return timeFilter as FilterType
  }
  return FilterType.DAY
}
const getInitalTransactionFilter = () : TransactionType[] => {
  const filter = window.localStorage.getItem('transactionFilter');
  if (filter) {
    return JSON.parse(filter) as TransactionType[];
  }
  return [];
}
const initialState: State = {
  timeFilter: getInitalTimeFilter(),
  transactionTypeFilter: getInitalTransactionFilter()
}
const Provider  = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const value ={state, dispatch}
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
 }
 
 export default Provider;
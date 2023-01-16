import { Action, State } from "../types"

export const changeTimeFilter = (state: State, action: Action) : State => {
  window.localStorage.setItem("timeFilter", action.payload);
  return {
   ...state,
   timeFilter: action.payload
  }
}

export const changeTransactionFilter = (state: State, action: Action) : State => {
  window.localStorage.setItem("transactionFilter", JSON.stringify(action.payload));
  return {
   ...state,
   transactionTypeFilter: action.payload
  }
}
import { Action, ActionTypes, State } from "../types";
import { changeTimeFilter, changeTransactionFilter } from "./action";

const filterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TIME_FILTER: {
      return changeTimeFilter(state, action);
    }
    case ActionTypes.CHANGE_TRANSACTION_FILTER: {
      return changeTransactionFilter(state, action);
    }
    default:
      throw new TypeError('Not action type');
  }
}

export default filterReducer;
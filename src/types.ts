export enum FilterType {
  DAY='DAY',
  WEEK='WEEK',
  MONTH='MONTH',
}

export enum TransactionType {
  TERMINAL='TERMINAL',
  LINK='LINK',
}

export enum CardType {
  MASTERCARD='MASTERCARD',
  VISA='VISA'
}
export enum ActionTypes {
  CHANGE_TIME_FILTER = 'CHANGE_TIME_FILTER',
  CHANGE_TRANSACTION_FILTER = 'CHANGE_TRANSACTION_FILTER'
} 

export interface Transaction {
  id: string,
  type: TransactionType,
  isSuccess: boolean,
  date: Date,
  cardType: CardType,
  cardNumbers: number,
  amount: number
}

export interface State {
  timeFilter: FilterType,
  transactionTypeFilter: TransactionType[]
}

export interface Action {
  type: ActionTypes,
  payload: any
}

export default interface ContextInterface {
  state: State,
  dispatch: React.Dispatch<any>
}
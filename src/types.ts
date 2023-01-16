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
export interface Transaction {
  id: string,
  type: TransactionType,
  isSuccess: boolean,
  date: Date,
  cardType: CardType,
  cardNumbers: number,
  amount: number
}
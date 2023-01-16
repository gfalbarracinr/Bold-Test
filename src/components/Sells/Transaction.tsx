import React from 'react'
import { Transaction } from '../../types'
import { createMockCardNumber, formatDateDay, formatDateHour, formatNumberToCurrency, resolveCardTypeIcon, resolveTransactionTypeIcon } from '../../util'
interface Props {
  transaction: Transaction
}
const TransactionElement = ({transaction}: Props) => {
  const TransactionTypeIcon = resolveTransactionTypeIcon(transaction.type);
  const CardTypeIcon = resolveCardTypeIcon(transaction.cardType);
  const resultText = transaction.isSuccess ? 'Cobro exitoso' : 'Cobro no realizado';
  const cardNumber = createMockCardNumber(transaction.cardNumbers);
  return (
    <tr className='transaction-container'>
      <td>{TransactionTypeIcon} {resultText}</td>
      <td>{`${formatDateDay(transaction.date)} - ${formatDateHour(transaction.date)}`}</td>
      <td>{CardTypeIcon} {cardNumber} </td>
      <td>{transaction.id}</td>
      <td>{formatNumberToCurrency(transaction.amount)}</td>
    </tr>
  )
}

export default TransactionElement
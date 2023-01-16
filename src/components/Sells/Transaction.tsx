import React, { Fragment } from 'react'
import { Transaction } from '../../types'
import { createMockCardNumber, formatDateDay, formatDateHour, formatNumberToCurrency, resolveCardTypeIcon, resolveTransactionTypeIcon } from '../../util'
interface Props {
  transaction: Transaction
}
const TransactionElement = ({transaction}: Props) => {
  const TransactionTypeIcon = resolveTransactionTypeIcon(transaction.type);
  const CardTypeIcon = resolveCardTypeIcon(transaction.cardType);
  const resultText = transaction.isSuccess ? 'Cobro exitoso' : 'Cobro no realizado';
  const style = transaction.isSuccess ? 'dark' : 'light';
  const cardNumber = createMockCardNumber(transaction.cardNumbers);
  return (
    <Fragment>
    <tr className='transaction-container'>
      <td className={`transaction-type-cell-${style}`}><p className='transaction-type' title={transaction.type}>{TransactionTypeIcon} {resultText}</p></td>
      <td><p>{`${formatDateDay(transaction.date)} - ${formatDateHour(transaction.date)}`}</p></td>
      <td><p title={transaction.cardType}>{CardTypeIcon} {cardNumber}</p></td>
      <td><p>{transaction.id}</p></td>
      <td>
        <p className='amount-cell'>{formatNumberToCurrency(transaction.amount)}</p>
        { transaction.isSuccess && (
          <section className='extra-info'>
            <p className='extra-info-text'>Deducción Bold</p>
            <span className='extra-info-amount'>{`-${formatNumberToCurrency(1500)}`}</span>
          </section>
        )}
      </td>
    </tr>
    <tr>
      <td colSpan={5} className='line-separator'/>
    </tr>
    </Fragment>
  )
}

export default TransactionElement
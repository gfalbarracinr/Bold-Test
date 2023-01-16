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
      <td className={`transaction-cell transaction-type-cell-${style}`}>
        <h2 className='transaction-title'>Transacción: </h2>
        <p className='transaction-type' title={transaction.type}>{TransactionTypeIcon} {resultText}</p>
      </td>
      <td className='transaction-cell'>
        <h2 className='transaction-title'>Fecha y Hora: </h2>
        <p>{`${formatDateDay(transaction.date)} - ${formatDateHour(transaction.date)}`}</p>
      </td>
      <td className='transaction-cell'>
        <h2 className='transaction-title'>Método de pago: </h2>
        <p title={transaction.cardType}>{CardTypeIcon} {cardNumber}</p>
      </td>
      <td className='transaction-cell'>
        <h2 className='transaction-title'>ID transacción Bold: </h2>
        <p>{transaction.id}</p>
      </td>
      <td className='transaction-cell'>
        <h2 className='transaction-title'>Monto: </h2>
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
      <td colSpan={5}/>
    </tr>
    <hr className={`line-separator line-${style}`}></hr>
    </Fragment>
  )
}

export default TransactionElement
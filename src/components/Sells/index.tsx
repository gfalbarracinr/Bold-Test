import React, { useState } from 'react'
import { CardType, FilterType, Transaction, TransactionType } from '../../types'
import {getFilterTitle } from '../../util'
import './sells.css';
import TransactionElement from './Transaction';
interface Props {
  filter: FilterType
}
const transactionDemo: Transaction[] = [
{
  amount: 15000,
  cardNumbers: 7711,
  cardType: CardType.MASTERCARD,
  date: new Date(),
  id: 'GZEN23784UBH1',
  isSuccess: true,
  type: TransactionType.TERMINAL
},
{
  amount: 10000,
  cardNumbers: 7711,
  cardType: CardType.VISA,
  date: new Date(),
  id: 'GZEN23784UBV2',
  isSuccess: false,
  type: TransactionType.TERMINAL
},
{
  amount: 25000,
  cardNumbers: 7711,
  cardType: CardType.MASTERCARD,
  date: new Date(),
  id: 'GZEN23784UBF6',
  isSuccess: true,
  type: TransactionType.LINK
}
]
const Sells = ({filter}: Props) => {
  const [transactions, setTransactions] = useState<Transaction[]>(transactionDemo);
  return (
    <main className='container'>
      <section className='sells-title-container'>
        <h1 className='sells-title'>Tus ventas de {getFilterTitle(filter, new Date())}</h1>
      </section>
      <table className='sells-table'>
        <thead className='table-header'>
          <tr className='table-header-container'>
            <th className='table-header-title'><p className='table-header-transaction'>Transacción</p></th>
            <th className='table-header-title'><p>Fecha y hora</p></th>
            <th className='table-header-title'><p>Método de pago</p></th>
            <th className='table-header-title'><p>ID transacción Bold</p></th>
            <th className='table-header-title'><p>Monto</p></th>
          </tr>
          <tr>
            <th className='line-separator'/>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction) => <TransactionElement key={transaction.id} transaction={transaction}/>)
            
          }
        </tbody>
      </table>
    </main>
  )
}

export default Sells
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'
// comment 3

export const TransactionsList = () => {
  //vvvvvvvvvv
  //tttttttt
  const { transactions } = useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {

          return (
            <Transaction key={transaction.id} transaction={transaction} />
          )
        })}
      </ul>
    </div>
  )
}

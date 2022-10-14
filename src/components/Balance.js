import React, { useContext } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState'

export const Balance = () => {

<<<<<<< HEAD
=======
    //comment to check changes2
>>>>>>> new_branch
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map((transaction) => transaction.amount)
    console.log(amounts)

    const total = amounts.reduce((acc, item) => acc = acc + item, 0).toFixed(2)
    return (
        <div className=''>
            <h4>Your Balance</h4>

            <h1>${total}</h1>
        </div>
    )
}

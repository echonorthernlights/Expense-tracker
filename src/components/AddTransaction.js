import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {
const [text, setText] = useState('')
const [amount, setAmount] = useState(0)
const handleChange = (e)=>{
    if(e.target.name==="text"){
        setText(e.target.value)
    }else if(e.target.name === "amount"){
        setAmount(e.target.value)
    }
}
const {addTransaction} = useContext(GlobalContext)
const handleClick = (e) => {
    e.preventDefault()
    const newTransaction = {
        id : Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
    }
    addTransaction(newTransaction)
    
}
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={handleClick}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" name="text" placeholder="Enter text..." value={text} onChange={handleChange}/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" name="amount" placeholder="Enter amount..."  value={amount} onChange={handleChange}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

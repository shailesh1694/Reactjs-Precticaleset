import React, { useState } from 'react'


export default function Post(props) {
  const [titel, setTitel] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('')

  const submitdetailes = (e) => {
    e.preventDefault();
    const obj = { titel, amount, date }
    console.log(obj);
    fetch("http://localhost:3000/user", {
      method: 'POST',
      body: JSON.stringify(obj), headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      }

    }).then((response) => response.json().then((results) => { console.log(results); props.fetchdata() }))
    setTitel("");
    setAmount('');
    setDate('');
  }


  return (
    <>
      <form onSubmit={submitdetailes}>

        <input type="text" name='titel' onChange={(e) => setTitel(e.target.value)} value={titel} placeholder="Enter Expense" style={{ padding: "6px", margin: "5px" }}/>

        <input type="number" name='amount' onChange={(e) => setAmount(e.target.value)} value={amount} placeholder=" Enter Amount" style={{ padding: "6px", margin: "5px" }}/>

        <input type="date" name='date' onChange={(e) => setDate(e.target.value)} value={date}  style={{ padding: "6px", margin: "5px" }} />
        <button style={{ padding: "6px", margin: "5px" }}>AddExpense</button>
      </form>

    </>
  )
}

import React, { useEffect, useState } from "react";
import Post from "./Post";


const GET = () => {
    const [getdata, setGetdata] = useState([])
    const [titel, setTitel] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('')
  const [userId, setUserId] = useState(null)


    const fetchdata = () => {
        fetch("http://localhost:3000/user")
            .then((response) => { return response.json() })
            .then((results) => {
                console.log(results);
                setGetdata(results);
                setTitel(results[0].titel);
                setAmount(results[0].amount);
                setDate(results[0].date);
                setUserId(results[0].id);
            })
    }


    const deletexpense = (id) => {
        console.log(getdata);
        console.log(id);
        fetch(`http://localhost:3000/user/${id}`, { method: "DELETE" }).then((response) => { return response.json() }).then((result) => {
            console.log(result);
           
            fetchdata();
        })

    }






    useEffect(() => {
        fetchdata();
    }, []);

    const Updateexpense=(id,i)=>{  // id comes from map function which start 0 so we get -1
        console.log(id,i);
        const value= getdata[i];
        console.log(value);
        setTitel(value.titel);
        setAmount(value.amount);
        setDate(value.date);
        setUserId(value.id);
        
    }
     function updateHandler (){
         console.log({ titel, amount, date });
         const update = { titel, amount, date };
         console.log({ titel, amount, date, userId });
         fetch(`http://localhost:3000/user/${userId}`, {
             method: 'PUT',
             body: JSON.stringify(update), headers: {
                 'Accept': "application/json",
                 'Content-Type': "application/json"
             }

         }).then((response) => response.json().then((results) => { console.log(results); fetchdata(); }))

         
        }
      
        
          
        




    return (
        <>
            <h4>Add Expense</h4>
            <Post fetchdata={fetchdata} /> <br /> <br></br>
            <h4>Update Expense</h4>

            <div>
                <input type="text" style={{ padding: "6px", margin: "5px" }}  value={titel}  onChange={(e)=>{setTitel(e.target.value)}}/>
                <input type="number" style={{ padding: "6px", margin: "5px" }} value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                <input type="date" style={{ padding: "6px", margin: "5px" }} value={date} onChange={(e)=>{setDate(e.target.value)}} />
                <button style={{padding:"6px",margin:"5px"}} onClick={updateHandler}> UpdateAbove </button>
            </div> <br />
            <h4>List of Expense</h4>

                

            <table border='2px'>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>DeletRecord</th>
                        <th>UpdateExpens</th>
                    </tr>


                    {
                        getdata.map((item, i) => {
                            return (<tr key={item.id}>
                                <td>{i+1}</td>
                                <td>{item.titel}</td>
                                <td>{item.amount}</td>
                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                <td><button onClick={() => { deletexpense(item.id) }}>DeletExpenses</button></td>
                                <td><button onClick={() => { Updateexpense(item.id,i) }}>UpdateExpenses</button></td>

                            </tr>)
                        })
                    }
                    
                </tbody>
            </table>
        </>
    );
}








export default GET;
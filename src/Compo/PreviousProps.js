import React,{useState} from 'react'
import User from './User'

export default function PreviousProps() {

        const [count, setCount] = useState(0)



  return (
    <div>
        <h3>PreviousProps</h3>
        <User count={count} />
        <button onClick={()=>{setCount(Math.floor(Math.random()*10))}}>CounterUpdate</button>
    
    </div>
  )
}

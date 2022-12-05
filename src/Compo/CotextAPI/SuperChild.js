import React, { useContext } from 'react'
import { Context } from './Chidl1'

export default function SuperChild() {

const{name,age,getDay,Dummy}=useContext(Context)

let day = {day:"TuesDay",date:"2022-11-14",name:name}
  return (
    <div><h1>SuperChild</h1>
    <h1>{name}</h1>
    <h1>{age}</h1><br/>
    <button onClick={()=>{getDay(day)}}>SentDayToParent</button>
    <Dummy />
    </div>
    
  )
}

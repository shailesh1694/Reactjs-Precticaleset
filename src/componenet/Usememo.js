import React, { useMemo, useState } from 'react'

export default function Usememo() {

        const[count,setCount]=useState(0);
        const[item,setItem]=useState(100);
const usememomulticount= useMemo(()=>{console.log('usememo'); return count*.5;},[count]);

// function multicount(){
//   console.log("multicount");
//   return count*.5;
// }
  return (
    <div>
        <h1>Usememo Hook In React Js</h1>
        <h2>count: {count}</h2><h2>item :{item}</h2>
        {/* <h2>{multicount()}</h2>  <p> here function call avery time to update item  </p>      */}
        <h2>{usememomulticount}</h2>
        <button onClick={()=>{setCount(count+1)}}> UpdateCount</button>
        <button onClick={()=>{setItem(item*1.5)}}> UpdateItem</button>

        


    
    
    </div>
  )
}



// here multicount() render every state update so we press countbutton its called but also call when updateitme also called function its decrese performance so we can use usememo hook 
// usememo used to prevent unwanted function call in js

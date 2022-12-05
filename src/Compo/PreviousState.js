import React, { useState } from 'react'

export default function PreviousState() {



const [count,setCounter]=useState(0);
function updatecounter(){
 let rand = Math.ceil(Math.random()*10);  //how can check previsous value in conter ?? it cand check using state 
//  setCounter((prev)=>{
//     console.log(prev);
//     // return rand;

//     // if(prev-rand>5){alert("topup");}
//     // return rand;
//     if(prev<5){return alert("low value")}else{ return rand;}
//  });             
for(let i=0;i<3;i++){
    console.log(i)
    // setCounter(count+1);         
    setCounter((prev)=> prev +1);


}
    //here loop ran five time so we click button inclrease five time in onclick but //show test result  ???? hre not done increase 5 because of loop work fast than setcounter increase 1 only in that case we use previous value to our desire out pu 
                                                                      
                                                                      
}
 
 
 
 
  return (
    <div>
        <h3>PreviousState</h3>
        <span>Counter: {count}</span><br />
        <button onClick={updatecounter}>UpdateCounter</button>


    </div>
  )
}

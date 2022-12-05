import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Filter() {
  
  const [serchparam,setSearchParam]=useSearchParams();
  const[apicountry,setApicountry]=useState();
// console.log(useSearchParams());      give object so take as blank object
  
 const age=serchparam.get("age");
 const country=serchparam.get("country");                                                                                                                         
  return (
    <div>
      <h1> This is Filter's Page</h1><br></br>
      <h4>Age is: {age}</h4>
      <h4>Country is: {country}</h4><br></br>
      {/* <input type="text" onChange={(event)=>{setApicountry(event.target.value)}}></input><br></br><br></br>
      <button onClick={()=>{setSearchParam({country:apicountry})}} > AgeSetQuerySerchBar </button> */}
      <br></br>
      <button onClick={()=>{setSearchParam({country:'us',age:"100"})}}>US</button><button onClick={()=>{setSearchParam({country:'in',age:"71"})}}>IN</button>
      </div>
  )
}

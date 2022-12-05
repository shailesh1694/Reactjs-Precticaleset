import React, { useContext } from 'react'
import { Context } from './Chidl1'



export default function Child12 () {
  const {appcolor,name,age}=useContext(Context);
  // console.log(useContext());
  return (
    <div>
        <h1 style={{color:appcolor}}>Hello Child12</h1>
        
        

        
    </div>
  )
}

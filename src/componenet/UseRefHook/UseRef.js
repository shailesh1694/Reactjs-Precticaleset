import React,{useRef, useState} from 'react'
import Forwardref from './forwardref';

export default function UseRef() {

        // const inputref= useRef(0);
        
        // const handleinput =()=>{
        //   console.log("UseRef"); 
        //   inputref.current.value='shailesh';
        //   inputref.current.focus();
        //   inputref.current.style.color= "red";
        //   inputref.current.style.display="none";
        // }
        // console.log(inputref);
        const[count,setCount]=useState(0);
             
            const childref= useRef(null);
           const updatechildinput=()=>{
            setCount(count+1)
            childref.current.value=count;
           }
            

  return (
    <>
    <h1>UseRef</h1>
    {/* <input type='text' ref={inputref}  /> 
    
     <button  onClick={handleinput}>UseRefUpdate</button>  */}

    <Forwardref ref={childref} />
    <button onClick={updatechildinput}>UpdateInputboxOfChild</button>

    </>
  )
}

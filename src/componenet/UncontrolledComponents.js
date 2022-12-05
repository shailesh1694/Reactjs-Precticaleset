import React,{useRef} from 'react'

export default function UncontrolledComponents() {


        const submithandler=(event)=>{
                    event.preventDefault();
                    console.log("input field 1 value :",inputref1.current.value);
                    console.log("input field 2 value :",inputref2.current.value);
                    let input3 = document.getElementById("input").value;
                    console.log("input field 3 value :",input3);
        }

const inputref1= useRef(null);
const inputref2= useRef(null);







  return (
    <div>
        <h1>UncontrolledComponents</h1>
            <form onSubmit={submithandler}>
                <input type="text" ref={inputref1}/> <br /><br />
                <input type="text"  ref={inputref2}/> <br /><br />
                <input id='input' type="text" /> <br /><br />

                <button   >Submit</button>
                
                
                
                </form>    
        
    </div>
  )
}

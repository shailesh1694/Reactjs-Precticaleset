
import React, { useRef, useState } from "react";


const UseRef=()  => {
   //useRef no rerender our components  tergetn input pass "ref" atribute
    const luckname = useRef(null);
            const[view,setView]=useState("Display");

const submitform=(e)=>{
    e.preventDefault();
    console.log(luckname.current.value);
    luckname.current.value === ""?alert('inputField'): setView(luckname.current.value)
    
}






return(
    <div className="text-center position absolute " >
        <div className="position-absolute top-50 start-50 translate-middle">
        <form className="form-control" onSubmit={submitform} style={{height:"300px",width:"500px"}}>


            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Display</button>
                <input type="text" className="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1"  ref={luckname} /> 
                </div>
                <h1 className="display-6">{view ? view:""}</h1>
             
                  </form>
    </div>
    </div>
);


}

export default UseRef;
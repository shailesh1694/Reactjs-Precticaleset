import React, { useState } from "react";
import ShoData from "./ShowData";

const BasicForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allEntry, setallEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();

    if(email && password){
    const newentry = {id:new Date().getTime().toString(),email,password };
    console.log(newentry);
    setallEntry([...allEntry,newentry]);
    setemail('');
    setpassword('');
  }else{alert("Fill Email & Password!");} 
} 

  return (
    <div className="container my-5 ">
      
        <form onSubmit={submitform}>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
           
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div >
            {
            allEntry.map((current)=>{ 
              
                return (
                  <ShoData email={current.email} password={current.password} key={current.id} />
                  )})
                }
                  




                
                
                
                
            
                       
        </div>
      </div>
    
  );
};

export default BasicForm;

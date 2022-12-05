


import React, { useState } from "react";
import ShoData from "./ShowData";





const Multipale =() =>{

const[userRegitration,setuserRegistration]=useState({
                        username:"",
                        email:"",
                        mobile:"",
                        password:""
                      });


  const inputHandler=(e)=>{
      const name=e.target.name;
      const value= e.target.value;
      setuserRegistration({...userRegitration,[name]:value});
      console.log(name,value);
    }
    const[record,setrecord]=useState([]);
    const handleInput=(e)=>{
      e.preventDefault();

      const newRecord= {...userRegitration,id:new Date().getTime().toString()}
      setrecord([...record,newRecord]);
      console.log(newRecord);
      setuserRegistration(
        {username:"",
      email:"",
      mobile:"",
      password:""});
    }



     







    return (
    <>
   
        <div className="container my-3">
    <form onSubmit={handleInput} className="form-control" >
          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={userRegitration.username}
              onChange={inputHandler}
            />
            
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={userRegitration.email}
              
              onChange={inputHandler}
            />
            
          </div>
          <div className="mb-3">
            <label className="form-label">
             Mobile
            </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              value={userRegitration.mobile}
              onChange={inputHandler}
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
              value={userRegitration.password}
             
              onChange={inputHandler}
            />
           
          </div>

          <button type="submit" className="btn btn-primary">
           Register
          </button>
        </form>
        <div>
        {
            record.map((current)=>{ 
              
                return (
                  <ShoData email={current.email} password={current.password} key={current.id} username={current.username} phone={current.phone} />
                  )})
                }
        </div>
        </div>
    

   
    
    </>
    );
 }







 export default Multipale;
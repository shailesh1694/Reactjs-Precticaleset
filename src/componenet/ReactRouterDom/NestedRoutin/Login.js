import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
  

const login=(e)=>{
   
    localStorage.setItem("login",true);
    navigate("/");
}

const navigate= useNavigate();
useEffect(()=>{
  
    let login= localStorage.getItem('login');
    if(login){
navigate("/");
}

});



  return (
    <div>
    <h1>Login</h1> <br />
    <input type="text" /><br /> <br />
    <input type="text" autoComplete='disable'/> <br /><br />
       
     <button type='submit' onClick={login}>logIn</button><br /><br />
    

     
     </div>
  )
}

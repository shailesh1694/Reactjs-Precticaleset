import React, { useEffect } from 'react'
import {Link,useNavigate,useLocation} from'react-router-dom';

export default function Home() {

 
 
  const location= useLocation();
  console.log(location);
  console.log(location.search);

    const navigate= useNavigate();
    console.log(navigate);

    const navTopage=(x)=>{
      // let x =false;          direct also work and here show conditional routing
      // if(x){ navigate('/about');}else{navigate('/filter')}
     
        navigate(x);
    }
  

    const logout =()=>{
       localStorage.removeItem("login");
      navigate("/login");

    }
    useEffect(()=>{
      let logout= localStorage.getItem('login');
      if(!logout){
        navigate("/login");
      }
    });
    
  return (
    <div>
        <h1>Home Page</h1>
        <Link to="/about" >Go To About Page</Link> <br /> <br /> 
        {/* <button onClick={()=>{navTopage()}}>Go To About Page</button><br /><br />
        <button onClick={()=>{navTopage()}}>Go To Home Page</button>
 */}
        {/* second method of navigation is below show  in this method direct pass url and cath navTopage in parameter in x  */}
        <button onClick={()=>{navTopage('/about')}}>Go To About Page</button><br /><br />
        <button onClick={()=>{navTopage('/filter')}}>Go To Home Page</button> <br /> <br />
        <button onClick={logout} >Logout</button>

    </div>
  )
}

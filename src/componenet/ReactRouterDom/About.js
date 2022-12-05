import React from 'react'
import {Link,useLocation} from "react-router-dom";

export default function About() {

  // const location= useLocation();
  // console.log(location);
  // let obj =location.state;
  // let{name,age}=obj;
  // console.log(name);
  // console.log(age);
  return (
    <div>
        <h1>About Page</h1>
        <Link to="/"  >Go To Home Page</Link><br></br>
        <Link to='/user/anil' >Anil</Link><br></br>
        <Link to='/user/peter'>Peter</Link>
    </div>
  )
}

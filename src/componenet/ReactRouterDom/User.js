import React from 'react'
import {useParams,Link,useLocation} from "react-router-dom";

export default function User() {
  const location= useLocation();
  console.log(location);
  console.log(location.state);

//paramHook
    const param = useParams({});
    
    console.log(param);
    const {name}=param;
  return (
    <div>
       <h1>This is User {name}'s Page</h1> 
       
       
        </div>
  )
}
